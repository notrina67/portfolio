#!/usr/bin/env python3
"""Measure how large each /_blob image is drawn on every page, at several screen sizes.

Run against a local build (python3 /tmp/serve.py on 127.0.0.1:8787). Writes src/imgsizes.json:
  {"need": {blob_id: css_px_needed_desktop, ...}, "needMobile": {...}, "top": {route: {"d": [ids], "m": [ids]}}}
"need" is the widest the image is ever drawn (allowing for cover-cropping), in CSS pixels.
"top" lists the images visible before scrolling, used for preloading.
"""
import asyncio, json, os, sys
from playwright.async_api import async_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else 'http://127.0.0.1:8787'
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROUTES = json.load(open(os.path.join(ROOT, 'src/routes.json')))
PATHS = ['/'] + [p for k, p in ROUTES['views'].items() if k != 'archive'] + ['/' + s for s in ROUTES['projects'].values()]
VIEWPORTS = {'d': [(1440, 900), (1920, 1080), (1280, 720)], 'm': [(390, 844), (430, 932)]}

JS = r"""() => {
  const out = [], vh = innerHeight, vw = innerWidth;
  const idOf = (s) => { const m = (s || '').match(/\/_blob\/([0-9a-f]{32})/g); return m ? m.map(x => x.slice(7)) : []; };
  const push = (ids, el, r, kind) => { for (const id of ids) out.push([id, r.width, r.height, r.top < vh && r.bottom > 0 && r.left < vw && r.right > 0 && r.width > 1, kind]); };
  for (const el of document.querySelectorAll('*')) {
    const r = el.getBoundingClientRect();
    if (r.width < 1 && r.height < 1) continue;
    if (el.tagName === 'IMG') { if (!el.classList.contains('lb-img')) push(idOf(el.getAttribute('src')), el, r, 'img'); }
    if (el.tagName === 'VIDEO') push(idOf(el.getAttribute('poster')), el, r, 'poster');
    for (const ps of [null, '::before', '::after']) {
      const bg = getComputedStyle(el, ps).backgroundImage;
      if (bg && bg !== 'none') push(idOf(bg), el, r, 'bg');
    }
  }
  return out;
}"""

async def main():
    need = {'d': {}, 'm': {}}
    top = {}
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for kind, vps in VIEWPORTS.items():
            for (w, h) in vps:
                pg = await b.new_page(viewport={'width': w, 'height': h})
                for path in PATHS:
                    await pg.goto(BASE + path)
                    await pg.wait_for_timeout(1200)
                    first = await pg.evaluate(JS)
                    if (w, h) == vps[0]:
                        top.setdefault(path, {})[kind] = sorted({x[0] for x in first if x[3] and x[4] != 'poster'})
                    rows = list(first)
                    # scroll through so scroll-driven states render too
                    H = await pg.evaluate('document.documentElement.scrollHeight')
                    y = 0
                    while y < H:
                        y += h * 0.8
                        await pg.evaluate(f'window.scrollTo(0,{y})')
                        await pg.wait_for_timeout(120)
                        rows += await pg.evaluate(JS)
                    for bid, rw, rh, _, k in rows:
                        need[kind].setdefault(bid, [0, 0, set()])
                        e = need[kind][bid]
                        e[0] = max(e[0], rw); e[1] = max(e[1], rh); e[2].add(k)
                        e.append((rw, rh))
                await pg.close()
        await b.close()
    res = {'need': {}, 'needMobile': {}, 'top': top}
    from PIL import Image
    for kind, key in (('d', 'need'), ('m', 'needMobile')):
        for bid, e in need[kind].items():
            f = os.path.join(ROOT, 'public/_blob', bid)
            try:
                W, H = Image.open(f).size
            except Exception:
                continue
            # widest drawn width, allowing the image to be cropped to cover its box
            res[key][bid] = round(max(max(rw, rh * W / H) for rw, rh in e[3:]))
    json.dump(res, open(os.path.join(ROOT, 'src/imgsizes.json'), 'w'), indent=0, sort_keys=True)
    print('measured', len(res['need']), 'desktop /', len(res['needMobile']), 'mobile images on', len(PATHS), 'pages')

asyncio.run(main())
