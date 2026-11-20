/* Minimal standalone renderer for the portfolio template.
   Reads <template id="dc-tpl">, evaluates {{holes}}, <sc-if> and <sc-for>,
   and renders with Preact. */
(function () {
  var P = window.preact, h = P.h;
  var EV = { onclick: 'onClick', onkeydown: 'onKeyDown', onkeyup: 'onKeyUp', onscroll: 'onScroll', onsubmit: 'onSubmit', oninput: 'onInput', onchange: 'onChange', onmouseenter: 'onMouseEnter', onmouseleave: 'onMouseLeave', onfocus: 'onFocus', onblur: 'onBlur', onpointerdown: 'onPointerDown', onpointerup: 'onPointerUp', onload: 'onLoad', onended: 'onEnded' };
  var HOLE = /\{\{([^}]*)\}\}/g, WHOLE = /^\{\{([^}]*)\}\}$/;

  function lookup(scope, expr) {
    var p = expr.trim();
    if (p === 'true') return true;
    if (p === 'false') return false;
    if (p === 'null') return null;
    if (/^-?\d+(\.\d+)?$/.test(p)) return Number(p);
    if (/^(['"]).*\1$/.test(p)) return p.slice(1, -1);
    var parts = p.split('.'), v;
    for (var i = scope.length - 1; i >= 0; i--) {
      var s = scope[i];
      if (s && typeof s === 'object' && parts[0] in s) { v = s[parts[0]]; break; }
    }
    for (var k = 1; k < parts.length; k++) v = v == null ? undefined : v[parts[k]];
    return v;
  }
  function interp(str, scope) {
    return str.replace(HOLE, function (_, e) { var v = lookup(scope, e); return v == null || v === false ? '' : String(v); });
  }
  function truthy(v) { return Array.isArray(v) ? v.length > 0 : !!v; }

  // Compile DOM -> lightweight tree once.
  function compile(node) {
    if (node.nodeType === 3) {
      var t = node.nodeValue;
      if (!t.includes('{{')) return { t: 'txt', v: t };
      var m = t.trim().match(WHOLE);
      return { t: 'hole', v: t, whole: m ? m[1] : null };
    }
    if (node.nodeType !== 1) return null;
    var tag = node.localName;
    var attrs = [];
    for (var i = 0; i < node.attributes.length; i++) {
      var a = node.attributes[i];
      if (a.name.indexOf('hint-') === 0) continue;
      var name = EV[a.name.toLowerCase()] || a.name;
      if (name === 'tabindex') name = 'tabIndex';
      var wm = a.value.match(WHOLE);
      attrs.push({ n: name, v: a.value, whole: wm ? wm[1] : null, dyn: a.value.includes('{{') });
    }
    var src = tag === 'template' ? node.content : node;
    var kids = [];
    for (var c = src.firstChild; c; c = c.nextSibling) { var x = compile(c); if (x) kids.push(x); }
    return { t: 'el', tag: tag, attrs: attrs, kids: kids };
  }

  function build(n, scope) {
    if (n.t === 'txt') return n.v;
    if (n.t === 'hole') {
      if (n.whole) { var v = lookup(scope, n.whole); return v == null || v === false ? '' : (typeof v === 'object' ? v : String(v)); }
      return interp(n.v, scope);
    }
    var get = function (name) { for (var i = 0; i < n.attrs.length; i++) if (n.attrs[i].n === name) return n.attrs[i]; };
    if (n.tag === 'sc-if') {
      var a = get('value');
      var ok = a ? (a.whole ? truthy(lookup(scope, a.whole)) : truthy(interp(a.v, scope))) : false;
      return ok ? kidsOf(n, scope) : null;
    }
    if (n.tag === 'sc-for') {
      var la = get('list'), as = (get('as') || {}).v || 'item';
      var list = la ? (la.whole ? lookup(scope, la.whole) : null) : null;
      if (!list || !list.length) return null;
      var out = [];
      for (var i = 0; i < list.length; i++) {
        var fr = {}; fr[as] = list[i]; fr.$index = i;
        out.push(kidsOf(n, scope.concat([fr])));
      }
      return out;
    }
    var props = {};
    for (var j = 0; j < n.attrs.length; j++) {
      var at = n.attrs[j], val;
      if (!at.dyn) val = at.v;
      else if (at.whole) val = lookup(scope, at.whole);
      else val = interp(at.v, scope);
      if (val == null || val === false) continue;
      props[at.n] = val;
    }
    if (n.tag === 'video') { props.playsInline = true; if ('autoplay' in props) props.muted = true; }
    return h.apply(null, [n.tag, props].concat(kidsOf(n, scope)));
  }
  function kidsOf(n, scope) {
    var out = [];
    for (var i = 0; i < n.kids.length; i++) { var b = build(n.kids[i], scope); if (b != null) out.push(b); }
    return out;
  }

  var tplEl = document.getElementById('dc-tpl');
  var root = compile(tplEl);

  window.DCLogic = class DCLogic extends P.Component {
    render() { var vals = this.renderVals(); return h(P.Fragment, null, kidsOf(root, [vals])); }
  };
  window.DCMount = function (C, props) { P.render(h(C, props || {}), document.getElementById('app')); };
})();
