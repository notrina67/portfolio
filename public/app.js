(function(){

const ARCH_DATA = {"s":"M+pyeOE+lgYnLTK/MdyADg==","i":"3KC9dVvUg8lpPs6V","c":"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"};
class Component extends DCLogic {
async unlockArchive() {
const el = document.getElementById('arch-pw'); const pw = el ? el.value : '';
if (!pw) { this.setState({ archErr: 'Enter the password' }); return; }
this.setState({ archBusy: true, archErr: '' });
try {
const A = ARCH_DATA; const b = (x) => Uint8Array.from(atob(x), (ch) => ch.charCodeAt(0));
const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pw), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: b(A.s), iterations: 250000, hash: 'SHA-256' }, base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
const pt = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: b(A.i) }, key, b(A.c));
this.setState({ arch: JSON.parse(new TextDecoder().decode(pt)), archBusy: false, archErr: '' });
} catch (e) { this.setState({ archBusy: false, archErr: 'That password didn’t work' }); if (el) { el.value = ''; el.focus(); } }
}
syncHint() { try {
const h = document.querySelector('.enter-hint'); if (!h) return;
const bs = [...document.querySelectorAll('.bub-pos')];
bs.forEach((b) => { b.style.translate = ''; });
const r = h.getBoundingClientRect(); if (!r.width) return;
const P = 30, Z = { l: r.left - P, t: r.top - P, r: r.right + P, b: r.bottom + P };
const vw = window.innerWidth, vh = window.innerHeight;
bs.forEach((b) => {
const q = b.getBoundingClientRect();
if (q.right < Z.l || q.left > Z.r || q.bottom < Z.t || q.top > Z.b) return;
const opts = [[-(q.right - Z.l), 0], [Z.r - q.left, 0], [0, -(q.bottom - Z.t)], [0, Z.b - q.top]]
.filter(([dx, dy]) => q.left + dx >= 4 && q.right + dx <= vw - 4 && q.top + dy >= 4 && q.bottom + dy <= vh - 4);
if (!opts.length) return;
opts.sort((a, c) => (Math.abs(a[0]) + Math.abs(a[1]) * 1.3) - (Math.abs(c[0]) + Math.abs(c[1]) * 1.3));
b.style.translate = Math.round(opts[0][0]) + 'px ' + Math.round(opts[0][1]) + 'px';
});
} catch (e) {} }
syncShelves() { try { document.querySelectorAll('.inlay:not(.inlay-m) .inlay-row').forEach((r) => {
const upd = () => { const o = r.scrollWidth - r.clientWidth > 2; r.classList.toggle('ovf-l', o && r.scrollLeft > 2); r.classList.toggle('ovf-r', o && r.scrollLeft < r.scrollWidth - r.clientWidth - 2); };
if (!r.dataset.sh) { r.dataset.sh = '1'; r.addEventListener('scroll', upd, { passive: true });
r.addEventListener('wheel', (e) => { if (r.scrollWidth - r.clientWidth < 3 || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return; const max = r.scrollWidth - r.clientWidth; if ((e.deltaY < 0 && r.scrollLeft <= 0) || (e.deltaY > 0 && r.scrollLeft >= max - 1)) return; e.preventDefault(); r.scrollLeft += e.deltaY; }, { passive: false }); }
upd(); }); } catch (e) {} }
syncVideo() { try { document.querySelectorAll('video.pj-video').forEach((vd) => { if (vd.dataset.s !== vd.getAttribute('src')) { vd.muted = true; vd.defaultMuted = true; vd.loop = true; vd.playsInline = true; vd.setAttribute('playsinline', ''); vd.dataset.s = vd.getAttribute('src'); const pr = vd.play(); if (pr && pr.catch) pr.catch(() => {}); } }); } catch (e) {} }
syncLights() { try {
if (typeof IntersectionObserver === 'undefined') return;
this._lit = this._lit || {};
const apply = (row, on) => { document.querySelectorAll('[data-prow="' + row + '"]').forEach((x) => { if (on) x.setAttribute('data-lit', ''); else x.removeAttribute('data-lit'); }); };
if (!this._io) this._io = new IntersectionObserver((ents) => { ents.forEach((e) => { const el = e.target; const on = e.isIntersecting; const k = el.getAttribute('data-row') || ''; if (k) this._lit[k] = on; if (on) el.setAttribute('data-lit', ''); else el.removeAttribute('data-lit'); if (k && k.charAt(0) !== 'm') apply(k, on); }); }, { rootMargin: '-22% 0px -22% 0px', threshold: 0 });
document.querySelectorAll('.bookcase .inlay').forEach((el, i) => { el.setAttribute('data-row', String(i)); });
document.querySelectorAll('.mstack .inlay-m').forEach((el, i) => { el.setAttribute('data-row', 'm' + i); });
const ba = document.querySelector('.ba-poster.ba-m'); if (ba) ba.setAttribute('data-row', 'mba');
document.querySelectorAll('.bookcase .inlay, .mstack .inlay-m, .ba-poster').forEach((el) => { if (el._ioOn !== this._io) { el._ioOn = this._io; this._io.observe(el); } const k = el.getAttribute('data-row'); if (k && this._lit[k]) { el.setAttribute('data-lit', ''); if (k.charAt(0) !== 'm') apply(k, true); } });
const dim = () => { const on = (window.scrollY || document.documentElement.scrollTop || 0) > 40; document.querySelectorAll('.bookcase, .mstack').forEach((b) => { if (on) b.setAttribute('data-dim', ''); else b.removeAttribute('data-dim'); }); };
if (!this._dimFn) { this._dimFn = dim; window.addEventListener('scroll', dim, { passive: true }); }
dim();
} catch (e) {} }
componentDidMount() {
setTimeout(() => this.syncShelves(), 300); setTimeout(() => this.syncLights(), 350); setTimeout(() => this.syncHint(), 400); setTimeout(() => this.syncHint(), 1600); try { this._hRz = () => this.syncHint(); window.addEventListener('resize', this._hRz); } catch (e) {} setTimeout(() => this.syncShelves(), 1500); try { this._shRz = () => this.syncShelves(); window.addEventListener('resize', this._shRz); } catch (e) {}
setTimeout(() => this.syncVideo(), 300); setTimeout(() => this.syncVideo(), 1500);
this.syncScroll();
const mq = window.matchMedia ? window.matchMedia('(hover: none) and (pointer: coarse)') : null;
this.setState({ touch: !!(mq && mq.matches) });
if (mq && mq.addEventListener) { this.mqh = (e) => this.setState({ touch: e.matches }); mq.addEventListener('change', this.mqh); this.mq = mq; }
const mm = window.matchMedia ? window.matchMedia('(max-width: 700px)') : null;
this.setState({ mobile: !!(mm && mm.matches) });
if (mm && mm.addEventListener) { this.mmh = (e) => this.setState({ mobile: e.matches }); mm.addEventListener('change', this.mmh); this.mm = mm; }
}
componentDidUpdate() {
this.syncScroll(); this.syncShelves(); this.syncLights(); requestAnimationFrame(() => this.syncHint());
const lbNow = !!(this.state && this.state.lb);
if (lbNow && !this._lbWas) { try { const b = document.querySelector('.lb-close'); if (b) b.focus(); } catch (e) {} }
this._lbWas = lbNow;
this.syncVideo();
}
syncScroll() {
try {
const st = this.state || {};
const sp = this.props.start ?? 'landing';
const open = st.open ?? (sp === 'room' || sp === 'personal');
const lock = !open || !!st.leaving;
const lbOn = !!st.lb;
if (this._lbBlk !== lbOn) { if (!this._blk) this._blk = (e) => { e.preventDefault(); }; if (lbOn) { window.addEventListener('wheel', this._blk, { passive: false }); window.addEventListener('touchmove', this._blk, { passive: false }); } else { window.removeEventListener('wheel', this._blk); window.removeEventListener('touchmove', this._blk); } this._lbBlk = lbOn; }
const v = lock ? 'hidden' : 'auto';
if (this._lock !== v) { document.documentElement.style.overflow = v; this._lock = v; }
const bar = document.querySelector('.sticky-bar');
const hh = bar ? bar.offsetHeight : 0;
if (hh && this._hdr !== hh) { document.documentElement.style.setProperty('--hdr', hh + 'px'); this._hdr = hh; }
} catch (e) {}
}
playPop() {
try {
const AC = window.AudioContext || window.webkitAudioContext;
if (!AC) return;
this.ac = this.ac || new AC();
const ac = this.ac;
if (ac.state === 'suspended') ac.resume();
const t = ac.currentTime;
const o = ac.createOscillator();
const g = ac.createGain();
const f = ac.createBiquadFilter();
o.type = 'sine';
o.frequency.setValueAtTime(320, t);
o.frequency.exponentialRampToValueAtTime(1350, t + 0.045);
o.frequency.exponentialRampToValueAtTime(900, t + 0.09);
f.type = 'lowpass';
f.frequency.setValueAtTime(2600, t);
g.gain.setValueAtTime(0.0001, t);
g.gain.exponentialRampToValueAtTime(0.12, t + 0.008);
g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
o.connect(f);
f.connect(g);
g.connect(ac.destination);
o.start(t);
o.stop(t + 0.12);
} catch (e) {}
}
componentWillUnmount() {
try { if (this._io) this._io.disconnect(); if (this._dimFn) window.removeEventListener('scroll', this._dimFn); } catch (e) {}
try { document.documentElement.style.overflow = ''; } catch (e) {} if (this.t) clearTimeout(this.t); if (this.mq && this.mqh) this.mq.removeEventListener('change', this.mqh); if (this.mm && this.mmh) this.mm.removeEventListener('change', this.mmh); if (this.ac && this.ac.close) this.ac.close(); }
renderVals() {
const st = this.state || {};
const start = this.props.start ?? 'landing';
const open = st.open ?? (start === 'room' || start === 'personal' || start === 'about' || start === 'project');
const view = st.view || (start === 'personal' ? 'personal' : start === 'about' ? 'about' : start === 'project' ? 'project' : 'work');
const navTo = (v) => (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ view: v, lb: null, menu: false }); try { window.scrollTo(0, 0); } catch (err) {} };
const openProj = (k) => (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ view: 'project', pk: k, lb: null }); try { window.scrollTo(0, 0); } catch (err) {} };
const leaving = !!st.leaving;
let seed = 5;
const rnd = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
const daisies = [];
const FL = ['/_blob/3ad73b6355711990dec500b2a9de6198', '/_blob/6cbb8de2c307f8402dada1ca4b7c4a57', '/_blob/5cce78ea248af9b188d56cbc94899b62', '/_blob/cf2aa73e0ab98c214d9ef945f3357a25', '/_blob/ad365acfb51a565cdb9304a606e48c10', '/_blob/5550aa1bf5f15556869e2e3d5f5c69bd'];
const pick = (u) => u < 0.68 ? FL[0] : FL[1 + Math.min(4, Math.floor((u - 0.68) / 0.064))];
for (let i = 0; i < 40; i++) {
const depth = rnd();
const s = Math.round(24 + depth * 110);
const rdur = 44 - depth * 20 + rnd() * 8;
daisies.push({ src: pick(rnd()), x: (rnd() * 135 - 4).toFixed(1), s, r: Math.round(rnd() * 360), b: (depth > 0.7 ? (depth - 0.7) * 22 : depth < 0.2 ? 1.2 : 0).toFixed(1), o: (0.75 + depth * 0.25).toFixed(2), rdur: rdur.toFixed(1), rdel: (-rnd() * rdur).toFixed(1), dur: (4 + rnd() * 4).toFixed(1), del: (-rnd() * 6).toFixed(1) });
}
const THEMES = {
fresh: { grass: true, cls: '', bg: '#F7F1E1', sent: '#356544', recv: '#A7C957', recvText: '#1C2B12', stack1: '#6A994E', stack2: '#A7C957', card: '#FFFCF4', ring: '#BC4749', sub: '#356544', hint: '#A93D3F', hintShadow: 'none', creditCls: '', socCls: '', name: '#24442E' },
meadow: { grass: false, cls: 'sky', bg: '#7FB2E5', sent: '#0A6CDB', recv: '#E9E9EB', recvText: '#000000', stack1: '#DFE6EE', stack2: '#EDF1F6', card: '#FFFFFF', ring: '#FFFFFF', sub: '#3C3C43', hint: '#FFFFFF', hintShadow: '0 1px 3px rgba(20,40,70,0.55), 0 0 14px rgba(20,40,70,0.35)', creditCls: 'on-sky', socCls: 'on-sky', name: '#1C1C1E' }
};
this._initTheme = 'meadow';
const pt = this.props.theme;
const themeKey = st.theme || (pt === 'fresh' || pt === 'meadow' ? pt : this._initTheme);
const th = THEMES[themeKey];
const toggleTheme = () => { this.playPop(); this.setState({ theme: themeKey === 'fresh' ? 'meadow' : 'fresh' }); };
const tapWord = st.touch ? 'tap' : 'click';
const msgs = [
['what does chloe do?', 245], ['visdev + bg design', 283], ['ui/ux + prototyping', 320],
['3d modeling + animation', 0], ['game art + concept art', 35], ['illustration', 96],
['graphic design + layout', 132], ['art direction', 165], ['project management', 200], [tapWord + ' me!', 58]
];
const MOBILE_POS = { 0: [27, 7], 1: [72, 13], 2: [30, 19], 3: [70, 78], 4: [30, 84], 9: [70, 90] };
const mob = !!st.mobile;
const bubbles = msgs.map((m, i) => {
const ang = m[1] * Math.PI / 180;
const jit = ((i * 37) % 7) - 3;
const isTap = i === msgs.length - 1;
const rx = isTap ? 22 : 31 + jit * 0.6, ry = isTap ? 44 : 37 + jit * 0.8;
const x = 50 + Math.cos(ang) * rx, y = 50 + Math.sin(ang) * ry;
const sent = x >= 50;
const mp = MOBILE_POS[i];
if (mob && !mp) return null;
const fx = mob ? mp[0] : x, fy = mob ? mp[1] : y;
const fsent = mob ? fx >= 50 : sent;
return { text: m[0], sent: fsent, toggle: isTap, sentPlain: fsent && !isTap, recv: !fsent && !isTap, hidden: isTap ? 'false' : 'true', z: isTap ? 3 : 1, onClick: isTap ? toggleTheme : null, x: fx.toFixed(1), y: fy.toFixed(1), dur: (9 + (i % 4) * 1.5).toFixed(1), del: (-i * 1.3).toFixed(1) };
});
const bubblesShown = bubbles.filter(Boolean);
const blade = (x, front) => {
const edge = Math.min(1, Math.abs(x - 50) / 50);
const tall = edge > 0.8 && rnd() < 0.22;
const h = Math.round(front ? (rnd() < 0.25 ? 300 + rnd() * 80 : 160 + rnd() * 90) : (tall ? 200 + rnd() * 80 : 35 + edge * edge * 85 + rnd() * 25));
const w = Math.round(front ? 42 + rnd() * 26 : 13 + edge * 14 + rnd() * 8);
const bend = Math.round((rnd() - 0.5) * (front ? 90 : 30 + edge * 30));
const greens = front ? ['#356544', '#6A994E'] : ['#6A994E', '#A7C957', '#356544'];
const d = 'M0 ' + h + ' C ' + (w * 0.2) + ' ' + (h * 0.55) + ', ' + (w * 0.4 + bend * 0.6) + ' ' + (h * 0.25) + ', ' + (w / 2 + bend) + ' 0 C ' + (w * 0.6 + bend * 0.6) + ' ' + (h * 0.3) + ', ' + (w * 0.8) + ' ' + (h * 0.6) + ', ' + w + ' ' + h + ' Z';
const blur = front ? 3 + rnd() * 3 : (edge > 0.75 ? 0.8 + (edge - 0.75) * 6 * rnd() : 0);
return { x: x.toFixed(1), h, vw: w + 120, vb: '-60 0 ' + (w + 120) + ' ' + h, d, c: greens[Math.floor(rnd() * greens.length)], b: blur.toFixed(1), dur: (5 + rnd() * 4).toFixed(1), del: (-rnd() * 6).toFixed(1) };
};
const grassBack = [];
[[3, 5], [11, 4], [20, 3], [29, 2], [70, 2], [79, 3], [88, 4], [96, 5]].forEach(([cx, n]) => {
for (let k = 0; k < n; k++) grassBack.push(blade(cx + (rnd() - 0.5) * 4, false));
});
const grassFront = [];
[[2, 3], [9, 2], [91, 2], [98, 3]].forEach(([cx, n]) => {
for (let k = 0; k < n; k++) grassFront.push(blade(cx + (rnd() - 0.5) * 3, true));
});
const meadow = [];
for (let i = 0; i < 20; i++) { meadow.push({ x: (rnd() * 96).toFixed(1), y: (35 + rnd() * 60).toFixed(1), s: Math.round(16 + rnd() * 30), b: (rnd() < 0.3 ? 1.5 : 0), dur: (4 + rnd() * 3).toFixed(1) }); }
const PROJ = [{"k": "rhr", "cat": 0, "title": "Red Hat Ringo", "kind": "Visdev + backgrounds", "accent": "#B3261E", "tag": "Visual development and background art for a collaborative animated short at UT Dallas AnimLab.", "facts": [["Role", "Visual development + background art"], ["Timeline", "Aug 2022 – Dec 2023"], ["Context", "Student film, UT Dallas Animation Lab"], ["Deliverables", "Concepts, layouts, background paintings"]], "over": ["“Red Hat Ringo” is a collaborative animated short released in December 2023, created under the Animation Lab at UT Dallas.", "I worked with a team of pre-production artists on moodboards, storyboards, explorations and environment art, then moved into production with the technical artists and animators to finish and release the film."], "did": ["Explored the look of the world through concepts and color studies", "Designed background layouts, including the bank exterior and interior", "Developed concepts for the flashback sequences", "Painted final background art for the 2D animated sequences"], "out": "Released December 2023 with an official showing and Q&A session with the directors.", "imgs": [["b0b56eb8d03e9a8001ddef48f4ba32d8", 1.922], ["bf3575c125dca1d37c13bd9127fd1663", 1.769], ["0fb5839fa8217e5abfb092cbb65abfb7", 2.314], ["f19ad622e8853fe793ad17eea1ea50c0", 1.778], ["8400b4d99c1931410d5ed0b51a6c34ea", 2.103], ["9870d0e5e3f10f3a67cd490023f28135", 1.91], ["b46442c3e76dcd29b07275afcd4ecbd1", 2.073]], "cover": "9c558eba403e627c09f854a8df6bc864", "video": "0aad0d28688169ca7fe758b18c846d5c", "var": 1.778, "vcap": "Clip from the finished short - character animation by Jordan Prado"}, {"k": "pon", "cat": 0, "title": "Ponmac Games", "kind": "Art direction + concepts", "accent": "#B26A00", "tag": "Concept art, art direction and texturing for “Bird Wars,” an elemental party game.", "facts": [["Role", "Assistant art director + concept artist"], ["Timeline", "Jun – Oct 2021"], ["Context", "Bird Wars, an indie party game with ~15 artists"], ["Deliverables", "Environment art, prop sheets, textures"]], "over": ["Ponmac Games is a studio staffed mostly by Dallas-area artists, founded in 2021. Bird Wars, its first game, is a party game where factions of birds battle in arenas based on fire, water, earth and air.", "I started on concept art for visual development, painting environment art for the earth and air arenas from moodboards of canyon arches, mud huts and floating islands. About a month in I moved into art direction and oversaw the art department while continuing visdev.", "Alongside the environments I designed props for the 3D team: boulders broken down into isometric, front and side views with shading callouts, rough block-outs in Blender, and textured plants like calla lilies and lily pads."], "did": ["Set the art direction: a cartoony, colorful look where environments feel alive", "Oversaw an art department of about 15 artists and peers", "Painted environment art for the earth and air arenas", "Built moodboards for rock formations, mud huts and floating islands", "Designed boulder assets with isometric, front and side views for modelers", "Blocked out rock shapes in Blender", "Textured calla lilies and designed a lily pad asset"], "out": "Promoted from concept artist to art direction within the first month.", "imgs": [["7e33e0d927d9e283604c05be87f16b66", 1.798], ["9d872ea54368a2d29271573d76fffc05", 1.914], ["620e8304510aec18d2e575574ccf21db", 1.0], ["9ac62eaea2da352b9f63c30e19773033", 1.0], ["86a32662a29e6cd48722b9b2d35febff", 1.412], ["052111d90ba1d5b8f9895bc19f0c404c", 1.412], ["ff0cc98fbfdb2c39807542929574b3b3", 1.413], ["825f3162baabbfb55a918d229a6be165", 1.413], ["475a0b52530f6e6b520549a5bfd534dd", 1.413], ["b5e4715ec02a55360e71a7ee064fa8d6", 1.413], ["980ee72cb8ea00366995eb61c3d663b2", 1.413], ["76ba536d6831a4f1936e6c896ce160a5", 1.413], ["808661690dde7e8705ffb5e20aeb21cf", 1.562], ["3b5baa1f5a3c4319430c1c4e714c7f38", 1.964], ["6cea8868feebe1fcae8ee55e58925e68", 1.333]], "cover": "27b10282816df987c1e0ce93fe239184"}, {"k": "d3", "cat": 0, "title": "3D work", "kind": "3d modeling + texturing", "accent": "#8A4B2A", "tag": "Virtual environments, modeling and texturing/surfacing.", "facts": [["Role", "3D artist"], ["Timeline", "2023 – present"], ["Context", "UT Dallas coursework"], ["Deliverables", "Environments, props, turnaround sheets"]], "over": ["A collection of 3D environment and prop work: a lit bedroom interior and props built in Unreal 5, with models made in Maya and Blender and surfaced in Substance Painter 3D.", "The modeling and texturing pieces include a painted garden bucket and a side-handled teapot modeled from a reference photo, shown as turnaround sheets with their texture maps."], "did": ["Built and lit a bedroom interior in Unreal 5", "Set up props in Unreal, including a street lamp, rocks and fences", "Modeled a teapot from reference, with wireframe and textured turnarounds", "Textured and surfaced assets in Substance Painter 3D"], "out": "", "imgs": [["d93638e61800b180f83393f52f991782", 1.778], ["8973e5e09f2454f32a635ae6f926e227", 1.778], ["7178c906846f25eb1483a35792b4e036", 1.778], ["15d94e83d87836f676e8b7eebeb5d4ff", 1.778], ["5a27925eb2891d680b60c9360e48ceb1", 1.833], ["04e25051b25264580922046723f8cd05", 1.827], ["e9bc048b61b185b7af8d33410d75abba", 2.03], ["0670e63d03981f665fdcbade4c651142", 1.95], ["f487380c1430d08e7f2e9694a384d0d6", 1.95], ["bf5533701fe517322d8a69278a0a73b2", 1.0], ["68d9e50799e910e228de9400dbf0223f", 1.938], ["baafb33373540791c5bd32e6e6b20738", 1.935]], "cover": "9c4f5dbb1a0d837b75c62e43a02adbb8", "video": "5f57252545c47ee5f9f84680073f653c", "var": 1.778, "vposter": "dd695fa3812e03d051567d283375ac6d", "vcap": "3D reel - tap to unmute"}, {"k": "samp", "cat": 1, "title": "Sampdle", "kind": "Game design + UI/UX", "accent": "#8A6A00", "tag": "A daily fragrance guessing game: match the perfume to its notes.", "facts": [["Role", "Design + development"], ["Timeline", "2026"], ["Context", "Personal project, live at sampdle.cc"], ["Deliverables", "Daily web game with 187 fragrances"]], "over": ["Sampdle is a daily web game for fragrance fans. Each day shows one perfume and three paper strips of top, heart and base notes; you pick the strip that matches. A first-guess win scores 300 points, a second guess 150.", "The look borrows from the perfume counter: paper blotter strips, a sample vial for a logo, typewriter labels and a thumbprint where you press. The skyline behind it follows your own clock, with windows lighting up at night.", "Around the daily round there is a practice mode, a calendar with themed days (niche monday, celebrity friday, sunday classics) and a shelf that fills with every bottle you guess right the first time."], "did": ["Designed the game loop, scoring and daily themes", "Designed and built the interface: landing, round, results, calendar, shelf", "Iterated the logo bottle and type through several versions", "Built the server on Cloudflare Workers + D1 so answers and scores can’t be faked", "Made it work on phones first, with light and dark modes"], "out": "Live at sampdle.cc, with a new puzzle every day.", "imgs": [["e35f69f6c25f55104f36ea2968081352", 1.778], ["ede076dd56524ea3dba654d2ab2cb44f", 1.778], ["60a8e324e97ad32ca41f8438f83d6ce5", 1.778], ["88f5cab97147e8d124b5aad183837765", 1.778], ["c6269b63045fd9dfe2919013e517c6ae", 0.5], ["6629aefb38cb10b46d57cff40fae1316", 0.5]], "cover": "e2fadeb7b28dcb9f9406ce00096814b9", "video": "c7d31840f89d34be224a089aad3b6aa3", "var": 1.778, "vcap": "A practice round, the calendar and the shelf - sampdle.cc", "proc": [["1bcf6d2a46d41db32e34ac6c061929e6", "01 - first build", "A flat grey vial, a quiet skyline and the core loop working end to end."], ["cf1b573ecce0aa583086bf8931a4febe", "02 - first round screen", "Three strips and a name plate. The layout held; the type and paper detail came later."], ["9824b58080a0ab84d77722c3e911c8a8", "03 - bringing it to life", "Lit windows, note strips tucked under the bottle, and the day’s number and theme."], ["620e76f4af276d3ec09f61b218ae4a42", "04 - glass experiment", "A glass bottle and typewriter type. The type stayed; the glass logo was dropped for legibility."], ["88f5cab97147e8d124b5aad183837765", "05 - shipped", "Tinted liquid in yellow, pink and blue, a rounder vial and a heavier display logo."]]}, {"k": "mar", "cat": 1, "title": "Marathon UI concept", "kind": "Game UI + research", "accent": "#4D7C0F", "video": "2235d2e11d1132cfed29c95389d2d187", "var": 1.779, "vcap": "Clickable Figma prototype - main menu, runner, loadout and the deployment map", "tag": "A menu and runner interface concept for Bungie’s Marathon, designed before the game’s closed alpha.", "facts": [["Role", "UI designer"], ["Timeline", "Early 2025"], ["Context", "Personal concept for Bungie’s Marathon"], ["Deliverables", "Menus, runner + loadout screens, Figma prototype"]], "over": ["This mockup is a design I made for a personal project in the months leading up to the closed alpha for the game Marathon.", "To me, the pre-released UI was sparse and unclear, so I researched popular shooter menus, pulling from trailers and livestreams to put together a cohesive visual language, then iterated on several different designs."], "did": ["Researched menu systems across popular shooters", "Studied trailers and livestreams to define a visual language", "Iterated on several layouts for the main menu", "Designed runner, loadout, contracts and stats screens", "Built a clickable prototype in Figma"], "out": "", "links": [["Try the prototype", "https://www.figma.com/proto/LxWVzOdw7hrxK6BSZHAqEM/MARATHON-UI-Mockup?node-id=42-1375&starting-point-node-id=42%3A1375&t=PmU91B3dwPpUBPDV-1"]], "imgs": [["4bc7e5739fa9c3f03d1f9a47c4962683", 0.87], ["f85c6e6d50698045ab4b2a59413cff48", 0.461], ["35bf68c43c1d525736b4e38a4841b17a", 0.87], ["39985aa2c274798813ea4c0037cc228f", 0.87], ["e376da77b32c2841e5934e0f5795d64a", 2.081]], "cover": "00ce3587eed4ae57dbdf82223db50fe6"}, {"k": "lg", "cat": 1, "title": "Los Gatos Coffee + Uber", "kind": "UX case studies", "accent": "#B07A2A", "tag": "Two UX exercises, side by side: a mobile ordering app for a local coffee shop, and a mobile + desktop redesign of Uber’s booking flow.", "facts": [["Role", "UI/UX designer"], ["Timeline", "2022"], ["Context", "Interaction design coursework"], ["Deliverables", "Journey maps, user flows, mobile + desktop prototypes"]], "over": ["Los Gatos Coffee Co.: a redesign for a coffee shop local to my area, aimed at a functional, inviting interface for a younger audience, with an unconventional ordering process that stays as simple as other coffee apps.", "Uber: a redesign of the mobile and desktop experience focused on ease of use and visual clarity for first-time users, streamlining ride booking while routing people to other services when needed."], "did": ["Mapped customer journeys and opportunities", "Diagrammed user flows for booking and support", "Sketched wireframes on paper before moving to screens", "Built clickable mobile and desktop prototypes"], "out": "", "imgs": [["dbe2b479fd376ebc2307e5b8b6dae3f2", 1.348], ["7942715c66c8606cbbd8351c211d5943", 1.593], ["e0b4ad57ecf1b651637efb4d93e02e9f", 1.546], ["e8e35991ce37ab7d2fc780538197c0c3", 1.593], ["024d09505b3f097d850212538cc2cc1e", 1.335], ["7a477079915d727c5851383f92b25b11", 1.487], ["c91a6f0dc3e5f2cbd991afed25946eee", 1.452], ["1eb8679fdab6329b99a8fa9f0b0ba18e", 1.811], ["e34c7c8cbf58fc185cdf5c07f2bad49e", 1.604]], "cover": "a7e49da6a8d805f94a63c2389b45afad", "split": [{"eye": "Exercise a - mobile app", "title": "Los Gatos Coffee Co.", "tag": "A mobile ordering app for a coffee shop local to my area.", "vids": [["d5e04ca21e77ff79c59b334f9b515729", 0.522, "Mobile prototype: login, menu, customize, checkout"]], "facts": [["Format", "Mobile app"], ["Tools", "Figma"], ["Methods", "Persona, app map, journey map, paper prototypes"], ["Timeline", "Undergrad - [add dates]"]], "over": ["I prototyped a redesign for a coffee shop local to my area. The goal was a functional, inviting and appealing interface that would catch the attention of a younger audience.", "I aimed for a unique, unconventional ordering process while keeping the essence of the app as simple as other coffee ordering apps."], "did": ["Wrote a persona for a busy regular and mapped every screen in an app map", "Mapped the ordering journey to find pain points and opportunities", "Sketched the screens on paper before moving into Figma", "Built a clickable prototype from login through checkout"], "steps": [[0, "Persona + app map", "A persona for a busy regular, and a map of every screen in the app."], [1, "Journey map", "Consideration, browsing, choosing a drink and ordering, with the pain points and opportunities at each stage."], [2, "Paper prototypes", "Quick sketches of the home, menu and drink screens before anything went into Figma."], [3, "Final prototype", "Login, home, drink customization, rewards and cart, built and linked in Figma."]], "out": "The project gave me confidence in my own UX work. It taught me to prepare and plan before designing instead of jumping straight into screens. Next time I’d spend more time brainstorming and planning up front."}, {"eye": "Exercise b - mobile + desktop", "title": "Uber", "tag": "A redesign of Uber’s booking flow for first-time riders.", "vids": [["d063bc4f8a1463e0b854b8806f9dd0ff", 0.522, "Mobile prototype: book, choose a service, confirm, get help"], ["92c2da0dd9e19d9ae9b17ea469cbd430", 1.589, "Desktop prototype: landing, log in, book a ride, confirm"]], "facts": [["Format", "Mobile + desktop"], ["Tools", "Figma"], ["Methods", "Competitor research, persona, user flows"], ["Timeline", "Undergrad - [add dates]"]], "over": ["I prototyped a redesign of Uber’s mobile and desktop experience. I felt it was lacking in some areas when navigating it for the first time, namely ease of use and visual clarity.", "I aimed to streamline and simplify booking a ride, while still sending people to other services when they need them."], "did": ["Reviewed competing rideshare apps for patterns worth keeping", "Wrote a persona for a frequent flier who books rides to the airport", "Diagrammed user flows for booking, support and login on both platforms", "Built matching mobile and desktop prototypes in Figma"], "steps": [[4, "Competitor research + persona", "Rideshare apps side by side, and a persona for a frequent flier."], [5, "User flows: booking", "Booking a ride on mobile and desktop, from opening the app to the driver arriving."], [6, "User flows: support + login", "Customer support on mobile, and the rider login on mobile and desktop."], [7, "Mobile prototype", "Map, booking sheet, service picker, ride confirmation, profile and help."], [8, "Desktop prototype", "Landing page, login, booking over the map and ride confirmation."]], "out": "My final project for the class, and the most complete one. I used what I learned across the semester: the design thinking process, user flows and different prototype formats. There’s room to improve, but it was a good place to start my design process."}]}, {"k": "hc", "cat": 2, "title": "Hot Cue magazine", "kind": "Editorial design", "accent": "#C4161C", "tag": "Layout and design for Hot Cue, a NYC magazine about DJ culture and nightlife, starting with Issue 1: The First Time.", "facts": [["Role", "Designer: layout, type + graphics"], ["Timeline", "2026"], ["Context", "Hot Cue, a NYC magazine on DJ culture"], ["Deliverables", "54-page print issue, stickers, logo graphics"]], "over": ["Hot Cue is a magazine about DJ culture and nightlife in New York, paired with a Substack at hotcuemagazine.com.", "Issue 1, “The First Time,” is built around beginnings: DJs recalling their first gigs, a guide to playing your first paid set, features on wellness raves, sober nightlife, a DIY music festival in Bushwick and rave culture, plus an editor’s note on why firsts stick with us.", "I was one of three designers on the issue, laying out spreads in InDesign from the shared template and shaping long-form stories, tips and contributor photos into pages that feel like the scene they cover. The team included designers Jay Lee and Robert Castillo and editors Becca Erdenebulgan and Joyce Seok."], "did": ["Designed and laid out feature spreads for the 54-page issue", "Set type and hierarchy for long-form features, tip lists and first-gig stories", "Placed and treated contributor photography, maps and illustration", "Designed stickers and logo graphics for the magazine", "Worked from a shared template with the other designers and editors"], "out": "", "imgs": [["35a45fb779715fdad66d84179d0cf5d3", 0.625], ["8000209db029a60e7dc462516a67c007", 0.625], ["087e17d6ec1f263386100551e59f4574", 2.059], ["59456684f0bf8db8fb4b1cf73c6d5275", 1.0], ["53120241913ab0be4a8b64cca1537c0b", 1.0], ["7d312b9f1280b69d73697537d080e344", 1.0]], "cover": "ad9e004c07269e48e4c18a0c0e1d147b", "video": "0309da95eeb0d8003b9e3f7a9d0ccb10", "var": 1.778, "vposter": "8a5a7e33f3192e1ae0cf29453f518230", "vcap": "Scroll-through of the Issue 1 draft, from the Pet Sounds review to Crate Diggers"}, {"k": "utd", "cat": 2, "title": "UT Dallas AHT", "kind": "Brand + social design", "accent": "#C75B12", "tag": "Graphic design for the School of Arts, Humanities, and Technology at UT Dallas.", "facts": [["Role", "Student designer"], ["Timeline", "2022 – 2023"], ["Context", "Communications lab, UT Dallas AHT"], ["Deliverables", "50+ projects for social and print"]], "over": ["I worked in the Communications Lab at the School of Arts, Technology, and Emerging Communication at UT Dallas, doing graphic design and creating boards and concepts for designers to follow.", "Part of the role was assisting in the merger that created a new school: the School of Arts, Humanities, and Technology."], "did": ["Designed event graphics for print and social media", "Created boards and concepts for other designers to follow", "Designed campus maps and official merchandise", "Took drafts to final proof for publication"], "out": "Work published across UT Dallas social channels and in print.", "imgs": [["3526e7c534c701a32797686125d82d90", 1.778], ["8749986d7fa5333fa645fa4f9e1d48c5", 1.0], ["f17209a24e6da7b2b987d5564a3ee42f", 1.778], ["38a6a742f11004fb3944ae076ea67d37", 1.778]], "cover": "d24dc90fc39376246e4f4b6b425b5963"}, {"k": "ch", "cat": 2, "title": "chuuni.co", "kind": "Mixed media", "accent": "#7A4BC2", "tag": "A mixed media project: illustration, prints, stickers and zines.", "facts": [["Role", "Founder, artist + designer"], ["Timeline", "2023"], ["Context", "Online shop + local markets"], ["Deliverables", "Illustration, prints, stickers, totes, social"]], "over": ["chuuni.co is my independent art shop: original illustration turned into prints, posters, stickers, phone charms and tote bags, sold through my own online store and at campus markets.", "I run every part of it, from the black-cat mascot \"chu\" and the product designs to the storefront, launch graphics and Instagram."], "did": ["Designed the brand, mascot and every product", "Built and run the online store on Square", "Designed launch, drop and event graphics for Instagram", "Ran a pride collection donating 15% of proceeds to the Trevor Project and Trans Lifeline", "Sold in person at UTD markets and artist alleys", "Switched to eco-friendly packaging with noissue"], "out": "", "imgs": [["8b2c5a9551aa0a334715de998d39cce8", 1.0], ["3c23cf71a84aaba1abc1a79b68abe977", 1.0], ["3279873f06dba76ff97f3f6aef5015bc", 0.667], ["7d598a94b312e240d01bb3a68d3543b0", 0.667], ["76472d693a7b502bff845a57efb7f7fd", 1.917]], "cover": "1fe86f50836594497d7120a4aa61718b", "links": [["chuuni.co", "https://www.chuuni.co"], ["Instagram @chuuni.co", "https://www.instagram.com/chuuni.co"], ["Link hub - chuunis.carrd.co", "https://chuunis.carrd.co"]], "site": ["236c4d957955a935b126d4a10613ccc9", 0.622, "https://www.chuuni.co"], "posts": [["26aa948e2d8eb72ed01e34d6506dfc48", 1.0], ["683b554159f0e6fa6252e0b1fa85ebf6", 1.0], ["b2533f09be4f35b56dc75c096aa101a7", 1.0], ["da3236274196787a6f9b9bc7b95c74c1", 1.0], ["b2c706135761baa4c6739aa1a8331fa6", 0.8], ["a8c44df0796e619cbc65186809d30913", 0.802], ["28ba856cfe26d366790e39061e1a8cff", 0.8], ["031ab3c0d25783e24380d532717a648e", 0.802], ["3f225ea656a3770944801f6fdf65f1ac", 0.663], ["6c96706a7668ff2c46b2452b32d17139", 1.0], ["e746fa9956ee8dca2c8f37c1cbe8bd51", 1.0], ["67a6708f692252658566c5b8792e4fbb", 0.562], ["a50d65e4df0955c844bb44fd89dba203", 1.0], ["495257515da4e71f9ca80f19fa5c7b0d", 1.0], ["9cbffcab984f280cb25f91a08314dd9f", 1.0], ["1668dab9f87bec466592aa482c55e8c1", 1.0], ["3ca01ab2223d4cb9a7649487cd65dee5", 1.0], ["0b2d4b7972d0ee88144bb98e79c5e451", 1.0], ["d1a9f9eb01a6a8f70bd93155438f6f51", 1.0], ["b563416e0987be517e72ad2a9fa47405", 1.0], ["302901128cffab08c87638b003cd57b4", 1.0], ["17db6dd2a335485f200da9aa1ad2f123", 0.562], ["7ec3465156a8e5c4a42ac64483de52e3", 1.0], ["a4f2ba56ee3d7fb4ce7b4a189e0068c7", 1.0], ["d055d2ea513c8439a08ac865fa444426", 1.0], ["3dc0e2b90d2cdea68d2c9ec10220640d", 1.0]]}, {"k": "aaa", "cat": 3, "title": "Asian Artists Association", "kind": "Founder + art direction", "accent": "#D4253A", "tag": "Founding UT Dallas’ first art organization for a minority demographic.", "facts": [["Role", "Founder + president, art direction"], ["Timeline", "May 2022 – May 2024"], ["Context", "UT Dallas student org, 500+ members"], ["Deliverables", "100+ graphics, 20+ events"]], "over": ["The art community is a volatile place. A lack of easy ways to collaborate, job searches, layoffs and internships are all barriers to entry and make it hard to connect.", "As a member of the Asian-American community, I wanted a space of our own, where we could learn, grow and support each other as artists first and foremost."], "did": ["Founded the organization and grew it to 500+ members within a year", "Directed a creative team producing 100+ graphics and signage assets", "Planned 20+ networking and community events", "Funded 25+ local Dallas artists and raised money for charity"], "out": "500+ members in the first year. Graphics made with Mubashir Ali and Amber Doan.", "imgs": [["c7f4b6bbcc931a799c3ecb6f7c96d769", 1.0], ["a80d7cf3dd162c9c21497d341cd28566", 1.0], ["45ef8d4aae73aacc5abc4c99a3988653", 1.0], ["d6e16577ef19aa55fc8ff12c7a09aaa1", 1.0], ["6d2b88715b726ce7b5c7605c39eb7bcf", 1.0]], "cover": "6f265d5479484673e31cfbc15661ae8a"}, {"k": "sa", "cat": 3, "title": "Studio Adore", "kind": "Producer + PM", "accent": "#9B2D5A", "tag": "Production, project management and talent acquisition for an independent animation studio.", "facts": [["Role", "Producer + project manager"], ["Timeline", "Mar – Jul 2025"], ["Context", "Independent animation studio"], ["Deliverables", "Wacom video collab, hiring, social"]], "over": ["At Studio Adore I ran production and project management for an up-and-coming independent animation studio, alongside talent acquisition and social media."], "did": ["Produced, edited and shipped a short-format video collaboration with Wacom", "Oversaw talent acquisition for the studio", "Managed deadlines and coordinated with artists", "Handled social media marketing"], "out": "The Wacom collaboration shipped from concept through final release.", "imgs": [["f102f5977399bb86371853689fa611ab", 1.283], ["685dc1a5f2720c5b3cd6bd826c075a24", 0.917], ["6af7999c53d5f5b97a1b456dc4faa52d", 1.315], ["21a47eb4835db86188538b66eff7a73b", 2.046], ["73b1e910f10f438e83ec725ceee1c4ec", 0.757], ["141931ea8a179e028bef3e945b4e5162", 1.333], ["934f6c2d7ff6e78a872927ed41bd1b2c", 2.466]], "cover": "783c2c82e263a864d94a137c3ca43023", "video": "89c5abe343ae691ad3957397b88ed5e7", "var": 0.5625, "vposter": "59cb8aeddb3a14521878b86645676146", "vcap": "Studio Adore × Wacom short-form video - tap to unmute", "galT": "Preproduction", "links": [["Instagram @studio_adore_", "https://www.instagram.com/studio_adore_/"]]}, {"k": "vsa", "cat": 3, "title": "UTD VSA", "kind": "PR + brand design", "accent": "#2F7E8A", "tag": "PR, branding and merch for UT Dallas’ Vietnamese student association.", "facts": [["Role", "PR team: design, marketing + art direction"], ["Timeline", "2021 – 2022"], ["Context", "UT Dallas Vietnamese Student Association"], ["Deliverables", "Logo, member shirt, social, web banners"]], "over": ["I was on the PR team for UT Dallas’ Vietnamese student association, managing our social media and designing the logos and banners used on the website and across promotional materials.", "I also designed a member shirt for the 2021–2022 school year. The logo and shirt both draw on two Vietnamese motifs, the lotus flower and the koi fish."], "did": ["Ran the VSA’s social media as part of the PR team", "Designed the lotus + koi logo and its variations", "Designed banners for the website, link hub and promo graphics", "Designed the 2021–22 member shirt, building the back design from the front pocket logo commissioned by the officer board", "Shot and laid out officer introduction posts"], "out": "", "imgs": [["cbedc697486c6bc6b02a12458a4fb4f1", 1.432], ["15c4090d037792b211cc87253951c690", 1.419], ["edd5c490fd4a34ee42b9ea95819135fb", 2.0], ["26bc469ddd1fd61115e0a5dd6d944f01", 1.0], ["89d6e42a25b18465d20d5ca501ee915d", 1.0], ["6359056186ae9136bc1c85ebf9436bd6", 1.0], ["b288bd71bf6a05869ef71611e9cccf7e", 1.0], ["606fb400dc7f684d4478996ad8e3899c", 1.432], ["9fa9b583408ba007b45ce02d6112a179", 0.748], ["8f9aaff3a25c8fe1acabf990b89c48f3", 1.556], ["d1f9ccbe033f334df758704cb5816a75", 1.0]], "cover": "161c33396930af9bd718ed757474d39f"}, {"k": "ba", "cat": 2, "noshelf": true, "title": "Don’t F*ck with Ba", "kind": "Film graphic design + credits", "accent": "#B3261E", "tag": "By Sally Tran (@sallyphuongtran) - an independent film, featured in film festivals like NYAFF, TIFF, among many others!", "facts": [["Role", "Graphic design, font + credits"], ["Timeline", "2024"], ["Context", "Short film by Sally Tran; NYAFF + TIFF selection"], ["Deliverables", "Film graphics, title font, credits"]], "over": ["Đừng Giỡn Mặt Với Bà / Don’t F*ck with Ba is a multilingual, retro crime-action short written and directed by Sally Tran, a NYC-based filmmaker originally from Vietnam and New Zealand.", "Set in New York’s Chinatown, it follows Thao, who finds her grandmother killed and her gold jewelry stolen. Let down by the authorities, Thao and a crew of women go after the gang themselves, and find a new sense of purpose in protecting their community.", "The film premiered at the New York asian film festival at Film at Lincoln Center in 2024, then screened at TIFF, the Hawaii and Calgary film festivals, and festivals in Switzerland, Germany and Spain, among others. It was supported by NYCWF, NYFA, Panavision, the Vimeo BIPOC fund and MOME."], "did": ["Graphic design for the film and its promotion", "Designed the film’s title font", "Designed the credits"], "out": "Shot by Joshua Echevarria, edited by Sally Tran and Danilo Lima, with music by Nodey.", "video": "fbdc90cd302a2c5b2ae3fd0c9a60dec1", "var": 1.778, "vposter": "ff08d629dd4b1042e523a7e37383b08a", "vcap": "Teaser for the film - tap to unmute", "links": [["Sally Tran on Instagram", "https://www.instagram.com/sallyphuongtran/"], ["The film on Instagram", "https://www.instagram.com/dont_film/"]], "imgs": [["4ddbe87637ccfbc8fb3ac41ccbf5b8ca", 0.8]], "cover": "4ddbe87637ccfbc8fb3ac41ccbf5b8ca"}];
const CATN = ['Worlds & environments', 'Interfaces', 'Graphics & identity', 'Leadership & production'];
const cats = [1, 0, 2, 3].map((ci) => ({ name: CATN[ci], ci, items: PROJ.filter((q) => q.cat === ci && !q.noshelf) }));
const PLANTS = [
[{ src: '/_blob/733b305e6b84fe2e06524192d60f6a59', h: 165 }],
[{ src: '/_blob/db2095e4223ea18201e7264480aa8875', h: 112 }, { src: '/_blob/72000e0af6bd125cda77b50fa0dbed5c', h: 150 }],
[{ src: '/_blob/f9eaaae1dba0bf4b34a9daca1be6032b', h: 118 }],
[{ src: '/_blob/22ec242131317f27c4bca4a492c4a24d', h: 130 }]
];
const GAL_DATA = [{"name": "Illustration", "items": [["06e483179703ece168addca8e36baaf7", 1.768], ["bb98901d9646d63bbd0fcef64455785e", 1.778], ["97875a68f2f816da7212c42bd517ab15", 0.75], ["360a1488604acd447c33f8944e18f76c", 0.698], ["38a702e9999d505662c4046a91e377e7", 2.388], ["de7828ee4cdf881437a47a4dfcf0cbc3", 0.667], ["854ac9023d5dbc8d6c78b07f4c589c4c", 0.667], ["5f91f1098fa568bc5fb46a669ef53d50", 1.778], ["764fe3fe78c82fc221a3bcb301b8f989", 2.0], ["ebbc7660d7678f8a26647fae75c1b6a8", 0.785]]}, {"name": "Mograph/editing", "items": [], "video": ["10c74918ca3b698b59bb79b9909140d5", "4a4cf34817e36f3bc7cca2d9e9bb6dea"]}, {"name": "Photography", "items": [["ed89bcb0eb811a24a744e26886006939", 0.675], ["040cf072a82444ff617a11ece6387af2", 0.675], ["f08bdb039567a044ee7f7309b13bc704", 0.675], ["9fbb86a5c4c2012378f05e8eab867f90", 0.675], ["95325acc72da47709a1247a0621f7666", 1.48], ["5b72899449c5f2c27b466a33620df1c0", 1.48], ["44b123d327f68914eb9a108ed2cd95c2", 1.48], ["54942ee9fd57ad9038830847c766ea99", 1.48], ["5744db006753c6e5075c1815a0d74e59", 1.48], ["76d456e8c7c3f6d2f135c571f7959ee5", 0.675], ["181901cbbd302f08cac3930dcab0c75b", 0.675], ["5580ddbb622fc4064fd6d25af358a40a", 1.48]]}, {"name": "VTuber design", "items": [["60d914904b4a424b190adc1859fe1812", 1.488], ["0b1b21e698558d1bce03c596cbdfbda9", 1.488], ["80bd383377938fd729edb7103da08ac9", 1.488], ["d51fb66d9824e488c95ab68f1a28fd32", 1.491]]}, {"name": "Misc.", "items": [["73c0398597051e6b15d4af3a9034e3ab", 1.238], ["1491e3e15ce572d8353ac1b085957b58", 1.512], ["db4948e79db2e0e651c4a940b2266eab", 1.512], ["b94ca98f6b77f63a44179285d22da9d4", 1.51], ["885538155bf01947632f73f6ff0bbb70", 1.512]]}];
const exp = st.galOpen || {};
const ROW_H = mob ? 140 : 230, GAP = 12;
const ROW_W = mob ? Math.max(280, (typeof window !== 'undefined' ? window.innerWidth : 390) - 40) : 1160;
const gallery = GAL_DATA.map((g, gi) => {
let rows = 0, w = 0, cut = g.items.length;
for (let i = 0; i < g.items.length; i++) {
const iw = g.items[i][1] * ROW_H;
if (w > 0 && w + iw > ROW_W) { rows += 1; w = 0; if (rows === 2) { cut = i; break; } }
w += iw + GAP;
}
const open = !mob || !!exp[gi];
const shown = open ? g.items : g.items.slice(0, cut);
return {
pencil: gi === 0,
name: g.name,
count: g.video ? '1 video' : g.items.length + (g.items.length === 1 ? ' piece' : ' pieces'),
video: g.video ? '/_blob/' + g.video[0] : '',
poster: g.video ? '/_blob/' + g.video[1] : '',
hasItems: g.items.length > 0,
items: shown.map((it, i) => ({ src: '/_blob/' + it[0], flex: it[1] + ' 1 ' + Math.round(it[1] * ROW_H) + 'px', ar: String(it[1]), alt: g.name + ' by Chloe Le', label: 'open ' + g.name + ', piece ' + (i + 1) + ' of ' + g.items.length, open: () => this.setState({ lb: { g: gi, i } }) })),
hasMore: mob && g.items.length > cut,
moreLabel: open ? 'Show less' : 'See ' + (g.items.length - cut) + ' more',
toggle: () => this.setState({ galOpen: { ...(this.state && this.state.galOpen || {}), [gi]: !open } })
};
});
const lbS = st.lb;
const ARCHP = (st.arch || []);
const ALLP = PROJ.concat(ARCHP);
const pj = ALLP.find((q) => q.k === (st.pk || this.props.pk || 'rhr')) || PROJ[0];
const pjL = pj.arch ? ARCHP : PROJ;
const pjI = Math.max(0, pjL.indexOf(pj));
const lbG = !lbS ? null : view === 'personal' ? GAL_DATA[lbS.g] : view === 'project' ? (lbS.g === 1 && pj.posts ? { name: pj.title + ' on Instagram', items: pj.posts } : { name: pj.title, items: pj.imgs }) : null;
const lbN = lbG ? lbG.items.length : 0;
const lbIt = lbG ? lbG.items[lbS.i] : null;
const lbGo = (d) => () => this.setState({ lb: { g: lbS.g, i: (lbS.i + d + lbN) % lbN } });
const lbClose = () => this.setState({ lb: null });
const COVERS = ['/_blob/dd45acbab57c0cc6dfaf140f8ebda357', '/_blob/ac98fceaa83380634db436e74926b85c', '/_blob/ace8ef7898cc7d8765531f0f63c5b25b', '/_blob/3365c182cfdf94139e09688ded066606', '/_blob/75914edc4637b3f3f3373fc1208c378b', '/_blob/6b113e4311d48a51a5c1e96232728ca9', '/_blob/69320af6977ee154c1073aca933aa517', '/_blob/25a4f130fe233ee963f8492581a27dad', '/_blob/66943bbf5be35d9cddf2647f7da6526e', '/_blob/8e0c8ef460733fbc1464a76d1f2b8816', '/_blob/0da87adc8acddf025b99f4a453c60577', '/_blob/17bc3b4a42dd27a937a85f2dded7b291', '/_blob/1b27b7c6b02da9e7656d471006099118'];
let num = 0;
const FRAMES = { samp: 's1', mar: 'n2', lg: 's2', rhr: 'n1', pon: 's3', d3: 'n3', hc: 's4', utd: 's1', ch: 'n2', aaa: 's2', sa: 'n3', vsa: 'n1' };
const shelves = cats.map((c, r) => ({
name: c.name,
idx: String(r + 1).padStart(2, '0'),
count: c.items.length + (c.items.length === 1 ? ' project' : ' projects'),
cols: 'repeat(' + c.items.length + ', minmax(0, 250px))',
top: [6.62, 22.65, 38.80, 54.83][r],
bandTop: '/_blob/' + ['adb071e0137bf47c0fab1017341f33b8', '727f746933f14b4e584416f28ef52c39', 'd2f56fe8a7e82435f32699398119a70e', 'adb071e0137bf47c0fab1017341f33b8'][r],
bandBot: r < 3 ? '/_blob/' + ['9aa129b455f89c38abebd39c80de5f6e', 'c71ab1466c3237d95a62da0175ce0386', 'b419358d37e59e3ec68b84ae4ffb25fb'][r] : '',
h: [14.23, 14.23, 14.3, 14.27][r],
mat: ['m-grass', 'm-alu', 'm-paper', 'm-marble'][c.ci] || '',
plantPos: r % 2 === 0 ? 'left: -8px' : 'right: -8px',
plate: '/_blob/' + ['e006c01d33bcb6acfab3fd6728a85af5', '0cfe5ede096c745554dca1a93318dd4f', 'f8d5cc63ae46d089f41dbc4d9ff8674e', '0041ce7f9cb475cdc608784412974cb4'][r], plateCls: r % 2 === 0 ? 'mplate' : 'mplate mplate-r',
n: c.items.length,
plants: PLANTS[r],
items: c.items.map((q) => ({ title: q.title, kind: q.kind, tint: '#1C1C1E', fr: 'fr-' + (FRAMES[q.k] || 's1'), img: q.cover ? '/_blob/' + q.cover : '', noimg: !q.cover, open: openProj(q.k) }))
}));
return {
th,
daisies: themeKey === 'fresh' ? daisies.map((d) => Object.assign({}, d, { b: (parseFloat(d.b) * 0.4).toFixed(1) })) : daisies, bubbles, bubblesShown, meadow, shelves, grassBack, grassFront,
enterLabel: (st.touch ? 'tap' : 'click') + ' to enter',
open,
showLanding: !open,
landingClass: leaving ? 'leaving' : 'fadein',
rootCls: open ? '' : 'lockroot',
creditsOpen: !!st.credits,
creditsExpanded: st.credits ? 'true' : 'false',
creditsArrow: st.credits ? '\u25BE' : '\u25B4',
toggleCredits: () => this.setState({ credits: !(this.state && this.state.credits) }),
wCreditsOpen: !!st.wCredits, wCreditsExpanded: st.wCredits ? 'true' : 'false', wCreditsArrow: st.wCredits ? '\u25BE' : '\u25B4',
cabCls: st.cab ? 'open' : '', cabExpanded: st.cab ? 'true' : 'false', cabTab: st.cab ? '0' : '-1', cabLabel: st.cab ? 'close the archive cabinet' : 'open the archive cabinet',
toggleCab: (e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({ cab: !(this.state && this.state.cab) }); },
openBa: openProj('ba'),
toggleWorkCredits: () => this.setState({ wCredits: !(this.state && this.state.wCredits) }),
enter: () => {
if (this.state && this.state.leaving) return;
this.setState({ leaving: true });
this.t = setTimeout(() => this.setState({ open: true, leaving: false }), 650);
},
goBack: () => this.setState({ open: false, leaving: false }),
arrowGo: view === 'project' ? navTo(pj.arch ? 'archive' : 'work') : view === 'archive' ? navTo('work') : () => this.setState({ open: false, leaving: false }),
arrowCls: view === 'project' || view === 'archive' ? '' : 'up',
arrowLabel: view === 'project' ? (pj.arch ? 'back to the archive' : 'back to work') : view === 'archive' ? 'back to work' : 'back to the landing page',
gallery,
lbOpen: !!lbIt,
lbMany: lbN > 1,
lbSrc: lbIt ? '/_blob/' + lbIt[0] : '',
lbCap: lbG ? lbG.name : '',
lbPos: lbIt ? (lbS.i + 1) + ' / ' + lbN : '',
lbLabel: lbG ? lbG.name + ', piece ' + (lbS.i + 1) + ' of ' + lbN : '',
lbClose,
lbPrev: lbIt ? lbGo(-1) : null,
lbNext: lbIt ? lbGo(1) : null,
lbKey: (e) => { if (!lbIt || !e) return; if (e.key === 'Escape') { e.preventDefault(); lbClose(); } else if (e.key === 'ArrowLeft') { e.preventDefault(); lbGo(-1)(); } else if (e.key === 'ArrowRight') { e.preventDefault(); lbGo(1)(); } },
isWork: view === 'work',
navArchive: navTo('archive'),
isArchive: view === 'archive',
archLocked: !ARCHP.length, archOpen: ARCHP.length > 0,
archErr: st.archErr || '', hasArchErr: !!st.archErr, archBusy: !!st.archBusy,
archBtn: st.archBusy ? 'Unlocking…' : 'Unlock',
archSubmit: (e) => { if (e && e.preventDefault) e.preventDefault(); this.unlockArchive(); },
archItems: ARCHP.map((q) => ({ title: q.title, kind: q.kind, img: q.cover ? '/_blob/' + q.cover : '', noimg: !q.cover, open: openProj(q.k) })),
isPersonal: view === 'personal',
navWork: view === 'work' || view === 'project' || view === 'archive' ? 'on' : '',
navPersonal: view === 'personal' ? 'on' : '',
curWork: view === 'work' ? 'page' : 'false',
curPersonal: view === 'personal' ? 'page' : 'false',
goWork: navTo('work'),
menuCls: this.state.menu ? 'nav-wrap open' : 'nav-wrap',
menuExp: this.state.menu ? 'true' : 'false',
menuLabel: this.state.menu ? 'close menu' : 'open menu',
toggleMenu: () => this.setState({ menu: !this.state.menu }),
goPersonal: navTo('personal'),
isAbout: view === 'about',
navAbout: view === 'about' ? 'on' : '',
curAbout: view === 'about' ? 'page' : 'false',
goAbout: navTo('about'),
isProject: view === 'project',
pj: (() => {
const PH = mob ? 120 : 230;
const hasVid = !!pj.video;
const rest = hasVid ? pj.imgs : pj.imgs.slice(1);
const off = hasVid ? 0 : 1;
const prev = pjL[(pjI + pjL.length - 1) % pjL.length], next = pjL[(pjI + 1) % pjL.length];
const card = (q) => ({ title: q.title, kind: q.kind, img: q.cover ? '/_blob/' + q.cover : '', noimg: !q.cover, open: openProj(q.k) });
let csR = [];
return {
title: pj.title, tag: pj.tag, cat: pj.arch ? 'archive' : CATN[pj.cat], accent: pj.accent,
hero: pj.imgs.length ? '/_blob/' + pj.imgs[0][0] : '', hasHero: !hasVid && pj.imgs.length > 0, noHero: !hasVid && !pj.imgs.length,
hasVid, video: hasVid ? '/_blob/' + pj.video : '', videoAr: String(pj.var || 1.778), vcap: pj.vcap || '', poster: pj.vposter ? '/_blob/' + pj.vposter : pj.imgs.length ? '/_blob/' + pj.imgs[0][0] : '', vcls: (pj.var || 1.778) < 1 ? 'pj-video-tall' : '', galT: pj.galT || 'Selected work',
proc: (pj.proc || []).map((c) => ({ src: '/_blob/' + c[0], t: c[1], d: c[2] })), hasProc: !!(pj.proc && pj.proc.length),
heroAr: pj.imgs.length ? String(pj.imgs[0][1]) : '2',
heroOpen: () => this.setState({ lb: { g: 0, i: 0 } }),
facts: pj.facts.map((f) => ({ k: f[0], v: f[1] })),
over: pj.over.map((t) => ({ t })),
did: pj.did.map((t) => ({ t })),
out: pj.out, hasOut: !!pj.out,
gal: rest.map((it, i) => ({ src: '/_blob/' + it[0], flex: it[1] + ' 1 ' + Math.round(it[1] * PH) + 'px', ar: String(it[1]), alt: pj.title + ' by Chloe Le, image ' + (i + 1 + off), label: 'open ' + pj.title + ' image ' + (i + 1 + off) + ' of ' + pj.imgs.length, open: () => this.setState({ lb: { g: 0, i: i + off } }) })),
hasGal: rest.length > 0 && !pj.split,
isSplit: !!pj.split, notSplit: !pj.split,
links: (pj.links || []).map((l) => ({ label: l[0], href: l[1] })), hasLinks: !!(pj.links && pj.links.length),
hasSite: !!pj.site, site: pj.site ? '/_blob/' + pj.site[0] : '', siteAr: pj.site ? String(pj.site[1]) : '1', siteUrl: pj.site ? pj.site[2].replace(/^https?:\/\//, '') : '', siteHref: pj.site ? pj.site[2] : '#',
hasPosts: !!(pj.posts && pj.posts.length), postsHref: pj.links && pj.links[1] ? pj.links[1][1] : '#',
posts: (pj.posts || []).map((it, i) => ({ src: '/_blob/' + it[0], ar: String(it[1]), alt: pj.title + ' Instagram post ' + (i + 1), label: 'open instagram post ' + (i + 1), open: () => this.setState({ lb: { g: 1, i } }) })),
rows: (csR = (() => {
if (!pj.split) return [];
const A = pj.split;
const cell = (side, r, o) => Object.assign({ ord: String(side * 20 + r), pos: 'grid-row: ' + (r + 1) + '; grid-column: ' + (side + 1), side: side ? 'cs-b' : 'cs-a', eye: '', title: '', tag: '', hasHead: false, hasVids: false, vids: [], hasFacts: false, facts: [], h: '', hasH: false, paras: [], hasDid: false, did: [], hasImg: false, img: '', ar: '1', open: null, cap: '', capd: '', hasOut: false, out: '', empty: false }, o, { side: (side ? 'cs-b' : 'cs-a') + (o.empty ? ' cs-empty' : '') });
const R = [];
const add = (f) => { const r = R.length; R.push({ cells: A.map((q, side) => cell(side, r, f(q, side))) }); };
add((q) => ({ hasHead: true, eye: q.eye, title: q.title, tag: q.tag }));
add((q) => ({ hasVids: true, vids: q.vids.filter((v) => v[1] < 1).map((v) => ({ src: '/_blob/' + v[0], ar: String(v[1]), cap: v[2], cls: 'cs-vid cs-vid-phone' })) }));
add((q) => ({ hasFacts: true, facts: q.facts.map((f) => ({ k: f[0], v: f[1] })) }));
add((q) => ({ hasH: true, h: 'Brief', paras: q.over.map((t) => ({ t })) }));
add((q) => ({ hasH: true, h: 'What I did', hasDid: true, did: q.did.map((t) => ({ t })) }));
const n = Math.max(...A.map((q) => q.steps.length));
for (let k = 0; k < n; k++) add((q) => { const st2 = q.steps[k]; if (!st2) return { empty: true }; const im = pj.imgs[st2[0]]; return { hasH: k === 0, h: 'Process', hasImg: true, img: '/_blob/' + im[0], ar: String(im[1]), cap: String(k + 1).padStart(2, '0') + ' - ' + st2[1], capd: st2[2], open: () => this.setState({ lb: { g: 0, i: st2[0] } }) }; });
add((q) => { const w = q.vids.filter((v) => v[1] >= 1); return w.length ? { hasVids: true, hasH: true, h: 'Desktop prototype', vids: w.map((v) => ({ src: '/_blob/' + v[0], ar: String(v[1]), cap: v[2], cls: 'cs-vid' })) } : { empty: true }; });
add((q) => ({ hasOut: true, out: q.out }));
return R;
})()),
cols: csR.length ? [0, 1].map((side) => ({ cells: csR.map((r) => r.cells[side]) })) : [],
csTabs: pj.split ? pj.split.map((q, i) => ({ label: q.title, cls: 'cs-tab' + ((st.csTab || 0) === i ? ' on' : ''), go: () => { try { const g = document.querySelector('.cs-grid'); if (g) g.scrollTo({ left: i * g.clientWidth, behavior: 'smooth' }); } catch (e) {} this.setState({ csTab: i }); } })) : [],
csScroll: (e) => { try { const g = e.currentTarget || e.target; const i = Math.round(g.scrollLeft / Math.max(1, g.clientWidth)); if (i !== (this.state.csTab || 0)) this.setState({ csTab: i }); } catch (er) {} },
prev: card(prev), next: card(next)
};
})()
};
}
}

DCMount(Component, {"pk": "rhr", "start": "landing", "theme": "meadow"});
})();
