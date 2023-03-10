/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/_src/js/components/gsap/ScrollTrigger.min.js":
/*!*************************************************************!*\
  !*** ./assets/_src/js/components/gsap/ScrollTrigger.min.js ***!
  \*************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * ScrollTrigger 3.10.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? t(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  function _defineProperties(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  function p() {
    return he || "undefined" != typeof window && (he = window.gsap) && he.registerPlugin && he;
  }
  function x(e, t) {
    return ~Ye.indexOf(e) && Ye[Ye.indexOf(e) + 1][t];
  }
  function y(e) {
    return !!~t.indexOf(e);
  }
  function z(e, t, r, n) {
    return e.addEventListener(t, r, {
      passive: !n
    });
  }
  function A(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function D() {
    return Pe && Pe.isPressed || ze.cache++;
  }
  function E(t) {
    return function (e) {
      return e || 0 === e ? (r && (ve.history.scrollRestoration = "manual"), t(e), t.v = e, t.c = ze.cache, Pe && Pe.isPressed && Re("ss", e)) : ze.cache === t.c && !Re("ref") || (t.c = ze.cache, t.v = t()), t.v;
    };
  }
  function H(e) {
    return he.utils.toArray(e)[0] || ("string" == typeof e && !1 !== he.config().nullTargetWarn ? console.warn("Element not found:", e) : null);
  }
  function I(t, e) {
    var r = e.s,
      n = e.sc,
      i = ze.indexOf(t),
      o = n === Xe.sc ? 1 : 2;
    return ~i || (i = ze.push(t) - 1), ze[i + o] || (ze[i + o] = x(t, r) || (y(t) ? n : function (e) {
      return arguments.length ? t[r] = e : t[r];
    }));
  }
  function J(e, t, i) {
    function _c(e, t) {
      var r = u();
      t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l);
    }
    var o = e,
      a = e,
      s = u(),
      l = s,
      n = t || 50,
      c = Math.max(500, 3 * n);
    return {
      update: _c,
      reset: function reset() {
        a = o = i ? 0 : o, l = s = 0;
      },
      getVelocity: function getVelocity(e) {
        var t = l,
          r = a,
          n = u();
        return !e && 0 !== e || e === o || _c(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3;
      }
    };
  }
  function K(e, t) {
    return t && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e;
  }
  function L(e) {
    var t = Math.max.apply(Math, e),
      r = Math.min.apply(Math, e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  }
  function M(e) {
    return (he = e || p()) && !be && "undefined" != typeof document && document.body && (ve = window, Se = (me = document).documentElement, _e = me.body, t = [ve, me, Se, _e], he.utils.clamp, ke = "onpointerenter" in _e ? "pointer" : "mouse", Te = w.isTouch = ve.matchMedia && ve.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ve || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, setTimeout(function () {
      return r = 0;
    }, 500), be = 1), be;
  }
  var he,
    be,
    ve,
    me,
    Se,
    _e,
    Te,
    ke,
    Me,
    t,
    Pe,
    r = 1,
    Oe = [],
    ze = [],
    Ye = [],
    u = Date.now,
    Re = function _bridge(e, t) {
      return t;
    },
    n = "scrollLeft",
    i = "scrollTop",
    Le = {
      s: n,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: E(function (e) {
        return arguments.length ? ve.scrollTo(e, Xe.sc()) : ve.pageXOffset || me[n] || Se[n] || _e[n] || 0;
      })
    },
    Xe = {
      s: i,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: Le,
      sc: E(function (e) {
        return arguments.length ? ve.scrollTo(Le.sc(), e) : ve.pageYOffset || me[i] || Se[i] || _e[i] || 0;
      })
    };
  Le.op = Xe, ze.cache = 0;
  var w = (Observer.prototype.init = function init(e) {
    be || M(he) || console.warn("Please gsap.registerPlugin(Observer)"), Me || (Me = he.core.globals().ScrollTrigger) && Me.core && function _integrate() {
      var e = Me.core,
        r = e.bridge || {},
        t = e._scrollers,
        n = e._proxies;
      t.push.apply(t, ze), n.push.apply(n, Ye), ze = t, Ye = n, Re = function _bridge(e, t) {
        return r[e](t);
      };
    }();
    var i = e.tolerance,
      a = e.dragMinimum,
      t = e.type,
      r = e.target,
      n = e.lineHeight,
      o = e.debounce,
      s = e.preventDefault,
      l = e.onStop,
      c = e.onStopDelay,
      u = e.ignore,
      f = e.wheelSpeed,
      d = e.event,
      p = e.onDragStart,
      g = e.onDragEnd,
      h = e.onDrag,
      b = e.onPress,
      v = e.onRelease,
      m = e.onRight,
      x = e.onLeft,
      w = e.onUp,
      S = e.onDown,
      _ = e.onChangeX,
      T = e.onChangeY,
      k = e.onChange,
      E = e.onToggleX,
      C = e.onToggleY,
      P = e.onHover,
      O = e.onHoverEnd,
      F = e.onMove,
      Y = e.ignoreCheck,
      R = e.isNormalizer,
      B = e.onGestureStart,
      X = e.onGestureEnd,
      j = e.onWheel,
      V = e.onEnable,
      G = e.onDisable,
      N = e.onClick,
      W = e.scrollSpeed;
    function ue(e, t) {
      return (ee.event = e) && u && ~u.indexOf(e.target) || t && le && "touch" !== e.pointerType || Y && Y(e);
    }
    function we() {
      var e = ee.deltaX = L(de),
        t = ee.deltaY = L(pe),
        r = Math.abs(e) >= i,
        n = Math.abs(t) >= i;
      k && (r || n) && k(ee, e, t, de, pe), r && (m && 0 < ee.deltaX && m(ee), x && ee.deltaX < 0 && x(ee), _ && _(ee), E && ee.deltaX < 0 != te < 0 && E(ee), te = ee.deltaX, de[0] = de[1] = de[2] = 0), n && (S && 0 < ee.deltaY && S(ee), w && ee.deltaY < 0 && w(ee), T && T(ee), C && ee.deltaY < 0 != re < 0 && C(ee), re = ee.deltaY, pe[0] = pe[1] = pe[2] = 0), $ && (F(ee), $ = !1), Z && (h(ee), Z = !1), Q && (j(ee), Q = !1), q = 0;
    }
    function xe(e, t, r) {
      de[r] += e, pe[r] += t, ee._vx.update(e, 2 === r), ee._vy.update(t, 2 === r), o ? q = q || requestAnimationFrame(we) : we();
    }
    function ye(e) {
      if (!ue(e, 1)) {
        var t = (e = K(e, s)).clientX,
          r = e.clientY,
          n = t - ee.x,
          i = r - ee.y,
          o = ee.isDragging;
        ee.x = t, ee.y = r, (o || Math.abs(ee.startX - t) >= a || Math.abs(ee.startY - r) >= a) && (h && (Z = !0), o || (ee.isDragging = !0), xe(n, i, 2), o || p && p(ee));
      }
    }
    function Ae(e) {
      if (!ue(e, 1)) {
        A(R ? r : fe, se[1], ye);
        var t = ee.isDragging;
        t || (ee._vx.reset(), ee._vy.reset()), ee.isDragging = ee.isGesturing = ee.isPressed = !1, l && !R && U.restart(!0), g && t && g(ee), v && v(ee, t);
      }
    }
    function Be(e) {
      return e.touches && 1 < e.touches.length && (ee.isGesturing = !0) && B(e, ee.isDragging);
    }
    function Ce() {
      return (ee.isGesturing = !1) || X(ee);
    }
    function De(e) {
      if (!ue(e)) {
        var t = ne(),
          r = ie();
        xe((t - oe) * W, (r - ae) * W, 1), oe = t, ae = r, l && U.restart(!0);
      }
    }
    function Ee(e) {
      if (!ue(e)) {
        e = K(e, s), j && (Q = !0);
        var t = (1 === e.deltaMode ? n : 2 === e.deltaMode ? ve.innerHeight : 1) * f;
        xe(e.deltaX * t, e.deltaY * t, 0), l && !R && U.restart(!0);
      }
    }
    function Fe(e) {
      if (!ue(e)) {
        var t = e.clientX,
          r = e.clientY,
          n = t - ee.x,
          i = r - ee.y;
        ee.x = t, ee.y = r, F && ($ = !0), (n || i) && xe(n, i, 2);
      }
    }
    function Ge(e) {
      ee.event = e, P(ee);
    }
    function He(e) {
      ee.event = e, O(ee);
    }
    function Ie(e) {
      return ue(e) || K(e, s) && N(ee);
    }
    this.target = r = H(r) || Se, this.vars = e, u = u && he.utils.toArray(u), i = i || 0, a = a || 0, f = f || 1, W = W || 1, t = t || "wheel,touch,pointer", o = !1 !== o, n = n || parseFloat(ve.getComputedStyle(_e).lineHeight) || 22;
    var q,
      U,
      Z,
      $,
      Q,
      ee = this,
      te = 0,
      re = 0,
      ne = I(r, Le),
      ie = I(r, Xe),
      oe = ne(),
      ae = ie(),
      se = ("ontouchstart" in Se ? "touchstart,touchmove,touchcancel,touchend" : 0 <= t.indexOf("pointer") && !("onpointerdown" in Se) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(","),
      le = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === se[0],
      ce = y(r),
      fe = r.ownerDocument || me,
      de = [0, 0, 0],
      pe = [0, 0, 0],
      ge = ee.onPress = function (e) {
        ue(e, 1) || (U.pause(), ee.isPressed = !0, e = K(e, s), te = re = 0, ee.startX = ee.x = e.clientX, ee.startY = ee.y = e.clientY, ee._vx.reset(), ee._vy.reset(), z(R ? r : fe, se[1], ye, s), ee.deltaX = ee.deltaY = 0, b && b(ee));
      };
    U = ee._dc = he.delayedCall(c || .25, function onStopFunc() {
      ee._vx.reset(), ee._vy.reset(), U.pause(), l && l(ee);
    }).pause(), ee.deltaX = ee.deltaY = 0, ee._vx = J(0, 50, !0), ee._vy = J(0, 50, !0), ee.scrollX = ne, ee.scrollY = ie, ee.isDragging = ee.isGesturing = ee.isPressed = !1, ee.enable = function (e) {
      return ee.isEnabled || (z(ce ? fe : r, "scroll", D), 0 <= t.indexOf("scroll") && z(ce ? fe : r, "scroll", De, s), 0 <= t.indexOf("wheel") && z(r, "wheel", Ee, s), (0 <= t.indexOf("touch") && Te || 0 <= t.indexOf("pointer")) && (z(r, se[0], ge, s), z(fe, se[2], Ae), z(fe, se[3], Ae), N && z(r, "click", Ie), B && z(fe, "gesturestart", Be), X && z(fe, "gestureend", Ce), P && z(r, ke + "enter", Ge), O && z(r, ke + "leave", He), F && z(r, ke + "move", Fe)), ee.isEnabled = !0, e && e.type && ge(e), V && V(ee)), ee;
    }, ee.disable = function () {
      ee.isEnabled && (Oe.filter(function (e) {
        return e !== ee && y(e.target);
      }).length || A(ce ? fe : r, "scroll", D), A(ce ? fe : r, "scroll", De), A(r, "wheel", Ee), A(r, se[0], ge), A(fe, se[2], Ae), A(fe, se[3], Ae), A(r, "click", Ie), A(fe, "gesturestart", Be), A(fe, "gestureend", Ce), A(r, ke + "enter", Ge), A(r, ke + "leave", He), A(r, ke + "move", Fe), ee.isEnabled = !1, G && G(ee));
    }, ee.kill = function () {
      ee.disable();
      var e = Oe.indexOf(ee);
      0 <= e && Oe.splice(e, 1), Pe === ee && (Pe = 0);
    }, Oe.push(ee), R && (Pe = ee), ee.enable(d);
  }, function _createClass(e, t, r) {
    return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e;
  }(Observer, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]), Observer);
  function Observer(e) {
    this.init(e);
  }
  w.version = "3.10.2", w.create = function (e) {
    return new w(e);
  }, w.register = M, w.getAll = function () {
    return Oe.slice();
  }, w.getById = function (t) {
    return Oe.filter(function (e) {
      return e.vars.id === t;
    })[0];
  }, p() && he.registerPlugin(w);
  function sa() {
    return $e = 1;
  }
  function ta() {
    return $e = 0;
  }
  function ua(e) {
    return e;
  }
  function va(e) {
    return Math.round(1e5 * e) / 1e5 || 0;
  }
  function wa() {
    return "undefined" != typeof window;
  }
  function xa() {
    return je || wa() && (je = window.gsap) && je.registerPlugin && je;
  }
  function ya(e) {
    return !!~a.indexOf(e);
  }
  function za(e) {
    return x(e, "getBoundingClientRect") || (ya(e) ? function () {
      return Mt.width = Ve.innerWidth, Mt.height = Ve.innerHeight, Mt;
    } : function () {
      return wt(e);
    });
  }
  function Ca(e, t) {
    var r = t.s,
      n = t.d2,
      i = t.d,
      o = t.a;
    return (r = "scroll" + n) && (o = x(e, r)) ? o() - za(e)()[i] : ya(e) ? (Ke[r] || We[r]) - (Ve["inner" + n] || Ke["client" + n] || We["client" + n]) : e[r] - e["offset" + n];
  }
  function Da(e, t) {
    for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2]);
  }
  function Ea(e) {
    return "string" == typeof e;
  }
  function Fa(e) {
    return "function" == typeof e;
  }
  function Ga(e) {
    return "number" == typeof e;
  }
  function Ha(e) {
    return "object" == _typeof(e);
  }
  function Ia(e) {
    return Fa(e) && e();
  }
  function Ja(r, n) {
    return function () {
      var e = Ia(r),
        t = Ia(n);
      return function () {
        Ia(e), Ia(t);
      };
    };
  }
  function Ka(e, t, r) {
    return e && e.progress(t ? 0 : 1) && r && e.pause();
  }
  function La(e, t) {
    if (e.enabled) {
      var r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  }
  function ab(e) {
    return Ve.getComputedStyle(e);
  }
  function cb(e, t) {
    for (var r in t) r in e || (e[r] = t[r]);
    return e;
  }
  function eb(e, t) {
    var r = t.d2;
    return e["offset" + r] || e["client" + r] || 0;
  }
  function fb(e) {
    var t,
      r = [],
      n = e.labels,
      i = e.duration();
    for (t in n) r.push(n[t] / i);
    return r;
  }
  function hb(i) {
    var o = je.utils.snap(i),
      a = Array.isArray(i) && i.slice(0).sort(function (e, t) {
        return e - t;
      });
    return a ? function (e, t, r) {
      var n;
      if (void 0 === r && (r = .001), !t) return o(e);
      if (0 < t) {
        for (e -= r, n = 0; n < a.length; n++) if (a[n] >= e) return a[n];
        return a[n - 1];
      }
      for (n = a.length, e += r; n--;) if (a[n] <= e) return a[n];
      return a[0];
    } : function (e, t, r) {
      void 0 === r && (r = .001);
      var n = o(e);
      return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i);
    };
  }
  function jb(t, r, e, n) {
    return e.split(",").forEach(function (e) {
      return t(r, e, n);
    });
  }
  function kb(e, t, r, n) {
    return e.addEventListener(t, r, {
      passive: !n
    });
  }
  function lb(e, t, r) {
    return e.removeEventListener(t, r);
  }
  function mb(e, t, r) {
    return r && r.wheelHandler && e(t, "wheel", r);
  }
  function qb(e, t) {
    if (Ea(e)) {
      var r = e.indexOf("="),
        n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in F ? F[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
    }
    return e;
  }
  function rb(e, t, r, n, i, o, a, s) {
    var l = i.startColor,
      c = i.endColor,
      u = i.fontSize,
      f = i.indent,
      d = i.fontWeight,
      p = Ne.createElement("div"),
      g = ya(r) || "fixed" === x(r, "pinType"),
      h = -1 !== e.indexOf("scroller"),
      b = g ? We : r,
      v = -1 !== e.indexOf("start"),
      m = v ? l : c,
      y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === Xe ? C : P) + ":" + (o + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, b.children[0] ? b.insertBefore(p, b.children[0]) : b.appendChild(p), p._offset = p["offset" + n.op.d2], Y(p, 0, n, v), p;
  }
  function wb() {
    return 34 < st() - lt && Z();
  }
  function xb() {
    b && b.isPressed || (ze.cache++, _ = _ || requestAnimationFrame(Z), lt || j("scrollStart"), lt = st());
  }
  function yb() {
    ze.cache++, Ze || h || Ne.fullscreenElement || v && S === Ve.innerWidth && !(Math.abs(Ve.innerHeight - m) > .25 * Ve.innerHeight) || s.restart(!0);
  }
  function Eb(e) {
    var t,
      r = je.ticker.frame,
      n = [],
      i = 0;
    if (T !== r || at) {
      for (N(); i < X.length; i += 4) (t = Ve.matchMedia(X[i]).matches) !== X[i + 3] && ((X[i + 3] = t) ? n.push(i) : N(1, X[i]) || Fa(X[i + 2]) && X[i + 2]());
      for (G(), i = 0; i < n.length; i++) t = n[i], nt = X[t], X[t + 2] = X[t + 1](e);
      nt = 0, o && q(0, 1), T = r, j("matchMedia");
    }
  }
  function Fb() {
    return lb(re, "scrollEnd", Fb) || q(!0);
  }
  function Kb() {
    return ze.cache++ && ze.forEach(function (e) {
      return "function" == typeof e && (e.rec = 0);
    });
  }
  function Vb(e, t, r, n) {
    if (e.parentNode !== t) {
      for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
      a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[P] = s[C] = a.flexBasis = "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ft] = eb(e, Le) + xt, a[dt] = eb(e, Xe) + xt, a[vt] = s[mt] = s.top = s.left = "0", Ct(n), s[ft] = s.maxWidth = r[ft], s[dt] = s.maxHeight = r[dt], s[vt] = r[vt], e.parentNode.insertBefore(t, e), t.appendChild(e);
    }
  }
  function Yb(e) {
    for (var t = Q.length, r = e.style, n = [], i = 0; i < t; i++) n.push(Q[i], r[Q[i]]);
    return n.t = e, n;
  }
  function _b(e, t, r, n, i, o, a, s, l, c, u, f, d) {
    Fa(e) && (e = e(s)), Ea(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? qb("0" + e.substr(3), r) : 0));
    var p,
      g,
      h,
      b = d ? d.time() : 0;
    if (d && d.seek(0), Ga(e)) a && Y(a, r, n, !0);else {
      Fa(t) && (t = t(s));
      var v,
        m,
        y,
        x,
        w = e.split(" ");
      h = H(t) || We, (v = wt(h) || {}) && (v.left || v.top) || "none" !== ab(h).display || (x = h.style.display, h.style.display = "block", v = wt(h), x ? h.style.display = x : h.style.removeProperty("display")), m = qb(w[0], v[n.d]), y = qb(w[1] || "0", r), e = v[n.p] - l[n.p] - c + m + i - y, a && Y(a, y, n, r - y < 20 || a._isStart && 20 < y), r -= r - y;
    }
    if (o) {
      var S = e + r,
        _ = o._isStart;
      p = "scroll" + n.d2, Y(o, S, n, _ && 20 < S || !_ && (u ? Math.max(We[p], Ke[p]) : o.parentNode[p]) <= S + 1), u && (l = wt(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + xt));
    }
    return d && h && (p = wt(h), d.seek(f), g = wt(h), d._caScrollDist = p[n.p] - g[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e);
  }
  function bc(e, t, r, n) {
    if (e.parentNode !== t) {
      var i,
        o,
        a = e.style;
      if (t === We) {
        for (i in e._stOrig = a.cssText, o = ab(e)) +i || te.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
        a.top = r, a.left = n;
      } else a.cssText = e._stOrig;
      je.core.getCache(e).uncache = 1, t.appendChild(e);
    }
  }
  function cc(l, e) {
    function nj(e, t, r, n, i) {
      var o = nj.tween,
        a = t.onComplete,
        s = {};
      return r = r || f(), i = n && i || 0, n = n || e - r, o && o.kill(), c = Math.round(r), t[d] = e, (t.modifiers = s)[d] = function (e) {
        return (e = va(f())) !== c && e !== u && 2 < Math.abs(e - c) && 2 < Math.abs(e - u) ? (o.kill(), nj.tween = 0) : e = r + n * o.ratio + i * o.ratio * o.ratio, u = c, c = va(e);
      }, t.onComplete = function () {
        nj.tween = 0, a && a.call(o);
      }, o = nj.tween = je.to(l, t);
    }
    var c,
      u,
      f = I(l, e),
      d = "_scroll" + e.p2;
    return (l[d] = f).wheelHandler = function () {
      return nj.tween && nj.tween.kill() && (nj.tween = 0);
    }, kb(l, "wheel", f.wheelHandler), nj;
  }
  var je,
    o,
    Ve,
    Ne,
    Ke,
    We,
    a,
    s,
    qe,
    Je,
    Ue,
    l,
    Ze,
    $e,
    c,
    Qe,
    f,
    d,
    g,
    et,
    tt,
    h,
    b,
    v,
    m,
    S,
    rt,
    _,
    nt,
    T,
    it,
    ot,
    at = 1,
    st = Date.now,
    k = st(),
    lt = 0,
    ct = 0,
    ut = Math.abs,
    C = "right",
    P = "bottom",
    ft = "width",
    dt = "height",
    pt = "Right",
    gt = "Left",
    ht = "Top",
    bt = "Bottom",
    vt = "padding",
    mt = "margin",
    yt = "Width",
    O = "Height",
    xt = "px",
    wt = function _getBounds(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ab(e)[c] && je.to(e, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0
        }).progress(1),
        n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    },
    St = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
    _t = {
      toggleActions: "play",
      anticipatePin: 0
    },
    F = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
    Y = function _positionMarker(e, t, r, n) {
      var i = {
          display: "block"
        },
        o = r[n ? "os2" : "p2"],
        a = r[n ? "p2" : "os2"];
      e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + yt] = 1, i["border" + a + yt] = 0, i[r.p] = t + "px", je.set(e, i);
    },
    Tt = [],
    kt = {},
    R = {},
    B = [],
    X = [],
    j = function _dispatch(e) {
      return R[e] && R[e].map(function (e) {
        return e();
      }) || B;
    },
    V = [],
    G = function _revertRecorded(e) {
      for (var t = 0; t < V.length; t += 5) e && V[t + 4] !== e || (V[t].style.cssText = V[t + 1], V[t].getBBox && V[t].setAttribute("transform", V[t + 2] || ""), V[t + 3].uncache = 1);
    },
    N = function _revertAll(e, t) {
      var r;
      for (Qe = 0; Qe < Tt.length; Qe++) r = Tt[Qe], t && r.media !== t || (e ? r.kill(1) : r.revert());
      t && G(t), t || j("revert");
    },
    W = 0,
    q = function _refreshAll(e, t) {
      if (!lt || e) {
        it = !0;
        var r = j("refreshInit");
        et && re.sort(), t || N(), Tt.slice(0).forEach(function (e) {
          return e.refresh();
        }), Tt.forEach(function (e) {
          return "max" === e.vars.end && e.setPositions(e.start, Ca(e.scroller, e._dir));
        }), r.forEach(function (e) {
          return e && e.render && e.render(-1);
        }), Kb(), s.pause(), W++, it = !1, j("refresh");
      } else kb(re, "scrollEnd", Fb);
    },
    U = 0,
    Et = 1,
    Z = function _updateAll() {
      if (!it) {
        ot && ot.update(0), re.isUpdating = !0;
        var e = Tt.length,
          t = st(),
          r = 50 <= t - k,
          n = e && Tt[0].scroll();
        if (Et = n < U ? -1 : 1, U = n, r && (lt && !$e && 200 < t - lt && (lt = 0, j("scrollEnd")), Ue = k, k = t), Et < 0) {
          for (Qe = e; 0 < Qe--;) Tt[Qe] && Tt[Qe].update(0, r);
          Et = 1;
        } else for (Qe = 0; Qe < e; Qe++) Tt[Qe] && Tt[Qe].update(0, r);
        re.isUpdating = !1;
      }
      _ = 0;
    },
    $ = ["left", "top", P, C, mt + bt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    Q = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + O, "position", mt, vt, vt + ht, vt + pt, vt + bt, vt + gt]),
    ee = /([A-Z])/g,
    Ct = function _setState(e) {
      if (e) {
        var t,
          r,
          n = e.t.style,
          i = e.length,
          o = 0;
        for ((e.t._gsap || je.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(ee, "-$1").toLowerCase());
      }
    },
    Mt = {
      left: 0,
      top: 0
    },
    te = /(webkit|moz|length|cssText|inset)/i,
    re = (ScrollTrigger.prototype.init = function init(_, T) {
      if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), ct) {
        var v,
          n,
          f,
          k,
          E,
          C,
          M,
          P,
          O,
          A,
          D,
          e,
          z,
          F,
          Y,
          R,
          L,
          t,
          B,
          m,
          X,
          j,
          y,
          V,
          w,
          S,
          r,
          G,
          N,
          K,
          i,
          d,
          W,
          q,
          J,
          U,
          Z,
          o,
          $ = (_ = cb(Ea(_) || Ga(_) || _.nodeType ? {
            trigger: _
          } : _, _t)).onUpdate,
          Q = _.toggleClass,
          a = _.id,
          ee = _.onToggle,
          te = _.onRefresh,
          re = _.scrub,
          ne = _.trigger,
          ie = _.pin,
          oe = _.pinSpacing,
          ae = _.invalidateOnRefresh,
          se = _.anticipatePin,
          s = _.onScrubComplete,
          p = _.onSnapComplete,
          le = _.once,
          ce = _.snap,
          ue = _.pinReparent,
          l = _.pinSpacer,
          fe = _.containerAnimation,
          de = _.fastScrollEnd,
          pe = _.preventOverlaps,
          ge = _.horizontal || _.containerAnimation && !1 !== _.horizontal ? Le : Xe,
          he = !re && 0 !== re,
          be = H(_.scroller || Ve),
          c = je.core.getCache(be),
          ve = ya(be),
          me = "fixed" === ("pinType" in _ ? _.pinType : x(be, "pinType") || ve && "fixed"),
          ye = [_.onEnter, _.onLeave, _.onEnterBack, _.onLeaveBack],
          xe = he && _.toggleActions.split(" "),
          u = "markers" in _ ? _.markers : _t.markers,
          we = ve ? 0 : parseFloat(ab(be)["border" + ge.p2 + yt]) || 0,
          Se = this,
          _e = _.onRefreshInit && function () {
            return _.onRefreshInit(Se);
          },
          Te = function _getSizeFunc(e, t, r) {
            var n = r.d,
              i = r.d2,
              o = r.a;
            return (o = x(e, "getBoundingClientRect")) ? function () {
              return o()[n];
            } : function () {
              return (t ? Ve["inner" + i] : e["client" + i]) || 0;
            };
          }(be, ve, ge),
          ke = function _getOffsetsFunc(e, t) {
            return !t || ~Ye.indexOf(e) ? za(e) : function () {
              return Mt;
            };
          }(be, ve),
          g = 0,
          Ee = I(be, ge);
        if (Se.media = nt, Se._dir = ge, se *= 45, Se.scroller = be, Se.scroll = fe ? fe.time.bind(fe) : Ee, k = Ee(), Se.vars = _, T = T || _.animation, "refreshPriority" in _ && (et = 1, -9999 === _.refreshPriority && (ot = Se)), c.tweenScroll = c.tweenScroll || {
          top: cc(be, Xe),
          left: cc(be, Le)
        }, Se.tweenTo = v = c.tweenScroll[ge.p], Se.scrubDuration = function (e) {
          (i = Ga(e) && e) ? K ? K.duration(e) : K = je.to(T, {
            ease: "expo",
            totalProgress: "+=0.001",
            duration: i,
            paused: !0,
            onComplete: function onComplete() {
              return s && s(Se);
            }
          }) : (K && K.progress(1).kill(), K = 0);
        }, T && (T.vars.lazy = !1, T._initted || !1 !== T.vars.immediateRender && !1 !== _.immediateRender && T.render(0, !0, !0), Se.animation = T.pause(), (T.scrollTrigger = Se).scrubDuration(re), G = 0, a = a || T.vars.id), Tt.push(Se), ce && (Ha(ce) && !ce.push || (ce = {
          snapTo: ce
        }), "scrollBehavior" in We.style && je.set(ve ? [We, Ke] : be, {
          scrollBehavior: "auto"
        }), f = Fa(ce.snapTo) ? ce.snapTo : "labels" === ce.snapTo ? function _getClosestLabel(t) {
          return function (e) {
            return je.utils.snap(fb(t), e);
          };
        }(T) : "labelsDirectional" === ce.snapTo ? function _getLabelAtDirection(r) {
          return function (e, t) {
            return hb(fb(r))(e, t.direction);
          };
        }(T) : !1 !== ce.directional ? function (e, t) {
          return hb(ce.snapTo)(e, Ze ? 0 : t.direction);
        } : je.utils.snap(ce.snapTo), d = ce.duration || {
          min: .1,
          max: 2
        }, d = Ha(d) ? Je(d.min, d.max) : Je(d, d), W = je.delayedCall(ce.delay || i / 2 || .1, function () {
          if (Math.abs(Se.getVelocity()) < 10 && !$e && g !== Ee()) {
            var e = T && !he ? T.totalProgress() : Se.progress,
              t = (e - N) / (st() - Ue) * 1e3 || 0,
              r = je.utils.clamp(-Se.progress, 1 - Se.progress, ut(t / 2) * t / .185),
              n = Se.progress + (!1 === ce.inertia ? 0 : r),
              i = Je(0, 1, f(n, Se)),
              o = Ee(),
              a = Math.round(C + i * z),
              s = ce.onStart,
              l = ce.onInterrupt,
              c = ce.onComplete,
              u = v.tween;
            if (o <= M && C <= o && a !== o) {
              if (u && !u._initted && u.data <= ut(a - o)) return;
              !1 === ce.inertia && (r = i - Se.progress), v(a, {
                duration: d(ut(.185 * Math.max(ut(n - e), ut(i - e)) / t / .05 || 0)),
                ease: ce.ease || "power3",
                data: ut(a - o),
                onInterrupt: function onInterrupt() {
                  return W.restart(!0) && l && l(Se);
                },
                onComplete: function onComplete() {
                  Se.update(), g = Ee(), G = N = T && !he ? T.totalProgress() : Se.progress, p && p(Se), c && c(Se);
                }
              }, o, r * z, a - o - r * z), s && s(Se, v.tween);
            }
          } else Se.isActive && W.restart(!0);
        }).pause()), a && (kt[a] = Se), o = (o = (ne = Se.trigger = H(ne || ie)) && ne._gsap && ne._gsap.stRevert) && o(Se), ie = !0 === ie ? ne : H(ie), Ea(Q) && (Q = {
          targets: ne,
          className: Q
        }), ie && (!1 === oe || oe === mt || (oe = !(!oe && "flex" === ab(ie.parentNode).display) && vt), Se.pin = ie, !1 !== _.force3D && je.set(ie, {
          force3D: !0
        }), (n = je.core.getCache(ie)).spacer ? F = n.pinState : (l && ((l = H(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = Yb(l))), n.spacer = L = l || Ne.createElement("div"), L.classList.add("pin-spacer"), a && L.classList.add("pin-spacer-" + a), n.pinState = F = Yb(ie)), Se.spacer = L = n.spacer, r = ab(ie), y = r[oe + ge.os2], B = je.getProperty(ie), m = je.quickSetter(ie, ge.a, xt), Vb(ie, L, r), R = Yb(ie)), u) {
          e = Ha(u) ? cb(u, St) : St, A = rb("scroller-start", a, be, ge, e, 0), D = rb("scroller-end", a, be, ge, e, 0, A), t = A["offset" + ge.op.d2];
          var h = H(x(be, "content") || be);
          P = this.markerStart = rb("start", a, h, ge, e, t, 0, fe), O = this.markerEnd = rb("end", a, h, ge, e, t, 0, fe), fe && (Z = je.quickSetter([P, O], ge.a, xt)), me || Ye.length && !0 === x(be, "fixedMarkers") || (function _makePositionable(e) {
            var t = ab(e).position;
            e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
          }(ve ? We : be), je.set([A, D], {
            force3D: !0
          }), w = je.quickSetter(A, ge.a, xt), S = je.quickSetter(D, ge.a, xt));
        }
        if (fe) {
          var b = fe.vars.onUpdate,
            Ce = fe.vars.onUpdateParams;
          fe.eventCallback("onUpdate", function () {
            Se.update(0, 0, 1), b && b.apply(Ce || []);
          });
        }
        Se.previous = function () {
          return Tt[Tt.indexOf(Se) - 1];
        }, Se.next = function () {
          return Tt[Tt.indexOf(Se) + 1];
        }, Se.revert = function (e) {
          var t = !1 !== e || !Se.enabled,
            r = Ze;
          t !== Se.isReverted && (t && (!Se.scroll.rec && Ze && it && (Se.scroll.rec = Ee()), J = Math.max(Ee(), Se.scroll.rec || 0), q = Se.progress, U = T && T.progress()), P && [P, O, A, D].forEach(function (e) {
            return e.style.display = t ? "none" : "block";
          }), t && (Ze = 1), Se.update(t), Ze = r, ie && (t ? function _swapPinOut(e, t, r) {
            Ct(r);
            var n = e._gsap;
            if (n.spacerIsNative) Ct(n.spacerState);else if (e.parentNode === t) {
              var i = t.parentNode;
              i && (i.insertBefore(e, t), i.removeChild(t));
            }
          }(ie, L, F) : ue && Se.isActive || Vb(ie, L, ab(ie), V)), Se.isReverted = t);
        }, Se.refresh = function (e, t) {
          if (!Ze && Se.enabled || t) if (ie && e && lt) kb(ScrollTrigger, "scrollEnd", Fb);else {
            !it && _e && _e(Se), Ze = 1, K && K.pause(), ae && T && T.time(-.01, !0).invalidate(), Se.isReverted || Se.revert();
            for (var r, n, i, o, a, s, l, c, u, f, d = Te(), p = ke(), g = fe ? fe.duration() : Ca(be, ge), h = 0, b = 0, v = _.end, m = _.endTrigger || ne, y = _.start || (0 !== _.start && ne ? ie ? "0 0" : "0 100%" : 0), x = Se.pinnedContainer = _.pinnedContainer && H(_.pinnedContainer), w = ne && Math.max(0, Tt.indexOf(Se)) || 0, S = w; S--;) (s = Tt[S]).end || s.refresh(0, 1) || (Ze = 1), !(l = s.pin) || l !== ne && l !== ie || s.isReverted || ((f = f || []).unshift(s), s.revert()), s !== Tt[S] && (w--, S--);
            for (Fa(y) && (y = y(Se)), C = _b(y, ne, d, ge, Ee(), P, A, Se, p, we, me, g, fe) || (ie ? -.001 : 0), Fa(v) && (v = v(Se)), Ea(v) && !v.indexOf("+=") && (~v.indexOf(" ") ? v = (Ea(y) ? y.split(" ")[0] : "") + v : (h = qb(v.substr(2), d), v = Ea(y) ? y : C + h, m = ne)), M = Math.max(C, _b(v || (m ? "100% 0" : g), m, d, ge, Ee() + h, O, D, Se, p, we, me, g, fe)) || -.001, z = M - C || (C -= .01) && .001, h = 0, S = w; S--;) (l = (s = Tt[S]).pin) && s.start - s._pinPush < C && !fe && 0 < s.end && (r = s.end - s.start, l !== ne && l !== x || Ga(y) || (h += r * (1 - s.progress)), l === ie && (b += r));
            if (C += h, M += h, Se._pinPush = b, P && h && ((r = {})[ge.a] = "+=" + h, x && (r[ge.p] = "-=" + Ee()), je.set([P, O], r)), ie) r = ab(ie), o = ge === Xe, i = Ee(), X = parseFloat(B(ge.a)) + b, !g && 1 < M && ((ve ? We : be).style["overflow-" + ge.a] = "scroll"), Vb(ie, L, r), R = Yb(ie), n = wt(ie, !0), c = me && I(be, o ? Le : Xe)(), oe && ((V = [oe + ge.os2, z + b + xt]).t = L, (S = oe === vt ? eb(ie, ge) + z + b : 0) && V.push(ge.d, S + xt), Ct(V), me && Ee(J)), me && ((a = {
              top: n.top + (o ? i - C : c) + xt,
              left: n.left + (o ? c : i - C) + xt,
              boxSizing: "border-box",
              position: "fixed"
            })[ft] = a.maxWidth = Math.ceil(n.width) + xt, a[dt] = a.maxHeight = Math.ceil(n.height) + xt, a[mt] = a[mt + ht] = a[mt + pt] = a[mt + bt] = a[mt + gt] = "0", a[vt] = r[vt], a[vt + ht] = r[vt + ht], a[vt + pt] = r[vt + pt], a[vt + bt] = r[vt + bt], a[vt + gt] = r[vt + gt], Y = function _copyState(e, t, r) {
              for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
              return i.t = e.t, i;
            }(F, a, ue)), T ? (u = T._initted, tt(1), T.render(T.duration(), !0, !0), j = B(ge.a) - X + z + b, z !== j && Y.splice(Y.length - 2, 2), T.render(0, !0, !0), u || T.invalidate(), tt(0)) : j = z;else if (ne && Ee() && !fe) for (n = ne.parentNode; n && n !== We;) n._pinOffset && (C -= n._pinOffset, M -= n._pinOffset), n = n.parentNode;
            f && f.forEach(function (e) {
              return e.revert(!1);
            }), Se.start = C, Se.end = M, k = E = Ee(), fe || (k < J && Ee(J), Se.scroll.rec = 0), Se.revert(!1), W && Se.isActive && Ee(C + z * q), Ze = 0, T && he && (T._initted || U) && T.progress() !== U && T.progress(U, !0).render(T.time(), !0, !0), q === Se.progress && !fe || (T && !he && T.totalProgress(q, !0), Se.progress = q, Se.update(0, 0, 1)), ie && oe && (L._pinOffset = Math.round(Se.progress * j)), te && te(Se);
          }
        }, Se.getVelocity = function () {
          return (Ee() - E) / (st() - Ue) * 1e3 || 0;
        }, Se.endAnimation = function () {
          Ka(Se.callbackAnimation), T && (K ? K.progress(1) : T.paused() ? he || Ka(T, Se.direction < 0, 1) : Ka(T, T.reversed()));
        }, Se.labelToScroll = function (e) {
          return T && T.labels && (C || Se.refresh() || C) + T.labels[e] / T.duration() * z || 0;
        }, Se.getTrailing = function (t) {
          var e = Tt.indexOf(Se),
            r = 0 < Se.direction ? Tt.slice(0, e).reverse() : Tt.slice(e + 1);
          return (Ea(t) ? r.filter(function (e) {
            return e.vars.preventOverlaps === t;
          }) : r).filter(function (e) {
            return 0 < Se.direction ? e.end <= C : e.start >= M;
          });
        }, Se.update = function (e, t, r) {
          if (!fe || r || e) {
            var n,
              i,
              o,
              a,
              s,
              l,
              c,
              u = Se.scroll(),
              f = e ? 0 : (u - C) / z,
              d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
              p = Se.progress;
            if (t && (E = k, k = fe ? Ee() : u, ce && (N = G, G = T && !he ? T.totalProgress() : d)), se && !d && ie && !Ze && !at && lt && C < u + (u - E) / (st() - Ue) * se && (d = 1e-4), d !== p && Se.enabled) {
              if (a = (s = (n = Se.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, Se.direction = p < d ? 1 : -1, Se.progress = d, a && !Ze && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, he && (o = !s && "none" !== xe[i + 1] && xe[i + 1] || xe[i], c = T && ("complete" === o || "reset" === o || o in T))), pe && (s || c) && (c || re || !T) && (Fa(pe) ? pe(Se) : Se.getTrailing(pe).forEach(function (e) {
                return e.endAnimation();
              })), he || (!K || Ze || at ? T && T.totalProgress(d, !!Ze) : ((fe || ot && ot !== Se) && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", d, T._tTime / T._tDur) : (K.vars.totalProgress = d, K.invalidate().restart()))), ie) if (e && oe && (L.style[oe + ge.os2] = y), me) {
                if (a) {
                  if (l = !e && p < d && u < M + 1 && u + 1 >= Ca(be, ge), ue) if (e || !n && !l) bc(ie, L);else {
                    var g = wt(ie, !0),
                      h = u - C;
                    bc(ie, We, g.top + (ge === Xe ? h : 0) + xt, g.left + (ge === Xe ? 0 : h) + xt);
                  }
                  Ct(n || l ? Y : R), j !== z && d < 1 && n || m(X + (1 !== d || l ? 0 : j));
                }
              } else m(va(X + j * d));
              !ce || v.tween || Ze || at || W.restart(!0), Q && (s || le && d && (d < 1 || !rt)) && qe(Q.targets).forEach(function (e) {
                return e.classList[n || le ? "add" : "remove"](Q.className);
              }), !$ || he || e || $(Se), a && !Ze ? (he && (c && ("complete" === o ? T.pause().totalProgress(1) : "reset" === o ? T.restart(!0).pause() : "restart" === o ? T.restart(!0) : T[o]()), $ && $(Se)), !s && rt || (ee && s && La(Se, ee), ye[i] && La(Se, ye[i]), le && (1 === d ? Se.kill(!1, 1) : ye[i] = 0), s || ye[i = 1 === d ? 1 : 3] && La(Se, ye[i])), de && !n && Math.abs(Se.getVelocity()) > (Ga(de) ? de : 2500) && (Ka(Se.callbackAnimation), K ? K.progress(1) : Ka(T, !d, 1))) : he && $ && !Ze && $(Se);
            }
            if (S) {
              var b = fe ? u / fe.duration() * (fe._caScrollDist || 0) : u;
              w(b + (A._isFlipped ? 1 : 0)), S(b);
            }
            Z && Z(-u / fe.duration() * (fe._caScrollDist || 0));
          }
        }, Se.enable = function (e, t) {
          Se.enabled || (Se.enabled = !0, kb(be, "resize", yb), kb(ve ? Ne : be, "scroll", xb), _e && kb(ScrollTrigger, "refreshInit", _e), !1 !== e && (Se.progress = q = 0, k = E = g = Ee()), !1 !== t && Se.refresh());
        }, Se.getTween = function (e) {
          return e && v ? v.tween : K;
        }, Se.setPositions = function (e, t) {
          ie && (X += e - C, j += t - e - z), Se.start = C = e, Se.end = M = t, z = t - e, Se.update();
        }, Se.disable = function (e, t) {
          if (Se.enabled && (!1 !== e && Se.revert(), Se.enabled = Se.isActive = !1, t || K && K.pause(), J = 0, n && (n.uncache = 1), _e && lb(ScrollTrigger, "refreshInit", _e), W && (W.pause(), v.tween && v.tween.kill() && (v.tween = 0)), !ve)) {
            for (var r = Tt.length; r--;) if (Tt[r].scroller === be && Tt[r] !== Se) return;
            lb(be, "resize", yb), lb(be, "scroll", xb);
          }
        }, Se.kill = function (e, t) {
          Se.disable(e, t), K && !t && K.kill(), a && delete kt[a];
          var r = Tt.indexOf(Se);
          0 <= r && Tt.splice(r, 1), r === Qe && 0 < Et && Qe--, r = 0, Tt.forEach(function (e) {
            return e.scroller === Se.scroller && (r = 1);
          }), r || (Se.scroll.rec = 0), T && (T.scrollTrigger = null, e && T.render(-1), t || T.kill()), P && [P, O, A, D].forEach(function (e) {
            return e.parentNode && e.parentNode.removeChild(e);
          }), ie && (n && (n.uncache = 1), r = 0, Tt.forEach(function (e) {
            return e.pin === ie && r++;
          }), r || (n.spacer = 0)), _.onKill && _.onKill(Se);
        }, Se.enable(!1, !1), o && o(Se), T && T.add && !z ? je.delayedCall(.01, function () {
          return C || M || Se.refresh();
        }) && (z = .01) && (C = M = 0) : Se.refresh();
      } else this.update = this.refresh = this.kill = ua;
    }, ScrollTrigger.register = function register(e) {
      return o || (je = e || xa(), wa() && window.document && ScrollTrigger.enable(), o = ct), o;
    }, ScrollTrigger.defaults = function defaults(e) {
      if (e) for (var t in e) _t[t] = e[t];
      return _t;
    }, ScrollTrigger.disable = function disable(t, r) {
      ct = 0, Tt.forEach(function (e) {
        return e[r ? "kill" : "disable"](t);
      }), lb(Ve, "wheel", xb), lb(Ne, "scroll", xb), clearInterval(l), lb(Ne, "touchcancel", ua), lb(We, "touchstart", ua), jb(lb, Ne, "pointerdown,touchstart,mousedown", sa), jb(lb, Ne, "pointerup,touchend,mouseup", ta), s.kill(), Da(lb);
      for (var e = 0; e < ze.length; e += 3) mb(lb, ze[e], ze[e + 1]), mb(lb, ze[e], ze[e + 2]);
    }, ScrollTrigger.enable = function enable() {
      if (Ve = window, Ne = document, Ke = Ne.documentElement, We = Ne.body, je && (qe = je.utils.toArray, Je = je.utils.clamp, tt = je.core.suppressOverwrites || ua, je.core.globals("ScrollTrigger", ScrollTrigger), We)) {
        ct = 1, ScrollTrigger.isTouch = Ve.matchMedia && Ve.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Ve || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, a = [Ve, Ne, Ke, We], m = Ve.innerHeight, S = Ve.innerWidth, w.register(je), kb(Ne, "scroll", xb);
        var e,
          t,
          r = We.style,
          n = r.borderTopStyle;
        for (r.borderTopStyle = "solid", e = wt(We), Xe.m = Math.round(e.top + Xe.sc()) || 0, Le.m = Math.round(e.left + Le.sc()) || 0, n ? r.borderTopStyle = n : r.removeProperty("border-top-style"), l = setInterval(wb, 250), je.delayedCall(.5, function () {
          return at = 0;
        }), kb(Ne, "touchcancel", ua), kb(We, "touchstart", ua), jb(kb, Ne, "pointerdown,touchstart,mousedown", sa), jb(kb, Ne, "pointerup,touchend,mouseup", ta), c = je.utils.checkPrefix("transform"), Q.push(c), o = st(), s = je.delayedCall(.2, q).pause(), g = [Ne, "visibilitychange", function () {
          var e = Ve.innerWidth,
            t = Ve.innerHeight;
          Ne.hidden ? (f = e, d = t) : f === e && d === t || yb();
        }, Ne, "DOMContentLoaded", q, Ve, "load", q, Ve, "resize", yb], Da(kb), Tt.forEach(function (e) {
          return e.enable(0, 1);
        }), t = 0; t < ze.length; t += 3) mb(lb, ze[t], ze[t + 1]), mb(lb, ze[t], ze[t + 2]);
      }
    }, ScrollTrigger.config = function config(e) {
      "limitCallbacks" in e && (rt = !!e.limitCallbacks);
      var t = e.syncInterval;
      t && clearInterval(l) || (l = t) && setInterval(wb, t), "ignoreMobileResize" in e && (v = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Da(lb) || Da(kb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"));
    }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
      var r = H(e),
        n = ze.indexOf(r),
        i = ya(r);
      ~n && ze.splice(n, i ? 6 : 2), t && (i ? Ye.unshift(Ve, t, We, t, Ke, t) : Ye.unshift(r, t));
    }, ScrollTrigger.matchMedia = function matchMedia(e) {
      var t, r, n, i, o;
      for (r in e) n = X.indexOf(r), i = e[r], "all" === (nt = r) ? i() : (t = Ve.matchMedia(r)) && (t.matches && (o = i()), ~n ? (X[n + 1] = Ja(X[n + 1], i), X[n + 2] = Ja(X[n + 2], o)) : (n = X.length, X.push(r, i, o), t.addListener ? t.addListener(Eb) : t.addEventListener("change", Eb)), X[n + 3] = t.matches), nt = 0;
      return X;
    }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(e) {
      e || (X.length = 0), 0 <= (e = X.indexOf(e)) && X.splice(e, 4);
    }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
      var n = (Ea(e) ? H(e) : e).getBoundingClientRect(),
        i = n[r ? ft : dt] * t || 0;
      return r ? 0 < n.right - i && n.left + i < Ve.innerWidth : 0 < n.bottom - i && n.top + i < Ve.innerHeight;
    }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
      Ea(e) && (e = H(e));
      var n = e.getBoundingClientRect(),
        i = n[r ? ft : dt],
        o = null == t ? i / 2 : t in F ? F[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
      return r ? (n.left + o) / Ve.innerWidth : (n.top + o) / Ve.innerHeight;
    }, ScrollTrigger);
  function ScrollTrigger(e, t) {
    o || ScrollTrigger.register(je) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
  }
  re.version = "3.10.2", re.saveStyles = function (e) {
    return e ? qe(e).forEach(function (e) {
      if (e && e.style) {
        var t = V.indexOf(e);
        0 <= t && V.splice(t, 5), V.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), je.core.getCache(e), nt);
      }
    }) : V;
  }, re.revert = function (e, t) {
    return N(!e, t);
  }, re.create = function (e, t) {
    return new re(e, t);
  }, re.refresh = function (e) {
    return e ? yb() : (o || re.register()) && q(!0);
  }, re.update = Z, re.clearScrollMemory = Kb, re.maxScroll = function (e, t) {
    return Ca(e, t ? Le : Xe);
  }, re.getScrollFunc = function (e, t) {
    return I(H(e), t ? Le : Xe);
  }, re.getById = function (e) {
    return kt[e];
  }, re.getAll = function () {
    return Tt.filter(function (e) {
      return "ScrollSmoother" !== e.vars.id;
    });
  }, re.isScrolling = function () {
    return !!lt;
  }, re.snapDirectional = hb, re.addEventListener = function (e, t) {
    var r = R[e] || (R[e] = []);
    ~r.indexOf(t) || r.push(t);
  }, re.removeEventListener = function (e, t) {
    var r = R[e],
      n = r && r.indexOf(t);
    0 <= n && r.splice(n, 1);
  }, re.batch = function (e, t) {
    function On(e, t) {
      var r = [],
        n = [],
        i = je.delayedCall(o, function () {
          t(r, n), r = [], n = [];
        }).pause();
      return function (e) {
        r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1);
      };
    }
    var r,
      n = [],
      i = {},
      o = t.interval || .016,
      a = t.batchMax || 1e9;
    for (r in t) i[r] = "on" === r.substr(0, 2) && Fa(t[r]) && "onRefreshInit" !== r ? On(0, t[r]) : t[r];
    return Fa(a) && (a = a(), kb(re, "refresh", function () {
      return a = t.batchMax();
    })), qe(e).forEach(function (e) {
      var t = {};
      for (r in i) t[r] = i[r];
      t.trigger = e, n.push(re.create(t));
    }), n;
  };
  function ec(e, t, r, n) {
    return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1;
  }
  function fc(e) {
    !0 === e ? (We.style.removeProperty("touch-action"), Ke.style.removeProperty("touch-action")) : We.style.touchAction = Ke.style.touchAction = e ? "pan-" + e : "none";
  }
  function gc(e) {
    function po() {
      return d = st();
    }
    function qo() {
      return n = !1;
    }
    function to() {
      r = Ca(Ke, Xe), m = Je(0, r), f && (v = Je(0, Ca(Ke, Le))), o = W;
    }
    function Bo() {
      to(), s.isActive() && s.vars.scrollY > r && s.resetTo("scrollY", Ca(Ke, Xe));
    }
    Ha(e) || (e = {}), e.preventDefault = e.isNormalizer = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
    var t,
      r,
      n,
      o,
      s,
      a,
      l,
      c,
      u,
      f = e.normalizeScrollX,
      i = e.momentum,
      d = 0,
      p = I(Ke, Xe),
      g = I(Ke, Le),
      h = 1,
      b = Fa(i) ? function () {
        return i(t);
      } : function () {
        return i || 2.8;
      },
      v = ua,
      m = ua,
      y = re.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
    return e.ignoreCheck = function (e) {
      return y && "touchmove" === e.type && function ignoreDrag() {
        if (n) return requestAnimationFrame(qo), !0;
        n = !0;
      }() || 1 < h || t.isGesturing || e.touches && 1 < e.touches.length;
    }, e.onPress = function () {
      var e = h;
      h = Ve.visualViewport && Ve.visualViewport.scale || 1, s.pause(), e !== h && fc(1 < h || !f && "x"), n = !1, a = g(), l = p(), to(), o = W;
    }, e.onRelease = e.onGestureStart = function (e, t) {
      var r = e.event,
        n = r.changedTouches ? r.changedTouches[0] : r;
      if (!t || Math.abs(e.x - e.startX) <= 3 && Math.abs(e.y - e.startY) <= 3) je.delayedCall(.05, function () {
        if (300 < st() - d && !r.defaultPrevented) if (r.target.click) r.target.click();else if (c.createEvent) {
          var e = c.createEvent("MouseEvents");
          e.initMouseEvent("click", !0, !0, Ve, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), r.target.dispatchEvent(e);
        }
      }), u.restart(!0);else {
        var i,
          o,
          a = b();
        f && (o = (i = g()) + .05 * a * -e.velocityX / .227 / h, a *= ec(g, i, o, Ca(Ke, Le)), s.vars.scrollX = v(o)), o = (i = p()) + .05 * a * -e.velocityY / .227 / h, a *= ec(p, i, o, Ca(Ke, Xe)), s.vars.scrollY = m(o), s.invalidate().duration(a).play(.01);
      }
    }, e.onWheel = function () {
      return s._ts && s.pause();
    }, e.onChange = function (e, t, r, n, i) {
      W !== o && to(), t && f && g(v(n[2] === t ? a + (e.startX - e.x) / h : g() + t - n[1])), r && p(m(i[2] === r ? l + (e.startY - e.y) / h : p() + r - i[1])), Z();
    }, e.onEnable = function (e) {
      fc(!f && "x"), kb(Ve, "resize", Bo), e.target.addEventListener("click", po, {
        capture: !0
      });
    }, e.onDisable = function (e) {
      fc(!0), lb(Ve, "resize", Bo), lb(e.target, "click", po);
    }, t = new w(e), c = t.target.ownerDocument || Ne, u = t._dc, s = je.to(t, {
      ease: "power4",
      paused: !0,
      scrollX: f ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      onComplete: u.vars.onComplete
    }), t;
  }
  re.sort = function (e) {
    return Tt.sort(e || function (e, t) {
      return -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0));
    });
  }, re.observe = function (e) {
    return new w(e);
  }, re.normalizeScroll = function (e) {
    if (void 0 === e) return b;
    if (!0 === e && b) return b.enable();
    var t = e instanceof w;
    return b && (!1 === e || t && e !== b) && b.kill(), e && !t && (e = gc(e)), b = e && e.enable();
  }, re.core = {
    _getVelocityProp: J,
    _scrollers: ze,
    _proxies: Ye,
    bridge: {
      ss: function ss() {
        lt || j("scrollStart"), lt = st();
      },
      ref: function ref() {
        return Ze;
      }
    }
  }, xa() && je.registerPlugin(re), e.ScrollTrigger = re, e.default = re;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});

/***/ }),

/***/ "./assets/_src/js/components/gsap/gsap.min.js":
/*!****************************************************!*\
  !*** ./assets/_src/js/components/gsap/gsap.min.js ***!
  \****************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * GSAP 3.10.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function (t, e) {
  "object" == ( false ? 0 : _typeof(exports)) && "undefined" != "object" ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function (e) {
  "use strict";

  function _inheritsLoose(t, e) {
    t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
  }
  function _assertThisInitialized(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function o(t) {
    return "string" == typeof t;
  }
  function p(t) {
    return "function" == typeof t;
  }
  function q(t) {
    return "number" == typeof t;
  }
  function r(t) {
    return void 0 === t;
  }
  function s(t) {
    return "object" == _typeof(t);
  }
  function t(t) {
    return !1 !== t;
  }
  function u() {
    return "undefined" != typeof window;
  }
  function v(t) {
    return p(t) || o(t);
  }
  function M(t) {
    return (h = mt(t, ot)) && he;
  }
  function N(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function O(t, e) {
    return !e && console.warn(t);
  }
  function P(t, e) {
    return t && (ot[t] = e) && h && (h[t] = e) || ot;
  }
  function Q() {
    return 0;
  }
  function $(t) {
    var e,
      r,
      i = t[0];
    if (s(i) || p(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
      for (r = pt.length; r-- && !pt[r].targetTest(i););
      e = pt[r];
    }
    for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Lt(t[r], e))) || t.splice(r, 1);
    return t;
  }
  function _(t) {
    return t._gsap || $(xt(t))[0]._gsap;
  }
  function aa(t, e, i) {
    return (i = t[e]) && p(i) ? t[e]() : r(i) && t.getAttribute && t.getAttribute(e) || i;
  }
  function ba(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function ca(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function da(t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  }
  function ea(t, e) {
    var r = e.charAt(0),
      i = parseFloat(e.substr(2));
    return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i;
  }
  function fa(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
    return i < r;
  }
  function ga() {
    var t,
      e,
      r = ht.length,
      i = ht.slice(0);
    for (lt = {}, t = ht.length = 0; t < r; t++) (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function ha(t, e, r, i) {
    ht.length && ga(), t.render(e, r, i), ht.length && ga();
  }
  function ia(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(at).length < 2 ? e : o(t) ? t.trim() : t;
  }
  function ja(t) {
    return t;
  }
  function ka(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function na(t, e) {
    for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = s(e[r]) ? na(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function oa(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function pa(e) {
    var r = e.parent || I,
      i = e.keyframes ? function _setKeyframeDefaults(i) {
        return function (t, e) {
          for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r]);
        };
      }(J(e.keyframes)) : ka;
    if (t(e.inherit)) for (; r;) i(e, r.vars.defaults), r = r.parent || r._dp;
    return e;
  }
  function ra(t, e, r, i, n) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var a,
      s = t[i];
    if (n) for (a = e[n]; s && s[n] > a;) s = s._prev;
    return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e;
  }
  function sa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
  }
  function ta(t, e) {
    !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
  }
  function ua(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r;) r._dirty = 1, r = r.parent;
    return t;
  }
  function xa(t) {
    return t._repeat ? gt(t._tTime, t = t.duration() + t._rDelay) * t : 0;
  }
  function za(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function Aa(t) {
    return t._end = da(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0));
  }
  function Ba(t, e) {
    var r = t._dp;
    return r && r.smoothChildTiming && t._ts && (t._start = da(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Aa(t), r._dirty || ua(r, t)), t;
  }
  function Ca(t, e) {
    var r;
    if ((e._time || e._initted && !e._dur) && (r = za(t.rawTime(), e), (!e._dur || bt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), ua(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
      if (t._dur < t.duration()) for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
      t._zTime = -V;
    }
  }
  function Da(t, e, r, i) {
    return e.parent && ta(e), e._start = da((q(r) ? r : r || t !== I ? Tt(t, r, e) : t._time) + e._delay), e._end = da(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), ra(t, e, "_first", "_last", t._sort ? "_start" : 0), vt(e) || (t._recent = e), i || Ca(t, e), t;
  }
  function Ea(t, e) {
    return (ot.ScrollTrigger || N("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t);
  }
  function Fa(t, e, r, i) {
    return Xt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Dt.frame ? (ht.push(t), t._lazy = [e, i], 1) : void 0 : 1;
  }
  function Ka(t, e, r, i) {
    var n = t._repeat,
      a = da(e) || 0,
      s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : da(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i ? Ba(t, t._tTime = t._tDur * s) : t.parent && Aa(t), r || ua(t.parent, t), t;
  }
  function La(t) {
    return t instanceof Ut ? ua(t) : Ka(t, t._dur);
  }
  function Oa(e, r, i) {
    var n,
      a,
      s = q(r[1]),
      o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
      u = r[o];
    if (s && (u.duration = r[1]), u.parent = i, e) {
      for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = t(a.vars.inherit) && a.parent;
      u.immediateRender = t(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1];
    }
    return new $t(r[0], u, r[1 + o]);
  }
  function Pa(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Ra(t, e) {
    return o(t) && (e = st.exec(t)) ? e[1] : "";
  }
  function Ua(t, e) {
    return t && s(t) && "length" in t && (!e && !t.length || t.length - 1 in t && s(t[0])) && !t.nodeType && t !== i;
  }
  function Ya(t) {
    return t.sort(function () {
      return .5 - Math.random();
    });
  }
  function Za(t) {
    if (p(t)) return t;
    var c = s(t) ? t : {
        each: t
      },
      m = Bt(c.ease),
      g = c.from || 0,
      v = parseFloat(c.base) || 0,
      y = {},
      e = 0 < g && g < 1,
      T = isNaN(g) || e,
      b = c.axis,
      w = g,
      x = g;
    return o(g) ? w = x = {
      center: .5,
      edges: .5,
      end: 1
    }[g] || 0 : !e && T && (w = g[0], x = g[1]), function (t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d = (r || c).length,
        _ = y[d];
      if (!_) {
        if (!(f = "auto" === c.grid ? 0 : (c.grid || [1, Y])[1])) {
          for (h = -Y; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
          f--;
        }
        for (_ = y[d] = [], i = T ? Math.min(f, d) * w - .5 : g % f, n = f === Y ? 0 : T ? d * x / f - .5 : g / f | 0, l = Y, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), _[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
        "random" === g && Ya(_), _.max = h - l, _.min = l, _.v = d = (parseFloat(c.amount) || parseFloat(c.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === g ? -1 : 1), _.b = d < 0 ? v - d : v, _.u = Ra(c.amount || c.each) || 0, m = m && d < 0 ? Ft(m) : m;
      }
      return d = (_[t] - _.min) / _.max || 0, da(_.b + (m ? m(d) : d) * _.v) + _.u;
    };
  }
  function $a(r) {
    var i = Math.pow(10, ((r + "").split(".")[1] || "").length);
    return function (t) {
      var e = Math.round(parseFloat(t) / r) * r * i;
      return (e - e % 1) / i + (q(t) ? 0 : Ra(t));
    };
  }
  function _a(u, t) {
    var h,
      l,
      e = J(u);
    return !e && s(u) && (h = e = u.radius || Y, u.values ? (u = xt(u.values), (l = !q(u[0])) && (h *= h)) : u = $a(u.increment)), Pa(t, e ? p(u) ? function (t) {
      return l = u(t), Math.abs(l - t) <= h ? l : t;
    } : function (t) {
      for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = Y, s = 0, o = u.length; o--;) (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
      return s = !h || a <= h ? u[s] : t, l || s === t || q(t) ? s : s + Ra(t);
    } : $a(u));
  }
  function ab(t, e, r, i) {
    return Pa(J(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return J(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i;
    });
  }
  function eb(e, r, t) {
    return Pa(t, function (t) {
      return e[~~r(t)];
    });
  }
  function hb(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + ab(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
    return s + t.substr(a, t.length - a);
  }
  function kb(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = Y;
    for (i in s) (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
    return a;
  }
  function mb(t) {
    return ta(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && Ot(t, "onInterrupt"), t;
  }
  function rb(t, e, r) {
    return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * Pt + .5 | 0;
  }
  function sb(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      _ = t ? q(t) ? [t >> 16, t >> 8 & Pt, t & Pt] : 0 : Mt.black;
    if (!_) {
      if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Mt[t]) _ = Mt[t];else if ("#" === t.charAt(0)) {
        if (t.length < 6 && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(_ = parseInt(t.substr(1, 6), 16)) >> 16, _ >> 8 & Pt, _ & Pt, parseInt(t.substr(7), 16) / 255];
        _ = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & Pt, t & Pt];
      } else if ("hsl" === t.substr(0, 3)) {
        if (_ = d = t.match(tt), e) {
          if (~t.indexOf("=")) return _ = t.match(et), r && _.length < 4 && (_[3] = 1), _;
        } else s = +_[0] % 360 / 360, o = _[1] / 100, i = 2 * (u = _[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < _.length && (_[3] *= 1), _[0] = rb(s + 1 / 3, i, n), _[1] = rb(s, i, n), _[2] = rb(s - 1 / 3, i, n);
      } else _ = t.match(tt) || Mt.transparent;
      _ = _.map(Number);
    }
    return e && !d && (i = _[0] / Pt, n = _[1] / Pt, a = _[2] / Pt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), _[0] = ~~(s + .5), _[1] = ~~(100 * o + .5), _[2] = ~~(100 * u + .5)), r && _.length < 4 && (_[3] = 1), _;
  }
  function tb(t) {
    var r = [],
      i = [],
      n = -1;
    return t.split(Ct).forEach(function (t) {
      var e = t.match(rt) || [];
      r.push.apply(r, e), i.push(n += e.length + 1);
    }), r.c = i, r;
  }
  function ub(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Ct),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (u = u.map(function (t) {
      return (t = sb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
    }), r && (a = tb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(Ct, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Ct)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function xb(t) {
    var e,
      r = t.join(" ");
    if (Ct.lastIndex = 0, Ct.test(r)) return e = At.test(r), t[1] = ub(t[1], e), t[0] = ub(t[0], e, tb(t[1])), !0;
  }
  function Gb(t) {
    var e = (t + "").split("("),
      r = zt[e[0]];
    return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
      for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Et, "").trim() : +i, s = r.substr(e + 1).trim();
      return n;
    }(e[1])] : function _valueInParentheses(t) {
      var e = t.indexOf("(") + 1,
        r = t.indexOf(")"),
        i = t.indexOf("(", e);
      return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
    }(t).split(",").map(ia)) : zt._CE && Rt.test(t) ? zt._CE("", t) : r;
  }
  function Ib(t, e) {
    for (var r, i = t._first; i;) i instanceof Ut ? Ib(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Ib(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
  }
  function Kb(t, e, r, i) {
    void 0 === r && (r = function easeOut(t) {
      return 1 - e(1 - t);
    }), void 0 === i && (i = function easeInOut(t) {
      return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
    });
    var n,
      a = {
        easeIn: e,
        easeOut: r,
        easeInOut: i
      };
    return ba(t, function (t) {
      for (var e in zt[t] = ot[t] = a, zt[n = t.toLowerCase()] = r, a) zt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = zt[t + "." + e] = a[e];
    }), a;
  }
  function Lb(e) {
    return function (t) {
      return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
    };
  }
  function Mb(r, t, e) {
    function em(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Z((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
      a = n / X * (Math.asin(1 / i) || 0),
      s = "out" === r ? em : "in" === r ? function (t) {
        return 1 - em(1 - t);
      } : Lb(em);
    return n = X / n, s.config = function (t, e) {
      return Mb(r, t, e);
    }, s;
  }
  function Nb(e, r) {
    function mm(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t = "out" === e ? mm : "in" === e ? function (t) {
      return 1 - mm(1 - t);
    } : Lb(mm);
    return t.config = function (t) {
      return Nb(e, t);
    }, t;
  }
  var B,
    I,
    i,
    n,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    y,
    T,
    b,
    w,
    x,
    k,
    C,
    A,
    D,
    S,
    z,
    R,
    E,
    F,
    U = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
    L = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
    Y = 1e8,
    V = 1 / Y,
    X = 2 * Math.PI,
    j = X / 4,
    K = 0,
    G = Math.sqrt,
    W = Math.cos,
    Z = Math.sin,
    H = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () {},
    J = Array.isArray,
    tt = /(?:-?\.?\d|\.)+/gi,
    et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    nt = /[+-]=-?[.\d]+/,
    at = /[^,'"\[\]\s]+/gi,
    st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ot = {},
    ut = {},
    ht = [],
    lt = {},
    ft = {},
    dt = {},
    _t = 30,
    pt = [],
    ct = "",
    mt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    gt = function _animationCycle(t, e) {
      var r = Math.floor(t /= e);
      return t && r === t ? r - 1 : r;
    },
    vt = function _isFromOrFromStart(t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    yt = {
      _start: 0,
      endTime: Q,
      totalDuration: Q
    },
    Tt = function _parsePosition(t, e, r) {
      var i,
        n,
        a,
        s = t.labels,
        u = t._recent || yt,
        h = t.duration() >= Y ? u.endTime(!1) : t._dur;
      return o(e) && (isNaN(e) || e in s) ? (n = e.charAt(0), a = "%" === e.substr(-1), i = e.indexOf("="), "<" === n || ">" === n ? (0 <= i && (e = e.replace(/=/, "")), ("<" === n ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (a ? (i < 0 ? u : r).totalDuration() / 100 : 1)) : i < 0 ? (e in s || (s[e] = h), s[e]) : (n = parseFloat(e.charAt(i - 1) + e.substr(i + 1)), a && r && (n = n / 100 * (J(r) ? r[0] : r).totalDuration()), 1 < i ? _parsePosition(t, e.substr(0, i - 1), r) + n : h + n)) : null == e ? h : +e;
    },
    bt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    wt = [].slice,
    xt = function toArray(t, e, r) {
      return !o(t) || r || !n && St() ? J(t) ? function _flatten(t, e, r) {
        return void 0 === r && (r = []), t.forEach(function (t) {
          return o(t) && !e || Ua(t, 1) ? r.push.apply(r, xt(t)) : r.push(t);
        }) || r;
      }(t, r) : Ua(t) ? wt.call(t, 0) : t ? [t] : [] : wt.call((e || a).querySelectorAll(t), 0);
    },
    kt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Pa(n, function (t) {
        return r + ((t - e) / a * s || 0);
      });
    },
    Ot = function _callback(t, e, r) {
      var i,
        n,
        a = t.vars,
        s = a[e];
      if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ht.length && ga(), i ? s.apply(n, i) : s.call(n);
    },
    Pt = 255,
    Mt = {
      aqua: [0, Pt, Pt],
      lime: [0, Pt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, Pt],
      navy: [0, 0, 128],
      white: [Pt, Pt, Pt],
      olive: [128, 128, 0],
      yellow: [Pt, Pt, 0],
      orange: [Pt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [Pt, 0, 0],
      pink: [Pt, 192, 203],
      cyan: [0, Pt, Pt],
      transparent: [Pt, Pt, Pt, 0]
    },
    Ct = function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Mt) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    }(),
    At = /hsl[a]?\(/,
    Dt = (x = Date.now, k = 500, C = 33, A = x(), D = A, z = S = 1e3 / 240, T = {
      time: 0,
      frame: 0,
      tick: function tick() {
        Vk(!0);
      },
      deltaRatio: function deltaRatio(t) {
        return b / (1e3 / (t || 60));
      },
      wake: function wake() {
        l && (!n && u() && (i = n = window, a = i.document || {}, ot.gsap = he, (i.gsapVersions || (i.gsapVersions = [])).push(he.version), M(h || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), m && T.sleep(), g = y || function (t) {
          return setTimeout(t, z - 1e3 * T.time + 1 | 0);
        }, c = 1, Vk(2));
      },
      sleep: function sleep() {
        (y ? i.cancelAnimationFrame : clearTimeout)(m), c = 0, g = Q;
      },
      lagSmoothing: function lagSmoothing(t, e) {
        k = t || 1e8, C = Math.min(e, k, 0);
      },
      fps: function fps(t) {
        S = 1e3 / (t || 240), z = 1e3 * T.time + S;
      },
      add: function add(n, t, e) {
        var a = t ? function (t, e, r, i) {
          n(t, e, r, i), T.remove(a);
        } : n;
        return T.remove(n), R[e ? "unshift" : "push"](a), St(), a;
      },
      remove: function remove(t, e) {
        ~(e = R.indexOf(t)) && R.splice(e, 1) && e <= w && w--;
      },
      _listeners: R = []
    }),
    St = function _wake() {
      return !c && Dt.wake();
    },
    zt = {},
    Rt = /^[\d.\-M][\d.\-,\s]/,
    Et = /["']/g,
    Ft = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Bt = function _parseEase(t, e) {
      return t && (p(t) ? t : zt[t] || Gb(t)) || e;
    };
  function Vk(t) {
    var e,
      r,
      i,
      n,
      a = x() - D,
      s = !0 === t;
    if (k < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++T.frame, b = i - 1e3 * T.time, T.time = i /= 1e3, z += e + (S <= e ? 4 : S - e), r = 1), s || (m = g(Vk)), r) for (w = 0; w < R.length; w++) R[w](i, b, n, t);
  }
  function Dm(t) {
    return t < F ? E * t * t : t < .7272727272727273 ? E * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? E * (t -= 2.25 / 2.75) * t + .9375 : E * Math.pow(t - 2.625 / 2.75, 2) + .984375;
  }
  ba("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Kb(t + ",Power" + (r - 1), e ? function (t) {
      return Math.pow(t, r);
    } : function (t) {
      return t;
    }, function (t) {
      return 1 - Math.pow(1 - t, r);
    }, function (t) {
      return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
    });
  }), zt.Linear.easeNone = zt.none = zt.Linear.easeIn, Kb("Elastic", Mb("in"), Mb("out"), Mb()), E = 7.5625, F = 1 / 2.75, Kb("Bounce", function (t) {
    return 1 - Dm(1 - t);
  }, Dm), Kb("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }), Kb("Circ", function (t) {
    return -(G(1 - t * t) - 1);
  }), Kb("Sine", function (t) {
    return 1 === t ? 1 : 1 - W(t * j);
  }), Kb("Back", Nb("in"), Nb("out"), Nb()), zt.SteppedEase = zt.steps = ot.SteppedEase = {
    config: function config(t, e) {
      void 0 === t && (t = 1);
      var r = 1 / t,
        i = t + (e ? 0 : 1),
        n = e ? 1 : 0;
      return function (t) {
        return ((i * bt(0, .99999999, t) | 0) + n) * r;
      };
    }
  }, L.ease = zt["quad.out"], ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
    return ct += t + "," + t + "Params,";
  });
  var It,
    Lt = function GSCache(t, e) {
      this.id = K++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : aa, this.set = e ? e.getSetter : Ht;
    },
    Nt = ((It = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, It.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, It.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0, Ka(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, It.totalTime = function totalTime(t, e) {
      if (St(), !arguments.length) return this._tTime;
      var r = this._dp;
      if (r && r.smoothChildTiming && this._ts) {
        for (Ba(this, t), !r._dp || r.parent || Ca(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Da(this._dp, this, this._start - this._delay);
      }
      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), ha(this, t, e)), this;
    }, It.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + xa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time;
    }, It.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, It.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + xa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, It.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? gt(this._tTime, r) + 1 : 1;
    }, It.timeScale = function timeScale(t) {
      if (!arguments.length) return this._rts === -V ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? za(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(bt(-this._delay, this._tDur, e), !0), Aa(this), function _recacheAncestors(t) {
        for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
        return t;
      }(this);
    }, It.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (St(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps;
    }, It.startTime = function startTime(t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return !e || !e._sort && this.parent || Da(e, this, t - this._delay), this;
      }
      return this._start;
    }, It.endTime = function endTime(e) {
      return this._start + (t(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    }, It.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? za(e.rawTime(t), this) : this._tTime : this._tTime;
    }, It.globalTime = function globalTime(t) {
      for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
      return r;
    }, It.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, La(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
    }, It.repeatDelay = function repeatDelay(t) {
      if (arguments.length) {
        var e = this._time;
        return this._rDelay = t, La(this), e ? this.time(e) : this;
      }
      return this._rDelay;
    }, It.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, It.seek = function seek(e, r) {
      return this.totalTime(Tt(this, e), t(r));
    }, It.restart = function restart(e, r) {
      return this.play().totalTime(e ? -this._delay : 0, t(r));
    }, It.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, It.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, It.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, It.resume = function resume() {
      return this.paused(!1);
    }, It.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0;
    }, It.invalidate = function invalidate() {
      return this._initted = this._act = 0, this._zTime = -V, this;
    }, It.isActive = function isActive() {
      var t,
        e = this.parent || this._dp,
        r = this._start;
      return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V));
    }, It.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, It.then = function then(t) {
      var i = this;
      return new Promise(function (e) {
        function Un() {
          var t = i.then;
          i.then = null, p(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
        }
        var r = p(t) ? t : ja;
        i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Un() : i._prom = Un;
      });
    }, It.kill = function kill() {
      mb(this);
    }, Animation);
  function Animation(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ka(this, +t.duration, 1, 1), this.data = t.data, c || Dt.wake();
  }
  ka(Nt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -V,
    _prom: 0,
    _ps: !1,
    _rts: 1
  });
  var Ut = function (n) {
    function Timeline(e, r) {
      var i;
      return void 0 === e && (e = {}), (i = n.call(this, e) || this).labels = {}, i.smoothChildTiming = !!e.smoothChildTiming, i.autoRemoveChildren = !!e.autoRemoveChildren, i._sort = t(e.sortChildren), I && Da(e.parent || I, _assertThisInitialized(i), r), e.reversed && i.reverse(), e.paused && i.paused(!0), e.scrollTrigger && Ea(_assertThisInitialized(i), e.scrollTrigger), i;
    }
    _inheritsLoose(Timeline, n);
    var e = Timeline.prototype;
    return e.to = function to(t, e, r) {
      return Oa(0, arguments, this), this;
    }, e.from = function from(t, e, r) {
      return Oa(1, arguments, this), this;
    }, e.fromTo = function fromTo(t, e, r, i) {
      return Oa(2, arguments, this), this;
    }, e.set = function set(t, e, r) {
      return e.duration = 0, e.parent = this, pa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new $t(t, e, Tt(this, r), 1), this;
    }, e.call = function call(t, e, r) {
      return Da(this, $t.delayedCall(0, t, e), r);
    }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
      return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new $t(t, r, Tt(this, n)), this;
    }, e.staggerFrom = function staggerFrom(e, r, i, n, a, s, o) {
      return i.runBackwards = 1, pa(i).immediateRender = t(i.immediateRender), this.staggerTo(e, r, i, n, a, s, o);
    }, e.staggerFromTo = function staggerFromTo(e, r, i, n, a, s, o, u) {
      return n.startAt = i, pa(n).immediateRender = t(n.immediateRender), this.staggerTo(e, r, n, a, s, o, u);
    }, e.render = function render(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        _,
        p,
        c = this._time,
        m = this._dirty ? this.totalDuration() : this._tDur,
        g = this._dur,
        v = t <= 0 ? 0 : da(t),
        y = this._zTime < 0 != t < 0 && (this._initted || !g);
      if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
        if (c !== this._time && g && (v += this._time - c, t += this._time - c), i = v, f = this._start, u = !(l = this._ts), y && (g || (c = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
          if (_ = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
          if (i = da(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), d = gt(this._tTime, o), !c && this._tTime && d !== s && (d = s), _ && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
            var T = _ && 1 & d,
              b = T === (_ && 1 & s);
            if (s < d && (T = !T), c = T ? 0 : g, this._lock = 1, this.render(c || (p ? 0 : da(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ot(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), c && c !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g = this._dur, m = this._tDur, b && (this._lock = 2, c = T ? g : -1e-4, this.render(c, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            Ib(this, p);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
          var i;
          if (e < r) for (i = t._first; i && i._start <= r;) {
            if ("isPause" === i.data && i._start > e) return i;
            i = i._next;
          } else for (i = t._last; i && i._start >= r;) {
            if ("isPause" === i.data && i._start < e) return i;
            i = i._prev;
          }
        }(this, da(c), da(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, c = 0), !c && i && !e && (Ot(this, "onStart"), this._tTime !== v)) return this;
        if (c <= i && 0 <= t) for (n = this._first; n;) {
          if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
            if (n.parent !== this) return this.render(t, e, r);
            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
              h = 0, a && (v += this._zTime = -V);
              break;
            }
          }
          n = a;
        } else {
          n = this._last;
          for (var w = t < 0 ? t : i; n;) {
            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);
              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = w ? -V : V);
                break;
              }
            }
            n = a;
          }
        }
        if (h && !e && (this.pause(), h.render(c <= i ? 0 : -V)._zTime = c <= i ? 1 : -1, this._ts)) return this._start = f, Aa(this), this.render(t, e, r);
        this._onUpdate && !e && Ot(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && c) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || ta(this, 1), e || t < 0 && !c || !v && !c && m || (Ot(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
      }
      return this;
    }, e.add = function add(t, e) {
      var r = this;
      if (q(e) || (e = Tt(this, e, t)), !(t instanceof Nt)) {
        if (J(t)) return t.forEach(function (t) {
          return r.add(t, e);
        }), this;
        if (o(t)) return this.addLabel(t, e);
        if (!p(t)) return this;
        t = $t.delayedCall(0, t);
      }
      return this !== t ? Da(this, t, e) : this;
    }, e.getChildren = function getChildren(t, e, r, i) {
      void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -Y);
      for (var n = [], a = this._first; a;) a._start >= i && (a instanceof $t ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
      return n;
    }, e.getById = function getById(t) {
      for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) if (e[r].vars.id === t) return e[r];
    }, e.remove = function remove(t) {
      return o(t) ? this.removeLabel(t) : p(t) ? this.killTweensOf(t) : (sa(this, t), t === this._recent && (this._recent = this._last), ua(this));
    }, e.totalTime = function totalTime(t, e) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = da(Dt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), n.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
    }, e.addLabel = function addLabel(t, e) {
      return this.labels[t] = Tt(this, e), this;
    }, e.removeLabel = function removeLabel(t) {
      return delete this.labels[t], this;
    }, e.addPause = function addPause(t, e, r) {
      var i = $t.delayedCall(0, e || Q, r);
      return i.data = "isPause", this._hasPause = 1, Da(this, i, Tt(this, t));
    }, e.removePause = function removePause(t) {
      var e = this._first;
      for (t = Tt(this, t); e;) e._start === t && "isPause" === e.data && ta(e), e = e._next;
    }, e.killTweensOf = function killTweensOf(t, e, r) {
      for (var i = this.getTweensOf(t, r), n = i.length; n--;) Yt !== i[n] && i[n].kill(t, e);
      return this;
    }, e.getTweensOf = function getTweensOf(t, e) {
      for (var r, i = [], n = xt(t), a = this._first, s = q(e); a;) a instanceof $t ? fa(a._targets, n) && (s ? (!Yt || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
      return i;
    }, e.tweenTo = function tweenTo(t, e) {
      e = e || {};
      var r,
        i = this,
        n = Tt(i, t),
        a = e.startAt,
        s = e.onStart,
        o = e.onStartParams,
        u = e.immediateRender,
        h = $t.to(i, ka({
          ease: e.ease || "none",
          lazy: !1,
          immediateRender: !1,
          time: n,
          overwrite: "auto",
          duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V,
          onStart: function onStart() {
            if (i.pause(), !r) {
              var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
              h._dur !== t && Ka(h, t, 0, 1).render(h._time, !0, !0), r = 1;
            }
            s && s.apply(h, o || []);
          }
        }, e));
      return u ? h.render(0) : h;
    }, e.tweenFromTo = function tweenFromTo(t, e, r) {
      return this.tweenTo(e, ka({
        startAt: {
          time: Tt(this, t)
        }
      }, r));
    }, e.recent = function recent() {
      return this._recent;
    }, e.nextLabel = function nextLabel(t) {
      return void 0 === t && (t = this._time), kb(this, Tt(this, t));
    }, e.previousLabel = function previousLabel(t) {
      return void 0 === t && (t = this._time), kb(this, Tt(this, t), 1);
    }, e.currentLabel = function currentLabel(t) {
      return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V);
    }, e.shiftChildren = function shiftChildren(t, e, r) {
      void 0 === r && (r = 0);
      for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
      if (e) for (i in a) a[i] >= r && (a[i] += t);
      return ua(this);
    }, e.invalidate = function invalidate() {
      var t = this._first;
      for (this._lock = 0; t;) t.invalidate(), t = t._next;
      return n.prototype.invalidate.call(this);
    }, e.clear = function clear(t) {
      void 0 === t && (t = !0);
      for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), ua(this);
    }, e.totalDuration = function totalDuration(t) {
      var e,
        r,
        i,
        n = 0,
        a = this,
        s = a._last,
        o = Y;
      if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
      if (a._dirty) {
        for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Da(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
        Ka(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0;
      }
      return a._tDur;
    }, Timeline.updateRoot = function updateRoot(t) {
      if (I._ts && (ha(I, za(t, I)), f = Dt.frame), Dt.frame >= _t) {
        _t += U.autoSleep || 120;
        var e = I._first;
        if ((!e || !e._ts) && U.autoSleep && Dt._listeners.length < 2) {
          for (; e && !e._ts;) e = e._next;
          e || Dt.sleep();
        }
      }
    }, Timeline;
  }(Nt);
  ka(Ut.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  function Ub(t, e, r, i, n, a) {
    var u, h, l, f;
    if (ft[t] && !1 !== (u = new ft[t]()).init(n, u.rawVars ? e[t] : function _processVars(t, e, r, i, n) {
      if (p(t) && (t = Qt(t, n, e, r, i)), !s(t) || t.style && t.nodeType || J(t) || H(t)) return o(t) ? Qt(t, n, e, r, i) : t;
      var a,
        u = {};
      for (a in t) u[a] = Qt(t[a], n, e, r, i);
      return u;
    }(e[t], i, n, a, r), r, i, a) && (r._pt = h = new oe(r._pt, n, t, 0, 1, u.render, u, 0, u.priority), r !== d)) for (l = r._ptLookup[r._targets.indexOf(n)], f = u._props.length; f--;) l[u._props[f]] = h;
    return u;
  }
  function $b(t, r, e, i) {
    var n,
      a,
      s = r.ease || i || "power1.inOut";
    if (J(r)) a = e[t] || (e[t] = []), r.forEach(function (t, e) {
      return a.push({
        t: e / (r.length - 1) * 100,
        v: t,
        e: s
      });
    });else for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
      t: parseFloat(t),
      v: r[n],
      e: s
    });
  }
  var Yt,
    qt,
    Vt = function _addPropTween(t, e, r, i, n, a, s, u, h) {
      p(i) && (i = i(n || 0, t, a));
      var l,
        f = t[e],
        d = "get" !== r ? r : p(f) ? h ? t[e.indexOf("set") || !p(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](h) : t[e]() : f,
        _ = p(f) ? h ? Zt : Wt : Gt;
      if (o(i) && (~i.indexOf("random(") && (i = hb(i)), "=" === i.charAt(1) && (!(l = ea(d, i) + (Ra(d) || 0)) && 0 !== l || (i = l))), d !== i || qt) return isNaN(d * i) || "" === i ? (f || e in t || N(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
        var o,
          u,
          h,
          l,
          f,
          d,
          _,
          p,
          c = new oe(this._pt, t, e, 0, 1, ee, null, n),
          m = 0,
          g = 0;
        for (c.b = r, c.e = i, r += "", (_ = ~(i += "").indexOf("random(")) && (i = hb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, c._pt = {
          _next: c._pt,
          p: f || 1 === g ? f : ",",
          s: d,
          c: "=" === l.charAt(1) ? ea(d, l) - d : parseFloat(l) - d,
          m: h && h < 4 ? Math.round : 0
        }, m = it.lastIndex);
        return c.c = m < i.length ? i.substring(m, i.length) : "", c.fp = s, (nt.test(i) || _) && (c.e = 0), this._pt = c;
      }.call(this, t, e, d, i, _, u || U.stringFilter, h)) : (l = new oe(this._pt, t, e, +d || 0, i - (d || 0), "boolean" == typeof f ? te : Jt, 0, _), h && (l.fp = h), s && l.modifier(s, this, t), this._pt = l);
    },
    Xt = function _initTween(e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        c,
        m,
        g = e.vars,
        v = g.ease,
        y = g.startAt,
        T = g.immediateRender,
        b = g.lazy,
        w = g.onUpdate,
        x = g.onUpdateParams,
        k = g.callbackScope,
        O = g.runBackwards,
        P = g.yoyoEase,
        M = g.keyframes,
        C = g.autoRevert,
        A = e._dur,
        D = e._startAt,
        S = e._targets,
        z = e.parent,
        R = z && "nested" === z.data ? z.parent._targets : S,
        E = "auto" === e._overwrite && !B,
        F = e.timeline;
      if (!F || M && v || (v = "none"), e._ease = Bt(v, L.ease), e._yEase = P ? Ft(Bt(!0 === P ? v : P, L.ease)) : 0, P && e._yoyo && !e._repeat && (P = e._yEase, e._yEase = e._ease, e._ease = P), e._from = !F && !!g.runBackwards, !F || M && !g.stagger) {
        if (c = (l = S[0] ? _(S[0]).harness : 0) && g[l.prop], i = oa(g, ut), D && (ta(D.render(-1, !0)), D._lazy = 0), y) {
          if (ta(e._startAt = $t.set(S, ka({
            data: "isStart",
            overwrite: !1,
            parent: z,
            immediateRender: !0,
            lazy: t(b),
            startAt: null,
            delay: 0,
            onUpdate: w,
            onUpdateParams: x,
            callbackScope: k,
            stagger: 0
          }, y))), r < 0 && !T && !C && e._startAt.render(-1, !0), T) {
            if (0 < r && !C && (e._startAt = 0), A && r <= 0) return void (r && (e._zTime = r));
          } else !1 === C && (e._startAt = 0);
        } else if (O && A) if (D) C || (e._startAt = 0);else if (r && (T = !1), a = ka({
          overwrite: !1,
          data: "isFromStart",
          lazy: T && t(b),
          immediateRender: T,
          stagger: 0,
          parent: z
        }, i), c && (a[l.prop] = c), ta(e._startAt = $t.set(S, a)), r < 0 && e._startAt.render(-1, !0), e._zTime = r, T) {
          if (!r) return;
        } else _initTween(e._startAt, V);
        for (e._pt = e._ptCache = 0, b = A && t(b) || b && !A, n = 0; n < S.length; n++) {
          if (h = (o = S[n])._gsap || $(S)[n]._gsap, e._ptLookup[n] = d = {}, lt[h.id] && ht.length && ga(), p = R === S ? n : R.indexOf(o), l && !1 !== (f = new l()).init(o, c || i, e, p, R) && (e._pt = s = new oe(e._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
            d[t] = s;
          }), f.priority && (u = 1)), !l || c) for (a in i) ft[a] && (f = Ub(a, i, e, p, o, R)) ? f.priority && (u = 1) : d[a] = s = Vt.call(e, o, a, "get", i[a], p, R, 0, g.stringFilter);
          e._op && e._op[n] && e.kill(o, e._op[n]), E && e._pt && (Yt = e, I.killTweensOf(o, d, e.globalTime(r)), m = !e.parent, Yt = 0), e._pt && b && (lt[h.id] = 1);
        }
        u && se(e), e._onInit && e._onInit(e);
      }
      e._onUpdate = w, e._initted = (!e._op || e._pt) && !m, M && r <= 0 && F.render(Y, !0, !0);
    },
    Qt = function _parseFuncOrString(t, e, r, i, n) {
      return p(t) ? t.call(e, r, i, n) : o(t) && ~t.indexOf("random(") ? hb(t) : t;
    },
    jt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Kt = {};
  ba(jt + ",id,stagger,delay,duration,paused,scrollTrigger", function (t) {
    return Kt[t] = 1;
  });
  var $t = function (R) {
    function Tween(e, r, i, n) {
      var a;
      "number" == typeof r && (i.duration = r, r = i, i = null);
      var o,
        u,
        h,
        l,
        f,
        d,
        _,
        p,
        c = (a = R.call(this, n ? r : pa(r)) || this).vars,
        m = c.duration,
        g = c.delay,
        y = c.immediateRender,
        T = c.stagger,
        b = c.overwrite,
        w = c.keyframes,
        x = c.defaults,
        k = c.scrollTrigger,
        P = c.yoyoEase,
        M = r.parent || I,
        C = (J(e) || H(e) ? q(e[0]) : "length" in r) ? [e] : xt(e);
      if (a._targets = C.length ? $(C) : O("GSAP target " + e + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, w || T || v(m) || v(g)) {
        if (r = a.vars, (o = a.timeline = new Ut({
          data: "nested",
          defaults: x || {}
        })).kill(), o.parent = o._dp = _assertThisInitialized(a), o._start = 0, T || v(m) || v(g)) {
          if (l = C.length, _ = T && Za(T), s(T)) for (f in T) ~jt.indexOf(f) && ((p = p || {})[f] = T[f]);
          for (u = 0; u < l; u++) (h = oa(r, Kt)).stagger = 0, P && (h.yoyoEase = P), p && mt(h, p), d = C[u], h.duration = +Qt(m, _assertThisInitialized(a), u, d, C), h.delay = (+Qt(g, _assertThisInitialized(a), u, d, C) || 0) - a._delay, !T && 1 === l && h.delay && (a._delay = g = h.delay, a._start += g, h.delay = 0), o.to(d, h, _ ? _(u, d, C) : 0), o._ease = zt.none;
          o.duration() ? m = g = 0 : a.timeline = 0;
        } else if (w) {
          pa(ka(o.vars.defaults, {
            ease: "none"
          })), o._ease = Bt(w.ease || r.ease || "none");
          var A,
            D,
            S,
            z = 0;
          if (J(w)) w.forEach(function (t) {
            return o.to(C, t, ">");
          });else {
            for (f in h = {}, w) "ease" === f || "easeEach" === f || $b(f, w[f], h, w.easeEach);
            for (f in h) for (A = h[f].sort(function (t, e) {
              return t.t - e.t;
            }), u = z = 0; u < A.length; u++) (S = {
              ease: (D = A[u]).e,
              duration: (D.t - (u ? A[u - 1].t : 0)) / 100 * m
            })[f] = D.v, o.to(C, S, z), z += S.duration;
            o.duration() < m && o.to({}, {
              duration: m - o.duration()
            });
          }
        }
        m || a.duration(m = o.duration());
      } else a.timeline = 0;
      return !0 !== b || B || (Yt = _assertThisInitialized(a), I.killTweensOf(C), Yt = 0), Da(M, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (y || !m && !w && a._start === da(M._time) && t(y) && function _hasNoPausedAncestors(t) {
        return !t || t._ts && _hasNoPausedAncestors(t.parent);
      }(_assertThisInitialized(a)) && "nested" !== M.data) && (a._tTime = -V, a.render(Math.max(0, -g))), k && Ea(_assertThisInitialized(a), k), a;
    }
    _inheritsLoose(Tween, R);
    var e = Tween.prototype;
    return e.render = function render(t, e, r) {
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d = this._time,
        _ = this._tDur,
        p = this._dur,
        c = _ - V < t && 0 <= t ? _ : t < V ? 0 : t;
      if (p) {
        if (c !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
          if (i = c, l = this.timeline, this._repeat) {
            if (s = p + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * s + t, e, r);
            if (i = da(c % s), c === _ ? (a = this._repeat, i = p) : ((a = ~~(c / s)) && a === c / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = gt(this._tTime, s), i === d && !r && this._initted) return this._tTime = c, this;
            a !== o && (l && this._yEase && Ib(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(da(s * a), !0).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if (Fa(this, t < 0 ? t : i, r, e)) return this._tTime = 0, this;
            if (d !== this._time) return this;
            if (p !== this._dur) return this.render(t, e, r);
          }
          if (this._tTime = c, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !d && !e && (Ot(this, "onStart"), this._tTime !== c)) return this;
          for (n = this._pt; n;) n.r(h, n.d), n = n._next;
          l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), Ot(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ot(this, "onRepeat"), c !== this._tDur && c || this._tTime !== c || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), !t && p || !(c === this._tDur && 0 < this._ts || !c && this._ts < 0) || ta(this, 1), e || t < 0 && !d || !c && !d || (Ot(this, c === _ ? "onComplete" : "onReverseComplete", !0), !this._prom || c < _ && 0 < this.timeScale() || this._prom()));
        }
      } else !function _renderZeroDurationTween(t, e, r, i) {
        var n,
          a,
          s,
          o = t.ratio,
          u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
            var e = t.parent;
            return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e));
          }(t) && (t._initted || !vt(t)) || (t._ts < 0 || t._dp._ts < 0) && !vt(t)) ? 0 : 1,
          h = t._rDelay,
          l = 0;
        if (h && t._repeat && (l = bt(0, t._tDur, e), a = gt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== gt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || i || t._zTime === V || !e && t._zTime) {
          if (!t._initted && Fa(t, e, i, r)) return;
          for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
          t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !r && Ot(t, "onUpdate"), l && t._repeat && !r && t.parent && Ot(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && ta(t, 1), r || (Ot(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
        } else t._zTime || (t._zTime = e);
      }(this, t, e, r);
      return this;
    }, e.targets = function targets() {
      return this._targets;
    }, e.invalidate = function invalidate() {
      return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), R.prototype.invalidate.call(this);
    }, e.resetTo = function resetTo(t, e, r, i) {
      c || Dt.wake(), this._ts || this.play();
      var n,
        a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || Xt(this, a), n = this._ease(a / this._dur), function _updatePropTweens(t, e, r, i, n, a, s) {
        var o,
          u,
          h,
          l = (t._pt && t._ptCache || (t._ptCache = {}))[e];
        if (!l) for (l = t._ptCache[e] = [], u = t._ptLookup, h = t._targets.length; h--;) {
          if ((o = u[h][e]) && o.d && o.d._pt) for (o = o.d._pt; o && o.p !== e;) o = o._next;
          if (!o) return qt = 1, t.vars[e] = "+=0", Xt(t, s), qt = 0, 1;
          l.push(o);
        }
        for (h = l.length; h--;) (o = l[h]).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, o.e && (o.e = ca(r) + Ra(o.e)), o.b && (o.b = o.s + Ra(o.b));
      }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ba(this, 0), this.parent || ra(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, e.kill = function kill(t, e) {
      if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? mb(this) : this;
      if (this.timeline) {
        var r = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t, e, Yt && !0 !== Yt.vars.overwrite)._first || mb(this), this.parent && r !== this.timeline.totalDuration() && Ka(this, this._dur * this.timeline._tDur / r, 0, 1), this;
      }
      var i,
        n,
        a,
        s,
        u,
        h,
        l,
        f = this._targets,
        d = t ? xt(t) : f,
        p = this._ptLookup,
        c = this._pt;
      if ((!e || "all" === e) && function _arraysMatch(t, e) {
        for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
        return r < 0;
      }(f, d)) return "all" === e && (this._pt = 0), mb(this);
      for (i = this._op = this._op || [], "all" !== e && (o(e) && (u = {}, ba(e, function (t) {
        return u[t] = 1;
      }), e = u), e = function _addAliasesToVars(t, e) {
        var r,
          i,
          n,
          a,
          s = t[0] ? _(t[0]).harness : 0,
          o = s && s.aliases;
        if (!o) return e;
        for (i in r = mt({}, e), o) if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
        return r;
      }(f, e)), l = f.length; l--;) if (~d.indexOf(f[l])) for (u in n = p[l], "all" === e ? (i[l] = e, s = n, a = {}) : (a = i[l] = i[l] || {}, s = e), s) (h = n && n[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || sa(this, h, "_pt"), delete n[u]), "all" !== a && (a[u] = 1);
      return this._initted && !this._pt && c && mb(this), this;
    }, Tween.to = function to(t, e, r) {
      return new Tween(t, e, r);
    }, Tween.from = function from(t, e) {
      return Oa(1, arguments);
    }, Tween.delayedCall = function delayedCall(t, e, r, i) {
      return new Tween(e, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: t,
        onComplete: e,
        onReverseComplete: e,
        onCompleteParams: r,
        onReverseCompleteParams: r,
        callbackScope: i
      });
    }, Tween.fromTo = function fromTo(t, e, r) {
      return Oa(2, arguments);
    }, Tween.set = function set(t, e) {
      return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
    }, Tween.killTweensOf = function killTweensOf(t, e, r) {
      return I.killTweensOf(t, e, r);
    }, Tween;
  }(Nt);
  ka($t.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  }), ba("staggerTo,staggerFrom,staggerFromTo", function (r) {
    $t[r] = function () {
      var t = new Ut(),
        e = wt.call(arguments, 0);
      return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
    };
  });
  function gc(t, e, r) {
    return t.setAttribute(e, r);
  }
  function oc(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Gt = function _setterPlain(t, e, r) {
      return t[e] = r;
    },
    Wt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    Zt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    Ht = function _getSetter(t, e) {
      return p(t[e]) ? Wt : r(t[e]) && t.setAttribute ? gc : Gt;
    },
    Jt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    te = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ee = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
        for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    re = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
    },
    ie = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n;
    },
    ne = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? sa(this, i, "_pt") : i.dep || (e = 1), i = r;
      return !e;
    },
    se = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a;) {
        for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
        (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
      }
      t._pt = i;
    },
    oe = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = oc, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Jt, this.d = s || this, this.set = o || Gt, this.pr = u || 0, (this._next = t) && (t._prev = this);
  }
  ba(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
    return ut[t] = 1;
  }), ot.TweenMax = ot.TweenLite = $t, ot.TimelineLite = ot.TimelineMax = Ut, I = new Ut({
    sortChildren: !1,
    defaults: L,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
  }), U.stringFilter = xb;
  var ue = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return function _createPlugin(t) {
          var e = (t = !t.name && t.default || t).name,
            r = p(t),
            i = e && !r && t.init ? function () {
              this._props = [];
            } : t,
            n = {
              init: Q,
              render: re,
              add: Vt,
              kill: ne,
              modifier: ie,
              rawVars: 0
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Ht,
              aliases: {},
              register: 0
            };
          if (St(), t !== i) {
            if (ft[e]) return;
            ka(i, ka(oa(t, n), a)), mt(i.prototype, mt(n, oa(t, a))), ft[i.prop = e] = i, t.targetTest && (pt.push(i), ut[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
          }
          P(e, i), t.register && t.register(he, i, oe);
        }(t);
      });
    },
    timeline: function timeline(t) {
      return new Ut(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return I.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      o(i) && (i = xt(i)[0]);
      var n = _(i || {}).get,
        a = e ? ja : ia;
      return "native" === e && (e = ""), i ? t ? a((ft[t] && ft[t].get || n)(i, t, e, r)) : function (t, e, r) {
        return a((ft[t] && ft[t].get || n)(i, t, e, r));
      } : i;
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = xt(r)).length) {
        var n = r.map(function (t) {
            return he.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--;) n[e](t);
        };
      }
      r = r[0] || {};
      var s = ft[e],
        o = _(r),
        u = o.harness && (o.harness.aliases || {})[e] || e,
        h = s ? function (t) {
          var e = new s();
          d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && re(1, d);
        } : o.set(r, u);
      return s ? h : function (t) {
        return h(r, u, i ? t + i : t, o, 1);
      };
    },
    quickTo: function quickTo(t, i, e) {
      function iw(t, e, r) {
        return n.resetTo(i, t, e, r);
      }
      var r,
        n = he.to(t, mt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
      return iw.tween = n, iw;
    },
    isTweening: function isTweening(t) {
      return 0 < I.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Bt(t.ease, L.ease)), na(L, t || {});
    },
    config: function config(t) {
      return na(U, t || {});
    },
    registerEffect: function registerEffect(t) {
      var i = t.name,
        n = t.effect,
        e = t.plugins,
        a = t.defaults,
        r = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return t && !ft[t] && !ot[t] && O(i + " effect requires " + t + " plugin.");
      }), dt[i] = function (t, e, r) {
        return n(xt(t), ka(e || {}, a), r);
      }, r && (Ut.prototype[i] = function (t, e, r) {
        return this.add(dt[i](t, s(e) ? e : (r = e) && {}, this), r);
      });
    },
    registerEase: function registerEase(t, e) {
      zt[t] = Bt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Bt(t, e) : zt;
    },
    getById: function getById(t) {
      return I.getById(t);
    },
    exportRoot: function exportRoot(e, r) {
      void 0 === e && (e = {});
      var i,
        n,
        a = new Ut(e);
      for (a.smoothChildTiming = t(e.smoothChildTiming), I.remove(a), a._dp = 0, a._time = a._tTime = I._time, i = I._first; i;) n = i._next, !r && !i._dur && i instanceof $t && i.vars.onComplete === i._targets[0] || Da(a, i, i._start - i._delay), i = n;
      return Da(I, a, 0), a;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return J(e) ? eb(e, wrap(0, e.length), t) : Pa(r, function (t) {
          return (i + (t - e) % i) % i + e;
        });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return J(e) ? eb(e, wrapYoyo(0, e.length - 1), t) : Pa(r, function (t) {
          return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t);
        });
      },
      distribute: Za,
      random: ab,
      snap: _a,
      normalize: function normalize(t, e, r) {
        return kt(t, e, 0, 1, r);
      },
      getUnit: Ra,
      clamp: function clamp(e, r, t) {
        return Pa(t, function (t) {
          return bt(e, r, t);
        });
      },
      splitColor: sb,
      toArray: xt,
      selector: function selector(r) {
        return r = xt(r)[0] || O("Invalid scope") || {}, function (t) {
          var e = r.current || r.nativeElement || r;
          return xt(t, e.querySelectorAll ? e : e === r ? O("Invalid scope") || a.createElement("div") : r);
        };
      },
      mapRange: kt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || Ra(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function (t) {
          return (1 - t) * e + t * r;
        };
        if (!n) {
          var a,
            s,
            u,
            h,
            l,
            f = o(e),
            d = {};
          if (!0 === t && (i = 1) && (t = null), f) e = {
            p: e
          }, r = {
            p: r
          };else if (J(e) && !J(r)) {
            for (u = [], h = e.length, l = h - 2, s = 1; s < h; s++) u.push(interpolate(e[s - 1], e[s]));
            h--, n = function func(t) {
              t *= h;
              var e = Math.min(l, ~~t);
              return u[e](t - e);
            }, t = r;
          } else i || (e = mt(J(e) ? [] : {}, e));
          if (!u) {
            for (a in r) Vt.call(d, e, a, "get", r[a]);
            n = function func(t) {
              return re(t, d) || (f ? e.p : e);
            };
          }
        }
        return Pa(t, n);
      },
      shuffle: Ya
    },
    install: M,
    effects: dt,
    ticker: Dt,
    updateRoot: Ut.updateRoot,
    plugins: ft,
    globalTimeline: I,
    core: {
      PropTween: oe,
      globals: P,
      Tween: $t,
      Timeline: Ut,
      Animation: Nt,
      getCache: _,
      _removeLinkedListItem: sa,
      suppressOverwrites: function suppressOverwrites(t) {
        return B = t;
      }
    }
  };
  ba("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return ue[t] = $t[t];
  }), Dt.add(Ut.updateRoot), d = ue.to({}, {
    duration: 0
  });
  function sc(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
    return r;
  }
  function uc(t, n) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (o(i) && (e = {}, ba(i, function (t) {
            return e[t] = 1;
          }), i = e), n) {
            for (r in e = {}, i) e[r] = n(i[r]);
            i = e;
          }
          !function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e) for (i = a.length; i--;) (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = sc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
          }(t, i);
        };
      }
    };
  }
  var he = ue.registerPlugin({
    name: "attr",
    init: function init(t, e, r, i, n) {
      var a, s;
      for (a in e) (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
    }
  }, {
    name: "endArray",
    init: function init(t, e) {
      for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r]);
    }
  }, uc("roundProps", $a), uc("modifiers"), uc("snap", _a)) || ue;
  $t.version = Ut.version = he.version = "3.10.2", l = 1, u() && St();
  function dd(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function ed(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function fd(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function gd(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
  }
  function hd(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function id(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function jd(t, e, r) {
    return t.style[e] = r;
  }
  function kd(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function ld(t, e, r) {
    return t._gsap[e] = r;
  }
  function md(t, e, r) {
    return t._gsap.scaleX = t._gsap.scaleY = r;
  }
  function nd(t, e, r, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = r, a.renderTransform(n, a);
  }
  function od(t, e, r, i, n) {
    var a = t._gsap;
    a[e] = r, a.renderTransform(n, a);
  }
  function sd(t, e) {
    var r = fe.createElementNS ? fe.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : fe.createElement(t);
    return r.style ? r : fe.createElement(t);
  }
  function td(t, e, r) {
    var i = getComputedStyle(t);
    return i[e] || i.getPropertyValue(e.replace(Ne, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && td(t, je(e) || e, 1) || "";
  }
  function wd() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() && window.document && (le = window, fe = le.document, de = fe.documentElement, pe = sd("div") || {
      style: {}
    }, sd("div"), Ve = je(Ve), Xe = Ve + "Origin", pe.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", me = !!je("perspective"), _e = 1);
  }
  function xd(t) {
    var e,
      r = sd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (de.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
      e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = xd;
    } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), de.removeChild(r), this.style.cssText = a, e;
  }
  function yd(t, e) {
    for (var r = e.length; r--;) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function zd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = xd.call(e, !0);
    }
    return r && (r.width || r.height) || e.getBBox === xd || (r = xd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
      x: +yd(e, ["x", "cx", "x1"]) || 0,
      y: +yd(e, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    };
  }
  function Ad(t) {
    return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !zd(t));
  }
  function Bd(t, e) {
    if (e) {
      var r = t.style;
      e in Fe && e !== Xe && (e = Ve), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Ne, "-$1").toLowerCase())) : r.removeAttribute(e);
    }
  }
  function Cd(t, e, r, i, n, a) {
    var s = new oe(t._pt, e, r, 0, 1, a ? id : hd);
    return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
  }
  function Ed(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = pe.style,
      f = Ue.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      c = "px" === i,
      m = "%" === i;
    return i === h || !u || Ke[i] || Ke[h] ? u : ("px" === h || c || (u = Ed(t, e, r, "px")), o = t.getCTM && Ad(t), !m && "%" !== h || !Fe[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (c ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== fe && a.appendChild || (a = fe.body), (s = a._gsap) && m && s.width && f && s.time === Dt.time ? ca(u / s.width * 100) : (!m && "%" !== h || (l.position = td(t, "position")), a === t && (l.position = "static"), a.appendChild(pe), n = pe[p], a.removeChild(pe), l.position = "absolute", f && m && ((s = _(a)).time = Dt.time, s.width = a[p]), ca(c ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[p], ca(m ? u / n * 100 : u / 100 * n)));
  }
  function Fd(t, e, r, i) {
    var n;
    return _e || wd(), e in qe && "transform" !== e && ~(e = qe[e]).indexOf(",") && (e = e.split(",")[0]), Fe[e] && "transform" !== e ? (n = He(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Je(td(t, Xe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Ge[e] && Ge[e](t, e, r) || td(t, e) || aa(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Ed(t, e, n, r) + r : n;
  }
  function Gd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = je(e, t, 1),
        a = n && td(t, n, 1);
      a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = td(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      _,
      p,
      c,
      m,
      g = new oe(this._pt, t.style, e, 0, 1, ee),
      v = 0,
      y = 0;
    if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = td(t, e) || i, t.style[e] = r), xb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
      for (; o = rt.exec(i);) d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ea(h, d) + m), _ = parseFloat(d), c = d.substr((_ + "").length), v = rt.lastIndex - c.length, c || (c = c || U.units[e] || m, v === i.length && (i += c, g.e += c)), m !== c && (h = Ed(t, e, f, c) || 0), g._pt = {
        _next: g._pt,
        p: p || 1 === y ? p : ",",
        s: h,
        c: _ - h,
        m: l && l < 4 || "zIndex" === e ? Math.round : 0
      });
      g.c = v < i.length ? i.substring(v, i.length) : "";
    } else g.r = "display" === e && "none" === i ? id : hd;
    return nt.test(i) && (g.e = 0), this._pt = g;
  }
  function Id(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = $e[r] || r, e[1] = $e[i] || i, e.join(" ");
  }
  function Jd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) r = o[n], Fe[r] && (i = 1, r = "transformOrigin" === r ? Xe : Ve), Bd(a, r);
      i && (Bd(a, Ve), u && (u.svg && a.removeAttribute("transform"), He(a, 1), u.uncache = 1));
    }
  }
  function Nd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Od(t) {
    var e = td(t, Ve);
    return Nd(e) ? We : e.substr(7).match(et).map(ca);
  }
  function Pd(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || _(t),
      o = t.style,
      u = Od(t);
    return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? We : u : (u !== We || t.offsetParent || t === de || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextSibling, de.appendChild(t)), u = Od(t), n ? o.display = n : Bd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : de.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Qd(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || Pd(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      _ = h.xOffset || 0,
      p = h.yOffset || 0,
      c = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r ? l !== We && (o = c * v - m * g) && (u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = zd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = _ + (y * c + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[Xe] = "0px 0px", a && (Cd(a, h, "xOrigin", f, w), Cd(a, h, "yOrigin", d, x), Cd(a, h, "xOffset", _, h.xOffset), Cd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
  }
  function Td(t, e, r) {
    var i = Ra(e);
    return ca(parseFloat(e) + parseFloat(Ed(t, "x", r + "px", i))) + i;
  }
  function $d(t, e, r, i, n) {
    var a,
      s,
      u = 360,
      h = o(n),
      l = parseFloat(n) * (h && ~n.indexOf("rad") ? Be : 1) - i,
      f = i + l + "deg";
    return h && ("short" === (a = n.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === a && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === a && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = s = new oe(t._pt, e, r, i, l, ed), s.e = f, s.u = "deg", t._props.push(r), s;
  }
  function _d(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function ae(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = _d({}, r._gsap),
      f = r.style;
    for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[Ve] = e, i = He(r, 1), Bd(r, Ve), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[Ve], f[Ve] = e, i = He(r, 1), f[Ve] = a), Fe) (a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ra(a) !== (h = Ra(s)) ? Ed(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new oe(t._pt, i, n, o, u - o, dd), t._pt.u = h || 0, t._props.push(n));
    _d(i, l);
  }
  var le,
    fe,
    de,
    _e,
    pe,
    ce,
    me,
    ge = zt.Power0,
    ve = zt.Power1,
    ye = zt.Power2,
    Te = zt.Power3,
    be = zt.Power4,
    we = zt.Linear,
    xe = zt.Quad,
    ke = zt.Cubic,
    Oe = zt.Quart,
    Pe = zt.Quint,
    Me = zt.Strong,
    Ce = zt.Elastic,
    Ae = zt.Back,
    De = zt.SteppedEase,
    Se = zt.Bounce,
    ze = zt.Sine,
    Re = zt.Expo,
    Ee = zt.Circ,
    Fe = {},
    Be = 180 / Math.PI,
    Ie = Math.PI / 180,
    Le = Math.atan2,
    Ne = /([A-Z])/g,
    Ue = /(left|right|width|margin|padding|x)/i,
    Ye = /[\s,\(]\S/,
    qe = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
    Ve = "transform",
    Xe = Ve + "Origin",
    Qe = "O,Moz,ms,Ms,Webkit".split(","),
    je = function _checkPropPrefix(t, e, r) {
      var i = (e || pe).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Qe[n] + t in i););
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Qe[n] : "") + t;
    },
    Ke = {
      deg: 1,
      rad: 1,
      turn: 1
    },
    $e = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
    Ge = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = t._pt = new oe(t._pt, e, r, 0, 0, Jd);
          return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
        }
      }
    },
    We = [1, 0, 0, 1, 0, 0],
    Ze = {},
    He = function _parseTransform(t, e) {
      var r = t._gsap || new Lt(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        _,
        p,
        c,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        O,
        P,
        M,
        C,
        A,
        D,
        S,
        z,
        R,
        E,
        F = t.style,
        B = r.scaleX < 0,
        I = "deg",
        L = td(t, Xe) || "0";
      return i = n = a = u = h = l = f = d = _ = 0, s = o = 1, r.svg = !(!t.getCTM || !Ad(t)), m = Pd(t, r.svg), r.svg && (P = (!r.uncache || "0px 0px" === L) && !e && t.getAttribute("data-svg-origin"), Qd(t, P || L, !!P || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, c = r.yOrigin || 0, m !== We && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Le(b, T) * Be : 0, (f = w || x ? Le(w, x) * Be + u : 0) && (o *= Math.abs(Math.cos(f * Ie))), r.svg && (i -= p - (p * T + c * w), n -= c - (p * b + c * x))) : (E = m[6], z = m[7], A = m[8], D = m[9], S = m[10], R = m[11], i = m[12], n = m[13], a = m[14], h = (g = Le(E, S)) * Be, g && (P = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), M = O * v + D * y, C = E * v + S * y, A = k * -y + A * v, D = O * -y + D * v, S = E * -y + S * v, R = z * -y + R * v, k = P, O = M, E = C), l = (g = Le(-w, S)) * Be, g && (v = Math.cos(-g), R = x * (y = Math.sin(-g)) + R * v, T = P = T * v - A * y, b = M = b * v - D * y, w = C = w * v - S * y), u = (g = Le(b, T)) * Be, g && (P = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), M = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = P, k = M), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ca(Math.sqrt(T * T + b * b + w * w)), o = ca(Math.sqrt(O * O + E * E)), g = Le(k, O), f = 2e-4 < Math.abs(g) ? g * Be : 0, _ = R ? 1 / (R < 0 ? -R : R) : 0), r.svg && (P = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Nd(td(t, Ve)), P && t.setAttribute("transform", P))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ca(s), r.scaleY = ca(o), r.rotation = ca(u) + I, r.rotationX = ca(h) + I, r.rotationY = ca(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = _ + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (F[Xe] = Je(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? ar : me ? nr : tr, r.uncache = 0, r;
    },
    Je = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    tr = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, nr(t, e);
    },
    er = "0deg",
    rr = "0px",
    ir = ") ",
    nr = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        _ = r.scaleX,
        p = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = "auto" === m && t && 1 !== t || !0 === m;
      if (v && (l !== er || h !== er)) {
        var b,
          w = parseFloat(h) * Ie,
          x = Math.sin(w),
          k = Math.cos(w);
        w = parseFloat(l) * Ie, b = Math.cos(w), a = Td(g, a, x * b * -v), s = Td(g, s, -Math.sin(w) * -v), o = Td(g, o, k * b * -v + v);
      }
      c !== rr && (y += "perspective(" + c + ir), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === rr && s === rr && o === rr || (y += o !== rr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + ir), u !== er && (y += "rotate(" + u + ir), h !== er && (y += "rotateY(" + h + ir), l !== er && (y += "rotateX(" + l + ir), f === er && d === er || (y += "skew(" + f + ", " + d + ir), 1 === _ && 1 === p || (y += "scale(" + _ + ", " + p + ir), g.style[Ve] = y || "translate(0, 0)";
    },
    ar = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        _ = o.skewX,
        p = o.skewY,
        c = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      d = parseFloat(d), _ = parseFloat(_), (p = parseFloat(p)) && (_ += p = parseFloat(p), d += p), d || _ ? (d *= Ie, _ *= Ie, r = Math.cos(d) * c, i = Math.sin(d) * c, n = Math.sin(d - _) * -m, a = Math.cos(d - _) * m, _ && (p *= Ie, s = Math.tan(_ - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ca(r), i = ca(i), n = ca(n), a = ca(a)) : (r = c, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Ed(g, "x", l, "px"), k = Ed(g, "y", f, "px")), (v || y || T || b) && (x = ca(x + v - (v * r + y * n) + T), k = ca(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ca(x + u / 100 * s.width), k = ca(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Ve] = s);
    };
  ba("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });
    Ge[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4) return a = o.map(function (t) {
        return Fd(e, t, r);
      }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
      a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
        return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
      }), e.init(t, s, n);
    };
  });
  var sr,
    or,
    ur,
    hr = {
      name: "css",
      register: wd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, i, n) {
        var a,
          s,
          u,
          h,
          l,
          f,
          d,
          _,
          p,
          c,
          m,
          g,
          v,
          y,
          T,
          b = this._props,
          w = t.style,
          x = r.vars.startAt;
        for (d in _e || wd(), e) if ("autoRound" !== d && (s = e[d], !ft[d] || !Ub(d, e, r, i, t, n))) if (l = _typeof(s), f = Ge[d], "function" === l && (l = _typeof(s = s.call(r, i, t, n))), "string" === l && ~s.indexOf("random(") && (s = hb(s)), f) f(this, t, d, s, r) && (T = 1);else if ("--" === d.substr(0, 2)) a = (getComputedStyle(t).getPropertyValue(d) + "").trim(), s += "", Ct.lastIndex = 0, Ct.test(a) || (_ = Ra(a), p = Ra(s)), p ? _ !== p && (a = Ed(t, d, a, p) + p) : _ && (s += _), this.add(w, "setProperty", a, s, i, n, 0, 0, d), b.push(d);else if ("undefined" !== l) {
          if (x && d in x ? (a = "function" == typeof x[d] ? x[d].call(r, i, t, n) : x[d], o(a) && ~a.indexOf("random(") && (a = hb(a)), Ra(a + "") || (a += U.units[d] || Ra(Fd(t, d)) || ""), "=" === (a + "").charAt(1) && (a = Fd(t, d))) : a = Fd(t, d), h = parseFloat(a), (c = "string" === l && "=" === s.charAt(1) && s.substr(0, 2)) && (s = s.substr(2)), u = parseFloat(s), d in qe && ("autoAlpha" === d && (1 === h && "hidden" === Fd(t, "visibility") && u && (h = 0), Cd(this, w, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = qe[d]).indexOf(",") && (d = d.split(",")[0])), m = d in Fe) {
            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || He(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new oe(this._pt, w, Ve, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new oe(this._pt, v, "scaleY", v.scaleY, (c ? ea(v.scaleY, c + u) : u) - v.scaleY || 0), b.push("scaleY", d), d += "X";else {
              if ("transformOrigin" === d) {
                s = Id(s), v.svg ? Qd(t, s, 0, y, 0, this) : ((p = parseFloat(s.split(" ")[2]) || 0) !== v.zOrigin && Cd(this, v, "zOrigin", v.zOrigin, p), Cd(this, w, d, Je(a), Je(s)));
                continue;
              }
              if ("svgOrigin" === d) {
                Qd(t, s, 1, y, 0, this);
                continue;
              }
              if (d in Ze) {
                $d(this, v, d, h, c ? ea(h, c + s) : s);
                continue;
              }
              if ("smoothOrigin" === d) {
                Cd(this, v, "smooth", v.smooth, s);
                continue;
              }
              if ("force3D" === d) {
                v[d] = s;
                continue;
              }
              if ("transform" === d) {
                ae(this, s, t);
                continue;
              }
            }
          } else d in w || (d = je(d) || d);
          if (m || (u || 0 === u) && (h || 0 === h) && !Ye.test(s) && d in w) u = u || 0, (_ = (a + "").substr((h + "").length)) !== (p = Ra(s) || (d in U.units ? U.units[d] : _)) && (h = Ed(t, d, a, p)), this._pt = new oe(this._pt, m ? v : w, d, h, (c ? ea(h, c + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? dd : gd), this._pt.u = p || 0, _ !== p && "%" !== p && (this._pt.b = a, this._pt.r = fd);else if (d in w) Gd.call(this, t, d, a, c ? c + s : s);else {
            if (!(d in t)) {
              N(d, s);
              continue;
            }
            this.add(t, d, a || t[d], c ? c + s : s, i, n);
          }
          b.push(d);
        }
        T && se(this);
      },
      get: Fd,
      aliases: qe,
      getSetter: function getSetter(t, e, i) {
        var n = qe[e];
        return n && n.indexOf(",") < 0 && (e = n), e in Fe && e !== Xe && (t._gsap.x || Fd(t, "x")) ? i && ce === i ? "scale" === e ? md : ld : (ce = i || {}) && ("scale" === e ? nd : od) : t.style && !r(t.style[e]) ? jd : ~e.indexOf("-") ? kd : Ht(t, e);
      },
      core: {
        _removeProperty: Bd,
        _getMatrix: Pd
      }
    };
  he.utils.checkPrefix = je, ur = ba((sr = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (or = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
    Fe[t] = 1;
  }), ba(or, function (t) {
    U.units[t] = "deg", Ze[t] = 1;
  }), qe[ur[13]] = sr + "," + or, ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
    var e = t.split(":");
    qe[e[1]] = ur[e[0]];
  }), ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
    U.units[t] = "px";
  }), he.registerPlugin(hr);
  var lr = he.registerPlugin(hr) || he,
    fr = lr.core.Tween;
  e.Back = Ae, e.Bounce = Se, e.CSSPlugin = hr, e.Circ = Ee, e.Cubic = ke, e.Elastic = Ce, e.Expo = Re, e.Linear = we, e.Power0 = ge, e.Power1 = ve, e.Power2 = ye, e.Power3 = Te, e.Power4 = be, e.Quad = xe, e.Quart = Oe, e.Quint = Pe, e.Sine = ze, e.SteppedEase = De, e.Strong = Me, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = $t, e.TweenMax = fr, e.default = lr, e.gsap = lr;
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
  } else {
    delete e.default;
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./assets/_src/js/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/gsap/gsap.min */ "./assets/_src/js/components/gsap/gsap.min.js");
/* harmony import */ var _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gsap_ScrollTrigger_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gsap/ScrollTrigger.min */ "./assets/_src/js/components/gsap/ScrollTrigger.min.js");
/* harmony import */ var _components_gsap_ScrollTrigger_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_gsap_ScrollTrigger_min__WEBPACK_IMPORTED_MODULE_1__);
/*
 * @title Main App
 * @description Application entry point
 */

// GSAP START


_components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_components_gsap_ScrollTrigger_min__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);
document.addEventListener('DOMContentLoaded', function () {

  // callAccordions();
});
window.addEventListener('load', function () {
  function top() {
    window.scrollTo(0, 0);
  }
  setTimeout(top, 100);
  document.querySelector('.--preview-screen-btn').addEventListener('click', function () {
    document.querySelector('.--preview-screen-message').classList.add('show');
    document.querySelector('.--preview-screen').classList.add('active');
  });
  document.querySelector('.--preview-screen-close').addEventListener('click', function () {
    document.querySelector('.--preview-screen-message').classList.remove('show');
    document.querySelector('.--preview-screen').classList.remove('active');
  });
  document.querySelector('.exquisite').addEventListener('click', function () {
    this.classList.toggle('active');
  });
  document.querySelector('.--preview-screen-down').addEventListener('click', function () {
    document.querySelector('.--preview-screen').classList.add('up');
    document.querySelector('body').classList.remove('overflow');
    document.querySelector('.--preview-screen-message-box').classList.add('go');
    document.querySelector('.--preview-screen-message').classList.add('scale');
    document.querySelector('.-go_up').classList.add('show');
  });
  document.querySelector('.-go_up').addEventListener('click', function () {
    document.querySelector('.--preview-screen-message-box').classList.remove('go');
    document.querySelector('.--preview-screen-message').classList.remove('scale');
    document.querySelector('.--preview-screen').classList.remove('up');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.querySelector('.-go_up').classList.remove('show');
    document.querySelector('body').classList.add('overflow');
  });

  // GSAP Animation
  var boxes = _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(".run-item");
  var loop = horizontalLoop(boxes, {
    paused: true,
    // Sets the tween to be paused initially
    repeat: -1 // Makes sure the tween runs infinitely
  });

  loop.play(); // Call to start playing the tween

  function openAccordion() {
    var content = this.parentElement.querySelector('.accordion_description');
    this.parentElement.classList.toggle('show');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "".concat(content.scrollHeight, "px");
    }
  }
  var element = document.querySelectorAll('.accordion_title');
  element.forEach(function (item) {
    item.addEventListener('click', openAccordion);
  });
});

// -------------------------------------------------------------------------------------------------------------------------------------

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
function horizontalLoop(items, config) {
  items = _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(items);
  config = config || {};
  var tl = _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: {
        ease: "none"
      },
      onReverseComplete: function onReverseComplete() {
        return tl.totalTime(tl.rawTime() + tl.duration() * 100);
      }
    }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? function (v) {
      return v;
    } : _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.snap(config.snap || 1),
    // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
    totalWidth,
    curX,
    distanceToStart,
    distanceToLoop,
    item,
    i;
  _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.set(items, {
    // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
    xPercent: function xPercent(i, el) {
      var w = widths[i] = parseFloat(_components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(_components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.getProperty(el, "x", "px")) / w * 100 + _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    }
  });
  _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.set(items, {
    x: 0
  });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.getProperty(item, "scaleX");
    tl.to(item, {
      xPercent: snap((curX - distanceToLoop) / widths[i] * 100),
      duration: distanceToLoop / pixelsPerSecond
    }, 0).fromTo(item, {
      xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)
    }, {
      xPercent: xPercents[i],
      duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
      immediateRender: false
    }, distanceToLoop / pixelsPerSecond).add("label" + i, distanceToStart / pixelsPerSecond);
    times[i] = distanceToStart / pixelsPerSecond;
  }
  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length); // always go in the shortest direction
    var newIndex = _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      // if we're wrapping the timeline's playhead, make the proper adjustments
      vars.modifiers = {
        time: _components_gsap_gsap_min__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.wrap(0, tl.duration())
      };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }
  tl.next = function (vars) {
    return toIndex(curIndex + 1, vars);
  };
  tl.previous = function (vars) {
    return toIndex(curIndex - 1, vars);
  };
  tl.current = function () {
    return curIndex;
  };
  tl.toIndex = function (index, vars) {
    return toIndex(index, vars);
  };
  tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  return tl;
}
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FBQyxFQUFFMXpCLElBQUksQ0FBQztFQUFBO0VBQzNDcXpCLEVBQUUsQ0FBQ3poQixRQUFRLEdBQUcsVUFBQTVSLElBQUk7SUFBQSxPQUFJbTBCLE9BQU8sQ0FBQ1QsUUFBUSxHQUFDLENBQUMsRUFBRTF6QixJQUFJLENBQUM7RUFBQTtFQUMvQ3F6QixFQUFFLENBQUN0aUIsT0FBTyxHQUFHO0lBQUEsT0FBTTJpQixRQUFRO0VBQUE7RUFDM0JMLEVBQUUsQ0FBQ2MsT0FBTyxHQUFHLFVBQUMxTixLQUFLLEVBQUV6bUIsSUFBSTtJQUFBLE9BQUttMEIsT0FBTyxDQUFDMU4sS0FBSyxFQUFFem1CLElBQUksQ0FBQztFQUFBO0VBQ2xEcXpCLEVBQUUsQ0FBQ0UsS0FBSyxHQUFHQSxLQUFLO0VBQ2ZGLEVBQUUsQ0FBQzd2QixRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDQSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7RUFDeEMsSUFBSTFPLE1BQU0sQ0FBQzRkLFFBQVEsRUFBRTtJQUNuQjJnQixFQUFFLENBQUNyekIsSUFBSSxDQUFDb29CLGlCQUFpQixFQUFFO0lBQzNCaUwsRUFBRSxDQUFDeGdCLE9BQU8sRUFBRTtFQUNkO0VBQ0QsT0FBT3dnQixFQUFFO0FBQ1YsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvY29tcG9uZW50cy9nc2FwL1Njcm9sbFRyaWdnZXIubWluLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyLy4vYXNzZXRzL19zcmMvanMvY29tcG9uZW50cy9nc2FwL2dzYXAubWluLmpzIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kcy1ndWxwLXdlYnBhY2stc3RhcnRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2RzLWd1bHAtd2VicGFjay1zdGFydGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHMtZ3VscC13ZWJwYWNrLXN0YXJ0ZXIvLi9hc3NldHMvX3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIFNjcm9sbFRyaWdnZXIgMy4xMC4yXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqIFxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMjIsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvciBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICovXG5cbiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP3QoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLHQpOnQoKGU9ZXx8c2VsZikud2luZG93PWUud2luZG93fHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSx0KXtmb3IodmFyIHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIG49dFtyXTtuLmVudW1lcmFibGU9bi5lbnVtZXJhYmxlfHwhMSxuLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiBuJiYobi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsbi5rZXksbil9fWZ1bmN0aW9uIHAoKXtyZXR1cm4gaGV8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJihoZT13aW5kb3cuZ3NhcCkmJmhlLnJlZ2lzdGVyUGx1Z2luJiZoZX1mdW5jdGlvbiB4KGUsdCl7cmV0dXJuflllLmluZGV4T2YoZSkmJlllW1llLmluZGV4T2YoZSkrMV1bdF19ZnVuY3Rpb24geShlKXtyZXR1cm4hIX50LmluZGV4T2YoZSl9ZnVuY3Rpb24geihlLHQscixuKXtyZXR1cm4gZS5hZGRFdmVudExpc3RlbmVyKHQscix7cGFzc2l2ZTohbn0pfWZ1bmN0aW9uIEEoZSx0LHIpe3JldHVybiBlLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxyKX1mdW5jdGlvbiBEKCl7cmV0dXJuIFBlJiZQZS5pc1ByZXNzZWR8fHplLmNhY2hlKyt9ZnVuY3Rpb24gRSh0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGV8fDA9PT1lPyhyJiYodmUuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj1cIm1hbnVhbFwiKSx0KGUpLHQudj1lLHQuYz16ZS5jYWNoZSxQZSYmUGUuaXNQcmVzc2VkJiZSZShcInNzXCIsZSkpOnplLmNhY2hlPT09dC5jJiYhUmUoXCJyZWZcIil8fCh0LmM9emUuY2FjaGUsdC52PXQoKSksdC52fX1mdW5jdGlvbiBIKGUpe3JldHVybiBoZS51dGlscy50b0FycmF5KGUpWzBdfHwoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiExIT09aGUuY29uZmlnKCkubnVsbFRhcmdldFdhcm4/Y29uc29sZS53YXJuKFwiRWxlbWVudCBub3QgZm91bmQ6XCIsZSk6bnVsbCl9ZnVuY3Rpb24gSSh0LGUpe3ZhciByPWUucyxuPWUuc2MsaT16ZS5pbmRleE9mKHQpLG89bj09PVhlLnNjPzE6MjtyZXR1cm5+aXx8KGk9emUucHVzaCh0KS0xKSx6ZVtpK29dfHwoemVbaStvXT14KHQscil8fCh5KHQpP246ZnVuY3Rpb24oZSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dFtyXT1lOnRbcl19KSl9ZnVuY3Rpb24gSihlLHQsaSl7ZnVuY3Rpb24gX2MoZSx0KXt2YXIgcj11KCk7dHx8bjxyLXM/KGE9byxvPWUsbD1zLHM9cik6aT9vKz1lOm89YSsoZS1hKS8oci1sKSoocy1sKX12YXIgbz1lLGE9ZSxzPXUoKSxsPXMsbj10fHw1MCxjPU1hdGgubWF4KDUwMCwzKm4pO3JldHVybnt1cGRhdGU6X2MscmVzZXQ6ZnVuY3Rpb24gcmVzZXQoKXthPW89aT8wOm8sbD1zPTB9LGdldFZlbG9jaXR5OmZ1bmN0aW9uIGdldFZlbG9jaXR5KGUpe3ZhciB0PWwscj1hLG49dSgpO3JldHVybiFlJiYwIT09ZXx8ZT09PW98fF9jKGUpLHM9PT1sfHxjPG4tbD8wOihvKyhpP3I6LXIpKS8oKGk/bjpzKS10KSoxZTN9fX1mdW5jdGlvbiBLKGUsdCl7cmV0dXJuIHQmJmUucHJldmVudERlZmF1bHQoKSxlLmNoYW5nZWRUb3VjaGVzP2UuY2hhbmdlZFRvdWNoZXNbMF06ZX1mdW5jdGlvbiBMKGUpe3ZhciB0PU1hdGgubWF4LmFwcGx5KE1hdGgsZSkscj1NYXRoLm1pbi5hcHBseShNYXRoLGUpO3JldHVybiBNYXRoLmFicyh0KT49TWF0aC5hYnMocik/dDpyfWZ1bmN0aW9uIE0oZSl7cmV0dXJuKGhlPWV8fHAoKSkmJiFiZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZkb2N1bWVudC5ib2R5JiYodmU9d2luZG93LFNlPShtZT1kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50LF9lPW1lLmJvZHksdD1bdmUsbWUsU2UsX2VdLGhlLnV0aWxzLmNsYW1wLGtlPVwib25wb2ludGVyZW50ZXJcImluIF9lP1wicG9pbnRlclwiOlwibW91c2VcIixUZT13LmlzVG91Y2g9dmUubWF0Y2hNZWRpYSYmdmUubWF0Y2hNZWRpYShcIihob3Zlcjogbm9uZSksIChwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXM/MTpcIm9udG91Y2hzdGFydFwiaW4gdmV8fDA8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzfHwwPG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzPzI6MCxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cmV0dXJuIHI9MH0sNTAwKSxiZT0xKSxiZX12YXIgaGUsYmUsdmUsbWUsU2UsX2UsVGUsa2UsTWUsdCxQZSxyPTEsT2U9W10semU9W10sWWU9W10sdT1EYXRlLm5vdyxSZT1mdW5jdGlvbiBfYnJpZGdlKGUsdCl7cmV0dXJuIHR9LG49XCJzY3JvbGxMZWZ0XCIsaT1cInNjcm9sbFRvcFwiLExlPXtzOm4scDpcImxlZnRcIixwMjpcIkxlZnRcIixvczpcInJpZ2h0XCIsb3MyOlwiUmlnaHRcIixkOlwid2lkdGhcIixkMjpcIldpZHRoXCIsYTpcInhcIixzYzpFKGZ1bmN0aW9uKGUpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3ZlLnNjcm9sbFRvKGUsWGUuc2MoKSk6dmUucGFnZVhPZmZzZXR8fG1lW25dfHxTZVtuXXx8X2Vbbl18fDB9KX0sWGU9e3M6aSxwOlwidG9wXCIscDI6XCJUb3BcIixvczpcImJvdHRvbVwiLG9zMjpcIkJvdHRvbVwiLGQ6XCJoZWlnaHRcIixkMjpcIkhlaWdodFwiLGE6XCJ5XCIsb3A6TGUsc2M6RShmdW5jdGlvbihlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD92ZS5zY3JvbGxUbyhMZS5zYygpLGUpOnZlLnBhZ2VZT2Zmc2V0fHxtZVtpXXx8U2VbaV18fF9lW2ldfHwwfSl9O0xlLm9wPVhlLHplLmNhY2hlPTA7dmFyIHc9KE9ic2VydmVyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uIGluaXQoZSl7YmV8fE0oaGUpfHxjb25zb2xlLndhcm4oXCJQbGVhc2UgZ3NhcC5yZWdpc3RlclBsdWdpbihPYnNlcnZlcilcIiksTWV8fChNZT1oZS5jb3JlLmdsb2JhbHMoKS5TY3JvbGxUcmlnZ2VyKSYmTWUuY29yZSYmZnVuY3Rpb24gX2ludGVncmF0ZSgpe3ZhciBlPU1lLmNvcmUscj1lLmJyaWRnZXx8e30sdD1lLl9zY3JvbGxlcnMsbj1lLl9wcm94aWVzO3QucHVzaC5hcHBseSh0LHplKSxuLnB1c2guYXBwbHkobixZZSksemU9dCxZZT1uLFJlPWZ1bmN0aW9uIF9icmlkZ2UoZSx0KXtyZXR1cm4gcltlXSh0KX19KCk7dmFyIGk9ZS50b2xlcmFuY2UsYT1lLmRyYWdNaW5pbXVtLHQ9ZS50eXBlLHI9ZS50YXJnZXQsbj1lLmxpbmVIZWlnaHQsbz1lLmRlYm91bmNlLHM9ZS5wcmV2ZW50RGVmYXVsdCxsPWUub25TdG9wLGM9ZS5vblN0b3BEZWxheSx1PWUuaWdub3JlLGY9ZS53aGVlbFNwZWVkLGQ9ZS5ldmVudCxwPWUub25EcmFnU3RhcnQsZz1lLm9uRHJhZ0VuZCxoPWUub25EcmFnLGI9ZS5vblByZXNzLHY9ZS5vblJlbGVhc2UsbT1lLm9uUmlnaHQseD1lLm9uTGVmdCx3PWUub25VcCxTPWUub25Eb3duLF89ZS5vbkNoYW5nZVgsVD1lLm9uQ2hhbmdlWSxrPWUub25DaGFuZ2UsRT1lLm9uVG9nZ2xlWCxDPWUub25Ub2dnbGVZLFA9ZS5vbkhvdmVyLE89ZS5vbkhvdmVyRW5kLEY9ZS5vbk1vdmUsWT1lLmlnbm9yZUNoZWNrLFI9ZS5pc05vcm1hbGl6ZXIsQj1lLm9uR2VzdHVyZVN0YXJ0LFg9ZS5vbkdlc3R1cmVFbmQsaj1lLm9uV2hlZWwsVj1lLm9uRW5hYmxlLEc9ZS5vbkRpc2FibGUsTj1lLm9uQ2xpY2ssVz1lLnNjcm9sbFNwZWVkO2Z1bmN0aW9uIHVlKGUsdCl7cmV0dXJuKGVlLmV2ZW50PWUpJiZ1JiZ+dS5pbmRleE9mKGUudGFyZ2V0KXx8dCYmbGUmJlwidG91Y2hcIiE9PWUucG9pbnRlclR5cGV8fFkmJlkoZSl9ZnVuY3Rpb24gd2UoKXt2YXIgZT1lZS5kZWx0YVg9TChkZSksdD1lZS5kZWx0YVk9TChwZSkscj1NYXRoLmFicyhlKT49aSxuPU1hdGguYWJzKHQpPj1pO2smJihyfHxuKSYmayhlZSxlLHQsZGUscGUpLHImJihtJiYwPGVlLmRlbHRhWCYmbShlZSkseCYmZWUuZGVsdGFYPDAmJngoZWUpLF8mJl8oZWUpLEUmJmVlLmRlbHRhWDwwIT10ZTwwJiZFKGVlKSx0ZT1lZS5kZWx0YVgsZGVbMF09ZGVbMV09ZGVbMl09MCksbiYmKFMmJjA8ZWUuZGVsdGFZJiZTKGVlKSx3JiZlZS5kZWx0YVk8MCYmdyhlZSksVCYmVChlZSksQyYmZWUuZGVsdGFZPDAhPXJlPDAmJkMoZWUpLHJlPWVlLmRlbHRhWSxwZVswXT1wZVsxXT1wZVsyXT0wKSwkJiYoRihlZSksJD0hMSksWiYmKGgoZWUpLFo9ITEpLFEmJihqKGVlKSxRPSExKSxxPTB9ZnVuY3Rpb24geGUoZSx0LHIpe2RlW3JdKz1lLHBlW3JdKz10LGVlLl92eC51cGRhdGUoZSwyPT09ciksZWUuX3Z5LnVwZGF0ZSh0LDI9PT1yKSxvP3E9cXx8cmVxdWVzdEFuaW1hdGlvbkZyYW1lKHdlKTp3ZSgpfWZ1bmN0aW9uIHllKGUpe2lmKCF1ZShlLDEpKXt2YXIgdD0oZT1LKGUscykpLmNsaWVudFgscj1lLmNsaWVudFksbj10LWVlLngsaT1yLWVlLnksbz1lZS5pc0RyYWdnaW5nO2VlLng9dCxlZS55PXIsKG98fE1hdGguYWJzKGVlLnN0YXJ0WC10KT49YXx8TWF0aC5hYnMoZWUuc3RhcnRZLXIpPj1hKSYmKGgmJihaPSEwKSxvfHwoZWUuaXNEcmFnZ2luZz0hMCkseGUobixpLDIpLG98fHAmJnAoZWUpKX19ZnVuY3Rpb24gQWUoZSl7aWYoIXVlKGUsMSkpe0EoUj9yOmZlLHNlWzFdLHllKTt2YXIgdD1lZS5pc0RyYWdnaW5nO3R8fChlZS5fdngucmVzZXQoKSxlZS5fdnkucmVzZXQoKSksZWUuaXNEcmFnZ2luZz1lZS5pc0dlc3R1cmluZz1lZS5pc1ByZXNzZWQ9ITEsbCYmIVImJlUucmVzdGFydCghMCksZyYmdCYmZyhlZSksdiYmdihlZSx0KX19ZnVuY3Rpb24gQmUoZSl7cmV0dXJuIGUudG91Y2hlcyYmMTxlLnRvdWNoZXMubGVuZ3RoJiYoZWUuaXNHZXN0dXJpbmc9ITApJiZCKGUsZWUuaXNEcmFnZ2luZyl9ZnVuY3Rpb24gQ2UoKXtyZXR1cm4oZWUuaXNHZXN0dXJpbmc9ITEpfHxYKGVlKX1mdW5jdGlvbiBEZShlKXtpZighdWUoZSkpe3ZhciB0PW5lKCkscj1pZSgpO3hlKCh0LW9lKSpXLChyLWFlKSpXLDEpLG9lPXQsYWU9cixsJiZVLnJlc3RhcnQoITApfX1mdW5jdGlvbiBFZShlKXtpZighdWUoZSkpe2U9SyhlLHMpLGomJihRPSEwKTt2YXIgdD0oMT09PWUuZGVsdGFNb2RlP246Mj09PWUuZGVsdGFNb2RlP3ZlLmlubmVySGVpZ2h0OjEpKmY7eGUoZS5kZWx0YVgqdCxlLmRlbHRhWSp0LDApLGwmJiFSJiZVLnJlc3RhcnQoITApfX1mdW5jdGlvbiBGZShlKXtpZighdWUoZSkpe3ZhciB0PWUuY2xpZW50WCxyPWUuY2xpZW50WSxuPXQtZWUueCxpPXItZWUueTtlZS54PXQsZWUueT1yLEYmJigkPSEwKSwobnx8aSkmJnhlKG4saSwyKX19ZnVuY3Rpb24gR2UoZSl7ZWUuZXZlbnQ9ZSxQKGVlKX1mdW5jdGlvbiBIZShlKXtlZS5ldmVudD1lLE8oZWUpfWZ1bmN0aW9uIEllKGUpe3JldHVybiB1ZShlKXx8SyhlLHMpJiZOKGVlKX10aGlzLnRhcmdldD1yPUgocil8fFNlLHRoaXMudmFycz1lLHU9dSYmaGUudXRpbHMudG9BcnJheSh1KSxpPWl8fDAsYT1hfHwwLGY9Znx8MSxXPVd8fDEsdD10fHxcIndoZWVsLHRvdWNoLHBvaW50ZXJcIixvPSExIT09byxuPW58fHBhcnNlRmxvYXQodmUuZ2V0Q29tcHV0ZWRTdHlsZShfZSkubGluZUhlaWdodCl8fDIyO3ZhciBxLFUsWiwkLFEsZWU9dGhpcyx0ZT0wLHJlPTAsbmU9SShyLExlKSxpZT1JKHIsWGUpLG9lPW5lKCksYWU9aWUoKSxzZT0oXCJvbnRvdWNoc3RhcnRcImluIFNlP1widG91Y2hzdGFydCx0b3VjaG1vdmUsdG91Y2hjYW5jZWwsdG91Y2hlbmRcIjowPD10LmluZGV4T2YoXCJwb2ludGVyXCIpJiYhKFwib25wb2ludGVyZG93blwiaW4gU2UpP1wibW91c2Vkb3duLG1vdXNlbW92ZSxtb3VzZXVwLG1vdXNldXBcIjpcInBvaW50ZXJkb3duLHBvaW50ZXJtb3ZlLHBvaW50ZXJjYW5jZWwscG9pbnRlcnVwXCIpLnNwbGl0KFwiLFwiKSxsZT1+dC5pbmRleE9mKFwidG91Y2hcIikmJiF+dC5pbmRleE9mKFwicG9pbnRlclwiKSYmXCJwb2ludGVyZG93blwiPT09c2VbMF0sY2U9eShyKSxmZT1yLm93bmVyRG9jdW1lbnR8fG1lLGRlPVswLDAsMF0scGU9WzAsMCwwXSxnZT1lZS5vblByZXNzPWZ1bmN0aW9uKGUpe3VlKGUsMSl8fChVLnBhdXNlKCksZWUuaXNQcmVzc2VkPSEwLGU9SyhlLHMpLHRlPXJlPTAsZWUuc3RhcnRYPWVlLng9ZS5jbGllbnRYLGVlLnN0YXJ0WT1lZS55PWUuY2xpZW50WSxlZS5fdngucmVzZXQoKSxlZS5fdnkucmVzZXQoKSx6KFI/cjpmZSxzZVsxXSx5ZSxzKSxlZS5kZWx0YVg9ZWUuZGVsdGFZPTAsYiYmYihlZSkpfTtVPWVlLl9kYz1oZS5kZWxheWVkQ2FsbChjfHwuMjUsZnVuY3Rpb24gb25TdG9wRnVuYygpe2VlLl92eC5yZXNldCgpLGVlLl92eS5yZXNldCgpLFUucGF1c2UoKSxsJiZsKGVlKX0pLnBhdXNlKCksZWUuZGVsdGFYPWVlLmRlbHRhWT0wLGVlLl92eD1KKDAsNTAsITApLGVlLl92eT1KKDAsNTAsITApLGVlLnNjcm9sbFg9bmUsZWUuc2Nyb2xsWT1pZSxlZS5pc0RyYWdnaW5nPWVlLmlzR2VzdHVyaW5nPWVlLmlzUHJlc3NlZD0hMSxlZS5lbmFibGU9ZnVuY3Rpb24oZSl7cmV0dXJuIGVlLmlzRW5hYmxlZHx8KHooY2U/ZmU6cixcInNjcm9sbFwiLEQpLDA8PXQuaW5kZXhPZihcInNjcm9sbFwiKSYmeihjZT9mZTpyLFwic2Nyb2xsXCIsRGUscyksMDw9dC5pbmRleE9mKFwid2hlZWxcIikmJnoocixcIndoZWVsXCIsRWUscyksKDA8PXQuaW5kZXhPZihcInRvdWNoXCIpJiZUZXx8MDw9dC5pbmRleE9mKFwicG9pbnRlclwiKSkmJih6KHIsc2VbMF0sZ2UscykseihmZSxzZVsyXSxBZSkseihmZSxzZVszXSxBZSksTiYmeihyLFwiY2xpY2tcIixJZSksQiYmeihmZSxcImdlc3R1cmVzdGFydFwiLEJlKSxYJiZ6KGZlLFwiZ2VzdHVyZWVuZFwiLENlKSxQJiZ6KHIsa2UrXCJlbnRlclwiLEdlKSxPJiZ6KHIsa2UrXCJsZWF2ZVwiLEhlKSxGJiZ6KHIsa2UrXCJtb3ZlXCIsRmUpKSxlZS5pc0VuYWJsZWQ9ITAsZSYmZS50eXBlJiZnZShlKSxWJiZWKGVlKSksZWV9LGVlLmRpc2FibGU9ZnVuY3Rpb24oKXtlZS5pc0VuYWJsZWQmJihPZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUhPT1lZSYmeShlLnRhcmdldCl9KS5sZW5ndGh8fEEoY2U/ZmU6cixcInNjcm9sbFwiLEQpLEEoY2U/ZmU6cixcInNjcm9sbFwiLERlKSxBKHIsXCJ3aGVlbFwiLEVlKSxBKHIsc2VbMF0sZ2UpLEEoZmUsc2VbMl0sQWUpLEEoZmUsc2VbM10sQWUpLEEocixcImNsaWNrXCIsSWUpLEEoZmUsXCJnZXN0dXJlc3RhcnRcIixCZSksQShmZSxcImdlc3R1cmVlbmRcIixDZSksQShyLGtlK1wiZW50ZXJcIixHZSksQShyLGtlK1wibGVhdmVcIixIZSksQShyLGtlK1wibW92ZVwiLEZlKSxlZS5pc0VuYWJsZWQ9ITEsRyYmRyhlZSkpfSxlZS5raWxsPWZ1bmN0aW9uKCl7ZWUuZGlzYWJsZSgpO3ZhciBlPU9lLmluZGV4T2YoZWUpOzA8PWUmJk9lLnNwbGljZShlLDEpLFBlPT09ZWUmJihQZT0wKX0sT2UucHVzaChlZSksUiYmKFBlPWVlKSxlZS5lbmFibGUoZCl9LGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhlLHQscil7cmV0dXJuIHQmJl9kZWZpbmVQcm9wZXJ0aWVzKGUucHJvdG90eXBlLHQpLHImJl9kZWZpbmVQcm9wZXJ0aWVzKGUsciksZX0oT2JzZXJ2ZXIsW3trZXk6XCJ2ZWxvY2l0eVhcIixnZXQ6ZnVuY3Rpb24gZ2V0KCl7cmV0dXJuIHRoaXMuX3Z4LmdldFZlbG9jaXR5KCl9fSx7a2V5OlwidmVsb2NpdHlZXCIsZ2V0OmZ1bmN0aW9uIGdldCgpe3JldHVybiB0aGlzLl92eS5nZXRWZWxvY2l0eSgpfX1dKSxPYnNlcnZlcik7ZnVuY3Rpb24gT2JzZXJ2ZXIoZSl7dGhpcy5pbml0KGUpfXcudmVyc2lvbj1cIjMuMTAuMlwiLHcuY3JlYXRlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdyhlKX0sdy5yZWdpc3Rlcj1NLHcuZ2V0QWxsPWZ1bmN0aW9uKCl7cmV0dXJuIE9lLnNsaWNlKCl9LHcuZ2V0QnlJZD1mdW5jdGlvbih0KXtyZXR1cm4gT2UuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlLnZhcnMuaWQ9PT10fSlbMF19LHAoKSYmaGUucmVnaXN0ZXJQbHVnaW4odyk7ZnVuY3Rpb24gc2EoKXtyZXR1cm4gJGU9MX1mdW5jdGlvbiB0YSgpe3JldHVybiAkZT0wfWZ1bmN0aW9uIHVhKGUpe3JldHVybiBlfWZ1bmN0aW9uIHZhKGUpe3JldHVybiBNYXRoLnJvdW5kKDFlNSplKS8xZTV8fDB9ZnVuY3Rpb24gd2EoKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93fWZ1bmN0aW9uIHhhKCl7cmV0dXJuIGplfHx3YSgpJiYoamU9d2luZG93LmdzYXApJiZqZS5yZWdpc3RlclBsdWdpbiYmamV9ZnVuY3Rpb24geWEoZSl7cmV0dXJuISF+YS5pbmRleE9mKGUpfWZ1bmN0aW9uIHphKGUpe3JldHVybiB4KGUsXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIil8fCh5YShlKT9mdW5jdGlvbigpe3JldHVybiBNdC53aWR0aD1WZS5pbm5lcldpZHRoLE10LmhlaWdodD1WZS5pbm5lckhlaWdodCxNdH06ZnVuY3Rpb24oKXtyZXR1cm4gd3QoZSl9KX1mdW5jdGlvbiBDYShlLHQpe3ZhciByPXQucyxuPXQuZDIsaT10LmQsbz10LmE7cmV0dXJuKHI9XCJzY3JvbGxcIituKSYmKG89eChlLHIpKT9vKCktemEoZSkoKVtpXTp5YShlKT8oS2Vbcl18fFdlW3JdKS0oVmVbXCJpbm5lclwiK25dfHxLZVtcImNsaWVudFwiK25dfHxXZVtcImNsaWVudFwiK25dKTplW3JdLWVbXCJvZmZzZXRcIituXX1mdW5jdGlvbiBEYShlLHQpe2Zvcih2YXIgcj0wO3I8Zy5sZW5ndGg7cis9Myl0JiYhfnQuaW5kZXhPZihnW3IrMV0pfHxlKGdbcl0sZ1tyKzFdLGdbcisyXSl9ZnVuY3Rpb24gRWEoZSl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGV9ZnVuY3Rpb24gRmEoZSl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgZX1mdW5jdGlvbiBHYShlKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2YgZX1mdW5jdGlvbiBIYShlKXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgZX1mdW5jdGlvbiBJYShlKXtyZXR1cm4gRmEoZSkmJmUoKX1mdW5jdGlvbiBKYShyLG4pe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPUlhKHIpLHQ9SWEobik7cmV0dXJuIGZ1bmN0aW9uKCl7SWEoZSksSWEodCl9fX1mdW5jdGlvbiBLYShlLHQscil7cmV0dXJuIGUmJmUucHJvZ3Jlc3ModD8wOjEpJiZyJiZlLnBhdXNlKCl9ZnVuY3Rpb24gTGEoZSx0KXtpZihlLmVuYWJsZWQpe3ZhciByPXQoZSk7ciYmci50b3RhbFRpbWUmJihlLmNhbGxiYWNrQW5pbWF0aW9uPXIpfX1mdW5jdGlvbiBhYihlKXtyZXR1cm4gVmUuZ2V0Q29tcHV0ZWRTdHlsZShlKX1mdW5jdGlvbiBjYihlLHQpe2Zvcih2YXIgciBpbiB0KXIgaW4gZXx8KGVbcl09dFtyXSk7cmV0dXJuIGV9ZnVuY3Rpb24gZWIoZSx0KXt2YXIgcj10LmQyO3JldHVybiBlW1wib2Zmc2V0XCIrcl18fGVbXCJjbGllbnRcIityXXx8MH1mdW5jdGlvbiBmYihlKXt2YXIgdCxyPVtdLG49ZS5sYWJlbHMsaT1lLmR1cmF0aW9uKCk7Zm9yKHQgaW4gbilyLnB1c2goblt0XS9pKTtyZXR1cm4gcn1mdW5jdGlvbiBoYihpKXt2YXIgbz1qZS51dGlscy5zbmFwKGkpLGE9QXJyYXkuaXNBcnJheShpKSYmaS5zbGljZSgwKS5zb3J0KGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUtdH0pO3JldHVybiBhP2Z1bmN0aW9uKGUsdCxyKXt2YXIgbjtpZih2b2lkIDA9PT1yJiYocj0uMDAxKSwhdClyZXR1cm4gbyhlKTtpZigwPHQpe2ZvcihlLT1yLG49MDtuPGEubGVuZ3RoO24rKylpZihhW25dPj1lKXJldHVybiBhW25dO3JldHVybiBhW24tMV19Zm9yKG49YS5sZW5ndGgsZSs9cjtuLS07KWlmKGFbbl08PWUpcmV0dXJuIGFbbl07cmV0dXJuIGFbMF19OmZ1bmN0aW9uKGUsdCxyKXt2b2lkIDA9PT1yJiYocj0uMDAxKTt2YXIgbj1vKGUpO3JldHVybiF0fHxNYXRoLmFicyhuLWUpPHJ8fG4tZTwwPT10PDA/bjpvKHQ8MD9lLWk6ZStpKX19ZnVuY3Rpb24gamIodCxyLGUsbil7cmV0dXJuIGUuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIHQocixlLG4pfSl9ZnVuY3Rpb24ga2IoZSx0LHIsbil7cmV0dXJuIGUuYWRkRXZlbnRMaXN0ZW5lcih0LHIse3Bhc3NpdmU6IW59KX1mdW5jdGlvbiBsYihlLHQscil7cmV0dXJuIGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LHIpfWZ1bmN0aW9uIG1iKGUsdCxyKXtyZXR1cm4gciYmci53aGVlbEhhbmRsZXImJmUodCxcIndoZWVsXCIscil9ZnVuY3Rpb24gcWIoZSx0KXtpZihFYShlKSl7dmFyIHI9ZS5pbmRleE9mKFwiPVwiKSxuPX5yPyhlLmNoYXJBdChyLTEpKzEpKnBhcnNlRmxvYXQoZS5zdWJzdHIocisxKSk6MDt+ciYmKGUuaW5kZXhPZihcIiVcIik+ciYmKG4qPXQvMTAwKSxlPWUuc3Vic3RyKDAsci0xKSksZT1uKyhlIGluIEY/RltlXSp0On5lLmluZGV4T2YoXCIlXCIpP3BhcnNlRmxvYXQoZSkqdC8xMDA6cGFyc2VGbG9hdChlKXx8MCl9cmV0dXJuIGV9ZnVuY3Rpb24gcmIoZSx0LHIsbixpLG8sYSxzKXt2YXIgbD1pLnN0YXJ0Q29sb3IsYz1pLmVuZENvbG9yLHU9aS5mb250U2l6ZSxmPWkuaW5kZW50LGQ9aS5mb250V2VpZ2h0LHA9TmUuY3JlYXRlRWxlbWVudChcImRpdlwiKSxnPXlhKHIpfHxcImZpeGVkXCI9PT14KHIsXCJwaW5UeXBlXCIpLGg9LTEhPT1lLmluZGV4T2YoXCJzY3JvbGxlclwiKSxiPWc/V2U6cix2PS0xIT09ZS5pbmRleE9mKFwic3RhcnRcIiksbT12P2w6Yyx5PVwiYm9yZGVyLWNvbG9yOlwiK20rXCI7Zm9udC1zaXplOlwiK3UrXCI7Y29sb3I6XCIrbStcIjtmb250LXdlaWdodDpcIitkK1wiO3BvaW50ZXItZXZlbnRzOm5vbmU7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWYsQXJpYWw7ei1pbmRleDoxMDAwO3BhZGRpbmc6NHB4IDhweDtib3JkZXItd2lkdGg6MDtib3JkZXItc3R5bGU6c29saWQ7XCI7cmV0dXJuIHkrPVwicG9zaXRpb246XCIrKChofHxzKSYmZz9cImZpeGVkO1wiOlwiYWJzb2x1dGU7XCIpLCFoJiYhcyYmZ3x8KHkrPShuPT09WGU/QzpQKStcIjpcIisobytwYXJzZUZsb2F0KGYpKStcInB4O1wiKSxhJiYoeSs9XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7dGV4dC1hbGlnbjpsZWZ0O3dpZHRoOlwiK2Eub2Zmc2V0V2lkdGgrXCJweDtcIikscC5faXNTdGFydD12LHAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcImdzYXAtbWFya2VyLVwiK2UrKHQ/XCIgbWFya2VyLVwiK3Q6XCJcIikpLHAuc3R5bGUuY3NzVGV4dD15LHAuaW5uZXJUZXh0PXR8fDA9PT10P2UrXCItXCIrdDplLGIuY2hpbGRyZW5bMF0/Yi5pbnNlcnRCZWZvcmUocCxiLmNoaWxkcmVuWzBdKTpiLmFwcGVuZENoaWxkKHApLHAuX29mZnNldD1wW1wib2Zmc2V0XCIrbi5vcC5kMl0sWShwLDAsbix2KSxwfWZ1bmN0aW9uIHdiKCl7cmV0dXJuIDM0PHN0KCktbHQmJlooKX1mdW5jdGlvbiB4Yigpe2ImJmIuaXNQcmVzc2VkfHwoemUuY2FjaGUrKyxfPV98fHJlcXVlc3RBbmltYXRpb25GcmFtZShaKSxsdHx8aihcInNjcm9sbFN0YXJ0XCIpLGx0PXN0KCkpfWZ1bmN0aW9uIHliKCl7emUuY2FjaGUrKyxaZXx8aHx8TmUuZnVsbHNjcmVlbkVsZW1lbnR8fHYmJlM9PT1WZS5pbm5lcldpZHRoJiYhKE1hdGguYWJzKFZlLmlubmVySGVpZ2h0LW0pPi4yNSpWZS5pbm5lckhlaWdodCl8fHMucmVzdGFydCghMCl9ZnVuY3Rpb24gRWIoZSl7dmFyIHQscj1qZS50aWNrZXIuZnJhbWUsbj1bXSxpPTA7aWYoVCE9PXJ8fGF0KXtmb3IoTigpO2k8WC5sZW5ndGg7aSs9NCkodD1WZS5tYXRjaE1lZGlhKFhbaV0pLm1hdGNoZXMpIT09WFtpKzNdJiYoKFhbaSszXT10KT9uLnB1c2goaSk6TigxLFhbaV0pfHxGYShYW2krMl0pJiZYW2krMl0oKSk7Zm9yKEcoKSxpPTA7aTxuLmxlbmd0aDtpKyspdD1uW2ldLG50PVhbdF0sWFt0KzJdPVhbdCsxXShlKTtudD0wLG8mJnEoMCwxKSxUPXIsaihcIm1hdGNoTWVkaWFcIil9fWZ1bmN0aW9uIEZiKCl7cmV0dXJuIGxiKHJlLFwic2Nyb2xsRW5kXCIsRmIpfHxxKCEwKX1mdW5jdGlvbiBLYigpe3JldHVybiB6ZS5jYWNoZSsrJiZ6ZS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJihlLnJlYz0wKX0pfWZ1bmN0aW9uIFZiKGUsdCxyLG4pe2lmKGUucGFyZW50Tm9kZSE9PXQpe2Zvcih2YXIgaSxvPSQubGVuZ3RoLGE9dC5zdHlsZSxzPWUuc3R5bGU7by0tOylhW2k9JFtvXV09cltpXTthLnBvc2l0aW9uPVwiYWJzb2x1dGVcIj09PXIucG9zaXRpb24/XCJhYnNvbHV0ZVwiOlwicmVsYXRpdmVcIixcImlubGluZVwiPT09ci5kaXNwbGF5JiYoYS5kaXNwbGF5PVwiaW5saW5lLWJsb2NrXCIpLHNbUF09c1tDXT1hLmZsZXhCYXNpcz1cImF1dG9cIixhLm92ZXJmbG93PVwidmlzaWJsZVwiLGEuYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiLGFbZnRdPWViKGUsTGUpK3h0LGFbZHRdPWViKGUsWGUpK3h0LGFbdnRdPXNbbXRdPXMudG9wPXMubGVmdD1cIjBcIixDdChuKSxzW2Z0XT1zLm1heFdpZHRoPXJbZnRdLHNbZHRdPXMubWF4SGVpZ2h0PXJbZHRdLHNbdnRdPXJbdnRdLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCxlKSx0LmFwcGVuZENoaWxkKGUpfX1mdW5jdGlvbiBZYihlKXtmb3IodmFyIHQ9US5sZW5ndGgscj1lLnN0eWxlLG49W10saT0wO2k8dDtpKyspbi5wdXNoKFFbaV0scltRW2ldXSk7cmV0dXJuIG4udD1lLG59ZnVuY3Rpb24gX2IoZSx0LHIsbixpLG8sYSxzLGwsYyx1LGYsZCl7RmEoZSkmJihlPWUocykpLEVhKGUpJiZcIm1heFwiPT09ZS5zdWJzdHIoMCwzKSYmKGU9ZisoXCI9XCI9PT1lLmNoYXJBdCg0KT9xYihcIjBcIitlLnN1YnN0cigzKSxyKTowKSk7dmFyIHAsZyxoLGI9ZD9kLnRpbWUoKTowO2lmKGQmJmQuc2VlaygwKSxHYShlKSlhJiZZKGEscixuLCEwKTtlbHNle0ZhKHQpJiYodD10KHMpKTt2YXIgdixtLHkseCx3PWUuc3BsaXQoXCIgXCIpO2g9SCh0KXx8V2UsKHY9d3QoaCl8fHt9KSYmKHYubGVmdHx8di50b3ApfHxcIm5vbmVcIiE9PWFiKGgpLmRpc3BsYXl8fCh4PWguc3R5bGUuZGlzcGxheSxoLnN0eWxlLmRpc3BsYXk9XCJibG9ja1wiLHY9d3QoaCkseD9oLnN0eWxlLmRpc3BsYXk9eDpoLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKSksbT1xYih3WzBdLHZbbi5kXSkseT1xYih3WzFdfHxcIjBcIixyKSxlPXZbbi5wXS1sW24ucF0tYyttK2kteSxhJiZZKGEseSxuLHIteTwyMHx8YS5faXNTdGFydCYmMjA8eSksci09ci15fWlmKG8pe3ZhciBTPWUrcixfPW8uX2lzU3RhcnQ7cD1cInNjcm9sbFwiK24uZDIsWShvLFMsbixfJiYyMDxTfHwhXyYmKHU/TWF0aC5tYXgoV2VbcF0sS2VbcF0pOm8ucGFyZW50Tm9kZVtwXSk8PVMrMSksdSYmKGw9d3QoYSksdSYmKG8uc3R5bGVbbi5vcC5wXT1sW24ub3AucF0tbi5vcC5tLW8uX29mZnNldCt4dCkpfXJldHVybiBkJiZoJiYocD13dChoKSxkLnNlZWsoZiksZz13dChoKSxkLl9jYVNjcm9sbERpc3Q9cFtuLnBdLWdbbi5wXSxlPWUvZC5fY2FTY3JvbGxEaXN0KmYpLGQmJmQuc2VlayhiKSxkP2U6TWF0aC5yb3VuZChlKX1mdW5jdGlvbiBiYyhlLHQscixuKXtpZihlLnBhcmVudE5vZGUhPT10KXt2YXIgaSxvLGE9ZS5zdHlsZTtpZih0PT09V2Upe2ZvcihpIGluIGUuX3N0T3JpZz1hLmNzc1RleHQsbz1hYihlKSkraXx8dGUudGVzdChpKXx8IW9baV18fFwic3RyaW5nXCIhPXR5cGVvZiBhW2ldfHxcIjBcIj09PWl8fChhW2ldPW9baV0pO2EudG9wPXIsYS5sZWZ0PW59ZWxzZSBhLmNzc1RleHQ9ZS5fc3RPcmlnO2plLmNvcmUuZ2V0Q2FjaGUoZSkudW5jYWNoZT0xLHQuYXBwZW5kQ2hpbGQoZSl9fWZ1bmN0aW9uIGNjKGwsZSl7ZnVuY3Rpb24gbmooZSx0LHIsbixpKXt2YXIgbz1uai50d2VlbixhPXQub25Db21wbGV0ZSxzPXt9O3JldHVybiByPXJ8fGYoKSxpPW4mJml8fDAsbj1ufHxlLXIsbyYmby5raWxsKCksYz1NYXRoLnJvdW5kKHIpLHRbZF09ZSwodC5tb2RpZmllcnM9cylbZF09ZnVuY3Rpb24oZSl7cmV0dXJuKGU9dmEoZigpKSkhPT1jJiZlIT09dSYmMjxNYXRoLmFicyhlLWMpJiYyPE1hdGguYWJzKGUtdSk/KG8ua2lsbCgpLG5qLnR3ZWVuPTApOmU9cituKm8ucmF0aW8raSpvLnJhdGlvKm8ucmF0aW8sdT1jLGM9dmEoZSl9LHQub25Db21wbGV0ZT1mdW5jdGlvbigpe25qLnR3ZWVuPTAsYSYmYS5jYWxsKG8pfSxvPW5qLnR3ZWVuPWplLnRvKGwsdCl9dmFyIGMsdSxmPUkobCxlKSxkPVwiX3Njcm9sbFwiK2UucDI7cmV0dXJuKGxbZF09Zikud2hlZWxIYW5kbGVyPWZ1bmN0aW9uKCl7cmV0dXJuIG5qLnR3ZWVuJiZuai50d2Vlbi5raWxsKCkmJihuai50d2Vlbj0wKX0sa2IobCxcIndoZWVsXCIsZi53aGVlbEhhbmRsZXIpLG5qfXZhciBqZSxvLFZlLE5lLEtlLFdlLGEscyxxZSxKZSxVZSxsLFplLCRlLGMsUWUsZixkLGcsZXQsdHQsaCxiLHYsbSxTLHJ0LF8sbnQsVCxpdCxvdCxhdD0xLHN0PURhdGUubm93LGs9c3QoKSxsdD0wLGN0PTAsdXQ9TWF0aC5hYnMsQz1cInJpZ2h0XCIsUD1cImJvdHRvbVwiLGZ0PVwid2lkdGhcIixkdD1cImhlaWdodFwiLHB0PVwiUmlnaHRcIixndD1cIkxlZnRcIixodD1cIlRvcFwiLGJ0PVwiQm90dG9tXCIsdnQ9XCJwYWRkaW5nXCIsbXQ9XCJtYXJnaW5cIix5dD1cIldpZHRoXCIsTz1cIkhlaWdodFwiLHh0PVwicHhcIix3dD1mdW5jdGlvbiBfZ2V0Qm91bmRzKGUsdCl7dmFyIHI9dCYmXCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIiE9PWFiKGUpW2NdJiZqZS50byhlLHt4OjAseTowLHhQZXJjZW50OjAseVBlcmNlbnQ6MCxyb3RhdGlvbjowLHJvdGF0aW9uWDowLHJvdGF0aW9uWTowLHNjYWxlOjEsc2tld1g6MCxza2V3WTowfSkucHJvZ3Jlc3MoMSksbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO3JldHVybiByJiZyLnByb2dyZXNzKDApLmtpbGwoKSxufSxTdD17c3RhcnRDb2xvcjpcImdyZWVuXCIsZW5kQ29sb3I6XCJyZWRcIixpbmRlbnQ6MCxmb250U2l6ZTpcIjE2cHhcIixmb250V2VpZ2h0Olwibm9ybWFsXCJ9LF90PXt0b2dnbGVBY3Rpb25zOlwicGxheVwiLGFudGljaXBhdGVQaW46MH0sRj17dG9wOjAsbGVmdDowLGNlbnRlcjouNSxib3R0b206MSxyaWdodDoxfSxZPWZ1bmN0aW9uIF9wb3NpdGlvbk1hcmtlcihlLHQscixuKXt2YXIgaT17ZGlzcGxheTpcImJsb2NrXCJ9LG89cltuP1wib3MyXCI6XCJwMlwiXSxhPXJbbj9cInAyXCI6XCJvczJcIl07ZS5faXNGbGlwcGVkPW4saVtyLmErXCJQZXJjZW50XCJdPW4/LTEwMDowLGlbci5hXT1uP1wiMXB4XCI6MCxpW1wiYm9yZGVyXCIrbyt5dF09MSxpW1wiYm9yZGVyXCIrYSt5dF09MCxpW3IucF09dCtcInB4XCIsamUuc2V0KGUsaSl9LFR0PVtdLGt0PXt9LFI9e30sQj1bXSxYPVtdLGo9ZnVuY3Rpb24gX2Rpc3BhdGNoKGUpe3JldHVybiBSW2VdJiZSW2VdLm1hcChmdW5jdGlvbihlKXtyZXR1cm4gZSgpfSl8fEJ9LFY9W10sRz1mdW5jdGlvbiBfcmV2ZXJ0UmVjb3JkZWQoZSl7Zm9yKHZhciB0PTA7dDxWLmxlbmd0aDt0Kz01KWUmJlZbdCs0XSE9PWV8fChWW3RdLnN0eWxlLmNzc1RleHQ9Vlt0KzFdLFZbdF0uZ2V0QkJveCYmVlt0XS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIixWW3QrMl18fFwiXCIpLFZbdCszXS51bmNhY2hlPTEpfSxOPWZ1bmN0aW9uIF9yZXZlcnRBbGwoZSx0KXt2YXIgcjtmb3IoUWU9MDtRZTxUdC5sZW5ndGg7UWUrKylyPVR0W1FlXSx0JiZyLm1lZGlhIT09dHx8KGU/ci5raWxsKDEpOnIucmV2ZXJ0KCkpO3QmJkcodCksdHx8aihcInJldmVydFwiKX0sVz0wLHE9ZnVuY3Rpb24gX3JlZnJlc2hBbGwoZSx0KXtpZighbHR8fGUpe2l0PSEwO3ZhciByPWooXCJyZWZyZXNoSW5pdFwiKTtldCYmcmUuc29ydCgpLHR8fE4oKSxUdC5zbGljZSgwKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLnJlZnJlc2goKX0pLFR0LmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuXCJtYXhcIj09PWUudmFycy5lbmQmJmUuc2V0UG9zaXRpb25zKGUuc3RhcnQsQ2EoZS5zY3JvbGxlcixlLl9kaXIpKX0pLHIuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZSYmZS5yZW5kZXImJmUucmVuZGVyKC0xKX0pLEtiKCkscy5wYXVzZSgpLFcrKyxpdD0hMSxqKFwicmVmcmVzaFwiKX1lbHNlIGtiKHJlLFwic2Nyb2xsRW5kXCIsRmIpfSxVPTAsRXQ9MSxaPWZ1bmN0aW9uIF91cGRhdGVBbGwoKXtpZighaXQpe290JiZvdC51cGRhdGUoMCkscmUuaXNVcGRhdGluZz0hMDt2YXIgZT1UdC5sZW5ndGgsdD1zdCgpLHI9NTA8PXQtayxuPWUmJlR0WzBdLnNjcm9sbCgpO2lmKEV0PW48VT8tMToxLFU9bixyJiYobHQmJiEkZSYmMjAwPHQtbHQmJihsdD0wLGooXCJzY3JvbGxFbmRcIikpLFVlPWssaz10KSxFdDwwKXtmb3IoUWU9ZTswPFFlLS07KVR0W1FlXSYmVHRbUWVdLnVwZGF0ZSgwLHIpO0V0PTF9ZWxzZSBmb3IoUWU9MDtRZTxlO1FlKyspVHRbUWVdJiZUdFtRZV0udXBkYXRlKDAscik7cmUuaXNVcGRhdGluZz0hMX1fPTB9LCQ9W1wibGVmdFwiLFwidG9wXCIsUCxDLG10K2J0LG10K3B0LG10K2h0LG10K2d0LFwiZGlzcGxheVwiLFwiZmxleFNocmlua1wiLFwiZmxvYXRcIixcInpJbmRleFwiLFwiZ3JpZENvbHVtblN0YXJ0XCIsXCJncmlkQ29sdW1uRW5kXCIsXCJncmlkUm93U3RhcnRcIixcImdyaWRSb3dFbmRcIixcImdyaWRBcmVhXCIsXCJqdXN0aWZ5U2VsZlwiLFwiYWxpZ25TZWxmXCIsXCJwbGFjZVNlbGZcIixcIm9yZGVyXCJdLFE9JC5jb25jYXQoW2Z0LGR0LFwiYm94U2l6aW5nXCIsXCJtYXhcIit5dCxcIm1heFwiK08sXCJwb3NpdGlvblwiLG10LHZ0LHZ0K2h0LHZ0K3B0LHZ0K2J0LHZ0K2d0XSksZWU9LyhbQS1aXSkvZyxDdD1mdW5jdGlvbiBfc2V0U3RhdGUoZSl7aWYoZSl7dmFyIHQscixuPWUudC5zdHlsZSxpPWUubGVuZ3RoLG89MDtmb3IoKGUudC5fZ3NhcHx8amUuY29yZS5nZXRDYWNoZShlLnQpKS51bmNhY2hlPTE7bzxpO28rPTIpcj1lW28rMV0sdD1lW29dLHI/blt0XT1yOm5bdF0mJm4ucmVtb3ZlUHJvcGVydHkodC5yZXBsYWNlKGVlLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpfX0sTXQ9e2xlZnQ6MCx0b3A6MH0sdGU9Lyh3ZWJraXR8bW96fGxlbmd0aHxjc3NUZXh0fGluc2V0KS9pLHJlPShTY3JvbGxUcmlnZ2VyLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uIGluaXQoXyxUKXtpZih0aGlzLnByb2dyZXNzPXRoaXMuc3RhcnQ9MCx0aGlzLnZhcnMmJnRoaXMua2lsbCghMCwhMCksY3Qpe3ZhciB2LG4sZixrLEUsQyxNLFAsTyxBLEQsZSx6LEYsWSxSLEwsdCxCLG0sWCxqLHksVix3LFMscixHLE4sSyxpLGQsVyxxLEosVSxaLG8sJD0oXz1jYihFYShfKXx8R2EoXyl8fF8ubm9kZVR5cGU/e3RyaWdnZXI6X306XyxfdCkpLm9uVXBkYXRlLFE9Xy50b2dnbGVDbGFzcyxhPV8uaWQsZWU9Xy5vblRvZ2dsZSx0ZT1fLm9uUmVmcmVzaCxyZT1fLnNjcnViLG5lPV8udHJpZ2dlcixpZT1fLnBpbixvZT1fLnBpblNwYWNpbmcsYWU9Xy5pbnZhbGlkYXRlT25SZWZyZXNoLHNlPV8uYW50aWNpcGF0ZVBpbixzPV8ub25TY3J1YkNvbXBsZXRlLHA9Xy5vblNuYXBDb21wbGV0ZSxsZT1fLm9uY2UsY2U9Xy5zbmFwLHVlPV8ucGluUmVwYXJlbnQsbD1fLnBpblNwYWNlcixmZT1fLmNvbnRhaW5lckFuaW1hdGlvbixkZT1fLmZhc3RTY3JvbGxFbmQscGU9Xy5wcmV2ZW50T3ZlcmxhcHMsZ2U9Xy5ob3Jpem9udGFsfHxfLmNvbnRhaW5lckFuaW1hdGlvbiYmITEhPT1fLmhvcml6b250YWw/TGU6WGUsaGU9IXJlJiYwIT09cmUsYmU9SChfLnNjcm9sbGVyfHxWZSksYz1qZS5jb3JlLmdldENhY2hlKGJlKSx2ZT15YShiZSksbWU9XCJmaXhlZFwiPT09KFwicGluVHlwZVwiaW4gXz9fLnBpblR5cGU6eChiZSxcInBpblR5cGVcIil8fHZlJiZcImZpeGVkXCIpLHllPVtfLm9uRW50ZXIsXy5vbkxlYXZlLF8ub25FbnRlckJhY2ssXy5vbkxlYXZlQmFja10seGU9aGUmJl8udG9nZ2xlQWN0aW9ucy5zcGxpdChcIiBcIiksdT1cIm1hcmtlcnNcImluIF8/Xy5tYXJrZXJzOl90Lm1hcmtlcnMsd2U9dmU/MDpwYXJzZUZsb2F0KGFiKGJlKVtcImJvcmRlclwiK2dlLnAyK3l0XSl8fDAsU2U9dGhpcyxfZT1fLm9uUmVmcmVzaEluaXQmJmZ1bmN0aW9uKCl7cmV0dXJuIF8ub25SZWZyZXNoSW5pdChTZSl9LFRlPWZ1bmN0aW9uIF9nZXRTaXplRnVuYyhlLHQscil7dmFyIG49ci5kLGk9ci5kMixvPXIuYTtyZXR1cm4obz14KGUsXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIikpP2Z1bmN0aW9uKCl7cmV0dXJuIG8oKVtuXX06ZnVuY3Rpb24oKXtyZXR1cm4odD9WZVtcImlubmVyXCIraV06ZVtcImNsaWVudFwiK2ldKXx8MH19KGJlLHZlLGdlKSxrZT1mdW5jdGlvbiBfZ2V0T2Zmc2V0c0Z1bmMoZSx0KXtyZXR1cm4hdHx8flllLmluZGV4T2YoZSk/emEoZSk6ZnVuY3Rpb24oKXtyZXR1cm4gTXR9fShiZSx2ZSksZz0wLEVlPUkoYmUsZ2UpO2lmKFNlLm1lZGlhPW50LFNlLl9kaXI9Z2Usc2UqPTQ1LFNlLnNjcm9sbGVyPWJlLFNlLnNjcm9sbD1mZT9mZS50aW1lLmJpbmQoZmUpOkVlLGs9RWUoKSxTZS52YXJzPV8sVD1UfHxfLmFuaW1hdGlvbixcInJlZnJlc2hQcmlvcml0eVwiaW4gXyYmKGV0PTEsLTk5OTk9PT1fLnJlZnJlc2hQcmlvcml0eSYmKG90PVNlKSksYy50d2VlblNjcm9sbD1jLnR3ZWVuU2Nyb2xsfHx7dG9wOmNjKGJlLFhlKSxsZWZ0OmNjKGJlLExlKX0sU2UudHdlZW5Ubz12PWMudHdlZW5TY3JvbGxbZ2UucF0sU2Uuc2NydWJEdXJhdGlvbj1mdW5jdGlvbihlKXsoaT1HYShlKSYmZSk/Sz9LLmR1cmF0aW9uKGUpOks9amUudG8oVCx7ZWFzZTpcImV4cG9cIix0b3RhbFByb2dyZXNzOlwiKz0wLjAwMVwiLGR1cmF0aW9uOmkscGF1c2VkOiEwLG9uQ29tcGxldGU6ZnVuY3Rpb24gb25Db21wbGV0ZSgpe3JldHVybiBzJiZzKFNlKX19KTooSyYmSy5wcm9ncmVzcygxKS5raWxsKCksSz0wKX0sVCYmKFQudmFycy5sYXp5PSExLFQuX2luaXR0ZWR8fCExIT09VC52YXJzLmltbWVkaWF0ZVJlbmRlciYmITEhPT1fLmltbWVkaWF0ZVJlbmRlciYmVC5yZW5kZXIoMCwhMCwhMCksU2UuYW5pbWF0aW9uPVQucGF1c2UoKSwoVC5zY3JvbGxUcmlnZ2VyPVNlKS5zY3J1YkR1cmF0aW9uKHJlKSxHPTAsYT1hfHxULnZhcnMuaWQpLFR0LnB1c2goU2UpLGNlJiYoSGEoY2UpJiYhY2UucHVzaHx8KGNlPXtzbmFwVG86Y2V9KSxcInNjcm9sbEJlaGF2aW9yXCJpbiBXZS5zdHlsZSYmamUuc2V0KHZlP1tXZSxLZV06YmUse3Njcm9sbEJlaGF2aW9yOlwiYXV0b1wifSksZj1GYShjZS5zbmFwVG8pP2NlLnNuYXBUbzpcImxhYmVsc1wiPT09Y2Uuc25hcFRvP2Z1bmN0aW9uIF9nZXRDbG9zZXN0TGFiZWwodCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiBqZS51dGlscy5zbmFwKGZiKHQpLGUpfX0oVCk6XCJsYWJlbHNEaXJlY3Rpb25hbFwiPT09Y2Uuc25hcFRvP2Z1bmN0aW9uIF9nZXRMYWJlbEF0RGlyZWN0aW9uKHIpe3JldHVybiBmdW5jdGlvbihlLHQpe3JldHVybiBoYihmYihyKSkoZSx0LmRpcmVjdGlvbil9fShUKTohMSE9PWNlLmRpcmVjdGlvbmFsP2Z1bmN0aW9uKGUsdCl7cmV0dXJuIGhiKGNlLnNuYXBUbykoZSxaZT8wOnQuZGlyZWN0aW9uKX06amUudXRpbHMuc25hcChjZS5zbmFwVG8pLGQ9Y2UuZHVyYXRpb258fHttaW46LjEsbWF4OjJ9LGQ9SGEoZCk/SmUoZC5taW4sZC5tYXgpOkplKGQsZCksVz1qZS5kZWxheWVkQ2FsbChjZS5kZWxheXx8aS8yfHwuMSxmdW5jdGlvbigpe2lmKE1hdGguYWJzKFNlLmdldFZlbG9jaXR5KCkpPDEwJiYhJGUmJmchPT1FZSgpKXt2YXIgZT1UJiYhaGU/VC50b3RhbFByb2dyZXNzKCk6U2UucHJvZ3Jlc3MsdD0oZS1OKS8oc3QoKS1VZSkqMWUzfHwwLHI9amUudXRpbHMuY2xhbXAoLVNlLnByb2dyZXNzLDEtU2UucHJvZ3Jlc3MsdXQodC8yKSp0Ly4xODUpLG49U2UucHJvZ3Jlc3MrKCExPT09Y2UuaW5lcnRpYT8wOnIpLGk9SmUoMCwxLGYobixTZSkpLG89RWUoKSxhPU1hdGgucm91bmQoQytpKnopLHM9Y2Uub25TdGFydCxsPWNlLm9uSW50ZXJydXB0LGM9Y2Uub25Db21wbGV0ZSx1PXYudHdlZW47aWYobzw9TSYmQzw9byYmYSE9PW8pe2lmKHUmJiF1Ll9pbml0dGVkJiZ1LmRhdGE8PXV0KGEtbykpcmV0dXJuOyExPT09Y2UuaW5lcnRpYSYmKHI9aS1TZS5wcm9ncmVzcyksdihhLHtkdXJhdGlvbjpkKHV0KC4xODUqTWF0aC5tYXgodXQobi1lKSx1dChpLWUpKS90Ly4wNXx8MCkpLGVhc2U6Y2UuZWFzZXx8XCJwb3dlcjNcIixkYXRhOnV0KGEtbyksb25JbnRlcnJ1cHQ6ZnVuY3Rpb24gb25JbnRlcnJ1cHQoKXtyZXR1cm4gVy5yZXN0YXJ0KCEwKSYmbCYmbChTZSl9LG9uQ29tcGxldGU6ZnVuY3Rpb24gb25Db21wbGV0ZSgpe1NlLnVwZGF0ZSgpLGc9RWUoKSxHPU49VCYmIWhlP1QudG90YWxQcm9ncmVzcygpOlNlLnByb2dyZXNzLHAmJnAoU2UpLGMmJmMoU2UpfX0sbyxyKnosYS1vLXIqeikscyYmcyhTZSx2LnR3ZWVuKX19ZWxzZSBTZS5pc0FjdGl2ZSYmVy5yZXN0YXJ0KCEwKX0pLnBhdXNlKCkpLGEmJihrdFthXT1TZSksbz0obz0obmU9U2UudHJpZ2dlcj1IKG5lfHxpZSkpJiZuZS5fZ3NhcCYmbmUuX2dzYXAuc3RSZXZlcnQpJiZvKFNlKSxpZT0hMD09PWllP25lOkgoaWUpLEVhKFEpJiYoUT17dGFyZ2V0czpuZSxjbGFzc05hbWU6UX0pLGllJiYoITE9PT1vZXx8b2U9PT1tdHx8KG9lPSEoIW9lJiZcImZsZXhcIj09PWFiKGllLnBhcmVudE5vZGUpLmRpc3BsYXkpJiZ2dCksU2UucGluPWllLCExIT09Xy5mb3JjZTNEJiZqZS5zZXQoaWUse2ZvcmNlM0Q6ITB9KSwobj1qZS5jb3JlLmdldENhY2hlKGllKSkuc3BhY2VyP0Y9bi5waW5TdGF0ZToobCYmKChsPUgobCkpJiYhbC5ub2RlVHlwZSYmKGw9bC5jdXJyZW50fHxsLm5hdGl2ZUVsZW1lbnQpLG4uc3BhY2VySXNOYXRpdmU9ISFsLGwmJihuLnNwYWNlclN0YXRlPVliKGwpKSksbi5zcGFjZXI9TD1sfHxOZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLEwuY2xhc3NMaXN0LmFkZChcInBpbi1zcGFjZXJcIiksYSYmTC5jbGFzc0xpc3QuYWRkKFwicGluLXNwYWNlci1cIithKSxuLnBpblN0YXRlPUY9WWIoaWUpKSxTZS5zcGFjZXI9TD1uLnNwYWNlcixyPWFiKGllKSx5PXJbb2UrZ2Uub3MyXSxCPWplLmdldFByb3BlcnR5KGllKSxtPWplLnF1aWNrU2V0dGVyKGllLGdlLmEseHQpLFZiKGllLEwsciksUj1ZYihpZSkpLHUpe2U9SGEodSk/Y2IodSxTdCk6U3QsQT1yYihcInNjcm9sbGVyLXN0YXJ0XCIsYSxiZSxnZSxlLDApLEQ9cmIoXCJzY3JvbGxlci1lbmRcIixhLGJlLGdlLGUsMCxBKSx0PUFbXCJvZmZzZXRcIitnZS5vcC5kMl07dmFyIGg9SCh4KGJlLFwiY29udGVudFwiKXx8YmUpO1A9dGhpcy5tYXJrZXJTdGFydD1yYihcInN0YXJ0XCIsYSxoLGdlLGUsdCwwLGZlKSxPPXRoaXMubWFya2VyRW5kPXJiKFwiZW5kXCIsYSxoLGdlLGUsdCwwLGZlKSxmZSYmKFo9amUucXVpY2tTZXR0ZXIoW1AsT10sZ2UuYSx4dCkpLG1lfHxZZS5sZW5ndGgmJiEwPT09eChiZSxcImZpeGVkTWFya2Vyc1wiKXx8KGZ1bmN0aW9uIF9tYWtlUG9zaXRpb25hYmxlKGUpe3ZhciB0PWFiKGUpLnBvc2l0aW9uO2Uuc3R5bGUucG9zaXRpb249XCJhYnNvbHV0ZVwiPT09dHx8XCJmaXhlZFwiPT09dD90OlwicmVsYXRpdmVcIn0odmU/V2U6YmUpLGplLnNldChbQSxEXSx7Zm9yY2UzRDohMH0pLHc9amUucXVpY2tTZXR0ZXIoQSxnZS5hLHh0KSxTPWplLnF1aWNrU2V0dGVyKEQsZ2UuYSx4dCkpfWlmKGZlKXt2YXIgYj1mZS52YXJzLm9uVXBkYXRlLENlPWZlLnZhcnMub25VcGRhdGVQYXJhbXM7ZmUuZXZlbnRDYWxsYmFjayhcIm9uVXBkYXRlXCIsZnVuY3Rpb24oKXtTZS51cGRhdGUoMCwwLDEpLGImJmIuYXBwbHkoQ2V8fFtdKX0pfVNlLnByZXZpb3VzPWZ1bmN0aW9uKCl7cmV0dXJuIFR0W1R0LmluZGV4T2YoU2UpLTFdfSxTZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIFR0W1R0LmluZGV4T2YoU2UpKzFdfSxTZS5yZXZlcnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ITEhPT1lfHwhU2UuZW5hYmxlZCxyPVplO3QhPT1TZS5pc1JldmVydGVkJiYodCYmKCFTZS5zY3JvbGwucmVjJiZaZSYmaXQmJihTZS5zY3JvbGwucmVjPUVlKCkpLEo9TWF0aC5tYXgoRWUoKSxTZS5zY3JvbGwucmVjfHwwKSxxPVNlLnByb2dyZXNzLFU9VCYmVC5wcm9ncmVzcygpKSxQJiZbUCxPLEEsRF0uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5zdHlsZS5kaXNwbGF5PXQ/XCJub25lXCI6XCJibG9ja1wifSksdCYmKFplPTEpLFNlLnVwZGF0ZSh0KSxaZT1yLGllJiYodD9mdW5jdGlvbiBfc3dhcFBpbk91dChlLHQscil7Q3Qocik7dmFyIG49ZS5fZ3NhcDtpZihuLnNwYWNlcklzTmF0aXZlKUN0KG4uc3BhY2VyU3RhdGUpO2Vsc2UgaWYoZS5wYXJlbnROb2RlPT09dCl7dmFyIGk9dC5wYXJlbnROb2RlO2kmJihpLmluc2VydEJlZm9yZShlLHQpLGkucmVtb3ZlQ2hpbGQodCkpfX0oaWUsTCxGKTp1ZSYmU2UuaXNBY3RpdmV8fFZiKGllLEwsYWIoaWUpLFYpKSxTZS5pc1JldmVydGVkPXQpfSxTZS5yZWZyZXNoPWZ1bmN0aW9uKGUsdCl7aWYoIVplJiZTZS5lbmFibGVkfHx0KWlmKGllJiZlJiZsdClrYihTY3JvbGxUcmlnZ2VyLFwic2Nyb2xsRW5kXCIsRmIpO2Vsc2V7IWl0JiZfZSYmX2UoU2UpLFplPTEsSyYmSy5wYXVzZSgpLGFlJiZUJiZULnRpbWUoLS4wMSwhMCkuaW52YWxpZGF0ZSgpLFNlLmlzUmV2ZXJ0ZWR8fFNlLnJldmVydCgpO2Zvcih2YXIgcixuLGksbyxhLHMsbCxjLHUsZixkPVRlKCkscD1rZSgpLGc9ZmU/ZmUuZHVyYXRpb24oKTpDYShiZSxnZSksaD0wLGI9MCx2PV8uZW5kLG09Xy5lbmRUcmlnZ2VyfHxuZSx5PV8uc3RhcnR8fCgwIT09Xy5zdGFydCYmbmU/aWU/XCIwIDBcIjpcIjAgMTAwJVwiOjApLHg9U2UucGlubmVkQ29udGFpbmVyPV8ucGlubmVkQ29udGFpbmVyJiZIKF8ucGlubmVkQ29udGFpbmVyKSx3PW5lJiZNYXRoLm1heCgwLFR0LmluZGV4T2YoU2UpKXx8MCxTPXc7Uy0tOykocz1UdFtTXSkuZW5kfHxzLnJlZnJlc2goMCwxKXx8KFplPTEpLCEobD1zLnBpbil8fGwhPT1uZSYmbCE9PWllfHxzLmlzUmV2ZXJ0ZWR8fCgoZj1mfHxbXSkudW5zaGlmdChzKSxzLnJldmVydCgpKSxzIT09VHRbU10mJih3LS0sUy0tKTtmb3IoRmEoeSkmJih5PXkoU2UpKSxDPV9iKHksbmUsZCxnZSxFZSgpLFAsQSxTZSxwLHdlLG1lLGcsZmUpfHwoaWU/LS4wMDE6MCksRmEodikmJih2PXYoU2UpKSxFYSh2KSYmIXYuaW5kZXhPZihcIis9XCIpJiYofnYuaW5kZXhPZihcIiBcIik/dj0oRWEoeSk/eS5zcGxpdChcIiBcIilbMF06XCJcIikrdjooaD1xYih2LnN1YnN0cigyKSxkKSx2PUVhKHkpP3k6QytoLG09bmUpKSxNPU1hdGgubWF4KEMsX2Iodnx8KG0/XCIxMDAlIDBcIjpnKSxtLGQsZ2UsRWUoKStoLE8sRCxTZSxwLHdlLG1lLGcsZmUpKXx8LS4wMDEsej1NLUN8fChDLT0uMDEpJiYuMDAxLGg9MCxTPXc7Uy0tOykobD0ocz1UdFtTXSkucGluKSYmcy5zdGFydC1zLl9waW5QdXNoPEMmJiFmZSYmMDxzLmVuZCYmKHI9cy5lbmQtcy5zdGFydCxsIT09bmUmJmwhPT14fHxHYSh5KXx8KGgrPXIqKDEtcy5wcm9ncmVzcykpLGw9PT1pZSYmKGIrPXIpKTtpZihDKz1oLE0rPWgsU2UuX3BpblB1c2g9YixQJiZoJiYoKHI9e30pW2dlLmFdPVwiKz1cIitoLHgmJihyW2dlLnBdPVwiLT1cIitFZSgpKSxqZS5zZXQoW1AsT10scikpLGllKXI9YWIoaWUpLG89Z2U9PT1YZSxpPUVlKCksWD1wYXJzZUZsb2F0KEIoZ2UuYSkpK2IsIWcmJjE8TSYmKCh2ZT9XZTpiZSkuc3R5bGVbXCJvdmVyZmxvdy1cIitnZS5hXT1cInNjcm9sbFwiKSxWYihpZSxMLHIpLFI9WWIoaWUpLG49d3QoaWUsITApLGM9bWUmJkkoYmUsbz9MZTpYZSkoKSxvZSYmKChWPVtvZStnZS5vczIseitiK3h0XSkudD1MLChTPW9lPT09dnQ/ZWIoaWUsZ2UpK3orYjowKSYmVi5wdXNoKGdlLmQsUyt4dCksQ3QoViksbWUmJkVlKEopKSxtZSYmKChhPXt0b3A6bi50b3ArKG8/aS1DOmMpK3h0LGxlZnQ6bi5sZWZ0KyhvP2M6aS1DKSt4dCxib3hTaXppbmc6XCJib3JkZXItYm94XCIscG9zaXRpb246XCJmaXhlZFwifSlbZnRdPWEubWF4V2lkdGg9TWF0aC5jZWlsKG4ud2lkdGgpK3h0LGFbZHRdPWEubWF4SGVpZ2h0PU1hdGguY2VpbChuLmhlaWdodCkreHQsYVttdF09YVttdCtodF09YVttdCtwdF09YVttdCtidF09YVttdCtndF09XCIwXCIsYVt2dF09clt2dF0sYVt2dCtodF09clt2dCtodF0sYVt2dCtwdF09clt2dCtwdF0sYVt2dCtidF09clt2dCtidF0sYVt2dCtndF09clt2dCtndF0sWT1mdW5jdGlvbiBfY29weVN0YXRlKGUsdCxyKXtmb3IodmFyIG4saT1bXSxvPWUubGVuZ3RoLGE9cj84OjA7YTxvO2ErPTIpbj1lW2FdLGkucHVzaChuLG4gaW4gdD90W25dOmVbYSsxXSk7cmV0dXJuIGkudD1lLnQsaX0oRixhLHVlKSksVD8odT1ULl9pbml0dGVkLHR0KDEpLFQucmVuZGVyKFQuZHVyYXRpb24oKSwhMCwhMCksaj1CKGdlLmEpLVgreitiLHohPT1qJiZZLnNwbGljZShZLmxlbmd0aC0yLDIpLFQucmVuZGVyKDAsITAsITApLHV8fFQuaW52YWxpZGF0ZSgpLHR0KDApKTpqPXo7ZWxzZSBpZihuZSYmRWUoKSYmIWZlKWZvcihuPW5lLnBhcmVudE5vZGU7biYmbiE9PVdlOyluLl9waW5PZmZzZXQmJihDLT1uLl9waW5PZmZzZXQsTS09bi5fcGluT2Zmc2V0KSxuPW4ucGFyZW50Tm9kZTtmJiZmLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUucmV2ZXJ0KCExKX0pLFNlLnN0YXJ0PUMsU2UuZW5kPU0saz1FPUVlKCksZmV8fChrPEomJkVlKEopLFNlLnNjcm9sbC5yZWM9MCksU2UucmV2ZXJ0KCExKSxXJiZTZS5pc0FjdGl2ZSYmRWUoQyt6KnEpLFplPTAsVCYmaGUmJihULl9pbml0dGVkfHxVKSYmVC5wcm9ncmVzcygpIT09VSYmVC5wcm9ncmVzcyhVLCEwKS5yZW5kZXIoVC50aW1lKCksITAsITApLHE9PT1TZS5wcm9ncmVzcyYmIWZlfHwoVCYmIWhlJiZULnRvdGFsUHJvZ3Jlc3MocSwhMCksU2UucHJvZ3Jlc3M9cSxTZS51cGRhdGUoMCwwLDEpKSxpZSYmb2UmJihMLl9waW5PZmZzZXQ9TWF0aC5yb3VuZChTZS5wcm9ncmVzcypqKSksdGUmJnRlKFNlKX19LFNlLmdldFZlbG9jaXR5PWZ1bmN0aW9uKCl7cmV0dXJuKEVlKCktRSkvKHN0KCktVWUpKjFlM3x8MH0sU2UuZW5kQW5pbWF0aW9uPWZ1bmN0aW9uKCl7S2EoU2UuY2FsbGJhY2tBbmltYXRpb24pLFQmJihLP0sucHJvZ3Jlc3MoMSk6VC5wYXVzZWQoKT9oZXx8S2EoVCxTZS5kaXJlY3Rpb248MCwxKTpLYShULFQucmV2ZXJzZWQoKSkpfSxTZS5sYWJlbFRvU2Nyb2xsPWZ1bmN0aW9uKGUpe3JldHVybiBUJiZULmxhYmVscyYmKEN8fFNlLnJlZnJlc2goKXx8QykrVC5sYWJlbHNbZV0vVC5kdXJhdGlvbigpKnp8fDB9LFNlLmdldFRyYWlsaW5nPWZ1bmN0aW9uKHQpe3ZhciBlPVR0LmluZGV4T2YoU2UpLHI9MDxTZS5kaXJlY3Rpb24/VHQuc2xpY2UoMCxlKS5yZXZlcnNlKCk6VHQuc2xpY2UoZSsxKTtyZXR1cm4oRWEodCk/ci5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUudmFycy5wcmV2ZW50T3ZlcmxhcHM9PT10fSk6cikuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiAwPFNlLmRpcmVjdGlvbj9lLmVuZDw9QzplLnN0YXJ0Pj1NfSl9LFNlLnVwZGF0ZT1mdW5jdGlvbihlLHQscil7aWYoIWZlfHxyfHxlKXt2YXIgbixpLG8sYSxzLGwsYyx1PVNlLnNjcm9sbCgpLGY9ZT8wOih1LUMpL3osZD1mPDA/MDoxPGY/MTpmfHwwLHA9U2UucHJvZ3Jlc3M7aWYodCYmKEU9ayxrPWZlP0VlKCk6dSxjZSYmKE49RyxHPVQmJiFoZT9ULnRvdGFsUHJvZ3Jlc3MoKTpkKSksc2UmJiFkJiZpZSYmIVplJiYhYXQmJmx0JiZDPHUrKHUtRSkvKHN0KCktVWUpKnNlJiYoZD0xZS00KSxkIT09cCYmU2UuZW5hYmxlZCl7aWYoYT0ocz0obj1TZS5pc0FjdGl2ZT0hIWQmJmQ8MSkhPSghIXAmJnA8MSkpfHwhIWQhPSEhcCxTZS5kaXJlY3Rpb249cDxkPzE6LTEsU2UucHJvZ3Jlc3M9ZCxhJiYhWmUmJihpPWQmJiFwPzA6MT09PWQ/MToxPT09cD8yOjMsaGUmJihvPSFzJiZcIm5vbmVcIiE9PXhlW2krMV0mJnhlW2krMV18fHhlW2ldLGM9VCYmKFwiY29tcGxldGVcIj09PW98fFwicmVzZXRcIj09PW98fG8gaW4gVCkpKSxwZSYmKHN8fGMpJiYoY3x8cmV8fCFUKSYmKEZhKHBlKT9wZShTZSk6U2UuZ2V0VHJhaWxpbmcocGUpLmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUuZW5kQW5pbWF0aW9uKCl9KSksaGV8fCghS3x8WmV8fGF0P1QmJlQudG90YWxQcm9ncmVzcyhkLCEhWmUpOigoZmV8fG90JiZvdCE9PVNlKSYmSy5yZW5kZXIoSy5fZHAuX3RpbWUtSy5fc3RhcnQpLEsucmVzZXRUbz9LLnJlc2V0VG8oXCJ0b3RhbFByb2dyZXNzXCIsZCxULl90VGltZS9ULl90RHVyKTooSy52YXJzLnRvdGFsUHJvZ3Jlc3M9ZCxLLmludmFsaWRhdGUoKS5yZXN0YXJ0KCkpKSksaWUpaWYoZSYmb2UmJihMLnN0eWxlW29lK2dlLm9zMl09eSksbWUpe2lmKGEpe2lmKGw9IWUmJnA8ZCYmdTxNKzEmJnUrMT49Q2EoYmUsZ2UpLHVlKWlmKGV8fCFuJiYhbCliYyhpZSxMKTtlbHNle3ZhciBnPXd0KGllLCEwKSxoPXUtQztiYyhpZSxXZSxnLnRvcCsoZ2U9PT1YZT9oOjApK3h0LGcubGVmdCsoZ2U9PT1YZT8wOmgpK3h0KX1DdChufHxsP1k6UiksaiE9PXomJmQ8MSYmbnx8bShYKygxIT09ZHx8bD8wOmopKX19ZWxzZSBtKHZhKFgraipkKSk7IWNlfHx2LnR3ZWVufHxaZXx8YXR8fFcucmVzdGFydCghMCksUSYmKHN8fGxlJiZkJiYoZDwxfHwhcnQpKSYmcWUoUS50YXJnZXRzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmNsYXNzTGlzdFtufHxsZT9cImFkZFwiOlwicmVtb3ZlXCJdKFEuY2xhc3NOYW1lKX0pLCEkfHxoZXx8ZXx8JChTZSksYSYmIVplPyhoZSYmKGMmJihcImNvbXBsZXRlXCI9PT1vP1QucGF1c2UoKS50b3RhbFByb2dyZXNzKDEpOlwicmVzZXRcIj09PW8/VC5yZXN0YXJ0KCEwKS5wYXVzZSgpOlwicmVzdGFydFwiPT09bz9ULnJlc3RhcnQoITApOlRbb10oKSksJCYmJChTZSkpLCFzJiZydHx8KGVlJiZzJiZMYShTZSxlZSkseWVbaV0mJkxhKFNlLHllW2ldKSxsZSYmKDE9PT1kP1NlLmtpbGwoITEsMSk6eWVbaV09MCksc3x8eWVbaT0xPT09ZD8xOjNdJiZMYShTZSx5ZVtpXSkpLGRlJiYhbiYmTWF0aC5hYnMoU2UuZ2V0VmVsb2NpdHkoKSk+KEdhKGRlKT9kZToyNTAwKSYmKEthKFNlLmNhbGxiYWNrQW5pbWF0aW9uKSxLP0sucHJvZ3Jlc3MoMSk6S2EoVCwhZCwxKSkpOmhlJiYkJiYhWmUmJiQoU2UpfWlmKFMpe3ZhciBiPWZlP3UvZmUuZHVyYXRpb24oKSooZmUuX2NhU2Nyb2xsRGlzdHx8MCk6dTt3KGIrKEEuX2lzRmxpcHBlZD8xOjApKSxTKGIpfVomJlooLXUvZmUuZHVyYXRpb24oKSooZmUuX2NhU2Nyb2xsRGlzdHx8MCkpfX0sU2UuZW5hYmxlPWZ1bmN0aW9uKGUsdCl7U2UuZW5hYmxlZHx8KFNlLmVuYWJsZWQ9ITAsa2IoYmUsXCJyZXNpemVcIix5Yiksa2IodmU/TmU6YmUsXCJzY3JvbGxcIix4YiksX2UmJmtiKFNjcm9sbFRyaWdnZXIsXCJyZWZyZXNoSW5pdFwiLF9lKSwhMSE9PWUmJihTZS5wcm9ncmVzcz1xPTAsaz1FPWc9RWUoKSksITEhPT10JiZTZS5yZWZyZXNoKCkpfSxTZS5nZXRUd2Vlbj1mdW5jdGlvbihlKXtyZXR1cm4gZSYmdj92LnR3ZWVuOkt9LFNlLnNldFBvc2l0aW9ucz1mdW5jdGlvbihlLHQpe2llJiYoWCs9ZS1DLGorPXQtZS16KSxTZS5zdGFydD1DPWUsU2UuZW5kPU09dCx6PXQtZSxTZS51cGRhdGUoKX0sU2UuZGlzYWJsZT1mdW5jdGlvbihlLHQpe2lmKFNlLmVuYWJsZWQmJighMSE9PWUmJlNlLnJldmVydCgpLFNlLmVuYWJsZWQ9U2UuaXNBY3RpdmU9ITEsdHx8SyYmSy5wYXVzZSgpLEo9MCxuJiYobi51bmNhY2hlPTEpLF9lJiZsYihTY3JvbGxUcmlnZ2VyLFwicmVmcmVzaEluaXRcIixfZSksVyYmKFcucGF1c2UoKSx2LnR3ZWVuJiZ2LnR3ZWVuLmtpbGwoKSYmKHYudHdlZW49MCkpLCF2ZSkpe2Zvcih2YXIgcj1UdC5sZW5ndGg7ci0tOylpZihUdFtyXS5zY3JvbGxlcj09PWJlJiZUdFtyXSE9PVNlKXJldHVybjtsYihiZSxcInJlc2l6ZVwiLHliKSxsYihiZSxcInNjcm9sbFwiLHhiKX19LFNlLmtpbGw9ZnVuY3Rpb24oZSx0KXtTZS5kaXNhYmxlKGUsdCksSyYmIXQmJksua2lsbCgpLGEmJmRlbGV0ZSBrdFthXTt2YXIgcj1UdC5pbmRleE9mKFNlKTswPD1yJiZUdC5zcGxpY2UociwxKSxyPT09UWUmJjA8RXQmJlFlLS0scj0wLFR0LmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUuc2Nyb2xsZXI9PT1TZS5zY3JvbGxlciYmKHI9MSl9KSxyfHwoU2Uuc2Nyb2xsLnJlYz0wKSxUJiYoVC5zY3JvbGxUcmlnZ2VyPW51bGwsZSYmVC5yZW5kZXIoLTEpLHR8fFQua2lsbCgpKSxQJiZbUCxPLEEsRF0uZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gZS5wYXJlbnROb2RlJiZlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZSl9KSxpZSYmKG4mJihuLnVuY2FjaGU9MSkscj0wLFR0LmZvckVhY2goZnVuY3Rpb24oZSl7cmV0dXJuIGUucGluPT09aWUmJnIrK30pLHJ8fChuLnNwYWNlcj0wKSksXy5vbktpbGwmJl8ub25LaWxsKFNlKX0sU2UuZW5hYmxlKCExLCExKSxvJiZvKFNlKSxUJiZULmFkZCYmIXo/amUuZGVsYXllZENhbGwoLjAxLGZ1bmN0aW9uKCl7cmV0dXJuIEN8fE18fFNlLnJlZnJlc2goKX0pJiYoej0uMDEpJiYoQz1NPTApOlNlLnJlZnJlc2goKX1lbHNlIHRoaXMudXBkYXRlPXRoaXMucmVmcmVzaD10aGlzLmtpbGw9dWF9LFNjcm9sbFRyaWdnZXIucmVnaXN0ZXI9ZnVuY3Rpb24gcmVnaXN0ZXIoZSl7cmV0dXJuIG98fChqZT1lfHx4YSgpLHdhKCkmJndpbmRvdy5kb2N1bWVudCYmU2Nyb2xsVHJpZ2dlci5lbmFibGUoKSxvPWN0KSxvfSxTY3JvbGxUcmlnZ2VyLmRlZmF1bHRzPWZ1bmN0aW9uIGRlZmF1bHRzKGUpe2lmKGUpZm9yKHZhciB0IGluIGUpX3RbdF09ZVt0XTtyZXR1cm4gX3R9LFNjcm9sbFRyaWdnZXIuZGlzYWJsZT1mdW5jdGlvbiBkaXNhYmxlKHQscil7Y3Q9MCxUdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlW3I/XCJraWxsXCI6XCJkaXNhYmxlXCJdKHQpfSksbGIoVmUsXCJ3aGVlbFwiLHhiKSxsYihOZSxcInNjcm9sbFwiLHhiKSxjbGVhckludGVydmFsKGwpLGxiKE5lLFwidG91Y2hjYW5jZWxcIix1YSksbGIoV2UsXCJ0b3VjaHN0YXJ0XCIsdWEpLGpiKGxiLE5lLFwicG9pbnRlcmRvd24sdG91Y2hzdGFydCxtb3VzZWRvd25cIixzYSksamIobGIsTmUsXCJwb2ludGVydXAsdG91Y2hlbmQsbW91c2V1cFwiLHRhKSxzLmtpbGwoKSxEYShsYik7Zm9yKHZhciBlPTA7ZTx6ZS5sZW5ndGg7ZSs9MyltYihsYix6ZVtlXSx6ZVtlKzFdKSxtYihsYix6ZVtlXSx6ZVtlKzJdKX0sU2Nyb2xsVHJpZ2dlci5lbmFibGU9ZnVuY3Rpb24gZW5hYmxlKCl7aWYoVmU9d2luZG93LE5lPWRvY3VtZW50LEtlPU5lLmRvY3VtZW50RWxlbWVudCxXZT1OZS5ib2R5LGplJiYocWU9amUudXRpbHMudG9BcnJheSxKZT1qZS51dGlscy5jbGFtcCx0dD1qZS5jb3JlLnN1cHByZXNzT3ZlcndyaXRlc3x8dWEsamUuY29yZS5nbG9iYWxzKFwiU2Nyb2xsVHJpZ2dlclwiLFNjcm9sbFRyaWdnZXIpLFdlKSl7Y3Q9MSxTY3JvbGxUcmlnZ2VyLmlzVG91Y2g9VmUubWF0Y2hNZWRpYSYmVmUubWF0Y2hNZWRpYShcIihob3Zlcjogbm9uZSksIChwb2ludGVyOiBjb2Fyc2UpXCIpLm1hdGNoZXM/MTpcIm9udG91Y2hzdGFydFwiaW4gVmV8fDA8bmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzfHwwPG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzPzI6MCxhPVtWZSxOZSxLZSxXZV0sbT1WZS5pbm5lckhlaWdodCxTPVZlLmlubmVyV2lkdGgsdy5yZWdpc3RlcihqZSksa2IoTmUsXCJzY3JvbGxcIix4Yik7dmFyIGUsdCxyPVdlLnN0eWxlLG49ci5ib3JkZXJUb3BTdHlsZTtmb3Ioci5ib3JkZXJUb3BTdHlsZT1cInNvbGlkXCIsZT13dChXZSksWGUubT1NYXRoLnJvdW5kKGUudG9wK1hlLnNjKCkpfHwwLExlLm09TWF0aC5yb3VuZChlLmxlZnQrTGUuc2MoKSl8fDAsbj9yLmJvcmRlclRvcFN0eWxlPW46ci5yZW1vdmVQcm9wZXJ0eShcImJvcmRlci10b3Atc3R5bGVcIiksbD1zZXRJbnRlcnZhbCh3YiwyNTApLGplLmRlbGF5ZWRDYWxsKC41LGZ1bmN0aW9uKCl7cmV0dXJuIGF0PTB9KSxrYihOZSxcInRvdWNoY2FuY2VsXCIsdWEpLGtiKFdlLFwidG91Y2hzdGFydFwiLHVhKSxqYihrYixOZSxcInBvaW50ZXJkb3duLHRvdWNoc3RhcnQsbW91c2Vkb3duXCIsc2EpLGpiKGtiLE5lLFwicG9pbnRlcnVwLHRvdWNoZW5kLG1vdXNldXBcIix0YSksYz1qZS51dGlscy5jaGVja1ByZWZpeChcInRyYW5zZm9ybVwiKSxRLnB1c2goYyksbz1zdCgpLHM9amUuZGVsYXllZENhbGwoLjIscSkucGF1c2UoKSxnPVtOZSxcInZpc2liaWxpdHljaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBlPVZlLmlubmVyV2lkdGgsdD1WZS5pbm5lckhlaWdodDtOZS5oaWRkZW4/KGY9ZSxkPXQpOmY9PT1lJiZkPT09dHx8eWIoKX0sTmUsXCJET01Db250ZW50TG9hZGVkXCIscSxWZSxcImxvYWRcIixxLFZlLFwicmVzaXplXCIseWJdLERhKGtiKSxUdC5mb3JFYWNoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmVuYWJsZSgwLDEpfSksdD0wO3Q8emUubGVuZ3RoO3QrPTMpbWIobGIsemVbdF0semVbdCsxXSksbWIobGIsemVbdF0semVbdCsyXSl9fSxTY3JvbGxUcmlnZ2VyLmNvbmZpZz1mdW5jdGlvbiBjb25maWcoZSl7XCJsaW1pdENhbGxiYWNrc1wiaW4gZSYmKHJ0PSEhZS5saW1pdENhbGxiYWNrcyk7dmFyIHQ9ZS5zeW5jSW50ZXJ2YWw7dCYmY2xlYXJJbnRlcnZhbChsKXx8KGw9dCkmJnNldEludGVydmFsKHdiLHQpLFwiaWdub3JlTW9iaWxlUmVzaXplXCJpbiBlJiYodj0xPT09U2Nyb2xsVHJpZ2dlci5pc1RvdWNoJiZlLmlnbm9yZU1vYmlsZVJlc2l6ZSksXCJhdXRvUmVmcmVzaEV2ZW50c1wiaW4gZSYmKERhKGxiKXx8RGEoa2IsZS5hdXRvUmVmcmVzaEV2ZW50c3x8XCJub25lXCIpLGg9LTE9PT0oZS5hdXRvUmVmcmVzaEV2ZW50cytcIlwiKS5pbmRleE9mKFwicmVzaXplXCIpKX0sU2Nyb2xsVHJpZ2dlci5zY3JvbGxlclByb3h5PWZ1bmN0aW9uIHNjcm9sbGVyUHJveHkoZSx0KXt2YXIgcj1IKGUpLG49emUuaW5kZXhPZihyKSxpPXlhKHIpO35uJiZ6ZS5zcGxpY2UobixpPzY6MiksdCYmKGk/WWUudW5zaGlmdChWZSx0LFdlLHQsS2UsdCk6WWUudW5zaGlmdChyLHQpKX0sU2Nyb2xsVHJpZ2dlci5tYXRjaE1lZGlhPWZ1bmN0aW9uIG1hdGNoTWVkaWEoZSl7dmFyIHQscixuLGksbztmb3IociBpbiBlKW49WC5pbmRleE9mKHIpLGk9ZVtyXSxcImFsbFwiPT09KG50PXIpP2koKToodD1WZS5tYXRjaE1lZGlhKHIpKSYmKHQubWF0Y2hlcyYmKG89aSgpKSx+bj8oWFtuKzFdPUphKFhbbisxXSxpKSxYW24rMl09SmEoWFtuKzJdLG8pKToobj1YLmxlbmd0aCxYLnB1c2gocixpLG8pLHQuYWRkTGlzdGVuZXI/dC5hZGRMaXN0ZW5lcihFYik6dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsRWIpKSxYW24rM109dC5tYXRjaGVzKSxudD0wO3JldHVybiBYfSxTY3JvbGxUcmlnZ2VyLmNsZWFyTWF0Y2hNZWRpYT1mdW5jdGlvbiBjbGVhck1hdGNoTWVkaWEoZSl7ZXx8KFgubGVuZ3RoPTApLDA8PShlPVguaW5kZXhPZihlKSkmJlguc3BsaWNlKGUsNCl9LFNjcm9sbFRyaWdnZXIuaXNJblZpZXdwb3J0PWZ1bmN0aW9uIGlzSW5WaWV3cG9ydChlLHQscil7dmFyIG49KEVhKGUpP0goZSk6ZSkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1uW3I/ZnQ6ZHRdKnR8fDA7cmV0dXJuIHI/MDxuLnJpZ2h0LWkmJm4ubGVmdCtpPFZlLmlubmVyV2lkdGg6MDxuLmJvdHRvbS1pJiZuLnRvcCtpPFZlLmlubmVySGVpZ2h0fSxTY3JvbGxUcmlnZ2VyLnBvc2l0aW9uSW5WaWV3cG9ydD1mdW5jdGlvbiBwb3NpdGlvbkluVmlld3BvcnQoZSx0LHIpe0VhKGUpJiYoZT1IKGUpKTt2YXIgbj1lLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLGk9bltyP2Z0OmR0XSxvPW51bGw9PXQ/aS8yOnQgaW4gRj9GW3RdKmk6fnQuaW5kZXhPZihcIiVcIik/cGFyc2VGbG9hdCh0KSppLzEwMDpwYXJzZUZsb2F0KHQpfHwwO3JldHVybiByPyhuLmxlZnQrbykvVmUuaW5uZXJXaWR0aDoobi50b3ArbykvVmUuaW5uZXJIZWlnaHR9LFNjcm9sbFRyaWdnZXIpO2Z1bmN0aW9uIFNjcm9sbFRyaWdnZXIoZSx0KXtvfHxTY3JvbGxUcmlnZ2VyLnJlZ2lzdGVyKGplKXx8Y29uc29sZS53YXJuKFwiUGxlYXNlIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcilcIiksdGhpcy5pbml0KGUsdCl9cmUudmVyc2lvbj1cIjMuMTAuMlwiLHJlLnNhdmVTdHlsZXM9ZnVuY3Rpb24oZSl7cmV0dXJuIGU/cWUoZSkuZm9yRWFjaChmdW5jdGlvbihlKXtpZihlJiZlLnN0eWxlKXt2YXIgdD1WLmluZGV4T2YoZSk7MDw9dCYmVi5zcGxpY2UodCw1KSxWLnB1c2goZSxlLnN0eWxlLmNzc1RleHQsZS5nZXRCQm94JiZlLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSxqZS5jb3JlLmdldENhY2hlKGUpLG50KX19KTpWfSxyZS5yZXZlcnQ9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gTighZSx0KX0scmUuY3JlYXRlPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIG5ldyByZShlLHQpfSxyZS5yZWZyZXNoPWZ1bmN0aW9uKGUpe3JldHVybiBlP3liKCk6KG98fHJlLnJlZ2lzdGVyKCkpJiZxKCEwKX0scmUudXBkYXRlPVoscmUuY2xlYXJTY3JvbGxNZW1vcnk9S2IscmUubWF4U2Nyb2xsPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIENhKGUsdD9MZTpYZSl9LHJlLmdldFNjcm9sbEZ1bmM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gSShIKGUpLHQ/TGU6WGUpfSxyZS5nZXRCeUlkPWZ1bmN0aW9uKGUpe3JldHVybiBrdFtlXX0scmUuZ2V0QWxsPWZ1bmN0aW9uKCl7cmV0dXJuIFR0LmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cIlNjcm9sbFNtb290aGVyXCIhPT1lLnZhcnMuaWR9KX0scmUuaXNTY3JvbGxpbmc9ZnVuY3Rpb24oKXtyZXR1cm4hIWx0fSxyZS5zbmFwRGlyZWN0aW9uYWw9aGIscmUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihlLHQpe3ZhciByPVJbZV18fChSW2VdPVtdKTt+ci5pbmRleE9mKHQpfHxyLnB1c2godCl9LHJlLnJlbW92ZUV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oZSx0KXt2YXIgcj1SW2VdLG49ciYmci5pbmRleE9mKHQpOzA8PW4mJnIuc3BsaWNlKG4sMSl9LHJlLmJhdGNoPWZ1bmN0aW9uKGUsdCl7ZnVuY3Rpb24gT24oZSx0KXt2YXIgcj1bXSxuPVtdLGk9amUuZGVsYXllZENhbGwobyxmdW5jdGlvbigpe3QocixuKSxyPVtdLG49W119KS5wYXVzZSgpO3JldHVybiBmdW5jdGlvbihlKXtyLmxlbmd0aHx8aS5yZXN0YXJ0KCEwKSxyLnB1c2goZS50cmlnZ2VyKSxuLnB1c2goZSksYTw9ci5sZW5ndGgmJmkucHJvZ3Jlc3MoMSl9fXZhciByLG49W10saT17fSxvPXQuaW50ZXJ2YWx8fC4wMTYsYT10LmJhdGNoTWF4fHwxZTk7Zm9yKHIgaW4gdClpW3JdPVwib25cIj09PXIuc3Vic3RyKDAsMikmJkZhKHRbcl0pJiZcIm9uUmVmcmVzaEluaXRcIiE9PXI/T24oMCx0W3JdKTp0W3JdO3JldHVybiBGYShhKSYmKGE9YSgpLGtiKHJlLFwicmVmcmVzaFwiLGZ1bmN0aW9uKCl7cmV0dXJuIGE9dC5iYXRjaE1heCgpfSkpLHFlKGUpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9e307Zm9yKHIgaW4gaSl0W3JdPWlbcl07dC50cmlnZ2VyPWUsbi5wdXNoKHJlLmNyZWF0ZSh0KSl9KSxufTtmdW5jdGlvbiBlYyhlLHQscixuKXtyZXR1cm4gbjx0P2Uobik6dDwwJiZlKDApLG48cj8obi10KS8oci10KTpyPDA/dC8odC1yKToxfWZ1bmN0aW9uIGZjKGUpeyEwPT09ZT8oV2Uuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3VjaC1hY3Rpb25cIiksS2Uuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJ0b3VjaC1hY3Rpb25cIikpOldlLnN0eWxlLnRvdWNoQWN0aW9uPUtlLnN0eWxlLnRvdWNoQWN0aW9uPWU/XCJwYW4tXCIrZTpcIm5vbmVcIn1mdW5jdGlvbiBnYyhlKXtmdW5jdGlvbiBwbygpe3JldHVybiBkPXN0KCl9ZnVuY3Rpb24gcW8oKXtyZXR1cm4gbj0hMX1mdW5jdGlvbiB0bygpe3I9Q2EoS2UsWGUpLG09SmUoMCxyKSxmJiYodj1KZSgwLENhKEtlLExlKSkpLG89V31mdW5jdGlvbiBCbygpe3RvKCkscy5pc0FjdGl2ZSgpJiZzLnZhcnMuc2Nyb2xsWT5yJiZzLnJlc2V0VG8oXCJzY3JvbGxZXCIsQ2EoS2UsWGUpKX1IYShlKXx8KGU9e30pLGUucHJldmVudERlZmF1bHQ9ZS5pc05vcm1hbGl6ZXI9ITAsZS50eXBlfHwoZS50eXBlPVwid2hlZWwsdG91Y2hcIiksZS5kZWJvdW5jZT0hIWUuZGVib3VuY2UsZS5pZD1lLmlkfHxcIm5vcm1hbGl6ZXJcIjt2YXIgdCxyLG4sbyxzLGEsbCxjLHUsZj1lLm5vcm1hbGl6ZVNjcm9sbFgsaT1lLm1vbWVudHVtLGQ9MCxwPUkoS2UsWGUpLGc9SShLZSxMZSksaD0xLGI9RmEoaSk/ZnVuY3Rpb24oKXtyZXR1cm4gaSh0KX06ZnVuY3Rpb24oKXtyZXR1cm4gaXx8Mi44fSx2PXVhLG09dWEseT1yZS5pc1RvdWNoJiYvKGlQYWR8aVBob25lfGlQb2R8TWFjKS9nLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7cmV0dXJuIGUuaWdub3JlQ2hlY2s9ZnVuY3Rpb24oZSl7cmV0dXJuIHkmJlwidG91Y2htb3ZlXCI9PT1lLnR5cGUmJmZ1bmN0aW9uIGlnbm9yZURyYWcoKXtpZihuKXJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocW8pLCEwO249ITB9KCl8fDE8aHx8dC5pc0dlc3R1cmluZ3x8ZS50b3VjaGVzJiYxPGUudG91Y2hlcy5sZW5ndGh9LGUub25QcmVzcz1mdW5jdGlvbigpe3ZhciBlPWg7aD1WZS52aXN1YWxWaWV3cG9ydCYmVmUudmlzdWFsVmlld3BvcnQuc2NhbGV8fDEscy5wYXVzZSgpLGUhPT1oJiZmYygxPGh8fCFmJiZcInhcIiksbj0hMSxhPWcoKSxsPXAoKSx0bygpLG89V30sZS5vblJlbGVhc2U9ZS5vbkdlc3R1cmVTdGFydD1mdW5jdGlvbihlLHQpe3ZhciByPWUuZXZlbnQsbj1yLmNoYW5nZWRUb3VjaGVzP3IuY2hhbmdlZFRvdWNoZXNbMF06cjtpZighdHx8TWF0aC5hYnMoZS54LWUuc3RhcnRYKTw9MyYmTWF0aC5hYnMoZS55LWUuc3RhcnRZKTw9MylqZS5kZWxheWVkQ2FsbCguMDUsZnVuY3Rpb24oKXtpZigzMDA8c3QoKS1kJiYhci5kZWZhdWx0UHJldmVudGVkKWlmKHIudGFyZ2V0LmNsaWNrKXIudGFyZ2V0LmNsaWNrKCk7ZWxzZSBpZihjLmNyZWF0ZUV2ZW50KXt2YXIgZT1jLmNyZWF0ZUV2ZW50KFwiTW91c2VFdmVudHNcIik7ZS5pbml0TW91c2VFdmVudChcImNsaWNrXCIsITAsITAsVmUsMSxuLnNjcmVlblgsbi5zY3JlZW5ZLG4uY2xpZW50WCxuLmNsaWVudFksITEsITEsITEsITEsMCxudWxsKSxyLnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpfX0pLHUucmVzdGFydCghMCk7ZWxzZXt2YXIgaSxvLGE9YigpO2YmJihvPShpPWcoKSkrLjA1KmEqLWUudmVsb2NpdHlYLy4yMjcvaCxhKj1lYyhnLGksbyxDYShLZSxMZSkpLHMudmFycy5zY3JvbGxYPXYobykpLG89KGk9cCgpKSsuMDUqYSotZS52ZWxvY2l0eVkvLjIyNy9oLGEqPWVjKHAsaSxvLENhKEtlLFhlKSkscy52YXJzLnNjcm9sbFk9bShvKSxzLmludmFsaWRhdGUoKS5kdXJhdGlvbihhKS5wbGF5KC4wMSl9fSxlLm9uV2hlZWw9ZnVuY3Rpb24oKXtyZXR1cm4gcy5fdHMmJnMucGF1c2UoKX0sZS5vbkNoYW5nZT1mdW5jdGlvbihlLHQscixuLGkpe1chPT1vJiZ0bygpLHQmJmYmJmcodihuWzJdPT09dD9hKyhlLnN0YXJ0WC1lLngpL2g6ZygpK3QtblsxXSkpLHImJnAobShpWzJdPT09cj9sKyhlLnN0YXJ0WS1lLnkpL2g6cCgpK3ItaVsxXSkpLFooKX0sZS5vbkVuYWJsZT1mdW5jdGlvbihlKXtmYyghZiYmXCJ4XCIpLGtiKFZlLFwicmVzaXplXCIsQm8pLGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLHBvLHtjYXB0dXJlOiEwfSl9LGUub25EaXNhYmxlPWZ1bmN0aW9uKGUpe2ZjKCEwKSxsYihWZSxcInJlc2l6ZVwiLEJvKSxsYihlLnRhcmdldCxcImNsaWNrXCIscG8pfSx0PW5ldyB3KGUpLGM9dC50YXJnZXQub3duZXJEb2N1bWVudHx8TmUsdT10Ll9kYyxzPWplLnRvKHQse2Vhc2U6XCJwb3dlcjRcIixwYXVzZWQ6ITAsc2Nyb2xsWDpmP1wiKz0wLjFcIjpcIis9MFwiLHNjcm9sbFk6XCIrPTAuMVwiLG9uQ29tcGxldGU6dS52YXJzLm9uQ29tcGxldGV9KSx0fXJlLnNvcnQ9ZnVuY3Rpb24oZSl7cmV0dXJuIFR0LnNvcnQoZXx8ZnVuY3Rpb24oZSx0KXtyZXR1cm4tMWU2KihlLnZhcnMucmVmcmVzaFByaW9yaXR5fHwwKStlLnN0YXJ0LSh0LnN0YXJ0Ky0xZTYqKHQudmFycy5yZWZyZXNoUHJpb3JpdHl8fDApKX0pfSxyZS5vYnNlcnZlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgdyhlKX0scmUubm9ybWFsaXplU2Nyb2xsPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUpcmV0dXJuIGI7aWYoITA9PT1lJiZiKXJldHVybiBiLmVuYWJsZSgpO3ZhciB0PWUgaW5zdGFuY2VvZiB3O3JldHVybiBiJiYoITE9PT1lfHx0JiZlIT09YikmJmIua2lsbCgpLGUmJiF0JiYoZT1nYyhlKSksYj1lJiZlLmVuYWJsZSgpfSxyZS5jb3JlPXtfZ2V0VmVsb2NpdHlQcm9wOkosX3Njcm9sbGVyczp6ZSxfcHJveGllczpZZSxicmlkZ2U6e3NzOmZ1bmN0aW9uIHNzKCl7bHR8fGooXCJzY3JvbGxTdGFydFwiKSxsdD1zdCgpfSxyZWY6ZnVuY3Rpb24gcmVmKCl7cmV0dXJuIFplfX19LHhhKCkmJmplLnJlZ2lzdGVyUGx1Z2luKHJlKSxlLlNjcm9sbFRyaWdnZXI9cmUsZS5kZWZhdWx0PXJlO2lmICh0eXBlb2Yod2luZG93KT09PVwidW5kZWZpbmVkXCJ8fHdpbmRvdyE9PWUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSBlbHNlIHtkZWxldGUgZS5kZWZhdWx0fX0pO1xuXG4iLCIvKiFcbiAqIEdTQVAgMy4xMC4yXG4gKiBodHRwczovL2dyZWVuc29jay5jb21cbiAqIFxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IDIwMjIsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHBzOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvciBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgYWdyZWVtZW50IGlzc3VlZCB3aXRoIHRoYXQgbWVtYmVyc2hpcC5cbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICovXG5cbiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP2UoZXhwb3J0cyk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJleHBvcnRzXCJdLGUpOmUoKHQ9dHx8c2VsZikud2luZG93PXQud2luZG93fHx7fSl9KHRoaXMsZnVuY3Rpb24oZSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gX2luaGVyaXRzTG9vc2UodCxlKXt0LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGUucHJvdG90eXBlKSwodC5wcm90b3R5cGUuY29uc3RydWN0b3I9dCkuX19wcm90b19fPWV9ZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZCh0KXtpZih2b2lkIDA9PT10KXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gdH1mdW5jdGlvbiBvKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIHAodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdH1mdW5jdGlvbiBxKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0fWZ1bmN0aW9uIHIodCl7cmV0dXJuIHZvaWQgMD09PXR9ZnVuY3Rpb24gcyh0KXtyZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgdH1mdW5jdGlvbiB0KHQpe3JldHVybiExIT09dH1mdW5jdGlvbiB1KCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvd31mdW5jdGlvbiB2KHQpe3JldHVybiBwKHQpfHxvKHQpfWZ1bmN0aW9uIE0odCl7cmV0dXJuKGg9bXQodCxvdCkpJiZoZX1mdW5jdGlvbiBOKHQsZSl7cmV0dXJuIGNvbnNvbGUud2FybihcIkludmFsaWQgcHJvcGVydHlcIix0LFwic2V0IHRvXCIsZSxcIk1pc3NpbmcgcGx1Z2luPyBnc2FwLnJlZ2lzdGVyUGx1Z2luKClcIil9ZnVuY3Rpb24gTyh0LGUpe3JldHVybiFlJiZjb25zb2xlLndhcm4odCl9ZnVuY3Rpb24gUCh0LGUpe3JldHVybiB0JiYob3RbdF09ZSkmJmgmJihoW3RdPWUpfHxvdH1mdW5jdGlvbiBRKCl7cmV0dXJuIDB9ZnVuY3Rpb24gJCh0KXt2YXIgZSxyLGk9dFswXTtpZihzKGkpfHxwKGkpfHwodD1bdF0pLCEoZT0oaS5fZ3NhcHx8e30pLmhhcm5lc3MpKXtmb3Iocj1wdC5sZW5ndGg7ci0tJiYhcHRbcl0udGFyZ2V0VGVzdChpKTspO2U9cHRbcl19Zm9yKHI9dC5sZW5ndGg7ci0tOyl0W3JdJiYodFtyXS5fZ3NhcHx8KHRbcl0uX2dzYXA9bmV3IEx0KHRbcl0sZSkpKXx8dC5zcGxpY2UociwxKTtyZXR1cm4gdH1mdW5jdGlvbiBfKHQpe3JldHVybiB0Ll9nc2FwfHwkKHh0KHQpKVswXS5fZ3NhcH1mdW5jdGlvbiBhYSh0LGUsaSl7cmV0dXJuKGk9dFtlXSkmJnAoaSk/dFtlXSgpOnIoaSkmJnQuZ2V0QXR0cmlidXRlJiZ0LmdldEF0dHJpYnV0ZShlKXx8aX1mdW5jdGlvbiBiYSh0LGUpe3JldHVybih0PXQuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGUpfHx0fWZ1bmN0aW9uIGNhKHQpe3JldHVybiBNYXRoLnJvdW5kKDFlNSp0KS8xZTV8fDB9ZnVuY3Rpb24gZGEodCl7cmV0dXJuIE1hdGgucm91bmQoMWU3KnQpLzFlN3x8MH1mdW5jdGlvbiBlYSh0LGUpe3ZhciByPWUuY2hhckF0KDApLGk9cGFyc2VGbG9hdChlLnN1YnN0cigyKSk7cmV0dXJuIHQ9cGFyc2VGbG9hdCh0KSxcIitcIj09PXI/dCtpOlwiLVwiPT09cj90LWk6XCIqXCI9PT1yP3QqaTp0L2l9ZnVuY3Rpb24gZmEodCxlKXtmb3IodmFyIHI9ZS5sZW5ndGgsaT0wO3QuaW5kZXhPZihlW2ldKTwwJiYrK2k8cjspO3JldHVybiBpPHJ9ZnVuY3Rpb24gZ2EoKXt2YXIgdCxlLHI9aHQubGVuZ3RoLGk9aHQuc2xpY2UoMCk7Zm9yKGx0PXt9LHQ9aHQubGVuZ3RoPTA7dDxyO3QrKykoZT1pW3RdKSYmZS5fbGF6eSYmKGUucmVuZGVyKGUuX2xhenlbMF0sZS5fbGF6eVsxXSwhMCkuX2xhenk9MCl9ZnVuY3Rpb24gaGEodCxlLHIsaSl7aHQubGVuZ3RoJiZnYSgpLHQucmVuZGVyKGUscixpKSxodC5sZW5ndGgmJmdhKCl9ZnVuY3Rpb24gaWEodCl7dmFyIGU9cGFyc2VGbG9hdCh0KTtyZXR1cm4oZXx8MD09PWUpJiYodCtcIlwiKS5tYXRjaChhdCkubGVuZ3RoPDI/ZTpvKHQpP3QudHJpbSgpOnR9ZnVuY3Rpb24gamEodCl7cmV0dXJuIHR9ZnVuY3Rpb24ga2EodCxlKXtmb3IodmFyIHIgaW4gZSlyIGluIHR8fCh0W3JdPWVbcl0pO3JldHVybiB0fWZ1bmN0aW9uIG5hKHQsZSl7Zm9yKHZhciByIGluIGUpXCJfX3Byb3RvX19cIiE9PXImJlwiY29uc3RydWN0b3JcIiE9PXImJlwicHJvdG90eXBlXCIhPT1yJiYodFtyXT1zKGVbcl0pP25hKHRbcl18fCh0W3JdPXt9KSxlW3JdKTplW3JdKTtyZXR1cm4gdH1mdW5jdGlvbiBvYSh0LGUpe3ZhciByLGk9e307Zm9yKHIgaW4gdClyIGluIGV8fChpW3JdPXRbcl0pO3JldHVybiBpfWZ1bmN0aW9uIHBhKGUpe3ZhciByPWUucGFyZW50fHxJLGk9ZS5rZXlmcmFtZXM/ZnVuY3Rpb24gX3NldEtleWZyYW1lRGVmYXVsdHMoaSl7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7Zm9yKHZhciByIGluIGUpciBpbiB0fHxcImR1cmF0aW9uXCI9PT1yJiZpfHxcImVhc2VcIj09PXJ8fCh0W3JdPWVbcl0pfX0oSihlLmtleWZyYW1lcykpOmthO2lmKHQoZS5pbmhlcml0KSlmb3IoO3I7KWkoZSxyLnZhcnMuZGVmYXVsdHMpLHI9ci5wYXJlbnR8fHIuX2RwO3JldHVybiBlfWZ1bmN0aW9uIHJhKHQsZSxyLGksbil7dm9pZCAwPT09ciYmKHI9XCJfZmlyc3RcIiksdm9pZCAwPT09aSYmKGk9XCJfbGFzdFwiKTt2YXIgYSxzPXRbaV07aWYobilmb3IoYT1lW25dO3MmJnNbbl0+YTspcz1zLl9wcmV2O3JldHVybiBzPyhlLl9uZXh0PXMuX25leHQscy5fbmV4dD1lKTooZS5fbmV4dD10W3JdLHRbcl09ZSksZS5fbmV4dD9lLl9uZXh0Ll9wcmV2PWU6dFtpXT1lLGUuX3ByZXY9cyxlLnBhcmVudD1lLl9kcD10LGV9ZnVuY3Rpb24gc2EodCxlLHIsaSl7dm9pZCAwPT09ciYmKHI9XCJfZmlyc3RcIiksdm9pZCAwPT09aSYmKGk9XCJfbGFzdFwiKTt2YXIgbj1lLl9wcmV2LGE9ZS5fbmV4dDtuP24uX25leHQ9YTp0W3JdPT09ZSYmKHRbcl09YSksYT9hLl9wcmV2PW46dFtpXT09PWUmJih0W2ldPW4pLGUuX25leHQ9ZS5fcHJldj1lLnBhcmVudD1udWxsfWZ1bmN0aW9uIHRhKHQsZSl7IXQucGFyZW50fHxlJiYhdC5wYXJlbnQuYXV0b1JlbW92ZUNoaWxkcmVufHx0LnBhcmVudC5yZW1vdmUodCksdC5fYWN0PTB9ZnVuY3Rpb24gdWEodCxlKXtpZih0JiYoIWV8fGUuX2VuZD50Ll9kdXJ8fGUuX3N0YXJ0PDApKWZvcih2YXIgcj10O3I7KXIuX2RpcnR5PTEscj1yLnBhcmVudDtyZXR1cm4gdH1mdW5jdGlvbiB4YSh0KXtyZXR1cm4gdC5fcmVwZWF0P2d0KHQuX3RUaW1lLHQ9dC5kdXJhdGlvbigpK3QuX3JEZWxheSkqdDowfWZ1bmN0aW9uIHphKHQsZSl7cmV0dXJuKHQtZS5fc3RhcnQpKmUuX3RzKygwPD1lLl90cz8wOmUuX2RpcnR5P2UudG90YWxEdXJhdGlvbigpOmUuX3REdXIpfWZ1bmN0aW9uIEFhKHQpe3JldHVybiB0Ll9lbmQ9ZGEodC5fc3RhcnQrKHQuX3REdXIvTWF0aC5hYnModC5fdHN8fHQuX3J0c3x8Vil8fDApKX1mdW5jdGlvbiBCYSh0LGUpe3ZhciByPXQuX2RwO3JldHVybiByJiZyLnNtb290aENoaWxkVGltaW5nJiZ0Ll90cyYmKHQuX3N0YXJ0PWRhKHIuX3RpbWUtKDA8dC5fdHM/ZS90Ll90czooKHQuX2RpcnR5P3QudG90YWxEdXJhdGlvbigpOnQuX3REdXIpLWUpLy10Ll90cykpLEFhKHQpLHIuX2RpcnR5fHx1YShyLHQpKSx0fWZ1bmN0aW9uIENhKHQsZSl7dmFyIHI7aWYoKGUuX3RpbWV8fGUuX2luaXR0ZWQmJiFlLl9kdXIpJiYocj16YSh0LnJhd1RpbWUoKSxlKSwoIWUuX2R1cnx8YnQoMCxlLnRvdGFsRHVyYXRpb24oKSxyKS1lLl90VGltZT5WKSYmZS5yZW5kZXIociwhMCkpLHVhKHQsZSkuX2RwJiZ0Ll9pbml0dGVkJiZ0Ll90aW1lPj10Ll9kdXImJnQuX3RzKXtpZih0Ll9kdXI8dC5kdXJhdGlvbigpKWZvcihyPXQ7ci5fZHA7KTA8PXIucmF3VGltZSgpJiZyLnRvdGFsVGltZShyLl90VGltZSkscj1yLl9kcDt0Ll96VGltZT0tVn19ZnVuY3Rpb24gRGEodCxlLHIsaSl7cmV0dXJuIGUucGFyZW50JiZ0YShlKSxlLl9zdGFydD1kYSgocShyKT9yOnJ8fHQhPT1JP1R0KHQscixlKTp0Ll90aW1lKStlLl9kZWxheSksZS5fZW5kPWRhKGUuX3N0YXJ0KyhlLnRvdGFsRHVyYXRpb24oKS9NYXRoLmFicyhlLnRpbWVTY2FsZSgpKXx8MCkpLHJhKHQsZSxcIl9maXJzdFwiLFwiX2xhc3RcIix0Ll9zb3J0P1wiX3N0YXJ0XCI6MCksdnQoZSl8fCh0Ll9yZWNlbnQ9ZSksaXx8Q2EodCxlKSx0fWZ1bmN0aW9uIEVhKHQsZSl7cmV0dXJuKG90LlNjcm9sbFRyaWdnZXJ8fE4oXCJzY3JvbGxUcmlnZ2VyXCIsZSkpJiZvdC5TY3JvbGxUcmlnZ2VyLmNyZWF0ZShlLHQpfWZ1bmN0aW9uIEZhKHQsZSxyLGkpe3JldHVybiBYdCh0LGUpLHQuX2luaXR0ZWQ/IXImJnQuX3B0JiYodC5fZHVyJiYhMSE9PXQudmFycy5sYXp5fHwhdC5fZHVyJiZ0LnZhcnMubGF6eSkmJmYhPT1EdC5mcmFtZT8oaHQucHVzaCh0KSx0Ll9sYXp5PVtlLGldLDEpOnZvaWQgMDoxfWZ1bmN0aW9uIEthKHQsZSxyLGkpe3ZhciBuPXQuX3JlcGVhdCxhPWRhKGUpfHwwLHM9dC5fdFRpbWUvdC5fdER1cjtyZXR1cm4gcyYmIWkmJih0Ll90aW1lKj1hL3QuX2R1ciksdC5fZHVyPWEsdC5fdER1cj1uP248MD8xZTEwOmRhKGEqKG4rMSkrdC5fckRlbGF5Km4pOmEsMDxzJiYhaT9CYSh0LHQuX3RUaW1lPXQuX3REdXIqcyk6dC5wYXJlbnQmJkFhKHQpLHJ8fHVhKHQucGFyZW50LHQpLHR9ZnVuY3Rpb24gTGEodCl7cmV0dXJuIHQgaW5zdGFuY2VvZiBVdD91YSh0KTpLYSh0LHQuX2R1cil9ZnVuY3Rpb24gT2EoZSxyLGkpe3ZhciBuLGEscz1xKHJbMV0pLG89KHM/MjoxKSsoZTwyPzA6MSksdT1yW29dO2lmKHMmJih1LmR1cmF0aW9uPXJbMV0pLHUucGFyZW50PWksZSl7Zm9yKG49dSxhPWk7YSYmIShcImltbWVkaWF0ZVJlbmRlclwiaW4gbik7KW49YS52YXJzLmRlZmF1bHRzfHx7fSxhPXQoYS52YXJzLmluaGVyaXQpJiZhLnBhcmVudDt1LmltbWVkaWF0ZVJlbmRlcj10KG4uaW1tZWRpYXRlUmVuZGVyKSxlPDI/dS5ydW5CYWNrd2FyZHM9MTp1LnN0YXJ0QXQ9cltvLTFdfXJldHVybiBuZXcgJHQoclswXSx1LHJbMStvXSl9ZnVuY3Rpb24gUGEodCxlKXtyZXR1cm4gdHx8MD09PXQ/ZSh0KTplfWZ1bmN0aW9uIFJhKHQsZSl7cmV0dXJuIG8odCkmJihlPXN0LmV4ZWModCkpP2VbMV06XCJcIn1mdW5jdGlvbiBVYSh0LGUpe3JldHVybiB0JiZzKHQpJiZcImxlbmd0aFwiaW4gdCYmKCFlJiYhdC5sZW5ndGh8fHQubGVuZ3RoLTEgaW4gdCYmcyh0WzBdKSkmJiF0Lm5vZGVUeXBlJiZ0IT09aX1mdW5jdGlvbiBZYSh0KXtyZXR1cm4gdC5zb3J0KGZ1bmN0aW9uKCl7cmV0dXJuLjUtTWF0aC5yYW5kb20oKX0pfWZ1bmN0aW9uIFphKHQpe2lmKHAodCkpcmV0dXJuIHQ7dmFyIGM9cyh0KT90OntlYWNoOnR9LG09QnQoYy5lYXNlKSxnPWMuZnJvbXx8MCx2PXBhcnNlRmxvYXQoYy5iYXNlKXx8MCx5PXt9LGU9MDxnJiZnPDEsVD1pc05hTihnKXx8ZSxiPWMuYXhpcyx3PWcseD1nO3JldHVybiBvKGcpP3c9eD17Y2VudGVyOi41LGVkZ2VzOi41LGVuZDoxfVtnXXx8MDohZSYmVCYmKHc9Z1swXSx4PWdbMV0pLGZ1bmN0aW9uKHQsZSxyKXt2YXIgaSxuLGEscyxvLHUsaCxsLGYsZD0ocnx8YykubGVuZ3RoLF89eVtkXTtpZighXyl7aWYoIShmPVwiYXV0b1wiPT09Yy5ncmlkPzA6KGMuZ3JpZHx8WzEsWV0pWzFdKSl7Zm9yKGg9LVk7aDwoaD1yW2YrK10uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCkmJmY8ZDspO2YtLX1mb3IoXz15W2RdPVtdLGk9VD9NYXRoLm1pbihmLGQpKnctLjU6ZyVmLG49Zj09PVk/MDpUP2QqeC9mLS41OmcvZnwwLGw9WSx1PWg9MDt1PGQ7dSsrKWE9dSVmLWkscz1uLSh1L2Z8MCksX1t1XT1vPWI/TWF0aC5hYnMoXCJ5XCI9PT1iP3M6YSk6RyhhKmErcypzKSxoPG8mJihoPW8pLG88bCYmKGw9byk7XCJyYW5kb21cIj09PWcmJllhKF8pLF8ubWF4PWgtbCxfLm1pbj1sLF8udj1kPShwYXJzZUZsb2F0KGMuYW1vdW50KXx8cGFyc2VGbG9hdChjLmVhY2gpKihkPGY/ZC0xOmI/XCJ5XCI9PT1iP2QvZjpmOk1hdGgubWF4KGYsZC9mKSl8fDApKihcImVkZ2VzXCI9PT1nPy0xOjEpLF8uYj1kPDA/di1kOnYsXy51PVJhKGMuYW1vdW50fHxjLmVhY2gpfHwwLG09bSYmZDwwP0Z0KG0pOm19cmV0dXJuIGQ9KF9bdF0tXy5taW4pL18ubWF4fHwwLGRhKF8uYisobT9tKGQpOmQpKl8udikrXy51fX1mdW5jdGlvbiAkYShyKXt2YXIgaT1NYXRoLnBvdygxMCwoKHIrXCJcIikuc3BsaXQoXCIuXCIpWzFdfHxcIlwiKS5sZW5ndGgpO3JldHVybiBmdW5jdGlvbih0KXt2YXIgZT1NYXRoLnJvdW5kKHBhcnNlRmxvYXQodCkvcikqcippO3JldHVybihlLWUlMSkvaSsocSh0KT8wOlJhKHQpKX19ZnVuY3Rpb24gX2EodSx0KXt2YXIgaCxsLGU9Sih1KTtyZXR1cm4hZSYmcyh1KSYmKGg9ZT11LnJhZGl1c3x8WSx1LnZhbHVlcz8odT14dCh1LnZhbHVlcyksKGw9IXEodVswXSkpJiYoaCo9aCkpOnU9JGEodS5pbmNyZW1lbnQpKSxQYSh0LGU/cCh1KT9mdW5jdGlvbih0KXtyZXR1cm4gbD11KHQpLE1hdGguYWJzKGwtdCk8PWg/bDp0fTpmdW5jdGlvbih0KXtmb3IodmFyIGUscixpPXBhcnNlRmxvYXQobD90Lng6dCksbj1wYXJzZUZsb2F0KGw/dC55OjApLGE9WSxzPTAsbz11Lmxlbmd0aDtvLS07KShlPWw/KGU9dVtvXS54LWkpKmUrKHI9dVtvXS55LW4pKnI6TWF0aC5hYnModVtvXS1pKSk8YSYmKGE9ZSxzPW8pO3JldHVybiBzPSFofHxhPD1oP3Vbc106dCxsfHxzPT09dHx8cSh0KT9zOnMrUmEodCl9OiRhKHUpKX1mdW5jdGlvbiBhYih0LGUscixpKXtyZXR1cm4gUGEoSih0KT8hZTohMD09PXI/ISEocj0wKTohaSxmdW5jdGlvbigpe3JldHVybiBKKHQpP3Rbfn4oTWF0aC5yYW5kb20oKSp0Lmxlbmd0aCldOihyPXJ8fDFlLTUpJiYoaT1yPDE/TWF0aC5wb3coMTAsKHIrXCJcIikubGVuZ3RoLTIpOjEpJiZNYXRoLmZsb29yKE1hdGgucm91bmQoKHQtci8yK01hdGgucmFuZG9tKCkqKGUtdCsuOTkqcikpL3IpKnIqaSkvaX0pfWZ1bmN0aW9uIGViKGUscix0KXtyZXR1cm4gUGEodCxmdW5jdGlvbih0KXtyZXR1cm4gZVt+fnIodCldfSl9ZnVuY3Rpb24gaGIodCl7Zm9yKHZhciBlLHIsaSxuLGE9MCxzPVwiXCI7fihlPXQuaW5kZXhPZihcInJhbmRvbShcIixhKSk7KWk9dC5pbmRleE9mKFwiKVwiLGUpLG49XCJbXCI9PT10LmNoYXJBdChlKzcpLHI9dC5zdWJzdHIoZSs3LGktZS03KS5tYXRjaChuP2F0OnR0KSxzKz10LnN1YnN0cihhLGUtYSkrYWIobj9yOityWzBdLG4/MDorclsxXSwrclsyXXx8MWUtNSksYT1pKzE7cmV0dXJuIHMrdC5zdWJzdHIoYSx0Lmxlbmd0aC1hKX1mdW5jdGlvbiBrYih0LGUscil7dmFyIGksbixhLHM9dC5sYWJlbHMsbz1ZO2ZvcihpIGluIHMpKG49c1tpXS1lKTwwPT0hIXImJm4mJm8+KG49TWF0aC5hYnMobikpJiYoYT1pLG89bik7cmV0dXJuIGF9ZnVuY3Rpb24gbWIodCl7cmV0dXJuIHRhKHQpLHQuc2Nyb2xsVHJpZ2dlciYmdC5zY3JvbGxUcmlnZ2VyLmtpbGwoITEpLHQucHJvZ3Jlc3MoKTwxJiZPdCh0LFwib25JbnRlcnJ1cHRcIiksdH1mdW5jdGlvbiByYih0LGUscil7cmV0dXJuKDYqKHQrPXQ8MD8xOjE8dD8tMTowKTwxP2UrKHItZSkqdCo2OnQ8LjU/cjozKnQ8Mj9lKyhyLWUpKigyLzMtdCkqNjplKSpQdCsuNXwwfWZ1bmN0aW9uIHNiKHQsZSxyKXt2YXIgaSxuLGEscyxvLHUsaCxsLGYsZCxfPXQ/cSh0KT9bdD4+MTYsdD4+OCZQdCx0JlB0XTowOk10LmJsYWNrO2lmKCFfKXtpZihcIixcIj09PXQuc3Vic3RyKC0xKSYmKHQ9dC5zdWJzdHIoMCx0Lmxlbmd0aC0xKSksTXRbdF0pXz1NdFt0XTtlbHNlIGlmKFwiI1wiPT09dC5jaGFyQXQoMCkpe2lmKHQubGVuZ3RoPDYmJih0PVwiI1wiKyhpPXQuY2hhckF0KDEpKStpKyhuPXQuY2hhckF0KDIpKStuKyhhPXQuY2hhckF0KDMpKSthKyg1PT09dC5sZW5ndGg/dC5jaGFyQXQoNCkrdC5jaGFyQXQoNCk6XCJcIikpLDk9PT10Lmxlbmd0aClyZXR1cm5bKF89cGFyc2VJbnQodC5zdWJzdHIoMSw2KSwxNikpPj4xNixfPj44JlB0LF8mUHQscGFyc2VJbnQodC5zdWJzdHIoNyksMTYpLzI1NV07Xz1bKHQ9cGFyc2VJbnQodC5zdWJzdHIoMSksMTYpKT4+MTYsdD4+OCZQdCx0JlB0XX1lbHNlIGlmKFwiaHNsXCI9PT10LnN1YnN0cigwLDMpKWlmKF89ZD10Lm1hdGNoKHR0KSxlKXtpZih+dC5pbmRleE9mKFwiPVwiKSlyZXR1cm4gXz10Lm1hdGNoKGV0KSxyJiZfLmxlbmd0aDw0JiYoX1szXT0xKSxffWVsc2Ugcz0rX1swXSUzNjAvMzYwLG89X1sxXS8xMDAsaT0yKih1PV9bMl0vMTAwKS0obj11PD0uNT91KihvKzEpOnUrby11Km8pLDM8Xy5sZW5ndGgmJihfWzNdKj0xKSxfWzBdPXJiKHMrMS8zLGksbiksX1sxXT1yYihzLGksbiksX1syXT1yYihzLTEvMyxpLG4pO2Vsc2UgXz10Lm1hdGNoKHR0KXx8TXQudHJhbnNwYXJlbnQ7Xz1fLm1hcChOdW1iZXIpfXJldHVybiBlJiYhZCYmKGk9X1swXS9QdCxuPV9bMV0vUHQsYT1fWzJdL1B0LHU9KChoPU1hdGgubWF4KGksbixhKSkrKGw9TWF0aC5taW4oaSxuLGEpKSkvMixoPT09bD9zPW89MDooZj1oLWwsbz0uNTx1P2YvKDItaC1sKTpmLyhoK2wpLHM9aD09PWk/KG4tYSkvZisobjxhPzY6MCk6aD09PW4/KGEtaSkvZisyOihpLW4pL2YrNCxzKj02MCksX1swXT1+fihzKy41KSxfWzFdPX5+KDEwMCpvKy41KSxfWzJdPX5+KDEwMCp1Ky41KSksciYmXy5sZW5ndGg8NCYmKF9bM109MSksX31mdW5jdGlvbiB0Yih0KXt2YXIgcj1bXSxpPVtdLG49LTE7cmV0dXJuIHQuc3BsaXQoQ3QpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGU9dC5tYXRjaChydCl8fFtdO3IucHVzaC5hcHBseShyLGUpLGkucHVzaChuKz1lLmxlbmd0aCsxKX0pLHIuYz1pLHJ9ZnVuY3Rpb24gdWIodCxlLHIpe3ZhciBpLG4sYSxzLG89XCJcIix1PSh0K28pLm1hdGNoKEN0KSxoPWU/XCJoc2xhKFwiOlwicmdiYShcIixsPTA7aWYoIXUpcmV0dXJuIHQ7aWYodT11Lm1hcChmdW5jdGlvbih0KXtyZXR1cm4odD1zYih0LGUsMSkpJiZoKyhlP3RbMF0rXCIsXCIrdFsxXStcIiUsXCIrdFsyXStcIiUsXCIrdFszXTp0LmpvaW4oXCIsXCIpKStcIilcIn0pLHImJihhPXRiKHQpLChpPXIuYykuam9pbihvKSE9PWEuYy5qb2luKG8pKSlmb3Iocz0obj10LnJlcGxhY2UoQ3QsXCIxXCIpLnNwbGl0KHJ0KSkubGVuZ3RoLTE7bDxzO2wrKylvKz1uW2xdKyh+aS5pbmRleE9mKGwpP3Uuc2hpZnQoKXx8aCtcIjAsMCwwLDApXCI6KGEubGVuZ3RoP2E6dS5sZW5ndGg/dTpyKS5zaGlmdCgpKTtpZighbilmb3Iocz0obj10LnNwbGl0KEN0KSkubGVuZ3RoLTE7bDxzO2wrKylvKz1uW2xdK3VbbF07cmV0dXJuIG8rbltzXX1mdW5jdGlvbiB4Yih0KXt2YXIgZSxyPXQuam9pbihcIiBcIik7aWYoQ3QubGFzdEluZGV4PTAsQ3QudGVzdChyKSlyZXR1cm4gZT1BdC50ZXN0KHIpLHRbMV09dWIodFsxXSxlKSx0WzBdPXViKHRbMF0sZSx0Yih0WzFdKSksITB9ZnVuY3Rpb24gR2IodCl7dmFyIGU9KHQrXCJcIikuc3BsaXQoXCIoXCIpLHI9enRbZVswXV07cmV0dXJuIHImJjE8ZS5sZW5ndGgmJnIuY29uZmlnP3IuY29uZmlnLmFwcGx5KG51bGwsfnQuaW5kZXhPZihcIntcIik/W2Z1bmN0aW9uIF9wYXJzZU9iamVjdEluU3RyaW5nKHQpe2Zvcih2YXIgZSxyLGksbj17fSxhPXQuc3Vic3RyKDEsdC5sZW5ndGgtMykuc3BsaXQoXCI6XCIpLHM9YVswXSxvPTEsdT1hLmxlbmd0aDtvPHU7bysrKXI9YVtvXSxlPW8hPT11LTE/ci5sYXN0SW5kZXhPZihcIixcIik6ci5sZW5ndGgsaT1yLnN1YnN0cigwLGUpLG5bc109aXNOYU4oaSk/aS5yZXBsYWNlKEV0LFwiXCIpLnRyaW0oKToraSxzPXIuc3Vic3RyKGUrMSkudHJpbSgpO3JldHVybiBufShlWzFdKV06ZnVuY3Rpb24gX3ZhbHVlSW5QYXJlbnRoZXNlcyh0KXt2YXIgZT10LmluZGV4T2YoXCIoXCIpKzEscj10LmluZGV4T2YoXCIpXCIpLGk9dC5pbmRleE9mKFwiKFwiLGUpO3JldHVybiB0LnN1YnN0cmluZyhlLH5pJiZpPHI/dC5pbmRleE9mKFwiKVwiLHIrMSk6cil9KHQpLnNwbGl0KFwiLFwiKS5tYXAoaWEpKTp6dC5fQ0UmJlJ0LnRlc3QodCk/enQuX0NFKFwiXCIsdCk6cn1mdW5jdGlvbiBJYih0LGUpe2Zvcih2YXIgcixpPXQuX2ZpcnN0O2k7KWkgaW5zdGFuY2VvZiBVdD9JYihpLGUpOiFpLnZhcnMueW95b0Vhc2V8fGkuX3lveW8mJmkuX3JlcGVhdHx8aS5feW95bz09PWV8fChpLnRpbWVsaW5lP0liKGkudGltZWxpbmUsZSk6KHI9aS5fZWFzZSxpLl9lYXNlPWkuX3lFYXNlLGkuX3lFYXNlPXIsaS5feW95bz1lKSksaT1pLl9uZXh0fWZ1bmN0aW9uIEtiKHQsZSxyLGkpe3ZvaWQgMD09PXImJihyPWZ1bmN0aW9uIGVhc2VPdXQodCl7cmV0dXJuIDEtZSgxLXQpfSksdm9pZCAwPT09aSYmKGk9ZnVuY3Rpb24gZWFzZUluT3V0KHQpe3JldHVybiB0PC41P2UoMip0KS8yOjEtZSgyKigxLXQpKS8yfSk7dmFyIG4sYT17ZWFzZUluOmUsZWFzZU91dDpyLGVhc2VJbk91dDppfTtyZXR1cm4gYmEodCxmdW5jdGlvbih0KXtmb3IodmFyIGUgaW4genRbdF09b3RbdF09YSx6dFtuPXQudG9Mb3dlckNhc2UoKV09cixhKXp0W24rKFwiZWFzZUluXCI9PT1lP1wiLmluXCI6XCJlYXNlT3V0XCI9PT1lP1wiLm91dFwiOlwiLmluT3V0XCIpXT16dFt0K1wiLlwiK2VdPWFbZV19KSxhfWZ1bmN0aW9uIExiKGUpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gdDwuNT8oMS1lKDEtMip0KSkvMjouNStlKDIqKHQtLjUpKS8yfX1mdW5jdGlvbiBNYihyLHQsZSl7ZnVuY3Rpb24gZW0odCl7cmV0dXJuIDE9PT10PzE6aSpNYXRoLnBvdygyLC0xMCp0KSpaKCh0LWEpKm4pKzF9dmFyIGk9MTw9dD90OjEsbj0oZXx8KHI/LjM6LjQ1KSkvKHQ8MT90OjEpLGE9bi9YKihNYXRoLmFzaW4oMS9pKXx8MCkscz1cIm91dFwiPT09cj9lbTpcImluXCI9PT1yP2Z1bmN0aW9uKHQpe3JldHVybiAxLWVtKDEtdCl9OkxiKGVtKTtyZXR1cm4gbj1YL24scy5jb25maWc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTWIocix0LGUpfSxzfWZ1bmN0aW9uIE5iKGUscil7ZnVuY3Rpb24gbW0odCl7cmV0dXJuIHQ/LS10KnQqKChyKzEpKnQrcikrMTowfXZvaWQgMD09PXImJihyPTEuNzAxNTgpO3ZhciB0PVwib3V0XCI9PT1lP21tOlwiaW5cIj09PWU/ZnVuY3Rpb24odCl7cmV0dXJuIDEtbW0oMS10KX06TGIobW0pO3JldHVybiB0LmNvbmZpZz1mdW5jdGlvbih0KXtyZXR1cm4gTmIoZSx0KX0sdH12YXIgQixJLGksbixhLGgsbCxmLGQsYyxtLGcseSxULGIsdyx4LGssQyxBLEQsUyx6LFIsRSxGLFU9e2F1dG9TbGVlcDoxMjAsZm9yY2UzRDpcImF1dG9cIixudWxsVGFyZ2V0V2FybjoxLHVuaXRzOntsaW5lSGVpZ2h0OlwiXCJ9fSxMPXtkdXJhdGlvbjouNSxvdmVyd3JpdGU6ITEsZGVsYXk6MH0sWT0xZTgsVj0xL1ksWD0yKk1hdGguUEksaj1YLzQsSz0wLEc9TWF0aC5zcXJ0LFc9TWF0aC5jb3MsWj1NYXRoLnNpbixIPVwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5QnVmZmVyJiZBcnJheUJ1ZmZlci5pc1ZpZXd8fGZ1bmN0aW9uKCl7fSxKPUFycmF5LmlzQXJyYXksdHQ9Lyg/Oi0/XFwuP1xcZHxcXC4pKy9naSxldD0vWy0rPS5dKlxcZCtbLmVcXC0rXSpcXGQqW2VcXC0rXSpcXGQqL2cscnQ9L1stKz0uXSpcXGQrWy5lLV0qXFxkKlthLXolXSovZyxpdD0vWy0rPS5dKlxcZCtcXC4/XFxkKig/OmUtfGVcXCspP1xcZCovZ2ksbnQ9L1srLV09LT9bLlxcZF0rLyxhdD0vW14sJ1wiXFxbXFxdXFxzXSsvZ2ksc3Q9L15bK1xcLT1lXFxzXFxkXSpcXGQrWy5cXGRdKihbYS16XSp8JSlcXHMqJC9pLG90PXt9LHV0PXt9LGh0PVtdLGx0PXt9LGZ0PXt9LGR0PXt9LF90PTMwLHB0PVtdLGN0PVwiXCIsbXQ9ZnVuY3Rpb24gX21lcmdlKHQsZSl7Zm9yKHZhciByIGluIGUpdFtyXT1lW3JdO3JldHVybiB0fSxndD1mdW5jdGlvbiBfYW5pbWF0aW9uQ3ljbGUodCxlKXt2YXIgcj1NYXRoLmZsb29yKHQvPWUpO3JldHVybiB0JiZyPT09dD9yLTE6cn0sdnQ9ZnVuY3Rpb24gX2lzRnJvbU9yRnJvbVN0YXJ0KHQpe3ZhciBlPXQuZGF0YTtyZXR1cm5cImlzRnJvbVN0YXJ0XCI9PT1lfHxcImlzU3RhcnRcIj09PWV9LHl0PXtfc3RhcnQ6MCxlbmRUaW1lOlEsdG90YWxEdXJhdGlvbjpRfSxUdD1mdW5jdGlvbiBfcGFyc2VQb3NpdGlvbih0LGUscil7dmFyIGksbixhLHM9dC5sYWJlbHMsdT10Ll9yZWNlbnR8fHl0LGg9dC5kdXJhdGlvbigpPj1ZP3UuZW5kVGltZSghMSk6dC5fZHVyO3JldHVybiBvKGUpJiYoaXNOYU4oZSl8fGUgaW4gcyk/KG49ZS5jaGFyQXQoMCksYT1cIiVcIj09PWUuc3Vic3RyKC0xKSxpPWUuaW5kZXhPZihcIj1cIiksXCI8XCI9PT1ufHxcIj5cIj09PW4/KDA8PWkmJihlPWUucmVwbGFjZSgvPS8sXCJcIikpLChcIjxcIj09PW4/dS5fc3RhcnQ6dS5lbmRUaW1lKDA8PXUuX3JlcGVhdCkpKyhwYXJzZUZsb2F0KGUuc3Vic3RyKDEpKXx8MCkqKGE/KGk8MD91OnIpLnRvdGFsRHVyYXRpb24oKS8xMDA6MSkpOmk8MD8oZSBpbiBzfHwoc1tlXT1oKSxzW2VdKToobj1wYXJzZUZsb2F0KGUuY2hhckF0KGktMSkrZS5zdWJzdHIoaSsxKSksYSYmciYmKG49bi8xMDAqKEoocik/clswXTpyKS50b3RhbER1cmF0aW9uKCkpLDE8aT9fcGFyc2VQb3NpdGlvbih0LGUuc3Vic3RyKDAsaS0xKSxyKStuOmgrbikpOm51bGw9PWU/aDorZX0sYnQ9ZnVuY3Rpb24gX2NsYW1wKHQsZSxyKXtyZXR1cm4gcjx0P3Q6ZTxyP2U6cn0sd3Q9W10uc2xpY2UseHQ9ZnVuY3Rpb24gdG9BcnJheSh0LGUscil7cmV0dXJuIW8odCl8fHJ8fCFuJiZTdCgpP0oodCk/ZnVuY3Rpb24gX2ZsYXR0ZW4odCxlLHIpe3JldHVybiB2b2lkIDA9PT1yJiYocj1bXSksdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBvKHQpJiYhZXx8VWEodCwxKT9yLnB1c2guYXBwbHkocix4dCh0KSk6ci5wdXNoKHQpfSl8fHJ9KHQscik6VWEodCk/d3QuY2FsbCh0LDApOnQ/W3RdOltdOnd0LmNhbGwoKGV8fGEpLnF1ZXJ5U2VsZWN0b3JBbGwodCksMCl9LGt0PWZ1bmN0aW9uIG1hcFJhbmdlKGUsdCxyLGksbil7dmFyIGE9dC1lLHM9aS1yO3JldHVybiBQYShuLGZ1bmN0aW9uKHQpe3JldHVybiByKygodC1lKS9hKnN8fDApfSl9LE90PWZ1bmN0aW9uIF9jYWxsYmFjayh0LGUscil7dmFyIGksbixhPXQudmFycyxzPWFbZV07aWYocylyZXR1cm4gaT1hW2UrXCJQYXJhbXNcIl0sbj1hLmNhbGxiYWNrU2NvcGV8fHQsciYmaHQubGVuZ3RoJiZnYSgpLGk/cy5hcHBseShuLGkpOnMuY2FsbChuKX0sUHQ9MjU1LE10PXthcXVhOlswLFB0LFB0XSxsaW1lOlswLFB0LDBdLHNpbHZlcjpbMTkyLDE5MiwxOTJdLGJsYWNrOlswLDAsMF0sbWFyb29uOlsxMjgsMCwwXSx0ZWFsOlswLDEyOCwxMjhdLGJsdWU6WzAsMCxQdF0sbmF2eTpbMCwwLDEyOF0sd2hpdGU6W1B0LFB0LFB0XSxvbGl2ZTpbMTI4LDEyOCwwXSx5ZWxsb3c6W1B0LFB0LDBdLG9yYW5nZTpbUHQsMTY1LDBdLGdyYXk6WzEyOCwxMjgsMTI4XSxwdXJwbGU6WzEyOCwwLDEyOF0sZ3JlZW46WzAsMTI4LDBdLHJlZDpbUHQsMCwwXSxwaW5rOltQdCwxOTIsMjAzXSxjeWFuOlswLFB0LFB0XSx0cmFuc3BhcmVudDpbUHQsUHQsUHQsMF19LEN0PWZ1bmN0aW9uKCl7dmFyIHQsZT1cIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17Myw0fSl7MSwyfVxcXFxiXCI7Zm9yKHQgaW4gTXQpZSs9XCJ8XCIrdCtcIlxcXFxiXCI7cmV0dXJuIG5ldyBSZWdFeHAoZStcIilcIixcImdpXCIpfSgpLEF0PS9oc2xbYV0/XFwoLyxEdD0oeD1EYXRlLm5vdyxrPTUwMCxDPTMzLEE9eCgpLEQ9QSx6PVM9MWUzLzI0MCxUPXt0aW1lOjAsZnJhbWU6MCx0aWNrOmZ1bmN0aW9uIHRpY2soKXtWayghMCl9LGRlbHRhUmF0aW86ZnVuY3Rpb24gZGVsdGFSYXRpbyh0KXtyZXR1cm4gYi8oMWUzLyh0fHw2MCkpfSx3YWtlOmZ1bmN0aW9uIHdha2UoKXtsJiYoIW4mJnUoKSYmKGk9bj13aW5kb3csYT1pLmRvY3VtZW50fHx7fSxvdC5nc2FwPWhlLChpLmdzYXBWZXJzaW9uc3x8KGkuZ3NhcFZlcnNpb25zPVtdKSkucHVzaChoZS52ZXJzaW9uKSxNKGh8fGkuR3JlZW5Tb2NrR2xvYmFsc3x8IWkuZ3NhcCYmaXx8e30pLHk9aS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpLG0mJlQuc2xlZXAoKSxnPXl8fGZ1bmN0aW9uKHQpe3JldHVybiBzZXRUaW1lb3V0KHQsei0xZTMqVC50aW1lKzF8MCl9LGM9MSxWaygyKSl9LHNsZWVwOmZ1bmN0aW9uIHNsZWVwKCl7KHk/aS5jYW5jZWxBbmltYXRpb25GcmFtZTpjbGVhclRpbWVvdXQpKG0pLGM9MCxnPVF9LGxhZ1Ntb290aGluZzpmdW5jdGlvbiBsYWdTbW9vdGhpbmcodCxlKXtrPXR8fDFlOCxDPU1hdGgubWluKGUsaywwKX0sZnBzOmZ1bmN0aW9uIGZwcyh0KXtTPTFlMy8odHx8MjQwKSx6PTFlMypULnRpbWUrU30sYWRkOmZ1bmN0aW9uIGFkZChuLHQsZSl7dmFyIGE9dD9mdW5jdGlvbih0LGUscixpKXtuKHQsZSxyLGkpLFQucmVtb3ZlKGEpfTpuO3JldHVybiBULnJlbW92ZShuKSxSW2U/XCJ1bnNoaWZ0XCI6XCJwdXNoXCJdKGEpLFN0KCksYX0scmVtb3ZlOmZ1bmN0aW9uIHJlbW92ZSh0LGUpe34oZT1SLmluZGV4T2YodCkpJiZSLnNwbGljZShlLDEpJiZlPD13JiZ3LS19LF9saXN0ZW5lcnM6Uj1bXX0pLFN0PWZ1bmN0aW9uIF93YWtlKCl7cmV0dXJuIWMmJkR0Lndha2UoKX0senQ9e30sUnQ9L15bXFxkLlxcLU1dW1xcZC5cXC0sXFxzXS8sRXQ9L1tcIiddL2csRnQ9ZnVuY3Rpb24gX2ludmVydEVhc2UoZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiAxLWUoMS10KX19LEJ0PWZ1bmN0aW9uIF9wYXJzZUVhc2UodCxlKXtyZXR1cm4gdCYmKHAodCk/dDp6dFt0XXx8R2IodCkpfHxlfTtmdW5jdGlvbiBWayh0KXt2YXIgZSxyLGksbixhPXgoKS1ELHM9ITA9PT10O2lmKGs8YSYmKEErPWEtQyksKDA8KGU9KGk9KEQrPWEpLUEpLXopfHxzKSYmKG49KytULmZyYW1lLGI9aS0xZTMqVC50aW1lLFQudGltZT1pLz0xZTMseis9ZSsoUzw9ZT80OlMtZSkscj0xKSxzfHwobT1nKFZrKSkscilmb3Iodz0wO3c8Ui5sZW5ndGg7dysrKVJbd10oaSxiLG4sdCl9ZnVuY3Rpb24gRG0odCl7cmV0dXJuIHQ8Rj9FKnQqdDp0PC43MjcyNzI3MjcyNzI3MjczP0UqTWF0aC5wb3codC0xLjUvMi43NSwyKSsuNzU6dDwuOTA5MDkwOTA5MDkwOTA5Mj9FKih0LT0yLjI1LzIuNzUpKnQrLjkzNzU6RSpNYXRoLnBvdyh0LTIuNjI1LzIuNzUsMikrLjk4NDM3NX1iYShcIkxpbmVhcixRdWFkLEN1YmljLFF1YXJ0LFF1aW50LFN0cm9uZ1wiLGZ1bmN0aW9uKHQsZSl7dmFyIHI9ZTw1P2UrMTplO0tiKHQrXCIsUG93ZXJcIisoci0xKSxlP2Z1bmN0aW9uKHQpe3JldHVybiBNYXRoLnBvdyh0LHIpfTpmdW5jdGlvbih0KXtyZXR1cm4gdH0sZnVuY3Rpb24odCl7cmV0dXJuIDEtTWF0aC5wb3coMS10LHIpfSxmdW5jdGlvbih0KXtyZXR1cm4gdDwuNT9NYXRoLnBvdygyKnQscikvMjoxLU1hdGgucG93KDIqKDEtdCkscikvMn0pfSksenQuTGluZWFyLmVhc2VOb25lPXp0Lm5vbmU9enQuTGluZWFyLmVhc2VJbixLYihcIkVsYXN0aWNcIixNYihcImluXCIpLE1iKFwib3V0XCIpLE1iKCkpLEU9Ny41NjI1LEY9MS8yLjc1LEtiKFwiQm91bmNlXCIsZnVuY3Rpb24odCl7cmV0dXJuIDEtRG0oMS10KX0sRG0pLEtiKFwiRXhwb1wiLGZ1bmN0aW9uKHQpe3JldHVybiB0P01hdGgucG93KDIsMTAqKHQtMSkpOjB9KSxLYihcIkNpcmNcIixmdW5jdGlvbih0KXtyZXR1cm4tKEcoMS10KnQpLTEpfSksS2IoXCJTaW5lXCIsZnVuY3Rpb24odCl7cmV0dXJuIDE9PT10PzE6MS1XKHQqail9KSxLYihcIkJhY2tcIixOYihcImluXCIpLE5iKFwib3V0XCIpLE5iKCkpLHp0LlN0ZXBwZWRFYXNlPXp0LnN0ZXBzPW90LlN0ZXBwZWRFYXNlPXtjb25maWc6ZnVuY3Rpb24gY29uZmlnKHQsZSl7dm9pZCAwPT09dCYmKHQ9MSk7dmFyIHI9MS90LGk9dCsoZT8wOjEpLG49ZT8xOjA7cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybigoaSpidCgwLC45OTk5OTk5OSx0KXwwKStuKSpyfX19LEwuZWFzZT16dFtcInF1YWQub3V0XCJdLGJhKFwib25Db21wbGV0ZSxvblVwZGF0ZSxvblN0YXJ0LG9uUmVwZWF0LG9uUmV2ZXJzZUNvbXBsZXRlLG9uSW50ZXJydXB0XCIsZnVuY3Rpb24odCl7cmV0dXJuIGN0Kz10K1wiLFwiK3QrXCJQYXJhbXMsXCJ9KTt2YXIgSXQsTHQ9ZnVuY3Rpb24gR1NDYWNoZSh0LGUpe3RoaXMuaWQ9SysrLCh0Ll9nc2FwPXRoaXMpLnRhcmdldD10LHRoaXMuaGFybmVzcz1lLHRoaXMuZ2V0PWU/ZS5nZXQ6YWEsdGhpcy5zZXQ9ZT9lLmdldFNldHRlcjpIdH0sTnQ9KChJdD1BbmltYXRpb24ucHJvdG90eXBlKS5kZWxheT1mdW5jdGlvbiBkZWxheSh0KXtyZXR1cm4gdHx8MD09PXQ/KHRoaXMucGFyZW50JiZ0aGlzLnBhcmVudC5zbW9vdGhDaGlsZFRpbWluZyYmdGhpcy5zdGFydFRpbWUodGhpcy5fc3RhcnQrdC10aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9dCx0aGlzKTp0aGlzLl9kZWxheX0sSXQuZHVyYXRpb249ZnVuY3Rpb24gZHVyYXRpb24odCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy50b3RhbER1cmF0aW9uKDA8dGhpcy5fcmVwZWF0P3QrKHQrdGhpcy5fckRlbGF5KSp0aGlzLl9yZXBlYXQ6dCk6dGhpcy50b3RhbER1cmF0aW9uKCkmJnRoaXMuX2R1cn0sSXQudG90YWxEdXJhdGlvbj1mdW5jdGlvbiB0b3RhbER1cmF0aW9uKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9kaXJ0eT0wLEthKHRoaXMsdGhpcy5fcmVwZWF0PDA/dDoodC10aGlzLl9yZXBlYXQqdGhpcy5fckRlbGF5KS8odGhpcy5fcmVwZWF0KzEpKSk6dGhpcy5fdER1cn0sSXQudG90YWxUaW1lPWZ1bmN0aW9uIHRvdGFsVGltZSh0LGUpe2lmKFN0KCksIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX3RUaW1lO3ZhciByPXRoaXMuX2RwO2lmKHImJnIuc21vb3RoQ2hpbGRUaW1pbmcmJnRoaXMuX3RzKXtmb3IoQmEodGhpcyx0KSwhci5fZHB8fHIucGFyZW50fHxDYShyLHRoaXMpO3ImJnIucGFyZW50OylyLnBhcmVudC5fdGltZSE9PXIuX3N0YXJ0KygwPD1yLl90cz9yLl90VGltZS9yLl90czooci50b3RhbER1cmF0aW9uKCktci5fdFRpbWUpLy1yLl90cykmJnIudG90YWxUaW1lKHIuX3RUaW1lLCEwKSxyPXIucGFyZW50OyF0aGlzLnBhcmVudCYmdGhpcy5fZHAuYXV0b1JlbW92ZUNoaWxkcmVuJiYoMDx0aGlzLl90cyYmdDx0aGlzLl90RHVyfHx0aGlzLl90czwwJiYwPHR8fCF0aGlzLl90RHVyJiYhdCkmJkRhKHRoaXMuX2RwLHRoaXMsdGhpcy5fc3RhcnQtdGhpcy5fZGVsYXkpfXJldHVybih0aGlzLl90VGltZSE9PXR8fCF0aGlzLl9kdXImJiFlfHx0aGlzLl9pbml0dGVkJiZNYXRoLmFicyh0aGlzLl96VGltZSk9PT1WfHwhdCYmIXRoaXMuX2luaXR0ZWQmJih0aGlzLmFkZHx8dGhpcy5fcHRMb29rdXApKSYmKHRoaXMuX3RzfHwodGhpcy5fcFRpbWU9dCksaGEodGhpcyx0LGUpKSx0aGlzfSxJdC50aW1lPWZ1bmN0aW9uIHRpbWUodCxlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLnRvdGFsVGltZShNYXRoLm1pbih0aGlzLnRvdGFsRHVyYXRpb24oKSx0K3hhKHRoaXMpKSUodGhpcy5fZHVyK3RoaXMuX3JEZWxheSl8fCh0P3RoaXMuX2R1cjowKSxlKTp0aGlzLl90aW1lfSxJdC50b3RhbFByb2dyZXNzPWZ1bmN0aW9uIHRvdGFsUHJvZ3Jlc3ModCxlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLnRvdGFsVGltZSh0aGlzLnRvdGFsRHVyYXRpb24oKSp0LGUpOnRoaXMudG90YWxEdXJhdGlvbigpP01hdGgubWluKDEsdGhpcy5fdFRpbWUvdGhpcy5fdER1cik6dGhpcy5yYXRpb30sSXQucHJvZ3Jlc3M9ZnVuY3Rpb24gcHJvZ3Jlc3ModCxlKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkqKCF0aGlzLl95b3lvfHwxJnRoaXMuaXRlcmF0aW9uKCk/dDoxLXQpK3hhKHRoaXMpLGUpOnRoaXMuZHVyYXRpb24oKT9NYXRoLm1pbigxLHRoaXMuX3RpbWUvdGhpcy5fZHVyKTp0aGlzLnJhdGlvfSxJdC5pdGVyYXRpb249ZnVuY3Rpb24gaXRlcmF0aW9uKHQsZSl7dmFyIHI9dGhpcy5kdXJhdGlvbigpK3RoaXMuX3JEZWxheTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLnRvdGFsVGltZSh0aGlzLl90aW1lKyh0LTEpKnIsZSk6dGhpcy5fcmVwZWF0P2d0KHRoaXMuX3RUaW1lLHIpKzE6MX0sSXQudGltZVNjYWxlPWZ1bmN0aW9uIHRpbWVTY2FsZSh0KXtpZighYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gdGhpcy5fcnRzPT09LVY/MDp0aGlzLl9ydHM7aWYodGhpcy5fcnRzPT09dClyZXR1cm4gdGhpczt2YXIgZT10aGlzLnBhcmVudCYmdGhpcy5fdHM/emEodGhpcy5wYXJlbnQuX3RpbWUsdGhpcyk6dGhpcy5fdFRpbWU7cmV0dXJuIHRoaXMuX3J0cz0rdHx8MCx0aGlzLl90cz10aGlzLl9wc3x8dD09PS1WPzA6dGhpcy5fcnRzLHRoaXMudG90YWxUaW1lKGJ0KC10aGlzLl9kZWxheSx0aGlzLl90RHVyLGUpLCEwKSxBYSh0aGlzKSxmdW5jdGlvbiBfcmVjYWNoZUFuY2VzdG9ycyh0KXtmb3IodmFyIGU9dC5wYXJlbnQ7ZSYmZS5wYXJlbnQ7KWUuX2RpcnR5PTEsZS50b3RhbER1cmF0aW9uKCksZT1lLnBhcmVudDtyZXR1cm4gdH0odGhpcyl9LEl0LnBhdXNlZD1mdW5jdGlvbiBwYXVzZWQodCl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX3BzIT09dCYmKCh0aGlzLl9wcz10KT8odGhpcy5fcFRpbWU9dGhpcy5fdFRpbWV8fE1hdGgubWF4KC10aGlzLl9kZWxheSx0aGlzLnJhd1RpbWUoKSksdGhpcy5fdHM9dGhpcy5fYWN0PTApOihTdCgpLHRoaXMuX3RzPXRoaXMuX3J0cyx0aGlzLnRvdGFsVGltZSh0aGlzLnBhcmVudCYmIXRoaXMucGFyZW50LnNtb290aENoaWxkVGltaW5nP3RoaXMucmF3VGltZSgpOnRoaXMuX3RUaW1lfHx0aGlzLl9wVGltZSwxPT09dGhpcy5wcm9ncmVzcygpJiZNYXRoLmFicyh0aGlzLl96VGltZSkhPT1WJiYodGhpcy5fdFRpbWUtPVYpKSkpLHRoaXMpOnRoaXMuX3BzfSxJdC5zdGFydFRpbWU9ZnVuY3Rpb24gc3RhcnRUaW1lKHQpe2lmKGFyZ3VtZW50cy5sZW5ndGgpe3RoaXMuX3N0YXJ0PXQ7dmFyIGU9dGhpcy5wYXJlbnR8fHRoaXMuX2RwO3JldHVybiFlfHwhZS5fc29ydCYmdGhpcy5wYXJlbnR8fERhKGUsdGhpcyx0LXRoaXMuX2RlbGF5KSx0aGlzfXJldHVybiB0aGlzLl9zdGFydH0sSXQuZW5kVGltZT1mdW5jdGlvbiBlbmRUaW1lKGUpe3JldHVybiB0aGlzLl9zdGFydCsodChlKT90aGlzLnRvdGFsRHVyYXRpb24oKTp0aGlzLmR1cmF0aW9uKCkpL01hdGguYWJzKHRoaXMuX3RzfHwxKX0sSXQucmF3VGltZT1mdW5jdGlvbiByYXdUaW1lKHQpe3ZhciBlPXRoaXMucGFyZW50fHx0aGlzLl9kcDtyZXR1cm4gZT90JiYoIXRoaXMuX3RzfHx0aGlzLl9yZXBlYXQmJnRoaXMuX3RpbWUmJnRoaXMudG90YWxQcm9ncmVzcygpPDEpP3RoaXMuX3RUaW1lJSh0aGlzLl9kdXIrdGhpcy5fckRlbGF5KTp0aGlzLl90cz96YShlLnJhd1RpbWUodCksdGhpcyk6dGhpcy5fdFRpbWU6dGhpcy5fdFRpbWV9LEl0Lmdsb2JhbFRpbWU9ZnVuY3Rpb24gZ2xvYmFsVGltZSh0KXtmb3IodmFyIGU9dGhpcyxyPWFyZ3VtZW50cy5sZW5ndGg/dDplLnJhd1RpbWUoKTtlOylyPWUuX3N0YXJ0K3IvKGUuX3RzfHwxKSxlPWUuX2RwO3JldHVybiByfSxJdC5yZXBlYXQ9ZnVuY3Rpb24gcmVwZWF0KHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9yZXBlYXQ9dD09PTEvMD8tMjp0LExhKHRoaXMpKTotMj09PXRoaXMuX3JlcGVhdD8xLzA6dGhpcy5fcmVwZWF0fSxJdC5yZXBlYXREZWxheT1mdW5jdGlvbiByZXBlYXREZWxheSh0KXtpZihhcmd1bWVudHMubGVuZ3RoKXt2YXIgZT10aGlzLl90aW1lO3JldHVybiB0aGlzLl9yRGVsYXk9dCxMYSh0aGlzKSxlP3RoaXMudGltZShlKTp0aGlzfXJldHVybiB0aGlzLl9yRGVsYXl9LEl0LnlveW89ZnVuY3Rpb24geW95byh0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odGhpcy5feW95bz10LHRoaXMpOnRoaXMuX3lveW99LEl0LnNlZWs9ZnVuY3Rpb24gc2VlayhlLHIpe3JldHVybiB0aGlzLnRvdGFsVGltZShUdCh0aGlzLGUpLHQocikpfSxJdC5yZXN0YXJ0PWZ1bmN0aW9uIHJlc3RhcnQoZSxyKXtyZXR1cm4gdGhpcy5wbGF5KCkudG90YWxUaW1lKGU/LXRoaXMuX2RlbGF5OjAsdChyKSl9LEl0LnBsYXk9ZnVuY3Rpb24gcGxheSh0LGUpe3JldHVybiBudWxsIT10JiZ0aGlzLnNlZWsodCxlKSx0aGlzLnJldmVyc2VkKCExKS5wYXVzZWQoITEpfSxJdC5yZXZlcnNlPWZ1bmN0aW9uIHJldmVyc2UodCxlKXtyZXR1cm4gbnVsbCE9dCYmdGhpcy5zZWVrKHR8fHRoaXMudG90YWxEdXJhdGlvbigpLGUpLHRoaXMucmV2ZXJzZWQoITApLnBhdXNlZCghMSl9LEl0LnBhdXNlPWZ1bmN0aW9uIHBhdXNlKHQsZSl7cmV0dXJuIG51bGwhPXQmJnRoaXMuc2Vlayh0LGUpLHRoaXMucGF1c2VkKCEwKX0sSXQucmVzdW1lPWZ1bmN0aW9uIHJlc3VtZSgpe3JldHVybiB0aGlzLnBhdXNlZCghMSl9LEl0LnJldmVyc2VkPWZ1bmN0aW9uIHJldmVyc2VkKHQpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyghIXQhPT10aGlzLnJldmVyc2VkKCkmJnRoaXMudGltZVNjYWxlKC10aGlzLl9ydHN8fCh0Py1WOjApKSx0aGlzKTp0aGlzLl9ydHM8MH0sSXQuaW52YWxpZGF0ZT1mdW5jdGlvbiBpbnZhbGlkYXRlKCl7cmV0dXJuIHRoaXMuX2luaXR0ZWQ9dGhpcy5fYWN0PTAsdGhpcy5felRpbWU9LVYsdGhpc30sSXQuaXNBY3RpdmU9ZnVuY3Rpb24gaXNBY3RpdmUoKXt2YXIgdCxlPXRoaXMucGFyZW50fHx0aGlzLl9kcCxyPXRoaXMuX3N0YXJ0O3JldHVybiEoZSYmISh0aGlzLl90cyYmdGhpcy5faW5pdHRlZCYmZS5pc0FjdGl2ZSgpJiYodD1lLnJhd1RpbWUoITApKT49ciYmdDx0aGlzLmVuZFRpbWUoITApLVYpKX0sSXQuZXZlbnRDYWxsYmFjaz1mdW5jdGlvbiBldmVudENhbGxiYWNrKHQsZSxyKXt2YXIgaT10aGlzLnZhcnM7cmV0dXJuIDE8YXJndW1lbnRzLmxlbmd0aD8oZT8oaVt0XT1lLHImJihpW3QrXCJQYXJhbXNcIl09ciksXCJvblVwZGF0ZVwiPT09dCYmKHRoaXMuX29uVXBkYXRlPWUpKTpkZWxldGUgaVt0XSx0aGlzKTppW3RdfSxJdC50aGVuPWZ1bmN0aW9uIHRoZW4odCl7dmFyIGk9dGhpcztyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24oZSl7ZnVuY3Rpb24gVW4oKXt2YXIgdD1pLnRoZW47aS50aGVuPW51bGwscChyKSYmKHI9cihpKSkmJihyLnRoZW58fHI9PT1pKSYmKGkudGhlbj10KSxlKHIpLGkudGhlbj10fXZhciByPXAodCk/dDpqYTtpLl9pbml0dGVkJiYxPT09aS50b3RhbFByb2dyZXNzKCkmJjA8PWkuX3RzfHwhaS5fdFRpbWUmJmkuX3RzPDA/VW4oKTppLl9wcm9tPVVufSl9LEl0LmtpbGw9ZnVuY3Rpb24ga2lsbCgpe21iKHRoaXMpfSxBbmltYXRpb24pO2Z1bmN0aW9uIEFuaW1hdGlvbih0KXt0aGlzLnZhcnM9dCx0aGlzLl9kZWxheT0rdC5kZWxheXx8MCwodGhpcy5fcmVwZWF0PXQucmVwZWF0PT09MS8wPy0yOnQucmVwZWF0fHwwKSYmKHRoaXMuX3JEZWxheT10LnJlcGVhdERlbGF5fHwwLHRoaXMuX3lveW89ISF0LnlveW98fCEhdC55b3lvRWFzZSksdGhpcy5fdHM9MSxLYSh0aGlzLCt0LmR1cmF0aW9uLDEsMSksdGhpcy5kYXRhPXQuZGF0YSxjfHxEdC53YWtlKCl9a2EoTnQucHJvdG90eXBlLHtfdGltZTowLF9zdGFydDowLF9lbmQ6MCxfdFRpbWU6MCxfdER1cjowLF9kaXJ0eTowLF9yZXBlYXQ6MCxfeW95bzohMSxwYXJlbnQ6bnVsbCxfaW5pdHRlZDohMSxfckRlbGF5OjAsX3RzOjEsX2RwOjAscmF0aW86MCxfelRpbWU6LVYsX3Byb206MCxfcHM6ITEsX3J0czoxfSk7dmFyIFV0PWZ1bmN0aW9uKG4pe2Z1bmN0aW9uIFRpbWVsaW5lKGUscil7dmFyIGk7cmV0dXJuIHZvaWQgMD09PWUmJihlPXt9KSwoaT1uLmNhbGwodGhpcyxlKXx8dGhpcykubGFiZWxzPXt9LGkuc21vb3RoQ2hpbGRUaW1pbmc9ISFlLnNtb290aENoaWxkVGltaW5nLGkuYXV0b1JlbW92ZUNoaWxkcmVuPSEhZS5hdXRvUmVtb3ZlQ2hpbGRyZW4saS5fc29ydD10KGUuc29ydENoaWxkcmVuKSxJJiZEYShlLnBhcmVudHx8SSxfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGkpLHIpLGUucmV2ZXJzZWQmJmkucmV2ZXJzZSgpLGUucGF1c2VkJiZpLnBhdXNlZCghMCksZS5zY3JvbGxUcmlnZ2VyJiZFYShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGkpLGUuc2Nyb2xsVHJpZ2dlciksaX1faW5oZXJpdHNMb29zZShUaW1lbGluZSxuKTt2YXIgZT1UaW1lbGluZS5wcm90b3R5cGU7cmV0dXJuIGUudG89ZnVuY3Rpb24gdG8odCxlLHIpe3JldHVybiBPYSgwLGFyZ3VtZW50cyx0aGlzKSx0aGlzfSxlLmZyb209ZnVuY3Rpb24gZnJvbSh0LGUscil7cmV0dXJuIE9hKDEsYXJndW1lbnRzLHRoaXMpLHRoaXN9LGUuZnJvbVRvPWZ1bmN0aW9uIGZyb21Ubyh0LGUscixpKXtyZXR1cm4gT2EoMixhcmd1bWVudHMsdGhpcyksdGhpc30sZS5zZXQ9ZnVuY3Rpb24gc2V0KHQsZSxyKXtyZXR1cm4gZS5kdXJhdGlvbj0wLGUucGFyZW50PXRoaXMscGEoZSkucmVwZWF0RGVsYXl8fChlLnJlcGVhdD0wKSxlLmltbWVkaWF0ZVJlbmRlcj0hIWUuaW1tZWRpYXRlUmVuZGVyLG5ldyAkdCh0LGUsVHQodGhpcyxyKSwxKSx0aGlzfSxlLmNhbGw9ZnVuY3Rpb24gY2FsbCh0LGUscil7cmV0dXJuIERhKHRoaXMsJHQuZGVsYXllZENhbGwoMCx0LGUpLHIpfSxlLnN0YWdnZXJUbz1mdW5jdGlvbiBzdGFnZ2VyVG8odCxlLHIsaSxuLGEscyl7cmV0dXJuIHIuZHVyYXRpb249ZSxyLnN0YWdnZXI9ci5zdGFnZ2VyfHxpLHIub25Db21wbGV0ZT1hLHIub25Db21wbGV0ZVBhcmFtcz1zLHIucGFyZW50PXRoaXMsbmV3ICR0KHQscixUdCh0aGlzLG4pKSx0aGlzfSxlLnN0YWdnZXJGcm9tPWZ1bmN0aW9uIHN0YWdnZXJGcm9tKGUscixpLG4sYSxzLG8pe3JldHVybiBpLnJ1bkJhY2t3YXJkcz0xLHBhKGkpLmltbWVkaWF0ZVJlbmRlcj10KGkuaW1tZWRpYXRlUmVuZGVyKSx0aGlzLnN0YWdnZXJUbyhlLHIsaSxuLGEscyxvKX0sZS5zdGFnZ2VyRnJvbVRvPWZ1bmN0aW9uIHN0YWdnZXJGcm9tVG8oZSxyLGksbixhLHMsbyx1KXtyZXR1cm4gbi5zdGFydEF0PWkscGEobikuaW1tZWRpYXRlUmVuZGVyPXQobi5pbW1lZGlhdGVSZW5kZXIpLHRoaXMuc3RhZ2dlclRvKGUscixuLGEscyxvLHUpfSxlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodCxlLHIpe3ZhciBpLG4sYSxzLG8sdSxoLGwsZixkLF8scCxjPXRoaXMuX3RpbWUsbT10aGlzLl9kaXJ0eT90aGlzLnRvdGFsRHVyYXRpb24oKTp0aGlzLl90RHVyLGc9dGhpcy5fZHVyLHY9dDw9MD8wOmRhKHQpLHk9dGhpcy5felRpbWU8MCE9dDwwJiYodGhpcy5faW5pdHRlZHx8IWcpO2lmKHRoaXMhPT1JJiZtPHYmJjA8PXQmJih2PW0pLHYhPT10aGlzLl90VGltZXx8cnx8eSl7aWYoYyE9PXRoaXMuX3RpbWUmJmcmJih2Kz10aGlzLl90aW1lLWMsdCs9dGhpcy5fdGltZS1jKSxpPXYsZj10aGlzLl9zdGFydCx1PSEobD10aGlzLl90cykseSYmKGd8fChjPXRoaXMuX3pUaW1lKSwhdCYmZXx8KHRoaXMuX3pUaW1lPXQpKSx0aGlzLl9yZXBlYXQpe2lmKF89dGhpcy5feW95byxvPWcrdGhpcy5fckRlbGF5LHRoaXMuX3JlcGVhdDwtMSYmdDwwKXJldHVybiB0aGlzLnRvdGFsVGltZSgxMDAqbyt0LGUscik7aWYoaT1kYSh2JW8pLHY9PT1tPyhzPXRoaXMuX3JlcGVhdCxpPWcpOigocz1+fih2L28pKSYmcz09PXYvbyYmKGk9ZyxzLS0pLGc8aSYmKGk9ZykpLGQ9Z3QodGhpcy5fdFRpbWUsbyksIWMmJnRoaXMuX3RUaW1lJiZkIT09cyYmKGQ9cyksXyYmMSZzJiYoaT1nLWkscD0xKSxzIT09ZCYmIXRoaXMuX2xvY2spe3ZhciBUPV8mJjEmZCxiPVQ9PT0oXyYmMSZzKTtpZihzPGQmJihUPSFUKSxjPVQ/MDpnLHRoaXMuX2xvY2s9MSx0aGlzLnJlbmRlcihjfHwocD8wOmRhKHMqbykpLGUsIWcpLl9sb2NrPTAsdGhpcy5fdFRpbWU9diwhZSYmdGhpcy5wYXJlbnQmJk90KHRoaXMsXCJvblJlcGVhdFwiKSx0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCYmIXAmJih0aGlzLmludmFsaWRhdGUoKS5fbG9jaz0xKSxjJiZjIT09dGhpcy5fdGltZXx8dSE9IXRoaXMuX3RzfHx0aGlzLnZhcnMub25SZXBlYXQmJiF0aGlzLnBhcmVudCYmIXRoaXMuX2FjdClyZXR1cm4gdGhpcztpZihnPXRoaXMuX2R1cixtPXRoaXMuX3REdXIsYiYmKHRoaXMuX2xvY2s9MixjPVQ/ZzotMWUtNCx0aGlzLnJlbmRlcihjLCEwKSx0aGlzLnZhcnMucmVwZWF0UmVmcmVzaCYmIXAmJnRoaXMuaW52YWxpZGF0ZSgpKSx0aGlzLl9sb2NrPTAsIXRoaXMuX3RzJiYhdSlyZXR1cm4gdGhpcztJYih0aGlzLHApfX1pZih0aGlzLl9oYXNQYXVzZSYmIXRoaXMuX2ZvcmNpbmcmJnRoaXMuX2xvY2s8MiYmKGg9ZnVuY3Rpb24gX2ZpbmROZXh0UGF1c2VUd2Vlbih0LGUscil7dmFyIGk7aWYoZTxyKWZvcihpPXQuX2ZpcnN0O2kmJmkuX3N0YXJ0PD1yOyl7aWYoXCJpc1BhdXNlXCI9PT1pLmRhdGEmJmkuX3N0YXJ0PmUpcmV0dXJuIGk7aT1pLl9uZXh0fWVsc2UgZm9yKGk9dC5fbGFzdDtpJiZpLl9zdGFydD49cjspe2lmKFwiaXNQYXVzZVwiPT09aS5kYXRhJiZpLl9zdGFydDxlKXJldHVybiBpO2k9aS5fcHJldn19KHRoaXMsZGEoYyksZGEoaSkpKSYmKHYtPWktKGk9aC5fc3RhcnQpKSx0aGlzLl90VGltZT12LHRoaXMuX3RpbWU9aSx0aGlzLl9hY3Q9IWwsdGhpcy5faW5pdHRlZHx8KHRoaXMuX29uVXBkYXRlPXRoaXMudmFycy5vblVwZGF0ZSx0aGlzLl9pbml0dGVkPTEsdGhpcy5felRpbWU9dCxjPTApLCFjJiZpJiYhZSYmKE90KHRoaXMsXCJvblN0YXJ0XCIpLHRoaXMuX3RUaW1lIT09dikpcmV0dXJuIHRoaXM7aWYoYzw9aSYmMDw9dClmb3Iobj10aGlzLl9maXJzdDtuOyl7aWYoYT1uLl9uZXh0LChuLl9hY3R8fGk+PW4uX3N0YXJ0KSYmbi5fdHMmJmghPT1uKXtpZihuLnBhcmVudCE9PXRoaXMpcmV0dXJuIHRoaXMucmVuZGVyKHQsZSxyKTtpZihuLnJlbmRlcigwPG4uX3RzPyhpLW4uX3N0YXJ0KSpuLl90czoobi5fZGlydHk/bi50b3RhbER1cmF0aW9uKCk6bi5fdER1cikrKGktbi5fc3RhcnQpKm4uX3RzLGUsciksaSE9PXRoaXMuX3RpbWV8fCF0aGlzLl90cyYmIXUpe2g9MCxhJiYodis9dGhpcy5felRpbWU9LVYpO2JyZWFrfX1uPWF9ZWxzZXtuPXRoaXMuX2xhc3Q7Zm9yKHZhciB3PXQ8MD90Omk7bjspe2lmKGE9bi5fcHJldiwobi5fYWN0fHx3PD1uLl9lbmQpJiZuLl90cyYmaCE9PW4pe2lmKG4ucGFyZW50IT09dGhpcylyZXR1cm4gdGhpcy5yZW5kZXIodCxlLHIpO2lmKG4ucmVuZGVyKDA8bi5fdHM/KHctbi5fc3RhcnQpKm4uX3RzOihuLl9kaXJ0eT9uLnRvdGFsRHVyYXRpb24oKTpuLl90RHVyKSsody1uLl9zdGFydCkqbi5fdHMsZSxyKSxpIT09dGhpcy5fdGltZXx8IXRoaXMuX3RzJiYhdSl7aD0wLGEmJih2Kz10aGlzLl96VGltZT13Py1WOlYpO2JyZWFrfX1uPWF9fWlmKGgmJiFlJiYodGhpcy5wYXVzZSgpLGgucmVuZGVyKGM8PWk/MDotVikuX3pUaW1lPWM8PWk/MTotMSx0aGlzLl90cykpcmV0dXJuIHRoaXMuX3N0YXJ0PWYsQWEodGhpcyksdGhpcy5yZW5kZXIodCxlLHIpO3RoaXMuX29uVXBkYXRlJiYhZSYmT3QodGhpcyxcIm9uVXBkYXRlXCIsITApLCh2PT09bSYmdGhpcy5fdFRpbWU+PXRoaXMudG90YWxEdXJhdGlvbigpfHwhdiYmYykmJihmIT09dGhpcy5fc3RhcnQmJk1hdGguYWJzKGwpPT09TWF0aC5hYnModGhpcy5fdHMpfHx0aGlzLl9sb2NrfHwoIXQmJmd8fCEodj09PW0mJjA8dGhpcy5fdHN8fCF2JiZ0aGlzLl90czwwKXx8dGEodGhpcywxKSxlfHx0PDAmJiFjfHwhdiYmIWMmJm18fChPdCh0aGlzLHY9PT1tJiYwPD10P1wib25Db21wbGV0ZVwiOlwib25SZXZlcnNlQ29tcGxldGVcIiwhMCksIXRoaXMuX3Byb218fHY8bSYmMDx0aGlzLnRpbWVTY2FsZSgpfHx0aGlzLl9wcm9tKCkpKSl9cmV0dXJuIHRoaXN9LGUuYWRkPWZ1bmN0aW9uIGFkZCh0LGUpe3ZhciByPXRoaXM7aWYocShlKXx8KGU9VHQodGhpcyxlLHQpKSwhKHQgaW5zdGFuY2VvZiBOdCkpe2lmKEoodCkpcmV0dXJuIHQuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gci5hZGQodCxlKX0pLHRoaXM7aWYobyh0KSlyZXR1cm4gdGhpcy5hZGRMYWJlbCh0LGUpO2lmKCFwKHQpKXJldHVybiB0aGlzO3Q9JHQuZGVsYXllZENhbGwoMCx0KX1yZXR1cm4gdGhpcyE9PXQ/RGEodGhpcyx0LGUpOnRoaXN9LGUuZ2V0Q2hpbGRyZW49ZnVuY3Rpb24gZ2V0Q2hpbGRyZW4odCxlLHIsaSl7dm9pZCAwPT09dCYmKHQ9ITApLHZvaWQgMD09PWUmJihlPSEwKSx2b2lkIDA9PT1yJiYocj0hMCksdm9pZCAwPT09aSYmKGk9LVkpO2Zvcih2YXIgbj1bXSxhPXRoaXMuX2ZpcnN0O2E7KWEuX3N0YXJ0Pj1pJiYoYSBpbnN0YW5jZW9mICR0P2UmJm4ucHVzaChhKToociYmbi5wdXNoKGEpLHQmJm4ucHVzaC5hcHBseShuLGEuZ2V0Q2hpbGRyZW4oITAsZSxyKSkpKSxhPWEuX25leHQ7cmV0dXJuIG59LGUuZ2V0QnlJZD1mdW5jdGlvbiBnZXRCeUlkKHQpe2Zvcih2YXIgZT10aGlzLmdldENoaWxkcmVuKDEsMSwxKSxyPWUubGVuZ3RoO3ItLTspaWYoZVtyXS52YXJzLmlkPT09dClyZXR1cm4gZVtyXX0sZS5yZW1vdmU9ZnVuY3Rpb24gcmVtb3ZlKHQpe3JldHVybiBvKHQpP3RoaXMucmVtb3ZlTGFiZWwodCk6cCh0KT90aGlzLmtpbGxUd2VlbnNPZih0KTooc2EodGhpcyx0KSx0PT09dGhpcy5fcmVjZW50JiYodGhpcy5fcmVjZW50PXRoaXMuX2xhc3QpLHVhKHRoaXMpKX0sZS50b3RhbFRpbWU9ZnVuY3Rpb24gdG90YWxUaW1lKHQsZSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX2ZvcmNpbmc9MSwhdGhpcy5fZHAmJnRoaXMuX3RzJiYodGhpcy5fc3RhcnQ9ZGEoRHQudGltZS0oMDx0aGlzLl90cz90L3RoaXMuX3RzOih0aGlzLnRvdGFsRHVyYXRpb24oKS10KS8tdGhpcy5fdHMpKSksbi5wcm90b3R5cGUudG90YWxUaW1lLmNhbGwodGhpcyx0LGUpLHRoaXMuX2ZvcmNpbmc9MCx0aGlzKTp0aGlzLl90VGltZX0sZS5hZGRMYWJlbD1mdW5jdGlvbiBhZGRMYWJlbCh0LGUpe3JldHVybiB0aGlzLmxhYmVsc1t0XT1UdCh0aGlzLGUpLHRoaXN9LGUucmVtb3ZlTGFiZWw9ZnVuY3Rpb24gcmVtb3ZlTGFiZWwodCl7cmV0dXJuIGRlbGV0ZSB0aGlzLmxhYmVsc1t0XSx0aGlzfSxlLmFkZFBhdXNlPWZ1bmN0aW9uIGFkZFBhdXNlKHQsZSxyKXt2YXIgaT0kdC5kZWxheWVkQ2FsbCgwLGV8fFEscik7cmV0dXJuIGkuZGF0YT1cImlzUGF1c2VcIix0aGlzLl9oYXNQYXVzZT0xLERhKHRoaXMsaSxUdCh0aGlzLHQpKX0sZS5yZW1vdmVQYXVzZT1mdW5jdGlvbiByZW1vdmVQYXVzZSh0KXt2YXIgZT10aGlzLl9maXJzdDtmb3IodD1UdCh0aGlzLHQpO2U7KWUuX3N0YXJ0PT09dCYmXCJpc1BhdXNlXCI9PT1lLmRhdGEmJnRhKGUpLGU9ZS5fbmV4dH0sZS5raWxsVHdlZW5zT2Y9ZnVuY3Rpb24ga2lsbFR3ZWVuc09mKHQsZSxyKXtmb3IodmFyIGk9dGhpcy5nZXRUd2VlbnNPZih0LHIpLG49aS5sZW5ndGg7bi0tOylZdCE9PWlbbl0mJmlbbl0ua2lsbCh0LGUpO3JldHVybiB0aGlzfSxlLmdldFR3ZWVuc09mPWZ1bmN0aW9uIGdldFR3ZWVuc09mKHQsZSl7Zm9yKHZhciByLGk9W10sbj14dCh0KSxhPXRoaXMuX2ZpcnN0LHM9cShlKTthOylhIGluc3RhbmNlb2YgJHQ/ZmEoYS5fdGFyZ2V0cyxuKSYmKHM/KCFZdHx8YS5faW5pdHRlZCYmYS5fdHMpJiZhLmdsb2JhbFRpbWUoMCk8PWUmJmEuZ2xvYmFsVGltZShhLnRvdGFsRHVyYXRpb24oKSk+ZTohZXx8YS5pc0FjdGl2ZSgpKSYmaS5wdXNoKGEpOihyPWEuZ2V0VHdlZW5zT2YobixlKSkubGVuZ3RoJiZpLnB1c2guYXBwbHkoaSxyKSxhPWEuX25leHQ7cmV0dXJuIGl9LGUudHdlZW5Ubz1mdW5jdGlvbiB0d2VlblRvKHQsZSl7ZT1lfHx7fTt2YXIgcixpPXRoaXMsbj1UdChpLHQpLGE9ZS5zdGFydEF0LHM9ZS5vblN0YXJ0LG89ZS5vblN0YXJ0UGFyYW1zLHU9ZS5pbW1lZGlhdGVSZW5kZXIsaD0kdC50byhpLGthKHtlYXNlOmUuZWFzZXx8XCJub25lXCIsbGF6eTohMSxpbW1lZGlhdGVSZW5kZXI6ITEsdGltZTpuLG92ZXJ3cml0ZTpcImF1dG9cIixkdXJhdGlvbjplLmR1cmF0aW9ufHxNYXRoLmFicygobi0oYSYmXCJ0aW1lXCJpbiBhP2EudGltZTppLl90aW1lKSkvaS50aW1lU2NhbGUoKSl8fFYsb25TdGFydDpmdW5jdGlvbiBvblN0YXJ0KCl7aWYoaS5wYXVzZSgpLCFyKXt2YXIgdD1lLmR1cmF0aW9ufHxNYXRoLmFicygobi0oYSYmXCJ0aW1lXCJpbiBhP2EudGltZTppLl90aW1lKSkvaS50aW1lU2NhbGUoKSk7aC5fZHVyIT09dCYmS2EoaCx0LDAsMSkucmVuZGVyKGguX3RpbWUsITAsITApLHI9MX1zJiZzLmFwcGx5KGgsb3x8W10pfX0sZSkpO3JldHVybiB1P2gucmVuZGVyKDApOmh9LGUudHdlZW5Gcm9tVG89ZnVuY3Rpb24gdHdlZW5Gcm9tVG8odCxlLHIpe3JldHVybiB0aGlzLnR3ZWVuVG8oZSxrYSh7c3RhcnRBdDp7dGltZTpUdCh0aGlzLHQpfX0scikpfSxlLnJlY2VudD1mdW5jdGlvbiByZWNlbnQoKXtyZXR1cm4gdGhpcy5fcmVjZW50fSxlLm5leHRMYWJlbD1mdW5jdGlvbiBuZXh0TGFiZWwodCl7cmV0dXJuIHZvaWQgMD09PXQmJih0PXRoaXMuX3RpbWUpLGtiKHRoaXMsVHQodGhpcyx0KSl9LGUucHJldmlvdXNMYWJlbD1mdW5jdGlvbiBwcmV2aW91c0xhYmVsKHQpe3JldHVybiB2b2lkIDA9PT10JiYodD10aGlzLl90aW1lKSxrYih0aGlzLFR0KHRoaXMsdCksMSl9LGUuY3VycmVudExhYmVsPWZ1bmN0aW9uIGN1cnJlbnRMYWJlbCh0KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLnNlZWsodCwhMCk6dGhpcy5wcmV2aW91c0xhYmVsKHRoaXMuX3RpbWUrVil9LGUuc2hpZnRDaGlsZHJlbj1mdW5jdGlvbiBzaGlmdENoaWxkcmVuKHQsZSxyKXt2b2lkIDA9PT1yJiYocj0wKTtmb3IodmFyIGksbj10aGlzLl9maXJzdCxhPXRoaXMubGFiZWxzO247KW4uX3N0YXJ0Pj1yJiYobi5fc3RhcnQrPXQsbi5fZW5kKz10KSxuPW4uX25leHQ7aWYoZSlmb3IoaSBpbiBhKWFbaV0+PXImJihhW2ldKz10KTtyZXR1cm4gdWEodGhpcyl9LGUuaW52YWxpZGF0ZT1mdW5jdGlvbiBpbnZhbGlkYXRlKCl7dmFyIHQ9dGhpcy5fZmlyc3Q7Zm9yKHRoaXMuX2xvY2s9MDt0Oyl0LmludmFsaWRhdGUoKSx0PXQuX25leHQ7cmV0dXJuIG4ucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKX0sZS5jbGVhcj1mdW5jdGlvbiBjbGVhcih0KXt2b2lkIDA9PT10JiYodD0hMCk7Zm9yKHZhciBlLHI9dGhpcy5fZmlyc3Q7cjspZT1yLl9uZXh0LHRoaXMucmVtb3ZlKHIpLHI9ZTtyZXR1cm4gdGhpcy5fZHAmJih0aGlzLl90aW1lPXRoaXMuX3RUaW1lPXRoaXMuX3BUaW1lPTApLHQmJih0aGlzLmxhYmVscz17fSksdWEodGhpcyl9LGUudG90YWxEdXJhdGlvbj1mdW5jdGlvbiB0b3RhbER1cmF0aW9uKHQpe3ZhciBlLHIsaSxuPTAsYT10aGlzLHM9YS5fbGFzdCxvPVk7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gYS50aW1lU2NhbGUoKGEuX3JlcGVhdDwwP2EuZHVyYXRpb24oKTphLnRvdGFsRHVyYXRpb24oKSkvKGEucmV2ZXJzZWQoKT8tdDp0KSk7aWYoYS5fZGlydHkpe2ZvcihpPWEucGFyZW50O3M7KWU9cy5fcHJldixzLl9kaXJ0eSYmcy50b3RhbER1cmF0aW9uKCksbzwocj1zLl9zdGFydCkmJmEuX3NvcnQmJnMuX3RzJiYhYS5fbG9jaz8oYS5fbG9jaz0xLERhKGEscyxyLXMuX2RlbGF5LDEpLl9sb2NrPTApOm89cixyPDAmJnMuX3RzJiYobi09ciwoIWkmJiFhLl9kcHx8aSYmaS5zbW9vdGhDaGlsZFRpbWluZykmJihhLl9zdGFydCs9ci9hLl90cyxhLl90aW1lLT1yLGEuX3RUaW1lLT1yKSxhLnNoaWZ0Q2hpbGRyZW4oLXIsITEsLUluZmluaXR5KSxvPTApLHMuX2VuZD5uJiZzLl90cyYmKG49cy5fZW5kKSxzPWU7S2EoYSxhPT09SSYmYS5fdGltZT5uP2EuX3RpbWU6biwxLDEpLGEuX2RpcnR5PTB9cmV0dXJuIGEuX3REdXJ9LFRpbWVsaW5lLnVwZGF0ZVJvb3Q9ZnVuY3Rpb24gdXBkYXRlUm9vdCh0KXtpZihJLl90cyYmKGhhKEksemEodCxJKSksZj1EdC5mcmFtZSksRHQuZnJhbWU+PV90KXtfdCs9VS5hdXRvU2xlZXB8fDEyMDt2YXIgZT1JLl9maXJzdDtpZigoIWV8fCFlLl90cykmJlUuYXV0b1NsZWVwJiZEdC5fbGlzdGVuZXJzLmxlbmd0aDwyKXtmb3IoO2UmJiFlLl90czspZT1lLl9uZXh0O2V8fER0LnNsZWVwKCl9fX0sVGltZWxpbmV9KE50KTtrYShVdC5wcm90b3R5cGUse19sb2NrOjAsX2hhc1BhdXNlOjAsX2ZvcmNpbmc6MH0pO2Z1bmN0aW9uIFViKHQsZSxyLGksbixhKXt2YXIgdSxoLGwsZjtpZihmdFt0XSYmITEhPT0odT1uZXcgZnRbdF0pLmluaXQobix1LnJhd1ZhcnM/ZVt0XTpmdW5jdGlvbiBfcHJvY2Vzc1ZhcnModCxlLHIsaSxuKXtpZihwKHQpJiYodD1RdCh0LG4sZSxyLGkpKSwhcyh0KXx8dC5zdHlsZSYmdC5ub2RlVHlwZXx8Sih0KXx8SCh0KSlyZXR1cm4gbyh0KT9RdCh0LG4sZSxyLGkpOnQ7dmFyIGEsdT17fTtmb3IoYSBpbiB0KXVbYV09UXQodFthXSxuLGUscixpKTtyZXR1cm4gdX0oZVt0XSxpLG4sYSxyKSxyLGksYSkmJihyLl9wdD1oPW5ldyBvZShyLl9wdCxuLHQsMCwxLHUucmVuZGVyLHUsMCx1LnByaW9yaXR5KSxyIT09ZCkpZm9yKGw9ci5fcHRMb29rdXBbci5fdGFyZ2V0cy5pbmRleE9mKG4pXSxmPXUuX3Byb3BzLmxlbmd0aDtmLS07KWxbdS5fcHJvcHNbZl1dPWg7cmV0dXJuIHV9ZnVuY3Rpb24gJGIodCxyLGUsaSl7dmFyIG4sYSxzPXIuZWFzZXx8aXx8XCJwb3dlcjEuaW5PdXRcIjtpZihKKHIpKWE9ZVt0XXx8KGVbdF09W10pLHIuZm9yRWFjaChmdW5jdGlvbih0LGUpe3JldHVybiBhLnB1c2goe3Q6ZS8oci5sZW5ndGgtMSkqMTAwLHY6dCxlOnN9KX0pO2Vsc2UgZm9yKG4gaW4gcilhPWVbbl18fChlW25dPVtdKSxcImVhc2VcIj09PW58fGEucHVzaCh7dDpwYXJzZUZsb2F0KHQpLHY6cltuXSxlOnN9KX12YXIgWXQscXQsVnQ9ZnVuY3Rpb24gX2FkZFByb3BUd2Vlbih0LGUscixpLG4sYSxzLHUsaCl7cChpKSYmKGk9aShufHwwLHQsYSkpO3ZhciBsLGY9dFtlXSxkPVwiZ2V0XCIhPT1yP3I6cChmKT9oP3RbZS5pbmRleE9mKFwic2V0XCIpfHwhcCh0W1wiZ2V0XCIrZS5zdWJzdHIoMyldKT9lOlwiZ2V0XCIrZS5zdWJzdHIoMyldKGgpOnRbZV0oKTpmLF89cChmKT9oP1p0Old0Okd0O2lmKG8oaSkmJih+aS5pbmRleE9mKFwicmFuZG9tKFwiKSYmKGk9aGIoaSkpLFwiPVwiPT09aS5jaGFyQXQoMSkmJighKGw9ZWEoZCxpKSsoUmEoZCl8fDApKSYmMCE9PWx8fChpPWwpKSksZCE9PWl8fHF0KXJldHVybiBpc05hTihkKmkpfHxcIlwiPT09aT8oZnx8ZSBpbiB0fHxOKGUsaSksZnVuY3Rpb24gX2FkZENvbXBsZXhTdHJpbmdQcm9wVHdlZW4odCxlLHIsaSxuLGEscyl7dmFyIG8sdSxoLGwsZixkLF8scCxjPW5ldyBvZSh0aGlzLl9wdCx0LGUsMCwxLGVlLG51bGwsbiksbT0wLGc9MDtmb3IoYy5iPXIsYy5lPWkscis9XCJcIiwoXz1+KGkrPVwiXCIpLmluZGV4T2YoXCJyYW5kb20oXCIpKSYmKGk9aGIoaSkpLGEmJihhKHA9W3IsaV0sdCxlKSxyPXBbMF0saT1wWzFdKSx1PXIubWF0Y2goaXQpfHxbXTtvPWl0LmV4ZWMoaSk7KWw9b1swXSxmPWkuc3Vic3RyaW5nKG0sby5pbmRleCksaD9oPShoKzEpJTU6XCJyZ2JhKFwiPT09Zi5zdWJzdHIoLTUpJiYoaD0xKSxsIT09dVtnKytdJiYoZD1wYXJzZUZsb2F0KHVbZy0xXSl8fDAsYy5fcHQ9e19uZXh0OmMuX3B0LHA6Znx8MT09PWc/ZjpcIixcIixzOmQsYzpcIj1cIj09PWwuY2hhckF0KDEpP2VhKGQsbCktZDpwYXJzZUZsb2F0KGwpLWQsbTpoJiZoPDQ/TWF0aC5yb3VuZDowfSxtPWl0Lmxhc3RJbmRleCk7cmV0dXJuIGMuYz1tPGkubGVuZ3RoP2kuc3Vic3RyaW5nKG0saS5sZW5ndGgpOlwiXCIsYy5mcD1zLChudC50ZXN0KGkpfHxfKSYmKGMuZT0wKSx0aGlzLl9wdD1jfS5jYWxsKHRoaXMsdCxlLGQsaSxfLHV8fFUuc3RyaW5nRmlsdGVyLGgpKToobD1uZXcgb2UodGhpcy5fcHQsdCxlLCtkfHwwLGktKGR8fDApLFwiYm9vbGVhblwiPT10eXBlb2YgZj90ZTpKdCwwLF8pLGgmJihsLmZwPWgpLHMmJmwubW9kaWZpZXIocyx0aGlzLHQpLHRoaXMuX3B0PWwpfSxYdD1mdW5jdGlvbiBfaW5pdFR3ZWVuKGUscil7dmFyIGksbixhLHMsbyx1LGgsbCxmLGQscCxjLG0sZz1lLnZhcnMsdj1nLmVhc2UseT1nLnN0YXJ0QXQsVD1nLmltbWVkaWF0ZVJlbmRlcixiPWcubGF6eSx3PWcub25VcGRhdGUseD1nLm9uVXBkYXRlUGFyYW1zLGs9Zy5jYWxsYmFja1Njb3BlLE89Zy5ydW5CYWNrd2FyZHMsUD1nLnlveW9FYXNlLE09Zy5rZXlmcmFtZXMsQz1nLmF1dG9SZXZlcnQsQT1lLl9kdXIsRD1lLl9zdGFydEF0LFM9ZS5fdGFyZ2V0cyx6PWUucGFyZW50LFI9eiYmXCJuZXN0ZWRcIj09PXouZGF0YT96LnBhcmVudC5fdGFyZ2V0czpTLEU9XCJhdXRvXCI9PT1lLl9vdmVyd3JpdGUmJiFCLEY9ZS50aW1lbGluZTtpZighRnx8TSYmdnx8KHY9XCJub25lXCIpLGUuX2Vhc2U9QnQodixMLmVhc2UpLGUuX3lFYXNlPVA/RnQoQnQoITA9PT1QP3Y6UCxMLmVhc2UpKTowLFAmJmUuX3lveW8mJiFlLl9yZXBlYXQmJihQPWUuX3lFYXNlLGUuX3lFYXNlPWUuX2Vhc2UsZS5fZWFzZT1QKSxlLl9mcm9tPSFGJiYhIWcucnVuQmFja3dhcmRzLCFGfHxNJiYhZy5zdGFnZ2VyKXtpZihjPShsPVNbMF0/XyhTWzBdKS5oYXJuZXNzOjApJiZnW2wucHJvcF0saT1vYShnLHV0KSxEJiYodGEoRC5yZW5kZXIoLTEsITApKSxELl9sYXp5PTApLHkpaWYodGEoZS5fc3RhcnRBdD0kdC5zZXQoUyxrYSh7ZGF0YTpcImlzU3RhcnRcIixvdmVyd3JpdGU6ITEscGFyZW50OnosaW1tZWRpYXRlUmVuZGVyOiEwLGxhenk6dChiKSxzdGFydEF0Om51bGwsZGVsYXk6MCxvblVwZGF0ZTp3LG9uVXBkYXRlUGFyYW1zOngsY2FsbGJhY2tTY29wZTprLHN0YWdnZXI6MH0seSkpKSxyPDAmJiFUJiYhQyYmZS5fc3RhcnRBdC5yZW5kZXIoLTEsITApLFQpe2lmKDA8ciYmIUMmJihlLl9zdGFydEF0PTApLEEmJnI8PTApcmV0dXJuIHZvaWQociYmKGUuX3pUaW1lPXIpKX1lbHNlITE9PT1DJiYoZS5fc3RhcnRBdD0wKTtlbHNlIGlmKE8mJkEpaWYoRClDfHwoZS5fc3RhcnRBdD0wKTtlbHNlIGlmKHImJihUPSExKSxhPWthKHtvdmVyd3JpdGU6ITEsZGF0YTpcImlzRnJvbVN0YXJ0XCIsbGF6eTpUJiZ0KGIpLGltbWVkaWF0ZVJlbmRlcjpULHN0YWdnZXI6MCxwYXJlbnQ6en0saSksYyYmKGFbbC5wcm9wXT1jKSx0YShlLl9zdGFydEF0PSR0LnNldChTLGEpKSxyPDAmJmUuX3N0YXJ0QXQucmVuZGVyKC0xLCEwKSxlLl96VGltZT1yLFQpe2lmKCFyKXJldHVybn1lbHNlIF9pbml0VHdlZW4oZS5fc3RhcnRBdCxWKTtmb3IoZS5fcHQ9ZS5fcHRDYWNoZT0wLGI9QSYmdChiKXx8YiYmIUEsbj0wO248Uy5sZW5ndGg7bisrKXtpZihoPShvPVNbbl0pLl9nc2FwfHwkKFMpW25dLl9nc2FwLGUuX3B0TG9va3VwW25dPWQ9e30sbHRbaC5pZF0mJmh0Lmxlbmd0aCYmZ2EoKSxwPVI9PT1TP246Ui5pbmRleE9mKG8pLGwmJiExIT09KGY9bmV3IGwpLmluaXQobyxjfHxpLGUscCxSKSYmKGUuX3B0PXM9bmV3IG9lKGUuX3B0LG8sZi5uYW1lLDAsMSxmLnJlbmRlcixmLDAsZi5wcmlvcml0eSksZi5fcHJvcHMuZm9yRWFjaChmdW5jdGlvbih0KXtkW3RdPXN9KSxmLnByaW9yaXR5JiYodT0xKSksIWx8fGMpZm9yKGEgaW4gaSlmdFthXSYmKGY9VWIoYSxpLGUscCxvLFIpKT9mLnByaW9yaXR5JiYodT0xKTpkW2FdPXM9VnQuY2FsbChlLG8sYSxcImdldFwiLGlbYV0scCxSLDAsZy5zdHJpbmdGaWx0ZXIpO2UuX29wJiZlLl9vcFtuXSYmZS5raWxsKG8sZS5fb3Bbbl0pLEUmJmUuX3B0JiYoWXQ9ZSxJLmtpbGxUd2VlbnNPZihvLGQsZS5nbG9iYWxUaW1lKHIpKSxtPSFlLnBhcmVudCxZdD0wKSxlLl9wdCYmYiYmKGx0W2guaWRdPTEpfXUmJnNlKGUpLGUuX29uSW5pdCYmZS5fb25Jbml0KGUpfWUuX29uVXBkYXRlPXcsZS5faW5pdHRlZD0oIWUuX29wfHxlLl9wdCkmJiFtLE0mJnI8PTAmJkYucmVuZGVyKFksITAsITApfSxRdD1mdW5jdGlvbiBfcGFyc2VGdW5jT3JTdHJpbmcodCxlLHIsaSxuKXtyZXR1cm4gcCh0KT90LmNhbGwoZSxyLGksbik6byh0KSYmfnQuaW5kZXhPZihcInJhbmRvbShcIik/aGIodCk6dH0sanQ9Y3QrXCJyZXBlYXQscmVwZWF0RGVsYXkseW95byxyZXBlYXRSZWZyZXNoLHlveW9FYXNlLGF1dG9SZXZlcnRcIixLdD17fTtiYShqdCtcIixpZCxzdGFnZ2VyLGRlbGF5LGR1cmF0aW9uLHBhdXNlZCxzY3JvbGxUcmlnZ2VyXCIsZnVuY3Rpb24odCl7cmV0dXJuIEt0W3RdPTF9KTt2YXIgJHQ9ZnVuY3Rpb24oUil7ZnVuY3Rpb24gVHdlZW4oZSxyLGksbil7dmFyIGE7XCJudW1iZXJcIj09dHlwZW9mIHImJihpLmR1cmF0aW9uPXIscj1pLGk9bnVsbCk7dmFyIG8sdSxoLGwsZixkLF8scCxjPShhPVIuY2FsbCh0aGlzLG4/cjpwYShyKSl8fHRoaXMpLnZhcnMsbT1jLmR1cmF0aW9uLGc9Yy5kZWxheSx5PWMuaW1tZWRpYXRlUmVuZGVyLFQ9Yy5zdGFnZ2VyLGI9Yy5vdmVyd3JpdGUsdz1jLmtleWZyYW1lcyx4PWMuZGVmYXVsdHMsaz1jLnNjcm9sbFRyaWdnZXIsUD1jLnlveW9FYXNlLE09ci5wYXJlbnR8fEksQz0oSihlKXx8SChlKT9xKGVbMF0pOlwibGVuZ3RoXCJpbiByKT9bZV06eHQoZSk7aWYoYS5fdGFyZ2V0cz1DLmxlbmd0aD8kKEMpOk8oXCJHU0FQIHRhcmdldCBcIitlK1wiIG5vdCBmb3VuZC4gaHR0cHM6Ly9ncmVlbnNvY2suY29tXCIsIVUubnVsbFRhcmdldFdhcm4pfHxbXSxhLl9wdExvb2t1cD1bXSxhLl9vdmVyd3JpdGU9Yix3fHxUfHx2KG0pfHx2KGcpKXtpZihyPWEudmFycywobz1hLnRpbWVsaW5lPW5ldyBVdCh7ZGF0YTpcIm5lc3RlZFwiLGRlZmF1bHRzOnh8fHt9fSkpLmtpbGwoKSxvLnBhcmVudD1vLl9kcD1fYXNzZXJ0VGhpc0luaXRpYWxpemVkKGEpLG8uX3N0YXJ0PTAsVHx8dihtKXx8dihnKSl7aWYobD1DLmxlbmd0aCxfPVQmJlphKFQpLHMoVCkpZm9yKGYgaW4gVCl+anQuaW5kZXhPZihmKSYmKChwPXB8fHt9KVtmXT1UW2ZdKTtmb3IodT0wO3U8bDt1KyspKGg9b2EocixLdCkpLnN0YWdnZXI9MCxQJiYoaC55b3lvRWFzZT1QKSxwJiZtdChoLHApLGQ9Q1t1XSxoLmR1cmF0aW9uPStRdChtLF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoYSksdSxkLEMpLGguZGVsYXk9KCtRdChnLF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoYSksdSxkLEMpfHwwKS1hLl9kZWxheSwhVCYmMT09PWwmJmguZGVsYXkmJihhLl9kZWxheT1nPWguZGVsYXksYS5fc3RhcnQrPWcsaC5kZWxheT0wKSxvLnRvKGQsaCxfP18odSxkLEMpOjApLG8uX2Vhc2U9enQubm9uZTtvLmR1cmF0aW9uKCk/bT1nPTA6YS50aW1lbGluZT0wfWVsc2UgaWYodyl7cGEoa2Eoby52YXJzLmRlZmF1bHRzLHtlYXNlOlwibm9uZVwifSkpLG8uX2Vhc2U9QnQody5lYXNlfHxyLmVhc2V8fFwibm9uZVwiKTt2YXIgQSxELFMsej0wO2lmKEoodykpdy5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiBvLnRvKEMsdCxcIj5cIil9KTtlbHNle2ZvcihmIGluIGg9e30sdylcImVhc2VcIj09PWZ8fFwiZWFzZUVhY2hcIj09PWZ8fCRiKGYsd1tmXSxoLHcuZWFzZUVhY2gpO2ZvcihmIGluIGgpZm9yKEE9aFtmXS5zb3J0KGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQudC1lLnR9KSx1PXo9MDt1PEEubGVuZ3RoO3UrKykoUz17ZWFzZTooRD1BW3VdKS5lLGR1cmF0aW9uOihELnQtKHU/QVt1LTFdLnQ6MCkpLzEwMCptfSlbZl09RC52LG8udG8oQyxTLHopLHorPVMuZHVyYXRpb247by5kdXJhdGlvbigpPG0mJm8udG8oe30se2R1cmF0aW9uOm0tby5kdXJhdGlvbigpfSl9fW18fGEuZHVyYXRpb24obT1vLmR1cmF0aW9uKCkpfWVsc2UgYS50aW1lbGluZT0wO3JldHVybiEwIT09Ynx8Qnx8KFl0PV9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoYSksSS5raWxsVHdlZW5zT2YoQyksWXQ9MCksRGEoTSxfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGEpLGkpLHIucmV2ZXJzZWQmJmEucmV2ZXJzZSgpLHIucGF1c2VkJiZhLnBhdXNlZCghMCksKHl8fCFtJiYhdyYmYS5fc3RhcnQ9PT1kYShNLl90aW1lKSYmdCh5KSYmZnVuY3Rpb24gX2hhc05vUGF1c2VkQW5jZXN0b3JzKHQpe3JldHVybiF0fHx0Ll90cyYmX2hhc05vUGF1c2VkQW5jZXN0b3JzKHQucGFyZW50KX0oX2Fzc2VydFRoaXNJbml0aWFsaXplZChhKSkmJlwibmVzdGVkXCIhPT1NLmRhdGEpJiYoYS5fdFRpbWU9LVYsYS5yZW5kZXIoTWF0aC5tYXgoMCwtZykpKSxrJiZFYShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGEpLGspLGF9X2luaGVyaXRzTG9vc2UoVHdlZW4sUik7dmFyIGU9VHdlZW4ucHJvdG90eXBlO3JldHVybiBlLnJlbmRlcj1mdW5jdGlvbiByZW5kZXIodCxlLHIpe3ZhciBpLG4sYSxzLG8sdSxoLGwsZixkPXRoaXMuX3RpbWUsXz10aGlzLl90RHVyLHA9dGhpcy5fZHVyLGM9Xy1WPHQmJjA8PXQ/Xzp0PFY/MDp0O2lmKHApe2lmKGMhPT10aGlzLl90VGltZXx8IXR8fHJ8fCF0aGlzLl9pbml0dGVkJiZ0aGlzLl90VGltZXx8dGhpcy5fc3RhcnRBdCYmdGhpcy5felRpbWU8MCE9dDwwKXtpZihpPWMsbD10aGlzLnRpbWVsaW5lLHRoaXMuX3JlcGVhdCl7aWYocz1wK3RoaXMuX3JEZWxheSx0aGlzLl9yZXBlYXQ8LTEmJnQ8MClyZXR1cm4gdGhpcy50b3RhbFRpbWUoMTAwKnMrdCxlLHIpO2lmKGk9ZGEoYyVzKSxjPT09Xz8oYT10aGlzLl9yZXBlYXQsaT1wKTooKGE9fn4oYy9zKSkmJmE9PT1jL3MmJihpPXAsYS0tKSxwPGkmJihpPXApKSwodT10aGlzLl95b3lvJiYxJmEpJiYoZj10aGlzLl95RWFzZSxpPXAtaSksbz1ndCh0aGlzLl90VGltZSxzKSxpPT09ZCYmIXImJnRoaXMuX2luaXR0ZWQpcmV0dXJuIHRoaXMuX3RUaW1lPWMsdGhpczthIT09byYmKGwmJnRoaXMuX3lFYXNlJiZJYihsLHUpLCF0aGlzLnZhcnMucmVwZWF0UmVmcmVzaHx8dXx8dGhpcy5fbG9ja3x8KHRoaXMuX2xvY2s9cj0xLHRoaXMucmVuZGVyKGRhKHMqYSksITApLmludmFsaWRhdGUoKS5fbG9jaz0wKSl9aWYoIXRoaXMuX2luaXR0ZWQpe2lmKEZhKHRoaXMsdDwwP3Q6aSxyLGUpKXJldHVybiB0aGlzLl90VGltZT0wLHRoaXM7aWYoZCE9PXRoaXMuX3RpbWUpcmV0dXJuIHRoaXM7aWYocCE9PXRoaXMuX2R1cilyZXR1cm4gdGhpcy5yZW5kZXIodCxlLHIpfWlmKHRoaXMuX3RUaW1lPWMsdGhpcy5fdGltZT1pLCF0aGlzLl9hY3QmJnRoaXMuX3RzJiYodGhpcy5fYWN0PTEsdGhpcy5fbGF6eT0wKSx0aGlzLnJhdGlvPWg9KGZ8fHRoaXMuX2Vhc2UpKGkvcCksdGhpcy5fZnJvbSYmKHRoaXMucmF0aW89aD0xLWgpLGkmJiFkJiYhZSYmKE90KHRoaXMsXCJvblN0YXJ0XCIpLHRoaXMuX3RUaW1lIT09YykpcmV0dXJuIHRoaXM7Zm9yKG49dGhpcy5fcHQ7bjspbi5yKGgsbi5kKSxuPW4uX25leHQ7bCYmbC5yZW5kZXIodDwwP3Q6IWkmJnU/LVY6bC5fZHVyKmwuX2Vhc2UoaS90aGlzLl9kdXIpLGUscil8fHRoaXMuX3N0YXJ0QXQmJih0aGlzLl96VGltZT10KSx0aGlzLl9vblVwZGF0ZSYmIWUmJih0PDAmJnRoaXMuX3N0YXJ0QXQmJnRoaXMuX3N0YXJ0QXQucmVuZGVyKHQsITAsciksT3QodGhpcyxcIm9uVXBkYXRlXCIpKSx0aGlzLl9yZXBlYXQmJmEhPT1vJiZ0aGlzLnZhcnMub25SZXBlYXQmJiFlJiZ0aGlzLnBhcmVudCYmT3QodGhpcyxcIm9uUmVwZWF0XCIpLGMhPT10aGlzLl90RHVyJiZjfHx0aGlzLl90VGltZSE9PWN8fCh0PDAmJnRoaXMuX3N0YXJ0QXQmJiF0aGlzLl9vblVwZGF0ZSYmdGhpcy5fc3RhcnRBdC5yZW5kZXIodCwhMCwhMCksIXQmJnB8fCEoYz09PXRoaXMuX3REdXImJjA8dGhpcy5fdHN8fCFjJiZ0aGlzLl90czwwKXx8dGEodGhpcywxKSxlfHx0PDAmJiFkfHwhYyYmIWR8fChPdCh0aGlzLGM9PT1fP1wib25Db21wbGV0ZVwiOlwib25SZXZlcnNlQ29tcGxldGVcIiwhMCksIXRoaXMuX3Byb218fGM8XyYmMDx0aGlzLnRpbWVTY2FsZSgpfHx0aGlzLl9wcm9tKCkpKX19ZWxzZSFmdW5jdGlvbiBfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4odCxlLHIsaSl7dmFyIG4sYSxzLG89dC5yYXRpbyx1PWU8MHx8IWUmJighdC5fc3RhcnQmJmZ1bmN0aW9uIF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQodCl7dmFyIGU9dC5wYXJlbnQ7cmV0dXJuIGUmJmUuX3RzJiZlLl9pbml0dGVkJiYhZS5fbG9jayYmKGUucmF3VGltZSgpPDB8fF9wYXJlbnRQbGF5aGVhZElzQmVmb3JlU3RhcnQoZSkpfSh0KSYmKHQuX2luaXR0ZWR8fCF2dCh0KSl8fCh0Ll90czwwfHx0Ll9kcC5fdHM8MCkmJiF2dCh0KSk/MDoxLGg9dC5fckRlbGF5LGw9MDtpZihoJiZ0Ll9yZXBlYXQmJihsPWJ0KDAsdC5fdER1cixlKSxhPWd0KGwsaCksdC5feW95byYmMSZhJiYodT0xLXUpLGEhPT1ndCh0Ll90VGltZSxoKSYmKG89MS11LHQudmFycy5yZXBlYXRSZWZyZXNoJiZ0Ll9pbml0dGVkJiZ0LmludmFsaWRhdGUoKSkpLHUhPT1vfHxpfHx0Ll96VGltZT09PVZ8fCFlJiZ0Ll96VGltZSl7aWYoIXQuX2luaXR0ZWQmJkZhKHQsZSxpLHIpKXJldHVybjtmb3Iocz10Ll96VGltZSx0Ll96VGltZT1lfHwocj9WOjApLHI9cnx8ZSYmIXMsdC5yYXRpbz11LHQuX2Zyb20mJih1PTEtdSksdC5fdGltZT0wLHQuX3RUaW1lPWwsbj10Ll9wdDtuOyluLnIodSxuLmQpLG49bi5fbmV4dDt0Ll9zdGFydEF0JiZlPDAmJnQuX3N0YXJ0QXQucmVuZGVyKGUsITAsITApLHQuX29uVXBkYXRlJiYhciYmT3QodCxcIm9uVXBkYXRlXCIpLGwmJnQuX3JlcGVhdCYmIXImJnQucGFyZW50JiZPdCh0LFwib25SZXBlYXRcIiksKGU+PXQuX3REdXJ8fGU8MCkmJnQucmF0aW89PT11JiYodSYmdGEodCwxKSxyfHwoT3QodCx1P1wib25Db21wbGV0ZVwiOlwib25SZXZlcnNlQ29tcGxldGVcIiwhMCksdC5fcHJvbSYmdC5fcHJvbSgpKSl9ZWxzZSB0Ll96VGltZXx8KHQuX3pUaW1lPWUpfSh0aGlzLHQsZSxyKTtyZXR1cm4gdGhpc30sZS50YXJnZXRzPWZ1bmN0aW9uIHRhcmdldHMoKXtyZXR1cm4gdGhpcy5fdGFyZ2V0c30sZS5pbnZhbGlkYXRlPWZ1bmN0aW9uIGludmFsaWRhdGUoKXtyZXR1cm4gdGhpcy5fcHQ9dGhpcy5fb3A9dGhpcy5fc3RhcnRBdD10aGlzLl9vblVwZGF0ZT10aGlzLl9sYXp5PXRoaXMucmF0aW89MCx0aGlzLl9wdExvb2t1cD1bXSx0aGlzLnRpbWVsaW5lJiZ0aGlzLnRpbWVsaW5lLmludmFsaWRhdGUoKSxSLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyl9LGUucmVzZXRUbz1mdW5jdGlvbiByZXNldFRvKHQsZSxyLGkpe2N8fER0Lndha2UoKSx0aGlzLl90c3x8dGhpcy5wbGF5KCk7dmFyIG4sYT1NYXRoLm1pbih0aGlzLl9kdXIsKHRoaXMuX2RwLl90aW1lLXRoaXMuX3N0YXJ0KSp0aGlzLl90cyk7cmV0dXJuIHRoaXMuX2luaXR0ZWR8fFh0KHRoaXMsYSksbj10aGlzLl9lYXNlKGEvdGhpcy5fZHVyKSxmdW5jdGlvbiBfdXBkYXRlUHJvcFR3ZWVucyh0LGUscixpLG4sYSxzKXt2YXIgbyx1LGgsbD0odC5fcHQmJnQuX3B0Q2FjaGV8fCh0Ll9wdENhY2hlPXt9KSlbZV07aWYoIWwpZm9yKGw9dC5fcHRDYWNoZVtlXT1bXSx1PXQuX3B0TG9va3VwLGg9dC5fdGFyZ2V0cy5sZW5ndGg7aC0tOyl7aWYoKG89dVtoXVtlXSkmJm8uZCYmby5kLl9wdClmb3Iobz1vLmQuX3B0O28mJm8ucCE9PWU7KW89by5fbmV4dDtpZighbylyZXR1cm4gcXQ9MSx0LnZhcnNbZV09XCIrPTBcIixYdCh0LHMpLHF0PTAsMTtsLnB1c2gobyl9Zm9yKGg9bC5sZW5ndGg7aC0tOykobz1sW2hdKS5zPSFpJiYwIT09aXx8bj9vLnMrKGl8fDApK2Eqby5jOmksby5jPXItby5zLG8uZSYmKG8uZT1jYShyKStSYShvLmUpKSxvLmImJihvLmI9by5zK1JhKG8uYikpfSh0aGlzLHQsZSxyLGksbixhKT90aGlzLnJlc2V0VG8odCxlLHIsaSk6KEJhKHRoaXMsMCksdGhpcy5wYXJlbnR8fHJhKHRoaXMuX2RwLHRoaXMsXCJfZmlyc3RcIixcIl9sYXN0XCIsdGhpcy5fZHAuX3NvcnQ/XCJfc3RhcnRcIjowKSx0aGlzLnJlbmRlcigwKSl9LGUua2lsbD1mdW5jdGlvbiBraWxsKHQsZSl7aWYodm9pZCAwPT09ZSYmKGU9XCJhbGxcIiksISh0fHxlJiZcImFsbFwiIT09ZSkpcmV0dXJuIHRoaXMuX2xhenk9dGhpcy5fcHQ9MCx0aGlzLnBhcmVudD9tYih0aGlzKTp0aGlzO2lmKHRoaXMudGltZWxpbmUpe3ZhciByPXRoaXMudGltZWxpbmUudG90YWxEdXJhdGlvbigpO3JldHVybiB0aGlzLnRpbWVsaW5lLmtpbGxUd2VlbnNPZih0LGUsWXQmJiEwIT09WXQudmFycy5vdmVyd3JpdGUpLl9maXJzdHx8bWIodGhpcyksdGhpcy5wYXJlbnQmJnIhPT10aGlzLnRpbWVsaW5lLnRvdGFsRHVyYXRpb24oKSYmS2EodGhpcyx0aGlzLl9kdXIqdGhpcy50aW1lbGluZS5fdER1ci9yLDAsMSksdGhpc312YXIgaSxuLGEscyx1LGgsbCxmPXRoaXMuX3RhcmdldHMsZD10P3h0KHQpOmYscD10aGlzLl9wdExvb2t1cCxjPXRoaXMuX3B0O2lmKCghZXx8XCJhbGxcIj09PWUpJiZmdW5jdGlvbiBfYXJyYXlzTWF0Y2godCxlKXtmb3IodmFyIHI9dC5sZW5ndGgsaT1yPT09ZS5sZW5ndGg7aSYmci0tJiZ0W3JdPT09ZVtyXTspO3JldHVybiByPDB9KGYsZCkpcmV0dXJuXCJhbGxcIj09PWUmJih0aGlzLl9wdD0wKSxtYih0aGlzKTtmb3IoaT10aGlzLl9vcD10aGlzLl9vcHx8W10sXCJhbGxcIiE9PWUmJihvKGUpJiYodT17fSxiYShlLGZ1bmN0aW9uKHQpe3JldHVybiB1W3RdPTF9KSxlPXUpLGU9ZnVuY3Rpb24gX2FkZEFsaWFzZXNUb1ZhcnModCxlKXt2YXIgcixpLG4sYSxzPXRbMF0/Xyh0WzBdKS5oYXJuZXNzOjAsbz1zJiZzLmFsaWFzZXM7aWYoIW8pcmV0dXJuIGU7Zm9yKGkgaW4gcj1tdCh7fSxlKSxvKWlmKGkgaW4gcilmb3Iobj0oYT1vW2ldLnNwbGl0KFwiLFwiKSkubGVuZ3RoO24tLTspclthW25dXT1yW2ldO3JldHVybiByfShmLGUpKSxsPWYubGVuZ3RoO2wtLTspaWYofmQuaW5kZXhPZihmW2xdKSlmb3IodSBpbiBuPXBbbF0sXCJhbGxcIj09PWU/KGlbbF09ZSxzPW4sYT17fSk6KGE9aVtsXT1pW2xdfHx7fSxzPWUpLHMpKGg9biYmblt1XSkmJihcImtpbGxcImluIGguZCYmITAhPT1oLmQua2lsbCh1KXx8c2EodGhpcyxoLFwiX3B0XCIpLGRlbGV0ZSBuW3VdKSxcImFsbFwiIT09YSYmKGFbdV09MSk7cmV0dXJuIHRoaXMuX2luaXR0ZWQmJiF0aGlzLl9wdCYmYyYmbWIodGhpcyksdGhpc30sVHdlZW4udG89ZnVuY3Rpb24gdG8odCxlLHIpe3JldHVybiBuZXcgVHdlZW4odCxlLHIpfSxUd2Vlbi5mcm9tPWZ1bmN0aW9uIGZyb20odCxlKXtyZXR1cm4gT2EoMSxhcmd1bWVudHMpfSxUd2Vlbi5kZWxheWVkQ2FsbD1mdW5jdGlvbiBkZWxheWVkQ2FsbCh0LGUscixpKXtyZXR1cm4gbmV3IFR3ZWVuKGUsMCx7aW1tZWRpYXRlUmVuZGVyOiExLGxhenk6ITEsb3ZlcndyaXRlOiExLGRlbGF5OnQsb25Db21wbGV0ZTplLG9uUmV2ZXJzZUNvbXBsZXRlOmUsb25Db21wbGV0ZVBhcmFtczpyLG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOnIsY2FsbGJhY2tTY29wZTppfSl9LFR3ZWVuLmZyb21Ubz1mdW5jdGlvbiBmcm9tVG8odCxlLHIpe3JldHVybiBPYSgyLGFyZ3VtZW50cyl9LFR3ZWVuLnNldD1mdW5jdGlvbiBzZXQodCxlKXtyZXR1cm4gZS5kdXJhdGlvbj0wLGUucmVwZWF0RGVsYXl8fChlLnJlcGVhdD0wKSxuZXcgVHdlZW4odCxlKX0sVHdlZW4ua2lsbFR3ZWVuc09mPWZ1bmN0aW9uIGtpbGxUd2VlbnNPZih0LGUscil7cmV0dXJuIEkua2lsbFR3ZWVuc09mKHQsZSxyKX0sVHdlZW59KE50KTtrYSgkdC5wcm90b3R5cGUse190YXJnZXRzOltdLF9sYXp5OjAsX3N0YXJ0QXQ6MCxfb3A6MCxfb25Jbml0OjB9KSxiYShcInN0YWdnZXJUbyxzdGFnZ2VyRnJvbSxzdGFnZ2VyRnJvbVRvXCIsZnVuY3Rpb24ocil7JHRbcl09ZnVuY3Rpb24oKXt2YXIgdD1uZXcgVXQsZT13dC5jYWxsKGFyZ3VtZW50cywwKTtyZXR1cm4gZS5zcGxpY2UoXCJzdGFnZ2VyRnJvbVRvXCI9PT1yPzU6NCwwLDApLHRbcl0uYXBwbHkodCxlKX19KTtmdW5jdGlvbiBnYyh0LGUscil7cmV0dXJuIHQuc2V0QXR0cmlidXRlKGUscil9ZnVuY3Rpb24gb2ModCxlLHIsaSl7aS5tU2V0KHQsZSxpLm0uY2FsbChpLnR3ZWVuLHIsaS5tdCksaSl9dmFyIEd0PWZ1bmN0aW9uIF9zZXR0ZXJQbGFpbih0LGUscil7cmV0dXJuIHRbZV09cn0sV3Q9ZnVuY3Rpb24gX3NldHRlckZ1bmModCxlLHIpe3JldHVybiB0W2VdKHIpfSxadD1mdW5jdGlvbiBfc2V0dGVyRnVuY1dpdGhQYXJhbSh0LGUscixpKXtyZXR1cm4gdFtlXShpLmZwLHIpfSxIdD1mdW5jdGlvbiBfZ2V0U2V0dGVyKHQsZSl7cmV0dXJuIHAodFtlXSk/V3Q6cih0W2VdKSYmdC5zZXRBdHRyaWJ1dGU/Z2M6R3R9LEp0PWZ1bmN0aW9uIF9yZW5kZXJQbGFpbih0LGUpe3JldHVybiBlLnNldChlLnQsZS5wLE1hdGgucm91bmQoMWU2KihlLnMrZS5jKnQpKS8xZTYsZSl9LHRlPWZ1bmN0aW9uIF9yZW5kZXJCb29sZWFuKHQsZSl7cmV0dXJuIGUuc2V0KGUudCxlLnAsISEoZS5zK2UuYyp0KSxlKX0sZWU9ZnVuY3Rpb24gX3JlbmRlckNvbXBsZXhTdHJpbmcodCxlKXt2YXIgcj1lLl9wdCxpPVwiXCI7aWYoIXQmJmUuYilpPWUuYjtlbHNlIGlmKDE9PT10JiZlLmUpaT1lLmU7ZWxzZXtmb3IoO3I7KWk9ci5wKyhyLm0/ci5tKHIucytyLmMqdCk6TWF0aC5yb3VuZCgxZTQqKHIucytyLmMqdCkpLzFlNCkraSxyPXIuX25leHQ7aSs9ZS5jfWUuc2V0KGUudCxlLnAsaSxlKX0scmU9ZnVuY3Rpb24gX3JlbmRlclByb3BUd2VlbnModCxlKXtmb3IodmFyIHI9ZS5fcHQ7cjspci5yKHQsci5kKSxyPXIuX25leHR9LGllPWZ1bmN0aW9uIF9hZGRQbHVnaW5Nb2RpZmllcih0LGUscixpKXtmb3IodmFyIG4sYT10aGlzLl9wdDthOyluPWEuX25leHQsYS5wPT09aSYmYS5tb2RpZmllcih0LGUsciksYT1ufSxuZT1mdW5jdGlvbiBfa2lsbFByb3BUd2VlbnNPZih0KXtmb3IodmFyIGUscixpPXRoaXMuX3B0O2k7KXI9aS5fbmV4dCxpLnA9PT10JiYhaS5vcHx8aS5vcD09PXQ/c2EodGhpcyxpLFwiX3B0XCIpOmkuZGVwfHwoZT0xKSxpPXI7cmV0dXJuIWV9LHNlPWZ1bmN0aW9uIF9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkodCl7Zm9yKHZhciBlLHIsaSxuLGE9dC5fcHQ7YTspe2ZvcihlPWEuX25leHQscj1pO3ImJnIucHI+YS5wcjspcj1yLl9uZXh0OyhhLl9wcmV2PXI/ci5fcHJldjpuKT9hLl9wcmV2Ll9uZXh0PWE6aT1hLChhLl9uZXh0PXIpP3IuX3ByZXY9YTpuPWEsYT1lfXQuX3B0PWl9LG9lPShQcm9wVHdlZW4ucHJvdG90eXBlLm1vZGlmaWVyPWZ1bmN0aW9uIG1vZGlmaWVyKHQsZSxyKXt0aGlzLm1TZXQ9dGhpcy5tU2V0fHx0aGlzLnNldCx0aGlzLnNldD1vYyx0aGlzLm09dCx0aGlzLm10PXIsdGhpcy50d2Vlbj1lfSxQcm9wVHdlZW4pO2Z1bmN0aW9uIFByb3BUd2Vlbih0LGUscixpLG4sYSxzLG8sdSl7dGhpcy50PWUsdGhpcy5zPWksdGhpcy5jPW4sdGhpcy5wPXIsdGhpcy5yPWF8fEp0LHRoaXMuZD1zfHx0aGlzLHRoaXMuc2V0PW98fEd0LHRoaXMucHI9dXx8MCwodGhpcy5fbmV4dD10KSYmKHQuX3ByZXY9dGhpcyl9YmEoY3QrXCJwYXJlbnQsZHVyYXRpb24sZWFzZSxkZWxheSxvdmVyd3JpdGUscnVuQmFja3dhcmRzLHN0YXJ0QXQseW95byxpbW1lZGlhdGVSZW5kZXIscmVwZWF0LHJlcGVhdERlbGF5LGRhdGEscGF1c2VkLHJldmVyc2VkLGxhenksY2FsbGJhY2tTY29wZSxzdHJpbmdGaWx0ZXIsaWQseW95b0Vhc2Usc3RhZ2dlcixpbmhlcml0LHJlcGVhdFJlZnJlc2gsa2V5ZnJhbWVzLGF1dG9SZXZlcnQsc2Nyb2xsVHJpZ2dlclwiLGZ1bmN0aW9uKHQpe3JldHVybiB1dFt0XT0xfSksb3QuVHdlZW5NYXg9b3QuVHdlZW5MaXRlPSR0LG90LlRpbWVsaW5lTGl0ZT1vdC5UaW1lbGluZU1heD1VdCxJPW5ldyBVdCh7c29ydENoaWxkcmVuOiExLGRlZmF1bHRzOkwsYXV0b1JlbW92ZUNoaWxkcmVuOiEwLGlkOlwicm9vdFwiLHNtb290aENoaWxkVGltaW5nOiEwfSksVS5zdHJpbmdGaWx0ZXI9eGI7dmFyIHVlPXtyZWdpc3RlclBsdWdpbjpmdW5jdGlvbiByZWdpc3RlclBsdWdpbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLGU9bmV3IEFycmF5KHQpLHI9MDtyPHQ7cisrKWVbcl09YXJndW1lbnRzW3JdO2UuZm9yRWFjaChmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24gX2NyZWF0ZVBsdWdpbih0KXt2YXIgZT0odD0hdC5uYW1lJiZ0LmRlZmF1bHR8fHQpLm5hbWUscj1wKHQpLGk9ZSYmIXImJnQuaW5pdD9mdW5jdGlvbigpe3RoaXMuX3Byb3BzPVtdfTp0LG49e2luaXQ6USxyZW5kZXI6cmUsYWRkOlZ0LGtpbGw6bmUsbW9kaWZpZXI6aWUscmF3VmFyczowfSxhPXt0YXJnZXRUZXN0OjAsZ2V0OjAsZ2V0U2V0dGVyOkh0LGFsaWFzZXM6e30scmVnaXN0ZXI6MH07aWYoU3QoKSx0IT09aSl7aWYoZnRbZV0pcmV0dXJuO2thKGksa2Eob2EodCxuKSxhKSksbXQoaS5wcm90b3R5cGUsbXQobixvYSh0LGEpKSksZnRbaS5wcm9wPWVdPWksdC50YXJnZXRUZXN0JiYocHQucHVzaChpKSx1dFtlXT0xKSxlPShcImNzc1wiPT09ZT9cIkNTU1wiOmUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZS5zdWJzdHIoMSkpK1wiUGx1Z2luXCJ9UChlLGkpLHQucmVnaXN0ZXImJnQucmVnaXN0ZXIoaGUsaSxvZSl9KHQpfSl9LHRpbWVsaW5lOmZ1bmN0aW9uIHRpbWVsaW5lKHQpe3JldHVybiBuZXcgVXQodCl9LGdldFR3ZWVuc09mOmZ1bmN0aW9uIGdldFR3ZWVuc09mKHQsZSl7cmV0dXJuIEkuZ2V0VHdlZW5zT2YodCxlKX0sZ2V0UHJvcGVydHk6ZnVuY3Rpb24gZ2V0UHJvcGVydHkoaSx0LGUscil7byhpKSYmKGk9eHQoaSlbMF0pO3ZhciBuPV8oaXx8e30pLmdldCxhPWU/amE6aWE7cmV0dXJuXCJuYXRpdmVcIj09PWUmJihlPVwiXCIpLGk/dD9hKChmdFt0XSYmZnRbdF0uZ2V0fHxuKShpLHQsZSxyKSk6ZnVuY3Rpb24odCxlLHIpe3JldHVybiBhKChmdFt0XSYmZnRbdF0uZ2V0fHxuKShpLHQsZSxyKSl9Oml9LHF1aWNrU2V0dGVyOmZ1bmN0aW9uIHF1aWNrU2V0dGVyKHIsZSxpKXtpZigxPChyPXh0KHIpKS5sZW5ndGgpe3ZhciBuPXIubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBoZS5xdWlja1NldHRlcih0LGUsaSl9KSxhPW4ubGVuZ3RoO3JldHVybiBmdW5jdGlvbih0KXtmb3IodmFyIGU9YTtlLS07KW5bZV0odCl9fXI9clswXXx8e307dmFyIHM9ZnRbZV0sbz1fKHIpLHU9by5oYXJuZXNzJiYoby5oYXJuZXNzLmFsaWFzZXN8fHt9KVtlXXx8ZSxoPXM/ZnVuY3Rpb24odCl7dmFyIGU9bmV3IHM7ZC5fcHQ9MCxlLmluaXQocixpP3QraTp0LGQsMCxbcl0pLGUucmVuZGVyKDEsZSksZC5fcHQmJnJlKDEsZCl9Om8uc2V0KHIsdSk7cmV0dXJuIHM/aDpmdW5jdGlvbih0KXtyZXR1cm4gaChyLHUsaT90K2k6dCxvLDEpfX0scXVpY2tUbzpmdW5jdGlvbiBxdWlja1RvKHQsaSxlKXtmdW5jdGlvbiBpdyh0LGUscil7cmV0dXJuIG4ucmVzZXRUbyhpLHQsZSxyKX12YXIgcixuPWhlLnRvKHQsbXQoKChyPXt9KVtpXT1cIis9MC4xXCIsci5wYXVzZWQ9ITAsciksZXx8e30pKTtyZXR1cm4gaXcudHdlZW49bixpd30saXNUd2VlbmluZzpmdW5jdGlvbiBpc1R3ZWVuaW5nKHQpe3JldHVybiAwPEkuZ2V0VHdlZW5zT2YodCwhMCkubGVuZ3RofSxkZWZhdWx0czpmdW5jdGlvbiBkZWZhdWx0cyh0KXtyZXR1cm4gdCYmdC5lYXNlJiYodC5lYXNlPUJ0KHQuZWFzZSxMLmVhc2UpKSxuYShMLHR8fHt9KX0sY29uZmlnOmZ1bmN0aW9uIGNvbmZpZyh0KXtyZXR1cm4gbmEoVSx0fHx7fSl9LHJlZ2lzdGVyRWZmZWN0OmZ1bmN0aW9uIHJlZ2lzdGVyRWZmZWN0KHQpe3ZhciBpPXQubmFtZSxuPXQuZWZmZWN0LGU9dC5wbHVnaW5zLGE9dC5kZWZhdWx0cyxyPXQuZXh0ZW5kVGltZWxpbmU7KGV8fFwiXCIpLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3JldHVybiB0JiYhZnRbdF0mJiFvdFt0XSYmTyhpK1wiIGVmZmVjdCByZXF1aXJlcyBcIit0K1wiIHBsdWdpbi5cIil9KSxkdFtpXT1mdW5jdGlvbih0LGUscil7cmV0dXJuIG4oeHQodCksa2EoZXx8e30sYSkscil9LHImJihVdC5wcm90b3R5cGVbaV09ZnVuY3Rpb24odCxlLHIpe3JldHVybiB0aGlzLmFkZChkdFtpXSh0LHMoZSk/ZToocj1lKSYme30sdGhpcykscil9KX0scmVnaXN0ZXJFYXNlOmZ1bmN0aW9uIHJlZ2lzdGVyRWFzZSh0LGUpe3p0W3RdPUJ0KGUpfSxwYXJzZUVhc2U6ZnVuY3Rpb24gcGFyc2VFYXNlKHQsZSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/QnQodCxlKTp6dH0sZ2V0QnlJZDpmdW5jdGlvbiBnZXRCeUlkKHQpe3JldHVybiBJLmdldEJ5SWQodCl9LGV4cG9ydFJvb3Q6ZnVuY3Rpb24gZXhwb3J0Um9vdChlLHIpe3ZvaWQgMD09PWUmJihlPXt9KTt2YXIgaSxuLGE9bmV3IFV0KGUpO2ZvcihhLnNtb290aENoaWxkVGltaW5nPXQoZS5zbW9vdGhDaGlsZFRpbWluZyksSS5yZW1vdmUoYSksYS5fZHA9MCxhLl90aW1lPWEuX3RUaW1lPUkuX3RpbWUsaT1JLl9maXJzdDtpOyluPWkuX25leHQsIXImJiFpLl9kdXImJmkgaW5zdGFuY2VvZiAkdCYmaS52YXJzLm9uQ29tcGxldGU9PT1pLl90YXJnZXRzWzBdfHxEYShhLGksaS5fc3RhcnQtaS5fZGVsYXkpLGk9bjtyZXR1cm4gRGEoSSxhLDApLGF9LHV0aWxzOnt3cmFwOmZ1bmN0aW9uIHdyYXAoZSx0LHIpe3ZhciBpPXQtZTtyZXR1cm4gSihlKT9lYihlLHdyYXAoMCxlLmxlbmd0aCksdCk6UGEocixmdW5jdGlvbih0KXtyZXR1cm4oaSsodC1lKSVpKSVpK2V9KX0sd3JhcFlveW86ZnVuY3Rpb24gd3JhcFlveW8oZSx0LHIpe3ZhciBpPXQtZSxuPTIqaTtyZXR1cm4gSihlKT9lYihlLHdyYXBZb3lvKDAsZS5sZW5ndGgtMSksdCk6UGEocixmdW5jdGlvbih0KXtyZXR1cm4gZSsoaTwodD0obisodC1lKSVuKSVufHwwKT9uLXQ6dCl9KX0sZGlzdHJpYnV0ZTpaYSxyYW5kb206YWIsc25hcDpfYSxub3JtYWxpemU6ZnVuY3Rpb24gbm9ybWFsaXplKHQsZSxyKXtyZXR1cm4ga3QodCxlLDAsMSxyKX0sZ2V0VW5pdDpSYSxjbGFtcDpmdW5jdGlvbiBjbGFtcChlLHIsdCl7cmV0dXJuIFBhKHQsZnVuY3Rpb24odCl7cmV0dXJuIGJ0KGUscix0KX0pfSxzcGxpdENvbG9yOnNiLHRvQXJyYXk6eHQsc2VsZWN0b3I6ZnVuY3Rpb24gc2VsZWN0b3Iocil7cmV0dXJuIHI9eHQocilbMF18fE8oXCJJbnZhbGlkIHNjb3BlXCIpfHx7fSxmdW5jdGlvbih0KXt2YXIgZT1yLmN1cnJlbnR8fHIubmF0aXZlRWxlbWVudHx8cjtyZXR1cm4geHQodCxlLnF1ZXJ5U2VsZWN0b3JBbGw/ZTplPT09cj9PKFwiSW52YWxpZCBzY29wZVwiKXx8YS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOnIpfX0sbWFwUmFuZ2U6a3QscGlwZTpmdW5jdGlvbiBwaXBlKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgsZT1uZXcgQXJyYXkodCkscj0wO3I8dDtyKyspZVtyXT1hcmd1bWVudHNbcl07cmV0dXJuIGZ1bmN0aW9uKHQpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiBlKHQpfSx0KX19LHVuaXRpemU6ZnVuY3Rpb24gdW5pdGl6ZShlLHIpe3JldHVybiBmdW5jdGlvbih0KXtyZXR1cm4gZShwYXJzZUZsb2F0KHQpKSsocnx8UmEodCkpfX0saW50ZXJwb2xhdGU6ZnVuY3Rpb24gaW50ZXJwb2xhdGUoZSxyLHQsaSl7dmFyIG49aXNOYU4oZStyKT8wOmZ1bmN0aW9uKHQpe3JldHVybigxLXQpKmUrdCpyfTtpZighbil7dmFyIGEscyx1LGgsbCxmPW8oZSksZD17fTtpZighMD09PXQmJihpPTEpJiYodD1udWxsKSxmKWU9e3A6ZX0scj17cDpyfTtlbHNlIGlmKEooZSkmJiFKKHIpKXtmb3IodT1bXSxoPWUubGVuZ3RoLGw9aC0yLHM9MTtzPGg7cysrKXUucHVzaChpbnRlcnBvbGF0ZShlW3MtMV0sZVtzXSkpO2gtLSxuPWZ1bmN0aW9uIGZ1bmModCl7dCo9aDt2YXIgZT1NYXRoLm1pbihsLH5+dCk7cmV0dXJuIHVbZV0odC1lKX0sdD1yfWVsc2UgaXx8KGU9bXQoSihlKT9bXTp7fSxlKSk7aWYoIXUpe2ZvcihhIGluIHIpVnQuY2FsbChkLGUsYSxcImdldFwiLHJbYV0pO249ZnVuY3Rpb24gZnVuYyh0KXtyZXR1cm4gcmUodCxkKXx8KGY/ZS5wOmUpfX19cmV0dXJuIFBhKHQsbil9LHNodWZmbGU6WWF9LGluc3RhbGw6TSxlZmZlY3RzOmR0LHRpY2tlcjpEdCx1cGRhdGVSb290OlV0LnVwZGF0ZVJvb3QscGx1Z2luczpmdCxnbG9iYWxUaW1lbGluZTpJLGNvcmU6e1Byb3BUd2VlbjpvZSxnbG9iYWxzOlAsVHdlZW46JHQsVGltZWxpbmU6VXQsQW5pbWF0aW9uOk50LGdldENhY2hlOl8sX3JlbW92ZUxpbmtlZExpc3RJdGVtOnNhLHN1cHByZXNzT3ZlcndyaXRlczpmdW5jdGlvbiBzdXBwcmVzc092ZXJ3cml0ZXModCl7cmV0dXJuIEI9dH19fTtiYShcInRvLGZyb20sZnJvbVRvLGRlbGF5ZWRDYWxsLHNldCxraWxsVHdlZW5zT2ZcIixmdW5jdGlvbih0KXtyZXR1cm4gdWVbdF09JHRbdF19KSxEdC5hZGQoVXQudXBkYXRlUm9vdCksZD11ZS50byh7fSx7ZHVyYXRpb246MH0pO2Z1bmN0aW9uIHNjKHQsZSl7Zm9yKHZhciByPXQuX3B0O3ImJnIucCE9PWUmJnIub3AhPT1lJiZyLmZwIT09ZTspcj1yLl9uZXh0O3JldHVybiByfWZ1bmN0aW9uIHVjKHQsbil7cmV0dXJue25hbWU6dCxyYXdWYXJzOjEsaW5pdDpmdW5jdGlvbiBpbml0KHQsaSxlKXtlLl9vbkluaXQ9ZnVuY3Rpb24odCl7dmFyIGUscjtpZihvKGkpJiYoZT17fSxiYShpLGZ1bmN0aW9uKHQpe3JldHVybiBlW3RdPTF9KSxpPWUpLG4pe2ZvcihyIGluIGU9e30saSllW3JdPW4oaVtyXSk7aT1lfSFmdW5jdGlvbiBfYWRkTW9kaWZpZXJzKHQsZSl7dmFyIHIsaSxuLGE9dC5fdGFyZ2V0cztmb3IociBpbiBlKWZvcihpPWEubGVuZ3RoO2ktLTspKG49KG49dC5fcHRMb29rdXBbaV1bcl0pJiZuLmQpJiYobi5fcHQmJihuPXNjKG4scikpLG4mJm4ubW9kaWZpZXImJm4ubW9kaWZpZXIoZVtyXSx0LGFbaV0scikpfSh0LGkpfX19fXZhciBoZT11ZS5yZWdpc3RlclBsdWdpbih7bmFtZTpcImF0dHJcIixpbml0OmZ1bmN0aW9uIGluaXQodCxlLHIsaSxuKXt2YXIgYSxzO2ZvcihhIGluIGUpKHM9dGhpcy5hZGQodCxcInNldEF0dHJpYnV0ZVwiLCh0LmdldEF0dHJpYnV0ZShhKXx8MCkrXCJcIixlW2FdLGksbiwwLDAsYSkpJiYocy5vcD1hKSx0aGlzLl9wcm9wcy5wdXNoKGEpfX0se25hbWU6XCJlbmRBcnJheVwiLGluaXQ6ZnVuY3Rpb24gaW5pdCh0LGUpe2Zvcih2YXIgcj1lLmxlbmd0aDtyLS07KXRoaXMuYWRkKHQscix0W3JdfHwwLGVbcl0pfX0sdWMoXCJyb3VuZFByb3BzXCIsJGEpLHVjKFwibW9kaWZpZXJzXCIpLHVjKFwic25hcFwiLF9hKSl8fHVlOyR0LnZlcnNpb249VXQudmVyc2lvbj1oZS52ZXJzaW9uPVwiMy4xMC4yXCIsbD0xLHUoKSYmU3QoKTtmdW5jdGlvbiBkZCh0LGUpe3JldHVybiBlLnNldChlLnQsZS5wLE1hdGgucm91bmQoMWU0KihlLnMrZS5jKnQpKS8xZTQrZS51LGUpfWZ1bmN0aW9uIGVkKHQsZSl7cmV0dXJuIGUuc2V0KGUudCxlLnAsMT09PXQ/ZS5lOk1hdGgucm91bmQoMWU0KihlLnMrZS5jKnQpKS8xZTQrZS51LGUpfWZ1bmN0aW9uIGZkKHQsZSl7cmV0dXJuIGUuc2V0KGUudCxlLnAsdD9NYXRoLnJvdW5kKDFlNCooZS5zK2UuYyp0KSkvMWU0K2UudTplLmIsZSl9ZnVuY3Rpb24gZ2QodCxlKXt2YXIgcj1lLnMrZS5jKnQ7ZS5zZXQoZS50LGUucCx+fihyKyhyPDA/LS41Oi41KSkrZS51LGUpfWZ1bmN0aW9uIGhkKHQsZSl7cmV0dXJuIGUuc2V0KGUudCxlLnAsdD9lLmU6ZS5iLGUpfWZ1bmN0aW9uIGlkKHQsZSl7cmV0dXJuIGUuc2V0KGUudCxlLnAsMSE9PXQ/ZS5iOmUuZSxlKX1mdW5jdGlvbiBqZCh0LGUscil7cmV0dXJuIHQuc3R5bGVbZV09cn1mdW5jdGlvbiBrZCh0LGUscil7cmV0dXJuIHQuc3R5bGUuc2V0UHJvcGVydHkoZSxyKX1mdW5jdGlvbiBsZCh0LGUscil7cmV0dXJuIHQuX2dzYXBbZV09cn1mdW5jdGlvbiBtZCh0LGUscil7cmV0dXJuIHQuX2dzYXAuc2NhbGVYPXQuX2dzYXAuc2NhbGVZPXJ9ZnVuY3Rpb24gbmQodCxlLHIsaSxuKXt2YXIgYT10Ll9nc2FwO2Euc2NhbGVYPWEuc2NhbGVZPXIsYS5yZW5kZXJUcmFuc2Zvcm0obixhKX1mdW5jdGlvbiBvZCh0LGUscixpLG4pe3ZhciBhPXQuX2dzYXA7YVtlXT1yLGEucmVuZGVyVHJhbnNmb3JtKG4sYSl9ZnVuY3Rpb24gc2QodCxlKXt2YXIgcj1mZS5jcmVhdGVFbGVtZW50TlM/ZmUuY3JlYXRlRWxlbWVudE5TKChlfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIikucmVwbGFjZSgvXmh0dHBzLyxcImh0dHBcIiksdCk6ZmUuY3JlYXRlRWxlbWVudCh0KTtyZXR1cm4gci5zdHlsZT9yOmZlLmNyZWF0ZUVsZW1lbnQodCl9ZnVuY3Rpb24gdGQodCxlLHIpe3ZhciBpPWdldENvbXB1dGVkU3R5bGUodCk7cmV0dXJuIGlbZV18fGkuZ2V0UHJvcGVydHlWYWx1ZShlLnJlcGxhY2UoTmUsXCItJDFcIikudG9Mb3dlckNhc2UoKSl8fGkuZ2V0UHJvcGVydHlWYWx1ZShlKXx8IXImJnRkKHQsamUoZSl8fGUsMSl8fFwiXCJ9ZnVuY3Rpb24gd2QoKXsoZnVuY3Rpb24gX3dpbmRvd0V4aXN0cygpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3d9KSgpJiZ3aW5kb3cuZG9jdW1lbnQmJihsZT13aW5kb3csZmU9bGUuZG9jdW1lbnQsZGU9ZmUuZG9jdW1lbnRFbGVtZW50LHBlPXNkKFwiZGl2XCIpfHx7c3R5bGU6e319LHNkKFwiZGl2XCIpLFZlPWplKFZlKSxYZT1WZStcIk9yaWdpblwiLHBlLnN0eWxlLmNzc1RleHQ9XCJib3JkZXItd2lkdGg6MDtsaW5lLWhlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO3BhZGRpbmc6MFwiLG1lPSEhamUoXCJwZXJzcGVjdGl2ZVwiKSxfZT0xKX1mdW5jdGlvbiB4ZCh0KXt2YXIgZSxyPXNkKFwic3ZnXCIsdGhpcy5vd25lclNWR0VsZW1lbnQmJnRoaXMub3duZXJTVkdFbGVtZW50LmdldEF0dHJpYnV0ZShcInhtbG5zXCIpfHxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLGk9dGhpcy5wYXJlbnROb2RlLG49dGhpcy5uZXh0U2libGluZyxhPXRoaXMuc3R5bGUuY3NzVGV4dDtpZihkZS5hcHBlbmRDaGlsZChyKSxyLmFwcGVuZENoaWxkKHRoaXMpLHRoaXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsdCl0cnl7ZT10aGlzLmdldEJCb3goKSx0aGlzLl9nc2FwQkJveD10aGlzLmdldEJCb3gsdGhpcy5nZXRCQm94PXhkfWNhdGNoKHQpe31lbHNlIHRoaXMuX2dzYXBCQm94JiYoZT10aGlzLl9nc2FwQkJveCgpKTtyZXR1cm4gaSYmKG4/aS5pbnNlcnRCZWZvcmUodGhpcyxuKTppLmFwcGVuZENoaWxkKHRoaXMpKSxkZS5yZW1vdmVDaGlsZChyKSx0aGlzLnN0eWxlLmNzc1RleHQ9YSxlfWZ1bmN0aW9uIHlkKHQsZSl7Zm9yKHZhciByPWUubGVuZ3RoO3ItLTspaWYodC5oYXNBdHRyaWJ1dGUoZVtyXSkpcmV0dXJuIHQuZ2V0QXR0cmlidXRlKGVbcl0pfWZ1bmN0aW9uIHpkKGUpe3ZhciByO3RyeXtyPWUuZ2V0QkJveCgpfWNhdGNoKHQpe3I9eGQuY2FsbChlLCEwKX1yZXR1cm4gciYmKHIud2lkdGh8fHIuaGVpZ2h0KXx8ZS5nZXRCQm94PT09eGR8fChyPXhkLmNhbGwoZSwhMCkpLCFyfHxyLndpZHRofHxyLnh8fHIueT9yOnt4Oit5ZChlLFtcInhcIixcImN4XCIsXCJ4MVwiXSl8fDAseToreWQoZSxbXCJ5XCIsXCJjeVwiLFwieTFcIl0pfHwwLHdpZHRoOjAsaGVpZ2h0OjB9fWZ1bmN0aW9uIEFkKHQpe3JldHVybiEoIXQuZ2V0Q1RNfHx0LnBhcmVudE5vZGUmJiF0Lm93bmVyU1ZHRWxlbWVudHx8IXpkKHQpKX1mdW5jdGlvbiBCZCh0LGUpe2lmKGUpe3ZhciByPXQuc3R5bGU7ZSBpbiBGZSYmZSE9PVhlJiYoZT1WZSksci5yZW1vdmVQcm9wZXJ0eT8oXCJtc1wiIT09ZS5zdWJzdHIoMCwyKSYmXCJ3ZWJraXRcIiE9PWUuc3Vic3RyKDAsNil8fChlPVwiLVwiK2UpLHIucmVtb3ZlUHJvcGVydHkoZS5yZXBsYWNlKE5lLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpKTpyLnJlbW92ZUF0dHJpYnV0ZShlKX19ZnVuY3Rpb24gQ2QodCxlLHIsaSxuLGEpe3ZhciBzPW5ldyBvZSh0Ll9wdCxlLHIsMCwxLGE/aWQ6aGQpO3JldHVybih0Ll9wdD1zKS5iPWkscy5lPW4sdC5fcHJvcHMucHVzaChyKSxzfWZ1bmN0aW9uIEVkKHQsZSxyLGkpe3ZhciBuLGEscyxvLHU9cGFyc2VGbG9hdChyKXx8MCxoPShyK1wiXCIpLnRyaW0oKS5zdWJzdHIoKHUrXCJcIikubGVuZ3RoKXx8XCJweFwiLGw9cGUuc3R5bGUsZj1VZS50ZXN0KGUpLGQ9XCJzdmdcIj09PXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLHA9KGQ/XCJjbGllbnRcIjpcIm9mZnNldFwiKSsoZj9cIldpZHRoXCI6XCJIZWlnaHRcIiksYz1cInB4XCI9PT1pLG09XCIlXCI9PT1pO3JldHVybiBpPT09aHx8IXV8fEtlW2ldfHxLZVtoXT91OihcInB4XCI9PT1ofHxjfHwodT1FZCh0LGUscixcInB4XCIpKSxvPXQuZ2V0Q1RNJiZBZCh0KSwhbSYmXCIlXCIhPT1ofHwhRmVbZV0mJiF+ZS5pbmRleE9mKFwiYWRpdXNcIik/KGxbZj9cIndpZHRoXCI6XCJoZWlnaHRcIl09MTAwKyhjP2g6aSksYT1+ZS5pbmRleE9mKFwiYWRpdXNcIil8fFwiZW1cIj09PWkmJnQuYXBwZW5kQ2hpbGQmJiFkP3Q6dC5wYXJlbnROb2RlLG8mJihhPSh0Lm93bmVyU1ZHRWxlbWVudHx8e30pLnBhcmVudE5vZGUpLGEmJmEhPT1mZSYmYS5hcHBlbmRDaGlsZHx8KGE9ZmUuYm9keSksKHM9YS5fZ3NhcCkmJm0mJnMud2lkdGgmJmYmJnMudGltZT09PUR0LnRpbWU/Y2EodS9zLndpZHRoKjEwMCk6KCFtJiZcIiVcIiE9PWh8fChsLnBvc2l0aW9uPXRkKHQsXCJwb3NpdGlvblwiKSksYT09PXQmJihsLnBvc2l0aW9uPVwic3RhdGljXCIpLGEuYXBwZW5kQ2hpbGQocGUpLG49cGVbcF0sYS5yZW1vdmVDaGlsZChwZSksbC5wb3NpdGlvbj1cImFic29sdXRlXCIsZiYmbSYmKChzPV8oYSkpLnRpbWU9RHQudGltZSxzLndpZHRoPWFbcF0pLGNhKGM/bip1LzEwMDpuJiZ1PzEwMC9uKnU6MCkpKToobj1vP3QuZ2V0QkJveCgpW2Y/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdOnRbcF0sY2EobT91L24qMTAwOnUvMTAwKm4pKSl9ZnVuY3Rpb24gRmQodCxlLHIsaSl7dmFyIG47cmV0dXJuIF9lfHx3ZCgpLGUgaW4gcWUmJlwidHJhbnNmb3JtXCIhPT1lJiZ+KGU9cWVbZV0pLmluZGV4T2YoXCIsXCIpJiYoZT1lLnNwbGl0KFwiLFwiKVswXSksRmVbZV0mJlwidHJhbnNmb3JtXCIhPT1lPyhuPUhlKHQsaSksbj1cInRyYW5zZm9ybU9yaWdpblwiIT09ZT9uW2VdOm4uc3ZnP24ub3JpZ2luOkplKHRkKHQsWGUpKStcIiBcIituLnpPcmlnaW4rXCJweFwiKToobj10LnN0eWxlW2VdKSYmXCJhdXRvXCIhPT1uJiYhaSYmIX4obitcIlwiKS5pbmRleE9mKFwiY2FsYyhcIil8fChuPUdlW2VdJiZHZVtlXSh0LGUscil8fHRkKHQsZSl8fGFhKHQsZSl8fChcIm9wYWNpdHlcIj09PWU/MTowKSksciYmIX4obitcIlwiKS50cmltKCkuaW5kZXhPZihcIiBcIik/RWQodCxlLG4scikrcjpufWZ1bmN0aW9uIEdkKHQsZSxyLGkpe2lmKCFyfHxcIm5vbmVcIj09PXIpe3ZhciBuPWplKGUsdCwxKSxhPW4mJnRkKHQsbiwxKTthJiZhIT09cj8oZT1uLHI9YSk6XCJib3JkZXJDb2xvclwiPT09ZSYmKHI9dGQodCxcImJvcmRlclRvcENvbG9yXCIpKX12YXIgcyxvLHUsaCxsLGYsZCxfLHAsYyxtLGc9bmV3IG9lKHRoaXMuX3B0LHQuc3R5bGUsZSwwLDEsZWUpLHY9MCx5PTA7aWYoZy5iPXIsZy5lPWkscis9XCJcIixcImF1dG9cIj09PShpKz1cIlwiKSYmKHQuc3R5bGVbZV09aSxpPXRkKHQsZSl8fGksdC5zdHlsZVtlXT1yKSx4YihzPVtyLGldKSxpPXNbMV0sdT0ocj1zWzBdKS5tYXRjaChydCl8fFtdLChpLm1hdGNoKHJ0KXx8W10pLmxlbmd0aCl7Zm9yKDtvPXJ0LmV4ZWMoaSk7KWQ9b1swXSxwPWkuc3Vic3RyaW5nKHYsby5pbmRleCksbD9sPShsKzEpJTU6XCJyZ2JhKFwiIT09cC5zdWJzdHIoLTUpJiZcImhzbGEoXCIhPT1wLnN1YnN0cigtNSl8fChsPTEpLGQhPT0oZj11W3krK118fFwiXCIpJiYoaD1wYXJzZUZsb2F0KGYpfHwwLG09Zi5zdWJzdHIoKGgrXCJcIikubGVuZ3RoKSxcIj1cIj09PWQuY2hhckF0KDEpJiYoZD1lYShoLGQpK20pLF89cGFyc2VGbG9hdChkKSxjPWQuc3Vic3RyKChfK1wiXCIpLmxlbmd0aCksdj1ydC5sYXN0SW5kZXgtYy5sZW5ndGgsY3x8KGM9Y3x8VS51bml0c1tlXXx8bSx2PT09aS5sZW5ndGgmJihpKz1jLGcuZSs9YykpLG0hPT1jJiYoaD1FZCh0LGUsZixjKXx8MCksZy5fcHQ9e19uZXh0OmcuX3B0LHA6cHx8MT09PXk/cDpcIixcIixzOmgsYzpfLWgsbTpsJiZsPDR8fFwiekluZGV4XCI9PT1lP01hdGgucm91bmQ6MH0pO2cuYz12PGkubGVuZ3RoP2kuc3Vic3RyaW5nKHYsaS5sZW5ndGgpOlwiXCJ9ZWxzZSBnLnI9XCJkaXNwbGF5XCI9PT1lJiZcIm5vbmVcIj09PWk/aWQ6aGQ7cmV0dXJuIG50LnRlc3QoaSkmJihnLmU9MCksdGhpcy5fcHQ9Z31mdW5jdGlvbiBJZCh0KXt2YXIgZT10LnNwbGl0KFwiIFwiKSxyPWVbMF0saT1lWzFdfHxcIjUwJVwiO3JldHVyblwidG9wXCIhPT1yJiZcImJvdHRvbVwiIT09ciYmXCJsZWZ0XCIhPT1pJiZcInJpZ2h0XCIhPT1pfHwodD1yLHI9aSxpPXQpLGVbMF09JGVbcl18fHIsZVsxXT0kZVtpXXx8aSxlLmpvaW4oXCIgXCIpfWZ1bmN0aW9uIEpkKHQsZSl7aWYoZS50d2VlbiYmZS50d2Vlbi5fdGltZT09PWUudHdlZW4uX2R1cil7dmFyIHIsaSxuLGE9ZS50LHM9YS5zdHlsZSxvPWUudSx1PWEuX2dzYXA7aWYoXCJhbGxcIj09PW98fCEwPT09bylzLmNzc1RleHQ9XCJcIixpPTE7ZWxzZSBmb3Iobj0obz1vLnNwbGl0KFwiLFwiKSkubGVuZ3RoOy0xPC0tbjspcj1vW25dLEZlW3JdJiYoaT0xLHI9XCJ0cmFuc2Zvcm1PcmlnaW5cIj09PXI/WGU6VmUpLEJkKGEscik7aSYmKEJkKGEsVmUpLHUmJih1LnN2ZyYmYS5yZW1vdmVBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiksSGUoYSwxKSx1LnVuY2FjaGU9MSkpfX1mdW5jdGlvbiBOZCh0KXtyZXR1cm5cIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiPT09dHx8XCJub25lXCI9PT10fHwhdH1mdW5jdGlvbiBPZCh0KXt2YXIgZT10ZCh0LFZlKTtyZXR1cm4gTmQoZSk/V2U6ZS5zdWJzdHIoNykubWF0Y2goZXQpLm1hcChjYSl9ZnVuY3Rpb24gUGQodCxlKXt2YXIgcixpLG4sYSxzPXQuX2dzYXB8fF8odCksbz10LnN0eWxlLHU9T2QodCk7cmV0dXJuIHMuc3ZnJiZ0LmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKT9cIjEsMCwwLDEsMCwwXCI9PT0odT1bKG49dC50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpLm1hdHJpeCkuYSxuLmIsbi5jLG4uZCxuLmUsbi5mXSkuam9pbihcIixcIik/V2U6dToodSE9PVdlfHx0Lm9mZnNldFBhcmVudHx8dD09PWRlfHxzLnN2Z3x8KG49by5kaXNwbGF5LG8uZGlzcGxheT1cImJsb2NrXCIsKHI9dC5wYXJlbnROb2RlKSYmdC5vZmZzZXRQYXJlbnR8fChhPTEsaT10Lm5leHRTaWJsaW5nLGRlLmFwcGVuZENoaWxkKHQpKSx1PU9kKHQpLG4/by5kaXNwbGF5PW46QmQodCxcImRpc3BsYXlcIiksYSYmKGk/ci5pbnNlcnRCZWZvcmUodCxpKTpyP3IuYXBwZW5kQ2hpbGQodCk6ZGUucmVtb3ZlQ2hpbGQodCkpKSxlJiY2PHUubGVuZ3RoP1t1WzBdLHVbMV0sdVs0XSx1WzVdLHVbMTJdLHVbMTNdXTp1KX1mdW5jdGlvbiBRZCh0LGUscixpLG4sYSl7dmFyIHMsbyx1LGg9dC5fZ3NhcCxsPW58fFBkKHQsITApLGY9aC54T3JpZ2lufHwwLGQ9aC55T3JpZ2lufHwwLF89aC54T2Zmc2V0fHwwLHA9aC55T2Zmc2V0fHwwLGM9bFswXSxtPWxbMV0sZz1sWzJdLHY9bFszXSx5PWxbNF0sVD1sWzVdLGI9ZS5zcGxpdChcIiBcIiksdz1wYXJzZUZsb2F0KGJbMF0pfHwwLHg9cGFyc2VGbG9hdChiWzFdKXx8MDtyP2whPT1XZSYmKG89Yyp2LW0qZykmJih1PXcqKC1tL28pK3gqKGMvbyktKGMqVC1tKnkpL28sdz13Kih2L28pK3gqKC1nL28pKyhnKlQtdip5KS9vLHg9dSk6KHc9KHM9emQodCkpLngrKH5iWzBdLmluZGV4T2YoXCIlXCIpP3cvMTAwKnMud2lkdGg6dykseD1zLnkrKH4oYlsxXXx8YlswXSkuaW5kZXhPZihcIiVcIik/eC8xMDAqcy5oZWlnaHQ6eCkpLGl8fCExIT09aSYmaC5zbW9vdGg/KHk9dy1mLFQ9eC1kLGgueE9mZnNldD1fKyh5KmMrVCpnKS15LGgueU9mZnNldD1wKyh5Km0rVCp2KS1UKTpoLnhPZmZzZXQ9aC55T2Zmc2V0PTAsaC54T3JpZ2luPXcsaC55T3JpZ2luPXgsaC5zbW9vdGg9ISFpLGgub3JpZ2luPWUsaC5vcmlnaW5Jc0Fic29sdXRlPSEhcix0LnN0eWxlW1hlXT1cIjBweCAwcHhcIixhJiYoQ2QoYSxoLFwieE9yaWdpblwiLGYsdyksQ2QoYSxoLFwieU9yaWdpblwiLGQseCksQ2QoYSxoLFwieE9mZnNldFwiLF8saC54T2Zmc2V0KSxDZChhLGgsXCJ5T2Zmc2V0XCIscCxoLnlPZmZzZXQpKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiLHcrXCIgXCIreCl9ZnVuY3Rpb24gVGQodCxlLHIpe3ZhciBpPVJhKGUpO3JldHVybiBjYShwYXJzZUZsb2F0KGUpK3BhcnNlRmxvYXQoRWQodCxcInhcIixyK1wicHhcIixpKSkpK2l9ZnVuY3Rpb24gJGQodCxlLHIsaSxuKXt2YXIgYSxzLHU9MzYwLGg9byhuKSxsPXBhcnNlRmxvYXQobikqKGgmJn5uLmluZGV4T2YoXCJyYWRcIik/QmU6MSktaSxmPWkrbCtcImRlZ1wiO3JldHVybiBoJiYoXCJzaG9ydFwiPT09KGE9bi5zcGxpdChcIl9cIilbMV0pJiYobCU9dSkhPT1sJTE4MCYmKGwrPWw8MD91Oi11KSxcImN3XCI9PT1hJiZsPDA/bD0obCszNmU5KSV1LX5+KGwvdSkqdTpcImNjd1wiPT09YSYmMDxsJiYobD0obC0zNmU5KSV1LX5+KGwvdSkqdSkpLHQuX3B0PXM9bmV3IG9lKHQuX3B0LGUscixpLGwsZWQpLHMuZT1mLHMudT1cImRlZ1wiLHQuX3Byb3BzLnB1c2gociksc31mdW5jdGlvbiBfZCh0LGUpe2Zvcih2YXIgciBpbiBlKXRbcl09ZVtyXTtyZXR1cm4gdH1mdW5jdGlvbiBhZSh0LGUscil7dmFyIGksbixhLHMsbyx1LGgsbD1fZCh7fSxyLl9nc2FwKSxmPXIuc3R5bGU7Zm9yKG4gaW4gbC5zdmc/KGE9ci5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiksci5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIixcIlwiKSxmW1ZlXT1lLGk9SGUociwxKSxCZChyLFZlKSxyLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLGEpKTooYT1nZXRDb21wdXRlZFN0eWxlKHIpW1ZlXSxmW1ZlXT1lLGk9SGUociwxKSxmW1ZlXT1hKSxGZSkoYT1sW25dKSE9PShzPWlbbl0pJiZcInBlcnNwZWN0aXZlLGZvcmNlM0QsdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpblwiLmluZGV4T2Yobik8MCYmKG89UmEoYSkhPT0oaD1SYShzKSk/RWQocixuLGEsaCk6cGFyc2VGbG9hdChhKSx1PXBhcnNlRmxvYXQocyksdC5fcHQ9bmV3IG9lKHQuX3B0LGksbixvLHUtbyxkZCksdC5fcHQudT1ofHwwLHQuX3Byb3BzLnB1c2gobikpO19kKGksbCl9dmFyIGxlLGZlLGRlLF9lLHBlLGNlLG1lLGdlPXp0LlBvd2VyMCx2ZT16dC5Qb3dlcjEseWU9enQuUG93ZXIyLFRlPXp0LlBvd2VyMyxiZT16dC5Qb3dlcjQsd2U9enQuTGluZWFyLHhlPXp0LlF1YWQsa2U9enQuQ3ViaWMsT2U9enQuUXVhcnQsUGU9enQuUXVpbnQsTWU9enQuU3Ryb25nLENlPXp0LkVsYXN0aWMsQWU9enQuQmFjayxEZT16dC5TdGVwcGVkRWFzZSxTZT16dC5Cb3VuY2UsemU9enQuU2luZSxSZT16dC5FeHBvLEVlPXp0LkNpcmMsRmU9e30sQmU9MTgwL01hdGguUEksSWU9TWF0aC5QSS8xODAsTGU9TWF0aC5hdGFuMixOZT0vKFtBLVpdKS9nLFVlPS8obGVmdHxyaWdodHx3aWR0aHxtYXJnaW58cGFkZGluZ3x4KS9pLFllPS9bXFxzLFxcKF1cXFMvLHFlPXthdXRvQWxwaGE6XCJvcGFjaXR5LHZpc2liaWxpdHlcIixzY2FsZTpcInNjYWxlWCxzY2FsZVlcIixhbHBoYTpcIm9wYWNpdHlcIn0sVmU9XCJ0cmFuc2Zvcm1cIixYZT1WZStcIk9yaWdpblwiLFFlPVwiTyxNb3osbXMsTXMsV2Via2l0XCIuc3BsaXQoXCIsXCIpLGplPWZ1bmN0aW9uIF9jaGVja1Byb3BQcmVmaXgodCxlLHIpe3ZhciBpPShlfHxwZSkuc3R5bGUsbj01O2lmKHQgaW4gaSYmIXIpcmV0dXJuIHQ7Zm9yKHQ9dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSt0LnN1YnN0cigxKTtuLS0mJiEoUWVbbl0rdCBpbiBpKTspO3JldHVybiBuPDA/bnVsbDooMz09PW4/XCJtc1wiOjA8PW4/UWVbbl06XCJcIikrdH0sS2U9e2RlZzoxLHJhZDoxLHR1cm46MX0sJGU9e3RvcDpcIjAlXCIsYm90dG9tOlwiMTAwJVwiLGxlZnQ6XCIwJVwiLHJpZ2h0OlwiMTAwJVwiLGNlbnRlcjpcIjUwJVwifSxHZT17Y2xlYXJQcm9wczpmdW5jdGlvbiBjbGVhclByb3BzKHQsZSxyLGksbil7aWYoXCJpc0Zyb21TdGFydFwiIT09bi5kYXRhKXt2YXIgYT10Ll9wdD1uZXcgb2UodC5fcHQsZSxyLDAsMCxKZCk7cmV0dXJuIGEudT1pLGEucHI9LTEwLGEudHdlZW49bix0Ll9wcm9wcy5wdXNoKHIpLDF9fX0sV2U9WzEsMCwwLDEsMCwwXSxaZT17fSxIZT1mdW5jdGlvbiBfcGFyc2VUcmFuc2Zvcm0odCxlKXt2YXIgcj10Ll9nc2FwfHxuZXcgTHQodCk7aWYoXCJ4XCJpbiByJiYhZSYmIXIudW5jYWNoZSlyZXR1cm4gcjt2YXIgaSxuLGEscyxvLHUsaCxsLGYsZCxfLHAsYyxtLGcsdix5LFQsYix3LHgsayxPLFAsTSxDLEEsRCxTLHosUixFLEY9dC5zdHlsZSxCPXIuc2NhbGVYPDAsST1cImRlZ1wiLEw9dGQodCxYZSl8fFwiMFwiO3JldHVybiBpPW49YT11PWg9bD1mPWQ9Xz0wLHM9bz0xLHIuc3ZnPSEoIXQuZ2V0Q1RNfHwhQWQodCkpLG09UGQodCxyLnN2Zyksci5zdmcmJihQPSghci51bmNhY2hlfHxcIjBweCAwcHhcIj09PUwpJiYhZSYmdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiksUWQodCxQfHxMLCEhUHx8ci5vcmlnaW5Jc0Fic29sdXRlLCExIT09ci5zbW9vdGgsbSkpLHA9ci54T3JpZ2lufHwwLGM9ci55T3JpZ2lufHwwLG0hPT1XZSYmKFQ9bVswXSxiPW1bMV0sdz1tWzJdLHg9bVszXSxpPWs9bVs0XSxuPU89bVs1XSw2PT09bS5sZW5ndGg/KHM9TWF0aC5zcXJ0KFQqVCtiKmIpLG89TWF0aC5zcXJ0KHgqeCt3KncpLHU9VHx8Yj9MZShiLFQpKkJlOjAsKGY9d3x8eD9MZSh3LHgpKkJlK3U6MCkmJihvKj1NYXRoLmFicyhNYXRoLmNvcyhmKkllKSkpLHIuc3ZnJiYoaS09cC0ocCpUK2Mqdyksbi09Yy0ocCpiK2MqeCkpKTooRT1tWzZdLHo9bVs3XSxBPW1bOF0sRD1tWzldLFM9bVsxMF0sUj1tWzExXSxpPW1bMTJdLG49bVsxM10sYT1tWzE0XSxoPShnPUxlKEUsUykpKkJlLGcmJihQPWsqKHY9TWF0aC5jb3MoLWcpKStBKih5PU1hdGguc2luKC1nKSksTT1PKnYrRCp5LEM9RSp2K1MqeSxBPWsqLXkrQSp2LEQ9TyoteStEKnYsUz1FKi15K1MqdixSPXoqLXkrUip2LGs9UCxPPU0sRT1DKSxsPShnPUxlKC13LFMpKSpCZSxnJiYodj1NYXRoLmNvcygtZyksUj14Kih5PU1hdGguc2luKC1nKSkrUip2LFQ9UD1UKnYtQSp5LGI9TT1iKnYtRCp5LHc9Qz13KnYtUyp5KSx1PShnPUxlKGIsVCkpKkJlLGcmJihQPVQqKHY9TWF0aC5jb3MoZykpK2IqKHk9TWF0aC5zaW4oZykpLE09ayp2K08qeSxiPWIqdi1UKnksTz1PKnYtayp5LFQ9UCxrPU0pLGgmJjM1OS45PE1hdGguYWJzKGgpK01hdGguYWJzKHUpJiYoaD11PTAsbD0xODAtbCkscz1jYShNYXRoLnNxcnQoVCpUK2IqYit3KncpKSxvPWNhKE1hdGguc3FydChPKk8rRSpFKSksZz1MZShrLE8pLGY9MmUtNDxNYXRoLmFicyhnKT9nKkJlOjAsXz1SPzEvKFI8MD8tUjpSKTowKSxyLnN2ZyYmKFA9dC5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiksci5mb3JjZUNTUz10LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLFwiXCIpfHwhTmQodGQodCxWZSkpLFAmJnQuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsUCkpKSw5MDxNYXRoLmFicyhmKSYmTWF0aC5hYnMoZik8MjcwJiYoQj8ocyo9LTEsZis9dTw9MD8xODA6LTE4MCx1Kz11PD0wPzE4MDotMTgwKToobyo9LTEsZis9Zjw9MD8xODA6LTE4MCkpLGU9ZXx8ci51bmNhY2hlLHIueD1pLSgoci54UGVyY2VudD1pJiYoIWUmJnIueFBlcmNlbnR8fChNYXRoLnJvdW5kKHQub2Zmc2V0V2lkdGgvMik9PT1NYXRoLnJvdW5kKC1pKT8tNTA6MCkpKT90Lm9mZnNldFdpZHRoKnIueFBlcmNlbnQvMTAwOjApK1wicHhcIixyLnk9bi0oKHIueVBlcmNlbnQ9biYmKCFlJiZyLnlQZXJjZW50fHwoTWF0aC5yb3VuZCh0Lm9mZnNldEhlaWdodC8yKT09PU1hdGgucm91bmQoLW4pPy01MDowKSkpP3Qub2Zmc2V0SGVpZ2h0KnIueVBlcmNlbnQvMTAwOjApK1wicHhcIixyLno9YStcInB4XCIsci5zY2FsZVg9Y2Eocyksci5zY2FsZVk9Y2Eobyksci5yb3RhdGlvbj1jYSh1KStJLHIucm90YXRpb25YPWNhKGgpK0ksci5yb3RhdGlvblk9Y2EobCkrSSxyLnNrZXdYPWYrSSxyLnNrZXdZPWQrSSxyLnRyYW5zZm9ybVBlcnNwZWN0aXZlPV8rXCJweFwiLChyLnpPcmlnaW49cGFyc2VGbG9hdChMLnNwbGl0KFwiIFwiKVsyXSl8fDApJiYoRltYZV09SmUoTCkpLHIueE9mZnNldD1yLnlPZmZzZXQ9MCxyLmZvcmNlM0Q9VS5mb3JjZTNELHIucmVuZGVyVHJhbnNmb3JtPXIuc3ZnP2FyOm1lP25yOnRyLHIudW5jYWNoZT0wLHJ9LEplPWZ1bmN0aW9uIF9maXJzdFR3b09ubHkodCl7cmV0dXJuKHQ9dC5zcGxpdChcIiBcIikpWzBdK1wiIFwiK3RbMV19LHRyPWZ1bmN0aW9uIF9yZW5kZXJOb24zRFRyYW5zZm9ybXModCxlKXtlLno9XCIwcHhcIixlLnJvdGF0aW9uWT1lLnJvdGF0aW9uWD1cIjBkZWdcIixlLmZvcmNlM0Q9MCxucih0LGUpfSxlcj1cIjBkZWdcIixycj1cIjBweFwiLGlyPVwiKSBcIixucj1mdW5jdGlvbiBfcmVuZGVyQ1NTVHJhbnNmb3Jtcyh0LGUpe3ZhciByPWV8fHRoaXMsaT1yLnhQZXJjZW50LG49ci55UGVyY2VudCxhPXIueCxzPXIueSxvPXIueix1PXIucm90YXRpb24saD1yLnJvdGF0aW9uWSxsPXIucm90YXRpb25YLGY9ci5za2V3WCxkPXIuc2tld1ksXz1yLnNjYWxlWCxwPXIuc2NhbGVZLGM9ci50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxtPXIuZm9yY2UzRCxnPXIudGFyZ2V0LHY9ci56T3JpZ2luLHk9XCJcIixUPVwiYXV0b1wiPT09bSYmdCYmMSE9PXR8fCEwPT09bTtpZih2JiYobCE9PWVyfHxoIT09ZXIpKXt2YXIgYix3PXBhcnNlRmxvYXQoaCkqSWUseD1NYXRoLnNpbih3KSxrPU1hdGguY29zKHcpO3c9cGFyc2VGbG9hdChsKSpJZSxiPU1hdGguY29zKHcpLGE9VGQoZyxhLHgqYiotdikscz1UZChnLHMsLU1hdGguc2luKHcpKi12KSxvPVRkKGcsbyxrKmIqLXYrdil9YyE9PXJyJiYoeSs9XCJwZXJzcGVjdGl2ZShcIitjK2lyKSwoaXx8bikmJih5Kz1cInRyYW5zbGF0ZShcIitpK1wiJSwgXCIrbitcIiUpIFwiKSwhVCYmYT09PXJyJiZzPT09cnImJm89PT1ycnx8KHkrPW8hPT1ycnx8VD9cInRyYW5zbGF0ZTNkKFwiK2ErXCIsIFwiK3MrXCIsIFwiK28rXCIpIFwiOlwidHJhbnNsYXRlKFwiK2ErXCIsIFwiK3MraXIpLHUhPT1lciYmKHkrPVwicm90YXRlKFwiK3UraXIpLGghPT1lciYmKHkrPVwicm90YXRlWShcIitoK2lyKSxsIT09ZXImJih5Kz1cInJvdGF0ZVgoXCIrbCtpciksZj09PWVyJiZkPT09ZXJ8fCh5Kz1cInNrZXcoXCIrZitcIiwgXCIrZCtpciksMT09PV8mJjE9PT1wfHwoeSs9XCJzY2FsZShcIitfK1wiLCBcIitwK2lyKSxnLnN0eWxlW1ZlXT15fHxcInRyYW5zbGF0ZSgwLCAwKVwifSxhcj1mdW5jdGlvbiBfcmVuZGVyU1ZHVHJhbnNmb3Jtcyh0LGUpe3ZhciByLGksbixhLHMsbz1lfHx0aGlzLHU9by54UGVyY2VudCxoPW8ueVBlcmNlbnQsbD1vLngsZj1vLnksZD1vLnJvdGF0aW9uLF89by5za2V3WCxwPW8uc2tld1ksYz1vLnNjYWxlWCxtPW8uc2NhbGVZLGc9by50YXJnZXQsdj1vLnhPcmlnaW4seT1vLnlPcmlnaW4sVD1vLnhPZmZzZXQsYj1vLnlPZmZzZXQsdz1vLmZvcmNlQ1NTLHg9cGFyc2VGbG9hdChsKSxrPXBhcnNlRmxvYXQoZik7ZD1wYXJzZUZsb2F0KGQpLF89cGFyc2VGbG9hdChfKSwocD1wYXJzZUZsb2F0KHApKSYmKF8rPXA9cGFyc2VGbG9hdChwKSxkKz1wKSxkfHxfPyhkKj1JZSxfKj1JZSxyPU1hdGguY29zKGQpKmMsaT1NYXRoLnNpbihkKSpjLG49TWF0aC5zaW4oZC1fKSotbSxhPU1hdGguY29zKGQtXykqbSxfJiYocCo9SWUscz1NYXRoLnRhbihfLXApLG4qPXM9TWF0aC5zcXJ0KDErcypzKSxhKj1zLHAmJihzPU1hdGgudGFuKHApLHIqPXM9TWF0aC5zcXJ0KDErcypzKSxpKj1zKSkscj1jYShyKSxpPWNhKGkpLG49Y2EobiksYT1jYShhKSk6KHI9YyxhPW0saT1uPTApLCh4JiYhfihsK1wiXCIpLmluZGV4T2YoXCJweFwiKXx8ayYmIX4oZitcIlwiKS5pbmRleE9mKFwicHhcIikpJiYoeD1FZChnLFwieFwiLGwsXCJweFwiKSxrPUVkKGcsXCJ5XCIsZixcInB4XCIpKSwodnx8eXx8VHx8YikmJih4PWNhKHgrdi0odipyK3kqbikrVCksaz1jYShrK3ktKHYqaSt5KmEpK2IpKSwodXx8aCkmJihzPWcuZ2V0QkJveCgpLHg9Y2EoeCt1LzEwMCpzLndpZHRoKSxrPWNhKGsraC8xMDAqcy5oZWlnaHQpKSxzPVwibWF0cml4KFwiK3IrXCIsXCIraStcIixcIituK1wiLFwiK2ErXCIsXCIreCtcIixcIitrK1wiKVwiLGcuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIscyksdyYmKGcuc3R5bGVbVmVdPXMpfTtiYShcInBhZGRpbmcsbWFyZ2luLFdpZHRoLFJhZGl1c1wiLGZ1bmN0aW9uKGUscil7dmFyIHQ9XCJSaWdodFwiLGk9XCJCb3R0b21cIixuPVwiTGVmdFwiLG89KHI8Mz9bXCJUb3BcIix0LGksbl06W1wiVG9wXCIrbixcIlRvcFwiK3QsaSt0LGkrbl0pLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gcjwyP2UrdDpcImJvcmRlclwiK3QrZX0pO0dlWzE8cj9cImJvcmRlclwiK2U6ZV09ZnVuY3Rpb24oZSx0LHIsaSxuKXt2YXIgYSxzO2lmKGFyZ3VtZW50cy5sZW5ndGg8NClyZXR1cm4gYT1vLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gRmQoZSx0LHIpfSksNT09PShzPWEuam9pbihcIiBcIikpLnNwbGl0KGFbMF0pLmxlbmd0aD9hWzBdOnM7YT0oaStcIlwiKS5zcGxpdChcIiBcIikscz17fSxvLmZvckVhY2goZnVuY3Rpb24odCxlKXtyZXR1cm4gc1t0XT1hW2VdPWFbZV18fGFbKGUtMSkvMnwwXX0pLGUuaW5pdCh0LHMsbil9fSk7dmFyIHNyLG9yLHVyLGhyPXtuYW1lOlwiY3NzXCIscmVnaXN0ZXI6d2QsdGFyZ2V0VGVzdDpmdW5jdGlvbiB0YXJnZXRUZXN0KHQpe3JldHVybiB0LnN0eWxlJiZ0Lm5vZGVUeXBlfSxpbml0OmZ1bmN0aW9uIGluaXQodCxlLHIsaSxuKXt2YXIgYSxzLHUsaCxsLGYsZCxfLHAsYyxtLGcsdix5LFQsYj10aGlzLl9wcm9wcyx3PXQuc3R5bGUseD1yLnZhcnMuc3RhcnRBdDtmb3IoZCBpbiBfZXx8d2QoKSxlKWlmKFwiYXV0b1JvdW5kXCIhPT1kJiYocz1lW2RdLCFmdFtkXXx8IVViKGQsZSxyLGksdCxuKSkpaWYobD10eXBlb2YgcyxmPUdlW2RdLFwiZnVuY3Rpb25cIj09PWwmJihsPXR5cGVvZihzPXMuY2FsbChyLGksdCxuKSkpLFwic3RyaW5nXCI9PT1sJiZ+cy5pbmRleE9mKFwicmFuZG9tKFwiKSYmKHM9aGIocykpLGYpZih0aGlzLHQsZCxzLHIpJiYoVD0xKTtlbHNlIGlmKFwiLS1cIj09PWQuc3Vic3RyKDAsMikpYT0oZ2V0Q29tcHV0ZWRTdHlsZSh0KS5nZXRQcm9wZXJ0eVZhbHVlKGQpK1wiXCIpLnRyaW0oKSxzKz1cIlwiLEN0Lmxhc3RJbmRleD0wLEN0LnRlc3QoYSl8fChfPVJhKGEpLHA9UmEocykpLHA/XyE9PXAmJihhPUVkKHQsZCxhLHApK3ApOl8mJihzKz1fKSx0aGlzLmFkZCh3LFwic2V0UHJvcGVydHlcIixhLHMsaSxuLDAsMCxkKSxiLnB1c2goZCk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT09bCl7aWYoeCYmZCBpbiB4PyhhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHhbZF0/eFtkXS5jYWxsKHIsaSx0LG4pOnhbZF0sbyhhKSYmfmEuaW5kZXhPZihcInJhbmRvbShcIikmJihhPWhiKGEpKSxSYShhK1wiXCIpfHwoYSs9VS51bml0c1tkXXx8UmEoRmQodCxkKSl8fFwiXCIpLFwiPVwiPT09KGErXCJcIikuY2hhckF0KDEpJiYoYT1GZCh0LGQpKSk6YT1GZCh0LGQpLGg9cGFyc2VGbG9hdChhKSwoYz1cInN0cmluZ1wiPT09bCYmXCI9XCI9PT1zLmNoYXJBdCgxKSYmcy5zdWJzdHIoMCwyKSkmJihzPXMuc3Vic3RyKDIpKSx1PXBhcnNlRmxvYXQocyksZCBpbiBxZSYmKFwiYXV0b0FscGhhXCI9PT1kJiYoMT09PWgmJlwiaGlkZGVuXCI9PT1GZCh0LFwidmlzaWJpbGl0eVwiKSYmdSYmKGg9MCksQ2QodGhpcyx3LFwidmlzaWJpbGl0eVwiLGg/XCJpbmhlcml0XCI6XCJoaWRkZW5cIix1P1wiaW5oZXJpdFwiOlwiaGlkZGVuXCIsIXUpKSxcInNjYWxlXCIhPT1kJiZcInRyYW5zZm9ybVwiIT09ZCYmfihkPXFlW2RdKS5pbmRleE9mKFwiLFwiKSYmKGQ9ZC5zcGxpdChcIixcIilbMF0pKSxtPWQgaW4gRmUpaWYoZ3x8KCh2PXQuX2dzYXApLnJlbmRlclRyYW5zZm9ybSYmIWUucGFyc2VUcmFuc2Zvcm18fEhlKHQsZS5wYXJzZVRyYW5zZm9ybSkseT0hMSE9PWUuc21vb3RoT3JpZ2luJiZ2LnNtb290aCwoZz10aGlzLl9wdD1uZXcgb2UodGhpcy5fcHQsdyxWZSwwLDEsdi5yZW5kZXJUcmFuc2Zvcm0sdiwwLC0xKSkuZGVwPTEpLFwic2NhbGVcIj09PWQpdGhpcy5fcHQ9bmV3IG9lKHRoaXMuX3B0LHYsXCJzY2FsZVlcIix2LnNjYWxlWSwoYz9lYSh2LnNjYWxlWSxjK3UpOnUpLXYuc2NhbGVZfHwwKSxiLnB1c2goXCJzY2FsZVlcIixkKSxkKz1cIlhcIjtlbHNle2lmKFwidHJhbnNmb3JtT3JpZ2luXCI9PT1kKXtzPUlkKHMpLHYuc3ZnP1FkKHQscywwLHksMCx0aGlzKTooKHA9cGFyc2VGbG9hdChzLnNwbGl0KFwiIFwiKVsyXSl8fDApIT09di56T3JpZ2luJiZDZCh0aGlzLHYsXCJ6T3JpZ2luXCIsdi56T3JpZ2luLHApLENkKHRoaXMsdyxkLEplKGEpLEplKHMpKSk7Y29udGludWV9aWYoXCJzdmdPcmlnaW5cIj09PWQpe1FkKHQscywxLHksMCx0aGlzKTtjb250aW51ZX1pZihkIGluIFplKXskZCh0aGlzLHYsZCxoLGM/ZWEoaCxjK3MpOnMpO2NvbnRpbnVlfWlmKFwic21vb3RoT3JpZ2luXCI9PT1kKXtDZCh0aGlzLHYsXCJzbW9vdGhcIix2LnNtb290aCxzKTtjb250aW51ZX1pZihcImZvcmNlM0RcIj09PWQpe3ZbZF09cztjb250aW51ZX1pZihcInRyYW5zZm9ybVwiPT09ZCl7YWUodGhpcyxzLHQpO2NvbnRpbnVlfX1lbHNlIGQgaW4gd3x8KGQ9amUoZCl8fGQpO2lmKG18fCh1fHwwPT09dSkmJihofHwwPT09aCkmJiFZZS50ZXN0KHMpJiZkIGluIHcpdT11fHwwLChfPShhK1wiXCIpLnN1YnN0cigoaCtcIlwiKS5sZW5ndGgpKSE9PShwPVJhKHMpfHwoZCBpbiBVLnVuaXRzP1UudW5pdHNbZF06XykpJiYoaD1FZCh0LGQsYSxwKSksdGhpcy5fcHQ9bmV3IG9lKHRoaXMuX3B0LG0/djp3LGQsaCwoYz9lYShoLGMrdSk6dSktaCxtfHxcInB4XCIhPT1wJiZcInpJbmRleFwiIT09ZHx8ITE9PT1lLmF1dG9Sb3VuZD9kZDpnZCksdGhpcy5fcHQudT1wfHwwLF8hPT1wJiZcIiVcIiE9PXAmJih0aGlzLl9wdC5iPWEsdGhpcy5fcHQucj1mZCk7ZWxzZSBpZihkIGluIHcpR2QuY2FsbCh0aGlzLHQsZCxhLGM/YytzOnMpO2Vsc2V7aWYoIShkIGluIHQpKXtOKGQscyk7Y29udGludWV9dGhpcy5hZGQodCxkLGF8fHRbZF0sYz9jK3M6cyxpLG4pfWIucHVzaChkKX1UJiZzZSh0aGlzKX0sZ2V0OkZkLGFsaWFzZXM6cWUsZ2V0U2V0dGVyOmZ1bmN0aW9uIGdldFNldHRlcih0LGUsaSl7dmFyIG49cWVbZV07cmV0dXJuIG4mJm4uaW5kZXhPZihcIixcIik8MCYmKGU9biksZSBpbiBGZSYmZSE9PVhlJiYodC5fZ3NhcC54fHxGZCh0LFwieFwiKSk/aSYmY2U9PT1pP1wic2NhbGVcIj09PWU/bWQ6bGQ6KGNlPWl8fHt9KSYmKFwic2NhbGVcIj09PWU/bmQ6b2QpOnQuc3R5bGUmJiFyKHQuc3R5bGVbZV0pP2pkOn5lLmluZGV4T2YoXCItXCIpP2tkOkh0KHQsZSl9LGNvcmU6e19yZW1vdmVQcm9wZXJ0eTpCZCxfZ2V0TWF0cml4OlBkfX07aGUudXRpbHMuY2hlY2tQcmVmaXg9amUsdXI9YmEoKHNyPVwieCx5LHosc2NhbGUsc2NhbGVYLHNjYWxlWSx4UGVyY2VudCx5UGVyY2VudFwiKStcIixcIisob3I9XCJyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHNrZXdYLHNrZXdZXCIpK1wiLHRyYW5zZm9ybSx0cmFuc2Zvcm1PcmlnaW4sc3ZnT3JpZ2luLGZvcmNlM0Qsc21vb3RoT3JpZ2luLHRyYW5zZm9ybVBlcnNwZWN0aXZlXCIsZnVuY3Rpb24odCl7RmVbdF09MX0pLGJhKG9yLGZ1bmN0aW9uKHQpe1UudW5pdHNbdF09XCJkZWdcIixaZVt0XT0xfSkscWVbdXJbMTNdXT1zcitcIixcIitvcixiYShcIjA6dHJhbnNsYXRlWCwxOnRyYW5zbGF0ZVksMjp0cmFuc2xhdGVaLDg6cm90YXRlLDg6cm90YXRpb25aLDg6cm90YXRlWiw5OnJvdGF0ZVgsMTA6cm90YXRlWVwiLGZ1bmN0aW9uKHQpe3ZhciBlPXQuc3BsaXQoXCI6XCIpO3FlW2VbMV1dPXVyW2VbMF1dfSksYmEoXCJ4LHkseix0b3AscmlnaHQsYm90dG9tLGxlZnQsd2lkdGgsaGVpZ2h0LGZvbnRTaXplLHBhZGRpbmcsbWFyZ2luLHBlcnNwZWN0aXZlXCIsZnVuY3Rpb24odCl7VS51bml0c1t0XT1cInB4XCJ9KSxoZS5yZWdpc3RlclBsdWdpbihocik7dmFyIGxyPWhlLnJlZ2lzdGVyUGx1Z2luKGhyKXx8aGUsZnI9bHIuY29yZS5Ud2VlbjtlLkJhY2s9QWUsZS5Cb3VuY2U9U2UsZS5DU1NQbHVnaW49aHIsZS5DaXJjPUVlLGUuQ3ViaWM9a2UsZS5FbGFzdGljPUNlLGUuRXhwbz1SZSxlLkxpbmVhcj13ZSxlLlBvd2VyMD1nZSxlLlBvd2VyMT12ZSxlLlBvd2VyMj15ZSxlLlBvd2VyMz1UZSxlLlBvd2VyND1iZSxlLlF1YWQ9eGUsZS5RdWFydD1PZSxlLlF1aW50PVBlLGUuU2luZT16ZSxlLlN0ZXBwZWRFYXNlPURlLGUuU3Ryb25nPU1lLGUuVGltZWxpbmVMaXRlPVV0LGUuVGltZWxpbmVNYXg9VXQsZS5Ud2VlbkxpdGU9JHQsZS5Ud2Vlbk1heD1mcixlLmRlZmF1bHQ9bHIsZS5nc2FwPWxyO2lmICh0eXBlb2Yod2luZG93KT09PVwidW5kZWZpbmVkXCJ8fHdpbmRvdyE9PWUpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSBlbHNlIHtkZWxldGUgZS5kZWZhdWx0fX0pO1xuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLypcbiAqIEB0aXRsZSBNYWluIEFwcFxuICogQGRlc2NyaXB0aW9uIEFwcGxpY2F0aW9uIGVudHJ5IHBvaW50XG4gKi9cblxuXG4vLyBHU0FQIFNUQVJUXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSAnLi9jb21wb25lbnRzL2dzYXAvZ3NhcC5taW4nO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJy4vY29tcG9uZW50cy9nc2FwL1Njcm9sbFRyaWdnZXIubWluJztcblxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuXHRcbiAgICAvLyBjYWxsQWNjb3JkaW9ucygpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuXG5cblx0ZnVuY3Rpb24gdG9wKCl7XG5cdFx0d2luZG93LnNjcm9sbFRvKDAsIDApO1xuXHR9XG5cdHNldFRpbWVvdXQoXHR0b3AsIDEwMCk7XG5cblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXByZXZpZXctc2NyZWVuLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcHJldmlldy1zY3JlZW4tbWVzc2FnZScpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcHJldmlldy1zY3JlZW4nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9KVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcHJldmlldy1zY3JlZW4tY2xvc2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXByZXZpZXctc2NyZWVuLW1lc3NhZ2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXByZXZpZXctc2NyZWVuJykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSlcblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhxdWlzaXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG5cdH0pXG5cblxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wcmV2aWV3LXNjcmVlbi1kb3duJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXByZXZpZXctc2NyZWVuJykuY2xhc3NMaXN0LmFkZCgndXAnKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cnKTtcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuLS1wcmV2aWV3LXNjcmVlbi1tZXNzYWdlLWJveCcpLmNsYXNzTGlzdC5hZGQoJ2dvJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcHJldmlldy1zY3JlZW4tbWVzc2FnZScpLmNsYXNzTGlzdC5hZGQoJ3NjYWxlJyk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi1nb191cCcpLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcblx0fSlcblxuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tZ29fdXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi0tcHJldmlldy1zY3JlZW4tbWVzc2FnZS1ib3gnKS5jbGFzc0xpc3QucmVtb3ZlKCdnbycpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXByZXZpZXctc2NyZWVuLW1lc3NhZ2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdzY2FsZScpO1xuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy4tLXByZXZpZXctc2NyZWVuJykuY2xhc3NMaXN0LnJlbW92ZSgndXAnKTtcblx0XHR3aW5kb3cuc2Nyb2xsVG8oe3RvcDogMCwgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLi1nb191cCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93Jyk7XG5cdH0pXG5cblxuICAgIC8vIEdTQVAgQW5pbWF0aW9uXG5cdGNvbnN0IGJveGVzID0gZ3NhcC51dGlscy50b0FycmF5KFwiLnJ1bi1pdGVtXCIpO1xuXHRjb25zdCBsb29wID0gaG9yaXpvbnRhbExvb3AoYm94ZXMsIHtcblx0XHRwYXVzZWQ6IHRydWUsIC8vIFNldHMgdGhlIHR3ZWVuIHRvIGJlIHBhdXNlZCBpbml0aWFsbHlcblx0XHRyZXBlYXQ6IC0xIC8vIE1ha2VzIHN1cmUgdGhlIHR3ZWVuIHJ1bnMgaW5maW5pdGVseVxuXHR9KTtcblxuXHRsb29wLnBsYXkoKSAvLyBDYWxsIHRvIHN0YXJ0IHBsYXlpbmcgdGhlIHR3ZWVuXG5cblx0ZnVuY3Rpb24gb3BlbkFjY29yZGlvbigpIHtcblx0XHRjb25zdCBjb250ZW50ID0gdGhpcy5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvcmRpb25fZGVzY3JpcHRpb24nKTtcblx0XHR0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuXHRcblx0XHRpZiAoY29udGVudC5zdHlsZS5tYXhIZWlnaHQpIHtcblx0XHQgIGNvbnRlbnQuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbDtcblx0XHR9IGVsc2Uge1xuXHRcdCAgY29udGVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHtjb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG5cdFx0fVxuXHR9XG5cdFxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjY29yZGlvbl90aXRsZScpO1xuXHRlbGVtZW50LmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkFjY29yZGlvbik7XG5cdH0pO1xufSk7XG5cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKlxuVGhpcyBoZWxwZXIgZnVuY3Rpb24gbWFrZXMgYSBncm91cCBvZiBlbGVtZW50cyBhbmltYXRlIGFsb25nIHRoZSB4LWF4aXMgaW4gYSBzZWFtbGVzcywgcmVzcG9uc2l2ZSBsb29wLlxuXG5GZWF0dXJlczpcbiAtIFVzZXMgeFBlcmNlbnQgc28gdGhhdCBldmVuIGlmIHRoZSB3aWR0aHMgY2hhbmdlIChsaWtlIGlmIHRoZSB3aW5kb3cgZ2V0cyByZXNpemVkKSwgaXQgc2hvdWxkIHN0aWxsIHdvcmsgaW4gbW9zdCBjYXNlcy5cbiAtIFdoZW4gZWFjaCBpdGVtIGFuaW1hdGVzIHRvIHRoZSBsZWZ0IG9yIHJpZ2h0IGVub3VnaCwgaXQgd2lsbCBsb29wIGJhY2sgdG8gdGhlIG90aGVyIHNpZGVcbiAtIE9wdGlvbmFsbHkgcGFzcyBpbiBhIGNvbmZpZyBvYmplY3Qgd2l0aCB2YWx1ZXMgbGlrZSBcInNwZWVkXCIgKGRlZmF1bHQ6IDEsIHdoaWNoIHRyYXZlbHMgYXQgcm91Z2hseSAxMDAgcGl4ZWxzIHBlciBzZWNvbmQpLCBwYXVzZWQgKGJvb2xlYW4pLCAgcmVwZWF0LCByZXZlcnNlZCwgYW5kIHBhZGRpbmdSaWdodC5cbiAtIFRoZSByZXR1cm5lZCB0aW1lbGluZSB3aWxsIGhhdmUgdGhlIGZvbGxvd2luZyBtZXRob2RzIGFkZGVkIHRvIGl0OlxuICAgLSBuZXh0KCkgLSBhbmltYXRlcyB0byB0aGUgbmV4dCBlbGVtZW50IHVzaW5nIGEgdGltZWxpbmUudHdlZW5UbygpIHdoaWNoIGl0IHJldHVybnMuIFlvdSBjYW4gcGFzcyBpbiBhIHZhcnMgb2JqZWN0IHRvIGNvbnRyb2wgZHVyYXRpb24sIGVhc2luZywgZXRjLlxuICAgLSBwcmV2aW91cygpIC0gYW5pbWF0ZXMgdG8gdGhlIHByZXZpb3VzIGVsZW1lbnQgdXNpbmcgYSB0aW1lbGluZS50d2VlblRvKCkgd2hpY2ggaXQgcmV0dXJucy4gWW91IGNhbiBwYXNzIGluIGEgdmFycyBvYmplY3QgdG8gY29udHJvbCBkdXJhdGlvbiwgZWFzaW5nLCBldGMuXG4gICAtIHRvSW5kZXgoKSAtIHBhc3MgaW4gYSB6ZXJvLWJhc2VkIGluZGV4IHZhbHVlIG9mIHRoZSBlbGVtZW50IHRoYXQgaXQgc2hvdWxkIGFuaW1hdGUgdG8sIGFuZCBvcHRpb25hbGx5IHBhc3MgaW4gYSB2YXJzIG9iamVjdCB0byBjb250cm9sIGR1cmF0aW9uLCBlYXNpbmcsIGV0Yy4gQWx3YXlzIGdvZXMgaW4gdGhlIHNob3J0ZXN0IGRpcmVjdGlvblxuICAgLSBjdXJyZW50KCkgLSByZXR1cm5zIHRoZSBjdXJyZW50IGluZGV4IChpZiBhbiBhbmltYXRpb24gaXMgaW4tcHJvZ3Jlc3MsIGl0IHJlZmxlY3RzIHRoZSBmaW5hbCBpbmRleClcbiAgIC0gdGltZXMgLSBhbiBBcnJheSBvZiB0aGUgdGltZXMgb24gdGhlIHRpbWVsaW5lIHdoZXJlIGVhY2ggZWxlbWVudCBoaXRzIHRoZSBcInN0YXJ0aW5nXCIgc3BvdC4gVGhlcmUncyBhbHNvIGEgbGFiZWwgYWRkZWQgYWNjb3JkaW5nbHksIHNvIFwibGFiZWwxXCIgaXMgd2hlbiB0aGUgMm5kIGVsZW1lbnQgcmVhY2hlcyB0aGUgc3RhcnQuXG4gKi9cbiAgIGZ1bmN0aW9uIGhvcml6b250YWxMb29wKGl0ZW1zLCBjb25maWcpIHtcblx0aXRlbXMgPSBnc2FwLnV0aWxzLnRvQXJyYXkoaXRlbXMpO1xuXHRjb25maWcgPSBjb25maWcgfHwge307XG5cdGxldCB0bCA9IGdzYXAudGltZWxpbmUoe3JlcGVhdDogY29uZmlnLnJlcGVhdCwgcGF1c2VkOiBjb25maWcucGF1c2VkLCBkZWZhdWx0czoge2Vhc2U6IFwibm9uZVwifSwgb25SZXZlcnNlQ29tcGxldGU6ICgpID0+IHRsLnRvdGFsVGltZSh0bC5yYXdUaW1lKCkgKyB0bC5kdXJhdGlvbigpICogMTAwKX0pLFxuXHRcdGxlbmd0aCA9IGl0ZW1zLmxlbmd0aCxcblx0XHRzdGFydFggPSBpdGVtc1swXS5vZmZzZXRMZWZ0LFxuXHRcdHRpbWVzID0gW10sXG5cdFx0d2lkdGhzID0gW10sXG5cdFx0eFBlcmNlbnRzID0gW10sXG5cdFx0Y3VySW5kZXggPSAwLFxuXHRcdHBpeGVsc1BlclNlY29uZCA9IChjb25maWcuc3BlZWQgfHwgMSkgKiAxMDAsXG5cdFx0c25hcCA9IGNvbmZpZy5zbmFwID09PSBmYWxzZSA/IHYgPT4gdiA6IGdzYXAudXRpbHMuc25hcChjb25maWcuc25hcCB8fCAxKSwgLy8gc29tZSBicm93c2VycyBzaGlmdCBieSBhIHBpeGVsIHRvIGFjY29tbW9kYXRlIGZsZXggbGF5b3V0cywgc28gZm9yIGV4YW1wbGUgaWYgd2lkdGggaXMgMjAlIHRoZSBmaXJzdCBlbGVtZW50J3Mgd2lkdGggbWlnaHQgYmUgMjQycHgsIGFuZCB0aGUgbmV4dCAyNDNweCwgYWx0ZXJuYXRpbmcgYmFjayBhbmQgZm9ydGguIFNvIHdlIHNuYXAgdG8gNSBwZXJjZW50YWdlIHBvaW50cyB0byBtYWtlIHRoaW5ncyBsb29rIG1vcmUgbmF0dXJhbFxuXHRcdHRvdGFsV2lkdGgsIGN1clgsIGRpc3RhbmNlVG9TdGFydCwgZGlzdGFuY2VUb0xvb3AsIGl0ZW0sIGk7XG5cdGdzYXAuc2V0KGl0ZW1zLCB7IC8vIGNvbnZlcnQgXCJ4XCIgdG8gXCJ4UGVyY2VudFwiIHRvIG1ha2UgdGhpbmdzIHJlc3BvbnNpdmUsIGFuZCBwb3B1bGF0ZSB0aGUgd2lkdGhzL3hQZXJjZW50cyBBcnJheXMgdG8gbWFrZSBsb29rdXBzIGZhc3Rlci5cblx0XHR4UGVyY2VudDogKGksIGVsKSA9PiB7XG5cdFx0XHRsZXQgdyA9IHdpZHRoc1tpXSA9IHBhcnNlRmxvYXQoZ3NhcC5nZXRQcm9wZXJ0eShlbCwgXCJ3aWR0aFwiLCBcInB4XCIpKTtcblx0XHRcdHhQZXJjZW50c1tpXSA9IHNuYXAocGFyc2VGbG9hdChnc2FwLmdldFByb3BlcnR5KGVsLCBcInhcIiwgXCJweFwiKSkgLyB3ICogMTAwICsgZ3NhcC5nZXRQcm9wZXJ0eShlbCwgXCJ4UGVyY2VudFwiKSk7XG5cdFx0XHRyZXR1cm4geFBlcmNlbnRzW2ldO1xuXHRcdH1cblx0fSk7XG5cdGdzYXAuc2V0KGl0ZW1zLCB7eDogMH0pO1xuXHR0b3RhbFdpZHRoID0gaXRlbXNbbGVuZ3RoLTFdLm9mZnNldExlZnQgKyB4UGVyY2VudHNbbGVuZ3RoLTFdIC8gMTAwICogd2lkdGhzW2xlbmd0aC0xXSAtIHN0YXJ0WCArIGl0ZW1zW2xlbmd0aC0xXS5vZmZzZXRXaWR0aCAqIGdzYXAuZ2V0UHJvcGVydHkoaXRlbXNbbGVuZ3RoLTFdLCBcInNjYWxlWFwiKSArIChwYXJzZUZsb2F0KGNvbmZpZy5wYWRkaW5nUmlnaHQpIHx8IDApO1xuXHRmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRpdGVtID0gaXRlbXNbaV07XG5cdFx0Y3VyWCA9IHhQZXJjZW50c1tpXSAvIDEwMCAqIHdpZHRoc1tpXTtcblx0XHRkaXN0YW5jZVRvU3RhcnQgPSBpdGVtLm9mZnNldExlZnQgKyBjdXJYIC0gc3RhcnRYO1xuXHRcdGRpc3RhbmNlVG9Mb29wID0gZGlzdGFuY2VUb1N0YXJ0ICsgd2lkdGhzW2ldICogZ3NhcC5nZXRQcm9wZXJ0eShpdGVtLCBcInNjYWxlWFwiKTtcblx0XHR0bC50byhpdGVtLCB7eFBlcmNlbnQ6IHNuYXAoKGN1clggLSBkaXN0YW5jZVRvTG9vcCkgLyB3aWR0aHNbaV0gKiAxMDApLCBkdXJhdGlvbjogZGlzdGFuY2VUb0xvb3AgLyBwaXhlbHNQZXJTZWNvbmR9LCAwKVxuXHRcdCAgLmZyb21UbyhpdGVtLCB7eFBlcmNlbnQ6IHNuYXAoKGN1clggLSBkaXN0YW5jZVRvTG9vcCArIHRvdGFsV2lkdGgpIC8gd2lkdGhzW2ldICogMTAwKX0sIHt4UGVyY2VudDogeFBlcmNlbnRzW2ldLCBkdXJhdGlvbjogKGN1clggLSBkaXN0YW5jZVRvTG9vcCArIHRvdGFsV2lkdGggLSBjdXJYKSAvIHBpeGVsc1BlclNlY29uZCwgaW1tZWRpYXRlUmVuZGVyOiBmYWxzZX0sIGRpc3RhbmNlVG9Mb29wIC8gcGl4ZWxzUGVyU2Vjb25kKVxuXHRcdCAgLmFkZChcImxhYmVsXCIgKyBpLCBkaXN0YW5jZVRvU3RhcnQgLyBwaXhlbHNQZXJTZWNvbmQpO1xuXHRcdHRpbWVzW2ldID0gZGlzdGFuY2VUb1N0YXJ0IC8gcGl4ZWxzUGVyU2Vjb25kO1xuXHR9XG5cdGZ1bmN0aW9uIHRvSW5kZXgoaW5kZXgsIHZhcnMpIHtcblx0XHR2YXJzID0gdmFycyB8fCB7fTtcblx0XHQoTWF0aC5hYnMoaW5kZXggLSBjdXJJbmRleCkgPiBsZW5ndGggLyAyKSAmJiAoaW5kZXggKz0gaW5kZXggPiBjdXJJbmRleCA/IC1sZW5ndGggOiBsZW5ndGgpOyAvLyBhbHdheXMgZ28gaW4gdGhlIHNob3J0ZXN0IGRpcmVjdGlvblxuXHRcdGxldCBuZXdJbmRleCA9IGdzYXAudXRpbHMud3JhcCgwLCBsZW5ndGgsIGluZGV4KSxcblx0XHRcdHRpbWUgPSB0aW1lc1tuZXdJbmRleF07XG5cdFx0aWYgKHRpbWUgPiB0bC50aW1lKCkgIT09IGluZGV4ID4gY3VySW5kZXgpIHsgLy8gaWYgd2UncmUgd3JhcHBpbmcgdGhlIHRpbWVsaW5lJ3MgcGxheWhlYWQsIG1ha2UgdGhlIHByb3BlciBhZGp1c3RtZW50c1xuXHRcdFx0dmFycy5tb2RpZmllcnMgPSB7dGltZTogZ3NhcC51dGlscy53cmFwKDAsIHRsLmR1cmF0aW9uKCkpfTtcblx0XHRcdHRpbWUgKz0gdGwuZHVyYXRpb24oKSAqIChpbmRleCA+IGN1ckluZGV4ID8gMSA6IC0xKTtcblx0XHR9XG5cdFx0Y3VySW5kZXggPSBuZXdJbmRleDtcblx0XHR2YXJzLm92ZXJ3cml0ZSA9IHRydWU7XG5cdFx0cmV0dXJuIHRsLnR3ZWVuVG8odGltZSwgdmFycyk7XG5cdH1cblx0dGwubmV4dCA9IHZhcnMgPT4gdG9JbmRleChjdXJJbmRleCsxLCB2YXJzKTtcblx0dGwucHJldmlvdXMgPSB2YXJzID0+IHRvSW5kZXgoY3VySW5kZXgtMSwgdmFycyk7XG5cdHRsLmN1cnJlbnQgPSAoKSA9PiBjdXJJbmRleDtcblx0dGwudG9JbmRleCA9IChpbmRleCwgdmFycykgPT4gdG9JbmRleChpbmRleCwgdmFycyk7XG5cdHRsLnRpbWVzID0gdGltZXM7XG4gIHRsLnByb2dyZXNzKDEsIHRydWUpLnByb2dyZXNzKDAsIHRydWUpOyAvLyBwcmUtcmVuZGVyIGZvciBwZXJmb3JtYW5jZVxuICBpZiAoY29uZmlnLnJldmVyc2VkKSB7XG4gICAgdGwudmFycy5vblJldmVyc2VDb21wbGV0ZSgpO1xuICAgIHRsLnJldmVyc2UoKTtcbiAgfVxuXHRyZXR1cm4gdGw7XG59Il0sIm5hbWVzIjpbImUiLCJ0IiwiZXhwb3J0cyIsIl90eXBlb2YiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJzZWxmIiwid2luZG93IiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwibGVuZ3RoIiwibiIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5Iiwia2V5IiwicCIsImhlIiwiZ3NhcCIsInJlZ2lzdGVyUGx1Z2luIiwieCIsIlllIiwiaW5kZXhPZiIsInkiLCJ6IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJBIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkQiLCJQZSIsImlzUHJlc3NlZCIsInplIiwiY2FjaGUiLCJFIiwidmUiLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJ2IiwiYyIsIlJlIiwiSCIsInV0aWxzIiwidG9BcnJheSIsImNvbmZpZyIsIm51bGxUYXJnZXRXYXJuIiwiY29uc29sZSIsIndhcm4iLCJJIiwicyIsInNjIiwiaSIsIm8iLCJYZSIsInB1c2giLCJhcmd1bWVudHMiLCJKIiwiX2MiLCJ1IiwiYSIsImwiLCJNYXRoIiwibWF4IiwidXBkYXRlIiwicmVzZXQiLCJnZXRWZWxvY2l0eSIsIksiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZWRUb3VjaGVzIiwiTCIsImFwcGx5IiwibWluIiwiYWJzIiwiTSIsImJlIiwiZG9jdW1lbnQiLCJib2R5IiwiU2UiLCJtZSIsImRvY3VtZW50RWxlbWVudCIsIl9lIiwiY2xhbXAiLCJrZSIsIlRlIiwidyIsImlzVG91Y2giLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsIm5hdmlnYXRvciIsIm1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsInNldFRpbWVvdXQiLCJNZSIsIk9lIiwiRGF0ZSIsIm5vdyIsIl9icmlkZ2UiLCJMZSIsInAyIiwib3MiLCJvczIiLCJkIiwiZDIiLCJzY3JvbGxUbyIsInBhZ2VYT2Zmc2V0Iiwib3AiLCJwYWdlWU9mZnNldCIsIk9ic2VydmVyIiwicHJvdG90eXBlIiwiaW5pdCIsImNvcmUiLCJnbG9iYWxzIiwiU2Nyb2xsVHJpZ2dlciIsIl9pbnRlZ3JhdGUiLCJicmlkZ2UiLCJfc2Nyb2xsZXJzIiwiX3Byb3hpZXMiLCJ0b2xlcmFuY2UiLCJkcmFnTWluaW11bSIsInR5cGUiLCJ0YXJnZXQiLCJsaW5lSGVpZ2h0IiwiZGVib3VuY2UiLCJvblN0b3AiLCJvblN0b3BEZWxheSIsImlnbm9yZSIsImYiLCJ3aGVlbFNwZWVkIiwiZXZlbnQiLCJvbkRyYWdTdGFydCIsImciLCJvbkRyYWdFbmQiLCJoIiwib25EcmFnIiwiYiIsIm9uUHJlc3MiLCJvblJlbGVhc2UiLCJtIiwib25SaWdodCIsIm9uTGVmdCIsIm9uVXAiLCJTIiwib25Eb3duIiwiXyIsIm9uQ2hhbmdlWCIsIlQiLCJvbkNoYW5nZVkiLCJrIiwib25DaGFuZ2UiLCJvblRvZ2dsZVgiLCJDIiwib25Ub2dnbGVZIiwiUCIsIm9uSG92ZXIiLCJPIiwib25Ib3ZlckVuZCIsIkYiLCJvbk1vdmUiLCJZIiwiaWdub3JlQ2hlY2siLCJSIiwiaXNOb3JtYWxpemVyIiwiQiIsIm9uR2VzdHVyZVN0YXJ0IiwiWCIsIm9uR2VzdHVyZUVuZCIsImoiLCJvbldoZWVsIiwiViIsIm9uRW5hYmxlIiwiRyIsIm9uRGlzYWJsZSIsIk4iLCJvbkNsaWNrIiwiVyIsInNjcm9sbFNwZWVkIiwidWUiLCJlZSIsImxlIiwicG9pbnRlclR5cGUiLCJ3ZSIsImRlbHRhWCIsImRlIiwiZGVsdGFZIiwicGUiLCJ0ZSIsInJlIiwiJCIsIloiLCJRIiwicSIsInhlIiwiX3Z4IiwiX3Z5IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwieWUiLCJjbGllbnRYIiwiY2xpZW50WSIsImlzRHJhZ2dpbmciLCJzdGFydFgiLCJzdGFydFkiLCJBZSIsImZlIiwic2UiLCJpc0dlc3R1cmluZyIsIlUiLCJyZXN0YXJ0IiwiQmUiLCJ0b3VjaGVzIiwiQ2UiLCJEZSIsIm5lIiwiaWUiLCJvZSIsImFlIiwiRWUiLCJkZWx0YU1vZGUiLCJpbm5lckhlaWdodCIsIkZlIiwiR2UiLCJIZSIsIkllIiwidmFycyIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwic3BsaXQiLCJjZSIsIm93bmVyRG9jdW1lbnQiLCJnZSIsInBhdXNlIiwiX2RjIiwiZGVsYXllZENhbGwiLCJvblN0b3BGdW5jIiwic2Nyb2xsWCIsInNjcm9sbFkiLCJlbmFibGUiLCJpc0VuYWJsZWQiLCJkaXNhYmxlIiwiZmlsdGVyIiwia2lsbCIsInNwbGljZSIsIl9jcmVhdGVDbGFzcyIsImdldCIsInZlcnNpb24iLCJjcmVhdGUiLCJyZWdpc3RlciIsImdldEFsbCIsInNsaWNlIiwiZ2V0QnlJZCIsImlkIiwic2EiLCIkZSIsInRhIiwidWEiLCJ2YSIsInJvdW5kIiwid2EiLCJ4YSIsImplIiwieWEiLCJ6YSIsIk10Iiwid2lkdGgiLCJWZSIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJ3dCIsIkNhIiwiS2UiLCJXZSIsIkRhIiwiRWEiLCJGYSIsIkdhIiwiSGEiLCJJYSIsIkphIiwiS2EiLCJwcm9ncmVzcyIsIkxhIiwiZW5hYmxlZCIsInRvdGFsVGltZSIsImNhbGxiYWNrQW5pbWF0aW9uIiwiYWIiLCJjYiIsImViIiwiZmIiLCJsYWJlbHMiLCJkdXJhdGlvbiIsImhiIiwic25hcCIsIkFycmF5IiwiaXNBcnJheSIsInNvcnQiLCJqYiIsImZvckVhY2giLCJrYiIsImxiIiwibWIiLCJ3aGVlbEhhbmRsZXIiLCJxYiIsImNoYXJBdCIsInN1YnN0ciIsInJiIiwic3RhcnRDb2xvciIsImVuZENvbG9yIiwiZm9udFNpemUiLCJpbmRlbnQiLCJmb250V2VpZ2h0IiwiTmUiLCJjcmVhdGVFbGVtZW50Iiwib2Zmc2V0V2lkdGgiLCJfaXNTdGFydCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiY3NzVGV4dCIsImlubmVyVGV4dCIsImNoaWxkcmVuIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJfb2Zmc2V0Iiwid2IiLCJzdCIsImx0IiwieGIiLCJ5YiIsIlplIiwiZnVsbHNjcmVlbkVsZW1lbnQiLCJFYiIsInRpY2tlciIsImZyYW1lIiwiYXQiLCJudCIsIkZiIiwiS2IiLCJyZWMiLCJWYiIsInBhcmVudE5vZGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4QmFzaXMiLCJvdmVyZmxvdyIsImJveFNpemluZyIsImZ0IiwieHQiLCJkdCIsInZ0IiwibXQiLCJ0b3AiLCJsZWZ0IiwiQ3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsIlliIiwiX2IiLCJ0aW1lIiwic2VlayIsInJlbW92ZVByb3BlcnR5IiwiX2NhU2Nyb2xsRGlzdCIsImJjIiwiX3N0T3JpZyIsInRlc3QiLCJnZXRDYWNoZSIsInVuY2FjaGUiLCJjYyIsIm5qIiwidHdlZW4iLCJvbkNvbXBsZXRlIiwibW9kaWZpZXJzIiwicmF0aW8iLCJjYWxsIiwidG8iLCJxZSIsIkplIiwiVWUiLCJRZSIsImV0IiwidHQiLCJydCIsIml0Iiwib3QiLCJjdCIsInV0IiwicHQiLCJndCIsImh0IiwiYnQiLCJ5dCIsIl9nZXRCb3VuZHMiLCJ4UGVyY2VudCIsInlQZXJjZW50Iiwicm90YXRpb24iLCJyb3RhdGlvblgiLCJyb3RhdGlvblkiLCJzY2FsZSIsInNrZXdYIiwic2tld1kiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJTdCIsIl90IiwidG9nZ2xlQWN0aW9ucyIsImFudGljaXBhdGVQaW4iLCJjZW50ZXIiLCJib3R0b20iLCJyaWdodCIsIl9wb3NpdGlvbk1hcmtlciIsIl9pc0ZsaXBwZWQiLCJzZXQiLCJUdCIsImt0IiwiX2Rpc3BhdGNoIiwibWFwIiwiX3JldmVydFJlY29yZGVkIiwiZ2V0QkJveCIsIl9yZXZlcnRBbGwiLCJtZWRpYSIsInJldmVydCIsIl9yZWZyZXNoQWxsIiwicmVmcmVzaCIsImVuZCIsInNldFBvc2l0aW9ucyIsInN0YXJ0Iiwic2Nyb2xsZXIiLCJfZGlyIiwicmVuZGVyIiwiRXQiLCJfdXBkYXRlQWxsIiwiaXNVcGRhdGluZyIsInNjcm9sbCIsImNvbmNhdCIsIl9zZXRTdGF0ZSIsIl9nc2FwIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwibm9kZVR5cGUiLCJ0cmlnZ2VyIiwib25VcGRhdGUiLCJ0b2dnbGVDbGFzcyIsIm9uVG9nZ2xlIiwib25SZWZyZXNoIiwic2NydWIiLCJwaW4iLCJwaW5TcGFjaW5nIiwiaW52YWxpZGF0ZU9uUmVmcmVzaCIsIm9uU2NydWJDb21wbGV0ZSIsIm9uU25hcENvbXBsZXRlIiwib25jZSIsInBpblJlcGFyZW50IiwicGluU3BhY2VyIiwiY29udGFpbmVyQW5pbWF0aW9uIiwiZmFzdFNjcm9sbEVuZCIsInByZXZlbnRPdmVybGFwcyIsImhvcml6b250YWwiLCJwaW5UeXBlIiwib25FbnRlciIsIm9uTGVhdmUiLCJvbkVudGVyQmFjayIsIm9uTGVhdmVCYWNrIiwibWFya2VycyIsIm9uUmVmcmVzaEluaXQiLCJfZ2V0U2l6ZUZ1bmMiLCJfZ2V0T2Zmc2V0c0Z1bmMiLCJiaW5kIiwiYW5pbWF0aW9uIiwicmVmcmVzaFByaW9yaXR5IiwidHdlZW5TY3JvbGwiLCJ0d2VlblRvIiwic2NydWJEdXJhdGlvbiIsImVhc2UiLCJ0b3RhbFByb2dyZXNzIiwicGF1c2VkIiwibGF6eSIsIl9pbml0dGVkIiwiaW1tZWRpYXRlUmVuZGVyIiwic2Nyb2xsVHJpZ2dlciIsInNuYXBUbyIsInNjcm9sbEJlaGF2aW9yIiwiX2dldENsb3Nlc3RMYWJlbCIsIl9nZXRMYWJlbEF0RGlyZWN0aW9uIiwiZGlyZWN0aW9uIiwiZGlyZWN0aW9uYWwiLCJkZWxheSIsImluZXJ0aWEiLCJvblN0YXJ0Iiwib25JbnRlcnJ1cHQiLCJkYXRhIiwiaXNBY3RpdmUiLCJzdFJldmVydCIsInRhcmdldHMiLCJjbGFzc05hbWUiLCJmb3JjZTNEIiwic3BhY2VyIiwicGluU3RhdGUiLCJjdXJyZW50IiwibmF0aXZlRWxlbWVudCIsInNwYWNlcklzTmF0aXZlIiwic3BhY2VyU3RhdGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJnZXRQcm9wZXJ0eSIsInF1aWNrU2V0dGVyIiwibWFya2VyU3RhcnQiLCJtYXJrZXJFbmQiLCJfbWFrZVBvc2l0aW9uYWJsZSIsIm9uVXBkYXRlUGFyYW1zIiwiZXZlbnRDYWxsYmFjayIsInByZXZpb3VzIiwibmV4dCIsImlzUmV2ZXJ0ZWQiLCJfc3dhcFBpbk91dCIsInJlbW92ZUNoaWxkIiwiaW52YWxpZGF0ZSIsImVuZFRyaWdnZXIiLCJwaW5uZWRDb250YWluZXIiLCJ1bnNoaWZ0IiwiX3BpblB1c2giLCJjZWlsIiwiX2NvcHlTdGF0ZSIsIl9waW5PZmZzZXQiLCJlbmRBbmltYXRpb24iLCJyZXZlcnNlZCIsImxhYmVsVG9TY3JvbGwiLCJnZXRUcmFpbGluZyIsInJldmVyc2UiLCJfZHAiLCJfdGltZSIsIl9zdGFydCIsInJlc2V0VG8iLCJfdFRpbWUiLCJfdER1ciIsImdldFR3ZWVuIiwib25LaWxsIiwiZGVmYXVsdHMiLCJjbGVhckludGVydmFsIiwic3VwcHJlc3NPdmVyd3JpdGVzIiwiYm9yZGVyVG9wU3R5bGUiLCJzZXRJbnRlcnZhbCIsImNoZWNrUHJlZml4IiwiaGlkZGVuIiwibGltaXRDYWxsYmFja3MiLCJzeW5jSW50ZXJ2YWwiLCJpZ25vcmVNb2JpbGVSZXNpemUiLCJhdXRvUmVmcmVzaEV2ZW50cyIsInNjcm9sbGVyUHJveHkiLCJhZGRMaXN0ZW5lciIsImNsZWFyTWF0Y2hNZWRpYSIsImlzSW5WaWV3cG9ydCIsInBvc2l0aW9uSW5WaWV3cG9ydCIsInNhdmVTdHlsZXMiLCJnZXRBdHRyaWJ1dGUiLCJjbGVhclNjcm9sbE1lbW9yeSIsIm1heFNjcm9sbCIsImdldFNjcm9sbEZ1bmMiLCJpc1Njcm9sbGluZyIsInNuYXBEaXJlY3Rpb25hbCIsImJhdGNoIiwiT24iLCJpbnRlcnZhbCIsImJhdGNoTWF4IiwiZWMiLCJmYyIsInRvdWNoQWN0aW9uIiwiZ2MiLCJwbyIsInFvIiwiQm8iLCJub3JtYWxpemVTY3JvbGxYIiwibW9tZW50dW0iLCJ1c2VyQWdlbnQiLCJpZ25vcmVEcmFnIiwidmlzdWFsVmlld3BvcnQiLCJkZWZhdWx0UHJldmVudGVkIiwiY2xpY2siLCJjcmVhdGVFdmVudCIsImluaXRNb3VzZUV2ZW50Iiwic2NyZWVuWCIsInNjcmVlblkiLCJkaXNwYXRjaEV2ZW50IiwidmVsb2NpdHlYIiwidmVsb2NpdHlZIiwicGxheSIsIl90cyIsImNhcHR1cmUiLCJvYnNlcnZlIiwibm9ybWFsaXplU2Nyb2xsIiwiX2dldFZlbG9jaXR5UHJvcCIsInNzIiwicmVmIiwiZGVmYXVsdCIsInZhbHVlIiwiX2luaGVyaXRzTG9vc2UiLCJjb25zdHJ1Y3RvciIsIl9fcHJvdG9fXyIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsImhhcm5lc3MiLCJ0YXJnZXRUZXN0IiwiTHQiLCJhYSIsImJhIiwiY2EiLCJkYSIsImVhIiwiZmEiLCJnYSIsIl9sYXp5IiwiaGEiLCJpYSIsIm1hdGNoIiwidHJpbSIsImphIiwia2EiLCJuYSIsIm9hIiwicGEiLCJwYXJlbnQiLCJrZXlmcmFtZXMiLCJfc2V0S2V5ZnJhbWVEZWZhdWx0cyIsImluaGVyaXQiLCJyYSIsIl9wcmV2IiwiX25leHQiLCJhdXRvUmVtb3ZlQ2hpbGRyZW4iLCJyZW1vdmUiLCJfYWN0IiwiX2VuZCIsIl9kdXIiLCJfZGlydHkiLCJfcmVwZWF0IiwiX3JEZWxheSIsInRvdGFsRHVyYXRpb24iLCJBYSIsIl9ydHMiLCJCYSIsInNtb290aENoaWxkVGltaW5nIiwicmF3VGltZSIsIl96VGltZSIsIl9kZWxheSIsInRpbWVTY2FsZSIsIl9zb3J0IiwiX3JlY2VudCIsIlh0IiwiX3B0IiwiRHQiLCJVdCIsIk9hIiwicnVuQmFja3dhcmRzIiwic3RhcnRBdCIsIiR0IiwiUGEiLCJSYSIsImV4ZWMiLCJVYSIsIllhIiwicmFuZG9tIiwiWmEiLCJlYWNoIiwiQnQiLCJmcm9tIiwiYmFzZSIsImlzTmFOIiwiYXhpcyIsImVkZ2VzIiwiZ3JpZCIsImFtb3VudCIsIkZ0IiwiJGEiLCJwb3ciLCJfYSIsInJhZGl1cyIsInZhbHVlcyIsImluY3JlbWVudCIsImZsb29yIiwiT3QiLCJQdCIsInNiIiwiYmxhY2siLCJwYXJzZUludCIsInRyYW5zcGFyZW50IiwiTnVtYmVyIiwidGIiLCJ1YiIsImpvaW4iLCJzaGlmdCIsImxhc3RJbmRleCIsIkF0IiwiR2IiLCJ6dCIsIl9wYXJzZU9iamVjdEluU3RyaW5nIiwibGFzdEluZGV4T2YiLCJfdmFsdWVJblBhcmVudGhlc2VzIiwic3Vic3RyaW5nIiwiX0NFIiwiUnQiLCJJYiIsIl9maXJzdCIsInlveW9FYXNlIiwiX3lveW8iLCJ0aW1lbGluZSIsIl9lYXNlIiwiX3lFYXNlIiwiZWFzZU91dCIsImVhc2VJbk91dCIsImVhc2VJbiIsIkxiIiwiTWIiLCJlbSIsImFzaW4iLCJOYiIsIm1tIiwiYXV0b1NsZWVwIiwidW5pdHMiLCJvdmVyd3JpdGUiLCJQSSIsInNxcnQiLCJjb3MiLCJzaW4iLCJBcnJheUJ1ZmZlciIsImlzVmlldyIsIl9tZXJnZSIsIl9hbmltYXRpb25DeWNsZSIsIl9pc0Zyb21PckZyb21TdGFydCIsImVuZFRpbWUiLCJfcGFyc2VQb3NpdGlvbiIsIl9jbGFtcCIsIl9mbGF0dGVuIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcFJhbmdlIiwiX2NhbGxiYWNrIiwiY2FsbGJhY2tTY29wZSIsImFxdWEiLCJsaW1lIiwic2lsdmVyIiwibWFyb29uIiwidGVhbCIsImJsdWUiLCJuYXZ5Iiwid2hpdGUiLCJvbGl2ZSIsInllbGxvdyIsIm9yYW5nZSIsImdyYXkiLCJwdXJwbGUiLCJncmVlbiIsInJlZCIsInBpbmsiLCJjeWFuIiwiUmVnRXhwIiwidGljayIsIlZrIiwiZGVsdGFSYXRpbyIsIndha2UiLCJnc2FwVmVyc2lvbnMiLCJHcmVlblNvY2tHbG9iYWxzIiwic2xlZXAiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImxhZ1Ntb290aGluZyIsImZwcyIsIl9saXN0ZW5lcnMiLCJfd2FrZSIsIl9pbnZlcnRFYXNlIiwiX3BhcnNlRWFzZSIsIkRtIiwiTGluZWFyIiwiZWFzZU5vbmUiLCJub25lIiwiU3RlcHBlZEVhc2UiLCJzdGVwcyIsIkl0IiwiR1NDYWNoZSIsImdldFNldHRlciIsIkh0IiwiTnQiLCJBbmltYXRpb24iLCJzdGFydFRpbWUiLCJfcHRMb29rdXAiLCJfcFRpbWUiLCJpdGVyYXRpb24iLCJfcHMiLCJfcmVjYWNoZUFuY2VzdG9ycyIsImdsb2JhbFRpbWUiLCJyZXBlYXQiLCJyZXBlYXREZWxheSIsInlveW8iLCJyZXN1bWUiLCJfb25VcGRhdGUiLCJ0aGVuIiwiUHJvbWlzZSIsIlVuIiwiX3Byb20iLCJUaW1lbGluZSIsInNvcnRDaGlsZHJlbiIsImZyb21UbyIsInN0YWdnZXJUbyIsInN0YWdnZXIiLCJvbkNvbXBsZXRlUGFyYW1zIiwic3RhZ2dlckZyb20iLCJzdGFnZ2VyRnJvbVRvIiwiX2xvY2siLCJyZXBlYXRSZWZyZXNoIiwib25SZXBlYXQiLCJfaGFzUGF1c2UiLCJfZm9yY2luZyIsIl9maW5kTmV4dFBhdXNlVHdlZW4iLCJfbGFzdCIsImFkZExhYmVsIiwiZ2V0Q2hpbGRyZW4iLCJyZW1vdmVMYWJlbCIsImtpbGxUd2VlbnNPZiIsImFkZFBhdXNlIiwicmVtb3ZlUGF1c2UiLCJnZXRUd2VlbnNPZiIsIll0IiwiX3RhcmdldHMiLCJvblN0YXJ0UGFyYW1zIiwidHdlZW5Gcm9tVG8iLCJyZWNlbnQiLCJuZXh0TGFiZWwiLCJwcmV2aW91c0xhYmVsIiwiY3VycmVudExhYmVsIiwic2hpZnRDaGlsZHJlbiIsImNsZWFyIiwiSW5maW5pdHkiLCJ1cGRhdGVSb290IiwiVWIiLCJyYXdWYXJzIiwiX3Byb2Nlc3NWYXJzIiwiUXQiLCJwcmlvcml0eSIsIl9wcm9wcyIsIiRiIiwicXQiLCJWdCIsIl9hZGRQcm9wVHdlZW4iLCJadCIsIld0IiwiR3QiLCJfYWRkQ29tcGxleFN0cmluZ1Byb3BUd2VlbiIsImluZGV4IiwiZnAiLCJzdHJpbmdGaWx0ZXIiLCJKdCIsIm1vZGlmaWVyIiwiX2luaXRUd2VlbiIsImF1dG9SZXZlcnQiLCJfc3RhcnRBdCIsIl9vdmVyd3JpdGUiLCJfZnJvbSIsInByb3AiLCJfcHRDYWNoZSIsIm5hbWUiLCJfb3AiLCJfb25Jbml0IiwiX3BhcnNlRnVuY09yU3RyaW5nIiwianQiLCJLdCIsIlR3ZWVuIiwiZWFzZUVhY2giLCJfaGFzTm9QYXVzZWRBbmNlc3RvcnMiLCJfcmVuZGVyWmVyb0R1cmF0aW9uVHdlZW4iLCJfcGFyZW50UGxheWhlYWRJc0JlZm9yZVN0YXJ0IiwiX3VwZGF0ZVByb3BUd2VlbnMiLCJfYXJyYXlzTWF0Y2giLCJfYWRkQWxpYXNlc1RvVmFycyIsImFsaWFzZXMiLCJvblJldmVyc2VDb21wbGV0ZSIsIm9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zIiwib2MiLCJtU2V0IiwiX3NldHRlclBsYWluIiwiX3NldHRlckZ1bmMiLCJfc2V0dGVyRnVuY1dpdGhQYXJhbSIsIl9nZXRTZXR0ZXIiLCJfcmVuZGVyUGxhaW4iLCJfcmVuZGVyQm9vbGVhbiIsIl9yZW5kZXJDb21wbGV4U3RyaW5nIiwiX3JlbmRlclByb3BUd2VlbnMiLCJfYWRkUGx1Z2luTW9kaWZpZXIiLCJfa2lsbFByb3BUd2VlbnNPZiIsImRlcCIsIl9zb3J0UHJvcFR3ZWVuc0J5UHJpb3JpdHkiLCJwciIsIlByb3BUd2VlbiIsIlR3ZWVuTWF4IiwiVHdlZW5MaXRlIiwiVGltZWxpbmVMaXRlIiwiVGltZWxpbmVNYXgiLCJfY3JlYXRlUGx1Z2luIiwidG9VcHBlckNhc2UiLCJxdWlja1RvIiwiaXciLCJpc1R3ZWVuaW5nIiwicmVnaXN0ZXJFZmZlY3QiLCJlZmZlY3QiLCJwbHVnaW5zIiwiZXh0ZW5kVGltZWxpbmUiLCJyZWdpc3RlckVhc2UiLCJwYXJzZUVhc2UiLCJleHBvcnRSb290Iiwid3JhcCIsIndyYXBZb3lvIiwiZGlzdHJpYnV0ZSIsIm5vcm1hbGl6ZSIsImdldFVuaXQiLCJzcGxpdENvbG9yIiwic2VsZWN0b3IiLCJwaXBlIiwicmVkdWNlIiwidW5pdGl6ZSIsImludGVycG9sYXRlIiwiZnVuYyIsInNodWZmbGUiLCJpbnN0YWxsIiwiZWZmZWN0cyIsImdsb2JhbFRpbWVsaW5lIiwiX3JlbW92ZUxpbmtlZExpc3RJdGVtIiwidWMiLCJfYWRkTW9kaWZpZXJzIiwiZGQiLCJlZCIsImZkIiwiZ2QiLCJoZCIsImpkIiwia2QiLCJzZXRQcm9wZXJ0eSIsImxkIiwibWQiLCJzY2FsZVgiLCJzY2FsZVkiLCJuZCIsInJlbmRlclRyYW5zZm9ybSIsIm9kIiwic2QiLCJjcmVhdGVFbGVtZW50TlMiLCJ0ZCIsImdldFByb3BlcnR5VmFsdWUiLCJ3ZCIsIl93aW5kb3dFeGlzdHMiLCJ4ZCIsIm93bmVyU1ZHRWxlbWVudCIsIm5leHRTaWJsaW5nIiwiX2dzYXBCQm94IiwieWQiLCJoYXNBdHRyaWJ1dGUiLCJ6ZCIsIkFkIiwiZ2V0Q1RNIiwiQmQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJDZCIsIkVkIiwidGFnTmFtZSIsIkZkIiwic3ZnIiwib3JpZ2luIiwiek9yaWdpbiIsIkdkIiwiSWQiLCJKZCIsIk5kIiwiT2QiLCJQZCIsInRyYW5zZm9ybSIsImJhc2VWYWwiLCJjb25zb2xpZGF0ZSIsIm1hdHJpeCIsIm9mZnNldFBhcmVudCIsIlFkIiwieE9yaWdpbiIsInlPcmlnaW4iLCJ4T2Zmc2V0IiwieU9mZnNldCIsInNtb290aCIsIm9yaWdpbklzQWJzb2x1dGUiLCJUZCIsIiRkIiwiX2QiLCJQb3dlcjAiLCJQb3dlcjEiLCJQb3dlcjIiLCJQb3dlcjMiLCJQb3dlcjQiLCJRdWFkIiwiQ3ViaWMiLCJRdWFydCIsIlF1aW50IiwiU3Ryb25nIiwiRWxhc3RpYyIsIkJhY2siLCJCb3VuY2UiLCJTaW5lIiwiRXhwbyIsIkNpcmMiLCJhdGFuMiIsImF1dG9BbHBoYSIsImFscGhhIiwiX2NoZWNrUHJvcFByZWZpeCIsImRlZyIsInJhZCIsInR1cm4iLCJjbGVhclByb3BzIiwiX3BhcnNlVHJhbnNmb3JtIiwiZm9yY2VDU1MiLCJvZmZzZXRIZWlnaHQiLCJ0cmFuc2Zvcm1QZXJzcGVjdGl2ZSIsImFyIiwibnIiLCJ0ciIsIl9maXJzdFR3b09ubHkiLCJfcmVuZGVyTm9uM0RUcmFuc2Zvcm1zIiwiZXIiLCJyciIsImlyIiwiX3JlbmRlckNTU1RyYW5zZm9ybXMiLCJfcmVuZGVyU1ZHVHJhbnNmb3JtcyIsInRhbiIsInNyIiwib3IiLCJ1ciIsImhyIiwicGFyc2VUcmFuc2Zvcm0iLCJzbW9vdGhPcmlnaW4iLCJhdXRvUm91bmQiLCJfcmVtb3ZlUHJvcGVydHkiLCJfZ2V0TWF0cml4IiwibHIiLCJmciIsIkNTU1BsdWdpbiIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJiZWhhdmlvciIsImJveGVzIiwibG9vcCIsImhvcml6b250YWxMb29wIiwib3BlbkFjY29yZGlvbiIsImNvbnRlbnQiLCJwYXJlbnRFbGVtZW50Iiwic2Nyb2xsSGVpZ2h0IiwiZWxlbWVudCIsIml0ZW0iLCJpdGVtcyIsInRsIiwib2Zmc2V0TGVmdCIsInRpbWVzIiwid2lkdGhzIiwieFBlcmNlbnRzIiwiY3VySW5kZXgiLCJwaXhlbHNQZXJTZWNvbmQiLCJzcGVlZCIsInRvdGFsV2lkdGgiLCJjdXJYIiwiZGlzdGFuY2VUb1N0YXJ0IiwiZGlzdGFuY2VUb0xvb3AiLCJlbCIsInBhZGRpbmdSaWdodCIsInRvSW5kZXgiLCJuZXdJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=