var app = (function () {
    "use strict";
    function t() {}
    const e = (t) => t;
    function n(t, e) {
      for (const n in e) t[n] = e[n];
      return t;
    }
    function r(t) {
      return t();
    }
    function i() {
      return Object.create(null);
    }
    function a(t) {
      t.forEach(r);
    }
    function o(t) {
      return "function" == typeof t;
    }
    function s(t, e) {
      return t != t
        ? e == e
        : t !== e || (t && "object" == typeof t) || "function" == typeof t;
    }
    function l(e, ...n) {
      if (null == e) return t;
      const r = e.subscribe(...n);
      return r.unsubscribe ? () => r.unsubscribe() : r;
    }
    function c(t, e, n) {
      t.$$.on_destroy.push(l(e, n));
    }
    function h(t, e, n) {
      return t.set(n), e;
    }
    function u(e) {
      return e && o(e.destroy) ? e.destroy : t;
    }
    const d = "undefined" != typeof window;
    let m = d ? () => window.performance.now() : () => Date.now(),
      p = d ? (t) => requestAnimationFrame(t) : t;
    const f = new Set();
    function g(t) {
      f.forEach((e) => {
        e.c(t) || (f.delete(e), e.f());
      }),
        0 !== f.size && p(g);
    }
    function y(t) {
      let e;
      return (
        0 === f.size && p(g),
        {
          promise: new Promise((n) => {
            f.add((e = { c: t, f: n }));
          }),
          abort() {
            f.delete(e);
          },
        }
      );
    }
    function x(t, e) {
      t.appendChild(e);
    }
    function v(t) {
      if (!t) return document;
      const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
      return e && e.host ? e : t.ownerDocument;
    }
    function b(t) {
      const e = M("style");
      return (
        (function (t, e) {
          x(t.head || t, e), e.sheet;
        })(v(t), e),
        e.sheet
      );
    }
    function w(t, e, n) {
      t.insertBefore(e, n || null);
    }
    function k(t) {
      t.parentNode && t.parentNode.removeChild(t);
    }
    function $(t, e) {
      for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
    }
    function M(t) {
      return document.createElement(t);
    }
    function S(t) {
      return document.createElementNS("http://www.w3.org/2000/svg", t);
    }
    function z(t) {
      return document.createTextNode(t);
    }
    function A() {
      return z(" ");
    }
    function T() {
      return z("");
    }
    function N(t, e, n, r) {
      return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
    }
    function B(t, e, n) {
      null == n
        ? t.removeAttribute(e)
        : t.getAttribute(e) !== n && t.setAttribute(e, n);
    }
    function C(t, e) {
      (e = "" + e), t.wholeText !== e && (t.data = e);
    }
    function q(t, e) {
      t.value = null == e ? "" : e;
    }
    function E(t, e, n, r) {
      null === n
        ? t.style.removeProperty(e)
        : t.style.setProperty(e, n, r ? "important" : "");
    }
    let L;
    function _() {
      if (void 0 === L) {
        L = !1;
        try {
          "undefined" != typeof window && window.parent && window.parent.document;
        } catch (t) {
          L = !0;
        }
      }
      return L;
    }
    function I(t, e) {
      "static" === getComputedStyle(t).position &&
        (t.style.position = "relative");
      const n = M("iframe");
      n.setAttribute(
        "style",
        "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;",
      ),
        n.setAttribute("aria-hidden", "true"),
        (n.tabIndex = -1);
      const r = _();
      let i;
      return (
        r
          ? ((n.src =
              "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>"),
            (i = N(window, "message", (t) => {
              t.source === n.contentWindow && e();
            })))
          : ((n.src = "about:blank"),
            (n.onload = () => {
              i = N(n.contentWindow, "resize", e);
            })),
        x(t, n),
        () => {
          (r || (i && n.contentWindow)) && i(), k(n);
        }
      );
    }
    function R(t, e, n) {
      t.classList[n ? "add" : "remove"](e);
    }
    class O {
      constructor(t = !1) {
        (this.is_svg = !1), (this.is_svg = t), (this.e = this.n = null);
      }
      c(t) {
        this.h(t);
      }
      m(t, e, n = null) {
        this.e ||
          (this.is_svg ? (this.e = S(e.nodeName)) : (this.e = M(e.nodeName)),
          (this.t = e),
          this.c(t)),
          this.i(n);
      }
      h(t) {
        (this.e.innerHTML = t), (this.n = Array.from(this.e.childNodes));
      }
      i(t) {
        for (let e = 0; e < this.n.length; e += 1) w(this.t, this.n[e], t);
      }
      p(t) {
        this.d(), this.h(t), this.i(this.a);
      }
      d() {
        this.n.forEach(k);
      }
    }
    const P = new Map();
    let H,
      D = 0;
    function F(t, e, n, r, i, a, o, s = 0) {
      const l = 16.666 / r;
      let c = "{\n";
      for (let t = 0; t <= 1; t += l) {
        const r = e + (n - e) * a(t);
        c += 100 * t + `%{${o(r, 1 - r)}}\n`;
      }
      const h = c + `100% {${o(n, 1 - n)}}\n}`,
        u = `__svelte_${(function (t) {
          let e = 5381,
            n = t.length;
          for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
          return e >>> 0;
        })(h)}_${s}`,
        d = v(t),
        { stylesheet: m, rules: p } =
          P.get(d) ||
          (function (t, e) {
            const n = { stylesheet: b(e), rules: {} };
            return P.set(t, n), n;
          })(d, t);
      p[u] ||
        ((p[u] = !0), m.insertRule(`@keyframes ${u} ${h}`, m.cssRules.length));
      const f = t.style.animation || "";
      return (
        (t.style.animation = `${f ? `${f}, ` : ""}${u} ${r}ms linear ${i}ms 1 both`),
        (D += 1),
        u
      );
    }
    function j(t, e) {
      const n = (t.style.animation || "").split(", "),
        r = n.filter(
          e ? (t) => t.indexOf(e) < 0 : (t) => -1 === t.indexOf("__svelte"),
        ),
        i = n.length - r.length;
      i &&
        ((t.style.animation = r.join(", ")),
        (D -= i),
        D ||
          p(() => {
            D ||
              (P.forEach((t) => {
                const { ownerNode: e } = t.stylesheet;
                e && k(e);
              }),
              P.clear());
          }));
    }
    function V(t) {
      H = t;
    }
    function U() {
      if (!H) throw new Error("Function called outside component initialization");
      return H;
    }
    function G(t) {
      U().$$.on_mount.push(t);
    }
    const W = [],
      X = [],
      Y = [],
      Z = [],
      K = Promise.resolve();
    let J = !1;
    function Q(t) {
      Y.push(t);
    }
    const tt = new Set();
    let et,
      nt = 0;
    function rt() {
      const t = H;
      do {
        for (; nt < W.length; ) {
          const t = W[nt];
          nt++, V(t), it(t.$$);
        }
        for (V(null), W.length = 0, nt = 0; X.length; ) X.pop()();
        for (let t = 0; t < Y.length; t += 1) {
          const e = Y[t];
          tt.has(e) || (tt.add(e), e());
        }
        Y.length = 0;
      } while (W.length);
      for (; Z.length; ) Z.pop()();
      (J = !1), tt.clear(), V(t);
    }
    function it(t) {
      if (null !== t.fragment) {
        t.update(), a(t.before_update);
        const e = t.dirty;
        (t.dirty = [-1]),
          t.fragment && t.fragment.p(t.ctx, e),
          t.after_update.forEach(Q);
      }
    }
    function at() {
      return (
        et ||
          ((et = Promise.resolve()),
          et.then(() => {
            et = null;
          })),
        et
      );
    }
    function ot(t, e, n) {
      t.dispatchEvent(
        (function (t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
          const i = document.createEvent("CustomEvent");
          return i.initCustomEvent(t, n, r, e), i;
        })(`${e ? "intro" : "outro"}${n}`),
      );
    }
    const st = new Set();
    let lt;
    function ct() {
      lt = { r: 0, c: [], p: lt };
    }
    function ht() {
      lt.r || a(lt.c), (lt = lt.p);
    }
    function ut(t, e) {
      t && t.i && (st.delete(t), t.i(e));
    }
    function dt(t, e, n, r) {
      if (t && t.o) {
        if (st.has(t)) return;
        st.add(t),
          lt.c.push(() => {
            st.delete(t), r && (n && t.d(1), r());
          }),
          t.o(e);
      } else r && r();
    }
    const mt = { duration: 0 };
    function pt(n, r, i) {
      const a = { direction: "in" };
      let s,
        l,
        c = r(n, i, a),
        h = !1,
        u = 0;
      function d() {
        s && j(n, s);
      }
      function p() {
        const {
          delay: r = 0,
          duration: i = 300,
          easing: a = e,
          tick: o = t,
          css: p,
        } = c || mt;
        p && (s = F(n, 0, 1, i, r, a, p, u++)), o(0, 1);
        const f = m() + r,
          g = f + i;
        l && l.abort(),
          (h = !0),
          Q(() => ot(n, !0, "start")),
          (l = y((t) => {
            if (h) {
              if (t >= g) return o(1, 0), ot(n, !0, "end"), d(), (h = !1);
              if (t >= f) {
                const e = a((t - f) / i);
                o(e, 1 - e);
              }
            }
            return h;
          }));
      }
      let f = !1;
      return {
        start() {
          f || ((f = !0), j(n), o(c) ? ((c = c(a)), at().then(p)) : p());
        },
        invalidate() {
          f = !1;
        },
        end() {
          h && (d(), (h = !1));
        },
      };
    }
    function ft(n, r, i) {
      const s = { direction: "out" };
      let l,
        c = r(n, i, s),
        h = !0;
      const u = lt;
      function d() {
        const {
          delay: r = 0,
          duration: i = 300,
          easing: o = e,
          tick: s = t,
          css: d,
        } = c || mt;
        d && (l = F(n, 1, 0, i, r, o, d));
        const p = m() + r,
          f = p + i;
        Q(() => ot(n, !1, "start")),
          y((t) => {
            if (h) {
              if (t >= f) return s(0, 1), ot(n, !1, "end"), --u.r || a(u.c), !1;
              if (t >= p) {
                const e = o((t - p) / i);
                s(1 - e, e);
              }
            }
            return h;
          });
      }
      return (
        (u.r += 1),
        o(c)
          ? at().then(() => {
              (c = c(s)), d();
            })
          : d(),
        {
          end(t) {
            t && c.tick && c.tick(1, 0), h && (l && j(n, l), (h = !1));
          },
        }
      );
    }
    function gt(n, r, i, s) {
      const l = { direction: "both" };
      let c = r(n, i, l),
        h = s ? 0 : 1,
        u = null,
        d = null,
        p = null;
      function f() {
        p && j(n, p);
      }
      function g(t, e) {
        const n = t.b - h;
        return (
          (e *= Math.abs(n)),
          {
            a: h,
            b: t.b,
            d: n,
            duration: e,
            start: t.start,
            end: t.start + e,
            group: t.group,
          }
        );
      }
      function x(r) {
        const {
            delay: i = 0,
            duration: o = 300,
            easing: s = e,
            tick: l = t,
            css: x,
          } = c || mt,
          v = { start: m() + i, b: r };
        r || ((v.group = lt), (lt.r += 1)),
          u || d
            ? (d = v)
            : (x && (f(), (p = F(n, h, r, o, i, s, x))),
              r && l(0, 1),
              (u = g(v, o)),
              Q(() => ot(n, r, "start")),
              y((t) => {
                if (
                  (d &&
                    t > d.start &&
                    ((u = g(d, o)),
                    (d = null),
                    ot(n, u.b, "start"),
                    x && (f(), (p = F(n, h, u.b, u.duration, 0, s, c.css)))),
                  u)
                )
                  if (t >= u.end)
                    l((h = u.b), 1 - h),
                      ot(n, u.b, "end"),
                      d || (u.b ? f() : --u.group.r || a(u.group.c)),
                      (u = null);
                  else if (t >= u.start) {
                    const e = t - u.start;
                    (h = u.a + u.d * s(e / u.duration)), l(h, 1 - h);
                  }
                return !(!u && !d);
              }));
      }
      return {
        run(t) {
          o(c)
            ? at().then(() => {
                (c = c(l)), x(t);
              })
            : x(t);
        },
        end() {
          f(), (u = d = null);
        },
      };
    }
    const yt =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof globalThis
          ? globalThis
          : global;
    function xt(t) {
      t && t.c();
    }
    function vt(t, e, n, i) {
      const { fragment: s, after_update: l } = t.$$;
      s && s.m(e, n),
        i ||
          Q(() => {
            const e = t.$$.on_mount.map(r).filter(o);
            t.$$.on_destroy ? t.$$.on_destroy.push(...e) : a(e),
              (t.$$.on_mount = []);
          }),
        l.forEach(Q);
    }
    function bt(t, e) {
      const n = t.$$;
      null !== n.fragment &&
        (a(n.on_destroy),
        n.fragment && n.fragment.d(e),
        (n.on_destroy = n.fragment = null),
        (n.ctx = []));
    }
    function wt(t, e) {
      -1 === t.$$.dirty[0] &&
        (W.push(t), J || ((J = !0), K.then(rt)), t.$$.dirty.fill(0)),
        (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
    }
    function kt(e, n, r, o, s, l, c, h = [-1]) {
      const u = H;
      V(e);
      const d = (e.$$ = {
        fragment: null,
        ctx: [],
        props: l,
        update: t,
        not_equal: s,
        bound: i(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(n.context || (u ? u.$$.context : [])),
        callbacks: i(),
        dirty: h,
        skip_bound: !1,
        root: n.target || u.$$.root,
      });
      c && c(d.root);
      let m = !1;
      if (
        ((d.ctx = r
          ? r(e, n.props || {}, (t, n, ...r) => {
              const i = r.length ? r[0] : n;
              return (
                d.ctx &&
                  s(d.ctx[t], (d.ctx[t] = i)) &&
                  (!d.skip_bound && d.bound[t] && d.bound[t](i), m && wt(e, t)),
                n
              );
            })
          : []),
        d.update(),
        (m = !0),
        a(d.before_update),
        (d.fragment = !!o && o(d.ctx)),
        n.target)
      ) {
        if (n.hydrate) {
          const t = (function (t) {
            return Array.from(t.childNodes);
          })(n.target);
          d.fragment && d.fragment.l(t), t.forEach(k);
        } else d.fragment && d.fragment.c();
        n.intro && ut(e.$$.fragment),
          vt(e, n.target, n.anchor, n.customElement),
          rt();
      }
      V(u);
    }
    class $t {
      $destroy() {
        bt(this, 1), (this.$destroy = t);
      }
      $on(e, n) {
        if (!o(n)) return t;
        const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return (
          r.push(n),
          () => {
            const t = r.indexOf(n);
            -1 !== t && r.splice(t, 1);
          }
        );
      }
      $set(t) {
        var e;
        this.$$set &&
          ((e = t), 0 !== Object.keys(e).length) &&
          ((this.$$.skip_bound = !0), this.$$set(t), (this.$$.skip_bound = !1));
      }
    }
    const Mt = [];
    function St(e, n = t) {
      let r;
      const i = new Set();
      function a(t) {
        if (s(e, t) && ((e = t), r)) {
          const t = !Mt.length;
          for (const t of i) t[1](), Mt.push(t, e);
          if (t) {
            for (let t = 0; t < Mt.length; t += 2) Mt[t][0](Mt[t + 1]);
            Mt.length = 0;
          }
        }
      }
      return {
        set: a,
        update: function (t) {
          a(t(e));
        },
        subscribe: function (o, s = t) {
          const l = [o, s];
          return (
            i.add(l),
            1 === i.size && (r = n(a) || t),
            o(e),
            () => {
              i.delete(l), 0 === i.size && (r(), (r = null));
            }
          );
        },
      };
    }
    function zt(e, n, r) {
      const i = !Array.isArray(e),
        s = i ? [e] : e,
        c = n.length < 2;
      return (
        (h = (e) => {
          let r = !1;
          const h = [];
          let u = 0,
            d = t;
          const m = () => {
              if (u) return;
              d();
              const r = n(i ? h[0] : h, e);
              c ? e(r) : (d = o(r) ? r : t);
            },
            p = s.map((t, e) =>
              l(
                t,
                (t) => {
                  (h[e] = t), (u &= ~(1 << e)), r && m();
                },
                () => {
                  u |= 1 << e;
                },
              ),
            );
          return (
            (r = !0),
            m(),
            function () {
              a(p), d();
            }
          );
        }),
        { subscribe: St(r, h).subscribe }
      );
      var h;
    }
    function At(t) {
      return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
    }
    function Tt(t) {
      const e = t - 1;
      return e * e * e + 1;
    }
    function Nt(t) {
      return 0 === t || 1 === t
        ? t
        : t < 0.5
          ? 0.5 * Math.pow(2, 20 * t - 10)
          : -0.5 * Math.pow(2, 10 - 20 * t) + 1;
    }
    function Bt(t) {
      return "[object Date]" === Object.prototype.toString.call(t);
    }
    function Ct(t, e) {
      if (t === e || t != t) return () => t;
      const n = typeof t;
      if (n !== typeof e || Array.isArray(t) !== Array.isArray(e))
        throw new Error("Cannot interpolate values of different type");
      if (Array.isArray(t)) {
        const n = e.map((e, n) => Ct(t[n], e));
        return (t) => n.map((e) => e(t));
      }
      if ("object" === n) {
        if (!t || !e) throw new Error("Object cannot be null");
        if (Bt(t) && Bt(e)) {
          t = t.getTime();
          const n = (e = e.getTime()) - t;
          return (e) => new Date(t + e * n);
        }
        const n = Object.keys(e),
          r = {};
        return (
          n.forEach((n) => {
            r[n] = Ct(t[n], e[n]);
          }),
          (t) => {
            const e = {};
            return (
              n.forEach((n) => {
                e[n] = r[n](t);
              }),
              e
            );
          }
        );
      }
      if ("number" === n) {
        const n = e - t;
        return (e) => t + e * n;
      }
      throw new Error(`Cannot interpolate ${n} values`);
    }
    function qt(t, r = {}) {
      const i = St(t);
      let a,
        o = t;
      function s(s, l) {
        if (null == t) return i.set((t = s)), Promise.resolve();
        o = s;
        let c = a,
          h = !1,
          {
            delay: u = 0,
            duration: d = 400,
            easing: p = e,
            interpolate: f = Ct,
          } = n(n({}, r), l);
        if (0 === d)
          return c && (c.abort(), (c = null)), i.set((t = o)), Promise.resolve();
        const g = m() + u;
        let x;
        return (
          (a = y((e) => {
            if (e < g) return !0;
            h ||
              ((x = f(t, s)), "function" == typeof d && (d = d(t, s)), (h = !0)),
              c && (c.abort(), (c = null));
            const n = e - g;
            return n > d ? (i.set((t = s)), !1) : (i.set((t = x(p(n / d)))), !0);
          })),
          a.promise
        );
      }
      return { set: s, update: (e, n) => s(e(o, t), n), subscribe: i.subscribe };
    }
    const Et = St({ top: 3, bottom: 3, left: 3, right: 3 }),
      Lt = St({ top: 0, bottom: 0, left: 0, right: 0 }),
      _t = St(!0),
      It = St([2, 1, 1]),
      Rt = St(["input", "function", "output"]),
      Ot = zt(It, (t) => t.length),
      Pt = St(!1),
      Ht = St(!1),
      Dt = St(!1),
      Ft = St(0),
      jt = St(0),
      Vt = St(0),
      Ut = St(["X", "reLu", "sigmoid"]),
      Gt = St([2, 2, 1, 1]),
      Wt = St(0),
      Xt = zt(Gt, (t) => t.length),
      Yt = St(),
      Zt = St(!1),
      Kt = St(0),
      Jt = St(0.4),
      Qt = St(0),
      te = St(0),
      ee = St(
        Array.from({ length: 7 }, () => Math.floor(10 * Math.random()) + 1),
      ),
      ne = St(!0),
      re = St(0.5),
      ie = St(),
      ae = St([1]),
      oe = St([2, 3, 1]),
      se = zt(oe, (t) => t.length),
      le = St([{ x: 0, loss: 0, y: 0 }]),
      ce = St([
        { data: -0.38845597192856474, grad: 0 },
        { data: -0.7351119989217048, grad: 0 },
        { data: -0.5571893834895465, grad: 0 },
        { data: -0.8310789942374086, grad: 0 },
        { data: -0.839566415437043, grad: 0 },
        { data: -0.19699325424587988, grad: 0 },
        { data: 0.9259721085236738, grad: 0 },
      ]),
      he = St([]),
      ue = St([]),
      de = St([]),
      me = St(!1);
    function pe(e) {
      let n, r, i, a, o, s, l, c, h, u, d, m, p, f, g, y;
      return {
        c() {
          (n = M("div")),
            (r = M("a")),
            (i = S("svg")),
            (a = S("g")),
            (o = S("g")),
            (s = S("path")),
            (l = S("path")),
            (c = S("path")),
            (h = S("path")),
            (u = S("g")),
            (d = S("path")),
            (m = S("defs")),
            (p = S("clipPath")),
            (f = S("rect")),
            (g = A()),
            (y = M("h2")),
            (y.innerHTML =
              'MLU-EXPL<span id="ai" class="svelte-1nh1tb2">AI</span>N'),
            B(s, "id", "Vector"),
            B(
              s,
              "d",
              "M90.6641 83.1836C96.8828 83.1836 101.941 78.1289 101.941 71.8906V71.8242C101.941 65.5898 96.8945 60.5312 90.6641 60.5312C84.4453 60.5312 79.3828 65.5898 79.3828 71.8242V71.8906C79.3828 78.1289 84.4336 83.1836 90.6641 83.1836Z",
            ),
            B(s, "fill", e[1]),
            B(l, "id", "Vector_2"),
            B(
              l,
              "d",
              "M143.305 83.1836C149.523 83.1836 154.586 78.1289 154.586 71.8906V71.8242C154.586 65.5898 149.535 60.5312 143.305 60.5312C137.09 60.5312 132.027 65.5898 132.027 71.8242V71.8906C132.027 78.1289 137.078 83.1836 143.305 83.1836Z",
            ),
            B(l, "fill", e[1]),
            B(c, "id", "Vector_3"),
            B(c, "d", "M163.586 159.402H173.609V122.641H163.586V159.402Z"),
            B(c, "fill", e[1]),
            B(h, "id", "Vector_4"),
            B(h, "d", "M60.3594 159.402H70.3867V122.641H60.3594V159.402Z"),
            B(h, "fill", e[1]),
            B(d, "id", "Vector_5"),
            B(
              d,
              "d",
              "M182.16 30.0781H51.8047V10.0234H182.16V30.0781ZM182.16 103.609H51.8047V40.1055H182.16V103.609ZM144.559 168.789H89.4062V113.641H144.559V168.789ZM0 0V10.0234H15.8789V46.7891H25.9023V10.0234H41.7812V113.641H79.3867V178.816H96.9297V215.578H106.957V178.816H127.016V215.578H137.039V178.816H154.586V113.641H192.188V10.0234H233.969V0",
            ),
            B(d, "fill", e[1]),
            B(u, "id", "Group"),
            B(a, "id", "mlu_robot 1"),
            B(a, "clip-path", "url(#clip0)"),
            B(f, "width", "233.97"),
            B(f, "height", "215.58"),
            B(f, "fill", "black"),
            B(p, "id", "clip0"),
            B(i, "width", "25"),
            B(i, "height", "25"),
            B(i, "viewBox", "0 0 234 216"),
            B(y, "class", "logo svelte-1nh1tb2"),
            B(r, "href", "https://mlu-explain.github.io"),
            B(r, "class", "svelte-1nh1tb2"),
            B(n, "id", "intro-icon"),
            E(n, "--ai-color", e[0]),
            B(n, "class", "svelte-1nh1tb2");
        },
        m(t, e) {
          w(t, n, e),
            x(n, r),
            x(r, i),
            x(i, a),
            x(a, o),
            x(o, s),
            x(o, l),
            x(o, c),
            x(o, h),
            x(o, u),
            x(u, d),
            x(i, m),
            x(m, p),
            x(p, f),
            x(r, g),
            x(r, y);
        },
        p(t, [e]) {
          2 & e && B(s, "fill", t[1]),
            2 & e && B(l, "fill", t[1]),
            2 & e && B(c, "fill", t[1]),
            2 & e && B(h, "fill", t[1]),
            2 & e && B(d, "fill", t[1]),
            1 & e && E(n, "--ai-color", t[0]);
        },
        i: t,
        o: t,
        d(t) {
          t && k(n);
        },
      };
    }
    function fe(t, e, n) {
      let { aiLogoColor: r = "magenta" } = e,
        { robotLogoColor: i = "black" } = e;
      return (
        (t.$$set = (t) => {
          "aiLogoColor" in t && n(0, (r = t.aiLogoColor)),
            "robotLogoColor" in t && n(1, (i = t.robotLogoColor));
        }),
        [r, i]
      );
    }
    class ge extends $t {
      constructor(t) {
        super(), kt(this, t, fe, pe, s, { aiLogoColor: 0, robotLogoColor: 1 });
      }
    }
    function ye(e) {
      let n;
      return {
        c() {
          (n = M("section")),
            (n.innerHTML =
              '<h1 id="intro-hed" class="svelte-1r1kppw">Neural Networks</h1> \n  <h3 id="intro-author" class="svelte-1r1kppw"><a id="author-link" href="https://twitter.com/jdwlbr">Jared Wilber</a>, May\n    2023</h3> \n  <br/>'),
            B(n, "id", "intro"),
            B(n, "class", "svelte-1r1kppw");
        },
        m(t, e) {
          w(t, n, e);
        },
        p: t,
        i: t,
        o: t,
        d(t) {
          t && k(n);
        },
      };
    }
    class xe extends $t {
      constructor(t) {
        super(), kt(this, t, null, ye, s, {});
      }
    }
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
          ? global
          : "undefined" != typeof self && self;
    function ve(t) {
      return t &&
        t.__esModule &&
        Object.prototype.hasOwnProperty.call(t, "default")
        ? t.default
        : t;
    }
    var be,
      we,
      ke =
        ((be = function (t, e) {
          var n;
          "undefined" != typeof self && self,
            (n = function () {
              return (function (t) {
                var e = {};
                function n(r) {
                  if (e[r]) return e[r].exports;
                  var i = (e[r] = { i: r, l: !1, exports: {} });
                  return (
                    t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
                  );
                }
                return (
                  (n.m = t),
                  (n.c = e),
                  (n.d = function (t, e, r) {
                    n.o(t, e) ||
                      Object.defineProperty(t, e, { enumerable: !0, get: r });
                  }),
                  (n.r = function (t) {
                    "undefined" != typeof Symbol &&
                      Symbol.toStringTag &&
                      Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module",
                      }),
                      Object.defineProperty(t, "__esModule", { value: !0 });
                  }),
                  (n.t = function (t, e) {
                    if ((1 & e && (t = n(t)), 8 & e)) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule)
                      return t;
                    var r = Object.create(null);
                    if (
                      (n.r(r),
                      Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t,
                      }),
                      2 & e && "string" != typeof t)
                    )
                      for (var i in t)
                        n.d(
                          r,
                          i,
                          function (e) {
                            return t[e];
                          }.bind(null, i),
                        );
                    return r;
                  }),
                  (n.n = function (t) {
                    var e =
                      t && t.__esModule
                        ? function () {
                            return t.default;
                          }
                        : function () {
                            return t;
                          };
                    return n.d(e, "a", e), e;
                  }),
                  (n.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  }),
                  (n.p = ""),
                  n((n.s = 1))
                );
              })([
                function (t, e, n) {},
                function (t, e, n) {
                  n.r(e), n(0);
                  var r = (function () {
                      function t(t, e, n) {
                        (this.lexer = void 0),
                          (this.start = void 0),
                          (this.end = void 0),
                          (this.lexer = t),
                          (this.start = e),
                          (this.end = n);
                      }
                      return (
                        (t.range = function (e, n) {
                          return n
                            ? e && e.loc && n.loc && e.loc.lexer === n.loc.lexer
                              ? new t(e.loc.lexer, e.loc.start, n.loc.end)
                              : null
                            : e && e.loc;
                        }),
                        t
                      );
                    })(),
                    i = (function () {
                      function t(t, e) {
                        (this.text = void 0),
                          (this.loc = void 0),
                          (this.noexpand = void 0),
                          (this.treatAsRelax = void 0),
                          (this.text = t),
                          (this.loc = e);
                      }
                      return (
                        (t.prototype.range = function (e, n) {
                          return new t(n, r.range(this, e));
                        }),
                        t
                      );
                    })(),
                    a = function t(e, n) {
                      this.position = void 0;
                      var r,
                        i = "KaTeX parse error: " + e,
                        a = n && n.loc;
                      if (a && a.start <= a.end) {
                        var o = a.lexer.input;
                        r = a.start;
                        var s = a.end;
                        r === o.length
                          ? (i += " at end of input: ")
                          : (i += " at position " + (r + 1) + ": ");
                        var l = o.slice(r, s).replace(/[^]/g, "$&̲");
                        i +=
                          (r > 15 ? "…" + o.slice(r - 15, r) : o.slice(0, r)) +
                          l +
                          (s + 15 < o.length
                            ? o.slice(s, s + 15) + "…"
                            : o.slice(s));
                      }
                      var c = new Error(i);
                      return (
                        (c.name = "ParseError"),
                        (c.__proto__ = t.prototype),
                        (c.position = r),
                        c
                      );
                    };
                  a.prototype.__proto__ = Error.prototype;
                  var o = a,
                    s = /([A-Z])/g,
                    l = {
                      "&": "&amp;",
                      ">": "&gt;",
                      "<": "&lt;",
                      '"': "&quot;",
                      "'": "&#x27;",
                    },
                    c = /[&><"']/g,
                    h = function t(e) {
                      return "ordgroup" === e.type || "color" === e.type
                        ? 1 === e.body.length
                          ? t(e.body[0])
                          : e
                        : "font" === e.type
                          ? t(e.body)
                          : e;
                    },
                    u = {
                      contains: function (t, e) {
                        return -1 !== t.indexOf(e);
                      },
                      deflt: function (t, e) {
                        return void 0 === t ? e : t;
                      },
                      escape: function (t) {
                        return String(t).replace(c, function (t) {
                          return l[t];
                        });
                      },
                      hyphenate: function (t) {
                        return t.replace(s, "-$1").toLowerCase();
                      },
                      getBaseElem: h,
                      isCharacterBox: function (t) {
                        var e = h(t);
                        return (
                          "mathord" === e.type ||
                          "textord" === e.type ||
                          "atom" === e.type
                        );
                      },
                      protocolFromUrl: function (t) {
                        var e = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(t);
                        return null != e ? e[1] : "_relative";
                      },
                    },
                    d = (function () {
                      function t(t) {
                        (this.displayMode = void 0),
                          (this.output = void 0),
                          (this.leqno = void 0),
                          (this.fleqn = void 0),
                          (this.throwOnError = void 0),
                          (this.errorColor = void 0),
                          (this.macros = void 0),
                          (this.minRuleThickness = void 0),
                          (this.colorIsTextColor = void 0),
                          (this.strict = void 0),
                          (this.trust = void 0),
                          (this.maxSize = void 0),
                          (this.maxExpand = void 0),
                          (this.globalGroup = void 0),
                          (t = t || {}),
                          (this.displayMode = u.deflt(t.displayMode, !1)),
                          (this.output = u.deflt(t.output, "htmlAndMathml")),
                          (this.leqno = u.deflt(t.leqno, !1)),
                          (this.fleqn = u.deflt(t.fleqn, !1)),
                          (this.throwOnError = u.deflt(t.throwOnError, !0)),
                          (this.errorColor = u.deflt(t.errorColor, "#cc0000")),
                          (this.macros = t.macros || {}),
                          (this.minRuleThickness = Math.max(
                            0,
                            u.deflt(t.minRuleThickness, 0),
                          )),
                          (this.colorIsTextColor = u.deflt(
                            t.colorIsTextColor,
                            !1,
                          )),
                          (this.strict = u.deflt(t.strict, "warn")),
                          (this.trust = u.deflt(t.trust, !1)),
                          (this.maxSize = Math.max(0, u.deflt(t.maxSize, 1 / 0))),
                          (this.maxExpand = Math.max(
                            0,
                            u.deflt(t.maxExpand, 1e3),
                          )),
                          (this.globalGroup = u.deflt(t.globalGroup, !1));
                      }
                      var e = t.prototype;
                      return (
                        (e.reportNonstrict = function (t, e, n) {
                          var r = this.strict;
                          if (
                            ("function" == typeof r && (r = r(t, e, n)),
                            r && "ignore" !== r)
                          ) {
                            if (!0 === r || "error" === r)
                              throw new o(
                                "LaTeX-incompatible input and strict mode is set to 'error': " +
                                  e +
                                  " [" +
                                  t +
                                  "]",
                                n,
                              );
                            "warn" === r
                              ? "undefined" != typeof console &&
                                console.warn(
                                  "LaTeX-incompatible input and strict mode is set to 'warn': " +
                                    e +
                                    " [" +
                                    t +
                                    "]",
                                )
                              : "undefined" != typeof console &&
                                console.warn(
                                  "LaTeX-incompatible input and strict mode is set to unrecognized '" +
                                    r +
                                    "': " +
                                    e +
                                    " [" +
                                    t +
                                    "]",
                                );
                          }
                        }),
                        (e.useStrictBehavior = function (t, e, n) {
                          var r = this.strict;
                          if ("function" == typeof r)
                            try {
                              r = r(t, e, n);
                            } catch (t) {
                              r = "error";
                            }
                          return !(
                            !r ||
                            "ignore" === r ||
                            (!0 !== r &&
                              "error" !== r &&
                              ("warn" === r
                                ? ("undefined" != typeof console &&
                                    console.warn(
                                      "LaTeX-incompatible input and strict mode is set to 'warn': " +
                                        e +
                                        " [" +
                                        t +
                                        "]",
                                    ),
                                  1)
                                : ("undefined" != typeof console &&
                                    console.warn(
                                      "LaTeX-incompatible input and strict mode is set to unrecognized '" +
                                        r +
                                        "': " +
                                        e +
                                        " [" +
                                        t +
                                        "]",
                                    ),
                                  1)))
                          );
                        }),
                        (e.isTrusted = function (t) {
                          t.url &&
                            !t.protocol &&
                            (t.protocol = u.protocolFromUrl(t.url));
                          var e =
                            "function" == typeof this.trust
                              ? this.trust(t)
                              : this.trust;
                          return Boolean(e);
                        }),
                        t
                      );
                    })(),
                    m = (function () {
                      function t(t, e, n) {
                        (this.id = void 0),
                          (this.size = void 0),
                          (this.cramped = void 0),
                          (this.id = t),
                          (this.size = e),
                          (this.cramped = n);
                      }
                      var e = t.prototype;
                      return (
                        (e.sup = function () {
                          return p[f[this.id]];
                        }),
                        (e.sub = function () {
                          return p[g[this.id]];
                        }),
                        (e.fracNum = function () {
                          return p[y[this.id]];
                        }),
                        (e.fracDen = function () {
                          return p[x[this.id]];
                        }),
                        (e.cramp = function () {
                          return p[v[this.id]];
                        }),
                        (e.text = function () {
                          return p[b[this.id]];
                        }),
                        (e.isTight = function () {
                          return this.size >= 2;
                        }),
                        t
                      );
                    })(),
                    p = [
                      new m(0, 0, !1),
                      new m(1, 0, !0),
                      new m(2, 1, !1),
                      new m(3, 1, !0),
                      new m(4, 2, !1),
                      new m(5, 2, !0),
                      new m(6, 3, !1),
                      new m(7, 3, !0),
                    ],
                    f = [4, 5, 4, 5, 6, 7, 6, 7],
                    g = [5, 5, 5, 5, 7, 7, 7, 7],
                    y = [2, 3, 4, 5, 6, 7, 6, 7],
                    x = [3, 3, 5, 5, 7, 7, 7, 7],
                    v = [1, 1, 3, 3, 5, 5, 7, 7],
                    b = [0, 1, 2, 3, 2, 3, 2, 3],
                    w = {
                      DISPLAY: p[0],
                      TEXT: p[2],
                      SCRIPT: p[4],
                      SCRIPTSCRIPT: p[6],
                    },
                    k = [
                      {
                        name: "latin",
                        blocks: [
                          [256, 591],
                          [768, 879],
                        ],
                      },
                      { name: "cyrillic", blocks: [[1024, 1279]] },
                      { name: "brahmic", blocks: [[2304, 4255]] },
                      { name: "georgian", blocks: [[4256, 4351]] },
                      {
                        name: "cjk",
                        blocks: [
                          [12288, 12543],
                          [19968, 40879],
                          [65280, 65376],
                        ],
                      },
                      { name: "hangul", blocks: [[44032, 55215]] },
                    ],
                    $ = [];
                  function M(t) {
                    for (var e = 0; e < $.length; e += 2)
                      if (t >= $[e] && t <= $[e + 1]) return !0;
                    return !1;
                  }
                  k.forEach(function (t) {
                    return t.blocks.forEach(function (t) {
                      return $.push.apply($, t);
                    });
                  });
                  var S = 80,
                    z = {
                      leftParenInner: "M291 0 H417 V300 H291 z",
                      rightParenInner: "M457 0 H583 V300 H457 z",
                      doubleleftarrow:
                        "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                      doublerightarrow:
                        "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                      leftarrow:
                        "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                      leftbrace:
                        "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                      leftbraceunder:
                        "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                      leftgroup:
                        "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                      leftgroupunder:
                        "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                      leftharpoon:
                        "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                      leftharpoonplus:
                        "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                      leftharpoondown:
                        "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                      leftharpoondownplus:
                        "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                      lefthook:
                        "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                      leftlinesegment:
                        "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                      leftmapsto:
                        "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                      leftToFrom:
                        "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                      longequal:
                        "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                      midbrace:
                        "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                      midbraceunder:
                        "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                      oiintSize1:
                        "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                      oiintSize2:
                        "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                      oiiintSize1:
                        "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                      oiiintSize2:
                        "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                      rightarrow:
                        "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                      rightbrace:
                        "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                      rightbraceunder:
                        "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                      rightgroup:
                        "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                      rightgroupunder:
                        "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                      rightharpoon:
                        "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                      rightharpoonplus:
                        "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                      rightharpoondown:
                        "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                      rightharpoondownplus:
                        "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                      righthook:
                        "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                      rightlinesegment:
                        "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                      rightToFrom:
                        "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                      twoheadleftarrow:
                        "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                      twoheadrightarrow:
                        "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                      tilde1:
                        "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                      tilde2:
                        "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                      tilde3:
                        "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                      tilde4:
                        "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                      vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                      widehat1:
                        "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                      widehat2:
                        "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                      widehat3:
                        "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                      widehat4:
                        "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                      widecheck1:
                        "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                      widecheck2:
                        "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                      widecheck3:
                        "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                      widecheck4:
                        "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                      baraboveleftarrow:
                        "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                      rightarrowabovebar:
                        "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                      baraboveshortleftharpoon:
                        "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                      rightharpoonaboveshortbar:
                        "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                      shortbaraboveleftharpoon:
                        "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                      shortrightharpoonabovebar:
                        "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z",
                    },
                    A = (function () {
                      function t(t) {
                        (this.children = void 0),
                          (this.classes = void 0),
                          (this.height = void 0),
                          (this.depth = void 0),
                          (this.maxFontSize = void 0),
                          (this.style = void 0),
                          (this.children = t),
                          (this.classes = []),
                          (this.height = 0),
                          (this.depth = 0),
                          (this.maxFontSize = 0),
                          (this.style = {});
                      }
                      var e = t.prototype;
                      return (
                        (e.hasClass = function (t) {
                          return u.contains(this.classes, t);
                        }),
                        (e.toNode = function () {
                          for (
                            var t = document.createDocumentFragment(), e = 0;
                            e < this.children.length;
                            e++
                          )
                            t.appendChild(this.children[e].toNode());
                          return t;
                        }),
                        (e.toMarkup = function () {
                          for (var t = "", e = 0; e < this.children.length; e++)
                            t += this.children[e].toMarkup();
                          return t;
                        }),
                        (e.toText = function () {
                          var t = function (t) {
                            return t.toText();
                          };
                          return this.children.map(t).join("");
                        }),
                        t
                      );
                    })(),
                    T = function (t) {
                      return t
                        .filter(function (t) {
                          return t;
                        })
                        .join(" ");
                    },
                    N = function (t, e, n) {
                      if (
                        ((this.classes = t || []),
                        (this.attributes = {}),
                        (this.height = 0),
                        (this.depth = 0),
                        (this.maxFontSize = 0),
                        (this.style = n || {}),
                        e)
                      ) {
                        e.style.isTight() && this.classes.push("mtight");
                        var r = e.getColor();
                        r && (this.style.color = r);
                      }
                    },
                    B = function (t) {
                      var e = document.createElement(t);
                      for (var n in ((e.className = T(this.classes)), this.style))
                        this.style.hasOwnProperty(n) &&
                          (e.style[n] = this.style[n]);
                      for (var r in this.attributes)
                        this.attributes.hasOwnProperty(r) &&
                          e.setAttribute(r, this.attributes[r]);
                      for (var i = 0; i < this.children.length; i++)
                        e.appendChild(this.children[i].toNode());
                      return e;
                    },
                    C = function (t) {
                      var e = "<" + t;
                      this.classes.length &&
                        (e += ' class="' + u.escape(T(this.classes)) + '"');
                      var n = "";
                      for (var r in this.style)
                        this.style.hasOwnProperty(r) &&
                          (n += u.hyphenate(r) + ":" + this.style[r] + ";");
                      for (var i in (n && (e += ' style="' + u.escape(n) + '"'),
                      this.attributes))
                        this.attributes.hasOwnProperty(i) &&
                          (e +=
                            " " + i + '="' + u.escape(this.attributes[i]) + '"');
                      e += ">";
                      for (var a = 0; a < this.children.length; a++)
                        e += this.children[a].toMarkup();
                      return (e += "</" + t + ">");
                    },
                    q = (function () {
                      function t(t, e, n, r) {
                        (this.children = void 0),
                          (this.attributes = void 0),
                          (this.classes = void 0),
                          (this.height = void 0),
                          (this.depth = void 0),
                          (this.width = void 0),
                          (this.maxFontSize = void 0),
                          (this.style = void 0),
                          N.call(this, t, n, r),
                          (this.children = e || []);
                      }
                      var e = t.prototype;
                      return (
                        (e.setAttribute = function (t, e) {
                          this.attributes[t] = e;
                        }),
                        (e.hasClass = function (t) {
                          return u.contains(this.classes, t);
                        }),
                        (e.toNode = function () {
                          return B.call(this, "span");
                        }),
                        (e.toMarkup = function () {
                          return C.call(this, "span");
                        }),
                        t
                      );
                    })(),
                    E = (function () {
                      function t(t, e, n, r) {
                        (this.children = void 0),
                          (this.attributes = void 0),
                          (this.classes = void 0),
                          (this.height = void 0),
                          (this.depth = void 0),
                          (this.maxFontSize = void 0),
                          (this.style = void 0),
                          N.call(this, e, r),
                          (this.children = n || []),
                          this.setAttribute("href", t);
                      }
                      var e = t.prototype;
                      return (
                        (e.setAttribute = function (t, e) {
                          this.attributes[t] = e;
                        }),
                        (e.hasClass = function (t) {
                          return u.contains(this.classes, t);
                        }),
                        (e.toNode = function () {
                          return B.call(this, "a");
                        }),
                        (e.toMarkup = function () {
                          return C.call(this, "a");
                        }),
                        t
                      );
                    })(),
                    L = (function () {
                      function t(t, e, n) {
                        (this.src = void 0),
                          (this.alt = void 0),
                          (this.classes = void 0),
                          (this.height = void 0),
                          (this.depth = void 0),
                          (this.maxFontSize = void 0),
                          (this.style = void 0),
                          (this.alt = e),
                          (this.src = t),
                          (this.classes = ["mord"]),
                          (this.style = n);
                      }
                      var e = t.prototype;
                      return (
                        (e.hasClass = function (t) {
                          return u.contains(this.classes, t);
                        }),
                        (e.toNode = function () {
                          var t = document.createElement("img");
                          for (var e in ((t.src = this.src),
                          (t.alt = this.alt),
                          (t.className = "mord"),
                          this.style))
                            this.style.hasOwnProperty(e) &&
                              (t.style[e] = this.style[e]);
                          return t;
                        }),
                        (e.toMarkup = function () {
                          var t =
                              "<img  src='" +
                              this.src +
                              " 'alt='" +
                              this.alt +
                              "' ",
                            e = "";
                          for (var n in this.style)
                            this.style.hasOwnProperty(n) &&
                              (e += u.hyphenate(n) + ":" + this.style[n] + ";");
                          return (
                            e && (t += ' style="' + u.escape(e) + '"'),
                            (t += "'/>")
                          );
                        }),
                        t
                      );
                    })(),
                    _ = { î: "ı̂", ï: "ı̈", í: "ı́", ì: "ı̀" },
                    I = (function () {
                      function t(t, e, n, r, i, a, o, s) {
                        (this.text = void 0),
                          (this.height = void 0),
                          (this.depth = void 0),
                          (this.italic = void 0),
                          (this.skew = void 0),
                          (this.width = void 0),
                          (this.maxFontSize = void 0),
                          (this.classes = void 0),
                          (this.style = void 0),
                          (this.text = t),
                          (this.height = e || 0),
                          (this.depth = n || 0),
                          (this.italic = r || 0),
                          (this.skew = i || 0),
                          (this.width = a || 0),
                          (this.classes = o || []),
                          (this.style = s || {}),
                          (this.maxFontSize = 0);
                        var l = (function (t) {
                          for (var e = 0; e < k.length; e++)
                            for (var n = k[e], r = 0; r < n.blocks.length; r++) {
                              var i = n.blocks[r];
                              if (t >= i[0] && t <= i[1]) return n.name;
                            }
                          return null;
                        })(this.text.charCodeAt(0));
                        l && this.classes.push(l + "_fallback"),
                          /[îïíì]/.test(this.text) && (this.text = _[this.text]);
                      }
                      var e = t.prototype;
                      return (
                        (e.hasClass = function (t) {
                          return u.contains(this.classes, t);
                        }),
                        (e.toNode = function () {
                          var t = document.createTextNode(this.text),
                            e = null;
                          for (var n in (this.italic > 0 &&
                            ((e =
                              document.createElement("span")).style.marginRight =
                              this.italic + "em"),
                          this.classes.length > 0 &&
                            ((e = e || document.createElement("span")).className =
                              T(this.classes)),
                          this.style))
                            this.style.hasOwnProperty(n) &&
                              ((e = e || document.createElement("span")).style[
                                n
                              ] = this.style[n]);
                          return e ? (e.appendChild(t), e) : t;
                        }),
                        (e.toMarkup = function () {
                          var t = !1,
                            e = "<span";
                          this.classes.length &&
                            ((t = !0),
                            (e += ' class="'),
                            (e += u.escape(T(this.classes))),
                            (e += '"'));
                          var n = "";
                          for (var r in (this.italic > 0 &&
                            (n += "margin-right:" + this.italic + "em;"),
                          this.style))
                            this.style.hasOwnProperty(r) &&
                              (n += u.hyphenate(r) + ":" + this.style[r] + ";");
                          n && ((t = !0), (e += ' style="' + u.escape(n) + '"'));
                          var i = u.escape(this.text);
                          return t ? ((e += ">"), (e += i), (e += "</span>")) : i;
                        }),
                        t
                      );
                    })(),
                    R = (function () {
                      function t(t, e) {
                        (this.children = void 0),
                          (this.attributes = void 0),
                          (this.children = t || []),
                          (this.attributes = e || {});
                      }
                      var e = t.prototype;
                      return (
                        (e.toNode = function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "svg",
                          );
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e,
                            ) && t.setAttribute(e, this.attributes[e]);
                          for (var n = 0; n < this.children.length; n++)
                            t.appendChild(this.children[n].toNode());
                          return t;
                        }),
                        (e.toMarkup = function () {
                          var t = "<svg";
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e,
                            ) && (t += " " + e + "='" + this.attributes[e] + "'");
                          t += ">";
                          for (var n = 0; n < this.children.length; n++)
                            t += this.children[n].toMarkup();
                          return (t += "</svg>");
                        }),
                        t
                      );
                    })(),
                    O = (function () {
                      function t(t, e) {
                        (this.pathName = void 0),
                          (this.alternate = void 0),
                          (this.pathName = t),
                          (this.alternate = e);
                      }
                      var e = t.prototype;
                      return (
                        (e.toNode = function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "path",
                          );
                          return (
                            this.alternate
                              ? t.setAttribute("d", this.alternate)
                              : t.setAttribute("d", z[this.pathName]),
                            t
                          );
                        }),
                        (e.toMarkup = function () {
                          return this.alternate
                            ? "<path d='" + this.alternate + "'/>"
                            : "<path d='" + z[this.pathName] + "'/>";
                        }),
                        t
                      );
                    })(),
                    P = (function () {
                      function t(t) {
                        (this.attributes = void 0), (this.attributes = t || {});
                      }
                      var e = t.prototype;
                      return (
                        (e.toNode = function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/2000/svg",
                            "line",
                          );
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e,
                            ) && t.setAttribute(e, this.attributes[e]);
                          return t;
                        }),
                        (e.toMarkup = function () {
                          var t = "<line";
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e,
                            ) && (t += " " + e + "='" + this.attributes[e] + "'");
                          return (t += "/>");
                        }),
                        t
                      );
                    })();
                  function H(t) {
                    if (t instanceof I) return t;
                    throw new Error(
                      "Expected symbolNode but got " + String(t) + ".",
                    );
                  }
                  var D = {
                      "AMS-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        65: [0, 0.68889, 0, 0, 0.72222],
                        66: [0, 0.68889, 0, 0, 0.66667],
                        67: [0, 0.68889, 0, 0, 0.72222],
                        68: [0, 0.68889, 0, 0, 0.72222],
                        69: [0, 0.68889, 0, 0, 0.66667],
                        70: [0, 0.68889, 0, 0, 0.61111],
                        71: [0, 0.68889, 0, 0, 0.77778],
                        72: [0, 0.68889, 0, 0, 0.77778],
                        73: [0, 0.68889, 0, 0, 0.38889],
                        74: [0.16667, 0.68889, 0, 0, 0.5],
                        75: [0, 0.68889, 0, 0, 0.77778],
                        76: [0, 0.68889, 0, 0, 0.66667],
                        77: [0, 0.68889, 0, 0, 0.94445],
                        78: [0, 0.68889, 0, 0, 0.72222],
                        79: [0.16667, 0.68889, 0, 0, 0.77778],
                        80: [0, 0.68889, 0, 0, 0.61111],
                        81: [0.16667, 0.68889, 0, 0, 0.77778],
                        82: [0, 0.68889, 0, 0, 0.72222],
                        83: [0, 0.68889, 0, 0, 0.55556],
                        84: [0, 0.68889, 0, 0, 0.66667],
                        85: [0, 0.68889, 0, 0, 0.72222],
                        86: [0, 0.68889, 0, 0, 0.72222],
                        87: [0, 0.68889, 0, 0, 1],
                        88: [0, 0.68889, 0, 0, 0.72222],
                        89: [0, 0.68889, 0, 0, 0.72222],
                        90: [0, 0.68889, 0, 0, 0.66667],
                        107: [0, 0.68889, 0, 0, 0.55556],
                        160: [0, 0, 0, 0, 0.25],
                        165: [0, 0.675, 0.025, 0, 0.75],
                        174: [0.15559, 0.69224, 0, 0, 0.94666],
                        240: [0, 0.68889, 0, 0, 0.55556],
                        295: [0, 0.68889, 0, 0, 0.54028],
                        710: [0, 0.825, 0, 0, 2.33334],
                        732: [0, 0.9, 0, 0, 2.33334],
                        770: [0, 0.825, 0, 0, 2.33334],
                        771: [0, 0.9, 0, 0, 2.33334],
                        989: [0.08167, 0.58167, 0, 0, 0.77778],
                        1008: [0, 0.43056, 0.04028, 0, 0.66667],
                        8245: [0, 0.54986, 0, 0, 0.275],
                        8463: [0, 0.68889, 0, 0, 0.54028],
                        8487: [0, 0.68889, 0, 0, 0.72222],
                        8498: [0, 0.68889, 0, 0, 0.55556],
                        8502: [0, 0.68889, 0, 0, 0.66667],
                        8503: [0, 0.68889, 0, 0, 0.44445],
                        8504: [0, 0.68889, 0, 0, 0.66667],
                        8513: [0, 0.68889, 0, 0, 0.63889],
                        8592: [-0.03598, 0.46402, 0, 0, 0.5],
                        8594: [-0.03598, 0.46402, 0, 0, 0.5],
                        8602: [-0.13313, 0.36687, 0, 0, 1],
                        8603: [-0.13313, 0.36687, 0, 0, 1],
                        8606: [0.01354, 0.52239, 0, 0, 1],
                        8608: [0.01354, 0.52239, 0, 0, 1],
                        8610: [0.01354, 0.52239, 0, 0, 1.11111],
                        8611: [0.01354, 0.52239, 0, 0, 1.11111],
                        8619: [0, 0.54986, 0, 0, 1],
                        8620: [0, 0.54986, 0, 0, 1],
                        8621: [-0.13313, 0.37788, 0, 0, 1.38889],
                        8622: [-0.13313, 0.36687, 0, 0, 1],
                        8624: [0, 0.69224, 0, 0, 0.5],
                        8625: [0, 0.69224, 0, 0, 0.5],
                        8630: [0, 0.43056, 0, 0, 1],
                        8631: [0, 0.43056, 0, 0, 1],
                        8634: [0.08198, 0.58198, 0, 0, 0.77778],
                        8635: [0.08198, 0.58198, 0, 0, 0.77778],
                        8638: [0.19444, 0.69224, 0, 0, 0.41667],
                        8639: [0.19444, 0.69224, 0, 0, 0.41667],
                        8642: [0.19444, 0.69224, 0, 0, 0.41667],
                        8643: [0.19444, 0.69224, 0, 0, 0.41667],
                        8644: [0.1808, 0.675, 0, 0, 1],
                        8646: [0.1808, 0.675, 0, 0, 1],
                        8647: [0.1808, 0.675, 0, 0, 1],
                        8648: [0.19444, 0.69224, 0, 0, 0.83334],
                        8649: [0.1808, 0.675, 0, 0, 1],
                        8650: [0.19444, 0.69224, 0, 0, 0.83334],
                        8651: [0.01354, 0.52239, 0, 0, 1],
                        8652: [0.01354, 0.52239, 0, 0, 1],
                        8653: [-0.13313, 0.36687, 0, 0, 1],
                        8654: [-0.13313, 0.36687, 0, 0, 1],
                        8655: [-0.13313, 0.36687, 0, 0, 1],
                        8666: [0.13667, 0.63667, 0, 0, 1],
                        8667: [0.13667, 0.63667, 0, 0, 1],
                        8669: [-0.13313, 0.37788, 0, 0, 1],
                        8672: [-0.064, 0.437, 0, 0, 1.334],
                        8674: [-0.064, 0.437, 0, 0, 1.334],
                        8705: [0, 0.825, 0, 0, 0.5],
                        8708: [0, 0.68889, 0, 0, 0.55556],
                        8709: [0.08167, 0.58167, 0, 0, 0.77778],
                        8717: [0, 0.43056, 0, 0, 0.42917],
                        8722: [-0.03598, 0.46402, 0, 0, 0.5],
                        8724: [0.08198, 0.69224, 0, 0, 0.77778],
                        8726: [0.08167, 0.58167, 0, 0, 0.77778],
                        8733: [0, 0.69224, 0, 0, 0.77778],
                        8736: [0, 0.69224, 0, 0, 0.72222],
                        8737: [0, 0.69224, 0, 0, 0.72222],
                        8738: [0.03517, 0.52239, 0, 0, 0.72222],
                        8739: [0.08167, 0.58167, 0, 0, 0.22222],
                        8740: [0.25142, 0.74111, 0, 0, 0.27778],
                        8741: [0.08167, 0.58167, 0, 0, 0.38889],
                        8742: [0.25142, 0.74111, 0, 0, 0.5],
                        8756: [0, 0.69224, 0, 0, 0.66667],
                        8757: [0, 0.69224, 0, 0, 0.66667],
                        8764: [-0.13313, 0.36687, 0, 0, 0.77778],
                        8765: [-0.13313, 0.37788, 0, 0, 0.77778],
                        8769: [-0.13313, 0.36687, 0, 0, 0.77778],
                        8770: [-0.03625, 0.46375, 0, 0, 0.77778],
                        8774: [0.30274, 0.79383, 0, 0, 0.77778],
                        8776: [-0.01688, 0.48312, 0, 0, 0.77778],
                        8778: [0.08167, 0.58167, 0, 0, 0.77778],
                        8782: [0.06062, 0.54986, 0, 0, 0.77778],
                        8783: [0.06062, 0.54986, 0, 0, 0.77778],
                        8785: [0.08198, 0.58198, 0, 0, 0.77778],
                        8786: [0.08198, 0.58198, 0, 0, 0.77778],
                        8787: [0.08198, 0.58198, 0, 0, 0.77778],
                        8790: [0, 0.69224, 0, 0, 0.77778],
                        8791: [0.22958, 0.72958, 0, 0, 0.77778],
                        8796: [0.08198, 0.91667, 0, 0, 0.77778],
                        8806: [0.25583, 0.75583, 0, 0, 0.77778],
                        8807: [0.25583, 0.75583, 0, 0, 0.77778],
                        8808: [0.25142, 0.75726, 0, 0, 0.77778],
                        8809: [0.25142, 0.75726, 0, 0, 0.77778],
                        8812: [0.25583, 0.75583, 0, 0, 0.5],
                        8814: [0.20576, 0.70576, 0, 0, 0.77778],
                        8815: [0.20576, 0.70576, 0, 0, 0.77778],
                        8816: [0.30274, 0.79383, 0, 0, 0.77778],
                        8817: [0.30274, 0.79383, 0, 0, 0.77778],
                        8818: [0.22958, 0.72958, 0, 0, 0.77778],
                        8819: [0.22958, 0.72958, 0, 0, 0.77778],
                        8822: [0.1808, 0.675, 0, 0, 0.77778],
                        8823: [0.1808, 0.675, 0, 0, 0.77778],
                        8828: [0.13667, 0.63667, 0, 0, 0.77778],
                        8829: [0.13667, 0.63667, 0, 0, 0.77778],
                        8830: [0.22958, 0.72958, 0, 0, 0.77778],
                        8831: [0.22958, 0.72958, 0, 0, 0.77778],
                        8832: [0.20576, 0.70576, 0, 0, 0.77778],
                        8833: [0.20576, 0.70576, 0, 0, 0.77778],
                        8840: [0.30274, 0.79383, 0, 0, 0.77778],
                        8841: [0.30274, 0.79383, 0, 0, 0.77778],
                        8842: [0.13597, 0.63597, 0, 0, 0.77778],
                        8843: [0.13597, 0.63597, 0, 0, 0.77778],
                        8847: [0.03517, 0.54986, 0, 0, 0.77778],
                        8848: [0.03517, 0.54986, 0, 0, 0.77778],
                        8858: [0.08198, 0.58198, 0, 0, 0.77778],
                        8859: [0.08198, 0.58198, 0, 0, 0.77778],
                        8861: [0.08198, 0.58198, 0, 0, 0.77778],
                        8862: [0, 0.675, 0, 0, 0.77778],
                        8863: [0, 0.675, 0, 0, 0.77778],
                        8864: [0, 0.675, 0, 0, 0.77778],
                        8865: [0, 0.675, 0, 0, 0.77778],
                        8872: [0, 0.69224, 0, 0, 0.61111],
                        8873: [0, 0.69224, 0, 0, 0.72222],
                        8874: [0, 0.69224, 0, 0, 0.88889],
                        8876: [0, 0.68889, 0, 0, 0.61111],
                        8877: [0, 0.68889, 0, 0, 0.61111],
                        8878: [0, 0.68889, 0, 0, 0.72222],
                        8879: [0, 0.68889, 0, 0, 0.72222],
                        8882: [0.03517, 0.54986, 0, 0, 0.77778],
                        8883: [0.03517, 0.54986, 0, 0, 0.77778],
                        8884: [0.13667, 0.63667, 0, 0, 0.77778],
                        8885: [0.13667, 0.63667, 0, 0, 0.77778],
                        8888: [0, 0.54986, 0, 0, 1.11111],
                        8890: [0.19444, 0.43056, 0, 0, 0.55556],
                        8891: [0.19444, 0.69224, 0, 0, 0.61111],
                        8892: [0.19444, 0.69224, 0, 0, 0.61111],
                        8901: [0, 0.54986, 0, 0, 0.27778],
                        8903: [0.08167, 0.58167, 0, 0, 0.77778],
                        8905: [0.08167, 0.58167, 0, 0, 0.77778],
                        8906: [0.08167, 0.58167, 0, 0, 0.77778],
                        8907: [0, 0.69224, 0, 0, 0.77778],
                        8908: [0, 0.69224, 0, 0, 0.77778],
                        8909: [-0.03598, 0.46402, 0, 0, 0.77778],
                        8910: [0, 0.54986, 0, 0, 0.76042],
                        8911: [0, 0.54986, 0, 0, 0.76042],
                        8912: [0.03517, 0.54986, 0, 0, 0.77778],
                        8913: [0.03517, 0.54986, 0, 0, 0.77778],
                        8914: [0, 0.54986, 0, 0, 0.66667],
                        8915: [0, 0.54986, 0, 0, 0.66667],
                        8916: [0, 0.69224, 0, 0, 0.66667],
                        8918: [0.0391, 0.5391, 0, 0, 0.77778],
                        8919: [0.0391, 0.5391, 0, 0, 0.77778],
                        8920: [0.03517, 0.54986, 0, 0, 1.33334],
                        8921: [0.03517, 0.54986, 0, 0, 1.33334],
                        8922: [0.38569, 0.88569, 0, 0, 0.77778],
                        8923: [0.38569, 0.88569, 0, 0, 0.77778],
                        8926: [0.13667, 0.63667, 0, 0, 0.77778],
                        8927: [0.13667, 0.63667, 0, 0, 0.77778],
                        8928: [0.30274, 0.79383, 0, 0, 0.77778],
                        8929: [0.30274, 0.79383, 0, 0, 0.77778],
                        8934: [0.23222, 0.74111, 0, 0, 0.77778],
                        8935: [0.23222, 0.74111, 0, 0, 0.77778],
                        8936: [0.23222, 0.74111, 0, 0, 0.77778],
                        8937: [0.23222, 0.74111, 0, 0, 0.77778],
                        8938: [0.20576, 0.70576, 0, 0, 0.77778],
                        8939: [0.20576, 0.70576, 0, 0, 0.77778],
                        8940: [0.30274, 0.79383, 0, 0, 0.77778],
                        8941: [0.30274, 0.79383, 0, 0, 0.77778],
                        8994: [0.19444, 0.69224, 0, 0, 0.77778],
                        8995: [0.19444, 0.69224, 0, 0, 0.77778],
                        9416: [0.15559, 0.69224, 0, 0, 0.90222],
                        9484: [0, 0.69224, 0, 0, 0.5],
                        9488: [0, 0.69224, 0, 0, 0.5],
                        9492: [0, 0.37788, 0, 0, 0.5],
                        9496: [0, 0.37788, 0, 0, 0.5],
                        9585: [0.19444, 0.68889, 0, 0, 0.88889],
                        9586: [0.19444, 0.74111, 0, 0, 0.88889],
                        9632: [0, 0.675, 0, 0, 0.77778],
                        9633: [0, 0.675, 0, 0, 0.77778],
                        9650: [0, 0.54986, 0, 0, 0.72222],
                        9651: [0, 0.54986, 0, 0, 0.72222],
                        9654: [0.03517, 0.54986, 0, 0, 0.77778],
                        9660: [0, 0.54986, 0, 0, 0.72222],
                        9661: [0, 0.54986, 0, 0, 0.72222],
                        9664: [0.03517, 0.54986, 0, 0, 0.77778],
                        9674: [0.11111, 0.69224, 0, 0, 0.66667],
                        9733: [0.19444, 0.69224, 0, 0, 0.94445],
                        10003: [0, 0.69224, 0, 0, 0.83334],
                        10016: [0, 0.69224, 0, 0, 0.83334],
                        10731: [0.11111, 0.69224, 0, 0, 0.66667],
                        10846: [0.19444, 0.75583, 0, 0, 0.61111],
                        10877: [0.13667, 0.63667, 0, 0, 0.77778],
                        10878: [0.13667, 0.63667, 0, 0, 0.77778],
                        10885: [0.25583, 0.75583, 0, 0, 0.77778],
                        10886: [0.25583, 0.75583, 0, 0, 0.77778],
                        10887: [0.13597, 0.63597, 0, 0, 0.77778],
                        10888: [0.13597, 0.63597, 0, 0, 0.77778],
                        10889: [0.26167, 0.75726, 0, 0, 0.77778],
                        10890: [0.26167, 0.75726, 0, 0, 0.77778],
                        10891: [0.48256, 0.98256, 0, 0, 0.77778],
                        10892: [0.48256, 0.98256, 0, 0, 0.77778],
                        10901: [0.13667, 0.63667, 0, 0, 0.77778],
                        10902: [0.13667, 0.63667, 0, 0, 0.77778],
                        10933: [0.25142, 0.75726, 0, 0, 0.77778],
                        10934: [0.25142, 0.75726, 0, 0, 0.77778],
                        10935: [0.26167, 0.75726, 0, 0, 0.77778],
                        10936: [0.26167, 0.75726, 0, 0, 0.77778],
                        10937: [0.26167, 0.75726, 0, 0, 0.77778],
                        10938: [0.26167, 0.75726, 0, 0, 0.77778],
                        10949: [0.25583, 0.75583, 0, 0, 0.77778],
                        10950: [0.25583, 0.75583, 0, 0, 0.77778],
                        10955: [0.28481, 0.79383, 0, 0, 0.77778],
                        10956: [0.28481, 0.79383, 0, 0, 0.77778],
                        57350: [0.08167, 0.58167, 0, 0, 0.22222],
                        57351: [0.08167, 0.58167, 0, 0, 0.38889],
                        57352: [0.08167, 0.58167, 0, 0, 0.77778],
                        57353: [0, 0.43056, 0.04028, 0, 0.66667],
                        57356: [0.25142, 0.75726, 0, 0, 0.77778],
                        57357: [0.25142, 0.75726, 0, 0, 0.77778],
                        57358: [0.41951, 0.91951, 0, 0, 0.77778],
                        57359: [0.30274, 0.79383, 0, 0, 0.77778],
                        57360: [0.30274, 0.79383, 0, 0, 0.77778],
                        57361: [0.41951, 0.91951, 0, 0, 0.77778],
                        57366: [0.25142, 0.75726, 0, 0, 0.77778],
                        57367: [0.25142, 0.75726, 0, 0, 0.77778],
                        57368: [0.25142, 0.75726, 0, 0, 0.77778],
                        57369: [0.25142, 0.75726, 0, 0, 0.77778],
                        57370: [0.13597, 0.63597, 0, 0, 0.77778],
                        57371: [0.13597, 0.63597, 0, 0, 0.77778],
                      },
                      "Caligraphic-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        65: [0, 0.68333, 0, 0.19445, 0.79847],
                        66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
                        67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
                        68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
                        69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
                        70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
                        71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
                        72: [0, 0.68333, 0.00965, 0.11111, 0.84452],
                        73: [0, 0.68333, 0.07382, 0, 0.54452],
                        74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
                        75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
                        76: [0, 0.68333, 0, 0.13889, 0.68972],
                        77: [0, 0.68333, 0, 0.13889, 1.2009],
                        78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
                        79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
                        80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
                        81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
                        82: [0, 0.68333, 0, 0.08334, 0.8475],
                        83: [0, 0.68333, 0.075, 0.13889, 0.60556],
                        84: [0, 0.68333, 0.25417, 0, 0.54464],
                        85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
                        86: [0, 0.68333, 0.08222, 0, 0.61278],
                        87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
                        88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
                        89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
                        90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
                        160: [0, 0, 0, 0, 0.25],
                      },
                      "Fraktur-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69141, 0, 0, 0.29574],
                        34: [0, 0.69141, 0, 0, 0.21471],
                        38: [0, 0.69141, 0, 0, 0.73786],
                        39: [0, 0.69141, 0, 0, 0.21201],
                        40: [0.24982, 0.74947, 0, 0, 0.38865],
                        41: [0.24982, 0.74947, 0, 0, 0.38865],
                        42: [0, 0.62119, 0, 0, 0.27764],
                        43: [0.08319, 0.58283, 0, 0, 0.75623],
                        44: [0, 0.10803, 0, 0, 0.27764],
                        45: [0.08319, 0.58283, 0, 0, 0.75623],
                        46: [0, 0.10803, 0, 0, 0.27764],
                        47: [0.24982, 0.74947, 0, 0, 0.50181],
                        48: [0, 0.47534, 0, 0, 0.50181],
                        49: [0, 0.47534, 0, 0, 0.50181],
                        50: [0, 0.47534, 0, 0, 0.50181],
                        51: [0.18906, 0.47534, 0, 0, 0.50181],
                        52: [0.18906, 0.47534, 0, 0, 0.50181],
                        53: [0.18906, 0.47534, 0, 0, 0.50181],
                        54: [0, 0.69141, 0, 0, 0.50181],
                        55: [0.18906, 0.47534, 0, 0, 0.50181],
                        56: [0, 0.69141, 0, 0, 0.50181],
                        57: [0.18906, 0.47534, 0, 0, 0.50181],
                        58: [0, 0.47534, 0, 0, 0.21606],
                        59: [0.12604, 0.47534, 0, 0, 0.21606],
                        61: [-0.13099, 0.36866, 0, 0, 0.75623],
                        63: [0, 0.69141, 0, 0, 0.36245],
                        65: [0, 0.69141, 0, 0, 0.7176],
                        66: [0, 0.69141, 0, 0, 0.88397],
                        67: [0, 0.69141, 0, 0, 0.61254],
                        68: [0, 0.69141, 0, 0, 0.83158],
                        69: [0, 0.69141, 0, 0, 0.66278],
                        70: [0.12604, 0.69141, 0, 0, 0.61119],
                        71: [0, 0.69141, 0, 0, 0.78539],
                        72: [0.06302, 0.69141, 0, 0, 0.7203],
                        73: [0, 0.69141, 0, 0, 0.55448],
                        74: [0.12604, 0.69141, 0, 0, 0.55231],
                        75: [0, 0.69141, 0, 0, 0.66845],
                        76: [0, 0.69141, 0, 0, 0.66602],
                        77: [0, 0.69141, 0, 0, 1.04953],
                        78: [0, 0.69141, 0, 0, 0.83212],
                        79: [0, 0.69141, 0, 0, 0.82699],
                        80: [0.18906, 0.69141, 0, 0, 0.82753],
                        81: [0.03781, 0.69141, 0, 0, 0.82699],
                        82: [0, 0.69141, 0, 0, 0.82807],
                        83: [0, 0.69141, 0, 0, 0.82861],
                        84: [0, 0.69141, 0, 0, 0.66899],
                        85: [0, 0.69141, 0, 0, 0.64576],
                        86: [0, 0.69141, 0, 0, 0.83131],
                        87: [0, 0.69141, 0, 0, 1.04602],
                        88: [0, 0.69141, 0, 0, 0.71922],
                        89: [0.18906, 0.69141, 0, 0, 0.83293],
                        90: [0.12604, 0.69141, 0, 0, 0.60201],
                        91: [0.24982, 0.74947, 0, 0, 0.27764],
                        93: [0.24982, 0.74947, 0, 0, 0.27764],
                        94: [0, 0.69141, 0, 0, 0.49965],
                        97: [0, 0.47534, 0, 0, 0.50046],
                        98: [0, 0.69141, 0, 0, 0.51315],
                        99: [0, 0.47534, 0, 0, 0.38946],
                        100: [0, 0.62119, 0, 0, 0.49857],
                        101: [0, 0.47534, 0, 0, 0.40053],
                        102: [0.18906, 0.69141, 0, 0, 0.32626],
                        103: [0.18906, 0.47534, 0, 0, 0.5037],
                        104: [0.18906, 0.69141, 0, 0, 0.52126],
                        105: [0, 0.69141, 0, 0, 0.27899],
                        106: [0, 0.69141, 0, 0, 0.28088],
                        107: [0, 0.69141, 0, 0, 0.38946],
                        108: [0, 0.69141, 0, 0, 0.27953],
                        109: [0, 0.47534, 0, 0, 0.76676],
                        110: [0, 0.47534, 0, 0, 0.52666],
                        111: [0, 0.47534, 0, 0, 0.48885],
                        112: [0.18906, 0.52396, 0, 0, 0.50046],
                        113: [0.18906, 0.47534, 0, 0, 0.48912],
                        114: [0, 0.47534, 0, 0, 0.38919],
                        115: [0, 0.47534, 0, 0, 0.44266],
                        116: [0, 0.62119, 0, 0, 0.33301],
                        117: [0, 0.47534, 0, 0, 0.5172],
                        118: [0, 0.52396, 0, 0, 0.5118],
                        119: [0, 0.52396, 0, 0, 0.77351],
                        120: [0.18906, 0.47534, 0, 0, 0.38865],
                        121: [0.18906, 0.47534, 0, 0, 0.49884],
                        122: [0.18906, 0.47534, 0, 0, 0.39054],
                        160: [0, 0, 0, 0, 0.25],
                        8216: [0, 0.69141, 0, 0, 0.21471],
                        8217: [0, 0.69141, 0, 0, 0.21471],
                        58112: [0, 0.62119, 0, 0, 0.49749],
                        58113: [0, 0.62119, 0, 0, 0.4983],
                        58114: [0.18906, 0.69141, 0, 0, 0.33328],
                        58115: [0.18906, 0.69141, 0, 0, 0.32923],
                        58116: [0.18906, 0.47534, 0, 0, 0.50343],
                        58117: [0, 0.69141, 0, 0, 0.33301],
                        58118: [0, 0.62119, 0, 0, 0.33409],
                        58119: [0, 0.47534, 0, 0, 0.50073],
                      },
                      "Main-Bold": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0, 0, 0.35],
                        34: [0, 0.69444, 0, 0, 0.60278],
                        35: [0.19444, 0.69444, 0, 0, 0.95833],
                        36: [0.05556, 0.75, 0, 0, 0.575],
                        37: [0.05556, 0.75, 0, 0, 0.95833],
                        38: [0, 0.69444, 0, 0, 0.89444],
                        39: [0, 0.69444, 0, 0, 0.31944],
                        40: [0.25, 0.75, 0, 0, 0.44722],
                        41: [0.25, 0.75, 0, 0, 0.44722],
                        42: [0, 0.75, 0, 0, 0.575],
                        43: [0.13333, 0.63333, 0, 0, 0.89444],
                        44: [0.19444, 0.15556, 0, 0, 0.31944],
                        45: [0, 0.44444, 0, 0, 0.38333],
                        46: [0, 0.15556, 0, 0, 0.31944],
                        47: [0.25, 0.75, 0, 0, 0.575],
                        48: [0, 0.64444, 0, 0, 0.575],
                        49: [0, 0.64444, 0, 0, 0.575],
                        50: [0, 0.64444, 0, 0, 0.575],
                        51: [0, 0.64444, 0, 0, 0.575],
                        52: [0, 0.64444, 0, 0, 0.575],
                        53: [0, 0.64444, 0, 0, 0.575],
                        54: [0, 0.64444, 0, 0, 0.575],
                        55: [0, 0.64444, 0, 0, 0.575],
                        56: [0, 0.64444, 0, 0, 0.575],
                        57: [0, 0.64444, 0, 0, 0.575],
                        58: [0, 0.44444, 0, 0, 0.31944],
                        59: [0.19444, 0.44444, 0, 0, 0.31944],
                        60: [0.08556, 0.58556, 0, 0, 0.89444],
                        61: [-0.10889, 0.39111, 0, 0, 0.89444],
                        62: [0.08556, 0.58556, 0, 0, 0.89444],
                        63: [0, 0.69444, 0, 0, 0.54305],
                        64: [0, 0.69444, 0, 0, 0.89444],
                        65: [0, 0.68611, 0, 0, 0.86944],
                        66: [0, 0.68611, 0, 0, 0.81805],
                        67: [0, 0.68611, 0, 0, 0.83055],
                        68: [0, 0.68611, 0, 0, 0.88194],
                        69: [0, 0.68611, 0, 0, 0.75555],
                        70: [0, 0.68611, 0, 0, 0.72361],
                        71: [0, 0.68611, 0, 0, 0.90416],
                        72: [0, 0.68611, 0, 0, 0.9],
                        73: [0, 0.68611, 0, 0, 0.43611],
                        74: [0, 0.68611, 0, 0, 0.59444],
                        75: [0, 0.68611, 0, 0, 0.90138],
                        76: [0, 0.68611, 0, 0, 0.69166],
                        77: [0, 0.68611, 0, 0, 1.09166],
                        78: [0, 0.68611, 0, 0, 0.9],
                        79: [0, 0.68611, 0, 0, 0.86388],
                        80: [0, 0.68611, 0, 0, 0.78611],
                        81: [0.19444, 0.68611, 0, 0, 0.86388],
                        82: [0, 0.68611, 0, 0, 0.8625],
                        83: [0, 0.68611, 0, 0, 0.63889],
                        84: [0, 0.68611, 0, 0, 0.8],
                        85: [0, 0.68611, 0, 0, 0.88472],
                        86: [0, 0.68611, 0.01597, 0, 0.86944],
                        87: [0, 0.68611, 0.01597, 0, 1.18888],
                        88: [0, 0.68611, 0, 0, 0.86944],
                        89: [0, 0.68611, 0.02875, 0, 0.86944],
                        90: [0, 0.68611, 0, 0, 0.70277],
                        91: [0.25, 0.75, 0, 0, 0.31944],
                        92: [0.25, 0.75, 0, 0, 0.575],
                        93: [0.25, 0.75, 0, 0, 0.31944],
                        94: [0, 0.69444, 0, 0, 0.575],
                        95: [0.31, 0.13444, 0.03194, 0, 0.575],
                        97: [0, 0.44444, 0, 0, 0.55902],
                        98: [0, 0.69444, 0, 0, 0.63889],
                        99: [0, 0.44444, 0, 0, 0.51111],
                        100: [0, 0.69444, 0, 0, 0.63889],
                        101: [0, 0.44444, 0, 0, 0.52708],
                        102: [0, 0.69444, 0.10903, 0, 0.35139],
                        103: [0.19444, 0.44444, 0.01597, 0, 0.575],
                        104: [0, 0.69444, 0, 0, 0.63889],
                        105: [0, 0.69444, 0, 0, 0.31944],
                        106: [0.19444, 0.69444, 0, 0, 0.35139],
                        107: [0, 0.69444, 0, 0, 0.60694],
                        108: [0, 0.69444, 0, 0, 0.31944],
                        109: [0, 0.44444, 0, 0, 0.95833],
                        110: [0, 0.44444, 0, 0, 0.63889],
                        111: [0, 0.44444, 0, 0, 0.575],
                        112: [0.19444, 0.44444, 0, 0, 0.63889],
                        113: [0.19444, 0.44444, 0, 0, 0.60694],
                        114: [0, 0.44444, 0, 0, 0.47361],
                        115: [0, 0.44444, 0, 0, 0.45361],
                        116: [0, 0.63492, 0, 0, 0.44722],
                        117: [0, 0.44444, 0, 0, 0.63889],
                        118: [0, 0.44444, 0.01597, 0, 0.60694],
                        119: [0, 0.44444, 0.01597, 0, 0.83055],
                        120: [0, 0.44444, 0, 0, 0.60694],
                        121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
                        122: [0, 0.44444, 0, 0, 0.51111],
                        123: [0.25, 0.75, 0, 0, 0.575],
                        124: [0.25, 0.75, 0, 0, 0.31944],
                        125: [0.25, 0.75, 0, 0, 0.575],
                        126: [0.35, 0.34444, 0, 0, 0.575],
                        160: [0, 0, 0, 0, 0.25],
                        163: [0, 0.69444, 0, 0, 0.86853],
                        168: [0, 0.69444, 0, 0, 0.575],
                        172: [0, 0.44444, 0, 0, 0.76666],
                        176: [0, 0.69444, 0, 0, 0.86944],
                        177: [0.13333, 0.63333, 0, 0, 0.89444],
                        184: [0.17014, 0, 0, 0, 0.51111],
                        198: [0, 0.68611, 0, 0, 1.04166],
                        215: [0.13333, 0.63333, 0, 0, 0.89444],
                        216: [0.04861, 0.73472, 0, 0, 0.89444],
                        223: [0, 0.69444, 0, 0, 0.59722],
                        230: [0, 0.44444, 0, 0, 0.83055],
                        247: [0.13333, 0.63333, 0, 0, 0.89444],
                        248: [0.09722, 0.54167, 0, 0, 0.575],
                        305: [0, 0.44444, 0, 0, 0.31944],
                        338: [0, 0.68611, 0, 0, 1.16944],
                        339: [0, 0.44444, 0, 0, 0.89444],
                        567: [0.19444, 0.44444, 0, 0, 0.35139],
                        710: [0, 0.69444, 0, 0, 0.575],
                        711: [0, 0.63194, 0, 0, 0.575],
                        713: [0, 0.59611, 0, 0, 0.575],
                        714: [0, 0.69444, 0, 0, 0.575],
                        715: [0, 0.69444, 0, 0, 0.575],
                        728: [0, 0.69444, 0, 0, 0.575],
                        729: [0, 0.69444, 0, 0, 0.31944],
                        730: [0, 0.69444, 0, 0, 0.86944],
                        732: [0, 0.69444, 0, 0, 0.575],
                        733: [0, 0.69444, 0, 0, 0.575],
                        915: [0, 0.68611, 0, 0, 0.69166],
                        916: [0, 0.68611, 0, 0, 0.95833],
                        920: [0, 0.68611, 0, 0, 0.89444],
                        923: [0, 0.68611, 0, 0, 0.80555],
                        926: [0, 0.68611, 0, 0, 0.76666],
                        928: [0, 0.68611, 0, 0, 0.9],
                        931: [0, 0.68611, 0, 0, 0.83055],
                        933: [0, 0.68611, 0, 0, 0.89444],
                        934: [0, 0.68611, 0, 0, 0.83055],
                        936: [0, 0.68611, 0, 0, 0.89444],
                        937: [0, 0.68611, 0, 0, 0.83055],
                        8211: [0, 0.44444, 0.03194, 0, 0.575],
                        8212: [0, 0.44444, 0.03194, 0, 1.14999],
                        8216: [0, 0.69444, 0, 0, 0.31944],
                        8217: [0, 0.69444, 0, 0, 0.31944],
                        8220: [0, 0.69444, 0, 0, 0.60278],
                        8221: [0, 0.69444, 0, 0, 0.60278],
                        8224: [0.19444, 0.69444, 0, 0, 0.51111],
                        8225: [0.19444, 0.69444, 0, 0, 0.51111],
                        8242: [0, 0.55556, 0, 0, 0.34444],
                        8407: [0, 0.72444, 0.15486, 0, 0.575],
                        8463: [0, 0.69444, 0, 0, 0.66759],
                        8465: [0, 0.69444, 0, 0, 0.83055],
                        8467: [0, 0.69444, 0, 0, 0.47361],
                        8472: [0.19444, 0.44444, 0, 0, 0.74027],
                        8476: [0, 0.69444, 0, 0, 0.83055],
                        8501: [0, 0.69444, 0, 0, 0.70277],
                        8592: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8593: [0.19444, 0.69444, 0, 0, 0.575],
                        8594: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8595: [0.19444, 0.69444, 0, 0, 0.575],
                        8596: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8597: [0.25, 0.75, 0, 0, 0.575],
                        8598: [0.19444, 0.69444, 0, 0, 1.14999],
                        8599: [0.19444, 0.69444, 0, 0, 1.14999],
                        8600: [0.19444, 0.69444, 0, 0, 1.14999],
                        8601: [0.19444, 0.69444, 0, 0, 1.14999],
                        8636: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8637: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8640: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8641: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8656: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8657: [0.19444, 0.69444, 0, 0, 0.70277],
                        8658: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8659: [0.19444, 0.69444, 0, 0, 0.70277],
                        8660: [-0.10889, 0.39111, 0, 0, 1.14999],
                        8661: [0.25, 0.75, 0, 0, 0.70277],
                        8704: [0, 0.69444, 0, 0, 0.63889],
                        8706: [0, 0.69444, 0.06389, 0, 0.62847],
                        8707: [0, 0.69444, 0, 0, 0.63889],
                        8709: [0.05556, 0.75, 0, 0, 0.575],
                        8711: [0, 0.68611, 0, 0, 0.95833],
                        8712: [0.08556, 0.58556, 0, 0, 0.76666],
                        8715: [0.08556, 0.58556, 0, 0, 0.76666],
                        8722: [0.13333, 0.63333, 0, 0, 0.89444],
                        8723: [0.13333, 0.63333, 0, 0, 0.89444],
                        8725: [0.25, 0.75, 0, 0, 0.575],
                        8726: [0.25, 0.75, 0, 0, 0.575],
                        8727: [-0.02778, 0.47222, 0, 0, 0.575],
                        8728: [-0.02639, 0.47361, 0, 0, 0.575],
                        8729: [-0.02639, 0.47361, 0, 0, 0.575],
                        8730: [0.18, 0.82, 0, 0, 0.95833],
                        8733: [0, 0.44444, 0, 0, 0.89444],
                        8734: [0, 0.44444, 0, 0, 1.14999],
                        8736: [0, 0.69224, 0, 0, 0.72222],
                        8739: [0.25, 0.75, 0, 0, 0.31944],
                        8741: [0.25, 0.75, 0, 0, 0.575],
                        8743: [0, 0.55556, 0, 0, 0.76666],
                        8744: [0, 0.55556, 0, 0, 0.76666],
                        8745: [0, 0.55556, 0, 0, 0.76666],
                        8746: [0, 0.55556, 0, 0, 0.76666],
                        8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
                        8764: [-0.10889, 0.39111, 0, 0, 0.89444],
                        8768: [0.19444, 0.69444, 0, 0, 0.31944],
                        8771: [0.00222, 0.50222, 0, 0, 0.89444],
                        8776: [0.02444, 0.52444, 0, 0, 0.89444],
                        8781: [0.00222, 0.50222, 0, 0, 0.89444],
                        8801: [0.00222, 0.50222, 0, 0, 0.89444],
                        8804: [0.19667, 0.69667, 0, 0, 0.89444],
                        8805: [0.19667, 0.69667, 0, 0, 0.89444],
                        8810: [0.08556, 0.58556, 0, 0, 1.14999],
                        8811: [0.08556, 0.58556, 0, 0, 1.14999],
                        8826: [0.08556, 0.58556, 0, 0, 0.89444],
                        8827: [0.08556, 0.58556, 0, 0, 0.89444],
                        8834: [0.08556, 0.58556, 0, 0, 0.89444],
                        8835: [0.08556, 0.58556, 0, 0, 0.89444],
                        8838: [0.19667, 0.69667, 0, 0, 0.89444],
                        8839: [0.19667, 0.69667, 0, 0, 0.89444],
                        8846: [0, 0.55556, 0, 0, 0.76666],
                        8849: [0.19667, 0.69667, 0, 0, 0.89444],
                        8850: [0.19667, 0.69667, 0, 0, 0.89444],
                        8851: [0, 0.55556, 0, 0, 0.76666],
                        8852: [0, 0.55556, 0, 0, 0.76666],
                        8853: [0.13333, 0.63333, 0, 0, 0.89444],
                        8854: [0.13333, 0.63333, 0, 0, 0.89444],
                        8855: [0.13333, 0.63333, 0, 0, 0.89444],
                        8856: [0.13333, 0.63333, 0, 0, 0.89444],
                        8857: [0.13333, 0.63333, 0, 0, 0.89444],
                        8866: [0, 0.69444, 0, 0, 0.70277],
                        8867: [0, 0.69444, 0, 0, 0.70277],
                        8868: [0, 0.69444, 0, 0, 0.89444],
                        8869: [0, 0.69444, 0, 0, 0.89444],
                        8900: [-0.02639, 0.47361, 0, 0, 0.575],
                        8901: [-0.02639, 0.47361, 0, 0, 0.31944],
                        8902: [-0.02778, 0.47222, 0, 0, 0.575],
                        8968: [0.25, 0.75, 0, 0, 0.51111],
                        8969: [0.25, 0.75, 0, 0, 0.51111],
                        8970: [0.25, 0.75, 0, 0, 0.51111],
                        8971: [0.25, 0.75, 0, 0, 0.51111],
                        8994: [-0.13889, 0.36111, 0, 0, 1.14999],
                        8995: [-0.13889, 0.36111, 0, 0, 1.14999],
                        9651: [0.19444, 0.69444, 0, 0, 1.02222],
                        9657: [-0.02778, 0.47222, 0, 0, 0.575],
                        9661: [0.19444, 0.69444, 0, 0, 1.02222],
                        9667: [-0.02778, 0.47222, 0, 0, 0.575],
                        9711: [0.19444, 0.69444, 0, 0, 1.14999],
                        9824: [0.12963, 0.69444, 0, 0, 0.89444],
                        9825: [0.12963, 0.69444, 0, 0, 0.89444],
                        9826: [0.12963, 0.69444, 0, 0, 0.89444],
                        9827: [0.12963, 0.69444, 0, 0, 0.89444],
                        9837: [0, 0.75, 0, 0, 0.44722],
                        9838: [0.19444, 0.69444, 0, 0, 0.44722],
                        9839: [0.19444, 0.69444, 0, 0, 0.44722],
                        10216: [0.25, 0.75, 0, 0, 0.44722],
                        10217: [0.25, 0.75, 0, 0, 0.44722],
                        10815: [0, 0.68611, 0, 0, 0.9],
                        10927: [0.19667, 0.69667, 0, 0, 0.89444],
                        10928: [0.19667, 0.69667, 0, 0, 0.89444],
                        57376: [0.19444, 0.69444, 0, 0, 0],
                      },
                      "Main-BoldItalic": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0.11417, 0, 0.38611],
                        34: [0, 0.69444, 0.07939, 0, 0.62055],
                        35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
                        37: [0.05556, 0.75, 0.12861, 0, 0.94444],
                        38: [0, 0.69444, 0.08528, 0, 0.88555],
                        39: [0, 0.69444, 0.12945, 0, 0.35555],
                        40: [0.25, 0.75, 0.15806, 0, 0.47333],
                        41: [0.25, 0.75, 0.03306, 0, 0.47333],
                        42: [0, 0.75, 0.14333, 0, 0.59111],
                        43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
                        44: [0.19444, 0.14722, 0, 0, 0.35555],
                        45: [0, 0.44444, 0.02611, 0, 0.41444],
                        46: [0, 0.14722, 0, 0, 0.35555],
                        47: [0.25, 0.75, 0.15806, 0, 0.59111],
                        48: [0, 0.64444, 0.13167, 0, 0.59111],
                        49: [0, 0.64444, 0.13167, 0, 0.59111],
                        50: [0, 0.64444, 0.13167, 0, 0.59111],
                        51: [0, 0.64444, 0.13167, 0, 0.59111],
                        52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
                        53: [0, 0.64444, 0.13167, 0, 0.59111],
                        54: [0, 0.64444, 0.13167, 0, 0.59111],
                        55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
                        56: [0, 0.64444, 0.13167, 0, 0.59111],
                        57: [0, 0.64444, 0.13167, 0, 0.59111],
                        58: [0, 0.44444, 0.06695, 0, 0.35555],
                        59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
                        61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
                        63: [0, 0.69444, 0.11472, 0, 0.59111],
                        64: [0, 0.69444, 0.09208, 0, 0.88555],
                        65: [0, 0.68611, 0, 0, 0.86555],
                        66: [0, 0.68611, 0.0992, 0, 0.81666],
                        67: [0, 0.68611, 0.14208, 0, 0.82666],
                        68: [0, 0.68611, 0.09062, 0, 0.87555],
                        69: [0, 0.68611, 0.11431, 0, 0.75666],
                        70: [0, 0.68611, 0.12903, 0, 0.72722],
                        71: [0, 0.68611, 0.07347, 0, 0.89527],
                        72: [0, 0.68611, 0.17208, 0, 0.8961],
                        73: [0, 0.68611, 0.15681, 0, 0.47166],
                        74: [0, 0.68611, 0.145, 0, 0.61055],
                        75: [0, 0.68611, 0.14208, 0, 0.89499],
                        76: [0, 0.68611, 0, 0, 0.69777],
                        77: [0, 0.68611, 0.17208, 0, 1.07277],
                        78: [0, 0.68611, 0.17208, 0, 0.8961],
                        79: [0, 0.68611, 0.09062, 0, 0.85499],
                        80: [0, 0.68611, 0.0992, 0, 0.78721],
                        81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
                        82: [0, 0.68611, 0.02559, 0, 0.85944],
                        83: [0, 0.68611, 0.11264, 0, 0.64999],
                        84: [0, 0.68611, 0.12903, 0, 0.7961],
                        85: [0, 0.68611, 0.17208, 0, 0.88083],
                        86: [0, 0.68611, 0.18625, 0, 0.86555],
                        87: [0, 0.68611, 0.18625, 0, 1.15999],
                        88: [0, 0.68611, 0.15681, 0, 0.86555],
                        89: [0, 0.68611, 0.19803, 0, 0.86555],
                        90: [0, 0.68611, 0.14208, 0, 0.70888],
                        91: [0.25, 0.75, 0.1875, 0, 0.35611],
                        93: [0.25, 0.75, 0.09972, 0, 0.35611],
                        94: [0, 0.69444, 0.06709, 0, 0.59111],
                        95: [0.31, 0.13444, 0.09811, 0, 0.59111],
                        97: [0, 0.44444, 0.09426, 0, 0.59111],
                        98: [0, 0.69444, 0.07861, 0, 0.53222],
                        99: [0, 0.44444, 0.05222, 0, 0.53222],
                        100: [0, 0.69444, 0.10861, 0, 0.59111],
                        101: [0, 0.44444, 0.085, 0, 0.53222],
                        102: [0.19444, 0.69444, 0.21778, 0, 0.4],
                        103: [0.19444, 0.44444, 0.105, 0, 0.53222],
                        104: [0, 0.69444, 0.09426, 0, 0.59111],
                        105: [0, 0.69326, 0.11387, 0, 0.35555],
                        106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
                        107: [0, 0.69444, 0.11111, 0, 0.53222],
                        108: [0, 0.69444, 0.10861, 0, 0.29666],
                        109: [0, 0.44444, 0.09426, 0, 0.94444],
                        110: [0, 0.44444, 0.09426, 0, 0.64999],
                        111: [0, 0.44444, 0.07861, 0, 0.59111],
                        112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
                        113: [0.19444, 0.44444, 0.105, 0, 0.53222],
                        114: [0, 0.44444, 0.11111, 0, 0.50167],
                        115: [0, 0.44444, 0.08167, 0, 0.48694],
                        116: [0, 0.63492, 0.09639, 0, 0.385],
                        117: [0, 0.44444, 0.09426, 0, 0.62055],
                        118: [0, 0.44444, 0.11111, 0, 0.53222],
                        119: [0, 0.44444, 0.11111, 0, 0.76777],
                        120: [0, 0.44444, 0.12583, 0, 0.56055],
                        121: [0.19444, 0.44444, 0.105, 0, 0.56166],
                        122: [0, 0.44444, 0.13889, 0, 0.49055],
                        126: [0.35, 0.34444, 0.11472, 0, 0.59111],
                        160: [0, 0, 0, 0, 0.25],
                        168: [0, 0.69444, 0.11473, 0, 0.59111],
                        176: [0, 0.69444, 0, 0, 0.94888],
                        184: [0.17014, 0, 0, 0, 0.53222],
                        198: [0, 0.68611, 0.11431, 0, 1.02277],
                        216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
                        223: [0.19444, 0.69444, 0.09736, 0, 0.665],
                        230: [0, 0.44444, 0.085, 0, 0.82666],
                        248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
                        305: [0, 0.44444, 0.09426, 0, 0.35555],
                        338: [0, 0.68611, 0.11431, 0, 1.14054],
                        339: [0, 0.44444, 0.085, 0, 0.82666],
                        567: [0.19444, 0.44444, 0.04611, 0, 0.385],
                        710: [0, 0.69444, 0.06709, 0, 0.59111],
                        711: [0, 0.63194, 0.08271, 0, 0.59111],
                        713: [0, 0.59444, 0.10444, 0, 0.59111],
                        714: [0, 0.69444, 0.08528, 0, 0.59111],
                        715: [0, 0.69444, 0, 0, 0.59111],
                        728: [0, 0.69444, 0.10333, 0, 0.59111],
                        729: [0, 0.69444, 0.12945, 0, 0.35555],
                        730: [0, 0.69444, 0, 0, 0.94888],
                        732: [0, 0.69444, 0.11472, 0, 0.59111],
                        733: [0, 0.69444, 0.11472, 0, 0.59111],
                        915: [0, 0.68611, 0.12903, 0, 0.69777],
                        916: [0, 0.68611, 0, 0, 0.94444],
                        920: [0, 0.68611, 0.09062, 0, 0.88555],
                        923: [0, 0.68611, 0, 0, 0.80666],
                        926: [0, 0.68611, 0.15092, 0, 0.76777],
                        928: [0, 0.68611, 0.17208, 0, 0.8961],
                        931: [0, 0.68611, 0.11431, 0, 0.82666],
                        933: [0, 0.68611, 0.10778, 0, 0.88555],
                        934: [0, 0.68611, 0.05632, 0, 0.82666],
                        936: [0, 0.68611, 0.10778, 0, 0.88555],
                        937: [0, 0.68611, 0.0992, 0, 0.82666],
                        8211: [0, 0.44444, 0.09811, 0, 0.59111],
                        8212: [0, 0.44444, 0.09811, 0, 1.18221],
                        8216: [0, 0.69444, 0.12945, 0, 0.35555],
                        8217: [0, 0.69444, 0.12945, 0, 0.35555],
                        8220: [0, 0.69444, 0.16772, 0, 0.62055],
                        8221: [0, 0.69444, 0.07939, 0, 0.62055],
                      },
                      "Main-Italic": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0.12417, 0, 0.30667],
                        34: [0, 0.69444, 0.06961, 0, 0.51444],
                        35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
                        37: [0.05556, 0.75, 0.13639, 0, 0.81777],
                        38: [0, 0.69444, 0.09694, 0, 0.76666],
                        39: [0, 0.69444, 0.12417, 0, 0.30667],
                        40: [0.25, 0.75, 0.16194, 0, 0.40889],
                        41: [0.25, 0.75, 0.03694, 0, 0.40889],
                        42: [0, 0.75, 0.14917, 0, 0.51111],
                        43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
                        44: [0.19444, 0.10556, 0, 0, 0.30667],
                        45: [0, 0.43056, 0.02826, 0, 0.35778],
                        46: [0, 0.10556, 0, 0, 0.30667],
                        47: [0.25, 0.75, 0.16194, 0, 0.51111],
                        48: [0, 0.64444, 0.13556, 0, 0.51111],
                        49: [0, 0.64444, 0.13556, 0, 0.51111],
                        50: [0, 0.64444, 0.13556, 0, 0.51111],
                        51: [0, 0.64444, 0.13556, 0, 0.51111],
                        52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
                        53: [0, 0.64444, 0.13556, 0, 0.51111],
                        54: [0, 0.64444, 0.13556, 0, 0.51111],
                        55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
                        56: [0, 0.64444, 0.13556, 0, 0.51111],
                        57: [0, 0.64444, 0.13556, 0, 0.51111],
                        58: [0, 0.43056, 0.0582, 0, 0.30667],
                        59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
                        61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
                        63: [0, 0.69444, 0.1225, 0, 0.51111],
                        64: [0, 0.69444, 0.09597, 0, 0.76666],
                        65: [0, 0.68333, 0, 0, 0.74333],
                        66: [0, 0.68333, 0.10257, 0, 0.70389],
                        67: [0, 0.68333, 0.14528, 0, 0.71555],
                        68: [0, 0.68333, 0.09403, 0, 0.755],
                        69: [0, 0.68333, 0.12028, 0, 0.67833],
                        70: [0, 0.68333, 0.13305, 0, 0.65277],
                        71: [0, 0.68333, 0.08722, 0, 0.77361],
                        72: [0, 0.68333, 0.16389, 0, 0.74333],
                        73: [0, 0.68333, 0.15806, 0, 0.38555],
                        74: [0, 0.68333, 0.14028, 0, 0.525],
                        75: [0, 0.68333, 0.14528, 0, 0.76888],
                        76: [0, 0.68333, 0, 0, 0.62722],
                        77: [0, 0.68333, 0.16389, 0, 0.89666],
                        78: [0, 0.68333, 0.16389, 0, 0.74333],
                        79: [0, 0.68333, 0.09403, 0, 0.76666],
                        80: [0, 0.68333, 0.10257, 0, 0.67833],
                        81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
                        82: [0, 0.68333, 0.03868, 0, 0.72944],
                        83: [0, 0.68333, 0.11972, 0, 0.56222],
                        84: [0, 0.68333, 0.13305, 0, 0.71555],
                        85: [0, 0.68333, 0.16389, 0, 0.74333],
                        86: [0, 0.68333, 0.18361, 0, 0.74333],
                        87: [0, 0.68333, 0.18361, 0, 0.99888],
                        88: [0, 0.68333, 0.15806, 0, 0.74333],
                        89: [0, 0.68333, 0.19383, 0, 0.74333],
                        90: [0, 0.68333, 0.14528, 0, 0.61333],
                        91: [0.25, 0.75, 0.1875, 0, 0.30667],
                        93: [0.25, 0.75, 0.10528, 0, 0.30667],
                        94: [0, 0.69444, 0.06646, 0, 0.51111],
                        95: [0.31, 0.12056, 0.09208, 0, 0.51111],
                        97: [0, 0.43056, 0.07671, 0, 0.51111],
                        98: [0, 0.69444, 0.06312, 0, 0.46],
                        99: [0, 0.43056, 0.05653, 0, 0.46],
                        100: [0, 0.69444, 0.10333, 0, 0.51111],
                        101: [0, 0.43056, 0.07514, 0, 0.46],
                        102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
                        103: [0.19444, 0.43056, 0.08847, 0, 0.46],
                        104: [0, 0.69444, 0.07671, 0, 0.51111],
                        105: [0, 0.65536, 0.1019, 0, 0.30667],
                        106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
                        107: [0, 0.69444, 0.10764, 0, 0.46],
                        108: [0, 0.69444, 0.10333, 0, 0.25555],
                        109: [0, 0.43056, 0.07671, 0, 0.81777],
                        110: [0, 0.43056, 0.07671, 0, 0.56222],
                        111: [0, 0.43056, 0.06312, 0, 0.51111],
                        112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
                        113: [0.19444, 0.43056, 0.08847, 0, 0.46],
                        114: [0, 0.43056, 0.10764, 0, 0.42166],
                        115: [0, 0.43056, 0.08208, 0, 0.40889],
                        116: [0, 0.61508, 0.09486, 0, 0.33222],
                        117: [0, 0.43056, 0.07671, 0, 0.53666],
                        118: [0, 0.43056, 0.10764, 0, 0.46],
                        119: [0, 0.43056, 0.10764, 0, 0.66444],
                        120: [0, 0.43056, 0.12042, 0, 0.46389],
                        121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
                        122: [0, 0.43056, 0.12292, 0, 0.40889],
                        126: [0.35, 0.31786, 0.11585, 0, 0.51111],
                        160: [0, 0, 0, 0, 0.25],
                        168: [0, 0.66786, 0.10474, 0, 0.51111],
                        176: [0, 0.69444, 0, 0, 0.83129],
                        184: [0.17014, 0, 0, 0, 0.46],
                        198: [0, 0.68333, 0.12028, 0, 0.88277],
                        216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
                        223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
                        230: [0, 0.43056, 0.07514, 0, 0.71555],
                        248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
                        338: [0, 0.68333, 0.12028, 0, 0.98499],
                        339: [0, 0.43056, 0.07514, 0, 0.71555],
                        710: [0, 0.69444, 0.06646, 0, 0.51111],
                        711: [0, 0.62847, 0.08295, 0, 0.51111],
                        713: [0, 0.56167, 0.10333, 0, 0.51111],
                        714: [0, 0.69444, 0.09694, 0, 0.51111],
                        715: [0, 0.69444, 0, 0, 0.51111],
                        728: [0, 0.69444, 0.10806, 0, 0.51111],
                        729: [0, 0.66786, 0.11752, 0, 0.30667],
                        730: [0, 0.69444, 0, 0, 0.83129],
                        732: [0, 0.66786, 0.11585, 0, 0.51111],
                        733: [0, 0.69444, 0.1225, 0, 0.51111],
                        915: [0, 0.68333, 0.13305, 0, 0.62722],
                        916: [0, 0.68333, 0, 0, 0.81777],
                        920: [0, 0.68333, 0.09403, 0, 0.76666],
                        923: [0, 0.68333, 0, 0, 0.69222],
                        926: [0, 0.68333, 0.15294, 0, 0.66444],
                        928: [0, 0.68333, 0.16389, 0, 0.74333],
                        931: [0, 0.68333, 0.12028, 0, 0.71555],
                        933: [0, 0.68333, 0.11111, 0, 0.76666],
                        934: [0, 0.68333, 0.05986, 0, 0.71555],
                        936: [0, 0.68333, 0.11111, 0, 0.76666],
                        937: [0, 0.68333, 0.10257, 0, 0.71555],
                        8211: [0, 0.43056, 0.09208, 0, 0.51111],
                        8212: [0, 0.43056, 0.09208, 0, 1.02222],
                        8216: [0, 0.69444, 0.12417, 0, 0.30667],
                        8217: [0, 0.69444, 0.12417, 0, 0.30667],
                        8220: [0, 0.69444, 0.1685, 0, 0.51444],
                        8221: [0, 0.69444, 0.06961, 0, 0.51444],
                        8463: [0, 0.68889, 0, 0, 0.54028],
                      },
                      "Main-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0, 0, 0.27778],
                        34: [0, 0.69444, 0, 0, 0.5],
                        35: [0.19444, 0.69444, 0, 0, 0.83334],
                        36: [0.05556, 0.75, 0, 0, 0.5],
                        37: [0.05556, 0.75, 0, 0, 0.83334],
                        38: [0, 0.69444, 0, 0, 0.77778],
                        39: [0, 0.69444, 0, 0, 0.27778],
                        40: [0.25, 0.75, 0, 0, 0.38889],
                        41: [0.25, 0.75, 0, 0, 0.38889],
                        42: [0, 0.75, 0, 0, 0.5],
                        43: [0.08333, 0.58333, 0, 0, 0.77778],
                        44: [0.19444, 0.10556, 0, 0, 0.27778],
                        45: [0, 0.43056, 0, 0, 0.33333],
                        46: [0, 0.10556, 0, 0, 0.27778],
                        47: [0.25, 0.75, 0, 0, 0.5],
                        48: [0, 0.64444, 0, 0, 0.5],
                        49: [0, 0.64444, 0, 0, 0.5],
                        50: [0, 0.64444, 0, 0, 0.5],
                        51: [0, 0.64444, 0, 0, 0.5],
                        52: [0, 0.64444, 0, 0, 0.5],
                        53: [0, 0.64444, 0, 0, 0.5],
                        54: [0, 0.64444, 0, 0, 0.5],
                        55: [0, 0.64444, 0, 0, 0.5],
                        56: [0, 0.64444, 0, 0, 0.5],
                        57: [0, 0.64444, 0, 0, 0.5],
                        58: [0, 0.43056, 0, 0, 0.27778],
                        59: [0.19444, 0.43056, 0, 0, 0.27778],
                        60: [0.0391, 0.5391, 0, 0, 0.77778],
                        61: [-0.13313, 0.36687, 0, 0, 0.77778],
                        62: [0.0391, 0.5391, 0, 0, 0.77778],
                        63: [0, 0.69444, 0, 0, 0.47222],
                        64: [0, 0.69444, 0, 0, 0.77778],
                        65: [0, 0.68333, 0, 0, 0.75],
                        66: [0, 0.68333, 0, 0, 0.70834],
                        67: [0, 0.68333, 0, 0, 0.72222],
                        68: [0, 0.68333, 0, 0, 0.76389],
                        69: [0, 0.68333, 0, 0, 0.68056],
                        70: [0, 0.68333, 0, 0, 0.65278],
                        71: [0, 0.68333, 0, 0, 0.78472],
                        72: [0, 0.68333, 0, 0, 0.75],
                        73: [0, 0.68333, 0, 0, 0.36111],
                        74: [0, 0.68333, 0, 0, 0.51389],
                        75: [0, 0.68333, 0, 0, 0.77778],
                        76: [0, 0.68333, 0, 0, 0.625],
                        77: [0, 0.68333, 0, 0, 0.91667],
                        78: [0, 0.68333, 0, 0, 0.75],
                        79: [0, 0.68333, 0, 0, 0.77778],
                        80: [0, 0.68333, 0, 0, 0.68056],
                        81: [0.19444, 0.68333, 0, 0, 0.77778],
                        82: [0, 0.68333, 0, 0, 0.73611],
                        83: [0, 0.68333, 0, 0, 0.55556],
                        84: [0, 0.68333, 0, 0, 0.72222],
                        85: [0, 0.68333, 0, 0, 0.75],
                        86: [0, 0.68333, 0.01389, 0, 0.75],
                        87: [0, 0.68333, 0.01389, 0, 1.02778],
                        88: [0, 0.68333, 0, 0, 0.75],
                        89: [0, 0.68333, 0.025, 0, 0.75],
                        90: [0, 0.68333, 0, 0, 0.61111],
                        91: [0.25, 0.75, 0, 0, 0.27778],
                        92: [0.25, 0.75, 0, 0, 0.5],
                        93: [0.25, 0.75, 0, 0, 0.27778],
                        94: [0, 0.69444, 0, 0, 0.5],
                        95: [0.31, 0.12056, 0.02778, 0, 0.5],
                        97: [0, 0.43056, 0, 0, 0.5],
                        98: [0, 0.69444, 0, 0, 0.55556],
                        99: [0, 0.43056, 0, 0, 0.44445],
                        100: [0, 0.69444, 0, 0, 0.55556],
                        101: [0, 0.43056, 0, 0, 0.44445],
                        102: [0, 0.69444, 0.07778, 0, 0.30556],
                        103: [0.19444, 0.43056, 0.01389, 0, 0.5],
                        104: [0, 0.69444, 0, 0, 0.55556],
                        105: [0, 0.66786, 0, 0, 0.27778],
                        106: [0.19444, 0.66786, 0, 0, 0.30556],
                        107: [0, 0.69444, 0, 0, 0.52778],
                        108: [0, 0.69444, 0, 0, 0.27778],
                        109: [0, 0.43056, 0, 0, 0.83334],
                        110: [0, 0.43056, 0, 0, 0.55556],
                        111: [0, 0.43056, 0, 0, 0.5],
                        112: [0.19444, 0.43056, 0, 0, 0.55556],
                        113: [0.19444, 0.43056, 0, 0, 0.52778],
                        114: [0, 0.43056, 0, 0, 0.39167],
                        115: [0, 0.43056, 0, 0, 0.39445],
                        116: [0, 0.61508, 0, 0, 0.38889],
                        117: [0, 0.43056, 0, 0, 0.55556],
                        118: [0, 0.43056, 0.01389, 0, 0.52778],
                        119: [0, 0.43056, 0.01389, 0, 0.72222],
                        120: [0, 0.43056, 0, 0, 0.52778],
                        121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
                        122: [0, 0.43056, 0, 0, 0.44445],
                        123: [0.25, 0.75, 0, 0, 0.5],
                        124: [0.25, 0.75, 0, 0, 0.27778],
                        125: [0.25, 0.75, 0, 0, 0.5],
                        126: [0.35, 0.31786, 0, 0, 0.5],
                        160: [0, 0, 0, 0, 0.25],
                        163: [0, 0.69444, 0, 0, 0.76909],
                        167: [0.19444, 0.69444, 0, 0, 0.44445],
                        168: [0, 0.66786, 0, 0, 0.5],
                        172: [0, 0.43056, 0, 0, 0.66667],
                        176: [0, 0.69444, 0, 0, 0.75],
                        177: [0.08333, 0.58333, 0, 0, 0.77778],
                        182: [0.19444, 0.69444, 0, 0, 0.61111],
                        184: [0.17014, 0, 0, 0, 0.44445],
                        198: [0, 0.68333, 0, 0, 0.90278],
                        215: [0.08333, 0.58333, 0, 0, 0.77778],
                        216: [0.04861, 0.73194, 0, 0, 0.77778],
                        223: [0, 0.69444, 0, 0, 0.5],
                        230: [0, 0.43056, 0, 0, 0.72222],
                        247: [0.08333, 0.58333, 0, 0, 0.77778],
                        248: [0.09722, 0.52778, 0, 0, 0.5],
                        305: [0, 0.43056, 0, 0, 0.27778],
                        338: [0, 0.68333, 0, 0, 1.01389],
                        339: [0, 0.43056, 0, 0, 0.77778],
                        567: [0.19444, 0.43056, 0, 0, 0.30556],
                        710: [0, 0.69444, 0, 0, 0.5],
                        711: [0, 0.62847, 0, 0, 0.5],
                        713: [0, 0.56778, 0, 0, 0.5],
                        714: [0, 0.69444, 0, 0, 0.5],
                        715: [0, 0.69444, 0, 0, 0.5],
                        728: [0, 0.69444, 0, 0, 0.5],
                        729: [0, 0.66786, 0, 0, 0.27778],
                        730: [0, 0.69444, 0, 0, 0.75],
                        732: [0, 0.66786, 0, 0, 0.5],
                        733: [0, 0.69444, 0, 0, 0.5],
                        915: [0, 0.68333, 0, 0, 0.625],
                        916: [0, 0.68333, 0, 0, 0.83334],
                        920: [0, 0.68333, 0, 0, 0.77778],
                        923: [0, 0.68333, 0, 0, 0.69445],
                        926: [0, 0.68333, 0, 0, 0.66667],
                        928: [0, 0.68333, 0, 0, 0.75],
                        931: [0, 0.68333, 0, 0, 0.72222],
                        933: [0, 0.68333, 0, 0, 0.77778],
                        934: [0, 0.68333, 0, 0, 0.72222],
                        936: [0, 0.68333, 0, 0, 0.77778],
                        937: [0, 0.68333, 0, 0, 0.72222],
                        8211: [0, 0.43056, 0.02778, 0, 0.5],
                        8212: [0, 0.43056, 0.02778, 0, 1],
                        8216: [0, 0.69444, 0, 0, 0.27778],
                        8217: [0, 0.69444, 0, 0, 0.27778],
                        8220: [0, 0.69444, 0, 0, 0.5],
                        8221: [0, 0.69444, 0, 0, 0.5],
                        8224: [0.19444, 0.69444, 0, 0, 0.44445],
                        8225: [0.19444, 0.69444, 0, 0, 0.44445],
                        8230: [0, 0.12, 0, 0, 1.172],
                        8242: [0, 0.55556, 0, 0, 0.275],
                        8407: [0, 0.71444, 0.15382, 0, 0.5],
                        8463: [0, 0.68889, 0, 0, 0.54028],
                        8465: [0, 0.69444, 0, 0, 0.72222],
                        8467: [0, 0.69444, 0, 0.11111, 0.41667],
                        8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
                        8476: [0, 0.69444, 0, 0, 0.72222],
                        8501: [0, 0.69444, 0, 0, 0.61111],
                        8592: [-0.13313, 0.36687, 0, 0, 1],
                        8593: [0.19444, 0.69444, 0, 0, 0.5],
                        8594: [-0.13313, 0.36687, 0, 0, 1],
                        8595: [0.19444, 0.69444, 0, 0, 0.5],
                        8596: [-0.13313, 0.36687, 0, 0, 1],
                        8597: [0.25, 0.75, 0, 0, 0.5],
                        8598: [0.19444, 0.69444, 0, 0, 1],
                        8599: [0.19444, 0.69444, 0, 0, 1],
                        8600: [0.19444, 0.69444, 0, 0, 1],
                        8601: [0.19444, 0.69444, 0, 0, 1],
                        8614: [0.011, 0.511, 0, 0, 1],
                        8617: [0.011, 0.511, 0, 0, 1.126],
                        8618: [0.011, 0.511, 0, 0, 1.126],
                        8636: [-0.13313, 0.36687, 0, 0, 1],
                        8637: [-0.13313, 0.36687, 0, 0, 1],
                        8640: [-0.13313, 0.36687, 0, 0, 1],
                        8641: [-0.13313, 0.36687, 0, 0, 1],
                        8652: [0.011, 0.671, 0, 0, 1],
                        8656: [-0.13313, 0.36687, 0, 0, 1],
                        8657: [0.19444, 0.69444, 0, 0, 0.61111],
                        8658: [-0.13313, 0.36687, 0, 0, 1],
                        8659: [0.19444, 0.69444, 0, 0, 0.61111],
                        8660: [-0.13313, 0.36687, 0, 0, 1],
                        8661: [0.25, 0.75, 0, 0, 0.61111],
                        8704: [0, 0.69444, 0, 0, 0.55556],
                        8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
                        8707: [0, 0.69444, 0, 0, 0.55556],
                        8709: [0.05556, 0.75, 0, 0, 0.5],
                        8711: [0, 0.68333, 0, 0, 0.83334],
                        8712: [0.0391, 0.5391, 0, 0, 0.66667],
                        8715: [0.0391, 0.5391, 0, 0, 0.66667],
                        8722: [0.08333, 0.58333, 0, 0, 0.77778],
                        8723: [0.08333, 0.58333, 0, 0, 0.77778],
                        8725: [0.25, 0.75, 0, 0, 0.5],
                        8726: [0.25, 0.75, 0, 0, 0.5],
                        8727: [-0.03472, 0.46528, 0, 0, 0.5],
                        8728: [-0.05555, 0.44445, 0, 0, 0.5],
                        8729: [-0.05555, 0.44445, 0, 0, 0.5],
                        8730: [0.2, 0.8, 0, 0, 0.83334],
                        8733: [0, 0.43056, 0, 0, 0.77778],
                        8734: [0, 0.43056, 0, 0, 1],
                        8736: [0, 0.69224, 0, 0, 0.72222],
                        8739: [0.25, 0.75, 0, 0, 0.27778],
                        8741: [0.25, 0.75, 0, 0, 0.5],
                        8743: [0, 0.55556, 0, 0, 0.66667],
                        8744: [0, 0.55556, 0, 0, 0.66667],
                        8745: [0, 0.55556, 0, 0, 0.66667],
                        8746: [0, 0.55556, 0, 0, 0.66667],
                        8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
                        8764: [-0.13313, 0.36687, 0, 0, 0.77778],
                        8768: [0.19444, 0.69444, 0, 0, 0.27778],
                        8771: [-0.03625, 0.46375, 0, 0, 0.77778],
                        8773: [-0.022, 0.589, 0, 0, 1],
                        8776: [-0.01688, 0.48312, 0, 0, 0.77778],
                        8781: [-0.03625, 0.46375, 0, 0, 0.77778],
                        8784: [-0.133, 0.67, 0, 0, 0.778],
                        8801: [-0.03625, 0.46375, 0, 0, 0.77778],
                        8804: [0.13597, 0.63597, 0, 0, 0.77778],
                        8805: [0.13597, 0.63597, 0, 0, 0.77778],
                        8810: [0.0391, 0.5391, 0, 0, 1],
                        8811: [0.0391, 0.5391, 0, 0, 1],
                        8826: [0.0391, 0.5391, 0, 0, 0.77778],
                        8827: [0.0391, 0.5391, 0, 0, 0.77778],
                        8834: [0.0391, 0.5391, 0, 0, 0.77778],
                        8835: [0.0391, 0.5391, 0, 0, 0.77778],
                        8838: [0.13597, 0.63597, 0, 0, 0.77778],
                        8839: [0.13597, 0.63597, 0, 0, 0.77778],
                        8846: [0, 0.55556, 0, 0, 0.66667],
                        8849: [0.13597, 0.63597, 0, 0, 0.77778],
                        8850: [0.13597, 0.63597, 0, 0, 0.77778],
                        8851: [0, 0.55556, 0, 0, 0.66667],
                        8852: [0, 0.55556, 0, 0, 0.66667],
                        8853: [0.08333, 0.58333, 0, 0, 0.77778],
                        8854: [0.08333, 0.58333, 0, 0, 0.77778],
                        8855: [0.08333, 0.58333, 0, 0, 0.77778],
                        8856: [0.08333, 0.58333, 0, 0, 0.77778],
                        8857: [0.08333, 0.58333, 0, 0, 0.77778],
                        8866: [0, 0.69444, 0, 0, 0.61111],
                        8867: [0, 0.69444, 0, 0, 0.61111],
                        8868: [0, 0.69444, 0, 0, 0.77778],
                        8869: [0, 0.69444, 0, 0, 0.77778],
                        8872: [0.249, 0.75, 0, 0, 0.867],
                        8900: [-0.05555, 0.44445, 0, 0, 0.5],
                        8901: [-0.05555, 0.44445, 0, 0, 0.27778],
                        8902: [-0.03472, 0.46528, 0, 0, 0.5],
                        8904: [0.005, 0.505, 0, 0, 0.9],
                        8942: [0.03, 0.9, 0, 0, 0.278],
                        8943: [-0.19, 0.31, 0, 0, 1.172],
                        8945: [-0.1, 0.82, 0, 0, 1.282],
                        8968: [0.25, 0.75, 0, 0, 0.44445],
                        8969: [0.25, 0.75, 0, 0, 0.44445],
                        8970: [0.25, 0.75, 0, 0, 0.44445],
                        8971: [0.25, 0.75, 0, 0, 0.44445],
                        8994: [-0.14236, 0.35764, 0, 0, 1],
                        8995: [-0.14236, 0.35764, 0, 0, 1],
                        9136: [0.244, 0.744, 0, 0, 0.412],
                        9137: [0.244, 0.744, 0, 0, 0.412],
                        9651: [0.19444, 0.69444, 0, 0, 0.88889],
                        9657: [-0.03472, 0.46528, 0, 0, 0.5],
                        9661: [0.19444, 0.69444, 0, 0, 0.88889],
                        9667: [-0.03472, 0.46528, 0, 0, 0.5],
                        9711: [0.19444, 0.69444, 0, 0, 1],
                        9824: [0.12963, 0.69444, 0, 0, 0.77778],
                        9825: [0.12963, 0.69444, 0, 0, 0.77778],
                        9826: [0.12963, 0.69444, 0, 0, 0.77778],
                        9827: [0.12963, 0.69444, 0, 0, 0.77778],
                        9837: [0, 0.75, 0, 0, 0.38889],
                        9838: [0.19444, 0.69444, 0, 0, 0.38889],
                        9839: [0.19444, 0.69444, 0, 0, 0.38889],
                        10216: [0.25, 0.75, 0, 0, 0.38889],
                        10217: [0.25, 0.75, 0, 0, 0.38889],
                        10222: [0.244, 0.744, 0, 0, 0.412],
                        10223: [0.244, 0.744, 0, 0, 0.412],
                        10229: [0.011, 0.511, 0, 0, 1.609],
                        10230: [0.011, 0.511, 0, 0, 1.638],
                        10231: [0.011, 0.511, 0, 0, 1.859],
                        10232: [0.024, 0.525, 0, 0, 1.609],
                        10233: [0.024, 0.525, 0, 0, 1.638],
                        10234: [0.024, 0.525, 0, 0, 1.858],
                        10236: [0.011, 0.511, 0, 0, 1.638],
                        10815: [0, 0.68333, 0, 0, 0.75],
                        10927: [0.13597, 0.63597, 0, 0, 0.77778],
                        10928: [0.13597, 0.63597, 0, 0, 0.77778],
                        57376: [0.19444, 0.69444, 0, 0, 0],
                      },
                      "Math-BoldItalic": {
                        32: [0, 0, 0, 0, 0.25],
                        48: [0, 0.44444, 0, 0, 0.575],
                        49: [0, 0.44444, 0, 0, 0.575],
                        50: [0, 0.44444, 0, 0, 0.575],
                        51: [0.19444, 0.44444, 0, 0, 0.575],
                        52: [0.19444, 0.44444, 0, 0, 0.575],
                        53: [0.19444, 0.44444, 0, 0, 0.575],
                        54: [0, 0.64444, 0, 0, 0.575],
                        55: [0.19444, 0.44444, 0, 0, 0.575],
                        56: [0, 0.64444, 0, 0, 0.575],
                        57: [0.19444, 0.44444, 0, 0, 0.575],
                        65: [0, 0.68611, 0, 0, 0.86944],
                        66: [0, 0.68611, 0.04835, 0, 0.8664],
                        67: [0, 0.68611, 0.06979, 0, 0.81694],
                        68: [0, 0.68611, 0.03194, 0, 0.93812],
                        69: [0, 0.68611, 0.05451, 0, 0.81007],
                        70: [0, 0.68611, 0.15972, 0, 0.68889],
                        71: [0, 0.68611, 0, 0, 0.88673],
                        72: [0, 0.68611, 0.08229, 0, 0.98229],
                        73: [0, 0.68611, 0.07778, 0, 0.51111],
                        74: [0, 0.68611, 0.10069, 0, 0.63125],
                        75: [0, 0.68611, 0.06979, 0, 0.97118],
                        76: [0, 0.68611, 0, 0, 0.75555],
                        77: [0, 0.68611, 0.11424, 0, 1.14201],
                        78: [0, 0.68611, 0.11424, 0, 0.95034],
                        79: [0, 0.68611, 0.03194, 0, 0.83666],
                        80: [0, 0.68611, 0.15972, 0, 0.72309],
                        81: [0.19444, 0.68611, 0, 0, 0.86861],
                        82: [0, 0.68611, 0.00421, 0, 0.87235],
                        83: [0, 0.68611, 0.05382, 0, 0.69271],
                        84: [0, 0.68611, 0.15972, 0, 0.63663],
                        85: [0, 0.68611, 0.11424, 0, 0.80027],
                        86: [0, 0.68611, 0.25555, 0, 0.67778],
                        87: [0, 0.68611, 0.15972, 0, 1.09305],
                        88: [0, 0.68611, 0.07778, 0, 0.94722],
                        89: [0, 0.68611, 0.25555, 0, 0.67458],
                        90: [0, 0.68611, 0.06979, 0, 0.77257],
                        97: [0, 0.44444, 0, 0, 0.63287],
                        98: [0, 0.69444, 0, 0, 0.52083],
                        99: [0, 0.44444, 0, 0, 0.51342],
                        100: [0, 0.69444, 0, 0, 0.60972],
                        101: [0, 0.44444, 0, 0, 0.55361],
                        102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
                        103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
                        104: [0, 0.69444, 0, 0, 0.66759],
                        105: [0, 0.69326, 0, 0, 0.4048],
                        106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
                        107: [0, 0.69444, 0.01852, 0, 0.6037],
                        108: [0, 0.69444, 0.0088, 0, 0.34815],
                        109: [0, 0.44444, 0, 0, 1.0324],
                        110: [0, 0.44444, 0, 0, 0.71296],
                        111: [0, 0.44444, 0, 0, 0.58472],
                        112: [0.19444, 0.44444, 0, 0, 0.60092],
                        113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
                        114: [0, 0.44444, 0.03194, 0, 0.5287],
                        115: [0, 0.44444, 0, 0, 0.53125],
                        116: [0, 0.63492, 0, 0, 0.41528],
                        117: [0, 0.44444, 0, 0, 0.68102],
                        118: [0, 0.44444, 0.03704, 0, 0.56666],
                        119: [0, 0.44444, 0.02778, 0, 0.83148],
                        120: [0, 0.44444, 0, 0, 0.65903],
                        121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
                        122: [0, 0.44444, 0.04213, 0, 0.55509],
                        160: [0, 0, 0, 0, 0.25],
                        915: [0, 0.68611, 0.15972, 0, 0.65694],
                        916: [0, 0.68611, 0, 0, 0.95833],
                        920: [0, 0.68611, 0.03194, 0, 0.86722],
                        923: [0, 0.68611, 0, 0, 0.80555],
                        926: [0, 0.68611, 0.07458, 0, 0.84125],
                        928: [0, 0.68611, 0.08229, 0, 0.98229],
                        931: [0, 0.68611, 0.05451, 0, 0.88507],
                        933: [0, 0.68611, 0.15972, 0, 0.67083],
                        934: [0, 0.68611, 0, 0, 0.76666],
                        936: [0, 0.68611, 0.11653, 0, 0.71402],
                        937: [0, 0.68611, 0.04835, 0, 0.8789],
                        945: [0, 0.44444, 0, 0, 0.76064],
                        946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
                        947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
                        948: [0, 0.69444, 0.03819, 0, 0.52222],
                        949: [0, 0.44444, 0, 0, 0.52882],
                        950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
                        951: [0.19444, 0.44444, 0.03704, 0, 0.6],
                        952: [0, 0.69444, 0.03194, 0, 0.5618],
                        953: [0, 0.44444, 0, 0, 0.41204],
                        954: [0, 0.44444, 0, 0, 0.66759],
                        955: [0, 0.69444, 0, 0, 0.67083],
                        956: [0.19444, 0.44444, 0, 0, 0.70787],
                        957: [0, 0.44444, 0.06898, 0, 0.57685],
                        958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
                        959: [0, 0.44444, 0, 0, 0.58472],
                        960: [0, 0.44444, 0.03704, 0, 0.68241],
                        961: [0.19444, 0.44444, 0, 0, 0.6118],
                        962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
                        963: [0, 0.44444, 0.03704, 0, 0.68588],
                        964: [0, 0.44444, 0.13472, 0, 0.52083],
                        965: [0, 0.44444, 0.03704, 0, 0.63055],
                        966: [0.19444, 0.44444, 0, 0, 0.74722],
                        967: [0.19444, 0.44444, 0, 0, 0.71805],
                        968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
                        969: [0, 0.44444, 0.03704, 0, 0.71782],
                        977: [0, 0.69444, 0, 0, 0.69155],
                        981: [0.19444, 0.69444, 0, 0, 0.7125],
                        982: [0, 0.44444, 0.03194, 0, 0.975],
                        1009: [0.19444, 0.44444, 0, 0, 0.6118],
                        1013: [0, 0.44444, 0, 0, 0.48333],
                        57649: [0, 0.44444, 0, 0, 0.39352],
                        57911: [0.19444, 0.44444, 0, 0, 0.43889],
                      },
                      "Math-Italic": {
                        32: [0, 0, 0, 0, 0.25],
                        48: [0, 0.43056, 0, 0, 0.5],
                        49: [0, 0.43056, 0, 0, 0.5],
                        50: [0, 0.43056, 0, 0, 0.5],
                        51: [0.19444, 0.43056, 0, 0, 0.5],
                        52: [0.19444, 0.43056, 0, 0, 0.5],
                        53: [0.19444, 0.43056, 0, 0, 0.5],
                        54: [0, 0.64444, 0, 0, 0.5],
                        55: [0.19444, 0.43056, 0, 0, 0.5],
                        56: [0, 0.64444, 0, 0, 0.5],
                        57: [0.19444, 0.43056, 0, 0, 0.5],
                        65: [0, 0.68333, 0, 0.13889, 0.75],
                        66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
                        67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
                        68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
                        69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
                        70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
                        71: [0, 0.68333, 0, 0.08334, 0.78625],
                        72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                        73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
                        74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
                        75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
                        76: [0, 0.68333, 0, 0.02778, 0.68056],
                        77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
                        78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
                        79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                        80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
                        81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
                        82: [0, 0.68333, 0.00773, 0.08334, 0.75929],
                        83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
                        84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
                        85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
                        86: [0, 0.68333, 0.22222, 0, 0.58333],
                        87: [0, 0.68333, 0.13889, 0, 0.94445],
                        88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
                        89: [0, 0.68333, 0.22222, 0, 0.58056],
                        90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
                        97: [0, 0.43056, 0, 0, 0.52859],
                        98: [0, 0.69444, 0, 0, 0.42917],
                        99: [0, 0.43056, 0, 0.05556, 0.43276],
                        100: [0, 0.69444, 0, 0.16667, 0.52049],
                        101: [0, 0.43056, 0, 0.05556, 0.46563],
                        102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
                        103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
                        104: [0, 0.69444, 0, 0, 0.57616],
                        105: [0, 0.65952, 0, 0, 0.34451],
                        106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
                        107: [0, 0.69444, 0.03148, 0, 0.5206],
                        108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
                        109: [0, 0.43056, 0, 0, 0.87801],
                        110: [0, 0.43056, 0, 0, 0.60023],
                        111: [0, 0.43056, 0, 0.05556, 0.48472],
                        112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
                        113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
                        114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
                        115: [0, 0.43056, 0, 0.05556, 0.46875],
                        116: [0, 0.61508, 0, 0.08334, 0.36111],
                        117: [0, 0.43056, 0, 0.02778, 0.57246],
                        118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
                        119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
                        120: [0, 0.43056, 0, 0.02778, 0.57153],
                        121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
                        122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
                        160: [0, 0, 0, 0, 0.25],
                        915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
                        916: [0, 0.68333, 0, 0.16667, 0.83334],
                        920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
                        923: [0, 0.68333, 0, 0.16667, 0.69445],
                        926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
                        928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
                        931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
                        933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
                        934: [0, 0.68333, 0, 0.08334, 0.66667],
                        936: [0, 0.68333, 0.11, 0.05556, 0.61222],
                        937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
                        945: [0, 0.43056, 0.0037, 0.02778, 0.6397],
                        946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
                        947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
                        948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
                        949: [0, 0.43056, 0, 0.08334, 0.46632],
                        950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
                        951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
                        952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
                        953: [0, 0.43056, 0, 0.05556, 0.35394],
                        954: [0, 0.43056, 0, 0, 0.57616],
                        955: [0, 0.69444, 0, 0, 0.58334],
                        956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
                        957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
                        958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
                        959: [0, 0.43056, 0, 0.05556, 0.48472],
                        960: [0, 0.43056, 0.03588, 0, 0.57003],
                        961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                        962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
                        963: [0, 0.43056, 0.03588, 0, 0.57141],
                        964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
                        965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
                        966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
                        967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
                        968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
                        969: [0, 0.43056, 0.03588, 0, 0.62245],
                        977: [0, 0.69444, 0, 0.08334, 0.59144],
                        981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
                        982: [0, 0.43056, 0.02778, 0, 0.82813],
                        1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
                        1013: [0, 0.43056, 0, 0.05556, 0.4059],
                        57649: [0, 0.43056, 0, 0.02778, 0.32246],
                        57911: [0.19444, 0.43056, 0, 0.08334, 0.38403],
                      },
                      "SansSerif-Bold": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0, 0, 0.36667],
                        34: [0, 0.69444, 0, 0, 0.55834],
                        35: [0.19444, 0.69444, 0, 0, 0.91667],
                        36: [0.05556, 0.75, 0, 0, 0.55],
                        37: [0.05556, 0.75, 0, 0, 1.02912],
                        38: [0, 0.69444, 0, 0, 0.83056],
                        39: [0, 0.69444, 0, 0, 0.30556],
                        40: [0.25, 0.75, 0, 0, 0.42778],
                        41: [0.25, 0.75, 0, 0, 0.42778],
                        42: [0, 0.75, 0, 0, 0.55],
                        43: [0.11667, 0.61667, 0, 0, 0.85556],
                        44: [0.10556, 0.13056, 0, 0, 0.30556],
                        45: [0, 0.45833, 0, 0, 0.36667],
                        46: [0, 0.13056, 0, 0, 0.30556],
                        47: [0.25, 0.75, 0, 0, 0.55],
                        48: [0, 0.69444, 0, 0, 0.55],
                        49: [0, 0.69444, 0, 0, 0.55],
                        50: [0, 0.69444, 0, 0, 0.55],
                        51: [0, 0.69444, 0, 0, 0.55],
                        52: [0, 0.69444, 0, 0, 0.55],
                        53: [0, 0.69444, 0, 0, 0.55],
                        54: [0, 0.69444, 0, 0, 0.55],
                        55: [0, 0.69444, 0, 0, 0.55],
                        56: [0, 0.69444, 0, 0, 0.55],
                        57: [0, 0.69444, 0, 0, 0.55],
                        58: [0, 0.45833, 0, 0, 0.30556],
                        59: [0.10556, 0.45833, 0, 0, 0.30556],
                        61: [-0.09375, 0.40625, 0, 0, 0.85556],
                        63: [0, 0.69444, 0, 0, 0.51945],
                        64: [0, 0.69444, 0, 0, 0.73334],
                        65: [0, 0.69444, 0, 0, 0.73334],
                        66: [0, 0.69444, 0, 0, 0.73334],
                        67: [0, 0.69444, 0, 0, 0.70278],
                        68: [0, 0.69444, 0, 0, 0.79445],
                        69: [0, 0.69444, 0, 0, 0.64167],
                        70: [0, 0.69444, 0, 0, 0.61111],
                        71: [0, 0.69444, 0, 0, 0.73334],
                        72: [0, 0.69444, 0, 0, 0.79445],
                        73: [0, 0.69444, 0, 0, 0.33056],
                        74: [0, 0.69444, 0, 0, 0.51945],
                        75: [0, 0.69444, 0, 0, 0.76389],
                        76: [0, 0.69444, 0, 0, 0.58056],
                        77: [0, 0.69444, 0, 0, 0.97778],
                        78: [0, 0.69444, 0, 0, 0.79445],
                        79: [0, 0.69444, 0, 0, 0.79445],
                        80: [0, 0.69444, 0, 0, 0.70278],
                        81: [0.10556, 0.69444, 0, 0, 0.79445],
                        82: [0, 0.69444, 0, 0, 0.70278],
                        83: [0, 0.69444, 0, 0, 0.61111],
                        84: [0, 0.69444, 0, 0, 0.73334],
                        85: [0, 0.69444, 0, 0, 0.76389],
                        86: [0, 0.69444, 0.01528, 0, 0.73334],
                        87: [0, 0.69444, 0.01528, 0, 1.03889],
                        88: [0, 0.69444, 0, 0, 0.73334],
                        89: [0, 0.69444, 0.0275, 0, 0.73334],
                        90: [0, 0.69444, 0, 0, 0.67223],
                        91: [0.25, 0.75, 0, 0, 0.34306],
                        93: [0.25, 0.75, 0, 0, 0.34306],
                        94: [0, 0.69444, 0, 0, 0.55],
                        95: [0.35, 0.10833, 0.03056, 0, 0.55],
                        97: [0, 0.45833, 0, 0, 0.525],
                        98: [0, 0.69444, 0, 0, 0.56111],
                        99: [0, 0.45833, 0, 0, 0.48889],
                        100: [0, 0.69444, 0, 0, 0.56111],
                        101: [0, 0.45833, 0, 0, 0.51111],
                        102: [0, 0.69444, 0.07639, 0, 0.33611],
                        103: [0.19444, 0.45833, 0.01528, 0, 0.55],
                        104: [0, 0.69444, 0, 0, 0.56111],
                        105: [0, 0.69444, 0, 0, 0.25556],
                        106: [0.19444, 0.69444, 0, 0, 0.28611],
                        107: [0, 0.69444, 0, 0, 0.53056],
                        108: [0, 0.69444, 0, 0, 0.25556],
                        109: [0, 0.45833, 0, 0, 0.86667],
                        110: [0, 0.45833, 0, 0, 0.56111],
                        111: [0, 0.45833, 0, 0, 0.55],
                        112: [0.19444, 0.45833, 0, 0, 0.56111],
                        113: [0.19444, 0.45833, 0, 0, 0.56111],
                        114: [0, 0.45833, 0.01528, 0, 0.37222],
                        115: [0, 0.45833, 0, 0, 0.42167],
                        116: [0, 0.58929, 0, 0, 0.40417],
                        117: [0, 0.45833, 0, 0, 0.56111],
                        118: [0, 0.45833, 0.01528, 0, 0.5],
                        119: [0, 0.45833, 0.01528, 0, 0.74445],
                        120: [0, 0.45833, 0, 0, 0.5],
                        121: [0.19444, 0.45833, 0.01528, 0, 0.5],
                        122: [0, 0.45833, 0, 0, 0.47639],
                        126: [0.35, 0.34444, 0, 0, 0.55],
                        160: [0, 0, 0, 0, 0.25],
                        168: [0, 0.69444, 0, 0, 0.55],
                        176: [0, 0.69444, 0, 0, 0.73334],
                        180: [0, 0.69444, 0, 0, 0.55],
                        184: [0.17014, 0, 0, 0, 0.48889],
                        305: [0, 0.45833, 0, 0, 0.25556],
                        567: [0.19444, 0.45833, 0, 0, 0.28611],
                        710: [0, 0.69444, 0, 0, 0.55],
                        711: [0, 0.63542, 0, 0, 0.55],
                        713: [0, 0.63778, 0, 0, 0.55],
                        728: [0, 0.69444, 0, 0, 0.55],
                        729: [0, 0.69444, 0, 0, 0.30556],
                        730: [0, 0.69444, 0, 0, 0.73334],
                        732: [0, 0.69444, 0, 0, 0.55],
                        733: [0, 0.69444, 0, 0, 0.55],
                        915: [0, 0.69444, 0, 0, 0.58056],
                        916: [0, 0.69444, 0, 0, 0.91667],
                        920: [0, 0.69444, 0, 0, 0.85556],
                        923: [0, 0.69444, 0, 0, 0.67223],
                        926: [0, 0.69444, 0, 0, 0.73334],
                        928: [0, 0.69444, 0, 0, 0.79445],
                        931: [0, 0.69444, 0, 0, 0.79445],
                        933: [0, 0.69444, 0, 0, 0.85556],
                        934: [0, 0.69444, 0, 0, 0.79445],
                        936: [0, 0.69444, 0, 0, 0.85556],
                        937: [0, 0.69444, 0, 0, 0.79445],
                        8211: [0, 0.45833, 0.03056, 0, 0.55],
                        8212: [0, 0.45833, 0.03056, 0, 1.10001],
                        8216: [0, 0.69444, 0, 0, 0.30556],
                        8217: [0, 0.69444, 0, 0, 0.30556],
                        8220: [0, 0.69444, 0, 0, 0.55834],
                        8221: [0, 0.69444, 0, 0, 0.55834],
                      },
                      "SansSerif-Italic": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0.05733, 0, 0.31945],
                        34: [0, 0.69444, 0.00316, 0, 0.5],
                        35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
                        36: [0.05556, 0.75, 0.11156, 0, 0.5],
                        37: [0.05556, 0.75, 0.03126, 0, 0.83334],
                        38: [0, 0.69444, 0.03058, 0, 0.75834],
                        39: [0, 0.69444, 0.07816, 0, 0.27778],
                        40: [0.25, 0.75, 0.13164, 0, 0.38889],
                        41: [0.25, 0.75, 0.02536, 0, 0.38889],
                        42: [0, 0.75, 0.11775, 0, 0.5],
                        43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
                        44: [0.125, 0.08333, 0, 0, 0.27778],
                        45: [0, 0.44444, 0.01946, 0, 0.33333],
                        46: [0, 0.08333, 0, 0, 0.27778],
                        47: [0.25, 0.75, 0.13164, 0, 0.5],
                        48: [0, 0.65556, 0.11156, 0, 0.5],
                        49: [0, 0.65556, 0.11156, 0, 0.5],
                        50: [0, 0.65556, 0.11156, 0, 0.5],
                        51: [0, 0.65556, 0.11156, 0, 0.5],
                        52: [0, 0.65556, 0.11156, 0, 0.5],
                        53: [0, 0.65556, 0.11156, 0, 0.5],
                        54: [0, 0.65556, 0.11156, 0, 0.5],
                        55: [0, 0.65556, 0.11156, 0, 0.5],
                        56: [0, 0.65556, 0.11156, 0, 0.5],
                        57: [0, 0.65556, 0.11156, 0, 0.5],
                        58: [0, 0.44444, 0.02502, 0, 0.27778],
                        59: [0.125, 0.44444, 0.02502, 0, 0.27778],
                        61: [-0.13, 0.37, 0.05087, 0, 0.77778],
                        63: [0, 0.69444, 0.11809, 0, 0.47222],
                        64: [0, 0.69444, 0.07555, 0, 0.66667],
                        65: [0, 0.69444, 0, 0, 0.66667],
                        66: [0, 0.69444, 0.08293, 0, 0.66667],
                        67: [0, 0.69444, 0.11983, 0, 0.63889],
                        68: [0, 0.69444, 0.07555, 0, 0.72223],
                        69: [0, 0.69444, 0.11983, 0, 0.59722],
                        70: [0, 0.69444, 0.13372, 0, 0.56945],
                        71: [0, 0.69444, 0.11983, 0, 0.66667],
                        72: [0, 0.69444, 0.08094, 0, 0.70834],
                        73: [0, 0.69444, 0.13372, 0, 0.27778],
                        74: [0, 0.69444, 0.08094, 0, 0.47222],
                        75: [0, 0.69444, 0.11983, 0, 0.69445],
                        76: [0, 0.69444, 0, 0, 0.54167],
                        77: [0, 0.69444, 0.08094, 0, 0.875],
                        78: [0, 0.69444, 0.08094, 0, 0.70834],
                        79: [0, 0.69444, 0.07555, 0, 0.73611],
                        80: [0, 0.69444, 0.08293, 0, 0.63889],
                        81: [0.125, 0.69444, 0.07555, 0, 0.73611],
                        82: [0, 0.69444, 0.08293, 0, 0.64584],
                        83: [0, 0.69444, 0.09205, 0, 0.55556],
                        84: [0, 0.69444, 0.13372, 0, 0.68056],
                        85: [0, 0.69444, 0.08094, 0, 0.6875],
                        86: [0, 0.69444, 0.1615, 0, 0.66667],
                        87: [0, 0.69444, 0.1615, 0, 0.94445],
                        88: [0, 0.69444, 0.13372, 0, 0.66667],
                        89: [0, 0.69444, 0.17261, 0, 0.66667],
                        90: [0, 0.69444, 0.11983, 0, 0.61111],
                        91: [0.25, 0.75, 0.15942, 0, 0.28889],
                        93: [0.25, 0.75, 0.08719, 0, 0.28889],
                        94: [0, 0.69444, 0.0799, 0, 0.5],
                        95: [0.35, 0.09444, 0.08616, 0, 0.5],
                        97: [0, 0.44444, 0.00981, 0, 0.48056],
                        98: [0, 0.69444, 0.03057, 0, 0.51667],
                        99: [0, 0.44444, 0.08336, 0, 0.44445],
                        100: [0, 0.69444, 0.09483, 0, 0.51667],
                        101: [0, 0.44444, 0.06778, 0, 0.44445],
                        102: [0, 0.69444, 0.21705, 0, 0.30556],
                        103: [0.19444, 0.44444, 0.10836, 0, 0.5],
                        104: [0, 0.69444, 0.01778, 0, 0.51667],
                        105: [0, 0.67937, 0.09718, 0, 0.23889],
                        106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
                        107: [0, 0.69444, 0.08336, 0, 0.48889],
                        108: [0, 0.69444, 0.09483, 0, 0.23889],
                        109: [0, 0.44444, 0.01778, 0, 0.79445],
                        110: [0, 0.44444, 0.01778, 0, 0.51667],
                        111: [0, 0.44444, 0.06613, 0, 0.5],
                        112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
                        113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
                        114: [0, 0.44444, 0.10836, 0, 0.34167],
                        115: [0, 0.44444, 0.0778, 0, 0.38333],
                        116: [0, 0.57143, 0.07225, 0, 0.36111],
                        117: [0, 0.44444, 0.04169, 0, 0.51667],
                        118: [0, 0.44444, 0.10836, 0, 0.46111],
                        119: [0, 0.44444, 0.10836, 0, 0.68334],
                        120: [0, 0.44444, 0.09169, 0, 0.46111],
                        121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
                        122: [0, 0.44444, 0.08752, 0, 0.43472],
                        126: [0.35, 0.32659, 0.08826, 0, 0.5],
                        160: [0, 0, 0, 0, 0.25],
                        168: [0, 0.67937, 0.06385, 0, 0.5],
                        176: [0, 0.69444, 0, 0, 0.73752],
                        184: [0.17014, 0, 0, 0, 0.44445],
                        305: [0, 0.44444, 0.04169, 0, 0.23889],
                        567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
                        710: [0, 0.69444, 0.0799, 0, 0.5],
                        711: [0, 0.63194, 0.08432, 0, 0.5],
                        713: [0, 0.60889, 0.08776, 0, 0.5],
                        714: [0, 0.69444, 0.09205, 0, 0.5],
                        715: [0, 0.69444, 0, 0, 0.5],
                        728: [0, 0.69444, 0.09483, 0, 0.5],
                        729: [0, 0.67937, 0.07774, 0, 0.27778],
                        730: [0, 0.69444, 0, 0, 0.73752],
                        732: [0, 0.67659, 0.08826, 0, 0.5],
                        733: [0, 0.69444, 0.09205, 0, 0.5],
                        915: [0, 0.69444, 0.13372, 0, 0.54167],
                        916: [0, 0.69444, 0, 0, 0.83334],
                        920: [0, 0.69444, 0.07555, 0, 0.77778],
                        923: [0, 0.69444, 0, 0, 0.61111],
                        926: [0, 0.69444, 0.12816, 0, 0.66667],
                        928: [0, 0.69444, 0.08094, 0, 0.70834],
                        931: [0, 0.69444, 0.11983, 0, 0.72222],
                        933: [0, 0.69444, 0.09031, 0, 0.77778],
                        934: [0, 0.69444, 0.04603, 0, 0.72222],
                        936: [0, 0.69444, 0.09031, 0, 0.77778],
                        937: [0, 0.69444, 0.08293, 0, 0.72222],
                        8211: [0, 0.44444, 0.08616, 0, 0.5],
                        8212: [0, 0.44444, 0.08616, 0, 1],
                        8216: [0, 0.69444, 0.07816, 0, 0.27778],
                        8217: [0, 0.69444, 0.07816, 0, 0.27778],
                        8220: [0, 0.69444, 0.14205, 0, 0.5],
                        8221: [0, 0.69444, 0.00316, 0, 0.5],
                      },
                      "SansSerif-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        33: [0, 0.69444, 0, 0, 0.31945],
                        34: [0, 0.69444, 0, 0, 0.5],
                        35: [0.19444, 0.69444, 0, 0, 0.83334],
                        36: [0.05556, 0.75, 0, 0, 0.5],
                        37: [0.05556, 0.75, 0, 0, 0.83334],
                        38: [0, 0.69444, 0, 0, 0.75834],
                        39: [0, 0.69444, 0, 0, 0.27778],
                        40: [0.25, 0.75, 0, 0, 0.38889],
                        41: [0.25, 0.75, 0, 0, 0.38889],
                        42: [0, 0.75, 0, 0, 0.5],
                        43: [0.08333, 0.58333, 0, 0, 0.77778],
                        44: [0.125, 0.08333, 0, 0, 0.27778],
                        45: [0, 0.44444, 0, 0, 0.33333],
                        46: [0, 0.08333, 0, 0, 0.27778],
                        47: [0.25, 0.75, 0, 0, 0.5],
                        48: [0, 0.65556, 0, 0, 0.5],
                        49: [0, 0.65556, 0, 0, 0.5],
                        50: [0, 0.65556, 0, 0, 0.5],
                        51: [0, 0.65556, 0, 0, 0.5],
                        52: [0, 0.65556, 0, 0, 0.5],
                        53: [0, 0.65556, 0, 0, 0.5],
                        54: [0, 0.65556, 0, 0, 0.5],
                        55: [0, 0.65556, 0, 0, 0.5],
                        56: [0, 0.65556, 0, 0, 0.5],
                        57: [0, 0.65556, 0, 0, 0.5],
                        58: [0, 0.44444, 0, 0, 0.27778],
                        59: [0.125, 0.44444, 0, 0, 0.27778],
                        61: [-0.13, 0.37, 0, 0, 0.77778],
                        63: [0, 0.69444, 0, 0, 0.47222],
                        64: [0, 0.69444, 0, 0, 0.66667],
                        65: [0, 0.69444, 0, 0, 0.66667],
                        66: [0, 0.69444, 0, 0, 0.66667],
                        67: [0, 0.69444, 0, 0, 0.63889],
                        68: [0, 0.69444, 0, 0, 0.72223],
                        69: [0, 0.69444, 0, 0, 0.59722],
                        70: [0, 0.69444, 0, 0, 0.56945],
                        71: [0, 0.69444, 0, 0, 0.66667],
                        72: [0, 0.69444, 0, 0, 0.70834],
                        73: [0, 0.69444, 0, 0, 0.27778],
                        74: [0, 0.69444, 0, 0, 0.47222],
                        75: [0, 0.69444, 0, 0, 0.69445],
                        76: [0, 0.69444, 0, 0, 0.54167],
                        77: [0, 0.69444, 0, 0, 0.875],
                        78: [0, 0.69444, 0, 0, 0.70834],
                        79: [0, 0.69444, 0, 0, 0.73611],
                        80: [0, 0.69444, 0, 0, 0.63889],
                        81: [0.125, 0.69444, 0, 0, 0.73611],
                        82: [0, 0.69444, 0, 0, 0.64584],
                        83: [0, 0.69444, 0, 0, 0.55556],
                        84: [0, 0.69444, 0, 0, 0.68056],
                        85: [0, 0.69444, 0, 0, 0.6875],
                        86: [0, 0.69444, 0.01389, 0, 0.66667],
                        87: [0, 0.69444, 0.01389, 0, 0.94445],
                        88: [0, 0.69444, 0, 0, 0.66667],
                        89: [0, 0.69444, 0.025, 0, 0.66667],
                        90: [0, 0.69444, 0, 0, 0.61111],
                        91: [0.25, 0.75, 0, 0, 0.28889],
                        93: [0.25, 0.75, 0, 0, 0.28889],
                        94: [0, 0.69444, 0, 0, 0.5],
                        95: [0.35, 0.09444, 0.02778, 0, 0.5],
                        97: [0, 0.44444, 0, 0, 0.48056],
                        98: [0, 0.69444, 0, 0, 0.51667],
                        99: [0, 0.44444, 0, 0, 0.44445],
                        100: [0, 0.69444, 0, 0, 0.51667],
                        101: [0, 0.44444, 0, 0, 0.44445],
                        102: [0, 0.69444, 0.06944, 0, 0.30556],
                        103: [0.19444, 0.44444, 0.01389, 0, 0.5],
                        104: [0, 0.69444, 0, 0, 0.51667],
                        105: [0, 0.67937, 0, 0, 0.23889],
                        106: [0.19444, 0.67937, 0, 0, 0.26667],
                        107: [0, 0.69444, 0, 0, 0.48889],
                        108: [0, 0.69444, 0, 0, 0.23889],
                        109: [0, 0.44444, 0, 0, 0.79445],
                        110: [0, 0.44444, 0, 0, 0.51667],
                        111: [0, 0.44444, 0, 0, 0.5],
                        112: [0.19444, 0.44444, 0, 0, 0.51667],
                        113: [0.19444, 0.44444, 0, 0, 0.51667],
                        114: [0, 0.44444, 0.01389, 0, 0.34167],
                        115: [0, 0.44444, 0, 0, 0.38333],
                        116: [0, 0.57143, 0, 0, 0.36111],
                        117: [0, 0.44444, 0, 0, 0.51667],
                        118: [0, 0.44444, 0.01389, 0, 0.46111],
                        119: [0, 0.44444, 0.01389, 0, 0.68334],
                        120: [0, 0.44444, 0, 0, 0.46111],
                        121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
                        122: [0, 0.44444, 0, 0, 0.43472],
                        126: [0.35, 0.32659, 0, 0, 0.5],
                        160: [0, 0, 0, 0, 0.25],
                        168: [0, 0.67937, 0, 0, 0.5],
                        176: [0, 0.69444, 0, 0, 0.66667],
                        184: [0.17014, 0, 0, 0, 0.44445],
                        305: [0, 0.44444, 0, 0, 0.23889],
                        567: [0.19444, 0.44444, 0, 0, 0.26667],
                        710: [0, 0.69444, 0, 0, 0.5],
                        711: [0, 0.63194, 0, 0, 0.5],
                        713: [0, 0.60889, 0, 0, 0.5],
                        714: [0, 0.69444, 0, 0, 0.5],
                        715: [0, 0.69444, 0, 0, 0.5],
                        728: [0, 0.69444, 0, 0, 0.5],
                        729: [0, 0.67937, 0, 0, 0.27778],
                        730: [0, 0.69444, 0, 0, 0.66667],
                        732: [0, 0.67659, 0, 0, 0.5],
                        733: [0, 0.69444, 0, 0, 0.5],
                        915: [0, 0.69444, 0, 0, 0.54167],
                        916: [0, 0.69444, 0, 0, 0.83334],
                        920: [0, 0.69444, 0, 0, 0.77778],
                        923: [0, 0.69444, 0, 0, 0.61111],
                        926: [0, 0.69444, 0, 0, 0.66667],
                        928: [0, 0.69444, 0, 0, 0.70834],
                        931: [0, 0.69444, 0, 0, 0.72222],
                        933: [0, 0.69444, 0, 0, 0.77778],
                        934: [0, 0.69444, 0, 0, 0.72222],
                        936: [0, 0.69444, 0, 0, 0.77778],
                        937: [0, 0.69444, 0, 0, 0.72222],
                        8211: [0, 0.44444, 0.02778, 0, 0.5],
                        8212: [0, 0.44444, 0.02778, 0, 1],
                        8216: [0, 0.69444, 0, 0, 0.27778],
                        8217: [0, 0.69444, 0, 0, 0.27778],
                        8220: [0, 0.69444, 0, 0, 0.5],
                        8221: [0, 0.69444, 0, 0, 0.5],
                      },
                      "Script-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        65: [0, 0.7, 0.22925, 0, 0.80253],
                        66: [0, 0.7, 0.04087, 0, 0.90757],
                        67: [0, 0.7, 0.1689, 0, 0.66619],
                        68: [0, 0.7, 0.09371, 0, 0.77443],
                        69: [0, 0.7, 0.18583, 0, 0.56162],
                        70: [0, 0.7, 0.13634, 0, 0.89544],
                        71: [0, 0.7, 0.17322, 0, 0.60961],
                        72: [0, 0.7, 0.29694, 0, 0.96919],
                        73: [0, 0.7, 0.19189, 0, 0.80907],
                        74: [0.27778, 0.7, 0.19189, 0, 1.05159],
                        75: [0, 0.7, 0.31259, 0, 0.91364],
                        76: [0, 0.7, 0.19189, 0, 0.87373],
                        77: [0, 0.7, 0.15981, 0, 1.08031],
                        78: [0, 0.7, 0.3525, 0, 0.9015],
                        79: [0, 0.7, 0.08078, 0, 0.73787],
                        80: [0, 0.7, 0.08078, 0, 1.01262],
                        81: [0, 0.7, 0.03305, 0, 0.88282],
                        82: [0, 0.7, 0.06259, 0, 0.85],
                        83: [0, 0.7, 0.19189, 0, 0.86767],
                        84: [0, 0.7, 0.29087, 0, 0.74697],
                        85: [0, 0.7, 0.25815, 0, 0.79996],
                        86: [0, 0.7, 0.27523, 0, 0.62204],
                        87: [0, 0.7, 0.27523, 0, 0.80532],
                        88: [0, 0.7, 0.26006, 0, 0.94445],
                        89: [0, 0.7, 0.2939, 0, 0.70961],
                        90: [0, 0.7, 0.24037, 0, 0.8212],
                        160: [0, 0, 0, 0, 0.25],
                      },
                      "Size1-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        40: [0.35001, 0.85, 0, 0, 0.45834],
                        41: [0.35001, 0.85, 0, 0, 0.45834],
                        47: [0.35001, 0.85, 0, 0, 0.57778],
                        91: [0.35001, 0.85, 0, 0, 0.41667],
                        92: [0.35001, 0.85, 0, 0, 0.57778],
                        93: [0.35001, 0.85, 0, 0, 0.41667],
                        123: [0.35001, 0.85, 0, 0, 0.58334],
                        125: [0.35001, 0.85, 0, 0, 0.58334],
                        160: [0, 0, 0, 0, 0.25],
                        710: [0, 0.72222, 0, 0, 0.55556],
                        732: [0, 0.72222, 0, 0, 0.55556],
                        770: [0, 0.72222, 0, 0, 0.55556],
                        771: [0, 0.72222, 0, 0, 0.55556],
                        8214: [-99e-5, 0.601, 0, 0, 0.77778],
                        8593: [1e-5, 0.6, 0, 0, 0.66667],
                        8595: [1e-5, 0.6, 0, 0, 0.66667],
                        8657: [1e-5, 0.6, 0, 0, 0.77778],
                        8659: [1e-5, 0.6, 0, 0, 0.77778],
                        8719: [0.25001, 0.75, 0, 0, 0.94445],
                        8720: [0.25001, 0.75, 0, 0, 0.94445],
                        8721: [0.25001, 0.75, 0, 0, 1.05556],
                        8730: [0.35001, 0.85, 0, 0, 1],
                        8739: [-0.00599, 0.606, 0, 0, 0.33333],
                        8741: [-0.00599, 0.606, 0, 0, 0.55556],
                        8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
                        8748: [0.306, 0.805, 0.19445, 0, 0.47222],
                        8749: [0.306, 0.805, 0.19445, 0, 0.47222],
                        8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
                        8896: [0.25001, 0.75, 0, 0, 0.83334],
                        8897: [0.25001, 0.75, 0, 0, 0.83334],
                        8898: [0.25001, 0.75, 0, 0, 0.83334],
                        8899: [0.25001, 0.75, 0, 0, 0.83334],
                        8968: [0.35001, 0.85, 0, 0, 0.47222],
                        8969: [0.35001, 0.85, 0, 0, 0.47222],
                        8970: [0.35001, 0.85, 0, 0, 0.47222],
                        8971: [0.35001, 0.85, 0, 0, 0.47222],
                        9168: [-99e-5, 0.601, 0, 0, 0.66667],
                        10216: [0.35001, 0.85, 0, 0, 0.47222],
                        10217: [0.35001, 0.85, 0, 0, 0.47222],
                        10752: [0.25001, 0.75, 0, 0, 1.11111],
                        10753: [0.25001, 0.75, 0, 0, 1.11111],
                        10754: [0.25001, 0.75, 0, 0, 1.11111],
                        10756: [0.25001, 0.75, 0, 0, 0.83334],
                        10758: [0.25001, 0.75, 0, 0, 0.83334],
                      },
                      "Size2-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        40: [0.65002, 1.15, 0, 0, 0.59722],
                        41: [0.65002, 1.15, 0, 0, 0.59722],
                        47: [0.65002, 1.15, 0, 0, 0.81111],
                        91: [0.65002, 1.15, 0, 0, 0.47222],
                        92: [0.65002, 1.15, 0, 0, 0.81111],
                        93: [0.65002, 1.15, 0, 0, 0.47222],
                        123: [0.65002, 1.15, 0, 0, 0.66667],
                        125: [0.65002, 1.15, 0, 0, 0.66667],
                        160: [0, 0, 0, 0, 0.25],
                        710: [0, 0.75, 0, 0, 1],
                        732: [0, 0.75, 0, 0, 1],
                        770: [0, 0.75, 0, 0, 1],
                        771: [0, 0.75, 0, 0, 1],
                        8719: [0.55001, 1.05, 0, 0, 1.27778],
                        8720: [0.55001, 1.05, 0, 0, 1.27778],
                        8721: [0.55001, 1.05, 0, 0, 1.44445],
                        8730: [0.65002, 1.15, 0, 0, 1],
                        8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
                        8748: [0.862, 1.36, 0.44445, 0, 0.55556],
                        8749: [0.862, 1.36, 0.44445, 0, 0.55556],
                        8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
                        8896: [0.55001, 1.05, 0, 0, 1.11111],
                        8897: [0.55001, 1.05, 0, 0, 1.11111],
                        8898: [0.55001, 1.05, 0, 0, 1.11111],
                        8899: [0.55001, 1.05, 0, 0, 1.11111],
                        8968: [0.65002, 1.15, 0, 0, 0.52778],
                        8969: [0.65002, 1.15, 0, 0, 0.52778],
                        8970: [0.65002, 1.15, 0, 0, 0.52778],
                        8971: [0.65002, 1.15, 0, 0, 0.52778],
                        10216: [0.65002, 1.15, 0, 0, 0.61111],
                        10217: [0.65002, 1.15, 0, 0, 0.61111],
                        10752: [0.55001, 1.05, 0, 0, 1.51112],
                        10753: [0.55001, 1.05, 0, 0, 1.51112],
                        10754: [0.55001, 1.05, 0, 0, 1.51112],
                        10756: [0.55001, 1.05, 0, 0, 1.11111],
                        10758: [0.55001, 1.05, 0, 0, 1.11111],
                      },
                      "Size3-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        40: [0.95003, 1.45, 0, 0, 0.73611],
                        41: [0.95003, 1.45, 0, 0, 0.73611],
                        47: [0.95003, 1.45, 0, 0, 1.04445],
                        91: [0.95003, 1.45, 0, 0, 0.52778],
                        92: [0.95003, 1.45, 0, 0, 1.04445],
                        93: [0.95003, 1.45, 0, 0, 0.52778],
                        123: [0.95003, 1.45, 0, 0, 0.75],
                        125: [0.95003, 1.45, 0, 0, 0.75],
                        160: [0, 0, 0, 0, 0.25],
                        710: [0, 0.75, 0, 0, 1.44445],
                        732: [0, 0.75, 0, 0, 1.44445],
                        770: [0, 0.75, 0, 0, 1.44445],
                        771: [0, 0.75, 0, 0, 1.44445],
                        8730: [0.95003, 1.45, 0, 0, 1],
                        8968: [0.95003, 1.45, 0, 0, 0.58334],
                        8969: [0.95003, 1.45, 0, 0, 0.58334],
                        8970: [0.95003, 1.45, 0, 0, 0.58334],
                        8971: [0.95003, 1.45, 0, 0, 0.58334],
                        10216: [0.95003, 1.45, 0, 0, 0.75],
                        10217: [0.95003, 1.45, 0, 0, 0.75],
                      },
                      "Size4-Regular": {
                        32: [0, 0, 0, 0, 0.25],
                        40: [1.25003, 1.75, 0, 0, 0.79167],
                        41: [1.25003, 1.75, 0, 0, 0.79167],
                        47: [1.25003, 1.75, 0, 0, 1.27778],
                        91: [1.25003, 1.75, 0, 0, 0.58334],
                        92: [1.25003, 1.75, 0, 0, 1.27778],
                        93: [1.25003, 1.75, 0, 0, 0.58334],
                        123: [1.25003, 1.75, 0, 0, 0.80556],
                        125: [1.25003, 1.75, 0, 0, 0.80556],
                        160: [0, 0, 0, 0, 0.25],
                        710: [0, 0.825, 0, 0, 1.8889],
                        732: [0, 0.825, 0, 0, 1.8889],
                        770: [0, 0.825, 0, 0, 1.8889],
                        771: [0, 0.825, 0, 0, 1.8889],
                        8730: [1.25003, 1.75, 0, 0, 1],
                        8968: [1.25003, 1.75, 0, 0, 0.63889],
                        8969: [1.25003, 1.75, 0, 0, 0.63889],
                        8970: [1.25003, 1.75, 0, 0, 0.63889],
                        8971: [1.25003, 1.75, 0, 0, 0.63889],
                        9115: [0.64502, 1.155, 0, 0, 0.875],
                        9116: [1e-5, 0.6, 0, 0, 0.875],
                        9117: [0.64502, 1.155, 0, 0, 0.875],
                        9118: [0.64502, 1.155, 0, 0, 0.875],
                        9119: [1e-5, 0.6, 0, 0, 0.875],
                        9120: [0.64502, 1.155, 0, 0, 0.875],
                        9121: [0.64502, 1.155, 0, 0, 0.66667],
                        9122: [-99e-5, 0.601, 0, 0, 0.66667],
                        9123: [0.64502, 1.155, 0, 0, 0.66667],
                        9124: [0.64502, 1.155, 0, 0, 0.66667],
                        9125: [-99e-5, 0.601, 0, 0, 0.66667],
                        9126: [0.64502, 1.155, 0, 0, 0.66667],
                        9127: [1e-5, 0.9, 0, 0, 0.88889],
                        9128: [0.65002, 1.15, 0, 0, 0.88889],
                        9129: [0.90001, 0, 0, 0, 0.88889],
                        9130: [0, 0.3, 0, 0, 0.88889],
                        9131: [1e-5, 0.9, 0, 0, 0.88889],
                        9132: [0.65002, 1.15, 0, 0, 0.88889],
                        9133: [0.90001, 0, 0, 0, 0.88889],
                        9143: [0.88502, 0.915, 0, 0, 1.05556],
                        10216: [1.25003, 1.75, 0, 0, 0.80556],
                        10217: [1.25003, 1.75, 0, 0, 0.80556],
                        57344: [-0.00499, 0.605, 0, 0, 1.05556],
                        57345: [-0.00499, 0.605, 0, 0, 1.05556],
                        57680: [0, 0.12, 0, 0, 0.45],
                        57681: [0, 0.12, 0, 0, 0.45],
                        57682: [0, 0.12, 0, 0, 0.45],
                        57683: [0, 0.12, 0, 0, 0.45],
                      },
                      "Typewriter-Regular": {
                        32: [0, 0, 0, 0, 0.525],
                        33: [0, 0.61111, 0, 0, 0.525],
                        34: [0, 0.61111, 0, 0, 0.525],
                        35: [0, 0.61111, 0, 0, 0.525],
                        36: [0.08333, 0.69444, 0, 0, 0.525],
                        37: [0.08333, 0.69444, 0, 0, 0.525],
                        38: [0, 0.61111, 0, 0, 0.525],
                        39: [0, 0.61111, 0, 0, 0.525],
                        40: [0.08333, 0.69444, 0, 0, 0.525],
                        41: [0.08333, 0.69444, 0, 0, 0.525],
                        42: [0, 0.52083, 0, 0, 0.525],
                        43: [-0.08056, 0.53055, 0, 0, 0.525],
                        44: [0.13889, 0.125, 0, 0, 0.525],
                        45: [-0.08056, 0.53055, 0, 0, 0.525],
                        46: [0, 0.125, 0, 0, 0.525],
                        47: [0.08333, 0.69444, 0, 0, 0.525],
                        48: [0, 0.61111, 0, 0, 0.525],
                        49: [0, 0.61111, 0, 0, 0.525],
                        50: [0, 0.61111, 0, 0, 0.525],
                        51: [0, 0.61111, 0, 0, 0.525],
                        52: [0, 0.61111, 0, 0, 0.525],
                        53: [0, 0.61111, 0, 0, 0.525],
                        54: [0, 0.61111, 0, 0, 0.525],
                        55: [0, 0.61111, 0, 0, 0.525],
                        56: [0, 0.61111, 0, 0, 0.525],
                        57: [0, 0.61111, 0, 0, 0.525],
                        58: [0, 0.43056, 0, 0, 0.525],
                        59: [0.13889, 0.43056, 0, 0, 0.525],
                        60: [-0.05556, 0.55556, 0, 0, 0.525],
                        61: [-0.19549, 0.41562, 0, 0, 0.525],
                        62: [-0.05556, 0.55556, 0, 0, 0.525],
                        63: [0, 0.61111, 0, 0, 0.525],
                        64: [0, 0.61111, 0, 0, 0.525],
                        65: [0, 0.61111, 0, 0, 0.525],
                        66: [0, 0.61111, 0, 0, 0.525],
                        67: [0, 0.61111, 0, 0, 0.525],
                        68: [0, 0.61111, 0, 0, 0.525],
                        69: [0, 0.61111, 0, 0, 0.525],
                        70: [0, 0.61111, 0, 0, 0.525],
                        71: [0, 0.61111, 0, 0, 0.525],
                        72: [0, 0.61111, 0, 0, 0.525],
                        73: [0, 0.61111, 0, 0, 0.525],
                        74: [0, 0.61111, 0, 0, 0.525],
                        75: [0, 0.61111, 0, 0, 0.525],
                        76: [0, 0.61111, 0, 0, 0.525],
                        77: [0, 0.61111, 0, 0, 0.525],
                        78: [0, 0.61111, 0, 0, 0.525],
                        79: [0, 0.61111, 0, 0, 0.525],
                        80: [0, 0.61111, 0, 0, 0.525],
                        81: [0.13889, 0.61111, 0, 0, 0.525],
                        82: [0, 0.61111, 0, 0, 0.525],
                        83: [0, 0.61111, 0, 0, 0.525],
                        84: [0, 0.61111, 0, 0, 0.525],
                        85: [0, 0.61111, 0, 0, 0.525],
                        86: [0, 0.61111, 0, 0, 0.525],
                        87: [0, 0.61111, 0, 0, 0.525],
                        88: [0, 0.61111, 0, 0, 0.525],
                        89: [0, 0.61111, 0, 0, 0.525],
                        90: [0, 0.61111, 0, 0, 0.525],
                        91: [0.08333, 0.69444, 0, 0, 0.525],
                        92: [0.08333, 0.69444, 0, 0, 0.525],
                        93: [0.08333, 0.69444, 0, 0, 0.525],
                        94: [0, 0.61111, 0, 0, 0.525],
                        95: [0.09514, 0, 0, 0, 0.525],
                        96: [0, 0.61111, 0, 0, 0.525],
                        97: [0, 0.43056, 0, 0, 0.525],
                        98: [0, 0.61111, 0, 0, 0.525],
                        99: [0, 0.43056, 0, 0, 0.525],
                        100: [0, 0.61111, 0, 0, 0.525],
                        101: [0, 0.43056, 0, 0, 0.525],
                        102: [0, 0.61111, 0, 0, 0.525],
                        103: [0.22222, 0.43056, 0, 0, 0.525],
                        104: [0, 0.61111, 0, 0, 0.525],
                        105: [0, 0.61111, 0, 0, 0.525],
                        106: [0.22222, 0.61111, 0, 0, 0.525],
                        107: [0, 0.61111, 0, 0, 0.525],
                        108: [0, 0.61111, 0, 0, 0.525],
                        109: [0, 0.43056, 0, 0, 0.525],
                        110: [0, 0.43056, 0, 0, 0.525],
                        111: [0, 0.43056, 0, 0, 0.525],
                        112: [0.22222, 0.43056, 0, 0, 0.525],
                        113: [0.22222, 0.43056, 0, 0, 0.525],
                        114: [0, 0.43056, 0, 0, 0.525],
                        115: [0, 0.43056, 0, 0, 0.525],
                        116: [0, 0.55358, 0, 0, 0.525],
                        117: [0, 0.43056, 0, 0, 0.525],
                        118: [0, 0.43056, 0, 0, 0.525],
                        119: [0, 0.43056, 0, 0, 0.525],
                        120: [0, 0.43056, 0, 0, 0.525],
                        121: [0.22222, 0.43056, 0, 0, 0.525],
                        122: [0, 0.43056, 0, 0, 0.525],
                        123: [0.08333, 0.69444, 0, 0, 0.525],
                        124: [0.08333, 0.69444, 0, 0, 0.525],
                        125: [0.08333, 0.69444, 0, 0, 0.525],
                        126: [0, 0.61111, 0, 0, 0.525],
                        127: [0, 0.61111, 0, 0, 0.525],
                        160: [0, 0, 0, 0, 0.525],
                        176: [0, 0.61111, 0, 0, 0.525],
                        184: [0.19445, 0, 0, 0, 0.525],
                        305: [0, 0.43056, 0, 0, 0.525],
                        567: [0.22222, 0.43056, 0, 0, 0.525],
                        711: [0, 0.56597, 0, 0, 0.525],
                        713: [0, 0.56555, 0, 0, 0.525],
                        714: [0, 0.61111, 0, 0, 0.525],
                        715: [0, 0.61111, 0, 0, 0.525],
                        728: [0, 0.61111, 0, 0, 0.525],
                        730: [0, 0.61111, 0, 0, 0.525],
                        770: [0, 0.61111, 0, 0, 0.525],
                        771: [0, 0.61111, 0, 0, 0.525],
                        776: [0, 0.61111, 0, 0, 0.525],
                        915: [0, 0.61111, 0, 0, 0.525],
                        916: [0, 0.61111, 0, 0, 0.525],
                        920: [0, 0.61111, 0, 0, 0.525],
                        923: [0, 0.61111, 0, 0, 0.525],
                        926: [0, 0.61111, 0, 0, 0.525],
                        928: [0, 0.61111, 0, 0, 0.525],
                        931: [0, 0.61111, 0, 0, 0.525],
                        933: [0, 0.61111, 0, 0, 0.525],
                        934: [0, 0.61111, 0, 0, 0.525],
                        936: [0, 0.61111, 0, 0, 0.525],
                        937: [0, 0.61111, 0, 0, 0.525],
                        8216: [0, 0.61111, 0, 0, 0.525],
                        8217: [0, 0.61111, 0, 0, 0.525],
                        8242: [0, 0.61111, 0, 0, 0.525],
                        9251: [0.11111, 0.21944, 0, 0, 0.525],
                      },
                    },
                    F = {
                      slant: [0.25, 0.25, 0.25],
                      space: [0, 0, 0],
                      stretch: [0, 0, 0],
                      shrink: [0, 0, 0],
                      xHeight: [0.431, 0.431, 0.431],
                      quad: [1, 1.171, 1.472],
                      extraSpace: [0, 0, 0],
                      num1: [0.677, 0.732, 0.925],
                      num2: [0.394, 0.384, 0.387],
                      num3: [0.444, 0.471, 0.504],
                      denom1: [0.686, 0.752, 1.025],
                      denom2: [0.345, 0.344, 0.532],
                      sup1: [0.413, 0.503, 0.504],
                      sup2: [0.363, 0.431, 0.404],
                      sup3: [0.289, 0.286, 0.294],
                      sub1: [0.15, 0.143, 0.2],
                      sub2: [0.247, 0.286, 0.4],
                      supDrop: [0.386, 0.353, 0.494],
                      subDrop: [0.05, 0.071, 0.1],
                      delim1: [2.39, 1.7, 1.98],
                      delim2: [1.01, 1.157, 1.42],
                      axisHeight: [0.25, 0.25, 0.25],
                      defaultRuleThickness: [0.04, 0.049, 0.049],
                      bigOpSpacing1: [0.111, 0.111, 0.111],
                      bigOpSpacing2: [0.166, 0.166, 0.166],
                      bigOpSpacing3: [0.2, 0.2, 0.2],
                      bigOpSpacing4: [0.6, 0.611, 0.611],
                      bigOpSpacing5: [0.1, 0.143, 0.143],
                      sqrtRuleThickness: [0.04, 0.04, 0.04],
                      ptPerEm: [10, 10, 10],
                      doubleRuleSep: [0.2, 0.2, 0.2],
                      arrayRuleWidth: [0.04, 0.04, 0.04],
                      fboxsep: [0.3, 0.3, 0.3],
                      fboxrule: [0.04, 0.04, 0.04],
                    },
                    j = {
                      Å: "A",
                      Ç: "C",
                      Ð: "D",
                      Þ: "o",
                      å: "a",
                      ç: "c",
                      ð: "d",
                      þ: "o",
                      А: "A",
                      Б: "B",
                      В: "B",
                      Г: "F",
                      Д: "A",
                      Е: "E",
                      Ж: "K",
                      З: "3",
                      И: "N",
                      Й: "N",
                      К: "K",
                      Л: "N",
                      М: "M",
                      Н: "H",
                      О: "O",
                      П: "N",
                      Р: "P",
                      С: "C",
                      Т: "T",
                      У: "y",
                      Ф: "O",
                      Х: "X",
                      Ц: "U",
                      Ч: "h",
                      Ш: "W",
                      Щ: "W",
                      Ъ: "B",
                      Ы: "X",
                      Ь: "B",
                      Э: "3",
                      Ю: "X",
                      Я: "R",
                      а: "a",
                      б: "b",
                      в: "a",
                      г: "r",
                      д: "y",
                      е: "e",
                      ж: "m",
                      з: "e",
                      и: "n",
                      й: "n",
                      к: "n",
                      л: "n",
                      м: "m",
                      н: "n",
                      о: "o",
                      п: "n",
                      р: "p",
                      с: "c",
                      т: "o",
                      у: "y",
                      ф: "b",
                      х: "x",
                      ц: "n",
                      ч: "n",
                      ш: "w",
                      щ: "w",
                      ъ: "a",
                      ы: "m",
                      ь: "a",
                      э: "e",
                      ю: "m",
                      я: "r",
                    };
                  function V(t, e, n) {
                    if (!D[e])
                      throw new Error(
                        "Font metrics not found for font: " + e + ".",
                      );
                    var r = t.charCodeAt(0),
                      i = D[e][r];
                    if (
                      (!i &&
                        t[0] in j &&
                        ((r = j[t[0]].charCodeAt(0)), (i = D[e][r])),
                      i || "text" !== n || (M(r) && (i = D[e][77])),
                      i)
                    )
                      return {
                        depth: i[0],
                        height: i[1],
                        italic: i[2],
                        skew: i[3],
                        width: i[4],
                      };
                  }
                  var U = {},
                    G = { bin: 1, close: 1, inner: 1, open: 1, punct: 1, rel: 1 },
                    W = {
                      "accent-token": 1,
                      mathord: 1,
                      "op-token": 1,
                      spacing: 1,
                      textord: 1,
                    },
                    X = { math: {}, text: {} },
                    Y = X;
                  function Z(t, e, n, r, i, a) {
                    (X[t][i] = { font: e, group: n, replace: r }),
                      a && r && (X[t][r] = X[t][i]);
                  }
                  var K = "math",
                    J = "text",
                    Q = "main",
                    tt = "ams",
                    et = "accent-token",
                    nt = "bin",
                    rt = "close",
                    it = "inner",
                    at = "mathord",
                    ot = "op-token",
                    st = "open",
                    lt = "punct",
                    ct = "rel",
                    ht = "spacing",
                    ut = "textord";
                  Z(K, Q, ct, "≡", "\\equiv", !0),
                    Z(K, Q, ct, "≺", "\\prec", !0),
                    Z(K, Q, ct, "≻", "\\succ", !0),
                    Z(K, Q, ct, "∼", "\\sim", !0),
                    Z(K, Q, ct, "⊥", "\\perp"),
                    Z(K, Q, ct, "⪯", "\\preceq", !0),
                    Z(K, Q, ct, "⪰", "\\succeq", !0),
                    Z(K, Q, ct, "≃", "\\simeq", !0),
                    Z(K, Q, ct, "∣", "\\mid", !0),
                    Z(K, Q, ct, "≪", "\\ll", !0),
                    Z(K, Q, ct, "≫", "\\gg", !0),
                    Z(K, Q, ct, "≍", "\\asymp", !0),
                    Z(K, Q, ct, "∥", "\\parallel"),
                    Z(K, Q, ct, "⋈", "\\bowtie", !0),
                    Z(K, Q, ct, "⌣", "\\smile", !0),
                    Z(K, Q, ct, "⊑", "\\sqsubseteq", !0),
                    Z(K, Q, ct, "⊒", "\\sqsupseteq", !0),
                    Z(K, Q, ct, "≐", "\\doteq", !0),
                    Z(K, Q, ct, "⌢", "\\frown", !0),
                    Z(K, Q, ct, "∋", "\\ni", !0),
                    Z(K, Q, ct, "∝", "\\propto", !0),
                    Z(K, Q, ct, "⊢", "\\vdash", !0),
                    Z(K, Q, ct, "⊣", "\\dashv", !0),
                    Z(K, Q, ct, "∋", "\\owns"),
                    Z(K, Q, lt, ".", "\\ldotp"),
                    Z(K, Q, lt, "⋅", "\\cdotp"),
                    Z(K, Q, ut, "#", "\\#"),
                    Z(J, Q, ut, "#", "\\#"),
                    Z(K, Q, ut, "&", "\\&"),
                    Z(J, Q, ut, "&", "\\&"),
                    Z(K, Q, ut, "ℵ", "\\aleph", !0),
                    Z(K, Q, ut, "∀", "\\forall", !0),
                    Z(K, Q, ut, "ℏ", "\\hbar", !0),
                    Z(K, Q, ut, "∃", "\\exists", !0),
                    Z(K, Q, ut, "∇", "\\nabla", !0),
                    Z(K, Q, ut, "♭", "\\flat", !0),
                    Z(K, Q, ut, "ℓ", "\\ell", !0),
                    Z(K, Q, ut, "♮", "\\natural", !0),
                    Z(K, Q, ut, "♣", "\\clubsuit", !0),
                    Z(K, Q, ut, "℘", "\\wp", !0),
                    Z(K, Q, ut, "♯", "\\sharp", !0),
                    Z(K, Q, ut, "♢", "\\diamondsuit", !0),
                    Z(K, Q, ut, "ℜ", "\\Re", !0),
                    Z(K, Q, ut, "♡", "\\heartsuit", !0),
                    Z(K, Q, ut, "ℑ", "\\Im", !0),
                    Z(K, Q, ut, "♠", "\\spadesuit", !0),
                    Z(J, Q, ut, "§", "\\S", !0),
                    Z(J, Q, ut, "¶", "\\P", !0),
                    Z(K, Q, ut, "†", "\\dag"),
                    Z(J, Q, ut, "†", "\\dag"),
                    Z(J, Q, ut, "†", "\\textdagger"),
                    Z(K, Q, ut, "‡", "\\ddag"),
                    Z(J, Q, ut, "‡", "\\ddag"),
                    Z(J, Q, ut, "‡", "\\textdaggerdbl"),
                    Z(K, Q, rt, "⎱", "\\rmoustache", !0),
                    Z(K, Q, st, "⎰", "\\lmoustache", !0),
                    Z(K, Q, rt, "⟯", "\\rgroup", !0),
                    Z(K, Q, st, "⟮", "\\lgroup", !0),
                    Z(K, Q, nt, "∓", "\\mp", !0),
                    Z(K, Q, nt, "⊖", "\\ominus", !0),
                    Z(K, Q, nt, "⊎", "\\uplus", !0),
                    Z(K, Q, nt, "⊓", "\\sqcap", !0),
                    Z(K, Q, nt, "∗", "\\ast"),
                    Z(K, Q, nt, "⊔", "\\sqcup", !0),
                    Z(K, Q, nt, "◯", "\\bigcirc"),
                    Z(K, Q, nt, "∙", "\\bullet"),
                    Z(K, Q, nt, "‡", "\\ddagger"),
                    Z(K, Q, nt, "≀", "\\wr", !0),
                    Z(K, Q, nt, "⨿", "\\amalg"),
                    Z(K, Q, nt, "&", "\\And"),
                    Z(K, Q, ct, "⟵", "\\longleftarrow", !0),
                    Z(K, Q, ct, "⇐", "\\Leftarrow", !0),
                    Z(K, Q, ct, "⟸", "\\Longleftarrow", !0),
                    Z(K, Q, ct, "⟶", "\\longrightarrow", !0),
                    Z(K, Q, ct, "⇒", "\\Rightarrow", !0),
                    Z(K, Q, ct, "⟹", "\\Longrightarrow", !0),
                    Z(K, Q, ct, "↔", "\\leftrightarrow", !0),
                    Z(K, Q, ct, "⟷", "\\longleftrightarrow", !0),
                    Z(K, Q, ct, "⇔", "\\Leftrightarrow", !0),
                    Z(K, Q, ct, "⟺", "\\Longleftrightarrow", !0),
                    Z(K, Q, ct, "↦", "\\mapsto", !0),
                    Z(K, Q, ct, "⟼", "\\longmapsto", !0),
                    Z(K, Q, ct, "↗", "\\nearrow", !0),
                    Z(K, Q, ct, "↩", "\\hookleftarrow", !0),
                    Z(K, Q, ct, "↪", "\\hookrightarrow", !0),
                    Z(K, Q, ct, "↘", "\\searrow", !0),
                    Z(K, Q, ct, "↼", "\\leftharpoonup", !0),
                    Z(K, Q, ct, "⇀", "\\rightharpoonup", !0),
                    Z(K, Q, ct, "↙", "\\swarrow", !0),
                    Z(K, Q, ct, "↽", "\\leftharpoondown", !0),
                    Z(K, Q, ct, "⇁", "\\rightharpoondown", !0),
                    Z(K, Q, ct, "↖", "\\nwarrow", !0),
                    Z(K, Q, ct, "⇌", "\\rightleftharpoons", !0),
                    Z(K, tt, ct, "≮", "\\nless", !0),
                    Z(K, tt, ct, "", "\\@nleqslant"),
                    Z(K, tt, ct, "", "\\@nleqq"),
                    Z(K, tt, ct, "⪇", "\\lneq", !0),
                    Z(K, tt, ct, "≨", "\\lneqq", !0),
                    Z(K, tt, ct, "", "\\@lvertneqq"),
                    Z(K, tt, ct, "⋦", "\\lnsim", !0),
                    Z(K, tt, ct, "⪉", "\\lnapprox", !0),
                    Z(K, tt, ct, "⊀", "\\nprec", !0),
                    Z(K, tt, ct, "⋠", "\\npreceq", !0),
                    Z(K, tt, ct, "⋨", "\\precnsim", !0),
                    Z(K, tt, ct, "⪹", "\\precnapprox", !0),
                    Z(K, tt, ct, "≁", "\\nsim", !0),
                    Z(K, tt, ct, "", "\\@nshortmid"),
                    Z(K, tt, ct, "∤", "\\nmid", !0),
                    Z(K, tt, ct, "⊬", "\\nvdash", !0),
                    Z(K, tt, ct, "⊭", "\\nvDash", !0),
                    Z(K, tt, ct, "⋪", "\\ntriangleleft"),
                    Z(K, tt, ct, "⋬", "\\ntrianglelefteq", !0),
                    Z(K, tt, ct, "⊊", "\\subsetneq", !0),
                    Z(K, tt, ct, "", "\\@varsubsetneq"),
                    Z(K, tt, ct, "⫋", "\\subsetneqq", !0),
                    Z(K, tt, ct, "", "\\@varsubsetneqq"),
                    Z(K, tt, ct, "≯", "\\ngtr", !0),
                    Z(K, tt, ct, "", "\\@ngeqslant"),
                    Z(K, tt, ct, "", "\\@ngeqq"),
                    Z(K, tt, ct, "⪈", "\\gneq", !0),
                    Z(K, tt, ct, "≩", "\\gneqq", !0),
                    Z(K, tt, ct, "", "\\@gvertneqq"),
                    Z(K, tt, ct, "⋧", "\\gnsim", !0),
                    Z(K, tt, ct, "⪊", "\\gnapprox", !0),
                    Z(K, tt, ct, "⊁", "\\nsucc", !0),
                    Z(K, tt, ct, "⋡", "\\nsucceq", !0),
                    Z(K, tt, ct, "⋩", "\\succnsim", !0),
                    Z(K, tt, ct, "⪺", "\\succnapprox", !0),
                    Z(K, tt, ct, "≆", "\\ncong", !0),
                    Z(K, tt, ct, "", "\\@nshortparallel"),
                    Z(K, tt, ct, "∦", "\\nparallel", !0),
                    Z(K, tt, ct, "⊯", "\\nVDash", !0),
                    Z(K, tt, ct, "⋫", "\\ntriangleright"),
                    Z(K, tt, ct, "⋭", "\\ntrianglerighteq", !0),
                    Z(K, tt, ct, "", "\\@nsupseteqq"),
                    Z(K, tt, ct, "⊋", "\\supsetneq", !0),
                    Z(K, tt, ct, "", "\\@varsupsetneq"),
                    Z(K, tt, ct, "⫌", "\\supsetneqq", !0),
                    Z(K, tt, ct, "", "\\@varsupsetneqq"),
                    Z(K, tt, ct, "⊮", "\\nVdash", !0),
                    Z(K, tt, ct, "⪵", "\\precneqq", !0),
                    Z(K, tt, ct, "⪶", "\\succneqq", !0),
                    Z(K, tt, ct, "", "\\@nsubseteqq"),
                    Z(K, tt, nt, "⊴", "\\unlhd"),
                    Z(K, tt, nt, "⊵", "\\unrhd"),
                    Z(K, tt, ct, "↚", "\\nleftarrow", !0),
                    Z(K, tt, ct, "↛", "\\nrightarrow", !0),
                    Z(K, tt, ct, "⇍", "\\nLeftarrow", !0),
                    Z(K, tt, ct, "⇏", "\\nRightarrow", !0),
                    Z(K, tt, ct, "↮", "\\nleftrightarrow", !0),
                    Z(K, tt, ct, "⇎", "\\nLeftrightarrow", !0),
                    Z(K, tt, ct, "△", "\\vartriangle"),
                    Z(K, tt, ut, "ℏ", "\\hslash"),
                    Z(K, tt, ut, "▽", "\\triangledown"),
                    Z(K, tt, ut, "◊", "\\lozenge"),
                    Z(K, tt, ut, "Ⓢ", "\\circledS"),
                    Z(K, tt, ut, "®", "\\circledR"),
                    Z(J, tt, ut, "®", "\\circledR"),
                    Z(K, tt, ut, "∡", "\\measuredangle", !0),
                    Z(K, tt, ut, "∄", "\\nexists"),
                    Z(K, tt, ut, "℧", "\\mho"),
                    Z(K, tt, ut, "Ⅎ", "\\Finv", !0),
                    Z(K, tt, ut, "⅁", "\\Game", !0),
                    Z(K, tt, ut, "‵", "\\backprime"),
                    Z(K, tt, ut, "▲", "\\blacktriangle"),
                    Z(K, tt, ut, "▼", "\\blacktriangledown"),
                    Z(K, tt, ut, "■", "\\blacksquare"),
                    Z(K, tt, ut, "⧫", "\\blacklozenge"),
                    Z(K, tt, ut, "★", "\\bigstar"),
                    Z(K, tt, ut, "∢", "\\sphericalangle", !0),
                    Z(K, tt, ut, "∁", "\\complement", !0),
                    Z(K, tt, ut, "ð", "\\eth", !0),
                    Z(J, Q, ut, "ð", "ð"),
                    Z(K, tt, ut, "╱", "\\diagup"),
                    Z(K, tt, ut, "╲", "\\diagdown"),
                    Z(K, tt, ut, "□", "\\square"),
                    Z(K, tt, ut, "□", "\\Box"),
                    Z(K, tt, ut, "◊", "\\Diamond"),
                    Z(K, tt, ut, "¥", "\\yen", !0),
                    Z(J, tt, ut, "¥", "\\yen", !0),
                    Z(K, tt, ut, "✓", "\\checkmark", !0),
                    Z(J, tt, ut, "✓", "\\checkmark"),
                    Z(K, tt, ut, "ℶ", "\\beth", !0),
                    Z(K, tt, ut, "ℸ", "\\daleth", !0),
                    Z(K, tt, ut, "ℷ", "\\gimel", !0),
                    Z(K, tt, ut, "ϝ", "\\digamma", !0),
                    Z(K, tt, ut, "ϰ", "\\varkappa"),
                    Z(K, tt, st, "┌", "\\@ulcorner", !0),
                    Z(K, tt, rt, "┐", "\\@urcorner", !0),
                    Z(K, tt, st, "└", "\\@llcorner", !0),
                    Z(K, tt, rt, "┘", "\\@lrcorner", !0),
                    Z(K, tt, ct, "≦", "\\leqq", !0),
                    Z(K, tt, ct, "⩽", "\\leqslant", !0),
                    Z(K, tt, ct, "⪕", "\\eqslantless", !0),
                    Z(K, tt, ct, "≲", "\\lesssim", !0),
                    Z(K, tt, ct, "⪅", "\\lessapprox", !0),
                    Z(K, tt, ct, "≊", "\\approxeq", !0),
                    Z(K, tt, nt, "⋖", "\\lessdot"),
                    Z(K, tt, ct, "⋘", "\\lll", !0),
                    Z(K, tt, ct, "≶", "\\lessgtr", !0),
                    Z(K, tt, ct, "⋚", "\\lesseqgtr", !0),
                    Z(K, tt, ct, "⪋", "\\lesseqqgtr", !0),
                    Z(K, tt, ct, "≑", "\\doteqdot"),
                    Z(K, tt, ct, "≓", "\\risingdotseq", !0),
                    Z(K, tt, ct, "≒", "\\fallingdotseq", !0),
                    Z(K, tt, ct, "∽", "\\backsim", !0),
                    Z(K, tt, ct, "⋍", "\\backsimeq", !0),
                    Z(K, tt, ct, "⫅", "\\subseteqq", !0),
                    Z(K, tt, ct, "⋐", "\\Subset", !0),
                    Z(K, tt, ct, "⊏", "\\sqsubset", !0),
                    Z(K, tt, ct, "≼", "\\preccurlyeq", !0),
                    Z(K, tt, ct, "⋞", "\\curlyeqprec", !0),
                    Z(K, tt, ct, "≾", "\\precsim", !0),
                    Z(K, tt, ct, "⪷", "\\precapprox", !0),
                    Z(K, tt, ct, "⊲", "\\vartriangleleft"),
                    Z(K, tt, ct, "⊴", "\\trianglelefteq"),
                    Z(K, tt, ct, "⊨", "\\vDash", !0),
                    Z(K, tt, ct, "⊪", "\\Vvdash", !0),
                    Z(K, tt, ct, "⌣", "\\smallsmile"),
                    Z(K, tt, ct, "⌢", "\\smallfrown"),
                    Z(K, tt, ct, "≏", "\\bumpeq", !0),
                    Z(K, tt, ct, "≎", "\\Bumpeq", !0),
                    Z(K, tt, ct, "≧", "\\geqq", !0),
                    Z(K, tt, ct, "⩾", "\\geqslant", !0),
                    Z(K, tt, ct, "⪖", "\\eqslantgtr", !0),
                    Z(K, tt, ct, "≳", "\\gtrsim", !0),
                    Z(K, tt, ct, "⪆", "\\gtrapprox", !0),
                    Z(K, tt, nt, "⋗", "\\gtrdot"),
                    Z(K, tt, ct, "⋙", "\\ggg", !0),
                    Z(K, tt, ct, "≷", "\\gtrless", !0),
                    Z(K, tt, ct, "⋛", "\\gtreqless", !0),
                    Z(K, tt, ct, "⪌", "\\gtreqqless", !0),
                    Z(K, tt, ct, "≖", "\\eqcirc", !0),
                    Z(K, tt, ct, "≗", "\\circeq", !0),
                    Z(K, tt, ct, "≜", "\\triangleq", !0),
                    Z(K, tt, ct, "∼", "\\thicksim"),
                    Z(K, tt, ct, "≈", "\\thickapprox"),
                    Z(K, tt, ct, "⫆", "\\supseteqq", !0),
                    Z(K, tt, ct, "⋑", "\\Supset", !0),
                    Z(K, tt, ct, "⊐", "\\sqsupset", !0),
                    Z(K, tt, ct, "≽", "\\succcurlyeq", !0),
                    Z(K, tt, ct, "⋟", "\\curlyeqsucc", !0),
                    Z(K, tt, ct, "≿", "\\succsim", !0),
                    Z(K, tt, ct, "⪸", "\\succapprox", !0),
                    Z(K, tt, ct, "⊳", "\\vartriangleright"),
                    Z(K, tt, ct, "⊵", "\\trianglerighteq"),
                    Z(K, tt, ct, "⊩", "\\Vdash", !0),
                    Z(K, tt, ct, "∣", "\\shortmid"),
                    Z(K, tt, ct, "∥", "\\shortparallel"),
                    Z(K, tt, ct, "≬", "\\between", !0),
                    Z(K, tt, ct, "⋔", "\\pitchfork", !0),
                    Z(K, tt, ct, "∝", "\\varpropto"),
                    Z(K, tt, ct, "◀", "\\blacktriangleleft"),
                    Z(K, tt, ct, "∴", "\\therefore", !0),
                    Z(K, tt, ct, "∍", "\\backepsilon"),
                    Z(K, tt, ct, "▶", "\\blacktriangleright"),
                    Z(K, tt, ct, "∵", "\\because", !0),
                    Z(K, tt, ct, "⋘", "\\llless"),
                    Z(K, tt, ct, "⋙", "\\gggtr"),
                    Z(K, tt, nt, "⊲", "\\lhd"),
                    Z(K, tt, nt, "⊳", "\\rhd"),
                    Z(K, tt, ct, "≂", "\\eqsim", !0),
                    Z(K, Q, ct, "⋈", "\\Join"),
                    Z(K, tt, ct, "≑", "\\Doteq", !0),
                    Z(K, tt, nt, "∔", "\\dotplus", !0),
                    Z(K, tt, nt, "∖", "\\smallsetminus"),
                    Z(K, tt, nt, "⋒", "\\Cap", !0),
                    Z(K, tt, nt, "⋓", "\\Cup", !0),
                    Z(K, tt, nt, "⩞", "\\doublebarwedge", !0),
                    Z(K, tt, nt, "⊟", "\\boxminus", !0),
                    Z(K, tt, nt, "⊞", "\\boxplus", !0),
                    Z(K, tt, nt, "⋇", "\\divideontimes", !0),
                    Z(K, tt, nt, "⋉", "\\ltimes", !0),
                    Z(K, tt, nt, "⋊", "\\rtimes", !0),
                    Z(K, tt, nt, "⋋", "\\leftthreetimes", !0),
                    Z(K, tt, nt, "⋌", "\\rightthreetimes", !0),
                    Z(K, tt, nt, "⋏", "\\curlywedge", !0),
                    Z(K, tt, nt, "⋎", "\\curlyvee", !0),
                    Z(K, tt, nt, "⊝", "\\circleddash", !0),
                    Z(K, tt, nt, "⊛", "\\circledast", !0),
                    Z(K, tt, nt, "⋅", "\\centerdot"),
                    Z(K, tt, nt, "⊺", "\\intercal", !0),
                    Z(K, tt, nt, "⋒", "\\doublecap"),
                    Z(K, tt, nt, "⋓", "\\doublecup"),
                    Z(K, tt, nt, "⊠", "\\boxtimes", !0),
                    Z(K, tt, ct, "⇢", "\\dashrightarrow", !0),
                    Z(K, tt, ct, "⇠", "\\dashleftarrow", !0),
                    Z(K, tt, ct, "⇇", "\\leftleftarrows", !0),
                    Z(K, tt, ct, "⇆", "\\leftrightarrows", !0),
                    Z(K, tt, ct, "⇚", "\\Lleftarrow", !0),
                    Z(K, tt, ct, "↞", "\\twoheadleftarrow", !0),
                    Z(K, tt, ct, "↢", "\\leftarrowtail", !0),
                    Z(K, tt, ct, "↫", "\\looparrowleft", !0),
                    Z(K, tt, ct, "⇋", "\\leftrightharpoons", !0),
                    Z(K, tt, ct, "↶", "\\curvearrowleft", !0),
                    Z(K, tt, ct, "↺", "\\circlearrowleft", !0),
                    Z(K, tt, ct, "↰", "\\Lsh", !0),
                    Z(K, tt, ct, "⇈", "\\upuparrows", !0),
                    Z(K, tt, ct, "↿", "\\upharpoonleft", !0),
                    Z(K, tt, ct, "⇃", "\\downharpoonleft", !0),
                    Z(K, tt, ct, "⊸", "\\multimap", !0),
                    Z(K, tt, ct, "↭", "\\leftrightsquigarrow", !0),
                    Z(K, tt, ct, "⇉", "\\rightrightarrows", !0),
                    Z(K, tt, ct, "⇄", "\\rightleftarrows", !0),
                    Z(K, tt, ct, "↠", "\\twoheadrightarrow", !0),
                    Z(K, tt, ct, "↣", "\\rightarrowtail", !0),
                    Z(K, tt, ct, "↬", "\\looparrowright", !0),
                    Z(K, tt, ct, "↷", "\\curvearrowright", !0),
                    Z(K, tt, ct, "↻", "\\circlearrowright", !0),
                    Z(K, tt, ct, "↱", "\\Rsh", !0),
                    Z(K, tt, ct, "⇊", "\\downdownarrows", !0),
                    Z(K, tt, ct, "↾", "\\upharpoonright", !0),
                    Z(K, tt, ct, "⇂", "\\downharpoonright", !0),
                    Z(K, tt, ct, "⇝", "\\rightsquigarrow", !0),
                    Z(K, tt, ct, "⇝", "\\leadsto"),
                    Z(K, tt, ct, "⇛", "\\Rrightarrow", !0),
                    Z(K, tt, ct, "↾", "\\restriction"),
                    Z(K, Q, ut, "‘", "`"),
                    Z(K, Q, ut, "$", "\\$"),
                    Z(J, Q, ut, "$", "\\$"),
                    Z(J, Q, ut, "$", "\\textdollar"),
                    Z(K, Q, ut, "%", "\\%"),
                    Z(J, Q, ut, "%", "\\%"),
                    Z(K, Q, ut, "_", "\\_"),
                    Z(J, Q, ut, "_", "\\_"),
                    Z(J, Q, ut, "_", "\\textunderscore"),
                    Z(K, Q, ut, "∠", "\\angle", !0),
                    Z(K, Q, ut, "∞", "\\infty", !0),
                    Z(K, Q, ut, "′", "\\prime"),
                    Z(K, Q, ut, "△", "\\triangle"),
                    Z(K, Q, ut, "Γ", "\\Gamma", !0),
                    Z(K, Q, ut, "Δ", "\\Delta", !0),
                    Z(K, Q, ut, "Θ", "\\Theta", !0),
                    Z(K, Q, ut, "Λ", "\\Lambda", !0),
                    Z(K, Q, ut, "Ξ", "\\Xi", !0),
                    Z(K, Q, ut, "Π", "\\Pi", !0),
                    Z(K, Q, ut, "Σ", "\\Sigma", !0),
                    Z(K, Q, ut, "Υ", "\\Upsilon", !0),
                    Z(K, Q, ut, "Φ", "\\Phi", !0),
                    Z(K, Q, ut, "Ψ", "\\Psi", !0),
                    Z(K, Q, ut, "Ω", "\\Omega", !0),
                    Z(K, Q, ut, "A", "Α"),
                    Z(K, Q, ut, "B", "Β"),
                    Z(K, Q, ut, "E", "Ε"),
                    Z(K, Q, ut, "Z", "Ζ"),
                    Z(K, Q, ut, "H", "Η"),
                    Z(K, Q, ut, "I", "Ι"),
                    Z(K, Q, ut, "K", "Κ"),
                    Z(K, Q, ut, "M", "Μ"),
                    Z(K, Q, ut, "N", "Ν"),
                    Z(K, Q, ut, "O", "Ο"),
                    Z(K, Q, ut, "P", "Ρ"),
                    Z(K, Q, ut, "T", "Τ"),
                    Z(K, Q, ut, "X", "Χ"),
                    Z(K, Q, ut, "¬", "\\neg", !0),
                    Z(K, Q, ut, "¬", "\\lnot"),
                    Z(K, Q, ut, "⊤", "\\top"),
                    Z(K, Q, ut, "⊥", "\\bot"),
                    Z(K, Q, ut, "∅", "\\emptyset"),
                    Z(K, tt, ut, "∅", "\\varnothing"),
                    Z(K, Q, at, "α", "\\alpha", !0),
                    Z(K, Q, at, "β", "\\beta", !0),
                    Z(K, Q, at, "γ", "\\gamma", !0),
                    Z(K, Q, at, "δ", "\\delta", !0),
                    Z(K, Q, at, "ϵ", "\\epsilon", !0),
                    Z(K, Q, at, "ζ", "\\zeta", !0),
                    Z(K, Q, at, "η", "\\eta", !0),
                    Z(K, Q, at, "θ", "\\theta", !0),
                    Z(K, Q, at, "ι", "\\iota", !0),
                    Z(K, Q, at, "κ", "\\kappa", !0),
                    Z(K, Q, at, "λ", "\\lambda", !0),
                    Z(K, Q, at, "μ", "\\mu", !0),
                    Z(K, Q, at, "ν", "\\nu", !0),
                    Z(K, Q, at, "ξ", "\\xi", !0),
                    Z(K, Q, at, "ο", "\\omicron", !0),
                    Z(K, Q, at, "π", "\\pi", !0),
                    Z(K, Q, at, "ρ", "\\rho", !0),
                    Z(K, Q, at, "σ", "\\sigma", !0),
                    Z(K, Q, at, "τ", "\\tau", !0),
                    Z(K, Q, at, "υ", "\\upsilon", !0),
                    Z(K, Q, at, "ϕ", "\\phi", !0),
                    Z(K, Q, at, "χ", "\\chi", !0),
                    Z(K, Q, at, "ψ", "\\psi", !0),
                    Z(K, Q, at, "ω", "\\omega", !0),
                    Z(K, Q, at, "ε", "\\varepsilon", !0),
                    Z(K, Q, at, "ϑ", "\\vartheta", !0),
                    Z(K, Q, at, "ϖ", "\\varpi", !0),
                    Z(K, Q, at, "ϱ", "\\varrho", !0),
                    Z(K, Q, at, "ς", "\\varsigma", !0),
                    Z(K, Q, at, "φ", "\\varphi", !0),
                    Z(K, Q, nt, "∗", "*"),
                    Z(K, Q, nt, "+", "+"),
                    Z(K, Q, nt, "−", "-"),
                    Z(K, Q, nt, "⋅", "\\cdot", !0),
                    Z(K, Q, nt, "∘", "\\circ"),
                    Z(K, Q, nt, "÷", "\\div", !0),
                    Z(K, Q, nt, "±", "\\pm", !0),
                    Z(K, Q, nt, "×", "\\times", !0),
                    Z(K, Q, nt, "∩", "\\cap", !0),
                    Z(K, Q, nt, "∪", "\\cup", !0),
                    Z(K, Q, nt, "∖", "\\setminus"),
                    Z(K, Q, nt, "∧", "\\land"),
                    Z(K, Q, nt, "∨", "\\lor"),
                    Z(K, Q, nt, "∧", "\\wedge", !0),
                    Z(K, Q, nt, "∨", "\\vee", !0),
                    Z(K, Q, ut, "√", "\\surd"),
                    Z(K, Q, st, "⟨", "\\langle", !0),
                    Z(K, Q, st, "∣", "\\lvert"),
                    Z(K, Q, st, "∥", "\\lVert"),
                    Z(K, Q, rt, "?", "?"),
                    Z(K, Q, rt, "!", "!"),
                    Z(K, Q, rt, "⟩", "\\rangle", !0),
                    Z(K, Q, rt, "∣", "\\rvert"),
                    Z(K, Q, rt, "∥", "\\rVert"),
                    Z(K, Q, ct, "=", "="),
                    Z(K, Q, ct, ":", ":"),
                    Z(K, Q, ct, "≈", "\\approx", !0),
                    Z(K, Q, ct, "≅", "\\cong", !0),
                    Z(K, Q, ct, "≥", "\\ge"),
                    Z(K, Q, ct, "≥", "\\geq", !0),
                    Z(K, Q, ct, "←", "\\gets"),
                    Z(K, Q, ct, ">", "\\gt", !0),
                    Z(K, Q, ct, "∈", "\\in", !0),
                    Z(K, Q, ct, "", "\\@not"),
                    Z(K, Q, ct, "⊂", "\\subset", !0),
                    Z(K, Q, ct, "⊃", "\\supset", !0),
                    Z(K, Q, ct, "⊆", "\\subseteq", !0),
                    Z(K, Q, ct, "⊇", "\\supseteq", !0),
                    Z(K, tt, ct, "⊈", "\\nsubseteq", !0),
                    Z(K, tt, ct, "⊉", "\\nsupseteq", !0),
                    Z(K, Q, ct, "⊨", "\\models"),
                    Z(K, Q, ct, "←", "\\leftarrow", !0),
                    Z(K, Q, ct, "≤", "\\le"),
                    Z(K, Q, ct, "≤", "\\leq", !0),
                    Z(K, Q, ct, "<", "\\lt", !0),
                    Z(K, Q, ct, "→", "\\rightarrow", !0),
                    Z(K, Q, ct, "→", "\\to"),
                    Z(K, tt, ct, "≱", "\\ngeq", !0),
                    Z(K, tt, ct, "≰", "\\nleq", !0),
                    Z(K, Q, ht, " ", "\\ "),
                    Z(K, Q, ht, " ", "~"),
                    Z(K, Q, ht, " ", "\\space"),
                    Z(K, Q, ht, " ", "\\nobreakspace"),
                    Z(J, Q, ht, " ", "\\ "),
                    Z(J, Q, ht, " ", " "),
                    Z(J, Q, ht, " ", "~"),
                    Z(J, Q, ht, " ", "\\space"),
                    Z(J, Q, ht, " ", "\\nobreakspace"),
                    Z(K, Q, ht, null, "\\nobreak"),
                    Z(K, Q, ht, null, "\\allowbreak"),
                    Z(K, Q, lt, ",", ","),
                    Z(K, Q, lt, ";", ";"),
                    Z(K, tt, nt, "⊼", "\\barwedge", !0),
                    Z(K, tt, nt, "⊻", "\\veebar", !0),
                    Z(K, Q, nt, "⊙", "\\odot", !0),
                    Z(K, Q, nt, "⊕", "\\oplus", !0),
                    Z(K, Q, nt, "⊗", "\\otimes", !0),
                    Z(K, Q, ut, "∂", "\\partial", !0),
                    Z(K, Q, nt, "⊘", "\\oslash", !0),
                    Z(K, tt, nt, "⊚", "\\circledcirc", !0),
                    Z(K, tt, nt, "⊡", "\\boxdot", !0),
                    Z(K, Q, nt, "△", "\\bigtriangleup"),
                    Z(K, Q, nt, "▽", "\\bigtriangledown"),
                    Z(K, Q, nt, "†", "\\dagger"),
                    Z(K, Q, nt, "⋄", "\\diamond"),
                    Z(K, Q, nt, "⋆", "\\star"),
                    Z(K, Q, nt, "◃", "\\triangleleft"),
                    Z(K, Q, nt, "▹", "\\triangleright"),
                    Z(K, Q, st, "{", "\\{"),
                    Z(J, Q, ut, "{", "\\{"),
                    Z(J, Q, ut, "{", "\\textbraceleft"),
                    Z(K, Q, rt, "}", "\\}"),
                    Z(J, Q, ut, "}", "\\}"),
                    Z(J, Q, ut, "}", "\\textbraceright"),
                    Z(K, Q, st, "{", "\\lbrace"),
                    Z(K, Q, rt, "}", "\\rbrace"),
                    Z(K, Q, st, "[", "\\lbrack", !0),
                    Z(J, Q, ut, "[", "\\lbrack", !0),
                    Z(K, Q, rt, "]", "\\rbrack", !0),
                    Z(J, Q, ut, "]", "\\rbrack", !0),
                    Z(K, Q, st, "(", "\\lparen", !0),
                    Z(K, Q, rt, ")", "\\rparen", !0),
                    Z(J, Q, ut, "<", "\\textless", !0),
                    Z(J, Q, ut, ">", "\\textgreater", !0),
                    Z(K, Q, st, "⌊", "\\lfloor", !0),
                    Z(K, Q, rt, "⌋", "\\rfloor", !0),
                    Z(K, Q, st, "⌈", "\\lceil", !0),
                    Z(K, Q, rt, "⌉", "\\rceil", !0),
                    Z(K, Q, ut, "\\", "\\backslash"),
                    Z(K, Q, ut, "∣", "|"),
                    Z(K, Q, ut, "∣", "\\vert"),
                    Z(J, Q, ut, "|", "\\textbar", !0),
                    Z(K, Q, ut, "∥", "\\|"),
                    Z(K, Q, ut, "∥", "\\Vert"),
                    Z(J, Q, ut, "∥", "\\textbardbl"),
                    Z(J, Q, ut, "~", "\\textasciitilde"),
                    Z(J, Q, ut, "\\", "\\textbackslash"),
                    Z(J, Q, ut, "^", "\\textasciicircum"),
                    Z(K, Q, ct, "↑", "\\uparrow", !0),
                    Z(K, Q, ct, "⇑", "\\Uparrow", !0),
                    Z(K, Q, ct, "↓", "\\downarrow", !0),
                    Z(K, Q, ct, "⇓", "\\Downarrow", !0),
                    Z(K, Q, ct, "↕", "\\updownarrow", !0),
                    Z(K, Q, ct, "⇕", "\\Updownarrow", !0),
                    Z(K, Q, ot, "∐", "\\coprod"),
                    Z(K, Q, ot, "⋁", "\\bigvee"),
                    Z(K, Q, ot, "⋀", "\\bigwedge"),
                    Z(K, Q, ot, "⨄", "\\biguplus"),
                    Z(K, Q, ot, "⋂", "\\bigcap"),
                    Z(K, Q, ot, "⋃", "\\bigcup"),
                    Z(K, Q, ot, "∫", "\\int"),
                    Z(K, Q, ot, "∫", "\\intop"),
                    Z(K, Q, ot, "∬", "\\iint"),
                    Z(K, Q, ot, "∭", "\\iiint"),
                    Z(K, Q, ot, "∏", "\\prod"),
                    Z(K, Q, ot, "∑", "\\sum"),
                    Z(K, Q, ot, "⨂", "\\bigotimes"),
                    Z(K, Q, ot, "⨁", "\\bigoplus"),
                    Z(K, Q, ot, "⨀", "\\bigodot"),
                    Z(K, Q, ot, "∮", "\\oint"),
                    Z(K, Q, ot, "⨆", "\\bigsqcup"),
                    Z(K, Q, ot, "∫", "\\smallint"),
                    Z(J, Q, it, "…", "\\textellipsis"),
                    Z(K, Q, it, "…", "\\mathellipsis"),
                    Z(J, Q, it, "…", "\\ldots", !0),
                    Z(K, Q, it, "…", "\\ldots", !0),
                    Z(K, Q, it, "⋯", "\\@cdots", !0),
                    Z(K, Q, it, "⋱", "\\ddots", !0),
                    Z(K, Q, ut, "⋮", "\\varvdots"),
                    Z(K, Q, et, "ˊ", "\\acute"),
                    Z(K, Q, et, "ˋ", "\\grave"),
                    Z(K, Q, et, "¨", "\\ddot"),
                    Z(K, Q, et, "~", "\\tilde"),
                    Z(K, Q, et, "ˉ", "\\bar"),
                    Z(K, Q, et, "˘", "\\breve"),
                    Z(K, Q, et, "ˇ", "\\check"),
                    Z(K, Q, et, "^", "\\hat"),
                    Z(K, Q, et, "⃗", "\\vec"),
                    Z(K, Q, et, "˙", "\\dot"),
                    Z(K, Q, et, "˚", "\\mathring"),
                    Z(K, Q, at, "", "\\@imath"),
                    Z(K, Q, at, "", "\\@jmath"),
                    Z(K, Q, ut, "ı", "ı"),
                    Z(K, Q, ut, "ȷ", "ȷ"),
                    Z(J, Q, ut, "ı", "\\i", !0),
                    Z(J, Q, ut, "ȷ", "\\j", !0),
                    Z(J, Q, ut, "ß", "\\ss", !0),
                    Z(J, Q, ut, "æ", "\\ae", !0),
                    Z(J, Q, ut, "œ", "\\oe", !0),
                    Z(J, Q, ut, "ø", "\\o", !0),
                    Z(J, Q, ut, "Æ", "\\AE", !0),
                    Z(J, Q, ut, "Œ", "\\OE", !0),
                    Z(J, Q, ut, "Ø", "\\O", !0),
                    Z(J, Q, et, "ˊ", "\\'"),
                    Z(J, Q, et, "ˋ", "\\`"),
                    Z(J, Q, et, "ˆ", "\\^"),
                    Z(J, Q, et, "˜", "\\~"),
                    Z(J, Q, et, "ˉ", "\\="),
                    Z(J, Q, et, "˘", "\\u"),
                    Z(J, Q, et, "˙", "\\."),
                    Z(J, Q, et, "˚", "\\r"),
                    Z(J, Q, et, "ˇ", "\\v"),
                    Z(J, Q, et, "¨", '\\"'),
                    Z(J, Q, et, "˝", "\\H"),
                    Z(J, Q, et, "◯", "\\textcircled");
                  var dt = { "--": !0, "---": !0, "``": !0, "''": !0 };
                  Z(J, Q, ut, "–", "--", !0),
                    Z(J, Q, ut, "–", "\\textendash"),
                    Z(J, Q, ut, "—", "---", !0),
                    Z(J, Q, ut, "—", "\\textemdash"),
                    Z(J, Q, ut, "‘", "`", !0),
                    Z(J, Q, ut, "‘", "\\textquoteleft"),
                    Z(J, Q, ut, "’", "'", !0),
                    Z(J, Q, ut, "’", "\\textquoteright"),
                    Z(J, Q, ut, "“", "``", !0),
                    Z(J, Q, ut, "“", "\\textquotedblleft"),
                    Z(J, Q, ut, "”", "''", !0),
                    Z(J, Q, ut, "”", "\\textquotedblright"),
                    Z(K, Q, ut, "°", "\\degree", !0),
                    Z(J, Q, ut, "°", "\\degree"),
                    Z(J, Q, ut, "°", "\\textdegree", !0),
                    Z(K, Q, ut, "£", "\\pounds"),
                    Z(K, Q, ut, "£", "\\mathsterling", !0),
                    Z(J, Q, ut, "£", "\\pounds"),
                    Z(J, Q, ut, "£", "\\textsterling", !0),
                    Z(K, tt, ut, "✠", "\\maltese"),
                    Z(J, tt, ut, "✠", "\\maltese");
                  for (var mt = '0123456789/@."', pt = 0; pt < mt.length; pt++) {
                    var ft = mt.charAt(pt);
                    Z(K, Q, ut, ft, ft);
                  }
                  for (
                    var gt = '0123456789!@*()-=+";:?/.,', yt = 0;
                    yt < gt.length;
                    yt++
                  ) {
                    var xt = gt.charAt(yt);
                    Z(J, Q, ut, xt, xt);
                  }
                  for (
                    var vt =
                        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
                      bt = 0;
                    bt < vt.length;
                    bt++
                  ) {
                    var wt = vt.charAt(bt);
                    Z(K, Q, at, wt, wt), Z(J, Q, ut, wt, wt);
                  }
                  Z(K, tt, ut, "C", "ℂ"),
                    Z(J, tt, ut, "C", "ℂ"),
                    Z(K, tt, ut, "H", "ℍ"),
                    Z(J, tt, ut, "H", "ℍ"),
                    Z(K, tt, ut, "N", "ℕ"),
                    Z(J, tt, ut, "N", "ℕ"),
                    Z(K, tt, ut, "P", "ℙ"),
                    Z(J, tt, ut, "P", "ℙ"),
                    Z(K, tt, ut, "Q", "ℚ"),
                    Z(J, tt, ut, "Q", "ℚ"),
                    Z(K, tt, ut, "R", "ℝ"),
                    Z(J, tt, ut, "R", "ℝ"),
                    Z(K, tt, ut, "Z", "ℤ"),
                    Z(J, tt, ut, "Z", "ℤ"),
                    Z(K, Q, at, "h", "ℎ"),
                    Z(J, Q, at, "h", "ℎ");
                  for (var kt = "", $t = 0; $t < vt.length; $t++) {
                    var Mt = vt.charAt($t);
                    Z(
                      K,
                      Q,
                      at,
                      Mt,
                      (kt = String.fromCharCode(55349, 56320 + $t)),
                    ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56372 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56424 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56580 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56736 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56788 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56840 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        Mt,
                        (kt = String.fromCharCode(55349, 56944 + $t)),
                      ),
                      Z(J, Q, ut, Mt, kt),
                      $t < 26 &&
                        (Z(
                          K,
                          Q,
                          at,
                          Mt,
                          (kt = String.fromCharCode(55349, 56632 + $t)),
                        ),
                        Z(J, Q, ut, Mt, kt),
                        Z(
                          K,
                          Q,
                          at,
                          Mt,
                          (kt = String.fromCharCode(55349, 56476 + $t)),
                        ),
                        Z(J, Q, ut, Mt, kt));
                  }
                  Z(K, Q, at, "k", (kt = String.fromCharCode(55349, 56668))),
                    Z(J, Q, ut, "k", kt);
                  for (var St = 0; St < 10; St++) {
                    var zt = St.toString();
                    Z(
                      K,
                      Q,
                      at,
                      zt,
                      (kt = String.fromCharCode(55349, 57294 + St)),
                    ),
                      Z(J, Q, ut, zt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        zt,
                        (kt = String.fromCharCode(55349, 57314 + St)),
                      ),
                      Z(J, Q, ut, zt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        zt,
                        (kt = String.fromCharCode(55349, 57324 + St)),
                      ),
                      Z(J, Q, ut, zt, kt),
                      Z(
                        K,
                        Q,
                        at,
                        zt,
                        (kt = String.fromCharCode(55349, 57334 + St)),
                      ),
                      Z(J, Q, ut, zt, kt);
                  }
                  for (var At = "ÇÐÞçþ", Tt = 0; Tt < At.length; Tt++) {
                    var Nt = At.charAt(Tt);
                    Z(K, Q, at, Nt, Nt), Z(J, Q, ut, Nt, Nt);
                  }
                  var Bt = [
                      ["mathbf", "textbf", "Main-Bold"],
                      ["mathbf", "textbf", "Main-Bold"],
                      ["mathnormal", "textit", "Math-Italic"],
                      ["mathnormal", "textit", "Math-Italic"],
                      ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                      ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                      ["mathscr", "textscr", "Script-Regular"],
                      ["", "", ""],
                      ["", "", ""],
                      ["", "", ""],
                      ["mathfrak", "textfrak", "Fraktur-Regular"],
                      ["mathfrak", "textfrak", "Fraktur-Regular"],
                      ["mathbb", "textbb", "AMS-Regular"],
                      ["mathbb", "textbb", "AMS-Regular"],
                      ["", "", ""],
                      ["", "", ""],
                      ["mathsf", "textsf", "SansSerif-Regular"],
                      ["mathsf", "textsf", "SansSerif-Regular"],
                      ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                      ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                      ["mathitsf", "textitsf", "SansSerif-Italic"],
                      ["mathitsf", "textitsf", "SansSerif-Italic"],
                      ["", "", ""],
                      ["", "", ""],
                      ["mathtt", "texttt", "Typewriter-Regular"],
                      ["mathtt", "texttt", "Typewriter-Regular"],
                    ],
                    Ct = [
                      ["mathbf", "textbf", "Main-Bold"],
                      ["", "", ""],
                      ["mathsf", "textsf", "SansSerif-Regular"],
                      ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                      ["mathtt", "texttt", "Typewriter-Regular"],
                    ],
                    qt = [
                      [1, 1, 1],
                      [2, 1, 1],
                      [3, 1, 1],
                      [4, 2, 1],
                      [5, 2, 1],
                      [6, 3, 1],
                      [7, 4, 2],
                      [8, 6, 3],
                      [9, 7, 6],
                      [10, 8, 7],
                      [11, 10, 9],
                    ],
                    Et = [
                      0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.2, 1.44, 1.728, 2.074, 2.488,
                    ],
                    Lt = function (t, e) {
                      return e.size < 2 ? t : qt[t - 1][e.size - 1];
                    },
                    _t = (function () {
                      function t(e) {
                        (this.style = void 0),
                          (this.color = void 0),
                          (this.size = void 0),
                          (this.textSize = void 0),
                          (this.phantom = void 0),
                          (this.font = void 0),
                          (this.fontFamily = void 0),
                          (this.fontWeight = void 0),
                          (this.fontShape = void 0),
                          (this.sizeMultiplier = void 0),
                          (this.maxSize = void 0),
                          (this.minRuleThickness = void 0),
                          (this._fontMetrics = void 0),
                          (this.style = e.style),
                          (this.color = e.color),
                          (this.size = e.size || t.BASESIZE),
                          (this.textSize = e.textSize || this.size),
                          (this.phantom = !!e.phantom),
                          (this.font = e.font || ""),
                          (this.fontFamily = e.fontFamily || ""),
                          (this.fontWeight = e.fontWeight || ""),
                          (this.fontShape = e.fontShape || ""),
                          (this.sizeMultiplier = Et[this.size - 1]),
                          (this.maxSize = e.maxSize),
                          (this.minRuleThickness = e.minRuleThickness),
                          (this._fontMetrics = void 0);
                      }
                      var e = t.prototype;
                      return (
                        (e.extend = function (e) {
                          var n = {
                            style: this.style,
                            size: this.size,
                            textSize: this.textSize,
                            color: this.color,
                            phantom: this.phantom,
                            font: this.font,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontShape: this.fontShape,
                            maxSize: this.maxSize,
                            minRuleThickness: this.minRuleThickness,
                          };
                          for (var r in e) e.hasOwnProperty(r) && (n[r] = e[r]);
                          return new t(n);
                        }),
                        (e.havingStyle = function (t) {
                          return this.style === t
                            ? this
                            : this.extend({
                                style: t,
                                size: Lt(this.textSize, t),
                              });
                        }),
                        (e.havingCrampedStyle = function () {
                          return this.havingStyle(this.style.cramp());
                        }),
                        (e.havingSize = function (t) {
                          return this.size === t && this.textSize === t
                            ? this
                            : this.extend({
                                style: this.style.text(),
                                size: t,
                                textSize: t,
                                sizeMultiplier: Et[t - 1],
                              });
                        }),
                        (e.havingBaseStyle = function (e) {
                          e = e || this.style.text();
                          var n = Lt(t.BASESIZE, e);
                          return this.size === n &&
                            this.textSize === t.BASESIZE &&
                            this.style === e
                            ? this
                            : this.extend({ style: e, size: n });
                        }),
                        (e.havingBaseSizing = function () {
                          var t;
                          switch (this.style.id) {
                            case 4:
                            case 5:
                              t = 3;
                              break;
                            case 6:
                            case 7:
                              t = 1;
                              break;
                            default:
                              t = 6;
                          }
                          return this.extend({
                            style: this.style.text(),
                            size: t,
                          });
                        }),
                        (e.withColor = function (t) {
                          return this.extend({ color: t });
                        }),
                        (e.withPhantom = function () {
                          return this.extend({ phantom: !0 });
                        }),
                        (e.withFont = function (t) {
                          return this.extend({ font: t });
                        }),
                        (e.withTextFontFamily = function (t) {
                          return this.extend({ fontFamily: t, font: "" });
                        }),
                        (e.withTextFontWeight = function (t) {
                          return this.extend({ fontWeight: t, font: "" });
                        }),
                        (e.withTextFontShape = function (t) {
                          return this.extend({ fontShape: t, font: "" });
                        }),
                        (e.sizingClasses = function (t) {
                          return t.size !== this.size
                            ? [
                                "sizing",
                                "reset-size" + t.size,
                                "size" + this.size,
                              ]
                            : [];
                        }),
                        (e.baseSizingClasses = function () {
                          return this.size !== t.BASESIZE
                            ? [
                                "sizing",
                                "reset-size" + this.size,
                                "size" + t.BASESIZE,
                              ]
                            : [];
                        }),
                        (e.fontMetrics = function () {
                          return (
                            this._fontMetrics ||
                              (this._fontMetrics = (function (t) {
                                var e;
                                if (!U[(e = t >= 5 ? 0 : t >= 3 ? 1 : 2)]) {
                                  var n = (U[e] = { cssEmPerMu: F.quad[e] / 18 });
                                  for (var r in F)
                                    F.hasOwnProperty(r) && (n[r] = F[r][e]);
                                }
                                return U[e];
                              })(this.size)),
                            this._fontMetrics
                          );
                        }),
                        (e.getColor = function () {
                          return this.phantom ? "transparent" : this.color;
                        }),
                        t
                      );
                    })();
                  _t.BASESIZE = 6;
                  var It = _t,
                    Rt = {
                      pt: 1,
                      mm: 7227 / 2540,
                      cm: 7227 / 254,
                      in: 72.27,
                      bp: 1.00375,
                      pc: 12,
                      dd: 1238 / 1157,
                      cc: 14856 / 1157,
                      nd: 685 / 642,
                      nc: 1370 / 107,
                      sp: 1 / 65536,
                      px: 1.00375,
                    },
                    Ot = { ex: !0, em: !0, mu: !0 },
                    Pt = function (t) {
                      return (
                        "string" != typeof t && (t = t.unit),
                        t in Rt || t in Ot || "ex" === t
                      );
                    },
                    Ht = function (t, e) {
                      var n;
                      if (t.unit in Rt)
                        n =
                          Rt[t.unit] / e.fontMetrics().ptPerEm / e.sizeMultiplier;
                      else if ("mu" === t.unit) n = e.fontMetrics().cssEmPerMu;
                      else {
                        var r;
                        if (
                          ((r = e.style.isTight()
                            ? e.havingStyle(e.style.text())
                            : e),
                          "ex" === t.unit)
                        )
                          n = r.fontMetrics().xHeight;
                        else {
                          if ("em" !== t.unit)
                            throw new o("Invalid unit: '" + t.unit + "'");
                          n = r.fontMetrics().quad;
                        }
                        r !== e && (n *= r.sizeMultiplier / e.sizeMultiplier);
                      }
                      return Math.min(t.number * n, e.maxSize);
                    },
                    Dt = function (t, e, n) {
                      return (
                        Y[n][t] && Y[n][t].replace && (t = Y[n][t].replace),
                        { value: t, metrics: V(t, e, n) }
                      );
                    },
                    Ft = function (t, e, n, r, i) {
                      var a,
                        o = Dt(t, e, n),
                        s = o.metrics;
                      if (((t = o.value), s)) {
                        var l = s.italic;
                        ("text" === n || (r && "mathit" === r.font)) && (l = 0),
                          (a = new I(
                            t,
                            s.height,
                            s.depth,
                            l,
                            s.skew,
                            s.width,
                            i,
                          ));
                      } else
                        "undefined" != typeof console &&
                          console.warn(
                            "No character metrics for '" +
                              t +
                              "' in style '" +
                              e +
                              "' and mode '" +
                              n +
                              "'",
                          ),
                          (a = new I(t, 0, 0, 0, 0, 0, i));
                      if (r) {
                        (a.maxFontSize = r.sizeMultiplier),
                          r.style.isTight() && a.classes.push("mtight");
                        var c = r.getColor();
                        c && (a.style.color = c);
                      }
                      return a;
                    },
                    jt = function (t, e) {
                      if (
                        T(t.classes) !== T(e.classes) ||
                        t.skew !== e.skew ||
                        t.maxFontSize !== e.maxFontSize
                      )
                        return !1;
                      for (var n in t.style)
                        if (
                          t.style.hasOwnProperty(n) &&
                          t.style[n] !== e.style[n]
                        )
                          return !1;
                      for (var r in e.style)
                        if (
                          e.style.hasOwnProperty(r) &&
                          t.style[r] !== e.style[r]
                        )
                          return !1;
                      return !0;
                    },
                    Vt = function (t) {
                      for (
                        var e = 0, n = 0, r = 0, i = 0;
                        i < t.children.length;
                        i++
                      ) {
                        var a = t.children[i];
                        a.height > e && (e = a.height),
                          a.depth > n && (n = a.depth),
                          a.maxFontSize > r && (r = a.maxFontSize);
                      }
                      (t.height = e), (t.depth = n), (t.maxFontSize = r);
                    },
                    Ut = function (t, e, n, r) {
                      var i = new q(t, e, n, r);
                      return Vt(i), i;
                    },
                    Gt = function (t, e, n, r) {
                      return new q(t, e, n, r);
                    },
                    Wt = function (t) {
                      var e = new A(t);
                      return Vt(e), e;
                    },
                    Xt = function (t, e, n) {
                      var r = "";
                      switch (t) {
                        case "amsrm":
                          r = "AMS";
                          break;
                        case "textrm":
                          r = "Main";
                          break;
                        case "textsf":
                          r = "SansSerif";
                          break;
                        case "texttt":
                          r = "Typewriter";
                          break;
                        default:
                          r = t;
                      }
                      return (
                        r +
                        "-" +
                        ("textbf" === e && "textit" === n
                          ? "BoldItalic"
                          : "textbf" === e
                            ? "Bold"
                            : "textit" === e
                              ? "Italic"
                              : "Regular")
                      );
                    },
                    Yt = {
                      mathbf: { variant: "bold", fontName: "Main-Bold" },
                      mathrm: { variant: "normal", fontName: "Main-Regular" },
                      textit: { variant: "italic", fontName: "Main-Italic" },
                      mathit: { variant: "italic", fontName: "Main-Italic" },
                      mathnormal: { variant: "italic", fontName: "Math-Italic" },
                      mathbb: {
                        variant: "double-struck",
                        fontName: "AMS-Regular",
                      },
                      mathcal: {
                        variant: "script",
                        fontName: "Caligraphic-Regular",
                      },
                      mathfrak: {
                        variant: "fraktur",
                        fontName: "Fraktur-Regular",
                      },
                      mathscr: { variant: "script", fontName: "Script-Regular" },
                      mathsf: {
                        variant: "sans-serif",
                        fontName: "SansSerif-Regular",
                      },
                      mathtt: {
                        variant: "monospace",
                        fontName: "Typewriter-Regular",
                      },
                    },
                    Zt = {
                      vec: ["vec", 0.471, 0.714],
                      oiintSize1: ["oiintSize1", 0.957, 0.499],
                      oiintSize2: ["oiintSize2", 1.472, 0.659],
                      oiiintSize1: ["oiiintSize1", 1.304, 0.499],
                      oiiintSize2: ["oiiintSize2", 1.98, 0.659],
                      leftParenInner: ["leftParenInner", 0.875, 0.3],
                      rightParenInner: ["rightParenInner", 0.875, 0.3],
                    },
                    Kt = {
                      fontMap: Yt,
                      makeSymbol: Ft,
                      mathsym: function (t, e, n, r) {
                        return (
                          void 0 === r && (r = []),
                          "boldsymbol" === n.font && Dt(t, "Main-Bold", e).metrics
                            ? Ft(t, "Main-Bold", e, n, r.concat(["mathbf"]))
                            : "\\" === t || "main" === Y[e][t].font
                              ? Ft(t, "Main-Regular", e, n, r)
                              : Ft(t, "AMS-Regular", e, n, r.concat(["amsrm"]))
                        );
                      },
                      makeSpan: Ut,
                      makeSvgSpan: Gt,
                      makeLineSpan: function (t, e, n) {
                        var r = Ut([t], [], e);
                        return (
                          (r.height = Math.max(
                            n || e.fontMetrics().defaultRuleThickness,
                            e.minRuleThickness,
                          )),
                          (r.style.borderBottomWidth = r.height + "em"),
                          (r.maxFontSize = 1),
                          r
                        );
                      },
                      makeAnchor: function (t, e, n, r) {
                        var i = new E(t, e, n, r);
                        return Vt(i), i;
                      },
                      makeFragment: Wt,
                      wrapFragment: function (t, e) {
                        return t instanceof A ? Ut([], [t], e) : t;
                      },
                      makeVList: function (t, e) {
                        for (
                          var n = (function (t) {
                              if ("individualShift" === t.positionType) {
                                for (
                                  var e = t.children,
                                    n = [e[0]],
                                    r = -e[0].shift - e[0].elem.depth,
                                    i = r,
                                    a = 1;
                                  a < e.length;
                                  a++
                                ) {
                                  var o = -e[a].shift - i - e[a].elem.depth,
                                    s =
                                      o -
                                      (e[a - 1].elem.height +
                                        e[a - 1].elem.depth);
                                  (i += o),
                                    n.push({ type: "kern", size: s }),
                                    n.push(e[a]);
                                }
                                return { children: n, depth: r };
                              }
                              var l;
                              if ("top" === t.positionType) {
                                for (
                                  var c = t.positionData, h = 0;
                                  h < t.children.length;
                                  h++
                                ) {
                                  var u = t.children[h];
                                  c -=
                                    "kern" === u.type
                                      ? u.size
                                      : u.elem.height + u.elem.depth;
                                }
                                l = c;
                              } else if ("bottom" === t.positionType)
                                l = -t.positionData;
                              else {
                                var d = t.children[0];
                                if ("elem" !== d.type)
                                  throw new Error(
                                    'First child must have type "elem".',
                                  );
                                if ("shift" === t.positionType)
                                  l = -d.elem.depth - t.positionData;
                                else {
                                  if ("firstBaseline" !== t.positionType)
                                    throw new Error(
                                      "Invalid positionType " +
                                        t.positionType +
                                        ".",
                                    );
                                  l = -d.elem.depth;
                                }
                              }
                              return { children: t.children, depth: l };
                            })(t),
                            r = n.children,
                            i = n.depth,
                            a = 0,
                            o = 0;
                          o < r.length;
                          o++
                        ) {
                          var s = r[o];
                          if ("elem" === s.type) {
                            var l = s.elem;
                            a = Math.max(a, l.maxFontSize, l.height);
                          }
                        }
                        a += 2;
                        var c = Ut(["pstrut"], []);
                        c.style.height = a + "em";
                        for (
                          var h = [], u = i, d = i, m = i, p = 0;
                          p < r.length;
                          p++
                        ) {
                          var f = r[p];
                          if ("kern" === f.type) m += f.size;
                          else {
                            var g = f.elem,
                              y = f.wrapperClasses || [],
                              x = f.wrapperStyle || {},
                              v = Ut(y, [c, g], void 0, x);
                            (v.style.top = -a - m - g.depth + "em"),
                              f.marginLeft && (v.style.marginLeft = f.marginLeft),
                              f.marginRight &&
                                (v.style.marginRight = f.marginRight),
                              h.push(v),
                              (m += g.height + g.depth);
                          }
                          (u = Math.min(u, m)), (d = Math.max(d, m));
                        }
                        var b,
                          w = Ut(["vlist"], h);
                        if (((w.style.height = d + "em"), u < 0)) {
                          var k = Ut([], []),
                            $ = Ut(["vlist"], [k]);
                          $.style.height = -u + "em";
                          var M = Ut(["vlist-s"], [new I("​")]);
                          b = [Ut(["vlist-r"], [w, M]), Ut(["vlist-r"], [$])];
                        } else b = [Ut(["vlist-r"], [w])];
                        var S = Ut(["vlist-t"], b);
                        return (
                          2 === b.length && S.classes.push("vlist-t2"),
                          (S.height = d),
                          (S.depth = -u),
                          S
                        );
                      },
                      makeOrd: function (t, e, n) {
                        var r = t.mode,
                          i = t.text,
                          a = ["mord"],
                          s = "math" === r || ("text" === r && e.font),
                          l = s ? e.font : e.fontFamily;
                        if (55349 === i.charCodeAt(0)) {
                          var c = (function (t, e) {
                              var n =
                                  1024 * (t.charCodeAt(0) - 55296) +
                                  (t.charCodeAt(1) - 56320) +
                                  65536,
                                r = "math" === e ? 0 : 1;
                              if (119808 <= n && n < 120484) {
                                var i = Math.floor((n - 119808) / 26);
                                return [Bt[i][2], Bt[i][r]];
                              }
                              if (120782 <= n && n <= 120831) {
                                var a = Math.floor((n - 120782) / 10);
                                return [Ct[a][2], Ct[a][r]];
                              }
                              if (120485 === n || 120486 === n)
                                return [Bt[0][2], Bt[0][r]];
                              if (120486 < n && n < 120782) return ["", ""];
                              throw new o("Unsupported character: " + t);
                            })(i, r),
                            h = c[0],
                            u = c[1];
                          return Ft(i, h, r, e, a.concat(u));
                        }
                        if (l) {
                          var d, m;
                          if ("boldsymbol" === l) {
                            var p = (function (t, e, n, r, i) {
                              return "textord" !== i &&
                                Dt(t, "Math-BoldItalic", e).metrics
                                ? {
                                    fontName: "Math-BoldItalic",
                                    fontClass: "boldsymbol",
                                  }
                                : { fontName: "Main-Bold", fontClass: "mathbf" };
                            })(i, r, 0, 0, n);
                            (d = p.fontName), (m = [p.fontClass]);
                          } else
                            s
                              ? ((d = Yt[l].fontName), (m = [l]))
                              : ((d = Xt(l, e.fontWeight, e.fontShape)),
                                (m = [l, e.fontWeight, e.fontShape]));
                          if (Dt(i, d, r).metrics)
                            return Ft(i, d, r, e, a.concat(m));
                          if (
                            dt.hasOwnProperty(i) &&
                            "Typewriter" === d.substr(0, 10)
                          ) {
                            for (var f = [], g = 0; g < i.length; g++)
                              f.push(Ft(i[g], d, r, e, a.concat(m)));
                            return Wt(f);
                          }
                        }
                        if ("mathord" === n)
                          return Ft(
                            i,
                            "Math-Italic",
                            r,
                            e,
                            a.concat(["mathnormal"]),
                          );
                        if ("textord" === n) {
                          var y = Y[r][i] && Y[r][i].font;
                          if ("ams" === y) {
                            var x = Xt("amsrm", e.fontWeight, e.fontShape);
                            return Ft(
                              i,
                              x,
                              r,
                              e,
                              a.concat("amsrm", e.fontWeight, e.fontShape),
                            );
                          }
                          if ("main" !== y && y) {
                            var v = Xt(y, e.fontWeight, e.fontShape);
                            return Ft(
                              i,
                              v,
                              r,
                              e,
                              a.concat(v, e.fontWeight, e.fontShape),
                            );
                          }
                          var b = Xt("textrm", e.fontWeight, e.fontShape);
                          return Ft(
                            i,
                            b,
                            r,
                            e,
                            a.concat(e.fontWeight, e.fontShape),
                          );
                        }
                        throw new Error("unexpected type: " + n + " in makeOrd");
                      },
                      makeGlue: function (t, e) {
                        var n = Ut(["mspace"], [], e),
                          r = Ht(t, e);
                        return (n.style.marginRight = r + "em"), n;
                      },
                      staticSvg: function (t, e) {
                        var n = Zt[t],
                          r = n[0],
                          i = n[1],
                          a = n[2],
                          o = new O(r),
                          s = new R([o], {
                            width: i + "em",
                            height: a + "em",
                            style: "width:" + i + "em",
                            viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
                            preserveAspectRatio: "xMinYMin",
                          }),
                          l = Gt(["overlay"], [s], e);
                        return (
                          (l.height = a),
                          (l.style.height = a + "em"),
                          (l.style.width = i + "em"),
                          l
                        );
                      },
                      svgData: Zt,
                      tryCombineChars: function (t) {
                        for (var e = 0; e < t.length - 1; e++) {
                          var n = t[e],
                            r = t[e + 1];
                          n instanceof I &&
                            r instanceof I &&
                            jt(n, r) &&
                            ((n.text += r.text),
                            (n.height = Math.max(n.height, r.height)),
                            (n.depth = Math.max(n.depth, r.depth)),
                            (n.italic = r.italic),
                            t.splice(e + 1, 1),
                            e--);
                        }
                        return t;
                      },
                    },
                    Jt = { number: 3, unit: "mu" },
                    Qt = { number: 4, unit: "mu" },
                    te = { number: 5, unit: "mu" },
                    ee = {
                      mord: { mop: Jt, mbin: Qt, mrel: te, minner: Jt },
                      mop: { mord: Jt, mop: Jt, mrel: te, minner: Jt },
                      mbin: { mord: Qt, mop: Qt, mopen: Qt, minner: Qt },
                      mrel: { mord: te, mop: te, mopen: te, minner: te },
                      mopen: {},
                      mclose: { mop: Jt, mbin: Qt, mrel: te, minner: Jt },
                      mpunct: {
                        mord: Jt,
                        mop: Jt,
                        mrel: te,
                        mopen: Jt,
                        mclose: Jt,
                        mpunct: Jt,
                        minner: Jt,
                      },
                      minner: {
                        mord: Jt,
                        mop: Jt,
                        mbin: Qt,
                        mrel: te,
                        mopen: Jt,
                        mpunct: Jt,
                        minner: Jt,
                      },
                    },
                    ne = {
                      mord: { mop: Jt },
                      mop: { mord: Jt, mop: Jt },
                      mbin: {},
                      mrel: {},
                      mopen: {},
                      mclose: { mop: Jt },
                      mpunct: {},
                      minner: { mop: Jt },
                    },
                    re = {},
                    ie = {},
                    ae = {};
                  function oe(t) {
                    for (
                      var e = t.type,
                        n = t.names,
                        r = t.props,
                        i = t.handler,
                        a = t.htmlBuilder,
                        o = t.mathmlBuilder,
                        s = {
                          type: e,
                          numArgs: r.numArgs,
                          argTypes: r.argTypes,
                          greediness: void 0 === r.greediness ? 1 : r.greediness,
                          allowedInText: !!r.allowedInText,
                          allowedInMath:
                            void 0 === r.allowedInMath || r.allowedInMath,
                          numOptionalArgs: r.numOptionalArgs || 0,
                          infix: !!r.infix,
                          handler: i,
                        },
                        l = 0;
                      l < n.length;
                      ++l
                    )
                      re[n[l]] = s;
                    e && (a && (ie[e] = a), o && (ae[e] = o));
                  }
                  function se(t) {
                    oe({
                      type: t.type,
                      names: [],
                      props: { numArgs: 0 },
                      handler: function () {
                        throw new Error("Should never be called.");
                      },
                      htmlBuilder: t.htmlBuilder,
                      mathmlBuilder: t.mathmlBuilder,
                    });
                  }
                  var le = function (t) {
                      return "ordgroup" === t.type ? t.body : [t];
                    },
                    ce = Kt.makeSpan,
                    he = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
                    ue = ["rightmost", "mrel", "mclose", "mpunct"],
                    de = {
                      display: w.DISPLAY,
                      text: w.TEXT,
                      script: w.SCRIPT,
                      scriptscript: w.SCRIPTSCRIPT,
                    },
                    me = {
                      mord: "mord",
                      mop: "mop",
                      mbin: "mbin",
                      mrel: "mrel",
                      mopen: "mopen",
                      mclose: "mclose",
                      mpunct: "mpunct",
                      minner: "minner",
                    },
                    pe = function (t, e, n, r) {
                      void 0 === r && (r = [null, null]);
                      for (var i = [], a = 0; a < t.length; a++) {
                        var o = be(t[a], e);
                        if (o instanceof A) {
                          var s = o.children;
                          i.push.apply(i, s);
                        } else i.push(o);
                      }
                      if (!n) return i;
                      var l = e;
                      if (1 === t.length) {
                        var c = t[0];
                        "sizing" === c.type
                          ? (l = e.havingSize(c.size))
                          : "styling" === c.type &&
                            (l = e.havingStyle(de[c.style]));
                      }
                      var h = ce([r[0] || "leftmost"], [], e),
                        d = ce([r[1] || "rightmost"], [], e),
                        m = "root" === n;
                      return (
                        fe(
                          i,
                          function (t, e) {
                            var n = e.classes[0],
                              r = t.classes[0];
                            "mbin" === n && u.contains(ue, r)
                              ? (e.classes[0] = "mord")
                              : "mbin" === r &&
                                u.contains(he, n) &&
                                (t.classes[0] = "mord");
                          },
                          { node: h },
                          d,
                          m,
                        ),
                        fe(
                          i,
                          function (t, e) {
                            var n = xe(e),
                              r = xe(t),
                              i =
                                n && r
                                  ? t.hasClass("mtight")
                                    ? ne[n][r]
                                    : ee[n][r]
                                  : null;
                            if (i) return Kt.makeGlue(i, l);
                          },
                          { node: h },
                          d,
                          m,
                        ),
                        i
                      );
                    },
                    fe = function t(e, n, r, i, a) {
                      i && e.push(i);
                      for (var o = 0; o < e.length; o++) {
                        var s = e[o],
                          l = ge(s);
                        if (l) t(l.children, n, r, null, a);
                        else {
                          var c = !s.hasClass("mspace");
                          if (c) {
                            var h = n(s, r.node);
                            h &&
                              (r.insertAfter
                                ? r.insertAfter(h)
                                : (e.unshift(h), o++));
                          }
                          c
                            ? (r.node = s)
                            : a &&
                              s.hasClass("newline") &&
                              (r.node = ce(["leftmost"])),
                            (r.insertAfter = (function (t) {
                              return function (n) {
                                e.splice(t + 1, 0, n), o++;
                              };
                            })(o));
                        }
                      }
                      i && e.pop();
                    },
                    ge = function (t) {
                      return t instanceof A ||
                        t instanceof E ||
                        (t instanceof q && t.hasClass("enclosing"))
                        ? t
                        : null;
                    },
                    ye = function t(e, n) {
                      var r = ge(e);
                      if (r) {
                        var i = r.children;
                        if (i.length) {
                          if ("right" === n) return t(i[i.length - 1], "right");
                          if ("left" === n) return t(i[0], "left");
                        }
                      }
                      return e;
                    },
                    xe = function (t, e) {
                      return t
                        ? (e && (t = ye(t, e)), me[t.classes[0]] || null)
                        : null;
                    },
                    ve = function (t, e) {
                      var n = ["nulldelimiter"].concat(t.baseSizingClasses());
                      return ce(e.concat(n));
                    },
                    be = function (t, e, n) {
                      if (!t) return ce();
                      if (ie[t.type]) {
                        var r = ie[t.type](t, e);
                        if (n && e.size !== n.size) {
                          r = ce(e.sizingClasses(n), [r], e);
                          var i = e.sizeMultiplier / n.sizeMultiplier;
                          (r.height *= i), (r.depth *= i);
                        }
                        return r;
                      }
                      throw new o("Got group of unknown type: '" + t.type + "'");
                    };
                  function we(t, e) {
                    var n = ce(["base"], t, e),
                      r = ce(["strut"]);
                    return (
                      (r.style.height = n.height + n.depth + "em"),
                      (r.style.verticalAlign = -n.depth + "em"),
                      n.children.unshift(r),
                      n
                    );
                  }
                  function ke(t, e) {
                    var n = null;
                    1 === t.length &&
                      "tag" === t[0].type &&
                      ((n = t[0].tag), (t = t[0].body));
                    for (
                      var r, i = pe(t, e, "root"), a = [], o = [], s = 0;
                      s < i.length;
                      s++
                    )
                      if (
                        (o.push(i[s]),
                        i[s].hasClass("mbin") ||
                          i[s].hasClass("mrel") ||
                          i[s].hasClass("allowbreak"))
                      ) {
                        for (
                          var l = !1;
                          s < i.length - 1 &&
                          i[s + 1].hasClass("mspace") &&
                          !i[s + 1].hasClass("newline");
  
                        )
                          s++, o.push(i[s]), i[s].hasClass("nobreak") && (l = !0);
                        l || (a.push(we(o, e)), (o = []));
                      } else
                        i[s].hasClass("newline") &&
                          (o.pop(),
                          o.length > 0 && (a.push(we(o, e)), (o = [])),
                          a.push(i[s]));
                    o.length > 0 && a.push(we(o, e)),
                      n &&
                        (((r = we(pe(n, e, !0))).classes = ["tag"]), a.push(r));
                    var c = ce(["katex-html"], a);
                    if ((c.setAttribute("aria-hidden", "true"), r)) {
                      var h = r.children[0];
                      (h.style.height = c.height + c.depth + "em"),
                        (h.style.verticalAlign = -c.depth + "em");
                    }
                    return c;
                  }
                  function $e(t) {
                    return new A(t);
                  }
                  var Me = (function () {
                      function t(t, e) {
                        (this.type = void 0),
                          (this.attributes = void 0),
                          (this.children = void 0),
                          (this.type = t),
                          (this.attributes = {}),
                          (this.children = e || []);
                      }
                      var e = t.prototype;
                      return (
                        (e.setAttribute = function (t, e) {
                          this.attributes[t] = e;
                        }),
                        (e.getAttribute = function (t) {
                          return this.attributes[t];
                        }),
                        (e.toNode = function () {
                          var t = document.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            this.type,
                          );
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e,
                            ) && t.setAttribute(e, this.attributes[e]);
                          for (var n = 0; n < this.children.length; n++)
                            t.appendChild(this.children[n].toNode());
                          return t;
                        }),
                        (e.toMarkup = function () {
                          var t = "<" + this.type;
                          for (var e in this.attributes)
                            Object.prototype.hasOwnProperty.call(
                              this.attributes,
                              e,
                            ) &&
                              ((t += " " + e + '="'),
                              (t += u.escape(this.attributes[e])),
                              (t += '"'));
                          t += ">";
                          for (var n = 0; n < this.children.length; n++)
                            t += this.children[n].toMarkup();
                          return (t += "</" + this.type + ">");
                        }),
                        (e.toText = function () {
                          return this.children
                            .map(function (t) {
                              return t.toText();
                            })
                            .join("");
                        }),
                        t
                      );
                    })(),
                    Se = (function () {
                      function t(t) {
                        (this.text = void 0), (this.text = t);
                      }
                      var e = t.prototype;
                      return (
                        (e.toNode = function () {
                          return document.createTextNode(this.text);
                        }),
                        (e.toMarkup = function () {
                          return u.escape(this.toText());
                        }),
                        (e.toText = function () {
                          return this.text;
                        }),
                        t
                      );
                    })(),
                    ze = {
                      MathNode: Me,
                      TextNode: Se,
                      SpaceNode: (function () {
                        function t(t) {
                          (this.width = void 0),
                            (this.character = void 0),
                            (this.width = t),
                            (this.character =
                              t >= 0.05555 && t <= 0.05556
                                ? " "
                                : t >= 0.1666 && t <= 0.1667
                                  ? " "
                                  : t >= 0.2222 && t <= 0.2223
                                    ? " "
                                    : t >= 0.2777 && t <= 0.2778
                                      ? "  "
                                      : t >= -0.05556 && t <= -0.05555
                                        ? " ⁣"
                                        : t >= -0.1667 && t <= -0.1666
                                          ? " ⁣"
                                          : t >= -0.2223 && t <= -0.2222
                                            ? " ⁣"
                                            : t >= -0.2778 && t <= -0.2777
                                              ? " ⁣"
                                              : null);
                        }
                        var e = t.prototype;
                        return (
                          (e.toNode = function () {
                            if (this.character)
                              return document.createTextNode(this.character);
                            var t = document.createElementNS(
                              "http://www.w3.org/1998/Math/MathML",
                              "mspace",
                            );
                            return t.setAttribute("width", this.width + "em"), t;
                          }),
                          (e.toMarkup = function () {
                            return this.character
                              ? "<mtext>" + this.character + "</mtext>"
                              : '<mspace width="' + this.width + 'em"/>';
                          }),
                          (e.toText = function () {
                            return this.character ? this.character : " ";
                          }),
                          t
                        );
                      })(),
                      newDocumentFragment: $e,
                    },
                    Ae = function (t, e, n) {
                      return (
                        !Y[e][t] ||
                          !Y[e][t].replace ||
                          55349 === t.charCodeAt(0) ||
                          (dt.hasOwnProperty(t) &&
                            n &&
                            ((n.fontFamily &&
                              "tt" === n.fontFamily.substr(4, 2)) ||
                              (n.font && "tt" === n.font.substr(4, 2)))) ||
                          (t = Y[e][t].replace),
                        new ze.TextNode(t)
                      );
                    },
                    Te = function (t) {
                      return 1 === t.length ? t[0] : new ze.MathNode("mrow", t);
                    },
                    Ne = function (t, e) {
                      if ("texttt" === e.fontFamily) return "monospace";
                      if ("textsf" === e.fontFamily)
                        return "textit" === e.fontShape &&
                          "textbf" === e.fontWeight
                          ? "sans-serif-bold-italic"
                          : "textit" === e.fontShape
                            ? "sans-serif-italic"
                            : "textbf" === e.fontWeight
                              ? "bold-sans-serif"
                              : "sans-serif";
                      if ("textit" === e.fontShape && "textbf" === e.fontWeight)
                        return "bold-italic";
                      if ("textit" === e.fontShape) return "italic";
                      if ("textbf" === e.fontWeight) return "bold";
                      var n = e.font;
                      if (!n || "mathnormal" === n) return null;
                      var r = t.mode;
                      if ("mathit" === n) return "italic";
                      if ("boldsymbol" === n)
                        return "textord" === t.type ? "bold" : "bold-italic";
                      if ("mathbf" === n) return "bold";
                      if ("mathbb" === n) return "double-struck";
                      if ("mathfrak" === n) return "fraktur";
                      if ("mathscr" === n || "mathcal" === n) return "script";
                      if ("mathsf" === n) return "sans-serif";
                      if ("mathtt" === n) return "monospace";
                      var i = t.text;
                      return u.contains(["\\imath", "\\jmath"], i)
                        ? null
                        : (Y[r][i] && Y[r][i].replace && (i = Y[r][i].replace),
                          V(i, Kt.fontMap[n].fontName, r)
                            ? Kt.fontMap[n].variant
                            : null);
                    },
                    Be = function (t, e, n) {
                      if (1 === t.length) {
                        var r = qe(t[0], e);
                        return (
                          n &&
                            r instanceof Me &&
                            "mo" === r.type &&
                            (r.setAttribute("lspace", "0em"),
                            r.setAttribute("rspace", "0em")),
                          [r]
                        );
                      }
                      for (var i, a = [], o = 0; o < t.length; o++) {
                        var s = qe(t[o], e);
                        if (s instanceof Me && i instanceof Me) {
                          if (
                            "mtext" === s.type &&
                            "mtext" === i.type &&
                            s.getAttribute("mathvariant") ===
                              i.getAttribute("mathvariant")
                          ) {
                            var l;
                            (l = i.children).push.apply(l, s.children);
                            continue;
                          }
                          if ("mn" === s.type && "mn" === i.type) {
                            var c;
                            (c = i.children).push.apply(c, s.children);
                            continue;
                          }
                          if (
                            "mi" === s.type &&
                            1 === s.children.length &&
                            "mn" === i.type
                          ) {
                            var h = s.children[0];
                            if (h instanceof Se && "." === h.text) {
                              var u;
                              (u = i.children).push.apply(u, s.children);
                              continue;
                            }
                          } else if ("mi" === i.type && 1 === i.children.length) {
                            var d = i.children[0];
                            if (
                              d instanceof Se &&
                              "̸" === d.text &&
                              ("mo" === s.type ||
                                "mi" === s.type ||
                                "mn" === s.type)
                            ) {
                              var m = s.children[0];
                              m instanceof Se &&
                                m.text.length > 0 &&
                                ((m.text =
                                  m.text.slice(0, 1) + "̸" + m.text.slice(1)),
                                a.pop());
                            }
                          }
                        }
                        a.push(s), (i = s);
                      }
                      return a;
                    },
                    Ce = function (t, e, n) {
                      return Te(Be(t, e, n));
                    },
                    qe = function (t, e) {
                      if (!t) return new ze.MathNode("mrow");
                      if (ae[t.type]) return ae[t.type](t, e);
                      throw new o("Got group of unknown type: '" + t.type + "'");
                    };
                  function Ee(t, e, n, r, i) {
                    var a,
                      o = Be(t, n);
                    a =
                      1 === o.length &&
                      o[0] instanceof Me &&
                      u.contains(["mrow", "mtable"], o[0].type)
                        ? o[0]
                        : new ze.MathNode("mrow", o);
                    var s = new ze.MathNode("annotation", [new ze.TextNode(e)]);
                    s.setAttribute("encoding", "application/x-tex");
                    var l = new ze.MathNode("semantics", [a, s]),
                      c = new ze.MathNode("math", [l]);
                    c.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"),
                      r && c.setAttribute("display", "block");
                    var h = i ? "katex" : "katex-mathml";
                    return Kt.makeSpan([h], [c]);
                  }
                  var Le = function (t) {
                      return new It({
                        style: t.displayMode ? w.DISPLAY : w.TEXT,
                        maxSize: t.maxSize,
                        minRuleThickness: t.minRuleThickness,
                      });
                    },
                    _e = function (t, e) {
                      if (e.displayMode) {
                        var n = ["katex-display"];
                        e.leqno && n.push("leqno"),
                          e.fleqn && n.push("fleqn"),
                          (t = Kt.makeSpan(n, [t]));
                      }
                      return t;
                    },
                    Ie = {
                      widehat: "^",
                      widecheck: "ˇ",
                      widetilde: "~",
                      utilde: "~",
                      overleftarrow: "←",
                      underleftarrow: "←",
                      xleftarrow: "←",
                      overrightarrow: "→",
                      underrightarrow: "→",
                      xrightarrow: "→",
                      underbrace: "⏟",
                      overbrace: "⏞",
                      overgroup: "⏠",
                      undergroup: "⏡",
                      overleftrightarrow: "↔",
                      underleftrightarrow: "↔",
                      xleftrightarrow: "↔",
                      Overrightarrow: "⇒",
                      xRightarrow: "⇒",
                      overleftharpoon: "↼",
                      xleftharpoonup: "↼",
                      overrightharpoon: "⇀",
                      xrightharpoonup: "⇀",
                      xLeftarrow: "⇐",
                      xLeftrightarrow: "⇔",
                      xhookleftarrow: "↩",
                      xhookrightarrow: "↪",
                      xmapsto: "↦",
                      xrightharpoondown: "⇁",
                      xleftharpoondown: "↽",
                      xrightleftharpoons: "⇌",
                      xleftrightharpoons: "⇋",
                      xtwoheadleftarrow: "↞",
                      xtwoheadrightarrow: "↠",
                      xlongequal: "=",
                      xtofrom: "⇄",
                      xrightleftarrows: "⇄",
                      xrightequilibrium: "⇌",
                      xleftequilibrium: "⇋",
                    },
                    Re = {
                      overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
                      overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
                      underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
                      underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
                      xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
                      xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
                      Overrightarrow: [
                        ["doublerightarrow"],
                        0.888,
                        560,
                        "xMaxYMin",
                      ],
                      xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
                      xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
                      overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
                      xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
                      xleftharpoondown: [
                        ["leftharpoondown"],
                        0.888,
                        522,
                        "xMinYMin",
                      ],
                      overrightharpoon: [
                        ["rightharpoon"],
                        0.888,
                        522,
                        "xMaxYMin",
                      ],
                      xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
                      xrightharpoondown: [
                        ["rightharpoondown"],
                        0.888,
                        522,
                        "xMaxYMin",
                      ],
                      xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
                      xtwoheadleftarrow: [
                        ["twoheadleftarrow"],
                        0.888,
                        334,
                        "xMinYMin",
                      ],
                      xtwoheadrightarrow: [
                        ["twoheadrightarrow"],
                        0.888,
                        334,
                        "xMaxYMin",
                      ],
                      overleftrightarrow: [
                        ["leftarrow", "rightarrow"],
                        0.888,
                        522,
                      ],
                      overbrace: [
                        ["leftbrace", "midbrace", "rightbrace"],
                        1.6,
                        548,
                      ],
                      underbrace: [
                        ["leftbraceunder", "midbraceunder", "rightbraceunder"],
                        1.6,
                        548,
                      ],
                      underleftrightarrow: [
                        ["leftarrow", "rightarrow"],
                        0.888,
                        522,
                      ],
                      xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
                      xLeftrightarrow: [
                        ["doubleleftarrow", "doublerightarrow"],
                        1.75,
                        560,
                      ],
                      xrightleftharpoons: [
                        ["leftharpoondownplus", "rightharpoonplus"],
                        1.75,
                        716,
                      ],
                      xleftrightharpoons: [
                        ["leftharpoonplus", "rightharpoondownplus"],
                        1.75,
                        716,
                      ],
                      xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
                      xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
                      overlinesegment: [
                        ["leftlinesegment", "rightlinesegment"],
                        0.888,
                        522,
                      ],
                      underlinesegment: [
                        ["leftlinesegment", "rightlinesegment"],
                        0.888,
                        522,
                      ],
                      overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
                      undergroup: [
                        ["leftgroupunder", "rightgroupunder"],
                        0.888,
                        342,
                      ],
                      xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
                      xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
                      xrightleftarrows: [
                        ["baraboveleftarrow", "rightarrowabovebar"],
                        1.75,
                        901,
                      ],
                      xrightequilibrium: [
                        ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"],
                        1.75,
                        716,
                      ],
                      xleftequilibrium: [
                        ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"],
                        1.75,
                        716,
                      ],
                    },
                    Oe = function (t, e, n, r) {
                      var i,
                        a = t.height + t.depth + 2 * n;
                      if (/fbox|color/.test(e)) {
                        if (
                          ((i = Kt.makeSpan(["stretchy", e], [], r)),
                          "fbox" === e)
                        ) {
                          var o = r.color && r.getColor();
                          o && (i.style.borderColor = o);
                        }
                      } else {
                        var s = [];
                        /^[bx]cancel$/.test(e) &&
                          s.push(
                            new P({
                              x1: "0",
                              y1: "0",
                              x2: "100%",
                              y2: "100%",
                              "stroke-width": "0.046em",
                            }),
                          ),
                          /^x?cancel$/.test(e) &&
                            s.push(
                              new P({
                                x1: "0",
                                y1: "100%",
                                x2: "100%",
                                y2: "0",
                                "stroke-width": "0.046em",
                              }),
                            );
                        var l = new R(s, { width: "100%", height: a + "em" });
                        i = Kt.makeSvgSpan([], [l], r);
                      }
                      return (i.height = a), (i.style.height = a + "em"), i;
                    },
                    Pe = function (t) {
                      var e = new ze.MathNode("mo", [
                        new ze.TextNode(Ie[t.substr(1)]),
                      ]);
                      return e.setAttribute("stretchy", "true"), e;
                    },
                    He = function (t, e) {
                      var n = (function () {
                          var n = 4e5,
                            r = t.label.substr(1);
                          if (
                            u.contains(
                              ["widehat", "widecheck", "widetilde", "utilde"],
                              r,
                            )
                          ) {
                            var i,
                              a,
                              o,
                              s =
                                "ordgroup" === (p = t.base).type
                                  ? p.body.length
                                  : 1;
                            if (s > 5)
                              "widehat" === r || "widecheck" === r
                                ? ((i = 420),
                                  (n = 2364),
                                  (o = 0.42),
                                  (a = r + "4"))
                                : ((i = 312),
                                  (n = 2340),
                                  (o = 0.34),
                                  (a = "tilde4"));
                            else {
                              var l = [1, 1, 2, 2, 3, 3][s];
                              "widehat" === r || "widecheck" === r
                                ? ((n = [0, 1062, 2364, 2364, 2364][l]),
                                  (i = [0, 239, 300, 360, 420][l]),
                                  (o = [0, 0.24, 0.3, 0.3, 0.36, 0.42][l]),
                                  (a = r + l))
                                : ((n = [0, 600, 1033, 2339, 2340][l]),
                                  (i = [0, 260, 286, 306, 312][l]),
                                  (o = [0, 0.26, 0.286, 0.3, 0.306, 0.34][l]),
                                  (a = "tilde" + l));
                            }
                            var c = new O(a),
                              h = new R([c], {
                                width: "100%",
                                height: o + "em",
                                viewBox: "0 0 " + n + " " + i,
                                preserveAspectRatio: "none",
                              });
                            return {
                              span: Kt.makeSvgSpan([], [h], e),
                              minWidth: 0,
                              height: o,
                            };
                          }
                          var d,
                            m,
                            p,
                            f = [],
                            g = Re[r],
                            y = g[0],
                            x = g[1],
                            v = g[2],
                            b = v / 1e3,
                            w = y.length;
                          if (1 === w) (d = ["hide-tail"]), (m = [g[3]]);
                          else if (2 === w)
                            (d = ["halfarrow-left", "halfarrow-right"]),
                              (m = ["xMinYMin", "xMaxYMin"]);
                          else {
                            if (3 !== w)
                              throw new Error(
                                "Correct katexImagesData or update code here to support\n                    " +
                                  w +
                                  " children.",
                              );
                            (d = ["brace-left", "brace-center", "brace-right"]),
                              (m = ["xMinYMin", "xMidYMin", "xMaxYMin"]);
                          }
                          for (var k = 0; k < w; k++) {
                            var $ = new O(y[k]),
                              M = new R([$], {
                                width: "400em",
                                height: b + "em",
                                viewBox: "0 0 " + n + " " + v,
                                preserveAspectRatio: m[k] + " slice",
                              }),
                              S = Kt.makeSvgSpan([d[k]], [M], e);
                            if (1 === w)
                              return { span: S, minWidth: x, height: b };
                            (S.style.height = b + "em"), f.push(S);
                          }
                          return {
                            span: Kt.makeSpan(["stretchy"], f, e),
                            minWidth: x,
                            height: b,
                          };
                        })(),
                        r = n.span,
                        i = n.minWidth,
                        a = n.height;
                      return (
                        (r.height = a),
                        (r.style.height = a + "em"),
                        i > 0 && (r.style.minWidth = i + "em"),
                        r
                      );
                    };
                  function De(t, e) {
                    if (!t || t.type !== e)
                      throw new Error(
                        "Expected node of type " +
                          e +
                          ", but got " +
                          (t ? "node of type " + t.type : String(t)),
                      );
                    return t;
                  }
                  function Fe(t) {
                    var e = je(t);
                    if (!e)
                      throw new Error(
                        "Expected node of symbol group type, but got " +
                          (t ? "node of type " + t.type : String(t)),
                      );
                    return e;
                  }
                  function je(t) {
                    return t && ("atom" === t.type || W.hasOwnProperty(t.type))
                      ? t
                      : null;
                  }
                  var Ve = function (t, e) {
                      var n, r, i;
                      t && "supsub" === t.type
                        ? ((n = (r = De(t.base, "accent")).base),
                          (t.base = n),
                          (i = (function (t) {
                            if (t instanceof q) return t;
                            throw new Error(
                              "Expected span<HtmlDomNode> but got " +
                                String(t) +
                                ".",
                            );
                          })(be(t, e))),
                          (t.base = r))
                        : (n = (r = De(t, "accent")).base);
                      var a = be(n, e.havingCrampedStyle()),
                        o = 0;
                      if (r.isShifty && u.isCharacterBox(n)) {
                        var s = u.getBaseElem(n);
                        o = H(be(s, e.havingCrampedStyle())).skew;
                      }
                      var l,
                        c = Math.min(a.height, e.fontMetrics().xHeight);
                      if (r.isStretchy)
                        (l = He(r, e)),
                          (l = Kt.makeVList(
                            {
                              positionType: "firstBaseline",
                              children: [
                                { type: "elem", elem: a },
                                {
                                  type: "elem",
                                  elem: l,
                                  wrapperClasses: ["svg-align"],
                                  wrapperStyle:
                                    o > 0
                                      ? {
                                          width: "calc(100% - " + 2 * o + "em)",
                                          marginLeft: 2 * o + "em",
                                        }
                                      : void 0,
                                },
                              ],
                            },
                            e,
                          ));
                      else {
                        var h, d;
                        "\\vec" === r.label
                          ? ((h = Kt.staticSvg("vec", e)),
                            (d = Kt.svgData.vec[1]))
                          : (((h = H(
                              (h = Kt.makeOrd(
                                { mode: r.mode, text: r.label },
                                e,
                                "textord",
                              )),
                            )).italic = 0),
                            (d = h.width)),
                          (l = Kt.makeSpan(["accent-body"], [h]));
                        var m = "\\textcircled" === r.label;
                        m && (l.classes.push("accent-full"), (c = a.height));
                        var p = o;
                        m || (p -= d / 2),
                          (l.style.left = p + "em"),
                          "\\textcircled" === r.label && (l.style.top = ".2em"),
                          (l = Kt.makeVList(
                            {
                              positionType: "firstBaseline",
                              children: [
                                { type: "elem", elem: a },
                                { type: "kern", size: -c },
                                { type: "elem", elem: l },
                              ],
                            },
                            e,
                          ));
                      }
                      var f = Kt.makeSpan(["mord", "accent"], [l], e);
                      return i
                        ? ((i.children[0] = f),
                          (i.height = Math.max(f.height, i.height)),
                          (i.classes[0] = "mord"),
                          i)
                        : f;
                    },
                    Ue = function (t, e) {
                      var n = t.isStretchy
                          ? Pe(t.label)
                          : new ze.MathNode("mo", [Ae(t.label, t.mode)]),
                        r = new ze.MathNode("mover", [qe(t.base, e), n]);
                      return r.setAttribute("accent", "true"), r;
                    },
                    Ge = new RegExp(
                      [
                        "\\acute",
                        "\\grave",
                        "\\ddot",
                        "\\tilde",
                        "\\bar",
                        "\\breve",
                        "\\check",
                        "\\hat",
                        "\\vec",
                        "\\dot",
                        "\\mathring",
                      ]
                        .map(function (t) {
                          return "\\" + t;
                        })
                        .join("|"),
                    );
                  oe({
                    type: "accent",
                    names: [
                      "\\acute",
                      "\\grave",
                      "\\ddot",
                      "\\tilde",
                      "\\bar",
                      "\\breve",
                      "\\check",
                      "\\hat",
                      "\\vec",
                      "\\dot",
                      "\\mathring",
                      "\\widecheck",
                      "\\widehat",
                      "\\widetilde",
                      "\\overrightarrow",
                      "\\overleftarrow",
                      "\\Overrightarrow",
                      "\\overleftrightarrow",
                      "\\overgroup",
                      "\\overlinesegment",
                      "\\overleftharpoon",
                      "\\overrightharpoon",
                    ],
                    props: { numArgs: 1 },
                    handler: function (t, e) {
                      var n = e[0],
                        r = !Ge.test(t.funcName),
                        i =
                          !r ||
                          "\\widehat" === t.funcName ||
                          "\\widetilde" === t.funcName ||
                          "\\widecheck" === t.funcName;
                      return {
                        type: "accent",
                        mode: t.parser.mode,
                        label: t.funcName,
                        isStretchy: r,
                        isShifty: i,
                        base: n,
                      };
                    },
                    htmlBuilder: Ve,
                    mathmlBuilder: Ue,
                  }),
                    oe({
                      type: "accent",
                      names: [
                        "\\'",
                        "\\`",
                        "\\^",
                        "\\~",
                        "\\=",
                        "\\u",
                        "\\.",
                        '\\"',
                        "\\r",
                        "\\H",
                        "\\v",
                        "\\textcircled",
                      ],
                      props: { numArgs: 1, allowedInText: !0, allowedInMath: !1 },
                      handler: function (t, e) {
                        var n = e[0];
                        return {
                          type: "accent",
                          mode: t.parser.mode,
                          label: t.funcName,
                          isStretchy: !1,
                          isShifty: !0,
                          base: n,
                        };
                      },
                      htmlBuilder: Ve,
                      mathmlBuilder: Ue,
                    }),
                    oe({
                      type: "accentUnder",
                      names: [
                        "\\underleftarrow",
                        "\\underrightarrow",
                        "\\underleftrightarrow",
                        "\\undergroup",
                        "\\underlinesegment",
                        "\\utilde",
                      ],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = t.funcName,
                          i = e[0];
                        return {
                          type: "accentUnder",
                          mode: n.mode,
                          label: r,
                          base: i,
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n = be(t.base, e),
                          r = He(t, e),
                          i = "\\utilde" === t.label ? 0.12 : 0,
                          a = Kt.makeVList(
                            {
                              positionType: "top",
                              positionData: n.height,
                              children: [
                                {
                                  type: "elem",
                                  elem: r,
                                  wrapperClasses: ["svg-align"],
                                },
                                { type: "kern", size: i },
                                { type: "elem", elem: n },
                              ],
                            },
                            e,
                          );
                        return Kt.makeSpan(["mord", "accentunder"], [a], e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Pe(t.label),
                          r = new ze.MathNode("munder", [qe(t.base, e), n]);
                        return r.setAttribute("accentunder", "true"), r;
                      },
                    });
                  var We = function (t) {
                    var e = new ze.MathNode("mpadded", t ? [t] : []);
                    return (
                      e.setAttribute("width", "+0.6em"),
                      e.setAttribute("lspace", "0.3em"),
                      e
                    );
                  };
                  oe({
                    type: "xArrow",
                    names: [
                      "\\xleftarrow",
                      "\\xrightarrow",
                      "\\xLeftarrow",
                      "\\xRightarrow",
                      "\\xleftrightarrow",
                      "\\xLeftrightarrow",
                      "\\xhookleftarrow",
                      "\\xhookrightarrow",
                      "\\xmapsto",
                      "\\xrightharpoondown",
                      "\\xrightharpoonup",
                      "\\xleftharpoondown",
                      "\\xleftharpoonup",
                      "\\xrightleftharpoons",
                      "\\xleftrightharpoons",
                      "\\xlongequal",
                      "\\xtwoheadrightarrow",
                      "\\xtwoheadleftarrow",
                      "\\xtofrom",
                      "\\xrightleftarrows",
                      "\\xrightequilibrium",
                      "\\xleftequilibrium",
                    ],
                    props: { numArgs: 1, numOptionalArgs: 1 },
                    handler: function (t, e, n) {
                      var r = t.parser,
                        i = t.funcName;
                      return {
                        type: "xArrow",
                        mode: r.mode,
                        label: i,
                        body: e[0],
                        below: n[0],
                      };
                    },
                    htmlBuilder: function (t, e) {
                      var n,
                        r = e.style,
                        i = e.havingStyle(r.sup()),
                        a = Kt.wrapFragment(be(t.body, i, e), e);
                      a.classes.push("x-arrow-pad"),
                        t.below &&
                          ((i = e.havingStyle(r.sub())),
                          (n = Kt.wrapFragment(
                            be(t.below, i, e),
                            e,
                          )).classes.push("x-arrow-pad"));
                      var o,
                        s = He(t, e),
                        l = -e.fontMetrics().axisHeight + 0.5 * s.height,
                        c = -e.fontMetrics().axisHeight - 0.5 * s.height - 0.111;
                      if (
                        ((a.depth > 0.25 || "\\xleftequilibrium" === t.label) &&
                          (c -= a.depth),
                        n)
                      ) {
                        var h =
                          -e.fontMetrics().axisHeight +
                          n.height +
                          0.5 * s.height +
                          0.111;
                        o = Kt.makeVList(
                          {
                            positionType: "individualShift",
                            children: [
                              { type: "elem", elem: a, shift: c },
                              { type: "elem", elem: s, shift: l },
                              { type: "elem", elem: n, shift: h },
                            ],
                          },
                          e,
                        );
                      } else
                        o = Kt.makeVList(
                          {
                            positionType: "individualShift",
                            children: [
                              { type: "elem", elem: a, shift: c },
                              { type: "elem", elem: s, shift: l },
                            ],
                          },
                          e,
                        );
                      return (
                        o.children[0].children[0].children[1].classes.push(
                          "svg-align",
                        ),
                        Kt.makeSpan(["mrel", "x-arrow"], [o], e)
                      );
                    },
                    mathmlBuilder: function (t, e) {
                      var n,
                        r = Pe(t.label);
                      if (t.body) {
                        var i = We(qe(t.body, e));
                        if (t.below) {
                          var a = We(qe(t.below, e));
                          n = new ze.MathNode("munderover", [r, a, i]);
                        } else n = new ze.MathNode("mover", [r, i]);
                      } else if (t.below) {
                        var o = We(qe(t.below, e));
                        n = new ze.MathNode("munder", [r, o]);
                      } else (n = We()), (n = new ze.MathNode("mover", [r, n]));
                      return n;
                    },
                  }),
                    oe({
                      type: "textord",
                      names: ["\\@char"],
                      props: { numArgs: 1, allowedInText: !0 },
                      handler: function (t, e) {
                        for (
                          var n = t.parser,
                            r = De(e[0], "ordgroup").body,
                            i = "",
                            a = 0;
                          a < r.length;
                          a++
                        )
                          i += De(r[a], "textord").text;
                        var s = parseInt(i);
                        if (isNaN(s))
                          throw new o("\\@char has non-numeric argument " + i);
                        return {
                          type: "textord",
                          mode: n.mode,
                          text: String.fromCharCode(s),
                        };
                      },
                    });
                  var Xe = function (t, e) {
                      var n = pe(t.body, e.withColor(t.color), !1);
                      return Kt.makeFragment(n);
                    },
                    Ye = function (t, e) {
                      var n = Be(t.body, e.withColor(t.color)),
                        r = new ze.MathNode("mstyle", n);
                      return r.setAttribute("mathcolor", t.color), r;
                    };
                  oe({
                    type: "color",
                    names: ["\\textcolor"],
                    props: {
                      numArgs: 2,
                      allowedInText: !0,
                      greediness: 3,
                      argTypes: ["color", "original"],
                    },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = De(e[0], "color-token").color,
                        i = e[1];
                      return {
                        type: "color",
                        mode: n.mode,
                        color: r,
                        body: le(i),
                      };
                    },
                    htmlBuilder: Xe,
                    mathmlBuilder: Ye,
                  }),
                    oe({
                      type: "color",
                      names: ["\\color"],
                      props: {
                        numArgs: 1,
                        allowedInText: !0,
                        greediness: 3,
                        argTypes: ["color"],
                      },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = t.breakOnTokenText,
                          i = De(e[0], "color-token").color;
                        n.gullet.macros.set("\\current@color", i);
                        var a = n.parseExpression(!0, r);
                        return { type: "color", mode: n.mode, color: i, body: a };
                      },
                      htmlBuilder: Xe,
                      mathmlBuilder: Ye,
                    }),
                    oe({
                      type: "cr",
                      names: ["\\cr", "\\newline"],
                      props: {
                        numArgs: 0,
                        numOptionalArgs: 1,
                        argTypes: ["size"],
                        allowedInText: !0,
                      },
                      handler: function (t, e, n) {
                        var r = t.parser,
                          i = t.funcName,
                          a = n[0],
                          o = "\\cr" === i,
                          s = !1;
                        return (
                          o ||
                            (s =
                              !r.settings.displayMode ||
                              !r.settings.useStrictBehavior(
                                "newLineInDisplayMode",
                                "In LaTeX, \\\\ or \\newline does nothing in display mode",
                              )),
                          {
                            type: "cr",
                            mode: r.mode,
                            newLine: s,
                            newRow: o,
                            size: a && De(a, "size").value,
                          }
                        );
                      },
                      htmlBuilder: function (t, e) {
                        if (t.newRow)
                          throw new o(
                            "\\cr valid only within a tabular/array environment",
                          );
                        var n = Kt.makeSpan(["mspace"], [], e);
                        return (
                          t.newLine &&
                            (n.classes.push("newline"),
                            t.size && (n.style.marginTop = Ht(t.size, e) + "em")),
                          n
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mspace");
                        return (
                          t.newLine &&
                            (n.setAttribute("linebreak", "newline"),
                            t.size &&
                              n.setAttribute("height", Ht(t.size, e) + "em")),
                          n
                        );
                      },
                    });
                  var Ze = {
                      "\\global": "\\global",
                      "\\long": "\\\\globallong",
                      "\\\\globallong": "\\\\globallong",
                      "\\def": "\\gdef",
                      "\\gdef": "\\gdef",
                      "\\edef": "\\xdef",
                      "\\xdef": "\\xdef",
                      "\\let": "\\\\globallet",
                      "\\futurelet": "\\\\globalfuture",
                    },
                    Ke = function (t) {
                      var e = t.text;
                      if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
                        throw new o("Expected a control sequence", t);
                      return e;
                    },
                    Je = function (t, e, n, r) {
                      var i = t.gullet.macros.get(n.text);
                      null == i &&
                        ((n.noexpand = !0),
                        (i = {
                          tokens: [n],
                          numArgs: 0,
                          unexpandable: !t.gullet.isExpandable(n.text),
                        })),
                        t.gullet.macros.set(e, i, r);
                    };
                  oe({
                    type: "internal",
                    names: ["\\global", "\\long", "\\\\globallong"],
                    props: { numArgs: 0, allowedInText: !0 },
                    handler: function (t) {
                      var e = t.parser,
                        n = t.funcName;
                      e.consumeSpaces();
                      var r = e.fetch();
                      if (Ze[r.text])
                        return (
                          ("\\global" !== n && "\\\\globallong" !== n) ||
                            (r.text = Ze[r.text]),
                          De(e.parseFunction(), "internal")
                        );
                      throw new o("Invalid token after macro prefix", r);
                    },
                  }),
                    oe({
                      type: "internal",
                      names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
                      props: { numArgs: 0, allowedInText: !0 },
                      handler: function (t) {
                        var e = t.parser,
                          n = t.funcName,
                          r = e.gullet.consumeArgs(1)[0];
                        if (1 !== r.length)
                          throw new o(
                            "\\gdef's first argument must be a macro name",
                          );
                        var i = r[0].text,
                          a = 0;
                        for (
                          r = e.gullet.consumeArgs(1)[0];
                          1 === r.length && "#" === r[0].text;
  
                        ) {
                          if (1 !== (r = e.gullet.consumeArgs(1)[0]).length)
                            throw new o(
                              'Invalid argument number length "' + r.length + '"',
                            );
                          if (!/^[1-9]$/.test(r[0].text))
                            throw new o(
                              'Invalid argument number "' + r[0].text + '"',
                            );
                          if ((a++, parseInt(r[0].text) !== a))
                            throw new o(
                              'Argument number "' + r[0].text + '" out of order',
                            );
                          r = e.gullet.consumeArgs(1)[0];
                        }
                        return (
                          ("\\edef" !== n && "\\xdef" !== n) ||
                            (r = e.gullet.expandTokens(r)).reverse(),
                          e.gullet.macros.set(
                            i,
                            { tokens: r, numArgs: a },
                            n === Ze[n],
                          ),
                          { type: "internal", mode: e.mode }
                        );
                      },
                    }),
                    oe({
                      type: "internal",
                      names: ["\\let", "\\\\globallet"],
                      props: { numArgs: 0, allowedInText: !0 },
                      handler: function (t) {
                        var e = t.parser,
                          n = t.funcName,
                          r = Ke(e.gullet.popToken());
                        e.gullet.consumeSpaces();
                        var i = (function (t) {
                          var e = t.gullet.popToken();
                          return (
                            "=" === e.text &&
                              " " === (e = t.gullet.popToken()).text &&
                              (e = t.gullet.popToken()),
                            e
                          );
                        })(e);
                        return (
                          Je(e, r, i, "\\\\globallet" === n),
                          { type: "internal", mode: e.mode }
                        );
                      },
                    }),
                    oe({
                      type: "internal",
                      names: ["\\futurelet", "\\\\globalfuture"],
                      props: { numArgs: 0, allowedInText: !0 },
                      handler: function (t) {
                        var e = t.parser,
                          n = t.funcName,
                          r = Ke(e.gullet.popToken()),
                          i = e.gullet.popToken(),
                          a = e.gullet.popToken();
                        return (
                          Je(e, r, a, "\\\\globalfuture" === n),
                          e.gullet.pushToken(a),
                          e.gullet.pushToken(i),
                          { type: "internal", mode: e.mode }
                        );
                      },
                    });
                  var Qe = function (t, e, n) {
                      var r = V((Y.math[t] && Y.math[t].replace) || t, e, n);
                      if (!r)
                        throw new Error(
                          "Unsupported symbol " + t + " and font size " + e + ".",
                        );
                      return r;
                    },
                    tn = function (t, e, n, r) {
                      var i = n.havingBaseStyle(e),
                        a = Kt.makeSpan(r.concat(i.sizingClasses(n)), [t], n),
                        o = i.sizeMultiplier / n.sizeMultiplier;
                      return (
                        (a.height *= o),
                        (a.depth *= o),
                        (a.maxFontSize = i.sizeMultiplier),
                        a
                      );
                    },
                    en = function (t, e, n) {
                      var r = e.havingBaseStyle(n),
                        i =
                          (1 - e.sizeMultiplier / r.sizeMultiplier) *
                          e.fontMetrics().axisHeight;
                      t.classes.push("delimcenter"),
                        (t.style.top = i + "em"),
                        (t.height -= i),
                        (t.depth += i);
                    },
                    nn = function (t, e, n, r, i, a) {
                      var o = (function (t, e, n, r) {
                          return Kt.makeSymbol(t, "Size" + e + "-Regular", n, r);
                        })(t, e, i, r),
                        s = tn(
                          Kt.makeSpan(["delimsizing", "size" + e], [o], r),
                          w.TEXT,
                          r,
                          a,
                        );
                      return n && en(s, r, w.TEXT), s;
                    },
                    rn = function (t, e, n) {
                      var r;
                      return (
                        (r =
                          "Size1-Regular" === e ? "delim-size1" : "delim-size4"),
                        {
                          type: "elem",
                          elem: Kt.makeSpan(
                            ["delimsizinginner", r],
                            [Kt.makeSpan([], [Kt.makeSymbol(t, e, n)])],
                          ),
                        }
                      );
                    },
                    an = { type: "kern", size: -0.005 },
                    on = function (t, e, n, r, i, a) {
                      var o, s, l, c;
                      (o = l = c = t), (s = null);
                      var h = "Size1-Regular";
                      "\\uparrow" === t
                        ? (l = c = "⏐")
                        : "\\Uparrow" === t
                          ? (l = c = "‖")
                          : "\\downarrow" === t
                            ? (o = l = "⏐")
                            : "\\Downarrow" === t
                              ? (o = l = "‖")
                              : "\\updownarrow" === t
                                ? ((o = "\\uparrow"),
                                  (l = "⏐"),
                                  (c = "\\downarrow"))
                                : "\\Updownarrow" === t
                                  ? ((o = "\\Uparrow"),
                                    (l = "‖"),
                                    (c = "\\Downarrow"))
                                  : "[" === t || "\\lbrack" === t
                                    ? ((o = "⎡"),
                                      (l = "⎢"),
                                      (c = "⎣"),
                                      (h = "Size4-Regular"))
                                    : "]" === t || "\\rbrack" === t
                                      ? ((o = "⎤"),
                                        (l = "⎥"),
                                        (c = "⎦"),
                                        (h = "Size4-Regular"))
                                      : "\\lfloor" === t || "⌊" === t
                                        ? ((l = o = "⎢"),
                                          (c = "⎣"),
                                          (h = "Size4-Regular"))
                                        : "\\lceil" === t || "⌈" === t
                                          ? ((o = "⎡"),
                                            (l = c = "⎢"),
                                            (h = "Size4-Regular"))
                                          : "\\rfloor" === t || "⌋" === t
                                            ? ((l = o = "⎥"),
                                              (c = "⎦"),
                                              (h = "Size4-Regular"))
                                            : "\\rceil" === t || "⌉" === t
                                              ? ((o = "⎤"),
                                                (l = c = "⎥"),
                                                (h = "Size4-Regular"))
                                              : "(" === t || "\\lparen" === t
                                                ? ((o = "⎛"),
                                                  (l = "⎜"),
                                                  (c = "⎝"),
                                                  (h = "Size4-Regular"))
                                                : ")" === t || "\\rparen" === t
                                                  ? ((o = "⎞"),
                                                    (l = "⎟"),
                                                    (c = "⎠"),
                                                    (h = "Size4-Regular"))
                                                  : "\\{" === t ||
                                                      "\\lbrace" === t
                                                    ? ((o = "⎧"),
                                                      (s = "⎨"),
                                                      (c = "⎩"),
                                                      (l = "⎪"),
                                                      (h = "Size4-Regular"))
                                                    : "\\}" === t ||
                                                        "\\rbrace" === t
                                                      ? ((o = "⎫"),
                                                        (s = "⎬"),
                                                        (c = "⎭"),
                                                        (l = "⎪"),
                                                        (h = "Size4-Regular"))
                                                      : "\\lgroup" === t ||
                                                          "⟮" === t
                                                        ? ((o = "⎧"),
                                                          (c = "⎩"),
                                                          (l = "⎪"),
                                                          (h = "Size4-Regular"))
                                                        : "\\rgroup" === t ||
                                                            "⟯" === t
                                                          ? ((o = "⎫"),
                                                            (c = "⎭"),
                                                            (l = "⎪"),
                                                            (h = "Size4-Regular"))
                                                          : "\\lmoustache" ===
                                                                t || "⎰" === t
                                                            ? ((o = "⎧"),
                                                              (c = "⎭"),
                                                              (l = "⎪"),
                                                              (h =
                                                                "Size4-Regular"))
                                                            : ("\\rmoustache" !==
                                                                t &&
                                                                "⎱" !== t) ||
                                                              ((o = "⎫"),
                                                              (c = "⎩"),
                                                              (l = "⎪"),
                                                              (h =
                                                                "Size4-Regular"));
                      var u = Qe(o, h, i),
                        d = u.height + u.depth,
                        m = Qe(l, h, i),
                        p = m.height + m.depth,
                        f = Qe(c, h, i),
                        g = f.height + f.depth,
                        y = 0,
                        x = 1;
                      if (null !== s) {
                        var v = Qe(s, h, i);
                        (y = v.height + v.depth), (x = 2);
                      }
                      var b = d + g + y,
                        k = Math.max(0, Math.ceil((e - b) / (x * p))),
                        $ = b + k * x * p,
                        M = r.fontMetrics().axisHeight;
                      n && (M *= r.sizeMultiplier);
                      var S = $ / 2 - M,
                        z = 0.005 * (k + 1) - p,
                        A = [];
                      if ((A.push(rn(c, h, i)), null === s))
                        for (var T = 0; T < k; T++)
                          A.push(an), A.push(rn(l, h, i));
                      else {
                        for (var N = 0; N < k; N++)
                          A.push(an), A.push(rn(l, h, i));
                        A.push({ type: "kern", size: z }),
                          A.push(rn(l, h, i)),
                          A.push(an),
                          A.push(rn(s, h, i));
                        for (var B = 0; B < k; B++)
                          A.push(an), A.push(rn(l, h, i));
                      }
                      if (("⎜" !== l && "⎟" !== l) || 0 !== k)
                        A.push({ type: "kern", size: z }),
                          A.push(rn(l, h, i)),
                          A.push(an);
                      else {
                        var C = Kt.svgData.leftParenInner[2] / 2;
                        A.push({ type: "kern", size: -C });
                        var q = "⎜" === l ? "leftParenInner" : "rightParenInner",
                          E = Kt.staticSvg(q, r);
                        A.push({ type: "elem", elem: E }),
                          A.push({ type: "kern", size: -C });
                      }
                      A.push(rn(o, h, i));
                      var L = r.havingBaseStyle(w.TEXT),
                        _ = Kt.makeVList(
                          {
                            positionType: "bottom",
                            positionData: S,
                            children: A,
                          },
                          L,
                        );
                      return tn(
                        Kt.makeSpan(["delimsizing", "mult"], [_], L),
                        w.TEXT,
                        r,
                        a,
                      );
                    },
                    sn = 0.08,
                    ln = function (t, e, n, r, i) {
                      var a = (function (t, e, n) {
                          e *= 1e3;
                          var r = "";
                          switch (t) {
                            case "sqrtMain":
                              r = (function (t, e) {
                                return (
                                  "M95," +
                                  (622 + t + e) +
                                  "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" +
                                  t / 2.075 +
                                  " -" +
                                  t +
                                  "\nc5.3,-9.3,12,-14,20,-14\nH400000v" +
                                  (40 + t) +
                                  "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" +
                                  (834 + t) +
                                  " " +
                                  e +
                                  "h400000v" +
                                  (40 + t) +
                                  "h-400000z"
                                );
                              })(e, S);
                              break;
                            case "sqrtSize1":
                              r = (function (t, e) {
                                return (
                                  "M263," +
                                  (601 + t + e) +
                                  "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" +
                                  t / 2.084 +
                                  " -" +
                                  t +
                                  "\nc4.7,-7.3,11,-11,19,-11\nH40000v" +
                                  (40 + t) +
                                  "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" +
                                  (1001 + t) +
                                  " " +
                                  e +
                                  "h400000v" +
                                  (40 + t) +
                                  "h-400000z"
                                );
                              })(e, S);
                              break;
                            case "sqrtSize2":
                              r = (function (t, e) {
                                return (
                                  "M983 " +
                                  (10 + t + e) +
                                  "\nl" +
                                  t / 3.13 +
                                  " -" +
                                  t +
                                  "\nc4,-6.7,10,-10,18,-10 H400000v" +
                                  (40 + t) +
                                  "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" +
                                  (1001 + t) +
                                  " " +
                                  e +
                                  "h400000v" +
                                  (40 + t) +
                                  "h-400000z"
                                );
                              })(e, S);
                              break;
                            case "sqrtSize3":
                              r = (function (t, e) {
                                return (
                                  "M424," +
                                  (2398 + t + e) +
                                  "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" +
                                  t / 4.223 +
                                  " -" +
                                  t +
                                  "c4,-6.7,10,-10,18,-10 H400000\nv" +
                                  (40 + t) +
                                  "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" +
                                  (1001 + t) +
                                  " " +
                                  e +
                                  "\nh400000v" +
                                  (40 + t) +
                                  "h-400000z"
                                );
                              })(e, S);
                              break;
                            case "sqrtSize4":
                              r = (function (t, e) {
                                return (
                                  "M473," +
                                  (2713 + t + e) +
                                  "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" +
                                  t / 5.298 +
                                  " -" +
                                  t +
                                  "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" +
                                  (40 + t) +
                                  "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" +
                                  (1001 + t) +
                                  " " +
                                  e +
                                  "h400000v" +
                                  (40 + t) +
                                  "H1017.7z"
                                );
                              })(e, S);
                              break;
                            case "sqrtTall":
                              r = (function (t, e, n) {
                                return (
                                  "M702 " +
                                  (t + e) +
                                  "H400000" +
                                  (40 + t) +
                                  "\nH742v" +
                                  (n - 54 - e - t) +
                                  "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " +
                                  e +
                                  "H400000v" +
                                  (40 + t) +
                                  "H742z"
                                );
                              })(e, S, n);
                          }
                          return r;
                        })(t, r, n),
                        o = new O(t, a),
                        s = new R([o], {
                          width: "400em",
                          height: e + "em",
                          viewBox: "0 0 400000 " + n,
                          preserveAspectRatio: "xMinYMin slice",
                        });
                      return Kt.makeSvgSpan(["hide-tail"], [s], i);
                    },
                    cn = [
                      "(",
                      "\\lparen",
                      ")",
                      "\\rparen",
                      "[",
                      "\\lbrack",
                      "]",
                      "\\rbrack",
                      "\\{",
                      "\\lbrace",
                      "\\}",
                      "\\rbrace",
                      "\\lfloor",
                      "\\rfloor",
                      "⌊",
                      "⌋",
                      "\\lceil",
                      "\\rceil",
                      "⌈",
                      "⌉",
                      "\\surd",
                    ],
                    hn = [
                      "\\uparrow",
                      "\\downarrow",
                      "\\updownarrow",
                      "\\Uparrow",
                      "\\Downarrow",
                      "\\Updownarrow",
                      "|",
                      "\\|",
                      "\\vert",
                      "\\Vert",
                      "\\lvert",
                      "\\rvert",
                      "\\lVert",
                      "\\rVert",
                      "\\lgroup",
                      "\\rgroup",
                      "⟮",
                      "⟯",
                      "\\lmoustache",
                      "\\rmoustache",
                      "⎰",
                      "⎱",
                    ],
                    un = [
                      "<",
                      ">",
                      "\\langle",
                      "\\rangle",
                      "/",
                      "\\backslash",
                      "\\lt",
                      "\\gt",
                    ],
                    dn = [0, 1.2, 1.8, 2.4, 3],
                    mn = [
                      { type: "small", style: w.SCRIPTSCRIPT },
                      { type: "small", style: w.SCRIPT },
                      { type: "small", style: w.TEXT },
                      { type: "large", size: 1 },
                      { type: "large", size: 2 },
                      { type: "large", size: 3 },
                      { type: "large", size: 4 },
                    ],
                    pn = [
                      { type: "small", style: w.SCRIPTSCRIPT },
                      { type: "small", style: w.SCRIPT },
                      { type: "small", style: w.TEXT },
                      { type: "stack" },
                    ],
                    fn = [
                      { type: "small", style: w.SCRIPTSCRIPT },
                      { type: "small", style: w.SCRIPT },
                      { type: "small", style: w.TEXT },
                      { type: "large", size: 1 },
                      { type: "large", size: 2 },
                      { type: "large", size: 3 },
                      { type: "large", size: 4 },
                      { type: "stack" },
                    ],
                    gn = function (t) {
                      if ("small" === t.type) return "Main-Regular";
                      if ("large" === t.type) return "Size" + t.size + "-Regular";
                      if ("stack" === t.type) return "Size4-Regular";
                      throw new Error(
                        "Add support for delim type '" + t.type + "' here.",
                      );
                    },
                    yn = function (t, e, n, r) {
                      for (
                        var i = Math.min(2, 3 - r.style.size);
                        i < n.length && "stack" !== n[i].type;
                        i++
                      ) {
                        var a = Qe(t, gn(n[i]), "math"),
                          o = a.height + a.depth;
                        if (
                          ("small" === n[i].type &&
                            (o *= r.havingBaseStyle(n[i].style).sizeMultiplier),
                          o > e)
                        )
                          return n[i];
                      }
                      return n[n.length - 1];
                    },
                    xn = function (t, e, n, r, i, a) {
                      var o;
                      "<" === t || "\\lt" === t || "⟨" === t
                        ? (t = "\\langle")
                        : (">" !== t && "\\gt" !== t && "⟩" !== t) ||
                          (t = "\\rangle"),
                        (o = u.contains(un, t)
                          ? mn
                          : u.contains(cn, t)
                            ? fn
                            : pn);
                      var s = yn(t, e, o, r);
                      return "small" === s.type
                        ? (function (t, e, n, r, i, a) {
                            var o = Kt.makeSymbol(t, "Main-Regular", i, r),
                              s = tn(o, e, r, a);
                            return n && en(s, r, e), s;
                          })(t, s.style, n, r, i, a)
                        : "large" === s.type
                          ? nn(t, s.size, n, r, i, a)
                          : on(t, e, n, r, i, a);
                    },
                    vn = function (t, e) {
                      var n,
                        r,
                        i = e.havingBaseSizing(),
                        a = yn("\\surd", t * i.sizeMultiplier, fn, i),
                        o = i.sizeMultiplier,
                        s = Math.max(
                          0,
                          e.minRuleThickness - e.fontMetrics().sqrtRuleThickness,
                        ),
                        l = 0,
                        c = 0,
                        h = 0;
                      return (
                        "small" === a.type
                          ? (t < 1 ? (o = 1) : t < 1.4 && (o = 0.7),
                            (c = (1 + s) / o),
                            ((n = ln(
                              "sqrtMain",
                              (l = (1 + s + sn) / o),
                              (h = 1e3 + 1e3 * s + 80),
                              s,
                              e,
                            )).style.minWidth = "0.853em"),
                            (r = 0.833 / o))
                          : "large" === a.type
                            ? ((h = 1080 * dn[a.size]),
                              (c = (dn[a.size] + s) / o),
                              (l = (dn[a.size] + s + sn) / o),
                              ((n = ln(
                                "sqrtSize" + a.size,
                                l,
                                h,
                                s,
                                e,
                              )).style.minWidth = "1.02em"),
                              (r = 1 / o))
                            : ((l = t + s + sn),
                              (c = t + s),
                              (h = Math.floor(1e3 * t + s) + 80),
                              ((n = ln("sqrtTall", l, h, s, e)).style.minWidth =
                                "0.742em"),
                              (r = 1.056)),
                        (n.height = c),
                        (n.style.height = l + "em"),
                        {
                          span: n,
                          advanceWidth: r,
                          ruleWidth: (e.fontMetrics().sqrtRuleThickness + s) * o,
                        }
                      );
                    },
                    bn = function (t, e, n, r, i) {
                      if (
                        ("<" === t || "\\lt" === t || "⟨" === t
                          ? (t = "\\langle")
                          : (">" !== t && "\\gt" !== t && "⟩" !== t) ||
                            (t = "\\rangle"),
                        u.contains(cn, t) || u.contains(un, t))
                      )
                        return nn(t, e, !1, n, r, i);
                      if (u.contains(hn, t)) return on(t, dn[e], !1, n, r, i);
                      throw new o("Illegal delimiter: '" + t + "'");
                    },
                    wn = xn,
                    kn = function (t, e, n, r, i, a) {
                      var o = r.fontMetrics().axisHeight * r.sizeMultiplier,
                        s = 5 / r.fontMetrics().ptPerEm,
                        l = Math.max(e - o, n + o),
                        c = Math.max((l / 500) * 901, 2 * l - s);
                      return xn(t, c, !0, r, i, a);
                    },
                    $n = {
                      "\\bigl": { mclass: "mopen", size: 1 },
                      "\\Bigl": { mclass: "mopen", size: 2 },
                      "\\biggl": { mclass: "mopen", size: 3 },
                      "\\Biggl": { mclass: "mopen", size: 4 },
                      "\\bigr": { mclass: "mclose", size: 1 },
                      "\\Bigr": { mclass: "mclose", size: 2 },
                      "\\biggr": { mclass: "mclose", size: 3 },
                      "\\Biggr": { mclass: "mclose", size: 4 },
                      "\\bigm": { mclass: "mrel", size: 1 },
                      "\\Bigm": { mclass: "mrel", size: 2 },
                      "\\biggm": { mclass: "mrel", size: 3 },
                      "\\Biggm": { mclass: "mrel", size: 4 },
                      "\\big": { mclass: "mord", size: 1 },
                      "\\Big": { mclass: "mord", size: 2 },
                      "\\bigg": { mclass: "mord", size: 3 },
                      "\\Bigg": { mclass: "mord", size: 4 },
                    },
                    Mn = [
                      "(",
                      "\\lparen",
                      ")",
                      "\\rparen",
                      "[",
                      "\\lbrack",
                      "]",
                      "\\rbrack",
                      "\\{",
                      "\\lbrace",
                      "\\}",
                      "\\rbrace",
                      "\\lfloor",
                      "\\rfloor",
                      "⌊",
                      "⌋",
                      "\\lceil",
                      "\\rceil",
                      "⌈",
                      "⌉",
                      "<",
                      ">",
                      "\\langle",
                      "⟨",
                      "\\rangle",
                      "⟩",
                      "\\lt",
                      "\\gt",
                      "\\lvert",
                      "\\rvert",
                      "\\lVert",
                      "\\rVert",
                      "\\lgroup",
                      "\\rgroup",
                      "⟮",
                      "⟯",
                      "\\lmoustache",
                      "\\rmoustache",
                      "⎰",
                      "⎱",
                      "/",
                      "\\backslash",
                      "|",
                      "\\vert",
                      "\\|",
                      "\\Vert",
                      "\\uparrow",
                      "\\Uparrow",
                      "\\downarrow",
                      "\\Downarrow",
                      "\\updownarrow",
                      "\\Updownarrow",
                      ".",
                    ];
                  function Sn(t, e) {
                    var n = je(t);
                    if (n && u.contains(Mn, n.text)) return n;
                    throw new o(
                      n
                        ? "Invalid delimiter '" +
                          n.text +
                          "' after '" +
                          e.funcName +
                          "'"
                        : "Invalid delimiter type '" + t.type + "'",
                      t,
                    );
                  }
                  function zn(t) {
                    if (!t.body)
                      throw new Error(
                        "Bug: The leftright ParseNode wasn't fully parsed.",
                      );
                  }
                  oe({
                    type: "delimsizing",
                    names: [
                      "\\bigl",
                      "\\Bigl",
                      "\\biggl",
                      "\\Biggl",
                      "\\bigr",
                      "\\Bigr",
                      "\\biggr",
                      "\\Biggr",
                      "\\bigm",
                      "\\Bigm",
                      "\\biggm",
                      "\\Biggm",
                      "\\big",
                      "\\Big",
                      "\\bigg",
                      "\\Bigg",
                    ],
                    props: { numArgs: 1 },
                    handler: function (t, e) {
                      var n = Sn(e[0], t);
                      return {
                        type: "delimsizing",
                        mode: t.parser.mode,
                        size: $n[t.funcName].size,
                        mclass: $n[t.funcName].mclass,
                        delim: n.text,
                      };
                    },
                    htmlBuilder: function (t, e) {
                      return "." === t.delim
                        ? Kt.makeSpan([t.mclass])
                        : bn(t.delim, t.size, e, t.mode, [t.mclass]);
                    },
                    mathmlBuilder: function (t) {
                      var e = [];
                      "." !== t.delim && e.push(Ae(t.delim, t.mode));
                      var n = new ze.MathNode("mo", e);
                      return (
                        "mopen" === t.mclass || "mclose" === t.mclass
                          ? n.setAttribute("fence", "true")
                          : n.setAttribute("fence", "false"),
                        n
                      );
                    },
                  }),
                    oe({
                      type: "leftright-right",
                      names: ["\\right"],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = t.parser.gullet.macros.get("\\current@color");
                        if (n && "string" != typeof n)
                          throw new o(
                            "\\current@color set to non-string in \\right",
                          );
                        return {
                          type: "leftright-right",
                          mode: t.parser.mode,
                          delim: Sn(e[0], t).text,
                          color: n,
                        };
                      },
                    }),
                    oe({
                      type: "leftright",
                      names: ["\\left"],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = Sn(e[0], t),
                          r = t.parser;
                        ++r.leftrightDepth;
                        var i = r.parseExpression(!1);
                        --r.leftrightDepth, r.expect("\\right", !1);
                        var a = De(r.parseFunction(), "leftright-right");
                        return {
                          type: "leftright",
                          mode: r.mode,
                          body: i,
                          left: n.text,
                          right: a.delim,
                          rightColor: a.color,
                        };
                      },
                      htmlBuilder: function (t, e) {
                        zn(t);
                        for (
                          var n,
                            r,
                            i = pe(t.body, e, !0, ["mopen", "mclose"]),
                            a = 0,
                            o = 0,
                            s = !1,
                            l = 0;
                          l < i.length;
                          l++
                        )
                          i[l].isMiddle
                            ? (s = !0)
                            : ((a = Math.max(i[l].height, a)),
                              (o = Math.max(i[l].depth, o)));
                        if (
                          ((a *= e.sizeMultiplier),
                          (o *= e.sizeMultiplier),
                          (n =
                            "." === t.left
                              ? ve(e, ["mopen"])
                              : kn(t.left, a, o, e, t.mode, ["mopen"])),
                          i.unshift(n),
                          s)
                        )
                          for (var c = 1; c < i.length; c++) {
                            var h = i[c].isMiddle;
                            h &&
                              (i[c] = kn(h.delim, a, o, h.options, t.mode, []));
                          }
                        if ("." === t.right) r = ve(e, ["mclose"]);
                        else {
                          var u = t.rightColor ? e.withColor(t.rightColor) : e;
                          r = kn(t.right, a, o, u, t.mode, ["mclose"]);
                        }
                        return i.push(r), Kt.makeSpan(["minner"], i, e);
                      },
                      mathmlBuilder: function (t, e) {
                        zn(t);
                        var n = Be(t.body, e);
                        if ("." !== t.left) {
                          var r = new ze.MathNode("mo", [Ae(t.left, t.mode)]);
                          r.setAttribute("fence", "true"), n.unshift(r);
                        }
                        if ("." !== t.right) {
                          var i = new ze.MathNode("mo", [Ae(t.right, t.mode)]);
                          i.setAttribute("fence", "true"),
                            t.rightColor &&
                              i.setAttribute("mathcolor", t.rightColor),
                            n.push(i);
                        }
                        return Te(n);
                      },
                    }),
                    oe({
                      type: "middle",
                      names: ["\\middle"],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = Sn(e[0], t);
                        if (!t.parser.leftrightDepth)
                          throw new o("\\middle without preceding \\left", n);
                        return {
                          type: "middle",
                          mode: t.parser.mode,
                          delim: n.text,
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n;
                        if ("." === t.delim) n = ve(e, []);
                        else {
                          n = bn(t.delim, 1, e, t.mode, []);
                          var r = { delim: t.delim, options: e };
                          n.isMiddle = r;
                        }
                        return n;
                      },
                      mathmlBuilder: function (t, e) {
                        var n =
                            "\\vert" === t.delim || "|" === t.delim
                              ? Ae("|", "text")
                              : Ae(t.delim, t.mode),
                          r = new ze.MathNode("mo", [n]);
                        return (
                          r.setAttribute("fence", "true"),
                          r.setAttribute("lspace", "0.05em"),
                          r.setAttribute("rspace", "0.05em"),
                          r
                        );
                      },
                    });
                  var An = function (t, e) {
                      var n,
                        r,
                        i = Kt.wrapFragment(be(t.body, e), e),
                        a = t.label.substr(1),
                        o = e.sizeMultiplier,
                        s = 0,
                        l = u.isCharacterBox(t.body);
                      if ("sout" === a)
                        ((n = Kt.makeSpan(["stretchy", "sout"])).height =
                          e.fontMetrics().defaultRuleThickness / o),
                          (s = -0.5 * e.fontMetrics().xHeight);
                      else {
                        /cancel/.test(a)
                          ? l || i.classes.push("cancel-pad")
                          : i.classes.push("boxpad");
                        var c = 0,
                          h = 0;
                        /box/.test(a)
                          ? ((h = Math.max(
                              e.fontMetrics().fboxrule,
                              e.minRuleThickness,
                            )),
                            (c =
                              e.fontMetrics().fboxsep +
                              ("colorbox" === a ? 0 : h)))
                          : (c = l ? 0.2 : 0),
                          (n = Oe(i, a, c, e)),
                          /fbox|boxed|fcolorbox/.test(a) &&
                            ((n.style.borderStyle = "solid"),
                            (n.style.borderWidth = h + "em")),
                          (s = i.depth + c),
                          t.backgroundColor &&
                            ((n.style.backgroundColor = t.backgroundColor),
                            t.borderColor &&
                              (n.style.borderColor = t.borderColor));
                      }
                      return (
                        (r = t.backgroundColor
                          ? Kt.makeVList(
                              {
                                positionType: "individualShift",
                                children: [
                                  { type: "elem", elem: n, shift: s },
                                  { type: "elem", elem: i, shift: 0 },
                                ],
                              },
                              e,
                            )
                          : Kt.makeVList(
                              {
                                positionType: "individualShift",
                                children: [
                                  { type: "elem", elem: i, shift: 0 },
                                  {
                                    type: "elem",
                                    elem: n,
                                    shift: s,
                                    wrapperClasses: /cancel/.test(a)
                                      ? ["svg-align"]
                                      : [],
                                  },
                                ],
                              },
                              e,
                            )),
                        /cancel/.test(a) &&
                          ((r.height = i.height), (r.depth = i.depth)),
                        /cancel/.test(a) && !l
                          ? Kt.makeSpan(["mord", "cancel-lap"], [r], e)
                          : Kt.makeSpan(["mord"], [r], e)
                      );
                    },
                    Tn = function (t, e) {
                      var n = 0,
                        r = new ze.MathNode(
                          t.label.indexOf("colorbox") > -1
                            ? "mpadded"
                            : "menclose",
                          [qe(t.body, e)],
                        );
                      switch (t.label) {
                        case "\\cancel":
                          r.setAttribute("notation", "updiagonalstrike");
                          break;
                        case "\\bcancel":
                          r.setAttribute("notation", "downdiagonalstrike");
                          break;
                        case "\\sout":
                          r.setAttribute("notation", "horizontalstrike");
                          break;
                        case "\\fbox":
                          r.setAttribute("notation", "box");
                          break;
                        case "\\fcolorbox":
                        case "\\colorbox":
                          if (
                            ((n =
                              e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm),
                            r.setAttribute("width", "+" + 2 * n + "pt"),
                            r.setAttribute("height", "+" + 2 * n + "pt"),
                            r.setAttribute("lspace", n + "pt"),
                            r.setAttribute("voffset", n + "pt"),
                            "\\fcolorbox" === t.label)
                          ) {
                            var i = Math.max(
                              e.fontMetrics().fboxrule,
                              e.minRuleThickness,
                            );
                            r.setAttribute(
                              "style",
                              "border: " +
                                i +
                                "em solid " +
                                String(t.borderColor),
                            );
                          }
                          break;
                        case "\\xcancel":
                          r.setAttribute(
                            "notation",
                            "updiagonalstrike downdiagonalstrike",
                          );
                      }
                      return (
                        t.backgroundColor &&
                          r.setAttribute("mathbackground", t.backgroundColor),
                        r
                      );
                    };
                  oe({
                    type: "enclose",
                    names: ["\\colorbox"],
                    props: {
                      numArgs: 2,
                      allowedInText: !0,
                      greediness: 3,
                      argTypes: ["color", "text"],
                    },
                    handler: function (t, e, n) {
                      var r = t.parser,
                        i = t.funcName,
                        a = De(e[0], "color-token").color,
                        o = e[1];
                      return {
                        type: "enclose",
                        mode: r.mode,
                        label: i,
                        backgroundColor: a,
                        body: o,
                      };
                    },
                    htmlBuilder: An,
                    mathmlBuilder: Tn,
                  }),
                    oe({
                      type: "enclose",
                      names: ["\\fcolorbox"],
                      props: {
                        numArgs: 3,
                        allowedInText: !0,
                        greediness: 3,
                        argTypes: ["color", "color", "text"],
                      },
                      handler: function (t, e, n) {
                        var r = t.parser,
                          i = t.funcName,
                          a = De(e[0], "color-token").color,
                          o = De(e[1], "color-token").color,
                          s = e[2];
                        return {
                          type: "enclose",
                          mode: r.mode,
                          label: i,
                          backgroundColor: o,
                          borderColor: a,
                          body: s,
                        };
                      },
                      htmlBuilder: An,
                      mathmlBuilder: Tn,
                    }),
                    oe({
                      type: "enclose",
                      names: ["\\fbox"],
                      props: {
                        numArgs: 1,
                        argTypes: ["hbox"],
                        allowedInText: !0,
                      },
                      handler: function (t, e) {
                        return {
                          type: "enclose",
                          mode: t.parser.mode,
                          label: "\\fbox",
                          body: e[0],
                        };
                      },
                    }),
                    oe({
                      type: "enclose",
                      names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout"],
                      props: { numArgs: 1 },
                      handler: function (t, e, n) {
                        var r = t.parser,
                          i = t.funcName,
                          a = e[0];
                        return {
                          type: "enclose",
                          mode: r.mode,
                          label: i,
                          body: a,
                        };
                      },
                      htmlBuilder: An,
                      mathmlBuilder: Tn,
                    });
                  var Nn = {};
                  function Bn(t) {
                    for (
                      var e = t.type,
                        n = t.names,
                        r = t.props,
                        i = t.handler,
                        a = t.htmlBuilder,
                        o = t.mathmlBuilder,
                        s = {
                          type: e,
                          numArgs: r.numArgs || 0,
                          greediness: 1,
                          allowedInText: !1,
                          numOptionalArgs: 0,
                          handler: i,
                        },
                        l = 0;
                      l < n.length;
                      ++l
                    )
                      Nn[n[l]] = s;
                    a && (ie[e] = a), o && (ae[e] = o);
                  }
                  function Cn(t) {
                    var e = [];
                    t.consumeSpaces();
                    for (
                      var n = t.fetch().text;
                      "\\hline" === n || "\\hdashline" === n;
  
                    )
                      t.consume(),
                        e.push("\\hdashline" === n),
                        t.consumeSpaces(),
                        (n = t.fetch().text);
                    return e;
                  }
                  function qn(t, e, n) {
                    var r = e.hskipBeforeAndAfter,
                      i = e.addJot,
                      a = e.cols,
                      s = e.arraystretch,
                      l = e.colSeparationType;
                    if (
                      (t.gullet.beginGroup(),
                      t.gullet.macros.set("\\\\", "\\cr"),
                      !s)
                    ) {
                      var c = t.gullet.expandMacroAsText("\\arraystretch");
                      if (null == c) s = 1;
                      else if (!(s = parseFloat(c)) || s < 0)
                        throw new o("Invalid \\arraystretch: " + c);
                    }
                    t.gullet.beginGroup();
                    var h = [],
                      u = [h],
                      d = [],
                      m = [];
                    for (m.push(Cn(t)); ; ) {
                      var p = t.parseExpression(!1, "\\cr");
                      t.gullet.endGroup(),
                        t.gullet.beginGroup(),
                        (p = { type: "ordgroup", mode: t.mode, body: p }),
                        n &&
                          (p = {
                            type: "styling",
                            mode: t.mode,
                            style: n,
                            body: [p],
                          }),
                        h.push(p);
                      var f = t.fetch().text;
                      if ("&" === f) t.consume();
                      else {
                        if ("\\end" === f) {
                          1 === h.length &&
                            "styling" === p.type &&
                            0 === p.body[0].body.length &&
                            u.pop(),
                            m.length < u.length + 1 && m.push([]);
                          break;
                        }
                        if ("\\cr" !== f)
                          throw new o(
                            "Expected & or \\\\ or \\cr or \\end",
                            t.nextToken,
                          );
                        var g = De(t.parseFunction(), "cr");
                        d.push(g.size), m.push(Cn(t)), (h = []), u.push(h);
                      }
                    }
                    return (
                      t.gullet.endGroup(),
                      t.gullet.endGroup(),
                      {
                        type: "array",
                        mode: t.mode,
                        addJot: i,
                        arraystretch: s,
                        body: u,
                        cols: a,
                        rowGaps: d,
                        hskipBeforeAndAfter: r,
                        hLinesBeforeRow: m,
                        colSeparationType: l,
                      }
                    );
                  }
                  function En(t) {
                    return "d" === t.substr(0, 1) ? "display" : "text";
                  }
                  var Ln = function (t, e) {
                      var n,
                        r,
                        i = t.body.length,
                        a = t.hLinesBeforeRow,
                        s = 0,
                        l = new Array(i),
                        c = [],
                        h = Math.max(
                          e.fontMetrics().arrayRuleWidth,
                          e.minRuleThickness,
                        ),
                        d = 1 / e.fontMetrics().ptPerEm,
                        m = 5 * d;
                      t.colSeparationType &&
                        "small" === t.colSeparationType &&
                        (m =
                          (e.havingStyle(w.SCRIPT).sizeMultiplier /
                            e.sizeMultiplier) *
                          0.2778);
                      var p = 12 * d,
                        f = 3 * d,
                        g = t.arraystretch * p,
                        y = 0.7 * g,
                        x = 0.3 * g,
                        v = 0;
                      function b(t) {
                        for (var e = 0; e < t.length; ++e)
                          e > 0 && (v += 0.25),
                            c.push({ pos: v, isDashed: t[e] });
                      }
                      for (b(a[0]), n = 0; n < t.body.length; ++n) {
                        var k = t.body[n],
                          $ = y,
                          M = x;
                        s < k.length && (s = k.length);
                        var S = new Array(k.length);
                        for (r = 0; r < k.length; ++r) {
                          var z = be(k[r], e);
                          M < z.depth && (M = z.depth),
                            $ < z.height && ($ = z.height),
                            (S[r] = z);
                        }
                        var A = t.rowGaps[n],
                          T = 0;
                        A &&
                          (T = Ht(A, e)) > 0 &&
                          (M < (T += x) && (M = T), (T = 0)),
                          t.addJot && (M += f),
                          (S.height = $),
                          (S.depth = M),
                          (v += $),
                          (S.pos = v),
                          (v += M + T),
                          (l[n] = S),
                          b(a[n + 1]);
                      }
                      var N,
                        B,
                        C = v / 2 + e.fontMetrics().axisHeight,
                        q = t.cols || [],
                        E = [];
                      for (r = 0, B = 0; r < s || B < q.length; ++r, ++B) {
                        for (
                          var L = q[B] || {}, _ = !0;
                          "separator" === L.type;
  
                        ) {
                          if (
                            (_ ||
                              (((N = Kt.makeSpan(
                                ["arraycolsep"],
                                [],
                              )).style.width =
                                e.fontMetrics().doubleRuleSep + "em"),
                              E.push(N)),
                            "|" !== L.separator && ":" !== L.separator)
                          )
                            throw new o("Invalid separator type: " + L.separator);
                          var I = "|" === L.separator ? "solid" : "dashed",
                            R = Kt.makeSpan(["vertical-separator"], [], e);
                          (R.style.height = v + "em"),
                            (R.style.borderRightWidth = h + "em"),
                            (R.style.borderRightStyle = I),
                            (R.style.margin = "0 -" + h / 2 + "em"),
                            (R.style.verticalAlign = -(v - C) + "em"),
                            E.push(R),
                            (L = q[++B] || {}),
                            (_ = !1);
                        }
                        if (!(r >= s)) {
                          var O = void 0;
                          (r > 0 || t.hskipBeforeAndAfter) &&
                            0 !== (O = u.deflt(L.pregap, m)) &&
                            (((N = Kt.makeSpan(["arraycolsep"], [])).style.width =
                              O + "em"),
                            E.push(N));
                          var P = [];
                          for (n = 0; n < i; ++n) {
                            var H = l[n],
                              D = H[r];
                            if (D) {
                              var F = H.pos - C;
                              (D.depth = H.depth),
                                (D.height = H.height),
                                P.push({ type: "elem", elem: D, shift: F });
                            }
                          }
                          (P = Kt.makeVList(
                            { positionType: "individualShift", children: P },
                            e,
                          )),
                            (P = Kt.makeSpan(
                              ["col-align-" + (L.align || "c")],
                              [P],
                            )),
                            E.push(P),
                            (r < s - 1 || t.hskipBeforeAndAfter) &&
                              0 !== (O = u.deflt(L.postgap, m)) &&
                              (((N = Kt.makeSpan(
                                ["arraycolsep"],
                                [],
                              )).style.width = O + "em"),
                              E.push(N));
                        }
                      }
                      if (((l = Kt.makeSpan(["mtable"], E)), c.length > 0)) {
                        for (
                          var j = Kt.makeLineSpan("hline", e, h),
                            V = Kt.makeLineSpan("hdashline", e, h),
                            U = [{ type: "elem", elem: l, shift: 0 }];
                          c.length > 0;
  
                        ) {
                          var G = c.pop(),
                            W = G.pos - C;
                          G.isDashed
                            ? U.push({ type: "elem", elem: V, shift: W })
                            : U.push({ type: "elem", elem: j, shift: W });
                        }
                        l = Kt.makeVList(
                          { positionType: "individualShift", children: U },
                          e,
                        );
                      }
                      return Kt.makeSpan(["mord"], [l], e);
                    },
                    _n = { c: "center ", l: "left ", r: "right " },
                    In = function (t, e) {
                      var n = new ze.MathNode(
                          "mtable",
                          t.body.map(function (t) {
                            return new ze.MathNode(
                              "mtr",
                              t.map(function (t) {
                                return new ze.MathNode("mtd", [qe(t, e)]);
                              }),
                            );
                          }),
                        ),
                        r =
                          0.5 === t.arraystretch
                            ? 0.1
                            : 0.16 + t.arraystretch - 1 + (t.addJot ? 0.09 : 0);
                      n.setAttribute("rowspacing", r + "em");
                      var i = "",
                        a = "";
                      if (t.cols && t.cols.length > 0) {
                        var o = t.cols,
                          s = "",
                          l = !1,
                          c = 0,
                          h = o.length;
                        "separator" === o[0].type && ((i += "top "), (c = 1)),
                          "separator" === o[o.length - 1].type &&
                            ((i += "bottom "), (h -= 1));
                        for (var u = c; u < h; u++)
                          "align" === o[u].type
                            ? ((a += _n[o[u].align]),
                              l && (s += "none "),
                              (l = !0))
                            : "separator" === o[u].type &&
                              l &&
                              ((s +=
                                "|" === o[u].separator ? "solid " : "dashed "),
                              (l = !1));
                        n.setAttribute("columnalign", a.trim()),
                          /[sd]/.test(s) &&
                            n.setAttribute("columnlines", s.trim());
                      }
                      if ("align" === t.colSeparationType) {
                        for (
                          var d = t.cols || [], m = "", p = 1;
                          p < d.length;
                          p++
                        )
                          m += p % 2 ? "0em " : "1em ";
                        n.setAttribute("columnspacing", m.trim());
                      } else
                        "alignat" === t.colSeparationType
                          ? n.setAttribute("columnspacing", "0em")
                          : "small" === t.colSeparationType
                            ? n.setAttribute("columnspacing", "0.2778em")
                            : n.setAttribute("columnspacing", "1em");
                      var f = "",
                        g = t.hLinesBeforeRow;
                      (i += g[0].length > 0 ? "left " : ""),
                        (i += g[g.length - 1].length > 0 ? "right " : "");
                      for (var y = 1; y < g.length - 1; y++)
                        f +=
                          0 === g[y].length
                            ? "none "
                            : g[y][0]
                              ? "dashed "
                              : "solid ";
                      return (
                        /[sd]/.test(f) && n.setAttribute("rowlines", f.trim()),
                        "" !== i &&
                          (n = new ze.MathNode("menclose", [n])).setAttribute(
                            "notation",
                            i.trim(),
                          ),
                        t.arraystretch &&
                          t.arraystretch < 1 &&
                          (n = new ze.MathNode("mstyle", [n])).setAttribute(
                            "scriptlevel",
                            "1",
                          ),
                        n
                      );
                    },
                    Rn = function (t, e) {
                      var n,
                        r = [],
                        i = qn(t.parser, { cols: r, addJot: !0 }, "display"),
                        a = 0,
                        s = { type: "ordgroup", mode: t.mode, body: [] };
                      if (e[0] && "ordgroup" === e[0].type) {
                        for (var l = "", c = 0; c < e[0].body.length; c++)
                          l += De(e[0].body[c], "textord").text;
                        (n = Number(l)), (a = 2 * n);
                      }
                      var h = !a;
                      i.body.forEach(function (t) {
                        for (var e = 1; e < t.length; e += 2) {
                          var r = De(t[e], "styling");
                          De(r.body[0], "ordgroup").body.unshift(s);
                        }
                        if (h) a < t.length && (a = t.length);
                        else {
                          var i = t.length / 2;
                          if (n < i)
                            throw new o(
                              "Too many math in a row: expected " +
                                n +
                                ", but got " +
                                i,
                              t[0],
                            );
                        }
                      });
                      for (var u = 0; u < a; ++u) {
                        var d = "r",
                          m = 0;
                        u % 2 == 1 ? (d = "l") : u > 0 && h && (m = 1),
                          (r[u] = {
                            type: "align",
                            align: d,
                            pregap: m,
                            postgap: 0,
                          });
                      }
                      return (i.colSeparationType = h ? "align" : "alignat"), i;
                    };
                  Bn({
                    type: "array",
                    names: ["array", "darray"],
                    props: { numArgs: 1 },
                    handler: function (t, e) {
                      var n = {
                        cols: (je(e[0]) ? [e[0]] : De(e[0], "ordgroup").body).map(
                          function (t) {
                            var e = Fe(t).text;
                            if (-1 !== "lcr".indexOf(e))
                              return { type: "align", align: e };
                            if ("|" === e)
                              return { type: "separator", separator: "|" };
                            if (":" === e)
                              return { type: "separator", separator: ":" };
                            throw new o("Unknown column alignment: " + e, t);
                          },
                        ),
                        hskipBeforeAndAfter: !0,
                      };
                      return qn(t.parser, n, En(t.envName));
                    },
                    htmlBuilder: Ln,
                    mathmlBuilder: In,
                  }),
                    Bn({
                      type: "array",
                      names: [
                        "matrix",
                        "pmatrix",
                        "bmatrix",
                        "Bmatrix",
                        "vmatrix",
                        "Vmatrix",
                      ],
                      props: { numArgs: 0 },
                      handler: function (t) {
                        var e = {
                            matrix: null,
                            pmatrix: ["(", ")"],
                            bmatrix: ["[", "]"],
                            Bmatrix: ["\\{", "\\}"],
                            vmatrix: ["|", "|"],
                            Vmatrix: ["\\Vert", "\\Vert"],
                          }[t.envName],
                          n = qn(
                            t.parser,
                            { hskipBeforeAndAfter: !1 },
                            En(t.envName),
                          );
                        return e
                          ? {
                              type: "leftright",
                              mode: t.mode,
                              body: [n],
                              left: e[0],
                              right: e[1],
                              rightColor: void 0,
                            }
                          : n;
                      },
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    Bn({
                      type: "array",
                      names: ["smallmatrix"],
                      props: { numArgs: 0 },
                      handler: function (t) {
                        var e = qn(t.parser, { arraystretch: 0.5 }, "script");
                        return (e.colSeparationType = "small"), e;
                      },
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    Bn({
                      type: "array",
                      names: ["subarray"],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = (
                          je(e[0]) ? [e[0]] : De(e[0], "ordgroup").body
                        ).map(function (t) {
                          var e = Fe(t).text;
                          if (-1 !== "lc".indexOf(e))
                            return { type: "align", align: e };
                          throw new o("Unknown column alignment: " + e, t);
                        });
                        if (n.length > 1)
                          throw new o("{subarray} can contain only one column");
                        var r = {
                          cols: n,
                          hskipBeforeAndAfter: !1,
                          arraystretch: 0.5,
                        };
                        if (
                          (r = qn(t.parser, r, "script")).body.length > 0 &&
                          r.body[0].length > 1
                        )
                          throw new o("{subarray} can contain only one column");
                        return r;
                      },
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    Bn({
                      type: "array",
                      names: ["cases", "dcases", "rcases", "drcases"],
                      props: { numArgs: 0 },
                      handler: function (t) {
                        var e = qn(
                          t.parser,
                          {
                            arraystretch: 1.2,
                            cols: [
                              {
                                type: "align",
                                align: "l",
                                pregap: 0,
                                postgap: 1,
                              },
                              {
                                type: "align",
                                align: "l",
                                pregap: 0,
                                postgap: 0,
                              },
                            ],
                          },
                          En(t.envName),
                        );
                        return {
                          type: "leftright",
                          mode: t.mode,
                          body: [e],
                          left: t.envName.indexOf("r") > -1 ? "." : "\\{",
                          right: t.envName.indexOf("r") > -1 ? "\\}" : ".",
                          rightColor: void 0,
                        };
                      },
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    Bn({
                      type: "array",
                      names: ["aligned"],
                      props: { numArgs: 0 },
                      handler: Rn,
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    Bn({
                      type: "array",
                      names: ["gathered"],
                      props: { numArgs: 0 },
                      handler: function (t) {
                        return qn(
                          t.parser,
                          { cols: [{ type: "align", align: "c" }], addJot: !0 },
                          "display",
                        );
                      },
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    Bn({
                      type: "array",
                      names: ["alignedat"],
                      props: { numArgs: 1 },
                      handler: Rn,
                      htmlBuilder: Ln,
                      mathmlBuilder: In,
                    }),
                    oe({
                      type: "text",
                      names: ["\\hline", "\\hdashline"],
                      props: { numArgs: 0, allowedInText: !0, allowedInMath: !0 },
                      handler: function (t, e) {
                        throw new o(
                          t.funcName + " valid only within array environment",
                        );
                      },
                    });
                  var On = Nn;
                  oe({
                    type: "environment",
                    names: ["\\begin", "\\end"],
                    props: { numArgs: 1, argTypes: ["text"] },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName,
                        i = e[0];
                      if ("ordgroup" !== i.type)
                        throw new o("Invalid environment name", i);
                      for (var a = "", s = 0; s < i.body.length; ++s)
                        a += De(i.body[s], "textord").text;
                      if ("\\begin" === r) {
                        if (!On.hasOwnProperty(a))
                          throw new o("No such environment: " + a, i);
                        var l = On[a],
                          c = n.parseArguments("\\begin{" + a + "}", l),
                          h = c.args,
                          u = c.optArgs,
                          d = { mode: n.mode, envName: a, parser: n },
                          m = l.handler(d, h, u);
                        n.expect("\\end", !1);
                        var p = n.nextToken,
                          f = De(n.parseFunction(), "environment");
                        if (f.name !== a)
                          throw new o(
                            "Mismatch: \\begin{" +
                              a +
                              "} matched by \\end{" +
                              f.name +
                              "}",
                            p,
                          );
                        return m;
                      }
                      return {
                        type: "environment",
                        mode: n.mode,
                        name: a,
                        nameGroup: i,
                      };
                    },
                  });
                  var Pn = Kt.makeSpan;
                  function Hn(t, e) {
                    var n = pe(t.body, e, !0);
                    return Pn([t.mclass], n, e);
                  }
                  function Dn(t, e) {
                    var n,
                      r = Be(t.body, e);
                    return "minner" === t.mclass
                      ? ze.newDocumentFragment(r)
                      : ("mord" === t.mclass
                          ? t.isCharacterBox
                            ? ((n = r[0]).type = "mi")
                            : (n = new ze.MathNode("mi", r))
                          : (t.isCharacterBox
                              ? ((n = r[0]).type = "mo")
                              : (n = new ze.MathNode("mo", r)),
                            "mbin" === t.mclass
                              ? ((n.attributes.lspace = "0.22em"),
                                (n.attributes.rspace = "0.22em"))
                              : "mpunct" === t.mclass
                                ? ((n.attributes.lspace = "0em"),
                                  (n.attributes.rspace = "0.17em"))
                                : ("mopen" !== t.mclass &&
                                    "mclose" !== t.mclass) ||
                                  ((n.attributes.lspace = "0em"),
                                  (n.attributes.rspace = "0em"))),
                        n);
                  }
                  oe({
                    type: "mclass",
                    names: [
                      "\\mathord",
                      "\\mathbin",
                      "\\mathrel",
                      "\\mathopen",
                      "\\mathclose",
                      "\\mathpunct",
                      "\\mathinner",
                    ],
                    props: { numArgs: 1 },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName,
                        i = e[0];
                      return {
                        type: "mclass",
                        mode: n.mode,
                        mclass: "m" + r.substr(5),
                        body: le(i),
                        isCharacterBox: u.isCharacterBox(i),
                      };
                    },
                    htmlBuilder: Hn,
                    mathmlBuilder: Dn,
                  });
                  var Fn = function (t) {
                    var e =
                      "ordgroup" === t.type && t.body.length ? t.body[0] : t;
                    return "atom" !== e.type ||
                      ("bin" !== e.family && "rel" !== e.family)
                      ? "mord"
                      : "m" + e.family;
                  };
                  oe({
                    type: "mclass",
                    names: ["\\@binrel"],
                    props: { numArgs: 2 },
                    handler: function (t, e) {
                      return {
                        type: "mclass",
                        mode: t.parser.mode,
                        mclass: Fn(e[0]),
                        body: [e[1]],
                        isCharacterBox: u.isCharacterBox(e[1]),
                      };
                    },
                  }),
                    oe({
                      type: "mclass",
                      names: ["\\stackrel", "\\overset", "\\underset"],
                      props: { numArgs: 2 },
                      handler: function (t, e) {
                        var n,
                          r = t.parser,
                          i = t.funcName,
                          a = e[1],
                          o = e[0];
                        n = "\\stackrel" !== i ? Fn(a) : "mrel";
                        var s = {
                            type: "op",
                            mode: a.mode,
                            limits: !0,
                            alwaysHandleSupSub: !0,
                            parentIsSupSub: !1,
                            symbol: !1,
                            suppressBaseShift: "\\stackrel" !== i,
                            body: le(a),
                          },
                          l = {
                            type: "supsub",
                            mode: o.mode,
                            base: s,
                            sup: "\\underset" === i ? null : o,
                            sub: "\\underset" === i ? o : null,
                          };
                        return {
                          type: "mclass",
                          mode: r.mode,
                          mclass: n,
                          body: [l],
                          isCharacterBox: u.isCharacterBox(l),
                        };
                      },
                      htmlBuilder: Hn,
                      mathmlBuilder: Dn,
                    });
                  var jn = function (t, e) {
                      var n = t.font,
                        r = e.withFont(n);
                      return be(t.body, r);
                    },
                    Vn = function (t, e) {
                      var n = t.font,
                        r = e.withFont(n);
                      return qe(t.body, r);
                    },
                    Un = {
                      "\\Bbb": "\\mathbb",
                      "\\bold": "\\mathbf",
                      "\\frak": "\\mathfrak",
                      "\\bm": "\\boldsymbol",
                    };
                  oe({
                    type: "font",
                    names: [
                      "\\mathrm",
                      "\\mathit",
                      "\\mathbf",
                      "\\mathnormal",
                      "\\mathbb",
                      "\\mathcal",
                      "\\mathfrak",
                      "\\mathscr",
                      "\\mathsf",
                      "\\mathtt",
                      "\\Bbb",
                      "\\bold",
                      "\\frak",
                    ],
                    props: { numArgs: 1, greediness: 2 },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName,
                        i = e[0],
                        a = r;
                      return (
                        a in Un && (a = Un[a]),
                        { type: "font", mode: n.mode, font: a.slice(1), body: i }
                      );
                    },
                    htmlBuilder: jn,
                    mathmlBuilder: Vn,
                  }),
                    oe({
                      type: "mclass",
                      names: ["\\boldsymbol", "\\bm"],
                      props: { numArgs: 1, greediness: 2 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[0],
                          i = u.isCharacterBox(r);
                        return {
                          type: "mclass",
                          mode: n.mode,
                          mclass: Fn(r),
                          body: [
                            {
                              type: "font",
                              mode: n.mode,
                              font: "boldsymbol",
                              body: r,
                            },
                          ],
                          isCharacterBox: i,
                        };
                      },
                    }),
                    oe({
                      type: "font",
                      names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
                      props: { numArgs: 0, allowedInText: !0 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = t.funcName,
                          i = t.breakOnTokenText,
                          a = n.mode,
                          o = n.parseExpression(!0, i);
                        return {
                          type: "font",
                          mode: a,
                          font: "math" + r.slice(1),
                          body: { type: "ordgroup", mode: n.mode, body: o },
                        };
                      },
                      htmlBuilder: jn,
                      mathmlBuilder: Vn,
                    });
                  var Gn = function (t, e) {
                      var n = e;
                      return (
                        "display" === t
                          ? (n = n.id >= w.SCRIPT.id ? n.text() : w.DISPLAY)
                          : "text" === t && n.size === w.DISPLAY.size
                            ? (n = w.TEXT)
                            : "script" === t
                              ? (n = w.SCRIPT)
                              : "scriptscript" === t && (n = w.SCRIPTSCRIPT),
                        n
                      );
                    },
                    Wn = function (t, e) {
                      var n,
                        r = Gn(t.size, e.style),
                        i = r.fracNum(),
                        a = r.fracDen();
                      n = e.havingStyle(i);
                      var o = be(t.numer, n, e);
                      if (t.continued) {
                        var s = 8.5 / e.fontMetrics().ptPerEm,
                          l = 3.5 / e.fontMetrics().ptPerEm;
                        (o.height = o.height < s ? s : o.height),
                          (o.depth = o.depth < l ? l : o.depth);
                      }
                      n = e.havingStyle(a);
                      var c,
                        h,
                        u,
                        d,
                        m,
                        p,
                        f,
                        g,
                        y,
                        x,
                        v = be(t.denom, n, e);
                      if (
                        (t.hasBarLine
                          ? (t.barSize
                              ? ((h = Ht(t.barSize, e)),
                                (c = Kt.makeLineSpan("frac-line", e, h)))
                              : (c = Kt.makeLineSpan("frac-line", e)),
                            (h = c.height),
                            (u = c.height))
                          : ((c = null),
                            (h = 0),
                            (u = e.fontMetrics().defaultRuleThickness)),
                        r.size === w.DISPLAY.size || "display" === t.size
                          ? ((d = e.fontMetrics().num1),
                            (m = h > 0 ? 3 * u : 7 * u),
                            (p = e.fontMetrics().denom1))
                          : (h > 0
                              ? ((d = e.fontMetrics().num2), (m = u))
                              : ((d = e.fontMetrics().num3), (m = 3 * u)),
                            (p = e.fontMetrics().denom2)),
                        c)
                      ) {
                        var b = e.fontMetrics().axisHeight;
                        d - o.depth - (b + 0.5 * h) < m &&
                          (d += m - (d - o.depth - (b + 0.5 * h))),
                          b - 0.5 * h - (v.height - p) < m &&
                            (p += m - (b - 0.5 * h - (v.height - p)));
                        var k = -(b - 0.5 * h);
                        f = Kt.makeVList(
                          {
                            positionType: "individualShift",
                            children: [
                              { type: "elem", elem: v, shift: p },
                              { type: "elem", elem: c, shift: k },
                              { type: "elem", elem: o, shift: -d },
                            ],
                          },
                          e,
                        );
                      } else {
                        var $ = d - o.depth - (v.height - p);
                        $ < m && ((d += 0.5 * (m - $)), (p += 0.5 * (m - $))),
                          (f = Kt.makeVList(
                            {
                              positionType: "individualShift",
                              children: [
                                { type: "elem", elem: v, shift: p },
                                { type: "elem", elem: o, shift: -d },
                              ],
                            },
                            e,
                          ));
                      }
                      return (
                        (n = e.havingStyle(r)),
                        (f.height *= n.sizeMultiplier / e.sizeMultiplier),
                        (f.depth *= n.sizeMultiplier / e.sizeMultiplier),
                        (g =
                          r.size === w.DISPLAY.size
                            ? e.fontMetrics().delim1
                            : e.fontMetrics().delim2),
                        (y =
                          null == t.leftDelim
                            ? ve(e, ["mopen"])
                            : wn(t.leftDelim, g, !0, e.havingStyle(r), t.mode, [
                                "mopen",
                              ])),
                        (x = t.continued
                          ? Kt.makeSpan([])
                          : null == t.rightDelim
                            ? ve(e, ["mclose"])
                            : wn(t.rightDelim, g, !0, e.havingStyle(r), t.mode, [
                                "mclose",
                              ])),
                        Kt.makeSpan(
                          ["mord"].concat(n.sizingClasses(e)),
                          [y, Kt.makeSpan(["mfrac"], [f]), x],
                          e,
                        )
                      );
                    },
                    Xn = function (t, e) {
                      var n = new ze.MathNode("mfrac", [
                        qe(t.numer, e),
                        qe(t.denom, e),
                      ]);
                      if (t.hasBarLine) {
                        if (t.barSize) {
                          var r = Ht(t.barSize, e);
                          n.setAttribute("linethickness", r + "em");
                        }
                      } else n.setAttribute("linethickness", "0px");
                      var i = Gn(t.size, e.style);
                      if (i.size !== e.style.size) {
                        n = new ze.MathNode("mstyle", [n]);
                        var a = i.size === w.DISPLAY.size ? "true" : "false";
                        n.setAttribute("displaystyle", a),
                          n.setAttribute("scriptlevel", "0");
                      }
                      if (null != t.leftDelim || null != t.rightDelim) {
                        var o = [];
                        if (null != t.leftDelim) {
                          var s = new ze.MathNode("mo", [
                            new ze.TextNode(t.leftDelim.replace("\\", "")),
                          ]);
                          s.setAttribute("fence", "true"), o.push(s);
                        }
                        if ((o.push(n), null != t.rightDelim)) {
                          var l = new ze.MathNode("mo", [
                            new ze.TextNode(t.rightDelim.replace("\\", "")),
                          ]);
                          l.setAttribute("fence", "true"), o.push(l);
                        }
                        return Te(o);
                      }
                      return n;
                    };
                  oe({
                    type: "genfrac",
                    names: [
                      "\\cfrac",
                      "\\dfrac",
                      "\\frac",
                      "\\tfrac",
                      "\\dbinom",
                      "\\binom",
                      "\\tbinom",
                      "\\\\atopfrac",
                      "\\\\bracefrac",
                      "\\\\brackfrac",
                    ],
                    props: { numArgs: 2, greediness: 2 },
                    handler: function (t, e) {
                      var n,
                        r = t.parser,
                        i = t.funcName,
                        a = e[0],
                        o = e[1],
                        s = null,
                        l = null,
                        c = "auto";
                      switch (i) {
                        case "\\cfrac":
                        case "\\dfrac":
                        case "\\frac":
                        case "\\tfrac":
                          n = !0;
                          break;
                        case "\\\\atopfrac":
                          n = !1;
                          break;
                        case "\\dbinom":
                        case "\\binom":
                        case "\\tbinom":
                          (n = !1), (s = "("), (l = ")");
                          break;
                        case "\\\\bracefrac":
                          (n = !1), (s = "\\{"), (l = "\\}");
                          break;
                        case "\\\\brackfrac":
                          (n = !1), (s = "["), (l = "]");
                          break;
                        default:
                          throw new Error("Unrecognized genfrac command");
                      }
                      switch (i) {
                        case "\\cfrac":
                        case "\\dfrac":
                        case "\\dbinom":
                          c = "display";
                          break;
                        case "\\tfrac":
                        case "\\tbinom":
                          c = "text";
                      }
                      return {
                        type: "genfrac",
                        mode: r.mode,
                        continued: "\\cfrac" === i,
                        numer: a,
                        denom: o,
                        hasBarLine: n,
                        leftDelim: s,
                        rightDelim: l,
                        size: c,
                        barSize: null,
                      };
                    },
                    htmlBuilder: Wn,
                    mathmlBuilder: Xn,
                  }),
                    oe({
                      type: "infix",
                      names: [
                        "\\over",
                        "\\choose",
                        "\\atop",
                        "\\brace",
                        "\\brack",
                      ],
                      props: { numArgs: 0, infix: !0 },
                      handler: function (t) {
                        var e,
                          n = t.parser,
                          r = t.funcName,
                          i = t.token;
                        switch (r) {
                          case "\\over":
                            e = "\\frac";
                            break;
                          case "\\choose":
                            e = "\\binom";
                            break;
                          case "\\atop":
                            e = "\\\\atopfrac";
                            break;
                          case "\\brace":
                            e = "\\\\bracefrac";
                            break;
                          case "\\brack":
                            e = "\\\\brackfrac";
                            break;
                          default:
                            throw new Error("Unrecognized infix genfrac command");
                        }
                        return {
                          type: "infix",
                          mode: n.mode,
                          replaceWith: e,
                          token: i,
                        };
                      },
                    });
                  var Yn = ["display", "text", "script", "scriptscript"],
                    Zn = function (t) {
                      var e = null;
                      return t.length > 0 && (e = "." === (e = t) ? null : e), e;
                    };
                  oe({
                    type: "genfrac",
                    names: ["\\genfrac"],
                    props: {
                      numArgs: 6,
                      greediness: 6,
                      argTypes: ["math", "math", "size", "text", "math", "math"],
                    },
                    handler: function (t, e) {
                      var n,
                        r = t.parser,
                        i = e[4],
                        a = e[5],
                        o =
                          "atom" === e[0].type && "open" === e[0].family
                            ? Zn(e[0].text)
                            : null,
                        s =
                          "atom" === e[1].type && "close" === e[1].family
                            ? Zn(e[1].text)
                            : null,
                        l = De(e[2], "size"),
                        c = null;
                      n = !!l.isBlank || (c = l.value).number > 0;
                      var h = "auto",
                        u = e[3];
                      if ("ordgroup" === u.type) {
                        if (u.body.length > 0) {
                          var d = De(u.body[0], "textord");
                          h = Yn[Number(d.text)];
                        }
                      } else (u = De(u, "textord")), (h = Yn[Number(u.text)]);
                      return {
                        type: "genfrac",
                        mode: r.mode,
                        numer: i,
                        denom: a,
                        continued: !1,
                        hasBarLine: n,
                        barSize: c,
                        leftDelim: o,
                        rightDelim: s,
                        size: h,
                      };
                    },
                    htmlBuilder: Wn,
                    mathmlBuilder: Xn,
                  }),
                    oe({
                      type: "infix",
                      names: ["\\above"],
                      props: { numArgs: 1, argTypes: ["size"], infix: !0 },
                      handler: function (t, e) {
                        var n = t.parser;
                        t.funcName;
                        var r = t.token;
                        return {
                          type: "infix",
                          mode: n.mode,
                          replaceWith: "\\\\abovefrac",
                          size: De(e[0], "size").value,
                          token: r,
                        };
                      },
                    }),
                    oe({
                      type: "genfrac",
                      names: ["\\\\abovefrac"],
                      props: { numArgs: 3, argTypes: ["math", "size", "math"] },
                      handler: function (t, e) {
                        var n = t.parser;
                        t.funcName;
                        var r = e[0],
                          i = (function (t) {
                            if (!t)
                              throw new Error(
                                "Expected non-null, but got " + String(t),
                              );
                            return t;
                          })(De(e[1], "infix").size),
                          a = e[2],
                          o = i.number > 0;
                        return {
                          type: "genfrac",
                          mode: n.mode,
                          numer: r,
                          denom: a,
                          continued: !1,
                          hasBarLine: o,
                          barSize: i,
                          leftDelim: null,
                          rightDelim: null,
                          size: "auto",
                        };
                      },
                      htmlBuilder: Wn,
                      mathmlBuilder: Xn,
                    });
                  var Kn = function (t, e) {
                    var n,
                      r,
                      i = e.style;
                    "supsub" === t.type
                      ? ((n = t.sup
                          ? be(t.sup, e.havingStyle(i.sup()), e)
                          : be(t.sub, e.havingStyle(i.sub()), e)),
                        (r = De(t.base, "horizBrace")))
                      : (r = De(t, "horizBrace"));
                    var a,
                      o = be(r.base, e.havingBaseStyle(w.DISPLAY)),
                      s = He(r, e);
                    if (
                      (r.isOver
                        ? (a = Kt.makeVList(
                            {
                              positionType: "firstBaseline",
                              children: [
                                { type: "elem", elem: o },
                                { type: "kern", size: 0.1 },
                                { type: "elem", elem: s },
                              ],
                            },
                            e,
                          )).children[0].children[0].children[1].classes.push(
                            "svg-align",
                          )
                        : (a = Kt.makeVList(
                            {
                              positionType: "bottom",
                              positionData: o.depth + 0.1 + s.height,
                              children: [
                                { type: "elem", elem: s },
                                { type: "kern", size: 0.1 },
                                { type: "elem", elem: o },
                              ],
                            },
                            e,
                          )).children[0].children[0].children[0].classes.push(
                            "svg-align",
                          ),
                      n)
                    ) {
                      var l = Kt.makeSpan(
                        ["mord", r.isOver ? "mover" : "munder"],
                        [a],
                        e,
                      );
                      a = r.isOver
                        ? Kt.makeVList(
                            {
                              positionType: "firstBaseline",
                              children: [
                                { type: "elem", elem: l },
                                { type: "kern", size: 0.2 },
                                { type: "elem", elem: n },
                              ],
                            },
                            e,
                          )
                        : Kt.makeVList(
                            {
                              positionType: "bottom",
                              positionData: l.depth + 0.2 + n.height + n.depth,
                              children: [
                                { type: "elem", elem: n },
                                { type: "kern", size: 0.2 },
                                { type: "elem", elem: l },
                              ],
                            },
                            e,
                          );
                    }
                    return Kt.makeSpan(
                      ["mord", r.isOver ? "mover" : "munder"],
                      [a],
                      e,
                    );
                  };
                  oe({
                    type: "horizBrace",
                    names: ["\\overbrace", "\\underbrace"],
                    props: { numArgs: 1 },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName;
                      return {
                        type: "horizBrace",
                        mode: n.mode,
                        label: r,
                        isOver: /^\\over/.test(r),
                        base: e[0],
                      };
                    },
                    htmlBuilder: Kn,
                    mathmlBuilder: function (t, e) {
                      var n = Pe(t.label);
                      return new ze.MathNode(t.isOver ? "mover" : "munder", [
                        qe(t.base, e),
                        n,
                      ]);
                    },
                  }),
                    oe({
                      type: "href",
                      names: ["\\href"],
                      props: {
                        numArgs: 2,
                        argTypes: ["url", "original"],
                        allowedInText: !0,
                      },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[1],
                          i = De(e[0], "url").url;
                        return n.settings.isTrusted({ command: "\\href", url: i })
                          ? { type: "href", mode: n.mode, href: i, body: le(r) }
                          : n.formatUnsupportedCmd("\\href");
                      },
                      htmlBuilder: function (t, e) {
                        var n = pe(t.body, e, !1);
                        return Kt.makeAnchor(t.href, [], n, e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Ce(t.body, e);
                        return (
                          n instanceof Me || (n = new Me("mrow", [n])),
                          n.setAttribute("href", t.href),
                          n
                        );
                      },
                    }),
                    oe({
                      type: "href",
                      names: ["\\url"],
                      props: { numArgs: 1, argTypes: ["url"], allowedInText: !0 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = De(e[0], "url").url;
                        if (!n.settings.isTrusted({ command: "\\url", url: r }))
                          return n.formatUnsupportedCmd("\\url");
                        for (var i = [], a = 0; a < r.length; a++) {
                          var o = r[a];
                          "~" === o && (o = "\\textasciitilde"),
                            i.push({ type: "textord", mode: "text", text: o });
                        }
                        var s = {
                          type: "text",
                          mode: n.mode,
                          font: "\\texttt",
                          body: i,
                        };
                        return {
                          type: "href",
                          mode: n.mode,
                          href: r,
                          body: le(s),
                        };
                      },
                    }),
                    oe({
                      type: "html",
                      names: [
                        "\\htmlClass",
                        "\\htmlId",
                        "\\htmlStyle",
                        "\\htmlData",
                      ],
                      props: {
                        numArgs: 2,
                        argTypes: ["raw", "original"],
                        allowedInText: !0,
                      },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = t.funcName;
                        t.token;
                        var i,
                          a = De(e[0], "raw").string,
                          s = e[1];
                        n.settings.strict &&
                          n.settings.reportNonstrict(
                            "htmlExtension",
                            "HTML extension is disabled on strict mode",
                          );
                        var l = {};
                        switch (r) {
                          case "\\htmlClass":
                            (l.class = a),
                              (i = { command: "\\htmlClass", class: a });
                            break;
                          case "\\htmlId":
                            (l.id = a), (i = { command: "\\htmlId", id: a });
                            break;
                          case "\\htmlStyle":
                            (l.style = a),
                              (i = { command: "\\htmlStyle", style: a });
                            break;
                          case "\\htmlData":
                            for (var c = a.split(","), h = 0; h < c.length; h++) {
                              var u = c[h].split("=");
                              if (2 !== u.length)
                                throw new o(
                                  "Error parsing key-value for \\htmlData",
                                );
                              l["data-" + u[0].trim()] = u[1].trim();
                            }
                            i = { command: "\\htmlData", attributes: l };
                            break;
                          default:
                            throw new Error("Unrecognized html command");
                        }
                        return n.settings.isTrusted(i)
                          ? {
                              type: "html",
                              mode: n.mode,
                              attributes: l,
                              body: le(s),
                            }
                          : n.formatUnsupportedCmd(r);
                      },
                      htmlBuilder: function (t, e) {
                        var n = pe(t.body, e, !1),
                          r = ["enclosing"];
                        t.attributes.class &&
                          r.push.apply(r, t.attributes.class.trim().split(/\s+/));
                        var i = Kt.makeSpan(r, n, e);
                        for (var a in t.attributes)
                          "class" !== a &&
                            t.attributes.hasOwnProperty(a) &&
                            i.setAttribute(a, t.attributes[a]);
                        return i;
                      },
                      mathmlBuilder: function (t, e) {
                        return Ce(t.body, e);
                      },
                    }),
                    oe({
                      type: "htmlmathml",
                      names: ["\\html@mathml"],
                      props: { numArgs: 2, allowedInText: !0 },
                      handler: function (t, e) {
                        return {
                          type: "htmlmathml",
                          mode: t.parser.mode,
                          html: le(e[0]),
                          mathml: le(e[1]),
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n = pe(t.html, e, !1);
                        return Kt.makeFragment(n);
                      },
                      mathmlBuilder: function (t, e) {
                        return Ce(t.mathml, e);
                      },
                    });
                  var Jn = function (t) {
                    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(t))
                      return { number: +t, unit: "bp" };
                    var e = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t);
                    if (!e)
                      throw new o(
                        "Invalid size: '" + t + "' in \\includegraphics",
                      );
                    var n = { number: +(e[1] + e[2]), unit: e[3] };
                    if (!Pt(n))
                      throw new o(
                        "Invalid unit: '" + n.unit + "' in \\includegraphics.",
                      );
                    return n;
                  };
                  oe({
                    type: "includegraphics",
                    names: ["\\includegraphics"],
                    props: {
                      numArgs: 1,
                      numOptionalArgs: 1,
                      argTypes: ["raw", "url"],
                      allowedInText: !1,
                    },
                    handler: function (t, e, n) {
                      var r = t.parser,
                        i = { number: 0, unit: "em" },
                        a = { number: 0.9, unit: "em" },
                        s = { number: 0, unit: "em" },
                        l = "";
                      if (n[0])
                        for (
                          var c = De(n[0], "raw").string.split(","), h = 0;
                          h < c.length;
                          h++
                        ) {
                          var u = c[h].split("=");
                          if (2 === u.length) {
                            var d = u[1].trim();
                            switch (u[0].trim()) {
                              case "alt":
                                l = d;
                                break;
                              case "width":
                                i = Jn(d);
                                break;
                              case "height":
                                a = Jn(d);
                                break;
                              case "totalheight":
                                s = Jn(d);
                                break;
                              default:
                                throw new o(
                                  "Invalid key: '" +
                                    u[0] +
                                    "' in \\includegraphics.",
                                );
                            }
                          }
                        }
                      var m = De(e[0], "url").url;
                      return (
                        "" === l &&
                          (l = (l = (l = m).replace(/^.*[\\/]/, "")).substring(
                            0,
                            l.lastIndexOf("."),
                          )),
                        r.settings.isTrusted({
                          command: "\\includegraphics",
                          url: m,
                        })
                          ? {
                              type: "includegraphics",
                              mode: r.mode,
                              alt: l,
                              width: i,
                              height: a,
                              totalheight: s,
                              src: m,
                            }
                          : r.formatUnsupportedCmd("\\includegraphics")
                      );
                    },
                    htmlBuilder: function (t, e) {
                      var n = Ht(t.height, e),
                        r = 0;
                      t.totalheight.number > 0 &&
                        ((r = Ht(t.totalheight, e) - n),
                        (r = Number(r.toFixed(2))));
                      var i = 0;
                      t.width.number > 0 && (i = Ht(t.width, e));
                      var a = { height: n + r + "em" };
                      i > 0 && (a.width = i + "em"),
                        r > 0 && (a.verticalAlign = -r + "em");
                      var o = new L(t.src, t.alt, a);
                      return (o.height = n), (o.depth = r), o;
                    },
                    mathmlBuilder: function (t, e) {
                      var n = new ze.MathNode("mglyph", []);
                      n.setAttribute("alt", t.alt);
                      var r = Ht(t.height, e),
                        i = 0;
                      if (
                        (t.totalheight.number > 0 &&
                          ((i = (i = Ht(t.totalheight, e) - r).toFixed(2)),
                          n.setAttribute("valign", "-" + i + "em")),
                        n.setAttribute("height", r + i + "em"),
                        t.width.number > 0)
                      ) {
                        var a = Ht(t.width, e);
                        n.setAttribute("width", a + "em");
                      }
                      return n.setAttribute("src", t.src), n;
                    },
                  }),
                    oe({
                      type: "kern",
                      names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                      props: {
                        numArgs: 1,
                        argTypes: ["size"],
                        allowedInText: !0,
                      },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = t.funcName,
                          i = De(e[0], "size");
                        if (n.settings.strict) {
                          var a = "m" === r[1],
                            o = "mu" === i.value.unit;
                          a
                            ? (o ||
                                n.settings.reportNonstrict(
                                  "mathVsTextUnits",
                                  "LaTeX's " +
                                    r +
                                    " supports only mu units, not " +
                                    i.value.unit +
                                    " units",
                                ),
                              "math" !== n.mode &&
                                n.settings.reportNonstrict(
                                  "mathVsTextUnits",
                                  "LaTeX's " + r + " works only in math mode",
                                ))
                            : o &&
                              n.settings.reportNonstrict(
                                "mathVsTextUnits",
                                "LaTeX's " + r + " doesn't support mu units",
                              );
                        }
                        return { type: "kern", mode: n.mode, dimension: i.value };
                      },
                      htmlBuilder: function (t, e) {
                        return Kt.makeGlue(t.dimension, e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Ht(t.dimension, e);
                        return new ze.SpaceNode(n);
                      },
                    }),
                    oe({
                      type: "lap",
                      names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                      props: { numArgs: 1, allowedInText: !0 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = t.funcName,
                          i = e[0];
                        return {
                          type: "lap",
                          mode: n.mode,
                          alignment: r.slice(5),
                          body: i,
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n;
                        "clap" === t.alignment
                          ? ((n = Kt.makeSpan([], [be(t.body, e)])),
                            (n = Kt.makeSpan(["inner"], [n], e)))
                          : (n = Kt.makeSpan(["inner"], [be(t.body, e)]));
                        var r = Kt.makeSpan(["fix"], []),
                          i = Kt.makeSpan([t.alignment], [n, r], e),
                          a = Kt.makeSpan(["strut"]);
                        return (
                          (a.style.height = i.height + i.depth + "em"),
                          (a.style.verticalAlign = -i.depth + "em"),
                          i.children.unshift(a),
                          (i = Kt.makeSpan(["thinbox"], [i], e)),
                          Kt.makeSpan(["mord", "vbox"], [i], e)
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mpadded", [qe(t.body, e)]);
                        if ("rlap" !== t.alignment) {
                          var r = "llap" === t.alignment ? "-1" : "-0.5";
                          n.setAttribute("lspace", r + "width");
                        }
                        return n.setAttribute("width", "0px"), n;
                      },
                    }),
                    oe({
                      type: "styling",
                      names: ["\\(", "$"],
                      props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
                      handler: function (t, e) {
                        var n = t.funcName,
                          r = t.parser,
                          i = r.mode;
                        r.switchMode("math");
                        var a = "\\(" === n ? "\\)" : "$",
                          o = r.parseExpression(!1, a);
                        return (
                          r.expect(a),
                          r.switchMode(i),
                          {
                            type: "styling",
                            mode: r.mode,
                            style: "text",
                            body: o,
                          }
                        );
                      },
                    }),
                    oe({
                      type: "text",
                      names: ["\\)", "\\]"],
                      props: { numArgs: 0, allowedInText: !0, allowedInMath: !1 },
                      handler: function (t, e) {
                        throw new o("Mismatched " + t.funcName);
                      },
                    });
                  var Qn = function (t, e) {
                    switch (e.style.size) {
                      case w.DISPLAY.size:
                        return t.display;
                      case w.TEXT.size:
                        return t.text;
                      case w.SCRIPT.size:
                        return t.script;
                      case w.SCRIPTSCRIPT.size:
                        return t.scriptscript;
                      default:
                        return t.text;
                    }
                  };
                  oe({
                    type: "mathchoice",
                    names: ["\\mathchoice"],
                    props: { numArgs: 4 },
                    handler: function (t, e) {
                      return {
                        type: "mathchoice",
                        mode: t.parser.mode,
                        display: le(e[0]),
                        text: le(e[1]),
                        script: le(e[2]),
                        scriptscript: le(e[3]),
                      };
                    },
                    htmlBuilder: function (t, e) {
                      var n = Qn(t, e),
                        r = pe(n, e, !1);
                      return Kt.makeFragment(r);
                    },
                    mathmlBuilder: function (t, e) {
                      var n = Qn(t, e);
                      return Ce(n, e);
                    },
                  });
                  var tr = function (t, e, n, r, i, a, o) {
                      var s, l, c;
                      if (((t = Kt.makeSpan([], [t])), e)) {
                        var h = be(e, r.havingStyle(i.sup()), r);
                        l = {
                          elem: h,
                          kern: Math.max(
                            r.fontMetrics().bigOpSpacing1,
                            r.fontMetrics().bigOpSpacing3 - h.depth,
                          ),
                        };
                      }
                      if (n) {
                        var u = be(n, r.havingStyle(i.sub()), r);
                        s = {
                          elem: u,
                          kern: Math.max(
                            r.fontMetrics().bigOpSpacing2,
                            r.fontMetrics().bigOpSpacing4 - u.height,
                          ),
                        };
                      }
                      if (l && s) {
                        var d =
                          r.fontMetrics().bigOpSpacing5 +
                          s.elem.height +
                          s.elem.depth +
                          s.kern +
                          t.depth +
                          o;
                        c = Kt.makeVList(
                          {
                            positionType: "bottom",
                            positionData: d,
                            children: [
                              {
                                type: "kern",
                                size: r.fontMetrics().bigOpSpacing5,
                              },
                              {
                                type: "elem",
                                elem: s.elem,
                                marginLeft: -a + "em",
                              },
                              { type: "kern", size: s.kern },
                              { type: "elem", elem: t },
                              { type: "kern", size: l.kern },
                              {
                                type: "elem",
                                elem: l.elem,
                                marginLeft: a + "em",
                              },
                              {
                                type: "kern",
                                size: r.fontMetrics().bigOpSpacing5,
                              },
                            ],
                          },
                          r,
                        );
                      } else if (s) {
                        var m = t.height - o;
                        c = Kt.makeVList(
                          {
                            positionType: "top",
                            positionData: m,
                            children: [
                              {
                                type: "kern",
                                size: r.fontMetrics().bigOpSpacing5,
                              },
                              {
                                type: "elem",
                                elem: s.elem,
                                marginLeft: -a + "em",
                              },
                              { type: "kern", size: s.kern },
                              { type: "elem", elem: t },
                            ],
                          },
                          r,
                        );
                      } else {
                        if (!l) return t;
                        var p = t.depth + o;
                        c = Kt.makeVList(
                          {
                            positionType: "bottom",
                            positionData: p,
                            children: [
                              { type: "elem", elem: t },
                              { type: "kern", size: l.kern },
                              {
                                type: "elem",
                                elem: l.elem,
                                marginLeft: a + "em",
                              },
                              {
                                type: "kern",
                                size: r.fontMetrics().bigOpSpacing5,
                              },
                            ],
                          },
                          r,
                        );
                      }
                      return Kt.makeSpan(["mop", "op-limits"], [c], r);
                    },
                    er = ["\\smallint"],
                    nr = function (t, e) {
                      var n,
                        r,
                        i,
                        a = !1;
                      "supsub" === t.type
                        ? ((n = t.sup),
                          (r = t.sub),
                          (i = De(t.base, "op")),
                          (a = !0))
                        : (i = De(t, "op"));
                      var o,
                        s = e.style,
                        l = !1;
                      if (
                        (s.size === w.DISPLAY.size &&
                          i.symbol &&
                          !u.contains(er, i.name) &&
                          (l = !0),
                        i.symbol)
                      ) {
                        var c = l ? "Size2-Regular" : "Size1-Regular",
                          h = "";
                        if (
                          (("\\oiint" !== i.name && "\\oiiint" !== i.name) ||
                            ((h = i.name.substr(1)),
                            (i.name = "oiint" === h ? "\\iint" : "\\iiint")),
                          (o = Kt.makeSymbol(i.name, c, "math", e, [
                            "mop",
                            "op-symbol",
                            l ? "large-op" : "small-op",
                          ])),
                          h.length > 0)
                        ) {
                          var d = o.italic,
                            m = Kt.staticSvg(h + "Size" + (l ? "2" : "1"), e);
                          (o = Kt.makeVList(
                            {
                              positionType: "individualShift",
                              children: [
                                { type: "elem", elem: o, shift: 0 },
                                { type: "elem", elem: m, shift: l ? 0.08 : 0 },
                              ],
                            },
                            e,
                          )),
                            (i.name = "\\" + h),
                            o.classes.unshift("mop"),
                            (o.italic = d);
                        }
                      } else if (i.body) {
                        var p = pe(i.body, e, !0);
                        1 === p.length && p[0] instanceof I
                          ? ((o = p[0]).classes[0] = "mop")
                          : (o = Kt.makeSpan(["mop"], Kt.tryCombineChars(p), e));
                      } else {
                        for (var f = [], g = 1; g < i.name.length; g++)
                          f.push(Kt.mathsym(i.name[g], i.mode, e));
                        o = Kt.makeSpan(["mop"], f, e);
                      }
                      var y = 0,
                        x = 0;
                      return (
                        (o instanceof I ||
                          "\\oiint" === i.name ||
                          "\\oiiint" === i.name) &&
                          !i.suppressBaseShift &&
                          ((y =
                            (o.height - o.depth) / 2 -
                            e.fontMetrics().axisHeight),
                          (x = o.italic)),
                        a
                          ? tr(o, n, r, e, s, x, y)
                          : (y &&
                              ((o.style.position = "relative"),
                              (o.style.top = y + "em")),
                            o)
                      );
                    },
                    rr = function (t, e) {
                      var n;
                      if (t.symbol)
                        (n = new Me("mo", [Ae(t.name, t.mode)])),
                          u.contains(er, t.name) &&
                            n.setAttribute("largeop", "false");
                      else if (t.body) n = new Me("mo", Be(t.body, e));
                      else {
                        n = new Me("mi", [new Se(t.name.slice(1))]);
                        var r = new Me("mo", [Ae("⁡", "text")]);
                        n = t.parentIsSupSub ? new Me("mo", [n, r]) : $e([n, r]);
                      }
                      return n;
                    },
                    ir = {
                      "∏": "\\prod",
                      "∐": "\\coprod",
                      "∑": "\\sum",
                      "⋀": "\\bigwedge",
                      "⋁": "\\bigvee",
                      "⋂": "\\bigcap",
                      "⋃": "\\bigcup",
                      "⨀": "\\bigodot",
                      "⨁": "\\bigoplus",
                      "⨂": "\\bigotimes",
                      "⨄": "\\biguplus",
                      "⨆": "\\bigsqcup",
                    };
                  oe({
                    type: "op",
                    names: [
                      "\\coprod",
                      "\\bigvee",
                      "\\bigwedge",
                      "\\biguplus",
                      "\\bigcap",
                      "\\bigcup",
                      "\\intop",
                      "\\prod",
                      "\\sum",
                      "\\bigotimes",
                      "\\bigoplus",
                      "\\bigodot",
                      "\\bigsqcup",
                      "\\smallint",
                      "∏",
                      "∐",
                      "∑",
                      "⋀",
                      "⋁",
                      "⋂",
                      "⋃",
                      "⨀",
                      "⨁",
                      "⨂",
                      "⨄",
                      "⨆",
                    ],
                    props: { numArgs: 0 },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName;
                      return (
                        1 === r.length && (r = ir[r]),
                        {
                          type: "op",
                          mode: n.mode,
                          limits: !0,
                          parentIsSupSub: !1,
                          symbol: !0,
                          name: r,
                        }
                      );
                    },
                    htmlBuilder: nr,
                    mathmlBuilder: rr,
                  }),
                    oe({
                      type: "op",
                      names: ["\\mathop"],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[0];
                        return {
                          type: "op",
                          mode: n.mode,
                          limits: !1,
                          parentIsSupSub: !1,
                          symbol: !1,
                          body: le(r),
                        };
                      },
                      htmlBuilder: nr,
                      mathmlBuilder: rr,
                    });
                  var ar = {
                    "∫": "\\int",
                    "∬": "\\iint",
                    "∭": "\\iiint",
                    "∮": "\\oint",
                    "∯": "\\oiint",
                    "∰": "\\oiiint",
                  };
                  oe({
                    type: "op",
                    names: [
                      "\\arcsin",
                      "\\arccos",
                      "\\arctan",
                      "\\arctg",
                      "\\arcctg",
                      "\\arg",
                      "\\ch",
                      "\\cos",
                      "\\cosec",
                      "\\cosh",
                      "\\cot",
                      "\\cotg",
                      "\\coth",
                      "\\csc",
                      "\\ctg",
                      "\\cth",
                      "\\deg",
                      "\\dim",
                      "\\exp",
                      "\\hom",
                      "\\ker",
                      "\\lg",
                      "\\ln",
                      "\\log",
                      "\\sec",
                      "\\sin",
                      "\\sinh",
                      "\\sh",
                      "\\tan",
                      "\\tanh",
                      "\\tg",
                      "\\th",
                    ],
                    props: { numArgs: 0 },
                    handler: function (t) {
                      var e = t.parser,
                        n = t.funcName;
                      return {
                        type: "op",
                        mode: e.mode,
                        limits: !1,
                        parentIsSupSub: !1,
                        symbol: !1,
                        name: n,
                      };
                    },
                    htmlBuilder: nr,
                    mathmlBuilder: rr,
                  }),
                    oe({
                      type: "op",
                      names: [
                        "\\det",
                        "\\gcd",
                        "\\inf",
                        "\\lim",
                        "\\max",
                        "\\min",
                        "\\Pr",
                        "\\sup",
                      ],
                      props: { numArgs: 0 },
                      handler: function (t) {
                        var e = t.parser,
                          n = t.funcName;
                        return {
                          type: "op",
                          mode: e.mode,
                          limits: !0,
                          parentIsSupSub: !1,
                          symbol: !1,
                          name: n,
                        };
                      },
                      htmlBuilder: nr,
                      mathmlBuilder: rr,
                    }),
                    oe({
                      type: "op",
                      names: [
                        "\\int",
                        "\\iint",
                        "\\iiint",
                        "\\oint",
                        "\\oiint",
                        "\\oiiint",
                        "∫",
                        "∬",
                        "∭",
                        "∮",
                        "∯",
                        "∰",
                      ],
                      props: { numArgs: 0 },
                      handler: function (t) {
                        var e = t.parser,
                          n = t.funcName;
                        return (
                          1 === n.length && (n = ar[n]),
                          {
                            type: "op",
                            mode: e.mode,
                            limits: !1,
                            parentIsSupSub: !1,
                            symbol: !0,
                            name: n,
                          }
                        );
                      },
                      htmlBuilder: nr,
                      mathmlBuilder: rr,
                    });
                  var or = function (t, e) {
                    var n,
                      r,
                      i,
                      a,
                      o = !1;
                    if (
                      ("supsub" === t.type
                        ? ((n = t.sup),
                          (r = t.sub),
                          (i = De(t.base, "operatorname")),
                          (o = !0))
                        : (i = De(t, "operatorname")),
                      i.body.length > 0)
                    ) {
                      for (
                        var s = i.body.map(function (t) {
                            var e = t.text;
                            return "string" == typeof e
                              ? { type: "textord", mode: t.mode, text: e }
                              : t;
                          }),
                          l = pe(s, e.withFont("mathrm"), !0),
                          c = 0;
                        c < l.length;
                        c++
                      ) {
                        var h = l[c];
                        h instanceof I &&
                          (h.text = h.text
                            .replace(/\u2212/, "-")
                            .replace(/\u2217/, "*"));
                      }
                      a = Kt.makeSpan(["mop"], l, e);
                    } else a = Kt.makeSpan(["mop"], [], e);
                    return o ? tr(a, n, r, e, e.style, 0, 0) : a;
                  };
                  function sr(t, e, n) {
                    for (
                      var r = pe(t, e, !1),
                        i = e.sizeMultiplier / n.sizeMultiplier,
                        a = 0;
                      a < r.length;
                      a++
                    ) {
                      var o = r[a].classes.indexOf("sizing");
                      o < 0
                        ? Array.prototype.push.apply(
                            r[a].classes,
                            e.sizingClasses(n),
                          )
                        : r[a].classes[o + 1] === "reset-size" + e.size &&
                          (r[a].classes[o + 1] = "reset-size" + n.size),
                        (r[a].height *= i),
                        (r[a].depth *= i);
                    }
                    return Kt.makeFragment(r);
                  }
                  oe({
                    type: "operatorname",
                    names: ["\\operatorname", "\\operatorname*"],
                    props: { numArgs: 1 },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName,
                        i = e[0];
                      return {
                        type: "operatorname",
                        mode: n.mode,
                        body: le(i),
                        alwaysHandleSupSub: "\\operatorname*" === r,
                        limits: !1,
                        parentIsSupSub: !1,
                      };
                    },
                    htmlBuilder: or,
                    mathmlBuilder: function (t, e) {
                      for (
                        var n = Be(t.body, e.withFont("mathrm")), r = !0, i = 0;
                        i < n.length;
                        i++
                      ) {
                        var a = n[i];
                        if (a instanceof ze.SpaceNode);
                        else if (a instanceof ze.MathNode)
                          switch (a.type) {
                            case "mi":
                            case "mn":
                            case "ms":
                            case "mspace":
                            case "mtext":
                              break;
                            case "mo":
                              var o = a.children[0];
                              1 === a.children.length && o instanceof ze.TextNode
                                ? (o.text = o.text
                                    .replace(/\u2212/, "-")
                                    .replace(/\u2217/, "*"))
                                : (r = !1);
                              break;
                            default:
                              r = !1;
                          }
                        else r = !1;
                      }
                      if (r) {
                        var s = n
                          .map(function (t) {
                            return t.toText();
                          })
                          .join("");
                        n = [new ze.TextNode(s)];
                      }
                      var l = new ze.MathNode("mi", n);
                      l.setAttribute("mathvariant", "normal");
                      var c = new ze.MathNode("mo", [Ae("⁡", "text")]);
                      return t.parentIsSupSub
                        ? new ze.MathNode("mo", [l, c])
                        : ze.newDocumentFragment([l, c]);
                    },
                  }),
                    se({
                      type: "ordgroup",
                      htmlBuilder: function (t, e) {
                        return t.semisimple
                          ? Kt.makeFragment(pe(t.body, e, !1))
                          : Kt.makeSpan(["mord"], pe(t.body, e, !0), e);
                      },
                      mathmlBuilder: function (t, e) {
                        return Ce(t.body, e, !0);
                      },
                    }),
                    oe({
                      type: "overline",
                      names: ["\\overline"],
                      props: { numArgs: 1 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[0];
                        return { type: "overline", mode: n.mode, body: r };
                      },
                      htmlBuilder: function (t, e) {
                        var n = be(t.body, e.havingCrampedStyle()),
                          r = Kt.makeLineSpan("overline-line", e),
                          i = e.fontMetrics().defaultRuleThickness,
                          a = Kt.makeVList(
                            {
                              positionType: "firstBaseline",
                              children: [
                                { type: "elem", elem: n },
                                { type: "kern", size: 3 * i },
                                { type: "elem", elem: r },
                                { type: "kern", size: i },
                              ],
                            },
                            e,
                          );
                        return Kt.makeSpan(["mord", "overline"], [a], e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mo", [new ze.TextNode("‾")]);
                        n.setAttribute("stretchy", "true");
                        var r = new ze.MathNode("mover", [qe(t.body, e), n]);
                        return r.setAttribute("accent", "true"), r;
                      },
                    }),
                    oe({
                      type: "phantom",
                      names: ["\\phantom"],
                      props: { numArgs: 1, allowedInText: !0 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[0];
                        return { type: "phantom", mode: n.mode, body: le(r) };
                      },
                      htmlBuilder: function (t, e) {
                        var n = pe(t.body, e.withPhantom(), !1);
                        return Kt.makeFragment(n);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Be(t.body, e);
                        return new ze.MathNode("mphantom", n);
                      },
                    }),
                    oe({
                      type: "hphantom",
                      names: ["\\hphantom"],
                      props: { numArgs: 1, allowedInText: !0 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[0];
                        return { type: "hphantom", mode: n.mode, body: r };
                      },
                      htmlBuilder: function (t, e) {
                        var n = Kt.makeSpan([], [be(t.body, e.withPhantom())]);
                        if (((n.height = 0), (n.depth = 0), n.children))
                          for (var r = 0; r < n.children.length; r++)
                            (n.children[r].height = 0), (n.children[r].depth = 0);
                        return (
                          (n = Kt.makeVList(
                            {
                              positionType: "firstBaseline",
                              children: [{ type: "elem", elem: n }],
                            },
                            e,
                          )),
                          Kt.makeSpan(["mord"], [n], e)
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Be(le(t.body), e),
                          r = new ze.MathNode("mphantom", n),
                          i = new ze.MathNode("mpadded", [r]);
                        return (
                          i.setAttribute("height", "0px"),
                          i.setAttribute("depth", "0px"),
                          i
                        );
                      },
                    }),
                    oe({
                      type: "vphantom",
                      names: ["\\vphantom"],
                      props: { numArgs: 1, allowedInText: !0 },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = e[0];
                        return { type: "vphantom", mode: n.mode, body: r };
                      },
                      htmlBuilder: function (t, e) {
                        var n = Kt.makeSpan(
                            ["inner"],
                            [be(t.body, e.withPhantom())],
                          ),
                          r = Kt.makeSpan(["fix"], []);
                        return Kt.makeSpan(["mord", "rlap"], [n, r], e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Be(le(t.body), e),
                          r = new ze.MathNode("mphantom", n),
                          i = new ze.MathNode("mpadded", [r]);
                        return i.setAttribute("width", "0px"), i;
                      },
                    }),
                    oe({
                      type: "raisebox",
                      names: ["\\raisebox"],
                      props: {
                        numArgs: 2,
                        argTypes: ["size", "hbox"],
                        allowedInText: !0,
                      },
                      handler: function (t, e) {
                        var n = t.parser,
                          r = De(e[0], "size").value,
                          i = e[1];
                        return { type: "raisebox", mode: n.mode, dy: r, body: i };
                      },
                      htmlBuilder: function (t, e) {
                        var n = be(t.body, e),
                          r = Ht(t.dy, e);
                        return Kt.makeVList(
                          {
                            positionType: "shift",
                            positionData: -r,
                            children: [{ type: "elem", elem: n }],
                          },
                          e,
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mpadded", [qe(t.body, e)]),
                          r = t.dy.number + t.dy.unit;
                        return n.setAttribute("voffset", r), n;
                      },
                    }),
                    oe({
                      type: "rule",
                      names: ["\\rule"],
                      props: {
                        numArgs: 2,
                        numOptionalArgs: 1,
                        argTypes: ["size", "size", "size"],
                      },
                      handler: function (t, e, n) {
                        var r = t.parser,
                          i = n[0],
                          a = De(e[0], "size"),
                          o = De(e[1], "size");
                        return {
                          type: "rule",
                          mode: r.mode,
                          shift: i && De(i, "size").value,
                          width: a.value,
                          height: o.value,
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n = Kt.makeSpan(["mord", "rule"], [], e),
                          r = Ht(t.width, e),
                          i = Ht(t.height, e),
                          a = t.shift ? Ht(t.shift, e) : 0;
                        return (
                          (n.style.borderRightWidth = r + "em"),
                          (n.style.borderTopWidth = i + "em"),
                          (n.style.bottom = a + "em"),
                          (n.width = r),
                          (n.height = i + a),
                          (n.depth = -a),
                          (n.maxFontSize = 1.125 * i * e.sizeMultiplier),
                          n
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n = Ht(t.width, e),
                          r = Ht(t.height, e),
                          i = t.shift ? Ht(t.shift, e) : 0,
                          a = (e.color && e.getColor()) || "black",
                          o = new ze.MathNode("mspace");
                        o.setAttribute("mathbackground", a),
                          o.setAttribute("width", n + "em"),
                          o.setAttribute("height", r + "em");
                        var s = new ze.MathNode("mpadded", [o]);
                        return (
                          i >= 0
                            ? s.setAttribute("height", "+" + i + "em")
                            : (s.setAttribute("height", i + "em"),
                              s.setAttribute("depth", "+" + -i + "em")),
                          s.setAttribute("voffset", i + "em"),
                          s
                        );
                      },
                    });
                  var lr = [
                    "\\tiny",
                    "\\sixptsize",
                    "\\scriptsize",
                    "\\footnotesize",
                    "\\small",
                    "\\normalsize",
                    "\\large",
                    "\\Large",
                    "\\LARGE",
                    "\\huge",
                    "\\Huge",
                  ];
                  oe({
                    type: "sizing",
                    names: lr,
                    props: { numArgs: 0, allowedInText: !0 },
                    handler: function (t, e) {
                      var n = t.breakOnTokenText,
                        r = t.funcName,
                        i = t.parser,
                        a = i.parseExpression(!1, n);
                      return {
                        type: "sizing",
                        mode: i.mode,
                        size: lr.indexOf(r) + 1,
                        body: a,
                      };
                    },
                    htmlBuilder: function (t, e) {
                      var n = e.havingSize(t.size);
                      return sr(t.body, n, e);
                    },
                    mathmlBuilder: function (t, e) {
                      var n = e.havingSize(t.size),
                        r = Be(t.body, n),
                        i = new ze.MathNode("mstyle", r);
                      return (
                        i.setAttribute("mathsize", n.sizeMultiplier + "em"), i
                      );
                    },
                  }),
                    oe({
                      type: "smash",
                      names: ["\\smash"],
                      props: {
                        numArgs: 1,
                        numOptionalArgs: 1,
                        allowedInText: !0,
                      },
                      handler: function (t, e, n) {
                        var r = t.parser,
                          i = !1,
                          a = !1,
                          o = n[0] && De(n[0], "ordgroup");
                        if (o)
                          for (var s = "", l = 0; l < o.body.length; ++l)
                            if ("t" === (s = o.body[l].text)) i = !0;
                            else {
                              if ("b" !== s) {
                                (i = !1), (a = !1);
                                break;
                              }
                              a = !0;
                            }
                        else (i = !0), (a = !0);
                        var c = e[0];
                        return {
                          type: "smash",
                          mode: r.mode,
                          body: c,
                          smashHeight: i,
                          smashDepth: a,
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n = Kt.makeSpan([], [be(t.body, e)]);
                        if (!t.smashHeight && !t.smashDepth) return n;
                        if (t.smashHeight && ((n.height = 0), n.children))
                          for (var r = 0; r < n.children.length; r++)
                            n.children[r].height = 0;
                        if (t.smashDepth && ((n.depth = 0), n.children))
                          for (var i = 0; i < n.children.length; i++)
                            n.children[i].depth = 0;
                        var a = Kt.makeVList(
                          {
                            positionType: "firstBaseline",
                            children: [{ type: "elem", elem: n }],
                          },
                          e,
                        );
                        return Kt.makeSpan(["mord"], [a], e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mpadded", [qe(t.body, e)]);
                        return (
                          t.smashHeight && n.setAttribute("height", "0px"),
                          t.smashDepth && n.setAttribute("depth", "0px"),
                          n
                        );
                      },
                    }),
                    oe({
                      type: "sqrt",
                      names: ["\\sqrt"],
                      props: { numArgs: 1, numOptionalArgs: 1 },
                      handler: function (t, e, n) {
                        var r = t.parser,
                          i = n[0],
                          a = e[0];
                        return { type: "sqrt", mode: r.mode, body: a, index: i };
                      },
                      htmlBuilder: function (t, e) {
                        var n = be(t.body, e.havingCrampedStyle());
                        0 === n.height && (n.height = e.fontMetrics().xHeight),
                          (n = Kt.wrapFragment(n, e));
                        var r = e.fontMetrics().defaultRuleThickness,
                          i = r;
                        e.style.id < w.TEXT.id && (i = e.fontMetrics().xHeight);
                        var a = r + i / 4,
                          o = n.height + n.depth + a + r,
                          s = vn(o, e),
                          l = s.span,
                          c = s.ruleWidth,
                          h = s.advanceWidth,
                          u = l.height - c;
                        u > n.height + n.depth + a &&
                          (a = (a + u - n.height - n.depth) / 2);
                        var d = l.height - n.height - a - c;
                        n.style.paddingLeft = h + "em";
                        var m = Kt.makeVList(
                          {
                            positionType: "firstBaseline",
                            children: [
                              {
                                type: "elem",
                                elem: n,
                                wrapperClasses: ["svg-align"],
                              },
                              { type: "kern", size: -(n.height + d) },
                              { type: "elem", elem: l },
                              { type: "kern", size: c },
                            ],
                          },
                          e,
                        );
                        if (t.index) {
                          var p = e.havingStyle(w.SCRIPTSCRIPT),
                            f = be(t.index, p, e),
                            g = 0.6 * (m.height - m.depth),
                            y = Kt.makeVList(
                              {
                                positionType: "shift",
                                positionData: -g,
                                children: [{ type: "elem", elem: f }],
                              },
                              e,
                            ),
                            x = Kt.makeSpan(["root"], [y]);
                          return Kt.makeSpan(["mord", "sqrt"], [x, m], e);
                        }
                        return Kt.makeSpan(["mord", "sqrt"], [m], e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = t.body,
                          r = t.index;
                        return r
                          ? new ze.MathNode("mroot", [qe(n, e), qe(r, e)])
                          : new ze.MathNode("msqrt", [qe(n, e)]);
                      },
                    });
                  var cr = {
                    display: w.DISPLAY,
                    text: w.TEXT,
                    script: w.SCRIPT,
                    scriptscript: w.SCRIPTSCRIPT,
                  };
                  oe({
                    type: "styling",
                    names: [
                      "\\displaystyle",
                      "\\textstyle",
                      "\\scriptstyle",
                      "\\scriptscriptstyle",
                    ],
                    props: { numArgs: 0, allowedInText: !0 },
                    handler: function (t, e) {
                      var n = t.breakOnTokenText,
                        r = t.funcName,
                        i = t.parser,
                        a = i.parseExpression(!0, n),
                        o = r.slice(1, r.length - 5);
                      return { type: "styling", mode: i.mode, style: o, body: a };
                    },
                    htmlBuilder: function (t, e) {
                      var n = cr[t.style],
                        r = e.havingStyle(n).withFont("");
                      return sr(t.body, r, e);
                    },
                    mathmlBuilder: function (t, e) {
                      var n = cr[t.style],
                        r = e.havingStyle(n),
                        i = Be(t.body, r),
                        a = new ze.MathNode("mstyle", i),
                        o = {
                          display: ["0", "true"],
                          text: ["0", "false"],
                          script: ["1", "false"],
                          scriptscript: ["2", "false"],
                        }[t.style];
                      return (
                        a.setAttribute("scriptlevel", o[0]),
                        a.setAttribute("displaystyle", o[1]),
                        a
                      );
                    },
                  }),
                    se({
                      type: "supsub",
                      htmlBuilder: function (t, e) {
                        var n = (function (t, e) {
                          var n = t.base;
                          return n
                            ? "op" === n.type
                              ? n.limits &&
                                (e.style.size === w.DISPLAY.size ||
                                  n.alwaysHandleSupSub)
                                ? nr
                                : null
                              : "operatorname" === n.type
                                ? n.alwaysHandleSupSub &&
                                  (e.style.size === w.DISPLAY.size || n.limits)
                                  ? or
                                  : null
                                : "accent" === n.type
                                  ? u.isCharacterBox(n.base)
                                    ? Ve
                                    : null
                                  : "horizBrace" === n.type && !t.sub === n.isOver
                                    ? Kn
                                    : null
                            : null;
                        })(t, e);
                        if (n) return n(t, e);
                        var r,
                          i,
                          a,
                          o = t.base,
                          s = t.sup,
                          l = t.sub,
                          c = be(o, e),
                          h = e.fontMetrics(),
                          d = 0,
                          m = 0,
                          p = o && u.isCharacterBox(o);
                        if (s) {
                          var f = e.havingStyle(e.style.sup());
                          (r = be(s, f, e)),
                            p ||
                              (d =
                                c.height -
                                (f.fontMetrics().supDrop * f.sizeMultiplier) /
                                  e.sizeMultiplier);
                        }
                        if (l) {
                          var g = e.havingStyle(e.style.sub());
                          (i = be(l, g, e)),
                            p ||
                              (m =
                                c.depth +
                                (g.fontMetrics().subDrop * g.sizeMultiplier) /
                                  e.sizeMultiplier);
                        }
                        a =
                          e.style === w.DISPLAY
                            ? h.sup1
                            : e.style.cramped
                              ? h.sup3
                              : h.sup2;
                        var y,
                          x = e.sizeMultiplier,
                          v = 0.5 / h.ptPerEm / x + "em",
                          b = null;
                        if (i) {
                          var k =
                            t.base &&
                            "op" === t.base.type &&
                            t.base.name &&
                            ("\\oiint" === t.base.name ||
                              "\\oiiint" === t.base.name);
                          (c instanceof I || k) && (b = -c.italic + "em");
                        }
                        if (r && i) {
                          (d = Math.max(d, a, r.depth + 0.25 * h.xHeight)),
                            (m = Math.max(m, h.sub2));
                          var $ = 4 * h.defaultRuleThickness;
                          if (d - r.depth - (i.height - m) < $) {
                            m = $ - (d - r.depth) + i.height;
                            var M = 0.8 * h.xHeight - (d - r.depth);
                            M > 0 && ((d += M), (m -= M));
                          }
                          var S = [
                            {
                              type: "elem",
                              elem: i,
                              shift: m,
                              marginRight: v,
                              marginLeft: b,
                            },
                            { type: "elem", elem: r, shift: -d, marginRight: v },
                          ];
                          y = Kt.makeVList(
                            { positionType: "individualShift", children: S },
                            e,
                          );
                        } else if (i) {
                          m = Math.max(m, h.sub1, i.height - 0.8 * h.xHeight);
                          var z = [
                            {
                              type: "elem",
                              elem: i,
                              marginLeft: b,
                              marginRight: v,
                            },
                          ];
                          y = Kt.makeVList(
                            {
                              positionType: "shift",
                              positionData: m,
                              children: z,
                            },
                            e,
                          );
                        } else {
                          if (!r)
                            throw new Error(
                              "supsub must have either sup or sub.",
                            );
                          (d = Math.max(d, a, r.depth + 0.25 * h.xHeight)),
                            (y = Kt.makeVList(
                              {
                                positionType: "shift",
                                positionData: -d,
                                children: [
                                  { type: "elem", elem: r, marginRight: v },
                                ],
                              },
                              e,
                            ));
                        }
                        var A = xe(c, "right") || "mord";
                        return Kt.makeSpan(
                          [A],
                          [c, Kt.makeSpan(["msupsub"], [y])],
                          e,
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n,
                          r = !1;
                        t.base &&
                          "horizBrace" === t.base.type &&
                          !!t.sup === t.base.isOver &&
                          ((r = !0), (n = t.base.isOver)),
                          !t.base ||
                            ("op" !== t.base.type &&
                              "operatorname" !== t.base.type) ||
                            (t.base.parentIsSupSub = !0);
                        var i,
                          a = [qe(t.base, e)];
                        if (
                          (t.sub && a.push(qe(t.sub, e)),
                          t.sup && a.push(qe(t.sup, e)),
                          r)
                        )
                          i = n ? "mover" : "munder";
                        else if (t.sub)
                          if (t.sup) {
                            var o = t.base;
                            i =
                              (o &&
                                "op" === o.type &&
                                o.limits &&
                                e.style === w.DISPLAY) ||
                              (o &&
                                "operatorname" === o.type &&
                                o.alwaysHandleSupSub &&
                                (e.style === w.DISPLAY || o.limits))
                                ? "munderover"
                                : "msubsup";
                          } else {
                            var s = t.base;
                            i =
                              (s &&
                                "op" === s.type &&
                                s.limits &&
                                (e.style === w.DISPLAY ||
                                  s.alwaysHandleSupSub)) ||
                              (s &&
                                "operatorname" === s.type &&
                                s.alwaysHandleSupSub &&
                                (s.limits || e.style === w.DISPLAY))
                                ? "munder"
                                : "msub";
                          }
                        else {
                          var l = t.base;
                          i =
                            (l &&
                              "op" === l.type &&
                              l.limits &&
                              (e.style === w.DISPLAY || l.alwaysHandleSupSub)) ||
                            (l &&
                              "operatorname" === l.type &&
                              l.alwaysHandleSupSub &&
                              (l.limits || e.style === w.DISPLAY))
                              ? "mover"
                              : "msup";
                        }
                        return new ze.MathNode(i, a);
                      },
                    }),
                    se({
                      type: "atom",
                      htmlBuilder: function (t, e) {
                        return Kt.mathsym(t.text, t.mode, e, ["m" + t.family]);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mo", [Ae(t.text, t.mode)]);
                        if ("bin" === t.family) {
                          var r = Ne(t, e);
                          "bold-italic" === r && n.setAttribute("mathvariant", r);
                        } else
                          "punct" === t.family
                            ? n.setAttribute("separator", "true")
                            : ("open" !== t.family && "close" !== t.family) ||
                              n.setAttribute("stretchy", "false");
                        return n;
                      },
                    });
                  var hr = { mi: "italic", mn: "normal", mtext: "normal" };
                  se({
                    type: "mathord",
                    htmlBuilder: function (t, e) {
                      return Kt.makeOrd(t, e, "mathord");
                    },
                    mathmlBuilder: function (t, e) {
                      var n = new ze.MathNode("mi", [Ae(t.text, t.mode, e)]),
                        r = Ne(t, e) || "italic";
                      return (
                        r !== hr[n.type] && n.setAttribute("mathvariant", r), n
                      );
                    },
                  }),
                    se({
                      type: "textord",
                      htmlBuilder: function (t, e) {
                        return Kt.makeOrd(t, e, "textord");
                      },
                      mathmlBuilder: function (t, e) {
                        var n,
                          r = Ae(t.text, t.mode, e),
                          i = Ne(t, e) || "normal";
                        return (
                          (n =
                            "text" === t.mode
                              ? new ze.MathNode("mtext", [r])
                              : /[0-9]/.test(t.text)
                                ? new ze.MathNode("mn", [r])
                                : "\\prime" === t.text
                                  ? new ze.MathNode("mo", [r])
                                  : new ze.MathNode("mi", [r])),
                          i !== hr[n.type] && n.setAttribute("mathvariant", i),
                          n
                        );
                      },
                    });
                  var ur = {
                      "\\nobreak": "nobreak",
                      "\\allowbreak": "allowbreak",
                    },
                    dr = {
                      " ": {},
                      "\\ ": {},
                      "~": { className: "nobreak" },
                      "\\space": {},
                      "\\nobreakspace": { className: "nobreak" },
                    };
                  se({
                    type: "spacing",
                    htmlBuilder: function (t, e) {
                      if (dr.hasOwnProperty(t.text)) {
                        var n = dr[t.text].className || "";
                        if ("text" === t.mode) {
                          var r = Kt.makeOrd(t, e, "textord");
                          return r.classes.push(n), r;
                        }
                        return Kt.makeSpan(
                          ["mspace", n],
                          [Kt.mathsym(t.text, t.mode, e)],
                          e,
                        );
                      }
                      if (ur.hasOwnProperty(t.text))
                        return Kt.makeSpan(["mspace", ur[t.text]], [], e);
                      throw new o('Unknown type of space "' + t.text + '"');
                    },
                    mathmlBuilder: function (t, e) {
                      if (!dr.hasOwnProperty(t.text)) {
                        if (ur.hasOwnProperty(t.text))
                          return new ze.MathNode("mspace");
                        throw new o('Unknown type of space "' + t.text + '"');
                      }
                      return new ze.MathNode("mtext", [new ze.TextNode(" ")]);
                    },
                  });
                  var mr = function () {
                    var t = new ze.MathNode("mtd", []);
                    return t.setAttribute("width", "50%"), t;
                  };
                  se({
                    type: "tag",
                    mathmlBuilder: function (t, e) {
                      var n = new ze.MathNode("mtable", [
                        new ze.MathNode("mtr", [
                          mr(),
                          new ze.MathNode("mtd", [Ce(t.body, e)]),
                          mr(),
                          new ze.MathNode("mtd", [Ce(t.tag, e)]),
                        ]),
                      ]);
                      return n.setAttribute("width", "100%"), n;
                    },
                  });
                  var pr = {
                      "\\text": void 0,
                      "\\textrm": "textrm",
                      "\\textsf": "textsf",
                      "\\texttt": "texttt",
                      "\\textnormal": "textrm",
                    },
                    fr = { "\\textbf": "textbf", "\\textmd": "textmd" },
                    gr = { "\\textit": "textit", "\\textup": "textup" },
                    yr = function (t, e) {
                      var n = t.font;
                      return n
                        ? pr[n]
                          ? e.withTextFontFamily(pr[n])
                          : fr[n]
                            ? e.withTextFontWeight(fr[n])
                            : e.withTextFontShape(gr[n])
                        : e;
                    };
                  oe({
                    type: "text",
                    names: [
                      "\\text",
                      "\\textrm",
                      "\\textsf",
                      "\\texttt",
                      "\\textnormal",
                      "\\textbf",
                      "\\textmd",
                      "\\textit",
                      "\\textup",
                    ],
                    props: {
                      numArgs: 1,
                      argTypes: ["text"],
                      greediness: 2,
                      allowedInText: !0,
                    },
                    handler: function (t, e) {
                      var n = t.parser,
                        r = t.funcName,
                        i = e[0];
                      return { type: "text", mode: n.mode, body: le(i), font: r };
                    },
                    htmlBuilder: function (t, e) {
                      var n = yr(t, e),
                        r = pe(t.body, n, !0);
                      return Kt.makeSpan(
                        ["mord", "text"],
                        Kt.tryCombineChars(r),
                        n,
                      );
                    },
                    mathmlBuilder: function (t, e) {
                      var n = yr(t, e);
                      return Ce(t.body, n);
                    },
                  }),
                    oe({
                      type: "underline",
                      names: ["\\underline"],
                      props: { numArgs: 1, allowedInText: !0 },
                      handler: function (t, e) {
                        return {
                          type: "underline",
                          mode: t.parser.mode,
                          body: e[0],
                        };
                      },
                      htmlBuilder: function (t, e) {
                        var n = be(t.body, e),
                          r = Kt.makeLineSpan("underline-line", e),
                          i = e.fontMetrics().defaultRuleThickness,
                          a = Kt.makeVList(
                            {
                              positionType: "top",
                              positionData: n.height,
                              children: [
                                { type: "kern", size: i },
                                { type: "elem", elem: r },
                                { type: "kern", size: 3 * i },
                                { type: "elem", elem: n },
                              ],
                            },
                            e,
                          );
                        return Kt.makeSpan(["mord", "underline"], [a], e);
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.MathNode("mo", [new ze.TextNode("‾")]);
                        n.setAttribute("stretchy", "true");
                        var r = new ze.MathNode("munder", [qe(t.body, e), n]);
                        return r.setAttribute("accentunder", "true"), r;
                      },
                    }),
                    oe({
                      type: "verb",
                      names: ["\\verb"],
                      props: { numArgs: 0, allowedInText: !0 },
                      handler: function (t, e, n) {
                        throw new o(
                          "\\verb ended by end of line instead of matching delimiter",
                        );
                      },
                      htmlBuilder: function (t, e) {
                        for (
                          var n = xr(t),
                            r = [],
                            i = e.havingStyle(e.style.text()),
                            a = 0;
                          a < n.length;
                          a++
                        ) {
                          var o = n[a];
                          "~" === o && (o = "\\textasciitilde"),
                            r.push(
                              Kt.makeSymbol(o, "Typewriter-Regular", t.mode, i, [
                                "mord",
                                "texttt",
                              ]),
                            );
                        }
                        return Kt.makeSpan(
                          ["mord", "text"].concat(i.sizingClasses(e)),
                          Kt.tryCombineChars(r),
                          i,
                        );
                      },
                      mathmlBuilder: function (t, e) {
                        var n = new ze.TextNode(xr(t)),
                          r = new ze.MathNode("mtext", [n]);
                        return r.setAttribute("mathvariant", "monospace"), r;
                      },
                    });
                  var xr = function (t) {
                      return t.body.replace(/ /g, t.star ? "␣" : " ");
                    },
                    vr = re,
                    br = "[ \r\n\t]",
                    wr = "\\\\[a-zA-Z@]+",
                    kr = "" + wr + br + "*",
                    $r = new RegExp("^(" + wr + ")" + br + "*$"),
                    Mr = "[̀-ͯ]",
                    Sr = new RegExp(Mr + "+$"),
                    zr =
                      "(" +
                      br +
                      "+)|([!-\\[\\]-‧‪-퟿豈-￿]" +
                      Mr +
                      "*|[\ud800-\udbff][\udc00-\udfff]" +
                      Mr +
                      "*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\operatorname\\*|" +
                      kr +
                      "|\\\\[^\ud800-\udfff])",
                    Ar = (function () {
                      function t(t, e) {
                        (this.input = void 0),
                          (this.settings = void 0),
                          (this.tokenRegex = void 0),
                          (this.catcodes = void 0),
                          (this.input = t),
                          (this.settings = e),
                          (this.tokenRegex = new RegExp(zr, "g")),
                          (this.catcodes = { "%": 14 });
                      }
                      var e = t.prototype;
                      return (
                        (e.setCatcode = function (t, e) {
                          this.catcodes[t] = e;
                        }),
                        (e.lex = function () {
                          var t = this.input,
                            e = this.tokenRegex.lastIndex;
                          if (e === t.length)
                            return new i("EOF", new r(this, e, e));
                          var n = this.tokenRegex.exec(t);
                          if (null === n || n.index !== e)
                            throw new o(
                              "Unexpected character: '" + t[e] + "'",
                              new i(t[e], new r(this, e, e + 1)),
                            );
                          var a = n[2] || " ";
                          if (14 === this.catcodes[a]) {
                            var s = t.indexOf("\n", this.tokenRegex.lastIndex);
                            return (
                              -1 === s
                                ? ((this.tokenRegex.lastIndex = t.length),
                                  this.settings.reportNonstrict(
                                    "commentAtEnd",
                                    "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)",
                                  ))
                                : (this.tokenRegex.lastIndex = s + 1),
                              this.lex()
                            );
                          }
                          var l = a.match($r);
                          return (
                            l && (a = l[1]),
                            new i(a, new r(this, e, this.tokenRegex.lastIndex))
                          );
                        }),
                        t
                      );
                    })(),
                    Tr = (function () {
                      function t(t, e) {
                        void 0 === t && (t = {}),
                          void 0 === e && (e = {}),
                          (this.current = void 0),
                          (this.builtins = void 0),
                          (this.undefStack = void 0),
                          (this.current = e),
                          (this.builtins = t),
                          (this.undefStack = []);
                      }
                      var e = t.prototype;
                      return (
                        (e.beginGroup = function () {
                          this.undefStack.push({});
                        }),
                        (e.endGroup = function () {
                          if (0 === this.undefStack.length)
                            throw new o(
                              "Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug",
                            );
                          var t = this.undefStack.pop();
                          for (var e in t)
                            t.hasOwnProperty(e) &&
                              (void 0 === t[e]
                                ? delete this.current[e]
                                : (this.current[e] = t[e]));
                        }),
                        (e.has = function (t) {
                          return (
                            this.current.hasOwnProperty(t) ||
                            this.builtins.hasOwnProperty(t)
                          );
                        }),
                        (e.get = function (t) {
                          return this.current.hasOwnProperty(t)
                            ? this.current[t]
                            : this.builtins[t];
                        }),
                        (e.set = function (t, e, n) {
                          if ((void 0 === n && (n = !1), n)) {
                            for (var r = 0; r < this.undefStack.length; r++)
                              delete this.undefStack[r][t];
                            this.undefStack.length > 0 &&
                              (this.undefStack[this.undefStack.length - 1][t] =
                                e);
                          } else {
                            var i = this.undefStack[this.undefStack.length - 1];
                            i && !i.hasOwnProperty(t) && (i[t] = this.current[t]);
                          }
                          this.current[t] = e;
                        }),
                        t
                      );
                    })(),
                    Nr = {},
                    Br = Nr;
                  function Cr(t, e) {
                    Nr[t] = e;
                  }
                  Cr("\\noexpand", function (t) {
                    var e = t.popToken();
                    return (
                      t.isExpandable(e.text) &&
                        ((e.noexpand = !0), (e.treatAsRelax = !0)),
                      { tokens: [e], numArgs: 0 }
                    );
                  }),
                    Cr("\\expandafter", function (t) {
                      var e = t.popToken();
                      return t.expandOnce(!0), { tokens: [e], numArgs: 0 };
                    }),
                    Cr("\\@firstoftwo", function (t) {
                      return { tokens: t.consumeArgs(2)[0], numArgs: 0 };
                    }),
                    Cr("\\@secondoftwo", function (t) {
                      return { tokens: t.consumeArgs(2)[1], numArgs: 0 };
                    }),
                    Cr("\\@ifnextchar", function (t) {
                      var e = t.consumeArgs(3);
                      t.consumeSpaces();
                      var n = t.future();
                      return 1 === e[0].length && e[0][0].text === n.text
                        ? { tokens: e[1], numArgs: 0 }
                        : { tokens: e[2], numArgs: 0 };
                    }),
                    Cr("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"),
                    Cr("\\TextOrMath", function (t) {
                      var e = t.consumeArgs(2);
                      return "text" === t.mode
                        ? { tokens: e[0], numArgs: 0 }
                        : { tokens: e[1], numArgs: 0 };
                    });
                  var qr = {
                    0: 0,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    a: 10,
                    A: 10,
                    b: 11,
                    B: 11,
                    c: 12,
                    C: 12,
                    d: 13,
                    D: 13,
                    e: 14,
                    E: 14,
                    f: 15,
                    F: 15,
                  };
                  Cr("\\char", function (t) {
                    var e,
                      n = t.popToken(),
                      r = "";
                    if ("'" === n.text) (e = 8), (n = t.popToken());
                    else if ('"' === n.text) (e = 16), (n = t.popToken());
                    else if ("`" === n.text)
                      if ("\\" === (n = t.popToken()).text[0])
                        r = n.text.charCodeAt(1);
                      else {
                        if ("EOF" === n.text)
                          throw new o("\\char` missing argument");
                        r = n.text.charCodeAt(0);
                      }
                    else e = 10;
                    if (e) {
                      if (null == (r = qr[n.text]) || r >= e)
                        throw new o("Invalid base-" + e + " digit " + n.text);
                      for (var i; null != (i = qr[t.future().text]) && i < e; )
                        (r *= e), (r += i), t.popToken();
                    }
                    return "\\@char{" + r + "}";
                  });
                  var Er = function (t, e, n) {
                    var r = t.consumeArgs(1)[0];
                    if (1 !== r.length)
                      throw new o(
                        "\\newcommand's first argument must be a macro name",
                      );
                    var i = r[0].text,
                      a = t.isDefined(i);
                    if (a && !e)
                      throw new o(
                        "\\newcommand{" +
                          i +
                          "} attempting to redefine " +
                          i +
                          "; use \\renewcommand",
                      );
                    if (!a && !n)
                      throw new o(
                        "\\renewcommand{" +
                          i +
                          "} when command " +
                          i +
                          " does not yet exist; use \\newcommand",
                      );
                    var s = 0;
                    if (
                      1 === (r = t.consumeArgs(1)[0]).length &&
                      "[" === r[0].text
                    ) {
                      for (
                        var l = "", c = t.expandNextToken();
                        "]" !== c.text && "EOF" !== c.text;
  
                      )
                        (l += c.text), (c = t.expandNextToken());
                      if (!l.match(/^\s*[0-9]+\s*$/))
                        throw new o("Invalid number of arguments: " + l);
                      (s = parseInt(l)), (r = t.consumeArgs(1)[0]);
                    }
                    return t.macros.set(i, { tokens: r, numArgs: s }), "";
                  };
                  Cr("\\newcommand", function (t) {
                    return Er(t, !1, !0);
                  }),
                    Cr("\\renewcommand", function (t) {
                      return Er(t, !0, !1);
                    }),
                    Cr("\\providecommand", function (t) {
                      return Er(t, !0, !0);
                    }),
                    Cr("\\message", function (t) {
                      var e = t.consumeArgs(1)[0];
                      return (
                        console.log(
                          e
                            .reverse()
                            .map(function (t) {
                              return t.text;
                            })
                            .join(""),
                        ),
                        ""
                      );
                    }),
                    Cr("\\errmessage", function (t) {
                      var e = t.consumeArgs(1)[0];
                      return (
                        console.error(
                          e
                            .reverse()
                            .map(function (t) {
                              return t.text;
                            })
                            .join(""),
                        ),
                        ""
                      );
                    }),
                    Cr("\\show", function (t) {
                      var e = t.popToken(),
                        n = e.text;
                      return (
                        console.log(
                          e,
                          t.macros.get(n),
                          vr[n],
                          Y.math[n],
                          Y.text[n],
                        ),
                        ""
                      );
                    }),
                    Cr("\\bgroup", "{"),
                    Cr("\\egroup", "}"),
                    Cr("\\lq", "`"),
                    Cr("\\rq", "'"),
                    Cr("\\aa", "\\r a"),
                    Cr("\\AA", "\\r A"),
                    Cr(
                      "\\textcopyright",
                      "\\html@mathml{\\textcircled{c}}{\\char`©}",
                    ),
                    Cr(
                      "\\copyright",
                      "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}",
                    ),
                    Cr(
                      "\\textregistered",
                      "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}",
                    ),
                    Cr("ℬ", "\\mathscr{B}"),
                    Cr("ℰ", "\\mathscr{E}"),
                    Cr("ℱ", "\\mathscr{F}"),
                    Cr("ℋ", "\\mathscr{H}"),
                    Cr("ℐ", "\\mathscr{I}"),
                    Cr("ℒ", "\\mathscr{L}"),
                    Cr("ℳ", "\\mathscr{M}"),
                    Cr("ℛ", "\\mathscr{R}"),
                    Cr("ℭ", "\\mathfrak{C}"),
                    Cr("ℌ", "\\mathfrak{H}"),
                    Cr("ℨ", "\\mathfrak{Z}"),
                    Cr("\\Bbbk", "\\Bbb{k}"),
                    Cr("·", "\\cdotp"),
                    Cr("\\llap", "\\mathllap{\\textrm{#1}}"),
                    Cr("\\rlap", "\\mathrlap{\\textrm{#1}}"),
                    Cr("\\clap", "\\mathclap{\\textrm{#1}}"),
                    Cr(
                      "\\not",
                      '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}',
                    ),
                    Cr(
                      "\\neq",
                      "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}",
                    ),
                    Cr("\\ne", "\\neq"),
                    Cr("≠", "\\neq"),
                    Cr(
                      "\\notin",
                      "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}",
                    ),
                    Cr("∉", "\\notin"),
                    Cr(
                      "≘",
                      "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}",
                    ),
                    Cr(
                      "≙",
                      "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}",
                    ),
                    Cr(
                      "≚",
                      "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}",
                    ),
                    Cr(
                      "≛",
                      "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}",
                    ),
                    Cr(
                      "≝",
                      "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}",
                    ),
                    Cr(
                      "≞",
                      "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}",
                    ),
                    Cr(
                      "≟",
                      "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}",
                    ),
                    Cr("⟂", "\\perp"),
                    Cr("‼", "\\mathclose{!\\mkern-0.8mu!}"),
                    Cr("∌", "\\notni"),
                    Cr("⌜", "\\ulcorner"),
                    Cr("⌝", "\\urcorner"),
                    Cr("⌞", "\\llcorner"),
                    Cr("⌟", "\\lrcorner"),
                    Cr("©", "\\copyright"),
                    Cr("®", "\\textregistered"),
                    Cr("️", "\\textregistered"),
                    Cr(
                      "\\ulcorner",
                      '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}',
                    ),
                    Cr(
                      "\\urcorner",
                      '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}',
                    ),
                    Cr(
                      "\\llcorner",
                      '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}',
                    ),
                    Cr(
                      "\\lrcorner",
                      '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}',
                    ),
                    Cr("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"),
                    Cr("⋮", "\\vdots"),
                    Cr("\\varGamma", "\\mathit{\\Gamma}"),
                    Cr("\\varDelta", "\\mathit{\\Delta}"),
                    Cr("\\varTheta", "\\mathit{\\Theta}"),
                    Cr("\\varLambda", "\\mathit{\\Lambda}"),
                    Cr("\\varXi", "\\mathit{\\Xi}"),
                    Cr("\\varPi", "\\mathit{\\Pi}"),
                    Cr("\\varSigma", "\\mathit{\\Sigma}"),
                    Cr("\\varUpsilon", "\\mathit{\\Upsilon}"),
                    Cr("\\varPhi", "\\mathit{\\Phi}"),
                    Cr("\\varPsi", "\\mathit{\\Psi}"),
                    Cr("\\varOmega", "\\mathit{\\Omega}"),
                    Cr("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"),
                    Cr(
                      "\\colon",
                      "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu",
                    ),
                    Cr("\\boxed", "\\fbox{$\\displaystyle{#1}$}"),
                    Cr("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"),
                    Cr("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"),
                    Cr("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
                  var Lr = {
                    ",": "\\dotsc",
                    "\\not": "\\dotsb",
                    "+": "\\dotsb",
                    "=": "\\dotsb",
                    "<": "\\dotsb",
                    ">": "\\dotsb",
                    "-": "\\dotsb",
                    "*": "\\dotsb",
                    ":": "\\dotsb",
                    "\\DOTSB": "\\dotsb",
                    "\\coprod": "\\dotsb",
                    "\\bigvee": "\\dotsb",
                    "\\bigwedge": "\\dotsb",
                    "\\biguplus": "\\dotsb",
                    "\\bigcap": "\\dotsb",
                    "\\bigcup": "\\dotsb",
                    "\\prod": "\\dotsb",
                    "\\sum": "\\dotsb",
                    "\\bigotimes": "\\dotsb",
                    "\\bigoplus": "\\dotsb",
                    "\\bigodot": "\\dotsb",
                    "\\bigsqcup": "\\dotsb",
                    "\\And": "\\dotsb",
                    "\\longrightarrow": "\\dotsb",
                    "\\Longrightarrow": "\\dotsb",
                    "\\longleftarrow": "\\dotsb",
                    "\\Longleftarrow": "\\dotsb",
                    "\\longleftrightarrow": "\\dotsb",
                    "\\Longleftrightarrow": "\\dotsb",
                    "\\mapsto": "\\dotsb",
                    "\\longmapsto": "\\dotsb",
                    "\\hookrightarrow": "\\dotsb",
                    "\\doteq": "\\dotsb",
                    "\\mathbin": "\\dotsb",
                    "\\mathrel": "\\dotsb",
                    "\\relbar": "\\dotsb",
                    "\\Relbar": "\\dotsb",
                    "\\xrightarrow": "\\dotsb",
                    "\\xleftarrow": "\\dotsb",
                    "\\DOTSI": "\\dotsi",
                    "\\int": "\\dotsi",
                    "\\oint": "\\dotsi",
                    "\\iint": "\\dotsi",
                    "\\iiint": "\\dotsi",
                    "\\iiiint": "\\dotsi",
                    "\\idotsint": "\\dotsi",
                    "\\DOTSX": "\\dotsx",
                  };
                  Cr("\\dots", function (t) {
                    var e = "\\dotso",
                      n = t.expandAfterFuture().text;
                    return (
                      n in Lr
                        ? (e = Lr[n])
                        : ("\\not" === n.substr(0, 4) ||
                            (n in Y.math &&
                              u.contains(["bin", "rel"], Y.math[n].group))) &&
                          (e = "\\dotsb"),
                      e
                    );
                  });
                  var _r = {
                    ")": !0,
                    "]": !0,
                    "\\rbrack": !0,
                    "\\}": !0,
                    "\\rbrace": !0,
                    "\\rangle": !0,
                    "\\rceil": !0,
                    "\\rfloor": !0,
                    "\\rgroup": !0,
                    "\\rmoustache": !0,
                    "\\right": !0,
                    "\\bigr": !0,
                    "\\biggr": !0,
                    "\\Bigr": !0,
                    "\\Biggr": !0,
                    $: !0,
                    ";": !0,
                    ".": !0,
                    ",": !0,
                  };
                  Cr("\\dotso", function (t) {
                    return t.future().text in _r ? "\\ldots\\," : "\\ldots";
                  }),
                    Cr("\\dotsc", function (t) {
                      var e = t.future().text;
                      return e in _r && "," !== e ? "\\ldots\\," : "\\ldots";
                    }),
                    Cr("\\cdots", function (t) {
                      return t.future().text in _r ? "\\@cdots\\," : "\\@cdots";
                    }),
                    Cr("\\dotsb", "\\cdots"),
                    Cr("\\dotsm", "\\cdots"),
                    Cr("\\dotsi", "\\!\\cdots"),
                    Cr("\\dotsx", "\\ldots\\,"),
                    Cr("\\DOTSI", "\\relax"),
                    Cr("\\DOTSB", "\\relax"),
                    Cr("\\DOTSX", "\\relax"),
                    Cr(
                      "\\tmspace",
                      "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax",
                    ),
                    Cr("\\,", "\\tmspace+{3mu}{.1667em}"),
                    Cr("\\thinspace", "\\,"),
                    Cr("\\>", "\\mskip{4mu}"),
                    Cr("\\:", "\\tmspace+{4mu}{.2222em}"),
                    Cr("\\medspace", "\\:"),
                    Cr("\\;", "\\tmspace+{5mu}{.2777em}"),
                    Cr("\\thickspace", "\\;"),
                    Cr("\\!", "\\tmspace-{3mu}{.1667em}"),
                    Cr("\\negthinspace", "\\!"),
                    Cr("\\negmedspace", "\\tmspace-{4mu}{.2222em}"),
                    Cr("\\negthickspace", "\\tmspace-{5mu}{.277em}"),
                    Cr("\\enspace", "\\kern.5em "),
                    Cr("\\enskip", "\\hskip.5em\\relax"),
                    Cr("\\quad", "\\hskip1em\\relax"),
                    Cr("\\qquad", "\\hskip2em\\relax"),
                    Cr("\\tag", "\\@ifstar\\tag@literal\\tag@paren"),
                    Cr("\\tag@paren", "\\tag@literal{({#1})}"),
                    Cr("\\tag@literal", function (t) {
                      if (t.macros.get("\\df@tag")) throw new o("Multiple \\tag");
                      return "\\gdef\\df@tag{\\text{#1}}";
                    }),
                    Cr(
                      "\\bmod",
                      "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}",
                    ),
                    Cr(
                      "\\pod",
                      "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)",
                    ),
                    Cr("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"),
                    Cr(
                      "\\mod",
                      "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1",
                    ),
                    Cr(
                      "\\pmb",
                      "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}",
                    ),
                    Cr("\\\\", "\\newline"),
                    Cr(
                      "\\TeX",
                      "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}",
                    );
                  var Ir =
                    D["Main-Regular"]["T".charCodeAt(0)][1] -
                    0.7 * D["Main-Regular"]["A".charCodeAt(0)][1] +
                    "em";
                  Cr(
                    "\\LaTeX",
                    "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" +
                      Ir +
                      "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}",
                  ),
                    Cr(
                      "\\KaTeX",
                      "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" +
                        Ir +
                        "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}",
                    ),
                    Cr("\\hspace", "\\@ifstar\\@hspacer\\@hspace"),
                    Cr("\\@hspace", "\\hskip #1\\relax"),
                    Cr("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"),
                    Cr("\\ordinarycolon", ":"),
                    Cr("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"),
                    Cr(
                      "\\dblcolon",
                      '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}',
                    ),
                    Cr(
                      "\\coloneqq",
                      '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}',
                    ),
                    Cr(
                      "\\Coloneqq",
                      '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}',
                    ),
                    Cr(
                      "\\coloneq",
                      '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}',
                    ),
                    Cr(
                      "\\Coloneq",
                      '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}',
                    ),
                    Cr(
                      "\\eqqcolon",
                      '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}',
                    ),
                    Cr(
                      "\\Eqqcolon",
                      '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}',
                    ),
                    Cr(
                      "\\eqcolon",
                      '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}',
                    ),
                    Cr(
                      "\\Eqcolon",
                      '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}',
                    ),
                    Cr(
                      "\\colonapprox",
                      '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}',
                    ),
                    Cr(
                      "\\Colonapprox",
                      '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}',
                    ),
                    Cr(
                      "\\colonsim",
                      '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}',
                    ),
                    Cr(
                      "\\Colonsim",
                      '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}',
                    ),
                    Cr("∷", "\\dblcolon"),
                    Cr("∹", "\\eqcolon"),
                    Cr("≔", "\\coloneqq"),
                    Cr("≕", "\\eqqcolon"),
                    Cr("⩴", "\\Coloneqq"),
                    Cr("\\ratio", "\\vcentcolon"),
                    Cr("\\coloncolon", "\\dblcolon"),
                    Cr("\\colonequals", "\\coloneqq"),
                    Cr("\\coloncolonequals", "\\Coloneqq"),
                    Cr("\\equalscolon", "\\eqqcolon"),
                    Cr("\\equalscoloncolon", "\\Eqqcolon"),
                    Cr("\\colonminus", "\\coloneq"),
                    Cr("\\coloncolonminus", "\\Coloneq"),
                    Cr("\\minuscolon", "\\eqcolon"),
                    Cr("\\minuscoloncolon", "\\Eqcolon"),
                    Cr("\\coloncolonapprox", "\\Colonapprox"),
                    Cr("\\coloncolonsim", "\\Colonsim"),
                    Cr(
                      "\\simcolon",
                      "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}",
                    ),
                    Cr(
                      "\\simcoloncolon",
                      "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}",
                    ),
                    Cr(
                      "\\approxcolon",
                      "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}",
                    ),
                    Cr(
                      "\\approxcoloncolon",
                      "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}",
                    ),
                    Cr(
                      "\\notni",
                      "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}",
                    ),
                    Cr("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"),
                    Cr("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"),
                    Cr("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}"),
                    Cr("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}"),
                    Cr("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}"),
                    Cr("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}"),
                    Cr("\\nleqq", "\\html@mathml{\\@nleqq}{≰}"),
                    Cr("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}"),
                    Cr("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}"),
                    Cr("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}"),
                    Cr("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}"),
                    Cr("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}"),
                    Cr("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}"),
                    Cr("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}"),
                    Cr("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}"),
                    Cr("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}"),
                    Cr("\\imath", "\\html@mathml{\\@imath}{ı}"),
                    Cr("\\jmath", "\\html@mathml{\\@jmath}{ȷ}"),
                    Cr(
                      "\\llbracket",
                      "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}",
                    ),
                    Cr(
                      "\\rrbracket",
                      "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}",
                    ),
                    Cr("⟦", "\\llbracket"),
                    Cr("⟧", "\\rrbracket"),
                    Cr(
                      "\\lBrace",
                      "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}",
                    ),
                    Cr(
                      "\\rBrace",
                      "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}",
                    ),
                    Cr("⦃", "\\lBrace"),
                    Cr("⦄", "\\rBrace"),
                    Cr(
                      "\\minuso",
                      "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}",
                    ),
                    Cr("⦵", "\\minuso"),
                    Cr("\\darr", "\\downarrow"),
                    Cr("\\dArr", "\\Downarrow"),
                    Cr("\\Darr", "\\Downarrow"),
                    Cr("\\lang", "\\langle"),
                    Cr("\\rang", "\\rangle"),
                    Cr("\\uarr", "\\uparrow"),
                    Cr("\\uArr", "\\Uparrow"),
                    Cr("\\Uarr", "\\Uparrow"),
                    Cr("\\N", "\\mathbb{N}"),
                    Cr("\\R", "\\mathbb{R}"),
                    Cr("\\Z", "\\mathbb{Z}"),
                    Cr("\\alef", "\\aleph"),
                    Cr("\\alefsym", "\\aleph"),
                    Cr("\\Alpha", "\\mathrm{A}"),
                    Cr("\\Beta", "\\mathrm{B}"),
                    Cr("\\bull", "\\bullet"),
                    Cr("\\Chi", "\\mathrm{X}"),
                    Cr("\\clubs", "\\clubsuit"),
                    Cr("\\cnums", "\\mathbb{C}"),
                    Cr("\\Complex", "\\mathbb{C}"),
                    Cr("\\Dagger", "\\ddagger"),
                    Cr("\\diamonds", "\\diamondsuit"),
                    Cr("\\empty", "\\emptyset"),
                    Cr("\\Epsilon", "\\mathrm{E}"),
                    Cr("\\Eta", "\\mathrm{H}"),
                    Cr("\\exist", "\\exists"),
                    Cr("\\harr", "\\leftrightarrow"),
                    Cr("\\hArr", "\\Leftrightarrow"),
                    Cr("\\Harr", "\\Leftrightarrow"),
                    Cr("\\hearts", "\\heartsuit"),
                    Cr("\\image", "\\Im"),
                    Cr("\\infin", "\\infty"),
                    Cr("\\Iota", "\\mathrm{I}"),
                    Cr("\\isin", "\\in"),
                    Cr("\\Kappa", "\\mathrm{K}"),
                    Cr("\\larr", "\\leftarrow"),
                    Cr("\\lArr", "\\Leftarrow"),
                    Cr("\\Larr", "\\Leftarrow"),
                    Cr("\\lrarr", "\\leftrightarrow"),
                    Cr("\\lrArr", "\\Leftrightarrow"),
                    Cr("\\Lrarr", "\\Leftrightarrow"),
                    Cr("\\Mu", "\\mathrm{M}"),
                    Cr("\\natnums", "\\mathbb{N}"),
                    Cr("\\Nu", "\\mathrm{N}"),
                    Cr("\\Omicron", "\\mathrm{O}"),
                    Cr("\\plusmn", "\\pm"),
                    Cr("\\rarr", "\\rightarrow"),
                    Cr("\\rArr", "\\Rightarrow"),
                    Cr("\\Rarr", "\\Rightarrow"),
                    Cr("\\real", "\\Re"),
                    Cr("\\reals", "\\mathbb{R}"),
                    Cr("\\Reals", "\\mathbb{R}"),
                    Cr("\\Rho", "\\mathrm{P}"),
                    Cr("\\sdot", "\\cdot"),
                    Cr("\\sect", "\\S"),
                    Cr("\\spades", "\\spadesuit"),
                    Cr("\\sub", "\\subset"),
                    Cr("\\sube", "\\subseteq"),
                    Cr("\\supe", "\\supseteq"),
                    Cr("\\Tau", "\\mathrm{T}"),
                    Cr("\\thetasym", "\\vartheta"),
                    Cr("\\weierp", "\\wp"),
                    Cr("\\Zeta", "\\mathrm{Z}"),
                    Cr("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"),
                    Cr("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"),
                    Cr("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"),
                    Cr("\\bra", "\\mathinner{\\langle{#1}|}"),
                    Cr("\\ket", "\\mathinner{|{#1}\\rangle}"),
                    Cr("\\braket", "\\mathinner{\\langle{#1}\\rangle}"),
                    Cr("\\Bra", "\\left\\langle#1\\right|"),
                    Cr("\\Ket", "\\left|#1\\right\\rangle"),
                    Cr("\\blue", "\\textcolor{##6495ed}{#1}"),
                    Cr("\\orange", "\\textcolor{##ffa500}{#1}"),
                    Cr("\\pink", "\\textcolor{##ff00af}{#1}"),
                    Cr("\\red", "\\textcolor{##df0030}{#1}"),
                    Cr("\\green", "\\textcolor{##28ae7b}{#1}"),
                    Cr("\\gray", "\\textcolor{gray}{#1}"),
                    Cr("\\purple", "\\textcolor{##9d38bd}{#1}"),
                    Cr("\\blueA", "\\textcolor{##ccfaff}{#1}"),
                    Cr("\\blueB", "\\textcolor{##80f6ff}{#1}"),
                    Cr("\\blueC", "\\textcolor{##63d9ea}{#1}"),
                    Cr("\\blueD", "\\textcolor{##11accd}{#1}"),
                    Cr("\\blueE", "\\textcolor{##0c7f99}{#1}"),
                    Cr("\\tealA", "\\textcolor{##94fff5}{#1}"),
                    Cr("\\tealB", "\\textcolor{##26edd5}{#1}"),
                    Cr("\\tealC", "\\textcolor{##01d1c1}{#1}"),
                    Cr("\\tealD", "\\textcolor{##01a995}{#1}"),
                    Cr("\\tealE", "\\textcolor{##208170}{#1}"),
                    Cr("\\greenA", "\\textcolor{##b6ffb0}{#1}"),
                    Cr("\\greenB", "\\textcolor{##8af281}{#1}"),
                    Cr("\\greenC", "\\textcolor{##74cf70}{#1}"),
                    Cr("\\greenD", "\\textcolor{##1fab54}{#1}"),
                    Cr("\\greenE", "\\textcolor{##0d923f}{#1}"),
                    Cr("\\goldA", "\\textcolor{##ffd0a9}{#1}"),
                    Cr("\\goldB", "\\textcolor{##ffbb71}{#1}"),
                    Cr("\\goldC", "\\textcolor{##ff9c39}{#1}"),
                    Cr("\\goldD", "\\textcolor{##e07d10}{#1}"),
                    Cr("\\goldE", "\\textcolor{##a75a05}{#1}"),
                    Cr("\\redA", "\\textcolor{##fca9a9}{#1}"),
                    Cr("\\redB", "\\textcolor{##ff8482}{#1}"),
                    Cr("\\redC", "\\textcolor{##f9685d}{#1}"),
                    Cr("\\redD", "\\textcolor{##e84d39}{#1}"),
                    Cr("\\redE", "\\textcolor{##bc2612}{#1}"),
                    Cr("\\maroonA", "\\textcolor{##ffbde0}{#1}"),
                    Cr("\\maroonB", "\\textcolor{##ff92c6}{#1}"),
                    Cr("\\maroonC", "\\textcolor{##ed5fa6}{#1}"),
                    Cr("\\maroonD", "\\textcolor{##ca337c}{#1}"),
                    Cr("\\maroonE", "\\textcolor{##9e034e}{#1}"),
                    Cr("\\purpleA", "\\textcolor{##ddd7ff}{#1}"),
                    Cr("\\purpleB", "\\textcolor{##c6b9fc}{#1}"),
                    Cr("\\purpleC", "\\textcolor{##aa87ff}{#1}"),
                    Cr("\\purpleD", "\\textcolor{##7854ab}{#1}"),
                    Cr("\\purpleE", "\\textcolor{##543b78}{#1}"),
                    Cr("\\mintA", "\\textcolor{##f5f9e8}{#1}"),
                    Cr("\\mintB", "\\textcolor{##edf2df}{#1}"),
                    Cr("\\mintC", "\\textcolor{##e0e5cc}{#1}"),
                    Cr("\\grayA", "\\textcolor{##f6f7f7}{#1}"),
                    Cr("\\grayB", "\\textcolor{##f0f1f2}{#1}"),
                    Cr("\\grayC", "\\textcolor{##e3e5e6}{#1}"),
                    Cr("\\grayD", "\\textcolor{##d6d8da}{#1}"),
                    Cr("\\grayE", "\\textcolor{##babec2}{#1}"),
                    Cr("\\grayF", "\\textcolor{##888d93}{#1}"),
                    Cr("\\grayG", "\\textcolor{##626569}{#1}"),
                    Cr("\\grayH", "\\textcolor{##3b3e40}{#1}"),
                    Cr("\\grayI", "\\textcolor{##21242c}{#1}"),
                    Cr("\\kaBlue", "\\textcolor{##314453}{#1}"),
                    Cr("\\kaGreen", "\\textcolor{##71B307}{#1}");
                  var Rr = {
                      "\\relax": !0,
                      "^": !0,
                      _: !0,
                      "\\limits": !0,
                      "\\nolimits": !0,
                    },
                    Or = (function () {
                      function t(t, e, n) {
                        (this.settings = void 0),
                          (this.expansionCount = void 0),
                          (this.lexer = void 0),
                          (this.macros = void 0),
                          (this.stack = void 0),
                          (this.mode = void 0),
                          (this.settings = e),
                          (this.expansionCount = 0),
                          this.feed(t),
                          (this.macros = new Tr(Br, e.macros)),
                          (this.mode = n),
                          (this.stack = []);
                      }
                      var e = t.prototype;
                      return (
                        (e.feed = function (t) {
                          this.lexer = new Ar(t, this.settings);
                        }),
                        (e.switchMode = function (t) {
                          this.mode = t;
                        }),
                        (e.beginGroup = function () {
                          this.macros.beginGroup();
                        }),
                        (e.endGroup = function () {
                          this.macros.endGroup();
                        }),
                        (e.future = function () {
                          return (
                            0 === this.stack.length &&
                              this.pushToken(this.lexer.lex()),
                            this.stack[this.stack.length - 1]
                          );
                        }),
                        (e.popToken = function () {
                          return this.future(), this.stack.pop();
                        }),
                        (e.pushToken = function (t) {
                          this.stack.push(t);
                        }),
                        (e.pushTokens = function (t) {
                          var e;
                          (e = this.stack).push.apply(e, t);
                        }),
                        (e.consumeSpaces = function () {
                          for (; " " === this.future().text; ) this.stack.pop();
                        }),
                        (e.consumeArgs = function (t) {
                          for (var e = [], n = 0; n < t; ++n) {
                            this.consumeSpaces();
                            var r = this.popToken();
                            if ("{" === r.text) {
                              for (var i = [], a = 1; 0 !== a; ) {
                                var s = this.popToken();
                                if ((i.push(s), "{" === s.text)) ++a;
                                else if ("}" === s.text) --a;
                                else if ("EOF" === s.text)
                                  throw new o(
                                    "End of input in macro argument",
                                    r,
                                  );
                              }
                              i.pop(), i.reverse(), (e[n] = i);
                            } else {
                              if ("EOF" === r.text)
                                throw new o(
                                  "End of input expecting macro argument",
                                );
                              e[n] = [r];
                            }
                          }
                          return e;
                        }),
                        (e.expandOnce = function (t) {
                          var e = this.popToken(),
                            n = e.text,
                            r = e.noexpand ? null : this._getExpansion(n);
                          if (null == r || (t && r.unexpandable)) {
                            if (
                              t &&
                              null == r &&
                              "\\" === n[0] &&
                              !this.isDefined(n)
                            )
                              throw new o("Undefined control sequence: " + n);
                            return this.pushToken(e), e;
                          }
                          if (
                            (this.expansionCount++,
                            this.expansionCount > this.settings.maxExpand)
                          )
                            throw new o(
                              "Too many expansions: infinite loop or need to increase maxExpand setting",
                            );
                          var i = r.tokens;
                          if (r.numArgs)
                            for (
                              var a = this.consumeArgs(r.numArgs),
                                s = (i = i.slice()).length - 1;
                              s >= 0;
                              --s
                            ) {
                              var l = i[s];
                              if ("#" === l.text) {
                                if (0 === s)
                                  throw new o(
                                    "Incomplete placeholder at end of macro body",
                                    l,
                                  );
                                if ("#" === (l = i[--s]).text) i.splice(s + 1, 1);
                                else {
                                  if (!/^[1-9]$/.test(l.text))
                                    throw new o("Not a valid argument number", l);
                                  var c;
                                  (c = i).splice.apply(
                                    c,
                                    [s, 2].concat(a[+l.text - 1]),
                                  );
                                }
                              }
                            }
                          return this.pushTokens(i), i;
                        }),
                        (e.expandAfterFuture = function () {
                          return this.expandOnce(), this.future();
                        }),
                        (e.expandNextToken = function () {
                          for (;;) {
                            var t = this.expandOnce();
                            if (t instanceof i) {
                              if ("\\relax" !== t.text && !t.treatAsRelax)
                                return this.stack.pop();
                              this.stack.pop();
                            }
                          }
                          throw new Error();
                        }),
                        (e.expandMacro = function (t) {
                          return this.macros.has(t)
                            ? this.expandTokens([new i(t)])
                            : void 0;
                        }),
                        (e.expandTokens = function (t) {
                          var e = [],
                            n = this.stack.length;
                          for (this.pushTokens(t); this.stack.length > n; ) {
                            var r = this.expandOnce(!0);
                            r instanceof i &&
                              (r.treatAsRelax &&
                                ((r.noexpand = !1), (r.treatAsRelax = !1)),
                              e.push(this.stack.pop()));
                          }
                          return e;
                        }),
                        (e.expandMacroAsText = function (t) {
                          var e = this.expandMacro(t);
                          return e
                            ? e
                                .map(function (t) {
                                  return t.text;
                                })
                                .join("")
                            : e;
                        }),
                        (e._getExpansion = function (t) {
                          var e = this.macros.get(t);
                          if (null == e) return e;
                          var n = "function" == typeof e ? e(this) : e;
                          if ("string" == typeof n) {
                            var r = 0;
                            if (-1 !== n.indexOf("#"))
                              for (
                                var i = n.replace(/##/g, "");
                                -1 !== i.indexOf("#" + (r + 1));
  
                              )
                                ++r;
                            for (
                              var a = new Ar(n, this.settings),
                                o = [],
                                s = a.lex();
                              "EOF" !== s.text;
  
                            )
                              o.push(s), (s = a.lex());
                            return o.reverse(), { tokens: o, numArgs: r };
                          }
                          return n;
                        }),
                        (e.isDefined = function (t) {
                          return (
                            this.macros.has(t) ||
                            vr.hasOwnProperty(t) ||
                            Y.math.hasOwnProperty(t) ||
                            Y.text.hasOwnProperty(t) ||
                            Rr.hasOwnProperty(t)
                          );
                        }),
                        (e.isExpandable = function (t) {
                          var e = this.macros.get(t);
                          return null != e
                            ? "string" == typeof e ||
                                "function" == typeof e ||
                                !e.unexpandable
                            : vr.hasOwnProperty(t);
                        }),
                        t
                      );
                    })(),
                    Pr = {
                      "́": { text: "\\'", math: "\\acute" },
                      "̀": { text: "\\`", math: "\\grave" },
                      "̈": { text: '\\"', math: "\\ddot" },
                      "̃": { text: "\\~", math: "\\tilde" },
                      "̄": { text: "\\=", math: "\\bar" },
                      "̆": { text: "\\u", math: "\\breve" },
                      "̌": { text: "\\v", math: "\\check" },
                      "̂": { text: "\\^", math: "\\hat" },
                      "̇": { text: "\\.", math: "\\dot" },
                      "̊": { text: "\\r", math: "\\mathring" },
                      "̋": { text: "\\H" },
                    },
                    Hr = {
                      á: "á",
                      à: "à",
                      ä: "ä",
                      ǟ: "ǟ",
                      ã: "ã",
                      ā: "ā",
                      ă: "ă",
                      ắ: "ắ",
                      ằ: "ằ",
                      ẵ: "ẵ",
                      ǎ: "ǎ",
                      â: "â",
                      ấ: "ấ",
                      ầ: "ầ",
                      ẫ: "ẫ",
                      ȧ: "ȧ",
                      ǡ: "ǡ",
                      å: "å",
                      ǻ: "ǻ",
                      ḃ: "ḃ",
                      ć: "ć",
                      č: "č",
                      ĉ: "ĉ",
                      ċ: "ċ",
                      ď: "ď",
                      ḋ: "ḋ",
                      é: "é",
                      è: "è",
                      ë: "ë",
                      ẽ: "ẽ",
                      ē: "ē",
                      ḗ: "ḗ",
                      ḕ: "ḕ",
                      ĕ: "ĕ",
                      ě: "ě",
                      ê: "ê",
                      ế: "ế",
                      ề: "ề",
                      ễ: "ễ",
                      ė: "ė",
                      ḟ: "ḟ",
                      ǵ: "ǵ",
                      ḡ: "ḡ",
                      ğ: "ğ",
                      ǧ: "ǧ",
                      ĝ: "ĝ",
                      ġ: "ġ",
                      ḧ: "ḧ",
                      ȟ: "ȟ",
                      ĥ: "ĥ",
                      ḣ: "ḣ",
                      í: "í",
                      ì: "ì",
                      ï: "ï",
                      ḯ: "ḯ",
                      ĩ: "ĩ",
                      ī: "ī",
                      ĭ: "ĭ",
                      ǐ: "ǐ",
                      î: "î",
                      ǰ: "ǰ",
                      ĵ: "ĵ",
                      ḱ: "ḱ",
                      ǩ: "ǩ",
                      ĺ: "ĺ",
                      ľ: "ľ",
                      ḿ: "ḿ",
                      ṁ: "ṁ",
                      ń: "ń",
                      ǹ: "ǹ",
                      ñ: "ñ",
                      ň: "ň",
                      ṅ: "ṅ",
                      ó: "ó",
                      ò: "ò",
                      ö: "ö",
                      ȫ: "ȫ",
                      õ: "õ",
                      ṍ: "ṍ",
                      ṏ: "ṏ",
                      ȭ: "ȭ",
                      ō: "ō",
                      ṓ: "ṓ",
                      ṑ: "ṑ",
                      ŏ: "ŏ",
                      ǒ: "ǒ",
                      ô: "ô",
                      ố: "ố",
                      ồ: "ồ",
                      ỗ: "ỗ",
                      ȯ: "ȯ",
                      ȱ: "ȱ",
                      ő: "ő",
                      ṕ: "ṕ",
                      ṗ: "ṗ",
                      ŕ: "ŕ",
                      ř: "ř",
                      ṙ: "ṙ",
                      ś: "ś",
                      ṥ: "ṥ",
                      š: "š",
                      ṧ: "ṧ",
                      ŝ: "ŝ",
                      ṡ: "ṡ",
                      ẗ: "ẗ",
                      ť: "ť",
                      ṫ: "ṫ",
                      ú: "ú",
                      ù: "ù",
                      ü: "ü",
                      ǘ: "ǘ",
                      ǜ: "ǜ",
                      ǖ: "ǖ",
                      ǚ: "ǚ",
                      ũ: "ũ",
                      ṹ: "ṹ",
                      ū: "ū",
                      ṻ: "ṻ",
                      ŭ: "ŭ",
                      ǔ: "ǔ",
                      û: "û",
                      ů: "ů",
                      ű: "ű",
                      ṽ: "ṽ",
                      ẃ: "ẃ",
                      ẁ: "ẁ",
                      ẅ: "ẅ",
                      ŵ: "ŵ",
                      ẇ: "ẇ",
                      ẘ: "ẘ",
                      ẍ: "ẍ",
                      ẋ: "ẋ",
                      ý: "ý",
                      ỳ: "ỳ",
                      ÿ: "ÿ",
                      ỹ: "ỹ",
                      ȳ: "ȳ",
                      ŷ: "ŷ",
                      ẏ: "ẏ",
                      ẙ: "ẙ",
                      ź: "ź",
                      ž: "ž",
                      ẑ: "ẑ",
                      ż: "ż",
                      Á: "Á",
                      À: "À",
                      Ä: "Ä",
                      Ǟ: "Ǟ",
                      Ã: "Ã",
                      Ā: "Ā",
                      Ă: "Ă",
                      Ắ: "Ắ",
                      Ằ: "Ằ",
                      Ẵ: "Ẵ",
                      Ǎ: "Ǎ",
                      Â: "Â",
                      Ấ: "Ấ",
                      Ầ: "Ầ",
                      Ẫ: "Ẫ",
                      Ȧ: "Ȧ",
                      Ǡ: "Ǡ",
                      Å: "Å",
                      Ǻ: "Ǻ",
                      Ḃ: "Ḃ",
                      Ć: "Ć",
                      Č: "Č",
                      Ĉ: "Ĉ",
                      Ċ: "Ċ",
                      Ď: "Ď",
                      Ḋ: "Ḋ",
                      É: "É",
                      È: "È",
                      Ë: "Ë",
                      Ẽ: "Ẽ",
                      Ē: "Ē",
                      Ḗ: "Ḗ",
                      Ḕ: "Ḕ",
                      Ĕ: "Ĕ",
                      Ě: "Ě",
                      Ê: "Ê",
                      Ế: "Ế",
                      Ề: "Ề",
                      Ễ: "Ễ",
                      Ė: "Ė",
                      Ḟ: "Ḟ",
                      Ǵ: "Ǵ",
                      Ḡ: "Ḡ",
                      Ğ: "Ğ",
                      Ǧ: "Ǧ",
                      Ĝ: "Ĝ",
                      Ġ: "Ġ",
                      Ḧ: "Ḧ",
                      Ȟ: "Ȟ",
                      Ĥ: "Ĥ",
                      Ḣ: "Ḣ",
                      Í: "Í",
                      Ì: "Ì",
                      Ï: "Ï",
                      Ḯ: "Ḯ",
                      Ĩ: "Ĩ",
                      Ī: "Ī",
                      Ĭ: "Ĭ",
                      Ǐ: "Ǐ",
                      Î: "Î",
                      İ: "İ",
                      Ĵ: "Ĵ",
                      Ḱ: "Ḱ",
                      Ǩ: "Ǩ",
                      Ĺ: "Ĺ",
                      Ľ: "Ľ",
                      Ḿ: "Ḿ",
                      Ṁ: "Ṁ",
                      Ń: "Ń",
                      Ǹ: "Ǹ",
                      Ñ: "Ñ",
                      Ň: "Ň",
                      Ṅ: "Ṅ",
                      Ó: "Ó",
                      Ò: "Ò",
                      Ö: "Ö",
                      Ȫ: "Ȫ",
                      Õ: "Õ",
                      Ṍ: "Ṍ",
                      Ṏ: "Ṏ",
                      Ȭ: "Ȭ",
                      Ō: "Ō",
                      Ṓ: "Ṓ",
                      Ṑ: "Ṑ",
                      Ŏ: "Ŏ",
                      Ǒ: "Ǒ",
                      Ô: "Ô",
                      Ố: "Ố",
                      Ồ: "Ồ",
                      Ỗ: "Ỗ",
                      Ȯ: "Ȯ",
                      Ȱ: "Ȱ",
                      Ő: "Ő",
                      Ṕ: "Ṕ",
                      Ṗ: "Ṗ",
                      Ŕ: "Ŕ",
                      Ř: "Ř",
                      Ṙ: "Ṙ",
                      Ś: "Ś",
                      Ṥ: "Ṥ",
                      Š: "Š",
                      Ṧ: "Ṧ",
                      Ŝ: "Ŝ",
                      Ṡ: "Ṡ",
                      Ť: "Ť",
                      Ṫ: "Ṫ",
                      Ú: "Ú",
                      Ù: "Ù",
                      Ü: "Ü",
                      Ǘ: "Ǘ",
                      Ǜ: "Ǜ",
                      Ǖ: "Ǖ",
                      Ǚ: "Ǚ",
                      Ũ: "Ũ",
                      Ṹ: "Ṹ",
                      Ū: "Ū",
                      Ṻ: "Ṻ",
                      Ŭ: "Ŭ",
                      Ǔ: "Ǔ",
                      Û: "Û",
                      Ů: "Ů",
                      Ű: "Ű",
                      Ṽ: "Ṽ",
                      Ẃ: "Ẃ",
                      Ẁ: "Ẁ",
                      Ẅ: "Ẅ",
                      Ŵ: "Ŵ",
                      Ẇ: "Ẇ",
                      Ẍ: "Ẍ",
                      Ẋ: "Ẋ",
                      Ý: "Ý",
                      Ỳ: "Ỳ",
                      Ÿ: "Ÿ",
                      Ỹ: "Ỹ",
                      Ȳ: "Ȳ",
                      Ŷ: "Ŷ",
                      Ẏ: "Ẏ",
                      Ź: "Ź",
                      Ž: "Ž",
                      Ẑ: "Ẑ",
                      Ż: "Ż",
                      ά: "ά",
                      ὰ: "ὰ",
                      ᾱ: "ᾱ",
                      ᾰ: "ᾰ",
                      έ: "έ",
                      ὲ: "ὲ",
                      ή: "ή",
                      ὴ: "ὴ",
                      ί: "ί",
                      ὶ: "ὶ",
                      ϊ: "ϊ",
                      ΐ: "ΐ",
                      ῒ: "ῒ",
                      ῑ: "ῑ",
                      ῐ: "ῐ",
                      ό: "ό",
                      ὸ: "ὸ",
                      ύ: "ύ",
                      ὺ: "ὺ",
                      ϋ: "ϋ",
                      ΰ: "ΰ",
                      ῢ: "ῢ",
                      ῡ: "ῡ",
                      ῠ: "ῠ",
                      ώ: "ώ",
                      ὼ: "ὼ",
                      Ύ: "Ύ",
                      Ὺ: "Ὺ",
                      Ϋ: "Ϋ",
                      Ῡ: "Ῡ",
                      Ῠ: "Ῠ",
                      Ώ: "Ώ",
                      Ὼ: "Ὼ",
                    },
                    Dr = (function () {
                      function t(t, e) {
                        (this.mode = void 0),
                          (this.gullet = void 0),
                          (this.settings = void 0),
                          (this.leftrightDepth = void 0),
                          (this.nextToken = void 0),
                          (this.mode = "math"),
                          (this.gullet = new Or(t, e, this.mode)),
                          (this.settings = e),
                          (this.leftrightDepth = 0);
                      }
                      var e = t.prototype;
                      return (
                        (e.expect = function (t, e) {
                          if ((void 0 === e && (e = !0), this.fetch().text !== t))
                            throw new o(
                              "Expected '" +
                                t +
                                "', got '" +
                                this.fetch().text +
                                "'",
                              this.fetch(),
                            );
                          e && this.consume();
                        }),
                        (e.consume = function () {
                          this.nextToken = null;
                        }),
                        (e.fetch = function () {
                          return (
                            null == this.nextToken &&
                              (this.nextToken = this.gullet.expandNextToken()),
                            this.nextToken
                          );
                        }),
                        (e.switchMode = function (t) {
                          (this.mode = t), this.gullet.switchMode(t);
                        }),
                        (e.parse = function () {
                          this.settings.globalGroup || this.gullet.beginGroup(),
                            this.settings.colorIsTextColor &&
                              this.gullet.macros.set("\\color", "\\textcolor");
                          var t = this.parseExpression(!1);
                          return (
                            this.expect("EOF"),
                            this.settings.globalGroup || this.gullet.endGroup(),
                            t
                          );
                        }),
                        (e.parseExpression = function (e, n) {
                          for (var r = []; ; ) {
                            "math" === this.mode && this.consumeSpaces();
                            var i = this.fetch();
                            if (-1 !== t.endOfExpression.indexOf(i.text)) break;
                            if (n && i.text === n) break;
                            if (e && vr[i.text] && vr[i.text].infix) break;
                            var a = this.parseAtom(n);
                            if (!a) break;
                            "internal" !== a.type && r.push(a);
                          }
                          return (
                            "text" === this.mode && this.formLigatures(r),
                            this.handleInfixNodes(r)
                          );
                        }),
                        (e.handleInfixNodes = function (t) {
                          for (var e, n = -1, r = 0; r < t.length; r++)
                            if ("infix" === t[r].type) {
                              if (-1 !== n)
                                throw new o(
                                  "only one infix operator per group",
                                  t[r].token,
                                );
                              (n = r), (e = t[r].replaceWith);
                            }
                          if (-1 !== n && e) {
                            var i,
                              a,
                              s = t.slice(0, n),
                              l = t.slice(n + 1);
                            return (
                              (i =
                                1 === s.length && "ordgroup" === s[0].type
                                  ? s[0]
                                  : {
                                      type: "ordgroup",
                                      mode: this.mode,
                                      body: s,
                                    }),
                              (a =
                                1 === l.length && "ordgroup" === l[0].type
                                  ? l[0]
                                  : {
                                      type: "ordgroup",
                                      mode: this.mode,
                                      body: l,
                                    }),
                              [
                                "\\\\abovefrac" === e
                                  ? this.callFunction(e, [i, t[n], a], [])
                                  : this.callFunction(e, [i, a], []),
                              ]
                            );
                          }
                          return t;
                        }),
                        (e.handleSupSubscript = function (e) {
                          var n = this.fetch(),
                            r = n.text;
                          this.consume();
                          var i = this.parseGroup(
                            e,
                            !1,
                            t.SUPSUB_GREEDINESS,
                            void 0,
                            void 0,
                            !0,
                          );
                          if (!i)
                            throw new o("Expected group after '" + r + "'", n);
                          return i;
                        }),
                        (e.formatUnsupportedCmd = function (t) {
                          for (var e = [], n = 0; n < t.length; n++)
                            e.push({ type: "textord", mode: "text", text: t[n] });
                          var r = { type: "text", mode: this.mode, body: e };
                          return {
                            type: "color",
                            mode: this.mode,
                            color: this.settings.errorColor,
                            body: [r],
                          };
                        }),
                        (e.parseAtom = function (t) {
                          var e,
                            n,
                            r = this.parseGroup("atom", !1, null, t);
                          if ("text" === this.mode) return r;
                          for (;;) {
                            this.consumeSpaces();
                            var i = this.fetch();
                            if (
                              "\\limits" === i.text ||
                              "\\nolimits" === i.text
                            ) {
                              if (r && "op" === r.type) {
                                var a = "\\limits" === i.text;
                                (r.limits = a), (r.alwaysHandleSupSub = !0);
                              } else {
                                if (
                                  !r ||
                                  "operatorname" !== r.type ||
                                  !r.alwaysHandleSupSub
                                )
                                  throw new o(
                                    "Limit controls must follow a math operator",
                                    i,
                                  );
                                var s = "\\limits" === i.text;
                                r.limits = s;
                              }
                              this.consume();
                            } else if ("^" === i.text) {
                              if (e) throw new o("Double superscript", i);
                              e = this.handleSupSubscript("superscript");
                            } else if ("_" === i.text) {
                              if (n) throw new o("Double subscript", i);
                              n = this.handleSupSubscript("subscript");
                            } else {
                              if ("'" !== i.text) break;
                              if (e) throw new o("Double superscript", i);
                              var l = {
                                  type: "textord",
                                  mode: this.mode,
                                  text: "\\prime",
                                },
                                c = [l];
                              for (this.consume(); "'" === this.fetch().text; )
                                c.push(l), this.consume();
                              "^" === this.fetch().text &&
                                c.push(this.handleSupSubscript("superscript")),
                                (e = {
                                  type: "ordgroup",
                                  mode: this.mode,
                                  body: c,
                                });
                            }
                          }
                          return e || n
                            ? {
                                type: "supsub",
                                mode: this.mode,
                                base: r,
                                sup: e,
                                sub: n,
                              }
                            : r;
                        }),
                        (e.parseFunction = function (t, e, n) {
                          var r = this.fetch(),
                            i = r.text,
                            a = vr[i];
                          if (!a) return null;
                          if ((this.consume(), null != n && a.greediness <= n))
                            throw new o(
                              "Got function '" +
                                i +
                                "' with no arguments" +
                                (e ? " as " + e : ""),
                              r,
                            );
                          if ("text" === this.mode && !a.allowedInText)
                            throw new o(
                              "Can't use function '" + i + "' in text mode",
                              r,
                            );
                          if ("math" === this.mode && !1 === a.allowedInMath)
                            throw new o(
                              "Can't use function '" + i + "' in math mode",
                              r,
                            );
                          var s = this.parseArguments(i, a),
                            l = s.args,
                            c = s.optArgs;
                          return this.callFunction(i, l, c, r, t);
                        }),
                        (e.callFunction = function (t, e, n, r, i) {
                          var a = {
                              funcName: t,
                              parser: this,
                              token: r,
                              breakOnTokenText: i,
                            },
                            s = vr[t];
                          if (s && s.handler) return s.handler(a, e, n);
                          throw new o("No function handler for " + t);
                        }),
                        (e.parseArguments = function (t, e) {
                          var n = e.numArgs + e.numOptionalArgs;
                          if (0 === n) return { args: [], optArgs: [] };
                          for (
                            var r = e.greediness, i = [], a = [], s = 0;
                            s < n;
                            s++
                          ) {
                            var l = e.argTypes && e.argTypes[s],
                              c = s < e.numOptionalArgs,
                              h =
                                (s > 0 && !c) ||
                                (0 === s && !c && "math" === this.mode),
                              u = this.parseGroupOfType(
                                "argument to '" + t + "'",
                                l,
                                c,
                                r,
                                h,
                              );
                            if (!u) {
                              if (c) {
                                a.push(null);
                                continue;
                              }
                              throw new o(
                                "Expected group after '" + t + "'",
                                this.fetch(),
                              );
                            }
                            (c ? a : i).push(u);
                          }
                          return { args: i, optArgs: a };
                        }),
                        (e.parseGroupOfType = function (t, e, n, r, i) {
                          switch (e) {
                            case "color":
                              return (
                                i && this.consumeSpaces(), this.parseColorGroup(n)
                              );
                            case "size":
                              return (
                                i && this.consumeSpaces(), this.parseSizeGroup(n)
                              );
                            case "url":
                              return this.parseUrlGroup(n, i);
                            case "math":
                            case "text":
                              return this.parseGroup(t, n, r, void 0, e, i);
                            case "hbox":
                              var a = this.parseGroup(t, n, r, void 0, "text", i);
                              return a
                                ? {
                                    type: "styling",
                                    mode: a.mode,
                                    body: [a],
                                    style: "text",
                                  }
                                : a;
                            case "raw":
                              if (
                                (i && this.consumeSpaces(),
                                n && "{" === this.fetch().text)
                              )
                                return null;
                              var s = this.parseStringGroup("raw", n, !0);
                              if (s)
                                return {
                                  type: "raw",
                                  mode: "text",
                                  string: s.text,
                                };
                              throw new o("Expected raw group", this.fetch());
                            case "original":
                            case null:
                            case void 0:
                              return this.parseGroup(t, n, r, void 0, void 0, i);
                            default:
                              throw new o(
                                "Unknown group type as " + t,
                                this.fetch(),
                              );
                          }
                        }),
                        (e.consumeSpaces = function () {
                          for (; " " === this.fetch().text; ) this.consume();
                        }),
                        (e.parseStringGroup = function (t, e, n) {
                          var r = e ? "[" : "{",
                            i = e ? "]" : "}",
                            a = this.fetch();
                          if (a.text !== r) {
                            if (e) return null;
                            if (n && "EOF" !== a.text && /[^{}[\]]/.test(a.text))
                              return this.consume(), a;
                          }
                          var s = this.mode;
                          (this.mode = "text"), this.expect(r);
                          for (
                            var l, c = "", h = this.fetch(), u = 0, d = h;
                            (l = this.fetch()).text !== i || (n && u > 0);
  
                          ) {
                            switch (l.text) {
                              case "EOF":
                                throw new o(
                                  "Unexpected end of input in " + t,
                                  h.range(d, c),
                                );
                              case r:
                                u++;
                                break;
                              case i:
                                u--;
                            }
                            (c += (d = l).text), this.consume();
                          }
                          return this.expect(i), (this.mode = s), h.range(d, c);
                        }),
                        (e.parseRegexGroup = function (t, e) {
                          var n = this.mode;
                          this.mode = "text";
                          for (
                            var r, i = this.fetch(), a = i, s = "";
                            "EOF" !== (r = this.fetch()).text &&
                            t.test(s + r.text);
  
                          )
                            (s += (a = r).text), this.consume();
                          if ("" === s)
                            throw new o("Invalid " + e + ": '" + i.text + "'", i);
                          return (this.mode = n), i.range(a, s);
                        }),
                        (e.parseColorGroup = function (t) {
                          var e = this.parseStringGroup("color", t);
                          if (!e) return null;
                          var n = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(
                            e.text,
                          );
                          if (!n)
                            throw new o("Invalid color: '" + e.text + "'", e);
                          var r = n[0];
                          return (
                            /^[0-9a-f]{6}$/i.test(r) && (r = "#" + r),
                            { type: "color-token", mode: this.mode, color: r }
                          );
                        }),
                        (e.parseSizeGroup = function (t) {
                          var e,
                            n = !1;
                          if (
                            !(e =
                              t || "{" === this.fetch().text
                                ? this.parseStringGroup("size", t)
                                : this.parseRegexGroup(
                                    /^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,
                                    "size",
                                  ))
                          )
                            return null;
                          t ||
                            0 !== e.text.length ||
                            ((e.text = "0pt"), (n = !0));
                          var r =
                            /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(
                              e.text,
                            );
                          if (!r)
                            throw new o("Invalid size: '" + e.text + "'", e);
                          var i = { number: +(r[1] + r[2]), unit: r[3] };
                          if (!Pt(i))
                            throw new o("Invalid unit: '" + i.unit + "'", e);
                          return {
                            type: "size",
                            mode: this.mode,
                            value: i,
                            isBlank: n,
                          };
                        }),
                        (e.parseUrlGroup = function (t, e) {
                          this.gullet.lexer.setCatcode("%", 13);
                          var n = this.parseStringGroup("url", t, !0);
                          if ((this.gullet.lexer.setCatcode("%", 14), !n))
                            return null;
                          var r = n.text.replace(/\\([#$%&~_^{}])/g, "$1");
                          return { type: "url", mode: this.mode, url: r };
                        }),
                        (e.parseGroup = function (e, n, i, a, s, l) {
                          var c = this.mode;
                          s && this.switchMode(s), l && this.consumeSpaces();
                          var h,
                            u = this.fetch(),
                            d = u.text;
                          if (n ? "[" === d : "{" === d || "\\begingroup" === d) {
                            this.consume();
                            var m = t.endOfGroup[d];
                            this.gullet.beginGroup();
                            var p = this.parseExpression(!1, m),
                              f = this.fetch();
                            this.expect(m),
                              this.gullet.endGroup(),
                              (h = {
                                type: "ordgroup",
                                mode: this.mode,
                                loc: r.range(u, f),
                                body: p,
                                semisimple: "\\begingroup" === d || void 0,
                              });
                          } else if (n) h = null;
                          else if (
                            null ==
                              (h =
                                this.parseFunction(a, e, i) ||
                                this.parseSymbol()) &&
                            "\\" === d[0] &&
                            !Rr.hasOwnProperty(d)
                          ) {
                            if (this.settings.throwOnError)
                              throw new o("Undefined control sequence: " + d, u);
                            (h = this.formatUnsupportedCmd(d)), this.consume();
                          }
                          return s && this.switchMode(c), h;
                        }),
                        (e.formLigatures = function (t) {
                          for (var e = t.length - 1, n = 0; n < e; ++n) {
                            var i = t[n],
                              a = i.text;
                            "-" === a &&
                              "-" === t[n + 1].text &&
                              (n + 1 < e && "-" === t[n + 2].text
                                ? (t.splice(n, 3, {
                                    type: "textord",
                                    mode: "text",
                                    loc: r.range(i, t[n + 2]),
                                    text: "---",
                                  }),
                                  (e -= 2))
                                : (t.splice(n, 2, {
                                    type: "textord",
                                    mode: "text",
                                    loc: r.range(i, t[n + 1]),
                                    text: "--",
                                  }),
                                  (e -= 1))),
                              ("'" !== a && "`" !== a) ||
                                t[n + 1].text !== a ||
                                (t.splice(n, 2, {
                                  type: "textord",
                                  mode: "text",
                                  loc: r.range(i, t[n + 1]),
                                  text: a + a,
                                }),
                                (e -= 1));
                          }
                        }),
                        (e.parseSymbol = function () {
                          var t = this.fetch(),
                            e = t.text;
                          if (/^\\verb[^a-zA-Z]/.test(e)) {
                            this.consume();
                            var n = e.slice(5),
                              i = "*" === n.charAt(0);
                            if (
                              (i && (n = n.slice(1)),
                              n.length < 2 || n.charAt(0) !== n.slice(-1))
                            )
                              throw new o(
                                "\\verb assertion failed --\n                    please report what input caused this bug",
                              );
                            return {
                              type: "verb",
                              mode: "text",
                              body: (n = n.slice(1, -1)),
                              star: i,
                            };
                          }
                          Hr.hasOwnProperty(e[0]) &&
                            !Y[this.mode][e[0]] &&
                            (this.settings.strict &&
                              "math" === this.mode &&
                              this.settings.reportNonstrict(
                                "unicodeTextInMathMode",
                                'Accented Unicode text character "' +
                                  e[0] +
                                  '" used in math mode',
                                t,
                              ),
                            (e = Hr[e[0]] + e.substr(1)));
                          var a,
                            s = Sr.exec(e);
                          if (
                            (s &&
                              ("i" === (e = e.substring(0, s.index))
                                ? (e = "ı")
                                : "j" === e && (e = "ȷ")),
                            Y[this.mode][e])
                          ) {
                            this.settings.strict &&
                              "math" === this.mode &&
                              At.indexOf(e) >= 0 &&
                              this.settings.reportNonstrict(
                                "unicodeTextInMathMode",
                                'Latin-1/Unicode text character "' +
                                  e[0] +
                                  '" used in math mode',
                                t,
                              );
                            var l,
                              c = Y[this.mode][e].group,
                              h = r.range(t);
                            if (G.hasOwnProperty(c)) {
                              var u = c;
                              l = {
                                type: "atom",
                                mode: this.mode,
                                family: u,
                                loc: h,
                                text: e,
                              };
                            } else
                              l = { type: c, mode: this.mode, loc: h, text: e };
                            a = l;
                          } else {
                            if (!(e.charCodeAt(0) >= 128)) return null;
                            this.settings.strict &&
                              (M(e.charCodeAt(0))
                                ? "math" === this.mode &&
                                  this.settings.reportNonstrict(
                                    "unicodeTextInMathMode",
                                    'Unicode text character "' +
                                      e[0] +
                                      '" used in math mode',
                                    t,
                                  )
                                : this.settings.reportNonstrict(
                                    "unknownSymbol",
                                    'Unrecognized Unicode character "' +
                                      e[0] +
                                      '" (' +
                                      e.charCodeAt(0) +
                                      ")",
                                    t,
                                  )),
                              (a = {
                                type: "textord",
                                mode: "text",
                                loc: r.range(t),
                                text: e,
                              });
                          }
                          if ((this.consume(), s))
                            for (var d = 0; d < s[0].length; d++) {
                              var m = s[0][d];
                              if (!Pr[m])
                                throw new o("Unknown accent ' " + m + "'", t);
                              var p = Pr[m][this.mode];
                              if (!p)
                                throw new o(
                                  "Accent " +
                                    m +
                                    " unsupported in " +
                                    this.mode +
                                    " mode",
                                  t,
                                );
                              a = {
                                type: "accent",
                                mode: this.mode,
                                loc: r.range(t),
                                label: p,
                                isStretchy: !1,
                                isShifty: !0,
                                base: a,
                              };
                            }
                          return a;
                        }),
                        t
                      );
                    })();
                  (Dr.endOfExpression = [
                    "}",
                    "\\endgroup",
                    "\\end",
                    "\\right",
                    "&",
                  ]),
                    (Dr.endOfGroup = {
                      "[": "]",
                      "{": "}",
                      "\\begingroup": "\\endgroup",
                    }),
                    (Dr.SUPSUB_GREEDINESS = 1);
                  var Fr = function (t, e) {
                      if (!("string" == typeof t || t instanceof String))
                        throw new TypeError(
                          "KaTeX can only parse string typed expression",
                        );
                      var n = new Dr(t, e);
                      delete n.gullet.macros.current["\\df@tag"];
                      var r = n.parse();
                      if (n.gullet.macros.get("\\df@tag")) {
                        if (!e.displayMode)
                          throw new o("\\tag works only in display equations");
                        n.gullet.feed("\\df@tag"),
                          (r = [
                            {
                              type: "tag",
                              mode: "text",
                              body: r,
                              tag: n.parse(),
                            },
                          ]);
                      }
                      return r;
                    },
                    jr = function (t, e, n) {
                      e.textContent = "";
                      var r = Ur(t, n).toNode();
                      e.appendChild(r);
                    };
                  "undefined" != typeof document &&
                    "CSS1Compat" !== document.compatMode &&
                    ("undefined" != typeof console &&
                      console.warn(
                        "Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype.",
                      ),
                    (jr = function () {
                      throw new o("KaTeX doesn't work in quirks mode.");
                    }));
                  var Vr = function (t, e, n) {
                      if (n.throwOnError || !(t instanceof o)) throw t;
                      var r = Kt.makeSpan(["katex-error"], [new I(e)]);
                      return (
                        r.setAttribute("title", t.toString()),
                        r.setAttribute("style", "color:" + n.errorColor),
                        r
                      );
                    },
                    Ur = function (t, e) {
                      var n = new d(e);
                      try {
                        return (function (t, e, n) {
                          var r,
                            i = Le(n);
                          if ("mathml" === n.output)
                            return Ee(t, e, i, n.displayMode, !0);
                          if ("html" === n.output) {
                            var a = ke(t, i);
                            r = Kt.makeSpan(["katex"], [a]);
                          } else {
                            var o = Ee(t, e, i, n.displayMode, !1),
                              s = ke(t, i);
                            r = Kt.makeSpan(["katex"], [o, s]);
                          }
                          return _e(r, n);
                        })(Fr(t, n), t, n);
                      } catch (e) {
                        return Vr(e, t, n);
                      }
                    },
                    Gr = {
                      version: "0.12.0",
                      render: jr,
                      renderToString: function (t, e) {
                        return Ur(t, e).toMarkup();
                      },
                      ParseError: o,
                      __parse: function (t, e) {
                        var n = new d(e);
                        return Fr(t, n);
                      },
                      __renderToDomTree: Ur,
                      __renderToHTMLTree: function (t, e) {
                        var n = new d(e);
                        try {
                          return (function (t, e, n) {
                            var r = ke(t, Le(n)),
                              i = Kt.makeSpan(["katex"], [r]);
                            return _e(i, n);
                          })(Fr(t, n), 0, n);
                        } catch (e) {
                          return Vr(e, t, n);
                        }
                      },
                      __setFontMetrics: function (t, e) {
                        D[t] = e;
                      },
                      __defineSymbol: Z,
                      __defineMacro: Cr,
                      __domTree: {
                        Span: q,
                        Anchor: E,
                        SymbolNode: I,
                        SvgNode: R,
                        PathNode: O,
                        LineNode: P,
                      },
                    };
                  e.default = Gr;
                },
              ]).default;
            }),
            (t.exports = n());
        }),
        be((we = { exports: {} }), we.exports),
        we.exports),
      $e = ve(ke);
    function Me(t, e = !1) {
      const n = { displayMode: e, throwOnError: !1 };
      return $e.renderToString(t, n);
    }
    function Se(t) {
      let e, n;
      function r(r) {
        (n = t.getAttribute("title")),
          t.removeAttribute("title"),
          (e = document.createElement("div")),
          (e.textContent = n),
          (e.className = "tooltip-div"),
          (e.style = `\n\t\t\ttop: ${r.pageX + 5}px;\n\t\t\tleft: ${r.pageY + 5}px;\n\t\t`),
          document.body.appendChild(e);
      }
      function i(t) {
        (e.style.left = `${t.pageX + 5}px`), (e.style.top = `${t.pageY + 5}px`);
      }
      function a() {
        document.body.removeChild(e), t.setAttribute("title", n);
      }
      return (
        t.addEventListener("mouseover", r),
        t.addEventListener("mouseleave", a),
        t.addEventListener("mousemove", i),
        {
          destroy() {
            t.removeEventListener("mouseover", r),
              t.removeEventListener("mouseleave", a),
              t.removeEventListener("mousemove", i);
          },
        }
      );
    }
    function ze(e) {
      let n;
      return {
        c() {
          (n = M("section")),
          (n.innerHTML =
            '<h1 class="body-header">Una Introducción Visual</h1> \n  <hr/> \n  <p class="body-text">Las redes neuronales han revolucionado el campo de la inteligencia artificial y\n    son la columna vertebral de los algoritmos populares actuales, como ChatGPT,\n    Stable-Diffusion y muchos otros. En esta introducción visual, haremos un\n    recorrido por los fundamentos de las redes neuronales feed-forward, comenzando\n    desde sus componentes esenciales, entendiendo sus mecanismos de aprendizaje,\n    e incluso obteniendo experiencia práctica al interactuar con una nosotros mismos.</p> \n  <br/> \n  <h1 class="body-header">Qué Es Una Red</h1> \n  <hr/> \n  <p class="body-text">Las redes neuronales son redes - eso está claro. <i>¿Pero qué es una &quot;red&quot;?</i>\n    Una red es una estructura que consiste en nodos computacionales interconectados, o\n    \'neuronas\', organizadas en capas. Estos nodos realizan operaciones matemáticas en\n    los datos de entrada, aprendiendo algunos patrones subyacentes en los datos, antes de producir\n    alguna salida a partir de esos patrones. Si esto suena confuso, no te preocupes, lo\n    aclararemos pronto.\n    <br/><br/>\n    Para desarrollar nuestra intuición, recorreremos la construcción de un gráfico computacional\n    básico hasta llegar a una Red Neuronal:</p> \n  <br/> \n  <br/>');
        },
        m(t, e) {
          w(t, n, e);
        },
        p: t,
        i: t,
        o: t,
        d(t) {
          t && k(n);
        },
      };
    }
    class Ae extends $t {
      constructor(t) {
        super(), kt(this, t, null, ze, s, {});
      }
    }
    function Te(t, e) {
      return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
    }
    function Ne(t) {
      let e = t,
        n = t;
      function r(t, e, r, i) {
        for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
          const a = (r + i) >>> 1;
          n(t[a], e) < 0 ? (r = a + 1) : (i = a);
        }
        return r;
      }
      return (
        1 === t.length &&
          ((e = (e, n) => t(e) - n),
          (n = (function (t) {
            return (e, n) => Te(t(e), n);
          })(t))),
        {
          left: r,
          center: function (t, n, i, a) {
            null == i && (i = 0), null == a && (a = t.length);
            const o = r(t, n, i, a - 1);
            return o > i && e(t[o - 1], n) > -e(t[o], n) ? o - 1 : o;
          },
          right: function (t, e, r, i) {
            for (null == r && (r = 0), null == i && (i = t.length); r < i; ) {
              const a = (r + i) >>> 1;
              n(t[a], e) > 0 ? (i = a) : (r = a + 1);
            }
            return r;
          },
        }
      );
    }
    const Be = Ne(Te).right;
    Ne(function (t) {
      return null === t ? NaN : +t;
    }).center;
    var Ce = Be;
    var qe = Math.sqrt(50),
      Ee = Math.sqrt(10),
      Le = Math.sqrt(2);
    function _e(t, e, n) {
      var r = (e - t) / Math.max(0, n),
        i = Math.floor(Math.log(r) / Math.LN10),
        a = r / Math.pow(10, i);
      return i >= 0
        ? (a >= qe ? 10 : a >= Ee ? 5 : a >= Le ? 2 : 1) * Math.pow(10, i)
        : -Math.pow(10, -i) / (a >= qe ? 10 : a >= Ee ? 5 : a >= Le ? 2 : 1);
    }
    function Ie(t, e) {
      let n;
      if (void 0 === e)
        for (const e of t)
          null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
      else {
        let r = -1;
        for (let i of t)
          null != (i = e(i, ++r, t)) &&
            (n < i || (void 0 === n && i >= i)) &&
            (n = i);
      }
      return n;
    }
    function Re(t, e) {
      let n;
      if (void 0 === e)
        for (const e of t)
          null != e && (n > e || (void 0 === n && e >= e)) && (n = e);
      else {
        let r = -1;
        for (let i of t)
          null != (i = e(i, ++r, t)) &&
            (n > i || (void 0 === n && i >= i)) &&
            (n = i);
      }
      return n;
    }
    function Oe(t, e) {
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.range(t);
          break;
        default:
          this.range(e).domain(t);
      }
      return this;
    }
    const Pe = Symbol("implicit");
    function He() {
      var t = new Map(),
        e = [],
        n = [],
        r = Pe;
      function i(i) {
        var a = i + "",
          o = t.get(a);
        if (!o) {
          if (r !== Pe) return r;
          t.set(a, (o = e.push(i)));
        }
        return n[(o - 1) % n.length];
      }
      return (
        (i.domain = function (n) {
          if (!arguments.length) return e.slice();
          (e = []), (t = new Map());
          for (const r of n) {
            const n = r + "";
            t.has(n) || t.set(n, e.push(r));
          }
          return i;
        }),
        (i.range = function (t) {
          return arguments.length ? ((n = Array.from(t)), i) : n.slice();
        }),
        (i.unknown = function (t) {
          return arguments.length ? ((r = t), i) : r;
        }),
        (i.copy = function () {
          return He(e, n).unknown(r);
        }),
        Oe.apply(i, arguments),
        i
      );
    }
    function De(t, e, n) {
      (t.prototype = e.prototype = n), (n.constructor = t);
    }
    function Fe(t, e) {
      var n = Object.create(t.prototype);
      for (var r in e) n[r] = e[r];
      return n;
    }
    function je() {}
    var Ve = 0.7,
      Ue = 1 / Ve,
      Ge = "\\s*([+-]?\\d+)\\s*",
      We = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      Xe = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      Ye = /^#([0-9a-f]{3,8})$/,
      Ze = new RegExp("^rgb\\(" + [Ge, Ge, Ge] + "\\)$"),
      Ke = new RegExp("^rgb\\(" + [Xe, Xe, Xe] + "\\)$"),
      Je = new RegExp("^rgba\\(" + [Ge, Ge, Ge, We] + "\\)$"),
      Qe = new RegExp("^rgba\\(" + [Xe, Xe, Xe, We] + "\\)$"),
      tn = new RegExp("^hsl\\(" + [We, Xe, Xe] + "\\)$"),
      en = new RegExp("^hsla\\(" + [We, Xe, Xe, We] + "\\)$"),
      nn = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      };
    function rn() {
      return this.rgb().formatHex();
    }
    function an() {
      return this.rgb().formatRgb();
    }
    function on(t) {
      var e, n;
      return (
        (t = (t + "").trim().toLowerCase()),
        (e = Ye.exec(t))
          ? ((n = e[1].length),
            (e = parseInt(e[1], 16)),
            6 === n
              ? sn(e)
              : 3 === n
                ? new un(
                    ((e >> 8) & 15) | ((e >> 4) & 240),
                    ((e >> 4) & 15) | (240 & e),
                    ((15 & e) << 4) | (15 & e),
                    1,
                  )
                : 8 === n
                  ? ln(
                      (e >> 24) & 255,
                      (e >> 16) & 255,
                      (e >> 8) & 255,
                      (255 & e) / 255,
                    )
                  : 4 === n
                    ? ln(
                        ((e >> 12) & 15) | ((e >> 8) & 240),
                        ((e >> 8) & 15) | ((e >> 4) & 240),
                        ((e >> 4) & 15) | (240 & e),
                        (((15 & e) << 4) | (15 & e)) / 255,
                      )
                    : null)
          : (e = Ze.exec(t))
            ? new un(e[1], e[2], e[3], 1)
            : (e = Ke.exec(t))
              ? new un(
                  (255 * e[1]) / 100,
                  (255 * e[2]) / 100,
                  (255 * e[3]) / 100,
                  1,
                )
              : (e = Je.exec(t))
                ? ln(e[1], e[2], e[3], e[4])
                : (e = Qe.exec(t))
                  ? ln(
                      (255 * e[1]) / 100,
                      (255 * e[2]) / 100,
                      (255 * e[3]) / 100,
                      e[4],
                    )
                  : (e = tn.exec(t))
                    ? fn(e[1], e[2] / 100, e[3] / 100, 1)
                    : (e = en.exec(t))
                      ? fn(e[1], e[2] / 100, e[3] / 100, e[4])
                      : nn.hasOwnProperty(t)
                        ? sn(nn[t])
                        : "transparent" === t
                          ? new un(NaN, NaN, NaN, 0)
                          : null
      );
    }
    function sn(t) {
      return new un((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
    }
    function ln(t, e, n, r) {
      return r <= 0 && (t = e = n = NaN), new un(t, e, n, r);
    }
    function cn(t) {
      return (
        t instanceof je || (t = on(t)),
        t ? new un((t = t.rgb()).r, t.g, t.b, t.opacity) : new un()
      );
    }
    function hn(t, e, n, r) {
      return 1 === arguments.length ? cn(t) : new un(t, e, n, null == r ? 1 : r);
    }
    function un(t, e, n, r) {
      (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
    }
    function dn() {
      return "#" + pn(this.r) + pn(this.g) + pn(this.b);
    }
    function mn() {
      var t = this.opacity;
      return (
        (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
          ? "rgb("
          : "rgba(") +
        Math.max(0, Math.min(255, Math.round(this.r) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.g) || 0)) +
        ", " +
        Math.max(0, Math.min(255, Math.round(this.b) || 0)) +
        (1 === t ? ")" : ", " + t + ")")
      );
    }
    function pn(t) {
      return (
        ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") +
        t.toString(16)
      );
    }
    function fn(t, e, n, r) {
      return (
        r <= 0
          ? (t = e = n = NaN)
          : n <= 0 || n >= 1
            ? (t = e = NaN)
            : e <= 0 && (t = NaN),
        new yn(t, e, n, r)
      );
    }
    function gn(t) {
      if (t instanceof yn) return new yn(t.h, t.s, t.l, t.opacity);
      if ((t instanceof je || (t = on(t)), !t)) return new yn();
      if (t instanceof yn) return t;
      var e = (t = t.rgb()).r / 255,
        n = t.g / 255,
        r = t.b / 255,
        i = Math.min(e, n, r),
        a = Math.max(e, n, r),
        o = NaN,
        s = a - i,
        l = (a + i) / 2;
      return (
        s
          ? ((o =
              e === a
                ? (n - r) / s + 6 * (n < r)
                : n === a
                  ? (r - e) / s + 2
                  : (e - n) / s + 4),
            (s /= l < 0.5 ? a + i : 2 - a - i),
            (o *= 60))
          : (s = l > 0 && l < 1 ? 0 : o),
        new yn(o, s, l, t.opacity)
      );
    }
    function yn(t, e, n, r) {
      (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
    }
    function xn(t, e, n) {
      return (
        255 *
        (t < 60
          ? e + ((n - e) * t) / 60
          : t < 180
            ? n
            : t < 240
              ? e + ((n - e) * (240 - t)) / 60
              : e)
      );
    }
    De(je, on, {
      copy: function (t) {
        return Object.assign(new this.constructor(), this, t);
      },
      displayable: function () {
        return this.rgb().displayable();
      },
      hex: rn,
      formatHex: rn,
      formatHsl: function () {
        return gn(this).formatHsl();
      },
      formatRgb: an,
      toString: an,
    }),
      De(
        un,
        hn,
        Fe(je, {
          brighter: function (t) {
            return (
              (t = null == t ? Ue : Math.pow(Ue, t)),
              new un(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? Ve : Math.pow(Ve, t)),
              new un(this.r * t, this.g * t, this.b * t, this.opacity)
            );
          },
          rgb: function () {
            return this;
          },
          displayable: function () {
            return (
              -0.5 <= this.r &&
              this.r < 255.5 &&
              -0.5 <= this.g &&
              this.g < 255.5 &&
              -0.5 <= this.b &&
              this.b < 255.5 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          hex: dn,
          formatHex: dn,
          formatRgb: mn,
          toString: mn,
        }),
      ),
      De(
        yn,
        function (t, e, n, r) {
          return 1 === arguments.length
            ? gn(t)
            : new yn(t, e, n, null == r ? 1 : r);
        },
        Fe(je, {
          brighter: function (t) {
            return (
              (t = null == t ? Ue : Math.pow(Ue, t)),
              new yn(this.h, this.s, this.l * t, this.opacity)
            );
          },
          darker: function (t) {
            return (
              (t = null == t ? Ve : Math.pow(Ve, t)),
              new yn(this.h, this.s, this.l * t, this.opacity)
            );
          },
          rgb: function () {
            var t = (this.h % 360) + 360 * (this.h < 0),
              e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
              n = this.l,
              r = n + (n < 0.5 ? n : 1 - n) * e,
              i = 2 * n - r;
            return new un(
              xn(t >= 240 ? t - 240 : t + 120, i, r),
              xn(t, i, r),
              xn(t < 120 ? t + 240 : t - 120, i, r),
              this.opacity,
            );
          },
          displayable: function () {
            return (
              ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
              0 <= this.l &&
              this.l <= 1 &&
              0 <= this.opacity &&
              this.opacity <= 1
            );
          },
          formatHsl: function () {
            var t = this.opacity;
            return (
              (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)))
                ? "hsl("
                : "hsla(") +
              (this.h || 0) +
              ", " +
              100 * (this.s || 0) +
              "%, " +
              100 * (this.l || 0) +
              "%" +
              (1 === t ? ")" : ", " + t + ")")
            );
          },
        }),
      );
    var vn = (t) => () => t;
    function bn(t) {
      return 1 == (t = +t)
        ? wn
        : function (e, n) {
            return n - e
              ? (function (t, e, n) {
                  return (
                    (t = Math.pow(t, n)),
                    (e = Math.pow(e, n) - t),
                    (n = 1 / n),
                    function (r) {
                      return Math.pow(t + r * e, n);
                    }
                  );
                })(e, n, t)
              : vn(isNaN(e) ? n : e);
          };
    }
    function wn(t, e) {
      var n = e - t;
      return n
        ? (function (t, e) {
            return function (n) {
              return t + n * e;
            };
          })(t, n)
        : vn(isNaN(t) ? e : t);
    }
    var kn = (function t(e) {
      var n = bn(e);
      function r(t, e) {
        var r = n((t = hn(t)).r, (e = hn(e)).r),
          i = n(t.g, e.g),
          a = n(t.b, e.b),
          o = wn(t.opacity, e.opacity);
        return function (e) {
          return (
            (t.r = r(e)), (t.g = i(e)), (t.b = a(e)), (t.opacity = o(e)), t + ""
          );
        };
      }
      return (r.gamma = t), r;
    })(1);
    function $n(t, e) {
      e || (e = []);
      var n,
        r = t ? Math.min(e.length, t.length) : 0,
        i = e.slice();
      return function (a) {
        for (n = 0; n < r; ++n) i[n] = t[n] * (1 - a) + e[n] * a;
        return i;
      };
    }
    function Mn(t, e) {
      var n,
        r = e ? e.length : 0,
        i = t ? Math.min(r, t.length) : 0,
        a = new Array(i),
        o = new Array(r);
      for (n = 0; n < i; ++n) a[n] = Cn(t[n], e[n]);
      for (; n < r; ++n) o[n] = e[n];
      return function (t) {
        for (n = 0; n < i; ++n) o[n] = a[n](t);
        return o;
      };
    }
    function Sn(t, e) {
      var n = new Date();
      return (
        (t = +t),
        (e = +e),
        function (r) {
          return n.setTime(t * (1 - r) + e * r), n;
        }
      );
    }
    function zn(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return t * (1 - n) + e * n;
        }
      );
    }
    function An(t, e) {
      var n,
        r = {},
        i = {};
      for (n in ((null !== t && "object" == typeof t) || (t = {}),
      (null !== e && "object" == typeof e) || (e = {}),
      e))
        n in t ? (r[n] = Cn(t[n], e[n])) : (i[n] = e[n]);
      return function (t) {
        for (n in r) i[n] = r[n](t);
        return i;
      };
    }
    var Tn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      Nn = new RegExp(Tn.source, "g");
    function Bn(t, e) {
      var n,
        r,
        i,
        a = (Tn.lastIndex = Nn.lastIndex = 0),
        o = -1,
        s = [],
        l = [];
      for (t += "", e += ""; (n = Tn.exec(t)) && (r = Nn.exec(e)); )
        (i = r.index) > a &&
          ((i = e.slice(a, i)), s[o] ? (s[o] += i) : (s[++o] = i)),
          (n = n[0]) === (r = r[0])
            ? s[o]
              ? (s[o] += r)
              : (s[++o] = r)
            : ((s[++o] = null), l.push({ i: o, x: zn(n, r) })),
          (a = Nn.lastIndex);
      return (
        a < e.length && ((i = e.slice(a)), s[o] ? (s[o] += i) : (s[++o] = i)),
        s.length < 2
          ? l[0]
            ? (function (t) {
                return function (e) {
                  return t(e) + "";
                };
              })(l[0].x)
            : (function (t) {
                return function () {
                  return t;
                };
              })(e)
          : ((e = l.length),
            function (t) {
              for (var n, r = 0; r < e; ++r) s[(n = l[r]).i] = n.x(t);
              return s.join("");
            })
      );
    }
    function Cn(t, e) {
      var n,
        r = typeof e;
      return null == e || "boolean" === r
        ? vn(e)
        : ("number" === r
            ? zn
            : "string" === r
              ? (n = on(e))
                ? ((e = n), kn)
                : Bn
              : e instanceof on
                ? kn
                : e instanceof Date
                  ? Sn
                  : (function (t) {
                        return ArrayBuffer.isView(t) && !(t instanceof DataView);
                      })(e)
                    ? $n
                    : Array.isArray(e)
                      ? Mn
                      : ("function" != typeof e.valueOf &&
                            "function" != typeof e.toString) ||
                          isNaN(e)
                        ? An
                        : zn)(t, e);
    }
    function qn(t, e) {
      return (
        (t = +t),
        (e = +e),
        function (n) {
          return Math.round(t * (1 - n) + e * n);
        }
      );
    }
    function En(t) {
      return +t;
    }
    var Ln = [0, 1];
    function _n(t) {
      return t;
    }
    function In(t, e) {
      return (e -= t = +t)
        ? function (n) {
            return (n - t) / e;
          }
        : (function (t) {
            return function () {
              return t;
            };
          })(isNaN(e) ? NaN : 0.5);
    }
    function Rn(t, e, n) {
      var r = t[0],
        i = t[1],
        a = e[0],
        o = e[1];
      return (
        i < r ? ((r = In(i, r)), (a = n(o, a))) : ((r = In(r, i)), (a = n(a, o))),
        function (t) {
          return a(r(t));
        }
      );
    }
    function On(t, e, n) {
      var r = Math.min(t.length, e.length) - 1,
        i = new Array(r),
        a = new Array(r),
        o = -1;
      for (
        t[r] < t[0] && ((t = t.slice().reverse()), (e = e.slice().reverse()));
        ++o < r;
  
      )
        (i[o] = In(t[o], t[o + 1])), (a[o] = n(e[o], e[o + 1]));
      return function (e) {
        var n = Ce(t, e, 1, r) - 1;
        return a[n](i[n](e));
      };
    }
    function Pn(t, e) {
      return e
        .domain(t.domain())
        .range(t.range())
        .interpolate(t.interpolate())
        .clamp(t.clamp())
        .unknown(t.unknown());
    }
    function Hn() {
      var t,
        e,
        n,
        r,
        i,
        a,
        o = Ln,
        s = Ln,
        l = Cn,
        c = _n;
      function h() {
        var t,
          e,
          n,
          l = Math.min(o.length, s.length);
        return (
          c !== _n &&
            ((t = o[0]),
            (e = o[l - 1]),
            t > e && ((n = t), (t = e), (e = n)),
            (c = function (n) {
              return Math.max(t, Math.min(e, n));
            })),
          (r = l > 2 ? On : Rn),
          (i = a = null),
          u
        );
      }
      function u(e) {
        return null == e || isNaN((e = +e))
          ? n
          : (i || (i = r(o.map(t), s, l)))(t(c(e)));
      }
      return (
        (u.invert = function (n) {
          return c(e((a || (a = r(s, o.map(t), zn)))(n)));
        }),
        (u.domain = function (t) {
          return arguments.length ? ((o = Array.from(t, En)), h()) : o.slice();
        }),
        (u.range = function (t) {
          return arguments.length ? ((s = Array.from(t)), h()) : s.slice();
        }),
        (u.rangeRound = function (t) {
          return (s = Array.from(t)), (l = qn), h();
        }),
        (u.clamp = function (t) {
          return arguments.length ? ((c = !!t || _n), h()) : c !== _n;
        }),
        (u.interpolate = function (t) {
          return arguments.length ? ((l = t), h()) : l;
        }),
        (u.unknown = function (t) {
          return arguments.length ? ((n = t), u) : n;
        }),
        function (n, r) {
          return (t = n), (e = r), h();
        }
      );
    }
    function Dn() {
      return Hn()(_n, _n);
    }
    function Fn(t, e) {
      if (
        (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) <
        0
      )
        return null;
      var n,
        r = t.slice(0, n);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(n + 1)];
    }
    function jn(t) {
      return (t = Fn(Math.abs(t))) ? t[1] : NaN;
    }
    var Vn,
      Un =
        /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
    function Gn(t) {
      if (!(e = Un.exec(t))) throw new Error("invalid format: " + t);
      var e;
      return new Wn({
        fill: e[1],
        align: e[2],
        sign: e[3],
        symbol: e[4],
        zero: e[5],
        width: e[6],
        comma: e[7],
        precision: e[8] && e[8].slice(1),
        trim: e[9],
        type: e[10],
      });
    }
    function Wn(t) {
      (this.fill = void 0 === t.fill ? " " : t.fill + ""),
        (this.align = void 0 === t.align ? ">" : t.align + ""),
        (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
        (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
        (this.zero = !!t.zero),
        (this.width = void 0 === t.width ? void 0 : +t.width),
        (this.comma = !!t.comma),
        (this.precision = void 0 === t.precision ? void 0 : +t.precision),
        (this.trim = !!t.trim),
        (this.type = void 0 === t.type ? "" : t.type + "");
    }
    function Xn(t, e) {
      var n = Fn(t, e);
      if (!n) return t + "";
      var r = n[0],
        i = n[1];
      return i < 0
        ? "0." + new Array(-i).join("0") + r
        : r.length > i + 1
          ? r.slice(0, i + 1) + "." + r.slice(i + 1)
          : r + new Array(i - r.length + 2).join("0");
    }
    (Gn.prototype = Wn.prototype),
      (Wn.prototype.toString = function () {
        return (
          this.fill +
          this.align +
          this.sign +
          this.symbol +
          (this.zero ? "0" : "") +
          (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
          (this.comma ? "," : "") +
          (void 0 === this.precision
            ? ""
            : "." + Math.max(0, 0 | this.precision)) +
          (this.trim ? "~" : "") +
          this.type
        );
      });
    var Yn = {
      "%": (t, e) => (100 * t).toFixed(e),
      b: (t) => Math.round(t).toString(2),
      c: (t) => t + "",
      d: function (t) {
        return Math.abs((t = Math.round(t))) >= 1e21
          ? t.toLocaleString("en").replace(/,/g, "")
          : t.toString(10);
      },
      e: (t, e) => t.toExponential(e),
      f: (t, e) => t.toFixed(e),
      g: (t, e) => t.toPrecision(e),
      o: (t) => Math.round(t).toString(8),
      p: (t, e) => Xn(100 * t, e),
      r: Xn,
      s: function (t, e) {
        var n = Fn(t, e);
        if (!n) return t + "";
        var r = n[0],
          i = n[1],
          a = i - (Vn = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
          o = r.length;
        return a === o
          ? r
          : a > o
            ? r + new Array(a - o + 1).join("0")
            : a > 0
              ? r.slice(0, a) + "." + r.slice(a)
              : "0." +
                new Array(1 - a).join("0") +
                Fn(t, Math.max(0, e + a - 1))[0];
      },
      X: (t) => Math.round(t).toString(16).toUpperCase(),
      x: (t) => Math.round(t).toString(16),
    };
    function Zn(t) {
      return t;
    }
    var Kn,
      Jn,
      Qn,
      tr = Array.prototype.map,
      er = [
        "y",
        "z",
        "a",
        "f",
        "p",
        "n",
        "µ",
        "m",
        "",
        "k",
        "M",
        "G",
        "T",
        "P",
        "E",
        "Z",
        "Y",
      ];
    function nr(t) {
      var e,
        n,
        r =
          void 0 === t.grouping || void 0 === t.thousands
            ? Zn
            : ((e = tr.call(t.grouping, Number)),
              (n = t.thousands + ""),
              function (t, r) {
                for (
                  var i = t.length, a = [], o = 0, s = e[0], l = 0;
                  i > 0 &&
                  s > 0 &&
                  (l + s + 1 > r && (s = Math.max(1, r - l)),
                  a.push(t.substring((i -= s), i + s)),
                  !((l += s + 1) > r));
  
                )
                  s = e[(o = (o + 1) % e.length)];
                return a.reverse().join(n);
              }),
        i = void 0 === t.currency ? "" : t.currency[0] + "",
        a = void 0 === t.currency ? "" : t.currency[1] + "",
        o = void 0 === t.decimal ? "." : t.decimal + "",
        s =
          void 0 === t.numerals
            ? Zn
            : (function (t) {
                return function (e) {
                  return e.replace(/[0-9]/g, function (e) {
                    return t[+e];
                  });
                };
              })(tr.call(t.numerals, String)),
        l = void 0 === t.percent ? "%" : t.percent + "",
        c = void 0 === t.minus ? "−" : t.minus + "",
        h = void 0 === t.nan ? "NaN" : t.nan + "";
      function u(t) {
        var e = (t = Gn(t)).fill,
          n = t.align,
          u = t.sign,
          d = t.symbol,
          m = t.zero,
          p = t.width,
          f = t.comma,
          g = t.precision,
          y = t.trim,
          x = t.type;
        "n" === x
          ? ((f = !0), (x = "g"))
          : Yn[x] || (void 0 === g && (g = 12), (y = !0), (x = "g")),
          (m || ("0" === e && "=" === n)) && ((m = !0), (e = "0"), (n = "="));
        var v =
            "$" === d
              ? i
              : "#" === d && /[boxX]/.test(x)
                ? "0" + x.toLowerCase()
                : "",
          b = "$" === d ? a : /[%p]/.test(x) ? l : "",
          w = Yn[x],
          k = /[defgprs%]/.test(x);
        function $(t) {
          var i,
            a,
            l,
            d = v,
            $ = b;
          if ("c" === x) ($ = w(t) + $), (t = "");
          else {
            var M = (t = +t) < 0 || 1 / t < 0;
            if (
              ((t = isNaN(t) ? h : w(Math.abs(t), g)),
              y &&
                (t = (function (t) {
                  t: for (var e, n = t.length, r = 1, i = -1; r < n; ++r)
                    switch (t[r]) {
                      case ".":
                        i = e = r;
                        break;
                      case "0":
                        0 === i && (i = r), (e = r);
                        break;
                      default:
                        if (!+t[r]) break t;
                        i > 0 && (i = 0);
                    }
                  return i > 0 ? t.slice(0, i) + t.slice(e + 1) : t;
                })(t)),
              M && 0 == +t && "+" !== u && (M = !1),
              (d =
                (M ? ("(" === u ? u : c) : "-" === u || "(" === u ? "" : u) + d),
              ($ =
                ("s" === x ? er[8 + Vn / 3] : "") +
                $ +
                (M && "(" === u ? ")" : "")),
              k)
            )
              for (i = -1, a = t.length; ++i < a; )
                if (48 > (l = t.charCodeAt(i)) || l > 57) {
                  ($ = (46 === l ? o + t.slice(i + 1) : t.slice(i)) + $),
                    (t = t.slice(0, i));
                  break;
                }
          }
          f && !m && (t = r(t, 1 / 0));
          var S = d.length + t.length + $.length,
            z = S < p ? new Array(p - S + 1).join(e) : "";
          switch (
            (f &&
              m &&
              ((t = r(z + t, z.length ? p - $.length : 1 / 0)), (z = "")),
            n)
          ) {
            case "<":
              t = d + t + $ + z;
              break;
            case "=":
              t = d + z + t + $;
              break;
            case "^":
              t = z.slice(0, (S = z.length >> 1)) + d + t + $ + z.slice(S);
              break;
            default:
              t = z + d + t + $;
          }
          return s(t);
        }
        return (
          (g =
            void 0 === g
              ? 6
              : /[gprs]/.test(x)
                ? Math.max(1, Math.min(21, g))
                : Math.max(0, Math.min(20, g))),
          ($.toString = function () {
            return t + "";
          }),
          $
        );
      }
      return {
        format: u,
        formatPrefix: function (t, e) {
          var n = u((((t = Gn(t)).type = "f"), t)),
            r = 3 * Math.max(-8, Math.min(8, Math.floor(jn(e) / 3))),
            i = Math.pow(10, -r),
            a = er[8 + r / 3];
          return function (t) {
            return n(i * t) + a;
          };
        },
      };
    }
    function rr(t, e, n, r) {
      var i,
        a = (function (t, e, n) {
          var r = Math.abs(e - t) / Math.max(0, n),
            i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
            a = r / i;
          return (
            a >= qe ? (i *= 10) : a >= Ee ? (i *= 5) : a >= Le && (i *= 2),
            e < t ? -i : i
          );
        })(t, e, n);
      switch ((r = Gn(null == r ? ",f" : r)).type) {
        case "s":
          var o = Math.max(Math.abs(t), Math.abs(e));
          return (
            null != r.precision ||
              isNaN(
                (i = (function (t, e) {
                  return Math.max(
                    0,
                    3 * Math.max(-8, Math.min(8, Math.floor(jn(e) / 3))) -
                      jn(Math.abs(t)),
                  );
                })(a, o)),
              ) ||
              (r.precision = i),
            Qn(r, o)
          );
        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != r.precision ||
            isNaN(
              (i = (function (t, e) {
                return (
                  (t = Math.abs(t)),
                  (e = Math.abs(e) - t),
                  Math.max(0, jn(e) - jn(t)) + 1
                );
              })(a, Math.max(Math.abs(t), Math.abs(e)))),
            ) ||
            (r.precision = i - ("e" === r.type));
          break;
        case "f":
        case "%":
          null != r.precision ||
            isNaN(
              (i = (function (t) {
                return Math.max(0, -jn(Math.abs(t)));
              })(a)),
            ) ||
            (r.precision = i - 2 * ("%" === r.type));
      }
      return Jn(r);
    }
    function ir(t) {
      var e = t.domain;
      return (
        (t.ticks = function (t) {
          var n = e();
          return (function (t, e, n) {
            var r,
              i,
              a,
              o,
              s = -1;
            if (((n = +n), (t = +t) == (e = +e) && n > 0)) return [t];
            if (
              ((r = e < t) && ((i = t), (t = e), (e = i)),
              0 === (o = _e(t, e, n)) || !isFinite(o))
            )
              return [];
            if (o > 0) {
              let n = Math.round(t / o),
                r = Math.round(e / o);
              for (
                n * o < t && ++n,
                  r * o > e && --r,
                  a = new Array((i = r - n + 1));
                ++s < i;
  
              )
                a[s] = (n + s) * o;
            } else {
              o = -o;
              let n = Math.round(t * o),
                r = Math.round(e * o);
              for (
                n / o < t && ++n,
                  r / o > e && --r,
                  a = new Array((i = r - n + 1));
                ++s < i;
  
              )
                a[s] = (n + s) / o;
            }
            return r && a.reverse(), a;
          })(n[0], n[n.length - 1], null == t ? 10 : t);
        }),
        (t.tickFormat = function (t, n) {
          var r = e();
          return rr(r[0], r[r.length - 1], null == t ? 10 : t, n);
        }),
        (t.nice = function (n) {
          null == n && (n = 10);
          var r,
            i,
            a = e(),
            o = 0,
            s = a.length - 1,
            l = a[o],
            c = a[s],
            h = 10;
          for (
            c < l && ((i = l), (l = c), (c = i), (i = o), (o = s), (s = i));
            h-- > 0;
  
          ) {
            if ((i = _e(l, c, n)) === r) return (a[o] = l), (a[s] = c), e(a);
            if (i > 0) (l = Math.floor(l / i) * i), (c = Math.ceil(c / i) * i);
            else {
              if (!(i < 0)) break;
              (l = Math.ceil(l * i) / i), (c = Math.floor(c * i) / i);
            }
            r = i;
          }
          return t;
        }),
        t
      );
    }
    function ar() {
      var t = Dn();
      return (
        (t.copy = function () {
          return Pn(t, ar());
        }),
        Oe.apply(t, arguments),
        ir(t)
      );
    }
    function or(t, { delay: n = 0, duration: r = 400, easing: i = e } = {}) {
      const a = +getComputedStyle(t).opacity;
      return {
        delay: n,
        duration: r,
        easing: i,
        css: (t) => "opacity: " + t * a,
      };
    }
    function sr(
      t,
      {
        delay: e = 0,
        duration: n = 400,
        easing: r = Tt,
        x: i = 0,
        y: a = 0,
        opacity: o = 0,
      } = {},
    ) {
      const s = getComputedStyle(t),
        l = +s.opacity,
        c = "none" === s.transform ? "" : s.transform,
        h = l * (1 - o);
      return {
        delay: e,
        duration: n,
        easing: r,
        css: (t, e) =>
          `\n\t\t\ttransform: ${c} translate(${(1 - t) * i}px, ${(1 - t) * a}px);\n\t\t\topacity: ${l - h * e}`,
      };
    }
    function lr(t, { delay: e = 0, speed: n, duration: r, easing: i = At } = {}) {
      let a = t.getTotalLength();
      const o = getComputedStyle(t);
      return (
        "butt" !== o.strokeLinecap && (a += parseInt(o.strokeWidth)),
        void 0 === r
          ? (r = void 0 === n ? 800 : a / n)
          : "function" == typeof r && (r = r(a)),
        {
          delay: e,
          duration: r,
          easing: i,
          css: (t, e) => `stroke-dasharray: ${t * a} ${e * a}`,
        }
      );
    }
    (Kn = nr({ thousands: ",", grouping: [3], currency: ["$", ""] })),
      (Jn = Kn.format),
      (Qn = Kn.formatPrefix);
    var cr = Math.PI / 3,
      hr = [0, cr, 2 * cr, 3 * cr, 4 * cr, 5 * cr];
    function ur(t) {
      return t[0];
    }
    function dr(t) {
      return t[1];
    }
    function mr() {
      var t,
        e,
        n,
        r = 0,
        i = 0,
        a = 1,
        o = 1,
        s = ur,
        l = dr;
      function c(t) {
        var r,
          i = {},
          a = [],
          o = t.length;
        for (r = 0; r < o; ++r)
          if (
            !isNaN((h = +s.call(null, (c = t[r]), r, t))) &&
            !isNaN((u = +l.call(null, c, r, t)))
          ) {
            var c,
              h,
              u,
              d = Math.round((u /= n)),
              m = Math.round((h = h / e - (1 & d) / 2)),
              p = u - d;
            if (3 * Math.abs(p) > 1) {
              var f = h - m,
                g = m + (h < m ? -1 : 1) / 2,
                y = d + (u < d ? -1 : 1),
                x = h - g,
                v = u - y;
              f * f + p * p > x * x + v * v &&
                ((m = g + (1 & d ? 1 : -1) / 2), (d = y));
            }
            var b = m + "-" + d,
              w = i[b];
            w
              ? w.push(c)
              : (a.push((w = i[b] = [c])),
                (w.x = (m + (1 & d) / 2) * e),
                (w.y = d * n));
          }
        return a;
      }
      function h(t) {
        var e = 0,
          n = 0;
        return hr.map(function (r) {
          var i = Math.sin(r) * t,
            a = -Math.cos(r) * t,
            o = i - e,
            s = a - n;
          return (e = i), (n = a), [o, s];
        });
      }
      return (
        (c.hexagon = function (e) {
          return "m" + h(null == e ? t : +e).join("l") + "z";
        }),
        (c.centers = function () {
          for (
            var s = [], l = Math.round(i / n), c = Math.round(r / e), h = l * n;
            h < o + t;
            h += n, ++l
          )
            for (var u = c * e + ((1 & l) * e) / 2; u < a + e / 2; u += e)
              s.push([u, h]);
          return s;
        }),
        (c.mesh = function () {
          var e = h(t).slice(0, 4).join("l");
          return c
            .centers()
            .map(function (t) {
              return "M" + t + "m" + e;
            })
            .join("");
        }),
        (c.x = function (t) {
          return arguments.length ? ((s = t), c) : s;
        }),
        (c.y = function (t) {
          return arguments.length ? ((l = t), c) : l;
        }),
        (c.radius = function (r) {
          return arguments.length
            ? ((e = 2 * (t = +r) * Math.sin(cr)), (n = 1.5 * t), c)
            : t;
        }),
        (c.size = function (t) {
          return arguments.length
            ? ((r = i = 0), (a = +t[0]), (o = +t[1]), c)
            : [a - r, o - i];
        }),
        (c.extent = function (t) {
          return arguments.length
            ? ((r = +t[0][0]), (i = +t[0][1]), (a = +t[1][0]), (o = +t[1][1]), c)
            : [
                [r, i],
                [a, o],
              ];
        }),
        c.radius(1)
      );
    }
    const pr = [
        { x1: -0.4888960549, x2: -0.0383988251, y: 1 },
        { x1: 0.0993915896, x2: -0.9974667855, y: -1 },
        { x1: -0.3263052583, x2: 0.3161565274, y: 1 },
        { x1: 0.0605679463, x2: 0.5880424401, y: 1 },
        { x1: 0.6376729364, x2: -0.6177244631, y: -1 },
        { x1: -0.2110403683, x2: -0.4880675897, y: 1 },
        { x1: 0.4395336313, x2: 0.3400497506, y: 1 },
        { x1: -0.2929866376, x2: -1.0197641553, y: -1 },
        { x1: -0.9546674583, x2: 0.1485268453, y: -1 },
        { x1: 0.8635752642, x2: -0.3788974988, y: -1 },
        { x1: -1.0060463856, x2: -0.1804166539, y: -1 },
        { x1: 0.3742079385, x2: -0.2613491662, y: 1 },
        { x1: 1.0349199471, x2: -0.0085814418, y: -1 },
        { x1: 0.0469090305, x2: 1.0551654626, y: -1 },
        { x1: 0.5392766062, x2: 0.1328005046, y: 1 },
        { x1: -0.4566720084, x2: -0.0889215159, y: 1 },
        { x1: -0.2506221751, x2: 0.9661218168, y: -1 },
        { x1: -0.6781325005, x2: -0.7619421042, y: -1 },
        { x1: 0.8903012332, x2: 0.3355753959, y: -1 },
        { x1: 0.7368320771, x2: 0.6599305981, y: -1 },
        { x1: 0.1718466603, x2: -0.4727942515, y: 1 },
        { x1: 0.4922675758, x2: 0.9290516618, y: -1 },
        { x1: -0.0519020759, x2: -0.4837237733, y: 1 },
        { x1: -0.2168857743, x2: 0.44506881, y: 1 },
        { x1: 0.0784138344, x2: -0.4341654442, y: 1 },
        { x1: -0.8625045201, x2: -0.5649155516, y: -1 },
        { x1: -0.0262154717, x2: 0.5540787167, y: 1 },
        { x1: 0.391138546, x2: 0.2029077188, y: 1 },
        { x1: -0.5720674615, x2: 0.224484116, y: 1 },
        { x1: -0.6493227784, x2: 0.8372276367, y: -1 },
        { x1: 0.219256212, x2: 0.4496573239, y: 1 },
        { x1: 0.4008104592, x2: -0.1850503862, y: 1 },
        { x1: -0.8532079989, x2: 0.5744908512, y: -1 },
        { x1: 0.5354523979, x2: -0.8661288143, y: -1 },
        { x1: -0.3681396991, x2: -0.3727995934, y: 1 },
      ],
      fr = [
        { x1: -0.9588484435, x2: 0.1866415383, y: -1 },
        { x1: 1.1484861898, x2: 0.1457825164, y: -1 },
        { x1: 0.895181957, x2: 0.1709142495, y: -1 },
        { x1: 1.7209114162, x2: -0.2299073105, y: 1 },
        { x1: -0.2817024416, x2: 0.9181510348, y: -1 },
        { x1: 0.8585663464, x2: -0.3964924632, y: 1 },
        { x1: 0.2841866125, x2: 1.1138623333, y: -1 },
        { x1: 0.8368207086, x2: 0.6260202672, y: -1 },
        { x1: 0.4065955817, x2: 0.9007876719, y: -1 },
        { x1: -0.7179753897, x2: 0.6688534647, y: -1 },
        { x1: -0.9187088804, x2: -0.0338011069, y: -1 },
        { x1: -0.0223400581, x2: 0.0082875334, y: 1 },
        { x1: 1.8664977599, x2: 0.2755227583, y: 1 },
        { x1: 0.6082728168, x2: -0.4058432405, y: 1 },
        { x1: 0.1586574852, x2: 1.0247580857, y: -1 },
        { x1: 2.1118809243, x2: 0.5591653811, y: 1 },
        { x1: -0.4181864324, x2: 0.7186957073, y: -1 },
        { x1: 1.3681542689, x2: -0.5355384657, y: 1 },
        { x1: -0.1120340502, x2: 0.5910191452, y: 1 },
        { x1: 0.2647558135, x2: -0.1298301425, y: 1 },
        { x1: -0.9698375991, x2: 0.2060267269, y: -1 },
        { x1: -0.0851228336, x2: 1.0893921581, y: -1 },
        { x1: -0.4644558844, x2: 0.907934297, y: -1 },
        { x1: 1.3113947314, x2: -0.5626511926, y: 1 },
        { x1: 0.7601777903, x2: -0.2629583258, y: 1 },
        { x1: 0.6769267137, x2: 0.641734379, y: -1 },
        { x1: -0.9277527953, x2: 0.5549049662, y: -1 },
        { x1: 0.9278527923, x2: 0.5300665893, y: -1 },
        { x1: 0.6379562815, x2: 0.8585427542, y: -1 },
        { x1: 2.0080610949, x2: 0.4654663025, y: 1 },
        { x1: -0.5024033677, x2: 0.744512763, y: -1 },
        { x1: 0.0298536268, x2: 0.1754948903, y: 1 },
        { x1: 0.2822282378, x2: -0.0289211736, y: 1 },
        { x1: 1.7702842857, x2: -0.1039271502, y: 1 },
        { x1: 0.8659980681, x2: 0.4661251404, y: -1 },
        { x1: 1.1150080581, x2: -0.4666773577, y: 1 },
        { x1: -0.1196424354, x2: 0.3161955849, y: 1 },
        { x1: 0.4431827101, x2: -0.379006533, y: 1 },
        { x1: 1.3623460975, x2: -0.2928558407, y: 1 },
        { x1: 1.8211280205, x2: -0.0267924475, y: 1 },
      ],
      gr = [
        { x1: -3.1027299417, x2: -10.323806429, y: 1 },
        { x1: -2.905592117, x2: -8.7673782842, y: 1 },
        { x1: 3.8954873535, x2: -5.2824853303, y: -1 },
        { x1: -1.5608525413, x2: -4.6091172141, y: 1 },
        { x1: 4.9537989047, x2: -4.3944328125, y: -1 },
        { x1: 7.2885319411, x2: -2.7514194602, y: -1 },
        { x1: -1.2887219415, x2: -7.7921589198, y: 1 },
        { x1: 5.4976271866, x2: -2.7722584246, y: -1 },
        { x1: 5.6265811791, x2: -3.7232943772, y: -1 },
        { x1: 0.7342248908, x2: -8.4536847434, y: 1 },
        { x1: -2.2992341221, x2: -6.5583628712, y: 1 },
        { x1: -4.5414465961, x2: -8.0654877621, y: 1 },
        { x1: -4.0372478997, x2: -7.0534954513, y: 1 },
        { x1: -1.3129507496, x2: -11.9435538096, y: 1 },
        { x1: 3.5970542192, x2: -4.1689795785, y: -1 },
        { x1: 4.0955381486, x2: -5.5174231719, y: -1 },
        { x1: 6.2064048843, x2: -4.8720203425, y: -1 },
        { x1: -2.4948799277, x2: -7.4853816734, y: 1 },
        { x1: 7.0445898118, x2: -4.1716139362, y: -1 },
        { x1: -1.4104429275, x2: -10.3586895393, y: 1 },
        { x1: 7.1500942531, x2: -5.1488229327, y: -1 },
        { x1: -4.0816797839, x2: -7.8590976387, y: 1 },
        { x1: -2.205393977, x2: -6.6578881361, y: 1 },
        { x1: -3.5221751385, x2: -9.5633544649, y: 1 },
        { x1: -1.0418132445, x2: -8.921573724, y: 1 },
        { x1: 4.4752114654, x2: -3.0256956029, y: -1 },
        { x1: -2.5904041317, x2: -7.8048830728, y: 1 },
        { x1: 5.5366210163, x2: -1.7339904989, y: -1 },
        { x1: -0.9355119023, x2: -8.7269860597, y: 1 },
        { x1: 3.5083537264, x2: -4.050602698, y: -1 },
        { x1: 5.5173315103, x2: -2.9714706921, y: -1 },
        { x1: -3.0847366132, x2: -6.2486853186, y: 1 },
        { x1: 3.4541763222, x2: -0.1653709137, y: -1 },
        { x1: 7.214585983, x2: -2.9196194725, y: -1 },
        { x1: 7.8584060346, x2: -2.4860766787, y: -1 },
        { x1: 5.9438364977, x2: -2.5990202534, y: -1 },
        { x1: 3.9757875175, x2: -2.8368036606, y: -1 },
        { x1: 4.6964737697, x2: -4.1623059811, y: -1 },
        { x1: -0.530544551, x2: -8.4618211732, y: 1 },
        { x1: -3.3154556174, x2: -8.7094947342, y: 1 },
      ],
      yr = Math.PI,
      xr = 2 * yr,
      vr = 1e-6,
      br = xr - vr;
    function wr() {
      (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
    }
    function kr() {
      return new wr();
    }
    function $r(t) {
      return function () {
        return t;
      };
    }
    function Mr(t) {
      this._context = t;
    }
    function Sr(t) {
      return new Mr(t);
    }
    function zr(t) {
      return t[0];
    }
    function Ar(t) {
      return t[1];
    }
    function Tr(t, e) {
      var n = $r(!0),
        r = null,
        i = Sr,
        a = null;
      function o(o) {
        var s,
          l,
          c,
          h = (o = (function (t) {
            return "object" == typeof t && "length" in t ? t : Array.from(t);
          })(o)).length,
          u = !1;
        for (null == r && (a = i((c = kr()))), s = 0; s <= h; ++s)
          !(s < h && n((l = o[s]), s, o)) === u &&
            ((u = !u) ? a.lineStart() : a.lineEnd()),
            u && a.point(+t(l, s, o), +e(l, s, o));
        if (c) return (a = null), c + "" || null;
      }
      return (
        (t = "function" == typeof t ? t : void 0 === t ? zr : $r(t)),
        (e = "function" == typeof e ? e : void 0 === e ? Ar : $r(e)),
        (o.x = function (e) {
          return arguments.length
            ? ((t = "function" == typeof e ? e : $r(+e)), o)
            : t;
        }),
        (o.y = function (t) {
          return arguments.length
            ? ((e = "function" == typeof t ? t : $r(+t)), o)
            : e;
        }),
        (o.defined = function (t) {
          return arguments.length
            ? ((n = "function" == typeof t ? t : $r(!!t)), o)
            : n;
        }),
        (o.curve = function (t) {
          return arguments.length ? ((i = t), null != r && (a = i(r)), o) : i;
        }),
        (o.context = function (t) {
          return arguments.length
            ? (null == t ? (r = a = null) : (a = i((r = t))), o)
            : r;
        }),
        o
      );
    }
    function Nr(t, e, n) {
      t._context.bezierCurveTo(
        (2 * t._x0 + t._x1) / 3,
        (2 * t._y0 + t._y1) / 3,
        (t._x0 + 2 * t._x1) / 3,
        (t._y0 + 2 * t._y1) / 3,
        (t._x0 + 4 * t._x1 + e) / 6,
        (t._y0 + 4 * t._y1 + n) / 6,
      );
    }
    function Br(t) {
      this._context = t;
    }
    function Cr(t) {
      return new Br(t);
    }
    (wr.prototype = kr.prototype =
      {
        constructor: wr,
        moveTo: function (t, e) {
          this._ +=
            "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +e);
        },
        closePath: function () {
          null !== this._x1 &&
            ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
        },
        lineTo: function (t, e) {
          this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +e);
        },
        quadraticCurveTo: function (t, e, n, r) {
          this._ +=
            "Q" + +t + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
        },
        bezierCurveTo: function (t, e, n, r, i, a) {
          this._ +=
            "C" +
            +t +
            "," +
            +e +
            "," +
            +n +
            "," +
            +r +
            "," +
            (this._x1 = +i) +
            "," +
            (this._y1 = +a);
        },
        arcTo: function (t, e, n, r, i) {
          (t = +t), (e = +e), (n = +n), (r = +r), (i = +i);
          var a = this._x1,
            o = this._y1,
            s = n - t,
            l = r - e,
            c = a - t,
            h = o - e,
            u = c * c + h * h;
          if (i < 0) throw new Error("negative radius: " + i);
          if (null === this._x1)
            this._ += "M" + (this._x1 = t) + "," + (this._y1 = e);
          else if (u > vr)
            if (Math.abs(h * s - l * c) > vr && i) {
              var d = n - a,
                m = r - o,
                p = s * s + l * l,
                f = d * d + m * m,
                g = Math.sqrt(p),
                y = Math.sqrt(u),
                x = i * Math.tan((yr - Math.acos((p + u - f) / (2 * g * y))) / 2),
                v = x / y,
                b = x / g;
              Math.abs(v - 1) > vr &&
                (this._ += "L" + (t + v * c) + "," + (e + v * h)),
                (this._ +=
                  "A" +
                  i +
                  "," +
                  i +
                  ",0,0," +
                  +(h * d > c * m) +
                  "," +
                  (this._x1 = t + b * s) +
                  "," +
                  (this._y1 = e + b * l));
            } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = e);
          else;
        },
        arc: function (t, e, n, r, i, a) {
          (t = +t), (e = +e), (a = !!a);
          var o = (n = +n) * Math.cos(r),
            s = n * Math.sin(r),
            l = t + o,
            c = e + s,
            h = 1 ^ a,
            u = a ? r - i : i - r;
          if (n < 0) throw new Error("negative radius: " + n);
          null === this._x1
            ? (this._ += "M" + l + "," + c)
            : (Math.abs(this._x1 - l) > vr || Math.abs(this._y1 - c) > vr) &&
              (this._ += "L" + l + "," + c),
            n &&
              (u < 0 && (u = (u % xr) + xr),
              u > br
                ? (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    h +
                    "," +
                    (t - o) +
                    "," +
                    (e - s) +
                    "A" +
                    n +
                    "," +
                    n +
                    ",0,1," +
                    h +
                    "," +
                    (this._x1 = l) +
                    "," +
                    (this._y1 = c))
                : u > vr &&
                  (this._ +=
                    "A" +
                    n +
                    "," +
                    n +
                    ",0," +
                    +(u >= yr) +
                    "," +
                    h +
                    "," +
                    (this._x1 = t + n * Math.cos(i)) +
                    "," +
                    (this._y1 = e + n * Math.sin(i))));
        },
        rect: function (t, e, n, r) {
          this._ +=
            "M" +
            (this._x0 = this._x1 = +t) +
            "," +
            (this._y0 = this._y1 = +e) +
            "h" +
            +n +
            "v" +
            +r +
            "h" +
            -n +
            "Z";
        },
        toString: function () {
          return this._;
        },
      }),
      (Mr.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          this._point = 0;
        },
        lineEnd: function () {
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
            default:
              this._context.lineTo(t, e);
          }
        },
      }),
      (Br.prototype = {
        areaStart: function () {
          this._line = 0;
        },
        areaEnd: function () {
          this._line = NaN;
        },
        lineStart: function () {
          (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
        },
        lineEnd: function () {
          switch (this._point) {
            case 3:
              Nr(this, this._x1, this._y1);
            case 2:
              this._context.lineTo(this._x1, this._y1);
          }
          (this._line || (0 !== this._line && 1 === this._point)) &&
            this._context.closePath(),
            (this._line = 1 - this._line);
        },
        point: function (t, e) {
          switch (((t = +t), (e = +e), this._point)) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, e)
                  : this._context.moveTo(t, e);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3),
                this._context.lineTo(
                  (5 * this._x0 + this._x1) / 6,
                  (5 * this._y0 + this._y1) / 6,
                );
            default:
              Nr(this, t, e);
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = e);
        },
      });
    function qr(t, e) {
      const n = (function (t) {
          return Math.max(0, t);
        })(-0.136 * t + -0.98 * e),
        r = (function (t) {
          return 1 / (1 + Math.exp(-t));
        })(-0.688 * n);
      return r >= 0.5 ? 1 : -1;
    }
    function Er(t, e) {
      const n = 9.8093627 * t - 15 + 11.37731165 * e;
      return 1 === Math.sign(n) ? 1 : -1;
    }
    function Lr(t, e) {
      return t > -0.25 ? (e > 0.69 ? -1 : 1) : -1;
    }
    function _r(t, e) {
      return t > -0.25
        ? t > 0.7
          ? t - e > 1.1
            ? 1
            : -1
          : e > 0.69 || t + e > 0.85
            ? -1
            : 1
        : -1;
    }
    function Ir(t, e, n) {
      const r = t.slice();
      return (r[22] = e[n]), (r[24] = n), r;
    }
    function Rr(t, e, n) {
      const r = t.slice();
      return (r[25] = e[n]), r;
    }
    function Or(t) {
      let e,
        n,
        r,
        i,
        a,
        o = t[4] > 2 && Pr(t),
        s = t[8],
        l = [];
      for (let e = 0; e < s.length; e += 1) l[e] = Dr(Ir(t, s, e));
      const c = (t) =>
        dt(l[t], 1, 1, () => {
          l[t] = null;
        });
      let h = 2 == t[4] && Fr(t);
      return {
        c() {
          (e = S("g")), o && o.c(), (n = T());
          for (let t = 0; t < l.length; t += 1) l[t].c();
          (r = T()),
            h && h.c(),
            B(e, "clip-path", "url(#clip)"),
            B(e, "transform", (i = `translate(0 ${-t[0] / 2})`));
        },
        m(t, i) {
          w(t, e, i), o && o.m(e, null), x(e, n);
          for (let t = 0; t < l.length; t += 1) l[t].m(e, null);
          x(e, r), h && h.m(e, null), (a = !0);
        },
        p(t, u) {
          if (
            (t[4] > 2
              ? o
                ? (o.p(t, u), 16 & u && ut(o, 1))
                : ((o = Pr(t)), o.c(), ut(o, 1), o.m(e, n))
              : o &&
                (ct(),
                dt(o, 1, 1, () => {
                  o = null;
                }),
                ht()),
            1302 & u)
          ) {
            let n;
            for (s = t[8], n = 0; n < s.length; n += 1) {
              const i = Ir(t, s, n);
              l[n]
                ? (l[n].p(i, u), ut(l[n], 1))
                : ((l[n] = Dr(i)), l[n].c(), ut(l[n], 1), l[n].m(e, r));
            }
            for (ct(), n = s.length; n < l.length; n += 1) c(n);
            ht();
          }
          2 == t[4]
            ? h
              ? (h.p(t, u), 16 & u && ut(h, 1))
              : ((h = Fr(t)), h.c(), ut(h, 1), h.m(e, null))
            : h &&
              (ct(),
              dt(h, 1, 1, () => {
                h = null;
              }),
              ht()),
            (!a || (1 & u && i !== (i = `translate(0 ${-t[0] / 2})`))) &&
              B(e, "transform", i);
        },
        i(t) {
          if (!a) {
            ut(o);
            for (let t = 0; t < s.length; t += 1) ut(l[t]);
            ut(h), (a = !0);
          }
        },
        o(t) {
          dt(o), (l = l.filter(Boolean));
          for (let t = 0; t < l.length; t += 1) dt(l[t]);
          dt(h), (a = !1);
        },
        d(t) {
          t && k(e), o && o.d(), $(l, t), h && h.d();
        },
      };
    }
    function Pr(t) {
      let e,
        n,
        r = t[3](t[3].centers()),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = Hr(Rr(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (1614 & n) {
            let o;
            for (r = t[3](t[3].centers()), o = 0; o < r.length; o += 1) {
              const a = Rr(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = Hr(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function Hr(t) {
      let e, n, r, i, a, o;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "hex-cell svelte-uczg9h"),
            B(e, "d", (n = `M${t[25].x},${t[25].y}${t[3].hexagon()}`)),
            B(
              e,
              "fill",
              (r = t[10](
                t[6](
                  t[2].invert(t[25].x + t[9].left),
                  t[1].invert(t[25].y + t[9].top),
                ),
              )),
            );
        },
        m(t, n) {
          w(t, e, n), (o = !0);
        },
        p(t, i) {
          (!o ||
            (8 & i && n !== (n = `M${t[25].x},${t[25].y}${t[3].hexagon()}`))) &&
            B(e, "d", n),
            (!o ||
              (78 & i &&
                r !==
                  (r = t[10](
                    t[6](
                      t[2].invert(t[25].x + t[9].left),
                      t[1].invert(t[25].y + t[9].top),
                    ),
                  )))) &&
              B(e, "fill", r);
        },
        i(t) {
          o ||
            (Q(() => {
              a && a.end(1), (i = pt(e, lr, { duration: 500 })), i.start();
            }),
            (o = !0));
        },
        o(t) {
          i && i.invalidate(), (a = ft(e, lr, { duration: 0 })), (o = !1);
        },
        d(t) {
          t && k(e), t && a && a.end();
        },
      };
    }
    function Dr(t) {
      let e,
        n,
        r =
          t[24] > 0 &&
          (function (t) {
            let e, n, r, i, a, o, s, l;
            return {
              c() {
                (e = S("circle")),
                  B(e, "class", "dot svelte-uczg9h"),
                  B(e, "cx", (n = t[2](t[22].x1))),
                  B(e, "cy", (r = t[1](t[22].x2))),
                  B(e, "r", "4"),
                  B(e, "fill", (i = t[4] > 2 ? t[10](t[22].y) : t[10](1))),
                  B(e, "stroke-width", (a = t[4] > 2 ? 2 : 0));
              },
              m(t, n) {
                w(t, e, n), (l = !0);
              },
              p(t, o) {
                (!l || (260 & o && n !== (n = t[2](t[22].x1)))) && B(e, "cx", n),
                  (!l || (258 & o && r !== (r = t[1](t[22].x2)))) &&
                    B(e, "cy", r),
                  (!l ||
                    (272 & o &&
                      i !== (i = t[4] > 2 ? t[10](t[22].y) : t[10](1)))) &&
                    B(e, "fill", i),
                  (!l || (16 & o && a !== (a = t[4] > 2 ? 2 : 0))) &&
                    B(e, "stroke-width", a);
              },
              i(t) {
                l ||
                  (Q(() => {
                    s && s.end(1), (o = pt(e, lr, { duration: 500 })), o.start();
                  }),
                  (l = !0));
              },
              o(t) {
                o && o.invalidate(), (s = ft(e, lr, { duration: 0 })), (l = !1);
              },
              d(t) {
                t && k(e), t && s && s.end();
              },
            };
          })(t);
      return {
        c() {
          r && r.c(), (e = T());
        },
        m(t, i) {
          r && r.m(t, i), w(t, e, i), (n = !0);
        },
        p(t, e) {
          t[24] > 0 && r.p(t, e);
        },
        i(t) {
          n || (ut(r), (n = !0));
        },
        o(t) {
          dt(r), (n = !1);
        },
        d(t) {
          r && r.d(t), t && k(e);
        },
      };
    }
    function Fr(t) {
      let e, n, r, i, a, o, s, l, c;
      return {
        c() {
          (e = S("path")),
            (a = S("path")),
            B(e, "class", "outer-path svelte-uczg9h"),
            B(e, "d", (n = t[5](t[8]))),
            B(a, "class", "inner-path svelte-uczg9h"),
            B(a, "d", (o = t[5](t[8])));
        },
        m(t, n) {
          w(t, e, n), w(t, a, n), (c = !0);
        },
        p(t, r) {
          (!c || (288 & r && n !== (n = t[5](t[8])))) && B(e, "d", n),
            (!c || (288 & r && o !== (o = t[5](t[8])))) && B(a, "d", o);
        },
        i(t) {
          c ||
            (Q(() => {
              i && i.end(1), (r = pt(e, lr, { duration: 500 })), r.start();
            }),
            Q(() => {
              l && l.end(1), (s = pt(a, lr, { duration: 500 })), s.start();
            }),
            (c = !0));
        },
        o(t) {
          r && r.invalidate(),
            (i = ft(e, lr, { duration: 500 })),
            s && s.invalidate(),
            (l = ft(a, lr, { duration: 500 })),
            (c = !1);
        },
        d(t) {
          t && k(e), t && i && i.end(), t && k(a), t && l && l.end();
        },
      };
    }
    function jr(t) {
      let e,
        n,
        r = t[7] && Or(t);
      return {
        c() {
          r && r.c(), (e = T());
        },
        m(t, i) {
          r && r.m(t, i), w(t, e, i), (n = !0);
        },
        p(t, [n]) {
          t[7]
            ? r
              ? (r.p(t, n), 128 & n && ut(r, 1))
              : ((r = Or(t)), r.c(), ut(r, 1), r.m(e.parentNode, e))
            : r &&
              (ct(),
              dt(r, 1, 1, () => {
                r = null;
              }),
              ht());
        },
        i(t) {
          n || (ut(r), (n = !0));
        },
        o(t) {
          dt(r), (n = !1);
        },
        d(t) {
          r && r.d(t), t && k(e);
        },
      };
    }
    function Vr(t, n, r) {
      let i, a, o, s, l, h, u, d;
      c(t, Ft, (t) => r(4, (u = t)));
      let { height: m = 160 } = n,
        { width: p = 160 } = n,
        f = { top: 0, bottom: 0, left: 0, right: 0 };
      const g = { 0: qr, 1: qr, 2: qr, 3: qr, 4: Er, 5: Er, 6: Lr, 7: Lr, 8: _r },
        y = He().domain([-1, 1]).range(["#f46ebb", "#2074d5"]);
      let x = [
        { x1: -1.6, x2: 1.05 - 0.85, y: 1 },
        { x1: -1.43, x2: -0.27, y: 0 },
        { x1: -1.26, x2: -0.55, y: 0 },
        { x1: -1.09, x2: 0.54 - 0.85, y: 0 },
        { x1: -0.92, x2: 0.87 - 0.85, y: 0 },
        { x1: -0.75, x2: -0.69, y: 1 },
        { x1: -0.58, x2: 0.8 - 0.85, y: 0 },
        { x1: -0.41, x2: -0.49, y: 1 },
        { x1: -0.24, x2: 0.39 - 0.85, y: 1 },
        { x1: -0.07, x2: -0.63, y: 1 },
        { x1: 0.1, x2: 1 - 0.85, y: 1 },
        { x1: 0.27, x2: -0.85, y: 1 },
        { x1: 0.44, x2: 0.55 - 0.85, y: 1 },
        { x1: 0.61, x2: -0.24, y: 1 },
        { x1: 0.78, x2: 0.68 - 0.85, y: 0 },
        { x1: 0.95, x2: 0.95 - 0.85, y: 0 },
        { x1: 1.12, x2: 1.07 - 0.85, y: 0 },
        { x1: 1.29, x2: -0.85, y: 1 },
        { x1: 1.46, x2: 0.66, y: 0 },
        { x1: 1.63, x2: 0.83, y: 0 },
        { x1: 1.9, x2: 1, y: 0 },
        { x1: 1.97, x2: 1 - 0.85, y: 1 },
        { x1: 2.3, x2: 0.35, y: 1 },
        { x1: 2.31, x2: 1.31, y: 1 },
        { x1: 2.4, x2: 2.15 - 0.85, y: 0 },
      ];
      const v = Math.max(fr.length, x.length),
        b = qt(
          Array(v)
            .fill(null)
            .map((t, e) => ({
              x1: x[e]?.x1 ?? 0.3,
              x2: x[e]?.x2 ?? 0,
              y: x[e]?.y ?? 1,
            })),
          { duration: 500, easing: e },
        );
      c(t, b, (t) => r(8, (d = t)));
      let w = !1;
      function k() {
        if (w) {
          const t = Array(v)
            .fill(null)
            .map((t, e) => ({
              x1: x[e]?.x1 ?? 0,
              x2: x[e]?.x2 ?? 0,
              y: x[e]?.y ?? 1,
            }));
          b.set(t);
        } else {
          const t = Array(v)
            .fill(null)
            .map((t, e) => ({
              x1: fr[e]?.x1 ?? 0,
              x2: fr[e]?.x2 ?? 0,
              y: fr[e]?.y ?? 1,
            }));
          b.set(t);
        }
      }
      return (
        (function (t) {
          U().$$.on_destroy.push(t);
        })(() => {
          b.stop();
        }),
        (t.$$set = (t) => {
          "height" in t && r(0, (m = t.height)),
            "width" in t && r(12, (p = t.width));
        }),
        (t.$$.update = () => {
          4096 & t.$$.dirty &&
            r(
              2,
              (i = ar()
                .domain([
                  1.2 * Re(fr.map((t) => t.x1)),
                  1.2 * Ie(fr.map((t) => t.x1)),
                ])
                .range([f.left, p - f.right])),
            ),
            1 & t.$$.dirty &&
              r(
                1,
                (a = ar()
                  .domain([
                    1.2 * Re(fr.map((t) => t.x2)),
                    1.2 * Ie(fr.map((t) => t.x2)),
                  ])
                  .range([m - f.bottom, f.top])),
              ),
            4097 & t.$$.dirty &&
              r(
                3,
                (o = mr()
                  .radius(5)
                  .extent([
                    [0, 0],
                    [p - f.left - f.right, m - f.top - f.bottom],
                  ])),
              ),
            14 & t.$$.dirty &&
              o(o.centers()).map((t) => [
                i.invert(t.x + f.left),
                a.invert(t.y + f.top),
              ]),
            16 & t.$$.dirty && r(7, (s = ![0, 1].includes(u))),
            16 & t.$$.dirty && r(6, (l = g[u])),
            6 & t.$$.dirty &&
              r(
                5,
                (h = Tr()
                  .x((t) => i(t.x1))
                  .y((t) => a(0.45 * t.x1 - 0.1))),
              ),
            16 & t.$$.dirty && (u <= 2 ? ((w = !0), k()) : ((w = !1), k()));
        }),
        [m, a, i, o, u, h, l, s, d, f, y, b, p]
      );
    }
    class Ur extends $t {
      constructor(t) {
        super(), kt(this, t, Vr, jr, s, { height: 0, width: 12 });
      }
    }
    function Gr(t, e) {
      const n = (e - 1 - t + 1) / 2,
        r = [];
      for (let e = 0; e < t; e++) r.push(n + e);
      return r;
    }
    function Wr(t) {
      let e = 0;
      for (let n = 0; n < t.length - 1; n++) e += t[n] * t[n + 1];
      return e;
    }
    function Xr(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g,
        y = t[4][t[5] - 1] + "";
      return (
        (f = new Ur({ props: { width: t[3], height: t[0] } })),
        {
          c() {
            (e = S("clipPath")),
              (n = S("rect")),
              (r = A()),
              (i = S("rect")),
              (l = A()),
              (c = S("text")),
              (h = z(y)),
              (p = A()),
              xt(f.$$.fragment),
              B(n, "width", t[3]),
              B(n, "height", t[0]),
              B(e, "id", "clip"),
              B(i, "class", "nn-node svelte-njsf0d"),
              B(i, "stroke-width", "2.5"),
              B(i, "fill", t[2]),
              B(i, "width", t[3]),
              B(i, "height", t[0]),
              B(i, "y", (a = -t[0] / 2)),
              B(c, "class", "nn-text svelte-njsf0d"),
              B(c, "text-anchor", "middle"),
              B(c, "alignment-baseline", "middle"),
              B(c, "dx", (u = t[3] / 2)),
              B(c, "y", t[1]);
          },
          m(t, a) {
            w(t, e, a),
              x(e, n),
              w(t, r, a),
              w(t, i, a),
              w(t, l, a),
              w(t, c, a),
              x(c, h),
              w(t, p, a),
              vt(f, t, a),
              (g = !0);
          },
          p(t, [e]) {
            (!g || 8 & e) && B(n, "width", t[3]),
              (!g || 1 & e) && B(n, "height", t[0]),
              (!g || 4 & e) && B(i, "fill", t[2]),
              (!g || 8 & e) && B(i, "width", t[3]),
              (!g || 1 & e) && B(i, "height", t[0]),
              (!g || (1 & e && a !== (a = -t[0] / 2))) && B(i, "y", a),
              (!g || 48 & e) && y !== (y = t[4][t[5] - 1] + "") && C(h, y),
              (!g || (8 & e && u !== (u = t[3] / 2))) && B(c, "dx", u),
              (!g || 2 & e) && B(c, "y", t[1]);
            const r = {};
            8 & e && (r.width = t[3]), 1 & e && (r.height = t[0]), f.$set(r);
          },
          i(t) {
            g ||
              (t &&
                Q(() => {
                  s && s.end(1),
                    (o = pt(i, sr, { x: -50, duration: 500 })),
                    o.start();
                }),
              t &&
                Q(() => {
                  m && m.end(1),
                    (d = pt(c, sr, { x: -50, duration: 500 })),
                    d.start();
                }),
              ut(f.$$.fragment, t),
              (g = !0));
          },
          o(t) {
            o && o.invalidate(),
              t && (s = ft(i, or, { duration: 0 })),
              d && d.invalidate(),
              t && (m = ft(c, or, { duration: 300 })),
              dt(f.$$.fragment, t),
              (g = !1);
          },
          d(t) {
            t && k(e),
              t && k(r),
              t && k(i),
              t && s && s.end(),
              t && k(l),
              t && k(c),
              t && m && m.end(),
              t && k(p),
              bt(f, t);
          },
        }
      );
    }
    function Yr(t, e, n) {
      let r, i, a, o, s, l, h, u, d, m, p, f, g, y;
      return (
        c(t, Ft, (t) => n(11, (m = t))),
        c(t, _t, (t) => n(12, (p = t))),
        c(t, It, (t) => n(13, (f = t))),
        c(t, Rt, (t) => n(4, (g = t))),
        c(t, Ot, (t) => n(5, (y = t))),
        (t.$$.update = () => {
          8192 & t.$$.dirty && Ie(f),
            4096 & t.$$.dirty && n(10, (r = p ? 42 : 72)),
            4096 & t.$$.dirty && n(7, (i = p ? 22 : 36)),
            4096 & t.$$.dirty && n(8, (a = p ? 100 : 160)),
            2048 & t.$$.dirty && n(6, (o = ![0, 1].includes(m))),
            2048 & t.$$.dirty && n(9, (s = [6, 7, 8].includes(m))),
            1856 & t.$$.dirty && n(3, (l = o ? (s ? 0.88 * a : a) : r)),
            960 & t.$$.dirty && n(0, (h = o ? (s ? 0.88 * a : a) : i)),
            64 & t.$$.dirty && n(2, (u = o ? "white" : "#ffe135")),
            65 & t.$$.dirty && n(1, (d = o ? h / 2 + 10 : 0));
        }),
        [h, d, u, l, g, y, o, i, a, s, r, m, p, f]
      );
    }
    class Zr extends $t {
      constructor(t) {
        super(), kt(this, t, Yr, Xr, s, {});
      }
    }
    function Kr(t) {
      let e, n, r, i, a, o, s, l;
      return {
        c() {
          (e = S("path")),
            (i = A()),
            (a = S("path")),
            B(e, "class", "activation-path-outer svelte-6s25z9"),
            B(e, "d", (n = t[0](t[1]))),
            B(a, "class", "activation-path-inner svelte-6s25z9"),
            B(a, "d", (o = t[0](t[1])));
        },
        m(t, n) {
          w(t, e, n), w(t, i, n), w(t, a, n), (l = !0);
        },
        p(t, [r]) {
          (!l || (3 & r && n !== (n = t[0](t[1])))) && B(e, "d", n),
            (!l || (3 & r && o !== (o = t[0](t[1])))) && B(a, "d", o);
        },
        i(t) {
          l ||
            (Q(() => {
              r || (r = gt(e, lr, { duration: 500 }, !0)), r.run(1);
            }),
            Q(() => {
              s || (s = gt(a, lr, { duration: 500 }, !0)), s.run(1);
            }),
            (l = !0));
        },
        o(t) {
          r || (r = gt(e, lr, { duration: 500 }, !1)),
            r.run(0),
            s || (s = gt(a, lr, { duration: 500 }, !1)),
            s.run(0),
            (l = !1);
        },
        d(t) {
          t && k(e), t && r && r.end(), t && k(i), t && k(a), t && s && s.end();
        },
      };
    }
    function Jr(t, n, r) {
      let i, a, o, s, l, h, u, d, m, p;
      c(t, _t, (t) => r(11, (m = t)));
      let { data: f = "linear" } = n;
      const g = [
          { x: -4, y: -1 },
          { x: -3.724137931, y: -0.862 },
          { x: -3.4482758621, y: -0.724 },
          { x: -3.1724137931, y: -0.586 },
          { x: -2.8965517241, y: -0.448 },
          { x: -2.6206896552, y: -0.31 },
          { x: -2.3448275862, y: -0.172 },
          { x: -2.0689655172, y: -0.034 },
          { x: -1.7931034483, y: 0.103 },
          { x: -1.5172413793, y: 0.241 },
          { x: -1.2413793103, y: 0.379 },
          { x: -0.9655172414, y: 0.517 },
          { x: -0.6896551724, y: 0.655 },
          { x: -0.4137931034, y: 0.793 },
          { x: -0.1379310345, y: 0.931 },
          { x: 0.1379310345, y: 1.069 },
          { x: 0.4137931034, y: 1.207 },
          { x: 0.6896551724, y: 1.345 },
          { x: 0.9655172414, y: 1.483 },
          { x: 1.2413793103, y: 1.621 },
          { x: 1.5172413793, y: 1.759 },
          { x: 1.7931034483, y: 1.897 },
          { x: 2.0689655172, y: 2.034 },
          { x: 2.3448275862, y: 2.172 },
          { x: 2.6206896552, y: 2.31 },
          { x: 2.8965517241, y: 2.448 },
          { x: 3.1724137931, y: 2.586 },
          { x: 3.4482758621, y: 2.724 },
          { x: 3.724137931, y: 2.862 },
          { x: 4, y: 3 },
        ],
        y = [
          { x: -4, y: 0 },
          { x: -3.724137931, y: 0 },
          { x: -3.4482758621, y: 0 },
          { x: -3.1724137931, y: 0 },
          { x: -2.8965517241, y: 0 },
          { x: -2.6206896552, y: 0 },
          { x: -2.3448275862, y: 0 },
          { x: -2.0689655172, y: 0 },
          { x: -1.7931034483, y: 0 },
          { x: -1.5172413793, y: 0 },
          { x: -1.2413793103, y: 0 },
          { x: -0.9655172414, y: 0 },
          { x: -0.6896551724, y: 0 },
          { x: -0.4137931034, y: 0 },
          { x: -0.1379310345, y: 0 },
          { x: 0.1379310345, y: 0.138 },
          { x: 0.4137931034, y: 0.414 },
          { x: 0.6896551724, y: 0.69 },
          { x: 0.9655172414, y: 0.966 },
          { x: 1.2413793103, y: 1.241 },
          { x: 1.5172413793, y: 1.517 },
          { x: 1.7931034483, y: 1.793 },
          { x: 2.0689655172, y: 2.069 },
          { x: 2.3448275862, y: 2.345 },
          { x: 2.6206896552, y: 2.621 },
          { x: 2.8965517241, y: 2.897 },
          { x: 3.1724137931, y: 3.172 },
          { x: 3.4482758621, y: 3.448 },
          { x: 3.724137931, y: 3.724 },
          { x: 4, y: 4 },
        ],
        x = [
          { x: -12, y: 0 },
          { x: -11.1724137931, y: 0 },
          { x: -10.3448275862, y: 0 },
          { x: -9.5172413793, y: 0 },
          { x: -8.6896551724, y: 0 },
          { x: -7.8620689655, y: 0 },
          { x: -7.0344827586, y: 0.001 },
          { x: -6.2068965517, y: 0.002 },
          { x: -5.3793103448, y: 0.005 },
          { x: -4.5517241379, y: 0.01 },
          { x: -3.724137931, y: 0.024 },
          { x: -2.8965517241, y: 0.052 },
          { x: -2.0689655172, y: 0.112 },
          { x: -1.2413793103, y: 0.224 },
          { x: -0.4137931034, y: 0.398 },
          { x: 0.4137931034, y: 0.602 },
          { x: 1.2413793103, y: 0.776 },
          { x: 2.0689655172, y: 0.888 },
          { x: 2.8965517241, y: 0.948 },
          { x: 3.724137931, y: 0.976 },
          { x: 4.5517241379, y: 0.99 },
          { x: 5.3793103448, y: 0.995 },
          { x: 6.2068965517, y: 0.998 },
          { x: 7.0344827586, y: 0.999 },
          { x: 7.8620689655, y: 1 },
          { x: 8.6896551724, y: 1 },
          { x: 9.5172413793, y: 1 },
          { x: 10.3448275862, y: 1 },
          { x: 11.1724137931, y: 1 },
          { x: 12, y: 1 },
        ],
        v = [
          { x: -4, y: -1 },
          { x: -3.724137931, y: -1 },
          { x: -3.4482758621, y: -1 },
          { x: -3.1724137931, y: -1 },
          { x: -2.8965517241, y: -1 },
          { x: -2.6206896552, y: -1 },
          { x: -2.3448275862, y: -1 },
          { x: -2.0689655172, y: -1 },
          { x: -1.7931034483, y: -1 },
          { x: -1.5172413793, y: -1 },
          { x: -1.2413793103, y: -1 },
          { x: -0.9655172414, y: -1 },
          { x: -0.6896551724, y: -1 },
          { x: -0.4137931034, y: -1 },
          { x: -0.1379310345, y: -1 },
          { x: -0.1379310345, y: 1 },
          { x: 0.4137931034, y: 1 },
          { x: 0.6896551724, y: 1 },
          { x: 0.9655172414, y: 1 },
          { x: 1.2413793103, y: 1 },
          { x: 1.5172413793, y: 1 },
          { x: 1.7931034483, y: 1 },
          { x: 2.0689655172, y: 1 },
          { x: 2.3448275862, y: 1 },
          { x: 2.6206896552, y: 1 },
          { x: 2.8965517241, y: 1 },
          { x: 3.1724137931, y: 1 },
          { x: 3.4482758621, y: 1 },
          { x: 3.724137931, y: 1 },
          { x: 4, y: 1 },
        ],
        b = qt(x, { duration: 500, easing: e });
      return (
        c(t, b, (t) => r(1, (p = t))),
        (t.$$set = (t) => {
          "data" in t && r(3, (f = t.data));
        }),
        (t.$$.update = () => {
          8 & t.$$.dirty &&
            (function (t) {
              "linear" === t &&
                (r(10, (i = [-4, 4])), r(8, (a = [-1, 3])), b.set(g)),
                "sigmoid" === t &&
                  (r(10, (i = [-12, 12])), r(8, (a = [-0.1, 1.1])), b.set(x)),
                "step" === t &&
                  (r(10, (i = [-4, 4])), r(8, (a = [-1.7, 1.7])), b.set(v)),
                "reLu" === t &&
                  (r(10, (i = [-4, 4])), r(8, (a = [-0.5, 4.5])), b.set(y));
            })(f),
            2048 & t.$$.dirty && r(9, (o = m ? 42 : 72)),
            512 & t.$$.dirty && r(7, (s = o / 1.6)),
            2048 & t.$$.dirty &&
              r(
                6,
                (l = m
                  ? { top: 9, bottom: 9, left: 9, right: 9 }
                  : { top: 12, bottom: 5, left: 6, right: 6 }),
              ),
            1600 & t.$$.dirty &&
              r(
                5,
                (h = ar()
                  .domain(i)
                  .range([l.left, o - l.right])),
              ),
            448 & t.$$.dirty &&
              r(
                4,
                (u = ar()
                  .domain(a)
                  .range([s - l.top, l.bottom])),
              ),
            48 & t.$$.dirty &&
              r(
                0,
                (d = Tr()
                  .x((t) => h(t.x))
                  .y((t) => u(t.y))),
              );
        }),
        r(10, (i = [-4, 4])),
        r(8, (a = [-1, 3])),
        [d, p, b, f, u, h, l, s, a, o, i, m]
      );
    }
    class Qr extends $t {
      constructor(t) {
        super(), kt(this, t, Jr, Kr, s, { data: 3 });
      }
    }
    function ti(t, e, n) {
      const r = t.slice();
      return (r[19] = e[n]), r;
    }
    function ei(t, e, n) {
      const r = t.slice();
      return (r[22] = e[n]), (r[24] = n), r;
    }
    function ni(t, e, n) {
      const r = t.slice();
      return (r[24] = e[n]), (r[22] = n), r;
    }
    function ri(t, e, n) {
      const r = t.slice();
      (r[19] = e[n]), (r[28] = n);
      const i = r[22] < r[4] - 1 && r[22] > 0;
      return (r[26] = i), r;
    }
    function ii(t, e, n) {
      const r = t.slice();
      return (r[29] = e[n]), (r[22] = n), r;
    }
    function ai(t, e, n) {
      const r = t.slice();
      return (r[19] = e[n]), (r[32] = n), r;
    }
    function oi(t, e, n) {
      const r = t.slice();
      (r[33] = e[n]), (r[28] = n);
      const i = (function (t, e, n, r) {
        let i = 0;
        for (let e = 0; e < t - 1; e++) i += r[e] * r[e + 1];
        return (i += e * r[t] + n), i;
      })(r[22], r[28], r[32], r[5]);
      return (r[24] = i), r;
    }
    function si(t) {
      let e,
        n,
        r,
        i,
        a,
        o = Array(t[4]).fill(null),
        s = [];
      for (let e = 0; e < o.length; e += 1) s[e] = di(ii(t, o, e));
      const l = (t) =>
        dt(s[t], 1, 1, () => {
          s[t] = null;
        });
      let c = Array(t[4]).fill(null),
        h = [];
      for (let e = 0; e < c.length; e += 1) h[e] = yi(ni(t, c, e));
      const u = (t) =>
        dt(h[t], 1, 1, () => {
          h[t] = null;
        });
      let d = t[16] && xi(t),
        m = Gr(t[5][t[4] - 1], t[2]),
        p = [];
      for (let e = 0; e < m.length; e += 1) p[e] = ki(ti(t, m, e));
      const f = (t) =>
        dt(p[t], 1, 1, () => {
          p[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < s.length; t += 1) s[t].c();
          e = T();
          for (let t = 0; t < h.length; t += 1) h[t].c();
          (n = T()), d && d.c(), (r = T());
          for (let t = 0; t < p.length; t += 1) p[t].c();
          i = T();
        },
        m(t, o) {
          for (let e = 0; e < s.length; e += 1) s[e].m(t, o);
          w(t, e, o);
          for (let e = 0; e < h.length; e += 1) h[e].m(t, o);
          w(t, n, o), d && d.m(t, o), w(t, r, o);
          for (let e = 0; e < p.length; e += 1) p[e].m(t, o);
          w(t, i, o), (a = !0);
        },
        p(t, a) {
          if (12532 & a[0]) {
            let n;
            for (o = Array(t[4]).fill(null), n = 0; n < o.length; n += 1) {
              const r = ii(t, o, n);
              s[n]
                ? (s[n].p(r, a), ut(s[n], 1))
                : ((s[n] = di(r)),
                  s[n].c(),
                  ut(s[n], 1),
                  s[n].m(e.parentNode, e));
            }
            for (ct(), n = o.length; n < s.length; n += 1) l(n);
            ht();
          }
          if (55284 & a[0]) {
            let e;
            for (c = Array(t[4]).fill(null), e = 0; e < c.length; e += 1) {
              const r = ni(t, c, e);
              h[e]
                ? (h[e].p(r, a), ut(h[e], 1))
                : ((h[e] = yi(r)),
                  h[e].c(),
                  ut(h[e], 1),
                  h[e].m(n.parentNode, n));
            }
            for (ct(), e = c.length; e < h.length; e += 1) u(e);
            ht();
          }
          if (
            (t[16]
              ? d
                ? (d.p(t, a), 65536 & a[0] && ut(d, 1))
                : ((d = xi(t)), d.c(), ut(d, 1), d.m(r.parentNode, r))
              : d &&
                (ct(),
                dt(d, 1, 1, () => {
                  d = null;
                }),
                ht()),
            1271 & a[0])
          ) {
            let e;
            for (m = Gr(t[5][t[4] - 1], t[2]), e = 0; e < m.length; e += 1) {
              const n = ti(t, m, e);
              p[e]
                ? (p[e].p(n, a), ut(p[e], 1))
                : ((p[e] = ki(n)),
                  p[e].c(),
                  ut(p[e], 1),
                  p[e].m(i.parentNode, i));
            }
            for (ct(), e = m.length; e < p.length; e += 1) f(e);
            ht();
          }
        },
        i(t) {
          if (!a) {
            for (let t = 0; t < o.length; t += 1) ut(s[t]);
            for (let t = 0; t < c.length; t += 1) ut(h[t]);
            ut(d);
            for (let t = 0; t < m.length; t += 1) ut(p[t]);
            a = !0;
          }
        },
        o(t) {
          s = s.filter(Boolean);
          for (let t = 0; t < s.length; t += 1) dt(s[t]);
          h = h.filter(Boolean);
          for (let t = 0; t < h.length; t += 1) dt(h[t]);
          dt(d), (p = p.filter(Boolean));
          for (let t = 0; t < p.length; t += 1) dt(p[t]);
          a = !1;
        },
        d(t) {
          $(s, t),
            t && k(e),
            $(h, t),
            t && k(n),
            d && d.d(t),
            t && k(r),
            $(p, t),
            t && k(i);
        },
      };
    }
    function li(e) {
      let n,
        r = e[12],
        i = ci(e);
      return {
        c() {
          i.c(), (n = T());
        },
        m(t, e) {
          i.m(t, e), w(t, n, e);
        },
        p(e, a) {
          4096 & a[0] && s(r, (r = e[12]))
            ? (ct(),
              dt(i, 1, 1, t),
              ht(),
              (i = ci(e)),
              i.c(),
              ut(i, 1),
              i.m(n.parentNode, n))
            : i.p(e, a);
        },
        d(t) {
          t && k(n), i.d(t);
        },
      };
    }
    function ci(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c = t[24] < t[13] ? "w" : "";
      return {
        c() {
          (e = S("text")),
            (n = S("textPath")),
            (r = z(c)),
            B(n, "href", (i = `#nn-edge-${t[22]}-${t[19]}-${t[33]}-${t[12]}`)),
            B(n, "startOffset", "50%"),
            B(n, "text-anchor", "middle"),
            B(n, "fill", "#232F3E"),
            B(n, "dominant-baseline", "middle"),
            B(e, "dx", (a = 0 * t[7](1))),
            B(e, "dy", "0"),
            B(e, "class", "weight-text svelte-jw0d68");
        },
        m(t, i) {
          w(t, e, i), x(e, n), x(n, r), (l = !0);
        },
        p(t, o) {
          (!l || 8224 & o[0]) && c !== (c = t[24] < t[13] ? "w" : "") && C(r, c),
            (!l ||
              (4132 & o[0] &&
                i !== (i = `#nn-edge-${t[22]}-${t[19]}-${t[33]}-${t[12]}`))) &&
              B(n, "href", i),
            (!l || (128 & o[0] && a !== (a = 0 * t[7](1)))) && B(e, "dx", a);
        },
        i(t) {
          l ||
            (t &&
              Q(() => {
                s && s.end(1),
                  (o = pt(e, sr, { x: 0, duration: 300 })),
                  o.start();
              }),
            (l = !0));
        },
        o(t) {
          o && o.invalidate(), t && (s = ft(e, or, { duration: 300 })), (l = !1);
        },
        d(t) {
          t && k(e), t && s && s.end();
        },
      };
    }
    function hi(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d = t[12] >= 1 && li(t);
      return {
        c() {
          (e = S("path")),
            d && d.c(),
            (o = S("g")),
            (s = S("text")),
            (l = z("⬤\n                  ")),
            (c = S("animateMotion")),
            B(
              e,
              "d",
              (n = `\n                    M ${t[7](t[22] - 1)} ${t[6](t[33])}\n                    L ${t[7](t[22])} ${t[6](t[19])}\n                  `),
            ),
            B(e, "class", "nn-edge svelte-jw0d68"),
            B(e, "id", (r = `nn-edge-${t[22]}-${t[19]}-${t[33]}-${t[12]}`)),
            B(c, "id", `animatePathForward${t[22]}`),
            B(c, "begin", t[22] + "s"),
            B(c, "dur", "1s"),
            B(c, "repeatCount", "indefinite"),
            B(
              c,
              "path",
              (h = `\n                      M ${t[7](t[22] - 1)} ${t[6](t[33])}\n                      L ${t[7](t[22])} ${t[6](t[19])}\n                    `),
            ),
            B(c, "class", "svelte-jw0d68"),
            B(s, "class", "moving-text-forward svelte-jw0d68"),
            B(s, "opacity", "1"),
            B(s, "alignment-baseline", "middle");
        },
        m(t, n) {
          w(t, e, n),
            d && d.m(t, n),
            w(t, o, n),
            x(o, s),
            x(s, l),
            x(s, c),
            (u = !0);
        },
        p(t, i) {
          (!u ||
            (228 & i[0] &&
              n !==
                (n = `\n                    M ${t[7](t[22] - 1)} ${t[6](t[33])}\n                    L ${t[7](t[22])} ${t[6](t[19])}\n                  `))) &&
            B(e, "d", n),
            (!u ||
              (4132 & i[0] &&
                r !== (r = `nn-edge-${t[22]}-${t[19]}-${t[33]}-${t[12]}`))) &&
              B(e, "id", r),
            t[12] >= 1
              ? d
                ? d.p(t, i)
                : ((d = li(t)), d.c(), d.m(o.parentNode, o))
              : d && (d.d(1), (d = null)),
            (!u ||
              (228 & i[0] &&
                h !==
                  (h = `\n                      M ${t[7](t[22] - 1)} ${t[6](t[33])}\n                      L ${t[7](t[22])} ${t[6](t[19])}\n                    `))) &&
              B(c, "path", h);
        },
        i(t) {
          u ||
            (t &&
              Q(() => {
                a && a.end(1), (i = pt(e, lr, { duration: 500 })), i.start();
              }),
            (u = !0));
        },
        o(t) {
          i && i.invalidate(), t && (a = ft(e, lr, { duration: 400 })), (u = !1);
        },
        d(t) {
          t && k(e), t && a && a.end(), d && d.d(t), t && k(o);
        },
      };
    }
    function ui(t) {
      let e,
        n,
        r =
          t[22] > 0 &&
          (function (t) {
            let e,
              n,
              r = Gr(t[5][t[22] - 1], t[2]),
              i = [];
            for (let e = 0; e < r.length; e += 1) i[e] = hi(oi(t, r, e));
            const a = (t) =>
              dt(i[t], 1, 1, () => {
                i[t] = null;
              });
            return {
              c() {
                for (let t = 0; t < i.length; t += 1) i[t].c();
                e = T();
              },
              m(t, r) {
                for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
                w(t, e, r), (n = !0);
              },
              p(t, n) {
                if (12516 & n[0]) {
                  let o;
                  for (
                    r = Gr(t[5][t[22] - 1], t[2]), o = 0;
                    o < r.length;
                    o += 1
                  ) {
                    const a = oi(t, r, o);
                    i[o]
                      ? (i[o].p(a, n), ut(i[o], 1))
                      : ((i[o] = hi(a)),
                        i[o].c(),
                        ut(i[o], 1),
                        i[o].m(e.parentNode, e));
                  }
                  for (ct(), o = r.length; o < i.length; o += 1) a(o);
                  ht();
                }
              },
              i(t) {
                if (!n) {
                  for (let t = 0; t < r.length; t += 1) ut(i[t]);
                  n = !0;
                }
              },
              o(t) {
                i = i.filter(Boolean);
                for (let t = 0; t < i.length; t += 1) dt(i[t]);
                n = !1;
              },
              d(t) {
                $(i, t), t && k(e);
              },
            };
          })(t);
      return {
        c() {
          r && r.c(), (e = T());
        },
        m(t, i) {
          r && r.m(t, i), w(t, e, i), (n = !0);
        },
        p(t, e) {
          t[22] > 0 && r.p(t, e);
        },
        i(t) {
          n || (ut(r), (n = !0));
        },
        o(t) {
          dt(r), (n = !1);
        },
        d(t) {
          r && r.d(t), t && k(e);
        },
      };
    }
    function di(t) {
      let e,
        n,
        r = Gr(t[5][t[22]], t[2]),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = ui(ai(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (12516 & n[0]) {
            let o;
            for (r = Gr(t[5][t[22]], t[2]), o = 0; o < r.length; o += 1) {
              const a = ai(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = ui(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function mi(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p = t[14][t[22]] + "",
        f = t[26] && t[12] > 0 && pi(t),
        g =
          0 === t[22] &&
          (function (t) {
            let e,
              n,
              r,
              i = (0 === t[28] ? 2 : 1) + "";
            return {
              c() {
                (e = S("tspan")),
                  (n = z(i)),
                  (r = A()),
                  B(e, "class", "subscript svelte-jw0d68"),
                  B(e, "dy", "4");
              },
              m(t, i) {
                w(t, e, i), x(e, n), w(t, r, i);
              },
              d(t) {
                t && k(e), t && k(r);
              },
            };
          })(t);
      return {
        c() {
          (e = S("rect")),
            f && f.c(),
            (s = S("text")),
            (l = z(p)),
            g && g.c(),
            B(
              e,
              "class",
              (n =
                "nn-node " +
                (0 == t[22] ? "input" : t[22] == t[4] - 1 ? "output" : "hidden") +
                " svelte-jw0d68"),
            ),
            B(e, "width", (r = t[14][t[22]].length < 6 ? t[10] : t[10] + t[8])),
            B(e, "height", (i = t[26] && t[12] > 0 ? t[9] * Si : t[9])),
            B(s, "class", "nn-text svelte-jw0d68"),
            B(s, "text-anchor", "middle"),
            B(s, "alignment-baseline", "middle"),
            B(
              s,
              "dx",
              (c = t[14][t[22]].length < 6 ? t[10] / 2 : (t[10] + t[8]) / 2),
            ),
            B(s, "dy", (h = t[26] && t[12] > 0 ? t[9] * Si - 8 : t[9] / 2));
        },
        m(t, n) {
          w(t, e, n),
            f && f.m(t, n),
            w(t, s, n),
            x(s, l),
            g && g.m(s, null),
            (m = !0);
        },
        p(t, a) {
          (!m ||
            (16 & a[0] &&
              n !==
                (n =
                  "nn-node " +
                  (0 == t[22]
                    ? "input"
                    : t[22] == t[4] - 1
                      ? "output"
                      : "hidden") +
                  " svelte-jw0d68"))) &&
            B(e, "class", n),
            (!m ||
              (17664 & a[0] &&
                r !== (r = t[14][t[22]].length < 6 ? t[10] : t[10] + t[8]))) &&
              B(e, "width", r),
            (!m ||
              (4624 & a[0] &&
                i !== (i = t[26] && t[12] > 0 ? t[9] * Si : t[9]))) &&
              B(e, "height", i),
            t[26] && t[12] > 0
              ? f
                ? (f.p(t, a), 4112 & a[0] && ut(f, 1))
                : ((f = pi(t)), f.c(), ut(f, 1), f.m(s.parentNode, s))
              : f &&
                (ct(),
                dt(f, 1, 1, () => {
                  f = null;
                }),
                ht()),
            (!m || 16384 & a[0]) && p !== (p = t[14][t[22]] + "") && C(l, p),
            (!m ||
              (17664 & a[0] &&
                c !==
                  (c =
                    t[14][t[22]].length < 6 ? t[10] / 2 : (t[10] + t[8]) / 2))) &&
              B(s, "dx", c),
            (!m ||
              (4624 & a[0] &&
                h !== (h = t[26] && t[12] > 0 ? t[9] * Si - 8 : t[9] / 2))) &&
              B(s, "dy", h);
        },
        i(t) {
          m ||
            (t &&
              Q(() => {
                o && o.end(1),
                  (a = pt(e, sr, { x: -50, duration: 500 })),
                  a.start();
              }),
            ut(f),
            t &&
              Q(() => {
                d && d.end(1),
                  (u = pt(s, sr, { x: -50, duration: 500 })),
                  u.start();
              }),
            (m = !0));
        },
        o(t) {
          a && a.invalidate(),
            t && (o = ft(e, or, { duration: 300 })),
            dt(f),
            u && u.invalidate(),
            t && (d = ft(s, or, { duration: 300 })),
            (m = !1);
        },
        d(t) {
          t && k(e),
            t && o && o.end(),
            f && f.d(t),
            t && k(s),
            g && g.d(),
            t && d && d.end();
        },
      };
    }
    function pi(t) {
      let e, n;
      return (
        (e = new Qr({ props: { data: t[14][t[22]] } })),
        {
          c() {
            xt(e.$$.fragment);
          },
          m(t, r) {
            vt(e, t, r), (n = !0);
          },
          p(t, n) {
            const r = {};
            16384 & n[0] && (r.data = t[14][t[22]]), e.$set(r);
          },
          i(t) {
            n || (ut(e.$$.fragment, t), (n = !0));
          },
          o(t) {
            dt(e.$$.fragment, t), (n = !1);
          },
          d(t) {
            bt(e, t);
          },
        }
      );
    }
    function fi(t) {
      let e, n, r, i, a, o, s, l, c, h, u;
      return {
        c() {
          (e = S("rect")),
            (o = S("text")),
            (s = z("Artifical Neuron")),
            B(e, "class", "activation-rect svelte-jw0d68"),
            B(e, "width", (n = t[10] + Mi)),
            B(e, "height", (r = t[9] * Si + Mi)),
            B(e, "x", -Mi / 2),
            B(e, "y", -Mi / 2),
            B(o, "class", "nn-text svelte-jw0d68"),
            B(o, "text-anchor", "start"),
            B(o, "alignment-baseline", "middle"),
            B(o, "x", -Mi / 2),
            B(o, "y", (l = Mi + (t[9] * Si) / 2 + 12));
        },
        m(t, n) {
          w(t, e, n), w(t, o, n), x(o, s), (u = !0);
        },
        p(t, i) {
          (!u || (1024 & i[0] && n !== (n = t[10] + Mi))) && B(e, "width", n),
            (!u || (512 & i[0] && r !== (r = t[9] * Si + Mi))) &&
              B(e, "height", r),
            (!u || (512 & i[0] && l !== (l = Mi + (t[9] * Si) / 2 + 12))) &&
              B(o, "y", l);
        },
        i(t) {
          u ||
            (Q(() => {
              a && a.end(1), (i = pt(e, lr, { duration: 1e3 })), i.start();
            }),
            t &&
              Q(() => {
                h && h.end(1), (c = pt(o, sr, { duration: 500 })), c.start();
              }),
            (u = !0));
        },
        o(t) {
          i && i.invalidate(),
            (a = ft(e, lr, { duration: 300 })),
            c && c.invalidate(),
            t && (h = ft(o, or, { duration: 200 })),
            (u = !1);
        },
        d(t) {
          t && k(e), t && a && a.end(), t && k(o), t && h && h.end();
        },
      };
    }
    function gi(t) {
      let e,
        n,
        r,
        i,
        a = t[15] && [1, t[4] - 2].includes(t[22]),
        o = t[22] !== t[4] - 1 && mi(t),
        s = a && fi(t);
      return {
        c() {
          (e = S("g")),
            o && o.c(),
            (n = T()),
            s && s.c(),
            B(e, "class", "nn-g svelte-jw0d68"),
            B(
              e,
              "transform",
              (r =
                t[26] && t[12] > 0
                  ? `translate(${t[7](t[22]) - t[10] / 2} ${t[6](t[19]) - (t[9] * Si) / 2})`
                  : `translate(${t[7](t[22]) - t[10] / 2} ${t[6](t[19]) - (1 * t[9]) / 2})`),
            );
        },
        m(t, r) {
          w(t, e, r), o && o.m(e, null), x(e, n), s && s.m(e, null), (i = !0);
        },
        p(t, l) {
          t[22] !== t[4] - 1
            ? o
              ? (o.p(t, l), 16 & l[0] && ut(o, 1))
              : ((o = mi(t)), o.c(), ut(o, 1), o.m(e, n))
            : o &&
              (ct(),
              dt(o, 1, 1, () => {
                o = null;
              }),
              ht()),
            32784 & l[0] && (a = t[15] && [1, t[4] - 2].includes(t[22])),
            a
              ? s
                ? (s.p(t, l), 32784 & l[0] && ut(s, 1))
                : ((s = fi(t)), s.c(), ut(s, 1), s.m(e, null))
              : s &&
                (ct(),
                dt(s, 1, 1, () => {
                  s = null;
                }),
                ht()),
            (!i ||
              (5876 & l[0] &&
                r !==
                  (r =
                    t[26] && t[12] > 0
                      ? `translate(${t[7](t[22]) - t[10] / 2} ${t[6](t[19]) - (t[9] * Si) / 2})`
                      : `translate(${t[7](t[22]) - t[10] / 2} ${t[6](t[19]) - (1 * t[9]) / 2})`))) &&
              B(e, "transform", r);
        },
        i(t) {
          i || (ut(o), ut(s), (i = !0));
        },
        o(t) {
          dt(o), dt(s), (i = !1);
        },
        d(t) {
          t && k(e), o && o.d(), s && s.d();
        },
      };
    }
    function yi(t) {
      let e,
        n,
        r = Gr(t[5][t[22]], t[2]),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = gi(ri(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (55284 & n[0]) {
            let o;
            for (r = Gr(t[5][t[22]], t[2]), o = 0; o < r.length; o += 1) {
              const a = ri(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = gi(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function xi(t) {
      let e,
        n,
        r = [0, 1, t[4] - 1],
        i = [];
      for (let e = 0; e < 3; e += 1) i[e] = wi(ei(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < 3; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < 3; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (1748 & n[0]) {
            let o;
            for (r = [0, 1, t[4] - 1], o = 0; o < 3; o += 1) {
              const a = ei(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = wi(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = 3; o < 3; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < 3; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < 3; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function vi(t) {
      let e, n, r, i, a, o, s, l, c;
      return {
        c() {
          (e = S("line")),
            B(e, "x1", (n = t[7](t[22]) - t[10] / 2)),
            B(e, "y1", (r = t[6](t[2] - 1) - t[9] / 2 + 7)),
            B(e, "x2", (i = t[7](t[22] + 1) - t[10] / 2 - 15)),
            B(e, "y2", (a = t[6](t[2] - 1) - t[9] / 2 + 7)),
            B(
              e,
              "class",
              (o =
                "layer-underline " +
                (0 == t[22] ? "input" : t[22] == t[4] - 1 ? "output" : "hidden") +
                " svelte-jw0d68"),
            );
        },
        m(t, n) {
          w(t, e, n), (c = !0);
        },
        p(t, s) {
          (!c || (1168 & s[0] && n !== (n = t[7](t[22]) - t[10] / 2))) &&
            B(e, "x1", n),
            (!c || (580 & s[0] && r !== (r = t[6](t[2] - 1) - t[9] / 2 + 7))) &&
              B(e, "y1", r),
            (!c ||
              (1168 & s[0] && i !== (i = t[7](t[22] + 1) - t[10] / 2 - 15))) &&
              B(e, "x2", i),
            (!c || (580 & s[0] && a !== (a = t[6](t[2] - 1) - t[9] / 2 + 7))) &&
              B(e, "y2", a),
            (!c ||
              (16 & s[0] &&
                o !==
                  (o =
                    "layer-underline " +
                    (0 == t[22]
                      ? "input"
                      : t[22] == t[4] - 1
                        ? "output"
                        : "hidden") +
                    " svelte-jw0d68"))) &&
              B(e, "class", o);
        },
        i(t) {
          c ||
            (t &&
              Q(() => {
                l && l.end(1), (s = pt(e, lr, { duration: 1e3 })), s.start();
              }),
            (c = !0));
        },
        o(t) {
          s && s.invalidate(), t && (l = ft(e, lr, { duration: 400 })), (c = !1);
        },
        d(t) {
          t && k(e), t && l && l.end();
        },
      };
    }
    function bi(t) {
      let e, n, r, i, a, o, s, l;
      return {
        c() {
          (e = S("line")),
            B(e, "x1", (n = t[7](t[22]) - t[10] / 2)),
            B(e, "y1", (r = t[6](t[2] - 1) - t[9] / 2 + 7)),
            B(e, "x2", (i = t[7](t[4] - 1) - t[10] / 2 - 15)),
            B(e, "y2", (a = t[6](t[2] - 1) - t[9] / 2 + 7)),
            B(e, "class", "layer-underline hidden svelte-jw0d68");
        },
        m(t, n) {
          w(t, e, n), (l = !0);
        },
        p(t, o) {
          (!l || (1168 & o[0] && n !== (n = t[7](t[22]) - t[10] / 2))) &&
            B(e, "x1", n),
            (!l || (580 & o[0] && r !== (r = t[6](t[2] - 1) - t[9] / 2 + 7))) &&
              B(e, "y1", r),
            (!l ||
              (1168 & o[0] && i !== (i = t[7](t[4] - 1) - t[10] / 2 - 15))) &&
              B(e, "x2", i),
            (!l || (580 & o[0] && a !== (a = t[6](t[2] - 1) - t[9] / 2 + 7))) &&
              B(e, "y2", a);
        },
        i(t) {
          l ||
            (Q(() => {
              s && s.end(1), (o = pt(e, lr, { duration: 1e3 })), o.start();
            }),
            (l = !0));
        },
        o(t) {
          o && o.invalidate(), (s = ft(e, lr, { duration: 400 })), (l = !1);
        },
        d(t) {
          t && k(e), t && s && s.end();
        },
      };
    }
    function wi(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u =
          0 == t[22]
            ? "input layer"
            : t[22] == t[4] - 1
              ? "output layer"
              : "hidden layers";
      const d = [bi, vi],
        m = [];
      function p(t, e) {
        return 1 === t[22] ? 0 : 1;
      }
      return (
        (s = p(t)),
        (l = m[s] = d[s](t)),
        {
          c() {
            (e = S("text")),
              (n = z(u)),
              l.c(),
              (c = T()),
              B(e, "class", "nn-text svelte-jw0d68"),
              B(e, "x", (r = t[7](t[22]) - t[10] / 2)),
              B(e, "y", (i = t[6](t[2] - 1) - t[9] / 2)),
              B(e, "text-anchor", "start"),
              B(e, "alignment-baseline", "middle");
          },
          m(t, r) {
            w(t, e, r), x(e, n), m[s].m(t, r), w(t, c, r), (h = !0);
          },
          p(t, a) {
            (!h || 16 & a[0]) &&
              u !==
                (u =
                  0 == t[22]
                    ? "input layer"
                    : t[22] == t[4] - 1
                      ? "output layer"
                      : "hidden layers") &&
              C(n, u),
              (!h || (1168 & a[0] && r !== (r = t[7](t[22]) - t[10] / 2))) &&
                B(e, "x", r),
              (!h || (580 & a[0] && i !== (i = t[6](t[2] - 1) - t[9] / 2))) &&
                B(e, "y", i);
            let o = s;
            (s = p(t)),
              s === o
                ? m[s].p(t, a)
                : (ct(),
                  dt(m[o], 1, 1, () => {
                    m[o] = null;
                  }),
                  ht(),
                  (l = m[s]),
                  l ? l.p(t, a) : ((l = m[s] = d[s](t)), l.c()),
                  ut(l, 1),
                  l.m(c.parentNode, c));
          },
          i(t) {
            h ||
              (Q(() => {
                o && o.end(1),
                  (a = pt(e, sr, { x: -50, duration: 500 })),
                  a.start();
              }),
              ut(l),
              (h = !0));
          },
          o(t) {
            a && a.invalidate(),
              (o = ft(e, or, { duration: 200 })),
              dt(l),
              (h = !1);
          },
          d(t) {
            t && k(e), t && o && o.end(), m[s].d(t), t && k(c);
          },
        }
      );
    }
    function ki(t) {
      let e, n, r, i;
      return (
        (n = new Zr({ props: { width: t[1], height: t[0] } })),
        {
          c() {
            (e = S("g")),
              xt(n.$$.fragment),
              B(e, "class", "nn-g svelte-jw0d68"),
              B(
                e,
                "transform",
                (r = `translate(${t[7](t[4] - 1) - t[10] / 2} ${t[6](t[19])})`),
              );
          },
          m(t, r) {
            w(t, e, r), vt(n, e, null), (i = !0);
          },
          p(t, a) {
            const o = {};
            2 & a[0] && (o.width = t[1]),
              1 & a[0] && (o.height = t[0]),
              n.$set(o),
              (!i ||
                (1268 & a[0] &&
                  r !==
                    (r = `translate(${t[7](t[4] - 1) - t[10] / 2} ${t[6](t[19])})`))) &&
                B(e, "transform", r);
          },
          i(t) {
            i || (ut(n.$$.fragment, t), (i = !0));
          },
          o(t) {
            dt(n.$$.fragment, t), (i = !1);
          },
          d(t) {
            t && k(e), bt(n);
          },
        }
      );
    }
    function $i(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h = t[11] && si(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            h && h.c(),
            (r = S("rect")),
            (i = S("text")),
            (a = z("*For simplicity, bias terms are not shown.")),
            B(r, "fill", "#e5f7ff"),
            B(r, "x", "0"),
            B(r, "y", "0"),
            B(r, "width", "15"),
            B(r, "height", "15"),
            B(i, "class", "nn-text-bottom svelte-jw0d68"),
            B(i, "x", "2"),
            B(i, "y", (o = t[0] - 10)),
            B(n, "width", t[1]),
            B(n, "height", (s = t[0] + t[3].top + t[3].bottom)),
            B(n, "class", "svelte-jw0d68"),
            B(e, "id", "network-chart"),
            B(e, "class", "svelte-jw0d68"),
            Q(() => t[18].call(e));
        },
        m(o, s) {
          w(o, e, s),
            x(e, n),
            h && h.m(n, null),
            x(n, r),
            x(n, i),
            x(i, a),
            (l = I(e, t[18].bind(e))),
            (c = !0);
        },
        p(t, e) {
          t[11]
            ? h
              ? (h.p(t, e), 2048 & e[0] && ut(h, 1))
              : ((h = si(t)), h.c(), ut(h, 1), h.m(n, r))
            : h &&
              (ct(),
              dt(h, 1, 1, () => {
                h = null;
              }),
              ht()),
            (!c || (1 & e[0] && o !== (o = t[0] - 10))) && B(i, "y", o),
            (!c || 2 & e[0]) && B(n, "width", t[1]),
            (!c || (9 & e[0] && s !== (s = t[0] + t[3].top + t[3].bottom))) &&
              B(n, "height", s);
        },
        i(t) {
          c || (ut(h), (c = !0));
        },
        o(t) {
          dt(h), (c = !1);
        },
        d(t) {
          t && k(e), h && h.d(), l();
        },
      };
    }
    let Mi = 50;
    const Si = 1.4;
    function zi(t, e, n) {
      let r, i, a, o, s, l, h, u, d, m, p, f, g, y, x, v;
      c(t, Lt, (t) => n(3, (u = t))),
        c(t, Ot, (t) => n(4, (d = t))),
        c(t, _t, (t) => n(17, (m = t))),
        c(t, It, (t) => n(5, (p = t))),
        c(t, Ft, (t) => n(12, (f = t))),
        c(t, jt, (t) => n(13, (g = t))),
        c(t, Rt, (t) => n(14, (y = t))),
        c(t, Dt, (t) => n(15, (x = t))),
        c(t, Pt, (t) => n(16, (v = t))),
        G(() => {
          n(11, (i = !0));
        });
      let b = 500,
        w = 500;
      return (
        (t.$$.update = () => {
          32 & t.$$.dirty[0] && n(2, (r = Ie(p) + 1)),
            131072 & t.$$.dirty[0] && n(10, (a = m ? 42 : 72)),
            131072 & t.$$.dirty[0] && n(9, (o = m ? 26 : 36)),
            131072 & t.$$.dirty[0] && n(8, (s = m ? 12 : 0)),
            26 & t.$$.dirty[0] &&
              n(
                7,
                (l = ar()
                  .domain([-1, d])
                  .range([u.left, w - u.right])),
              ),
            13 & t.$$.dirty[0] &&
              n(
                6,
                (h = ar()
                  .domain([-1, r])
                  .range([b - u.bottom, u.top])),
              );
        }),
        n(11, (i = !1)),
        [
          b,
          w,
          r,
          u,
          d,
          p,
          h,
          l,
          s,
          o,
          a,
          i,
          f,
          g,
          y,
          x,
          v,
          m,
          function () {
            (w = this.offsetWidth), (b = this.offsetHeight), n(1, w), n(0, b);
          },
        ]
      );
    }
    class Ai extends $t {
      constructor(t) {
        super(), kt(this, t, zi, $i, s, {}, null, [-1, -1]);
      }
    }
    function Ti(e) {
      let n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $,
        S,
        T,
        N,
        C,
        q,
        E,
        L,
        _,
        I,
        R,
        P,
        H,
        D,
        F,
        j,
        V,
        U,
        G,
        W,
        X,
        Y,
        Z,
        K,
        J,
        Q,
        tt,
        et,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        lt,
        ct,
        ht,
        mt,
        pt,
        ft,
        gt,
        yt,
        wt,
        kt,
        $t,
        Mt,
        St,
        zt,
        At,
        Tt,
        Nt,
        Bt,
        Ct,
        qt,
        Et,
        Lt,
        _t,
        It,
        Rt,
        Ot,
        Pt,
        Ht = Me(e[2], !0) + "",
        Dt = Me(e[0], !0) + "",
        Ft = Me(Ni, !0) + "",
        jt = Me(e[1], !0) + "";
      return (
        (o = new Ai({})),
        {
          c() {
            (n = M("section")),
              (r = M("div")),
              (i = M("div")),
              (a = M("div")),
              xt(o.$$.fragment),
              (s = A()),
              (l = M("div")),
              (c = M("div")),
              (c.innerHTML =
              '<div class="step-content svelte-1yga2eg"><h2 class="svelte-1yga2eg">Bloques de construcción: Gráficos Computacionales</h2> \n          <hr class="svelte-1yga2eg"/> \n          <br/> \n          <p class="svelte-1yga2eg">Un gráfico computacional tiene un nodo de entrada donde los datos se introducen en el\n            gráfico, un nodo de función donde se procesan los datos de entrada, y un\n            nodo de salida donde se produce el resultado del cálculo.\n            <br/><br/>\n            Como podemos ver, los datos fluyen en una dirección, desde las entradas hasta la salida, a través\n            del gráfico.</p></div>'),
              (h = A()),
              (d = M("div")),
              (m = M("div")),
              (p = M("h2")),
              (p.textContent = "Regresión Lineal"),
              (f = A()),
              (g = M("hr")),
              (y = A()),
              (v = M("br")),
              (b = A()),
              ($ = M("p")),
              (S = z(
              "Podemos representar todo tipo de algoritmos como gráficos\n            computacionales. Por ejemplo, podemos representar fácilmente una ",
              )),
              (T = M("a")),
              (T.textContent = "Regresión Lineal"),
              (N = z("\n            como un gráfico computacional:\n            ")),
              (C = new O(!1)),
              (q = z(
              "\n            Para hacerlo, solo necesitamos cambiar dos cosas:\n            ",
              )),
              (E = M("br")),
              (L = M("br")),
              (_ = z(
              "\n            1. Agregar pesos a cada enlace que conecta los nodos de entrada con los nodos\n            de función.",
              )),
              (I = M("sup")),
              (R = M("span")),
              (R.textContent = "[ℹ]"),
              (P = A()),
              (H = M("br")),
              (D = M("br")),
              (F = z(
              "\n            2. Actualizar nuestra función para representar una función lineal de una suma ponderada:\n            ",
              )),
              (j = new O(!1)),
              (V = z(
              "\n            ¡Y así de simple, tenemos un gráfico computacional para la regresión lineal!",
              )),
              (U = A()),
              (G = M("div")),
              (G.innerHTML =
              '<div class="step-content svelte-1yga2eg"><h2 class="svelte-1yga2eg">Salidas del Modelo</h2> \n          <hr class="svelte-1yga2eg"/> \n          <br/> \n          <p class="svelte-1yga2eg">Para hacer el proceso extra claro, visualicemos las salidas de nuestro\n            modelo de regresión lineal.\n            <br/><br/>\n            Como esperaríamos, este modelo está produciendo algunas predicciones (la línea\n            diagonal amarilla) basadas en los datos de entrada.\n            <br/><br/>\n            A medida que construimos un modelo más complejo para diferentes aplicaciones, veremos\n            que esta salida cambia para reflejar el estado del modelo correspondiente.</p></div>'),
              (W = A()),
              (X = M("div")),
              (Y = M("div")),
              (Z = M("h2")),
              (Z.textContent = "Regresión Logística"),
              (K = A()),
              (J = M("hr")),
              (Q = A()),
              (tt = M("br")),
              (et = A()),
              (nt = M("p")),
              (rt = z(
              "¿Qué pasa si nuestro problema cambia y queremos cambiar nuestro modelo de\n            regresión lineal a ",
              )),
              (it = M("a")),
              (it.textContent = "regresión logística"),
              (at = z("?\n            ")),
              (ot = M("br")),
              (st = M("br")),
              (lt = z(
              "\n            Podemos simplemente agregar otra entrada y actualizar la función en nuestro gráfico\n            computacional, cambiando la función lineal por una función sigmoide:\n            ",
              )),
              (ct = new O(!1)),
              (ht = z(
              "\n            Ahora, podemos ver que la salida del modelo (el fondo de la región de decisión) refleja\n            nuestro nuevo problema de clasificación y conjunto de datos.",
              )),
              (mt = A()),
              (pt = M("div")),
              (ft = M("div")),
              (gt = M("h2")),
              (gt.textContent = "Perceptrones"),
              (yt = A()),
              (wt = M("hr")),
              (kt = A()),
              ($t = M("br")),
              (Mt = A()),
              (St = M("p")),
              (zt = z(
              "Nuestra configuración de gráfico computacional hace que sea trivial modelar diferentes\n            algoritmos. Por ejemplo, si queremos modelar un Perceptrón en lugar de\n            regresión logística, solo necesitamos cambiar nuestra función logística por una\n            función escalón:\n            ",
              )),
              (At = new O(!1)),
              (Tt = z(
              "\n            Observa que la región de clasificación en la salida de nuestro modelo también cambió,\n            para reflejar el nuevo modelo que se está representando.",
              )),
              (Nt = A()),
              (Bt = M("div")),
              (Bt.innerHTML =
              '<div class="step-content svelte-1yga2eg"><h2 class="svelte-1yga2eg">Funciones de Activación y Neuronas Artificiales</h2> \n          <hr class="svelte-1yga2eg"/> \n          <br/> \n          <p class="svelte-1yga2eg">En una red neuronal, este nodo de función que estamos cambiando es muy\n            especial - lo llamamos una <span class="bold">neurona artificial</span>.\n            <br/><br/>\n            Una neurona artificial es un elemento computacional fundamental que recibe\n            entradas, realiza una operación ponderada sobre estas entradas y pasa el\n            resultado a través de una función.\n            <br/><br/>En redes neuronales, estas funciones <i>deben</i> ser\n            no lineales, y se conocen como\n            <span class="bold">funciones de activación</span>.</p></div>'),
              (Ct = A()),
              (qt = M("div")),
              (qt.innerHTML =
              '<div class="step-content svelte-1yga2eg"><h2 class="svelte-1yga2eg">Redes Neuronales</h2> \n          <hr class="svelte-1yga2eg"/> \n          <br/> \n          <p class="svelte-1yga2eg">Nada nos impide encadenar múltiples neuronas artificiales\n            juntas, alimentando una a otra. <span class="bold">¡Esto es todo lo que es una red neuronal!</span> \n            <br/><br/>\n            De hecho, las redes neuronales originales se llamaban\n            <span class="bold">perceptrones multicapa</span> porque estaban compuestas\n            de capas de perceptrones (neuronas artificiales con funciones escalón) alimentándose\n            una a otra!</p></div>'),
              (Et = A()),
              (Lt = M("div")),
              (Lt.innerHTML =
              '<div class="step-content svelte-1yga2eg"><h2 class="svelte-1yga2eg">Arquitectura</h2> \n          <hr class="svelte-1yga2eg"/> \n          <br/> \n\n          <p class="svelte-1yga2eg">En general, una arquitectura de red neuronal consiste en tres tipos\n            de capas:\n            <br/><br/><span class="bold">capa de entrada</span>: Una capa con un\n            nodo para cada entrada de la red.\n            <br/><br/><span class="bold">capa(s) oculta(s)</span>: Una capa llena\n            de neuronas artificiales.\n            <br/><br/><span class="bold">capa de salida</span>: Una capa\n            que representa la salida de la red.\n            <br/><br/>\n            Solo debe haber una capa de entrada y una de salida, pero puede haber\n            un número arbitrario de capas ocultas.</p></div>'),
              (_t = A()),
              (It = M("div")),
              (It.innerHTML =
              '<div class="step-content svelte-1yga2eg"><h2 class="svelte-1yga2eg">Sin Límites</h2> \n          <hr class="svelte-1yga2eg"/> \n          <br/> \n\n          <p class="svelte-1yga2eg">Diseñar una arquitectura de red neuronal es más un arte que una\n            ciencia. La capa de entrada y salida se seleccionarán para el\n            problema específico, pero la capa oculta es bastante arbitraria. <br/><br/>\n            Las redes neuronales pueden ser <span class="bold">anchas</span>: tener muchas\n            neuronas en una capa oculta dada, o <span class="bold">profundas</span>:\n            tener muchas capas ocultas en la red. Balancear el número de neuronas\n            optimiza el rendimiento; más neuronas permiten un aprendizaje complejo, a costa\n            del riesgo de sobreajuste y mayor costo computacional.</p></div>'),
              B(a, "class", "chart-holder svelte-1yga2eg"),
              B(i, "class", "charts-container svelte-1yga2eg"),
              B(c, "class", "step svelte-1yga2eg"),
              B(c, "data-index", "0"),
              B(p, "class", "svelte-1yga2eg"),
              B(g, "class", "svelte-1yga2eg"), 
              B(T, "href", "https://mlu-explain.github.io/linear-regression/"),
              (C.a = q),
              B(R, "class", "info-tooltip"),
              B(
              R,
              "title",
              "Nota - para mapear la ecuación exacta de arriba al gráfico, uno de los términos X debe representar el término de sesgo: 1.",
              ),
              (j.a = V),
              B($, "class", "svelte-1yga2eg"),
              B(m, "class", "step-content svelte-1yga2eg"),
              B(d, "class", "step svelte-1yga2eg"),
              B(d, "data-index", "1"),
              B(G, "class", "step svelte-1yga2eg"),
              B(G, "data-index", "2"),
              B(Z, "class", "svelte-1yga2eg"),
              B(J, "class", "svelte-1yga2eg"),
              B(it, "href", "https://mlu-explain.github.io/logistic-regression/"),
              (ct.a = ht),
              B(nt, "class", "svelte-1yga2eg"),
              B(Y, "class", "step-content svelte-1yga2eg"),
              B(X, "class", "step svelte-1yga2eg"),
              B(X, "data-index", "3"),
              B(gt, "class", "svelte-1yga2eg"),
              B(wt, "class", "svelte-1yga2eg"),
              (At.a = Tt),
              B(St, "class", "svelte-1yga2eg"),
              B(ft, "class", "step-content svelte-1yga2eg"),
              B(pt, "class", "step svelte-1yga2eg"),
              B(pt, "data-index", "4"),
              B(Bt, "class", "step svelte-1yga2eg"),
              B(Bt, "data-index", "5"),
              B(qt, "class", "step svelte-1yga2eg"),
              B(qt, "data-index", "6"),
              B(Lt, "class", "step svelte-1yga2eg"),
              B(Lt, "data-index", "7"),
              B(It, "class", "step svelte-1yga2eg"),
              B(It, "data-index", "8"),
              B(l, "class", "steps-container svelte-1yga2eg"),
              B(r, "class", "scrolly-container svelte-1yga2eg"),
              B(n, "class", "svelte-1yga2eg");
          },
          m(t, e) {
            w(t, n, e),
              x(n, r),
              x(r, i),
              x(i, a),
              vt(o, a, null),
              x(r, s),
              x(r, l),
              x(l, c),
              x(l, h),
              x(l, d),
              x(d, m),
              x(m, p),
              x(m, f),
              x(m, g),
              x(m, y),
              x(m, v),
              x(m, b),
              x(m, $),
              x($, S),
              x($, T),
              x($, N),
              C.m(Ht, $),
              x($, q),
              x($, E),
              x($, L),
              x($, _),
              x($, I),
              x(I, R),
              x($, P),
              x($, H),
              x($, D),
              x($, F),
              j.m(Dt, $),
              x($, V),
              x(l, U),
              x(l, G),
              x(l, W),
              x(l, X),
              x(X, Y),
              x(Y, Z),
              x(Y, K),
              x(Y, J),
              x(Y, Q),
              x(Y, tt),
              x(Y, et),
              x(Y, nt),
              x(nt, rt),
              x(nt, it),
              x(nt, at),
              x(nt, ot),
              x(nt, st),
              x(nt, lt),
              ct.m(Ft, nt),
              x(nt, ht),
              x(l, mt),
              x(l, pt),
              x(pt, ft),
              x(ft, gt),
              x(ft, yt),
              x(ft, wt),
              x(ft, kt),
              x(ft, $t),
              x(ft, Mt),
              x(ft, St),
              x(St, zt),
              At.m(jt, St),
              x(St, Tt),
              x(l, Nt),
              x(l, Bt),
              x(l, Ct),
              x(l, qt),
              x(l, Et),
              x(l, Lt),
              x(l, _t),
              x(l, It),
              (Rt = !0),
              Ot || ((Pt = u(Se.call(null, R))), (Ot = !0));
          },
          p: t,
          i(t) {
            Rt || (ut(o.$$.fragment, t), (Rt = !0));
          },
          o(t) {
            dt(o.$$.fragment, t), (Rt = !1);
          },
          d(t) {
            t && k(n), bt(o), (Ot = !1), Pt();
          },
        }
      );
    }
    const Ni =
      "\\begin{aligned} \\text{sigmoid} = \\frac{1}{1+e^{-w_iX_i}} \\end{aligned}";
    function Bi(t, e, n) {
      let r, i, a, o, s, l, u;
      c(t, jt, (t) => n(3, (r = t))),
        c(t, Dt, (t) => n(4, (i = t))),
        c(t, It, (t) => n(5, (a = t))),
        c(t, Rt, (t) => n(6, (o = t))),
        c(t, Pt, (t) => n(7, (s = t))),
        c(t, Ft, (t) => n(8, (l = t))),
        c(t, Ht, (t) => n(9, (u = t))),
        h(Ft, (l = 0), l),
        h(It, (a = [2, 1, 1]), a);
      const d = {
        0: () => {
          h(Pt, (s = !1), s),
            h(It, (a = [2, 1, 1]), a),
            h(Rt, (o = ["input", "function", "output"]), o),
            h(Ft, (l = 0), l),
            h(Ht, (u = !1), u),
            h(Dt, (i = !1), i),
            h(jt, (r = 2), r);
        },
        1: () => {
          h(Pt, (s = !1), s),
            h(It, (a = [2, 1, 1]), a),
            h(Rt, (o = ["X", "linear", "y"]), o),
            h(Ht, (u = !0), u),
            h(Dt, (i = !1), i),
            h(Ft, (l = 1), l),
            h(jt, (r = 2), r);
        },
        2: () => {
          h(Ft, (l = 2), l),
            h(Pt, (s = !1), s),
            h(Rt, (o = ["X", "linear", "y"]), o),
            h(It, (a = [2, 1, 1]), a),
            h(Dt, (i = !1), i),
            h(jt, (r = 2), r);
        },
        3: () => {
          h(Ft, (l = 3), l),
            h(Rt, (o = ["X", "sigmoid", "y"]), o),
            h(Pt, (s = !1), s),
            h(It, (a = [2, 1, 1]), a),
            h(Dt, (i = !1), i),
            h(jt, (r = 2), r);
        },
        4: () => {
          h(Ft, (l = 4), l),
            h(Pt, (s = !1), s),
            h(Dt, (i = !1), i),
            h(Rt, (o = ["X", "step", "y"]), o),
            h(It, (a = [2, 1, 1]), a),
            h(jt, (r = 2), r);
        },
        5: () => {
          h(Ft, (l = 5), l),
            h(Pt, (s = !1), s),
            h(Dt, (i = !0), i),
            h(Rt, (o = ["X", "step", "y"]), o),
            h(It, (a = [2, 1, 1]), a),
            h(jt, (r = 2), r);
        },
        6: () => {
          h(Ft, (l = 6), l),
            h(Pt, (s = !1), s),
            h(Rt, (o = ["X", "step", "step", "y"]), o),
            h(It, (a = [2, 1, 1, 1]), a),
            h(Dt, (i = !1), i),
            h(jt, (r = 3), r);
        },
        7: () => {
          h(Ft, (l = 7), l),
            h(Pt, (s = !0), s),
            h(Rt, (o = ["X", "step", "step", "y"]), o),
            h(It, (a = [2, 1, 1, 1]), a),
            h(Dt, (i = !1), i),
            h(jt, (r = 3), r);
        },
        8: () => {
          h(Ft, (l = 8), l),
            h(Pt, (s = !0), s),
            h(Rt, (o = ["X", "reLu", "sigmoid", "y"]), o),
            h(It, (a = [2, 3, 2, 1]), a),
            h(Dt, (i = !1), i),
            h(jt, (r = 12), r);
        },
      };
      G(() => {
        [...document.querySelectorAll(".step")].forEach((t) => {
          m.observe(t);
        });
      });
      let m = new IntersectionObserver(
        (t) => {
          t.forEach((t) => {
            if (t.isIntersecting) {
              const e = t.target.getAttribute("data-index");
              e in d &&
                (function (t) {
                  t in d && d[t]();
                })(e);
            }
          });
        },
        { threshold: 0.7 },
      );
      return [
        "\\begin{aligned} \\text{linear} = \\sum^{n}_{i=1}w_iX_i \\end{aligned}",
        "\\begin{aligned} \\text{step} = \\begin{cases}\n         +1, \\text{if } w_iX_i \\geq 0  \\\\\n         -1, \\text{if } w_iX_i < 0\n        \\end{cases} \\end{aligned}",
        "y=w_0+ w_1X_1 ",
      ];
    }
    class Ci extends $t {
      constructor(t) {
        super(), kt(this, t, Bi, Ti, s, {});
      }
    }
    function qi(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "activation-path svelte-3o86hw"),
            B(e, "d", (n = t[3](t[4])));
        },
        m(t, n) {
          w(t, e, n), (i = !0);
        },
        p(t, r) {
          (!i || (8 & r && n !== (n = t[3](t[4])))) && B(e, "d", n);
        },
        i(t) {
          i ||
            (Q(() => {
              r || (r = gt(e, lr, { duration: 1e3 }, !0)), r.run(1);
            }),
            (i = !0));
        },
        o(t) {
          r || (r = gt(e, lr, { duration: 1e3 }, !1)), r.run(0), (i = !1);
        },
        d(t) {
          t && k(e), t && r && r.end();
        },
      };
    }
    function Ei(t) {
      let e,
        n,
        r,
        i = t[0] && qi(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            i && i.c(),
            B(n, "width", t[2]),
            B(n, "height", t[1]),
            B(e, "id", "relu-chart"),
            B(e, "class", "svelte-3o86hw");
        },
        m(t, a) {
          w(t, e, a), x(e, n), i && i.m(n, null), (r = !0);
        },
        p(t, [e]) {
          t[0]
            ? i
              ? (i.p(t, e), 1 & e && ut(i, 1))
              : ((i = qi(t)), i.c(), ut(i, 1), i.m(n, null))
            : i &&
              (ct(),
              dt(i, 1, 1, () => {
                i = null;
              }),
              ht()),
            (!r || 4 & e) && B(n, "width", t[2]),
            (!r || 2 & e) && B(n, "height", t[1]);
        },
        i(t) {
          r || (ut(i), (r = !0));
        },
        o(t) {
          dt(i), (r = !1);
        },
        d(t) {
          t && k(e), i && i.d();
        },
      };
    }
    function Li(t, e, n) {
      let r, i, a, o, s, l, h;
      c(t, _t, (t) => n(8, (h = t)));
      let { show: u = !0 } = e;
      const d = [-4, 4],
        m = [-1, 3];
      return (
        (t.$$set = (t) => {
          "show" in t && n(0, (u = t.show));
        }),
        (t.$$.update = () => {
          256 & t.$$.dirty && n(2, (r = h ? 50 : 70)),
            4 & t.$$.dirty && n(1, (i = r)),
            256 & t.$$.dirty && n(7, (a = h ? 5 : 10)),
            132 & t.$$.dirty &&
              n(
                6,
                (o = ar()
                  .domain(d)
                  .range([a, r - a])),
              ),
            130 & t.$$.dirty &&
              n(
                5,
                (s = ar()
                  .domain(m)
                  .range([i - a, a])),
              ),
            96 & t.$$.dirty &&
              n(
                3,
                (l = Tr()
                  .x((t) => o(t.x))
                  .y((t) => s(t.y))
                  .curve(Cr)),
              );
        }),
        [
          u,
          i,
          r,
          l,
          [
            { x: -4, y: 0 },
            { x: -3.724137931, y: 0 },
            { x: -3.4482758621, y: 0 },
            { x: -3.1724137931, y: 0 },
            { x: -2.8965517241, y: 0 },
            { x: -2.6206896552, y: 0 },
            { x: -2.3448275862, y: 0 },
            { x: -2.0689655172, y: 0 },
            { x: -1.7931034483, y: 0 },
            { x: -1.5172413793, y: 0 },
            { x: -1.2413793103, y: 0 },
            { x: -0.9655172414, y: 0 },
            { x: -0.6896551724, y: 0 },
            { x: -0.4137931034, y: 0 },
            { x: -0.1379310345, y: 0 },
            { x: 0.1379310345, y: 0.138 },
            { x: 0.4137931034, y: 0.414 },
            { x: 0.6896551724, y: 0.69 },
            { x: 0.9655172414, y: 0.966 },
            { x: 1.2413793103, y: 1.241 },
            { x: 1.5172413793, y: 1.517 },
            { x: 1.7931034483, y: 1.793 },
            { x: 2.0689655172, y: 2.069 },
            { x: 2.3448275862, y: 2.345 },
            { x: 2.6206896552, y: 2.621 },
            { x: 2.8965517241, y: 2.897 },
            { x: 3.1724137931, y: 3.172 },
            { x: 3.4482758621, y: 3.448 },
            { x: 3.724137931, y: 3.724 },
            { x: 4, y: 4 },
          ],
          s,
          o,
          a,
          h,
        ]
      );
    }
    class _i extends $t {
      constructor(t) {
        super(), kt(this, t, Li, Ei, s, { show: 0 });
      }
    }
    function Ii(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "activation-path svelte-5ky4iw"),
            B(e, "d", (n = t[3](t[4])));
        },
        m(t, n) {
          w(t, e, n), (i = !0);
        },
        p(t, r) {
          (!i || (8 & r && n !== (n = t[3](t[4])))) && B(e, "d", n);
        },
        i(t) {
          i ||
            (Q(() => {
              r || (r = gt(e, lr, { duration: 1e3 }, !0)), r.run(1);
            }),
            (i = !0));
        },
        o(t) {
          r || (r = gt(e, lr, { duration: 1e3 }, !1)), r.run(0), (i = !1);
        },
        d(t) {
          t && k(e), t && r && r.end();
        },
      };
    }
    function Ri(t) {
      let e,
        n,
        r,
        i = t[0] && Ii(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            i && i.c(),
            B(n, "width", t[2]),
            B(n, "height", t[1]),
            B(n, "class", "svelte-5ky4iw"),
            B(e, "id", "relu-chart"),
            B(e, "class", "svelte-5ky4iw");
        },
        m(t, a) {
          w(t, e, a), x(e, n), i && i.m(n, null), (r = !0);
        },
        p(t, [e]) {
          t[0]
            ? i
              ? (i.p(t, e), 1 & e && ut(i, 1))
              : ((i = Ii(t)), i.c(), ut(i, 1), i.m(n, null))
            : i &&
              (ct(),
              dt(i, 1, 1, () => {
                i = null;
              }),
              ht()),
            (!r || 4 & e) && B(n, "width", t[2]),
            (!r || 2 & e) && B(n, "height", t[1]);
        },
        i(t) {
          r || (ut(i), (r = !0));
        },
        o(t) {
          dt(i), (r = !1);
        },
        d(t) {
          t && k(e), i && i.d();
        },
      };
    }
    function Oi(t, e, n) {
      let r, i, a, o, s, l, h;
      c(t, _t, (t) => n(8, (h = t)));
      let { show: u = !0 } = e;
      const d = [-4, 4],
        m = [0, 1];
      return (
        (t.$$set = (t) => {
          "show" in t && n(0, (u = t.show));
        }),
        (t.$$.update = () => {
          256 & t.$$.dirty && n(2, (r = h ? 50 : 70)),
            4 & t.$$.dirty && n(1, (i = r)),
            256 & t.$$.dirty && n(7, (a = h ? 5 : 10)),
            132 & t.$$.dirty &&
              n(
                6,
                (o = ar()
                  .domain(d)
                  .range([a, r - a])),
              ),
            130 & t.$$.dirty &&
              n(
                5,
                (s = ar()
                  .domain(m)
                  .range([i - a, a])),
              ),
            96 & t.$$.dirty &&
              n(
                3,
                (l = Tr()
                  .x((t) => o(t.x))
                  .y((t) => s(t.y))
                  .curve(Cr)),
              );
        }),
        [
          u,
          i,
          r,
          l,
          [
            { x: -4, y: 0.018 },
            { x: -3.724137931, y: 0.024 },
            { x: -3.4482758621, y: 0.031 },
            { x: -3.1724137931, y: 0.04 },
            { x: -2.8965517241, y: 0.052 },
            { x: -2.6206896552, y: 0.068 },
            { x: -2.3448275862, y: 0.087 },
            { x: -2.0689655172, y: 0.112 },
            { x: -1.7931034483, y: 0.143 },
            { x: -1.5172413793, y: 0.18 },
            { x: -1.2413793103, y: 0.224 },
            { x: -0.9655172414, y: 0.276 },
            { x: -0.6896551724, y: 0.334 },
            { x: -0.4137931034, y: 0.398 },
            { x: -0.1379310345, y: 0.466 },
            { x: 0.1379310345, y: 0.534 },
            { x: 0.4137931034, y: 0.602 },
            { x: 0.6896551724, y: 0.666 },
            { x: 0.9655172414, y: 0.724 },
            { x: 1.2413793103, y: 0.776 },
            { x: 1.5172413793, y: 0.82 },
            { x: 1.7931034483, y: 0.857 },
            { x: 2.0689655172, y: 0.888 },
            { x: 2.3448275862, y: 0.913 },
            { x: 2.6206896552, y: 0.932 },
            { x: 2.8965517241, y: 0.948 },
            { x: 3.1724137931, y: 0.96 },
            { x: 3.4482758621, y: 0.969 },
            { x: 3.724137931, y: 0.976 },
            { x: 4, y: 0.982 },
          ],
          s,
          o,
          a,
          h,
        ]
      );
    }
    class Pi extends $t {
      constructor(t) {
        super(), kt(this, t, Oi, Ri, s, { show: 0 });
      }
    }
    function Hi(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "activation-path svelte-1dpg14f"),
            B(e, "d", (n = t[3](t[4])));
        },
        m(t, n) {
          w(t, e, n), (i = !0);
        },
        p(t, r) {
          (!i || (8 & r && n !== (n = t[3](t[4])))) && B(e, "d", n);
        },
        i(t) {
          i ||
            (Q(() => {
              r || (r = gt(e, lr, { duration: 1e3 }, !0)), r.run(1);
            }),
            (i = !0));
        },
        o(t) {
          r || (r = gt(e, lr, { duration: 1e3 }, !1)), r.run(0), (i = !1);
        },
        d(t) {
          t && k(e), t && r && r.end();
        },
      };
    }
    function Di(t) {
      let e,
        n,
        r,
        i = t[0] && Hi(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            i && i.c(),
            B(n, "width", t[2]),
            B(n, "height", t[1]),
            B(n, "class", "svelte-1dpg14f"),
            B(e, "id", "relu-chart"),
            B(e, "class", "svelte-1dpg14f");
        },
        m(t, a) {
          w(t, e, a), x(e, n), i && i.m(n, null), (r = !0);
        },
        p(t, [e]) {
          t[0]
            ? i
              ? (i.p(t, e), 1 & e && ut(i, 1))
              : ((i = Hi(t)), i.c(), ut(i, 1), i.m(n, null))
            : i &&
              (ct(),
              dt(i, 1, 1, () => {
                i = null;
              }),
              ht()),
            (!r || 4 & e) && B(n, "width", t[2]),
            (!r || 2 & e) && B(n, "height", t[1]);
        },
        i(t) {
          r || (ut(i), (r = !0));
        },
        o(t) {
          dt(i), (r = !1);
        },
        d(t) {
          t && k(e), i && i.d();
        },
      };
    }
    function Fi(t, e, n) {
      let r, i, a, o, s, l, h;
      c(t, _t, (t) => n(8, (h = t)));
      let { show: u = !0 } = e;
      const d = [-4, 4],
        m = [-2, 2];
      return (
        (t.$$set = (t) => {
          "show" in t && n(0, (u = t.show));
        }),
        (t.$$.update = () => {
          256 & t.$$.dirty && n(2, (r = h ? 50 : 70)),
            4 & t.$$.dirty && n(1, (i = r)),
            256 & t.$$.dirty && n(7, (a = h ? 5 : 10)),
            132 & t.$$.dirty &&
              n(
                6,
                (o = ar()
                  .domain(d)
                  .range([a, r - a])),
              ),
            130 & t.$$.dirty &&
              n(
                5,
                (s = ar()
                  .domain(m)
                  .range([i - a, a])),
              ),
            96 & t.$$.dirty &&
              n(
                3,
                (l = Tr()
                  .x((t) => o(t.x))
                  .y((t) => s(t.y))
                  .curve(Cr)),
              );
        }),
        [
          u,
          i,
          r,
          l,
          [
            { x: -4, y: -1 },
            { x: -3.724137931, y: -1 },
            { x: -3.4482758621, y: -1 },
            { x: -3.1724137931, y: -1 },
            { x: -2.8965517241, y: -1 },
            { x: -2.6206896552, y: -1 },
            { x: -2.3448275862, y: -1 },
            { x: -2.0689655172, y: -1 },
            { x: -1.7931034483, y: -1 },
            { x: -1.5172413793, y: -1 },
            { x: -1.2413793103, y: -1 },
            { x: -0.9655172414, y: -1 },
            { x: -0.6896551724, y: -1 },
            { x: -0.4137931034, y: -1 },
            { x: -0.1379310345, y: -1 },
            { x: 0.1379310345, y: 1 },
            { x: 0.4137931034, y: 1 },
            { x: 0.6896551724, y: 1 },
            { x: 0.9655172414, y: 1 },
            { x: 1.2413793103, y: 1 },
            { x: 1.5172413793, y: 1 },
            { x: 1.7931034483, y: 1 },
            { x: 2.0689655172, y: 1 },
            { x: 2.3448275862, y: 1 },
            { x: 2.6206896552, y: 1 },
            { x: 2.8965517241, y: 1 },
            { x: 3.1724137931, y: 1 },
            { x: 3.4482758621, y: 1 },
            { x: 3.724137931, y: 1 },
            { x: 4, y: 1 },
          ],
          s,
          o,
          a,
          h,
        ]
      );
    }
    class ji extends $t {
      constructor(t) {
        super(), kt(this, t, Fi, Di, s, { show: 0 });
      }
    }
    function Vi(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "activation-path svelte-5ky4iw"),
            B(e, "d", (n = t[3](t[4])));
        },
        m(t, n) {
          w(t, e, n), (i = !0);
        },
        p(t, r) {
          (!i || (8 & r && n !== (n = t[3](t[4])))) && B(e, "d", n);
        },
        i(t) {
          i ||
            (Q(() => {
              r || (r = gt(e, lr, { duration: 1e3 }, !0)), r.run(1);
            }),
            (i = !0));
        },
        o(t) {
          r || (r = gt(e, lr, { duration: 1e3 }, !1)), r.run(0), (i = !1);
        },
        d(t) {
          t && k(e), t && r && r.end();
        },
      };
    }
    function Ui(t) {
      let e,
        n,
        r,
        i = t[0] && Vi(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            i && i.c(),
            B(n, "width", t[2]),
            B(n, "height", t[1]),
            B(n, "class", "svelte-5ky4iw"),
            B(e, "id", "relu-chart"),
            B(e, "class", "svelte-5ky4iw");
        },
        m(t, a) {
          w(t, e, a), x(e, n), i && i.m(n, null), (r = !0);
        },
        p(t, [e]) {
          t[0]
            ? i
              ? (i.p(t, e), 1 & e && ut(i, 1))
              : ((i = Vi(t)), i.c(), ut(i, 1), i.m(n, null))
            : i &&
              (ct(),
              dt(i, 1, 1, () => {
                i = null;
              }),
              ht()),
            (!r || 4 & e) && B(n, "width", t[2]),
            (!r || 2 & e) && B(n, "height", t[1]);
        },
        i(t) {
          r || (ut(i), (r = !0));
        },
        o(t) {
          dt(i), (r = !1);
        },
        d(t) {
          t && k(e), i && i.d();
        },
      };
    }
    function Gi(t, e, n) {
      let r, i, a, o, s, l, h;
      c(t, _t, (t) => n(8, (h = t)));
      let { show: u = !0 } = e;
      const d = [-4, 4],
        m = [-1, 1];
      return (
        (t.$$set = (t) => {
          "show" in t && n(0, (u = t.show));
        }),
        (t.$$.update = () => {
          256 & t.$$.dirty && n(2, (r = h ? 50 : 70)),
            4 & t.$$.dirty && n(1, (i = r)),
            256 & t.$$.dirty && n(7, (a = h ? 5 : 10)),
            132 & t.$$.dirty &&
              n(
                6,
                (o = ar()
                  .domain(d)
                  .range([a, r - a])),
              ),
            130 & t.$$.dirty &&
              n(
                5,
                (s = ar()
                  .domain(m)
                  .range([i - a, a])),
              ),
            96 & t.$$.dirty &&
              n(
                3,
                (l = Tr()
                  .x((t) => o(t.x))
                  .y((t) => s(t.y))
                  .curve(Cr)),
              );
        }),
        [
          u,
          i,
          r,
          l,
          [
            { x: -4, y: -0.999 },
            { x: -3.724137931, y: -0.999 },
            { x: -3.4482758621, y: -0.998 },
            { x: -3.1724137931, y: -0.996 },
            { x: -2.8965517241, y: -0.994 },
            { x: -2.6206896552, y: -0.989 },
            { x: -2.3448275862, y: -0.982 },
            { x: -2.0689655172, y: -0.969 },
            { x: -1.7931034483, y: -0.946 },
            { x: -1.5172413793, y: -0.908 },
            { x: -1.2413793103, y: -0.846 },
            { x: -0.9655172414, y: -0.747 },
            { x: -0.6896551724, y: -0.598 },
            { x: -0.4137931034, y: -0.392 },
            { x: -0.1379310345, y: -0.137 },
            { x: 0.1379310345, y: 0.137 },
            { x: 0.4137931034, y: 0.392 },
            { x: 0.6896551724, y: 0.598 },
            { x: 0.9655172414, y: 0.747 },
            { x: 1.2413793103, y: 0.846 },
            { x: 1.5172413793, y: 0.908 },
            { x: 1.7931034483, y: 0.946 },
            { x: 2.0689655172, y: 0.969 },
            { x: 2.3448275862, y: 0.982 },
            { x: 2.6206896552, y: 0.989 },
            { x: 2.8965517241, y: 0.994 },
            { x: 3.1724137931, y: 0.996 },
            { x: 3.4482758621, y: 0.998 },
            { x: 3.724137931, y: 0.999 },
            { x: 4, y: 0.999 },
          ],
          s,
          o,
          a,
          h,
        ]
      );
    }
    class Wi extends $t {
      constructor(t) {
        super(), kt(this, t, Gi, Ui, s, { show: 0 });
      }
    }
    function Xi(e) {
      let n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $,
        S,
        T,
        N,
        C,
        q,
        E,
        L,
        _,
        I,
        R,
        O,
        P,
        H,
        D,
        F,
        j,
        V,
        U,
        G,
        W,
        X,
        Y,
        Z,
        K,
        J,
        Q,
        tt,
        et,
        nt,
        rt,
        it,
        at,
        ot =
          Me("\\begin{aligned} f(x) = \\frac{1}{1 + e^{-x}} \\end{aligned}", !1) +
          "",
        st =
          Me(
            "\\begin{aligned} f(x) = \\frac{e^{x} - e^{-x}}{e^{x} + e^{-x}} \\end{aligned}",
            !1,
          ) + "",
        lt =
          Me(
            "f(x) = \\begin{cases}\n         0, \\text{if } x < 0  \\\\\n         x, \\text{if } x \\geq 0\n        \\end{cases}",
            !1,
          ) + "",
        ct =
          Me(
            "f(x) = \\begin{cases}\n         +1, \\text{if } x \\geq 0  \\\\\n         -1, \\text{if } x < 0\n        \\end{cases}",
            !1,
          ) + "";
      return (
        (c = new Pi({})),
        ($ = new Wi({})),
        (R = new _i({})),
        (Z = new ji({})),
        {
          c() {
            (n = M("table")),
              (r = M("tr")),
              (r.innerHTML =
                '<th class="table-head svelte-1iwum2p">Name</th> \n    <th class="table-head svelte-1iwum2p">Plot</th> \n    <th class="table-head svelte-1iwum2p">Function</th> \n    <th class="table-head svelte-1iwum2p">Description</th>'),
              (i = A()),
              (a = M("tr")),
              (o = M("td")),
              (o.textContent = "Sigmoid (logistic)"),
              (s = A()),
              (l = M("td")),
              xt(c.$$.fragment),
              (h = A()),
              (d = M("td")),
              (m = A()),
              (p = M("td")),
              (p.textContent = "Squashes input to (0, 1)."),
              (f = A()),
              (g = M("tr")),
              (y = M("td")),
              (y.textContent = "Hyperbolic Tangent (tanh)"),
              (v = A()),
              (b = M("td")),
              xt($.$$.fragment),
              (S = A()),
              (T = M("td")),
              (N = A()),
              (C = M("td")),
              (C.textContent = "Squashes input to (-1, 1)."),
              (q = A()),
              (E = M("tr")),
              (L = M("td")),
              (L.textContent = "Rectified Linear Unit (ReLu)"),
              (_ = A()),
              (I = M("td")),
              xt(R.$$.fragment),
              (O = A()),
              (P = M("td")),
              (H = A()),
              (D = M("td")),
              (D.textContent = "Only keep positive values."),
              (F = A()),
              (j = M("tr")),
              (V = M("td")),
              (U = z("Step Function (Perceptron) ")),
              (G = M("sup")),
              (W = M("span")),
              (W.textContent = "[ℹ]"),
              (X = A()),
              (Y = M("td")),
              xt(Z.$$.fragment),
              (K = A()),
              (J = M("td")),
              (Q = A()),
              (tt = M("td")),
              (tt.textContent =
                "Returns only -1 or 1 (neuron fires or doesn't fire)."),
              (et = A()),
              (nt = M("tr")),
              B(o, "class", "svelte-1iwum2p"),
              B(l, "class", "svelte-1iwum2p"),
              B(d, "class", "svelte-1iwum2p"),
              B(p, "class", "svelte-1iwum2p"),
              B(y, "class", "svelte-1iwum2p"),
              B(b, "class", "svelte-1iwum2p"),
              B(T, "class", "svelte-1iwum2p"),
              B(C, "class", "svelte-1iwum2p"),
              B(L, "class", "svelte-1iwum2p"),
              B(I, "class", "svelte-1iwum2p"),
              B(P, "class", "svelte-1iwum2p"),
              B(D, "class", "svelte-1iwum2p"),
              B(W, "class", "info-tooltip"),
              B(
                W,
                "title",
                "Because this function is not easily differentiable, it's not used in modern neural networks.",
              ),
              B(V, "class", "svelte-1iwum2p"),
              B(Y, "class", "svelte-1iwum2p"),
              B(J, "class", "svelte-1iwum2p"),
              B(tt, "class", "svelte-1iwum2p"),
              B(n, "class", "table-container svelte-1iwum2p");
          },
          m(t, e) {
            w(t, n, e),
              x(n, r),
              x(n, i),
              x(n, a),
              x(a, o),
              x(a, s),
              x(a, l),
              vt(c, l, null),
              x(a, h),
              x(a, d),
              (d.innerHTML = ot),
              x(a, m),
              x(a, p),
              x(n, f),
              x(n, g),
              x(g, y),
              x(g, v),
              x(g, b),
              vt($, b, null),
              x(g, S),
              x(g, T),
              (T.innerHTML = st),
              x(g, N),
              x(g, C),
              x(n, q),
              x(n, E),
              x(E, L),
              x(E, _),
              x(E, I),
              vt(R, I, null),
              x(E, O),
              x(E, P),
              (P.innerHTML = lt),
              x(E, H),
              x(E, D),
              x(n, F),
              x(n, j),
              x(j, V),
              x(V, U),
              x(V, G),
              x(G, W),
              x(j, X),
              x(j, Y),
              vt(Z, Y, null),
              x(j, K),
              x(j, J),
              (J.innerHTML = ct),
              x(j, Q),
              x(j, tt),
              x(n, et),
              x(n, nt),
              (rt = !0),
              it || ((at = u(Se.call(null, W))), (it = !0));
          },
          p: t,
          i(t) {
            rt ||
              (ut(c.$$.fragment, t),
              ut($.$$.fragment, t),
              ut(R.$$.fragment, t),
              ut(Z.$$.fragment, t),
              (rt = !0));
          },
          o(t) {
            dt(c.$$.fragment, t),
              dt($.$$.fragment, t),
              dt(R.$$.fragment, t),
              dt(Z.$$.fragment, t),
              (rt = !1);
          },
          d(t) {
            t && k(n), bt(c), bt($), bt(R), bt(Z), (it = !1), at();
          },
        }
      );
    }
    class Yi extends $t {
      constructor(t) {
        super(), kt(this, t, null, Xi, s, {});
      }
    }
    function Zi(e) {
      let n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $,
        S,
        T,
        N,
        C,
        q,
        E,
        L,
        _,
        I,
        R,
        O,
        P,
        H,
        D,
        F,
        j,
        V,
        U,
        G,
        W,
        X,
        Y;
      return (
        (_ = new Yi({})),
        {
          c() {
            (n = M("section")),
            (r = M("br")),
            (i = A()),
            (a = M("p")),
            (a.innerHTML =
              '¡Como puedes ver, las redes neuronales no son tan complicadas! Son simplemente\n    grafos computacionales, canalizando entradas a través de capas sucesivas de\n    cómputo para generar salidas. Este proceso de inferencia, donde las entradas\n    se propagan por la red para producir predicciones, se llama <span class="bold">propagación hacia adelante</span> (<i>forward pass</i>). Hablemos más sobre esas capas de cómputo, las funciones\n    de activación.\n    <br/><br/>'),
            (o = A()),
            (s = M("h1")),
            (s.textContent = "Funciones de Activación"), 
            (l = A()),
            (c = M("hr")),
            (h = A()),
            (d = M("p")),
            (m = z(
              "Las funciones de activación son el corazón de las neuronas artificiales en una red\n    neuronal. Estos componentes cruciales introducen no linealidad en el modelo,\n    transformando las entradas ponderadas para generar una salida. ",
            )),
            (p = M("span")),
            (p.textContent =
              "En términos simples, una función de activación decide cuánta señal pasar a\n      la siguiente capa basada en la entrada que recibe."),
            (f = z(
              "\n    Esta idea de encadenar muchas señales ponderadas juntas es lo que permite a las redes neuronales\n    aprender relaciones muy complejas.\n    ",
            )),
            (g = M("sup")),
            (y = M("span")),
            (y.textContent = "[ℹ]"),
            (v = A()),
            (b = M("br")),
            ($ = M("br")),
            (S = z(
              "\n    La naturaleza no lineal de estas funciones es esencial para que las redes neuronales\n    aprendan de datos complejos. Si solo usáramos funciones de activación lineales, sin importar\n    cuántas capas apiláramos, la red se comportaría como un perceptrón de una sola capa\n    porque la composición de funciones lineales sigue siendo una función lineal.\n    Esto limita la complejidad de las tareas que la red puede aprender. Las funciones de activación\n    no lineales, por otro lado, permiten que la red aprenda patrones complejos y\n    resuelva problemas intrincados agregando capas de abstracción.\n    ",
            )),
            (T = M("br")),
            (N = M("br")),
            (C = z(
              "\n    Hay una amplia gama de funciones de activación utilizadas en redes neuronales,\n    cada una con sus beneficios y aplicaciones únicos. Aquí hay cuatro funciones de activación\n    populares:\n    ",
            )),
            (q = M("br")),
            (E = M("br")),
            (L = A()),
            xt(_.$$.fragment),
            (I = A()),
            (R = M("br")),
            (O = M("br")),
            (P = A()),
            (H = M("p")),
            (H.innerHTML =
              '<span class="bold">La función sigmoide</span> (o logística), que va de 0 a 1,\n    es particularmente útil en la capa de salida de modelos de clasificación binaria,\n    representando la probabilidad de un evento binario. Sin embargo, puede sufrir del\n    problema de gradientes que se desvanecen durante la retropropagación.\n    <br/><br/> \n    <span class="bold">La tangente hiperbólica</span> (o \'tanh\'), que va de -1 a 1,\n    proporciona una salida centrada en cero diseñada para facilitar el aprendizaje\n    de la siguiente capa. Sin embargo, al igual que la sigmoide, también enfrenta el\n    problema de gradientes que se desvanecen. <br/><br/> \n    <span class="bold">La función ReLU</span> (<i>Rectified Linear Unit</i>) es una\n    elección popular en capas ocultas debido a su eficiencia. Activa un nodo\n    si su entrada es positiva, de lo contrario, produce cero. Esta simplicidad\n    reduce el costo computacional y mitiga el problema de gradientes que se desvanecen,\n    pero puede llevar a neuronas muertas, es decir, neuronas que nunca se activan.\n    <br/><br/>\n    A pesar de su simplicidad, encadenar estas funciones juntas en una red neuronal\n    puede tener resultados mágicos. Dicho esto, es crucial recordar que no existe\n    una solución única para la elección de funciones de activación. La\n    mejor elección a menudo depende de las características específicas del problema en cuestión,\n    la naturaleza de los datos de entrada y salida, y la arquitectura de la red.\n    Por lo tanto, entender estas funciones y sus implicaciones es clave para construir\n    redes neuronales efectivas y eficientes.'),
            (D = A()),
            (F = M("br")),
            (j = M("br")),
            (V = A()),
            (U = M("br")),
            (G = M("br")),
            B(a, "class", "body-text"),
            B(s, "class", "body-header"),
            B(p, "class", "bold"),
            B(y, "class", "info-tooltip"),
            B(
              y,
              "title",
              "De hecho, el Teorema de Aproximación Universal esencialmente dice que una red neuronal debidamente estructurada y configurada es teóricamente capaz de modelar cualquier relación compleja, pero en la práctica, puede ser desafiante encontrar los parámetros correctos para lograrlo.",
            ),
            B(d, "class", "body-text"),
            B(H, "class", "body-text"),
            B(n, "class", "svelte-1qkvhr9");
          },
          m(t, e) {
            w(t, n, e),
              x(n, r),
              x(n, i),
              x(n, a),
              x(n, o),
              x(n, s),
              x(n, l),
              x(n, c),
              x(n, h),
              x(n, d),
              x(d, m),
              x(d, p),
              x(d, f),
              x(d, g),
              x(g, y),
              x(d, v),
              x(d, b),
              x(d, $),
              x(d, S),
              x(d, T),
              x(d, N),
              x(d, C),
              x(d, q),
              x(d, E),
              x(n, L),
              vt(_, n, null),
              x(n, I),
              x(n, R),
              x(n, O),
              x(n, P),
              x(n, H),
              x(n, D),
              x(n, F),
              x(n, j),
              x(n, V),
              x(n, U),
              x(n, G),
              (W = !0),
              X || ((Y = u(Se.call(null, y))), (X = !0));
          },
          p: t,
          i(t) {
            W || (ut(_.$$.fragment, t), (W = !0));
          },
          o(t) {
            dt(_.$$.fragment, t), (W = !1);
          },
          d(t) {
            t && k(n), bt(_), (X = !1), Y();
          },
        }
      );
    }
    class Ki extends $t {
      constructor(t) {
        super(), kt(this, t, null, Zi, s, {});
      }
    }
    function Ji(e) {
      let n;
      return {
        c() {
          (n = M("section")),
            (n.innerHTML =
              '<br/> \n  <h3 class="body-header">Gracias por leer</h3> \n  <hr/> \n  <p class="body-text">¡Gracias por leer! Esperamos que el artículo haya sido esclarecedor sin importar en qué punto\n    te encuentres en tu camino de aprendizaje en machine learning, y que hayas obtenido\n    una mejor comprensión de las Redes Neuronales.\n    <br/><br/>\n    Para aprender más sobre machine learning, revisa nuestros\n    <a class="on-end svelte-5b0mv7" href="https://aws.amazon.com/machine-learning/mlu/">cursos a tu propio ritmo</a>, nuestros\n    <a class="on-end svelte-5b0mv7" href="https://www.youtube.com/channel/UC12LqyqTQYbXatYS9AA7Nuw">videos en YouTube</a>, y el\n    libro de texto <a class="on-end svelte-5b0mv7" href="https://d2l.ai/">Dive into Deep Learning</a>.\n    Si tienes comentarios o ideas relacionadas con los\n    <a class="on-end svelte-5b0mv7" href="https://mlu-explain.github.io/">artículos de MLU-Explain</a>, no dudes en contactar\n    <a class="on-end svelte-5b0mv7" href="https://twitter.com/jdwlbr">directamente</a>. El código\n    de este artículo está disponible\n    <a class="on-end svelte-5b0mv7" href="https://github.com/aws-samples/aws-mlu-explain">aquí</a>.\n    <br/><br/>\n    ¡Ve y sigue aprendiendo!</p> \n\n  <br/><br/> \n  <br/><br/>');
        },
        m(t, e) {
          w(t, n, e);
        },
        p: t,
        i: t,
        o: t,
        d(t) {
          t && k(n);
        },
      };
    }
    class Qi extends $t {
      constructor(t) {
        super(), kt(this, t, null, Ji, s, {});
      }
    }
    function ta(t, e, n) {
      const r = t.slice();
      return (r[14] = e[n]), (r[16] = n), r;
    }
    function ea(t, e, n) {
      const r = t.slice();
      return (r[17] = e[n]), r;
    }
    function na(t, e, n) {
      const r = t.slice();
      return (r[17] = e[n]), r;
    }
    function ra(t, e, n) {
      const r = t.slice();
      return (r[22] = e[n]), r;
    }
    function ia(t) {
      let e, n, r, i, a, o, s;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "hex-cell svelte-1d7h3ne"),
            B(e, "d", (n = `M${t[22].x},${t[22].y}${t[4].hexagon()}`)),
            B(e, "fill", (r = t[9](t[10](t[5], t[22])))),
            B(e, "stroke", (i = t[9](t[10](t[5], t[22]))));
        },
        m(t, n) {
          w(t, e, n), (s = !0);
        },
        p(t, a) {
          (!s ||
            (16 & a && n !== (n = `M${t[22].x},${t[22].y}${t[4].hexagon()}`))) &&
            B(e, "d", n),
            (!s || (48 & a && r !== (r = t[9](t[10](t[5], t[22]))))) &&
              B(e, "fill", r),
            (!s || (48 & a && i !== (i = t[9](t[10](t[5], t[22]))))) &&
              B(e, "stroke", i);
        },
        i(t) {
          s ||
            (Q(() => {
              o && o.end(1), (a = pt(e, lr, { duration: 500 })), a.start();
            }),
            (s = !0));
        },
        o(t) {
          a && a.invalidate(), (o = ft(e, lr, { duration: 500 })), (s = !1);
        },
        d(t) {
          t && k(e), t && o && o.end();
        },
      };
    }
    function aa(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("g")),
            (n = S("line")),
            B(n, "class", "axis-tick svelte-1d7h3ne"),
            B(n, "x1", "0"),
            B(n, "x2", "0"),
            B(n, "y1", -t[8].bottom),
            B(n, "y2", (r = -t[0] + 2 * t[8].bottom)),
            B(
              e,
              "transform",
              (i = `translate(${t[2](t[17]) + 0} ${t[0] + t[8].bottom})`),
            ),
            B(e, "class", "svelte-1d7h3ne");
        },
        m(t, r) {
          w(t, e, r), x(e, n);
        },
        p(t, a) {
          1 & a && r !== (r = -t[0] + 2 * t[8].bottom) && B(n, "y2", r),
            5 & a &&
              i !== (i = `translate(${t[2](t[17]) + 0} ${t[0] + t[8].bottom})`) &&
              B(e, "transform", i);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function oa(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("g")),
            (n = S("line")),
            B(n, "class", "axis-tick svelte-1d7h3ne"),
            B(n, "x1", 4),
            B(n, "x2", (r = t[1] - t[8].right - t[8].left)),
            B(n, "y1", "0"),
            B(n, "y2", "0"),
            B(
              e,
              "transform",
              (i = `translate(${t[8].left - 5} ${t[3](t[17]) + 0})`),
            ),
            B(e, "class", "svelte-1d7h3ne");
        },
        m(t, r) {
          w(t, e, r), x(e, n);
        },
        p(t, a) {
          2 & a && r !== (r = t[1] - t[8].right - t[8].left) && B(n, "x2", r),
            8 & a &&
              i !== (i = `translate(${t[8].left - 5} ${t[3](t[17]) + 0})`) &&
              B(e, "transform", i);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function sa(t) {
      let e, n, r;
      return {
        c() {
          (e = S("circle")),
            B(e, "class", "dot svelte-1d7h3ne"),
            B(e, "cx", (n = t[2](t[14].x))),
            B(e, "cy", (r = t[3](t[14].y))),
            B(e, "fill", t[9](t[14].class)),
            B(e, "r", "4"),
            R(e, "wrong", t[11](t[6], t[14]));
        },
        m(t, n) {
          w(t, e, n);
        },
        p(t, i) {
          4 & i && n !== (n = t[2](t[14].x)) && B(e, "cx", n),
            8 & i && r !== (r = t[3](t[14].y)) && B(e, "cy", r),
            2240 & i && R(e, "wrong", t[11](t[6], t[14]));
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function la(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u = t[4](t[4].centers()),
        d = [];
      for (let e = 0; e < u.length; e += 1) d[e] = ia(ra(t, u, e));
      const m = (t) =>
        dt(d[t], 1, 1, () => {
          d[t] = null;
        });
      let p = t[2].ticks(),
        f = [];
      for (let e = 0; e < p.length; e += 1) f[e] = aa(na(t, p, e));
      let g = t[3].ticks(),
        y = [];
      for (let e = 0; e < g.length; e += 1) y[e] = oa(ea(t, g, e));
      let v = t[7],
        b = [];
      for (let e = 0; e < v.length; e += 1) b[e] = sa(ta(t, v, e));
      return {
        c() {
          (e = S("clipPath")), (n = S("rect")), (r = A()), (i = S("g"));
          for (let t = 0; t < d.length; t += 1) d[t].c();
          a = T();
          for (let t = 0; t < f.length; t += 1) f[t].c();
          o = T();
          for (let t = 0; t < y.length; t += 1) y[t].c();
          s = T();
          for (let t = 0; t < b.length; t += 1) b[t].c();
          (l = S("rect")),
            B(n, "id", "bg-rect"),
            B(n, "width", t[1]),
            B(n, "height", t[0]),
            B(n, "class", "svelte-1d7h3ne"),
            B(e, "id", "clip-bp"),
            B(e, "class", "svelte-1d7h3ne"),
            B(l, "id", "bg2-rect"),
            B(l, "width", t[1]),
            B(l, "height", t[0]),
            B(l, "class", "svelte-1d7h3ne"),
            B(i, "class", "nn-g svelte-1d7h3ne"),
            B(i, "clip-path", "url(#clip-bp)"),
            B(i, "transform", (c = `translate(0 ${-t[0] / 2})`));
        },
        m(t, c) {
          w(t, e, c), x(e, n), w(t, r, c), w(t, i, c);
          for (let t = 0; t < d.length; t += 1) d[t].m(i, null);
          x(i, a);
          for (let t = 0; t < f.length; t += 1) f[t].m(i, null);
          x(i, o);
          for (let t = 0; t < y.length; t += 1) y[t].m(i, null);
          x(i, s);
          for (let t = 0; t < b.length; t += 1) b[t].m(i, null);
          x(i, l), (h = !0);
        },
        p(t, [e]) {
          if (
            ((!h || 2 & e) && B(n, "width", t[1]),
            (!h || 1 & e) && B(n, "height", t[0]),
            1584 & e)
          ) {
            let n;
            for (u = t[4](t[4].centers()), n = 0; n < u.length; n += 1) {
              const r = ra(t, u, n);
              d[n]
                ? (d[n].p(r, e), ut(d[n], 1))
                : ((d[n] = ia(r)), d[n].c(), ut(d[n], 1), d[n].m(i, a));
            }
            for (ct(), n = u.length; n < d.length; n += 1) m(n);
            ht();
          }
          if (261 & e) {
            let n;
            for (p = t[2].ticks(), n = 0; n < p.length; n += 1) {
              const r = na(t, p, n);
              f[n] ? f[n].p(r, e) : ((f[n] = aa(r)), f[n].c(), f[n].m(i, o));
            }
            for (; n < f.length; n += 1) f[n].d(1);
            f.length = p.length;
          }
          if (266 & e) {
            let n;
            for (g = t[3].ticks(), n = 0; n < g.length; n += 1) {
              const r = ea(t, g, n);
              y[n] ? y[n].p(r, e) : ((y[n] = oa(r)), y[n].c(), y[n].m(i, s));
            }
            for (; n < y.length; n += 1) y[n].d(1);
            y.length = g.length;
          }
          if (2764 & e) {
            let n;
            for (v = t[7], n = 0; n < v.length; n += 1) {
              const r = ta(t, v, n);
              b[n] ? b[n].p(r, e) : ((b[n] = sa(r)), b[n].c(), b[n].m(i, l));
            }
            for (; n < b.length; n += 1) b[n].d(1);
            b.length = v.length;
          }
          (!h || 2 & e) && B(l, "width", t[1]),
            (!h || 1 & e) && B(l, "height", t[0]),
            (!h || (1 & e && c !== (c = `translate(0 ${-t[0] / 2})`))) &&
              B(i, "transform", c);
        },
        i(t) {
          if (!h) {
            for (let t = 0; t < u.length; t += 1) ut(d[t]);
            h = !0;
          }
        },
        o(t) {
          d = d.filter(Boolean);
          for (let t = 0; t < d.length; t += 1) dt(d[t]);
          h = !1;
        },
        d(t) {
          t && k(e), t && k(r), t && k(i), $(d, t), $(f, t), $(y, t), $(b, t);
        },
      };
    }
    function ca(t, e, n) {
      let r, i, a, o, s, l, h;
      c(t, Kt, (t) => n(12, (o = t))),
        c(t, Jt, (t) => n(13, (s = t))),
        c(t, Qt, (t) => n(5, (l = t))),
        c(t, te, (t) => n(6, (h = t)));
      let { height: u = 200 } = e,
        { width: d = 200 } = e,
        m = { top: 0, left: 0, bottom: 0, right: 20 };
      const p = He()
        .domain([-1, 0, 1])
        .range(["#f46ebb", "var(--darksquidink)", "#2074d5"]);
      return (
        (t.$$set = (t) => {
          "height" in t && n(0, (u = t.height)),
            "width" in t && n(1, (d = t.width));
        }),
        (t.$$.update = () => {
          2 & t.$$.dirty &&
            n(
              2,
              (r = ar()
                .domain([0, 1])
                .range([m.left, d - m.right])),
            ),
            1 & t.$$.dirty &&
              n(
                3,
                (i = ar()
                  .domain([0, 1])
                  .range([u - m.bottom, m.top])),
              ),
            3 & t.$$.dirty &&
              n(
                4,
                (a = mr()
                  .radius(5)
                  .extent([
                    [0, 0],
                    [d, u],
                  ])),
              );
        }),
        [
          u,
          d,
          r,
          i,
          a,
          l,
          h,
          [
            { x: 0.05, y: 0.14, class: 1 },
            { x: 0.86, y: 0.57, class: -1 },
            { x: 0.41, y: 0.39, class: 1 },
            { x: 1, y: 0.69, class: -1 },
            { x: 0.27, y: 0.28, class: 1 },
            { x: 0.57, y: 0.92, class: -1 },
            { x: 0.18, y: 0.4, class: 1 },
            { x: 0.09, y: 0.3, class: 1 },
            { x: 0.52, y: 0.49, class: -1 },
            { x: 0.33, y: 0.35, class: 1 },
            { x: 0.88, y: 0.65, class: -1 },
            { x: 0.16, y: 0.16, class: 1 },
            { x: 0.94, y: 0.53, class: -1 },
            { x: 0.34, y: 0.3, class: 1 },
            { x: 0.71, y: 0.92, class: -1 },
            { x: 0.15, y: 0.19, class: 1 },
            { x: 0.59, y: 0.71, class: -1 },
            { x: 0.11, y: 0.26, class: 1 },
            { x: 0.82, y: 0.83, class: -1 },
            { x: 0.14, y: 0.11, class: 1 },
            { x: 0.2, y: 0.6, class: 1 },
            { x: 0.4, y: 0.12, class: 1 },
            { x: 0.7, y: 0.37, class: -1 },
            { x: 0.75, y: 0.32, class: -1 },
            { x: 0.85, y: 0.12, class: -1 },
          ],
          m,
          p,
          (t, e) =>
            0 === t ? 0 : i.invert(e.y) > s + o * r.invert(e.x) ? -1 : 1,
          (t, e) =>
            0 !== t && (e.y > s + o * e.x ? -1 !== e.class : 1 !== e.class),
        ]
      );
    }
    class ha extends $t {
      constructor(t) {
        super(), kt(this, t, ca, la, s, { height: 0, width: 1 });
      }
    }
    function ua(t) {
      let e, n, r;
      return (
        (n = new ha({ props: { width: t[1], height: t[0] } })),
        {
          c() {
            (e = S("g")),
              xt(n.$$.fragment),
              B(e, "tranform", "translate(-100, -100)");
          },
          m(t, i) {
            w(t, e, i), vt(n, e, null), (r = !0);
          },
          p(t, [e]) {
            const r = {};
            2 & e && (r.width = t[1]), 1 & e && (r.height = t[0]), n.$set(r);
          },
          i(t) {
            r || (ut(n.$$.fragment, t), (r = !0));
          },
          o(t) {
            dt(n.$$.fragment, t), (r = !1);
          },
          d(t) {
            t && k(e), bt(n);
          },
        }
      );
    }
    function da(t, e, n) {
      let r, i, a, o, s, l, h, u, d, m, p;
      c(t, Lt, (t) => n(9, (u = t))),
        c(t, Ot, (t) => n(10, (d = t))),
        c(t, _t, (t) => n(11, (m = t))),
        c(t, It, (t) => n(12, (p = t)));
      let { height: f } = e,
        { width: g } = e;
      return (
        (t.$$set = (t) => {
          "height" in t && n(2, (f = t.height)),
            "width" in t && n(3, (g = t.width));
        }),
        (t.$$.update = () => {
          4096 & t.$$.dirty && n(7, (r = Ie(p) + 1)),
            2048 & t.$$.dirty && n(6, (i = m ? 100 : 160)),
            1544 & t.$$.dirty &&
              n(
                8,
                (a = ar()
                  .domain([-1, d])
                  .range([u.left, g - u.right])),
              ),
            644 & t.$$.dirty &&
              n(
                5,
                (o = ar()
                  .domain([-1, r])
                  .range([f - u.bottom, u.top])),
              ),
            320 & t.$$.dirty && n(1, (s = i || a(1) - a(0))),
            128 & t.$$.dirty && n(4, (l = Gr(3, r))),
            112 & t.$$.dirty && n(0, (h = i));
        }),
        [h, s, f, g, l, o, i, r, a, u, d, m, p]
      );
    }
    class ma extends $t {
      constructor(t) {
        super(), kt(this, t, da, ua, s, { height: 2, width: 3 });
      }
    }
    function pa(t, e, n) {
      const r = t.slice();
      return (r[19] = e[n]), r;
    }
    function fa(t, e, n) {
      const r = t.slice();
      return (r[22] = e[n]), (r[24] = n), r;
    }
    function ga(t, e, n) {
      const r = t.slice();
      r[19] = e[n];
      const i = r[24] < r[4] - 1 && r[24] > 0;
      return (r[25] = i), r;
    }
    function ya(t, e, n) {
      const r = t.slice();
      return (r[24] = e[n]), (r[29] = n), r;
    }
    function xa(t, e, n) {
      const r = t.slice();
      return (r[19] = e[n]), (r[31] = n), r;
    }
    function va(t, e, n) {
      const r = t.slice();
      (r[32] = e[n]), (r[34] = n);
      const i = (function (t, e, n, r) {
        let i = 0;
        for (let e = 0; e < t - 1; e++) i += r[e] * r[e + 1];
        return (i += e * r[t] + n), i;
      })(r[29], r[34], r[31], r[5]);
      return (r[22] = i), r;
    }
    function ba(t) {
      let e,
        n,
        r,
        i,
        a = Array(t[4]).fill(null),
        o = [];
      for (let e = 0; e < a.length; e += 1) o[e] = Ma(ya(t, a, e));
      const s = (t) =>
        dt(o[t], 1, 1, () => {
          o[t] = null;
        });
      let l = Array(t[4]).fill(null),
        c = [];
      for (let e = 0; e < l.length; e += 1) c[e] = Ta(fa(t, l, e));
      const h = (t) =>
        dt(c[t], 1, 1, () => {
          c[t] = null;
        });
      let u = Gr(t[5][t[4] - 1], t[2]),
        d = [];
      for (let e = 0; e < u.length; e += 1) d[e] = Na(pa(t, u, e));
      const m = (t) =>
        dt(d[t], 1, 1, () => {
          d[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < o.length; t += 1) o[t].c();
          e = T();
          for (let t = 0; t < c.length; t += 1) c[t].c();
          n = T();
          for (let t = 0; t < d.length; t += 1) d[t].c();
          (r = S("rect")),
            B(r, "fill", "var(--darksquidink)"),
            B(r, "x", "0"),
            B(r, "y", "0"),
            B(r, "width", "15"),
            B(r, "height", "15");
        },
        m(t, a) {
          for (let e = 0; e < o.length; e += 1) o[e].m(t, a);
          w(t, e, a);
          for (let e = 0; e < c.length; e += 1) c[e].m(t, a);
          w(t, n, a);
          for (let e = 0; e < d.length; e += 1) d[e].m(t, a);
          w(t, r, a), (i = !0);
        },
        p(t, i) {
          if (24820 & i[0]) {
            let n;
            for (a = Array(t[4]).fill(null), n = 0; n < a.length; n += 1) {
              const r = ya(t, a, n);
              o[n]
                ? (o[n].p(r, i), ut(o[n], 1))
                : ((o[n] = Ma(r)),
                  o[n].c(),
                  ut(o[n], 1),
                  o[n].m(e.parentNode, e));
            }
            for (ct(), n = a.length; n < o.length; n += 1) s(n);
            ht();
          }
          if (34804 & i[0]) {
            let e;
            for (l = Array(t[4]).fill(null), e = 0; e < l.length; e += 1) {
              const r = fa(t, l, e);
              c[e]
                ? (c[e].p(r, i), ut(c[e], 1))
                : ((c[e] = Ta(r)),
                  c[e].c(),
                  ut(c[e], 1),
                  c[e].m(n.parentNode, n));
            }
            for (ct(), e = l.length; e < c.length; e += 1) h(e);
            ht();
          }
          if (1271 & i[0]) {
            let e;
            for (u = Gr(t[5][t[4] - 1], t[2]), e = 0; e < u.length; e += 1) {
              const n = pa(t, u, e);
              d[e]
                ? (d[e].p(n, i), ut(d[e], 1))
                : ((d[e] = Na(n)),
                  d[e].c(),
                  ut(d[e], 1),
                  d[e].m(r.parentNode, r));
            }
            for (ct(), e = u.length; e < d.length; e += 1) m(e);
            ht();
          }
        },
        i(t) {
          if (!i) {
            for (let t = 0; t < a.length; t += 1) ut(o[t]);
            for (let t = 0; t < l.length; t += 1) ut(c[t]);
            for (let t = 0; t < u.length; t += 1) ut(d[t]);
            i = !0;
          }
        },
        o(t) {
          o = o.filter(Boolean);
          for (let t = 0; t < o.length; t += 1) dt(o[t]);
          c = c.filter(Boolean);
          for (let t = 0; t < c.length; t += 1) dt(c[t]);
          d = d.filter(Boolean);
          for (let t = 0; t < d.length; t += 1) dt(d[t]);
          i = !1;
        },
        d(t) {
          $(o, t), t && k(e), $(c, t), t && k(n), $(d, t), t && k(r);
        },
      };
    }
    function wa(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c = t[22] < 6 ? "w" : "";
      return {
        c() {
          (e = S("text")),
            (n = S("textPath")),
            (r = z(c)),
            B(n, "href", (i = `#nn-edgebp-${t[29]}-${t[19]}-${t[32]}-${t[13]}`)),
            B(n, "startOffset", "50%"),
            B(n, "text-anchor", "middle"),
            B(n, "fill", "#232F3E"),
            B(n, "dominant-baseline", "middle"),
            B(e, "dx", (a = 0 * t[7](1))),
            B(e, "dy", "0"),
            B(e, "class", "weight-text svelte-plczrj");
        },
        m(t, i) {
          w(t, e, i), x(e, n), x(n, r), (l = !0);
        },
        p(t, o) {
          (!l || 32 & o[0]) && c !== (c = t[22] < 6 ? "w" : "") && C(r, c),
            (!l ||
              (8228 & o[0] &&
                i !== (i = `#nn-edgebp-${t[29]}-${t[19]}-${t[32]}-${t[13]}`))) &&
              B(n, "href", i),
            (!l || (128 & o[0] && a !== (a = 0 * t[7](1)))) && B(e, "dx", a);
        },
        i(t) {
          l ||
            (t &&
              Q(() => {
                s && s.end(1),
                  (o = pt(e, sr, { x: 0, duration: 300 })),
                  o.start();
              }),
            (l = !0));
        },
        o(t) {
          o && o.invalidate(), t && (s = ft(e, or, { duration: 300 })), (l = !1);
        },
        d(t) {
          t && k(e), t && s && s.end();
        },
      };
    }
    function ka(e) {
      let n,
        r,
        i,
        a,
        o,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $ = e[13],
        M = wa(e);
      return {
        c() {
          (n = S("path")),
            M.c(),
            (c = S("g")),
            (h = S("text")),
            (u = z("⬤\n\n                  ")),
            (d = S("animateMotion")),
            (p = S("g")),
            (f = S("text")),
            (g = z("⬤\n\n                  ")),
            (y = S("animateMotion")),
            B(
              n,
              "d",
              (r = `\n                    M ${e[7](e[29] - 1)} ${e[6](e[32])}\n                    L ${e[7](e[29])} ${e[6](e[19])}\n                  `),
            ),
            B(n, "class", "nn-edgebp svelte-plczrj"),
            B(n, "id", (i = `nn-edgebp-${e[29]}-${e[19]}-${e[32]}-${e[13]}`)),
            B(n, "stroke-width", (a = e[14][e[22]])),
            B(d, "id", `animatePathForwardBp${e[29]}`),
            B(
              d,
              "begin",
              1 === e[29] ? "0" : `animatePathForwardBp${e[29] - 1}.end`,
            ),
            B(d, "dur", ".5s"),
            B(d, "restart", "whenNotActive"),
            B(
              d,
              "path",
              (m = `\n                      M ${e[7](e[29] - 1)} ${e[6](e[32])}\n                      L ${e[7](e[29])} ${e[6](e[19])}\n                    `),
            ),
            B(d, "class", "svelte-plczrj"),
            B(h, "class", "moving-text-bp svelte-plczrj"),
            B(h, "opacity", "1"),
            B(h, "alignment-baseline", "middle"),
            B(y, "id", `animatePathBackward${e[29]}`),
            B(y, "begin", `animatePathBackward${e[29] + 1}.end`),
            B(y, "dur", ".5s"),
            B(y, "restart", "whenNotActive"),
            B(
              y,
              "path",
              (v = `\n                         M ${e[7](e[29])} ${e[6](e[19])}\n                         L ${e[7](e[29] - 1)} ${e[6](e[32])}\n                       `),
            ),
            B(y, "class", "svelte-plczrj"),
            B(f, "class", "moving-text-bp svelte-plczrj"),
            B(f, "opacity", "1"),
            B(f, "alignment-baseline", "middle");
        },
        m(t, e) {
          w(t, n, e),
            M.m(t, e),
            w(t, c, e),
            x(c, h),
            x(h, u),
            x(h, d),
            w(t, p, e),
            x(p, f),
            x(f, g),
            x(f, y),
            (b = !0);
        },
        p(e, o) {
          (!b ||
            (228 & o[0] &&
              r !==
                (r = `\n                    M ${e[7](e[29] - 1)} ${e[6](e[32])}\n                    L ${e[7](e[29])} ${e[6](e[19])}\n                  `))) &&
            B(n, "d", r),
            (!b ||
              (8228 & o[0] &&
                i !== (i = `nn-edgebp-${e[29]}-${e[19]}-${e[32]}-${e[13]}`))) &&
              B(n, "id", i),
            (!b || (16416 & o[0] && a !== (a = e[14][e[22]]))) &&
              B(n, "stroke-width", a),
            8192 & o[0] && s($, ($ = e[13]))
              ? (ct(),
                dt(M, 1, 1, t),
                ht(),
                (M = wa(e)),
                M.c(),
                ut(M, 1),
                M.m(c.parentNode, c))
              : M.p(e, o),
            (!b ||
              (228 & o[0] &&
                m !==
                  (m = `\n                      M ${e[7](e[29] - 1)} ${e[6](e[32])}\n                      L ${e[7](e[29])} ${e[6](e[19])}\n                    `))) &&
              B(d, "path", m),
            (!b ||
              (228 & o[0] &&
                v !==
                  (v = `\n                         M ${e[7](e[29])} ${e[6](e[19])}\n                         L ${e[7](e[29] - 1)} ${e[6](e[32])}\n                       `))) &&
              B(y, "path", v);
        },
        i(t) {
          b ||
            (t &&
              Q(() => {
                l && l.end(1), (o = pt(n, lr, { duration: 500 })), o.start();
              }),
            ut(M),
            (b = !0));
        },
        o(t) {
          o && o.invalidate(),
            t && (l = ft(n, lr, { duration: 400 })),
            dt(M),
            (b = !1);
        },
        d(t) {
          t && k(n), t && l && l.end(), M.d(t), t && k(c), t && k(p);
        },
      };
    }
    function $a(t) {
      let e,
        n,
        r =
          t[29] > 0 &&
          (function (t) {
            let e,
              n,
              r = Gr(t[5][t[29] - 1], t[2]),
              i = [];
            for (let e = 0; e < r.length; e += 1) i[e] = ka(va(t, r, e));
            const a = (t) =>
              dt(i[t], 1, 1, () => {
                i[t] = null;
              });
            return {
              c() {
                for (let t = 0; t < i.length; t += 1) i[t].c();
                e = T();
              },
              m(t, r) {
                for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
                w(t, e, r), (n = !0);
              },
              p(t, n) {
                if (24804 & n[0]) {
                  let o;
                  for (
                    r = Gr(t[5][t[29] - 1], t[2]), o = 0;
                    o < r.length;
                    o += 1
                  ) {
                    const a = va(t, r, o);
                    i[o]
                      ? (i[o].p(a, n), ut(i[o], 1))
                      : ((i[o] = ka(a)),
                        i[o].c(),
                        ut(i[o], 1),
                        i[o].m(e.parentNode, e));
                  }
                  for (ct(), o = r.length; o < i.length; o += 1) a(o);
                  ht();
                }
              },
              i(t) {
                if (!n) {
                  for (let t = 0; t < r.length; t += 1) ut(i[t]);
                  n = !0;
                }
              },
              o(t) {
                i = i.filter(Boolean);
                for (let t = 0; t < i.length; t += 1) dt(i[t]);
                n = !1;
              },
              d(t) {
                $(i, t), t && k(e);
              },
            };
          })(t);
      return {
        c() {
          r && r.c(), (e = T());
        },
        m(t, i) {
          r && r.m(t, i), w(t, e, i), (n = !0);
        },
        p(t, e) {
          t[29] > 0 && r.p(t, e);
        },
        i(t) {
          n || (ut(r), (n = !0));
        },
        o(t) {
          dt(r), (n = !1);
        },
        d(t) {
          r && r.d(t), t && k(e);
        },
      };
    }
    function Ma(t) {
      let e,
        n,
        r = Gr(t[5][t[29]], t[2]),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = $a(xa(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (24804 & n[0]) {
            let o;
            for (r = Gr(t[5][t[29]], t[2]), o = 0; o < r.length; o += 1) {
              const a = xa(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = $a(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function Sa(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p = t[15][t[24]] + "",
        f = t[25] && za(t),
        g =
          0 === t[24] &&
          (function (t) {
            let e,
              n,
              r = Math.abs(t[19] - 2.5) + "";
            return {
              c() {
                (e = S("tspan")),
                  (n = z(r)),
                  B(e, "class", "subscript svelte-plczrj"),
                  B(e, "dy", "4");
              },
              m(t, r) {
                w(t, e, r), x(e, n);
              },
              p(t, e) {
                36 & e[0] && r !== (r = Math.abs(t[19] - 2.5) + "") && C(n, r);
              },
              d(t) {
                t && k(e);
              },
            };
          })(t);
      return {
        c() {
          (e = S("rect")),
            f && f.c(),
            (s = S("text")),
            (l = z(p)),
            g && g.c(),
            B(
              e,
              "class",
              (n =
                "nn-node " +
                (0 == t[24] ? "input" : t[24] == t[4] - 1 ? "output" : "hidden") +
                " svelte-plczrj"),
            ),
            B(e, "width", (r = t[15][t[24]].length < 6 ? t[10] : t[10] + t[8])),
            B(e, "height", (i = t[25] ? t[9] * Ca : t[9])),
            B(s, "class", "nn-text svelte-plczrj"),
            B(s, "text-anchor", "middle"),
            B(s, "alignment-baseline", "middle"),
            B(
              s,
              "dx",
              (c = t[15][t[24]].length < 6 ? t[10] / 2 : (t[10] + t[8]) / 2),
            ),
            B(s, "dy", (h = t[25] ? t[9] * Ca - 8 : t[9] / 2));
        },
        m(t, n) {
          w(t, e, n),
            f && f.m(t, n),
            w(t, s, n),
            x(s, l),
            g && g.m(s, null),
            (m = !0);
        },
        p(t, a) {
          (!m ||
            (16 & a[0] &&
              n !==
                (n =
                  "nn-node " +
                  (0 == t[24]
                    ? "input"
                    : t[24] == t[4] - 1
                      ? "output"
                      : "hidden") +
                  " svelte-plczrj"))) &&
            B(e, "class", n),
            (!m ||
              (34048 & a[0] &&
                r !== (r = t[15][t[24]].length < 6 ? t[10] : t[10] + t[8]))) &&
              B(e, "width", r),
            (!m || (528 & a[0] && i !== (i = t[25] ? t[9] * Ca : t[9]))) &&
              B(e, "height", i),
            t[25]
              ? f
                ? (f.p(t, a), 16 & a[0] && ut(f, 1))
                : ((f = za(t)), f.c(), ut(f, 1), f.m(s.parentNode, s))
              : f &&
                (ct(),
                dt(f, 1, 1, () => {
                  f = null;
                }),
                ht()),
            (!m || 32768 & a[0]) && p !== (p = t[15][t[24]] + "") && C(l, p),
            0 === t[24] && g.p(t, a),
            (!m ||
              (34048 & a[0] &&
                c !==
                  (c =
                    t[15][t[24]].length < 6 ? t[10] / 2 : (t[10] + t[8]) / 2))) &&
              B(s, "dx", c),
            (!m ||
              (528 & a[0] && h !== (h = t[25] ? t[9] * Ca - 8 : t[9] / 2))) &&
              B(s, "dy", h);
        },
        i(t) {
          m ||
            (t &&
              Q(() => {
                o && o.end(1),
                  (a = pt(e, sr, { x: -50, duration: 500 })),
                  a.start();
              }),
            ut(f),
            t &&
              Q(() => {
                d && d.end(1),
                  (u = pt(s, sr, { x: -50, duration: 500 })),
                  u.start();
              }),
            (m = !0));
        },
        o(t) {
          a && a.invalidate(),
            t && (o = ft(e, or, { duration: 300 })),
            dt(f),
            u && u.invalidate(),
            t && (d = ft(s, or, { duration: 300 })),
            (m = !1);
        },
        d(t) {
          t && k(e),
            t && o && o.end(),
            f && f.d(t),
            t && k(s),
            g && g.d(),
            t && d && d.end();
        },
      };
    }
    function za(t) {
      let e, n;
      return (
        (e = new Qr({ props: { data: t[15][t[24]] } })),
        {
          c() {
            xt(e.$$.fragment);
          },
          m(t, r) {
            vt(e, t, r), (n = !0);
          },
          p(t, n) {
            const r = {};
            32768 & n[0] && (r.data = t[15][t[24]]), e.$set(r);
          },
          i(t) {
            n || (ut(e.$$.fragment, t), (n = !0));
          },
          o(t) {
            dt(e.$$.fragment, t), (n = !1);
          },
          d(t) {
            bt(e, t);
          },
        }
      );
    }
    function Aa(t) {
      let e,
        n,
        r,
        i = t[24] !== t[4] - 1 && Sa(t);
      return {
        c() {
          (e = S("g")),
            i && i.c(),
            B(e, "class", "nn-g svelte-plczrj"),
            B(
              e,
              "transform",
              (n = t[25]
                ? `translate(${t[7](t[24]) - t[10] / 2} ${t[6](t[19]) - (t[9] * Ca) / 2})`
                : `translate(${t[7](t[24]) - t[10] / 2} ${t[6](t[19]) - (1 * t[9]) / 2})`),
            );
        },
        m(t, n) {
          w(t, e, n), i && i.m(e, null), (r = !0);
        },
        p(t, a) {
          t[24] !== t[4] - 1
            ? i
              ? (i.p(t, a), 16 & a[0] && ut(i, 1))
              : ((i = Sa(t)), i.c(), ut(i, 1), i.m(e, null))
            : i &&
              (ct(),
              dt(i, 1, 1, () => {
                i = null;
              }),
              ht()),
            (!r ||
              (1780 & a[0] &&
                n !==
                  (n = t[25]
                    ? `translate(${t[7](t[24]) - t[10] / 2} ${t[6](t[19]) - (t[9] * Ca) / 2})`
                    : `translate(${t[7](t[24]) - t[10] / 2} ${t[6](t[19]) - (1 * t[9]) / 2})`))) &&
              B(e, "transform", n);
        },
        i(t) {
          r || (ut(i), (r = !0));
        },
        o(t) {
          dt(i), (r = !1);
        },
        d(t) {
          t && k(e), i && i.d();
        },
      };
    }
    function Ta(t) {
      let e,
        n,
        r = Gr(t[5][t[24]], t[2]),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = Aa(ga(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (34804 & n[0]) {
            let o;
            for (r = Gr(t[5][t[24]], t[2]), o = 0; o < r.length; o += 1) {
              const a = ga(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = Aa(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function Na(t) {
      let e, n, r, i;
      return (
        (n = new ma({ props: { width: t[1], height: t[0] } })),
        {
          c() {
            (e = S("g")),
              xt(n.$$.fragment),
              B(e, "class", "nn-g svelte-plczrj"),
              B(
                e,
                "transform",
                (r = `translate(${t[7](t[4] - 1) - t[10] / 2} ${t[6](t[19])})`),
              );
          },
          m(t, r) {
            w(t, e, r), vt(n, e, null), (i = !0);
          },
          p(t, a) {
            const o = {};
            2 & a[0] && (o.width = t[1]),
              1 & a[0] && (o.height = t[0]),
              n.$set(o),
              (!i ||
                (1268 & a[0] &&
                  r !==
                    (r = `translate(${t[7](t[4] - 1) - t[10] / 2} ${t[6](t[19])})`))) &&
                B(e, "transform", r);
          },
          i(t) {
            i || (ut(n.$$.fragment, t), (i = !0));
          },
          o(t) {
            dt(n.$$.fragment, t), (i = !1);
          },
          d(t) {
            t && k(e), bt(n);
          },
        }
      );
    }
    function Ba(t) {
      let e,
        n,
        r,
        i,
        a,
        o = t[11] && ba(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            o && o.c(),
            B(n, "width", t[1]),
            B(n, "height", (r = t[0] + t[3].top + t[3].bottom)),
            B(n, "class", "svelte-plczrj"),
            B(e, "id", "networkBp-chart"),
            B(e, "class", "svelte-plczrj"),
            Q(() => t[18].call(e));
        },
        m(r, s) {
          w(r, e, s),
            x(e, n),
            o && o.m(n, null),
            t[17](e),
            (i = I(e, t[18].bind(e))),
            (a = !0);
        },
        p(t, e) {
          t[11]
            ? o
              ? (o.p(t, e), 2048 & e[0] && ut(o, 1))
              : ((o = ba(t)), o.c(), ut(o, 1), o.m(n, null))
            : o &&
              (ct(),
              dt(o, 1, 1, () => {
                o = null;
              }),
              ht()),
            (!a || 2 & e[0]) && B(n, "width", t[1]),
            (!a || (9 & e[0] && r !== (r = t[0] + t[3].top + t[3].bottom))) &&
              B(n, "height", r);
        },
        i(t) {
          a || (ut(o), (a = !0));
        },
        o(t) {
          dt(o), (a = !1);
        },
        d(n) {
          n && k(e), o && o.d(), t[17](null), i();
        },
      };
    }
    const Ca = 1.4;
    function qa(t, e, n) {
      let r, i, a, o, s, l, h, u, d, m, p, f, g, y, x;
      c(t, Lt, (t) => n(3, (u = t))),
        c(t, Xt, (t) => n(4, (d = t))),
        c(t, _t, (t) => n(16, (m = t))),
        c(t, Gt, (t) => n(5, (p = t))),
        c(t, Yt, (t) => n(12, (f = t))),
        c(t, Vt, (t) => n(13, (g = t))),
        c(t, ee, (t) => n(14, (y = t))),
        c(t, Ut, (t) => n(15, (x = t))),
        G(() => {
          n(11, (i = !0));
        });
      let v = 100,
        b = 100;
      return (
        (t.$$.update = () => {
          32 & t.$$.dirty[0] && n(2, (r = Ie(p) + 1)),
            65536 & t.$$.dirty[0] && n(10, (a = m ? 42 : 72)),
            65536 & t.$$.dirty[0] && n(9, (o = m ? 26 : 36)),
            65536 & t.$$.dirty[0] && n(8, (s = m ? 12 : 0)),
            26 & t.$$.dirty[0] &&
              n(
                7,
                (l = ar()
                  .domain([-1, d])
                  .range([u.left, b - u.right])),
              ),
            13 & t.$$.dirty[0] &&
              n(
                6,
                (h = ar()
                  .domain([-1, r])
                  .range([v - u.bottom, u.top])),
              );
        }),
        n(11, (i = !1)),
        [
          v,
          b,
          r,
          u,
          d,
          p,
          h,
          l,
          s,
          o,
          a,
          i,
          f,
          g,
          y,
          x,
          m,
          function (t) {
            X[t ? "unshift" : "push"](() => {
              (f = t), Yt.set(f);
            });
          },
          function () {
            (b = this.offsetWidth), (v = this.offsetHeight), n(1, b), n(0, v);
          },
        ]
      );
    }
    class Ea extends $t {
      constructor(t) {
        super(), kt(this, t, qa, Ba, s, {}, null, [-1, -1]);
      }
    }
    function La(e) {
      let n,
        r,
        i,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $,
        S,
        z,
        T,
        C,
        q,
        E,
        L,
        _,
        I,
        R,
        O,
        P,
        H,
        D,
        F,
        j,
        V,
        U,
        G,
        W,
        X,
        Y,
        Z,
        K,
        J,
        Q,
        tt,
        et,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        lt,
        ct,
        ht,
        mt,
        pt,
        ft,
        gt,
        yt,
        wt,
        kt,
        $t,
        Mt,
        St,
        zt,
        At,
        Tt,
        Nt,
        Bt,
        Ct,
        qt,
        Et,
        Lt,
        _t,
        It,
        Rt,
        Ot,
        Pt,
        Ht,
        Dt,
        Ft,
        jt,
        Vt,
        Ut,
        Gt,
        Wt,
        Xt,
        Yt,
        Zt,
        Kt,
        Jt,
        Qt,
        te,
        ee,
        ne,
        re,
        ie,
        ae,
        oe,
        se,
        le,
        ce;
      return (
        (b = new Ea({})),
        {
          c() {
            (n = M("div")),
            (r = M("h1")),
            (r.textContent = "Retropopagación: Cómo aprenden las redes neuronales"), 
            (i = A()),
            (o = M("hr")),
            (s = A()),
            (l = M("p")),
            (l.innerHTML =
              'Ahora que hemos comprendido el concepto de las funciones de activación y su rol en\n    las redes neuronales, es momento de entender cómo estas redes aprenden. La magia\n    detrás de este proceso de aprendizaje es una técnica conocida como retropropagación o <i>backpropagation</i>.\n    <br/><br/>\n    La retropropagación es un algoritmo usado durante el entrenamiento de redes neuronales.\n    <span class="bold">El objetivo de la retropropagación es actualizar los pesos para que la Red\n      Neuronal haga mejores predicciones.</span>\n    Específicamente, la retropropagación calculará el gradiente de la función de pérdida\n    con respecto a los pesos de la red, actualizando los pesos capa por capa\n    para minimizar el error de predicción de la red.\n    <br/><br/>\n    Para hacer el proceso lo más claro posible, visualicémoslo paso a paso.\n    <br/><br/>'),
            (c = A()),
            (h = M("br")),
            (u = A()),
            (d = M("br")),
            (m = A()),
            (p = M("div")),
            (f = M("section")),
            (g = M("div")),
            (y = M("div")),
            (v = M("div")),
            xt(b.$$.fragment),
            ($ = A()),
            (S = M("div")),
            (z = M("div")),
            (T = M("div")),
            (C = M("h2")),
            (C.textContent = "Propagación Hacia Adelante"),
            (q = A()),
            (E = M("hr")),
            (L = A()),
            (_ = M("br")),
            (I = A()),
            (R = M("p")),
            (R.innerHTML =
              "Durante la propagación hacia adelante (<i>forward pass</i>), los datos de entrada se propagan a través de las\n                capas de la red neuronal para producir una predicción. Este proceso implica\n                calcular las sumas ponderadas y aplicar funciones de activación\n                para cada neurona en cada capa.\n                <br/><br/>\n                Podemos ver que la frontera de clasificación para nuestra red actual\n                (la región de dos colores del fondo) no es muy buena."),
            (O = A()),
            (P = M("br")),
            (H = A()),
            (D = M("button")),
            (D.textContent = "Repetir Animación"),
            (F = A()),
            (j = M("div")),
            (V = M("div")),
            (U = M("h2")),
            (U.textContent = "Error"),
            (G = A()),
            (W = M("hr")),
            (X = A()),
            (Y = M("br")),
            (Z = A()),
            (K = M("p")),
            (K.innerHTML =
              "El error, también conocido como pérdida, mide la diferencia entre\n                la salida predicha por la red neuronal y los valores objetivo\n                reales. Al minimizar este error, la red neuronal aprende a\n                mejorar sus predicciones durante el entrenamiento.\n                <br/><br/>\n                ¿Notas esos círculos extra grandes en el gráfico, los que tienen un color\n                diferente a su fondo? Esos son los valores que fueron\n                predichos erróneamente. El objetivo de la retropropagación es actualizar los pesos\n                del modelo para que aprenda a predecir con menos error."),
            (J = A()),
            (Q = M("br")),
            (tt = A()),
            (et = M("button")),
            (et.textContent = "Repetir Animación"),
            (nt = A()),
            (rt = M("div")),
            (it = M("div")),
            (at = M("h2")),
            (at.textContent = "Paso Hacia Atrás"),
            (ot = A()),
            (st = M("hr")),
            (lt = A()),
            (ct = M("br")),
            (ht = A()),
            (mt = M("p")),
            (mt.innerHTML =
              "En el paso hacia atrás, el error se propaga de vuelta a través de la\n                red, comenzando desde la capa de salida, para ajustar los pesos\n                y sesgos de cada neurona. Este proceso de ajuste de pesos,\n                guiado por los gradientes del error con respecto a los\n                pesos, busca minimizar el error general de la red.\n                (Este proceso usa la Regla de la Cadena del cálculo para actualizar los\n                pesos capa por capa, pero no entraremos en detalle aquí.)\n                <br/><br/>\n                En nuestro ejemplo, el ancho de las líneas que conectan cada neurona representa\n                los pesos de la red. Los pesos serán ajustados para reducir\n                el error de predicción de nuestra Red Neuronal."),
            (pt = A()),
            (ft = M("br")),
            (gt = A()),
            (yt = M("button")),
            (yt.textContent = "Repetir Animación"),
            (wt = A()),
            (kt = M("div")),
            ($t = M("div")),
            (Mt = M("h2")),
            (Mt.textContent = "Retropropagación"),
            (St = A()),
            (zt = M("hr")),
            (At = A()),
            (Tt = M("br")),
            (Nt = A()),
            (Bt = M("p")),
            (Bt.innerHTML =
              'Las predicciones fluyen hacia adelante a través de la red en el paso\n                hacia adelante, y los errores fluyen hacia atrás a través de la red, ajustando\n                los pesos en el camino. <span class="bold">Este proceso se conoce como Retropropagación.</span> \n                <br/><br/>\n                La retropropagación es un algoritmo de aprendizaje supervisado usado en redes\n                neuronales que optimiza sus pesos y sesgos a través de pasos\n                iterativos hacia adelante y hacia atrás. Al computar los gradientes del error\n                con respecto a los pesos, la retropropagación permite que la red\n                aprenda y mejore sus predicciones.\n                <br/>'),
            (Ct = A()),
            (qt = M("br")),
            (Et = A()),
            (Lt = M("button")),
            (Lt.textContent = "Repetir Animación"),
            (_t = A()),
            (It = M("div")),
            (Rt = M("div")),
            (Ot = M("h2")),
            (Ot.textContent = "Más Retropropagación..."),
            (Pt = A()),
            (Ht = M("hr")),
            (Dt = A()),
            (Ft = M("br")),
            (jt = A()),
            (Vt = M("p")),
            (Vt.innerHTML =
              'La retropropagación no ocurre solo una vez! Para una red neuronal\n                típica, la retropropagación se repite cientos, si no miles,\n                de veces. Para mantener las cosas simples, aquí animamos solo un par más\n                de ejecuciones de retropropagación.\n                <br/><br/> \n\n                <span class="bold">¡Lo clave a notar es que, en cada ejecución, los pesos de la red\n                  se actualizan de una manera que mejora el rendimiento\n                  de nuestro modelo!</span>. Para ver esto directamente, puedes observar cómo la región\n                de clasificación (los colores del fondo) corresponden correctamente a los\n                círculos.'),
            (Ut = A()),
            (Gt = M("br")),
            (Wt = A()),
            (Xt = M("button")),
            (Xt.textContent = "Repetir Animación"),
            (Yt = A()),
            (Zt = M("br")),
            (Kt = A()),
            (Jt = M("h3")),
            (Jt.textContent = "Retropropagación y Descenso del Gradiente"),
            (Qt = A()),
            (te = M("hr")),
            (ee = A()),
            (ne = M("p")),
            (ne.innerHTML =
              "Acabamos de ver la retropropagación, el proceso mediante el cual las Redes Neuronales\n      intentan encontrar los pesos óptimos para la tarea de predicción dada (óptimo\n      aquí significa los pesos que resultan en el valor de error más bajo).\n      <br/><br/>\n      ¡Es importante notar que este proceso no es perfecto! Muchos problemas pueden ocurrir\n      al entrenar una red neuronal, incluso una red tan simple como la anterior. ¡Para aprender\n      más, continúa leyendo!\n\n      <br/><br/>"),
            (re = A()),
            (ie = M("br")),
            (ae = M("br")),
            (oe = M("br")),
            B(r, "class", "body-header svelte-1crpsfc"),
            B(o, "class", "svelte-1crpsfc"),
            B(l, "class", "body-text svelte-1crpsfc"),
            B(v, "class", "chart-holder-backprop svelte-1crpsfc"),
            B(y, "class", "charts-container-backprop svelte-1crpsfc"),
            B(C, "class", "svelte-1crpsfc"),
            B(E, "class", "svelte-1crpsfc"),
            B(R, "class", "svelte-1crpsfc"),
            B(D, "class", "step-button svelte-1crpsfc"),
            B(T, "class", "step-content-bp svelte-1crpsfc"),
            B(z, "class", "step-bp svelte-1crpsfc"),
            B(z, "data-index", "0"),
            B(U, "class", "svelte-1crpsfc"),
            B(W, "class", "svelte-1crpsfc"),
            B(K, "class", "svelte-1crpsfc"),
            B(et, "class", "step-button svelte-1crpsfc"),
            B(V, "class", "step-content-bp svelte-1crpsfc"),
            B(j, "class", "step-bp svelte-1crpsfc"),
            B(j, "data-index", "1"),
            B(at, "class", "svelte-1crpsfc"),
            B(st, "class", "svelte-1crpsfc"),
            B(mt, "class", "svelte-1crpsfc"),
            B(yt, "class", "step-button svelte-1crpsfc"),
            B(it, "class", "step-content-bp svelte-1crpsfc"),
            B(rt, "class", "step-bp svelte-1crpsfc"),
            B(rt, "data-index", "2"),
            B(Mt, "class", "svelte-1crpsfc"),
            B(zt, "class", "svelte-1crpsfc"),
            B(Bt, "class", "svelte-1crpsfc"),
            B(Lt, "class", "step-button svelte-1crpsfc"),
            B($t, "class", "step-content-bp svelte-1crpsfc"),
            B(kt, "class", "step-bp svelte-1crpsfc"),
            B(kt, "data-index", "3"),
            B(Ot, "class", "svelte-1crpsfc"),
            B(Ht, "class", "svelte-1crpsfc"),
            B(Vt, "class", "svelte-1crpsfc"),
            B(Xt, "class", "step-button svelte-1crpsfc"),
            B(Rt, "class", "step-content-bp svelte-1crpsfc"),
            B(It, "class", "step-bp svelte-1crpsfc"),
            B(It, "data-index", "4"),
            B(S, "class", "steps-container-backprop svelte-1crpsfc"),
            B(g, "class", "scrolly-container-backprop svelte-1crpsfc"),
            B(f, "class", "svelte-1crpsfc"),
            B(Jt, "class", "body-header svelte-1crpsfc"),
            B(te, "class", "svelte-1crpsfc"),
            B(ne, "class", "body-text svelte-1crpsfc"),
            B(p, "id", "container"),
            B(n, "id", "backpropagation-section"),
            B(n, "class", "svelte-1crpsfc");
          },
          m(t, a) {
            w(t, n, a),
              x(n, r),
              x(n, i),
              x(n, o),
              x(n, s),
              x(n, l),
              x(n, c),
              x(n, h),
              x(n, u),
              x(n, d),
              x(n, m),
              x(n, p),
              x(p, f),
              x(f, g),
              x(g, y),
              x(y, v),
              vt(b, v, null),
              x(g, $),
              x(g, S),
              x(S, z),
              x(z, T),
              x(T, C),
              x(T, q),
              x(T, E),
              x(T, L),
              x(T, _),
              x(T, I),
              x(T, R),
              x(T, O),
              x(T, P),
              x(T, H),
              x(T, D),
              x(S, F),
              x(S, j),
              x(j, V),
              x(V, U),
              x(V, G),
              x(V, W),
              x(V, X),
              x(V, Y),
              x(V, Z),
              x(V, K),
              x(V, J),
              x(V, Q),
              x(V, tt),
              x(V, et),
              x(S, nt),
              x(S, rt),
              x(rt, it),
              x(it, at),
              x(it, ot),
              x(it, st),
              x(it, lt),
              x(it, ct),
              x(it, ht),
              x(it, mt),
              x(it, pt),
              x(it, ft),
              x(it, gt),
              x(it, yt),
              x(S, wt),
              x(S, kt),
              x(kt, $t),
              x($t, Mt),
              x($t, St),
              x($t, zt),
              x($t, At),
              x($t, Tt),
              x($t, Nt),
              x($t, Bt),
              x($t, Ct),
              x($t, qt),
              x($t, Et),
              x($t, Lt),
              x(S, _t),
              x(S, It),
              x(It, Rt),
              x(Rt, Ot),
              x(Rt, Pt),
              x(Rt, Ht),
              x(Rt, Dt),
              x(Rt, Ft),
              x(Rt, jt),
              x(Rt, Vt),
              x(Rt, Ut),
              x(Rt, Gt),
              x(Rt, Wt),
              x(Rt, Xt),
              x(p, Yt),
              x(p, Zt),
              x(p, Kt),
              x(p, Jt),
              x(p, Qt),
              x(p, te),
              x(p, ee),
              x(p, ne),
              x(p, re),
              x(p, ie),
              x(p, ae),
              x(p, oe),
              (se = !0),
              le ||
                ((ce = [
                  N(D, "click", e[5]),
                  N(et, "click", e[6]),
                  N(yt, "click", e[7]),
                  N(Lt, "click", e[8]),
                  N(Xt, "click", e[9]),
                ]),
                (le = !0));
          },
          p: t,
          i(t) {
            se || (ut(b.$$.fragment, t), (se = !0));
          },
          o(t) {
            dt(b.$$.fragment, t), (se = !1);
          },
          d(t) {
            t && k(n), bt(b), (le = !1), a(ce);
          },
        }
      );
    }
    const _a = 500;
    function Ia(t, e, n) {
      let r, i, a, o, s, l, u, d, m;
      c(t, Qt, (t) => n(10, (r = t))),
        c(t, te, (t) => n(11, (i = t))),
        c(t, Kt, (t) => n(12, (a = t))),
        c(t, Jt, (t) => n(13, (o = t))),
        c(t, Yt, (t) => n(14, (s = t))),
        c(t, Zt, (t) => n(15, (l = t))),
        c(t, Wt, (t) => n(16, (u = t))),
        c(t, Vt, (t) => n(17, (d = t))),
        c(t, Gt, (t) => n(18, (m = t))),
        h(Gt, (m = [2, 2, 1, 1]), m);
      const p = {
        0: () => {
          h(Vt, (d = 0), d),
            h(Qt, (r = 0), r),
            h(te, (i = 0), i),
            h(Wt, (u = 0.2), u),
            h(Kt, (a = 0), a),
            h(Jt, (o = 0.75), o),
            g();
        },
        1: () => {
          h(Wt, (u = 1), u), h(Qt, (r = 1), r), h(te, (i = 1), i);
        },
        2: () => {
          h(Kt, (a = 0), a), h(Jt, (o = 0.55), o), h(Wt, (u = 2), u), y();
        },
        3: () => {
          h(Kt, (a = 0), a),
            h(Jt, (o = 0.55), o),
            h(Vt, (d = 2), d),
            h(Wt, (u = 1), u),
            x();
        },
        4: () => {
          h(Kt, (a = -0.35), a),
            h(Jt, (o = 0.65), o),
            h(Vt, (d = 2), d),
            h(Wt, (u = 1), u),
            v(),
            setTimeout(v, 1100);
        },
      };
      function f() {
        h(te, (i = 0), i),
          setTimeout(() => {
            h(te, (i = 1), i);
          }, _a);
      }
      function g() {
        h(Zt, (l = !1), l), h(Qt, (r = 0), r), h(te, (i = 0), i);
        let t = [];
        const e = s.querySelectorAll("animateMotion#animatePathForwardBp1");
        t.push({ selection: e }),
          t.forEach((t) => {
            setTimeout(() => {
              t.selection.forEach((t) => {
                t.beginElement();
              });
            }, 100);
          }),
          setTimeout(() => {
            h(Qt, (r = 1), r);
          }, 1500);
      }
      function y() {
        let t = [];
        const e = s.querySelectorAll("animateMotion#animatePathBackward3");
        t.push({ selection: e }),
          t.forEach((t) => {
            setTimeout(() => {
              t.selection.forEach((t) => {
                t.beginElement();
              });
            }, 100);
          }),
          setTimeout(() => {
            h(Qt, (r = 2), r), h(te, (i = 2), i), k();
          }, 1500);
      }
      function x() {
        if (a > -1.046) {
          let t = [];
          const e = "animateMotion#animatePathForwardBp1",
            n = s.querySelectorAll(e);
          t.push({ selection: n });
          const l = "animateMotion#animatePathBackward3",
            c = s.querySelectorAll(l);
          t.push({ selection: c }),
            t.forEach((t, e) => {
              setTimeout(
                () => {
                  t.selection.forEach((t) => {
                    t.beginElement();
                  });
                },
                3 * e * _a,
              );
            }),
            setTimeout(() => {
              h(Qt, (r = 3), r),
                h(te, (i = 3), i),
                h(Kt, (a = -0.3), a),
                h(Jt, (o = 0.56), o),
                h(te, (i += 1), i),
                h(Qt, (r += 1), r),
                k();
            }, 3e3);
        }
      }
      function v() {
        if (a > -1.046) {
          let t = [];
          const e = "animateMotion#animatePathForwardBp1",
            n = s.querySelectorAll(e);
          t.push({ selection: n });
          const l = "animateMotion#animatePathBackward3",
            c = s.querySelectorAll(l);
          t.push({ selection: c }),
            t.forEach((t, e) => {
              setTimeout(
                () => {
                  t.selection.forEach((t) => {
                    t.beginElement();
                  });
                },
                3 * e * _a,
              );
            }),
            setTimeout(() => {
              h(Qt, (r = 3), r),
                h(te, (i = 3), i),
                h(Jt, (o += 0.1), o),
                h(Kt, (a += -0.3), a),
                h(te, (i += 1), i),
                h(Qt, (r += 1), r),
                k();
            }, 3e3);
        }
      }
      function b() {
        h(Kt, (a = 0), a),
          h(Jt, (o = 0.55), o),
          h(te, (i += 1), i),
          h(Qt, (r += 1), r),
          k(),
          x();
      }
      function w() {
        h(Kt, (a = -0.3), a),
          h(Jt, (o = 0.56), o),
          h(te, (i += 1), i),
          h(Qt, (r += 1), r),
          k(),
          v(),
          setTimeout(v, 1100);
      }
      function k() {
        ee.update((t) =>
          t.map((t) => {
            const e = Math.floor(8 * Math.random()),
              n = Math.random() < 0.5 ? -1 : 1;
            return Math.max(1, Math.min(14, t + e * n));
          }),
        );
      }
      G(() => {
        [...document.querySelectorAll(".step-bp")].forEach((t) => {
          $.observe(t);
        });
      });
      let $ = new IntersectionObserver(
        (t) => {
          t.forEach((t) => {
            if (t.isIntersecting) {
              const e = t.target.getAttribute("data-index");
              e in p &&
                (function (t) {
                  t in p && p[t]();
                })(e);
            }
          });
        },
        { threshold: 0.7 },
      );
      return [
        f,
        g,
        y,
        b,
        w,
        () => g(),
        () => f(),
        () => y(),
        () => b(),
        () => w(),
      ];
    }
    class Ra extends $t {
      constructor(t) {
        super(), kt(this, t, Ia, La, s, {});
      }
    }
    function Oa() {
      const t = Wr($networkInteractive),
        e = Array.from({ length: t }, (t, e) => {
          const n = $networkInteractive[e % ($networkInteractive.length - 1)];
          return { data: Math.sqrt(2 / n) * (2 * Math.random() - 1), grad: 0 };
        });
      $networkInteractiveWeights = [...e];
    }
    const { document: Pa } = yt;
    function Ha(t, e, n) {
      const r = t.slice();
      return (r[33] = e[n]), r;
    }
    function Da(t, e, n) {
      const r = t.slice();
      return (r[36] = e[n]), (r[38] = n), r;
    }
    function Fa(t, e, n) {
      const r = t.slice();
      return (r[33] = e[n]), r;
    }
    function ja(t, e, n) {
      const r = t.slice();
      return (r[36] = e[n]), (r[38] = n), r;
    }
    function Va(t, e, n) {
      const r = t.slice();
      r[33] = e[n];
      const i = r[38] < r[5] - 1 && r[38] > 0;
      return (r[42] = i), r;
    }
    function Ua(t, e, n) {
      const r = t.slice();
      return (r[38] = e[n]), (r[46] = n), r;
    }
    function Ga(t, e, n) {
      const r = t.slice();
      return (r[33] = e[n]), (r[48] = n), r;
    }
    function Wa(t, e, n) {
      const r = t.slice();
      (r[49] = e[n]), (r[51] = n);
      const i = (function (t, e, n, r) {
        let i = 0;
        for (let e = 0; e < t - 1; e++) i += r[e] * r[e + 1];
        return (i += e * r[t] + n), i;
      })(r[46], r[51], r[48], r[4]);
      return (r[36] = i), r;
    }
    function Xa(t, e, n) {
      const r = t.slice();
      return (r[52] = e[n]), r;
    }
    function Ya(t, e, n) {
      const r = t.slice();
      return (r[52] = e[n]), r;
    }
    function Za(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s = Array(t[5]).fill(null),
        l = [];
      for (let e = 0; e < s.length; e += 1) l[e] = ro(Ua(t, s, e));
      const c = (t) =>
        dt(l[t], 1, 1, () => {
          l[t] = null;
        });
      let h = Array(t[5]).fill(null),
        u = [];
      for (let e = 0; e < h.length; e += 1) u[e] = so(ja(t, h, e));
      const d = (t) =>
        dt(u[t], 1, 1, () => {
          u[t] = null;
        });
      let m = Array(t[5]).fill(null),
        p = [];
      for (let e = 0; e < m.length; e += 1) p[e] = ho(Da(t, m, e));
      let f = t[21](t[4][t[5] - 1], t[1]),
        g = [];
      for (let e = 0; e < f.length; e += 1) g[e] = uo(Ha(t, f, e));
      const y = (t) =>
        dt(g[t], 1, 1, () => {
          g[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < l.length; t += 1) l[t].c();
          e = T();
          for (let t = 0; t < u.length; t += 1) u[t].c();
          n = T();
          for (let t = 0; t < p.length; t += 1) p[t].c();
          r = T();
          for (let t = 0; t < g.length; t += 1) g[t].c();
          (i = S("rect")),
            B(i, "fill", (a = t[6] ? "#e5f7ff" : "#f3fbff")),
            B(i, "x", "0"),
            B(i, "y", "0"),
            B(i, "width", "30"),
            B(i, "height", "30");
        },
        m(t, a) {
          for (let e = 0; e < l.length; e += 1) l[e].m(t, a);
          w(t, e, a);
          for (let e = 0; e < u.length; e += 1) u[e].m(t, a);
          w(t, n, a);
          for (let e = 0; e < p.length; e += 1) p[e].m(t, a);
          w(t, r, a);
          for (let e = 0; e < g.length; e += 1) g[e].m(t, a);
          w(t, i, a), (o = !0);
        },
        p(t, x) {
          if (4047794 & x[0]) {
            let n;
            for (s = Array(t[5]).fill(null), n = 0; n < s.length; n += 1) {
              const r = Ua(t, s, n);
              l[n]
                ? (l[n].p(r, x), ut(l[n], 1))
                : ((l[n] = ro(r)),
                  l[n].c(),
                  ut(l[n], 1),
                  l[n].m(e.parentNode, e));
            }
            for (ct(), n = s.length; n < l.length; n += 1) c(n);
            ht();
          }
          if (2108218 & x[0]) {
            let e;
            for (h = Array(t[5]).fill(null), e = 0; e < h.length; e += 1) {
              const r = ja(t, h, e);
              u[e]
                ? (u[e].p(r, x), ut(u[e], 1))
                : ((u[e] = so(r)),
                  u[e].c(),
                  ut(u[e], 1),
                  u[e].m(n.parentNode, n));
            }
            for (ct(), e = h.length; e < u.length; e += 1) d(e);
            ht();
          }
          if (27265914 & x[0]) {
            let e;
            for (m = Array(t[5]).fill(null), e = 0; e < m.length; e += 1) {
              const n = Da(t, m, e);
              p[e]
                ? p[e].p(n, x)
                : ((p[e] = ho(n)), p[e].c(), p[e].m(r.parentNode, r));
            }
            for (; e < p.length; e += 1) p[e].d(1);
            p.length = m.length;
          }
          if (2109242 & x[0]) {
            let e;
            for (f = t[21](t[4][t[5] - 1], t[1]), e = 0; e < f.length; e += 1) {
              const n = Ha(t, f, e);
              g[e]
                ? (g[e].p(n, x), ut(g[e], 1))
                : ((g[e] = uo(n)),
                  g[e].c(),
                  ut(g[e], 1),
                  g[e].m(i.parentNode, i));
            }
            for (ct(), e = f.length; e < g.length; e += 1) y(e);
            ht();
          }
          (!o || (64 & x[0] && a !== (a = t[6] ? "#e5f7ff" : "#f3fbff"))) &&
            B(i, "fill", a);
        },
        i(t) {
          if (!o) {
            for (let t = 0; t < s.length; t += 1) ut(l[t]);
            for (let t = 0; t < h.length; t += 1) ut(u[t]);
            for (let t = 0; t < f.length; t += 1) ut(g[t]);
            o = !0;
          }
        },
        o(t) {
          l = l.filter(Boolean);
          for (let t = 0; t < l.length; t += 1) dt(l[t]);
          u = u.filter(Boolean);
          for (let t = 0; t < u.length; t += 1) dt(u[t]);
          g = g.filter(Boolean);
          for (let t = 0; t < g.length; t += 1) dt(g[t]);
          o = !1;
        },
        d(t) {
          $(l, t),
            t && k(e),
            $(u, t),
            t && k(n),
            $(p, t),
            t && k(r),
            $(g, t),
            t && k(i);
        },
      };
    }
    function Ka(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l = t[20](t[7][t[36]].data) + "";
      return {
        c() {
          (e = S("text")),
            (n = S("textPath")),
            (r = z(l)),
            B(n, "href", (i = `#nn-edge-int-${t[46]}-${t[33]}-${t[49]}`)),
            B(n, "class", "weight-text-int svelte-1lodyi5"),
            B(n, "startOffset", "50%"),
            B(n, "text-anchor", "middle"),
            B(n, "dominant-baseline", "middle");
        },
        m(t, i) {
          w(t, e, i), x(e, n), x(n, r), (s = !0);
        },
        p(t, e) {
          (!s || 144 & e[0]) &&
            l !== (l = t[20](t[7][t[36]].data) + "") &&
            C(r, l),
            (!s ||
              (18 & e[0] &&
                i !== (i = `#nn-edge-int-${t[46]}-${t[33]}-${t[49]}`))) &&
              B(n, "href", i);
        },
        i(t) {
          s ||
            (t &&
              Q(() => {
                o && o.end(1),
                  (a = pt(e, sr, { x: 50, duration: 500 })),
                  a.start();
              }),
            (s = !0));
        },
        o(t) {
          a && a.invalidate(), t && (o = ft(e, or, { duration: 0 })), (s = !1);
        },
        d(t) {
          t && k(e), t && o && o.end();
        },
      };
    }
    function Ja(t) {
      let e,
        n = t[16] && Ka(t);
      return {
        c() {
          n && n.c(), (e = T());
        },
        m(t, r) {
          n && n.m(t, r), w(t, e, r);
        },
        p(t, r) {
          t[16]
            ? n
              ? (n.p(t, r), 65536 & r[0] && ut(n, 1))
              : ((n = Ka(t)), n.c(), ut(n, 1), n.m(e.parentNode, e))
            : n &&
              (ct(),
              dt(n, 1, 1, () => {
                n = null;
              }),
              ht());
        },
        d(t) {
          n && n.d(t), t && k(e);
        },
      };
    }
    function Qa(t) {
      let e, n, r, i, a, o, s, l;
      return {
        c() {
          (e = S("g")),
            (n = S("text")),
            (r = z("⬤\n                  ")),
            (i = S("animateMotion")),
            B(n, "opacity", "1"),
            B(n, "class", "moving-text svelte-1lodyi5"),
            B(n, "alignment-baseline", "middle"),
            B(i, "id", (a = `animatePath${t[46]}${t[52]}`)),
            B(i, "dur", (o = t[19] / 2)),
            B(
              i,
              "begin",
              (s =
                1 === t[46]
                  ? "" + (0 + 0.1 * t[52])
                  : `animatePath${t[46] - 1}${t[52]}.end`),
            ),
            B(i, "restart", "whenNotActive"),
            B(
              i,
              "path",
              (l = `\n                          M ${t[9](t[46] - 1)} ${t[8](t[49])}\n                          L ${t[9](t[46])} ${t[8](t[33])}\n                        `),
            ),
            B(i, "class", "svelte-1lodyi5"),
            B(e, "transform", "translate(0, 0)");
        },
        m(t, a) {
          w(t, e, a), x(e, n), x(n, r), x(e, i);
        },
        p(t, e) {
          262144 & e[0] &&
            a !== (a = `animatePath${t[46]}${t[52]}`) &&
            B(i, "id", a),
            524288 & e[0] && o !== (o = t[19] / 2) && B(i, "dur", o),
            262144 & e[0] &&
              s !==
                (s =
                  1 === t[46]
                    ? "" + (0 + 0.1 * t[52])
                    : `animatePath${t[46] - 1}${t[52]}.end`) &&
              B(i, "begin", s),
            786 & e[0] &&
              l !==
                (l = `\n                          M ${t[9](t[46] - 1)} ${t[8](t[49])}\n                          L ${t[9](t[46])} ${t[8](t[33])}\n                        `) &&
              B(i, "path", l);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function to(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b = t[20](t[7][t[36]].grad) + "";
      return {
        c() {
          (e = S("g")),
            (n = S("circle")),
            (r = S("set")),
            (a = S("set")),
            (c = S("text")),
            (h = z(b)),
            (u = S("set")),
            (m = S("set")),
            (f = S("animateMotion")),
            B(r, "attributeName", "opacity"),
            B(r, "to", "1"),
            B(r, "begin", (i = `animatePathBack${t[46]}${t[52]}.begin`)),
            B(a, "attributeName", "opacity"),
            B(a, "to", "0"),
            B(a, "begin", (o = `animatePathBack${t[46]}${t[52]}.end`)),
            B(n, "r", (s = t[14](t[7][t[36]].grad))),
            B(n, "opacity", "0"),
            B(n, "id", (l = `circle${t[46]}${t[52]}`)),
            B(n, "class", "moving-circle-back svelte-1lodyi5"),
            B(u, "attributeName", "opacity"),
            B(u, "to", "1"),
            B(u, "begin", (d = `animatePathBack${t[46]}${t[52]}.begin`)),
            B(m, "attributeName", "opacity"),
            B(m, "to", "0"),
            B(m, "begin", (p = `animatePathBack${t[46]}${t[52]}.end`)),
            B(c, "opacity", "0"),
            B(c, "class", "moving-text svelte-1lodyi5"),
            B(c, "alignment-baseline", "middle"),
            B(f, "id", (g = `animatePathBack${t[46]}${t[52]}`)),
            B(
              f,
              "begin",
              (y =
                t[46] === t[5] - 1
                  ? `animatePath${t[5] - 1}${t[52]}.end`
                  : `animatePathBack${t[46] + 1}${t[52]}.end`),
            ),
            B(f, "dur", t[19]),
            B(f, "restart", "whenNotActive"),
            B(
              f,
              "path",
              (v = `\n                            M ${t[9](t[46])} ${t[8](t[33])}\n                            L ${t[9](t[46] - 1)} ${t[8](t[49])}\n                          `),
            ),
            B(f, "class", "svelte-1lodyi5");
        },
        m(t, i) {
          w(t, e, i),
            x(e, n),
            x(n, r),
            x(n, a),
            x(e, c),
            x(c, h),
            x(c, u),
            x(c, m),
            x(e, f);
        },
        p(t, e) {
          262144 & e[0] &&
            i !== (i = `animatePathBack${t[46]}${t[52]}.begin`) &&
            B(r, "begin", i),
            262144 & e[0] &&
              o !== (o = `animatePathBack${t[46]}${t[52]}.end`) &&
              B(a, "begin", o),
            16528 & e[0] && s !== (s = t[14](t[7][t[36]].grad)) && B(n, "r", s),
            262144 & e[0] &&
              l !== (l = `circle${t[46]}${t[52]}`) &&
              B(n, "id", l),
            144 & e[0] && b !== (b = t[20](t[7][t[36]].grad) + "") && C(h, b),
            262144 & e[0] &&
              d !== (d = `animatePathBack${t[46]}${t[52]}.begin`) &&
              B(u, "begin", d),
            262144 & e[0] &&
              p !== (p = `animatePathBack${t[46]}${t[52]}.end`) &&
              B(m, "begin", p),
            262144 & e[0] &&
              g !== (g = `animatePathBack${t[46]}${t[52]}`) &&
              B(f, "id", g),
            262176 & e[0] &&
              y !==
                (y =
                  t[46] === t[5] - 1
                    ? `animatePath${t[5] - 1}${t[52]}.end`
                    : `animatePathBack${t[46] + 1}${t[52]}.end`) &&
              B(f, "begin", y),
            524288 & e[0] && B(f, "dur", t[19]),
            786 & e[0] &&
              v !==
                (v = `\n                            M ${t[9](t[46])} ${t[8](t[33])}\n                            L ${t[9](t[46] - 1)} ${t[8](t[49])}\n                          `) &&
              B(f, "path", v);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function eo(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        l,
        c,
        h,
        u,
        d = `${t[5]}-${t[4]}`,
        m = Ja(t),
        p = t[18],
        f = [];
      for (let e = 0; e < p.length; e += 1) f[e] = Qa(Ya(t, p, e));
      let g = t[18],
        y = [];
      for (let e = 0; e < g.length; e += 1) y[e] = to(Xa(t, g, e));
      return {
        c() {
          (e = S("path")), m.c(), (l = T());
          for (let t = 0; t < f.length; t += 1) f[t].c();
          c = T();
          for (let t = 0; t < y.length; t += 1) y[t].c();
          (h = T()),
            B(
              e,
              "d",
              (n = `\n                        M ${t[9](t[46] - 1)} ${t[8](t[49])}\n                        L ${t[9](t[46])} ${t[8](t[33])}\n                      `),
            ),
            B(e, "stroke-width", (r = t[16] ? t[15](t[7][t[36]].data) : 0.5)),
            B(e, "class", "nn-edge-int svelte-1lodyi5"),
            B(e, "id", (i = `nn-edge-int-${t[46]}-${t[33]}-${t[49]}`)),
            R(e, "animate-dash", t[16]);
        },
        m(t, n) {
          w(t, e, n), m.m(t, n), w(t, l, n);
          for (let e = 0; e < f.length; e += 1) f[e].m(t, n);
          w(t, c, n);
          for (let e = 0; e < y.length; e += 1) y[e].m(t, n);
          w(t, h, n), (u = !0);
        },
        p(t, a) {
          if (
            ((!u ||
              (786 & a[0] &&
                n !==
                  (n = `\n                        M ${t[9](t[46] - 1)} ${t[8](t[49])}\n                        L ${t[9](t[46])} ${t[8](t[33])}\n                      `))) &&
              B(e, "d", n),
            (!u ||
              (98448 & a[0] &&
                r !== (r = t[16] ? t[15](t[7][t[36]].data) : 0.5))) &&
              B(e, "stroke-width", r),
            (!u ||
              (18 & a[0] &&
                i !== (i = `nn-edge-int-${t[46]}-${t[33]}-${t[49]}`))) &&
              B(e, "id", i),
            (!u || 65536 & a[0]) && R(e, "animate-dash", t[16]),
            48 & a[0] && s(d, (d = `${t[5]}-${t[4]}`))
              ? (m.d(1), (m = Ja(t)), m.c(), m.m(l.parentNode, l))
              : m.p(t, a),
            2884370 & a[0])
          ) {
            let e;
            for (p = t[18], e = 0; e < p.length; e += 1) {
              const n = Ya(t, p, e);
              f[e]
                ? f[e].p(n, a)
                : ((f[e] = Qa(n)), f[e].c(), f[e].m(c.parentNode, c));
            }
            for (; e < f.length; e += 1) f[e].d(1);
            f.length = p.length;
          }
          if (3949490 & a[0]) {
            let e;
            for (g = t[18], e = 0; e < g.length; e += 1) {
              const n = Xa(t, g, e);
              y[e]
                ? y[e].p(n, a)
                : ((y[e] = to(n)), y[e].c(), y[e].m(h.parentNode, h));
            }
            for (; e < y.length; e += 1) y[e].d(1);
            y.length = g.length;
          }
        },
        i(t) {
          u ||
            (t &&
              Q(() => {
                o && o.end(1), (a = pt(e, lr, { duration: 500 })), a.start();
              }),
            (u = !0));
        },
        o(t) {
          a && a.invalidate(), t && (o = ft(e, lr, { duration: 400 })), (u = !1);
        },
        d(t) {
          t && k(e),
            t && o && o.end(),
            t && k(l),
            m.d(t),
            $(f, t),
            t && k(c),
            $(y, t),
            t && k(h);
        },
      };
    }
    function no(t) {
      let e,
        n,
        r =
          t[46] > 0 &&
          (function (t) {
            let e,
              n,
              r = t[21](t[4][t[46] - 1], t[1]),
              i = [];
            for (let e = 0; e < r.length; e += 1) i[e] = eo(Wa(t, r, e));
            const a = (t) =>
              dt(i[t], 1, 1, () => {
                i[t] = null;
              });
            return {
              c() {
                for (let t = 0; t < i.length; t += 1) i[t].c();
                e = T();
              },
              m(t, r) {
                for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
                w(t, e, r), (n = !0);
              },
              p(t, n) {
                if (4047794 & n[0]) {
                  let o;
                  for (
                    r = t[21](t[4][t[46] - 1], t[1]), o = 0;
                    o < r.length;
                    o += 1
                  ) {
                    const a = Wa(t, r, o);
                    i[o]
                      ? (i[o].p(a, n), ut(i[o], 1))
                      : ((i[o] = eo(a)),
                        i[o].c(),
                        ut(i[o], 1),
                        i[o].m(e.parentNode, e));
                  }
                  for (ct(), o = r.length; o < i.length; o += 1) a(o);
                  ht();
                }
              },
              i(t) {
                if (!n) {
                  for (let t = 0; t < r.length; t += 1) ut(i[t]);
                  n = !0;
                }
              },
              o(t) {
                i = i.filter(Boolean);
                for (let t = 0; t < i.length; t += 1) dt(i[t]);
                n = !1;
              },
              d(t) {
                $(i, t), t && k(e);
              },
            };
          })(t);
      return {
        c() {
          r && r.c(), (e = T());
        },
        m(t, i) {
          r && r.m(t, i), w(t, e, i), (n = !0);
        },
        p(t, e) {
          t[46] > 0 && r.p(t, e);
        },
        i(t) {
          n || (ut(r), (n = !0));
        },
        o(t) {
          dt(r), (n = !1);
        },
        d(t) {
          r && r.d(t), t && k(e);
        },
      };
    }
    function ro(t) {
      let e,
        n,
        r = t[21](t[4][t[46]], t[1]),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = no(Ga(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (4047794 & n[0]) {
            let o;
            for (r = t[21](t[4][t[46]], t[1]), o = 0; o < r.length; o += 1) {
              const a = Ga(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = no(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function io(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g = t[13][t[38]] + "",
        y = Math.abs(t[33] - 2) + "",
        v = t[42] && ao();
      return {
        c() {
          (e = S("rect")),
            v && v.c(),
            (o = S("text")),
            (s = z(g)),
            (l = S("tspan")),
            (c = z(y)),
            (h = A()),
            B(
              e,
              "class",
              (n =
                "nn-node " +
                (0 == t[38] ? "input" : t[38] == t[5] - 1 ? "output" : "hidden") +
                " svelte-1lodyi5"),
            ),
            B(e, "width", t[3]),
            B(e, "height", (r = t[42] ? t[11] * po : t[11])),
            B(l, "class", "subscript"),
            B(l, "dy", "4"),
            B(o, "class", "nn-text svelte-1lodyi5"),
            B(o, "text-anchor", "middle"),
            B(o, "alignment-baseline", "middle"),
            B(o, "dx", (u = t[3] / 2)),
            B(o, "dy", (d = t[42] ? t[11] * po - 8 : t[11] / 2));
        },
        m(t, n) {
          w(t, e, n),
            v && v.m(t, n),
            w(t, o, n),
            x(o, s),
            x(o, l),
            x(l, c),
            x(o, h),
            (f = !0);
        },
        p(t, i) {
          (!f ||
            (32 & i[0] &&
              n !==
                (n =
                  "nn-node " +
                  (0 == t[38]
                    ? "input"
                    : t[38] == t[5] - 1
                      ? "output"
                      : "hidden") +
                  " svelte-1lodyi5"))) &&
            B(e, "class", n),
            (!f || 8 & i[0]) && B(e, "width", t[3]),
            (!f || (2080 & i[0] && r !== (r = t[42] ? t[11] * po : t[11]))) &&
              B(e, "height", r),
            t[42]
              ? v
                ? 32 & i[0] && ut(v, 1)
                : ((v = ao()), v.c(), ut(v, 1), v.m(o.parentNode, o))
              : v &&
                (ct(),
                dt(v, 1, 1, () => {
                  v = null;
                }),
                ht()),
            (!f || 8192 & i[0]) && g !== (g = t[13][t[38]] + "") && C(s, g),
            (!f || 18 & i[0]) && y !== (y = Math.abs(t[33] - 2) + "") && C(c, y),
            (!f || (8 & i[0] && u !== (u = t[3] / 2))) && B(o, "dx", u),
            (!f ||
              (2080 & i[0] && d !== (d = t[42] ? t[11] * po - 8 : t[11] / 2))) &&
              B(o, "dy", d);
        },
        i(t) {
          f ||
            (t &&
              Q(() => {
                a && a.end(1),
                  (i = pt(e, sr, { x: -50, duration: 500 })),
                  i.start();
              }),
            ut(v),
            t &&
              Q(() => {
                p && p.end(1),
                  (m = pt(o, sr, { x: -50, duration: 500 })),
                  m.start();
              }),
            (f = !0));
        },
        o(t) {
          i && i.invalidate(),
            t && (a = ft(e, or, { duration: 300 })),
            dt(v),
            m && m.invalidate(),
            t && (p = ft(o, or, { duration: 300 })),
            (f = !1);
        },
        d(t) {
          t && k(e), t && a && a.end(), v && v.d(t), t && k(o), t && p && p.end();
        },
      };
    }
    function ao(t) {
      let e, n;
      return (
        (e = new Qr({ props: { data: "reLu" } })),
        {
          c() {
            xt(e.$$.fragment);
          },
          m(t, r) {
            vt(e, t, r), (n = !0);
          },
          i(t) {
            n || (ut(e.$$.fragment, t), (n = !0));
          },
          o(t) {
            dt(e.$$.fragment, t), (n = !1);
          },
          d(t) {
            bt(e, t);
          },
        }
      );
    }
    function oo(t) {
      let e,
        n,
        r,
        i = t[38] !== t[5] - 1 && io(t);
      return {
        c() {
          (e = S("g")),
            i && i.c(),
            B(e, "class", "nn-g svelte-1lodyi5"),
            B(
              e,
              "transform",
              (n = `translate(${t[9](t[38]) - t[3] / 2} ${t[8](t[33]) - t[11] / 2})`),
            );
        },
        m(t, n) {
          w(t, e, n), i && i.m(e, null), (r = !0);
        },
        p(t, a) {
          t[38] !== t[5] - 1
            ? i
              ? (i.p(t, a), 32 & a[0] && ut(i, 1))
              : ((i = io(t)), i.c(), ut(i, 1), i.m(e, null))
            : i &&
              (ct(),
              dt(i, 1, 1, () => {
                i = null;
              }),
              ht()),
            (!r ||
              (2842 & a[0] &&
                n !==
                  (n = `translate(${t[9](t[38]) - t[3] / 2} ${t[8](t[33]) - t[11] / 2})`))) &&
              B(e, "transform", n);
        },
        i(t) {
          r || (ut(i), (r = !0));
        },
        o(t) {
          dt(i), (r = !1);
        },
        d(t) {
          t && k(e), i && i.d();
        },
      };
    }
    function so(t) {
      let e,
        n,
        r = t[21](t[4][t[38]], t[1]),
        i = [];
      for (let e = 0; e < r.length; e += 1) i[e] = oo(Va(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          for (let t = 0; t < i.length; t += 1) i[t].c();
          e = T();
        },
        m(t, r) {
          for (let e = 0; e < i.length; e += 1) i[e].m(t, r);
          w(t, e, r), (n = !0);
        },
        p(t, n) {
          if (2108218 & n[0]) {
            let o;
            for (r = t[21](t[4][t[38]], t[1]), o = 0; o < r.length; o += 1) {
              const a = Va(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = oo(a)),
                  i[o].c(),
                  ut(i[o], 1),
                  i[o].m(e.parentNode, e));
            }
            for (ct(), o = r.length; o < i.length; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < r.length; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < i.length; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          $(i, t), t && k(e);
        },
      };
    }
    function lo(t) {
      let e, n, r, i, o, s, l, c, h, u, d;
      function m() {
        return t[28](t[38]);
      }
      function p() {
        return t[29](t[38]);
      }
      return {
        c() {
          (e = S("g")),
            (n = S("foreignObject")),
            (r = Pa.createElementNS("http://www.w3.org/1999/xhtml", "div")),
            (i = Pa.createElementNS("http://www.w3.org/1999/xhtml", "button")),
            (o = z("+")),
            (s = Pa.createElementNS("http://www.w3.org/1999/xhtml", "button")),
            (l = z("-")),
            B(i, "class", "button-plus svelte-1lodyi5"),
            B(s, "class", "button-minus svelte-1lodyi5"),
            B(r, "xmlns", "http://www.w3.org/1999/xhtml"),
            B(r, "class", "button-container svelte-1lodyi5"),
            B(n, "x", 0),
            B(n, "y", t[11]),
            B(n, "width", (c = t[6] ? t[3] + 2 : t[3])),
            B(n, "height", "30"),
            B(e, "class", "nn-button-g"),
            B(
              e,
              "transform",
              (h = `translate(${t[9](t[38]) - t[3] / 2} ${t[8](t[1]) - t[11] / 2})`),
            );
        },
        m(t, a) {
          w(t, e, a),
            x(e, n),
            x(n, r),
            x(r, i),
            x(i, o),
            x(r, s),
            x(s, l),
            u || ((d = [N(i, "click", m), N(s, "click", p)]), (u = !0));
        },
        p(r, i) {
          (t = r),
            2048 & i[0] && B(n, "y", t[11]),
            72 & i[0] && c !== (c = t[6] ? t[3] + 2 : t[3]) && B(n, "width", c),
            2826 & i[0] &&
              h !==
                (h = `translate(${t[9](t[38]) - t[3] / 2} ${t[8](t[1]) - t[11] / 2})`) &&
              B(e, "transform", h);
        },
        d(t) {
          t && k(e), (u = !1), a(d);
        },
      };
    }
    function co(t) {
      let e,
        n = 0 !== t[38] && t[38] != t[5] - 1 && lo(t);
      return {
        c() {
          n && n.c(), (e = T());
        },
        m(t, r) {
          n && n.m(t, r), w(t, e, r);
        },
        p(t, r) {
          0 !== t[38] && t[38] != t[5] - 1
            ? n
              ? n.p(t, r)
              : ((n = lo(t)), n.c(), n.m(e.parentNode, e))
            : n && (n.d(1), (n = null));
        },
        d(t) {
          n && n.d(t), t && k(e);
        },
      };
    }
    function ho(t) {
      let e,
        n = t[21](t[4][t[38]], t[1]),
        r = [];
      for (let e = 0; e < n.length; e += 1) r[e] = co(Fa(t, n, e));
      return {
        c() {
          for (let t = 0; t < r.length; t += 1) r[t].c();
          e = T();
        },
        m(t, n) {
          for (let e = 0; e < r.length; e += 1) r[e].m(t, n);
          w(t, e, n);
        },
        p(t, i) {
          if (25168762 & i[0]) {
            let a;
            for (n = t[21](t[4][t[38]], t[1]), a = 0; a < n.length; a += 1) {
              const o = Fa(t, n, a);
              r[a]
                ? r[a].p(o, i)
                : ((r[a] = co(o)), r[a].c(), r[a].m(e.parentNode, e));
            }
            for (; a < r.length; a += 1) r[a].d(1);
            r.length = n.length;
          }
        },
        d(t) {
          $(r, t), t && k(e);
        },
      };
    }
    function uo(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g = t[13][t[5] - 1] + "";
      return (
        (s = new Qr({ props: { data: "sigmoid" } })),
        {
          c() {
            (e = S("g")),
              (n = S("rect")),
              xt(s.$$.fragment),
              (l = S("text")),
              (c = z(g)),
              B(n, "class", "nn-node output svelte-1lodyi5"),
              B(
                n,
                "width",
                (r = "sigmoid" == t[13][t[5] - 1] ? t[3] + t[10] : t[3]),
              ),
              B(n, "height", (i = t[11] * po)),
              B(l, "class", "nn-text svelte-1lodyi5"),
              B(l, "text-anchor", "middle"),
              B(l, "alignment-baseline", "middle"),
              B(
                l,
                "dx",
                (h =
                  "sigmoid" == t[13][t[5] - 1] ? (t[3] + t[10]) / 2 : t[3] / 2),
              ),
              B(l, "dy", (u = t[11] * po - 8)),
              B(e, "class", "nn-g svelte-1lodyi5"),
              B(
                e,
                "transform",
                (p = `translate(${t[9](t[5] - 1) - t[3] / 2} ${t[8](t[33]) - t[11] / 2})`),
              );
          },
          m(t, r) {
            w(t, e, r), x(e, n), vt(s, e, null), x(e, l), x(l, c), (f = !0);
          },
          p(t, a) {
            (!f ||
              (9256 & a[0] &&
                r !==
                  (r = "sigmoid" == t[13][t[5] - 1] ? t[3] + t[10] : t[3]))) &&
              B(n, "width", r),
              (!f || (2048 & a[0] && i !== (i = t[11] * po))) &&
                B(n, "height", i),
              (!f || 8224 & a[0]) && g !== (g = t[13][t[5] - 1] + "") && C(c, g),
              (!f ||
                (9256 & a[0] &&
                  h !==
                    (h =
                      "sigmoid" == t[13][t[5] - 1]
                        ? (t[3] + t[10]) / 2
                        : t[3] / 2))) &&
                B(l, "dx", h),
              (!f || (2048 & a[0] && u !== (u = t[11] * po - 8))) &&
                B(l, "dy", u),
              (!f ||
                (2874 & a[0] &&
                  p !==
                    (p = `translate(${t[9](t[5] - 1) - t[3] / 2} ${t[8](t[33]) - t[11] / 2})`))) &&
                B(e, "transform", p);
          },
          i(t) {
            f ||
              (t &&
                Q(() => {
                  o && o.end(1),
                    (a = pt(n, sr, { x: -50, duration: 500 })),
                    a.start();
                }),
              ut(s.$$.fragment, t),
              t &&
                Q(() => {
                  m && m.end(1),
                    (d = pt(l, sr, { x: -50, duration: 500 })),
                    d.start();
                }),
              (f = !0));
          },
          o(t) {
            a && a.invalidate(),
              t && (o = ft(n, or, { duration: 300 })),
              dt(s.$$.fragment, t),
              d && d.invalidate(),
              t && (m = ft(l, or, { duration: 300 })),
              (f = !1);
          },
          d(t) {
            t && k(e), t && o && o.end(), bt(s), t && m && m.end();
          },
        }
      );
    }
    function mo(t) {
      let e,
        n,
        r,
        i,
        a,
        o = t[12] && Za(t);
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            o && o.c(),
            B(n, "width", t[2]),
            B(n, "height", (r = t[0] + t[22].top + t[22].bottom)),
            B(n, "class", "svelte-1lodyi5"),
            B(e, "id", "network-chart-interactive"),
            B(e, "class", "svelte-1lodyi5"),
            Q(() => t[31].call(e));
        },
        m(r, s) {
          w(r, e, s),
            x(e, n),
            o && o.m(n, null),
            t[30](e),
            (i = I(e, t[31].bind(e))),
            (a = !0);
        },
        p(t, e) {
          t[12]
            ? o
              ? (o.p(t, e), 4096 & e[0] && ut(o, 1))
              : ((o = Za(t)), o.c(), ut(o, 1), o.m(n, null))
            : o &&
              (ct(),
              dt(o, 1, 1, () => {
                o = null;
              }),
              ht()),
            (!a || 4 & e[0]) && B(n, "width", t[2]),
            (!a || (1 & e[0] && r !== (r = t[0] + t[22].top + t[22].bottom))) &&
              B(n, "height", r);
        },
        i(t) {
          a || (ut(o), (a = !0));
        },
        o(t) {
          dt(o), (a = !1);
        },
        d(n) {
          n && k(e), o && o.d(), t[30](null), i();
        },
      };
    }
    const po = 1.4;
    function fo(t, e, n) {
      let r, i, a, o, s, l, u, d, m, p, f, g, y, x, v, b, w, k, $, M, S, z, A;
      c(t, me, (t) => n(16, (b = t))),
        c(t, oe, (t) => n(4, (w = t))),
        c(t, se, (t) => n(5, (k = t))),
        c(t, _t, (t) => n(6, ($ = t))),
        c(t, ce, (t) => n(7, (M = t))),
        c(t, ie, (t) => n(17, (S = t))),
        c(t, ae, (t) => n(18, (z = t))),
        c(t, re, (t) => n(19, (A = t)));
      const T = Jn("0.3f");
      const N = { top: 3, bottom: 3, left: 0, right: 0 };
      function B(t) {
        if (w[t] < 10) {
          let e = [...w];
          (e[t] += 1), h(oe, (w = [...e]), w), h(me, (b = !1), b), Oa();
        }
      }
      function C(t) {
        if (1 === w[t]) {
          if (k > 3) {
            const t = k - 2;
            let e = [...w];
            e.splice(t, 1), h(oe, (w = [...e]), w);
          }
          h(me, (b = !1), b), Oa();
        }
        if (w[t] > 1) {
          let e = [...w];
          (e[t] -= 1), h(oe, (w = [...e]), w), h(me, (b = !1), b), Oa();
        }
      }
      G(() => {
        n(12, (p = !0));
      });
      return (
        (t.$$.update = () => {
          64 & t.$$.dirty[0] && n(27, (r = $ ? 10 : 15)),
            64 & t.$$.dirty[0] && n(26, (i = $ ? 5 : 15)),
            64 & t.$$.dirty[0] && n(25, (a = $ ? 15 : 25)),
            134217728 & t.$$.dirty[0] &&
              n(15, (o = ar().domain([-1, 0, 1]).range([r, 0.2, r]))),
            100663424 & t.$$.dirty[0] &&
              n(
                14,
                (s = ar()
                  .domain(
                    (function (t, e) {
                      let n, r;
                      if (void 0 === e)
                        for (const e of t)
                          null != e &&
                            (void 0 === n
                              ? e >= e && (n = r = e)
                              : (n > e && (n = e), r < e && (r = e)));
                      else {
                        let i = -1;
                        for (let a of t)
                          null != (a = e(a, ++i, t)) &&
                            (void 0 === n
                              ? a >= a && (n = r = a)
                              : (n > a && (n = a), r < a && (r = a)));
                      }
                      return [n, r];
                    })(M, (t) => t.grad),
                  )
                  .range([i, a])),
              ),
            32 & t.$$.dirty[0] &&
              n(13, (l = ["X", ...Array(k - 2).fill("reLu"), "sigmoid"])),
            16 & t.$$.dirty[0] && n(1, (u = Ie(w) - 1)),
            64 & t.$$.dirty[0] && n(3, (f = $ ? 34 : 72)),
            64 & t.$$.dirty[0] && n(11, (g = $ ? 20 : 36)),
            64 & t.$$.dirty[0] && n(10, (y = $ ? 12 : 0)),
            108 & t.$$.dirty[0] &&
              n(
                9,
                (x = $
                  ? ar()
                      .domain([0, k])
                      .range([N.left + f / 2 + 4, m - N.right])
                  : ar()
                      .domain([-1, k])
                      .range([N.left, m - N.right])),
              ),
            3 & t.$$.dirty[0] &&
              n(
                8,
                (v = ar()
                  .domain([-1, u])
                  .range([d - N.bottom, N.top])),
              );
        }),
        n(0, (d = 500)),
        n(2, (m = 500)),
        n(12, (p = !0)),
        [
          d,
          u,
          m,
          f,
          w,
          k,
          $,
          M,
          v,
          x,
          y,
          g,
          p,
          l,
          s,
          o,
          b,
          S,
          z,
          A,
          T,
          function (t, e) {
            const n = (e - 1 - t + 1) / 2,
              r = [];
            for (let e = 0; e < t; e++) r.push(n + e);
            return r;
          },
          N,
          B,
          C,
          a,
          i,
          r,
          (t) => B(t),
          (t) => C(t),
          function (t) {
            X[t ? "unshift" : "push"](() => {
              (S = t), ie.set(S);
            });
          },
          function () {
            (m = this.offsetWidth), (d = this.offsetHeight), n(2, m), n(0, d);
          },
        ]
      );
    }
    class go extends $t {
      constructor(t) {
        super(), kt(this, t, fo, mo, s, {}, null, [-1, -1]);
      }
    }
    function yo(t, e, n) {
      const r = t.slice();
      return (r[16] = e[n]), r;
    }
    function xo(t, e, n) {
      const r = t.slice();
      return (r[16] = e[n]), (r[20] = n), r;
    }
    function vo(t, e, n) {
      const r = t.slice();
      return (r[21] = e[n]), r;
    }
    function bo(t, e, n) {
      const r = t.slice();
      return (r[21] = e[n]), r;
    }
    function wo(t) {
      let e,
        n,
        r,
        i,
        a = t[21] + "";
      return {
        c() {
          (e = S("g")),
            (n = S("text")),
            (r = z(a)),
            B(n, "class", "axis-text svelte-tf78ls"),
            B(n, "y", "10"),
            B(n, "text-anchor", "middle"),
            B(
              e,
              "transform",
              (i = `translate(${t[3](t[21])} ${t[4] - t[11].bottom})`),
            );
        },
        m(t, i) {
          w(t, e, i), x(e, n), x(n, r);
        },
        p(t, n) {
          8 & n && a !== (a = t[21] + "") && C(r, a),
            24 & n &&
              i !== (i = `translate(${t[3](t[21])} ${t[4] - t[11].bottom})`) &&
              B(e, "transform", i);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function ko(t) {
      let e,
        n = t[21] % 1 == 0 && wo(t);
      return {
        c() {
          n && n.c(), (e = T());
        },
        m(t, r) {
          n && n.m(t, r), w(t, e, r);
        },
        p(t, r) {
          t[21] % 1 == 0
            ? n
              ? n.p(t, r)
              : ((n = wo(t)), n.c(), n.m(e.parentNode, e))
            : n && (n.d(1), (n = null));
        },
        d(t) {
          n && n.d(t), t && k(e);
        },
      };
    }
    function $o(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s = t[21] + "";
      return {
        c() {
          (e = S("g")),
            (n = S("line")),
            (i = S("text")),
            (a = z(s)),
            B(n, "class", "axis-tick svelte-tf78ls"),
            B(n, "x1", 0),
            B(n, "x2", (r = t[5] - t[11].right - t[11].left)),
            B(n, "y1", "0"),
            B(n, "y2", "0"),
            B(n, "stroke", "var(--squidink)"),
            B(n, "stroke-dasharray", "4"),
            B(i, "class", "axis-text svelte-tf78ls"),
            B(i, "x", "-2"),
            B(i, "y", "0"),
            B(i, "text-anchor", "end"),
            B(i, "dominant-baseline", "middle"),
            B(
              e,
              "transform",
              (o = `translate(${t[11].left} ${t[2](t[21]) + 0})`),
            );
        },
        m(t, r) {
          w(t, e, r), x(e, n), x(e, i), x(i, a);
        },
        p(t, i) {
          32 & i && r !== (r = t[5] - t[11].right - t[11].left) && B(n, "x2", r),
            4 & i && s !== (s = t[21] + "") && C(a, s),
            4 & i &&
              o !== (o = `translate(${t[11].left} ${t[2](t[21]) + 0})`) &&
              B(e, "transform", o);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function Mo(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("path")),
            B(
              e,
              "d",
              (n = `M${t[3](t[6][t[10] - 1 + t[20]].x)},${t[2](t[6][t[10] - 1 + t[20]].y)} L${t[3](t[16].x)},${t[2](t[16].y)}`),
            ),
            B(e, "class", "svelte-tf78ls");
        },
        m(t, n) {
          w(t, e, n), (i = !0);
        },
        p(r, a) {
          (t = r),
            (!i ||
              (76 & a &&
                n !==
                  (n = `M${t[3](t[6][t[10] - 1 + t[20]].x)},${t[2](t[6][t[10] - 1 + t[20]].y)} L${t[3](t[16].x)},${t[2](t[16].y)}`))) &&
              B(e, "d", n);
        },
        i(n) {
          i ||
            (Q(() => {
              r || (r = gt(e, lr, { duration: 1e3 * t[9] * 2, delay: 0 }, !0)),
                r.run(1);
            }),
            (i = !0));
        },
        o(n) {
          r || (r = gt(e, lr, { duration: 1e3 * t[9] * 2, delay: 0 }, !1)),
            r.run(0),
            (i = !1);
        },
        d(t) {
          t && k(e), t && r && r.end();
        },
      };
    }
    function So(t) {
      let e, n, r, i, a;
      return {
        c() {
          (e = S("circle")),
            B(e, "cx", (n = t[3](t[16].x))),
            B(e, "cy", (r = t[2](t[16].y))),
            B(e, "class", "svelte-tf78ls");
        },
        m(t, n) {
          w(t, e, n), (a = !0);
        },
        p(i, o) {
          (t = i),
            (!a || (72 & o && n !== (n = t[3](t[16].x)))) && B(e, "cx", n),
            (!a || (68 & o && r !== (r = t[2](t[16].y)))) && B(e, "cy", r);
        },
        i(n) {
          a ||
            (Q(() => {
              i ||
                (i = gt(
                  e,
                  lr,
                  { duration: 200, delay: 1e3 * t[9] * 2 - 100 },
                  !0,
                )),
                i.run(1);
            }),
            (a = !0));
        },
        o(n) {
          i ||
            (i = gt(e, lr, { duration: 200, delay: 1e3 * t[9] * 2 - 100 }, !1)),
            i.run(0),
            (a = !1);
        },
        d(t) {
          t && k(e), t && i && i.end();
        },
      };
    }
    function zo(t) {
      let e, n, r;
      return {
        c() {
          (e = S("text")),
            (n = z("Accuracy (%)")),
            B(e, "class", "axis-label svelte-tf78ls"),
            B(e, "y", t[11].left / 2),
            B(e, "x", (r = -t[4] / 2)),
            B(e, "text-anchor", "middle"),
            B(e, "transform", "rotate(-90)");
        },
        m(t, r) {
          w(t, e, r), x(e, n);
        },
        p(t, n) {
          16 & n && r !== (r = -t[4] / 2) && B(e, "x", r);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function Ao(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        A,
        N,
        C = t[3].ticks(),
        q = [];
      for (let e = 0; e < C.length; e += 1) q[e] = ko(bo(t, C, e));
      let E = t[2].ticks(),
        L = [];
      for (let e = 0; e < E.length; e += 1) L[e] = $o(vo(t, E, e));
      let _ = t[6].slice(t[10]),
        R = [];
      for (let e = 0; e < _.length; e += 1) R[e] = Mo(xo(t, _, e));
      const O = (t) =>
        dt(R[t], 1, 1, () => {
          R[t] = null;
        });
      let P = t[6],
        H = [];
      for (let e = 0; e < P.length; e += 1) H[e] = So(yo(t, P, e));
      const D = (t) =>
        dt(H[t], 1, 1, () => {
          H[t] = null;
        });
      let F = !t[8] && zo(t);
      return {
        c() {
          (e = M("div")), (n = S("svg")), (r = S("line")), (s = S("line"));
          for (let t = 0; t < q.length; t += 1) q[t].c();
          c = T();
          for (let t = 0; t < L.length; t += 1) L[t].c();
          h = S("path");
          for (let t = 0; t < R.length; t += 1) R[t].c();
          d = T();
          for (let t = 0; t < H.length; t += 1) H[t].c();
          (m = S("text")),
            (p = z("Model Accuracy")),
            F && F.c(),
            (g = S("text")),
            (y = z("Epoch #")),
            B(r, "class", "axis-line svelte-tf78ls"),
            B(r, "x1", t[11].left),
            B(r, "x2", (i = t[5] - t[11].right)),
            B(r, "y1", (a = t[4] - t[11].bottom)),
            B(r, "y2", (o = t[4] - t[11].bottom)),
            B(s, "class", "axis-line svelte-tf78ls"),
            B(s, "x1", t[11].left),
            B(s, "x2", t[11].left),
            B(s, "y1", t[11].top),
            B(s, "y2", (l = t[4] - t[11].bottom)),
            B(h, "d", t[7]),
            B(h, "stroke-linecap", "round"),
            B(h, "stroke-linejoin", "round"),
            B(h, "class", "svelte-tf78ls"),
            B(m, "class", "chart-title svelte-tf78ls"),
            B(m, "y", t[11].top / 2),
            B(m, "x", (f = (t[5] + t[11].left) / 2)),
            B(m, "text-anchor", "middle"),
            B(g, "class", "axis-label svelte-tf78ls"),
            B(g, "y", (v = t[4] + t[11].bottom + 11)),
            B(g, "x", (b = (t[5] + t[11].left) / 2)),
            B(g, "text-anchor", "middle"),
            B(n, "width", t[1]),
            B(n, "height", t[0]),
            B(e, "id", "stackedrect-holder"),
            B(e, "class", "svelte-tf78ls"),
            Q(() => t[12].call(e));
        },
        m(i, a) {
          w(i, e, a), x(e, n), x(n, r), x(n, s);
          for (let t = 0; t < q.length; t += 1) q[t].m(n, null);
          x(n, c);
          for (let t = 0; t < L.length; t += 1) L[t].m(n, null);
          x(n, h);
          for (let t = 0; t < R.length; t += 1) R[t].m(n, null);
          x(n, d);
          for (let t = 0; t < H.length; t += 1) H[t].m(n, null);
          x(n, m),
            x(m, p),
            F && F.m(n, null),
            x(n, g),
            x(g, y),
            (A = I(e, t[12].bind(e))),
            (N = !0);
        },
        p(e, [u]) {
          if (
            ((t = e),
            (!N || (32 & u && i !== (i = t[5] - t[11].right))) && B(r, "x2", i),
            (!N || (16 & u && a !== (a = t[4] - t[11].bottom))) && B(r, "y1", a),
            (!N || (16 & u && o !== (o = t[4] - t[11].bottom))) && B(r, "y2", o),
            (!N || (16 & u && l !== (l = t[4] - t[11].bottom))) && B(s, "y2", l),
            2072 & u)
          ) {
            let e;
            for (C = t[3].ticks(), e = 0; e < C.length; e += 1) {
              const r = bo(t, C, e);
              q[e] ? q[e].p(r, u) : ((q[e] = ko(r)), q[e].c(), q[e].m(n, c));
            }
            for (; e < q.length; e += 1) q[e].d(1);
            q.length = C.length;
          }
          if (2084 & u) {
            let e;
            for (E = t[2].ticks(), e = 0; e < E.length; e += 1) {
              const r = vo(t, E, e);
              L[e] ? L[e].p(r, u) : ((L[e] = $o(r)), L[e].c(), L[e].m(n, h));
            }
            for (; e < L.length; e += 1) L[e].d(1);
            L.length = E.length;
          }
          if (((!N || 128 & u) && B(h, "d", t[7]), 1612 & u)) {
            let e;
            for (_ = t[6].slice(t[10]), e = 0; e < _.length; e += 1) {
              const r = xo(t, _, e);
              R[e]
                ? (R[e].p(r, u), ut(R[e], 1))
                : ((R[e] = Mo(r)), R[e].c(), ut(R[e], 1), R[e].m(n, d));
            }
            for (ct(), e = _.length; e < R.length; e += 1) O(e);
            ht();
          }
          if (588 & u) {
            let e;
            for (P = t[6], e = 0; e < P.length; e += 1) {
              const r = yo(t, P, e);
              H[e]
                ? (H[e].p(r, u), ut(H[e], 1))
                : ((H[e] = So(r)), H[e].c(), ut(H[e], 1), H[e].m(n, m));
            }
            for (ct(), e = P.length; e < H.length; e += 1) D(e);
            ht();
          }
          (!N || (32 & u && f !== (f = (t[5] + t[11].left) / 2))) && B(m, "x", f),
            t[8]
              ? F && (F.d(1), (F = null))
              : F
                ? F.p(t, u)
                : ((F = zo(t)), F.c(), F.m(n, g)),
            (!N || (16 & u && v !== (v = t[4] + t[11].bottom + 11))) &&
              B(g, "y", v),
            (!N || (32 & u && b !== (b = (t[5] + t[11].left) / 2))) &&
              B(g, "x", b),
            (!N || 2 & u) && B(n, "width", t[1]),
            (!N || 1 & u) && B(n, "height", t[0]);
        },
        i(e) {
          if (!N) {
            Q(() => {
              u ||
                (u = gt(
                  h,
                  lr,
                  { duration: 300 * t[6].length, delay: 300, easing: Nt },
                  !0,
                )),
                u.run(1);
            });
            for (let t = 0; t < _.length; t += 1) ut(R[t]);
            for (let t = 0; t < P.length; t += 1) ut(H[t]);
            N = !0;
          }
        },
        o(e) {
          u ||
            (u = gt(
              h,
              lr,
              { duration: 300 * t[6].length, delay: 300, easing: Nt },
              !1,
            )),
            u.run(0),
            (R = R.filter(Boolean));
          for (let t = 0; t < R.length; t += 1) dt(R[t]);
          H = H.filter(Boolean);
          for (let t = 0; t < H.length; t += 1) dt(H[t]);
          N = !1;
        },
        d(t) {
          t && k(e),
            $(q, t),
            $(L, t),
            t && u && u.end(),
            $(R, t),
            $(H, t),
            F && F.d(),
            A();
        },
      };
    }
    function To(t, e, n) {
      let r, i, a, o, s, l, h, u;
      c(t, le, (t) => n(6, (l = t))),
        c(t, _t, (t) => n(8, (h = t))),
        c(t, re, (t) => n(9, (u = t)));
      const d = l.length;
      let m = 300,
        p = 300,
        f = h
          ? { top: 25, bottom: 5, left: 20, right: 0 }
          : { top: 25, bottom: 5, left: 55, right: 0 };
      return (
        Jn(".0%"),
        (t.$$.update = () => {
          2 & t.$$.dirty && n(5, (r = p - f.left - f.right)),
            1 & t.$$.dirty && n(4, (i = m - f.top - f.bottom)),
            96 & t.$$.dirty &&
              n(
                3,
                (a = ar()
                  .rangeRound([f.left, r - f.right])
                  .domain([
                    0,
                    1.5 * Ie(l, (t) => t.x) < 5 ? 5 : 1.1 * Ie(l, (t) => t.x),
                  ])),
              ),
            16 & t.$$.dirty &&
              n(
                2,
                (o = ar()
                  .rangeRound([i - f.bottom, f.top])
                  .domain([0, 100])),
              ),
            76 & t.$$.dirty &&
              n(
                7,
                (s = `M${a(l[0].x)},${o(l[0].y)}\n\t${l
                  .slice(1, d)
                  .map((t) => `L${a(t.x)},${o(t.y)}`)
                  .join(" ")}`),
              );
        }),
        [
          m,
          p,
          o,
          a,
          i,
          r,
          l,
          s,
          h,
          u,
          d,
          f,
          function () {
            (p = this.offsetWidth), (m = this.offsetHeight), n(1, p), n(0, m);
          },
        ]
      );
    }
    class No extends $t {
      constructor(t) {
        super(), kt(this, t, To, Ao, s, {});
      }
    }
    function Bo(t, e, n) {
      const r = t.slice();
      return (r[15] = e[n]), r;
    }
    function Co(t, e, n) {
      const r = t.slice();
      return (r[18] = e[n]), (r[20] = n), r;
    }
    function qo(t) {
      let e, n, r, i, a, o, s;
      return {
        c() {
          (e = S("path")),
            B(e, "class", "hex-cell svelte-1dd8f3i"),
            B(e, "d", (n = `M${t[18].x},${t[18].y}${t[5].hexagon()}`)),
            B(e, "fill", (r = t[11](t[9][t[20]]))),
            B(e, "stroke", (i = t[11](t[9][t[20]])));
        },
        m(t, n) {
          w(t, e, n), (s = !0);
        },
        p(t, a) {
          (!s ||
            (32 & a && n !== (n = `M${t[18].x},${t[18].y}${t[5].hexagon()}`))) &&
            B(e, "d", n),
            (!s || (512 & a && r !== (r = t[11](t[9][t[20]])))) &&
              B(e, "fill", r),
            (!s || (512 & a && i !== (i = t[11](t[9][t[20]])))) &&
              B(e, "stroke", i);
        },
        i(t) {
          s ||
            (Q(() => {
              o && o.end(1), (a = pt(e, lr, { duration: 500 })), a.start();
            }),
            (s = !0));
        },
        o(t) {
          a && a.invalidate(), (o = ft(e, lr, { duration: 0 })), (s = !1);
        },
        d(t) {
          t && k(e), t && o && o.end();
        },
      };
    }
    function Eo(t) {
      let e, n, r, i, a, o;
      return {
        c() {
          (e = S("circle")),
            B(e, "cx", (n = t[4](t[15].x1))),
            B(e, "cy", (r = t[3](t[15].x2))),
            B(e, "r", (i = t[8] ? 3 : 5)),
            B(e, "stroke-width", (a = t[8] ? 1 : 2)),
            B(e, "fill", (o = t[11](t[15].y))),
            B(e, "class", "svelte-1dd8f3i");
        },
        m(t, n) {
          w(t, e, n);
        },
        p(t, s) {
          17 & s && n !== (n = t[4](t[15].x1)) && B(e, "cx", n),
            9 & s && r !== (r = t[3](t[15].x2)) && B(e, "cy", r),
            256 & s && i !== (i = t[8] ? 3 : 5) && B(e, "r", i),
            256 & s && a !== (a = t[8] ? 1 : 2) && B(e, "stroke-width", a),
            1 & s && o !== (o = t[11](t[15].y)) && B(e, "fill", o);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function Lo(t) {
      let e,
        n,
        r,
        i,
        a,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m = t[5](t[5].centers()),
        p = [];
      for (let e = 0; e < m.length; e += 1) p[e] = qo(Co(t, m, e));
      const f = (t) =>
        dt(p[t], 1, 1, () => {
          p[t] = null;
        });
      let g = t[0],
        y = [];
      for (let e = 0; e < g.length; e += 1) y[e] = Eo(Bo(t, g, e));
      return {
        c() {
          (e = M("div")),
            (n = S("svg")),
            (r = S("clipPath")),
            (i = S("rect")),
            (s = S("g"));
          for (let t = 0; t < p.length; t += 1) p[t].c();
          for (let t = 0; t < y.length; t += 1) y[t].c();
          (l = S("text")),
            (c = z("Classification Task")),
            B(i, "width", (a = t[7] - t[10].left - t[10].right)),
            B(i, "height", (o = t[6] - t[10].top - t[10].bottom)),
            B(r, "id", "clip-nn"),
            B(s, "clip-path", "url(#clip-nn)"),
            B(s, "transform", `translate(${t[10].left} ${t[10].top})`),
            B(l, "class", "chart-title svelte-1dd8f3i"),
            B(l, "y", t[10].top / 2 + 5),
            B(l, "x", (h = (t[7] + t[10].left) / 2)),
            B(l, "text-anchor", "middle"),
            B(n, "width", t[2]),
            B(n, "height", t[1]),
            B(e, "id", "nn-prediction-container"),
            B(e, "class", "svelte-1dd8f3i"),
            Q(() => t[13].call(e));
        },
        m(a, o) {
          w(a, e, o), x(e, n), x(n, r), x(r, i), x(n, s);
          for (let t = 0; t < p.length; t += 1) p[t].m(s, null);
          for (let t = 0; t < y.length; t += 1) y[t].m(n, null);
          x(n, l), x(l, c), (u = I(e, t[13].bind(e))), (d = !0);
        },
        p(t, [e]) {
          if (
            ((!d || (128 & e && a !== (a = t[7] - t[10].left - t[10].right))) &&
              B(i, "width", a),
            (!d || (64 & e && o !== (o = t[6] - t[10].top - t[10].bottom))) &&
              B(i, "height", o),
            2592 & e)
          ) {
            let n;
            for (m = t[5](t[5].centers()), n = 0; n < m.length; n += 1) {
              const r = Co(t, m, n);
              p[n]
                ? (p[n].p(r, e), ut(p[n], 1))
                : ((p[n] = qo(r)), p[n].c(), ut(p[n], 1), p[n].m(s, null));
            }
            for (ct(), n = m.length; n < p.length; n += 1) f(n);
            ht();
          }
          if (2329 & e) {
            let r;
            for (g = t[0], r = 0; r < g.length; r += 1) {
              const i = Bo(t, g, r);
              y[r] ? y[r].p(i, e) : ((y[r] = Eo(i)), y[r].c(), y[r].m(n, l));
            }
            for (; r < y.length; r += 1) y[r].d(1);
            y.length = g.length;
          }
          (!d || (128 & e && h !== (h = (t[7] + t[10].left) / 2))) &&
            B(l, "x", h),
            (!d || 4 & e) && B(n, "width", t[2]),
            (!d || 2 & e) && B(n, "height", t[1]);
        },
        i(t) {
          if (!d) {
            for (let t = 0; t < m.length; t += 1) ut(p[t]);
            d = !0;
          }
        },
        o(t) {
          p = p.filter(Boolean);
          for (let t = 0; t < p.length; t += 1) dt(p[t]);
          d = !1;
        },
        d(t) {
          t && k(e), $(p, t), $(y, t), u();
        },
      };
    }
    function _o(t, e, n) {
      let r, i, a, o, s, l, u, d, m;
      c(t, ue, (t) => n(14, (u = t))),
        c(t, _t, (t) => n(8, (d = t))),
        c(t, he, (t) => n(9, (m = t)));
      let { data: p = pr } = e,
        f = 300,
        g = 300,
        y = d
          ? { top: 25, bottom: 0, left: 0, right: 0 }
          : { top: 25, bottom: 5, left: 20, right: 0 };
      const x = He().domain([-1, 1]).range(["#f46ebb", "#2074d5"]);
      return (
        (t.$$set = (t) => {
          "data" in t && n(0, (p = t.data));
        }),
        (t.$$.update = () => {
          4 & t.$$.dirty && n(7, (r = g - y.left - y.right)),
            2 & t.$$.dirty && n(6, (i = f - y.top - y.bottom)),
            129 & t.$$.dirty &&
              n(
                4,
                (a = ar()
                  .domain([
                    1.1 * Re(p.map((t) => t.x1)),
                    1.1 * Ie(p.map((t) => t.x1)),
                  ])
                  .range([y.left, r - y.right])),
              ),
            65 & t.$$.dirty &&
              n(
                3,
                (o = ar()
                  .domain([
                    1.1 * Re(p.map((t) => t.x2)),
                    1.1 * Ie(p.map((t) => t.x2)),
                  ])
                  .range([i - y.bottom, y.top])),
              ),
            192 & t.$$.dirty &&
              n(
                5,
                (s = mr()
                  .radius(6)
                  .extent([
                    [0, 0],
                    [r - y.left - y.right, i - y.top - y.bottom],
                  ])),
              ),
            56 & t.$$.dirty &&
              n(
                12,
                (l = s(s.centers()).map((t) => [
                  a.invert(t.x + y.left),
                  o.invert(t.y + y.top),
                ])),
              ),
            4096 & t.$$.dirty && h(ue, (u = [...l]), u);
        }),
        [
          p,
          f,
          g,
          o,
          a,
          s,
          i,
          r,
          d,
          m,
          y,
          x,
          l,
          function () {
            (g = this.offsetWidth), (f = this.offsetHeight), n(2, g), n(1, f);
          },
        ]
      );
    }
    class Io extends $t {
      constructor(t) {
        super(), kt(this, t, _o, Lo, s, { data: 0 });
      }
    }
    function Ro(t, e, n) {
      const r = t.slice();
      return (r[11] = e[n]), r;
    }
    function Oo(t) {
      let e, n, r, i;
      return {
        c() {
          (e = S("circle")),
            B(e, "cx", (n = t[5](t[11].x1))),
            B(e, "cy", (r = t[4](t[11].x2))),
            B(e, "r", "2.2"),
            B(e, "fill", (i = t[7](t[11].y))),
            B(e, "class", "svelte-1xm44za");
        },
        m(t, n) {
          w(t, e, n);
        },
        p(t, a) {
          33 & a && n !== (n = t[5](t[11].x1)) && B(e, "cx", n),
            17 & a && r !== (r = t[4](t[11].x2)) && B(e, "cy", r),
            1 & a && i !== (i = t[7](t[11].y)) && B(e, "fill", i);
        },
        d(t) {
          t && k(e);
        },
      };
    }
    function Po(e) {
      let n,
        r,
        i,
        a,
        o,
        s,
        l = e[0],
        c = [];
      for (let t = 0; t < l.length; t += 1) c[t] = Oo(Ro(e, l, t));
      return {
        c() {
          (n = M("div")), (r = S("svg"));
          for (let t = 0; t < c.length; t += 1) c[t].c();
          (i = S("text")),
            (a = z("Classification Task")),
            B(i, "class", "chart-title svelte-1xm44za"),
            B(i, "y", e[6].top / 2),
            B(i, "x", (o = (e[3] + e[6].left) / 2)),
            B(i, "text-anchor", "middle"),
            B(r, "width", e[2]),
            B(r, "height", e[1]),
            B(n, "id", "dataset-icon-container"),
            B(n, "class", "svelte-1xm44za"),
            Q(() => e[9].call(n));
        },
        m(t, o) {
          w(t, n, o), x(n, r);
          for (let t = 0; t < c.length; t += 1) c[t].m(r, null);
          x(r, i), x(i, a), (s = I(n, e[9].bind(n)));
        },
        p(t, [e]) {
          if (177 & e) {
            let n;
            for (l = t[0], n = 0; n < l.length; n += 1) {
              const a = Ro(t, l, n);
              c[n] ? c[n].p(a, e) : ((c[n] = Oo(a)), c[n].c(), c[n].m(r, i));
            }
            for (; n < c.length; n += 1) c[n].d(1);
            c.length = l.length;
          }
          8 & e && o !== (o = (t[3] + t[6].left) / 2) && B(i, "x", o),
            4 & e && B(r, "width", t[2]),
            2 & e && B(r, "height", t[1]);
        },
        i: t,
        o: t,
        d(t) {
          t && k(n), $(c, t), s();
        },
      };
    }
    function Ho(t, e, n) {
      let r,
        i,
        a,
        o,
        { data: s } = e,
        l = 300,
        c = 300,
        h = { top: 0, bottom: 0, left: 0, right: 0 };
      Jn(".0%");
      const u = He().domain([-1, 1]).range(["#f46ebb", "#2074d5"]);
      return (
        (t.$$set = (t) => {
          "data" in t && n(0, (s = t.data));
        }),
        (t.$$.update = () => {
          4 & t.$$.dirty && n(3, (r = c - h.left - h.right)),
            2 & t.$$.dirty && n(8, (i = l - h.top - h.bottom)),
            9 & t.$$.dirty &&
              n(
                5,
                (a = ar()
                  .domain([
                    1.1 * Re(s.map((t) => t.x1)),
                    1.1 * Ie(s.map((t) => t.x1)),
                  ])
                  .range([h.left, r - h.right])),
              ),
            257 & t.$$.dirty &&
              n(
                4,
                (o = ar()
                  .domain([
                    1.1 * Re(s.map((t) => t.x2)),
                    1.1 * Ie(s.map((t) => t.x2)),
                  ])
                  .range([i - h.bottom, h.top])),
              );
        }),
        [
          s,
          l,
          c,
          r,
          o,
          a,
          h,
          u,
          i,
          function () {
            (c = this.offsetWidth), (l = this.offsetHeight), n(2, c), n(1, l);
          },
        ]
      );
    }
    class Do extends $t {
      constructor(t) {
        super(), kt(this, t, Ho, Po, s, { data: 0 });
      }
    }
    function Fo(t, e, n) {
      const r = t.slice();
      return (r[5] = e[n]), (r[7] = n), r;
    }
    function jo(t) {
      let e, n, r, i, o, s;
      function l() {
        return t[2](t[5], t[7]);
      }
      function c() {
        return t[3](t[5], t[7]);
      }
      return (
        (n = new Do({ props: { data: t[5] } })),
        {
          c() {
            (e = M("div")),
              xt(n.$$.fragment),
              (r = A()),
              B(e, "class", "dataset-icon svelte-iwo1t2"),
              R(e, "selected", t[0] == t[7]);
          },
          m(t, a) {
            w(t, e, a),
              vt(n, e, null),
              x(e, r),
              (i = !0),
              o || ((s = [N(e, "click", l), N(e, "keydown", c)]), (o = !0));
          },
          p(n, r) {
            (t = n), (!i || 1 & r) && R(e, "selected", t[0] == t[7]);
          },
          i(t) {
            i || (ut(n.$$.fragment, t), (i = !0));
          },
          o(t) {
            dt(n.$$.fragment, t), (i = !1);
          },
          d(t) {
            t && k(e), bt(n), (o = !1), a(s);
          },
        }
      );
    }
    function Vo(t) {
      let e,
        n,
        r = [pr, fr, gr],
        i = [];
      for (let e = 0; e < 3; e += 1) i[e] = jo(Fo(t, r, e));
      const a = (t) =>
        dt(i[t], 1, 1, () => {
          i[t] = null;
        });
      return {
        c() {
          e = M("div");
          for (let t = 0; t < 3; t += 1) i[t].c();
          B(e, "class", "dataset-icons svelte-iwo1t2");
        },
        m(t, r) {
          w(t, e, r);
          for (let t = 0; t < 3; t += 1) i[t].m(e, null);
          n = !0;
        },
        p(t, [n]) {
          if (3 & n) {
            let o;
            for (r = [pr, fr, gr], o = 0; o < 3; o += 1) {
              const a = Fo(t, r, o);
              i[o]
                ? (i[o].p(a, n), ut(i[o], 1))
                : ((i[o] = jo(a)), i[o].c(), ut(i[o], 1), i[o].m(e, null));
            }
            for (ct(), o = 3; o < 3; o += 1) a(o);
            ht();
          }
        },
        i(t) {
          if (!n) {
            for (let t = 0; t < 3; t += 1) ut(i[t]);
            n = !0;
          }
        },
        o(t) {
          i = i.filter(Boolean);
          for (let t = 0; t < 3; t += 1) dt(i[t]);
          n = !1;
        },
        d(t) {
          t && k(e), $(i, t);
        },
      };
    }
    function Uo(t, e, n) {
      let r;
      function i(t, e) {
        n(0, (a = e)), h(de, (r = t), r);
      }
      c(t, de, (t) => n(4, (r = t)));
      let a = 0;
      return [a, i, (t, e) => i(t, e), (t, e) => i(t, e)];
    }
    class Go extends $t {
      constructor(t) {
        super(), kt(this, t, Uo, Vo, s, {});
      }
    }
    function Wo(e) {
      let n,
        r,
        i,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f = e[0] - 2 + "";
      return {
        c() {
          (n = M("div")),
            (r = M("div")),
            (i = M("p")),
            (o = z("# Hidden Layers: ")),
            (s = z(f)),
            (l = A()),
            (c = M("div")),
            (h = M("button")),
            (h.textContent = "+"),
            (u = A()),
            (d = M("button")),
            (d.textContent = "-"),
            B(h, "class", "svelte-y2egf6"),
            B(d, "class", "svelte-y2egf6"),
            B(c, "class", "button-container svelte-y2egf6"),
            B(n, "id", "layer-controls"),
            B(n, "class", "svelte-y2egf6");
        },
        m(t, a) {
          w(t, n, a),
            x(n, r),
            x(r, i),
            x(i, o),
            x(i, s),
            x(r, l),
            x(r, c),
            x(c, h),
            x(c, u),
            x(c, d),
            m || ((p = [N(h, "click", e[1]), N(d, "click", e[2])]), (m = !0));
        },
        p(t, [e]) {
          1 & e && f !== (f = t[0] - 2 + "") && C(s, f);
        },
        i: t,
        o: t,
        d(t) {
          t && k(n), (m = !1), a(p);
        },
      };
    }
    function Xo(t, e, n) {
      let r, i, a;
      return (
        c(t, me, (t) => n(3, (r = t))),
        c(t, oe, (t) => n(4, (i = t))),
        c(t, se, (t) => n(0, (a = t))),
        [
          a,
          function () {
            if (a < 6) {
              let t = [...i];
              t.splice(-1, 0, 1),
                h(oe, (i = [...t]), i),
                Oa(),
                h(me, (r = !1), r);
            }
          },
          function () {
            if (a > 3) {
              const t = a - 2;
              let e = [...i];
              e.splice(t, 1), h(oe, (i = [...e]), i), Oa(), h(me, (r = !1), r);
            }
          },
        ]
      );
    }
    class Yo extends $t {
      constructor(t) {
        super(), kt(this, t, Xo, Wo, s, {});
      }
    }
    function Zo(t, e) {
      return Array.from(Array(e - t).keys()).map((e) => t + e);
    }
    const Ko = (t) => (((t) => "number" == typeof t)(t) ? new Jo(t) : t);
    class Jo {
      constructor(t, e = [], n = "w", r = "") {
        (this.data = t),
          (this.children = e),
          (this.op = r),
          (this.param = n),
          (this._backward = function () {
            return null;
          }),
          (this.grad = 0);
      }
      add(t) {
        const e = this,
          n = Ko(t),
          r = new Jo(this.data + n.data, [this, n], "+");
        return (
          (r._backward = function () {
            (e.grad += r.grad), (n.grad += r.grad);
          }),
          r
        );
      }
      mul(t) {
        const e = Ko(t),
          n = this,
          r = new Jo(this.data * e.data, [this, e], "*");
        return (
          (r._backward = function () {
            (n.grad += e.data * r.grad), (e.grad += n.data * r.grad);
          }),
          r
        );
      }
      pow(t) {
        const e = t,
          n = this,
          r = new Jo(Math.pow(this.data, e), [this], "**" + e.toString());
        return (
          (r._backward = function () {
            n.grad += e * Math.pow(n.data, e - 1) * r.grad;
          }),
          r
        );
      }
      relu() {
        const t = this,
          e = new Jo(this.data < 0 ? 0 : this.data, [this], "ReLU");
        return (
          (e._backward = function () {
            t.grad += (e.data > 0 ? 1 : 0) * e.grad;
          }),
          e
        );
      }
      backward() {
        const t = [],
          e = new Set(),
          n = function (r) {
            if (!e.has(r)) {
              e.add(r);
              for (const t of r.children) n(t);
              t.push(r);
            }
          };
        n(this),
          (this.grad = 1),
          t
            .slice()
            .reverse()
            .forEach(function (t) {
              t._backward();
            });
      }
      toString() {
        return `Value(data=${this.data}, grad=${this.grad}, op=${this.op})`;
      }
    }
    class Qo {
      parameters() {
        return [];
      }
      call_value_(t) {
        return [new Jo(0)];
      }
      call_number_(t) {
        const e = Array.from(Zo(0, t.length), (e) => Ko(t[e]));
        return this.call_value_(e);
      }
      call(t) {
        return "number" == typeof t[0]
          ? this.call_number_(t)
          : this.call_value_(t);
      }
      zero_grad() {
        this.parameters().forEach(function (t) {
          t.grad = 0;
        });
      }
    }
    class ts extends Qo {
      constructor(t, e = !0) {
        super(),
          (this.w = Array.from(Zo(0, t), (t) => new Jo(2 * Math.random() - 1))),
          (this.b = new Jo(0)),
          (this.b.param = "b"),
          (this.nonlin = e);
      }
      call_value_(t) {
        if (t.length != this.w.length) throw new Error("Different sizes");
        const e = this.w
          .map(function (e, n) {
            return e.mul(t[n]);
          })
          .reduce((t, e) => t.add(e), new Jo(0))
          .add(this.b);
        return this.nonlin ? [e.relu()] : [e];
      }
      parameters() {
        return this.w.concat([this.b]);
      }
      toString() {
        return "${this.nonlin? 'ReLU': 'Linear'}Neuron(${this.w.length})";
      }
    }
    class es extends Qo {
      constructor(t, e, n = !0) {
        super(), (this.neurons = Array.from(Zo(0, e), (e) => new ts(t, n)));
      }
      call_value_(t) {
        return Array.from(this.neurons, (e) => e.call(t)[0]);
      }
      parameters() {
        const t = [];
        for (const e of this.neurons) for (const n of e.parameters()) t.push(n);
        return t;
      }
      toString() {
        return "Layer of";
      }
    }
    class ns extends Qo {
      constructor(t, e) {
        super();
        const n = [t].concat(e);
        this.layers = Array.from(
          e.keys(),
          (t) => new es(n[t], n[t + 1], t != e.length - 1),
        );
      }
      call_value_(t) {
        let e = this.layers[0].call(t);
        for (let t = 1; t < this.layers.length; t++) e = this.layers[t].call(e);
        return e;
      }
      parameters() {
        const t = [];
        for (const e of this.layers) for (const n of e.parameters()) t.push(n);
        return t;
      }
      save() {
        return this;
      }
    }
    function rs(t) {
      let e,
        n,
        r,
        i,
        o,
        s,
        l,
        c,
        h,
        u,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $,
        S,
        T,
        C,
        E,
        L,
        _,
        I,
        O,
        P,
        H,
        D,
        F,
        j,
        V,
        U,
        G,
        W,
        X,
        Y,
        Z,
        K,
        J,
        Q,
        tt,
        et,
        nt,
        rt,
        it,
        at,
        ot,
        st,
        lt,
        ct,
        ht,
        mt,
        pt;
      return (
        (E = new Yo({})),
        (_ = new go({})),
        (K = new Go({})),
        (tt = new Io({ props: { data: t[0], nnModel: t[2] } })),
        (rt = new No({})),
        {
          c() {
            (e = M("br")),
              (n = M("br")),
              (r = M("br")),
              (i = A()),
              (o = M("div")),
              (s = M("br")),
              (l = A()),
              (c = M("h3")),
              (c.textContent = "Pruébalo tú mismo"),
              (h = A()),
              (u = M("hr")),
              (d = A()),
              (m = M("p")),
              (m.innerHTML =
              'Como dicen, ¡las palabras se las lleva el viento! Así que entrenemos nuestra propia Red Neuronal.\n    <br/><br/>\n   A continuación mostramos la arquitectura de una Red Neuronal feed-forward totalmente interactiva.\n    Seleccionando los botones <span class="box">+</span> y\n    <span class="box">-</span>\n    puedes hacer la red más ancha, más profunda o ambas. En el lado derecho,\n    selecciona entre tres conjuntos de datos únicos de clasificación para que la red los clasifique.\n    La precisión de la red en cada época se muestra debajo de las predicciones\n    de la red - ¡esperamos que la precisión aumente cada vez que entrenes!\n    <br/><br/>\n    Para entrenar el modelo, usamos el descenso de gradiente por lotes: cada elemento en nuestros datos\n    de entrenamiento (los círculos azules y rosas) se procesa mediante una pasada hacia adelante (⬤),\n    se calcula el error, y los pesos se ajustan mediante retropropagación\n    (<span class="red svelte-f5oxbd">⬤</span>). Esto ocurre cada vez que haces clic en\n    <span class="bold">Ejecutar 1 Época</span>.\n    <br/><br/>\n    ¡Incluso para problemas de clasificación simples como estos, las redes neuronales pueden ser difíciles\n    de entrenar! Si la precisión de tu red no mejora después de algunas épocas, intenta reinicializar\n    los pesos haciendo clic en\n    <span class="bold">Reiniciar Pesos</span>, o intenta cambiar la arquitectura\n    de la red.'),
              (p = A()),
              (f = M("br")),
              (g = M("br")),
              (y = A()),
              (v = M("section")),
              (b = M("div")),
              (b.innerHTML =
              '<div id="architecture-input" class="svelte-f5oxbd"><div></div></div>'),
              ($ = A()),
              (S = M("div")),
              (T = M("div")),
              (C = M("div")),
              xt(E.$$.fragment),
              (L = A()),
              xt(_.$$.fragment),
              (I = A()),
              (O = M("div")),
              (P = M("div")),
              (H = M("button")),
              (D = z("Ejecutar 1 Época")),
              (F = A()),
              (j = M("button")),
              (V = z("Reiniciar Pesos")),
              (U = A()),
              (G = M("div")),
              (W = z("Duración de la Animación:\n                ")),
              (X = M("input")),
              (Y = A()),
              (Z = M("div")),
              xt(K.$$.fragment),
              (J = A()),
              (Q = M("div")),
              xt(tt.$$.fragment),
              (et = A()),
              (nt = M("div")),
              xt(rt.$$.fragment),
              (it = A()),
              (at = M("p")),
              (at.textContent =
              "¿Qué tal te fue? Para estos problemas específicos, puede que hayas descubierto que las redes\n    más anchas funcionan mejor que las redes más profundas. Esto se debe a que las redes más anchas\n    pueden crear límites de decisión más complejos, que pueden capturar mejor los\n    patrones intrincados en los conjuntos de datos de espiral y luna."),
              (ot = A()),
              (st = M("br")),
              (lt = A()),
              (ct = M("p")),
              (ct.innerHTML =
              'También habrás notado que la red neuronal no siempre parece <i>aprender</i>. Esto puede ocurrir por varias razones, incluyendo una inicialización inadecuada de los pesos,\n    una tasa de aprendizaje subóptima, o incluso un número insuficiente\n    de épocas de entrenamiento. En algunos casos, la arquitectura de la red en sí misma podría no\n    ser adecuada para la complejidad de los datos en cuestión.\n    <br/><br/>\n    En cualquier caso, la conclusión clave es simple:\n    <span class="bold">¡entrenar redes neuronales no es fácil!</span> Incluso para conjuntos de datos\n    pequeños y relativamente simples como los mostrados aquí, entrenar una red neuronal\n    puede requerir cuidado y destreza.'),
              B(c, "class", "body-header"),
              B(m, "class", "body-text"),
              B(b, "id", "top-controls"),
              B(b, "class", "svelte-f5oxbd"),
              (H.disabled = t[1]),
              B(H, "class", "svelte-f5oxbd"),
              R(H, "active", t[4]),
              (j.disabled = t[1]),
              B(j, "class", "svelte-f5oxbd"),
              R(j, "active", t[4]),
              (X.disabled = t[1]),
              B(X, "class", "input-duration svelte-f5oxbd"),
              B(X, "type", "range"),
              B(X, "min", "0.01"),
              B(X, "max", "2"),
              B(X, "step", "0.05"),
              B(G, "id", "animation-duration-input"),
              B(G, "class", "svelte-f5oxbd"),
              B(P, "id", "play-button"),
              B(P, "class", "svelte-f5oxbd"),
              B(O, "id", "animation-controls"),
              B(O, "class", "svelte-f5oxbd"),
              B(C, "id", "left"),
              B(C, "class", "svelte-f5oxbd"),
              B(T, "class", "network-plot svelte-f5oxbd"),
              B(Q, "id", "scatter-plot"),
              B(Q, "class", "svelte-f5oxbd"),
              B(nt, "id", "error-plot"),
              B(nt, "class", "svelte-f5oxbd"),
              B(Z, "id", "eval-container"),
              B(Z, "class", "svelte-f5oxbd"),
              B(S, "id", "network-interactive-container"),
              B(S, "class", "svelte-f5oxbd"),
              B(v, "class", "svelte-f5oxbd"),
              B(at, "class", "body-text"),
              B(ct, "class", "body-text"),
              B(o, "id", "all");
          },
          m(a, k) {
            w(a, e, k),
              w(a, n, k),
              w(a, r, k),
              w(a, i, k),
              w(a, o, k),
              x(o, s),
              x(o, l),
              x(o, c),
              x(o, h),
              x(o, u),
              x(o, d),
              x(o, m),
              x(o, p),
              x(o, f),
              x(o, g),
              x(o, y),
              x(o, v),
              x(v, b),
              x(v, $),
              x(v, S),
              x(S, T),
              x(T, C),
              vt(E, C, null),
              x(C, L),
              vt(_, C, null),
              x(C, I),
              x(C, O),
              x(O, P),
              x(P, H),
              x(H, D),
              x(P, F),
              x(P, j),
              x(j, V),
              x(P, U),
              x(P, G),
              x(G, W),
              x(G, X),
              q(X, t[3]),
              x(S, Y),
              x(S, Z),
              vt(K, Z, null),
              x(Z, J),
              x(Z, Q),
              vt(tt, Q, null),
              x(Z, et),
              x(Z, nt),
              vt(rt, nt, null),
              x(o, it),
              x(o, at),
              x(o, ot),
              x(o, st),
              x(o, lt),
              x(o, ct),
              (ht = !0),
              mt ||
                ((pt = [
                  N(H, "click", t[10]),
                  N(j, "click", t[11]),
                  N(X, "change", t[12]),
                  N(X, "input", t[12]),
                ]),
                (mt = !0));
          },
          p(t, [e]) {
            (!ht || 2 & e) && (H.disabled = t[1]),
              (!ht || 16 & e) && R(H, "active", t[4]),
              (!ht || 2 & e) && (j.disabled = t[1]),
              (!ht || 16 & e) && R(j, "active", t[4]),
              (!ht || 2 & e) && (X.disabled = t[1]),
              8 & e && q(X, t[3]);
            const n = {};
            1 & e && (n.data = t[0]), 4 & e && (n.nnModel = t[2]), tt.$set(n);
          },
          i(t) {
            ht ||
              (ut(E.$$.fragment, t),
              ut(_.$$.fragment, t),
              ut(K.$$.fragment, t),
              ut(tt.$$.fragment, t),
              ut(rt.$$.fragment, t),
              (ht = !0));
          },
          o(t) {
            dt(E.$$.fragment, t),
              dt(_.$$.fragment, t),
              dt(K.$$.fragment, t),
              dt(tt.$$.fragment, t),
              dt(rt.$$.fragment, t),
              (ht = !1);
          },
          d(t) {
            t && k(e),
              t && k(n),
              t && k(r),
              t && k(i),
              t && k(o),
              bt(E),
              bt(_),
              bt(K),
              bt(tt),
              bt(rt),
              (mt = !1),
              a(pt);
          },
        }
      );
    }
    let is = 1e-5;
    function as(t, e, n) {
      let r, i, a, o, s, l, u, d, m, p, f, g, y, x, v, b, w, k;
      c(t, oe, (t) => n(9, (u = t))),
        c(t, de, (t) => n(0, (d = t))),
        c(t, le, (t) => n(17, (m = t))),
        c(t, he, (t) => n(18, (p = t))),
        c(t, ue, (t) => n(19, (f = t))),
        c(t, ae, (t) => n(20, (g = t))),
        c(t, ce, (t) => n(21, (y = t))),
        c(t, me, (t) => n(22, (x = t))),
        c(t, se, (t) => n(23, (v = t))),
        c(t, re, (t) => n(3, (b = t))),
        c(t, ie, (t) => n(24, (w = t))),
        c(t, ne, (t) => n(4, (k = t))),
        h(de, (d = pr), d);
      let $ = !1;
      function M() {
        S(),
          (function () {
            let t = 0.01;
            const e = 1e-8,
              n = i.parameters().map(() => new Jo(0));
            let r = l.map((t) => i.call(t)),
              a = Zo(0, r.length).map((t) => r[t][0].mul(-s[t]).add(1).relu()),
              o = a.reduce((t, e) => t.add(e), new Jo(0)).mul(1 / a.length),
              c = i
                .parameters()
                .map((t) => t.mul(t))
                .reduce((t, e) => t.add(e), new Jo(0))
                .mul(is),
              u = o.add(c),
              d = Zo(0, r.length).map((t) =>
                r[t][0].data > 0 == s[t] > 0 ? 1 : 0,
              ),
              g = d.reduce((t, e) => t + e, 0) / d.length;
            i.zero_grad(), u.backward();
            for (let r = 0, a = i.parameters(); r < a.length; r++) {
              let i = a[r];
              (n[r].data += i.grad * i.grad),
                (i.data -= (t / Math.sqrt(n[r].data + e)) * i.grad);
            }
            const y = { x: z + 1, loss: u.data, y: 100 * g },
              x = f.map(function (t) {
                return i.call(t)[0].data > 0 ? 1 : -1;
              });
            h(he, (p = [...x]), p), h(le, (m = [...m, y]), m), z++;
          })(),
          (function () {
            h(ne, (k = !k), k);
            let t = [];
            g.forEach((e) => {
              const n = `animateMotion#animatePath1${e}`,
                r = w.querySelectorAll(n);
              t.push({ selection: r, p: e });
            }),
              t.forEach((t) => {
                setTimeout(() => {
                  t.selection.forEach((t) => {
                    t.beginElement();
                  });
                }, 100 * t.p);
              });
          })(),
          n(1, ($ = !0)),
          setTimeout(
            () => {
              n(1, ($ = !1));
            },
            1e3 * b * (v + 1),
          ),
          h(me, (x = !0), x);
      }
      function S() {
        const t = i
          .parameters()
          .filter((t) => "w" === t.param)
          .map((t) => ({ data: t.data, grad: t.grad }));
        h(ce, (y = [...t]), y);
      }
      let z = 0;
      function A() {
        (z = 0), n(2, (i = new ns(2, r)));
        const t = { x: z, loss: 0, y: 0 },
          e = f.map(function (t) {
            return i.call(t), -1;
          });
        h(he, (p = [...e]), p),
          h(le, (m = [t]), m),
          (function () {
            const t = Wr(u),
              e = Array.from({ length: t }, (t, e) => {
                const n = u[e % (u.length - 1)];
                return {
                  data: Math.sqrt(2 / n) * (2 * Math.random() - 1),
                  grad: 0,
                };
              });
            h(ce, (y = [...e]), y);
          })();
      }
      G(() => {
        S(), setTimeout(M, 1e3);
      });
      return (
        (t.$$.update = () => {
          512 & t.$$.dirty && (r = u.slice(1)),
            512 & t.$$.dirty && n(2, (i = new ns(2, u.slice(1)))),
            1 & t.$$.dirty &&
              n(
                8,
                (a = (function (t) {
                  const e = [],
                    n = [];
                  return (
                    t.forEach((t) => {
                      e.push([t.x1, t.x2]), n.push(t.y);
                    }),
                    [e, n]
                  );
                })(d)),
              ),
            256 & t.$$.dirty && n(7, ([o, s] = a), o),
            128 & t.$$.dirty && (l = o.map((t) => t.map((t) => Ko(t)))),
            513 & t.$$.dirty && A();
        }),
        h(ae, (g = [...Array(1).keys()]), g),
        [
          d,
          $,
          i,
          b,
          k,
          M,
          A,
          o,
          a,
          u,
          () => {
            M();
          },
          () => {
            A();
          },
          function () {
            var t;
            (t = this.value), (b = "" === t ? null : +t), re.set(b);
          },
        ]
      );
    }
    class os extends $t {
      constructor(t) {
        super(), kt(this, t, as, rs, s, {});
      }
    }
    function ss(e) {
      let n,
        r,
        i,
        o,
        s,
        l,
        c,
        h,
        d,
        m,
        p,
        f,
        g,
        y,
        v,
        b,
        $,
        S,
        T,
        N,
        C,
        q,
        E,
        L,
        _,
        I,
        R,
        O,
        P,
        H,
        D,
        F,
        j,
        V,
        U,
        G,
        W,
        X,
        Y,
        Z,
        K,
        J,
        Q,
        tt,
        et,
        nt,
        rt;
      return {
        c() {
            (n = M("section")),
            (r = M("h3")),
            (r.textContent = "Mirando Hacia Adelante: Otras arquitecturas de redes neuronales"), 
            (i = A()),
            (o = M("hr")),
            (s = A()),
            (l = M("p")),
            (c = z(
              "Hasta este punto, hemos descrito una arquitectura específica de red neuronal\n    donde los valores fluyen hacia adelante linealmente a través de una red, y los gradientes fluyen\n    linealmente hacia atrás a través de una red. Estas son frecuentemente llamadas\n    ",
            )),
            (h = M("span")),
            (h.textContent = "redes neuronales feed-forward"),
            (d = z(", o\n    ")),
            (m = M("span")),
            (m.textContent = "redes neuronales artificiales"), 
            (p = z(" (RNA's\n    ")),
            (f = M("sup")),
            (g = M("span")),
            (g.textContent = "[ℹ]\n      "),
            (y = z(
              "). Incluso podrías verlas referidas como Perceptrones Multicapa, una referencia\n    a las primeras composiciones de Redes Neuronales de Perceptrones\n    ",
            )),
            (v = M("sup")),
            (b = M("span")),
            (b.textContent = "[ℹ]\n      "),
            ($ = z(".")),
            (S = A()),
            (T = M("br")),
            (N = A()),
            (C = M("p")),
            (C.textContent =
              "Sin embargo, esto es solo la punta del iceberg cuando se trata del campo de las\n    redes neuronales. Si bien las redes neuronales feed-forward han tenido un éxito\n    increíble en una amplia gama de aplicaciones, existen muchos otros tipos de\n    arquitecturas de redes neuronales que pueden usarse para resolver diferentes tipos de\n    problemas. Para comenzar tu viaje en el mundo de las redes\n    neuronales, y para mejorar tu conocimiento de términos en el mundo actual de obsesión por la IA,\n    las arquitecturas más populares se enumeran y explican brevemente a continuación."),
            (q = A()),
            (E = M("br")),
            (L = A()),
            (_ = M("div")),
            (_.innerHTML =
              '<p class="body-text"><span class="bold">Redes Neuronales Recurrentes (RNN):</span>\n\n      Las Redes Neuronales Recurrentes (RNN) difieren de las redes neuronales feed-forward\n      ya que tienen una memoria incorporada, permitiéndoles procesar secuencias de\n      datos. Esto hace que las RNN sean adecuadas para tareas como procesamiento de lenguaje\n      natural y predicción de series de tiempo. Pueden aprender patrones en\n      secuencias conectando la salida de un paso de tiempo a la entrada del\n      siguiente, recordando información previa (de ahí la <i>recurrencia</i> en el nombre).</p>'),
            (I = A()),
            (R = M("br")),
            (O = A()),
            (P = M("div")),
            (P.innerHTML =
              '<p class="body-text"><span class="bold">Redes Neuronales Convolucionales (CNN):</span>\n\n      Las Redes Neuronales Convolucionales (CNN) están específicamente diseñadas para\n      procesar datos espaciales, como imágenes. A diferencia de las redes feed-forward,\n      las CNN utilizan capas convolucionales especiales para escanear e identificar patrones locales\n      dentro de la entrada. Imagina una cuadrícula deslizándose por una imagen, identificando\n      patrones. Esto las hace más eficientes para el reconocimiento de imágenes, detección de objetos\n      y otras tareas de visión por computadora, donde la información espacial es\n      crucial. También se utilizan para tareas secuenciales, como aplicaciones\n      de series de tiempo.</p>'),
            (H = A()),
            (D = M("br")),
            (F = A()),
            (j = M("div")),
            (j.innerHTML =
              '<p class="body-text"><span class="bold">Redes Generativas Adversarias (GAN):</span>\n      Las Redes Generativas Adversarias (GAN) consisten en dos redes neuronales distintas,\n      un generador y un discriminador, que compiten entre sí. El generador\n      intenta crear una muestra de datos, y el discriminador intenta determinar si\n      esa muestra de datos provino de los datos de entrenamiento o del generador. Al optimizarse\n      mutuamente, las GAN aprenden a generar nuevas muestras de datos capturando la\n      distribución de los datos de entrenamiento. Son ampliamente utilizadas para tareas como síntesis\n      de imágenes, transferencia de estilo y aumento de datos.</p>'),
            (V = A()),
            (U = M("br")),
            (G = A()),
            (W = M("div")),
            (W.innerHTML =
              '<p class="body-text"><span class="bold">Redes Neuronales de Grafos:</span>\n\n      Las Redes Neuronales de Grafos son un tipo de red neuronal que operan sobre\n      datos estructurados en grafos, que no son fácilmente manejados por redes\n      feed-forward. Están diseñadas para aprender y codificar las relaciones entre\n      nodos en un grafo, haciéndolas útiles para tareas como análisis de redes\n      sociales, predicción de propiedades moleculares y sistemas de recomendación.</p>'),
            (X = A()),
            (Y = M("br")),
            (Z = A()),
            (K = M("div")),
            (K.innerHTML =
              '<p class="body-text"><span class="bold">Arquitecturas Transformer:</span>\n\n      Las arquitecturas Transformer difieren de las redes feed-forward ya que se basan\n      en un mecanismo de auto-atención para procesar datos de entrada, permitiéndoles\n      manejar dependencias de largo alcance más efectivamente. Estos modelos son masivos,\n      y de hecho incorporan redes neuronales feed-forward en partes de su\n      arquitectura. Han sido especialmente exitosos en tareas de procesamiento de lenguaje\n      natural, como traducción automática y resumen de texto, debido\n      a su capacidad para capturar información contextual en grandes secuencias.\n      La mayoría de los modelos de IA actualmente promocionados, como la familia GPT, son\n      variantes de transformers.</p>'),
            (J = A()),
            (Q = M("br")),
            (tt = A()),
            (et = M("p")),
            (et.textContent =
              "Esta no es una lista exhaustiva de arquitecturas de red. Más bien, estas son\n    arquitecturas de alto nivel con muchas variantes - ¡se desarrollan más cada día!\n    Pero es un excelente punto de partida para enviarte adelante en tu viaje hacia\n    las redes neuronales y el aprendizaje profundo."),
            B(r, "class", "body-header"),
            B(h, "class", "bold"),
            B(m, "class", "bold"),
            B(g, "class", "info-tooltip"),
            B(
              g,
              "title",
              "La palabra 'artificial' viene\n      de la composición de la red de neuronas artificiales.",
            ),
            B(b, "class", "info-tooltip"),
            B(
              b,
              "title", 
              "De hecho, esta noción de una red de funciones escalonadas que 'disparan' o no está profundamente inspirada en el funcionamiento de las neuronas biológicas en el cerebro humano, dando así origen a la analogía cerebral que se usa a menudo para describir las redes neuronales.",
            ),
            B(l, "class", "body-text"),
            B(C, "class", "body-text"),
            B(et, "class", "body-text"),
            B(n, "class", "svelte-15xywry");
        },
        m(t, e) {
          w(t, n, e),
            x(n, r),
            x(n, i),
            x(n, o),
            x(n, s),
            x(n, l),
            x(l, c),
            x(l, h),
            x(l, d),
            x(l, m),
            x(l, p),
            x(l, f),
            x(f, g),
            x(l, y),
            x(l, v),
            x(v, b),
            x(l, $),
            x(n, S),
            x(n, T),
            x(n, N),
            x(n, C),
            x(n, q),
            x(n, E),
            x(n, L),
            x(n, _),
            x(n, I),
            x(n, R),
            x(n, O),
            x(n, P),
            x(n, H),
            x(n, D),
            x(n, F),
            x(n, j),
            x(n, V),
            x(n, U),
            x(n, G),
            x(n, W),
            x(n, X),
            x(n, Y),
            x(n, Z),
            x(n, K),
            x(n, J),
            x(n, Q),
            x(n, tt),
            x(n, et),
            nt || ((rt = [u(Se.call(null, g)), u(Se.call(null, b))]), (nt = !0));
        },
        p: t,
        i: t,
        o: t,
        d(t) {
          t && k(n), (nt = !1), a(rt);
        },
      };
    }
    class ls extends $t {
      constructor(t) {
        super(), kt(this, t, null, ss, s, {});
      }
    }
    const { window: cs } = yt;
    function hs(e) {
      let n, r, i, a, o, s, l, c, h, u, d, m, p, f, g, y, x, v, b, $;
      return (
        (n = new ge({})),
        (i = new xe({})),
        (o = new Ae({})),
        (l = new Ci({})),
        (h = new Ki({})),
        (d = new Ra({})),
        (p = new os({})),
        (g = new ls({})),
        (x = new Qi({})),
        {
          c() {
            xt(n.$$.fragment),
              (r = A()),
              xt(i.$$.fragment),
              (a = A()),
              xt(o.$$.fragment),
              (s = A()),
              xt(l.$$.fragment),
              (c = A()),
              xt(h.$$.fragment),
              (u = A()),
              xt(d.$$.fragment),
              (m = A()),
              xt(p.$$.fragment),
              (f = A()),
              xt(g.$$.fragment),
              (y = A()),
              xt(x.$$.fragment);
          },
          m(t, k) {
            vt(n, t, k),
              w(t, r, k),
              vt(i, t, k),
              w(t, a, k),
              vt(o, t, k),
              w(t, s, k),
              vt(l, t, k),
              w(t, c, k),
              vt(h, t, k),
              w(t, u, k),
              vt(d, t, k),
              w(t, m, k),
              vt(p, t, k),
              w(t, f, k),
              vt(g, t, k),
              w(t, y, k),
              vt(x, t, k),
              (v = !0),
              b || (($ = N(cs, "resize", e[0])), (b = !0));
          },
          p: t,
          i(t) {
            v ||
              (ut(n.$$.fragment, t),
              ut(i.$$.fragment, t),
              ut(o.$$.fragment, t),
              ut(l.$$.fragment, t),
              ut(h.$$.fragment, t),
              ut(d.$$.fragment, t),
              ut(p.$$.fragment, t),
              ut(g.$$.fragment, t),
              ut(x.$$.fragment, t),
              (v = !0));
          },
          o(t) {
            dt(n.$$.fragment, t),
              dt(i.$$.fragment, t),
              dt(o.$$.fragment, t),
              dt(l.$$.fragment, t),
              dt(h.$$.fragment, t),
              dt(d.$$.fragment, t),
              dt(p.$$.fragment, t),
              dt(g.$$.fragment, t),
              dt(x.$$.fragment, t),
              (v = !1);
          },
          d(t) {
            bt(n, t),
              t && k(r),
              bt(i, t),
              t && k(a),
              bt(o, t),
              t && k(s),
              bt(l, t),
              t && k(c),
              bt(h, t),
              t && k(u),
              bt(d, t),
              t && k(m),
              bt(p, t),
              t && k(f),
              bt(g, t),
              t && k(y),
              bt(x, t),
              (b = !1),
              $();
          },
        }
      );
    }
    function us(t, e, n) {
      let r, i;
      function a() {
        h(_t, (r = window.innerWidth <= 950), r),
          h(
            Et,
            (i = r
              ? { top: 20, bottom: 18, left: 60, right: 30 }
              : { top: 20, bottom: 18, left: 95, right: 30 }),
            i,
          );
      }
      return (
        c(t, _t, (t) => n(1, (r = t))), c(t, Et, (t) => n(2, (i = t))), a(), [a]
      );
    }
    return new (class extends $t {
      constructor(t) {
        super(), kt(this, t, us, hs, s, {});
      }
    })({ target: document.body });
  })();
  //# sourceMappingURL=bundle.js.map
  