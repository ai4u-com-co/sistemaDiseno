var Pi = Object.defineProperty;
var Fi = (e, t, r) => t in e ? Pi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ve = (e, t, r) => Fi(e, typeof t != "symbol" ? t + "" : t, r);
import { A as b, S as ct, a as Di, u as Ni } from "./palette-Cg2N1Fyc.js";
import { C as Wp, b as Lp } from "./palette-Cg2N1Fyc.js";
import { BREAKPOINT_TOKENS as Jt, TYPOGRAPHY_TOKENS as V, SPACING_TOKENS as Je, BORDER_TOKENS as qe, TEXT_VARIANTS as re, SHADOW_TOKENS as Ft, Z_INDEX_TOKENS as Wi } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as jp, COMPONENT_SPACING as Vp, MUI_BREAKPOINTS as Hp, TRANSITION_TOKENS as Up, TYPOGRAPHY_UTILITIES as Gp, createAI4UTokens as Yp } from "./tokens/index.js";
import { jsx as i, jsxs as f, Fragment as Se } from "react/jsx-runtime";
import { styled as Ce, Button as Ze, Box as d, Typography as P, useTheme as ye, Container as Ke, Stack as he, Skeleton as ne, useMediaQuery as Nt, Menu as Fo, MenuItem as Zt, Link as Do, keyframes as Li, Fab as Bi, Dialog as ji, DialogTitle as Vi, IconButton as De, alpha as we, DialogContent as Hi, Paper as Wt, CircularProgress as Ui, TextField as No, Card as on, CardContent as Vt, Avatar as Fn, Chip as vt, Divider as ur, Alert as Gi, AlertTitle as Yi, Collapse as qi, Grid as $e, Tabs as Ki, Tab as Xi, TableContainer as Qi, Table as Ji, TableHead as Zi, TableRow as Dn, TableCell as He, TableBody as ea, AppBar as ta, Toolbar as ra } from "@mui/material";
import * as B from "react";
import na, { useState as H, useRef as Ht, useEffect as pe, useCallback as Ge, useSyncExternalStore as oa, createContext as an, useMemo as _e, useContext as pr, Component as ia, Suspense as aa } from "react";
import { Global as sa, ThemeContext as Wo } from "@emotion/react";
import ca from "@emotion/styled";
import { useNavigate as sn, Link as Ot, useLocation as la } from "react-router-dom";
import { Receipt as da, MoreVert as Nn, AttachMoney as ua, Favorite as pa, TrendingUp as fa, School as ma, FitnessCenter as ha, ShoppingCart as ga, AccountBalance as xa, Add as ya, RefreshOutlined as ba, ExpandMore as Sa, Bed as va, Refresh as Lo, Wifi as wa, Bluetooth as Ca, LocationOn as ka, WbSunny as Wn, Cloud as Ea, Opacity as Ta, ContentCopy as Ia } from "@mui/icons-material";
const $a = (e, t = {}) => {
  const [r, n] = H(!1), [o, a] = H(!1), [s, c] = H(!1), [l, u] = H(""), m = Ht(null), { threshold: g = 0.1, rootMargin: y = "50px", priority: p = !1 } = t;
  return pe(() => {
    if (u(e), p) {
      a(!0);
      return;
    }
    const S = new IntersectionObserver(
      ([x]) => {
        x.isIntersecting && (a(!0), S.disconnect());
      },
      {
        threshold: g,
        rootMargin: y
      }
    );
    return m.current && S.observe(m.current), () => {
      S.disconnect();
    };
  }, [g, y, p, e]), pe(() => {
    if (!o) return;
    const S = new Image();
    S.onload = () => {
      n(!0), c(!1);
    }, S.onerror = () => {
      c(!0), n(!1);
    }, S.src = l;
  }, [l, o]), {
    imgRef: m,
    isLoaded: r,
    isInView: o,
    error: s,
    imageSrc: l
  };
}, Gr = (e = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: e
  });
};
function yt(e) {
  const t = `(min-width: ${Jt[e]}px)`, r = Ge(
    (o) => {
      if (typeof window > "u" || !window.matchMedia) return () => {
      };
      const a = window.matchMedia(t);
      return a.addEventListener("change", o), () => a.removeEventListener("change", o);
    },
    [t]
  ), n = Ge(() => typeof window > "u" || !window.matchMedia ? !1 : window.matchMedia(t).matches, [t]);
  return oa(r, n, () => !1);
}
function uu() {
  const e = yt("sm"), t = yt("md"), r = yt("lg"), n = yt("xl");
  return yt("2xl") ? "2xl" : n ? "xl" : r ? "lg" : t ? "md" : e ? "sm" : "xs";
}
function pu() {
  return !yt("md");
}
function dt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const et = "$$material";
function Aa(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var _a = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Ra(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Oa = /[A-Z]|^ms/g, za = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Bo = function(t) {
  return t.charCodeAt(1) === 45;
}, Ln = function(t) {
  return t != null && typeof t != "boolean";
}, Or = /* @__PURE__ */ Ra(function(e) {
  return Bo(e) ? e : e.replace(Oa, "-$&").toLowerCase();
}), Bn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(za, function(n, o, a) {
          return tt = {
            name: o,
            styles: a,
            next: tt
          }, o;
        });
  }
  return _a[t] !== 1 && !Bo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function rr(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return tt = {
          name: o.name,
          styles: o.styles,
          next: tt
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            tt = {
              name: s.name,
              styles: s.styles,
              next: tt
            }, s = s.next;
        var c = a.styles + ";";
        return c;
      }
      return Ma(e, t, r);
    }
  }
  var l = r;
  return l;
}
function Ma(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += rr(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var c = s;
        Ln(c) && (n += Or(a) + ":" + Bn(a, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var l = 0; l < s.length; l++)
          Ln(s[l]) && (n += Or(a) + ":" + Bn(a, s[l]) + ";");
      else {
        var u = rr(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Or(a) + ":" + u + ";";
            break;
          }
          default:
            n += a + "{" + u + "}";
        }
      }
    }
  return n;
}
var jn = /label:\s*([^\s;{]+)\s*(;|$)/g, tt;
function Pa(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  tt = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += rr(r, t, a);
  else {
    var s = a;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += rr(r, t, e[c]), n) {
      var l = a;
      o += l[c];
    }
  jn.lastIndex = 0;
  for (var u = "", m; (m = jn.exec(o)) !== null; )
    u += "-" + m[1];
  var g = Aa(o) + u;
  return {
    name: g,
    styles: o,
    next: tt
  };
}
function Fa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yr = { exports: {} }, Kt = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function Da() {
  if (Vn) return oe;
  Vn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var $ = k.$$typeof;
      switch ($) {
        case t:
          switch (k = k.type, k) {
            case l:
            case u:
            case n:
            case a:
            case o:
            case g:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case c:
                case m:
                case S:
                case p:
                case s:
                  return k;
                default:
                  return $;
              }
          }
        case r:
          return $;
      }
    }
  }
  function _(k) {
    return A(k) === u;
  }
  return oe.AsyncMode = l, oe.ConcurrentMode = u, oe.ContextConsumer = c, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = m, oe.Fragment = n, oe.Lazy = S, oe.Memo = p, oe.Portal = r, oe.Profiler = a, oe.StrictMode = o, oe.Suspense = g, oe.isAsyncMode = function(k) {
    return _(k) || A(k) === l;
  }, oe.isConcurrentMode = _, oe.isContextConsumer = function(k) {
    return A(k) === c;
  }, oe.isContextProvider = function(k) {
    return A(k) === s;
  }, oe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, oe.isForwardRef = function(k) {
    return A(k) === m;
  }, oe.isFragment = function(k) {
    return A(k) === n;
  }, oe.isLazy = function(k) {
    return A(k) === S;
  }, oe.isMemo = function(k) {
    return A(k) === p;
  }, oe.isPortal = function(k) {
    return A(k) === r;
  }, oe.isProfiler = function(k) {
    return A(k) === a;
  }, oe.isStrictMode = function(k) {
    return A(k) === o;
  }, oe.isSuspense = function(k) {
    return A(k) === g;
  }, oe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === n || k === u || k === a || k === o || k === g || k === y || typeof k == "object" && k !== null && (k.$$typeof === S || k.$$typeof === p || k.$$typeof === s || k.$$typeof === c || k.$$typeof === m || k.$$typeof === C || k.$$typeof === w || k.$$typeof === O || k.$$typeof === x);
  }, oe.typeOf = A, oe;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hn;
function Na() {
  return Hn || (Hn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function A(R) {
      return typeof R == "string" || typeof R == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      R === n || R === u || R === a || R === o || R === g || R === y || typeof R == "object" && R !== null && (R.$$typeof === S || R.$$typeof === p || R.$$typeof === s || R.$$typeof === c || R.$$typeof === m || R.$$typeof === C || R.$$typeof === w || R.$$typeof === O || R.$$typeof === x);
    }
    function _(R) {
      if (typeof R == "object" && R !== null) {
        var Oe = R.$$typeof;
        switch (Oe) {
          case t:
            var it = R.type;
            switch (it) {
              case l:
              case u:
              case n:
              case a:
              case o:
              case g:
                return it;
              default:
                var $t = it && it.$$typeof;
                switch ($t) {
                  case c:
                  case m:
                  case S:
                  case p:
                  case s:
                    return $t;
                  default:
                    return Oe;
                }
            }
          case r:
            return Oe;
        }
      }
    }
    var k = l, $ = u, q = c, F = s, D = t, Q = m, W = n, h = S, z = p, I = r, L = a, Y = o, fe = g, ke = !1;
    function Be(R) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(R) || _(R) === l;
    }
    function E(R) {
      return _(R) === u;
    }
    function M(R) {
      return _(R) === c;
    }
    function N(R) {
      return _(R) === s;
    }
    function j(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function U(R) {
      return _(R) === m;
    }
    function J(R) {
      return _(R) === n;
    }
    function K(R) {
      return _(R) === S;
    }
    function G(R) {
      return _(R) === p;
    }
    function Z(R) {
      return _(R) === r;
    }
    function te(R) {
      return _(R) === a;
    }
    function ee(R) {
      return _(R) === o;
    }
    function Ee(R) {
      return _(R) === g;
    }
    ie.AsyncMode = k, ie.ConcurrentMode = $, ie.ContextConsumer = q, ie.ContextProvider = F, ie.Element = D, ie.ForwardRef = Q, ie.Fragment = W, ie.Lazy = h, ie.Memo = z, ie.Portal = I, ie.Profiler = L, ie.StrictMode = Y, ie.Suspense = fe, ie.isAsyncMode = Be, ie.isConcurrentMode = E, ie.isContextConsumer = M, ie.isContextProvider = N, ie.isElement = j, ie.isForwardRef = U, ie.isFragment = J, ie.isLazy = K, ie.isMemo = G, ie.isPortal = Z, ie.isProfiler = te, ie.isStrictMode = ee, ie.isSuspense = Ee, ie.isValidElementType = A, ie.typeOf = _;
  }()), ie;
}
var Un;
function jo() {
  return Un || (Un = 1, process.env.NODE_ENV === "production" ? Kt.exports = Da() : Kt.exports = Na()), Kt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var zr, Gn;
function Wa() {
  if (Gn) return zr;
  Gn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        u[m] = m;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return zr = o() ? Object.assign : function(a, s) {
    for (var c, l = n(a), u, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var g in c)
        t.call(c, g) && (l[g] = c[g]);
      if (e) {
        u = e(c);
        for (var y = 0; y < u.length; y++)
          r.call(c, u[y]) && (l[u[y]] = c[u[y]]);
      }
    }
    return l;
  }, zr;
}
var Mr, Yn;
function cn() {
  if (Yn) return Mr;
  Yn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Mr = e, Mr;
}
var Pr, qn;
function Vo() {
  return qn || (qn = 1, Pr = Function.call.bind(Object.prototype.hasOwnProperty)), Pr;
}
var Fr, Kn;
function La() {
  if (Kn) return Fr;
  Kn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = cn(), r = {}, n = Vo();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, c, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in a)
        if (n(a, m)) {
          var g;
          try {
            if (typeof a[m] != "function") {
              var y = Error(
                (l || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            g = a[m](s, m, l, c, null, t);
          } catch (S) {
            g = S;
          }
          if (g && !(g instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var p = u ? u() : "";
            e(
              "Failed " + c + " type: " + g.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Fr = o, Fr;
}
var Dr, Xn;
function Ba() {
  if (Xn) return Dr;
  Xn = 1;
  var e = jo(), t = Wa(), r = cn(), n = Vo(), o = La(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Dr = function(c, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(E) {
      var M = E && (u && E[u] || E[m]);
      if (typeof M == "function")
        return M;
    }
    var y = "<<anonymous>>", p = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: O(),
      arrayOf: A,
      element: _(),
      elementType: k(),
      instanceOf: $,
      node: Q(),
      objectOf: F,
      oneOf: q,
      oneOfType: D,
      shape: h,
      exact: z
    };
    function S(E, M) {
      return E === M ? E !== 0 || 1 / E === 1 / M : E !== E && M !== M;
    }
    function x(E, M) {
      this.message = E, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function C(E) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, N = 0;
      function j(J, K, G, Z, te, ee, Ee) {
        if (Z = Z || y, ee = ee || G, Ee !== r) {
          if (l) {
            var R = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw R.name = "Invariant Violation", R;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = Z + ":" + G;
            !M[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ee + "` prop on `" + Z + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[Oe] = !0, N++);
          }
        }
        return K[G] == null ? J ? K[G] === null ? new x("The " + te + " `" + ee + "` is marked as required " + ("in `" + Z + "`, but its value is `null`.")) : new x("The " + te + " `" + ee + "` is marked as required in " + ("`" + Z + "`, but its value is `undefined`.")) : null : E(K, G, Z, te, ee);
      }
      var U = j.bind(null, !1);
      return U.isRequired = j.bind(null, !0), U;
    }
    function w(E) {
      function M(N, j, U, J, K, G) {
        var Z = N[j], te = Y(Z);
        if (te !== E) {
          var ee = fe(Z);
          return new x(
            "Invalid " + J + " `" + K + "` of type " + ("`" + ee + "` supplied to `" + U + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return C(M);
    }
    function O() {
      return C(s);
    }
    function A(E) {
      function M(N, j, U, J, K) {
        if (typeof E != "function")
          return new x("Property `" + K + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var G = N[j];
        if (!Array.isArray(G)) {
          var Z = Y(G);
          return new x("Invalid " + J + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected an array."));
        }
        for (var te = 0; te < G.length; te++) {
          var ee = E(G, te, U, J, K + "[" + te + "]", r);
          if (ee instanceof Error)
            return ee;
        }
        return null;
      }
      return C(M);
    }
    function _() {
      function E(M, N, j, U, J) {
        var K = M[N];
        if (!c(K)) {
          var G = Y(K);
          return new x("Invalid " + U + " `" + J + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(E);
    }
    function k() {
      function E(M, N, j, U, J) {
        var K = M[N];
        if (!e.isValidElementType(K)) {
          var G = Y(K);
          return new x("Invalid " + U + " `" + J + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(E);
    }
    function $(E) {
      function M(N, j, U, J, K) {
        if (!(N[j] instanceof E)) {
          var G = E.name || y, Z = Be(N[j]);
          return new x("Invalid " + J + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return C(M);
    }
    function q(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function M(N, j, U, J, K) {
        for (var G = N[j], Z = 0; Z < E.length; Z++)
          if (S(G, E[Z]))
            return null;
        var te = JSON.stringify(E, function(Ee, R) {
          var Oe = fe(R);
          return Oe === "symbol" ? String(R) : R;
        });
        return new x("Invalid " + J + " `" + K + "` of value `" + String(G) + "` " + ("supplied to `" + U + "`, expected one of " + te + "."));
      }
      return C(M);
    }
    function F(E) {
      function M(N, j, U, J, K) {
        if (typeof E != "function")
          return new x("Property `" + K + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var G = N[j], Z = Y(G);
        if (Z !== "object")
          return new x("Invalid " + J + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected an object."));
        for (var te in G)
          if (n(G, te)) {
            var ee = E(G, te, U, J, K + "." + te, r);
            if (ee instanceof Error)
              return ee;
          }
        return null;
      }
      return C(M);
    }
    function D(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var M = 0; M < E.length; M++) {
        var N = E[M];
        if (typeof N != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ke(N) + " at index " + M + "."
          ), s;
      }
      function j(U, J, K, G, Z) {
        for (var te = [], ee = 0; ee < E.length; ee++) {
          var Ee = E[ee], R = Ee(U, J, K, G, Z, r);
          if (R == null)
            return null;
          R.data && n(R.data, "expectedType") && te.push(R.data.expectedType);
        }
        var Oe = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new x("Invalid " + G + " `" + Z + "` supplied to " + ("`" + K + "`" + Oe + "."));
      }
      return C(j);
    }
    function Q() {
      function E(M, N, j, U, J) {
        return I(M[N]) ? null : new x("Invalid " + U + " `" + J + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return C(E);
    }
    function W(E, M, N, j, U) {
      return new x(
        (E || "React class") + ": " + M + " type `" + N + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function h(E) {
      function M(N, j, U, J, K) {
        var G = N[j], Z = Y(G);
        if (Z !== "object")
          return new x("Invalid " + J + " `" + K + "` of type `" + Z + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var te in E) {
          var ee = E[te];
          if (typeof ee != "function")
            return W(U, J, K, te, fe(ee));
          var Ee = ee(G, te, U, J, K + "." + te, r);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return C(M);
    }
    function z(E) {
      function M(N, j, U, J, K) {
        var G = N[j], Z = Y(G);
        if (Z !== "object")
          return new x("Invalid " + J + " `" + K + "` of type `" + Z + "` " + ("supplied to `" + U + "`, expected `object`."));
        var te = t({}, N[j], E);
        for (var ee in te) {
          var Ee = E[ee];
          if (n(E, ee) && typeof Ee != "function")
            return W(U, J, K, ee, fe(Ee));
          if (!Ee)
            return new x(
              "Invalid " + J + " `" + K + "` key `" + ee + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(N[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var R = Ee(G, ee, U, J, K + "." + ee, r);
          if (R)
            return R;
        }
        return null;
      }
      return C(M);
    }
    function I(E) {
      switch (typeof E) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !E;
        case "object":
          if (Array.isArray(E))
            return E.every(I);
          if (E === null || c(E))
            return !0;
          var M = g(E);
          if (M) {
            var N = M.call(E), j;
            if (M !== E.entries) {
              for (; !(j = N.next()).done; )
                if (!I(j.value))
                  return !1;
            } else
              for (; !(j = N.next()).done; ) {
                var U = j.value;
                if (U && !I(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L(E, M) {
      return E === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function Y(E) {
      var M = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : L(M, E) ? "symbol" : M;
    }
    function fe(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var M = Y(E);
      if (M === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function ke(E) {
      var M = fe(E);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function Be(E) {
      return !E.constructor || !E.constructor.name ? y : E.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Dr;
}
var Nr, Qn;
function ja() {
  if (Qn) return Nr;
  Qn = 1;
  var e = cn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Nr = function() {
    function n(s, c, l, u, m, g) {
      if (g !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Nr;
}
if (process.env.NODE_ENV !== "production") {
  var Va = jo(), Ha = !0;
  Yr.exports = Ba()(Va.isElement, Ha);
} else
  Yr.exports = ja()();
var Ua = Yr.exports;
const T = /* @__PURE__ */ Fa(Ua);
function Ga(e) {
  return e == null || Object.keys(e).length === 0;
}
function ln(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ i(sa, {
    styles: typeof t == "function" ? (o) => t(Ga(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (ln.propTypes = {
  defaultTheme: T.object,
  styles: T.oneOfType([T.array, T.string, T.object, T.func])
});
/**
 * @mui/styled-engine v9.0.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ya(e, t) {
  const r = ca(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function qa(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Jn = [];
function rt(e) {
  return Jn[0] = e, Pa(Jn);
}
var qr = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Ka() {
  if (Zn) return ce;
  Zn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), p = Symbol.for("react.client.reference");
  function S(x) {
    if (typeof x == "object" && x !== null) {
      var C = x.$$typeof;
      switch (C) {
        case e:
          switch (x = x.type, x) {
            case r:
            case o:
            case n:
            case l:
            case u:
            case y:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case c:
                case g:
                case m:
                  return x;
                case a:
                  return x;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return ce.ContextConsumer = a, ce.ContextProvider = s, ce.Element = e, ce.ForwardRef = c, ce.Fragment = r, ce.Lazy = g, ce.Memo = m, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = l, ce.SuspenseList = u, ce.isContextConsumer = function(x) {
    return S(x) === a;
  }, ce.isContextProvider = function(x) {
    return S(x) === s;
  }, ce.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, ce.isForwardRef = function(x) {
    return S(x) === c;
  }, ce.isFragment = function(x) {
    return S(x) === r;
  }, ce.isLazy = function(x) {
    return S(x) === g;
  }, ce.isMemo = function(x) {
    return S(x) === m;
  }, ce.isPortal = function(x) {
    return S(x) === t;
  }, ce.isProfiler = function(x) {
    return S(x) === o;
  }, ce.isStrictMode = function(x) {
    return S(x) === n;
  }, ce.isSuspense = function(x) {
    return S(x) === l;
  }, ce.isSuspenseList = function(x) {
    return S(x) === u;
  }, ce.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === o || x === n || x === l || x === u || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === m || x.$$typeof === s || x.$$typeof === a || x.$$typeof === c || x.$$typeof === p || x.getModuleId !== void 0);
  }, ce.typeOf = S, ce;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eo;
function Xa() {
  return eo || (eo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (typeof x == "object" && x !== null) {
        var C = x.$$typeof;
        switch (C) {
          case t:
            switch (x = x.type, x) {
              case n:
              case a:
              case o:
              case u:
              case m:
              case p:
                return x;
              default:
                switch (x = x && x.$$typeof, x) {
                  case c:
                  case l:
                  case y:
                  case g:
                    return x;
                  case s:
                    return x;
                  default:
                    return C;
                }
            }
          case r:
            return C;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
    le.ContextConsumer = s, le.ContextProvider = c, le.Element = t, le.ForwardRef = l, le.Fragment = n, le.Lazy = y, le.Memo = g, le.Portal = r, le.Profiler = a, le.StrictMode = o, le.Suspense = u, le.SuspenseList = m, le.isContextConsumer = function(x) {
      return e(x) === s;
    }, le.isContextProvider = function(x) {
      return e(x) === c;
    }, le.isElement = function(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }, le.isForwardRef = function(x) {
      return e(x) === l;
    }, le.isFragment = function(x) {
      return e(x) === n;
    }, le.isLazy = function(x) {
      return e(x) === y;
    }, le.isMemo = function(x) {
      return e(x) === g;
    }, le.isPortal = function(x) {
      return e(x) === r;
    }, le.isProfiler = function(x) {
      return e(x) === a;
    }, le.isStrictMode = function(x) {
      return e(x) === o;
    }, le.isSuspense = function(x) {
      return e(x) === u;
    }, le.isSuspenseList = function(x) {
      return e(x) === m;
    }, le.isValidElementType = function(x) {
      return typeof x == "string" || typeof x == "function" || x === n || x === a || x === o || x === u || x === m || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === g || x.$$typeof === c || x.$$typeof === s || x.$$typeof === l || x.$$typeof === S || x.getModuleId !== void 0);
    }, le.typeOf = e;
  }()), le;
}
process.env.NODE_ENV === "production" ? qr.exports = Ka() : qr.exports = Xa();
var nr = qr.exports;
function Qe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Ho(e) {
  if (/* @__PURE__ */ B.isValidElement(e) || nr.isValidElementType(e) || !Qe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Ho(e[r]);
  }), t;
}
function Fe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Qe(e) && Qe(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ B.isValidElement(t[o]) || nr.isValidElementType(t[o]) ? n[o] = t[o] : Qe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Qe(e[o]) ? n[o] = Fe(e[o], t[o], r) : r.clone ? n[o] = Qe(t[o]) ? Ho(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Qa = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Uo(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, a = Qa(t), s = Object.keys(a);
  function c(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function u(p, S) {
    const x = s.indexOf(S);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(x !== -1 && typeof t[s[x]] == "number" ? t[s[x]] : S) - n / 100}${r})`;
  }
  function m(p) {
    return s.indexOf(p) + 1 < s.length ? u(p, s[s.indexOf(p) + 1]) : c(p);
  }
  function g(p) {
    const S = s.indexOf(p);
    return S === 0 ? c(s[1]) : S === s.length - 1 ? l(s[S]) : u(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  const y = [];
  for (let p = 0; p < s.length; p += 1)
    y.push(c(s[p]));
  return {
    keys: s,
    values: a,
    up: c,
    down: l,
    between: u,
    only: m,
    not: g,
    unit: r,
    internal_mediaKeys: y,
    ...o
  };
}
const to = /min-width:\s*([0-9.]+)/;
function ro(e, t) {
  if (!e.containerQueries || !Ja(t))
    return t;
  const r = [];
  for (const o in t)
    o.startsWith("@container") && r.push(o);
  r.sort((o, a) => {
    var s, c;
    return +(((s = o.match(to)) == null ? void 0 : s[1]) || 0) - +(((c = a.match(to)) == null ? void 0 : c[1]) || 0);
  });
  const n = t;
  for (let o = 0; o < r.length; o += 1) {
    const a = r[o], s = n[a];
    delete n[a], n[a] = s;
  }
  return n;
}
function Ja(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function Go(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Za(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw (
        /* minify-error */
        new Error(`MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`)
      );
    return null;
  }
  const [, n, o] = r, a = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(a);
}
function es(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function r(a, s) {
    a.up = (...c) => t(e.breakpoints.up(...c), s), a.down = (...c) => t(e.breakpoints.down(...c), s), a.between = (...c) => t(e.breakpoints.between(...c), s), a.only = (...c) => t(e.breakpoints.only(...c), s), a.not = (...c) => {
      const l = t(e.breakpoints.not(...c), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const ts = {
  borderRadius: 4
}, ot = process.env.NODE_ENV !== "production" ? T.oneOfType([T.number, T.string, T.object, T.array]) : {};
function Yo(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function bt(e, t) {
  const r = Array.isArray(t), n = Array.isArray(e);
  return as(t) ? t : ss(e) ? wt(t) : r && n ? os(e, t) : r !== n ? wt(t) : cs(e, t);
}
function rs(e) {
  let t = 0;
  const r = e.length, n = new Array(r);
  for (t = 0; t < r; t += 1)
    n[t] = wt(e[t]);
  return n;
}
function ns(e) {
  const t = {};
  for (const r in e)
    t[r] = wt(e[r]);
  return t;
}
function os(e, t) {
  const r = e.length;
  for (let n = 0; n < t.length; n += 1)
    e[r + n] = wt(t[n]);
  return e;
}
function is(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function as(e) {
  return typeof e != "object" || e === null;
}
function ss(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function wt(e) {
  return is(e) ? Array.isArray(e) ? rs(e) : ns(e) : e;
}
function cs(e, t) {
  for (const r in t)
    r in e ? e[r] = bt(e[r], t[r]) : e[r] = wt(t[r]);
  return e;
}
const ls = {}, fr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, or = Uo({
  values: fr
}), ds = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : fr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function It(e, t, r) {
  const n = {};
  return mr(n, e.theme, t, (o, a, s) => {
    const c = r(a, s);
    o ? n[o] = c : bt(n, c);
  });
}
function mr(e, t, r, n) {
  if (t ?? (t = ls), Array.isArray(r)) {
    const o = t.breakpoints ?? or;
    for (let a = 0; a < r.length; a += 1)
      Wr(e, o.up(o.keys[a]), r[a], void 0, n);
    return e;
  }
  if (typeof r == "object") {
    const o = t.breakpoints ?? or, a = o.values ?? fr;
    for (const s in r)
      if (Go(o.keys, s)) {
        const c = Za(t.containerQueries ? t : ds, s);
        c && Wr(e, c, r[s], s, n);
      } else if (s in a) {
        const c = o.up(s);
        Wr(e, c, r[s], s, n);
      } else {
        const c = s;
        e[c] = r[c];
      }
    return e;
  }
  return n(void 0, r), e;
}
function Wr(e, t, r, n, o) {
  e[t] ?? (e[t] = {}), o(t, r, n);
}
function us(e = or) {
  const {
    internal_mediaKeys: t
  } = e, r = {};
  for (let n = 0; n < t.length; n += 1)
    r[t[n]] = {};
  return r;
}
function no(e, t) {
  const r = e.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n];
    Yo(t[o]) && delete t[o];
  }
  return t;
}
function ps(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e.keys.length; n += 1)
      if (e.keys[n] in t)
        return !0;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1)
      if (Go(e.keys, r[n]))
        return !0;
  }
  return !1;
}
function Ct(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : dt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qo(e, t, r, n) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || r : typeof r == "string" ? o = hr(e, r, !0, n) || r : o = r, t && (o = t(o, r, e)), o;
}
function hr(e, t, r = !0, n = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && r) {
    const a = oo(e.vars, o, n);
    if (a != null)
      return a;
  }
  return oo(e, o, n);
}
function oo(e, t, r = void 0) {
  let n, o = e, a = 0;
  for (; a < t.length; ) {
    if (o == null)
      return o;
    n = o, o = o[t[a]], a += 1;
  }
  if (r && o === void 0) {
    const s = t[t.length - 1], c = `${r}${s === "default" ? "" : Ct(s)}`;
    return n == null ? void 0 : n[c];
  }
  return o;
}
function ve(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, a = (s) => {
    if (s[t] == null)
      return null;
    const c = s[t], l = s.theme, u = hr(l, n) || {};
    return It(s, c, (g) => {
      const y = qo(u, o, g, t);
      return r === !1 ? y : {
        [r]: y
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ot
  } : {}, a.filterProps = [t], a;
}
const fs = {
  internal_cache: {}
}, ir = {
  m: "margin",
  p: "padding"
}, io = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ao = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Lt = {};
for (const e in ir)
  Lt[e] = [ir[e]];
for (const e in ir)
  for (const t in io) {
    const r = ir[e], n = io[t], o = Array.isArray(n) ? n.map((a) => r + a) : [r + n];
    Lt[e + t] = o;
  }
for (const e in ao)
  Lt[e] = Lt[ao[e]];
const gr = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), xr = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), ms = /* @__PURE__ */ new Set([...gr, ...xr]);
function Ut(e, t, r, n) {
  const o = hr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof o == "string" ? o.startsWith("var(") && a === 0 ? 0 : o.startsWith("var(") && a === 1 ? o : `calc(${a} * ${o})` : o * a) : Array.isArray(o) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[s];
    return a >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function dn(e) {
  return Ut(e, "spacing", 8, "spacing");
}
function Gt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const so = [""];
function Ko(e, t) {
  var a;
  const r = e.theme ?? fs, n = ((a = r == null ? void 0 : r.internal_cache) == null ? void 0 : a.unarySpacing) ?? dn(r), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const c = Lt[s] ?? (so[0] = s, so), l = e[s];
    mr(o, e.theme, l, (u, m) => {
      const g = u ? o[u] : o;
      for (let y = 0; y < c.length; y += 1)
        g[c[y]] = Gt(n, m);
    });
  }
  return o;
}
function ge(e) {
  return Ko(e, gr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? Array.from(gr).reduce((e, t) => (e[t] = ot, e), {}) : {};
ge.filterProps = gr;
function xe(e) {
  return Ko(e, xr);
}
xe.propTypes = process.env.NODE_ENV !== "production" ? Array.from(xr).reduce((e, t) => (e[t] = ot, e), {}) : {};
xe.filterProps = xr;
process.env.NODE_ENV !== "production" && Array.from(ms).reduce((e, t) => (e[t] = ot, e), {});
function Xo(e = 8, t = dn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((a) => {
    const s = t(a);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function yr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => {
    const o = {};
    for (const a in n)
      t[a] && bt(o, t[a](n));
    return o;
  };
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Pe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ne(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const hs = Ne("border", Pe), gs = Ne("borderTop", Pe), xs = Ne("borderRight", Pe), ys = Ne("borderBottom", Pe), bs = Ne("borderLeft", Pe), Ss = Ne("borderColor"), vs = Ne("borderTopColor"), ws = Ne("borderRightColor"), Cs = Ne("borderBottomColor"), ks = Ne("borderLeftColor"), Es = Ne("outline", Pe), Ts = Ne("outlineColor"), br = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ut(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Gt(t, n)
    });
    return It(e, e.borderRadius, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ot
} : {};
br.filterProps = ["borderRadius"];
yr(hs, gs, xs, ys, bs, Ss, vs, ws, Cs, ks, br, Es, Ts);
const Sr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ut(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Gt(t, n)
    });
    return It(e, e.gap, r);
  }
  return null;
};
Sr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ot
} : {};
Sr.filterProps = ["gap"];
const vr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ut(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Gt(t, n)
    });
    return It(e, e.columnGap, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ot
} : {};
vr.filterProps = ["columnGap"];
const wr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ut(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Gt(t, n)
    });
    return It(e, e.rowGap, r);
  }
  return null;
};
wr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ot
} : {};
wr.filterProps = ["rowGap"];
const Is = ve({
  prop: "gridColumn"
}), $s = ve({
  prop: "gridRow"
}), As = ve({
  prop: "gridAutoFlow"
}), _s = ve({
  prop: "gridAutoColumns"
}), Rs = ve({
  prop: "gridAutoRows"
}), Os = ve({
  prop: "gridTemplateColumns"
}), zs = ve({
  prop: "gridTemplateRows"
}), Ms = ve({
  prop: "gridTemplateAreas"
}), Ps = ve({
  prop: "gridArea"
});
yr(Sr, vr, wr, Is, $s, As, _s, Rs, Os, zs, Ms, Ps);
function St(e, t) {
  return t === "grey" ? t : e;
}
const Fs = ve({
  prop: "color",
  themeKey: "palette",
  transform: St
}), Ds = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: St
}), Ns = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: St
});
yr(Fs, Ds, Ns);
function ze(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ws = ve({
  prop: "width",
  transform: ze
}), un = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, s, c, l;
      const n = ((s = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[r]) || fr[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ze(r)
      };
    };
    return It(e, e.maxWidth, t);
  }
  return null;
};
un.filterProps = ["maxWidth"];
const Ls = ve({
  prop: "minWidth",
  transform: ze
}), Bs = ve({
  prop: "height",
  transform: ze
}), js = ve({
  prop: "maxHeight",
  transform: ze
}), Vs = ve({
  prop: "minHeight",
  transform: ze
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: ze
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: ze
});
const Hs = ve({
  prop: "boxSizing"
});
yr(Ws, un, Ls, Bs, js, Vs, Hs);
const Cr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Pe
  },
  borderTop: {
    themeKey: "borders",
    transform: Pe
  },
  borderRight: {
    themeKey: "borders",
    transform: Pe
  },
  borderBottom: {
    themeKey: "borders",
    transform: Pe
  },
  borderLeft: {
    themeKey: "borders",
    transform: Pe
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Pe
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: br
  },
  // palette
  color: {
    themeKey: "palette",
    transform: St
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: St
  },
  backgroundColor: {
    themeKey: "palette",
    transform: St
  },
  // spacing
  p: {
    style: xe
  },
  pt: {
    style: xe
  },
  pr: {
    style: xe
  },
  pb: {
    style: xe
  },
  pl: {
    style: xe
  },
  px: {
    style: xe
  },
  py: {
    style: xe
  },
  padding: {
    style: xe
  },
  paddingTop: {
    style: xe
  },
  paddingRight: {
    style: xe
  },
  paddingBottom: {
    style: xe
  },
  paddingLeft: {
    style: xe
  },
  paddingX: {
    style: xe
  },
  paddingY: {
    style: xe
  },
  paddingInline: {
    style: xe
  },
  paddingInlineStart: {
    style: xe
  },
  paddingInlineEnd: {
    style: xe
  },
  paddingBlock: {
    style: xe
  },
  paddingBlockStart: {
    style: xe
  },
  paddingBlockEnd: {
    style: xe
  },
  m: {
    style: ge
  },
  mt: {
    style: ge
  },
  mr: {
    style: ge
  },
  mb: {
    style: ge
  },
  ml: {
    style: ge
  },
  mx: {
    style: ge
  },
  my: {
    style: ge
  },
  margin: {
    style: ge
  },
  marginTop: {
    style: ge
  },
  marginRight: {
    style: ge
  },
  marginBottom: {
    style: ge
  },
  marginLeft: {
    style: ge
  },
  marginX: {
    style: ge
  },
  marginY: {
    style: ge
  },
  marginInline: {
    style: ge
  },
  marginInlineStart: {
    style: ge
  },
  marginInlineEnd: {
    style: ge
  },
  marginBlock: {
    style: ge
  },
  marginBlockStart: {
    style: ge
  },
  marginBlockEnd: {
    style: ge
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Sr
  },
  rowGap: {
    style: wr
  },
  columnGap: {
    style: vr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ze
  },
  maxWidth: {
    style: un
  },
  minWidth: {
    transform: ze
  },
  height: {
    transform: ze
  },
  maxHeight: {
    transform: ze
  },
  minHeight: {
    transform: ze
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Us = {};
function Gs() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: r,
      theme: n = Us,
      nested: o
    } = t, a = n.unstable_sxConfig ?? Cr, s = {
      sx: null,
      theme: n,
      nested: !0
    };
    function c(l) {
      let u = l;
      if (typeof l == "function")
        u = l(n);
      else if (typeof l != "object")
        return l;
      if (!u)
        return null;
      const m = n.breakpoints ?? or, g = us(m);
      for (const y in u) {
        const p = Ys(u[y], n);
        if (p != null) {
          if (typeof p != "object") {
            co(g, y, p, n, a);
            continue;
          }
          if (a[y]) {
            co(g, y, p, n, a);
            continue;
          }
          ps(m, p) ? mr(g, t.theme, p, (S, x) => {
            g[S][y] = x;
          }) : (s.sx = p, g[y] = e(s));
        }
      }
      return !o && n.modularCssLayers ? {
        "@layer sx": ro(n, no(m, g))
      } : ro(n, no(m, g));
    }
    return Array.isArray(r) ? r.map(c) : c(r);
  }
  return e.filterProps = ["sx"], e;
}
const kt = Gs();
function co(e, t, r, n, o) {
  const a = o[t];
  if (!a) {
    e[t] = r;
    return;
  }
  if (r == null)
    return;
  const {
    themeKey: s
  } = a;
  if (s === "typography" && r === "inherit") {
    e[t] = r;
    return;
  }
  const {
    style: c
  } = a;
  if (c) {
    bt(e, c({
      [t]: r,
      theme: n
    }));
    return;
  }
  const {
    cssProperty: l = t,
    transform: u
  } = a, m = hr(n, s);
  mr(e, n, r, (g, y) => {
    const p = qo(m, u, y, t);
    l === !1 ? bt(g ? e[g] : e, p) : g ? e[g][l] = p : e[l] = p;
  });
}
function Ys(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function qs(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function pn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, c = Uo(r), l = Xo(o);
  let u = Fe({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...ts,
      ...a
    }
  }, s);
  return u = es(u), u.applyStyles = qs, u = t.reduce((m, g) => Fe(m, g), u), u.unstable_sxConfig = {
    ...Cr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(g) {
    return kt({
      sx: g,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function Ks(e) {
  return Object.keys(e).length === 0;
}
function fn(e = null) {
  const t = B.useContext(Wo);
  return !t || Ks(t) ? e : t;
}
const Xs = pn();
function Qo(e = Xs) {
  return fn(e);
}
function Lr(e) {
  const t = rt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function mn({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Qo(r), o = t && n[t] || n;
  let a = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => Lr(typeof s == "function" ? s(o) : s)) : a = Lr(a)), /* @__PURE__ */ i(ln, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (mn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: T.object,
  /**
   * @ignore
   */
  styles: T.oneOfType([T.array, T.func, T.number, T.object, T.string, T.bool]),
  /**
   * @ignore
   */
  themeId: T.string
});
const lo = (e) => e, Qs = () => {
  let e = lo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = lo;
    }
  };
}, Js = Qs();
function Jo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Jo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Zo() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Jo(e)) && (n && (n += " "), n += t);
  return n;
}
const Zs = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function hn(e, t, r = "Mui") {
  const n = Zs[t];
  return n ? `${r}-${n}` : `${Js.generate(e)}-${t}`;
}
function ec(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = hn(e, o, r);
  }), n;
}
function ei(e, t = "") {
  return e.displayName || e.name || t;
}
function uo(e, t, r) {
  const n = ei(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function tc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return ei(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case nr.ForwardRef:
          return uo(e, e.render, "ForwardRef");
        case nr.Memo:
          return uo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function ti(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: rt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = rt(o.style));
  }), n;
}
const rc = pn();
function Br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function lt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function nc(e) {
  return e ? (t, r) => r[e] : null;
}
function oc(e, t, r) {
  e.theme = Yo(e.theme) ? r : e.theme[t] || e.theme;
}
function er(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => er(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? lt(n.style, r) : n.style;
    else {
      const {
        variants: a,
        ...s
      } = n;
      o = r ? lt(rt(s), r) : s;
    }
    return ri(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? lt(rt(n.style), r) : n.style : r ? lt(rt(n), r) : n;
}
function ri(e, t, r = [], n = void 0) {
  var a;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const c = t[s];
    if (typeof c.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !c.props(o))
        continue;
    } else
      for (const l in c.props)
        if (e[l] !== c.props[l] && ((a = e.ownerState) == null ? void 0 : a[l]) !== c.props[l])
          continue e;
    typeof c.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? lt(rt(c.style(o)), n) : c.style(o))) : r.push(n ? lt(rt(c.style), n) : c.style);
  }
  return r;
}
function ic(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = rc,
    rootShouldForwardProp: n = Br,
    slotShouldForwardProp: o = Br
  } = e;
  function a(c) {
    oc(c, t, r);
  }
  return (c, l = {}) => {
    qa(c, ($) => $.filter((q) => q !== kt));
    const {
      name: u,
      slot: m,
      skipVariantsResolver: g,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = nc(ni(m)),
      ...S
    } = l, x = u && u.startsWith("Mui") || m ? "components" : "custom", C = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), w = y || !1;
    let O = Br;
    m === "Root" || m === "root" ? O = n : m ? O = o : cc(c) && (O = void 0);
    const A = Ya(c, {
      shouldForwardProp: O,
      label: sc(u, m),
      ...S
    }), _ = ($) => {
      if ($.__emotion_real === $)
        return $;
      if (typeof $ == "function")
        return function(F) {
          return er(F, $, F.theme.modularCssLayers ? x : void 0);
        };
      if (Qe($)) {
        const q = ti($);
        return function(D) {
          return q.variants ? er(D, q, D.theme.modularCssLayers ? x : void 0) : D.theme.modularCssLayers ? lt(q.style, x) : q.style;
        };
      }
      return $;
    }, k = (...$) => {
      const q = [], F = $.map(_), D = [];
      if (q.push(a), u && p && D.push(function(z) {
        var fe, ke;
        const L = (ke = (fe = z.theme.components) == null ? void 0 : fe[u]) == null ? void 0 : ke.styleOverrides;
        if (!L)
          return null;
        const Y = {};
        for (const Be in L)
          Y[Be] = er(z, L[Be], z.theme.modularCssLayers ? "theme" : void 0);
        return p(z, Y);
      }), u && !C && D.push(function(z) {
        var Y, fe;
        const I = z.theme, L = (fe = (Y = I == null ? void 0 : I.components) == null ? void 0 : Y[u]) == null ? void 0 : fe.variants;
        return L ? ri(z, L, [], z.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || D.push(kt), Array.isArray(F[0])) {
        const h = F.shift(), z = new Array(q.length).fill(""), I = new Array(D.length).fill("");
        let L;
        L = [...z, ...h, ...I], L.raw = [...z, ...h.raw, ...I], q.unshift(L);
      }
      const Q = [...q, ...F, ...D], W = A(...Q);
      return c.muiName && (W.muiName = c.muiName), process.env.NODE_ENV !== "production" && (W.displayName = ac(u, m, c)), W;
    };
    return A.withConfig && (k.withConfig = A.withConfig), k;
  };
}
function ac(e, t, r) {
  return e ? `${e}${Ct(t || "")}` : `Styled(${tc(r)})`;
}
function sc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ni(t || "Root")}`), r;
}
function cc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ni(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Kr(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const a = o;
      if (a === "components" || a === "slots")
        n[a] = {
          ...e[a],
          ...n[a]
        };
      else if (a === "componentsProps" || a === "slotProps") {
        const s = e[a], c = t[a];
        if (!c)
          n[a] = s || {};
        else if (!s)
          n[a] = c;
        else {
          n[a] = {
            ...c
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const u = l;
              n[a][u] = Kr(s[u], c[u], r);
            }
        }
      } else a === "className" && r && t.className !== void 0 ? n.className = Zo(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : a === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[a] === void 0 && (n[a] = e[a]);
    }
  return n;
}
const oi = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
function lc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function gn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), lc(e, t, r);
}
function dc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(dc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : dt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : dt(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const uc = (e) => {
  const t = nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, zt = (e, t) => {
  try {
    return uc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function kr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function ii(e) {
  e = nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (u, m = (u + r / 30) % 12) => o - a * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), kr({
    type: c,
    values: l
  });
}
function Xr(e) {
  e = nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? nt(ii(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function po(e, t) {
  const r = Xr(e), n = Xr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function ai(e, t) {
  return e = nt(e), t = gn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, kr(e);
}
function st(e, t, r) {
  try {
    return ai(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Er(e, t) {
  if (e = nt(e), t = gn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return kr(e);
}
function ae(e, t, r) {
  try {
    return Er(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Tr(e, t) {
  if (e = nt(e), t = gn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return kr(e);
}
function se(e, t, r) {
  try {
    return Tr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function pc(e, t = 0.15) {
  return Xr(e) > 0.5 ? Er(e, t) : Tr(e, t);
}
function Xt(e, t, r) {
  try {
    return pc(e, t);
  } catch {
    return e;
  }
}
const fc = "exact-prop: ​";
function si(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [fc]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const xn = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (xn.displayName = "ThemeContext");
function yn() {
  const e = B.useContext(xn);
  return process.env.NODE_ENV !== "production" && B.useDebugValue(e), e;
}
const mc = typeof Symbol == "function" && Symbol.for, hc = mc ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function gc(e, t) {
  if (typeof t == "function") {
    const r = t(e);
    return process.env.NODE_ENV !== "production" && (r || console.error(["MUI: You should return an object from your theme function, i.e.", "<ThemeProvider theme={() => ({})} />"].join(`
`))), r;
  }
  return {
    ...e,
    ...t
  };
}
function ar(e) {
  const {
    children: t,
    theme: r
  } = e, n = yn();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = B.useMemo(() => {
    const a = n === null ? {
      ...r
    } : gc(n, r);
    return a != null && (a[hc] = n !== null), a;
  }, [r, n]);
  return /* @__PURE__ */ i(xn.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ar.propTypes = {
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: T.oneOfType([T.object, T.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (ar.propTypes = si(ar.propTypes));
const xc = /* @__PURE__ */ B.createContext();
function ci({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ i(xc.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  children: T.node,
  value: T.bool
});
const li = /* @__PURE__ */ B.createContext(void 0);
function di({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ i(li.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: T.node,
  /**
   * @ignore
   */
  value: T.object
});
function yc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Kr(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Kr(o, n, t.components.mergeClassNameAndStyle) : n;
}
function bc({
  props: e,
  name: t
}) {
  const r = B.useContext(li);
  return yc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let fo = 0;
function Sc(e) {
  const [t, r] = B.useState(e), n = e || t;
  return B.useEffect(() => {
    t == null && (fo += 1, r(`mui-${fo}`));
  }, [t]), n;
}
const vc = {
  ...B
}, mo = vc.useId;
function wc(e) {
  return mo !== void 0 ? mo() : Sc(e);
}
function Cc(e) {
  const t = fn(), r = wc() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, oi(() => {
    var c, l;
    const a = document.querySelector("head");
    if (!a)
      return;
    const s = a.firstChild;
    if (o) {
      if (s && ((c = s.hasAttribute) != null && c.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === r)
        return;
      const u = document.createElement("style");
      u.setAttribute("data-mui-layer-order", r), u.textContent = o, a.prepend(u);
    } else
      (l = a.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || l.remove();
  }, [o, r]), o ? /* @__PURE__ */ i(mn, {
    styles: o
  }) : null;
}
const ho = {};
function go(e, t, r, n = !1) {
  return B.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const a = r(o), s = e ? {
        ...t,
        [e]: a
      } : a;
      return n ? () => s : s;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, n]);
}
function Bt(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = fn(ho), a = yn() || ho;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = go(n, o, r), c = go(n, a, r, !0), l = (n ? s[n] : s).direction === "rtl", u = Cc(s);
  return /* @__PURE__ */ i(ar, {
    theme: c,
    children: /* @__PURE__ */ i(Wo.Provider, {
      value: s,
      children: /* @__PURE__ */ i(ci, {
        value: l,
        children: /* @__PURE__ */ f(di, {
          value: n ? s[n].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Bt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: T.oneOfType([T.func, T.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: T.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Bt.propTypes = si(Bt.propTypes));
const xo = {
  theme: void 0
};
function kc(e) {
  let t, r;
  return function(o) {
    let a = t;
    return (a === void 0 || o.theme !== r) && (xo.theme = o.theme, a = ti(e(xo)), t = a, r = o.theme), a;
  };
}
const bn = "mode", Sn = "color-scheme", Ec = "data-color-scheme";
function Tc(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = bn,
    colorSchemeStorageKey: a = Sn,
    attribute: s = Ec,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e || {};
  let u = "", m = s;
  if (s === "class" && (m = ".%s"), s === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const y = m.substring(1);
    u += `${c}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${c}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const g = m.match(/\[([^[\]]+)\]/);
  if (g) {
    const [y, p] = g[1].split("=");
    p || (u += `${c}.removeAttribute('${y}'.replace('%s', light));
      ${c}.removeAttribute('${y}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${y}'.replace('%s', colorScheme), ${p ? `${p}.replace('%s', colorScheme)` : '""'});`;
  } else m !== ".%s" && (u += `${c}.setAttribute('${m}', colorScheme);`);
  return /* @__PURE__ */ i("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${a}-dark') || '${n}';
  const light = localStorage.getItem('${a}-light') || '${r}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${u}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Ic() {
}
const $c = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let n;
    try {
      n = t.localStorage.getItem(e);
    } catch {
    }
    return n || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return Ic;
    const n = (o) => {
      const a = o.newValue;
      o.key === e && r(a);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function jr() {
}
function yo(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ui(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Ac(e) {
  return ui(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function _c(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: a = bn,
    colorSchemeStorageKey: s = Sn,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: l = $c,
    noSsr: u = !1
  } = e, m = o.join(","), g = o.length > 1, y = B.useMemo(() => l == null ? void 0 : l({
    key: a,
    storageWindow: c
  }), [l, a, c]), p = B.useMemo(() => l == null ? void 0 : l({
    key: `${s}-light`,
    storageWindow: c
  }), [l, s, c]), S = B.useMemo(() => l == null ? void 0 : l({
    key: `${s}-dark`,
    storageWindow: c
  }), [l, s, c]), [x, C] = B.useState(() => {
    const F = (y == null ? void 0 : y.get(t)) || t, D = (p == null ? void 0 : p.get(r)) || r, Q = (S == null ? void 0 : S.get(n)) || n;
    return {
      mode: F,
      systemMode: yo(F),
      lightColorScheme: D,
      darkColorScheme: Q
    };
  }), [w, O] = B.useState(u || !g);
  B.useEffect(() => {
    O(!0);
  }, []);
  const A = Ac(x), _ = B.useCallback((F) => {
    C((D) => {
      if (F === D.mode)
        return D;
      const Q = F ?? t;
      return y == null || y.set(Q), {
        ...D,
        mode: Q,
        systemMode: yo(Q)
      };
    });
  }, [y, t]), k = B.useCallback((F) => {
    F ? typeof F == "string" ? F && !m.includes(F) ? console.error(`\`${F}\` does not exist in \`theme.colorSchemes\`.`) : C((D) => {
      const Q = {
        ...D
      };
      return ui(D, (W) => {
        W === "light" && (p == null || p.set(F), Q.lightColorScheme = F), W === "dark" && (S == null || S.set(F), Q.darkColorScheme = F);
      }), Q;
    }) : C((D) => {
      const Q = {
        ...D
      }, W = F.light === null ? r : F.light, h = F.dark === null ? n : F.dark;
      return W && (m.includes(W) ? (Q.lightColorScheme = W, p == null || p.set(W)) : console.error(`\`${W}\` does not exist in \`theme.colorSchemes\`.`)), h && (m.includes(h) ? (Q.darkColorScheme = h, S == null || S.set(h)) : console.error(`\`${h}\` does not exist in \`theme.colorSchemes\`.`)), Q;
    }) : C((D) => (p == null || p.set(r), S == null || S.set(n), {
      ...D,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [m, p, S, r, n]), $ = B.useCallback((F) => {
    x.mode === "system" && C((D) => {
      const Q = F != null && F.matches ? "dark" : "light";
      return D.systemMode === Q ? D : {
        ...D,
        systemMode: Q
      };
    });
  }, [x.mode]), q = B.useRef($);
  return q.current = $, B.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const F = (...Q) => q.current(...Q), D = window.matchMedia("(prefers-color-scheme: dark)");
    return D.addListener(F), F(D), () => {
      D.removeListener(F);
    };
  }, [g]), B.useEffect(() => {
    if (g) {
      const F = (y == null ? void 0 : y.subscribe((W) => {
        (!W || ["light", "dark", "system"].includes(W)) && _(W || t);
      })) || jr, D = (p == null ? void 0 : p.subscribe((W) => {
        (!W || m.match(W)) && k({
          light: W
        });
      })) || jr, Q = (S == null ? void 0 : S.subscribe((W) => {
        (!W || m.match(W)) && k({
          dark: W
        });
      })) || jr;
      return () => {
        F(), D(), Q();
      };
    }
  }, [k, _, m, t, c, g, y, p, S]), {
    ...x,
    mode: w ? x.mode : void 0,
    systemMode: w ? x.systemMode : void 0,
    colorScheme: w ? A : void 0,
    setMode: _,
    setColorScheme: k
  };
}
const Rc = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Oc(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = bn,
    colorSchemeStorageKey: o = Sn,
    disableTransitionOnChange: a = !1,
    defaultColorScheme: s,
    resolveTheme: c
  } = e, l = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, u = /* @__PURE__ */ B.createContext(void 0);
  process.env.NODE_ENV !== "production" && (u.displayName = "ColorSchemeContext");
  const m = () => B.useContext(u) || l, g = {}, y = {};
  function p(w) {
    var On, zn, Mn, Pn;
    const {
      children: O,
      theme: A,
      modeStorageKey: _ = n,
      colorSchemeStorageKey: k = o,
      disableTransitionOnChange: $ = a,
      storageManager: q,
      storageWindow: F = typeof window > "u" ? void 0 : window,
      documentNode: D = typeof document > "u" ? void 0 : document,
      colorSchemeNode: Q = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: W = !1,
      disableStyleSheetGeneration: h = !1,
      defaultMode: z = "system",
      forceThemeRerender: I = !1,
      noSsr: L
    } = w, Y = B.useRef(!1), fe = yn(), ke = B.useContext(u), Be = !!ke && !W, E = B.useMemo(() => A || (typeof r == "function" ? r() : r), [A]), M = E[t], N = M || E, {
      colorSchemes: j = g,
      components: U = y,
      cssVarPrefix: J
    } = N, K = Object.keys(j).filter((Te) => !!j[Te]).join(","), G = B.useMemo(() => K.split(","), [K]), Z = typeof s == "string" ? s : s.light, te = typeof s == "string" ? s : s.dark, ee = j[Z] && j[te] ? z : ((zn = (On = j[N.defaultColorScheme]) == null ? void 0 : On.palette) == null ? void 0 : zn.mode) || ((Mn = N.palette) == null ? void 0 : Mn.mode), {
      mode: Ee,
      setMode: R,
      systemMode: Oe,
      lightColorScheme: it,
      darkColorScheme: $t,
      colorScheme: Oi,
      setColorScheme: An
    } = _c({
      supportedColorSchemes: G,
      defaultLightColorScheme: Z,
      defaultDarkColorScheme: te,
      modeStorageKey: _,
      colorSchemeStorageKey: k,
      defaultMode: ee,
      storageManager: q,
      storageWindow: F,
      noSsr: L
    });
    let Rr = Ee, We = Oi;
    Be && (Rr = ke.mode, We = ke.colorScheme), process.env.NODE_ENV !== "production" && I && !N.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let qt = We || N.defaultColorScheme;
    N.vars && !I && (qt = N.defaultColorScheme);
    const ut = B.useMemo(() => {
      var at;
      const Te = ((at = N.generateThemeVars) == null ? void 0 : at.call(N)) || N.vars, be = {
        ...N,
        components: U,
        colorSchemes: j,
        cssVarPrefix: J,
        vars: Te
      };
      if (typeof be.generateSpacing == "function" && (be.spacing = be.generateSpacing()), qt) {
        const je = j[qt];
        je && typeof je == "object" && Object.keys(je).forEach((Le) => {
          je[Le] && typeof je[Le] == "object" ? be[Le] = {
            ...be[Le],
            ...je[Le]
          } : be[Le] = je[Le];
        });
      }
      return c ? c(be) : be;
    }, [N, qt, U, j, J]), At = N.colorSchemeSelector;
    oi(() => {
      if (We && Q && At && At !== "media") {
        const Te = At;
        let be = At;
        if (Te === "class" && (be = ".%s"), Te === "data" && (be = "[data-%s]"), Te != null && Te.startsWith("data-") && !Te.includes("%s") && (be = `[${Te}="%s"]`), be.startsWith("."))
          Q.classList.remove(...G.map((at) => be.substring(1).replace("%s", at))), Q.classList.add(be.substring(1).replace("%s", We));
        else {
          const at = be.replace("%s", We).match(/\[([^\]]+)\]/);
          if (at) {
            const [je, Le] = at[1].split("=");
            Le || G.forEach((Mi) => {
              Q.removeAttribute(je.replace(We, Mi));
            }), Q.setAttribute(je, Le ? Le.replace(/"|'/g, "") : "");
          } else
            Q.setAttribute(be, We);
        }
      }
    }, [We, At, Q, G]), B.useEffect(() => {
      let Te;
      if ($ && Y.current && D) {
        const be = D.createElement("style");
        be.appendChild(D.createTextNode(Rc)), D.head.appendChild(be), window.getComputedStyle(D.body), Te = setTimeout(() => {
          D.head.removeChild(be);
        }, 1);
      }
      return () => {
        clearTimeout(Te);
      };
    }, [We, $, D]), B.useEffect(() => (Y.current = !0, () => {
      Y.current = !1;
    }), []);
    const zi = B.useMemo(() => ({
      allColorSchemes: G,
      colorScheme: We,
      darkColorScheme: $t,
      lightColorScheme: it,
      mode: Rr,
      setColorScheme: An,
      setMode: process.env.NODE_ENV === "production" ? R : (Te) => {
        ut.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), R(Te);
      },
      systemMode: Oe
    }), [G, We, $t, it, Rr, An, R, Oe, ut.colorSchemeSelector]);
    let _n = !0;
    (h || N.cssVariables === !1 || Be && (fe == null ? void 0 : fe.cssVarPrefix) === J) && (_n = !1);
    const Rn = /* @__PURE__ */ f(B.Fragment, {
      children: [/* @__PURE__ */ i(Bt, {
        themeId: M ? t : void 0,
        theme: ut,
        children: O
      }), _n && /* @__PURE__ */ i(ln, {
        styles: ((Pn = ut.generateStyleSheets) == null ? void 0 : Pn.call(ut)) || []
      })]
    });
    return Be ? Rn : /* @__PURE__ */ i(u.Provider, {
      value: zi,
      children: Rn
    });
  }
  process.env.NODE_ENV !== "production" && (p.propTypes = {
    /**
     * The component tree.
     */
    children: T.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: T.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: T.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: T.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: T.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: T.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: T.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: T.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: T.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: T.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: T.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: T.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: T.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: T.object
  });
  const S = typeof s == "string" ? s : s.light, x = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: p,
    useColorScheme: m,
    getInitColorSchemeScript: (w) => Tc({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: S,
      defaultDarkColorScheme: x,
      modeStorageKey: n,
      ...w
    })
  };
}
function zc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const bo = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, Mc = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...a, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...a, c], Array.isArray(l) ? [...s, c] : s) : t([...a, c], l, s));
    });
  }
  n(e);
}, Pc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Vr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return Mc(
    e,
    (c, l, u) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, g = Pc(c, l);
        Object.assign(o, {
          [m]: g
        }), bo(a, c, `var(${m})`, u), bo(s, c, `var(${m}, ${g})`, u);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: a,
    varsWithDefaults: s
  };
}
function Fc(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: l = "light",
    ...u
  } = e, {
    vars: m,
    css: g,
    varsWithDefaults: y
  } = Vr(u, t);
  let p = y;
  const S = {}, {
    [l]: x,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([_, k]) => {
    const {
      vars: $,
      css: q,
      varsWithDefaults: F
    } = Vr(k, t);
    p = Fe(p, F), S[_] = {
      css: q,
      vars: $
    };
  }), x) {
    const {
      css: _,
      vars: k,
      varsWithDefaults: $
    } = Vr(x, t);
    p = Fe(p, $), S[l] = {
      css: _,
      vars: k
    };
  }
  function w(_, k) {
    var q, F;
    let $ = o;
    if (o === "class" && ($ = ".%s"), o === "data" && ($ = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && ($ = `[${o}="%s"]`), _) {
      if ($ === "media")
        return e.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((F = (q = s[_]) == null ? void 0 : q.palette) == null ? void 0 : F.mode) || _})`]: {
            ":root": k
          }
        };
      if ($)
        return e.defaultColorScheme === _ ? `:root, ${$.replace("%s", String(_))}` : $.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let _ = {
        ...m
      };
      return Object.entries(S).forEach(([, {
        vars: k
      }]) => {
        _ = Fe(_, k);
      }), _;
    },
    generateStyleSheets: () => {
      var D, Q;
      const _ = [], k = e.defaultColorScheme || "light";
      function $(W, h) {
        Object.keys(h).length && _.push(typeof W == "string" ? {
          [W]: {
            ...h
          }
        } : W);
      }
      $(r(void 0, {
        ...g
      }), g);
      const {
        [k]: q,
        ...F
      } = S;
      if (q) {
        const {
          css: W
        } = q, h = (Q = (D = s[k]) == null ? void 0 : D.palette) == null ? void 0 : Q.mode, z = !n && h ? {
          colorScheme: h,
          ...W
        } : {
          ...W
        };
        $(r(k, {
          ...z
        }), z);
      }
      return Object.entries(F).forEach(([W, {
        css: h
      }]) => {
        var L, Y;
        const z = (Y = (L = s[W]) == null ? void 0 : L.palette) == null ? void 0 : Y.mode, I = !n && z ? {
          colorScheme: z,
          ...h
        } : {
          ...h
        };
        $(r(W, {
          ...I
        }), I);
      }), a && _.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), _;
    }
  };
}
function Dc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function Nc(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const a = e[o];
    let s = "", c = !0;
    for (let l = 0; l < a.length; l += 1) {
      const u = a[l];
      u && (s += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (s += " " + r[u]));
    }
    n[o] = s;
  }
  return n;
}
const jt = {
  black: "#000",
  white: "#fff"
}, Wc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, pt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ft = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, _t = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, mt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ht = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, gt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function pi() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: jt.white,
      default: jt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const fi = pi();
function mi() {
  return {
    text: {
      primary: jt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: jt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const Qr = mi();
function So(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Tr(e.main, o) : t === "dark" && (e.dark = Er(e.main, a)));
}
function vo(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Lc(e = "light") {
  return e === "dark" ? {
    main: mt[200],
    light: mt[50],
    dark: mt[400]
  } : {
    main: mt[700],
    light: mt[400],
    dark: mt[800]
  };
}
function Bc(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[500],
    light: pt[300],
    dark: pt[700]
  };
}
function jc(e = "light") {
  return e === "dark" ? {
    main: ft[500],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[700],
    light: ft[400],
    dark: ft[800]
  };
}
function Vc(e = "light") {
  return e === "dark" ? {
    main: ht[400],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[700],
    light: ht[500],
    dark: ht[900]
  };
}
function Hc(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[800],
    light: gt[500],
    dark: gt[900]
  };
}
function Uc(e = "light") {
  return e === "dark" ? {
    main: _t[400],
    light: _t[300],
    dark: _t[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _t[500],
    dark: _t[900]
  };
}
function Gc(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function vn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Lc(t), c = e.secondary || Bc(t), l = e.error || jc(t), u = e.info || Vc(t), m = e.success || Hc(t), g = e.warning || Uc(t);
  function y(C) {
    if (o)
      return Gc(C);
    const w = po(C, Qr.text.primary) >= r ? Qr.text.primary : fi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const O = po(C, w);
      O < 3 && console.error([`MUI: The contrast ratio of ${O}:1 for ${w} on ${C}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const p = ({
    color: C,
    name: w,
    mainShade: O = 500,
    lightShade: A = 300,
    darkShade: _ = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[O] && (C.main = C[O]), !C.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${O}\` property.` : dt(11, w ? ` (${w})` : "", O));
    if (typeof C.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(C.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : dt(12, w ? ` (${w})` : "", JSON.stringify(C.main)));
    return o ? (vo(o, C, "light", A, n), vo(o, C, "dark", _, n)) : (So(C, "light", A, n), So(C, "dark", _, n)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let S;
  return t === "light" ? S = pi() : t === "dark" && (S = mi()), process.env.NODE_ENV !== "production" && (S || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Fe({
    // A collection of common colors.
    common: {
      ...jt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: l,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: Wc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S
  }, a);
}
function Yc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function qc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Kc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const wo = {
  textTransform: "uppercase"
}, Co = '"Roboto", "Helvetica", "Arial", sans-serif';
function hi(e, t) {
  const {
    fontFamily: r = Co,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: m,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, p = m || ((C) => `${C / l * y}rem`), S = (C, w, O, A, _) => ({
    fontFamily: r,
    fontWeight: C,
    fontSize: p(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Co ? {
      letterSpacing: `${Kc(A / w)}em`
    } : {},
    ..._,
    ...u
  }), x = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(a, 48, 1.167, 0),
    h4: S(a, 34, 1.235, 0.25),
    h5: S(a, 24, 1.334, 0),
    h6: S(s, 20, 1.6, 0.15),
    subtitle1: S(a, 16, 1.75, 0.15),
    subtitle2: S(s, 14, 1.57, 0.1),
    body1: S(a, 16, 1.5, 0.15),
    body2: S(a, 14, 1.43, 0.15),
    button: S(s, 14, 1.75, 0.4, wo),
    caption: S(a, 12, 1.66, 0.4),
    overline: S(a, 12, 2.66, 1, wo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Fe({
    htmlFontSize: l,
    pxToRem: p,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...x
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const Xc = 0.2, Qc = 0.14, Jc = 0.12;
function me(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Xc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Qc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Jc})`].join(",");
}
const Zc = ["none", me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], el = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, tl = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function ko(e) {
  return `${Math.round(e)}ms`;
}
function rl(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function nl(e) {
  const t = {
    ...el,
    ...e.easing
  }, r = {
    ...tl,
    ...e.duration
  };
  return {
    getAutoHeightDuration: rl,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const m = (y) => typeof y == "string", g = (y) => !Number.isNaN(parseFloat(y));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !g(l) && !m(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : ko(s)} ${c} ${typeof l == "string" ? l : ko(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const ol = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function il(e) {
  return Qe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function gi(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, c] = o[a];
      !il(c) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete n[s] : Qe(c) && (n[s] = {
        ...c
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Eo(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const al = (e) => {
  if (!Number.isNaN(+e))
    return +e;
  const t = e.match(/\d*\.?\d+/g);
  if (!t)
    return 0;
  let r = 0;
  for (let n = 0; n < t.length; n += 1)
    r += +t[n];
  return r;
};
function sl(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : ai(t, al(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Eo(r)})` : Tr(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Eo(r)})` : Er(t, r);
    }
  });
}
function Jr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: s = {},
    typography: c = {},
    shape: l,
    colorSpace: u,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : dt(22));
  const g = vn({
    ...a,
    colorSpace: u
  }), y = pn(e);
  let p = Fe(y, {
    mixins: qc(y.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Zc.slice(),
    typography: hi(g, c),
    transitions: nl(s),
    zIndex: {
      ...ol
    }
  });
  if (p = Fe(p, m), p = t.reduce((S, x) => Fe(S, x), p), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (C, w) => {
      let O;
      for (O in C) {
        const A = C[O];
        if (S.includes(O) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = hn("", O);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${O}\` internal state.`, "You can not override it like this: ", JSON.stringify(C, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          C[O] = {};
        }
      }
    };
    Object.keys(p.components).forEach((C) => {
      const w = p.components[C].styleOverrides;
      w && C.startsWith("Mui") && x(w, C);
    });
  }
  return p.unstable_sxConfig = {
    ...Cr,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, p.unstable_sx = function(x) {
    return kt({
      sx: x,
      theme: this
    });
  }, p.toRuntimeSource = gi, sl(p), p;
}
function cl(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const ll = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = cl(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function xi(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function yi(e) {
  return e === "dark" ? ll : [];
}
function dl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = vn({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...xi(s.mode),
      ...r
    },
    overlays: n || yi(s.mode),
    ...a
  };
}
function ul(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const pl = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], fl = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return pl(e.cssVarPrefix).forEach((c) => {
        s[c] = r[c], delete r[c];
      }), a === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : a ? {
        [a.replace("%s", t)]: s,
        [`${n}, ${a.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (a && a !== "media")
      return `${n}, ${a.replace("%s", String(t))}`;
  } else if (t) {
    if (a === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (a)
      return a.replace("%s", String(t));
  }
  return n;
};
function ml(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Mt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : ii(e);
}
function Xe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = zt(Mt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function hl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ue = (e) => {
  try {
    return e();
  } catch {
  }
}, gl = (e = "mui") => zc(e);
function Hr(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = dl({
      ...r,
      palette: {
        mode: a,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...c
  } = Jr({
    ...n,
    palette: {
      mode: a,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: s,
    opacity: {
      ...xi(a),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || yi(a)
  }, c;
}
function xl(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = ul,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...m
  } = e, g = Object.keys(r)[0], y = n || (r.light && g !== "light" ? "light" : g), p = gl(a), {
    [y]: S,
    light: x,
    dark: C,
    ...w
  } = r, O = {
    ...w
  };
  let A = S;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : dt(21, y));
  let _;
  s && (_ = "oklch");
  const k = Hr(_, O, A, m, y);
  x && !O.light && Hr(_, O, x, void 0, "light"), C && !O.dark && Hr(_, O, C, void 0, "dark");
  let $ = {
    defaultColorScheme: y,
    ...k,
    cssVarPrefix: a,
    colorSchemeSelector: l,
    rootSelector: u,
    getCssVar: p,
    colorSchemes: O,
    font: {
      ...Yc(k.typography),
      ...k.font
    },
    spacing: hl(m.spacing)
  };
  Object.keys($.colorSchemes).forEach((W) => {
    const h = $.colorSchemes[W].palette, z = (L) => {
      const Y = L.split("-"), fe = Y[1], ke = Y[2];
      return p(L, h[fe][ke]);
    };
    h.mode === "light" && (v(h.common, "background", "#fff"), v(h.common, "onBackground", "#000")), h.mode === "dark" && (v(h.common, "background", "#000"), v(h.common, "onBackground", "#fff"));
    function I(L, Y, fe) {
      if (_) {
        let ke;
        return L === st && (ke = `transparent ${((1 - fe) * 100).toFixed(0)}%`), L === ae && (ke = `#000 ${(fe * 100).toFixed(0)}%`), L === se && (ke = `#fff ${(fe * 100).toFixed(0)}%`), `color-mix(in ${_}, ${Y}, ${ke})`;
      }
      return L(Y, fe);
    }
    if (ml(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      v(h.Alert, "errorColor", I(ae, s ? p("palette-error-light") : h.error.light, 0.6)), v(h.Alert, "infoColor", I(ae, s ? p("palette-info-light") : h.info.light, 0.6)), v(h.Alert, "successColor", I(ae, s ? p("palette-success-light") : h.success.light, 0.6)), v(h.Alert, "warningColor", I(ae, s ? p("palette-warning-light") : h.warning.light, 0.6)), v(h.Alert, "errorFilledBg", z("palette-error-main")), v(h.Alert, "infoFilledBg", z("palette-info-main")), v(h.Alert, "successFilledBg", z("palette-success-main")), v(h.Alert, "warningFilledBg", z("palette-warning-main")), v(h.Alert, "errorFilledColor", Ue(() => h.getContrastText(h.error.main))), v(h.Alert, "infoFilledColor", Ue(() => h.getContrastText(h.info.main))), v(h.Alert, "successFilledColor", Ue(() => h.getContrastText(h.success.main))), v(h.Alert, "warningFilledColor", Ue(() => h.getContrastText(h.warning.main))), v(h.Alert, "errorStandardBg", I(se, s ? p("palette-error-light") : h.error.light, 0.9)), v(h.Alert, "infoStandardBg", I(se, s ? p("palette-info-light") : h.info.light, 0.9)), v(h.Alert, "successStandardBg", I(se, s ? p("palette-success-light") : h.success.light, 0.9)), v(h.Alert, "warningStandardBg", I(se, s ? p("palette-warning-light") : h.warning.light, 0.9)), v(h.Alert, "errorIconColor", z("palette-error-main")), v(h.Alert, "infoIconColor", z("palette-info-main")), v(h.Alert, "successIconColor", z("palette-success-main")), v(h.Alert, "warningIconColor", z("palette-warning-main")), v(h.AppBar, "defaultBg", z("palette-grey-100")), v(h.Avatar, "defaultBg", z("palette-grey-400")), v(h.Button, "inheritContainedBg", z("palette-grey-300")), v(h.Button, "inheritContainedHoverBg", z("palette-grey-A100")), v(h.Chip, "defaultBorder", z("palette-grey-400")), v(h.Chip, "defaultAvatarColor", z("palette-grey-700")), v(h.Chip, "defaultIconColor", z("palette-grey-700")), v(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(h.LinearProgress, "primaryBg", I(se, s ? p("palette-primary-main") : h.primary.main, 0.62)), v(h.LinearProgress, "secondaryBg", I(se, s ? p("palette-secondary-main") : h.secondary.main, 0.62)), v(h.LinearProgress, "errorBg", I(se, s ? p("palette-error-main") : h.error.main, 0.62)), v(h.LinearProgress, "infoBg", I(se, s ? p("palette-info-main") : h.info.main, 0.62)), v(h.LinearProgress, "successBg", I(se, s ? p("palette-success-main") : h.success.main, 0.62)), v(h.LinearProgress, "warningBg", I(se, s ? p("palette-warning-light") : h.warning.main, 0.62)), v(h.Skeleton, "bg", _ ? I(st, s ? p("palette-text-primary") : h.text.primary, 0.11) : `rgba(${z("palette-text-primaryChannel")} / 0.11)`), v(h.Slider, "primaryTrack", I(se, s ? p("palette-primary-main") : h.primary.main, 0.62)), v(h.Slider, "secondaryTrack", I(se, s ? p("palette-secondary-main") : h.secondary.main, 0.62)), v(h.Slider, "errorTrack", I(se, s ? p("palette-error-main") : h.error.main, 0.62)), v(h.Slider, "infoTrack", I(se, s ? p("palette-info-main") : h.info.main, 0.62)), v(h.Slider, "successTrack", I(se, s ? p("palette-success-main") : h.success.main, 0.62)), v(h.Slider, "warningTrack", I(se, s ? p("palette-warning-main") : h.warning.main, 0.62));
      const L = _ ? I(ae, s ? p("palette-background-default") : h.background.default, 0.6825) : Xt(h.background.default, 0.8);
      v(h.SnackbarContent, "bg", L), v(h.SnackbarContent, "color", Ue(() => _ ? Qr.text.primary : h.getContrastText(L))), v(h.SpeedDialAction, "fabHoverBg", Xt(h.background.paper, 0.15)), v(h.StepConnector, "border", z("palette-grey-400")), v(h.StepContent, "border", z("palette-grey-400")), v(h.Switch, "defaultColor", z("palette-common-white")), v(h.Switch, "defaultDisabledColor", z("palette-grey-100")), v(h.Switch, "primaryDisabledColor", I(se, s ? p("palette-primary-main") : h.primary.main, 0.62)), v(h.Switch, "secondaryDisabledColor", I(se, s ? p("palette-secondary-main") : h.secondary.main, 0.62)), v(h.Switch, "errorDisabledColor", I(se, s ? p("palette-error-main") : h.error.main, 0.62)), v(h.Switch, "infoDisabledColor", I(se, s ? p("palette-info-main") : h.info.main, 0.62)), v(h.Switch, "successDisabledColor", I(se, s ? p("palette-success-main") : h.success.main, 0.62)), v(h.Switch, "warningDisabledColor", I(se, s ? p("palette-warning-main") : h.warning.main, 0.62)), v(h.TableCell, "border", I(se, st(s ? p("palette-divider") : h.divider, 1), 0.88)), v(h.Tooltip, "bg", I(st, s ? p("palette-grey-700") : h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      v(h.Alert, "errorColor", I(se, s ? p("palette-error-light") : h.error.light, 0.6)), v(h.Alert, "infoColor", I(se, s ? p("palette-info-light") : h.info.light, 0.6)), v(h.Alert, "successColor", I(se, s ? p("palette-success-light") : h.success.light, 0.6)), v(h.Alert, "warningColor", I(se, s ? p("palette-warning-light") : h.warning.light, 0.6)), v(h.Alert, "errorFilledBg", z("palette-error-dark")), v(h.Alert, "infoFilledBg", z("palette-info-dark")), v(h.Alert, "successFilledBg", z("palette-success-dark")), v(h.Alert, "warningFilledBg", z("palette-warning-dark")), v(h.Alert, "errorFilledColor", Ue(() => h.getContrastText(h.error.dark))), v(h.Alert, "infoFilledColor", Ue(() => h.getContrastText(h.info.dark))), v(h.Alert, "successFilledColor", Ue(() => h.getContrastText(h.success.dark))), v(h.Alert, "warningFilledColor", Ue(() => h.getContrastText(h.warning.dark))), v(h.Alert, "errorStandardBg", I(ae, s ? p("palette-error-light") : h.error.light, 0.9)), v(h.Alert, "infoStandardBg", I(ae, s ? p("palette-info-light") : h.info.light, 0.9)), v(h.Alert, "successStandardBg", I(ae, s ? p("palette-success-light") : h.success.light, 0.9)), v(h.Alert, "warningStandardBg", I(ae, s ? p("palette-warning-light") : h.warning.light, 0.9)), v(h.Alert, "errorIconColor", z("palette-error-main")), v(h.Alert, "infoIconColor", z("palette-info-main")), v(h.Alert, "successIconColor", z("palette-success-main")), v(h.Alert, "warningIconColor", z("palette-warning-main")), v(h.AppBar, "defaultBg", z("palette-grey-900")), v(h.AppBar, "darkBg", z("palette-background-paper")), v(h.AppBar, "darkColor", z("palette-text-primary")), v(h.Avatar, "defaultBg", z("palette-grey-600")), v(h.Button, "inheritContainedBg", z("palette-grey-800")), v(h.Button, "inheritContainedHoverBg", z("palette-grey-700")), v(h.Chip, "defaultBorder", z("palette-grey-700")), v(h.Chip, "defaultAvatarColor", z("palette-grey-300")), v(h.Chip, "defaultIconColor", z("palette-grey-300")), v(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(h.LinearProgress, "primaryBg", I(ae, s ? p("palette-primary-main") : h.primary.main, 0.5)), v(h.LinearProgress, "secondaryBg", I(ae, s ? p("palette-secondary-main") : h.secondary.main, 0.5)), v(h.LinearProgress, "errorBg", I(ae, s ? p("palette-error-main") : h.error.main, 0.5)), v(h.LinearProgress, "infoBg", I(ae, s ? p("palette-info-main") : h.info.main, 0.5)), v(h.LinearProgress, "successBg", I(ae, s ? p("palette-success-main") : h.success.main, 0.5)), v(h.LinearProgress, "warningBg", I(ae, s ? p("palette-warning-main") : h.warning.main, 0.5)), v(h.Skeleton, "bg", _ ? I(st, s ? p("palette-text-primary") : h.text.primary, 0.13) : `rgba(${z("palette-text-primaryChannel")} / 0.13)`), v(h.Slider, "primaryTrack", I(ae, s ? p("palette-primary-main") : h.primary.main, 0.5)), v(h.Slider, "secondaryTrack", I(ae, s ? p("palette-secondary-main") : h.secondary.main, 0.5)), v(h.Slider, "errorTrack", I(ae, s ? p("palette-error-main") : h.error.main, 0.5)), v(h.Slider, "infoTrack", I(ae, s ? p("palette-info-main") : h.info.main, 0.5)), v(h.Slider, "successTrack", I(ae, s ? p("palette-success-main") : h.success.main, 0.5)), v(h.Slider, "warningTrack", I(ae, s ? p("palette-warning-light") : h.warning.main, 0.5));
      const L = _ ? I(se, s ? p("palette-background-default") : h.background.default, 0.985) : Xt(h.background.default, 0.98);
      v(h.SnackbarContent, "bg", L), v(h.SnackbarContent, "color", Ue(() => _ ? fi.text.primary : h.getContrastText(L))), v(h.SpeedDialAction, "fabHoverBg", Xt(h.background.paper, 0.15)), v(h.StepConnector, "border", z("palette-grey-600")), v(h.StepContent, "border", z("palette-grey-600")), v(h.Switch, "defaultColor", z("palette-grey-300")), v(h.Switch, "defaultDisabledColor", z("palette-grey-600")), v(h.Switch, "primaryDisabledColor", I(ae, s ? p("palette-primary-main") : h.primary.main, 0.55)), v(h.Switch, "secondaryDisabledColor", I(ae, s ? p("palette-secondary-main") : h.secondary.main, 0.55)), v(h.Switch, "errorDisabledColor", I(ae, s ? p("palette-error-main") : h.error.main, 0.55)), v(h.Switch, "infoDisabledColor", I(ae, s ? p("palette-info-main") : h.info.main, 0.55)), v(h.Switch, "successDisabledColor", I(ae, s ? p("palette-success-main") : h.success.main, 0.55)), v(h.Switch, "warningDisabledColor", I(ae, s ? p("palette-warning-light") : h.warning.main, 0.55)), v(h.TableCell, "border", I(ae, st(s ? p("palette-divider") : h.divider, 1), 0.68)), v(h.Tooltip, "bg", I(st, s ? p("palette-grey-700") : h.grey[700], 0.92));
    }
    s || (Xe(h.background, "default"), Xe(h.background, "paper"), Xe(h.common, "background"), Xe(h.common, "onBackground"), Xe(h, "divider")), Object.keys(h).forEach((L) => {
      const Y = h[L];
      L !== "tonalOffset" && !s && Y && typeof Y == "object" && (Y.main && v(h[L], "mainChannel", zt(Mt(Y.main))), Y.light && v(h[L], "lightChannel", zt(Mt(Y.light))), Y.dark && v(h[L], "darkChannel", zt(Mt(Y.dark))), Y.contrastText && v(h[L], "contrastTextChannel", zt(Mt(Y.contrastText))), L === "text" && (Xe(h[L], "primary"), Xe(h[L], "secondary")), L === "action" && (Y.active && Xe(h[L], "active"), Y.selected && Xe(h[L], "selected")));
    });
  }), $ = t.reduce((W, h) => Fe(W, h), $);
  const q = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: fl($),
    enableContrastVars: s
  }, {
    vars: F,
    generateThemeVars: D,
    generateStyleSheets: Q
  } = Fc($, q);
  return $.vars = F, Object.entries($.colorSchemes[$.defaultColorScheme]).forEach(([W, h]) => {
    $[W] = h;
  }), $.generateThemeVars = D, $.generateStyleSheets = Q, $.generateSpacing = function() {
    return Xo(m.spacing, dn(this));
  }, $.getColorSchemeSelector = Dc(l), $.spacing = $.generateSpacing(), $.shouldSkipGeneratingVar = c, $.unstable_sxConfig = {
    ...Cr,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, $.unstable_sx = function(h) {
    return kt({
      sx: h,
      theme: this
    });
  }, $.internal_cache = {}, $.toRuntimeSource = gi, $;
}
function To(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: vn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Ir(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...s
  } = e, c = a || "light", l = o == null ? void 0 : o[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Jr(e, ...t);
    let m = r;
    "palette" in e || u[c] && (u[c] !== !0 ? m = u[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const g = Jr({
      ...e,
      palette: m
    }, ...t);
    return g.defaultColorScheme = c, g.colorSchemes = u, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: g.palette
    }, To(g, "dark", u.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: g.palette
    }, To(g, "light", u.light)), g;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), xl({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const wn = Ir();
function yl() {
  const e = Qo(wn);
  return process.env.NODE_ENV !== "production" && B.useDebugValue(e), e[et] || e;
}
function bl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Sl = (e) => bl(e) && e !== "classes", vl = ic({
  themeId: et,
  defaultTheme: wn,
  rootShouldForwardProp: Sl
});
function wl({
  theme: e,
  ...t
}) {
  const r = et in e ? e[et] : void 0;
  return /* @__PURE__ */ i(Bt, {
    ...t,
    themeId: r ? et : void 0,
    theme: r || e
  });
}
const Qt = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (T.string, T.string, T.string, T.string, T.string, T.oneOf(["dark", "light", "system"]), T.string, T.string);
const {
  CssVarsProvider: Cl
} = Oc({
  themeId: et,
  // @ts-ignore ignore module augmentation tests
  theme: () => Ir({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Qt.colorSchemeStorageKey,
  modeStorageKey: Qt.modeStorageKey,
  defaultColorScheme: {
    light: Qt.defaultLightColorScheme,
    dark: Qt.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: hi(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return kt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), kl = Cl;
function bi({
  theme: e,
  ...t
}) {
  const r = B.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = et in e ? e[et] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ i(wl, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ i(kl, {
    theme: e,
    ...t
  });
}
function Si(e) {
  return /* @__PURE__ */ i(mn, {
    ...e,
    defaultTheme: wn,
    themeId: et
  });
}
process.env.NODE_ENV !== "production" && (Si.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: T.oneOfType([T.array, T.func, T.number, T.object, T.string, T.bool])
});
function vi(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ i(Si, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (T.node, T.object.isRequired);
function wi(e) {
  return bc(e);
}
const Zr = typeof vi({}) == "function", El = (e, t) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), Tl = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Ci = (e, t = !1) => {
  var a, s;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([c, l]) => {
    var m, g;
    const u = e.getColorSchemeSelector(c);
    u.startsWith("@") ? r[u] = {
      ":root": {
        colorScheme: (m = l.palette) == null ? void 0 : m.mode
      }
    } : r[u.replace(/\s*&/, "")] = {
      colorScheme: (g = l.palette) == null ? void 0 : g.mode
    };
  });
  let n = {
    html: El(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...Tl(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const o = (s = (a = e.components) == null ? void 0 : a.MuiCssBaseline) == null ? void 0 : s.styleOverrides;
  return o && (n = [n, o]), n;
}, tr = "mui-ecs", Il = (e) => {
  const t = Ci(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${tr})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var s, c;
    const a = e.getColorSchemeSelector(n);
    a.startsWith("@") ? r[a] = {
      [`:root:not(:has(.${tr}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : r[a.replace(/\s*&/, "")] = {
      [`&:not(:has(.${tr}))`]: {
        colorScheme: (c = o.palette) == null ? void 0 : c.mode
      }
    };
  }), t;
}, $l = vi(Zr ? ({
  theme: e,
  enableColorScheme: t
}) => Ci(e, t) : ({
  theme: e
}) => Il(e));
function ki(e) {
  const t = wi({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ f(B.Fragment, {
    children: [Zr && /* @__PURE__ */ i($l, {
      enableColorScheme: n
    }), !Zr && !n && /* @__PURE__ */ i("span", {
      className: tr,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (ki.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: T.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: T.bool
});
const Al = V.fontFamily.code, _l = {
  fontFamily: V.fontFamily.primary,
  h1: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.medium,
    fontSize: V.fontSize["2xl"]
  },
  h2: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.medium,
    fontSize: V.fontSize.xl
  },
  h3: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.medium,
    fontSize: V.fontSize.lg
  },
  h4: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.medium,
    fontSize: V.fontSize.base
  },
  h5: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    fontSize: V.fontSize.sm
  },
  h6: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    fontSize: V.fontSize.xs
  },
  body1: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    fontSize: V.fontSize.sm
  },
  body2: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    fontSize: V.fontSize.xs
  },
  button: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    textTransform: "none"
  },
  caption: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    fontSize: V.fontSize.xs
  },
  overline: {
    fontFamily: V.fontFamily.primary,
    fontWeight: V.fontWeight.regular,
    fontSize: V.fontSize.xs,
    textTransform: "none",
    letterSpacing: "0.08em"
  }
}, Rl = (e) => {
  const t = e === "light";
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme: r }) => ({
          borderRadius: 0,
          // Brutalist Zero Radius
          fontWeight: 700,
          textTransform: "none",
          boxShadow: "none",
          padding: r.spacing(1.5, 3),
          transition: "all 0.2s steps(4, end)",
          // Snappy Industrial Transition
          border: "none"
        }),
        outlined: {
          borderWidth: "2px",
          borderColor: t ? b.black : b.white,
          color: t ? b.black : b.white,
          "&:hover": {
            backgroundColor: t ? b.black : b.white,
            borderColor: t ? b.black : b.white,
            color: t ? b.white : b.black,
            borderWidth: "2px"
          }
        },
        text: {
          color: t ? b.black : b.white,
          fontWeight: 700,
          textDecoration: "none",
          "&:hover": {
            backgroundColor: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.08)"
          }
        }
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: t ? b.erieBlack : b.white,
            color: t ? b.white : b.erieBlack,
            "&:hover": {
              backgroundColor: t ? "#2A2A2A" : b.gray[200],
              transform: "translate(-2px, -2px)",
              boxShadow: t ? "4px 4px 0px 0px rgba(0,0,0,0.3)" : "4px 4px 0px 0px rgba(255,255,255,0.3)"
            }
          }
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderWidth: "2px",
            borderColor: t ? b.erieBlack : b.white,
            color: t ? b.erieBlack : b.white,
            "&:hover": {
              backgroundColor: t ? b.erieBlack : b.white,
              color: t ? b.white : b.erieBlack
            }
          }
        }
      ]
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          // Brutalist Zero Radius
          backgroundColor: t ? b.white : b.black,
          border: `1px solid ${t ? b.black : b.white}`,
          boxShadow: "none",
          transition: "all 0.2s steps(4, end)",
          "&:hover": {
            transform: "translate(-4px, -4px)",
            boxShadow: t ? `8px 8px 0px ${b.black}` : `8px 8px 0px ${b.white}`
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 200ms",
          color: t ? b.erieBlack : b.white,
          "&:hover": {
            backgroundColor: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.08)"
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: t ? b.tints.erieBlack10 : "rgba(255,255,255,0.08)",
          borderBottomWidth: "1px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          // Usa background.paper de la paleta (white light / gray[800] dark)
          backgroundImage: "none"
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          // Header sticky: mint-cream/80 + backdrop-blur — Brand Book §layout
          backgroundColor: t ? b.tints.mintCream60 : "rgba(23,23,23,0.85)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          borderBottom: `1px solid ${t ? b.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          color: t ? b.erieBlack : b.white
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          // pill — Brand Book §badges
          backgroundColor: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.08)",
          border: "none",
          color: t ? b.erieBlack : b.white,
          fontWeight: 600,
          letterSpacing: "0.06em",
          fontSize: "0.75rem"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: t ? b.erieBlack : b.white,
          "& code": {
            fontFamily: Al,
            backgroundColor: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, Ol = (e) => {
  const t = e === "light";
  return {
    mode: e,
    primary: {
      main: t ? b.erieBlack : b.white,
      light: b.gray[700],
      dark: b.gray[900],
      contrastText: t ? b.white : b.erieBlack
    },
    secondary: {
      main: b.cadetGray,
      light: b.gray[400],
      dark: b.gray[700],
      contrastText: t ? b.erieBlack : b.white
    },
    background: {
      // bg-1: Mint Cream como fondo de página (claro) / Erie Black (oscuro)
      default: t ? b.mintCream : b.erieBlack,
      // bg-2: White como superficie elevada (cards, dialogs)
      paper: t ? b.white : b.gray[800]
    },
    text: {
      primary: t ? b.erieBlack : b.white,
      secondary: t ? b.cadetGray : b.cadetGray,
      disabled: b.gray[400]
    },
    action: {
      active: t ? b.erieBlack : b.white,
      hover: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.08)",
      selected: t ? b.tints.erieBlack10 : "rgba(255,255,255,0.12)",
      disabled: b.cadetGray,
      disabledBackground: t ? "rgba(23,23,23,0.06)" : "rgba(255,255,255,0.06)"
    },
    // Inversión semántica crítica: orange = error, blue = success
    error: { main: b.hotOrange, light: b.tints.hotOrange30, contrastText: b.white },
    success: { main: b.moderateBlue, light: b.tints.moderateBlue15, contrastText: b.white },
    warning: { main: b.hotOrange, contrastText: b.white },
    info: { main: b.moderateBlue, contrastText: b.white },
    divider: t ? b.tints.erieBlack10 : "rgba(255,255,255,0.08)"
  };
}, zl = () => [
  "none",
  "0px 2px 4px rgba(0,0,0,0.05)",
  "0px 4px 8px rgba(0,0,0,0.05)",
  "0px 6px 12px rgba(0,0,0,0.08)",
  "0px 8px 16px rgba(0,0,0,0.08)",
  "0px 10px 20px rgba(0,0,0,0.1)",
  "0px 12px 24px rgba(0,0,0,0.1)",
  "0px 14px 28px rgba(0,0,0,0.12)",
  "0px 16px 32px rgba(0,0,0,0.12)",
  "0px 18px 36px rgba(0,0,0,0.14)",
  "0px 20px 40px rgba(0,0,0,0.14)",
  "0px 22px 44px rgba(0,0,0,0.16)",
  "0px 24px 48px rgba(0,0,0,0.16)",
  "0px 26px 52px rgba(0,0,0,0.18)",
  "0px 28px 56px rgba(0,0,0,0.18)",
  "0px 30px 60px rgba(0,0,0,0.2)",
  "0px 32px 64px rgba(0,0,0,0.2)",
  "0px 34px 68px rgba(0,0,0,0.22)",
  "0px 36px 72px rgba(0,0,0,0.22)",
  "0px 38px 76px rgba(0,0,0,0.24)",
  "0px 40px 80px rgba(0,0,0,0.24)",
  "0px 42px 84px rgba(0,0,0,0.25)",
  "0px 44px 88px rgba(0,0,0,0.25)",
  "0px 46px 92px rgba(0,0,0,0.26)",
  "0px 48px 96px rgba(0,0,0,0.26)"
], Ml = (e) => Ir({
  palette: Ol(e),
  typography: _l,
  components: Rl(e),
  shape: {
    borderRadius: 0
    // Brutalist zero radius — aligned with components
  },
  shadows: zl()
}), Ei = an({
  mode: "light",
  toggleColorMode: () => {
  }
}), Cn = () => pr(Ei), fu = ({ children: e }) => {
  const [t, r] = H(() => {
    if (typeof window > "u") return "light";
    const s = localStorage.getItem("ai4u-theme-mode");
    return s === "dark" || s === "light" ? s : "light";
  }), n = Ge(() => {
    r((s) => {
      const c = s === "light" ? "dark" : "light";
      return typeof window < "u" && (localStorage.setItem("ai4u-theme-mode", c), document.documentElement.setAttribute("data-theme", c)), c;
    });
  }, []);
  pe(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, [t]);
  const o = _e(() => ({ mode: t, toggleColorMode: n }), [t, n]), a = _e(() => Ml(t), [t]);
  return /* @__PURE__ */ i(Ei.Provider, { value: o, children: /* @__PURE__ */ f(bi, { theme: a, children: [
    /* @__PURE__ */ i(ki, {}),
    e
  ] }) });
}, en = an({
  surface: "theme"
}), mu = ({ children: e, surface: t }) => {
  const r = pr(en), { mode: n } = Cn(), o = t || r.surface, a = _e(() => o === "theme" ? n : ct[o].effectiveMode, [o, n]), s = _e(() => {
    const c = a === "light";
    return Ir({
      palette: {
        mode: a,
        primary: {
          main: c ? b.black : b.white,
          contrastText: c ? b.white : b.black
        },
        background: {
          default: c ? b.accentColors.mint : b.black,
          paper: c ? b.accentColors.mint : b.gray[900]
        },
        text: {
          primary: c ? b.black : b.white,
          secondary: c ? b.gray[600] : b.gray[300]
        }
      },
      // Heredar tipografía y otros ajustes si es necesario, 
      // pero lo más importante es la paleta para el contraste.
      typography: {
        fontFamily: V.fontFamily.primary
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "9999px",
              textTransform: "none"
            },
            outlined: {
              borderColor: c ? "rgba(0,0,0,0.23)" : "rgba(255,255,255,0.23)",
              color: c ? b.black : b.white
            }
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                backgroundColor: c ? b.black : b.white,
                color: c ? b.white : b.black
              }
            }
          ]
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: c ? b.black : b.white
            }
          }
        }
      }
    });
  }, [a]);
  return /* @__PURE__ */ i(en.Provider, { value: { surface: o }, children: /* @__PURE__ */ i(bi, { theme: s, children: e }) });
}, Pl = () => pr(en), X = () => {
  const e = yl(), { mode: t } = Cn(), { surface: r } = Pl(), n = _e(() => r === "theme" ? Di[t] : ct[r], [t, r]), o = _e(() => r === "theme" ? t : ct[r].effectiveMode, [t, r]), a = Ni(o);
  return _e(() => ({
    // Modo actual (global)
    mode: t,
    // Modo efectivo para la superficie actual
    effectiveMode: o,
    // Superficie actual
    surface: r,
    // Colores base - use static reference
    palette: b,
    // Colores con contraste automático según superficie
    contrast: n,
    // Variantes de componentes adaptadas a la superficie
    components: a.components,
    // Helpers para uso común - memoized
    helpers: {
      // Para fondos
      background: {
        primary: n.background,
        secondary: n.surface,
        accent: o === "light" ? "#FFF5F0" : "#2A1A0F"
      },
      // Para textos - Minimalista (sin naranja como primario)
      text: {
        primary: n.text.primary,
        secondary: n.text.secondary,
        disabled: n.text.disabled,
        // Acentos mínimos (solo para casos excepcionales)
        accent: o === "light" ? b.black : b.white,
        // Garantizar contraste mínimo
        highContrast: o === "light" ? "#171717" : "#FFFFFF",
        mediumContrast: o === "light" ? "#333333" : "#F0F0F0",
        // Contraste máximo para modo dark
        darkHighContrast: o === "dark" ? "#FFFFFF" : "#171717",
        darkMediumContrast: o === "dark" ? "#E8E8E8" : "#333333"
      },
      // Para bordes - Minimalista (sin naranja)
      border: {
        primary: n.border,
        secondary: n.divider,
        accent: o === "light" ? b.gray[400] : b.gray[600]
      },
      // Para estados
      state: {
        hover: o === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.25)",
        selected: o === "light" ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.35)",
        disabled: o === "light" ? "rgba(0, 0, 0, 0.26)" : "rgba(255, 255, 255, 0.3)"
      }
    },
    // Acceso directo al tema MUI
    theme: e
  }), [t, o, r, n, a.components, e]);
}, hu = (e, t) => {
  const { components: r } = X();
  return _e(() => {
    switch (e) {
      case "button":
        return r.button[t];
      case "card":
        return r.card[t];
      default:
        return null;
    }
  }, [r, e, t]);
}, gu = () => {
  const { mode: e, contrast: t } = X();
  return _e(() => ({
    mode: e,
    // Fondo claro → Texto oscuro
    light: {
      background: t.background,
      text: t.text.primary
    },
    // Fondo oscuro → Texto claro
    dark: {
      background: e === "dark" ? t.background : "#171717",
      text: e === "dark" ? t.text.primary : "#FFFFFF"
    }
  }), [e, t]);
}, Fl = () => {
  const [e, t] = H(!1), [r, n] = H(!1);
  return pe(() => {
    const o = () => {
      const s = window.matchMedia("(display-mode: standalone)").matches, c = window.navigator.standalone;
      n(s || c), t(s || c);
    };
    o();
    const a = window.matchMedia("(display-mode: standalone)");
    return a.addListener(o), () => {
      a.removeListener(o);
    };
  }, []), { isPWA: e, isStandalone: r };
};
class Dl {
  constructor() {
    Ve(this, "isDev", !1);
    Ve(this, "log", (...t) => {
      this.isDev && console.log(...t);
    });
    Ve(this, "error", (...t) => {
      this.isDev && console.error(...t);
    });
    Ve(this, "warn", (...t) => {
      this.isDev && console.warn(...t);
    });
    Ve(this, "info", (...t) => {
      this.isDev && console.info(...t);
    });
    Ve(this, "debug", (...t) => {
      this.isDev && console.debug(...t);
    });
  }
}
const ue = new Dl(), xt = {
  // Eventos de negocio
  SERVICE_INTEREST: "service_interest",
  CONSULTATION_REQUEST: "consultation_request",
  DIAGNOSTIC_START: "diagnostic_start",
  // Eventos de engagement
  PHILOSOPHY_ENGAGEMENT: "philosophy_engagement",
  // Eventos técnicos
  PERFORMANCE_ISSUE: "performance_issue",
  ERROR_BOUNDARY_HIT: "error_boundary_hit"
};
class Nl {
  constructor() {
    Ve(this, "isGALoaded", !1);
    this.checkGAAvailability();
  }
  checkGAAvailability() {
    typeof window < "u" && window.gtag ? (this.isGALoaded = !0, ue.log("📊 Google Analytics disponible")) : ue.warn("⚠️ Google Analytics no disponible");
  }
  // Tracking de eventos específicos AI4U
  trackServiceInterest(t, r = "unknown") {
    this.trackEvent({
      action: xt.SERVICE_INTEREST,
      category: "business",
      label: t,
      custom_parameters: {
        source: r,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        user_journey_point: "service_exploration"
      }
    });
  }
  trackConsultationRequest(t = "chat", r) {
    this.trackEvent({
      action: xt.CONSULTATION_REQUEST,
      category: "conversion",
      label: t,
      value: 1,
      // Alto valor para conversiones
      custom_parameters: {
        service_type: r,
        contact_method: t,
        conversion_funnel: "consultation_request"
      }
    });
  }
  trackDiagnosticStart(t = "homepage") {
    this.trackEvent({
      action: xt.DIAGNOSTIC_START,
      category: "engagement",
      label: t,
      custom_parameters: {
        diagnostic_type: "ai_readiness",
        entry_point: t
      }
    });
  }
  trackPhilosophyEngagement(t, r) {
    this.trackEvent({
      action: xt.PHILOSOPHY_ENGAGEMENT,
      category: "content",
      label: t,
      value: r,
      custom_parameters: {
        philosophy_section: t,
        engagement_type: "humanistic_ai",
        time_spent_seconds: r
      }
    });
  }
  trackPerformanceIssue(t, r, n) {
    this.trackEvent({
      action: xt.PERFORMANCE_ISSUE,
      category: "technical",
      label: t,
      value: Math.round(r),
      custom_parameters: {
        metric_name: t,
        actual_value: r,
        threshold_exceeded: n,
        user_agent: navigator.userAgent.substring(0, 100)
      }
    });
  }
  trackErrorBoundary(t, r) {
    var n;
    this.trackEvent({
      action: xt.ERROR_BOUNDARY_HIT,
      category: "error",
      label: t.message || "unknown_error",
      custom_parameters: {
        error_message: t.message,
        error_stack: (n = t.stack) == null ? void 0 : n.substring(0, 500),
        component_stack: r == null ? void 0 : r.substring(0, 300),
        page_url: window.location.href
      }
    });
  }
  // Método genérico para eventos customizados
  trackEvent(t) {
    var r;
    if (!this.isGALoaded) {
      ue.warn("Analytics event skipped - GA not loaded:", t.action);
      return;
    }
    try {
      const n = {
        event_category: t.category || "general",
        event_label: t.label || ""
      };
      t.value !== void 0 && (n.value = t.value), t.custom_parameters && Object.assign(n, t.custom_parameters), (r = window.gtag) == null || r.call(window, "event", t.action, n), ue.log(`📊 Event tracked: ${t.action}`, t.category);
    } catch (n) {
      ue.error("Error tracking analytics event:", n);
    }
  }
  // Tracking de pageviews mejorado
  trackPageView(t, r) {
    var o;
    if (!this.isGALoaded) return;
    const n = window.__AI4U_GA_ID__;
    if (n)
      try {
        (o = window.gtag) == null || o.call(window, "config", n, {
          page_title: `${t} | AI4U`,
          page_location: window.location.href,
          ...r
        }), ue.log(`📊 Page view tracked: ${t}`);
      } catch (a) {
        ue.error("Error tracking page view:", a);
      }
  }
  // Métricas de tiempo de permanencia
  trackTimeOnPage(t, r) {
    this.trackEvent({
      action: "time_on_page",
      category: "engagement",
      label: t,
      value: Math.round(r / 1e3),
      // Convertir a segundos
      custom_parameters: {
        time_spent_ms: r,
        page_name: t,
        engagement_quality: r > 3e4 ? "high" : r > 1e4 ? "medium" : "low"
      }
    });
  }
}
const Ti = new Nl();
function xu(e) {
  typeof window > "u" || !e || (window.__AI4U_GA_ID__ = e);
}
class Wl {
  constructor() {
    Ve(this, "sessionId");
    this.sessionId = this.generateSessionId(), this.setupGlobalErrorHandlers();
  }
  generateSessionId() {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  setupGlobalErrorHandlers() {
    window.addEventListener("error", (t) => {
      var r;
      this.captureError({
        message: t.message,
        stack: (r = t.error) == null ? void 0 : r.stack,
        url: t.filename,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        errorBoundary: !1
      });
    }), window.addEventListener("unhandledrejection", (t) => {
      var r;
      this.captureError({
        message: `Unhandled Promise Rejection: ${t.reason}`,
        stack: (r = t.reason) == null ? void 0 : r.stack,
        url: window.location.href,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        errorBoundary: !1
      });
    }), ue.log("🛡️ Error tracking initialized");
  }
  captureError(t) {
    const r = {
      message: t.message || "Unknown error",
      stack: t.stack,
      componentStack: t.componentStack,
      errorBoundary: t.errorBoundary || !1,
      url: t.url || window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: t.timestamp || (/* @__PURE__ */ new Date()).toISOString(),
      sessionId: this.sessionId,
      ...t
    };
    ue.error("🚨 Error captured:", r), Ti.trackErrorBoundary(r, r.componentStack), this.sendToRemoteService(r);
  }
  captureException(t, r) {
    this.captureError({
      message: t.message,
      stack: t.stack,
      url: window.location.href,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      errorBoundary: !1,
      // Agregar contexto adicional
      ...r && { context: r }
    });
  }
  captureMessage(t, r = "info") {
    const n = {
      message: t,
      url: window.location.href,
      userAgent: navigator.userAgent.substring(0, 200),
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      sessionId: this.sessionId
    };
    r === "error" ? this.captureError(n) : ue.log(`📢 Message captured (${r}):`, t);
  }
  async sendToRemoteService(t) {
    try {
      if (this.shouldSendError(t)) {
        const r = {
          error: t,
          meta: {
            project: "ai4u-website",
            environment: "production",
            version: "1.0.0",
            timestamp: (/* @__PURE__ */ new Date()).toISOString()
          }
        };
        ue.log("📤 Error would be sent to remote service:", r);
      }
    } catch (r) {
      ue.error("Failed to send error to remote service:", r);
    }
  }
  shouldSendError(t) {
    return ![
      "Script error",
      "Network request failed",
      "Loading chunk",
      "ChunkLoadError"
    ].some(
      (n) => t.message.toLowerCase().includes(n.toLowerCase())
    );
  }
  // Método para agregar contexto a los errores
  addContext(t, r) {
    ue.log(`🏷️ Error context added: ${t}=`, r);
  }
  // Método para identificar al usuario (GDPR compliant)
  setUser(t) {
    ue.log(`👤 User identified: ${t.substring(0, 8)}...`);
  }
}
const Ll = new Wl(), Bl = (e, t = {}) => {
  const {
    priority: r = !1,
    size: n = "original",
    format: o = "webp",
    fallback: a,
    preload: s = !1
  } = t, [c, l] = H({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [u, m] = H(null);
  pe(() => {
    (async () => {
      try {
        const x = await fetch("/assets/images/optimized/image-mapping.json");
        if (x.ok) {
          const C = await x.json();
          m(C);
        }
      } catch {
      }
    })();
  }, []);
  const g = _e(() => {
    var O, A;
    if (!u || !u[e])
      return {
        src: `/assets/images/${e}.jpg`,
        format: "original",
        size: "original"
      };
    const S = u[e];
    let x = "", C = "original", w = "original";
    return o === "webp" && ((O = S.formats) != null && O.webp) ? (x = `/assets/images/optimized/${S.formats.webp.file}`, C = "webp") : (x = `/assets/images/${S.original}`, C = "original"), n !== "original" && ((A = S.sizes) != null && A[n]) && (x = `/assets/images/optimized/${S.sizes[n].file}`, w = n), {
      src: x,
      format: C,
      size: w
    };
  }, [e, u, o, n]);
  pe(() => {
    if (!g.src) return;
    l((x) => ({
      ...x,
      src: g.src,
      format: g.format,
      size: g.size,
      isLoaded: !1,
      error: !1
    }));
    const S = new Image();
    return S.onload = () => {
      l((x) => ({
        ...x,
        isLoaded: !0,
        error: !1
      }));
    }, S.onerror = () => {
      g.format === "webp" && !c.error ? l((x) => {
        var C;
        return {
          ...x,
          src: `/assets/images/${((C = u == null ? void 0 : u[e]) == null ? void 0 : C.original) || `${e}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : l(a ? (x) => ({
        ...x,
        src: a,
        format: "fallback",
        error: !0
      }) : (x) => ({
        ...x,
        error: !0
      }));
    }, (r || s) && (S.loading = "eager"), S.src = g.src, () => {
      S.onload = null, S.onerror = null;
    };
  }, [g.src, g.format, a, r, s, c.error, u, e]);
  const y = _e(() => {
    if (typeof window > "u") return !1;
    const S = document.createElement("canvas");
    return S.width = 1, S.height = 1, S.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);
  return {
    src: _e(() => {
      var S;
      return c.format === "webp" && !y ? `/assets/images/${((S = u == null ? void 0 : u[e]) == null ? void 0 : S.original) || `${e}.jpg`}` : c.src;
    }, [c.src, c.format, y, u, e]),
    isLoaded: c.isLoaded,
    error: c.error,
    format: c.format,
    size: c.size,
    supportsWebP: y,
    isLoading: !c.isLoaded && !c.error
  };
}, Ur = (e) => {
  const [t, r] = H(/* @__PURE__ */ new Set()), [n, o] = H(0);
  return pe(() => {
    o(e.length);
    const a = (c) => new Promise((l) => {
      const u = new Image();
      u.onload = () => {
        r((m) => new Set(Array.from(m).concat(c))), l();
      }, u.onerror = () => {
        r((m) => new Set(Array.from(m).concat(c))), l();
      }, u.src = `/assets/images/${c}.jpg`;
    });
    (async () => {
      await Promise.all(e.map(a));
    })();
  }, [e]), {
    loadedImages: Array.from(t),
    totalImages: n,
    progress: n > 0 ? t.size / n * 100 : 0,
    isComplete: t.size === n
  };
}, jl = {
  small: Je.sizes.buttonSm,
  medium: Je.sizes.buttonMd,
  large: Je.sizes.buttonLg
}, Vl = Ce(Ze, {
  shouldForwardProp: (e) => e !== "customVariant" && e !== "customSize" && e !== "iconOnly" && e !== "dashboardColors"
})(({ theme: e, customVariant: t, customSize: r, iconOnly: n, dashboardColors: o }) => {
  const a = e.palette.mode === "light", s = jl[r ?? "medium"], c = {
    borderRadius: 0,
    // Heavy Industrial Sharp Edges
    fontWeight: 700,
    letterSpacing: "0.15em",
    fontSize: "0.875rem",
    fontFamily: '"Red Hat Display", sans-serif',
    transition: "all 0.2s steps(4, end)",
    // Industrial "Snap" transition
    border: "none",
    padding: "12px 24px",
    boxShadow: "none",
    position: "relative",
    overflow: "hidden"
  };
  let l = {};
  switch (t) {
    case "primary":
      l = {
        backgroundColor: a ? b.black : b.white,
        color: a ? b.white : b.black,
        "&:hover": {
          backgroundColor: a ? b.gray[800] : b.gray[200],
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px 0px ${a ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`
        }
      };
      break;
    case "industrial":
      l = {
        backgroundColor: b.accentColors.mint,
        // Safety Green
        color: b.black,
        border: `2px solid ${b.black}`,
        "&:hover": {
          backgroundColor: b.accentColors.orange,
          // Warning Orange
          transform: "translate(-4px, -4px)",
          boxShadow: `8px 8px 0px 0px ${b.black}`
        }
      };
      break;
    case "outline":
      l = {
        backgroundColor: "transparent",
        color: a ? b.black : b.white,
        border: `2px solid ${a ? b.black : b.white}`,
        "&:hover": {
          backgroundColor: a ? b.black : b.white,
          color: a ? b.white : b.black
        }
      };
      break;
    case "minimal":
      l = {
        backgroundColor: a ? b.gray[100] : b.gray[900],
        color: a ? b.black : b.white,
        "&:hover": {
          backgroundColor: a ? b.gray[200] : b.gray[800]
        }
      };
      break;
    case "dashboard":
      l = {
        borderRadius: qe.radius.sm,
        // 8px — mismo radio que ya usa Mission Control a mano
        fontWeight: V.fontWeight.semiBold,
        letterSpacing: V.letterSpacing.normal,
        fontFamily: V.fontFamily.primary,
        textTransform: "none",
        backgroundColor: (o == null ? void 0 : o.background) ?? "transparent",
        color: (o == null ? void 0 : o.text) ?? "inherit",
        border: o ? `1px solid ${o.border}` : "none",
        minHeight: s,
        "&:hover": {
          backgroundColor: (o == null ? void 0 : o.hoverBg) ?? "rgba(128,128,128,0.12)",
          transform: "none",
          boxShadow: "none"
        }
      };
      break;
    default:
      l = {};
  }
  return { ...c, ...l, ...n ? { minWidth: s, width: s, minHeight: s, padding: 0 } : {} };
}), Hl = Ce(d)(({ theme: e }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...re.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), $r = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  iconOnly: n = !1,
  label: o,
  className: a,
  sx: s,
  ...c
}) => {
  const { contrast: l, helpers: u } = X(), m = t === "dashboard" ? {
    background: l.surface,
    text: l.text.primary,
    border: l.border,
    hoverBg: u.state.hover
  } : void 0;
  return /* @__PURE__ */ f(
    Vl,
    {
      customVariant: t,
      customSize: r,
      size: r,
      iconOnly: n,
      dashboardColors: m,
      className: a,
      sx: s,
      ...c,
      children: [
        o && /* @__PURE__ */ i(Hl, { children: o }),
        e
      ]
    }
  );
}, Ul = {
  small: Je.sizes.inputSm,
  medium: Je.sizes.inputMd,
  large: Je.sizes.inputLg
}, Gl = Ce(d, {
  shouldForwardProp: (e) => e !== "fieldColors" && e !== "resolvedHeight" && e !== "error"
})(({ fieldColors: e, resolvedHeight: t, error: r }) => ({
  width: "100%",
  boxSizing: "border-box",
  height: t,
  padding: "0 14px",
  borderRadius: qe.radius.sm,
  border: `1px solid ${r ? "#ef4444" : e.border}`,
  backgroundColor: e.background,
  color: e.text,
  fontFamily: V.fontFamily.primary,
  fontSize: V.fontSize.sm,
  outline: "none",
  transition: "border-color 150ms ease",
  "&:focus": {
    borderColor: r ? "#ef4444" : e.borderFocus
  },
  "&::placeholder": {
    color: e.placeholder
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
})), Io = ({ size: e = "medium", error: t = !1, sx: r, ...n }) => {
  const { contrast: o } = X(), a = {
    background: o.surface,
    text: o.text.primary,
    border: o.border,
    borderFocus: o.text.secondary,
    placeholder: o.text.disabled
  };
  return /* @__PURE__ */ i(
    Gl,
    {
      component: "input",
      fieldColors: a,
      resolvedHeight: Ul[e],
      error: t,
      sx: r,
      ...n
    }
  );
}, Yl = Ce(d, {
  shouldForwardProp: (e) => e !== "fieldColors" && e !== "error"
})(({ fieldColors: e, error: t }) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 14px",
  borderRadius: qe.radius.sm,
  border: `1px solid ${t ? "#ef4444" : e.border}`,
  backgroundColor: e.background,
  color: e.text,
  fontFamily: V.fontFamily.primary,
  fontSize: V.fontSize.sm,
  lineHeight: V.lineHeight.normal,
  outline: "none",
  resize: "vertical",
  transition: "border-color 150ms ease",
  "&:focus": {
    borderColor: t ? "#ef4444" : e.borderFocus
  },
  "&::placeholder": {
    color: e.placeholder
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
})), yu = ({
  error: e = !1,
  scrollIntoViewOnFocus: t = !0,
  sx: r,
  onFocus: n,
  rows: o = 4,
  ...a
}) => {
  const { contrast: s } = X(), c = {
    background: s.surface,
    text: s.text.primary,
    border: s.border,
    borderFocus: s.text.secondary,
    placeholder: s.text.disabled
  }, l = Ge(
    (u) => {
      t && u.currentTarget.scrollIntoView({ block: "nearest", behavior: "smooth" }), n == null || n(u);
    },
    [t, n]
  );
  return /* @__PURE__ */ i(
    Yl,
    {
      component: "textarea",
      rows: o,
      fieldColors: c,
      error: e,
      onFocus: l,
      sx: r,
      ...a
    }
  );
}, ql = {
  small: Je.sizes.inputSm,
  medium: Je.sizes.inputMd,
  large: Je.sizes.inputLg
}, Kl = Ce(d, {
  shouldForwardProp: (e) => e !== "fieldColors" && e !== "resolvedHeight" && e !== "error"
})(({ fieldColors: e, resolvedHeight: t, error: r }) => ({
  width: "100%",
  boxSizing: "border-box",
  height: t,
  padding: "0 14px",
  borderRadius: qe.radius.sm,
  border: `1px solid ${r ? "#ef4444" : e.border}`,
  backgroundColor: e.background,
  color: e.text,
  fontFamily: V.fontFamily.primary,
  fontSize: V.fontSize.sm,
  outline: "none",
  cursor: "pointer",
  appearance: "auto",
  // picker nativo del SO — mejor UX mobile que un dropdown custom
  transition: "border-color 150ms ease",
  "&:focus": {
    borderColor: r ? "#ef4444" : e.borderFocus
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
})), bu = ({ size: e = "medium", error: t = !1, sx: r, children: n, ...o }) => {
  const { contrast: a } = X(), s = {
    background: a.surface,
    text: a.text.primary,
    border: a.border,
    borderFocus: a.text.secondary
  };
  return /* @__PURE__ */ i(
    Kl,
    {
      component: "select",
      fieldColors: s,
      resolvedHeight: ql[e],
      error: t,
      sx: r,
      ...o,
      children: n
    }
  );
}, Xl = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h1",
    sx: {
      ...re.display.giant,
      ...e.sx
    },
    ...e
  }
), kn = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h1",
    sx: {
      ...re.display.large,
      ...e.sx
    },
    ...e
  }
), Ii = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h2",
    sx: {
      ...re.display.medium,
      ...e.sx
    },
    ...e
  }
), Yt = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h3",
    sx: {
      ...re.display.small,
      ...e.sx
    },
    ...e
  }
), Ae = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h4",
    sx: {
      fontSize: re.display.small.fontSize,
      fontWeight: 400,
      lineHeight: 1.2,
      textTransform: "none",
      ...e.sx
    },
    ...e
  }
), Su = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h5",
    sx: {
      fontSize: re.body.large.fontSize,
      fontWeight: 400,
      lineHeight: 1.3,
      ...e.sx
    },
    ...e
  }
), vu = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h6",
    sx: {
      fontSize: re.body.regular.fontSize,
      fontWeight: 400,
      lineHeight: 1.4,
      ...e.sx
    },
    ...e
  }
), Ie = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "body1",
    sx: {
      ...re.body.regular,
      ...e.sx
    },
    ...e
  }
), de = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "body2",
    sx: {
      ...re.body.small,
      ...e.sx
    },
    ...e
  }
), Ye = (e) => {
  const t = ye();
  return /* @__PURE__ */ i(
    P,
    {
      component: "code",
      fontFamily: re.ui.code.fontFamily,
      sx: {
        display: "inline-block",
        backgroundColor: t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)",
        color: t.palette.mode === "dark" ? "primary.light" : "text.primary",
        borderRadius: 1,
        px: 0.5,
        ...re.ui.code,
        ...e.sx
      },
      ...e
    }
  );
}, wu = ({ variant: e = "body1", ...t }) => /* @__PURE__ */ i(P, { variant: e, ...t }), Ql = (e, t, r, n) => {
  let o = t;
  o === "auto" && (o = n || r ? "crema" : "negro");
  const s = {
    azul: "Azul",
    crema: "Crema",
    gris: "Gris",
    naranja: "Naranja",
    negro: "Negro"
  }[o] || "Negro";
  if (e === "isotipo")
    return `/assets/images/Isotipo ${s}.png`;
  const l = {
    v1: "Logo V1",
    v2: "Logo V2",
    v3: "Logo V3"
  }[e] || "Logo V2";
  return l === "Logo V2" && s === "Crema" ? "/assets/images/Logo V2 - Crema .png" : `/assets/images/${l} - ${s}.png`;
}, Et = ({
  variant: e,
  version: t = "v2",
  colorVariant: r = "auto",
  size: n,
  light: o = !1,
  onClick: a,
  sx: s,
  ...c
}) => {
  const u = ye().palette.mode === "dark", m = Ql(t, r, u, o), g = () => {
    a ? a() : window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  let y = 40;
  const p = n || (e === "mobile" ? "small" : "medium");
  return t === "isotipo" ? p === "small" ? y = 24 : p === "large" ? y = 48 : y = 32 : p === "small" ? y = 30 : p === "large" ? y = 60 : y = 40, /* @__PURE__ */ i(
    d,
    {
      component: "img",
      src: m,
      alt: `AI4U ${t}`,
      onClick: g,
      sx: {
        height: y,
        width: "auto",
        cursor: "pointer",
        transition: "transform 0.2s steps(4, end)",
        "&:hover": {
          transform: "scale(1.03)"
        },
        ...s
      },
      ...c
    }
  );
}, Jl = Ce(d, {
  shouldForwardProp: (e) => e !== "iconSize" && e !== "isClickable"
})(({ theme: e, iconSize: t, isClickable: r }) => ({
  ...{
    small: {
      width: 24,
      height: 24,
      borderRadius: 4
    },
    medium: {
      width: 32,
      height: 32,
      borderRadius: 6
    },
    large: {
      width: 48,
      height: 48,
      borderRadius: 8
    }
  }[t],
  cursor: r ? "pointer" : "default",
  transition: "all 0.2s ease",
  userSelect: "none",
  "&:hover": r ? {
    transform: "scale(1.1)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.15)"
  } : {},
  "&:active": {
    transform: "scale(0.95)"
  }
})), sr = (e) => {
  const {
    type: t,
    size: r = "medium",
    color: n,
    variant: o = "filled",
    onClick: a,
    sx: s
  } = e, c = X(), l = n || c.contrast.text.primary, u = () => {
    const g = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: r === "small" ? "14px" : r === "large" ? "24px" : "18px",
      fontWeight: 400,
      fontFamily: '"Red Hat Display", sans-serif'
    };
    switch (o) {
      case "outline":
        return {
          ...g,
          backgroundColor: "transparent",
          border: `2px solid ${l}`,
          color: l
        };
      case "minimal":
        return {
          ...g,
          backgroundColor: "transparent",
          color: l
        };
      default:
        return {
          ...g,
          backgroundColor: l,
          color: l === c.palette.white ? c.palette.black : c.palette.white,
          border: "none"
        };
    }
  }, m = () => {
    const g = {
      style: {
        fontSize: "inherit"
      }
    };
    switch (t) {
      case "arrow-up":
        return /* @__PURE__ */ i("span", { ...g, children: "↑" });
      case "arrow-down":
        return /* @__PURE__ */ i("span", { ...g, children: "↓" });
      case "arrow-right":
        return /* @__PURE__ */ i("span", { ...g, children: "→" });
      case "arrow-left":
        return /* @__PURE__ */ i("span", { ...g, children: "←" });
      case "plus":
        return /* @__PURE__ */ i("span", { ...g, children: "+" });
      case "minus":
        return /* @__PURE__ */ i("span", { ...g, children: "−" });
      case "circle":
        return /* @__PURE__ */ i("span", { ...g, children: "●" });
      case "square":
        return /* @__PURE__ */ i("span", { ...g, children: "■" });
      case "triangle":
        return /* @__PURE__ */ i("span", { ...g, children: "▲" });
      case "cross":
        return /* @__PURE__ */ i("span", { ...g, children: "✕" });
      case "line":
        return /* @__PURE__ */ i("span", { ...g, children: "—" });
      case "dot":
        return /* @__PURE__ */ i("span", { ...g, children: "•" });
      case "search":
        return /* @__PURE__ */ i("span", { ...g, children: "[?]" });
      case "clear":
        return /* @__PURE__ */ i("span", { ...g, children: "✕" });
      case "check":
        return /* @__PURE__ */ i("span", { ...g, children: "✓" });
      default:
        return /* @__PURE__ */ i("span", { ...g, children: "○" });
    }
  };
  return /* @__PURE__ */ i(
    Jl,
    {
      iconSize: r,
      isClickable: !!a,
      onClick: a,
      sx: { ...u(), ...s },
      children: m()
    }
  );
}, Zl = an(void 0), $i = () => {
  const e = pr(Zl);
  if (e === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return e;
}, Cu = ({ images: e, onAllLoaded: t }) => {
  const { setCriticalImagesLoaded: r } = $i();
  return pe(() => {
    let n = 0;
    const o = e.length, a = () => {
      n++, n === o && (r(!0), t == null || t());
    }, s = () => {
      n++, n === o && (r(!0), t == null || t());
    };
    e.forEach((c) => {
      const l = new Image();
      l.onload = a, l.onerror = s, l.src = c;
    }), o === 0 && (r(!0), t == null || t());
  }, [e, r, t]), null;
}, ku = () => {
  const e = ye();
  return /* @__PURE__ */ i(
    d,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ i(Ke, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(d, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Et, {}) }),
        /* @__PURE__ */ i(d, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ f(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ f(he, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  );
}, En = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: a,
  skeletonWidth: s,
  priority: c = !1
}) => {
  const l = ye(), { isPWA: u } = Fl(), { imgRef: m, isLoaded: g, isInView: y, error: p } = $a(e, { priority: c }), S = {
    bgcolor: l.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ f(
    d,
    {
      ref: m,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        !g && /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: a || n,
            sx: S
          }
        ),
        y && /* @__PURE__ */ i(
          d,
          {
            component: "img",
            src: e,
            alt: t,
            loading: c ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: g ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: g ? "block" : "none",
              // Optimizaciones específicas para PWA
              ...u && {
                imageRendering: "auto",
                touchAction: "manipulation"
              }
            },
            onLoad: () => {
            }
          }
        ),
        p && /* @__PURE__ */ i(
          d,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: l.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: l.palette.text.secondary,
              fontSize: "0.875rem"
            },
            children: "Error al cargar imagen"
          }
        )
      ]
    }
  );
}, Eu = ({
  src: e,
  pixelArtSrc: t,
  alt: r,
  width: n = "100%",
  height: o = "auto",
  transitionDuration: a = 0.3,
  sx: s,
  ...c
}) => {
  const [l, u] = H(!1);
  return /* @__PURE__ */ i(
    d,
    {
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      sx: {
        position: "relative",
        width: n,
        height: o,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${e})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${a}s ease-in-out`,
          opacity: l ? 0 : 1,
          zIndex: 1
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${t})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: `opacity ${a}s ease-in-out`,
          opacity: l ? 1 : 0,
          zIndex: 2
        },
        ...s
      },
      ...c,
      children: /* @__PURE__ */ i(
        d,
        {
          component: "img",
          src: e,
          alt: r,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0,
            pointerEvents: "none"
          }
        }
      )
    }
  );
}, Tu = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  transitionDuration: o = 0.3,
  pixelSize: a = 8,
  sx: s,
  ...c
}) => {
  const [l, u] = H(!1);
  return /* @__PURE__ */ f(
    d,
    {
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        ...s
      },
      ...c,
      children: [
        /* @__PURE__ */ i(
          d,
          {
            component: "img",
            src: e,
            alt: t,
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: `all ${o}s ease-in-out`,
              filter: l ? "contrast(1.4) brightness(1.2) saturate(1.5) blur(0.3px)" : "none",
              imageRendering: l ? "pixelated" : "auto",
              transform: l ? "scale(1.05)" : "scale(1)",
              "&::before": l ? {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `repeating-conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(0,0,0,0.1) 1deg,
                transparent 2deg
              )`,
                backgroundSize: `${a}px ${a}px`,
                pointerEvents: "none",
                zIndex: 2
              } : {}
            }
          }
        ),
        l && /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `repeating-conic-gradient(
              from 0deg,
              transparent 0deg,
              rgba(0,0,0,0.03) 1deg,
              transparent 2deg
            )`,
              backgroundSize: `${a}px ${a}px`,
              pointerEvents: "none",
              zIndex: 3,
              transition: `opacity ${o}s ease-in-out`
            }
          }
        ),
        l && /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 4,
              transition: `opacity ${o}s ease-in-out`
            }
          }
        ),
        l && /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,0.02) 50%,
              transparent 100%
            )`,
              animation: "glitch 2s infinite",
              pointerEvents: "none",
              zIndex: 5,
              "@keyframes glitch": {
                "0%, 100%": {
                  transform: "translateX(0)"
                },
                "10%": {
                  transform: "translateX(-2px)"
                },
                "20%": {
                  transform: "translateX(2px)"
                },
                "30%": {
                  transform: "translateX(0)"
                },
                "40%": {
                  transform: "translateX(-1px)"
                },
                "50%": {
                  transform: "translateX(1px)"
                },
                "60%": {
                  transform: "translateX(0)"
                }
              }
            }
          }
        )
      ]
    }
  );
}, ed = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", td = `
  .goog-te-banner-frame {
    display: none !important;
  }
  body {
    top: 0 !important;
  }
  #google_translate_element {
    display: none !important;
  }
  .goog-te-gadget {
    display: none !important;
  }
  .skiptranslate {
    display: none !important;
  }
  .goog-te-menu-frame {
    display: none !important;
  }
`, rd = () => (pe(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var t;
    try {
      (t = window.google) != null && t.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: ed,
          multilanguagePage: !1
        },
        "google_translate_element"
      ), setTimeout(() => {
        const r = document.getElementById("google_translate_element");
        r && (r.style.display = "none");
      }, 100));
    } catch (r) {
      console.error("Error inicializando Google Translate:", r);
    }
  };
  const e = document.createElement("script");
  e.id = "google-translate-script", e.type = "text/javascript", e.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit", e.async = !0, document.body.appendChild(e);
}, []), /* @__PURE__ */ f(Se, { children: [
  /* @__PURE__ */ i(
    d,
    {
      id: "google_translate_element",
      sx: {
        position: "absolute",
        opacity: 0,
        pointerEvents: "none",
        width: 0,
        height: 0,
        overflow: "hidden",
        zIndex: -1
      }
    }
  ),
  /* @__PURE__ */ i("style", { children: td })
] })), tn = [
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
  { code: "zh-CN", label: "中文", short: "ZH" },
  { code: "hi", label: "हिन्दी", short: "HI" },
  { code: "ar", label: "العربية", short: "AR" },
  { code: "pt", label: "Português", short: "PT" },
  { code: "ru", label: "Русский", short: "RU" },
  { code: "ja", label: "日本語", short: "JA" },
  { code: "de", label: "Deutsch", short: "DE" },
  { code: "fr", label: "Français", short: "FR" }
], cr = "es";
function nd() {
  const e = document.cookie.match(/googtrans=([^;]+)/);
  if (e && e[1]) {
    const o = e[1].trim();
    if (o) {
      const a = o.split("/").filter(Boolean), s = a[a.length - 1];
      if (s && s !== cr) {
        const c = tn.find((l) => l.code === s || l.code.startsWith(s));
        if (c) return c.short;
      }
    }
  }
  const r = (document.documentElement.lang || cr).split("-")[0].toLowerCase(), n = tn.find((o) => o.code.toLowerCase().startsWith(r));
  return (n == null ? void 0 : n.short) ?? "ES";
}
const $o = ({ light: e = !1 }) => {
  const t = X(), r = ye(), n = Nt(r.breakpoints.down("sm")), o = Nt(r.breakpoints.between("sm", "md")), [a, s] = H(nd), [c, l] = H(null), [u, m] = H(() => !!document.getElementById("google-translate-script")), g = Ht(null), y = !!c;
  pe(() => {
    if (document.getElementById("google-translate-script")) {
      m(!0);
      return;
    }
    const w = setInterval(() => {
      document.getElementById("google-translate-script") && (m(!0), clearInterval(w));
    }, 200), O = setTimeout(() => {
      clearInterval(w), m(!0);
    }, 5e3);
    return () => {
      clearInterval(w), clearTimeout(O);
    };
  }, []);
  const p = (w) => {
    l(w.currentTarget);
  }, S = () => {
    l(null);
  }, x = (w, O) => {
    if (S(), w === cr) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const A = `/${cr}/${w}`;
    document.cookie = `googtrans=${A}; path=/`, window.location.reload();
  }, C = (w) => n ? {
    width: w.spacing(4),
    height: w.spacing(3.5),
    fontSize: w.typography.caption.fontSize
  } : o ? {
    width: w.spacing(4.5),
    height: w.spacing(3.75),
    fontSize: w.typography.body2.fontSize
  } : {
    width: w.spacing(5),
    height: w.spacing(4),
    fontSize: w.typography.body2.fontSize
  };
  return /* @__PURE__ */ f(
    d,
    {
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ i(
          d,
          {
            ref: g,
            component: "button",
            onClick: p,
            "aria-label": `Cambiar idioma (actual: ${a})`,
            "aria-controls": y ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": y ? "true" : void 0,
            disabled: !u,
            sx: (w) => {
              const O = C(w);
              return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: O.width,
                height: O.height,
                minWidth: O.width,
                padding: 0,
                color: e ? "#FFFFFF" : t.contrast.text.primary,
                border: "none",
                borderRadius: w.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: e ? "transparent" : t.contrast.surface,
                fontFamily: w.typography.fontFamily,
                fontSize: O.fontSize,
                fontWeight: 400,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: e ? "rgba(255, 255, 255, 0.1)" : t.helpers.state.hover,
                  transform: "scale(1.05)"
                },
                "&:focus": {
                  outline: `${w.spacing(0.25)} solid ${t.palette.black}`,
                  outlineOffset: w.spacing(0.25)
                },
                "&:active": {
                  transform: "scale(0.95)"
                }
              };
            },
            children: u ? a : "…"
          }
        ),
        /* @__PURE__ */ i(
          Fo,
          {
            id: "language-menu",
            anchorEl: c,
            open: y,
            onClose: S,
            anchorOrigin: {
              vertical: "bottom",
              horizontal: "right"
            },
            transformOrigin: {
              vertical: "top",
              horizontal: "right"
            },
            slotProps: {
              paper: {
                sx: (w) => ({
                  mt: 0.5,
                  minWidth: w.spacing(20),
                  maxWidth: w.spacing(25),
                  backgroundColor: t.contrast.surface,
                  border: `1px solid ${t.contrast.border}`,
                  borderRadius: w.spacing(1),
                  boxShadow: Ft.md
                })
              }
            },
            children: tn.map((w) => /* @__PURE__ */ i(
              Zt,
              {
                onClick: () => x(w.code, w.short),
                selected: a === w.short,
                sx: (O) => ({
                  fontFamily: O.typography.fontFamily,
                  fontSize: O.typography.body2.fontSize,
                  fontWeight: a === w.short ? 600 : 400,
                  color: a === w.short ? t.palette.black : t.contrast.text.primary,
                  py: 1,
                  px: 2,
                  "&:hover": {
                    backgroundColor: t.helpers.state.hover
                  },
                  "&.Mui-selected": {
                    backgroundColor: t.helpers.state.selected,
                    "&:hover": {
                      backgroundColor: t.helpers.state.hover
                    }
                  }
                }),
                children: /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                  /* @__PURE__ */ i(
                    d,
                    {
                      component: "span",
                      sx: (O) => ({
                        fontWeight: 400,
                        minWidth: O.spacing(3),
                        color: a === w.short ? t.palette.black : t.contrast.text.secondary
                      }),
                      children: w.short
                    }
                  ),
                  /* @__PURE__ */ i(d, { component: "span", children: w.label })
                ] })
              },
              w.code
            ))
          }
        )
      ]
    }
  );
};
let rn = null;
try {
  rn = require("react-helmet-async").Helmet;
} catch {
}
const Ai = (e) => {
  if (typeof window > "u" || !rn) return null;
  const t = rn, {
    title: r = "AI4U - Inteligencia Artificial para tu Negocio",
    description: n = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
    keywords: o = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
    canonical: a,
    ogImage: s = "/assets/images/ai4u-logo.png",
    ogType: c = "website",
    structuredData: l,
    noIndex: u = !1,
    noFollow: m = !1
  } = e, g = r.includes("AI4U") ? r : `${r} | AI4U`, y = a ?? window.location.href;
  return /* @__PURE__ */ f(t, { children: [
    /* @__PURE__ */ i("title", { children: g }),
    /* @__PURE__ */ i("meta", { name: "description", content: n }),
    /* @__PURE__ */ i("meta", { name: "keywords", content: o }),
    /* @__PURE__ */ i("meta", { name: "robots", content: u || m ? `${u ? "noindex" : "index"},${m ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    y && /* @__PURE__ */ i("link", { rel: "canonical", href: y }),
    /* @__PURE__ */ i("meta", { property: "og:title", content: g }),
    /* @__PURE__ */ i("meta", { property: "og:description", content: n }),
    /* @__PURE__ */ i("meta", { property: "og:type", content: c }),
    y && /* @__PURE__ */ i("meta", { property: "og:url", content: y }),
    /* @__PURE__ */ i("meta", { property: "og:image", content: s }),
    /* @__PURE__ */ i("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ i("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ i("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ i("meta", { property: "twitter:title", content: g }),
    /* @__PURE__ */ i("meta", { property: "twitter:description", content: n }),
    /* @__PURE__ */ i("meta", { property: "twitter:image", content: s }),
    /* @__PURE__ */ i("meta", { property: "twitter:site", content: "@ai4u_co" }),
    l && /* @__PURE__ */ i("script", { type: "application/ld+json", children: JSON.stringify(l) })
  ] });
}, Iu = (e = {}) => {
  const {
    title: t = "AI4U - Inteligencia Artificial para tu Negocio",
    description: r = "Soluciones de Inteligencia Artificial personalizadas para tu negocio.",
    keywords: n,
    canonical: o,
    ogImage: a = "/assets/images/ai4u-logo.png",
    ogType: s = "website",
    noIndex: c = !1,
    noFollow: l = !1
  } = e, u = t.includes("AI4U") ? t : `${t} | AI4U`;
  return {
    title: u,
    description: r,
    ...n && { keywords: n },
    robots: {
      index: !c,
      follow: !l,
      googleBot: { index: !c, follow: !l }
    },
    ...o && { alternates: { canonical: o } },
    openGraph: {
      title: u,
      description: r,
      type: s,
      ...o && { url: o },
      images: [{ url: a }],
      siteName: "AI4U",
      locale: "es_CO"
    },
    twitter: {
      card: "summary_large_image",
      title: u,
      description: r,
      images: [a],
      site: "@ai4u_co"
    }
  };
}, $u = ({
  src: e,
  alt: t,
  width: r,
  height: n,
  sx: o,
  priority: a = !1,
  fallback: s
}) => {
  const [c, l] = H(!1), [u, m] = H(!1), [g, y] = H(e), p = X(), S = () => {
    const O = document.createElement("canvas");
    return O.width = 1, O.height = 1, O.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, x = (O) => O.includes("/assets/images/") ? O.replace(/\.(jpg|jpeg|png)$/i, ".webp") : O;
  pe(() => {
    S() && e.includes("/assets/images/") ? y(x(e)) : y(e);
  }, [e]);
  const C = () => {
    l(!0), m(!1);
  }, w = () => {
    g !== e && !u ? (y(e), m(!0)) : s && (y(s), m(!0));
  };
  return /* @__PURE__ */ f(d, { sx: { position: "relative", width: r, height: n }, children: [
    !c && /* @__PURE__ */ i(
      ne,
      {
        variant: "rectangular",
        width: r,
        height: n,
        sx: {
          borderRadius: 1,
          bgcolor: p.contrast.surface,
          ...o
        }
      }
    ),
    /* @__PURE__ */ i(
      "img",
      {
        src: g,
        alt: t,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: c ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          ...o
        },
        onLoad: C,
        onError: w,
        loading: a ? "eager" : "lazy"
      }
    )
  ] });
}, Au = ({
  imageName: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: a,
  skeletonWidth: s,
  priority: c = !1,
  size: l = "original",
  format: u = "webp",
  fallback: m,
  preload: g = !1,
  showOptimizationInfo: y = !1,
  className: p
}) => {
  const S = ye(), {
    src: x,
    isLoaded: C,
    error: w,
    isLoading: O
  } = Bl(e, {
    priority: c,
    size: l,
    format: u,
    fallback: m,
    preload: g
  }), A = {
    bgcolor: S.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ f(
    d,
    {
      className: p,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        O && /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: a || n,
            sx: A
          }
        ),
        !w && /* @__PURE__ */ i(
          d,
          {
            component: "img",
            src: x,
            alt: t,
            loading: c ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: C ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: C ? "block" : "none",
              // Optimizaciones específicas para PWA
              imageRendering: "auto",
              touchAction: "manipulation"
            }
          }
        ),
        w && /* @__PURE__ */ f(
          d,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: S.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: S.palette.text.secondary,
              fontSize: "0.875rem",
              flexDirection: "column",
              gap: 1
            },
            children: [
              /* @__PURE__ */ i(d, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ i(d, { component: "span", children: "Error al cargar imagen" }),
              y && /* @__PURE__ */ i(d, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: e })
            ]
          }
        ),
        y && !1
      ]
    }
  );
}, _u = ({
  criticalImages: e,
  importantImages: t,
  backgroundImages: r,
  onCriticalLoaded: n,
  onImportantLoaded: o,
  onAllLoaded: a,
  showProgress: s = !1
}) => {
  const { setCriticalImagesLoaded: c } = $i(), [l, u] = H("critical"), m = Ur(e), g = Ur(t), y = Ur(r);
  pe(() => {
    m.isComplete && (c(!0), n == null || n(), u("important"));
  }, [m.isComplete, c, n]), pe(() => {
    l === "important" && g.isComplete && (o == null || o(), u("background"));
  }, [l, g.isComplete, o]), pe(() => {
    l === "background" && y.isComplete && (a == null || a(), u("complete"));
  }, [l, y.isComplete, a]);
  const p = e.length + t.length + r.length, S = m.loadedImages.length + g.loadedImages.length + y.loadedImages.length, x = p > 0 ? S / p * 100 : 0;
  return s ? /* @__PURE__ */ f("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
    color: "white",
    fontFamily: "monospace"
  }, children: [
    /* @__PURE__ */ i("div", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Cargando imágenes..." }),
    /* @__PURE__ */ i("div", { style: { width: "300px", marginBottom: "1rem" }, children: /* @__PURE__ */ i("div", { style: {
      width: "100%",
      height: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      overflow: "hidden"
    }, children: /* @__PURE__ */ i("div", { style: {
      width: `${x}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ f("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      l === "critical" ? "Críticas" : l === "important" ? "Importantes" : l === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ f("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      S,
      " / ",
      p,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ f("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ f("div", { children: [
        "Críticas: ",
        m.loadedImages.length,
        "/",
        e.length
      ] }),
      /* @__PURE__ */ f("div", { children: [
        "Importantes: ",
        g.loadedImages.length,
        "/",
        t.length
      ] }),
      /* @__PURE__ */ f("div", { children: [
        "Fondo: ",
        y.loadedImages.length,
        "/",
        r.length
      ] })
    ] })
  ] }) : null;
}, Dt = ({
  href: e,
  variant: t = "subtle",
  children: r,
  className: n,
  ariaLabel: o,
  LinkComponent: a,
  onClick: s
}) => {
  const c = X();
  return /* @__PURE__ */ i(
    Do,
    {
      component: a ?? "a",
      href: e,
      onClick: s,
      className: n,
      "aria-label": o,
      sx: (() => {
        switch (t) {
          case "accent":
            return {
              color: c.palette.accent,
              fontWeight: 400,
              textDecoration: "none",
              borderBottom: `1px solid ${c.palette.accent}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                color: c.palette.success,
                borderBottomColor: c.palette.success,
                transform: "translateY(-1px)"
              }
            };
          case "inline":
            return {
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: c.contrast.text.secondary,
              transition: "all 0.3s ease",
              "&:hover": {
                color: c.palette.accent,
                textDecorationColor: c.palette.accent
              }
            };
          case "subtle":
          default:
            return {
              color: c.contrast.text.secondary,
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                color: c.palette.accent,
                borderBottomColor: c.palette.accent
              }
            };
        }
      })(),
      children: r
    }
  );
}, od = (e) => {
  const {
    variant: t = "separator",
    size: r = "small",
    className: n
  } = e, o = X(), a = () => {
    switch (r) {
      case "medium":
        return { width: 8, height: 8 };
      case "small":
      default:
        return { width: 4, height: 4 };
    }
  }, s = () => {
    switch (t) {
      case "active":
        return {
          backgroundColor: o.palette.success,
          opacity: 1
        };
      case "inactive":
        return {
          backgroundColor: o.contrast.text.secondary,
          opacity: 0.4
        };
      case "separator":
      default:
        return {
          backgroundColor: o.contrast.text.secondary,
          opacity: 0.3
        };
    }
  };
  return /* @__PURE__ */ i(
    d,
    {
      className: n,
      sx: {
        ...a(),
        borderRadius: "50%",
        ...s(),
        flexShrink: 0,
        transition: "all 0.3s ease"
      }
    }
  );
}, Ru = ({
  serviceId: e,
  serviceColor: t,
  size: r = "medium",
  className: n,
  customThumbnail: o
}) => {
  const a = X(), c = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[r], l = t || a.palette.accent, m = ((g) => {
    const y = g.split("").reduce((S, x) => S + x.charCodeAt(0), 0), p = [
      // Patrón de círculos
      `<circle cx="30%" cy="30%" r="8" fill="${l}40"/>
       <circle cx="70%" cy="70%" r="12" fill="${l}60"/>
       <circle cx="20%" cy="80%" r="6" fill="${l}80"/>`,
      // Patrón de cuadrados
      `<rect x="20%" y="20%" width="25%" height="25%" fill="${l}40" rx="2"/>
       <rect x="60%" y="60%" width="30%" height="30%" fill="${l}60" rx="2"/>
       <rect x="10%" y="70%" width="20%" height="20%" fill="${l}80" rx="2"/>`,
      // Patrón de triángulos
      `<polygon points="30,20 50,40 10,40" fill="${l}40"/>
       <polygon points="70,60 90,80 50,80" fill="${l}60"/>
       <polygon points="20,70 30,90 10,90" fill="${l}80"/>`,
      // Patrón de líneas
      `<line x1="20%" y1="30%" x2="80%" y2="30%" stroke="${l}60" stroke-width="3"/>
       <line x1="30%" y1="60%" x2="90%" y2="60%" stroke="${l}40" stroke-width="2"/>
       <line x1="10%" y1="80%" x2="70%" y2="80%" stroke="${l}80" stroke-width="4"/>`
    ];
    return p[y % p.length];
  })(e);
  return o ? /* @__PURE__ */ f(
    d,
    {
      className: n,
      sx: {
        width: c.width,
        height: c.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${l}20`,
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${l}30`,
            borderColor: `${l}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ i(
          "img",
          {
            src: o,
            alt: `Thumbnail para ${e}`,
            style: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "8px"
            }
          }
        ),
        /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${l}10 0%, transparent 100%)`,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  ) : /* @__PURE__ */ f(
    d,
    {
      className: n,
      sx: {
        width: c.width,
        height: c.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(135deg, ${l}10 0%, ${l}05 100%)`,
        border: `1px solid ${l}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${l}30`,
            borderColor: `${l}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ f(
          "svg",
          {
            width: "100%",
            height: "100%",
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            style: {
              position: "absolute",
              top: 0,
              left: 0
            },
            children: [
              /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ f("linearGradient", { id: `gradient-${e}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ i("stop", { offset: "0%", stopColor: `${l}20` }),
                /* @__PURE__ */ i("stop", { offset: "100%", stopColor: `${l}10` })
              ] }) }),
              /* @__PURE__ */ i("rect", { width: "100%", height: "100%", fill: `url(#gradient-${e})` }),
              /* @__PURE__ */ i("g", { dangerouslySetInnerHTML: { __html: m } }),
              /* @__PURE__ */ i(
                "rect",
                {
                  width: "100%",
                  height: "100%",
                  fill: "none",
                  stroke: `${l}30`,
                  strokeWidth: "0.5",
                  strokeDasharray: "2,2"
                }
              )
            ]
          }
        ),
        r === "large" && /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              bottom: 8,
              left: 8,
              right: 8,
              textAlign: "center",
              zIndex: 2
            },
            children: /* @__PURE__ */ i(
              d,
              {
                sx: {
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: l,
                  textTransform: "none",
                  letterSpacing: "0.5px",
                  background: "rgba(255,255,255,0.9)",
                  padding: "2px 6px",
                  borderRadius: 1,
                  backdropFilter: "blur(4px)"
                },
                children: e.split("-").slice(0, 2).join(" ")
              }
            )
          }
        )
      ]
    }
  );
}, Ou = ({
  children: e,
  numberVariant: t = "primary",
  sx: r,
  ...n
}) => /* @__PURE__ */ i(
  d,
  {
    ...n,
    sx: {
      ...re.display.number,
      display: "inline-block",
      ...t === "outline" && {
        color: "transparent",
        WebkitTextStroke: (o) => `2px ${o.palette.mode === "light" ? "#000" : "#fff"}`
      },
      ...r
    },
    children: e
  }
), id = Li`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`, nn = ({
  status: e,
  size: t = 8,
  pulse: r,
  label: n,
  className: o
}) => {
  const a = b.telemetry[e], c = /* @__PURE__ */ i(
    d,
    {
      className: o,
      sx: {
        width: t,
        height: t,
        borderRadius: "50%",
        backgroundColor: a,
        color: a,
        // currentColor para el pulso
        flexShrink: 0,
        display: "inline-block",
        animation: r ?? (e === "online" || e === "starting") ? `${id} 2s ease-out infinite` : "none"
      }
    }
  );
  return n ? /* @__PURE__ */ f(
    d,
    {
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75
      },
      children: [
        c,
        /* @__PURE__ */ i(
          d,
          {
            component: "span",
            sx: {
              fontFamily: '"Necto Mono", monospace',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: a
            },
            children: n
          }
        )
      ]
    }
  ) : c;
}, ad = {
  "file-scan": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("circle", { cx: "11", cy: "15", r: "2" }),
    /* @__PURE__ */ i("path", { d: "m13.5 17.5 1.5 1.5" })
  ] }),
  package: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "m7.5 4.27 9 5.15" }),
    /* @__PURE__ */ i("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
    /* @__PURE__ */ i("path", { d: "m3.3 7 8.7 5 8.7-5" }),
    /* @__PURE__ */ i("path", { d: "M12 22V12" })
  ] }),
  grid: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  tag: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
    /* @__PURE__ */ i("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
  ] }),
  "clipboard-list": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
    /* @__PURE__ */ i("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ i("path", { d: "M12 11h4" }),
    /* @__PURE__ */ i("path", { d: "M12 16h4" }),
    /* @__PURE__ */ i("path", { d: "M8 11h.01" }),
    /* @__PURE__ */ i("path", { d: "M8 16h.01" })
  ] }),
  landmark: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("line", { x1: "3", y1: "22", x2: "21", y2: "22" }),
    /* @__PURE__ */ i("line", { x1: "6", y1: "18", x2: "6", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "18", x2: "10", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "14", y1: "18", x2: "14", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "18", y1: "18", x2: "18", y2: "11" }),
    /* @__PURE__ */ i("polygon", { points: "12 2 20 7 4 7" })
  ] }),
  "refresh-cw": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ i("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ i("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ i("path", { d: "M8 16H3v5" })
  ] }),
  diamond: /* @__PURE__ */ i("path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }),
  "trending-up": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    /* @__PURE__ */ i("polyline", { points: "16 7 22 7 22 13" })
  ] }),
  users: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ i("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ i("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ i("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  "rotate-cw": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M21 2v6h-6" }),
    /* @__PURE__ */ i("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" })
  ] }),
  power: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M12 2v6" }),
    /* @__PURE__ */ i("path", { d: "M18.4 5.6a9 9 0 1 1-12.77.04" })
  ] }),
  terminal: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  "external-link": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ i("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  "file-plus": /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
    /* @__PURE__ */ i("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
  ] }),
  calendar: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  logout: /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ i("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ i("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] })
}, sd = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}, lr = ({
  id: e,
  size: t = "sm",
  color: r = "currentColor",
  strokeWidth: n = 1.6
}) => {
  const o = typeof t == "number" ? t : sd[t];
  return /* @__PURE__ */ i(
    "svg",
    {
      width: o,
      height: o,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: r,
      strokeWidth: n,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { flexShrink: 0, display: "block" },
      children: ad[e] ?? null
    }
  );
}, zu = ({
  logo: e,
  title: t,
  subtitle: r,
  align: n = "left",
  variant: o = "dark",
  titleColor: a,
  subtitleColor: s
}) => /* @__PURE__ */ f(d, { sx: { textAlign: n, display: "flex", flexDirection: "column", alignItems: n === "center" ? "center" : "flex-start", gap: 0 }, children: [
  e && /* @__PURE__ */ i(d, { sx: { mb: 1.75, display: "inline-flex" }, children: e }),
  /* @__PURE__ */ i(
    d,
    {
      sx: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "0.22em",
        color: a ?? (o === "dark" ? "#F1F5F9" : "#0F172A"),
        lineHeight: 1
      },
      children: t
    }
  ),
  r && /* @__PURE__ */ i(
    d,
    {
      sx: {
        fontFamily: '"Necto Mono", monospace',
        fontSize: 9,
        color: s ?? (o === "dark" ? "#64748B" : "#94A3B8"),
        letterSpacing: "0.18em",
        mt: 0.5
      },
      children: r
    }
  )
] }), cd = kc;
function ld(e) {
  return hn("MuiSvgIcon", e);
}
ec("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const dd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ct(t)}`, `fontSize${Ct(r)}`]
  };
  return Nc(o, ld, n);
}, ud = vl("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Ct(r.color)}`], t[`fontSize${Ct(r.fontSize)}`]];
  }
})(cd(({
  theme: e
}) => {
  var t, r, n, o, a, s, c, l, u, m, g, y, p, S;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (x) => !x.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((s = (a = e.typography) == null ? void 0 : a.pxToRem) == null ? void 0 : s.call(a, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((l = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : l.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (u = e.typography) == null ? void 0 : u.pxToRem) == null ? void 0 : m.call(u, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, x]) => x && x.main).map(([x]) => {
        var C, w;
        return {
          props: {
            color: x
          },
          style: {
            color: (w = (C = (e.vars ?? e).palette) == null ? void 0 : C[x]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : y.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (S = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : S.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), dr = /* @__PURE__ */ B.forwardRef(function(t, r) {
  const n = wi({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: s = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: u,
    inheritViewBox: m = !1,
    titleAccess: g,
    viewBox: y = "0 0 24 24",
    ...p
  } = n, S = /* @__PURE__ */ B.isValidElement(o) && o.type === "svg", x = {
    ...n,
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: y,
    hasSvgAsChild: S
  }, C = {};
  m || (C.viewBox = y);
  const w = dd(x);
  return /* @__PURE__ */ f(ud, {
    as: c,
    className: Zo(w.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: r,
    ...C,
    ...p,
    ...S && o.props,
    ownerState: x,
    children: [S ? o.props.children : o, g ? /* @__PURE__ */ i("title", {
      children: g
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (dr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: T.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * @ignore
   */
  className: T.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: T.oneOfType([T.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), T.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: T.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: T.oneOfType([T.oneOf(["inherit", "large", "medium", "small"]), T.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: T.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: T.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: T.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: T.oneOfType([T.arrayOf(T.oneOfType([T.func, T.object, T.bool])), T.func, T.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: T.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: T.string
});
dr.muiName = "SvgIcon";
function Re(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ i(dr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = dr.muiName, /* @__PURE__ */ B.memo(/* @__PURE__ */ B.forwardRef(r));
}
const _i = Re(/* @__PURE__ */ i("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), pd = Re(/* @__PURE__ */ i("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), Pt = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
ue.log("VITE_MAKE_WEBHOOK_URL:", void 0);
ue.log("MAKE_API_CONFIG.webhookUrl:", Pt.webhookUrl);
const fd = async (e, t) => {
  const r = t || `session_${Date.now()}`;
  ue.log("Enviando request a Make.com:", {
    message: e,
    sessionId: r,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: Pt.webhookUrl
  });
  try {
    const n = await fetch(Pt.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...Pt.apiToken && {
          Authorization: `Bearer ${Pt.apiToken}`
        }
      },
      body: JSON.stringify({
        message: e,
        sessionId: r,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href
      })
    });
    if (ue.log("📥 Respuesta de Make.com:", {
      status: n.status,
      statusText: n.statusText,
      headers: Object.fromEntries(n.headers.entries())
    }), n.status === 429)
      return ue.error("Rate limit detectado, usando respuesta fallback"), {
        success: !1,
        error: "rate_limit"
      };
    if (!n.ok)
      throw new Error(`Error: ${n.status}`);
    let o;
    try {
      const a = await n.text();
      ue.log("Respuesta como texto:", a);
      try {
        o = JSON.parse(a), ue.log("Datos parseados:", o);
      } catch (s) {
        ue.error("Error parsing JSON, intentando limpiar:", s);
        const c = a.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        try {
          o = JSON.parse(c), ue.log("Respuesta limpiada y parseada:", o);
        } catch (l) {
          ue.error("Error final parseando JSON:", l), o = { message: a };
        }
      }
    } catch (a) {
      throw ue.error("Error obteniendo texto de respuesta:", a), new Error("Error al procesar la respuesta del servidor");
    }
    return {
      success: !0,
      message: (o == null ? void 0 : o.message) || o,
      data: o
    };
  } catch (n) {
    return ue.error("Error completo:", n), {
      success: !1,
      error: n instanceof Error ? n.message : "Error desconocido"
    };
  }
}, md = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, Ao = (e) => {
  const t = e.toLowerCase();
  return t.includes("hola") || t.includes("buenos días") || t.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : t.includes("servicios") || t.includes("qué hacen") || t.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : t.includes("precio") || t.includes("costo") || t.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : t.includes("contacto") || t.includes("teléfono") || t.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : t.includes("diagnóstico") || t.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, Mu = () => {
  const e = ye(), t = Nt(e.breakpoints.down("sm")), [r, n] = H(!1), [o] = H(() => md()), [a, s] = H([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    }
  ]), [c, l] = H(""), [u, m] = H(!1), [g, y] = H(""), p = Ht(null), S = Ge(() => n(!0), []), x = Ge(() => n(!1), []), C = Ge(() => {
    var A;
    (A = p.current) == null || A.scrollIntoView({ behavior: "smooth" });
  }, []);
  pe(() => {
    C();
  }, [a, C]);
  const w = Ge(async () => {
    var k;
    const A = c.trim();
    if (!A || u || A === g) return;
    if (A.length > 500) {
      const $ = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((q) => [...q, $]);
      return;
    }
    const _ = {
      id: Date.now().toString(),
      text: c.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    };
    s(($) => [...$, _]), y(A), l(""), m(!0);
    try {
      const $ = await fd(A, o);
      let q;
      $.success && ((k = $.data) != null && k.message) ? q = $.data.message : $.success && $.data && typeof $.data == "string" ? q = $.data : ($.error, q = Ao(A));
      const F = {
        id: (Date.now() + 1).toString(),
        text: q,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((D) => [...D, F]);
    } catch ($) {
      console.error("Error sending message:", $);
      const F = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((D) => [...D, F]);
    } finally {
      m(!1);
    }
  }, [c, u, o, g]), O = Ge((A) => {
    A.key === "Enter" && !A.shiftKey && !u && (A.preventDefault(), w());
  }, [w, u]);
  return /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i(
      Bi,
      {
        color: "primary",
        "aria-label": "chat",
        onClick: S,
        sx: {
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1e3,
          width: 60,
          height: 60,
          backgroundColor: e.palette.primary.main,
          color: e.palette.primary.contrastText,
          boxShadow: "0 4px 20px rgba(255, 69, 0, 0.3)",
          "&:hover": {
            backgroundColor: "rgba(255, 69, 0, 0.9)",
            boxShadow: "0 6px 25px rgba(255, 69, 0, 0.4)",
            transform: "scale(1.05)"
          },
          transition: "all 0.3s ease",
          p: 0,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ i(
          d,
          {
            component: "img",
            src: "/assets/images/robot-assistant.png",
            alt: "AI4U Assistant",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "brightness(0) invert(1)"
              // Hace el logo blanco
            }
          }
        )
      }
    ),
    /* @__PURE__ */ f(
      ji,
      {
        open: r,
        onClose: x,
        maxWidth: "sm",
        fullWidth: !0,
        fullScreen: t,
        slotProps: {
          paper: {
            sx: {
              borderRadius: { xs: 0, sm: 2 },
              height: { xs: "100%", sm: "70vh" },
              maxHeight: { xs: "100%", sm: "600px" }
            }
          }
        },
        children: [
          /* @__PURE__ */ f(
            Vi,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${we(e.palette.divider, 0.1)}`,
                pb: 2,
                mb: 0
              },
              children: [
                /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                  /* @__PURE__ */ i(
                    d,
                    {
                      component: "img",
                      src: "/assets/images/robot-assistant.png",
                      alt: "AI4U Assistant",
                      sx: {
                        width: 40,
                        height: 40,
                        objectFit: "contain"
                      }
                    }
                  ),
                  /* @__PURE__ */ f(d, { children: [
                    /* @__PURE__ */ i(P, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ i(P, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ i(De, { onClick: x, size: "small", children: /* @__PURE__ */ i(_i, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(
            Hi,
            {
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [
                /* @__PURE__ */ f(
                  d,
                  {
                    sx: {
                      flex: 1,
                      overflowY: "auto",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2
                    },
                    children: [
                      a.map((A) => /* @__PURE__ */ i(
                        d,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: A.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ f(
                            Wt,
                            {
                              sx: {
                                p: 2,
                                maxWidth: "80%",
                                backgroundColor: A.isUser ? e.palette.primary.main : we(e.palette.background.paper, 0.8),
                                color: A.isUser ? e.palette.primary.contrastText : e.palette.text.primary,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              },
                              children: [
                                /* @__PURE__ */ i(P, { variant: "body2", children: A.text }),
                                /* @__PURE__ */ i(
                                  P,
                                  {
                                    variant: "caption",
                                    sx: {
                                      opacity: 0.7,
                                      display: "block",
                                      mt: 0.5
                                    },
                                    children: A.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        },
                        A.id
                      )),
                      u && /* @__PURE__ */ i(d, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ i(
                        Wt,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: we(e.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ i(Ui, { size: 16 }),
                            /* @__PURE__ */ i(P, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ i("div", { ref: p })
                    ]
                  }
                ),
                /* @__PURE__ */ f(
                  d,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${we(e.palette.divider, 0.1)}`
                    },
                    children: [
                      c.length > 400 && /* @__PURE__ */ f(
                        P,
                        {
                          variant: "caption",
                          color: c.length > 500 ? "error" : "warning.main",
                          sx: { mb: 1, display: "block", textAlign: "right" },
                          children: [
                            c.length,
                            "/500"
                          ]
                        }
                      ),
                      /* @__PURE__ */ f(
                        d,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ i(
                              No,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: u ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: c,
                                onChange: (A) => l(A.target.value),
                                onKeyPress: O,
                                disabled: u,
                                variant: "outlined",
                                size: "small",
                                sx: {
                                  "& .MuiOutlinedInput-root": {
                                    borderRadius: 2
                                  }
                                }
                              }
                            ),
                            /* @__PURE__ */ i(
                              De,
                              {
                                onClick: w,
                                disabled: !c.trim() || u,
                                color: "primary",
                                sx: {
                                  backgroundColor: e.palette.primary.main,
                                  color: e.palette.primary.contrastText,
                                  "&:hover": {
                                    backgroundColor: "rgba(255, 69, 0, 0.9)"
                                  },
                                  "&:disabled": {
                                    backgroundColor: we(e.palette.action.disabled, 0.12),
                                    color: e.palette.action.disabled
                                  }
                                },
                                children: /* @__PURE__ */ i(pd, {})
                              }
                            )
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}, hd = Re(/* @__PURE__ */ i("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work"), Pu = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n = "Nuestros Servicios",
  className: o,
  sx: a
}) => {
  const s = sn();
  return /* @__PURE__ */ i(
    $r,
    {
      variant: e,
      size: t,
      onClick: () => {
        s("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: r ? /* @__PURE__ */ i(hd, {}) : void 0,
      className: o,
      sx: a,
      children: n
    }
  );
}, gd = Ce(on, {
  shouldForwardProp: (e) => e !== "cardVariant" && e !== "forceMode" && e !== "dashboardColors"
})(({ theme: e, cardVariant: t, forceMode: r, dashboardColors: n }) => {
  const o = r ? r === "light" : e.palette.mode === "light", a = {
    borderRadius: 0,
    // Brutalist zero radius
    transition: "all 0.2s steps(4, end)",
    position: "relative",
    overflow: "hidden",
    backgroundColor: o ? b.white : b.black,
    color: o ? b.black : b.white,
    border: `1px solid ${o ? b.black : b.white}`,
    boxShadow: "none"
  };
  switch (t) {
    case "dashboard":
      return {
        ...a,
        borderRadius: qe.radius.sm,
        backgroundColor: (n == null ? void 0 : n.background) ?? a.backgroundColor,
        color: (n == null ? void 0 : n.text) ?? a.color,
        border: `1px solid ${(n == null ? void 0 : n.border) ?? a.border}`
      };
    case "elevated":
      return {
        ...a,
        border: `2px solid ${o ? b.black : b.white}`,
        "&:hover": {
          transform: "translate(-4px, -4px)",
          boxShadow: o ? `8px 8px 0px ${b.black}` : `8px 8px 0px ${b.white}`
        }
      };
    case "outlined":
      return {
        ...a,
        backgroundColor: "transparent",
        border: `1px solid ${o ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}`,
        "&:hover": {
          borderColor: o ? b.black : b.white,
          bgcolor: o ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"
        }
      };
    case "industrial":
      return {
        ...a,
        border: `4px solid ${o ? b.black : b.white}`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40px",
          borderBottom: `1px solid ${o ? b.black : b.white}`,
          zIndex: 0
        }
      };
    default:
      return a;
  }
}), xd = Ce(d)(({ theme: e }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...re.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), Ar = ({
  children: e,
  variant: t = "default",
  elevation: r = 0,
  showContent: n = !0,
  label: o,
  sx: a,
  ...s
}) => {
  const c = X(), l = t === "dashboard" ? { background: c.contrast.surface, text: c.contrast.text.primary, border: c.contrast.border } : void 0;
  return /* @__PURE__ */ f(
    gd,
    {
      cardVariant: t,
      elevation: r,
      forceMode: c.effectiveMode,
      dashboardColors: l,
      sx: a,
      ...s,
      children: [
        o && /* @__PURE__ */ f(xd, { children: [
          '"',
          o,
          '"'
        ] }),
        n && /* @__PURE__ */ i(Vt, { sx: {
          padding: { xs: 3, md: 4 },
          pt: o ? 6 : { xs: 3, md: 4 },
          // Add padding if label exists
          "&:last-child": { paddingBottom: { xs: 3, md: 4 } },
          position: "relative",
          zIndex: 1
        }, children: e })
      ]
    }
  );
}, Fu = ({
  title: e,
  subtitle: t = "",
  transactions: r,
  onShowMore: n = () => {
  },
  variant: o = "elevated"
}) => {
  const a = X(), s = () => {
    switch (o) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${a.contrast.divider}`,
            color: a.contrast.text.primary
          },
          surface: {
            background: a.contrast.surface,
            border: "none"
          }
        };
      case "elevated":
        return {
          card: {
            background: a.contrast.surface,
            border: "none",
            color: a.contrast.text.primary,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          },
          surface: {
            background: a.contrast.background,
            border: "none"
          }
        };
      default:
        return {
          card: {
            background: a.contrast.surface,
            border: "none",
            color: a.contrast.text.primary
          },
          surface: {
            background: a.contrast.background,
            border: "none"
          }
        };
    }
  }, c = (m) => ({
    Shopping: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(ga, {})
    },
    Fitness: {
      bg: a.palette.success + "20",
      text: a.palette.success,
      icon: /* @__PURE__ */ i(ha, {})
    },
    Education: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(ma, {})
    },
    Investments: {
      bg: a.palette.success + "20",
      text: a.palette.success,
      icon: /* @__PURE__ */ i(fa, {})
    },
    Health: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(pa, {})
    }
  })[m] || {
    bg: a.helpers.background.secondary,
    text: a.helpers.text.secondary,
    icon: /* @__PURE__ */ i(ua, {})
  }, l = (m) => {
    switch (m) {
      case "completed":
        return a.palette.success;
      case "pending":
        return a.palette.accent;
      case "failed":
        return "#DC2626";
      default:
        return a.palette.success;
    }
  }, u = s();
  return /* @__PURE__ */ i(
    Ar,
    {
      variant: o,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...u.card
      },
      children: /* @__PURE__ */ f(Vt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(Fn, { sx: {
              width: 48,
              height: 48,
              background: u.surface.background,
              border: u.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ i(da, { sx: {
              color: a.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ f(d, { children: [
              /* @__PURE__ */ i(Ae, { sx: {
                color: a.helpers.text.primary,
                mb: 0.5
              }, children: e }),
              t && /* @__PURE__ */ i(de, { sx: {
                color: a.helpers.text.secondary
              }, children: t })
            ] })
          ] }),
          /* @__PURE__ */ i(
            De,
            {
              size: "small",
              sx: {
                color: a.helpers.text.secondary,
                "&:hover": {
                  background: a.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ i(Nn, {})
            }
          )
        ] }),
        /* @__PURE__ */ i(d, { sx: { mb: 3 }, children: r.map((m) => {
          const g = c(m.category);
          return /* @__PURE__ */ f(
            d,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2.5,
                mb: 2,
                borderRadius: 3,
                background: u.surface.background,
                border: u.surface.border,
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: a.helpers.state.hover,
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ i(Fn, { sx: {
                  width: 48,
                  height: 48,
                  background: g.bg,
                  color: g.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: m.icon || g.icon }),
                /* @__PURE__ */ f(d, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ f(d, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ i(Ae, { sx: {
                      fontWeight: 400,
                      color: a.helpers.text.primary
                    }, children: m.merchant }),
                    /* @__PURE__ */ f(Yt, { sx: {
                      fontWeight: 400,
                      color: a.helpers.text.primary
                    }, children: [
                      "$",
                      m.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ f(d, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ i(
                      vt,
                      {
                        label: m.category,
                        size: "small",
                        sx: {
                          backgroundColor: g.bg,
                          color: g.text,
                          fontSize: "0.75rem",
                          height: 24,
                          fontWeight: 400,
                          "& .MuiChip-label": {
                            px: 1.5
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ i(de, { sx: {
                        color: a.helpers.text.secondary
                      }, children: m.time }),
                      m.status && /* @__PURE__ */ i(d, { sx: {
                        width: 8,
                        height: 8,
                        backgroundColor: l(m.status),
                        borderRadius: "50%"
                      } })
                    ] })
                  ] })
                ] })
              ]
            },
            m.id
          );
        }) }),
        n && /* @__PURE__ */ f(Se, { children: [
          /* @__PURE__ */ i(ur, { sx: {
            mb: 3,
            borderColor: a.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ f(d, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(
              De,
              {
                onClick: n,
                sx: {
                  width: 48,
                  height: 48,
                  background: a.palette.accent,
                  color: a.palette.white,
                  "&:hover": {
                    background: "#E54A00",
                    transform: "scale(1.05)"
                  },
                  transition: "all 0.2s ease"
                },
                children: /* @__PURE__ */ i(Nn, {})
              }
            ),
            /* @__PURE__ */ i(de, { sx: {
              mt: 1,
              color: a.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Explorar más" })
          ] })
        ] })
      ] })
    }
  );
}, yd = Ce(P)(({ stepSize: e, theme: t }) => ({
  fontSize: e === "small" ? "2rem" : e === "large" ? "4rem" : "3rem",
  fontWeight: 400,
  lineHeight: 0.9,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: "-0.02em",
  color: t.palette.text.primary,
  [t.breakpoints.down("md")]: {
    fontSize: e === "small" ? "1.8rem" : e === "large" ? "3.5rem" : "2.5rem"
  },
  [t.breakpoints.down("sm")]: {
    fontSize: e === "small" ? "1.5rem" : e === "large" ? "3rem" : "2.2rem"
  },
  [t.breakpoints.down("xs")]: {
    fontSize: e === "small" ? "1.3rem" : e === "large" ? "2.5rem" : "2rem"
  }
})), Du = ({
  number: e,
  title: t,
  description: r,
  color: n = "primary.main",
  size: o = "medium",
  sx: a,
  ...s
}) => {
  const c = X(), l = () => {
    switch (o) {
      case "small":
        return {
          numberSize: 60,
          fontSize: "2rem",
          titleSize: "1rem",
          descriptionSize: "0.85rem"
        };
      case "large":
        return {
          numberSize: 100,
          fontSize: "4rem",
          titleSize: "1.3rem",
          descriptionSize: "1rem"
        };
      default:
        return {
          numberSize: 80,
          fontSize: "3rem",
          titleSize: "1.1rem",
          descriptionSize: "0.9rem"
        };
    }
  }, { numberSize: u, titleSize: m, descriptionSize: g } = l();
  return /* @__PURE__ */ f(
    d,
    {
      sx: {
        display: "flex",
        mb: 2,
        alignItems: "flex-start",
        p: 2,
        borderRadius: 2,
        background: c.contrast.surface,
        border: `1px solid ${c.contrast.border}`,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: c.contrast.text.secondary,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        },
        ...a
      },
      ...s,
      children: [
        /* @__PURE__ */ i(
          d,
          {
            sx: {
              width: u,
              height: u,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mr: 3,
              position: "relative",
              borderRadius: "50%",
              background: c.contrast.background,
              border: `2px solid ${c.contrast.text.secondary}`
            },
            children: /* @__PURE__ */ i(
              yd,
              {
                stepSize: o,
                sx: {
                  textAlign: "center",
                  fontWeight: 400,
                  color: c.contrast.text.secondary
                },
                children: e
              }
            )
          }
        ),
        /* @__PURE__ */ f(d, { sx: { flex: 1, pt: o === "large" ? 1.5 : o === "medium" ? 1 : 0.5 }, children: [
          /* @__PURE__ */ i(
            Ie,
            {
              sx: {
                fontWeight: 400,
                fontSize: m,
                mb: 1,
                color: c.contrast.text.primary,
                lineHeight: 1.3,
                letterSpacing: "-0.01em"
              },
              children: t
            }
          ),
          /* @__PURE__ */ i(
            Ie,
            {
              sx: {
                fontSize: g,
                lineHeight: 1.5,
                color: c.contrast.text.secondary,
                fontWeight: 400
              },
              children: r
            }
          )
        ] })
      ]
    }
  );
}, bd = Ce(d)(({ theme: e }) => {
  const t = e.palette.mode === "light";
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px",
    marginBottom: "8px",
    border: `1px solid ${t ? "#000" : "#fff"}`,
    transition: "all 0.1s steps(2)",
    "&:hover": {
      backgroundColor: t ? "#000" : "#fff",
      color: t ? "#fff" : "#000",
      transform: "translateX(4px)"
    }
  };
}), Nu = ({
  title: e,
  subtitle: t = "",
  categories: r,
  totalAmount: n = 0,
  onAddCategory: o = () => {
  },
  variant: a = "industrial"
}) => {
  const s = X(), c = s.effectiveMode === "light";
  return /* @__PURE__ */ f(
    Ar,
    {
      variant: a,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ i(d, { sx: { mb: 4 }, children: /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ i(d, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${c ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: c ? "#000" : "#fff",
            color: c ? "#fff" : "#000"
          }, children: /* @__PURE__ */ i(xa, {}) }),
          /* @__PURE__ */ f(d, { children: [
            /* @__PURE__ */ i(P, { sx: { ...re.display.medium, fontSize: "1.5rem", mb: 0 }, children: e }),
            t && /* @__PURE__ */ f(P, { sx: { ...re.label.secondary }, children: [
              "// ",
              t
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ f(d, { sx: {
          p: 3,
          border: `4px solid ${c ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ f(d, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ f(Yt, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              n == null ? void 0 : n.toLocaleString()
            ] }),
            /* @__PURE__ */ i(
              De,
              {
                onClick: o,
                sx: {
                  borderRadius: 0,
                  border: `2px solid ${c ? "#000" : "#fff"}`,
                  bgcolor: s.palette.accentColors.mint,
                  color: "#000",
                  "&:hover": {
                    bgcolor: s.palette.accentColors.orange
                  }
                },
                children: /* @__PURE__ */ i(ya, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ i(d, { sx: { mb: 4 }, children: r.map((l, u) => /* @__PURE__ */ f(bd, { children: [
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(P, { sx: { ...re.label.secondary, opacity: 0.5 }, children: String(u + 1).padStart(2, "0") }),
            /* @__PURE__ */ i(P, { sx: { fontWeight: 700 }, children: l.name })
          ] }),
          /* @__PURE__ */ f(P, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            l.amount.toLocaleString()
          ] })
        ] }, u)) }),
        /* @__PURE__ */ f(d, { sx: {
          pt: 2,
          borderTop: `1px dashed ${c ? "#000" : "#fff"}`,
          opacity: 0.5,
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ i(P, { sx: { ...re.label.secondary }, children: "SYSTEM_VERSION_2.0.4" }),
          /* @__PURE__ */ i(P, { sx: { ...re.label.secondary }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ]
    }
  );
}, Sd = Ce(P, {
  shouldForwardProp: (e) => e !== "metricSize"
})(({ metricSize: e, theme: t }) => ({
  fontSize: e === "compact" ? "3rem" : e === "large" ? "7rem" : "5rem",
  fontWeight: 900,
  // Brutalist impact
  lineHeight: 0.85,
  fontFamily: '"Red Hat Display", sans-serif',
  letterSpacing: "-0.05em",
  margin: 0,
  padding: 0,
  color: "inherit",
  [t.breakpoints.down("sm")]: {
    fontSize: e === "compact" ? "2.5rem" : e === "large" ? "4rem" : "3.5rem"
  }
})), vd = Ce(d)(({ theme: e }) => ({
  ...re.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), Wu = (e) => {
  const {
    title: t,
    value: r,
    subtitle: n,
    iconType: o = "dot",
    trend: a = "neutral",
    size: s = "normal",
    onClick: c,
    label: l = "METRIC_SYSTEM"
  } = e, u = X();
  u.effectiveMode;
  const m = () => {
    switch (a) {
      case "up":
        return u.palette.accentColors.mint;
      case "down":
        return u.palette.accentColors.orange;
      default:
        return "inherit";
    }
  };
  return /* @__PURE__ */ f(
    on,
    {
      onClick: c,
      sx: {
        cursor: c ? "pointer" : "default",
        minHeight: (g) => s === "compact" ? g.spacing(20) : s === "large" ? g.spacing(40) : g.spacing(25),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // Functional left alignment
        p: 4,
        position: "relative",
        overflow: "hidden",
        bgcolor: u.helpers.background.primary,
        color: u.helpers.text.primary,
        borderRadius: 0,
        border: `2px solid ${u.helpers.text.primary}`,
        // Radical Industrial Border
        transition: "all 0.15s steps(4, end)",
        "&:hover": {
          transform: c ? "translate(-4px, -4px)" : "none",
          boxShadow: c ? `8px 8px 0px 0px ${u.helpers.text.primary}` : "none",
          "& .metric-bg": { opacity: 0.1 }
        }
      },
      children: [
        /* @__PURE__ */ f(vd, { children: [
          '"',
          l,
          '"'
        ] }),
        /* @__PURE__ */ i(
          d,
          {
            className: "metric-bg",
            sx: {
              position: "absolute",
              bottom: -20,
              right: -10,
              opacity: 0.05,
              fontSize: "10rem",
              fontWeight: 900,
              pointerEvents: "none",
              transition: "all 0.3s"
            },
            children: o === "dot" ? "•" : "#"
          }
        ),
        /* @__PURE__ */ i(d, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ i(Sd, { metricSize: s, children: typeof r == "number" ? r.toLocaleString() : r }) }),
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 1,
          width: "100%",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ i(
            P,
            {
              sx: {
                ...re.label.main,
                color: "inherit"
              },
              children: t
            }
          ),
          a !== "neutral" && /* @__PURE__ */ i(d, { sx: { color: m(), display: "flex" }, children: /* @__PURE__ */ i(
            sr,
            {
              type: "triangle",
              size: "small",
              color: "inherit",
              variant: "filled",
              sx: { transform: a === "down" ? "rotate(180deg)" : "none" }
            }
          ) })
        ] }),
        n && /* @__PURE__ */ i(
          P,
          {
            sx: {
              ...re.body.small,
              color: "inherit",
              opacity: 0.6,
              maxWidth: "90%",
              position: "relative",
              zIndex: 1
            },
            children: n
          }
        ),
        /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 4,
              bgcolor: a !== "neutral" ? m() : "transparent",
              opacity: 0.8
            }
          }
        )
      ]
    }
  );
}, wd = ({ open: e, onClose: t, children: r, maxWidth: n = 560, sx: o }) => {
  const a = ye(), s = Nt(a.breakpoints.down("sm")), { contrast: c } = X();
  return pe(() => {
    if (!e) return;
    const l = (u) => {
      u.key === "Escape" && t();
    };
    return document.addEventListener("keydown", l), () => document.removeEventListener("keydown", l);
  }, [e, t]), e ? /* @__PURE__ */ i(
    d,
    {
      onClick: t,
      "data-testid": "modal-overlay",
      sx: {
        position: "fixed",
        inset: 0,
        zIndex: Wi.modal,
        backgroundColor: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: s ? "flex-end" : "center",
        justifyContent: "center",
        padding: s ? 0 : "24px"
      },
      children: /* @__PURE__ */ f(
        d,
        {
          onClick: (l) => l.stopPropagation(),
          sx: {
            position: "relative",
            width: s ? "100%" : "auto",
            maxWidth: s ? "100%" : n,
            maxHeight: "90vh",
            backgroundColor: c.surface,
            color: c.text.primary,
            borderRadius: s ? `${qe.radius.md} ${qe.radius.md} 0 0` : qe.radius.md,
            overflow: "auto",
            ...o
          },
          children: [
            /* @__PURE__ */ i(
              $r,
              {
                variant: "dashboard",
                iconOnly: !0,
                onClick: t,
                "aria-label": "Cerrar",
                sx: {
                  position: "absolute",
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  color: "#fff",
                  border: "none",
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" }
                },
                children: "✕"
              }
            ),
            r
          ]
        }
      )
    }
  ) : null;
}, Lu = ({ src: e, alt: t = "", open: r, onClose: n }) => /* @__PURE__ */ i(wd, { open: r, onClose: n, maxWidth: "90vw", sx: { backgroundColor: "transparent", overflow: "visible" }, children: /* @__PURE__ */ i(
  d,
  {
    component: "img",
    src: e,
    alt: t,
    sx: {
      display: "block",
      maxWidth: "100%",
      maxHeight: "85vh",
      width: "auto",
      height: "auto",
      objectFit: "contain",
      borderRadius: "8px"
    }
  }
) }), Cd = Re(/* @__PURE__ */ i("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), Me = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, kd = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
b.accent, b.gray[600], b.success, b.warning, b.error, b.info;
Jt.sm, Jt.md, Jt.lg;
const Ed = `https://${kd.CONTACT.CALENDLY}`, Tn = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n,
  className: o,
  sx: a
}) => /* @__PURE__ */ i(
  $r,
  {
    variant: e,
    size: t,
    onClick: () => {
      Ti.trackConsultationRequest("calendly", "diagnostic"), window.open(Ed, "_blank", "noopener,noreferrer");
    },
    startIcon: r ? /* @__PURE__ */ i(Cd, {}) : void 0,
    className: o,
    sx: a,
    children: n || "Diagnóstico gratis"
  }
), Bu = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI4U",
  url: "https://www.ai4u.com.co",
  description: "Soluciones de Inteligencia Artificial personalizadas para tu negocio",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.ai4u.com.co/servicios?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}), ju = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Inteligencia Artificial",
  description: "Catálogo completo de servicios de IA personalizados",
  url: "https://www.ai4u.com.co/servicios",
  numberOfItems: 4,
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Operación",
      description: "Eficiencia continua. Optimiza tiempo y recursos.",
      url: "https://www.ai4u.com.co/servicios#OPERATION"
    },
    {
      "@type": "Service",
      position: 2,
      name: "Estrategia",
      description: "Data real. Decisiones con ventaja competitiva.",
      url: "https://www.ai4u.com.co/servicios#STRATEGY"
    },
    {
      "@type": "Service",
      position: 3,
      name: "Educación",
      description: "Evolución humana. Tu equipo dominando la IA.",
      url: "https://www.ai4u.com.co/servicios#EDUCATION"
    },
    {
      "@type": "Service",
      position: 4,
      name: "Transformación",
      description: "Infraestructura IA. Diseñada para escalar.",
      url: "https://www.ai4u.com.co/servicios#TRANSFORMATION"
    }
  ]
}), Td = (e) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: e.title,
  description: e.description,
  provider: {
    "@type": "Organization",
    name: "AI4U",
    url: "https://www.ai4u.com.co"
  },
  areaServed: {
    "@type": "Country",
    name: "Colombia"
  },
  serviceType: e.category,
  offers: {
    "@type": "Offer",
    price: e.price || "Consultar",
    priceCurrency: "COP",
    availability: "https://schema.org/InStock"
  }
}), Vu = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Casos de Uso de IA",
  description: "Casos de éxito y aplicaciones de inteligencia artificial",
  url: "https://www.ai4u.com.co/casos-de-uso",
  itemListElement: [
    {
      "@type": "CreativeWork",
      position: 1,
      name: "Automatización de Atención al Cliente",
      description: "Chatbots inteligentes para atención 24/7"
    },
    {
      "@type": "CreativeWork",
      position: 2,
      name: "Análisis de Datos Empresariales",
      description: "Machine Learning para insights de negocio"
    },
    {
      "@type": "CreativeWork",
      position: 3,
      name: "Optimización de Procesos",
      description: "IA para mejorar eficiencia operacional"
    }
  ]
}), Hu = (e) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: e.map((t) => ({
    "@type": "Question",
    name: t.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: t.answer
    }
  }))
}), Id = (e) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: e.map((t, r) => ({
    "@type": "ListItem",
    position: r + 1,
    name: t.name,
    item: t.url
  }))
}), Uu = (e) => {
  const t = {
    home: {
      title: "AI4U - Recupera tu Tiempo con Equipos de Agentes de IA",
      description: "El tiempo es oro. Te ayudamos a crear y administrar tu equipo de agentes de IA para orquestar tu libertad operativa. Infraestructura privada y segura.",
      keywords: "infraestructura IA, agentes de IA, orquestación IA, digital workforce, AI4U, SuperAI, automatización empresarial, Colombia"
    },
    services: {
      title: "Servicios de Inteligencia Artificial | AI4U",
      description: "Soluciones de IA organizadas en 4 ejes: Operación, Estrategia, Educación y Transformación. IA diseñada para resolver problemas reales.",
      keywords: "servicios IA, operación IA, estrategia IA, educación IA, transformación digital IA, SuperAI"
    },
    why: {
      title: "¿Por qué AI4U? | Casos de Éxito e Infraestructura de IA",
      description: "Descubre por qué somos tu mejor aliado en IA. Explora nuestros casos de éxito y la metodología que genera resultados reales.",
      keywords: "por qué AI4U, casos de éxito IA, ventajas IA, experiencia inteligencia artificial, resultados IA, Colombia"
    },
    portfolio: {
      title: "Portafolio de Innovación | Proyectos de IA | AI4U",
      description: "Explora nuestro portafolio de innovación. Proyectos reales de IA aplicados a diferentes industrias: desde Fashion Tech hasta E-Mobility.",
      keywords: "portafolio innovación, proyectos IA, casos éxito IA, IA aplicada, Fashion Tech IA, E-Mobility IA"
    }
  };
  return t[e] || t.home;
}, Gu = (e = "") => `https://www.ai4u.com.co${e}`, Yu = (e, t = 160) => e.length <= t ? e : e.substring(0, t - 3) + "...", qu = (e, t = []) => [...e, ...t].join(", "), Ku = ({
  service: e,
  showPrice: t = !0,
  compact: r = !1,
  onClick: n
}) => {
  const o = X(), a = Td(e), c = ((l) => {
    const u = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return l.filter((m) => m.startsWith("eje:")).map((m) => u[m] || m.replace("eje:", ""));
  })(e.tags);
  return /* @__PURE__ */ f(Se, { children: [
    /* @__PURE__ */ i(
      Ai,
      {
        structuredData: a,
        noIndex: !0
      }
    ),
    /* @__PURE__ */ i(d, { sx: {
      height: "100%",
      position: "relative",
      transition: "all 0.2s ease",
      "&:hover": {
        "& .service-card-content": {
          borderColor: e.color || o.contrast.text.primary
        }
      }
    }, children: /* @__PURE__ */ f(
      d,
      {
        className: "service-card-content",
        onClick: n,
        sx: {
          p: r ? 2.5 : 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: b.white,
          // Siempre blanco para máximo contraste "sticker"
          border: `3px solid ${b.black}`,
          // Siempre borde negro
          borderRadius: 0,
          transition: "all 0.1s ease",
          overflow: "hidden",
          boxShadow: `4px 4px 0px ${e.color || b.black}`,
          cursor: n ? "pointer" : "default",
          "&:hover": {
            transform: n ? "translate(-2px, -2px)" : "none",
            boxShadow: n ? `8px 8px 0px ${e.color || b.black}` : `4px 4px 0px ${e.color || b.black}`
          }
        },
        children: [
          /* @__PURE__ */ i(d, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: c.map((l, u) => /* @__PURE__ */ i(
            vt,
            {
              label: l,
              size: "small",
              sx: {
                background: b.black,
                color: b.white,
                fontWeight: 400,
                fontSize: "0.6rem",
                height: 20,
                borderRadius: 0,
                textTransform: "none",
                letterSpacing: "0.1em",
                "& .MuiChip-label": {
                  px: 1
                }
              }
            },
            u
          )) }),
          /* @__PURE__ */ f(d, { sx: {
            mb: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            /* @__PURE__ */ i(
              P,
              {
                sx: {
                  color: b.black,
                  // Forzar negro para el título
                  fontSize: { xs: "1.4rem", md: "1.8rem" },
                  fontWeight: 400,
                  lineHeight: 1.1,
                  textAlign: "left",
                  textTransform: "none",
                  mb: 2,
                  display: "flex",
                  alignItems: "flex-start",
                  "&::before": {
                    content: '"■"',
                    color: e.color || b.black,
                    mr: 1.5,
                    fontSize: "1.2rem"
                  }
                },
                children: e.title
              }
            ),
            /* @__PURE__ */ i(Ie, { sx: {
              lineHeight: 1.4,
              color: b.black,
              // Forzar negro para el cuerpo
              fontSize: "1rem",
              textAlign: "left",
              mb: 0,
              fontWeight: 400,
              opacity: 0.9,
              pl: 4
            }, children: e.description })
          ] }),
          /* @__PURE__ */ i(d, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${o.contrast.divider}`
          }, children: t && /* @__PURE__ */ f(d, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }, children: [
            /* @__PURE__ */ i(Ie, { sx: {
              fontWeight: 400,
              color: o.contrast.text.secondary,
              fontSize: "0.85rem"
            }, children: "Precio:" }),
            /* @__PURE__ */ i(P, { sx: {
              fontWeight: 400,
              color: o.contrast.text.primary,
              fontSize: "1.1rem"
            }, children: e.price })
          ] }) })
        ]
      }
    ) })
  ] });
}, Xu = ({
  items: e,
  showHome: t = !0
}) => {
  const r = sn(), n = t ? [{ name: "Inicio", path: "/" }, ...e] : e, o = Id(
    n.map((s) => ({
      name: s.name,
      url: `https://ai4u.com.co${s.path}`
    }))
  ), a = (s) => {
    r(s);
  };
  return /* @__PURE__ */ f(d, { children: [
    /* @__PURE__ */ i(Ai, { structuredData: o }),
    /* @__PURE__ */ i(
      d,
      {
        component: "nav",
        "aria-label": "Breadcrumb",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          py: 2,
          px: { xs: 2, md: 0 },
          fontSize: "0.875rem",
          color: "text.secondary"
        },
        children: n.map((s, c) => [
          c > 0 && /* @__PURE__ */ i(
            P,
            {
              component: "span",
              sx: {
                mx: 1,
                color: "text.disabled",
                fontSize: "0.75rem"
              },
              children: "/"
            },
            `separator-${c}`
          ),
          s.current ? /* @__PURE__ */ i(
            P,
            {
              component: "span",
              sx: {
                color: "text.primary",
                fontWeight: 400,
                fontSize: "inherit"
              },
              children: s.name
            },
            s.path
          ) : /* @__PURE__ */ i(
            Do,
            {
              component: "button",
              onClick: () => a(s.path),
              sx: {
                color: "text.secondary",
                textDecoration: "none",
                fontSize: "inherit",
                "&:hover": {
                  color: "primary.main",
                  textDecoration: "underline"
                }
              },
              children: s.name
            },
            s.path
          )
        ].filter(Boolean))
      }
    )
  ] });
};
class Qu extends ia {
  constructor(r) {
    super(r);
    Ve(this, "handleRetry", () => {
      this.setState({ hasError: !1, error: void 0, errorInfo: void 0 });
    });
    this.state = { hasError: !1 };
  }
  static getDerivedStateFromError(r) {
    return {
      hasError: !0,
      error: r
    };
  }
  componentDidCatch(r, n) {
    this.setState({ errorInfo: n }), Ll.captureError({
      message: r.message,
      stack: r.stack,
      componentStack: n.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(r, n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ i(Ke, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ f(
      d,
      {
        sx: {
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        },
        children: [
          /* @__PURE__ */ f(
            Gi,
            {
              severity: "error",
              sx: {
                width: "100%",
                borderRadius: 2,
                "& .MuiAlert-message": {
                  width: "100%"
                }
              },
              children: [
                /* @__PURE__ */ i(Yi, { children: /* @__PURE__ */ i(Ii, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ i(Ie, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ f(d, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ i(
              Ze,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ i(ba, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ i(
              Ze,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ i(
              Ze,
              {
                variant: "text",
                onClick: () => window.location.href = "/",
                sx: { minWidth: 120 },
                children: "Ir al Inicio"
              }
            )
          ] }),
          /* @__PURE__ */ i(Ie, { sx: { color: "text.secondary", fontSize: "0.875rem" }, children: "Si el problema persiste, por favor contacta nuestro soporte técnico." })
        ]
      }
    ) }) : this.props.children;
  }
}
const Ju = (e) => {
  const {
    pages: t,
    title: r,
    variant: n = "vertical",
    className: o
  } = e, a = X(), s = "También podrías estar interesado en:", c = t.slice(0, 3);
  if (c.length === 0) return null;
  const l = () => n === "horizontal" ? /* @__PURE__ */ i(
    he,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: c.map((u, m) => /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ f(d, { children: [
          /* @__PURE__ */ i(
            Dt,
            {
              href: u.href,
              variant: "subtle",
              ariaLabel: u.context || u.label,
              children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: u.label })
            }
          ),
          u.context && /* @__PURE__ */ i(
            de,
            {
              sx: {
                color: a.contrast.text.secondary,
                fontSize: "0.75rem",
                mt: 0.5,
                display: "block"
              },
              children: u.context
            }
          )
        ] }),
        m < c.length - 1 && /* @__PURE__ */ i(od, { variant: "separator", size: "small" })
      ] }, u.href))
    }
  ) : /* @__PURE__ */ i(he, { spacing: 3, children: c.map((u) => /* @__PURE__ */ f(d, { children: [
    /* @__PURE__ */ i(
      Dt,
      {
        href: u.href,
        variant: "subtle",
        ariaLabel: u.context || u.label,
        children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: u.label })
      }
    ),
    u.context && /* @__PURE__ */ i(
      de,
      {
        sx: {
          color: a.contrast.text.secondary,
          fontSize: "0.75rem",
          mt: 0.5,
          display: "block"
        },
        children: u.context
      }
    )
  ] }, u.href)) });
  return /* @__PURE__ */ f(
    d,
    {
      className: o,
      sx: {
        py: 4,
        borderTop: `1px solid ${a.contrast.divider}`,
        borderBottom: `1px solid ${a.contrast.divider}`,
        backgroundColor: a.contrast.surface
      },
      children: [
        /* @__PURE__ */ i(
          de,
          {
            sx: {
              color: a.contrast.text.secondary,
              fontWeight: 400,
              mb: 3,
              fontSize: "0.8rem",
              textTransform: "none",
              letterSpacing: "0.5px"
            },
            children: r || s
          }
        ),
        l()
      ]
    }
  );
}, Zu = (e) => {
  const {
    serviceName: t,
    serviceSlug: r,
    description: n,
    caseStudy: o,
    variant: a = "minimal",
    className: s
  } = e, c = X();
  return a === "minimal" ? /* @__PURE__ */ f(d, { className: s, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ i(
      Dt,
      {
        href: `/servicios#${r}`,
        variant: "inline",
        ariaLabel: `Conoce más sobre ${t}`,
        children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400 }, children: t })
      }
    ),
    /* @__PURE__ */ i(
      sr,
      {
        type: "circle",
        size: "small",
        color: c.contrast.text.disabled,
        variant: "minimal"
      }
    )
  ] }) : /* @__PURE__ */ i(
    d,
    {
      className: s,
      sx: {
        p: 3,
        borderRadius: 2,
        backgroundColor: c.contrast.surface,
        border: `1px solid ${c.contrast.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: c.palette.accent,
          backgroundColor: c.palette.white
        }
      },
      children: /* @__PURE__ */ f(he, { spacing: 2, children: [
        /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ i(
            sr,
            {
              type: "square",
              size: "small",
              color: c.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ i(
            Dt,
            {
              href: `/servicios#${r}`,
              variant: "accent",
              ariaLabel: `Conoce el servicio ${t}`,
              children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400, fontSize: "0.9rem" }, children: t })
            }
          )
        ] }),
        n && /* @__PURE__ */ i(
          de,
          {
            sx: {
              color: c.contrast.text.secondary,
              fontSize: "0.8rem",
              lineHeight: 1.5
            },
            children: n
          }
        ),
        o && /* @__PURE__ */ f(d, { sx: { pt: 1, borderTop: `1px solid ${c.contrast.divider}` }, children: [
          /* @__PURE__ */ i(
            de,
            {
              sx: {
                color: c.contrast.text.secondary,
                fontSize: "0.75rem",
                mb: 1
              },
              children: "Caso real:"
            }
          ),
          /* @__PURE__ */ i(
            Dt,
            {
              href: `/casos-de-uso#${o.slug}`,
              variant: "subtle",
              ariaLabel: `Ver caso de uso en ${o.sector} con ${o.client}`,
              children: /* @__PURE__ */ f(de, { sx: { fontWeight: 400, fontSize: "0.8rem" }, children: [
                o.client,
                " - ",
                o.sector
              ] })
            }
          )
        ] })
      ] })
    }
  );
}, ep = ({
  selectedValue: e,
  onValueChange: t,
  options: r
}) => {
  const n = X();
  return /* @__PURE__ */ f(d, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ i(d, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: n.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ i(he, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: r.map((o, a) => /* @__PURE__ */ i(
      vt,
      {
        label: o.label,
        size: "medium",
        onClick: () => t(o.value),
        sx: {
          borderRadius: "9999px",
          background: e === o.value ? n.contrast.text.primary : "transparent",
          color: e === o.value ? n.contrast.background : n.contrast.text.primary,
          border: `3px solid ${n.contrast.text.primary}`,
          fontSize: "0.9rem",
          fontWeight: 400,
          textTransform: "none",
          px: 2,
          height: "40px",
          cursor: "pointer",
          transition: "all 0.1s ease",
          "&:hover": {
            background: e === o.value ? n.contrast.text.primary : "rgba(0,0,0,0.05)",
            transform: "translate(-2px, -2px)",
            boxShadow: `4px 4px 0px ${n.contrast.text.primary}`
          }
        }
      },
      a
    )) })
  ] });
}, tp = ({
  totalCount: e,
  filteredCount: t,
  activeFilters: r
}) => {
  const n = X(), o = r.length > 0, a = t !== e;
  return /* @__PURE__ */ i(d, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ f(he, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ i(
      sr,
      {
        type: "dot",
        size: "small",
        color: n.contrast.text.secondary,
        variant: "minimal"
      }
    ),
    /* @__PURE__ */ f(P, { variant: "body2", sx: {
      color: n.contrast.text.secondary,
      fontSize: "0.875rem"
    }, children: [
      a ? `${t} de ${e}` : `${e}`,
      " servicios",
      o && /* @__PURE__ */ f("span", { style: { color: n.contrast.text.primary }, children: [
        " • ",
        r.join(", ")
      ] })
    ] })
  ] }) });
}, rp = ({
  title: e,
  subtitle: t,
  children: r,
  defaultExpanded: n = !1,
  variant: o = "minimal",
  showIcon: a = !0,
  sx: s = {}
}) => {
  const [c, l] = H(n), u = X(), m = u.effectiveMode === "dark", g = () => {
    l(!c);
  }, p = (() => {
    switch (o) {
      case "card":
        return {
          container: {
            background: m ? u.palette.black : u.palette.white,
            border: `3px solid ${m ? u.palette.white : u.palette.black}`,
            color: m ? u.palette.white : u.palette.black,
            borderRadius: 0,
            p: 4,
            transition: "all 0.1s ease",
            "&:hover": {
              transform: "translate(-4px, -4px)",
              boxShadow: m ? "6px 6px 0px #FFFFFF" : "6px 6px 0px #171717"
            }
          }
        };
      case "bordered":
        return {
          container: {
            borderBottom: `3px solid ${m ? u.palette.white : u.palette.black}`,
            color: m ? u.palette.white : u.palette.black,
            pb: 3,
            mb: 3
          }
        };
      default:
        return {
          container: {
            color: "inherit",
            mb: 4
          }
        };
    }
  })();
  return /* @__PURE__ */ f(d, { sx: { ...p.container, ...s }, children: [
    /* @__PURE__ */ f(
      d,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none",
          py: 2
        },
        onClick: g,
        children: [
          /* @__PURE__ */ f(d, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ i(Ae, { sx: {
              color: "inherit",
              fontWeight: 400,
              fontSize: "1.2rem",
              textTransform: "none",
              letterSpacing: "0em"
            }, children: e }),
            t && /* @__PURE__ */ i(Ie, { sx: {
              color: "inherit",
              opacity: 0.8,
              fontSize: "1rem",
              mt: 1
            }, children: t })
          ] }),
          a && /* @__PURE__ */ i(
            De,
            {
              size: "medium",
              sx: {
                color: "inherit",
                transform: c ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                opacity: 0.5,
                "&:hover": {
                  opacity: 1,
                  background: "transparent"
                }
              },
              children: /* @__PURE__ */ i(Sa, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i(qi, { in: c, timeout: 100, children: /* @__PURE__ */ i(d, { sx: {
      pt: 3,
      borderTop: c ? `1px solid ${m ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: r }) })
  ] });
}, np = ({
  summary: e,
  details: t,
  showDetails: r = !1,
  onToggle: n,
  variant: o = "inline",
  maxHeight: a = 200
}) => {
  const [s, c] = H(r), l = X(), u = () => {
    const y = !s;
    c(y), n == null || n(y);
  }, g = (() => {
    switch (o) {
      case "separated":
        return {
          container: {
            borderTop: `1px solid ${l.contrast.divider}`,
            pt: 2,
            mt: 2
          }
        };
      case "card":
        return {
          container: {
            background: l.contrast.surface,
            border: `1px solid ${l.contrast.divider}`,
            borderRadius: 2,
            p: 2,
            mt: 2
          }
        };
      default:
        return {
          container: {
            mt: 1
          }
        };
    }
  })();
  return /* @__PURE__ */ f(d, { children: [
    /* @__PURE__ */ i(
      d,
      {
        sx: {
          mb: s ? 2 : 0,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            transition: "opacity 0.2s ease"
          }
        },
        onClick: u,
        children: e
      }
    ),
    s && /* @__PURE__ */ i(d, { sx: g.container, children: /* @__PURE__ */ i(
      d,
      {
        sx: {
          maxHeight: a,
          overflow: "auto",
          transition: "all 0.3s ease",
          "&::-webkit-scrollbar": {
            width: "6px"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            background: l.contrast.divider,
            borderRadius: "3px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: l.contrast.text.secondary
          }
        },
        children: t
      }
    ) })
  ] });
}, $d = {
  online: "Disponible",
  offline: "No disponible",
  starting: "Iniciando…",
  checking: "Verificando…",
  idle: "Inactivo"
};
function Rt(e, t) {
  const r = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16);
  return `rgba(${r},${n},${o},${t})`;
}
const op = ({
  name: e,
  description: t,
  icon: r,
  accentColor: n,
  status: o,
  openUrl: a,
  isCli: s = !1,
  ctaLabel: c = "Abrir"
}) => {
  const l = X(), u = o === "online", m = o === "checking", g = l.contrast.surface, y = l.contrast.text.primary, p = l.contrast.text.secondary, S = l.contrast.text.disabled, x = l.contrast.border;
  return /* @__PURE__ */ f(
    d,
    {
      sx: {
        backgroundColor: g,
        border: `1px solid ${Rt(n, 0.2)}`,
        borderRadius: 0,
        // Brutalist DS
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s steps(4, end)",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px ${Rt(n, 0.6)}`,
          borderColor: Rt(n, 0.5)
        }
      },
      children: [
        /* @__PURE__ */ i(d, { sx: { height: 3, backgroundColor: n, flexShrink: 0 } }),
        /* @__PURE__ */ f(d, { sx: { flex: 1, display: "flex", flexDirection: "column", p: 2.5, gap: 1.5 }, children: [
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ i(
              d,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Rt(n, 0.1),
                  border: `1px solid ${Rt(n, 0.2)}`
                },
                children: /* @__PURE__ */ i(lr, { id: r, size: "md", color: n, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ f(d, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ i(
                d,
                {
                  component: "div",
                  sx: {
                    fontFamily: '"Red Hat Display", sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: y,
                    lineHeight: 1.2
                  },
                  children: e
                }
              ),
              /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }, children: [
                /* @__PURE__ */ i(nn, { status: o, size: 6 }),
                /* @__PURE__ */ i(
                  d,
                  {
                    component: "span",
                    sx: {
                      fontSize: 11,
                      color: b.telemetry[o]
                    },
                    children: $d[o]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i(
            d,
            {
              component: "p",
              sx: {
                fontSize: 13,
                lineHeight: 1.6,
                color: p,
                m: 0,
                flex: 1
              },
              children: t
            }
          ),
          /* @__PURE__ */ i(d, { sx: { mt: 0.5 }, children: s ? /* @__PURE__ */ i(
            d,
            {
              component: "div",
              sx: { fontSize: 12, color: S, fontStyle: "italic" },
              children: "Herramienta de línea de comandos — se ejecuta desde el servidor"
            }
          ) : a ? /* @__PURE__ */ f(
            d,
            {
              component: "a",
              href: u ? a : void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (C) => {
                u || C.preventDefault();
              },
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                py: 1.25,
                textDecoration: "none",
                fontWeight: 700,
                fontSize: 13,
                fontFamily: '"Red Hat Display", sans-serif',
                transition: "all 0.15s",
                backgroundColor: u ? n : "transparent",
                color: u ? b.white : S,
                border: u ? "none" : `1px solid ${x}`,
                cursor: u ? "pointer" : m ? "default" : "not-allowed",
                opacity: m ? 0.6 : 1
              },
              children: [
                /* @__PURE__ */ i(
                  lr,
                  {
                    id: "external-link",
                    size: 14,
                    color: u ? b.white : S,
                    strokeWidth: 2.2
                  }
                ),
                u ? c : m ? "Verificando…" : "No disponible"
              ]
            }
          ) : null })
        ] })
      ]
    }
  );
}, ip = ({
  branding: e,
  label: t = "Acceso restringido",
  placeholder: r = "Contraseña",
  inputType: n = "password",
  submitLabel: o = "Entrar",
  loadingLabel: a = "Verificando…",
  accentColor: s = b.tamaprint.primary,
  footer: c,
  onSubmit: l
}) => {
  const u = Ht(null), [m, g] = H(!1), [y, p] = H(""), [S, x] = H(!1);
  async function C(O) {
    var k;
    O.preventDefault();
    const A = ((k = u.current) == null ? void 0 : k.value) ?? "";
    if (!A) return;
    g(!0), p("");
    const _ = await l(A);
    _.ok || (p(_.error ?? "Error de autenticación"), x(!0), setTimeout(() => x(!1), 500), u.current && (u.current.value = "", u.current.focus())), g(!1);
  }
  const w = b.telemetry.offline;
  return /* @__PURE__ */ f(d, { component: "form", onSubmit: C, sx: { width: "100%", maxWidth: 360 }, children: [
    e && /* @__PURE__ */ i(d, { sx: { textAlign: "center", mb: 4 }, children: e }),
    /* @__PURE__ */ f(
      d,
      {
        sx: {
          backgroundColor: ct.dashboardDark.surface,
          border: `1px solid ${ct.dashboardDark.border}`,
          borderRadius: 0,
          p: "28px 28px 24px",
          animation: S ? "auth-shake 0.4s ease" : void 0,
          "@keyframes auth-shake": {
            "0%,100%": { transform: "translateX(0)" },
            "20%": { transform: "translateX(-8px)" },
            "40%": { transform: "translateX(8px)" },
            "60%": { transform: "translateX(-5px)" },
            "80%": { transform: "translateX(5px)" }
          }
        },
        children: [
          /* @__PURE__ */ f(
            d,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9.5,
                fontWeight: 700,
                color: ct.dashboardDark.text.secondary,
                letterSpacing: "0.22em",
                mb: 2
              },
              children: [
                "◈ ",
                t
              ]
            }
          ),
          /* @__PURE__ */ i(
            d,
            {
              component: "input",
              ref: u,
              type: n,
              placeholder: r,
              autoFocus: !0,
              disabled: m,
              sx: {
                width: "100%",
                boxSizing: "border-box",
                background: "rgba(255,255,255,0.05)",
                border: `1px solid ${y ? w : "rgba(255,255,255,0.1)"}`,
                borderRadius: 0,
                p: "12px 14px",
                color: ct.dashboardDark.text.primary,
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                mb: y ? 1 : 2,
                transition: "border-color 0.15s",
                "&:focus": {
                  borderColor: y ? w : s
                }
              }
            }
          ),
          y && /* @__PURE__ */ i(
            d,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 10,
                color: w,
                letterSpacing: "0.08em",
                mb: 1.75
              },
              children: y
            }
          ),
          /* @__PURE__ */ i(
            d,
            {
              component: "button",
              type: "submit",
              disabled: m,
              sx: {
                width: "100%",
                p: "12px 0",
                borderRadius: 0,
                border: "none",
                backgroundColor: m ? `${s}66` : s,
                color: b.white,
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: m ? "default" : "pointer",
                transition: "background-color 0.15s"
              },
              children: m ? a : o
            }
          )
        ]
      }
    ),
    c && /* @__PURE__ */ i(d, { sx: { textAlign: "center", mt: 2.5 }, children: c })
  ] });
}, ap = ({
  presets: e,
  activePresetId: t,
  onPresetChange: r,
  fromDate: n,
  toDate: o,
  onFromChange: a,
  onToChange: s,
  minDate: c,
  maxDate: l,
  showCustomRange: u = !0,
  disabled: m = !1
}) => {
  const { contrast: g } = X(), y = (p) => {
    if (m) return;
    const S = typeof p.range == "function" ? p.range() : p.range;
    a(S.from), s(S.to), r(p.id);
  };
  return /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }, children: [
    /* @__PURE__ */ i(
      d,
      {
        sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          background: g.surface,
          borderRadius: qe.radius.full,
          p: "4px",
          border: `1px solid ${g.border}`
        },
        children: e.map((p) => {
          const S = p.id === t;
          return /* @__PURE__ */ i(
            d,
            {
              component: "button",
              type: "button",
              disabled: m,
              onClick: () => y(p),
              sx: {
                background: S ? g.text.primary : "transparent",
                border: "none",
                borderRadius: qe.radius.full,
                color: S ? g.background : g.text.secondary,
                cursor: m ? "not-allowed" : "pointer",
                opacity: m ? 0.5 : 1,
                fontFamily: "inherit",
                fontSize: 12,
                fontWeight: S ? 700 : 500,
                letterSpacing: "0.04em",
                px: { xs: "14px", sm: "16px" },
                py: { xs: "11px", sm: "7px" },
                // >=44px de alto en xs para cumplir el mínimo de área táctil.
                minHeight: { xs: 44, sm: "auto" },
                transition: "all 0.15s",
                "&:hover": m || S ? {} : { color: g.text.primary }
              },
              children: p.label
            },
            p.id
          );
        })
      }
    ),
    u && // flexWrap + flex en los inputs: en móviles muy angostos los dos date
    // pickers se apilan en vez de desbordar (el date input nativo de iOS
    // no baja de ~155px de ancho).
    /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ i(
        Io,
        {
          type: "date",
          value: n,
          min: c,
          max: l,
          disabled: m,
          onChange: (p) => a(p.target.value),
          sx: { flex: "1 1 130px", minWidth: 0 }
        }
      ),
      /* @__PURE__ */ i(d, { component: "span", sx: { fontSize: 12, color: g.text.secondary }, children: "a" }),
      /* @__PURE__ */ i(
        Io,
        {
          type: "date",
          value: o,
          min: c,
          max: l,
          disabled: m,
          onChange: (p) => s(p.target.value),
          sx: { flex: "1 1 130px", minWidth: 0 }
        }
      )
    ] })
  ] });
}, sp = ({
  items: e,
  activeItem: t,
  onItemClick: r,
  variant: n = "horizontal",
  className: o = ""
}) => {
  const a = X();
  ye();
  const s = (u) => {
    r && r(u), u.onClick && u.onClick();
  }, c = (u) => {
    const m = t === u.id, g = {
      fontWeight: 400,
      textTransform: "none",
      transition: "all 0.3s ease"
    };
    switch (n) {
      case "tabs":
        return {
          ...g,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...m ? {
            background: a.palette.black,
            color: a.palette.white,
            boxShadow: Ft.ai4u.button
          } : {
            color: a.contrast.text.secondary,
            "&:hover": {
              color: a.contrast.text.primary,
              background: we(a.palette.white, 0.1)
            }
          }
        };
      case "vertical":
        return {
          ...g,
          width: "100%",
          justifyContent: "flex-start",
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: "0.875rem",
          ...m ? {
            background: a.palette.black,
            color: a.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: a.palette.black,
            boxShadow: Ft.ai4u.button
          } : {
            color: a.contrast.text.secondary,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: "transparent",
            "&:hover": {
              color: a.contrast.text.primary,
              background: a.helpers.state.hover,
              borderLeftColor: a.palette.black
            }
          }
        };
      default:
        return {
          ...g,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...m ? {
            background: a.palette.black,
            color: a.palette.white,
            boxShadow: Ft.ai4u.button
          } : {
            color: a.contrast.text.secondary,
            "&:hover": {
              color: a.contrast.text.primary,
              background: a.helpers.state.hover
            }
          }
        };
    }
  }, l = () => {
    switch (n) {
      case "tabs":
        return {
          display: "flex",
          gap: 1,
          p: 1,
          borderRadius: 3,
          background: we(a.palette.white, 0.05),
          backdropFilter: "blur(20px)",
          border: `1px solid ${a.contrast.border}`
        };
      case "vertical":
        return {
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          width: "100%"
        };
      default:
        return {
          display: "flex",
          gap: 1,
          alignItems: "center",
          flexWrap: "wrap"
        };
    }
  };
  return n === "tabs" ? /* @__PURE__ */ i(d, { sx: l(), className: o, children: e.map((u) => /* @__PURE__ */ i(
    Ze,
    {
      onClick: () => s(u),
      sx: c(u),
      children: u.label
    },
    u.id
  )) }) : /* @__PURE__ */ i(d, { sx: l(), className: o, children: e.map((u) => /* @__PURE__ */ i(
    Ze,
    {
      onClick: () => s(u),
      sx: c(u),
      children: u.label
    },
    u.id
  )) });
}, Ad = Re(/* @__PURE__ */ i("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), _d = Re(/* @__PURE__ */ i("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), Rd = Re(/* @__PURE__ */ i("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Od = Re(/* @__PURE__ */ i("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), zd = Re(/* @__PURE__ */ i("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), Md = Re(/* @__PURE__ */ i("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X"), Pd = Re(/* @__PURE__ */ i("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp"), Fd = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  ye();
  const t = X(), r = [
    { icon: /* @__PURE__ */ i(Ad, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ i(_d, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ i(Rd, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ i(Md, {}), url: "https://x.com/_ai4u_" }
  ], n = [
    { name: "inicio", path: Me.HOME },
    { name: "servicios", path: Me.SERVICES },
    { name: "portafolio", path: Me.PORTFOLIO },
    { name: "porqueAi4u", path: Me.WHY_AI4U },
    { name: "designSystem", path: Me.DESIGN_SYSTEM }
  ];
  return /* @__PURE__ */ i(
    d,
    {
      sx: {
        bgcolor: t.contrast.background,
        color: t.contrast.text.primary,
        borderTop: 1,
        borderColor: t.contrast.divider,
        py: 8
      },
      children: /* @__PURE__ */ f(Ke, { maxWidth: "lg", children: [
        /* @__PURE__ */ f($e, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ f($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(
              d,
              {
                component: "img",
                src: t.mode === "light" ? "/assets/images/isotipo-negro.png" : "/assets/images/isotipo-crema.png",
                alt: "AI4U Logo",
                sx: {
                  height: 50,
                  width: "auto",
                  mb: 4
                }
              }
            ),
            /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.8 }, children: "Inteligencia para tu negocio." })
          ] }),
          /* @__PURE__ */ f($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ i(d, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ i(d, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: n.map((o) => /* @__PURE__ */ i(d, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ i(
              d,
              {
                component: Ot,
                to: o.path,
                onClick: () => Gr(),
                sx: {
                  color: "inherit",
                  opacity: 0.7,
                  textDecoration: "none",
                  cursor: "pointer",
                  display: "block",
                  transition: "opacity 0.2s",
                  "&:hover": { opacity: 1 }
                },
                children: o.name
              }
            ) }, o.name)) }) })
          ] }),
          /* @__PURE__ */ f($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ f(he, { spacing: 2.5, children: [
              /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(Od, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(Pd, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(zd, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i(ur, { sx: { my: 6, borderColor: t.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ f(he, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ i(de, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${e} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ f(d, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
              /* @__PURE__ */ f(
                P,
                {
                  sx: {
                    ...re.ui.code,
                    color: "inherit",
                    opacity: 0.5,
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em"
                  },
                  children: [
                    "REV_2.1 // ",
                    (/* @__PURE__ */ new Date()).getTime().toString(2).slice(-16)
                  ]
                }
              ),
              /* @__PURE__ */ f(
                P,
                {
                  sx: {
                    ...re.ui.code,
                    color: "inherit",
                    opacity: 0.5,
                    fontSize: "0.75rem",
                    letterSpacing: "0.05em",
                    fontWeight: 400
                  },
                  children: [
                    "architectureBy ",
                    /* @__PURE__ */ i(d, { component: "span", sx: { fontWeight: 400 }, children: "mariano | 마리아노" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i(he, { direction: "row", spacing: 2, children: r.map((o, a) => /* @__PURE__ */ i(
            De,
            {
              component: "a",
              href: o.url,
              target: "_blank",
              rel: "noopener noreferrer",
              sx: {
                color: "inherit",
                opacity: 0.6,
                "&:hover": {
                  opacity: 1,
                  transform: "translateY(-2px)"
                },
                transition: "all 0.2s ease-in-out"
              },
              children: o.icon
            },
            a
          )) })
        ] })
      ] })
    }
  );
}, cp = ({
  customTitle: e = "Tu tiempo es oro",
  customSubtitle: t = "IA que potencia tu productividad.",
  primaryButtonText: r = "Recupera tu tiempo",
  secondaryButtonText: n = "Calcula tu ROI",
  sx: o
}) => {
  const a = ye(), s = X();
  Nt(a.breakpoints.down("md"));
  const [c, l] = H(0), u = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], m = "IA con enfoque humano";
  return pe(() => {
    const g = setInterval(() => {
      l((y) => y === 2 ? 0 : y + 1);
    }, 5e3);
    return () => clearInterval(g);
  }, []), /* @__PURE__ */ f(
    d,
    {
      sx: {
        position: "relative",
        minHeight: { xs: "auto", md: "100vh" },
        maxHeight: { xs: "100vh", md: "none" },
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        bgcolor: s.contrast.background,
        py: { xs: 4, sm: 6, md: 12 },
        ...o
      },
      children: [
        /* @__PURE__ */ i(
          d,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 0,
              "&::after": {
                content: '""',
                position: "absolute",
                inset: 0,
                backgroundColor: we(s.contrast.background, 0.6),
                zIndex: 1
              }
            },
            children: u.map((g, y) => /* @__PURE__ */ i(d, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ i(
              En,
              {
                src: g,
                alt: `Background ${y + 1}`,
                priority: y === 0,
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: y === c ? 0.5 : 0,
                  transition: "opacity 1.5s ease-in-out, transform 10s ease-out",
                  filter: "grayscale(100%) contrast(1.2)",
                  transform: y === c ? "scale(1.1)" : "scale(1)"
                }
              }
            ) }, y))
          }
        ),
        /* @__PURE__ */ i(d, { sx: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          overflow: "hidden",
          pointerEvents: "none",
          fontFamily: "monospace",
          fontSize: "10px",
          lineHeight: 1,
          wordBreak: "break-all",
          userSelect: "none",
          zIndex: 1
        }, children: Array.from({ length: 40 }).map((g, y) => /* @__PURE__ */ i(d, { children: Math.random().toString(2).slice(2) }, y)) }),
        /* @__PURE__ */ f(d, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ i(Ye, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ f(Ye, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i(
          Ke,
          {
            maxWidth: "xl",
            sx: {
              position: "relative",
              zIndex: 5,
              px: { xs: 2, sm: 3, md: 10, lg: 15 },
              display: "flex",
              justifyContent: "flex-start"
            },
            children: /* @__PURE__ */ f(
              he,
              {
                direction: "column",
                spacing: { xs: 2, sm: 3, md: 4 },
                sx: { width: "100%", maxWidth: "900px", textAlign: "left", alignItems: "flex-start" },
                children: [
                  /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ i(
                      d,
                      {
                        sx: {
                          border: `1px solid ${s.contrast.text.primary}`,
                          color: s.contrast.text.primary,
                          px: 2,
                          py: 0.5,
                          mb: 4,
                          ...re.ui.code,
                          fontSize: "0.9rem",
                          letterSpacing: "0.1em"
                        },
                        children: "strategySystemV2.0"
                      }
                    ),
                    /* @__PURE__ */ i(
                      Xl,
                      {
                        sx: {
                          color: s.contrast.text.primary,
                          mb: { xs: 1, sm: 1.5, md: 2 },
                          maxWidth: "850px",
                          fontSize: { xs: "2.5rem", sm: "3.5rem", md: "6rem", lg: "8rem" },
                          lineHeight: 0.9,
                          letterSpacing: "-0.04em",
                          textAlign: "left",
                          fontWeight: 400
                        },
                        children: e
                      }
                    ),
                    /* @__PURE__ */ i(
                      kn,
                      {
                        sx: {
                          color: s.contrast.text.primary,
                          maxWidth: "600px",
                          mb: { xs: 4, sm: 5, md: 6 },
                          opacity: 0.9,
                          fontWeight: 300,
                          fontSize: { xs: "1rem", sm: "1.2rem", md: "2rem" },
                          lineHeight: 1.1,
                          textAlign: "left",
                          borderLeft: `4px solid ${s.contrast.text.primary}`,
                          pl: 3
                        },
                        children: t
                      }
                    )
                  ] }),
                  /* @__PURE__ */ f(
                    he,
                    {
                      direction: { xs: "column", md: "row" },
                      spacing: { xs: 3, md: 4 },
                      sx: { alignItems: "flex-start" },
                      children: [
                        /* @__PURE__ */ i(
                          Tn,
                          {
                            variant: "primary",
                            text: "Recuperar tiempo",
                            size: "large",
                            showIcon: !1,
                            sx: {
                              height: { xs: "55px", md: "90px" },
                              px: { xs: 4, md: 8 },
                              fontSize: { xs: "0.9rem", md: "1.5rem" },
                              fontWeight: 400,
                              borderRadius: 0,
                              bgcolor: s.contrast.text.primary,
                              color: s.contrast.background,
                              border: "none",
                              transition: "all 0.3s ease",
                              "&:hover": {
                                bgcolor: s.contrast.text.primary,
                                opacity: 0.9,
                                transform: "scale(1.02)"
                              }
                            }
                          }
                        ),
                        /* @__PURE__ */ i(d, { sx: {
                          pt: { xs: 1, md: 2 },
                          position: "relative"
                        }, children: /* @__PURE__ */ f(
                          Ie,
                          {
                            sx: {
                              color: s.contrast.text.primary,
                              fontWeight: 400,
                              fontSize: { xs: "0.8rem", md: "1.2rem" },
                              letterSpacing: "0.1em",
                              textTransform: "none",
                              lineHeight: 1.2,
                              textAlign: "left",
                              opacity: 0.6
                            },
                            children: [
                              "// ",
                              m.toLowerCase().replace(/\s+/g, "")
                            ]
                          }
                        ) })
                      ]
                    }
                  )
                ]
              }
            )
          }
        )
      ]
    }
  );
}, lp = ({
  data: e,
  date: t,
  time: r,
  variant: n = "elevated",
  onRefresh: o = void 0
}) => {
  const a = X(), s = () => {
    switch (n) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${a.contrast.divider}`,
            color: a.contrast.text.primary
          },
          surface: {
            background: a.contrast.surface,
            border: `1px solid ${a.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: a.contrast.surface,
            border: "none",
            color: a.contrast.text.primary
          },
          surface: {
            background: a.contrast.background,
            border: `1px solid ${a.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: a.contrast.surface,
            border: `1px solid ${a.contrast.divider}`,
            color: a.contrast.text.primary
          },
          surface: {
            background: a.contrast.background,
            border: `1px solid ${a.contrast.divider}`
          }
        };
    }
  }, c = (u) => {
    switch (u) {
      case "excellent":
        return a.palette.success;
      case "good":
        return a.palette.accent;
      case "fair":
        return "#D97706";
      case "poor":
        return "#DC2626";
      default:
        return a.palette.accent;
    }
  }, l = s();
  return /* @__PURE__ */ i(
    Ar,
    {
      variant: n,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...l.card
      },
      children: /* @__PURE__ */ f(Vt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(d, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: l.surface.background,
              border: l.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ i(va, { sx: {
              color: a.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ f(d, { children: [
              /* @__PURE__ */ i(de, { sx: {
                color: a.helpers.text.secondary,
                mb: 0.5
              }, children: t }),
              /* @__PURE__ */ i(Yt, { sx: {
                color: a.helpers.text.primary,
                fontWeight: 400
              }, children: r })
            ] })
          ] }),
          o && /* @__PURE__ */ i(
            De,
            {
              size: "small",
              onClick: o,
              sx: {
                color: a.helpers.text.secondary,
                "&:hover": {
                  background: a.helpers.state.hover,
                  color: a.palette.accent
                }
              },
              children: /* @__PURE__ */ i(Lo, {})
            }
          )
        ] }),
        e.quality && /* @__PURE__ */ i(d, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ i(de, { sx: {
            color: a.helpers.text.secondary,
            textTransform: "none",
            letterSpacing: 0.5
          }, children: "Calidad del Sueño" }),
          /* @__PURE__ */ i(
            vt,
            {
              label: e.quality,
              size: "small",
              sx: {
                backgroundColor: c(e.quality) + "20",
                color: c(e.quality),
                fontWeight: 400,
                fontSize: "0.75rem",
                height: 24,
                "& .MuiChip-label": {
                  px: 1.5
                }
              }
            }
          )
        ] }) }),
        /* @__PURE__ */ f(d, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ f(d, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
          }, children: [
            /* @__PURE__ */ i(Ae, { sx: {
              color: a.helpers.text.primary,
              fontWeight: 400
            }, children: "Duración del Sueño" }),
            /* @__PURE__ */ i(
              vt,
              {
                label: `${e.totalHours}H ${e.totalMinutes}M`,
                sx: {
                  backgroundColor: a.palette.accent,
                  color: a.palette.white,
                  fontWeight: 400,
                  fontSize: "0.875rem",
                  height: 32,
                  "& .MuiChip-label": {
                    px: 2
                  }
                }
              }
            )
          ] }),
          /* @__PURE__ */ f(d, { sx: {
            height: 40,
            borderRadius: 2,
            background: a.palette.accent,
            position: "relative",
            overflow: "hidden",
            mb: 2
          }, children: [
            /* @__PURE__ */ i(d, { sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2
            }, children: Array.from({ length: 20 }, (u, m) => /* @__PURE__ */ i(d, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, m)) }),
            /* @__PURE__ */ i(d, { sx: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              transform: "translateY(-50%)"
            } }),
            /* @__PURE__ */ i(de, { sx: {
              position: "absolute",
              top: 4,
              left: 8,
              fontWeight: 400,
              color: a.palette.white
            }, children: e.remStart }),
            /* @__PURE__ */ i(de, { sx: {
              position: "absolute",
              top: 4,
              right: 8,
              fontWeight: 400,
              color: a.palette.white
            }, children: e.remEnd }),
            /* @__PURE__ */ i(de, { sx: {
              position: "absolute",
              bottom: 4,
              left: 8,
              color: a.palette.white
            }, children: "REM" }),
            /* @__PURE__ */ i(de, { sx: {
              position: "absolute",
              bottom: 4,
              right: 8,
              color: a.palette.white
            }, children: "REM" })
          ] })
        ] }),
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: a.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ f(Ae, { sx: {
              color: a.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            e.hasWifi && /* @__PURE__ */ i(d, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: a.palette.accent + "20",
              color: a.palette.accent
            }, children: /* @__PURE__ */ i(wa, { sx: { fontSize: 16 } }) }),
            e.hasBluetooth && /* @__PURE__ */ i(d, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: a.palette.success + "20",
              color: a.palette.success
            }, children: /* @__PURE__ */ i(Ca, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, dp = ({
  data: e,
  variant: t = "elevated",
  showLocationIcon: r = !1,
  onRefresh: n = void 0
}) => {
  const o = X(), a = () => {
    switch (t) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${o.contrast.divider}`,
            color: o.contrast.text.primary
          },
          surface: {
            background: o.contrast.surface,
            border: `1px solid ${o.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: o.contrast.surface,
            border: "none",
            color: o.contrast.text.primary
          },
          surface: {
            background: o.contrast.background,
            border: `1px solid ${o.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: o.contrast.surface,
            border: `1px solid ${o.contrast.divider}`,
            color: o.contrast.text.primary
          },
          surface: {
            background: o.contrast.background,
            border: `1px solid ${o.contrast.divider}`
          }
        };
    }
  }, s = (l) => {
    const u = l.toLowerCase();
    return u.includes("clear") || u.includes("sunny") ? /* @__PURE__ */ i(Wn, {}) : u.includes("cloud") || u.includes("overcast") ? /* @__PURE__ */ i(Ea, {}) : u.includes("rain") || u.includes("precipitation") ? /* @__PURE__ */ i(Ta, {}) : /* @__PURE__ */ i(Wn, {});
  }, c = a();
  return /* @__PURE__ */ i(
    Ar,
    {
      variant: t,
      sx: {
        borderRadius: 4,
        maxWidth: 400,
        margin: "0 auto",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-2px)"
        },
        ...c.card
      },
      children: /* @__PURE__ */ f(Vt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            r && /* @__PURE__ */ i(ka, { sx: {
              fontSize: 20,
              color: o.helpers.text.primary
            } }),
            /* @__PURE__ */ i(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: e.location })
          ] }),
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            n && /* @__PURE__ */ i(
              De,
              {
                size: "small",
                onClick: n,
                sx: {
                  color: o.helpers.text.secondary,
                  "&:hover": {
                    background: o.helpers.state.hover,
                    color: o.palette.accent
                  }
                },
                children: /* @__PURE__ */ i(Lo, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f(d, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ i(d, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: s(e.condition) }),
          /* @__PURE__ */ f(kn, { sx: {
            fontSize: "3.5rem",
            fontWeight: 400,
            color: o.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }, children: [
            e.temperature,
            "°"
          ] }),
          /* @__PURE__ */ i(Ae, { sx: {
            color: o.helpers.text.primary,
            mb: 1,
            fontWeight: 400
          }, children: e.condition }),
          /* @__PURE__ */ f(Ie, { sx: {
            color: o.helpers.text.secondary,
            fontWeight: 400
          }, children: [
            "Máx ",
            e.high,
            "° — Mín ",
            e.low,
            "°"
          ] })
        ] }),
        /* @__PURE__ */ f(d, { sx: {
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ f(d, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ f(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ f(d, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ f(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f(d, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ i(ur, { sx: {
            mb: 3,
            borderColor: o.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ i(Ae, { sx: {
            fontWeight: 400,
            mb: 3,
            color: o.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ i(d, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: e.hourlyForecast.map((l, u) => /* @__PURE__ */ f(d, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderRadius: 2,
            background: c.surface.background,
            border: c.surface.border,
            backdropFilter: "blur(10px)",
            transition: "all 0.2s ease",
            "&:hover": {
              background: o.helpers.state.hover,
              transform: "translateX(4px)"
            }
          }, children: [
            /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              s(l.condition),
              /* @__PURE__ */ i(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: l.time })
            ] }),
            /* @__PURE__ */ i(Ie, { sx: {
              color: o.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: l.condition }),
            /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ f(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                l.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ f(Ae, { sx: {
                fontWeight: 400,
                color: o.helpers.text.primary,
                minWidth: "50px",
                textAlign: "right"
              }, children: [
                l.temperature,
                "°"
              ] })
            ] })
          ] }, u)) })
        ] })
      ] })
    }
  );
}, up = ({
  searchValue: e,
  onSearchChange: t,
  selectedTab: r,
  onTabChange: n,
  onClearFilters: o,
  filteredCount: a,
  categoryTabs: s
}) => {
  const c = X();
  return /* @__PURE__ */ f(d, { sx: {
    mb: 4,
    p: 4,
    background: c.contrast.background,
    border: `4px solid ${c.contrast.text.primary}`,
    borderRadius: 0,
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: `8px 8px 0px ${c.contrast.text.primary}`,
      transform: "translate(-4px, -4px)"
    }
  }, children: [
    /* @__PURE__ */ f(
      he,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center", mb: 3 },
        children: [
          /* @__PURE__ */ f(d, { sx: {
            fontSize: "1.25rem",
            fontWeight: 400,
            textTransform: "none",
            letterSpacing: "0.05em",
            color: c.contrast.text.primary
          }, children: [
            a,
            " Servicios"
          ] }),
          e && /* @__PURE__ */ i(
            $r,
            {
              variant: "text",
              size: "small",
              onClick: o,
              sx: {
                color: c.contrast.text.primary,
                fontWeight: 400,
                textTransform: "none",
                textDecoration: "underline",
                "&:hover": {
                  background: "transparent",
                  opacity: 0.7
                }
              },
              children: "Limpiar"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i(d, { sx: { mb: 3 }, children: /* @__PURE__ */ i(
      No,
      {
        fullWidth: !0,
        placeholder: "Buscar servicios...",
        value: e,
        onChange: t,
        sx: {
          "& .MuiOutlinedInput-root": {
            background: c.contrast.background,
            borderRadius: 0,
            border: `3px solid ${c.contrast.text.primary}`,
            transition: "all 0.1s ease",
            "&:hover": {
              borderColor: c.contrast.text.primary
            },
            "&.Mui-focused": {
              borderColor: c.contrast.text.primary,
              boxShadow: `4px 4px 0px ${c.contrast.text.primary}`
            }
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "1rem",
            fontWeight: 400,
            padding: "12px 16px",
            color: c.contrast.text.primary,
            textTransform: "none",
            "&::placeholder": {
              color: c.contrast.text.primary,
              opacity: 0.5
            }
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        }
      }
    ) }),
    /* @__PURE__ */ i(ur, { sx: { mb: 3, borderColor: c.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ i(d, { children: /* @__PURE__ */ i(
      Ki,
      {
        value: r,
        onChange: n,
        variant: "scrollable",
        scrollButtons: "auto",
        sx: {
          minHeight: 48,
          "& .MuiTab-root": {
            minHeight: 48,
            fontSize: "0.9rem",
            fontWeight: 400,
            textTransform: "none",
            borderRadius: "9999px",
            mx: 0.5,
            transition: "all 0.1s ease",
            color: c.contrast.text.primary,
            background: "transparent",
            border: "2px solid transparent",
            "&:hover": {
              background: "rgba(0,0,0,0.05)",
              borderColor: c.contrast.text.primary
            },
            "&.Mui-selected": {
              background: c.contrast.text.primary,
              color: c.contrast.background,
              borderColor: c.contrast.text.primary
            }
          },
          "& .MuiTabs-indicator": {
            display: "none"
          }
        },
        children: s.map((l, u) => /* @__PURE__ */ i(
          Xi,
          {
            label: l.label
          },
          u
        ))
      }
    ) })
  ] });
}, pp = ({ stats: e, getCategories: t }) => {
  const r = ye(), n = [
    {
      value: e.total,
      label: "Servicios",
      color: r.palette.primary.main,
      description: "Total disponibles"
    },
    {
      value: e.active,
      label: "Activos",
      color: r.palette.secondary.main,
      description: "Listos para implementar"
    },
    {
      value: t().length,
      label: "Categorías",
      color: r.palette.text.primary,
      description: "Especialidades técnicas"
    }
  ];
  return /* @__PURE__ */ i(d, { sx: { mb: 8 }, children: /* @__PURE__ */ i($e, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: n.map((o, a) => /* @__PURE__ */ i($e, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ f(d, { sx: {
    p: 4,
    textAlign: "center",
    background: r.palette.background.paper,
    border: `1px solid ${r.palette.divider}`,
    borderRadius: 2,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      transform: "translateY(-2px)",
      boxShadow: r.shadows[4],
      borderColor: r.palette.primary.main
    }
  }, children: [
    /* @__PURE__ */ i(Yt, { sx: {
      color: o.color,
      mb: 1,
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1
    }, children: o.value }),
    /* @__PURE__ */ i(Ie, { sx: {
      color: "text.primary",
      fontSize: "0.95rem",
      fontWeight: 400,
      mb: 0.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }, children: o.label }),
    /* @__PURE__ */ i(Ie, { sx: {
      color: "text.secondary",
      fontSize: "0.8rem",
      lineHeight: 1.4
    }, children: o.description })
  ] }) }, a)) }) });
}, Dd = Ce(Wt)(({ theme: e }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: e.spacing(2),
  padding: e.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), Nd = ({ code: e, language: t = "tsx", className: r = "" }) => {
  ye();
  const n = X();
  return /* @__PURE__ */ f(Dd, { className: r, children: [
    /* @__PURE__ */ f(d, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2
    }, children: [
      /* @__PURE__ */ i(de, { sx: {
        color: n.helpers.text.mediumContrast,
        textTransform: "none",
        letterSpacing: "0.05em"
      }, children: t }),
      /* @__PURE__ */ i(
        De,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(e),
          sx: { color: n.helpers.text.mediumContrast },
          children: /* @__PURE__ */ i(Ia, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ i(d, { component: "pre", sx: {
      fontSize: "0.875rem",
      color: n.helpers.text.highContrast,
      fontFamily: "monospace",
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ i(d, { component: "code", children: e }) })
  ] });
}, Wd = ({ props: e }) => {
  const t = ye();
  return !e || e.length === 0 ? null : /* @__PURE__ */ i(Qi, { component: Wt, sx: { borderRadius: 2 }, children: /* @__PURE__ */ f(Ji, { children: [
    /* @__PURE__ */ i(Zi, { children: /* @__PURE__ */ f(Dn, { sx: { backgroundColor: t.palette.grey[50] }, children: [
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ i(ea, { children: e.map((r, n) => /* @__PURE__ */ f(Dn, { sx: {
      "&:hover": { backgroundColor: t.palette.action.hover }
    }, children: [
      /* @__PURE__ */ i(He, { children: /* @__PURE__ */ i(Ye, { children: r.name }) }),
      /* @__PURE__ */ i(He, { children: /* @__PURE__ */ i(Ye, { children: r.type }) }),
      /* @__PURE__ */ i(He, { children: /* @__PURE__ */ i(
        vt,
        {
          label: r.required ? "Sí" : "No",
          size: "small",
          color: r.required ? "error" : "success",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ i(He, { sx: {
        fontSize: "0.875rem",
        color: t.palette.text.secondary
      }, children: r.description }),
      /* @__PURE__ */ i(He, { children: r.defaultValue ? /* @__PURE__ */ i(Ye, { children: r.defaultValue }) : /* @__PURE__ */ i(d, { sx: { color: t.palette.text.disabled }, children: "-" }) })
    ] }, n)) })
  ] }) });
}, fp = ({
  title: e,
  description: t,
  children: r,
  codeExample: n,
  props: o,
  className: a = ""
}) => {
  const s = ye();
  return /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: a, children: [
    /* @__PURE__ */ f(d, { sx: {
      borderBottom: `1px solid ${s.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ i(Yt, { sx: { mb: 1 }, children: e }),
      /* @__PURE__ */ i(Ie, { sx: { color: s.palette.text.secondary }, children: t })
    ] }),
    /* @__PURE__ */ f(Wt, { sx: {
      position: "relative",
      p: 4,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 4,
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ i(d, { sx: { mb: 2 }, children: /* @__PURE__ */ i(Ae, { sx: { color: s.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ i(d, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: r })
    ] }),
    n && /* @__PURE__ */ f(d, { children: [
      /* @__PURE__ */ i(Ae, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ i(Nd, { code: n })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ f(d, { children: [
      /* @__PURE__ */ i(Ae, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ i(Wd, { props: o })
    ] })
  ] });
}, Ld = Ce(on)(({ theme: e }) => ({
  backgroundColor: e.palette.grey[100],
  borderRadius: e.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: e.shadows[3]
})), _o = Ce(Ze)(({ theme: e, isSelected: t }) => ({
  minWidth: 32,
  width: 32,
  height: 32,
  padding: 0,
  borderRadius: e.spacing(1),
  backgroundColor: t ? e.palette.text.primary : e.palette.background.paper,
  color: t ? e.palette.background.paper : e.palette.text.secondary,
  border: `1px solid ${e.palette.divider}`,
  "&:hover": {
    backgroundColor: t ? e.palette.text.primary : e.palette.action.hover
  }
})), Bd = Ce(Ze)(({ theme: e, isSelected: t }) => ({
  width: "100%",
  justifyContent: "flex-start",
  padding: e.spacing(1, 1.5),
  borderRadius: e.spacing(1),
  backgroundColor: t ? e.palette.text.primary : e.palette.background.paper,
  color: t ? e.palette.background.paper : e.palette.text.secondary,
  textTransform: "none",
  fontSize: "0.875rem",
  "&:hover": {
    backgroundColor: t ? e.palette.text.primary : e.palette.action.hover
  }
})), jd = Ce(d)(({ theme: e }) => ({
  backgroundColor: e.palette.background.paper,
  borderRadius: e.spacing(2),
  padding: e.spacing(3),
  position: "relative",
  minHeight: 320
})), mp = ({
  rotationAngle: e = 35,
  brightness: t = 30,
  shadowDensity: r = 25
}) => {
  const n = ye(), [o, a] = H("rotation"), [s, c] = H("cube"), [l, u] = H("spot"), m = [
    { id: "cube", name: "Cube", icon: "□", isSelected: !0 },
    { id: "sphere", name: "Sphere", icon: "○" },
    { id: "cone", name: "Cone", icon: "△" },
    { id: "cylinder", name: "Cylinder", icon: "●" },
    { id: "more", name: "More", icon: "⋯" }
  ], g = [
    { id: "render", name: "Render", icon: "◉" },
    { id: "rotation", name: "Rotation", icon: "⟲", isSelected: !0 },
    { id: "texture", name: "Texture", icon: "◐" },
    { id: "polygons", name: "Polygons", icon: "◢" },
    { id: "points", name: "Points", icon: "●" },
    { id: "intrude", name: "Intrude", icon: "↓" }
  ], y = [
    { id: "spot", name: "Spot", icon: "⊙", isSelected: !0 },
    { id: "area", name: "Area", icon: "◼" },
    { id: "target", name: "Target", icon: "◎" },
    { id: "sun", name: "Sun", icon: "◉" }
  ];
  return /* @__PURE__ */ i(Ld, { children: /* @__PURE__ */ f(Vt, { sx: { p: 3 }, children: [
    /* @__PURE__ */ f(d, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ i(P, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ i(d, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ i(d, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ i(d, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.error.main,
          borderRadius: "50%"
        } })
      ] }),
      /* @__PURE__ */ i(P, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "2019" })
    ] }),
    /* @__PURE__ */ f($e, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ f(d, { children: [
          /* @__PURE__ */ i(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ i(d, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: m.map((p) => /* @__PURE__ */ i(
            _o,
            {
              isSelected: s === p.id,
              onClick: () => c(p.id),
              children: p.icon
            },
            p.id
          )) })
        ] }),
        /* @__PURE__ */ f(d, { children: [
          /* @__PURE__ */ i(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ i(d, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: g.map((p) => /* @__PURE__ */ i(
            Bd,
            {
              isSelected: o === p.id,
              onClick: () => a(p.id),
              startIcon: /* @__PURE__ */ i("span", { children: p.icon }),
              children: p.name
            },
            p.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ f(jd, { children: [
        /* @__PURE__ */ i(d, { sx: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          borderRadius: 2,
          overflow: "hidden"
        }, children: /* @__PURE__ */ i(d, { sx: {
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          height: "100%"
        }, children: Array.from({ length: 96 }, (p, S) => /* @__PURE__ */ i(d, { sx: {
          border: `1px solid ${n.palette.grey[300]}`
        } }, S)) }) }),
        /* @__PURE__ */ f(d, { sx: {
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 256
        }, children: [
          /* @__PURE__ */ i(d, { sx: {
            width: 96,
            height: 96,
            border: `2px solid ${n.palette.text.primary}`,
            position: "relative",
            transform: "rotate(45deg)",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderLeft: `1px solid ${n.palette.grey[600]}`
            },
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderTop: `1px solid ${n.palette.grey[600]}`
            }
          } }),
          /* @__PURE__ */ f(d, { sx: {
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ i(d, { sx: {
              width: 128,
              height: 32,
              border: `2px solid ${n.palette.grey[400]}`,
              borderRadius: "16px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ i(d, { sx: {
              width: 8,
              height: 8,
              backgroundColor: n.palette.grey[600],
              borderRadius: "50%"
            } }) }),
            /* @__PURE__ */ f(d, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ i(P, { variant: "body2", sx: {
                color: n.palette.text.secondary
              }, children: "Rotation" }),
              /* @__PURE__ */ f(P, { variant: "h4", sx: {
                fontWeight: 400,
                color: n.palette.text.primary
              }, children: [
                e,
                "°"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ f(d, { sx: {
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.75rem"
          }, children: [
            /* @__PURE__ */ i(P, { variant: "caption", sx: { color: n.palette.error.main }, children: "X" }),
            /* @__PURE__ */ i(P, { variant: "caption", sx: { color: n.palette.success.main }, children: "Y" }),
            /* @__PURE__ */ i(P, { variant: "caption", sx: { color: n.palette.info.main }, children: "Z" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ f(d, { children: [
          /* @__PURE__ */ i(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ i($e, { container: !0, spacing: 1, children: y.map((p) => /* @__PURE__ */ i($e, { size: 6, children: /* @__PURE__ */ i(
            _o,
            {
              isSelected: l === p.id,
              onClick: () => u(p.id),
              sx: { width: 48, height: 48 },
              children: p.icon
            }
          ) }, p.id)) })
        ] }),
        /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ f(d, { children: [
            /* @__PURE__ */ f(d, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ i(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ f(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                t,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ i(d, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ i(d, { sx: {
              height: "100%",
              width: `${t}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] }),
          /* @__PURE__ */ f(d, { children: [
            /* @__PURE__ */ f(d, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ i(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ f(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                r,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ i(d, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ i(d, { sx: {
              height: "100%",
              width: `${r}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ f(d, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${n.palette.divider}`
    }, children: [
      /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ i(d, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${n.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ i(P, { variant: "caption", sx: {
            color: n.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ i(P, { variant: "caption", sx: {
              color: n.palette.text.secondary,
              fontSize: "0.75rem"
            }, children: "UI" }),
            /* @__PURE__ */ i(d, { sx: {
              width: 4,
              height: 4,
              backgroundColor: n.palette.text.primary,
              borderRadius: "50%"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(P, { variant: "caption", sx: {
        color: n.palette.text.secondary,
        fontSize: "0.75rem"
      }, children: "013" })
    ] })
  ] }) });
}, Vd = Re(/* @__PURE__ */ i("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), Ro = Re(/* @__PURE__ */ i("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode"), Oo = Re(/* @__PURE__ */ i("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode"), Hd = Ce(Ze, {
  shouldForwardProp: (e) => e !== "colors" && e !== "isScrolled"
})(({ theme: e, colors: t, isScrolled: r }) => ({
  marginX: e.spacing(0.5),
  color: t.contrast.text.primary,
  fontWeight: 400,
  textTransform: "none",
  fontSize: re.ui.caption.fontSize,
  transition: "all 0.3s ease-in-out",
  position: "relative",
  border: "none",
  padding: e.spacing(1, 1.5),
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 8,
    left: "50%",
    width: 0,
    height: "2px",
    backgroundColor: t.contrast.text.primary,
    transition: "all 0.3s ease-in-out",
    transform: "translateX(-50%)"
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: t.contrast.text.primary,
    opacity: 0.8,
    border: "none",
    "&::after": {
      width: "60%"
    }
  }
})), Ud = Ce(d)(({ theme: e }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [e.breakpoints.up("md")]: {
    display: "flex"
  }
})), Gd = () => {
  const [e, t] = H(null), [r, n] = H(!1), o = X(), a = sn(), { mode: s, toggleColorMode: c } = Cn();
  pe(() => {
    const y = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y);
  }, []);
  const l = [
    { name: "inicio", path: Me.HOME },
    { name: "servicios", path: Me.SERVICES },
    { name: "superAI", path: Me.SUPER_AI },
    { name: "porqueAi4u", path: Me.WHY_AI4U },
    { name: "portafolio", path: Me.PORTFOLIO }
  ], u = (y) => {
    t(y.currentTarget);
  }, m = () => {
    t(null);
  }, g = (y) => {
    m(), a(y), Gr();
  };
  return /* @__PURE__ */ i(
    ta,
    {
      position: "fixed",
      color: "transparent",
      elevation: 0,
      sx: {
        backgroundColor: r ? we(o.contrast.surface, 0.85) : "transparent",
        backdropFilter: r ? "blur(10px)" : "none",
        borderBottom: r ? `1px solid ${we(o.contrast.border, 0.1)}` : "none",
        transition: "all 0.3s ease-in-out",
        zIndex: (y) => y.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ i(Ke, { maxWidth: "lg", children: /* @__PURE__ */ f(ra, { disableGutters: !0, children: [
        /* @__PURE__ */ i(
          d,
          {
            component: Ot,
            to: Me.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ i(Et, { variant: "desktop", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ f(d, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ i(
            De,
            {
              size: "large",
              "aria-label": "Menu de navegación",
              "aria-controls": "menu-appbar",
              "aria-haspopup": "true",
              onClick: u,
              sx: {
                color: o.contrast.text.primary,
                transition: "color 0.3s ease-in-out",
                border: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.7
                }
              },
              children: e ? /* @__PURE__ */ i(_i, {}) : /* @__PURE__ */ i(Vd, {})
            }
          ),
          /* @__PURE__ */ f(
            Fo,
            {
              id: "menu-appbar",
              anchorEl: e,
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              keepMounted: !0,
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              },
              open: !!e,
              onClose: m,
              sx: {
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: o.contrast.surface,
                  border: `1px solid ${o.contrast.border}`,
                  boxShadow: Ft.lg
                }
              },
              children: [
                l.map((y) => /* @__PURE__ */ i(
                  Zt,
                  {
                    onClick: () => g(y.path),
                    component: Ot,
                    to: y.path,
                    sx: {
                      color: o.contrast.text.primary,
                      "&:hover": {
                        backgroundColor: o.helpers.state.hover,
                        color: o.palette.black
                      }
                    },
                    children: /* @__PURE__ */ i(P, { sx: { ...re.label.main }, children: y.name })
                  },
                  y.name
                )),
                /* @__PURE__ */ i(
                  Zt,
                  {
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                      py: 2,
                      "&:hover": {
                        backgroundColor: "transparent"
                      }
                    },
                    children: /* @__PURE__ */ i(d, { sx: { width: "100%", maxWidth: (y) => y.spacing(25) }, children: /* @__PURE__ */ i($o, { light: o.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ f(
                  Zt,
                  {
                    onClick: c,
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      color: o.contrast.text.primary,
                      "&:hover": { backgroundColor: o.helpers.state.hover }
                    },
                    children: [
                      s === "light" ? /* @__PURE__ */ i(Oo, { fontSize: "small" }) : /* @__PURE__ */ i(Ro, { fontSize: "small" }),
                      /* @__PURE__ */ i(P, { children: s === "light" ? "Modo oscuro" : "Modo claro" })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i(
          d,
          {
            component: Ot,
            to: Me.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ i(Et, { variant: "mobile", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ f(Ud, { children: [
          l.map((y) => /* @__PURE__ */ i(
            Hd,
            {
              colors: o,
              isScrolled: r,
              onClick: () => Gr(),
              component: Ot,
              to: y.path,
              sx: { ...re.label.secondary, letterSpacing: "0.1em" },
              children: y.name
            },
            y.name
          )),
          /* @__PURE__ */ i(
            d,
            {
              sx: {
                ml: { xs: 0.5, md: 1 },
                display: "flex",
                alignItems: "center",
                flexShrink: 0
              },
              children: /* @__PURE__ */ i($o, { light: o.mode === "dark" })
            }
          ),
          /* @__PURE__ */ i(
            De,
            {
              onClick: c,
              size: "small",
              sx: {
                ml: 1,
                color: o.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: s === "light" ? /* @__PURE__ */ i(Oo, { fontSize: "small" }) : /* @__PURE__ */ i(Ro, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, zo = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], Yd = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], hp = ({
  badge: e = "ai4u // siempre activo",
  lines: t = Yd,
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const n = X(), [o, a] = H(/* @__PURE__ */ new Set()), [s, c] = H(0), l = Ht([]);
  pe(() => {
    const y = setInterval(() => c((p) => (p + 1) % zo.length), 5e3);
    return () => clearInterval(y);
  }, []), pe(() => {
    const y = [];
    return l.current.forEach((p, S) => {
      if (!p) return;
      const x = new IntersectionObserver(
        ([C]) => {
          C.isIntersecting && a((w) => new Set(w).add(S));
        },
        { threshold: 0.3 }
      );
      x.observe(p), y.push(x);
    }), () => y.forEach((p) => p.disconnect());
  }, [t.length]);
  const u = Ge((y, p) => {
    l.current[p] = y;
  }, []), m = o.size > 0 ? Math.max(...o) : -1, g = o.size / t.length * 100;
  return /* @__PURE__ */ f(d, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ f(d, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      zo.map((y, p) => /* @__PURE__ */ i(d, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ i(
        En,
        {
          src: y,
          alt: "",
          priority: p === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: p === s ? 0.35 : 0,
            transition: "opacity 2s ease-in-out, transform 12s ease-out",
            filter: "grayscale(100%) contrast(1.1)",
            transform: p === s ? "scale(1.06)" : "scale(1)"
          }
        }
      ) }, p)),
      /* @__PURE__ */ i(d, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: we(n.contrast.background, 0.55)
      } })
    ] }),
    /* @__PURE__ */ f(d, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      px: { xs: 3, md: 8, lg: 12 },
      pt: { xs: 10, md: 12 },
      pb: 0
    }, children: [
      /* @__PURE__ */ f(d, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: { xs: 10, md: 16 } }, children: [
        /* @__PURE__ */ i(d, { sx: {
          border: `1px solid ${n.contrast.text.primary}`,
          color: n.contrast.text.primary,
          px: 1.5,
          py: 0.4,
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          opacity: 0.65
        }, children: e }),
        /* @__PURE__ */ i(d, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ i(Ye, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ i(d, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ i(d, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: t.map((y, p) => {
        const S = o.has(p), x = p === m, C = S ? x ? 1 : 0.55 : 0.12, w = x ? b.accentColors.orange : n.contrast.text.primary;
        return /* @__PURE__ */ i(
          d,
          {
            ref: (O) => u(O, p),
            component: "h1",
            sx: {
              m: 0,
              fontSize: "clamp(3.5rem, 13vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              color: w,
              opacity: C,
              transition: "opacity 0.5s ease, color 0.5s ease"
            },
            children: y
          },
          p
        );
      }) }),
      /* @__PURE__ */ f(d, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ i(d, { sx: { borderTop: `1px solid ${we(n.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ i(d, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ i(
          Tn,
          {
            variant: "primary",
            text: r,
            size: "large",
            showIcon: !1,
            sx: {
              height: { xs: "48px", md: "52px" },
              px: { xs: 4, md: 6 },
              fontSize: { xs: "0.8rem", md: "0.85rem" },
              fontWeight: 400,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              borderRadius: 0,
              bgcolor: "transparent",
              color: n.contrast.text.primary,
              border: `1px solid ${n.contrast.text.primary}`,
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: b.accentColors.orange,
                borderColor: b.accentColors.orange,
                color: "#fff"
              }
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ i(d, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ i(d, { sx: { height: "1px", bgcolor: we(n.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ i(d, { sx: {
      height: "100%",
      bgcolor: b.accentColors.orange,
      width: `${g}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, Mo = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], qd = ["agentes", "entrenamiento", "automatizaciones"], gp = ({
  badge: e = "ai4u.equipo // siempre activo",
  primaryButtonText: t = "hablar con el equipo"
}) => {
  const r = X(), [n, o] = H(0);
  return pe(() => {
    const a = setInterval(
      () => o((s) => (s + 1) % Mo.length),
      5e3
    );
    return () => clearInterval(a);
  }, []), /* @__PURE__ */ f(d, { sx: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }, children: [
    /* @__PURE__ */ f(d, { sx: { position: "absolute", inset: 0 }, children: [
      Mo.map((a, s) => /* @__PURE__ */ i(d, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ i(
        En,
        {
          src: a,
          alt: "",
          priority: s === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%) contrast(1.1)",
            opacity: s === n ? 0.38 : 0,
            transform: s === n ? "scale(1.06)" : "scale(1)",
            transition: "opacity 2s ease-in-out, transform 12s ease-out"
          }
        }
      ) }, s)),
      /* @__PURE__ */ i(d, { sx: {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(
            to bottom,
            ${we(r.contrast.background, 0.05)} 0%,
            ${we(r.contrast.background, 0.2)}  35%,
            ${we(r.contrast.background, 0.72)} 72%,
            ${we(r.contrast.background, 0.93)} 100%
          )`
      } })
    ] }),
    /* @__PURE__ */ i(Ye, { sx: {
      position: "absolute",
      top: { xs: 72, md: 24 },
      right: { xs: 24, md: 40 },
      fontSize: "0.65rem",
      opacity: 0.3,
      zIndex: 2,
      color: r.contrast.text.primary
    }, children: "6.2442° N, 75.5812° W" }),
    /* @__PURE__ */ f(d, { sx: {
      position: "absolute",
      bottom: 28,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "6px",
      "@keyframes breathe": {
        "0%, 100%": { opacity: 0.2 },
        "50%": { opacity: 0.55 }
      },
      animation: "breathe 2.5s ease-in-out infinite"
    }, children: [
      /* @__PURE__ */ i(Ye, { sx: {
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: r.contrast.text.primary,
        opacity: 0.5
      }, children: "scroll" }),
      /* @__PURE__ */ i(d, { sx: {
        width: "1px",
        height: "36px",
        background: `linear-gradient(to bottom, ${we(r.contrast.text.primary, 0.25)}, transparent)`
      } })
    ] }),
    /* @__PURE__ */ f(d, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 4,
      px: { xs: 3, md: 5 },
      pb: { xs: 10, md: 6 }
    }, children: [
      /* @__PURE__ */ f(d, { children: [
        /* @__PURE__ */ i(Ye, { sx: {
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: b.accentColors.orange,
          mb: 2,
          display: "block"
        }, children: e }),
        /* @__PURE__ */ f(
          d,
          {
            component: "h1",
            sx: {
              m: 0,
              fontSize: { xs: "clamp(3rem, 12vw, 5rem)", md: "clamp(4rem, 8vw, 7rem)" },
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              lineHeight: 0.87,
              letterSpacing: "-0.045em",
              color: r.contrast.text.primary
            },
            children: [
              "más tiempo",
              /* @__PURE__ */ i("br", {}),
              "para lo que",
              /* @__PURE__ */ i("br", {}),
              "importa."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ f(d, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2.5,
        flexShrink: 0,
        pb: "4px"
      }, children: [
        /* @__PURE__ */ i(d, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: qd.map((a) => /* @__PURE__ */ i(Ye, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: r.contrast.text.primary,
          opacity: 0.35
        }, children: a }, a)) }),
        /* @__PURE__ */ i(
          Tn,
          {
            variant: "primary",
            text: t,
            size: "large",
            showIcon: !1,
            sx: {
              height: { xs: "44px", md: "50px" },
              px: { xs: 3, md: 5 },
              fontSize: { xs: "0.75rem", md: "0.82rem" },
              fontWeight: 400,
              fontFamily: "monospace",
              letterSpacing: "0.05em",
              borderRadius: 0,
              bgcolor: r.contrast.text.primary,
              color: r.contrast.background,
              border: "none",
              transition: "all 0.25s ease",
              "&:hover": {
                bgcolor: b.accentColors.orange,
                color: "#fff"
              }
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i(d, { sx: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgcolor: we(r.contrast.text.primary, 0.1),
      zIndex: 3
    } })
  ] });
}, xp = ({
  label: e,
  body: t,
  pillars: r,
  defaultOpen: n = !0,
  accentColor: o = b.hotOrange
}) => {
  const [a, s] = H(n), c = X();
  return /* @__PURE__ */ f(
    d,
    {
      sx: {
        borderRadius: 0,
        overflow: "hidden",
        border: `1px solid ${c.contrast.border}`,
        backgroundColor: c.contrast.surface
      },
      children: [
        /* @__PURE__ */ f(
          d,
          {
            component: "button",
            onClick: () => s((l) => !l),
            sx: {
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 1.5,
              px: 2.5,
              background: "none",
              border: "none",
              cursor: "pointer",
              borderBottom: a ? `1px solid ${c.contrast.border}` : "none"
            },
            children: [
              /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
                /* @__PURE__ */ i(d, { sx: { width: 3, height: 16, backgroundColor: o } }),
                /* @__PURE__ */ i(
                  d,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 700,
                      color: c.contrast.text.secondary,
                      letterSpacing: "0.25em"
                    },
                    children: e
                  }
                )
              ] }),
              /* @__PURE__ */ i(
                d,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 11,
                    color: c.contrast.text.disabled,
                    transform: a ? "rotate(180deg)" : "rotate(0)",
                    display: "inline-block",
                    transition: "transform 0.2s"
                  },
                  children: "∧"
                }
              )
            ]
          }
        ),
        a && /* @__PURE__ */ f(d, { sx: { p: 2.5 }, children: [
          /* @__PURE__ */ i(
            d,
            {
              component: "div",
              sx: {
                fontSize: 13.5,
                lineHeight: 1.75,
                color: c.contrast.text.primary,
                fontStyle: "italic",
                maxWidth: 720
              },
              children: t
            }
          ),
          r && r.length > 0 && /* @__PURE__ */ i(d, { sx: { display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }, children: r.map((l) => /* @__PURE__ */ f(
            d,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.875,
                px: 1.5,
                py: 0.625,
                backgroundColor: `${l.color}0d`,
                border: `1px solid ${l.color}30`
              },
              children: [
                /* @__PURE__ */ i(lr, { id: l.icon, size: 12, color: l.color, strokeWidth: 2 }),
                /* @__PURE__ */ i(
                  d,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      color: l.color
                    },
                    children: l.label
                  }
                )
              ]
            },
            l.label
          )) })
        ] })
      ]
    }
  );
}, yp = ({
  logo: e,
  title: t,
  subtitle: r,
  badges: n,
  actions: o
}) => {
  const a = X();
  return /* @__PURE__ */ f(
    d,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 3.5,
        backgroundColor: a.contrast.surface,
        borderBottom: `1px solid ${a.contrast.border}`,
        flexShrink: 0
      },
      children: [
        /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          e && /* @__PURE__ */ i(d, { sx: { display: "inline-flex" }, children: e }),
          e && /* @__PURE__ */ i(d, { sx: { width: "1px", height: 28, backgroundColor: a.contrast.border } }),
          /* @__PURE__ */ f(d, { children: [
            /* @__PURE__ */ i(
              d,
              {
                component: "h1",
                sx: {
                  m: 0,
                  fontFamily: '"Red Hat Display", sans-serif',
                  fontWeight: 900,
                  fontSize: 16,
                  letterSpacing: "0.04em",
                  color: a.contrast.text.primary
                },
                children: t
              }
            ),
            r && /* @__PURE__ */ i(
              d,
              {
                sx: {
                  fontFamily: '"Necto Mono", monospace',
                  fontSize: 10,
                  color: a.contrast.text.disabled,
                  mt: 0.125,
                  letterSpacing: "0.12em"
                },
                children: r
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f(d, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
          n,
          o
        ] })
      ]
    }
  );
}, bp = ({
  branding: e,
  statusBadge: t,
  groups: r,
  stats: n,
  clock: o,
  signature: a,
  width: s = 252
}) => {
  const c = b.erieBlack, l = "rgba(255,255,255,0.06)", u = b.white, m = "rgba(255,255,255,0.45)";
  return /* @__PURE__ */ f(
    d,
    {
      component: "aside",
      sx: {
        width: s,
        flexShrink: 0,
        backgroundColor: c,
        borderRight: `1px solid ${l}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        color: u
      },
      children: [
        /* @__PURE__ */ f(d, { sx: { p: "22px 20px 18px", borderBottom: `1px solid ${l}` }, children: [
          e.logo && /* @__PURE__ */ i(d, { sx: { mb: 1.75 }, children: e.logo }),
          /* @__PURE__ */ i(
            d,
            {
              sx: {
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.2em",
                color: u,
                lineHeight: 1
              },
              children: e.title
            }
          ),
          e.subtitle && /* @__PURE__ */ i(
            d,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9,
                color: m,
                letterSpacing: "0.15em",
                mt: 0.5
              },
              children: e.subtitle
            }
          )
        ] }),
        t && /* @__PURE__ */ i(d, { sx: { p: "10px 20px", borderBottom: `1px solid ${l}` }, children: /* @__PURE__ */ f(
          d,
          {
            sx: {
              display: "inline-flex",
              alignItems: "center",
              gap: 0.875,
              px: 1.375,
              py: 0.625,
              backgroundColor: `${b.telemetry[t.status]}1a`,
              border: `1px solid ${b.telemetry[t.status]}33`
            },
            children: [
              /* @__PURE__ */ i(nn, { status: t.status, size: 6 }),
              /* @__PURE__ */ i(
                d,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 9,
                    color: b.telemetry[t.status],
                    fontWeight: 700,
                    letterSpacing: "0.15em"
                  },
                  children: t.label
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ i(d, { component: "nav", sx: { flex: 1, py: 1.75 }, children: r.map((g) => /* @__PURE__ */ f(d, { sx: { mb: 2.25 }, children: [
          /* @__PURE__ */ f(
            d,
            {
              sx: {
                px: "20px",
                pb: 0.75,
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                fontWeight: 700,
                color: m,
                letterSpacing: "0.28em"
              },
              children: [
                "◈ ",
                g.label
              ]
            }
          ),
          g.items.map((y) => /* @__PURE__ */ f(
            d,
            {
              component: "a",
              href: y.href,
              target: y.external ? "_blank" : void 0,
              rel: y.external ? "noopener noreferrer" : void 0,
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 1.25,
                px: "20px",
                py: 0.875,
                textDecoration: "none",
                borderLeft: "2px solid transparent",
                transition: "all 0.15s",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.05)",
                  borderLeftColor: b.hotOrange
                }
              },
              children: [
                /* @__PURE__ */ i(
                  lr,
                  {
                    id: y.icon,
                    size: 14,
                    color: "rgba(255,255,255,0.4)",
                    strokeWidth: 1.6
                  }
                ),
                /* @__PURE__ */ f(d, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ i(
                    d,
                    {
                      sx: {
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: u,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      },
                      children: y.name
                    }
                  ),
                  y.hint && /* @__PURE__ */ i(
                    d,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8.5,
                        color: b.moderateBlue,
                        letterSpacing: "0.08em",
                        mt: "1px",
                        opacity: 0.8
                      },
                      children: y.hint
                    }
                  )
                ] }),
                y.status && /* @__PURE__ */ i(nn, { status: y.status, size: 6 })
              ]
            },
            y.id
          ))
        ] }, g.id)) }),
        n && n.length > 0 && /* @__PURE__ */ i(
          d,
          {
            sx: {
              borderTop: `1px solid ${l}`,
              p: "14px 20px",
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(n.length, 2)}, 1fr)`,
              gap: 1
            },
            children: n.map((g) => /* @__PURE__ */ f(
              d,
              {
                sx: {
                  textAlign: "center",
                  py: 1.25,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                  /* @__PURE__ */ i(
                    d,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 22,
                        fontWeight: 700,
                        color: g.color ?? b.moderateBlue,
                        lineHeight: 1
                      },
                      children: g.value
                    }
                  ),
                  /* @__PURE__ */ i(
                    d,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8,
                        color: m,
                        letterSpacing: "0.1em",
                        mt: 0.375
                      },
                      children: g.label
                    }
                  )
                ]
              },
              g.label
            ))
          }
        ),
        o && /* @__PURE__ */ f(
          d,
          {
            sx: {
              borderTop: `1px solid ${l}`,
              p: "12px 20px",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ i(
                d,
                {
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 19,
                    fontWeight: 700,
                    color: u,
                    letterSpacing: "0.05em",
                    lineHeight: 1
                  },
                  children: o.time
                }
              ),
              o.date && /* @__PURE__ */ i(
                d,
                {
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 8.5,
                    color: m,
                    mt: 0.5,
                    letterSpacing: "0.1em"
                  },
                  children: o.date
                }
              )
            ]
          }
        ),
        a && /* @__PURE__ */ f(
          d,
          {
            sx: {
              borderTop: `1px solid ${l}`,
              p: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 1.5
            },
            children: [
              a.logo,
              /* @__PURE__ */ f(d, { children: [
                /* @__PURE__ */ i(
                  d,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 8.5,
                      color: m,
                      letterSpacing: "0.12em"
                    },
                    children: a.caption
                  }
                ),
                /* @__PURE__ */ i(
                  d,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 11,
                      fontWeight: 700,
                      color: a.accentColor ?? b.hotOrange,
                      letterSpacing: "0.18em"
                    },
                    children: a.label
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, Sp = ({ children: e }) => /* @__PURE__ */ f(d, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ i(rd, {}),
  /* @__PURE__ */ i(Gd, {}),
  /* @__PURE__ */ i(
    d,
    {
      component: "main",
      sx: {
        flexGrow: 1,
        width: "100%",
        maxWidth: "100%"
      },
      children: e
    }
  ),
  /* @__PURE__ */ i(Fd, {})
] }), Kd = () => {
  const e = ye(), t = X();
  return /* @__PURE__ */ i(
    d,
    {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        gap: 3,
        padding: 4,
        background: `linear-gradient(135deg, ${t.contrast.surface} 0%, ${t.contrast.background} 100%)`
      },
      children: /* @__PURE__ */ f(d, { sx: { width: "100%", maxWidth: 600 }, children: [
        /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            height: 300,
            sx: {
              borderRadius: 2,
              mb: 2,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ i(
          ne,
          {
            variant: "text",
            height: 40,
            width: "80%",
            sx: {
              mb: 1,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ i(
          ne,
          {
            variant: "text",
            height: 24,
            width: "60%",
            sx: {
              mb: 1,
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ),
        /* @__PURE__ */ i(
          ne,
          {
            variant: "text",
            height: 24,
            width: "70%",
            sx: {
              bgcolor: e.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        )
      ] })
    }
  );
}, vp = ({
  children: e,
  fallback: t = /* @__PURE__ */ i(Kd, {})
}) => /* @__PURE__ */ i(aa, { fallback: t, children: e }), wp = () => {
  const { pathname: e, hash: t } = la();
  return pe(() => {
    if (t) {
      const r = t.replace("#", ""), n = document.getElementById(r);
      if (n)
        n.scrollIntoView({ behavior: "smooth" });
      else {
        const o = setTimeout(() => {
          const a = document.getElementById(r);
          a && a.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(o);
      }
    } else
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }, [e, t]), null;
}, Cp = ({ children: e }) => {
  const [t, r] = H(!0), n = ye(), o = _e(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return pe(() => {
    let a = 0;
    const s = o.length, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((u) => {
      const m = new Image();
      m.onload = c, m.onerror = l, m.src = u;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ i(
    d,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ i(Ke, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(d, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Et, {}) }),
        /* @__PURE__ */ i(d, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ f(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ f(he, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ i("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, kp = ({ children: e }) => {
  const [t, r] = H(!0), n = ye(), o = _e(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return pe(() => {
    let a = 0;
    const s = o.length, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((u) => {
      const m = new Image();
      m.onload = c, m.onerror = l, m.src = u;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ i(
    d,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ i(Ke, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(d, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Et, {}) }),
        /* @__PURE__ */ i(d, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ f(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ f(he, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ i("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, Ep = ({ children: e }) => {
  const [t, r] = H(!0), n = ye();
  return pe(() => {
    const o = [
      "/assets/images/hero-image.png",
      "/assets/images/hero-image2.png",
      "/assets/images/hero-image3.png",
      "/assets/images/ai4u-logo.png",
      "/assets/images/ai4u-logo-dark.png"
    ];
    let a = 0;
    const s = o.length, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((u) => {
      const m = new Image();
      m.onload = c, m.onerror = l, m.src = u;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, []), t ? /* @__PURE__ */ i(
    d,
    {
      sx: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
      },
      children: /* @__PURE__ */ i(Ke, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(d, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Et, {}) }),
        /* @__PURE__ */ i(d, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            height: 400,
            sx: {
              borderRadius: 2,
              bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
          }
        ) }),
        /* @__PURE__ */ f(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 40,
              width: "80%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "60%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "text",
              height: 24,
              width: "70%",
              sx: {
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ f(he, { direction: "row", spacing: 2, children: [
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          ),
          /* @__PURE__ */ i(
            ne,
            {
              variant: "rectangular",
              height: 48,
              width: 160,
              sx: {
                borderRadius: 2,
                bgcolor: n.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
              }
            }
          )
        ] })
      ] }) })
    }
  ) : /* @__PURE__ */ i("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, Tp = ({ children: e }) => /* @__PURE__ */ i(Se, { children: e }), Ip = ({
  children: e,
  title: t,
  subtitle: r,
  className: n = "",
  variant: o = "default"
}) => {
  const a = ye(), s = () => {
    switch (o) {
      case "glassmorphism":
        return {
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)"
        };
      case "futuristic":
        return {
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0A0A0A 0%, #1f2937 100%)",
          color: "#FFFFFF"
        };
      default:
        return {
          minHeight: "100vh",
          background: "#FFFFFF"
        };
    }
  }, c = () => {
    switch (o) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
        };
      default:
        return {
          background: "#FFFFFF",
          borderBottom: `1px solid ${a.palette.divider}`
        };
    }
  };
  return /* @__PURE__ */ f(d, { sx: s(), className: n, children: [
    (t || r) && /* @__PURE__ */ i(d, { component: "header", sx: c(), children: /* @__PURE__ */ i(Ke, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ f(d, { sx: { textAlign: "center" }, children: [
      t && /* @__PURE__ */ i(kn, { sx: {
        mb: { xs: 4, md: 6 },
        color: o === "futuristic" ? "#FFFFFF" : "#171717"
      }, children: t }),
      r && /* @__PURE__ */ i(Ie, { sx: {
        fontSize: { xs: "1.125rem", md: "1.25rem" },
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        maxWidth: "md",
        mx: "auto",
        lineHeight: 1.6
      }, children: r })
    ] }) }) }),
    /* @__PURE__ */ i(d, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: e })
  ] });
}, $p = ({
  children: e,
  title: t,
  description: r,
  className: n = "",
  variant: o = "default"
}) => {
  const a = ye();
  return /* @__PURE__ */ f(d, { sx: (() => {
    switch (o) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: a.spacing(4),
          padding: a.spacing(4)
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: a.spacing(4),
          padding: a.spacing(4)
        };
      default:
        return {
          background: a.palette.background.paper,
          borderRadius: a.spacing(2),
          border: `1px solid ${a.palette.divider}`,
          padding: a.spacing(3)
        };
    }
  })(), className: n, children: [
    (t || r) && /* @__PURE__ */ f(d, { sx: { mb: 4 }, children: [
      t && /* @__PURE__ */ i(Ii, { sx: {
        mb: 2,
        // Estilo minimalista: usar color del tema en lugar de gradiente naranja
        color: o === "futuristic" ? "#FFFFFF" : a.palette.text.primary
      }, children: t }),
      r && /* @__PURE__ */ i(Ie, { sx: {
        fontSize: "1.125rem",
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        mb: 4
      }, children: r })
    ] }),
    e
  ] });
}, Ap = ({
  children: e,
  className: t = "",
  maxWidth: r = "xl",
  padding: n = "lg"
}) => /* @__PURE__ */ i(
  Ke,
  {
    maxWidth: r,
    sx: (() => {
      switch (n) {
        case "none":
          return {};
        case "sm":
          return { px: 2, py: 2 };
        case "md":
          return { px: 3, py: 3 };
        case "lg":
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
        case "xl":
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 6 };
        default:
          return { px: { xs: 2, sm: 3, lg: 4 }, py: 4 };
      }
    })(),
    className: t,
    children: e
  }
), _p = ({
  children: e,
  cols: t = 1,
  gap: r = "lg",
  className: n = ""
}) => /* @__PURE__ */ i(
  $e,
  {
    container: !0,
    spacing: (() => {
      switch (r) {
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 4;
      }
    })(),
    className: n,
    children: na.Children.map(e, (a, s) => /* @__PURE__ */ i(
      $e,
      {
        size: {
          xs: 12,
          sm: t >= 2 ? 6 : 12,
          md: t >= 3 ? 4 : t >= 2 ? 6 : 12,
          lg: t >= 4 ? 3 : t >= 3 ? 4 : t >= 2 ? 6 : 12,
          xl: t >= 6 ? 2 : t >= 4 ? 3 : t >= 3 ? 4 : t >= 2 ? 6 : 12
        },
        children: a
      },
      s
    ))
  }
), Rp = ({
  children: e,
  spacing: t = "md",
  className: r = ""
}) => /* @__PURE__ */ i(
  he,
  {
    spacing: (() => {
      switch (t) {
        case "sm":
          return 2;
        case "md":
          return 3;
        case "lg":
          return 4;
        case "xl":
          return 6;
        default:
          return 3;
      }
    })(),
    className: r,
    children: e
  }
);
var Xd = /* @__PURE__ */ ((e) => (e.OPERATION = "operation", e.STRATEGY = "strategy", e.EDUCATION = "education", e.TRANSFORMATION = "transformation", e))(Xd || {}), Qd = /* @__PURE__ */ ((e) => (e.AUTOMATION = "automation", e.AI_ASSISTANT = "ai_assistant", e.ANALYTICS = "analytics", e.ECOMMERCE = "ecommerce", e.TRAINING = "training", e.CONSULTING = "consulting", e))(Qd || {}), Jd = /* @__PURE__ */ ((e) => (e.ACTIVE = "active", e.INACTIVE = "inactive", e.COMING_SOON = "coming_soon", e.DEPRECATED = "deprecated", e))(Jd || {});
function Po(e) {
  return String(e).padStart(2, "0");
}
function In() {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/Bogota" }).format(/* @__PURE__ */ new Date());
}
function Op(e) {
  const t = In(), r = /* @__PURE__ */ new Date(`${t}T00:00:00Z`), n = new Date(r.getTime() - e * 864e5);
  return new Intl.DateTimeFormat("en-CA", { timeZone: "UTC" }).format(n);
}
function _r() {
  const [e, t] = In().split("-").map(Number);
  return { year: e, month: t };
}
function Ri(e, t, r) {
  const n = e * 12 + (t - 1) + r;
  return { year: Math.floor(n / 12), month: (n % 12 + 12) % 12 + 1 };
}
function $n(e, t) {
  return new Date(e, t, 0).getDate();
}
function Tt(e, t, r) {
  return `${e}-${Po(t)}-${Po(r)}`;
}
function Zd(e = 0) {
  const t = _r(), { year: r, month: n } = Ri(t.year, t.month, e);
  return Tt(r, n, 1);
}
function eu(e = 0) {
  const t = _r(), { year: r, month: n } = Ri(t.year, t.month, e);
  return Tt(r, n, $n(r, n));
}
function zp() {
  return { from: Zd(-1), to: eu(-1) };
}
function Mp() {
  const { year: e, month: t } = _r(), r = Math.floor((t - 1) / 3) * 3 + 1, n = r + 2;
  return {
    from: Tt(e, r, 1),
    to: Tt(e, n, $n(e, n))
  };
}
function Pp() {
  const { year: e, month: t } = _r(), r = t <= 6 ? 1 : 7, n = r + 5;
  return {
    from: Tt(e, r, 1),
    to: Tt(e, n, $n(e, n))
  };
}
function Fp() {
  const e = In();
  return { from: `${e.slice(0, 4)}-01-01`, to: e };
}
export {
  jp as AI4U_DESIGN_TOKENS,
  b as AI4U_PALETTE,
  ip as AuthCard,
  qe as BORDER_TOKENS,
  Jt as BREAKPOINT_TOKENS,
  Tp as BasicLoadingWrapper,
  Ie as BodyText,
  zu as Branding,
  Xu as Breadcrumb,
  Nu as BudgetCard,
  $r as Button,
  Vp as COMPONENT_SPACING,
  Wp as COMPONENT_VARIANTS,
  Di as CONTRAST_PAIRS,
  Ar as Card,
  Mu as ChatButton,
  Ye as CodeText,
  Ei as ColorModeContext,
  Ap as Container,
  Dt as ContextualLink,
  lr as DashboardIcon,
  bp as DashboardSidebar,
  yp as DashboardTopBar,
  Tn as DiagnosticCTA,
  fp as Documentation,
  Qu as ErrorBoundary,
  rp as ExpandableSection,
  tp as FilterStats,
  Fd as Footer,
  sr as GeometricIcon,
  Xl as Giant,
  Ou as GiantNumber,
  rd as GoogleTranslateProvider,
  $o as GoogleTranslateWidget,
  _p as Grid,
  kn as H1,
  Ii as H2,
  Yt as H3,
  Ae as H4,
  Su as H5,
  vu as H6,
  gp as HeroFullscreen,
  cp as HeroSection,
  Lu as ImageLightbox,
  Cu as ImagePreloader,
  _u as IntelligentImagePreloader,
  Sp as Layout,
  En as LazyImage,
  vp as LazyPage,
  ku as LoadingScreen,
  kp as LoadingWrapper,
  Et as Logo,
  Hp as MUI_BREAKPOINTS,
  Wu as MetricCard,
  wd as Modal,
  mp as ModelingInterface,
  op as ModuleCard,
  Gd as Navbar,
  sp as Navigation,
  od as NavigationDot,
  $u as OptimizedImage,
  Au as OptimizedImageAdvanced,
  Ip as PageLayout,
  ap as PeriodPicker,
  Tu as PixelArtFilter,
  Eu as PixelArtImage,
  Du as ProcessStep,
  np as ProgressiveContent,
  Ju as RelatedPages,
  Ai as SEOHead,
  Ft as SHADOW_TOKENS,
  Je as SPACING_TOKENS,
  ct as SURFACE_PRESETS,
  hp as ScrollRevealHero,
  wp as ScrollToTop,
  $p as Section,
  bu as Select,
  Ku as ServiceCard,
  Qd as ServiceCategory,
  Zu as ServiceCrossLink,
  Jd as ServiceStatus,
  Xd as ServiceSuperCategory,
  Ru as ServiceThumbnail,
  Pu as ServicesButton,
  up as ServicesFilter,
  pp as ServicesStats,
  Cp as SimpleAppWrapper,
  Ep as SimpleLoadingWrapper,
  lp as SleepWidget,
  de as SmallText,
  Rp as Stack,
  nn as StatusDot,
  ep as SuperCategoryFilter,
  mu as SurfaceProvider,
  re as TEXT_VARIANTS,
  Up as TRANSITION_TOKENS,
  V as TYPOGRAPHY_TOKENS,
  Gp as TYPOGRAPHY_UTILITIES,
  Io as TextField,
  yu as Textarea,
  fu as ThemeProvider,
  Fu as TransactionCard,
  wu as Typography,
  wu as TypographyWrapper,
  xp as VisionBanner,
  dp as WeatherWidget,
  Wi as Z_INDEX_TOKENS,
  Ti as analytics,
  Iu as buildSEOMetadata,
  Yu as cleanMetaDescription,
  Yp as createAI4UTokens,
  Op as daysAgoBogotaIso,
  qu as generateKeywords,
  Id as getBreadcrumbStructuredData,
  Gu as getCanonicalUrl,
  Mp as getCurrentQuarterRangeBogota,
  Pp as getCurrentSemesterRangeBogota,
  Hu as getFAQStructuredData,
  Zd as getFirstDayOfMonthBogota,
  Bu as getHomeStructuredData,
  eu as getLastDayOfMonthBogota,
  Uu as getPageMetaTags,
  zp as getPreviousMonthRangeBogota,
  Td as getServiceStructuredData,
  ju as getServicesStructuredData,
  Vu as getUseCasesStructuredData,
  Fp as getYtdRangeBogota,
  xu as initAnalytics,
  In as todayBogotaIso,
  uu as useBreakpoint,
  yt as useBreakpointUp,
  Cn as useColorMode,
  X as useColors,
  Ni as useComponentColors,
  hu as useComponentVariant,
  Lp as useContrastColors,
  gu as useContrastPair,
  pu as useIsMobile,
  Pl as useSurface
};
//# sourceMappingURL=index.js.map
