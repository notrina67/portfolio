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
# Static files (link preview image, robots, sitemap)
STATIC = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
for f in os.listdir(STATIC):
    shutil.copyfile(os.path.join(STATIC, f), os.path.join(OUT, f))
shutil.copyfile(os.path.join(os.path.dirname(__file__), 'node_modules/preact/dist/preact.min.umd.js'), os.path.join(OUT, 'preact.js'))
rt = open(os.path.join(os.path.dirname(__file__), 'src/runtime.js'), encoding='utf-8').read()
app = '(function(){\n' + code + '\nDCMount(Component, ' + json.dumps(props) + ');\n})();\n'
open(os.path.join(OUT, 'app.js'), 'w', encoding='utf-8').write(app)
open(os.path.join(OUT, 'runtime.js'), 'w', encoding='utf-8').write(rt)
v = hashlib.sha1((rt + app).encode()).hexdigest()[:8]

noscript = '''<noscript><main style="font-family:system-ui,sans-serif;max-width:640px;margin:40px auto;padding:0 20px">
<h1>Chloe Le</h1><p>Designer and visual development artist working across UI/UX, game art, 3D, graphic design and art direction. Based in Dallas, TX and NYC.</p>
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
<meta property="og:image:alt" content="chloe le portfolio: a photo card surrounded by chat bubbles listing design skills, over a sky with daisies">
<meta name="twitter:image" content="https://chloerui.com/og.png">
<meta name="theme-color" content="#7FB2E5">
<link rel="icon" href="/favicon.ico" sizes="48x48">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
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
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(html)
print('built', len(html), 'bytes; props', props)
