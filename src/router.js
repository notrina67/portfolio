/* URL routing for the static site: keeps the address bar in step with the
   portfolio's view state, so every page and project has its own link.
   ROUTES and PROJ_TITLES are injected by build.py. */
function makeRouted(Base, ROUTES, TITLES) {
  var byPath = {}, k;
  for (k in ROUTES.views) byPath[ROUTES.views[k]] = { open: true, view: k };
  for (k in ROUTES.projects) byPath['/' + ROUTES.projects[k]] = { open: true, view: 'project', pk: k };
  var SITE = 'Chloe Le';
  var BASE_TITLE = document.title;
  var VIEW_TITLES = { work: 'Work', personal: 'Personal work', about: 'About + resume', archive: 'Archive' };

  function norm(p) { p = (p || '/').replace(/\/+$/, ''); return p === '' ? '/' : p.toLowerCase(); }
  function parse(p) { return byPath[norm(p)] || null; }
  function toPath(st, props) {
    if (!st.open) return '/';
    var v = st.view || 'work';
    if (v === 'project') {
      var pk = st.pk || props.pk;
      return ROUTES.projects[pk] ? '/' + ROUTES.projects[pk] : '/work';
    }
    return ROUTES.views[v] || '/work';
  }
  function titleFor(st, props) {
    if (!st.open) return BASE_TITLE;
    var v = st.view || 'work';
    if (v === 'project') { var t = TITLES[st.pk || props.pk]; return t ? t + ' | ' + SITE : BASE_TITLE; }
    return (VIEW_TITLES[v] || 'Work') + ' | ' + SITE;
  }

  return class Routed extends Base {
    constructor(props) {
      super(props);
      var r = parse(location.pathname);
      if (r) this.state = Object.assign({}, this.state || {}, r);
    }
    componentDidMount() {
      if (super.componentDidMount) super.componentDidMount();
      var self = this;
      this._onPop = function () {
        var r = parse(location.pathname) || { open: false };
        self._fromPop = true;
        self.setState(Object.assign({ lb: null, menu: false, leaving: false }, r));
        try { window.scrollTo(0, 0); } catch (e) {}
      };
      window.addEventListener('popstate', this._onPop);
      this._syncUrl(true);
    }
    componentDidUpdate(pp, ps, snap) {
      if (super.componentDidUpdate) super.componentDidUpdate(pp, ps, snap);
      this._syncUrl(false);
    }
    componentWillUnmount() {
      window.removeEventListener('popstate', this._onPop);
      if (super.componentWillUnmount) super.componentWillUnmount();
    }
    _syncUrl(first) {
      var st = this.state || {}, props = this.props || {};
      var want = toPath(st, props);
      if (location.pathname !== want) {
        if (first || this._fromPop) history.replaceState(null, '', want + location.search);
        else history.pushState(null, '', want + location.search);
      }
      this._fromPop = false;
      var t = titleFor(st, props);
      if (document.title !== t) document.title = t;
    }
  };
}
