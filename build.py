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
