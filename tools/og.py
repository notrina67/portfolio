"""Capture static/og.png (link preview) from a local server on :8787."""
from playwright.sync_api import sync_playwright
from PIL import Image
import sys
W, H = (int(x) for x in (sys.argv[1:3] if len(sys.argv) > 2 else (1200, 630)))
with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome')
    pg = b.new_page(viewport={'width': W, 'height': H}, device_scale_factor=1200 / W)
    pg.goto('http://127.0.0.1:8787/'); pg.wait_for_timeout(5000)
    pg.add_style_tag(content='*{animation-play-state:paused!important}.enter-hint,.credits,.socials{visibility:hidden!important}')
    pg.evaluate("document.querySelectorAll('.toggle-btn').forEach(b=>{(b.closest('.bub-pos')||b).style.visibility='hidden'})")
    pg.wait_for_timeout(300)
    pg.screenshot(path='/tmp/og_raw.png')
    b.close()
Image.open('/tmp/og_raw.png').convert('RGB').resize((1200, 630), Image.LANCZOS).save('static/og.png', optimize=True)
print('ok')
