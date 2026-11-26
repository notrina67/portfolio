#!/usr/bin/env python3
"""Build public/ from the canvas's Main.dc.html."""
import json, re, shutil, sys, os, hashlib

SRC = sys.argv[1] if len(sys.argv) > 1 else '/home/claude/canvas/project/Main.dc.html'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'public')
s = open(SRC, encoding='utf-8').read()

head = re.search(r'<head>(.*?)</head>', s, re.S).group(1)
head = re.sub(r'\s*<script src="\./support\.js"></script>', '', head)
xdc = re.search(r'<x-dc>(.*?)</x-dc>', s, re.S).group(1)
helmet = re.search(r'<helmet>(.*?)</helmet>', xdc, re.S).group(1)
tpl = xdc[xdc.index('</helmet>') + len('</helmet>'):]
assert '</template>' not in tpl and '<script' not in tpl
m = re.search(r"<script type=\"text/x-dc\" data-dc-script data-props='(.*?)'>(.*?)</script>", s, re.S)
schema, code = json.loads(m.group(1)), m.group(2)
props = {k: v['default'] for k, v in schema.items() if not k.startswith('$') and 'default' in v}

os.makedirs(OUT, exist_ok=True)
# Icons from the daisy logo
from PIL import Image
LOGO = os.path.join(OUT, '_blob', '3ad73b6355711990dec500b2a9de6198')
logo = Image.open(LOGO).convert('RGBA')
logo.resize((32, 32), Image.LANCZOS).save(os.path.join(OUT, 'favicon-32.png'))
logo.resize((192, 192), Image.LANCZOS).save(os.path.join(OUT, 'icon-192.png'))
logo.save(os.path.join(OUT, 'favicon.ico'), sizes=[(16, 16), (32, 32), (48, 48)])
touch = Image.new('RGBA', (180, 180), (247, 241, 225, 255))
touch.alpha_composite(logo.resize((150, 150), Image.LANCZOS), (15, 15))
touch.convert('RGB').save(os.path.join(OUT, 'apple-touch-icon.png'))
# Lighter display copies of images: WebP at 2x the largest size each image is drawn
# (3x on phones), from tools/measure.py. The full-size viewer keeps the originals.
from PIL import ImageOps
SIZES = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src/imgsizes.json')))
TYPES = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'worker/types.json')))
VDIR = os.path.join(OUT, '_v')
os.makedirs(VDIR, exist_ok=True)
VAR = {}      # blob id -> variant width
VBYTES = {}
BLOB_URL = re.compile(r'url\(\s*([\'"]?)/_blob/([0-9a-f]{32})\1\s*\)')
CSS_IDS = {m.group(2) for t in (head, helmet, tpl) for m in BLOB_URL.finditer(t)}
FULL = CSS_IDS - set(SIZES['need']) - set(SIZES['needMobile'])  # e.g. border-image frames: keep exact pixel size
for bid in set(SIZES['need']) | set(SIZES['needMobile']) | FULL:
    f = os.path.join(OUT, '_blob', bid)
    if TYPES.get(bid) not in ('image/jpeg', 'image/png', 'image/webp') or not os.path.exists(f):
        continue
    im = Image.open(f)
    if getattr(im, 'n_frames', 1) > 1:
        continue
    want = max(SIZES['need'].get(bid, 0) * 2, SIZES['needMobile'].get(bid, 0) * 3)
    w = im.width if bid in FULL else min(im.width, -(-int(want) // 16) * 16)
    out = os.path.join(VDIR, f'{bid}-{w}.webp')
    if not os.path.exists(out):
        icc = im.info.get('icc_profile')
        im = ImageOps.exif_transpose(im)
        if w < im.width:
            im = im.resize((w, max(1, round(im.height * w / im.width))), Image.LANCZOS)
        if im.mode not in ('RGB', 'RGBA'):
            im = im.convert('RGBA' if 'A' in im.getbands() or 'transparency' in im.info else 'RGB')
        kw = {'quality': 82, 'method': 6}
        if icc: kw['icc_profile'] = icc
        im.save(out, 'WEBP', **kw)
    # only use the copy when it is clearly smaller than the original
    if os.path.getsize(out) < os.path.getsize(f) * 0.85:
        VAR[bid] = w
        VBYTES[bid] = os.path.getsize(out)
for fn in os.listdir(VDIR):  # drop stale copies
    bid, _, rest = fn.partition('-')
    if VAR.get(bid) != int(rest.split('.')[0]):
        os.remove(os.path.join(VDIR, fn))
def vurl(bid):
    return f'/_v/{bid}-{VAR[bid]}.webp' if bid in VAR else '/_blob/' + bid
helmet = BLOB_URL.sub(lambda m: 'url(' + vurl(m.group(2)) + ')', helmet)
head = BLOB_URL.sub(lambda m: 'url(' + vurl(m.group(2)) + ')', head)
tpl = BLOB_URL.sub(lambda m: 'url(' + vurl(m.group(2)) + ')', tpl)
print('image copies:', len(VAR), 'images,', round(sum(VBYTES.values()) / 1e6, 1), 'MB vs',
      round(sum(os.path.getsize(os.path.join(OUT, '_blob', b)) for b in VAR) / 1e6, 1), 'MB originals')

def preloads(path):
    """<link rel=preload> for the largest images visible before scrolling on this page."""
    t = SIZES['top'].get(path, {})
    d, m = set(t.get('d', [])), set(t.get('m', []))
    big = lambda ids: sorted((b for b in ids if VBYTES.get(b, os.path.getsize(os.path.join(OUT, '_blob', b)) if os.path.exists(os.path.join(OUT, '_blob', b)) else 0) > 15000),
                             key=lambda b: -VBYTES.get(b, 0))[:5]
    d, m = set(big(d)), set(big(m))
    out = []
    for b in sorted(d | m):
        media = '' if (b in d and b in m) else (' media="(min-width:701px)"' if b in d else ' media="(max-width:700px)"')
        out.append(f'<link rel="preload" as="image" href="{vurl(b)}" fetchpriority="high"{media}>')
    return '\n'.join(out)

# Static files (link preview image, robots, sitemap)
STATIC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
for f in os.listdir(STATIC):
    shutil.copyfile(os.path.join(STATIC, f), os.path.join(OUT, f))
shutil.copyfile(os.path.join(os.path.dirname(__file__), 'node_modules/preact/dist/preact.min.umd.js'), os.path.join(OUT, 'preact.js'))
rt = open(os.path.join(os.path.dirname(__file__), 'src/runtime.js'), encoding='utf-8').read()
ROUTES = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src/routes.json')))
PROJ = json.loads(re.search(r'const PROJ = (\[.*?\]);\n', s, re.S).group(1))
TITLES = {p['k']: p['title'] for p in PROJ}
router = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'src/router.js'), encoding='utf-8').read()
app = ('(function(){\n' + code + '\n' + router + '\nDCMount(makeRouted(Component, ' + json.dumps(ROUTES) + ', '
       + json.dumps(TITLES) + '), ' + json.dumps(props) + ');\n})();\n')
open(os.path.join(OUT, 'app.js'), 'w', encoding='utf-8').write(app)
rt = 'window.DC_IMG=' + json.dumps(VAR, separators=(',', ':')) + ';\n' + rt
open(os.path.join(OUT, 'runtime.js'), 'w', encoding='utf-8').write(rt)
v = hashlib.sha1((rt + app).encode()).hexdigest()[:8]

noscript = '''<noscript><main style="font-family:system-ui,sans-serif;max-width:640px;margin:40px auto;padding:0 20px">
<h1>Chloe Le</h1><p>Designer and visual development artist working across UI/UX, front-end development, game art, 3D, graphic design and art direction. Based in Dallas, TX and NYC.</p>
<p>This portfolio needs JavaScript. You can also find Chloe on <a href="https://www.linkedin.com/in/chlo-le">LinkedIn</a>.</p></main></noscript>'''

html = f'''<!doctype html>
<html lang="en">
<head>{head.rstrip()}
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:url" content="https://chloerui.com/">
<meta property="og:site_name" content="chloe le">
<meta property="og:image" content="https://chloerui.com/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="chloe le portfolio landing page">
<meta name="twitter:image" content="https://chloerui.com/og.png">
<meta name="theme-color" content="#7FB2E5">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<!--preloads-->
{helmet.strip()}
</head>
<body>
<div id="app"></div>
{noscript}
<template id="dc-tpl">{tpl}</template>
<script src="/preact.js"></script>
<script src="/runtime.js?v={v}"></script>
<script src="/app.js?v={v}"></script>
</body>
</html>
'''
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(html.replace('<!--preloads-->', preloads('/')))

# One HTML file per route, with its own title, description and link preview.
import html as H
def page_for(path, title, desc, og_title):
    url = 'https://chloerui.com' + path
    h = html.replace('<!--preloads-->', preloads(path))
    h = re.sub(r'<title>[^<]*</title>', '<title>' + H.escape(title) + '</title>', h, count=1)
    h = re.sub(r'(<meta name="description" content=")[^"]*', lambda m: m.group(1) + H.escape(desc), h, count=1)
    h = re.sub(r'(<meta property="og:title" content=")[^"]*', lambda m: m.group(1) + H.escape(og_title), h, count=1)
    h = re.sub(r'(<meta property="og:description" content=")[^"]*', lambda m: m.group(1) + H.escape(desc), h, count=1)
    h = re.sub(r'(<meta property="og:url" content=")[^"]*', lambda m: m.group(1) + url, h, count=1)
    h = re.sub(r'(<link rel="canonical" href=")[^"]*', lambda m: m.group(1) + url, h, count=1)
    d = os.path.join(OUT, path.strip('/'))
    if os.path.isdir(d): shutil.rmtree(d)
    open(d + '.html', 'w', encoding='utf-8').write(h)
    return url
urls = ['https://chloerui.com/']
VIEW_META = {'work': ('Work | Chloe Le', 'Selected design, front-end development, game art, 3D and visual development work by Chloe Le.', 'chloe le | work'),
             'personal': ('Personal work | Chloe Le', 'Illustration, motion graphics, photography and other personal work by Chloe Le.', 'chloe le | personal'),
             'about': ('About + resume | Chloe Le', 'About Chloe Le, designer and visual development artist based in Dallas, TX and NYC: experience, skills and resume.', 'chloe le | about + resume'),
             'archive': ('Archive | Chloe Le', 'Archive of older work by Chloe Le.', 'chloe le | archive')}
for v, path in ROUTES['views'].items():
    t, d, o = VIEW_META[v]
    u = page_for(path, t, d, o)
    if v != 'archive': urls.append(u)
for p in PROJ:
    slug = ROUTES['projects'].get(p['k'])
    if not slug: continue
    desc = p.get('tag') or (p['title'] + ' by Chloe Le.')
    urls.append(page_for('/' + slug, p['title'] + ' | Chloe Le', desc, 'chloe le | ' + p['title'].lower()))
sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
sm += ['  <url><loc>' + u + '</loc></url>' for u in urls] + ['</urlset>', '']
open(os.path.join(OUT, 'sitemap.xml'), 'w').write('\n'.join(sm))
missing = [p['k'] for p in PROJ if p['k'] not in ROUTES['projects']]
if missing: print('WARNING: projects without a URL:', missing)
print('built', len(html), 'bytes; props', props)
