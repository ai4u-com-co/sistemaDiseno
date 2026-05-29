var pa = Object.defineProperty;
var fa = (e, t, r) => t in e ? pa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ue = (e, t, r) => fa(e, typeof t != "symbol" ? t + "" : t, r);
import { AI4U_PALETTE as b, TEXT_VARIANTS as re, TYPOGRAPHY_TOKENS as Q, SHADOW_TOKENS as tt, SURFACE_PRESETS as ct, CONTRAST_PAIRS as ha, useComponentColors as ma, BREAKPOINT_TOKENS as Wr } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as zf, BORDER_TOKENS as Pf, COMPONENT_SPACING as Df, COMPONENT_VARIANTS as Ff, SPACING_TOKENS as Lf, TRANSITION_TOKENS as Wf, TYPOGRAPHY_UTILITIES as Bf, Z_INDEX_TOKENS as jf, createAI4UTokens as Vf, useContrastColors as Uf } from "./tokens/index.js";
import { jsxs as f, jsx as a, Fragment as be } from "react/jsx-runtime";
import { styled as Ie, Button as Je, Box as u, Typography as P, useTheme as we, Container as qe, Stack as he, Skeleton as ne, useMediaQuery as sr, Menu as ri, MenuItem as rr, Link as ni, keyframes as ga, Fab as xa, Dialog as ya, DialogTitle as ba, IconButton as Fe, alpha as Ce, DialogContent as va, Paper as Bt, CircularProgress as Sa, TextField as oi, Card as bn, CardContent as Ht, Avatar as Zn, Chip as wt, Divider as yr, Alert as wa, AlertTitle as Ca, Collapse as ka, Grid as $e, Tabs as Ea, Tab as Ta, TableContainer as Ia, Table as Aa, TableHead as $a, TableRow as eo, TableCell as He, TableBody as Ra, AppBar as Oa, Toolbar as _a } from "@mui/material";
import * as R from "react";
import Na, { useState as V, useRef as Gt, useEffect as me, createContext as vn, useCallback as lt, useMemo as Oe, useContext as br, Component as Ma, Suspense as za } from "react";
import { Global as Pa, ThemeContext as ii } from "@emotion/react";
import Da from "@emotion/styled";
import { Receipt as Fa, MoreVert as to, AttachMoney as La, Favorite as Wa, TrendingUp as Ba, School as ja, FitnessCenter as Va, ShoppingCart as Ua, AccountBalance as Ha, Add as Ga, RefreshOutlined as Ya, ExpandMore as qa, Bed as Ka, Refresh as ai, Wifi as Xa, Bluetooth as Ja, LocationOn as Qa, WbSunny as ro, Cloud as Za, Opacity as es, ContentCopy as ts } from "@mui/icons-material";
import "react-dom";
const rs = Ie(Je, {
  shouldForwardProp: (e) => e !== "customVariant"
})(({ theme: e, customVariant: t }) => {
  const r = e.palette.mode === "light", n = {
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
  switch (t) {
    case "primary":
      return {
        ...n,
        backgroundColor: r ? b.black : b.white,
        color: r ? b.white : b.black,
        "&:hover": {
          backgroundColor: r ? b.gray[800] : b.gray[200],
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px 0px ${r ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`
        }
      };
    case "industrial":
      return {
        ...n,
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
    case "outline":
      return {
        ...n,
        backgroundColor: "transparent",
        color: r ? b.black : b.white,
        border: `2px solid ${r ? b.black : b.white}`,
        "&:hover": {
          backgroundColor: r ? b.black : b.white,
          color: r ? b.white : b.black
        }
      };
    case "minimal":
      return {
        ...n,
        backgroundColor: r ? b.gray[100] : b.gray[900],
        color: r ? b.black : b.white,
        "&:hover": {
          backgroundColor: r ? b.gray[200] : b.gray[800]
        }
      };
    default:
      return n;
  }
}), ns = Ie(u)(({ theme: e }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...re.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), Sn = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  label: n,
  className: o,
  sx: i,
  ...s
}) => /* @__PURE__ */ f(
  rs,
  {
    customVariant: t,
    size: r,
    className: o,
    sx: i,
    ...s,
    children: [
      n && /* @__PURE__ */ a(ns, { children: n }),
      e
    ]
  }
), os = (e) => /* @__PURE__ */ a(
  P,
  {
    variant: "h1",
    sx: {
      ...re.display.giant,
      ...e.sx
    },
    ...e
  }
), wn = (e) => /* @__PURE__ */ a(
  P,
  {
    variant: "h1",
    sx: {
      ...re.display.large,
      ...e.sx
    },
    ...e
  }
), si = (e) => /* @__PURE__ */ a(
  P,
  {
    variant: "h2",
    sx: {
      ...re.display.medium,
      ...e.sx
    },
    ...e
  }
), Yt = (e) => /* @__PURE__ */ a(
  P,
  {
    variant: "h3",
    sx: {
      ...re.display.small,
      ...e.sx
    },
    ...e
  }
), Re = (e) => /* @__PURE__ */ a(
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
), xp = (e) => /* @__PURE__ */ a(
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
), yp = (e) => /* @__PURE__ */ a(
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
), Ae = (e) => /* @__PURE__ */ a(
  P,
  {
    variant: "body1",
    sx: {
      ...re.body.regular,
      ...e.sx
    },
    ...e
  }
), de = (e) => /* @__PURE__ */ a(
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
  const t = we();
  return /* @__PURE__ */ a(
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
}, bp = ({ variant: e = "body1", ...t }) => /* @__PURE__ */ a(P, { variant: e, ...t }), is = "/assets/images/logo-v2-negro.png", as = "/assets/images/logo-v2-crema.png", Ct = ({
  variant: e = "desktop",
  light: t = !1,
  onClick: r,
  sx: n,
  ...o
}) => /* @__PURE__ */ a(
  u,
  {
    component: "img",
    src: t ? as : is,
    alt: "AI4U Logo",
    onClick: () => {
      r ? r() : window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    sx: {
      height: e === "desktop" ? 48 : 42,
      width: "auto",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
      "&:hover": {
        transform: "scale(1.02)"
      },
      ...n
    },
    ...o
  }
), ss = (e, t = {}) => {
  const [r, n] = V(!1), [o, i] = V(!1), [s, l] = V(!1), [c, d] = V(""), p = Gt(null), { threshold: g = 0.1, rootMargin: y = "50px", priority: h = !1 } = t;
  return me(() => {
    if (d(e), h) {
      i(!0);
      return;
    }
    const v = new IntersectionObserver(
      ([x]) => {
        x.isIntersecting && (i(!0), v.disconnect());
      },
      {
        threshold: g,
        rootMargin: y
      }
    );
    return p.current && v.observe(p.current), () => {
      v.disconnect();
    };
  }, [g, y, h, e]), me(() => {
    if (!o) return;
    const v = new Image();
    v.onload = () => {
      n(!0), l(!1);
    }, v.onerror = () => {
      l(!0), n(!1);
    }, v.src = c;
  }, [c, o]), {
    imgRef: p,
    isLoaded: r,
    isInView: o,
    error: s,
    imageSrc: c
  };
}, nn = (e = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: e
  });
};
function pt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Qe = "$$material";
function ls(e) {
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
var cs = {
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
function ds(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var us = /[A-Z]|^ms/g, ps = /_EMO_([^_]+?)_([^]*?)_EMO_/g, li = function(t) {
  return t.charCodeAt(1) === 45;
}, no = function(t) {
  return t != null && typeof t != "boolean";
}, Br = /* @__PURE__ */ ds(function(e) {
  return li(e) ? e : e.replace(us, "-$&").toLowerCase();
}), oo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ps, function(n, o, i) {
          return et = {
            name: o,
            styles: i,
            next: et
          }, o;
        });
  }
  return cs[t] !== 1 && !li(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function lr(e, t, r) {
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
        return et = {
          name: o.name,
          styles: o.styles,
          next: et
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            et = {
              name: s.name,
              styles: s.styles,
              next: et
            }, s = s.next;
        var l = i.styles + ";";
        return l;
      }
      return fs(e, t, r);
    }
  }
  var c = r;
  return c;
}
function fs(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += lr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var l = s;
        no(l) && (n += Br(i) + ":" + oo(i, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var c = 0; c < s.length; c++)
          no(s[c]) && (n += Br(i) + ":" + oo(i, s[c]) + ";");
      else {
        var d = lr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Br(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var io = /label:\s*([^\s;{]+)\s*(;|$)/g, et;
function hs(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  et = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += lr(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += lr(r, t, e[l]), n) {
      var c = i;
      o += c[l];
    }
  io.lastIndex = 0;
  for (var d = "", p; (p = io.exec(o)) !== null; )
    d += "-" + p[1];
  var g = ls(o) + d;
  return {
    name: g,
    styles: o,
    next: et
  };
}
function ms(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var on = { exports: {} }, Qt = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function gs() {
  if (ao) return oe;
  ao = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function E(k) {
    if (typeof k == "object" && k !== null) {
      var O = k.$$typeof;
      switch (O) {
        case t:
          switch (k = k.type, k) {
            case c:
            case d:
            case n:
            case i:
            case o:
            case g:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case l:
                case p:
                case v:
                case h:
                case s:
                  return k;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function T(k) {
    return E(k) === d;
  }
  return oe.AsyncMode = c, oe.ConcurrentMode = d, oe.ContextConsumer = l, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = p, oe.Fragment = n, oe.Lazy = v, oe.Memo = h, oe.Portal = r, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = g, oe.isAsyncMode = function(k) {
    return T(k) || E(k) === c;
  }, oe.isConcurrentMode = T, oe.isContextConsumer = function(k) {
    return E(k) === l;
  }, oe.isContextProvider = function(k) {
    return E(k) === s;
  }, oe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, oe.isForwardRef = function(k) {
    return E(k) === p;
  }, oe.isFragment = function(k) {
    return E(k) === n;
  }, oe.isLazy = function(k) {
    return E(k) === v;
  }, oe.isMemo = function(k) {
    return E(k) === h;
  }, oe.isPortal = function(k) {
    return E(k) === r;
  }, oe.isProfiler = function(k) {
    return E(k) === i;
  }, oe.isStrictMode = function(k) {
    return E(k) === o;
  }, oe.isSuspense = function(k) {
    return E(k) === g;
  }, oe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === n || k === d || k === i || k === o || k === g || k === y || typeof k == "object" && k !== null && (k.$$typeof === v || k.$$typeof === h || k.$$typeof === s || k.$$typeof === l || k.$$typeof === p || k.$$typeof === C || k.$$typeof === w || k.$$typeof === I || k.$$typeof === x);
  }, oe.typeOf = E, oe;
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
var so;
function xs() {
  return so || (so = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function E(N) {
      return typeof N == "string" || typeof N == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      N === n || N === d || N === i || N === o || N === g || N === y || typeof N == "object" && N !== null && (N.$$typeof === v || N.$$typeof === h || N.$$typeof === s || N.$$typeof === l || N.$$typeof === p || N.$$typeof === C || N.$$typeof === w || N.$$typeof === I || N.$$typeof === x);
    }
    function T(N) {
      if (typeof N == "object" && N !== null) {
        var Ne = N.$$typeof;
        switch (Ne) {
          case t:
            var it = N.type;
            switch (it) {
              case c:
              case d:
              case n:
              case i:
              case o:
              case g:
                return it;
              default:
                var Nt = it && it.$$typeof;
                switch (Nt) {
                  case l:
                  case p:
                  case v:
                  case h:
                  case s:
                    return Nt;
                  default:
                    return Ne;
                }
            }
          case r:
            return Ne;
        }
      }
    }
    var k = c, O = d, U = l, D = s, F = t, H = p, L = n, m = v, M = h, _ = r, B = i, q = o, pe = g, ke = !1;
    function je(N) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(N) || T(N) === c;
    }
    function A(N) {
      return T(N) === d;
    }
    function z(N) {
      return T(N) === l;
    }
    function W(N) {
      return T(N) === s;
    }
    function j(N) {
      return typeof N == "object" && N !== null && N.$$typeof === t;
    }
    function G(N) {
      return T(N) === p;
    }
    function X(N) {
      return T(N) === n;
    }
    function K(N) {
      return T(N) === v;
    }
    function Y(N) {
      return T(N) === h;
    }
    function J(N) {
      return T(N) === r;
    }
    function te(N) {
      return T(N) === i;
    }
    function Z(N) {
      return T(N) === o;
    }
    function Ee(N) {
      return T(N) === g;
    }
    ie.AsyncMode = k, ie.ConcurrentMode = O, ie.ContextConsumer = U, ie.ContextProvider = D, ie.Element = F, ie.ForwardRef = H, ie.Fragment = L, ie.Lazy = m, ie.Memo = M, ie.Portal = _, ie.Profiler = B, ie.StrictMode = q, ie.Suspense = pe, ie.isAsyncMode = je, ie.isConcurrentMode = A, ie.isContextConsumer = z, ie.isContextProvider = W, ie.isElement = j, ie.isForwardRef = G, ie.isFragment = X, ie.isLazy = K, ie.isMemo = Y, ie.isPortal = J, ie.isProfiler = te, ie.isStrictMode = Z, ie.isSuspense = Ee, ie.isValidElementType = E, ie.typeOf = T;
  }()), ie;
}
var lo;
function ci() {
  return lo || (lo = 1, process.env.NODE_ENV === "production" ? Qt.exports = gs() : Qt.exports = xs()), Qt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jr, co;
function ys() {
  if (co) return jr;
  co = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var c = Object.getOwnPropertyNames(s).map(function(p) {
        return s[p];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        d[p] = p;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jr = o() ? Object.assign : function(i, s) {
    for (var l, c = n(i), d, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var g in l)
        t.call(l, g) && (c[g] = l[g]);
      if (e) {
        d = e(l);
        for (var y = 0; y < d.length; y++)
          r.call(l, d[y]) && (c[d[y]] = l[d[y]]);
      }
    }
    return c;
  }, jr;
}
var Vr, uo;
function Cn() {
  if (uo) return Vr;
  uo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vr = e, Vr;
}
var Ur, po;
function di() {
  return po || (po = 1, Ur = Function.call.bind(Object.prototype.hasOwnProperty)), Ur;
}
var Hr, fo;
function bs() {
  if (fo) return Hr;
  fo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Cn(), r = {}, n = di();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in i)
        if (n(i, p)) {
          var g;
          try {
            if (typeof i[p] != "function") {
              var y = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            g = i[p](s, p, c, l, null, t);
          } catch (v) {
            g = v;
          }
          if (g && !(g instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + l + " type: " + g.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Hr = o, Hr;
}
var Gr, ho;
function vs() {
  if (ho) return Gr;
  ho = 1;
  var e = ci(), t = ys(), r = Cn(), n = di(), o = bs(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var c = "Warning: " + l;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Gr = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function g(A) {
      var z = A && (d && A[d] || A[p]);
      if (typeof z == "function")
        return z;
    }
    var y = "<<anonymous>>", h = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: I(),
      arrayOf: E,
      element: T(),
      elementType: k(),
      instanceOf: O,
      node: H(),
      objectOf: D,
      oneOf: U,
      oneOfType: F,
      shape: m,
      exact: M
    };
    function v(A, z) {
      return A === z ? A !== 0 || 1 / A === 1 / z : A !== A && z !== z;
    }
    function x(A, z) {
      this.message = A, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function C(A) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, W = 0;
      function j(X, K, Y, J, te, Z, Ee) {
        if (J = J || y, Z = Z || Y, Ee !== r) {
          if (c) {
            var N = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw N.name = "Invariant Violation", N;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ne = J + ":" + Y;
            !z[Ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Ne] = !0, W++);
          }
        }
        return K[Y] == null ? X ? K[Y] === null ? new x("The " + te + " `" + Z + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new x("The " + te + " `" + Z + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : A(K, Y, J, te, Z);
      }
      var G = j.bind(null, !1);
      return G.isRequired = j.bind(null, !0), G;
    }
    function w(A) {
      function z(W, j, G, X, K, Y) {
        var J = W[j], te = q(J);
        if (te !== A) {
          var Z = pe(J);
          return new x(
            "Invalid " + X + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + G + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return C(z);
    }
    function I() {
      return C(s);
    }
    function E(A) {
      function z(W, j, G, X, K) {
        if (typeof A != "function")
          return new x("Property `" + K + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var Y = W[j];
        if (!Array.isArray(Y)) {
          var J = q(Y);
          return new x("Invalid " + X + " `" + K + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected an array."));
        }
        for (var te = 0; te < Y.length; te++) {
          var Z = A(Y, te, G, X, K + "[" + te + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return C(z);
    }
    function T() {
      function A(z, W, j, G, X) {
        var K = z[W];
        if (!l(K)) {
          var Y = q(K);
          return new x("Invalid " + G + " `" + X + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(A);
    }
    function k() {
      function A(z, W, j, G, X) {
        var K = z[W];
        if (!e.isValidElementType(K)) {
          var Y = q(K);
          return new x("Invalid " + G + " `" + X + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(A);
    }
    function O(A) {
      function z(W, j, G, X, K) {
        if (!(W[j] instanceof A)) {
          var Y = A.name || y, J = je(W[j]);
          return new x("Invalid " + X + " `" + K + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return C(z);
    }
    function U(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function z(W, j, G, X, K) {
        for (var Y = W[j], J = 0; J < A.length; J++)
          if (v(Y, A[J]))
            return null;
        var te = JSON.stringify(A, function(Ee, N) {
          var Ne = pe(N);
          return Ne === "symbol" ? String(N) : N;
        });
        return new x("Invalid " + X + " `" + K + "` of value `" + String(Y) + "` " + ("supplied to `" + G + "`, expected one of " + te + "."));
      }
      return C(z);
    }
    function D(A) {
      function z(W, j, G, X, K) {
        if (typeof A != "function")
          return new x("Property `" + K + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var Y = W[j], J = q(Y);
        if (J !== "object")
          return new x("Invalid " + X + " `" + K + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected an object."));
        for (var te in Y)
          if (n(Y, te)) {
            var Z = A(Y, te, G, X, K + "." + te, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return C(z);
    }
    function F(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var z = 0; z < A.length; z++) {
        var W = A[z];
        if (typeof W != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ke(W) + " at index " + z + "."
          ), s;
      }
      function j(G, X, K, Y, J) {
        for (var te = [], Z = 0; Z < A.length; Z++) {
          var Ee = A[Z], N = Ee(G, X, K, Y, J, r);
          if (N == null)
            return null;
          N.data && n(N.data, "expectedType") && te.push(N.data.expectedType);
        }
        var Ne = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new x("Invalid " + Y + " `" + J + "` supplied to " + ("`" + K + "`" + Ne + "."));
      }
      return C(j);
    }
    function H() {
      function A(z, W, j, G, X) {
        return _(z[W]) ? null : new x("Invalid " + G + " `" + X + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return C(A);
    }
    function L(A, z, W, j, G) {
      return new x(
        (A || "React class") + ": " + z + " type `" + W + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function m(A) {
      function z(W, j, G, X, K) {
        var Y = W[j], J = q(Y);
        if (J !== "object")
          return new x("Invalid " + X + " `" + K + "` of type `" + J + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var te in A) {
          var Z = A[te];
          if (typeof Z != "function")
            return L(G, X, K, te, pe(Z));
          var Ee = Z(Y, te, G, X, K + "." + te, r);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return C(z);
    }
    function M(A) {
      function z(W, j, G, X, K) {
        var Y = W[j], J = q(Y);
        if (J !== "object")
          return new x("Invalid " + X + " `" + K + "` of type `" + J + "` " + ("supplied to `" + G + "`, expected `object`."));
        var te = t({}, W[j], A);
        for (var Z in te) {
          var Ee = A[Z];
          if (n(A, Z) && typeof Ee != "function")
            return L(G, X, K, Z, pe(Ee));
          if (!Ee)
            return new x(
              "Invalid " + X + " `" + K + "` key `" + Z + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(W[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var N = Ee(Y, Z, G, X, K + "." + Z, r);
          if (N)
            return N;
        }
        return null;
      }
      return C(z);
    }
    function _(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(_);
          if (A === null || l(A))
            return !0;
          var z = g(A);
          if (z) {
            var W = z.call(A), j;
            if (z !== A.entries) {
              for (; !(j = W.next()).done; )
                if (!_(j.value))
                  return !1;
            } else
              for (; !(j = W.next()).done; ) {
                var G = j.value;
                if (G && !_(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function B(A, z) {
      return A === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function q(A) {
      var z = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : B(z, A) ? "symbol" : z;
    }
    function pe(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var z = q(A);
      if (z === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function ke(A) {
      var z = pe(A);
      switch (z) {
        case "array":
        case "object":
          return "an " + z;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + z;
        default:
          return z;
      }
    }
    function je(A) {
      return !A.constructor || !A.constructor.name ? y : A.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Gr;
}
var Yr, mo;
function Ss() {
  if (mo) return Yr;
  mo = 1;
  var e = Cn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Yr = function() {
    function n(s, l, c, d, p, g) {
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
    var i = {
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
    return i.PropTypes = i, i;
  }, Yr;
}
if (process.env.NODE_ENV !== "production") {
  var ws = ci(), Cs = !0;
  on.exports = vs()(ws.isElement, Cs);
} else
  on.exports = Ss()();
var ks = on.exports;
const $ = /* @__PURE__ */ ms(ks);
function Es(e) {
  return e == null || Object.keys(e).length === 0;
}
function kn(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ a(Pa, {
    styles: typeof t == "function" ? (o) => t(Es(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (kn.propTypes = {
  defaultTheme: $.object,
  styles: $.oneOfType([$.array, $.string, $.object, $.func])
});
/**
 * @mui/styled-engine v9.0.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ts(e, t) {
  const r = Da(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Is(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const go = [];
function rt(e) {
  return go[0] = e, hs(go);
}
var an = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xo;
function As() {
  if (xo) return le;
  xo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function v(x) {
    if (typeof x == "object" && x !== null) {
      var C = x.$$typeof;
      switch (C) {
        case e:
          switch (x = x.type, x) {
            case r:
            case o:
            case n:
            case c:
            case d:
            case y:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case s:
                case l:
                case g:
                case p:
                  return x;
                case i:
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
  return le.ContextConsumer = i, le.ContextProvider = s, le.Element = e, le.ForwardRef = l, le.Fragment = r, le.Lazy = g, le.Memo = p, le.Portal = t, le.Profiler = o, le.StrictMode = n, le.Suspense = c, le.SuspenseList = d, le.isContextConsumer = function(x) {
    return v(x) === i;
  }, le.isContextProvider = function(x) {
    return v(x) === s;
  }, le.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, le.isForwardRef = function(x) {
    return v(x) === l;
  }, le.isFragment = function(x) {
    return v(x) === r;
  }, le.isLazy = function(x) {
    return v(x) === g;
  }, le.isMemo = function(x) {
    return v(x) === p;
  }, le.isPortal = function(x) {
    return v(x) === t;
  }, le.isProfiler = function(x) {
    return v(x) === o;
  }, le.isStrictMode = function(x) {
    return v(x) === n;
  }, le.isSuspense = function(x) {
    return v(x) === c;
  }, le.isSuspenseList = function(x) {
    return v(x) === d;
  }, le.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === o || x === n || x === c || x === d || typeof x == "object" && x !== null && (x.$$typeof === g || x.$$typeof === p || x.$$typeof === s || x.$$typeof === i || x.$$typeof === l || x.$$typeof === h || x.getModuleId !== void 0);
  }, le.typeOf = v, le;
}
var ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function $s() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(x) {
      if (typeof x == "object" && x !== null) {
        var C = x.$$typeof;
        switch (C) {
          case t:
            switch (x = x.type, x) {
              case n:
              case i:
              case o:
              case d:
              case p:
              case h:
                return x;
              default:
                switch (x = x && x.$$typeof, x) {
                  case l:
                  case c:
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
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), v = Symbol.for("react.client.reference");
    ce.ContextConsumer = s, ce.ContextProvider = l, ce.Element = t, ce.ForwardRef = c, ce.Fragment = n, ce.Lazy = y, ce.Memo = g, ce.Portal = r, ce.Profiler = i, ce.StrictMode = o, ce.Suspense = d, ce.SuspenseList = p, ce.isContextConsumer = function(x) {
      return e(x) === s;
    }, ce.isContextProvider = function(x) {
      return e(x) === l;
    }, ce.isElement = function(x) {
      return typeof x == "object" && x !== null && x.$$typeof === t;
    }, ce.isForwardRef = function(x) {
      return e(x) === c;
    }, ce.isFragment = function(x) {
      return e(x) === n;
    }, ce.isLazy = function(x) {
      return e(x) === y;
    }, ce.isMemo = function(x) {
      return e(x) === g;
    }, ce.isPortal = function(x) {
      return e(x) === r;
    }, ce.isProfiler = function(x) {
      return e(x) === i;
    }, ce.isStrictMode = function(x) {
      return e(x) === o;
    }, ce.isSuspense = function(x) {
      return e(x) === d;
    }, ce.isSuspenseList = function(x) {
      return e(x) === p;
    }, ce.isValidElementType = function(x) {
      return typeof x == "string" || typeof x == "function" || x === n || x === i || x === o || x === d || x === p || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === g || x.$$typeof === l || x.$$typeof === s || x.$$typeof === c || x.$$typeof === v || x.getModuleId !== void 0);
    }, ce.typeOf = e;
  }()), ce;
}
process.env.NODE_ENV === "production" ? an.exports = As() : an.exports = $s();
var cr = an.exports;
function Xe(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function ui(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || cr.isValidElementType(e) || !Xe(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = ui(e[r]);
  }), t;
}
function De(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Xe(e) && Xe(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ R.isValidElement(t[o]) || cr.isValidElementType(t[o]) ? n[o] = t[o] : Xe(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Xe(e[o]) ? n[o] = De(e[o], t[o], r) : r.clone ? n[o] = Xe(t[o]) ? ui(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Rs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function pi(e) {
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
  } = e, i = Rs(t), s = Object.keys(i);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, v) {
    const x = s.indexOf(v);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(x !== -1 && typeof t[s[x]] == "number" ? t[s[x]] : v) - n / 100}${r})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function g(h) {
    const v = s.indexOf(h);
    return v === 0 ? l(s[1]) : v === s.length - 1 ? c(s[v]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  const y = [];
  for (let h = 0; h < s.length; h += 1)
    y.push(l(s[h]));
  return {
    keys: s,
    values: i,
    up: l,
    down: c,
    between: d,
    only: p,
    not: g,
    unit: r,
    internal_mediaKeys: y,
    ...o
  };
}
const bo = /min-width:\s*([0-9.]+)/;
function vo(e, t) {
  if (!e.containerQueries || !Os(t))
    return t;
  const r = [];
  for (const o in t)
    o.startsWith("@container") && r.push(o);
  r.sort((o, i) => {
    var s, l;
    return +(((s = o.match(bo)) == null ? void 0 : s[1]) || 0) - +(((l = i.match(bo)) == null ? void 0 : l[1]) || 0);
  });
  const n = t;
  for (let o = 0; o < r.length; o += 1) {
    const i = r[o], s = n[i];
    delete n[i], n[i] = s;
  }
  return n;
}
function Os(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function fi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function _s(e, t) {
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
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Ns(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...l) => t(e.breakpoints.up(...l), s), i.down = (...l) => t(e.breakpoints.down(...l), s), i.between = (...l) => t(e.breakpoints.between(...l), s), i.only = (...l) => t(e.breakpoints.only(...l), s), i.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Ms = {
  borderRadius: 4
}, ot = process.env.NODE_ENV !== "production" ? $.oneOfType([$.number, $.string, $.object, $.array]) : {};
function hi(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function vt(e, t) {
  const r = Array.isArray(t), n = Array.isArray(e);
  return Ls(t) ? t : Ws(e) ? kt(t) : r && n ? Ds(e, t) : r !== n ? kt(t) : Bs(e, t);
}
function zs(e) {
  let t = 0;
  const r = e.length, n = new Array(r);
  for (t = 0; t < r; t += 1)
    n[t] = kt(e[t]);
  return n;
}
function Ps(e) {
  const t = {};
  for (const r in e)
    t[r] = kt(e[r]);
  return t;
}
function Ds(e, t) {
  const r = e.length;
  for (let n = 0; n < t.length; n += 1)
    e[r + n] = kt(t[n]);
  return e;
}
function Fs(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Ls(e) {
  return typeof e != "object" || e === null;
}
function Ws(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function kt(e) {
  return Fs(e) ? Array.isArray(e) ? zs(e) : Ps(e) : e;
}
function Bs(e, t) {
  for (const r in t)
    r in e ? e[r] = vt(e[r], t[r]) : e[r] = kt(t[r]);
  return e;
}
const js = {}, vr = {
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
}, dr = pi({
  values: vr
}), Vs = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : vr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function $t(e, t, r) {
  const n = {};
  return Sr(n, e.theme, t, (o, i, s) => {
    const l = r(i, s);
    o ? n[o] = l : vt(n, l);
  });
}
function Sr(e, t, r, n) {
  if (t ?? (t = js), Array.isArray(r)) {
    const o = t.breakpoints ?? dr;
    for (let i = 0; i < r.length; i += 1)
      qr(e, o.up(o.keys[i]), r[i], void 0, n);
    return e;
  }
  if (typeof r == "object") {
    const o = t.breakpoints ?? dr, i = o.values ?? vr;
    for (const s in r)
      if (fi(o.keys, s)) {
        const l = _s(t.containerQueries ? t : Vs, s);
        l && qr(e, l, r[s], s, n);
      } else if (s in i) {
        const l = o.up(s);
        qr(e, l, r[s], s, n);
      } else {
        const l = s;
        e[l] = r[l];
      }
    return e;
  }
  return n(void 0, r), e;
}
function qr(e, t, r, n, o) {
  e[t] ?? (e[t] = {}), o(t, r, n);
}
function Us(e = dr) {
  const {
    internal_mediaKeys: t
  } = e, r = {};
  for (let n = 0; n < t.length; n += 1)
    r[t[n]] = {};
  return r;
}
function So(e, t) {
  const r = e.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n];
    hi(t[o]) && delete t[o];
  }
  return t;
}
function Hs(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e.keys.length; n += 1)
      if (e.keys[n] in t)
        return !0;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1)
      if (fi(e.keys, r[n]))
        return !0;
  }
  return !1;
}
function Et(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : pt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function mi(e, t, r, n) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || r : typeof r == "string" ? o = wr(e, r, !0, n) || r : o = r, t && (o = t(o, r, e)), o;
}
function wr(e, t, r = !0, n = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && r) {
    const i = wo(e.vars, o, n);
    if (i != null)
      return i;
  }
  return wo(e, o, n);
}
function wo(e, t, r = void 0) {
  let n, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    n = o, o = o[t[i]], i += 1;
  }
  if (r && o === void 0) {
    const s = t[t.length - 1], l = `${r}${s === "default" ? "" : Et(s)}`;
    return n == null ? void 0 : n[l];
  }
  return o;
}
function Se(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (s) => {
    if (s[t] == null)
      return null;
    const l = s[t], c = s.theme, d = wr(c, n) || {};
    return $t(s, l, (g) => {
      const y = mi(d, o, g, t);
      return r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ot
  } : {}, i.filterProps = [t], i;
}
const Gs = {
  internal_cache: {}
}, ur = {
  m: "margin",
  p: "padding"
}, Co = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, ko = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, jt = {};
for (const e in ur)
  jt[e] = [ur[e]];
for (const e in ur)
  for (const t in Co) {
    const r = ur[e], n = Co[t], o = Array.isArray(n) ? n.map((i) => r + i) : [r + n];
    jt[e + t] = o;
  }
for (const e in ko)
  jt[e] = jt[ko[e]];
const Cr = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), kr = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), Ys = /* @__PURE__ */ new Set([...Cr, ...kr]);
function qt(e, t, r, n) {
  const o = wr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[s];
    return i >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function En(e) {
  return qt(e, "spacing", 8, "spacing");
}
function Kt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Eo = [""];
function gi(e, t) {
  var i;
  const r = e.theme ?? Gs, n = ((i = r == null ? void 0 : r.internal_cache) == null ? void 0 : i.unarySpacing) ?? En(r), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = jt[s] ?? (Eo[0] = s, Eo), c = e[s];
    Sr(o, e.theme, c, (d, p) => {
      const g = d ? o[d] : o;
      for (let y = 0; y < l.length; y += 1)
        g[l[y]] = Kt(n, p);
    });
  }
  return o;
}
function ge(e) {
  return gi(e, Cr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? Array.from(Cr).reduce((e, t) => (e[t] = ot, e), {}) : {};
ge.filterProps = Cr;
function xe(e) {
  return gi(e, kr);
}
xe.propTypes = process.env.NODE_ENV !== "production" ? Array.from(kr).reduce((e, t) => (e[t] = ot, e), {}) : {};
xe.filterProps = kr;
process.env.NODE_ENV !== "production" && Array.from(Ys).reduce((e, t) => (e[t] = ot, e), {});
function xi(e = 8, t = En({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const s = t(i);
    return typeof s == "number" ? `${s}px` : s;
  }).join(" "));
  return r.mui = !0, r;
}
function Er(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => {
    const o = {};
    for (const i in n)
      t[i] && vt(o, t[i](n));
    return o;
  };
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Pe(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Le(e, t) {
  return Se({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const qs = Le("border", Pe), Ks = Le("borderTop", Pe), Xs = Le("borderRight", Pe), Js = Le("borderBottom", Pe), Qs = Le("borderLeft", Pe), Zs = Le("borderColor"), el = Le("borderTopColor"), tl = Le("borderRightColor"), rl = Le("borderBottomColor"), nl = Le("borderLeftColor"), ol = Le("outline", Pe), il = Le("outlineColor"), Tr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = qt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Kt(t, n)
    });
    return $t(e, e.borderRadius, r);
  }
  return null;
};
Tr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ot
} : {};
Tr.filterProps = ["borderRadius"];
Er(qs, Ks, Xs, Js, Qs, Zs, el, tl, rl, nl, Tr, ol, il);
const Ir = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = qt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Kt(t, n)
    });
    return $t(e, e.gap, r);
  }
  return null;
};
Ir.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ot
} : {};
Ir.filterProps = ["gap"];
const Ar = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = qt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Kt(t, n)
    });
    return $t(e, e.columnGap, r);
  }
  return null;
};
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ot
} : {};
Ar.filterProps = ["columnGap"];
const $r = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = qt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Kt(t, n)
    });
    return $t(e, e.rowGap, r);
  }
  return null;
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ot
} : {};
$r.filterProps = ["rowGap"];
const al = Se({
  prop: "gridColumn"
}), sl = Se({
  prop: "gridRow"
}), ll = Se({
  prop: "gridAutoFlow"
}), cl = Se({
  prop: "gridAutoColumns"
}), dl = Se({
  prop: "gridAutoRows"
}), ul = Se({
  prop: "gridTemplateColumns"
}), pl = Se({
  prop: "gridTemplateRows"
}), fl = Se({
  prop: "gridTemplateAreas"
}), hl = Se({
  prop: "gridArea"
});
Er(Ir, Ar, $r, al, sl, ll, cl, dl, ul, pl, fl, hl);
function St(e, t) {
  return t === "grey" ? t : e;
}
const ml = Se({
  prop: "color",
  themeKey: "palette",
  transform: St
}), gl = Se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: St
}), xl = Se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: St
});
Er(ml, gl, xl);
function Me(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const yl = Se({
  prop: "width",
  transform: Me
}), Tn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, l, c;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || vr[r];
      return n ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Me(r)
      };
    };
    return $t(e, e.maxWidth, t);
  }
  return null;
};
Tn.filterProps = ["maxWidth"];
const bl = Se({
  prop: "minWidth",
  transform: Me
}), vl = Se({
  prop: "height",
  transform: Me
}), Sl = Se({
  prop: "maxHeight",
  transform: Me
}), wl = Se({
  prop: "minHeight",
  transform: Me
});
Se({
  prop: "size",
  cssProperty: "width",
  transform: Me
});
Se({
  prop: "size",
  cssProperty: "height",
  transform: Me
});
const Cl = Se({
  prop: "boxSizing"
});
Er(yl, Tn, bl, vl, Sl, wl, Cl);
const Rr = {
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
    style: Tr
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
    style: Ir
  },
  rowGap: {
    style: $r
  },
  columnGap: {
    style: Ar
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
    transform: Me
  },
  maxWidth: {
    style: Tn
  },
  minWidth: {
    transform: Me
  },
  height: {
    transform: Me
  },
  maxHeight: {
    transform: Me
  },
  minHeight: {
    transform: Me
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
}, kl = {};
function El() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: r,
      theme: n = kl,
      nested: o
    } = t, i = n.unstable_sxConfig ?? Rr, s = {
      sx: null,
      theme: n,
      nested: !0
    };
    function l(c) {
      let d = c;
      if (typeof c == "function")
        d = c(n);
      else if (typeof c != "object")
        return c;
      if (!d)
        return null;
      const p = n.breakpoints ?? dr, g = Us(p);
      for (const y in d) {
        const h = Tl(d[y], n);
        if (h != null) {
          if (typeof h != "object") {
            To(g, y, h, n, i);
            continue;
          }
          if (i[y]) {
            To(g, y, h, n, i);
            continue;
          }
          Hs(p, h) ? Sr(g, t.theme, h, (v, x) => {
            g[v][y] = x;
          }) : (s.sx = h, g[y] = e(s));
        }
      }
      return !o && n.modularCssLayers ? {
        "@layer sx": vo(n, So(p, g))
      } : vo(n, So(p, g));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return e.filterProps = ["sx"], e;
}
const Tt = El();
function To(e, t, r, n, o) {
  const i = o[t];
  if (!i) {
    e[t] = r;
    return;
  }
  if (r == null)
    return;
  const {
    themeKey: s
  } = i;
  if (s === "typography" && r === "inherit") {
    e[t] = r;
    return;
  }
  const {
    style: l
  } = i;
  if (l) {
    vt(e, l({
      [t]: r,
      theme: n
    }));
    return;
  }
  const {
    cssProperty: c = t,
    transform: d
  } = i, p = wr(n, s);
  Sr(e, n, r, (g, y) => {
    const h = mi(p, d, y, t);
    c === !1 ? vt(g ? e[g] : e, h) : g ? e[g][c] = h : e[c] = h;
  });
}
function Tl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Il(e, t) {
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
function In(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, l = pi(r), c = xi(o);
  let d = De({
    breakpoints: l,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: c,
    shape: {
      ...Ms,
      ...i
    }
  }, s);
  return d = Ns(d), d.applyStyles = Il, d = t.reduce((p, g) => De(p, g), d), d.unstable_sxConfig = {
    ...Rr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(g) {
    return Tt({
      sx: g,
      theme: this
    });
  }, d.internal_cache = {}, d;
}
function Al(e) {
  return Object.keys(e).length === 0;
}
function An(e = null) {
  const t = R.useContext(ii);
  return !t || Al(t) ? e : t;
}
const $l = In();
function yi(e = $l) {
  return An(e);
}
function Kr(e) {
  const t = rt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function $n({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = yi(r), o = t && n[t] || n;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Kr(typeof s == "function" ? s(o) : s)) : i = Kr(i)), /* @__PURE__ */ a(kn, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: $.object,
  /**
   * @ignore
   */
  styles: $.oneOfType([$.array, $.func, $.number, $.object, $.string, $.bool]),
  /**
   * @ignore
   */
  themeId: $.string
});
const Io = (e) => e, Rl = () => {
  let e = Io;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Io;
    }
  };
}, Ol = Rl();
function bi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = bi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function vi() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = bi(e)) && (n && (n += " "), n += t);
  return n;
}
const _l = {
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
function Rn(e, t, r = "Mui") {
  const n = _l[t];
  return n ? `${r}-${n}` : `${Ol.generate(e)}-${t}`;
}
function Nl(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Rn(e, o, r);
  }), n;
}
function Si(e, t = "") {
  return e.displayName || e.name || t;
}
function Ao(e, t, r) {
  const n = Si(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ml(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Si(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case cr.ForwardRef:
          return Ao(e, e.render, "ForwardRef");
        case cr.Memo:
          return Ao(e, e.type, "memo");
        default:
          return;
      }
  }
}
function wi(e) {
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
const zl = In();
function Xr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function dt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Pl(e) {
  return e ? (t, r) => r[e] : null;
}
function Dl(e, t, r) {
  e.theme = hi(e.theme) ? r : e.theme[t] || e.theme;
}
function nr(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => nr(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? dt(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...s
      } = n;
      o = r ? dt(rt(s), r) : s;
    }
    return Ci(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? dt(rt(n.style), r) : n.style : r ? dt(rt(n), r) : n;
}
function Ci(e, t, r = [], n = void 0) {
  var i;
  let o;
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    if (typeof l.props == "function") {
      if (o ?? (o = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !l.props(o))
        continue;
    } else
      for (const c in l.props)
        if (e[c] !== l.props[c] && ((i = e.ownerState) == null ? void 0 : i[c]) !== l.props[c])
          continue e;
    typeof l.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? dt(rt(l.style(o)), n) : l.style(o))) : r.push(n ? dt(rt(l.style), n) : l.style);
  }
  return r;
}
function Fl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = zl,
    rootShouldForwardProp: n = Xr,
    slotShouldForwardProp: o = Xr
  } = e;
  function i(l) {
    Dl(l, t, r);
  }
  return (l, c = {}) => {
    Is(l, (O) => O.filter((U) => U !== Tt));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: g,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Pl(ki(p)),
      ...v
    } = c, x = d && d.startsWith("Mui") || p ? "components" : "custom", C = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), w = y || !1;
    let I = Xr;
    p === "Root" || p === "root" ? I = n : p ? I = o : Bl(l) && (I = void 0);
    const E = Ts(l, {
      shouldForwardProp: I,
      label: Wl(d, p),
      ...v
    }), T = (O) => {
      if (O.__emotion_real === O)
        return O;
      if (typeof O == "function")
        return function(D) {
          return nr(D, O, D.theme.modularCssLayers ? x : void 0);
        };
      if (Xe(O)) {
        const U = wi(O);
        return function(F) {
          return U.variants ? nr(F, U, F.theme.modularCssLayers ? x : void 0) : F.theme.modularCssLayers ? dt(U.style, x) : U.style;
        };
      }
      return O;
    }, k = (...O) => {
      const U = [], D = O.map(T), F = [];
      if (U.push(i), d && h && F.push(function(M) {
        var pe, ke;
        const B = (ke = (pe = M.theme.components) == null ? void 0 : pe[d]) == null ? void 0 : ke.styleOverrides;
        if (!B)
          return null;
        const q = {};
        for (const je in B)
          q[je] = nr(M, B[je], M.theme.modularCssLayers ? "theme" : void 0);
        return h(M, q);
      }), d && !C && F.push(function(M) {
        var q, pe;
        const _ = M.theme, B = (pe = (q = _ == null ? void 0 : _.components) == null ? void 0 : q[d]) == null ? void 0 : pe.variants;
        return B ? Ci(M, B, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || F.push(Tt), Array.isArray(D[0])) {
        const m = D.shift(), M = new Array(U.length).fill(""), _ = new Array(F.length).fill("");
        let B;
        B = [...M, ...m, ..._], B.raw = [...M, ...m.raw, ..._], U.unshift(B);
      }
      const H = [...U, ...D, ...F], L = E(...H);
      return l.muiName && (L.muiName = l.muiName), process.env.NODE_ENV !== "production" && (L.displayName = Ll(d, p, l)), L;
    };
    return E.withConfig && (k.withConfig = E.withConfig), k;
  };
}
function Ll(e, t, r) {
  return e ? `${e}${Et(t || "")}` : `Styled(${Ml(r)})`;
}
function Wl(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${ki(t || "Root")}`), r;
}
function Bl(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ki(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function sn(e, t, r = !1) {
  const n = {
    ...t
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const i = o;
      if (i === "components" || i === "slots")
        n[i] = {
          ...e[i],
          ...n[i]
        };
      else if (i === "componentsProps" || i === "slotProps") {
        const s = e[i], l = t[i];
        if (!l)
          n[i] = s || {};
        else if (!s)
          n[i] = l;
        else {
          n[i] = {
            ...l
          };
          for (const c in s)
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              const d = c;
              n[i][d] = sn(s[d], l[d], r);
            }
        }
      } else i === "className" && r && t.className !== void 0 ? n.className = vi(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Ei = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function jl(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function On(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), jl(e, t, r);
}
function Vl(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(Vl(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : pt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : pt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Ul = (e) => {
  const t = nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Dt = (e, t) => {
  try {
    return Ul(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Or(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ti(e) {
  e = nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (d, p = (d + r / 30) % 12) => o - i * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Or({
    type: l,
    values: c
  });
}
function ln(e) {
  e = nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? nt(Ti(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function $o(e, t) {
  const r = ln(e), n = ln(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ii(e, t) {
  return e = nt(e), t = On(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Or(e);
}
function st(e, t, r) {
  try {
    return Ii(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function _r(e, t) {
  if (e = nt(e), t = On(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Or(e);
}
function ae(e, t, r) {
  try {
    return _r(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Nr(e, t) {
  if (e = nt(e), t = On(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Or(e);
}
function se(e, t, r) {
  try {
    return Nr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Hl(e, t = 0.15) {
  return ln(e) > 0.5 ? _r(e, t) : Nr(e, t);
}
function Zt(e, t, r) {
  try {
    return Hl(e, t);
  } catch {
    return e;
  }
}
const Gl = "exact-prop: ​";
function Ai(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Gl]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const _n = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (_n.displayName = "ThemeContext");
function Nn() {
  const e = R.useContext(_n);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e;
}
const Yl = typeof Symbol == "function" && Symbol.for, ql = Yl ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Kl(e, t) {
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
function pr(e) {
  const {
    children: t,
    theme: r
  } = e, n = Nn();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = R.useMemo(() => {
    const i = n === null ? {
      ...r
    } : Kl(n, r);
    return i != null && (i[ql] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ a(_n.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (pr.propTypes = {
  /**
   * Your component tree.
   */
  children: $.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: $.oneOfType([$.object, $.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (pr.propTypes = Ai(pr.propTypes));
const Xl = /* @__PURE__ */ R.createContext();
function $i({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ a(Xl.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && ($i.propTypes = {
  children: $.node,
  value: $.bool
});
const Ri = /* @__PURE__ */ R.createContext(void 0);
function Oi({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ a(Ri.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Oi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: $.node,
  /**
   * @ignore
   */
  value: $.object
});
function Jl(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? sn(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? sn(o, n, t.components.mergeClassNameAndStyle) : n;
}
function Ql({
  props: e,
  name: t
}) {
  const r = R.useContext(Ri);
  return Jl({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Ro = 0;
function Zl(e) {
  const [t, r] = R.useState(e), n = e || t;
  return R.useEffect(() => {
    t == null && (Ro += 1, r(`mui-${Ro}`));
  }, [t]), n;
}
const ec = {
  ...R
}, Oo = ec.useId;
function tc(e) {
  return Oo !== void 0 ? Oo() : Zl(e);
}
function rc(e) {
  const t = An(), r = tc() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Ei(() => {
    var l, c;
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      if (s && ((l = s.hasAttribute) != null && l.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === r)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", r), d.textContent = o, i.prepend(d);
    } else
      (c = i.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || c.remove();
  }, [o, r]), o ? /* @__PURE__ */ a($n, {
    styles: o
  }) : null;
}
const _o = {};
function No(e, t, r, n = !1) {
  return R.useMemo(() => {
    const o = e && t[e] || t;
    if (typeof r == "function") {
      const i = r(o), s = e ? {
        ...t,
        [e]: i
      } : i;
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
function Vt(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = An(_o), i = Nn() || _o;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = No(n, o, r), l = No(n, i, r, !0), c = (n ? s[n] : s).direction === "rtl", d = rc(s);
  return /* @__PURE__ */ a(pr, {
    theme: l,
    children: /* @__PURE__ */ a(ii.Provider, {
      value: s,
      children: /* @__PURE__ */ a($i, {
        value: c,
        children: /* @__PURE__ */ f(Oi, {
          value: n ? s[n].components : s.components,
          children: [d, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: $.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: $.oneOfType([$.func, $.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: $.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Vt.propTypes = Ai(Vt.propTypes));
const Mo = {
  theme: void 0
};
function nc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Mo.theme = o.theme, i = wi(e(Mo)), t = i, r = o.theme), i;
  };
}
const Mn = "mode", zn = "color-scheme", oc = "data-color-scheme";
function ic(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Mn,
    colorSchemeStorageKey: i = zn,
    attribute: s = oc,
    colorSchemeNode: l = "document.documentElement",
    nonce: c
  } = e || {};
  let d = "", p = s;
  if (s === "class" && (p = ".%s"), s === "data" && (p = "[data-%s]"), p.startsWith(".")) {
    const y = p.substring(1);
    d += `${l}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${l}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const g = p.match(/\[([^[\]]+)\]/);
  if (g) {
    const [y, h] = g[1].split("=");
    h || (d += `${l}.removeAttribute('${y}'.replace('%s', light));
      ${l}.removeAttribute('${y}'.replace('%s', dark));`), d += `
      ${l}.setAttribute('${y}'.replace('%s', colorScheme), ${h ? `${h}.replace('%s', colorScheme)` : '""'});`;
  } else p !== ".%s" && (d += `${l}.setAttribute('${p}', colorScheme);`);
  return /* @__PURE__ */ a("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? c : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${o}') || '${t}';
  const dark = localStorage.getItem('${i}-dark') || '${n}';
  const light = localStorage.getItem('${i}-light') || '${r}';
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
    ${d}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function ac() {
}
const sc = ({
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
      return ac;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function Jr() {
}
function zo(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function _i(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function lc(e) {
  return _i(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function cc(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Mn,
    colorSchemeStorageKey: s = zn,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: c = sc,
    noSsr: d = !1
  } = e, p = o.join(","), g = o.length > 1, y = R.useMemo(() => c == null ? void 0 : c({
    key: i,
    storageWindow: l
  }), [c, i, l]), h = R.useMemo(() => c == null ? void 0 : c({
    key: `${s}-light`,
    storageWindow: l
  }), [c, s, l]), v = R.useMemo(() => c == null ? void 0 : c({
    key: `${s}-dark`,
    storageWindow: l
  }), [c, s, l]), [x, C] = R.useState(() => {
    const D = (y == null ? void 0 : y.get(t)) || t, F = (h == null ? void 0 : h.get(r)) || r, H = (v == null ? void 0 : v.get(n)) || n;
    return {
      mode: D,
      systemMode: zo(D),
      lightColorScheme: F,
      darkColorScheme: H
    };
  }), [w, I] = R.useState(d || !g);
  R.useEffect(() => {
    I(!0);
  }, []);
  const E = lc(x), T = R.useCallback((D) => {
    C((F) => {
      if (D === F.mode)
        return F;
      const H = D ?? t;
      return y == null || y.set(H), {
        ...F,
        mode: H,
        systemMode: zo(H)
      };
    });
  }, [y, t]), k = R.useCallback((D) => {
    D ? typeof D == "string" ? D && !p.includes(D) ? console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`) : C((F) => {
      const H = {
        ...F
      };
      return _i(F, (L) => {
        L === "light" && (h == null || h.set(D), H.lightColorScheme = D), L === "dark" && (v == null || v.set(D), H.darkColorScheme = D);
      }), H;
    }) : C((F) => {
      const H = {
        ...F
      }, L = D.light === null ? r : D.light, m = D.dark === null ? n : D.dark;
      return L && (p.includes(L) ? (H.lightColorScheme = L, h == null || h.set(L)) : console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`)), m && (p.includes(m) ? (H.darkColorScheme = m, v == null || v.set(m)) : console.error(`\`${m}\` does not exist in \`theme.colorSchemes\`.`)), H;
    }) : C((F) => (h == null || h.set(r), v == null || v.set(n), {
      ...F,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [p, h, v, r, n]), O = R.useCallback((D) => {
    x.mode === "system" && C((F) => {
      const H = D != null && D.matches ? "dark" : "light";
      return F.systemMode === H ? F : {
        ...F,
        systemMode: H
      };
    });
  }, [x.mode]), U = R.useRef(O);
  return U.current = O, R.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const D = (...H) => U.current(...H), F = window.matchMedia("(prefers-color-scheme: dark)");
    return F.addListener(D), D(F), () => {
      F.removeListener(D);
    };
  }, [g]), R.useEffect(() => {
    if (g) {
      const D = (y == null ? void 0 : y.subscribe((L) => {
        (!L || ["light", "dark", "system"].includes(L)) && T(L || t);
      })) || Jr, F = (h == null ? void 0 : h.subscribe((L) => {
        (!L || p.match(L)) && k({
          light: L
        });
      })) || Jr, H = (v == null ? void 0 : v.subscribe((L) => {
        (!L || p.match(L)) && k({
          dark: L
        });
      })) || Jr;
      return () => {
        D(), F(), H();
      };
    }
  }, [k, T, p, t, l, g, y, h, v]), {
    ...x,
    mode: w ? x.mode : void 0,
    systemMode: w ? x.systemMode : void 0,
    colorScheme: w ? E : void 0,
    setMode: T,
    setColorScheme: k
  };
}
const dc = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function uc(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Mn,
    colorSchemeStorageKey: o = zn,
    disableTransitionOnChange: i = !1,
    defaultColorScheme: s,
    resolveTheme: l
  } = e, c = {
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
  }, d = /* @__PURE__ */ R.createContext(void 0);
  process.env.NODE_ENV !== "production" && (d.displayName = "ColorSchemeContext");
  const p = () => R.useContext(d) || c, g = {}, y = {};
  function h(w) {
    var Kn, Xn, Jn, Qn;
    const {
      children: I,
      theme: E,
      modeStorageKey: T = n,
      colorSchemeStorageKey: k = o,
      disableTransitionOnChange: O = i,
      storageManager: U,
      storageWindow: D = typeof window > "u" ? void 0 : window,
      documentNode: F = typeof document > "u" ? void 0 : document,
      colorSchemeNode: H = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: L = !1,
      disableStyleSheetGeneration: m = !1,
      defaultMode: M = "system",
      forceThemeRerender: _ = !1,
      noSsr: B
    } = w, q = R.useRef(!1), pe = Nn(), ke = R.useContext(d), je = !!ke && !L, A = R.useMemo(() => E || (typeof r == "function" ? r() : r), [E]), z = A[t], W = z || A, {
      colorSchemes: j = g,
      components: G = y,
      cssVarPrefix: X
    } = W, K = Object.keys(j).filter((Te) => !!j[Te]).join(","), Y = R.useMemo(() => K.split(","), [K]), J = typeof s == "string" ? s : s.light, te = typeof s == "string" ? s : s.dark, Z = j[J] && j[te] ? M : ((Xn = (Kn = j[W.defaultColorScheme]) == null ? void 0 : Kn.palette) == null ? void 0 : Xn.mode) || ((Jn = W.palette) == null ? void 0 : Jn.mode), {
      mode: Ee,
      setMode: N,
      systemMode: Ne,
      lightColorScheme: it,
      darkColorScheme: Nt,
      colorScheme: ca,
      setColorScheme: Gn
    } = cc({
      supportedColorSchemes: Y,
      defaultLightColorScheme: J,
      defaultDarkColorScheme: te,
      modeStorageKey: T,
      colorSchemeStorageKey: k,
      defaultMode: Z,
      storageManager: U,
      storageWindow: D,
      noSsr: B
    });
    let Lr = Ee, We = ca;
    je && (Lr = ke.mode, We = ke.colorScheme), process.env.NODE_ENV !== "production" && _ && !W.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Jt = We || W.defaultColorScheme;
    W.vars && !_ && (Jt = W.defaultColorScheme);
    const ft = R.useMemo(() => {
      var at;
      const Te = ((at = W.generateThemeVars) == null ? void 0 : at.call(W)) || W.vars, ye = {
        ...W,
        components: G,
        colorSchemes: j,
        cssVarPrefix: X,
        vars: Te
      };
      if (typeof ye.generateSpacing == "function" && (ye.spacing = ye.generateSpacing()), Jt) {
        const Ve = j[Jt];
        Ve && typeof Ve == "object" && Object.keys(Ve).forEach((Be) => {
          Ve[Be] && typeof Ve[Be] == "object" ? ye[Be] = {
            ...ye[Be],
            ...Ve[Be]
          } : ye[Be] = Ve[Be];
        });
      }
      return l ? l(ye) : ye;
    }, [W, Jt, G, j, X]), Mt = W.colorSchemeSelector;
    Ei(() => {
      if (We && H && Mt && Mt !== "media") {
        const Te = Mt;
        let ye = Mt;
        if (Te === "class" && (ye = ".%s"), Te === "data" && (ye = "[data-%s]"), Te != null && Te.startsWith("data-") && !Te.includes("%s") && (ye = `[${Te}="%s"]`), ye.startsWith("."))
          H.classList.remove(...Y.map((at) => ye.substring(1).replace("%s", at))), H.classList.add(ye.substring(1).replace("%s", We));
        else {
          const at = ye.replace("%s", We).match(/\[([^\]]+)\]/);
          if (at) {
            const [Ve, Be] = at[1].split("=");
            Be || Y.forEach((ua) => {
              H.removeAttribute(Ve.replace(We, ua));
            }), H.setAttribute(Ve, Be ? Be.replace(/"|'/g, "") : "");
          } else
            H.setAttribute(ye, We);
        }
      }
    }, [We, Mt, H, Y]), R.useEffect(() => {
      let Te;
      if (O && q.current && F) {
        const ye = F.createElement("style");
        ye.appendChild(F.createTextNode(dc)), F.head.appendChild(ye), window.getComputedStyle(F.body), Te = setTimeout(() => {
          F.head.removeChild(ye);
        }, 1);
      }
      return () => {
        clearTimeout(Te);
      };
    }, [We, O, F]), R.useEffect(() => (q.current = !0, () => {
      q.current = !1;
    }), []);
    const da = R.useMemo(() => ({
      allColorSchemes: Y,
      colorScheme: We,
      darkColorScheme: Nt,
      lightColorScheme: it,
      mode: Lr,
      setColorScheme: Gn,
      setMode: process.env.NODE_ENV === "production" ? N : (Te) => {
        ft.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), N(Te);
      },
      systemMode: Ne
    }), [Y, We, Nt, it, Lr, Gn, N, Ne, ft.colorSchemeSelector]);
    let Yn = !0;
    (m || W.cssVariables === !1 || je && (pe == null ? void 0 : pe.cssVarPrefix) === X) && (Yn = !1);
    const qn = /* @__PURE__ */ f(R.Fragment, {
      children: [/* @__PURE__ */ a(Vt, {
        themeId: z ? t : void 0,
        theme: ft,
        children: I
      }), Yn && /* @__PURE__ */ a(kn, {
        styles: ((Qn = ft.generateStyleSheets) == null ? void 0 : Qn.call(ft)) || []
      })]
    });
    return je ? qn : /* @__PURE__ */ a(d.Provider, {
      value: da,
      children: qn
    });
  }
  process.env.NODE_ENV !== "production" && (h.propTypes = {
    /**
     * The component tree.
     */
    children: $.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: $.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: $.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: $.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: $.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: $.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: $.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: $.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: $.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: $.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: $.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: $.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: $.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: $.object
  });
  const v = typeof s == "string" ? s : s.light, x = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: h,
    useColorScheme: p,
    getInitColorSchemeScript: (w) => ic({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: v,
      defaultDarkColorScheme: x,
      modeStorageKey: n,
      ...w
    })
  };
}
function pc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Po = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, fc = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!r || r && !r([...i, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...i, l], Array.isArray(c) ? [...s, l] : s) : t([...i, l], c, s));
    });
  }
  n(e);
}, hc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Qr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return fc(
    e,
    (l, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(l, c))) {
        const p = `--${r ? `${r}-` : ""}${l.join("-")}`, g = hc(l, c);
        Object.assign(o, {
          [p]: g
        }), Po(i, l, `var(${p})`, d), Po(s, l, `var(${p}, ${g})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function mc(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: c = "light",
    ...d
  } = e, {
    vars: p,
    css: g,
    varsWithDefaults: y
  } = Qr(d, t);
  let h = y;
  const v = {}, {
    [c]: x,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([T, k]) => {
    const {
      vars: O,
      css: U,
      varsWithDefaults: D
    } = Qr(k, t);
    h = De(h, D), v[T] = {
      css: U,
      vars: O
    };
  }), x) {
    const {
      css: T,
      vars: k,
      varsWithDefaults: O
    } = Qr(x, t);
    h = De(h, O), v[c] = {
      css: T,
      vars: k
    };
  }
  function w(T, k) {
    var U, D;
    let O = o;
    if (o === "class" && (O = ".%s"), o === "data" && (O = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (O = `[${o}="%s"]`), T) {
      if (O === "media")
        return e.defaultColorScheme === T ? ":root" : {
          [`@media (prefers-color-scheme: ${((D = (U = s[T]) == null ? void 0 : U.palette) == null ? void 0 : D.mode) || T})`]: {
            ":root": k
          }
        };
      if (O)
        return e.defaultColorScheme === T ? `:root, ${O.replace("%s", String(T))}` : O.replace("%s", String(T));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let T = {
        ...p
      };
      return Object.entries(v).forEach(([, {
        vars: k
      }]) => {
        T = De(T, k);
      }), T;
    },
    generateStyleSheets: () => {
      var F, H;
      const T = [], k = e.defaultColorScheme || "light";
      function O(L, m) {
        Object.keys(m).length && T.push(typeof L == "string" ? {
          [L]: {
            ...m
          }
        } : L);
      }
      O(r(void 0, {
        ...g
      }), g);
      const {
        [k]: U,
        ...D
      } = v;
      if (U) {
        const {
          css: L
        } = U, m = (H = (F = s[k]) == null ? void 0 : F.palette) == null ? void 0 : H.mode, M = !n && m ? {
          colorScheme: m,
          ...L
        } : {
          ...L
        };
        O(r(k, {
          ...M
        }), M);
      }
      return Object.entries(D).forEach(([L, {
        css: m
      }]) => {
        var B, q;
        const M = (q = (B = s[L]) == null ? void 0 : B.palette) == null ? void 0 : q.mode, _ = !n && M ? {
          colorScheme: M,
          ...m
        } : {
          ...m
        };
        O(r(L, {
          ..._
        }), _);
      }), i && T.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), T;
    }
  };
}
function gc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function xc(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", l = !0;
    for (let c = 0; c < i.length; c += 1) {
      const d = i[c];
      d && (s += (l === !0 ? "" : " ") + t(d), l = !1, r && r[d] && (s += " " + r[d]));
    }
    n[o] = s;
  }
  return n;
}
const Ut = {
  black: "#000",
  white: "#fff"
}, yc = {
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
}, ht = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, mt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, zt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, gt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, xt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, yt = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Ni() {
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
      paper: Ut.white,
      default: Ut.white
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
const Mi = Ni();
function zi() {
  return {
    text: {
      primary: Ut.white,
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
      active: Ut.white,
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
const cn = zi();
function Do(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Nr(e.main, o) : t === "dark" && (e.dark = _r(e.main, i)));
}
function Fo(e, t, r, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function bc(e = "light") {
  return e === "dark" ? {
    main: gt[200],
    light: gt[50],
    dark: gt[400]
  } : {
    main: gt[700],
    light: gt[400],
    dark: gt[800]
  };
}
function vc(e = "light") {
  return e === "dark" ? {
    main: ht[200],
    light: ht[50],
    dark: ht[400]
  } : {
    main: ht[500],
    light: ht[300],
    dark: ht[700]
  };
}
function Sc(e = "light") {
  return e === "dark" ? {
    main: mt[500],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[700],
    light: mt[400],
    dark: mt[800]
  };
}
function wc(e = "light") {
  return e === "dark" ? {
    main: xt[400],
    light: xt[300],
    dark: xt[700]
  } : {
    main: xt[700],
    light: xt[500],
    dark: xt[900]
  };
}
function Cc(e = "light") {
  return e === "dark" ? {
    main: yt[400],
    light: yt[300],
    dark: yt[700]
  } : {
    main: yt[800],
    light: yt[500],
    dark: yt[900]
  };
}
function kc(e = "light") {
  return e === "dark" ? {
    main: zt[400],
    light: zt[300],
    dark: zt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: zt[500],
    dark: zt[900]
  };
}
function Ec(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Pn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || bc(t), l = e.secondary || vc(t), c = e.error || Sc(t), d = e.info || wc(t), p = e.success || Cc(t), g = e.warning || kc(t);
  function y(C) {
    if (o)
      return Ec(C);
    const w = $o(C, cn.text.primary) >= r ? cn.text.primary : Mi.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const I = $o(C, w);
      I < 3 && console.error([`MUI: The contrast ratio of ${I}:1 for ${w} on ${C}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const h = ({
    color: C,
    name: w,
    mainShade: I = 500,
    lightShade: E = 300,
    darkShade: T = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[I] && (C.main = C[I]), !C.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${I}\` property.` : pt(11, w ? ` (${w})` : "", I));
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
} });` : pt(12, w ? ` (${w})` : "", JSON.stringify(C.main)));
    return o ? (Fo(o, C, "light", E, n), Fo(o, C, "dark", T, n)) : (Do(C, "light", E, n), Do(C, "dark", T, n)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let v;
  return t === "light" ? v = Ni() : t === "dark" && (v = zi()), process.env.NODE_ENV !== "production" && (v || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), De({
    // A collection of common colors.
    common: {
      ...Ut
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: l,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: yc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...v
  }, i);
}
function Tc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Ic(e, t) {
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
function Ac(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lo = {
  textTransform: "uppercase"
}, Wo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pi(e, t) {
  const {
    fontFamily: r = Wo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, h = p || ((C) => `${C / c * y}rem`), v = (C, w, I, E, T) => ({
    fontFamily: r,
    fontWeight: C,
    fontSize: h(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Wo ? {
      letterSpacing: `${Ac(E / w)}em`
    } : {},
    ...T,
    ...d
  }), x = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(s, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(s, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(s, 14, 1.75, 0.4, Lo),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Lo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return De({
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...x
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const $c = 0.2, Rc = 0.14, Oc = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${$c})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Rc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Oc})`].join(",");
}
const _c = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Nc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Mc = {
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
function Bo(e) {
  return `${Math.round(e)}ms`;
}
function zc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Pc(e) {
  const t = {
    ...Nc,
    ...e.easing
  }, r = {
    ...Mc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: zc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const p = (y) => typeof y == "string", g = (y) => !Number.isNaN(parseFloat(y));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !g(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : Bo(s)} ${l} ${typeof c == "string" ? c : Bo(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Dc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Fc(e) {
  return Xe(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Di(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, l] = o[i];
      !Fc(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete n[s] : Xe(l) && (n[s] = {
        ...l
      }, r(n[s]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function jo(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Lc = (e) => {
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
function Wc(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Ii(t, Lc(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${jo(r)})` : Nr(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${jo(r)})` : _r(t, r);
    }
  });
}
function dn(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    colorSpace: d,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : pt(22));
  const g = Pn({
    ...i,
    colorSpace: d
  }), y = In(e);
  let h = De(y, {
    mixins: Ic(y.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: _c.slice(),
    typography: Pi(g, l),
    transitions: Pc(s),
    zIndex: {
      ...Dc
    }
  });
  if (h = De(h, p), h = t.reduce((v, x) => De(v, x), h), process.env.NODE_ENV !== "production") {
    const v = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], x = (C, w) => {
      let I;
      for (I in C) {
        const E = C[I];
        if (v.includes(I) && Object.keys(E).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const T = Rn("", I);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${I}\` internal state.`, "You can not override it like this: ", JSON.stringify(C, null, 2), "", `Instead, you need to use the '&.${T}' syntax:`, JSON.stringify({
              root: {
                [`&.${T}`]: E
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          C[I] = {};
        }
      }
    };
    Object.keys(h.components).forEach((C) => {
      const w = h.components[C].styleOverrides;
      w && C.startsWith("Mui") && x(w, C);
    });
  }
  return h.unstable_sxConfig = {
    ...Rr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, h.unstable_sx = function(x) {
    return Tt({
      sx: x,
      theme: this
    });
  }, h.toRuntimeSource = Di, Wc(h), h;
}
function Bc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const jc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Bc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Fi(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Li(e) {
  return e === "dark" ? jc : [];
}
function Vc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, s = Pn({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Fi(s.mode),
      ...r
    },
    overlays: n || Li(s.mode),
    ...i
  };
}
function Uc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Hc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Gc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return Hc(e.cssVarPrefix).forEach((l) => {
        s[l] = r[l], delete r[l];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: s
        }
      } : i ? {
        [i.replace("%s", t)]: s,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...s
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Yc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function S(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ft(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ti(e);
}
function Ke(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Dt(Ft(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function qc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ge = (e) => {
  try {
    return e();
  } catch {
  }
}, Kc = (e = "mui") => pc(e);
function Zr(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Vc({
      ...r,
      palette: {
        mode: i,
        ...r == null ? void 0 : r.palette
      },
      colorSpace: e
    });
    return;
  }
  const {
    palette: s,
    ...l
  } = dn({
    ...n,
    palette: {
      mode: i,
      ...r == null ? void 0 : r.palette
    },
    colorSpace: e
  });
  return t[o] = {
    ...r,
    palette: s,
    opacity: {
      ...Fi(i),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Li(i)
  }, l;
}
function Xc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = Uc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...p
  } = e, g = Object.keys(r)[0], y = n || (r.light && g !== "light" ? "light" : g), h = Kc(i), {
    [y]: v,
    light: x,
    dark: C,
    ...w
  } = r, I = {
    ...w
  };
  let E = v;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (E = !0), !E)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : pt(21, y));
  let T;
  s && (T = "oklch");
  const k = Zr(T, I, E, p, y);
  x && !I.light && Zr(T, I, x, void 0, "light"), C && !I.dark && Zr(T, I, C, void 0, "dark");
  let O = {
    defaultColorScheme: y,
    ...k,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: d,
    getCssVar: h,
    colorSchemes: I,
    font: {
      ...Tc(k.typography),
      ...k.font
    },
    spacing: qc(p.spacing)
  };
  Object.keys(O.colorSchemes).forEach((L) => {
    const m = O.colorSchemes[L].palette, M = (B) => {
      const q = B.split("-"), pe = q[1], ke = q[2];
      return h(B, m[pe][ke]);
    };
    m.mode === "light" && (S(m.common, "background", "#fff"), S(m.common, "onBackground", "#000")), m.mode === "dark" && (S(m.common, "background", "#000"), S(m.common, "onBackground", "#fff"));
    function _(B, q, pe) {
      if (T) {
        let ke;
        return B === st && (ke = `transparent ${((1 - pe) * 100).toFixed(0)}%`), B === ae && (ke = `#000 ${(pe * 100).toFixed(0)}%`), B === se && (ke = `#fff ${(pe * 100).toFixed(0)}%`), `color-mix(in ${T}, ${q}, ${ke})`;
      }
      return B(q, pe);
    }
    if (Yc(m, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), m.mode === "light") {
      S(m.Alert, "errorColor", _(ae, s ? h("palette-error-light") : m.error.light, 0.6)), S(m.Alert, "infoColor", _(ae, s ? h("palette-info-light") : m.info.light, 0.6)), S(m.Alert, "successColor", _(ae, s ? h("palette-success-light") : m.success.light, 0.6)), S(m.Alert, "warningColor", _(ae, s ? h("palette-warning-light") : m.warning.light, 0.6)), S(m.Alert, "errorFilledBg", M("palette-error-main")), S(m.Alert, "infoFilledBg", M("palette-info-main")), S(m.Alert, "successFilledBg", M("palette-success-main")), S(m.Alert, "warningFilledBg", M("palette-warning-main")), S(m.Alert, "errorFilledColor", Ge(() => m.getContrastText(m.error.main))), S(m.Alert, "infoFilledColor", Ge(() => m.getContrastText(m.info.main))), S(m.Alert, "successFilledColor", Ge(() => m.getContrastText(m.success.main))), S(m.Alert, "warningFilledColor", Ge(() => m.getContrastText(m.warning.main))), S(m.Alert, "errorStandardBg", _(se, s ? h("palette-error-light") : m.error.light, 0.9)), S(m.Alert, "infoStandardBg", _(se, s ? h("palette-info-light") : m.info.light, 0.9)), S(m.Alert, "successStandardBg", _(se, s ? h("palette-success-light") : m.success.light, 0.9)), S(m.Alert, "warningStandardBg", _(se, s ? h("palette-warning-light") : m.warning.light, 0.9)), S(m.Alert, "errorIconColor", M("palette-error-main")), S(m.Alert, "infoIconColor", M("palette-info-main")), S(m.Alert, "successIconColor", M("palette-success-main")), S(m.Alert, "warningIconColor", M("palette-warning-main")), S(m.AppBar, "defaultBg", M("palette-grey-100")), S(m.Avatar, "defaultBg", M("palette-grey-400")), S(m.Button, "inheritContainedBg", M("palette-grey-300")), S(m.Button, "inheritContainedHoverBg", M("palette-grey-A100")), S(m.Chip, "defaultBorder", M("palette-grey-400")), S(m.Chip, "defaultAvatarColor", M("palette-grey-700")), S(m.Chip, "defaultIconColor", M("palette-grey-700")), S(m.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(m.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(m.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(m.LinearProgress, "primaryBg", _(se, s ? h("palette-primary-main") : m.primary.main, 0.62)), S(m.LinearProgress, "secondaryBg", _(se, s ? h("palette-secondary-main") : m.secondary.main, 0.62)), S(m.LinearProgress, "errorBg", _(se, s ? h("palette-error-main") : m.error.main, 0.62)), S(m.LinearProgress, "infoBg", _(se, s ? h("palette-info-main") : m.info.main, 0.62)), S(m.LinearProgress, "successBg", _(se, s ? h("palette-success-main") : m.success.main, 0.62)), S(m.LinearProgress, "warningBg", _(se, s ? h("palette-warning-light") : m.warning.main, 0.62)), S(m.Skeleton, "bg", T ? _(st, s ? h("palette-text-primary") : m.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), S(m.Slider, "primaryTrack", _(se, s ? h("palette-primary-main") : m.primary.main, 0.62)), S(m.Slider, "secondaryTrack", _(se, s ? h("palette-secondary-main") : m.secondary.main, 0.62)), S(m.Slider, "errorTrack", _(se, s ? h("palette-error-main") : m.error.main, 0.62)), S(m.Slider, "infoTrack", _(se, s ? h("palette-info-main") : m.info.main, 0.62)), S(m.Slider, "successTrack", _(se, s ? h("palette-success-main") : m.success.main, 0.62)), S(m.Slider, "warningTrack", _(se, s ? h("palette-warning-main") : m.warning.main, 0.62));
      const B = T ? _(ae, s ? h("palette-background-default") : m.background.default, 0.6825) : Zt(m.background.default, 0.8);
      S(m.SnackbarContent, "bg", B), S(m.SnackbarContent, "color", Ge(() => T ? cn.text.primary : m.getContrastText(B))), S(m.SpeedDialAction, "fabHoverBg", Zt(m.background.paper, 0.15)), S(m.StepConnector, "border", M("palette-grey-400")), S(m.StepContent, "border", M("palette-grey-400")), S(m.Switch, "defaultColor", M("palette-common-white")), S(m.Switch, "defaultDisabledColor", M("palette-grey-100")), S(m.Switch, "primaryDisabledColor", _(se, s ? h("palette-primary-main") : m.primary.main, 0.62)), S(m.Switch, "secondaryDisabledColor", _(se, s ? h("palette-secondary-main") : m.secondary.main, 0.62)), S(m.Switch, "errorDisabledColor", _(se, s ? h("palette-error-main") : m.error.main, 0.62)), S(m.Switch, "infoDisabledColor", _(se, s ? h("palette-info-main") : m.info.main, 0.62)), S(m.Switch, "successDisabledColor", _(se, s ? h("palette-success-main") : m.success.main, 0.62)), S(m.Switch, "warningDisabledColor", _(se, s ? h("palette-warning-main") : m.warning.main, 0.62)), S(m.TableCell, "border", _(se, st(s ? h("palette-divider") : m.divider, 1), 0.88)), S(m.Tooltip, "bg", _(st, s ? h("palette-grey-700") : m.grey[700], 0.92));
    }
    if (m.mode === "dark") {
      S(m.Alert, "errorColor", _(se, s ? h("palette-error-light") : m.error.light, 0.6)), S(m.Alert, "infoColor", _(se, s ? h("palette-info-light") : m.info.light, 0.6)), S(m.Alert, "successColor", _(se, s ? h("palette-success-light") : m.success.light, 0.6)), S(m.Alert, "warningColor", _(se, s ? h("palette-warning-light") : m.warning.light, 0.6)), S(m.Alert, "errorFilledBg", M("palette-error-dark")), S(m.Alert, "infoFilledBg", M("palette-info-dark")), S(m.Alert, "successFilledBg", M("palette-success-dark")), S(m.Alert, "warningFilledBg", M("palette-warning-dark")), S(m.Alert, "errorFilledColor", Ge(() => m.getContrastText(m.error.dark))), S(m.Alert, "infoFilledColor", Ge(() => m.getContrastText(m.info.dark))), S(m.Alert, "successFilledColor", Ge(() => m.getContrastText(m.success.dark))), S(m.Alert, "warningFilledColor", Ge(() => m.getContrastText(m.warning.dark))), S(m.Alert, "errorStandardBg", _(ae, s ? h("palette-error-light") : m.error.light, 0.9)), S(m.Alert, "infoStandardBg", _(ae, s ? h("palette-info-light") : m.info.light, 0.9)), S(m.Alert, "successStandardBg", _(ae, s ? h("palette-success-light") : m.success.light, 0.9)), S(m.Alert, "warningStandardBg", _(ae, s ? h("palette-warning-light") : m.warning.light, 0.9)), S(m.Alert, "errorIconColor", M("palette-error-main")), S(m.Alert, "infoIconColor", M("palette-info-main")), S(m.Alert, "successIconColor", M("palette-success-main")), S(m.Alert, "warningIconColor", M("palette-warning-main")), S(m.AppBar, "defaultBg", M("palette-grey-900")), S(m.AppBar, "darkBg", M("palette-background-paper")), S(m.AppBar, "darkColor", M("palette-text-primary")), S(m.Avatar, "defaultBg", M("palette-grey-600")), S(m.Button, "inheritContainedBg", M("palette-grey-800")), S(m.Button, "inheritContainedHoverBg", M("palette-grey-700")), S(m.Chip, "defaultBorder", M("palette-grey-700")), S(m.Chip, "defaultAvatarColor", M("palette-grey-300")), S(m.Chip, "defaultIconColor", M("palette-grey-300")), S(m.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(m.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(m.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(m.LinearProgress, "primaryBg", _(ae, s ? h("palette-primary-main") : m.primary.main, 0.5)), S(m.LinearProgress, "secondaryBg", _(ae, s ? h("palette-secondary-main") : m.secondary.main, 0.5)), S(m.LinearProgress, "errorBg", _(ae, s ? h("palette-error-main") : m.error.main, 0.5)), S(m.LinearProgress, "infoBg", _(ae, s ? h("palette-info-main") : m.info.main, 0.5)), S(m.LinearProgress, "successBg", _(ae, s ? h("palette-success-main") : m.success.main, 0.5)), S(m.LinearProgress, "warningBg", _(ae, s ? h("palette-warning-main") : m.warning.main, 0.5)), S(m.Skeleton, "bg", T ? _(st, s ? h("palette-text-primary") : m.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), S(m.Slider, "primaryTrack", _(ae, s ? h("palette-primary-main") : m.primary.main, 0.5)), S(m.Slider, "secondaryTrack", _(ae, s ? h("palette-secondary-main") : m.secondary.main, 0.5)), S(m.Slider, "errorTrack", _(ae, s ? h("palette-error-main") : m.error.main, 0.5)), S(m.Slider, "infoTrack", _(ae, s ? h("palette-info-main") : m.info.main, 0.5)), S(m.Slider, "successTrack", _(ae, s ? h("palette-success-main") : m.success.main, 0.5)), S(m.Slider, "warningTrack", _(ae, s ? h("palette-warning-light") : m.warning.main, 0.5));
      const B = T ? _(se, s ? h("palette-background-default") : m.background.default, 0.985) : Zt(m.background.default, 0.98);
      S(m.SnackbarContent, "bg", B), S(m.SnackbarContent, "color", Ge(() => T ? Mi.text.primary : m.getContrastText(B))), S(m.SpeedDialAction, "fabHoverBg", Zt(m.background.paper, 0.15)), S(m.StepConnector, "border", M("palette-grey-600")), S(m.StepContent, "border", M("palette-grey-600")), S(m.Switch, "defaultColor", M("palette-grey-300")), S(m.Switch, "defaultDisabledColor", M("palette-grey-600")), S(m.Switch, "primaryDisabledColor", _(ae, s ? h("palette-primary-main") : m.primary.main, 0.55)), S(m.Switch, "secondaryDisabledColor", _(ae, s ? h("palette-secondary-main") : m.secondary.main, 0.55)), S(m.Switch, "errorDisabledColor", _(ae, s ? h("palette-error-main") : m.error.main, 0.55)), S(m.Switch, "infoDisabledColor", _(ae, s ? h("palette-info-main") : m.info.main, 0.55)), S(m.Switch, "successDisabledColor", _(ae, s ? h("palette-success-main") : m.success.main, 0.55)), S(m.Switch, "warningDisabledColor", _(ae, s ? h("palette-warning-light") : m.warning.main, 0.55)), S(m.TableCell, "border", _(ae, st(s ? h("palette-divider") : m.divider, 1), 0.68)), S(m.Tooltip, "bg", _(st, s ? h("palette-grey-700") : m.grey[700], 0.92));
    }
    s || (Ke(m.background, "default"), Ke(m.background, "paper"), Ke(m.common, "background"), Ke(m.common, "onBackground"), Ke(m, "divider")), Object.keys(m).forEach((B) => {
      const q = m[B];
      B !== "tonalOffset" && !s && q && typeof q == "object" && (q.main && S(m[B], "mainChannel", Dt(Ft(q.main))), q.light && S(m[B], "lightChannel", Dt(Ft(q.light))), q.dark && S(m[B], "darkChannel", Dt(Ft(q.dark))), q.contrastText && S(m[B], "contrastTextChannel", Dt(Ft(q.contrastText))), B === "text" && (Ke(m[B], "primary"), Ke(m[B], "secondary")), B === "action" && (q.active && Ke(m[B], "active"), q.selected && Ke(m[B], "selected")));
    });
  }), O = t.reduce((L, m) => De(L, m), O);
  const U = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: Gc(O),
    enableContrastVars: s
  }, {
    vars: D,
    generateThemeVars: F,
    generateStyleSheets: H
  } = mc(O, U);
  return O.vars = D, Object.entries(O.colorSchemes[O.defaultColorScheme]).forEach(([L, m]) => {
    O[L] = m;
  }), O.generateThemeVars = F, O.generateStyleSheets = H, O.generateSpacing = function() {
    return xi(p.spacing, En(this));
  }, O.getColorSchemeSelector = gc(c), O.spacing = O.generateSpacing(), O.shouldSkipGeneratingVar = l, O.unstable_sxConfig = {
    ...Rr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, O.unstable_sx = function(m) {
    return Tt({
      sx: m,
      theme: this
    });
  }, O.internal_cache = {}, O.toRuntimeSource = Di, O;
}
function Vo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Pn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Mr(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, l = i || "light", c = o == null ? void 0 : o[l], d = {
    ...o,
    ...r ? {
      [l]: {
        ...typeof c != "boolean" && c,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return dn(e, ...t);
    let p = r;
    "palette" in e || d[l] && (d[l] !== !0 ? p = d[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const g = dn({
      ...e,
      palette: p
    }, ...t);
    return g.defaultColorScheme = l, g.colorSchemes = d, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: g.palette
    }, Vo(g, "dark", d.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: g.palette
    }, Vo(g, "light", d.light)), g;
  }
  return !r && !("light" in d) && l === "light" && (d.light = !0), Xc({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Dn = Mr();
function Jc() {
  const e = yi(Dn);
  return process.env.NODE_ENV !== "production" && R.useDebugValue(e), e[Qe] || e;
}
function Qc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Zc = (e) => Qc(e) && e !== "classes", ed = Fl({
  themeId: Qe,
  defaultTheme: Dn,
  rootShouldForwardProp: Zc
});
function td({
  theme: e,
  ...t
}) {
  const r = Qe in e ? e[Qe] : void 0;
  return /* @__PURE__ */ a(Vt, {
    ...t,
    themeId: r ? Qe : void 0,
    theme: r || e
  });
}
const er = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && ($.string, $.string, $.string, $.string, $.string, $.oneOf(["dark", "light", "system"]), $.string, $.string);
const {
  CssVarsProvider: rd
} = uc({
  themeId: Qe,
  // @ts-ignore ignore module augmentation tests
  theme: () => Mr({
    cssVariables: !0
  }),
  colorSchemeStorageKey: er.colorSchemeStorageKey,
  modeStorageKey: er.modeStorageKey,
  defaultColorScheme: {
    light: er.defaultLightColorScheme,
    dark: er.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Pi(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return Tt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), nd = rd;
function Wi({
  theme: e,
  ...t
}) {
  const r = R.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = Qe in e ? e[Qe] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ a(td, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ a(nd, {
    theme: e,
    ...t
  });
}
function Bi(e) {
  return /* @__PURE__ */ a($n, {
    ...e,
    defaultTheme: Dn,
    themeId: Qe
  });
}
process.env.NODE_ENV !== "production" && (Bi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: $.oneOfType([$.array, $.func, $.number, $.object, $.string, $.bool])
});
function ji(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ a(Bi, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && ($.node, $.object.isRequired);
function Vi(e) {
  return Ql(e);
}
const un = typeof ji({}) == "function", od = (e, t) => ({
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
}), id = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Ui = (e, t = !1) => {
  var i, s;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var p, g;
    const d = e.getColorSchemeSelector(l);
    d.startsWith("@") ? r[d] = {
      ":root": {
        colorScheme: (p = c.palette) == null ? void 0 : p.mode
      }
    } : r[d.replace(/\s*&/, "")] = {
      colorScheme: (g = c.palette) == null ? void 0 : g.mode
    };
  });
  let n = {
    html: od(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...id(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const o = (s = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null ? void 0 : s.styleOverrides;
  return o && (n = [n, o]), n;
}, or = "mui-ecs", ad = (e) => {
  const t = Ui(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${or})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var s, l;
    const i = e.getColorSchemeSelector(n);
    i.startsWith("@") ? r[i] = {
      [`:root:not(:has(.${or}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : r[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${or}))`]: {
        colorScheme: (l = o.palette) == null ? void 0 : l.mode
      }
    };
  }), t;
}, sd = ji(un ? ({
  theme: e,
  enableColorScheme: t
}) => Ui(e, t) : ({
  theme: e
}) => ad(e));
function Hi(e) {
  const t = Vi({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ f(R.Fragment, {
    children: [un && /* @__PURE__ */ a(sd, {
      enableColorScheme: n
    }), !un && !n && /* @__PURE__ */ a("span", {
      className: or,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (Hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: $.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: $.bool
});
const ld = Q.fontFamily.code, cd = {
  fontFamily: Q.fontFamily.primary,
  h1: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.medium,
    fontSize: Q.fontSize["2xl"]
  },
  h2: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.medium,
    fontSize: Q.fontSize.xl
  },
  h3: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.medium,
    fontSize: Q.fontSize.lg
  },
  h4: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.medium,
    fontSize: Q.fontSize.base
  },
  h5: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    fontSize: Q.fontSize.sm
  },
  h6: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    fontSize: Q.fontSize.xs
  },
  body1: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    fontSize: Q.fontSize.sm
  },
  body2: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    fontSize: Q.fontSize.xs
  },
  button: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    textTransform: "none"
  },
  caption: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    fontSize: Q.fontSize.xs
  },
  overline: {
    fontFamily: Q.fontFamily.primary,
    fontWeight: Q.fontWeight.regular,
    fontSize: Q.fontSize.xs,
    textTransform: "none",
    letterSpacing: "0.08em"
  }
}, dd = (e) => {
  const t = e === "light";
  return {
    MuiButton: {
      styleOverrides: {
        root: ({ theme: r }) => ({
          borderRadius: "9999px",
          fontWeight: 400,
          textTransform: "none",
          boxShadow: "none",
          padding: r.spacing(1.25, 2.5),
          transition: "all 0.2s ease-in-out",
          border: "none"
        }),
        outlined: {
          borderWidth: "1px",
          borderColor: t ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.12)",
          color: t ? b.black : b.white,
          "&:hover": {
            backgroundColor: t ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
            borderColor: t ? b.black : b.white,
            borderWidth: "1px"
          }
        },
        text: {
          color: t ? b.black : b.white,
          fontWeight: 400,
          textDecoration: "none",
          "&:hover": {
            backgroundColor: t ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.08)"
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
              boxShadow: tt.sm
            }
          }
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
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
          borderRadius: 16,
          // 1rem — Brand Book §radii (the workhorse)
          backgroundColor: t ? b.white : b.gray[800],
          border: `1px solid ${t ? b.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          boxShadow: tt.sm,
          "&:hover": {
            boxShadow: tt.md
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
          textTransform: "uppercase",
          fontSize: "0.75rem"
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: t ? b.erieBlack : b.white,
          "& code": {
            fontFamily: ld,
            backgroundColor: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, ud = (e) => {
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
}, pd = () => [
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
], fd = (e) => Mr({
  palette: ud(e),
  typography: cd,
  components: dd(e),
  shape: {
    borderRadius: 16
    // 1rem — Brand Book §radii
  },
  shadows: pd()
}), Gi = vn({
  mode: "light",
  toggleColorMode: () => {
  }
}), Fn = () => br(Gi), vp = ({ children: e }) => {
  const [t, r] = V(() => {
    if (typeof window > "u") return "light";
    const s = localStorage.getItem("ai4u-theme-mode");
    return s === "dark" || s === "light" ? s : "light";
  }), n = lt(() => {
    r((s) => {
      const l = s === "light" ? "dark" : "light";
      return typeof window < "u" && (localStorage.setItem("ai4u-theme-mode", l), document.documentElement.setAttribute("data-theme", l)), l;
    });
  }, []);
  me(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, [t]);
  const o = Oe(() => ({ mode: t, toggleColorMode: n }), [t, n]), i = Oe(() => fd(t), [t]);
  return /* @__PURE__ */ a(Gi.Provider, { value: o, children: /* @__PURE__ */ f(Wi, { theme: i, children: [
    /* @__PURE__ */ a(Hi, {}),
    e
  ] }) });
}, pn = vn({
  surface: "theme"
}), Sp = ({ children: e, surface: t }) => {
  const r = br(pn), { mode: n } = Fn(), o = t || r.surface, i = Oe(() => o === "theme" ? n : ct[o].effectiveMode, [o, n]), s = Oe(() => {
    const l = i === "light";
    return Mr({
      palette: {
        mode: i,
        primary: {
          main: l ? b.black : b.white,
          contrastText: l ? b.white : b.black
        },
        background: {
          default: l ? b.accentColors.mint : b.black,
          paper: l ? b.accentColors.mint : b.gray[900]
        },
        text: {
          primary: l ? b.black : b.white,
          secondary: l ? b.gray[600] : b.gray[300]
        }
      },
      // Heredar tipografía y otros ajustes si es necesario, 
      // pero lo más importante es la paleta para el contraste.
      typography: {
        fontFamily: Q.fontFamily.primary
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              borderRadius: "9999px",
              textTransform: "none"
            },
            outlined: {
              borderColor: l ? "rgba(0,0,0,0.23)" : "rgba(255,255,255,0.23)",
              color: l ? b.black : b.white
            }
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                backgroundColor: l ? b.black : b.white,
                color: l ? b.white : b.black
              }
            }
          ]
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: l ? b.black : b.white
            }
          }
        }
      }
    });
  }, [i]);
  return /* @__PURE__ */ a(pn.Provider, { value: { surface: o }, children: /* @__PURE__ */ a(Wi, { theme: s, children: e }) });
}, hd = () => br(pn), ee = () => {
  const e = Jc(), { mode: t } = Fn(), { surface: r } = hd(), n = Oe(() => r === "theme" ? ha[t] : ct[r], [t, r]), o = Oe(() => r === "theme" ? t : ct[r].effectiveMode, [t, r]), i = ma(o);
  return Oe(() => ({
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
    components: i.components,
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
  }), [t, o, r, n, i.components, e]);
}, wp = (e, t) => {
  const { components: r } = ee();
  return Oe(() => {
    switch (e) {
      case "button":
        return r.button[t];
      case "card":
        return r.card[t];
      default:
        return null;
    }
  }, [r, e, t]);
}, Cp = () => {
  const { mode: e, contrast: t } = ee();
  return Oe(() => ({
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
}, md = () => {
  const [e, t] = V(!1), [r, n] = V(!1);
  return me(() => {
    const o = () => {
      const s = window.matchMedia("(display-mode: standalone)").matches, l = window.navigator.standalone;
      n(s || l), t(s || l);
    };
    o();
    const i = window.matchMedia("(display-mode: standalone)");
    return i.addListener(o), () => {
      i.removeListener(o);
    };
  }, []), { isPWA: e, isStandalone: r };
};
class gd {
  constructor() {
    Ue(this, "isDev", !1);
    Ue(this, "log", (...t) => {
      this.isDev && console.log(...t);
    });
    Ue(this, "error", (...t) => {
      this.isDev && console.error(...t);
    });
    Ue(this, "warn", (...t) => {
      this.isDev && console.warn(...t);
    });
    Ue(this, "info", (...t) => {
      this.isDev && console.info(...t);
    });
    Ue(this, "debug", (...t) => {
      this.isDev && console.debug(...t);
    });
  }
}
const ue = new gd(), bt = {
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
class xd {
  constructor() {
    Ue(this, "isGALoaded", !1);
    this.checkGAAvailability();
  }
  checkGAAvailability() {
    typeof window < "u" && window.gtag ? (this.isGALoaded = !0, ue.log("📊 Google Analytics disponible")) : ue.warn("⚠️ Google Analytics no disponible");
  }
  // Tracking de eventos específicos AI4U
  trackServiceInterest(t, r = "unknown") {
    this.trackEvent({
      action: bt.SERVICE_INTEREST,
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
      action: bt.CONSULTATION_REQUEST,
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
      action: bt.DIAGNOSTIC_START,
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
      action: bt.PHILOSOPHY_ENGAGEMENT,
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
      action: bt.PERFORMANCE_ISSUE,
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
      action: bt.ERROR_BOUNDARY_HIT,
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
      } catch (i) {
        ue.error("Error tracking page view:", i);
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
const Yi = new xd();
function kp(e) {
  typeof window > "u" || !e || (window.__AI4U_GA_ID__ = e);
}
class yd {
  constructor() {
    Ue(this, "sessionId");
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
    ue.error("🚨 Error captured:", r), Yi.trackErrorBoundary(r, r.componentStack), this.sendToRemoteService(r);
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
const bd = new yd(), vd = (e, t = {}) => {
  const {
    priority: r = !1,
    size: n = "original",
    format: o = "webp",
    fallback: i,
    preload: s = !1
  } = t, [l, c] = V({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [d, p] = V(null);
  me(() => {
    (async () => {
      try {
        const x = await fetch("/assets/images/optimized/image-mapping.json");
        if (x.ok) {
          const C = await x.json();
          p(C);
        }
      } catch {
      }
    })();
  }, []);
  const g = Oe(() => {
    var I, E;
    if (!d || !d[e])
      return {
        src: `/assets/images/${e}.jpg`,
        format: "original",
        size: "original"
      };
    const v = d[e];
    let x = "", C = "original", w = "original";
    return o === "webp" && ((I = v.formats) != null && I.webp) ? (x = `/assets/images/optimized/${v.formats.webp.file}`, C = "webp") : (x = `/assets/images/${v.original}`, C = "original"), n !== "original" && ((E = v.sizes) != null && E[n]) && (x = `/assets/images/optimized/${v.sizes[n].file}`, w = n), {
      src: x,
      format: C,
      size: w
    };
  }, [e, d, o, n]);
  me(() => {
    if (!g.src) return;
    c((x) => ({
      ...x,
      src: g.src,
      format: g.format,
      size: g.size,
      isLoaded: !1,
      error: !1
    }));
    const v = new Image();
    return v.onload = () => {
      c((x) => ({
        ...x,
        isLoaded: !0,
        error: !1
      }));
    }, v.onerror = () => {
      g.format === "webp" && !l.error ? c((x) => {
        var C;
        return {
          ...x,
          src: `/assets/images/${((C = d == null ? void 0 : d[e]) == null ? void 0 : C.original) || `${e}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : c(i ? (x) => ({
        ...x,
        src: i,
        format: "fallback",
        error: !0
      }) : (x) => ({
        ...x,
        error: !0
      }));
    }, (r || s) && (v.loading = "eager"), v.src = g.src, () => {
      v.onload = null, v.onerror = null;
    };
  }, [g.src, g.format, i, r, s, l.error, d, e]);
  const y = Oe(() => {
    if (typeof window > "u") return !1;
    const v = document.createElement("canvas");
    return v.width = 1, v.height = 1, v.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);
  return {
    src: Oe(() => {
      var v;
      return l.format === "webp" && !y ? `/assets/images/${((v = d == null ? void 0 : d[e]) == null ? void 0 : v.original) || `${e}.jpg`}` : l.src;
    }, [l.src, l.format, y, d, e]),
    isLoaded: l.isLoaded,
    error: l.error,
    format: l.format,
    size: l.size,
    supportsWebP: y,
    isLoading: !l.isLoaded && !l.error
  };
}, en = (e) => {
  const [t, r] = V(/* @__PURE__ */ new Set()), [n, o] = V(0);
  return me(() => {
    o(e.length);
    const i = (l) => new Promise((c) => {
      const d = new Image();
      d.onload = () => {
        r((p) => new Set(Array.from(p).concat(l))), c();
      }, d.onerror = () => {
        r((p) => new Set(Array.from(p).concat(l))), c();
      }, d.src = `/assets/images/${l}.jpg`;
    });
    (async () => {
      await Promise.all(e.map(i));
    })();
  }, [e]), {
    loadedImages: Array.from(t),
    totalImages: n,
    progress: n > 0 ? t.size / n * 100 : 0,
    isComplete: t.size === n
  };
}, Sd = Ie(u, {
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
})), fr = (e) => {
  const {
    type: t,
    size: r = "medium",
    color: n,
    variant: o = "filled",
    onClick: i,
    sx: s
  } = e, l = ee(), c = n || l.contrast.text.primary, d = () => {
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
          border: `2px solid ${c}`,
          color: c
        };
      case "minimal":
        return {
          ...g,
          backgroundColor: "transparent",
          color: c
        };
      default:
        return {
          ...g,
          backgroundColor: c,
          color: c === l.palette.white ? l.palette.black : l.palette.white,
          border: "none"
        };
    }
  }, p = () => {
    const g = {
      style: {
        fontSize: "inherit"
      }
    };
    switch (t) {
      case "arrow-up":
        return /* @__PURE__ */ a("span", { ...g, children: "↑" });
      case "arrow-down":
        return /* @__PURE__ */ a("span", { ...g, children: "↓" });
      case "arrow-right":
        return /* @__PURE__ */ a("span", { ...g, children: "→" });
      case "arrow-left":
        return /* @__PURE__ */ a("span", { ...g, children: "←" });
      case "plus":
        return /* @__PURE__ */ a("span", { ...g, children: "+" });
      case "minus":
        return /* @__PURE__ */ a("span", { ...g, children: "−" });
      case "circle":
        return /* @__PURE__ */ a("span", { ...g, children: "●" });
      case "square":
        return /* @__PURE__ */ a("span", { ...g, children: "■" });
      case "triangle":
        return /* @__PURE__ */ a("span", { ...g, children: "▲" });
      case "cross":
        return /* @__PURE__ */ a("span", { ...g, children: "✕" });
      case "line":
        return /* @__PURE__ */ a("span", { ...g, children: "—" });
      case "dot":
        return /* @__PURE__ */ a("span", { ...g, children: "•" });
      case "search":
        return /* @__PURE__ */ a("span", { ...g, children: "[?]" });
      case "clear":
        return /* @__PURE__ */ a("span", { ...g, children: "✕" });
      case "check":
        return /* @__PURE__ */ a("span", { ...g, children: "✓" });
      default:
        return /* @__PURE__ */ a("span", { ...g, children: "○" });
    }
  };
  return /* @__PURE__ */ a(
    Sd,
    {
      iconSize: r,
      isClickable: !!i,
      onClick: i,
      sx: { ...d(), ...s },
      children: p()
    }
  );
}, wd = vn(void 0), qi = () => {
  const e = br(wd);
  if (e === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return e;
}, Ep = ({ images: e, onAllLoaded: t }) => {
  const { setCriticalImagesLoaded: r } = qi();
  return me(() => {
    let n = 0;
    const o = e.length, i = () => {
      n++, n === o && (r(!0), t == null || t());
    }, s = () => {
      n++, n === o && (r(!0), t == null || t());
    };
    e.forEach((l) => {
      const c = new Image();
      c.onload = i, c.onerror = s, c.src = l;
    }), o === 0 && (r(!0), t == null || t());
  }, [e, r, t]), null;
}, Tp = () => {
  const e = we();
  return /* @__PURE__ */ a(
    u,
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
      children: /* @__PURE__ */ a(qe, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(Ct, {}) }),
        /* @__PURE__ */ a(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
}, Ln = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: i,
  skeletonWidth: s,
  priority: l = !1
}) => {
  const c = we(), { isPWA: d } = md(), { imgRef: p, isLoaded: g, isInView: y, error: h } = ss(e, { priority: l }), v = {
    bgcolor: c.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ f(
    u,
    {
      ref: p,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        !g && /* @__PURE__ */ a(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: i || n,
            sx: v
          }
        ),
        y && /* @__PURE__ */ a(
          u,
          {
            component: "img",
            src: e,
            alt: t,
            loading: l ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: g ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: g ? "block" : "none",
              // Optimizaciones específicas para PWA
              ...d && {
                imageRendering: "auto",
                touchAction: "manipulation"
              }
            },
            onLoad: () => {
            }
          }
        ),
        h && /* @__PURE__ */ a(
          u,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: c.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: c.palette.text.secondary,
              fontSize: "0.875rem"
            },
            children: "Error al cargar imagen"
          }
        )
      ]
    }
  );
}, Ip = ({
  src: e,
  pixelArtSrc: t,
  alt: r,
  width: n = "100%",
  height: o = "auto",
  transitionDuration: i = 0.3,
  sx: s,
  ...l
}) => {
  const [c, d] = V(!1);
  return /* @__PURE__ */ a(
    u,
    {
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
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
          transition: `opacity ${i}s ease-in-out`,
          opacity: c ? 0 : 1,
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
          transition: `opacity ${i}s ease-in-out`,
          opacity: c ? 1 : 0,
          zIndex: 2
        },
        ...s
      },
      ...l,
      children: /* @__PURE__ */ a(
        u,
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
}, Ap = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  transitionDuration: o = 0.3,
  pixelSize: i = 8,
  sx: s,
  ...l
}) => {
  const [c, d] = V(!1);
  return /* @__PURE__ */ f(
    u,
    {
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        borderRadius: "8px",
        cursor: "pointer",
        ...s
      },
      ...l,
      children: [
        /* @__PURE__ */ a(
          u,
          {
            component: "img",
            src: e,
            alt: t,
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: `all ${o}s ease-in-out`,
              filter: c ? "contrast(1.4) brightness(1.2) saturate(1.5) blur(0.3px)" : "none",
              imageRendering: c ? "pixelated" : "auto",
              transform: c ? "scale(1.05)" : "scale(1)",
              "&::before": c ? {
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
                backgroundSize: `${i}px ${i}px`,
                pointerEvents: "none",
                zIndex: 2
              } : {}
            }
          }
        ),
        c && /* @__PURE__ */ a(
          u,
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
              backgroundSize: `${i}px ${i}px`,
              pointerEvents: "none",
              zIndex: 3,
              transition: `opacity ${o}s ease-in-out`
            }
          }
        ),
        c && /* @__PURE__ */ a(
          u,
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
        c && /* @__PURE__ */ a(
          u,
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
}, Cd = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", kd = `
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
`, Ed = () => (me(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var t;
    try {
      (t = window.google) != null && t.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: Cd,
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
}, []), /* @__PURE__ */ f(be, { children: [
  /* @__PURE__ */ a(
    u,
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
  /* @__PURE__ */ a("style", { children: kd })
] })), fn = [
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
], hr = "es";
function Td() {
  const e = document.cookie.match(/googtrans=([^;]+)/);
  if (e && e[1]) {
    const o = e[1].trim();
    if (o) {
      const i = o.split("/").filter(Boolean), s = i[i.length - 1];
      if (s && s !== hr) {
        const l = fn.find((c) => c.code === s || c.code.startsWith(s));
        if (l) return l.short;
      }
    }
  }
  const r = (document.documentElement.lang || hr).split("-")[0].toLowerCase(), n = fn.find((o) => o.code.toLowerCase().startsWith(r));
  return (n == null ? void 0 : n.short) ?? "ES";
}
const Uo = ({ light: e = !1 }) => {
  const t = ee(), r = we(), n = sr(r.breakpoints.down("sm")), o = sr(r.breakpoints.between("sm", "md")), [i, s] = V(Td), [l, c] = V(null), [d, p] = V(() => !!document.getElementById("google-translate-script")), g = Gt(null), y = !!l;
  me(() => {
    if (document.getElementById("google-translate-script")) {
      p(!0);
      return;
    }
    const w = setInterval(() => {
      document.getElementById("google-translate-script") && (p(!0), clearInterval(w));
    }, 200), I = setTimeout(() => {
      clearInterval(w), p(!0);
    }, 5e3);
    return () => {
      clearInterval(w), clearTimeout(I);
    };
  }, []);
  const h = (w) => {
    c(w.currentTarget);
  }, v = () => {
    c(null);
  }, x = (w, I) => {
    if (v(), w === hr) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const E = `/${hr}/${w}`;
    document.cookie = `googtrans=${E}; path=/`, window.location.reload();
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
    u,
    {
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ a(
          u,
          {
            ref: g,
            component: "button",
            onClick: h,
            "aria-label": `Cambiar idioma (actual: ${i})`,
            "aria-controls": y ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": y ? "true" : void 0,
            disabled: !d,
            sx: (w) => {
              const I = C(w);
              return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: I.width,
                height: I.height,
                minWidth: I.width,
                padding: 0,
                color: e ? "#FFFFFF" : t.contrast.text.primary,
                border: "none",
                borderRadius: w.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: e ? "transparent" : t.contrast.surface,
                fontFamily: w.typography.fontFamily,
                fontSize: I.fontSize,
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
            children: d ? i : "…"
          }
        ),
        /* @__PURE__ */ a(
          ri,
          {
            id: "language-menu",
            anchorEl: l,
            open: y,
            onClose: v,
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
                  boxShadow: tt.md
                })
              }
            },
            children: fn.map((w) => /* @__PURE__ */ a(
              rr,
              {
                onClick: () => x(w.code, w.short),
                selected: i === w.short,
                sx: (I) => ({
                  fontFamily: I.typography.fontFamily,
                  fontSize: I.typography.body2.fontSize,
                  fontWeight: i === w.short ? 600 : 400,
                  color: i === w.short ? t.palette.black : t.contrast.text.primary,
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
                children: /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                  /* @__PURE__ */ a(
                    u,
                    {
                      component: "span",
                      sx: (I) => ({
                        fontWeight: 400,
                        minWidth: I.spacing(3),
                        color: i === w.short ? t.palette.black : t.contrast.text.secondary
                      }),
                      children: w.short
                    }
                  ),
                  /* @__PURE__ */ a(u, { component: "span", children: w.label })
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
let hn = null;
try {
  hn = require("react-helmet-async").Helmet;
} catch {
}
const Ki = (e) => {
  if (typeof window > "u" || !hn) return null;
  const t = hn, {
    title: r = "AI4U - Inteligencia Artificial para tu Negocio",
    description: n = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
    keywords: o = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
    canonical: i,
    ogImage: s = "/assets/images/ai4u-logo.png",
    ogType: l = "website",
    structuredData: c,
    noIndex: d = !1,
    noFollow: p = !1
  } = e, g = r.includes("AI4U") ? r : `${r} | AI4U`, y = i ?? window.location.href;
  return /* @__PURE__ */ f(t, { children: [
    /* @__PURE__ */ a("title", { children: g }),
    /* @__PURE__ */ a("meta", { name: "description", content: n }),
    /* @__PURE__ */ a("meta", { name: "keywords", content: o }),
    /* @__PURE__ */ a("meta", { name: "robots", content: d || p ? `${d ? "noindex" : "index"},${p ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    y && /* @__PURE__ */ a("link", { rel: "canonical", href: y }),
    /* @__PURE__ */ a("meta", { property: "og:title", content: g }),
    /* @__PURE__ */ a("meta", { property: "og:description", content: n }),
    /* @__PURE__ */ a("meta", { property: "og:type", content: l }),
    y && /* @__PURE__ */ a("meta", { property: "og:url", content: y }),
    /* @__PURE__ */ a("meta", { property: "og:image", content: s }),
    /* @__PURE__ */ a("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ a("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ a("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ a("meta", { property: "twitter:title", content: g }),
    /* @__PURE__ */ a("meta", { property: "twitter:description", content: n }),
    /* @__PURE__ */ a("meta", { property: "twitter:image", content: s }),
    /* @__PURE__ */ a("meta", { property: "twitter:site", content: "@ai4u_co" }),
    c && /* @__PURE__ */ a("script", { type: "application/ld+json", children: JSON.stringify(c) })
  ] });
}, $p = (e = {}) => {
  const {
    title: t = "AI4U - Inteligencia Artificial para tu Negocio",
    description: r = "Soluciones de Inteligencia Artificial personalizadas para tu negocio.",
    keywords: n,
    canonical: o,
    ogImage: i = "/assets/images/ai4u-logo.png",
    ogType: s = "website",
    noIndex: l = !1,
    noFollow: c = !1
  } = e, d = t.includes("AI4U") ? t : `${t} | AI4U`;
  return {
    title: d,
    description: r,
    ...n && { keywords: n },
    robots: {
      index: !l,
      follow: !c,
      googleBot: { index: !l, follow: !c }
    },
    ...o && { alternates: { canonical: o } },
    openGraph: {
      title: d,
      description: r,
      type: s,
      ...o && { url: o },
      images: [{ url: i }],
      siteName: "AI4U",
      locale: "es_CO"
    },
    twitter: {
      card: "summary_large_image",
      title: d,
      description: r,
      images: [i],
      site: "@ai4u_co"
    }
  };
}, Rp = ({
  src: e,
  alt: t,
  width: r,
  height: n,
  sx: o,
  priority: i = !1,
  fallback: s
}) => {
  const [l, c] = V(!1), [d, p] = V(!1), [g, y] = V(e), h = ee(), v = () => {
    const I = document.createElement("canvas");
    return I.width = 1, I.height = 1, I.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, x = (I) => I.includes("/assets/images/") ? I.replace(/\.(jpg|jpeg|png)$/i, ".webp") : I;
  me(() => {
    v() && e.includes("/assets/images/") ? y(x(e)) : y(e);
  }, [e]);
  const C = () => {
    c(!0), p(!1);
  }, w = () => {
    g !== e && !d ? (y(e), p(!0)) : s && (y(s), p(!0));
  };
  return /* @__PURE__ */ f(u, { sx: { position: "relative", width: r, height: n }, children: [
    !l && /* @__PURE__ */ a(
      ne,
      {
        variant: "rectangular",
        width: r,
        height: n,
        sx: {
          borderRadius: 1,
          bgcolor: h.contrast.surface,
          ...o
        }
      }
    ),
    /* @__PURE__ */ a(
      "img",
      {
        src: g,
        alt: t,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: l ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          ...o
        },
        onLoad: C,
        onError: w,
        loading: i ? "eager" : "lazy"
      }
    )
  ] });
}, Op = ({
  imageName: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: i,
  skeletonWidth: s,
  priority: l = !1,
  size: c = "original",
  format: d = "webp",
  fallback: p,
  preload: g = !1,
  showOptimizationInfo: y = !1,
  className: h
}) => {
  const v = we(), {
    src: x,
    isLoaded: C,
    error: w,
    isLoading: I
  } = vd(e, {
    priority: l,
    size: c,
    format: d,
    fallback: p,
    preload: g
  }), E = {
    bgcolor: v.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ f(
    u,
    {
      className: h,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        I && /* @__PURE__ */ a(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: i || n,
            sx: E
          }
        ),
        !w && /* @__PURE__ */ a(
          u,
          {
            component: "img",
            src: x,
            alt: t,
            loading: l ? "eager" : "lazy",
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
          u,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: v.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: v.palette.text.secondary,
              fontSize: "0.875rem",
              flexDirection: "column",
              gap: 1
            },
            children: [
              /* @__PURE__ */ a(u, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ a(u, { component: "span", children: "Error al cargar imagen" }),
              y && /* @__PURE__ */ a(u, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: e })
            ]
          }
        ),
        y && !1
      ]
    }
  );
}, _p = ({
  criticalImages: e,
  importantImages: t,
  backgroundImages: r,
  onCriticalLoaded: n,
  onImportantLoaded: o,
  onAllLoaded: i,
  showProgress: s = !1
}) => {
  const { setCriticalImagesLoaded: l } = qi(), [c, d] = V("critical"), p = en(e), g = en(t), y = en(r);
  me(() => {
    p.isComplete && (l(!0), n == null || n(), d("important"));
  }, [p.isComplete, l, n]), me(() => {
    c === "important" && g.isComplete && (o == null || o(), d("background"));
  }, [c, g.isComplete, o]), me(() => {
    c === "background" && y.isComplete && (i == null || i(), d("complete"));
  }, [c, y.isComplete, i]);
  const h = e.length + t.length + r.length, v = p.loadedImages.length + g.loadedImages.length + y.loadedImages.length, x = h > 0 ? v / h * 100 : 0;
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
    /* @__PURE__ */ a("div", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Cargando imágenes..." }),
    /* @__PURE__ */ a("div", { style: { width: "300px", marginBottom: "1rem" }, children: /* @__PURE__ */ a("div", { style: {
      width: "100%",
      height: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      overflow: "hidden"
    }, children: /* @__PURE__ */ a("div", { style: {
      width: `${x}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ f("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      c === "critical" ? "Críticas" : c === "important" ? "Importantes" : c === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ f("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      v,
      " / ",
      h,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ f("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ f("div", { children: [
        "Críticas: ",
        p.loadedImages.length,
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
}, Wt = ({
  href: e,
  variant: t = "subtle",
  children: r,
  className: n,
  ariaLabel: o,
  LinkComponent: i,
  onClick: s
}) => {
  const l = ee();
  return /* @__PURE__ */ a(
    ni,
    {
      component: i ?? "a",
      href: e,
      onClick: s,
      className: n,
      "aria-label": o,
      sx: (() => {
        switch (t) {
          case "accent":
            return {
              color: l.palette.accent,
              fontWeight: 400,
              textDecoration: "none",
              borderBottom: `1px solid ${l.palette.accent}`,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                color: l.palette.success,
                borderBottomColor: l.palette.success,
                transform: "translateY(-1px)"
              }
            };
          case "inline":
            return {
              color: "inherit",
              textDecoration: "underline",
              textDecorationColor: l.contrast.text.secondary,
              transition: "all 0.3s ease",
              "&:hover": {
                color: l.palette.accent,
                textDecorationColor: l.palette.accent
              }
            };
          case "subtle":
          default:
            return {
              color: l.contrast.text.secondary,
              textDecoration: "none",
              borderBottom: "1px solid transparent",
              transition: "all 0.3s ease",
              "&:hover": {
                color: l.palette.accent,
                borderBottomColor: l.palette.accent
              }
            };
        }
      })(),
      children: r
    }
  );
}, Id = (e) => {
  const {
    variant: t = "separator",
    size: r = "small",
    className: n
  } = e, o = ee(), i = () => {
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
  return /* @__PURE__ */ a(
    u,
    {
      className: n,
      sx: {
        ...i(),
        borderRadius: "50%",
        ...s(),
        flexShrink: 0,
        transition: "all 0.3s ease"
      }
    }
  );
}, Np = ({
  serviceId: e,
  serviceColor: t,
  size: r = "medium",
  className: n,
  customThumbnail: o
}) => {
  const i = ee(), l = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[r], c = t || i.palette.accent, p = ((g) => {
    const y = g.split("").reduce((v, x) => v + x.charCodeAt(0), 0), h = [
      // Patrón de círculos
      `<circle cx="30%" cy="30%" r="8" fill="${c}40"/>
       <circle cx="70%" cy="70%" r="12" fill="${c}60"/>
       <circle cx="20%" cy="80%" r="6" fill="${c}80"/>`,
      // Patrón de cuadrados
      `<rect x="20%" y="20%" width="25%" height="25%" fill="${c}40" rx="2"/>
       <rect x="60%" y="60%" width="30%" height="30%" fill="${c}60" rx="2"/>
       <rect x="10%" y="70%" width="20%" height="20%" fill="${c}80" rx="2"/>`,
      // Patrón de triángulos
      `<polygon points="30,20 50,40 10,40" fill="${c}40"/>
       <polygon points="70,60 90,80 50,80" fill="${c}60"/>
       <polygon points="20,70 30,90 10,90" fill="${c}80"/>`,
      // Patrón de líneas
      `<line x1="20%" y1="30%" x2="80%" y2="30%" stroke="${c}60" stroke-width="3"/>
       <line x1="30%" y1="60%" x2="90%" y2="60%" stroke="${c}40" stroke-width="2"/>
       <line x1="10%" y1="80%" x2="70%" y2="80%" stroke="${c}80" stroke-width="4"/>`
    ];
    return h[y % h.length];
  })(e);
  return o ? /* @__PURE__ */ f(
    u,
    {
      className: n,
      sx: {
        width: l.width,
        height: l.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${c}20`,
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${c}30`,
            borderColor: `${c}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ a(
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
        /* @__PURE__ */ a(
          u,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${c}10 0%, transparent 100%)`,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  ) : /* @__PURE__ */ f(
    u,
    {
      className: n,
      sx: {
        width: l.width,
        height: l.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(135deg, ${c}10 0%, ${c}05 100%)`,
        border: `1px solid ${c}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${c}30`,
            borderColor: `${c}40`
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
              /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ f("linearGradient", { id: `gradient-${e}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ a("stop", { offset: "0%", stopColor: `${c}20` }),
                /* @__PURE__ */ a("stop", { offset: "100%", stopColor: `${c}10` })
              ] }) }),
              /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: `url(#gradient-${e})` }),
              /* @__PURE__ */ a("g", { dangerouslySetInnerHTML: { __html: p } }),
              /* @__PURE__ */ a(
                "rect",
                {
                  width: "100%",
                  height: "100%",
                  fill: "none",
                  stroke: `${c}30`,
                  strokeWidth: "0.5",
                  strokeDasharray: "2,2"
                }
              )
            ]
          }
        ),
        r === "large" && /* @__PURE__ */ a(
          u,
          {
            sx: {
              position: "absolute",
              bottom: 8,
              left: 8,
              right: 8,
              textAlign: "center",
              zIndex: 2
            },
            children: /* @__PURE__ */ a(
              u,
              {
                sx: {
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: c,
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
}, Mp = ({
  children: e,
  numberVariant: t = "primary",
  sx: r,
  ...n
}) => /* @__PURE__ */ a(
  u,
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
), Ad = ga`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`, mn = ({
  status: e,
  size: t = 8,
  pulse: r,
  label: n,
  className: o
}) => {
  const i = b.telemetry[e], l = /* @__PURE__ */ a(
    u,
    {
      className: o,
      sx: {
        width: t,
        height: t,
        borderRadius: "50%",
        backgroundColor: i,
        color: i,
        // currentColor para el pulso
        flexShrink: 0,
        display: "inline-block",
        animation: r ?? (e === "online" || e === "starting") ? `${Ad} 2s ease-out infinite` : "none"
      }
    }
  );
  return n ? /* @__PURE__ */ f(
    u,
    {
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75
      },
      children: [
        l,
        /* @__PURE__ */ a(
          u,
          {
            component: "span",
            sx: {
              fontFamily: '"Necto Mono", monospace',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: i
            },
            children: n
          }
        )
      ]
    }
  ) : l;
}, $d = {
  "file-scan": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ a("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ a("circle", { cx: "11", cy: "15", r: "2" }),
    /* @__PURE__ */ a("path", { d: "m13.5 17.5 1.5 1.5" })
  ] }),
  package: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "m7.5 4.27 9 5.15" }),
    /* @__PURE__ */ a("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
    /* @__PURE__ */ a("path", { d: "m3.3 7 8.7 5 8.7-5" }),
    /* @__PURE__ */ a("path", { d: "M12 22V12" })
  ] }),
  grid: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ a("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ a("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ a("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  tag: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
    /* @__PURE__ */ a("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
  ] }),
  "clipboard-list": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
    /* @__PURE__ */ a("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ a("path", { d: "M12 11h4" }),
    /* @__PURE__ */ a("path", { d: "M12 16h4" }),
    /* @__PURE__ */ a("path", { d: "M8 11h.01" }),
    /* @__PURE__ */ a("path", { d: "M8 16h.01" })
  ] }),
  landmark: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("line", { x1: "3", y1: "22", x2: "21", y2: "22" }),
    /* @__PURE__ */ a("line", { x1: "6", y1: "18", x2: "6", y2: "11" }),
    /* @__PURE__ */ a("line", { x1: "10", y1: "18", x2: "10", y2: "11" }),
    /* @__PURE__ */ a("line", { x1: "14", y1: "18", x2: "14", y2: "11" }),
    /* @__PURE__ */ a("line", { x1: "18", y1: "18", x2: "18", y2: "11" }),
    /* @__PURE__ */ a("polygon", { points: "12 2 20 7 4 7" })
  ] }),
  "refresh-cw": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ a("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ a("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ a("path", { d: "M8 16H3v5" })
  ] }),
  diamond: /* @__PURE__ */ a("path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }),
  "trending-up": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    /* @__PURE__ */ a("polyline", { points: "16 7 22 7 22 13" })
  ] }),
  users: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ a("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ a("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ a("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  "rotate-cw": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M21 2v6h-6" }),
    /* @__PURE__ */ a("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" })
  ] }),
  power: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M12 2v6" }),
    /* @__PURE__ */ a("path", { d: "M18.4 5.6a9 9 0 1 1-12.77.04" })
  ] }),
  terminal: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  "external-link": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ a("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ a("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  "file-plus": /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ a("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
    /* @__PURE__ */ a("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
  ] }),
  calendar: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ a("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ a("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ a("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  logout: /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ a("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ a("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] })
}, Rd = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}, mr = ({
  id: e,
  size: t = "sm",
  color: r = "currentColor",
  strokeWidth: n = 1.6
}) => {
  const o = typeof t == "number" ? t : Rd[t];
  return /* @__PURE__ */ a(
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
      children: $d[e] ?? null
    }
  );
}, zp = ({
  logo: e,
  title: t,
  subtitle: r,
  align: n = "left",
  variant: o = "dark",
  titleColor: i,
  subtitleColor: s
}) => /* @__PURE__ */ f(u, { sx: { textAlign: n, display: "flex", flexDirection: "column", alignItems: n === "center" ? "center" : "flex-start", gap: 0 }, children: [
  e && /* @__PURE__ */ a(u, { sx: { mb: 1.75, display: "inline-flex" }, children: e }),
  /* @__PURE__ */ a(
    u,
    {
      sx: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "0.22em",
        color: i ?? (o === "dark" ? "#F1F5F9" : "#0F172A"),
        textTransform: "uppercase",
        lineHeight: 1
      },
      children: t
    }
  ),
  r && /* @__PURE__ */ a(
    u,
    {
      sx: {
        fontFamily: '"Necto Mono", monospace',
        fontSize: 9,
        color: s ?? (o === "dark" ? "#64748B" : "#94A3B8"),
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        mt: 0.5
      },
      children: r
    }
  )
] }), Od = nc;
function _d(e) {
  return Rn("MuiSvgIcon", e);
}
Nl("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Nd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Et(t)}`, `fontSize${Et(r)}`]
  };
  return xc(o, _d, n);
}, Md = ed("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Et(r.color)}`], t[`fontSize${Et(r.fontSize)}`]];
  }
})(Od(({
  theme: e
}) => {
  var t, r, n, o, i, s, l, c, d, p, g, y, h, v;
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
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((c = (l = e.typography) == null ? void 0 : l.pxToRem) == null ? void 0 : c.call(l, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((p = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : p.call(d, 35)) || "2.1875rem"
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
          color: (v = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : v.disabled
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
})), gr = /* @__PURE__ */ R.forwardRef(function(t, r) {
  const n = Vi({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: g,
    viewBox: y = "0 0 24 24",
    ...h
  } = n, v = /* @__PURE__ */ R.isValidElement(o) && o.type === "svg", x = {
    ...n,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: y,
    hasSvgAsChild: v
  }, C = {};
  p || (C.viewBox = y);
  const w = Nd(x);
  return /* @__PURE__ */ f(Md, {
    as: l,
    className: vi(w.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: r,
    ...C,
    ...h,
    ...v && o.props,
    ownerState: x,
    children: [v ? o.props.children : o, g ? /* @__PURE__ */ a("title", {
      children: g
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (gr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: $.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: $.object,
  /**
   * @ignore
   */
  className: $.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: $.oneOfType([$.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), $.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: $.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: $.oneOfType([$.oneOf(["inherit", "large", "medium", "small"]), $.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: $.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: $.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: $.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: $.oneOfType([$.arrayOf($.oneOfType([$.func, $.object, $.bool])), $.func, $.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: $.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: $.string
});
gr.muiName = "SvgIcon";
function _e(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ a(gr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = gr.muiName, /* @__PURE__ */ R.memo(/* @__PURE__ */ R.forwardRef(r));
}
const Xi = _e(/* @__PURE__ */ a("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), zd = _e(/* @__PURE__ */ a("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), Lt = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
ue.log("VITE_MAKE_WEBHOOK_URL:", void 0);
ue.log("MAKE_API_CONFIG.webhookUrl:", Lt.webhookUrl);
const Pd = async (e, t) => {
  const r = t || `session_${Date.now()}`;
  ue.log("Enviando request a Make.com:", {
    message: e,
    sessionId: r,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: Lt.webhookUrl
  });
  try {
    const n = await fetch(Lt.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...Lt.apiToken && {
          Authorization: `Bearer ${Lt.apiToken}`
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
      const i = await n.text();
      ue.log("Respuesta como texto:", i);
      try {
        o = JSON.parse(i), ue.log("Datos parseados:", o);
      } catch (s) {
        ue.error("Error parsing JSON, intentando limpiar:", s);
        const l = i.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        try {
          o = JSON.parse(l), ue.log("Respuesta limpiada y parseada:", o);
        } catch (c) {
          ue.error("Error final parseando JSON:", c), o = { message: i };
        }
      }
    } catch (i) {
      throw ue.error("Error obteniendo texto de respuesta:", i), new Error("Error al procesar la respuesta del servidor");
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
}, Dd = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, Ho = (e) => {
  const t = e.toLowerCase();
  return t.includes("hola") || t.includes("buenos días") || t.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : t.includes("servicios") || t.includes("qué hacen") || t.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : t.includes("precio") || t.includes("costo") || t.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : t.includes("contacto") || t.includes("teléfono") || t.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : t.includes("diagnóstico") || t.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, Pp = () => {
  const e = we(), t = sr(e.breakpoints.down("sm")), [r, n] = V(!1), [o] = V(() => Dd()), [i, s] = V([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    }
  ]), [l, c] = V(""), [d, p] = V(!1), [g, y] = V(""), h = Gt(null), v = lt(() => n(!0), []), x = lt(() => n(!1), []), C = lt(() => {
    var E;
    (E = h.current) == null || E.scrollIntoView({ behavior: "smooth" });
  }, []);
  me(() => {
    C();
  }, [i, C]);
  const w = lt(async () => {
    var k;
    const E = l.trim();
    if (!E || d || E === g) return;
    if (E.length > 500) {
      const O = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((U) => [...U, O]);
      return;
    }
    const T = {
      id: Date.now().toString(),
      text: l.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    };
    s((O) => [...O, T]), y(E), c(""), p(!0);
    try {
      const O = await Pd(E, o);
      let U;
      O.success && ((k = O.data) != null && k.message) ? U = O.data.message : O.success && O.data && typeof O.data == "string" ? U = O.data : (O.error, U = Ho(E));
      const D = {
        id: (Date.now() + 1).toString(),
        text: U,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((F) => [...F, D]);
    } catch (O) {
      console.error("Error sending message:", O);
      const D = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((F) => [...F, D]);
    } finally {
      p(!1);
    }
  }, [l, d, o, g]), I = lt((E) => {
    E.key === "Enter" && !E.shiftKey && !d && (E.preventDefault(), w());
  }, [w, d]);
  return /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a(
      xa,
      {
        color: "primary",
        "aria-label": "chat",
        onClick: v,
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
        children: /* @__PURE__ */ a(
          u,
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
      ya,
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
            ba,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: `1px solid ${Ce(e.palette.divider, 0.1)}`,
                pb: 2,
                mb: 0
              },
              children: [
                /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                  /* @__PURE__ */ a(
                    u,
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
                  /* @__PURE__ */ f(u, { children: [
                    /* @__PURE__ */ a(P, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ a(P, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ a(Fe, { onClick: x, size: "small", children: /* @__PURE__ */ a(Xi, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(
            va,
            {
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [
                /* @__PURE__ */ f(
                  u,
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
                      i.map((E) => /* @__PURE__ */ a(
                        u,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: E.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ f(
                            Bt,
                            {
                              sx: {
                                p: 2,
                                maxWidth: "80%",
                                backgroundColor: E.isUser ? e.palette.primary.main : Ce(e.palette.background.paper, 0.8),
                                color: E.isUser ? e.palette.primary.contrastText : e.palette.text.primary,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              },
                              children: [
                                /* @__PURE__ */ a(P, { variant: "body2", children: E.text }),
                                /* @__PURE__ */ a(
                                  P,
                                  {
                                    variant: "caption",
                                    sx: {
                                      opacity: 0.7,
                                      display: "block",
                                      mt: 0.5
                                    },
                                    children: E.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        },
                        E.id
                      )),
                      d && /* @__PURE__ */ a(u, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ a(
                        Bt,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: Ce(e.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ a(Sa, { size: 16 }),
                            /* @__PURE__ */ a(P, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ a("div", { ref: h })
                    ]
                  }
                ),
                /* @__PURE__ */ f(
                  u,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${Ce(e.palette.divider, 0.1)}`
                    },
                    children: [
                      l.length > 400 && /* @__PURE__ */ f(
                        P,
                        {
                          variant: "caption",
                          color: l.length > 500 ? "error" : "warning.main",
                          sx: { mb: 1, display: "block", textAlign: "right" },
                          children: [
                            l.length,
                            "/500"
                          ]
                        }
                      ),
                      /* @__PURE__ */ f(
                        u,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ a(
                              oi,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: d ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: l,
                                onChange: (E) => c(E.target.value),
                                onKeyPress: I,
                                disabled: d,
                                variant: "outlined",
                                size: "small",
                                sx: {
                                  "& .MuiOutlinedInput-root": {
                                    borderRadius: 2
                                  }
                                }
                              }
                            ),
                            /* @__PURE__ */ a(
                              Fe,
                              {
                                onClick: w,
                                disabled: !l.trim() || d,
                                color: "primary",
                                sx: {
                                  backgroundColor: e.palette.primary.main,
                                  color: e.palette.primary.contrastText,
                                  "&:hover": {
                                    backgroundColor: "rgba(255, 69, 0, 0.9)"
                                  },
                                  "&:disabled": {
                                    backgroundColor: Ce(e.palette.action.disabled, 0.12),
                                    color: e.palette.action.disabled
                                  }
                                },
                                children: /* @__PURE__ */ a(zd, {})
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
};
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gn() {
  return gn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gn.apply(this, arguments);
}
var Go;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Go || (Go = {}));
function ve(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Rt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function xn(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: n = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n), t;
}
function Ji(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e);
  }
  return t;
}
var Yo;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Yo || (Yo = {}));
function qo(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, n] = Fd(e.path, e.caseSensitive, e.end), o = t.match(r);
  if (!o) return null;
  let i = o[0], s = i.replace(/(.)\/+$/, "$1"), l = o.slice(1);
  return {
    params: n.reduce((d, p, g) => {
      let {
        paramName: y,
        isOptional: h
      } = p;
      if (y === "*") {
        let x = l[g] || "";
        s = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      const v = l[g];
      return h && !v ? d[y] = void 0 : d[y] = (v || "").replace(/%2F/g, "/"), d;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function Fd(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), Rt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (s, l, c) => (n.push({
    paramName: l,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (n.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n];
}
function It(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
const Ld = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Wd = (e) => Ld.test(e);
function Bd(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? Ji(e) : e, i;
  if (r)
    if (Wd(r))
      i = r;
    else {
      if (r.includes("//")) {
        let s = r;
        r = r.replace(/\/\/+/g, "/"), Rt(!1, "Pathnames cannot have embedded double slashes - normalizing " + (s + " -> " + r));
      }
      r.startsWith("/") ? i = Ko(r.substring(1), "/") : i = Ko(r, t);
    }
  else
    i = t;
  return {
    pathname: i,
    search: Vd(n),
    hash: Ud(o)
  };
}
function Ko(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function tn(e, t, r, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function jd(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function Qi(e, t) {
  let r = jd(e);
  return t ? r.map((n, o) => o === r.length - 1 ? n.pathname : n.pathnameBase) : r.map((n) => n.pathnameBase);
}
function Zi(e, t, r, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = Ji(e) : (o = gn({}, e), ve(!o.pathname || !o.pathname.includes("?"), tn("?", "pathname", "search", o)), ve(!o.pathname || !o.pathname.includes("#"), tn("#", "pathname", "hash", o)), ve(!o.search || !o.search.includes("#"), tn("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "", s = i ? "/" : o.pathname, l;
  if (s == null)
    l = r;
  else {
    let g = t.length - 1;
    if (!n && s.startsWith("..")) {
      let y = s.split("/");
      for (; y[0] === ".."; )
        y.shift(), g -= 1;
      o.pathname = y.join("/");
    }
    l = g >= 0 ? t[g] : "/";
  }
  let c = Bd(o, l), d = s && s !== "/" && s.endsWith("/"), p = (i || s === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (d || p) && (c.pathname += "/"), c;
}
const Wn = (e) => e.join("/").replace(/\/\/+/g, "/"), Vd = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Ud = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, ea = ["post", "put", "patch", "delete"];
new Set(ea);
const Hd = ["get", ...ea];
new Set(Hd);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function yn() {
  return yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, yn.apply(this, arguments);
}
const zr = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (zr.displayName = "DataRouter");
const ta = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (ta.displayName = "DataRouterState");
const Gd = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Gd.displayName = "Await");
const Ze = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Ze.displayName = "Navigation");
const Bn = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Bn.displayName = "Location");
const Ot = /* @__PURE__ */ R.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Ot.displayName = "Route");
const Yd = /* @__PURE__ */ R.createContext(null);
process.env.NODE_ENV !== "production" && (Yd.displayName = "RouteError");
function qd(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  jn() || (process.env.NODE_ENV !== "production" ? ve(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : ve(!1));
  let {
    basename: n,
    navigator: o
  } = R.useContext(Ze), {
    hash: i,
    pathname: s,
    search: l
  } = Xt(e, {
    relative: r
  }), c = s;
  return n !== "/" && (c = s === "/" ? n : Wn([n, s])), o.createHref({
    pathname: c,
    search: l,
    hash: i
  });
}
function jn() {
  return R.useContext(Bn) != null;
}
function _t() {
  return jn() || (process.env.NODE_ENV !== "production" ? ve(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : ve(!1)), R.useContext(Bn).location;
}
const ra = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function na(e) {
  R.useContext(Ze).static || R.useLayoutEffect(e);
}
function Pr() {
  let {
    isDataRoute: e
  } = R.useContext(Ot);
  return e ? Zd() : Kd();
}
function Kd() {
  jn() || (process.env.NODE_ENV !== "production" ? ve(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : ve(!1));
  let e = R.useContext(zr), {
    basename: t,
    future: r,
    navigator: n
  } = R.useContext(Ze), {
    matches: o
  } = R.useContext(Ot), {
    pathname: i
  } = _t(), s = JSON.stringify(Qi(o, r.v7_relativeSplatPath)), l = R.useRef(!1);
  return na(() => {
    l.current = !0;
  }), R.useCallback(function(d, p) {
    if (p === void 0 && (p = {}), process.env.NODE_ENV !== "production" && Rt(l.current, ra), !l.current) return;
    if (typeof d == "number") {
      n.go(d);
      return;
    }
    let g = Zi(d, JSON.parse(s), i, p.relative === "path");
    e == null && t !== "/" && (g.pathname = g.pathname === "/" ? t : Wn([t, g.pathname])), (p.replace ? n.replace : n.push)(g, p.state, p);
  }, [t, n, s, i, e]);
}
function Xt(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    future: n
  } = R.useContext(Ze), {
    matches: o
  } = R.useContext(Ot), {
    pathname: i
  } = _t(), s = JSON.stringify(Qi(o, n.v7_relativeSplatPath));
  return R.useMemo(() => Zi(e, JSON.parse(s), i, r === "path"), [e, s, i, r]);
}
var oa = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(oa || {}), Vn = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(Vn || {});
function ia(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function Xd(e) {
  let t = R.useContext(zr);
  return t || (process.env.NODE_ENV !== "production" ? ve(!1, ia(e)) : ve(!1)), t;
}
function Jd(e) {
  let t = R.useContext(Ot);
  return t || (process.env.NODE_ENV !== "production" ? ve(!1, ia(e)) : ve(!1)), t;
}
function aa(e) {
  let t = Jd(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? ve(!1, e + ' can only be used on routes that contain a unique "id"') : ve(!1)), r.route.id;
}
function Qd() {
  return aa(Vn.UseRouteId);
}
function Zd() {
  let {
    router: e
  } = Xd(oa.UseNavigateStable), t = aa(Vn.UseNavigateStable), r = R.useRef(!1);
  return na(() => {
    r.current = !0;
  }), R.useCallback(function(o, i) {
    i === void 0 && (i = {}), process.env.NODE_ENV !== "production" && Rt(r.current, ra), r.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, yn({
      fromRouteId: t
    }, i)));
  }, [e, t]);
}
new Promise(() => {
});
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function At() {
  return At = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, At.apply(this, arguments);
}
function Un(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
const ir = "get", ar = "application/x-www-form-urlencoded";
function Dr(e) {
  return e != null && typeof e.tagName == "string";
}
function eu(e) {
  return Dr(e) && e.tagName.toLowerCase() === "button";
}
function tu(e) {
  return Dr(e) && e.tagName.toLowerCase() === "form";
}
function ru(e) {
  return Dr(e) && e.tagName.toLowerCase() === "input";
}
function nu(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ou(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !nu(e);
}
let tr = null;
function iu() {
  if (tr === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), tr = !1;
    } catch {
      tr = !0;
    }
  return tr;
}
const au = /* @__PURE__ */ new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function rn(e) {
  return e != null && !au.has(e) ? (process.env.NODE_ENV !== "production" && Rt(!1, '"' + e + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + ar + '"')), null) : e;
}
function su(e, t) {
  let r, n, o, i, s;
  if (tu(e)) {
    let l = e.getAttribute("action");
    n = l ? It(l, t) : null, r = e.getAttribute("method") || ir, o = rn(e.getAttribute("enctype")) || ar, i = new FormData(e);
  } else if (eu(e) || ru(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (n = c ? It(c, t) : null, r = e.getAttribute("formmethod") || l.getAttribute("method") || ir, o = rn(e.getAttribute("formenctype")) || rn(l.getAttribute("enctype")) || ar, i = new FormData(l, e), !iu()) {
      let {
        name: d,
        type: p,
        value: g
      } = e;
      if (p === "image") {
        let y = d ? d + "." : "";
        i.append(y + "x", "0"), i.append(y + "y", "0");
      } else d && i.append(d, g);
    }
  } else {
    if (Dr(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    r = ir, n = null, o = ar, s = e;
  }
  return i && o === "text/plain" && (s = i, i = void 0), {
    action: n,
    method: r.toLowerCase(),
    encType: o,
    formData: i,
    body: s
  };
}
const lu = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], cu = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], du = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], uu = "6";
try {
  window.__reactRouterVersion = uu;
} catch {
}
const sa = /* @__PURE__ */ R.createContext({
  isTransitioning: !1
});
process.env.NODE_ENV !== "production" && (sa.displayName = "ViewTransition");
const pu = /* @__PURE__ */ R.createContext(/* @__PURE__ */ new Map());
process.env.NODE_ENV !== "production" && (pu.displayName = "Fetchers");
process.env.NODE_ENV;
const fu = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", hu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ut = /* @__PURE__ */ R.forwardRef(function(t, r) {
  let {
    onClick: n,
    relative: o,
    reloadDocument: i,
    replace: s,
    state: l,
    target: c,
    to: d,
    preventScrollReset: p,
    viewTransition: g
  } = t, y = Un(t, lu), {
    basename: h
  } = R.useContext(Ze), v, x = !1;
  if (typeof d == "string" && hu.test(d) && (v = d, fu))
    try {
      let E = new URL(window.location.href), T = d.startsWith("//") ? new URL(E.protocol + d) : new URL(d), k = It(T.pathname, h);
      T.origin === E.origin && k != null ? d = k + T.search + T.hash : x = !0;
    } catch {
      process.env.NODE_ENV !== "production" && Rt(!1, '<Link to="' + d + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    }
  let C = qd(d, {
    relative: o
  }), w = yu(d, {
    replace: s,
    state: l,
    target: c,
    preventScrollReset: p,
    relative: o,
    viewTransition: g
  });
  function I(E) {
    n && n(E), E.defaultPrevented || w(E);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ R.createElement("a", At({}, y, {
      href: v || C,
      onClick: x || i ? n : I,
      ref: r,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (ut.displayName = "Link");
const mu = /* @__PURE__ */ R.forwardRef(function(t, r) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: s = !1,
    style: l,
    to: c,
    viewTransition: d,
    children: p
  } = t, g = Un(t, cu), y = Xt(c, {
    relative: g.relative
  }), h = _t(), v = R.useContext(ta), {
    navigator: x,
    basename: C
  } = R.useContext(Ze), w = v != null && // Conditional usage is OK here because the usage of a data router is static
  // eslint-disable-next-line react-hooks/rules-of-hooks
  ku(y) && d === !0, I = x.encodeLocation ? x.encodeLocation(y).pathname : y.pathname, E = h.pathname, T = v && v.navigation && v.navigation.location ? v.navigation.location.pathname : null;
  o || (E = E.toLowerCase(), T = T ? T.toLowerCase() : null, I = I.toLowerCase()), T && C && (T = It(T, C) || T);
  const k = I !== "/" && I.endsWith("/") ? I.length - 1 : I.length;
  let O = E === I || !s && E.startsWith(I) && E.charAt(k) === "/", U = T != null && (T === I || !s && T.startsWith(I) && T.charAt(I.length) === "/"), D = {
    isActive: O,
    isPending: U,
    isTransitioning: w
  }, F = O ? n : void 0, H;
  typeof i == "function" ? H = i(D) : H = [i, O ? "active" : null, U ? "pending" : null, w ? "transitioning" : null].filter(Boolean).join(" ");
  let L = typeof l == "function" ? l(D) : l;
  return /* @__PURE__ */ R.createElement(ut, At({}, g, {
    "aria-current": F,
    className: H,
    ref: r,
    style: L,
    to: c,
    viewTransition: d
  }), typeof p == "function" ? p(D) : p);
});
process.env.NODE_ENV !== "production" && (mu.displayName = "NavLink");
const gu = /* @__PURE__ */ R.forwardRef((e, t) => {
  let {
    fetcherKey: r,
    navigate: n,
    reloadDocument: o,
    replace: i,
    state: s,
    method: l = ir,
    action: c,
    onSubmit: d,
    relative: p,
    preventScrollReset: g,
    viewTransition: y
  } = e, h = Un(e, du), v = wu(), x = Cu(c, {
    relative: p
  }), C = l.toLowerCase() === "get" ? "get" : "post", w = (I) => {
    if (d && d(I), I.defaultPrevented) return;
    I.preventDefault();
    let E = I.nativeEvent.submitter, T = (E == null ? void 0 : E.getAttribute("formmethod")) || l;
    v(E || I.currentTarget, {
      fetcherKey: r,
      method: T,
      navigate: n,
      replace: i,
      state: s,
      relative: p,
      preventScrollReset: g,
      viewTransition: y
    });
  };
  return /* @__PURE__ */ R.createElement("form", At({
    ref: t,
    method: C,
    action: x,
    onSubmit: o ? d : w
  }, h));
});
process.env.NODE_ENV !== "production" && (gu.displayName = "Form");
process.env.NODE_ENV;
var xr;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState";
})(xr || (xr = {}));
var Xo;
(function(e) {
  e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Xo || (Xo = {}));
function xu(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function la(e) {
  let t = R.useContext(zr);
  return t || (process.env.NODE_ENV !== "production" ? ve(!1, xu(e)) : ve(!1)), t;
}
function yu(e, t) {
  let {
    target: r,
    replace: n,
    state: o,
    preventScrollReset: i,
    relative: s,
    viewTransition: l
  } = t === void 0 ? {} : t, c = Pr(), d = _t(), p = Xt(e, {
    relative: s
  });
  return R.useCallback((g) => {
    if (ou(g, r)) {
      g.preventDefault();
      let y = n !== void 0 ? n : xn(d) === xn(p);
      c(e, {
        replace: y,
        state: o,
        preventScrollReset: i,
        relative: s,
        viewTransition: l
      });
    }
  }, [d, c, p, n, o, r, e, i, s, l]);
}
function bu() {
  if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
}
let vu = 0, Su = () => "__" + String(++vu) + "__";
function wu() {
  let {
    router: e
  } = la(xr.UseSubmit), {
    basename: t
  } = R.useContext(Ze), r = Qd();
  return R.useCallback(function(n, o) {
    o === void 0 && (o = {}), bu();
    let {
      action: i,
      method: s,
      encType: l,
      formData: c,
      body: d
    } = su(n, t);
    if (o.navigate === !1) {
      let p = o.fetcherKey || Su();
      e.fetch(p, r, o.action || i, {
        preventScrollReset: o.preventScrollReset,
        formData: c,
        body: d,
        formMethod: o.method || s,
        formEncType: o.encType || l,
        flushSync: o.flushSync
      });
    } else
      e.navigate(o.action || i, {
        preventScrollReset: o.preventScrollReset,
        formData: c,
        body: d,
        formMethod: o.method || s,
        formEncType: o.encType || l,
        replace: o.replace,
        state: o.state,
        fromRouteId: r,
        flushSync: o.flushSync,
        viewTransition: o.viewTransition
      });
  }, [e, t, r]);
}
function Cu(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: n
  } = R.useContext(Ze), o = R.useContext(Ot);
  o || (process.env.NODE_ENV !== "production" ? ve(!1, "useFormAction must be used inside a RouteContext") : ve(!1));
  let [i] = o.matches.slice(-1), s = At({}, Xt(e || ".", {
    relative: r
  })), l = _t();
  if (e == null) {
    s.search = l.search;
    let c = new URLSearchParams(s.search), d = c.getAll("index");
    if (d.some((g) => g === "")) {
      c.delete("index"), d.filter((y) => y).forEach((y) => c.append("index", y));
      let g = c.toString();
      s.search = g ? "?" + g : "";
    }
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (s.pathname = s.pathname === "/" ? n : Wn([n, s.pathname])), xn(s);
}
function ku(e, t) {
  t === void 0 && (t = {});
  let r = R.useContext(sa);
  r == null && (process.env.NODE_ENV !== "production" ? ve(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?") : ve(!1));
  let {
    basename: n
  } = la(xr.useViewTransitionState), o = Xt(e, {
    relative: t.relative
  });
  if (!r.isTransitioning)
    return !1;
  let i = It(r.currentLocation.pathname, n) || r.currentLocation.pathname, s = It(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return qo(o.pathname, s) != null || qo(o.pathname, i) != null;
}
const Eu = _e(/* @__PURE__ */ a("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work"), Dp = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n = "Nuestros Servicios",
  className: o,
  sx: i
}) => {
  const s = Pr();
  return /* @__PURE__ */ a(
    Sn,
    {
      variant: e,
      size: t,
      onClick: () => {
        s("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: r ? /* @__PURE__ */ a(Eu, {}) : void 0,
      className: o,
      sx: i,
      children: n
    }
  );
}, Tu = Ie(bn, {
  shouldForwardProp: (e) => e !== "cardVariant" && e !== "forceMode"
})(({ theme: e, cardVariant: t, forceMode: r }) => {
  const n = r ? r === "light" : e.palette.mode === "light", o = {
    borderRadius: 0,
    // Brutalist zero radius
    transition: "all 0.2s steps(4, end)",
    position: "relative",
    overflow: "hidden",
    backgroundColor: n ? b.white : b.black,
    color: n ? b.black : b.white,
    border: `1px solid ${n ? b.black : b.white}`,
    boxShadow: "none"
  };
  switch (t) {
    case "elevated":
      return {
        ...o,
        border: `2px solid ${n ? b.black : b.white}`,
        "&:hover": {
          transform: "translate(-4px, -4px)",
          boxShadow: n ? `8px 8px 0px ${b.black}` : `8px 8px 0px ${b.white}`
        }
      };
    case "outlined":
      return {
        ...o,
        backgroundColor: "transparent",
        border: `1px solid ${n ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}`,
        "&:hover": {
          borderColor: n ? b.black : b.white,
          bgcolor: n ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"
        }
      };
    case "industrial":
      return {
        ...o,
        border: `4px solid ${n ? b.black : b.white}`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40px",
          borderBottom: `1px solid ${n ? b.black : b.white}`,
          zIndex: 0
        }
      };
    default:
      return o;
  }
}), Iu = Ie(u)(({ theme: e }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...re.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), Fr = ({
  children: e,
  variant: t = "default",
  elevation: r = 0,
  showContent: n = !0,
  label: o,
  sx: i,
  ...s
}) => {
  const l = ee();
  return /* @__PURE__ */ f(
    Tu,
    {
      cardVariant: t,
      elevation: r,
      forceMode: l.effectiveMode,
      sx: i,
      ...s,
      children: [
        o && /* @__PURE__ */ f(Iu, { children: [
          '"',
          o,
          '"'
        ] }),
        n && /* @__PURE__ */ a(Ht, { sx: {
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
}, Fp = ({
  title: e,
  subtitle: t = "",
  transactions: r,
  onShowMore: n = () => {
  },
  variant: o = "elevated"
}) => {
  const i = ee(), s = () => {
    switch (o) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.surface,
            border: "none"
          }
        };
      case "elevated":
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary,
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
          },
          surface: {
            background: i.contrast.background,
            border: "none"
          }
        };
      default:
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: "none"
          }
        };
    }
  }, l = (p) => ({
    Shopping: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ a(Ua, {})
    },
    Fitness: {
      bg: i.palette.success + "20",
      text: i.palette.success,
      icon: /* @__PURE__ */ a(Va, {})
    },
    Education: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ a(ja, {})
    },
    Investments: {
      bg: i.palette.success + "20",
      text: i.palette.success,
      icon: /* @__PURE__ */ a(Ba, {})
    },
    Health: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ a(Wa, {})
    }
  })[p] || {
    bg: i.helpers.background.secondary,
    text: i.helpers.text.secondary,
    icon: /* @__PURE__ */ a(La, {})
  }, c = (p) => {
    switch (p) {
      case "completed":
        return i.palette.success;
      case "pending":
        return i.palette.accent;
      case "failed":
        return "#DC2626";
      default:
        return i.palette.success;
    }
  }, d = s();
  return /* @__PURE__ */ a(
    Fr,
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
        ...d.card
      },
      children: /* @__PURE__ */ f(Ht, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(Zn, { sx: {
              width: 48,
              height: 48,
              background: d.surface.background,
              border: d.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ a(Fa, { sx: {
              color: i.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ f(u, { children: [
              /* @__PURE__ */ a(Re, { sx: {
                color: i.helpers.text.primary,
                mb: 0.5
              }, children: e }),
              t && /* @__PURE__ */ a(de, { sx: {
                color: i.helpers.text.secondary
              }, children: t })
            ] })
          ] }),
          /* @__PURE__ */ a(
            Fe,
            {
              size: "small",
              sx: {
                color: i.helpers.text.secondary,
                "&:hover": {
                  background: i.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ a(to, {})
            }
          )
        ] }),
        /* @__PURE__ */ a(u, { sx: { mb: 3 }, children: r.map((p) => {
          const g = l(p.category);
          return /* @__PURE__ */ f(
            u,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 2.5,
                mb: 2,
                borderRadius: 3,
                background: d.surface.background,
                border: d.surface.border,
                backdropFilter: "blur(10px)",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: i.helpers.state.hover,
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ a(Zn, { sx: {
                  width: 48,
                  height: 48,
                  background: g.bg,
                  color: g.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: p.icon || g.icon }),
                /* @__PURE__ */ f(u, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ f(u, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ a(Re, { sx: {
                      fontWeight: 400,
                      color: i.helpers.text.primary
                    }, children: p.merchant }),
                    /* @__PURE__ */ f(Yt, { sx: {
                      fontWeight: 400,
                      color: i.helpers.text.primary
                    }, children: [
                      "$",
                      p.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ f(u, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ a(
                      wt,
                      {
                        label: p.category,
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
                    /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ a(de, { sx: {
                        color: i.helpers.text.secondary
                      }, children: p.time }),
                      p.status && /* @__PURE__ */ a(u, { sx: {
                        width: 8,
                        height: 8,
                        backgroundColor: c(p.status),
                        borderRadius: "50%"
                      } })
                    ] })
                  ] })
                ] })
              ]
            },
            p.id
          );
        }) }),
        n && /* @__PURE__ */ f(be, { children: [
          /* @__PURE__ */ a(yr, { sx: {
            mb: 3,
            borderColor: i.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ f(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ a(
              Fe,
              {
                onClick: n,
                sx: {
                  width: 48,
                  height: 48,
                  background: i.palette.accent,
                  color: i.palette.white,
                  "&:hover": {
                    background: "#E54A00",
                    transform: "scale(1.05)"
                  },
                  transition: "all 0.2s ease"
                },
                children: /* @__PURE__ */ a(to, {})
              }
            ),
            /* @__PURE__ */ a(de, { sx: {
              mt: 1,
              color: i.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Explorar más" })
          ] })
        ] })
      ] })
    }
  );
}, Au = Ie(P)(({ stepSize: e, theme: t }) => ({
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
})), Lp = ({
  number: e,
  title: t,
  description: r,
  color: n = "primary.main",
  size: o = "medium",
  sx: i,
  ...s
}) => {
  const l = ee(), c = () => {
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
  }, { numberSize: d, titleSize: p, descriptionSize: g } = c();
  return /* @__PURE__ */ f(
    u,
    {
      sx: {
        display: "flex",
        mb: 2,
        alignItems: "flex-start",
        p: 2,
        borderRadius: 2,
        background: l.contrast.surface,
        border: `1px solid ${l.contrast.border}`,
        transition: "all 0.2s ease",
        "&:hover": {
          borderColor: l.contrast.text.secondary,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
        },
        ...i
      },
      ...s,
      children: [
        /* @__PURE__ */ a(
          u,
          {
            sx: {
              width: d,
              height: d,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              mr: 3,
              position: "relative",
              borderRadius: "50%",
              background: l.contrast.background,
              border: `2px solid ${l.contrast.text.secondary}`
            },
            children: /* @__PURE__ */ a(
              Au,
              {
                stepSize: o,
                sx: {
                  textAlign: "center",
                  fontWeight: 400,
                  color: l.contrast.text.secondary
                },
                children: e
              }
            )
          }
        ),
        /* @__PURE__ */ f(u, { sx: { flex: 1, pt: o === "large" ? 1.5 : o === "medium" ? 1 : 0.5 }, children: [
          /* @__PURE__ */ a(
            Ae,
            {
              sx: {
                fontWeight: 400,
                fontSize: p,
                mb: 1,
                color: l.contrast.text.primary,
                lineHeight: 1.3,
                letterSpacing: "-0.01em"
              },
              children: t
            }
          ),
          /* @__PURE__ */ a(
            Ae,
            {
              sx: {
                fontSize: g,
                lineHeight: 1.5,
                color: l.contrast.text.secondary,
                fontWeight: 400
              },
              children: r
            }
          )
        ] })
      ]
    }
  );
}, $u = Ie(u)(({ theme: e }) => {
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
}), Wp = ({
  title: e,
  subtitle: t = "",
  categories: r,
  totalAmount: n = 0,
  onAddCategory: o = () => {
  },
  variant: i = "industrial"
}) => {
  const s = ee(), l = s.effectiveMode === "light";
  return /* @__PURE__ */ f(
    Fr,
    {
      variant: i,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ a(u, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${l ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: l ? "#000" : "#fff",
            color: l ? "#fff" : "#000"
          }, children: /* @__PURE__ */ a(Ha, {}) }),
          /* @__PURE__ */ f(u, { children: [
            /* @__PURE__ */ a(P, { sx: { ...re.display.medium, fontSize: "1.5rem", mb: 0 }, children: e }),
            t && /* @__PURE__ */ f(P, { sx: { ...re.label.secondary }, children: [
              "// ",
              t
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ f(u, { sx: {
          p: 3,
          border: `4px solid ${l ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ a(P, { sx: { ...re.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ f(u, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ f(Yt, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              n == null ? void 0 : n.toLocaleString()
            ] }),
            /* @__PURE__ */ a(
              Fe,
              {
                onClick: o,
                sx: {
                  borderRadius: 0,
                  border: `2px solid ${l ? "#000" : "#fff"}`,
                  bgcolor: s.palette.accentColors.mint,
                  color: "#000",
                  "&:hover": {
                    bgcolor: s.palette.accentColors.orange
                  }
                },
                children: /* @__PURE__ */ a(Ga, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(P, { sx: { ...re.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: r.map((c, d) => /* @__PURE__ */ f($u, { children: [
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(P, { sx: { ...re.label.secondary, opacity: 0.5 }, children: String(d + 1).padStart(2, "0") }),
            /* @__PURE__ */ a(P, { sx: { fontWeight: 700, textTransform: "uppercase" }, children: c.name })
          ] }),
          /* @__PURE__ */ f(P, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            c.amount.toLocaleString()
          ] })
        ] }, d)) }),
        /* @__PURE__ */ f(u, { sx: {
          pt: 2,
          borderTop: `1px dashed ${l ? "#000" : "#fff"}`,
          opacity: 0.5,
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ a(P, { sx: { ...re.label.secondary }, children: "SYSTEM_VERSION_2.0.4" }),
          /* @__PURE__ */ a(P, { sx: { ...re.label.secondary }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ]
    }
  );
}, Ru = Ie(P, {
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
  textTransform: "uppercase",
  [t.breakpoints.down("sm")]: {
    fontSize: e === "compact" ? "2.5rem" : e === "large" ? "4rem" : "3.5rem"
  }
})), Ou = Ie(u)(({ theme: e }) => ({
  ...re.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), Bp = (e) => {
  const {
    title: t,
    value: r,
    subtitle: n,
    iconType: o = "dot",
    trend: i = "neutral",
    size: s = "normal",
    onClick: l,
    label: c = "METRIC_SYSTEM"
  } = e, d = ee();
  d.effectiveMode;
  const p = () => {
    switch (i) {
      case "up":
        return d.palette.accentColors.mint;
      case "down":
        return d.palette.accentColors.orange;
      default:
        return "inherit";
    }
  };
  return /* @__PURE__ */ f(
    bn,
    {
      onClick: l,
      sx: {
        cursor: l ? "pointer" : "default",
        minHeight: (g) => s === "compact" ? g.spacing(20) : s === "large" ? g.spacing(40) : g.spacing(25),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        // Functional left alignment
        p: 4,
        position: "relative",
        overflow: "hidden",
        bgcolor: d.helpers.background.primary,
        color: d.helpers.text.primary,
        borderRadius: 0,
        border: `2px solid ${d.helpers.text.primary}`,
        // Radical Industrial Border
        transition: "all 0.15s steps(4, end)",
        "&:hover": {
          transform: l ? "translate(-4px, -4px)" : "none",
          boxShadow: l ? `8px 8px 0px 0px ${d.helpers.text.primary}` : "none",
          "& .metric-bg": { opacity: 0.1 }
        }
      },
      children: [
        /* @__PURE__ */ f(Ou, { children: [
          '"',
          c,
          '"'
        ] }),
        /* @__PURE__ */ a(
          u,
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
        /* @__PURE__ */ a(u, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ a(Ru, { metricSize: s, children: typeof r == "number" ? r.toLocaleString() : r }) }),
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 1,
          width: "100%",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ a(
            P,
            {
              sx: {
                ...re.label.main,
                color: "inherit"
              },
              children: t
            }
          ),
          i !== "neutral" && /* @__PURE__ */ a(u, { sx: { color: p(), display: "flex" }, children: /* @__PURE__ */ a(
            fr,
            {
              type: "triangle",
              size: "small",
              color: "inherit",
              variant: "filled",
              sx: { transform: i === "down" ? "rotate(180deg)" : "none" }
            }
          ) })
        ] }),
        n && /* @__PURE__ */ a(
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
        /* @__PURE__ */ a(
          u,
          {
            sx: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 4,
              bgcolor: i !== "neutral" ? p() : "transparent",
              opacity: 0.8
            }
          }
        )
      ]
    }
  );
}, _u = _e(/* @__PURE__ */ a("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), ze = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, Nu = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
b.accent, b.gray[600], b.success, b.warning, b.error, b.info;
Wr.sm, Wr.md, Wr.lg;
const Mu = `https://${Nu.CONTACT.CALENDLY}`, Hn = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n,
  className: o,
  sx: i
}) => /* @__PURE__ */ a(
  Sn,
  {
    variant: e,
    size: t,
    onClick: () => {
      Yi.trackConsultationRequest("calendly", "diagnostic"), window.open(Mu, "_blank", "noopener,noreferrer");
    },
    startIcon: r ? /* @__PURE__ */ a(_u, {}) : void 0,
    className: o,
    sx: i,
    children: n || "Diagnóstico gratis"
  }
), jp = () => ({
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
}), Vp = () => ({
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
}), zu = (e) => ({
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
}), Up = () => ({
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
}), Hp = (e) => ({
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
}), Pu = (e) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: e.map((t, r) => ({
    "@type": "ListItem",
    position: r + 1,
    name: t.name,
    item: t.url
  }))
}), Gp = (e) => {
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
}, Yp = (e = "") => `https://www.ai4u.com.co${e}`, qp = (e, t = 160) => e.length <= t ? e : e.substring(0, t - 3) + "...", Kp = (e, t = []) => [...e, ...t].join(", "), Xp = ({
  service: e,
  showPrice: t = !0,
  compact: r = !1,
  onClick: n
}) => {
  const o = ee(), i = zu(e), l = ((c) => {
    const d = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return c.filter((p) => p.startsWith("eje:")).map((p) => d[p] || p.replace("eje:", ""));
  })(e.tags);
  return /* @__PURE__ */ f(be, { children: [
    /* @__PURE__ */ a(
      Ki,
      {
        structuredData: i,
        noIndex: !0
      }
    ),
    /* @__PURE__ */ a(u, { sx: {
      height: "100%",
      position: "relative",
      transition: "all 0.2s ease",
      "&:hover": {
        "& .service-card-content": {
          borderColor: e.color || o.contrast.text.primary
        }
      }
    }, children: /* @__PURE__ */ f(
      u,
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
          /* @__PURE__ */ a(u, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: l.map((c, d) => /* @__PURE__ */ a(
            wt,
            {
              label: c,
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
            d
          )) }),
          /* @__PURE__ */ f(u, { sx: {
            mb: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            /* @__PURE__ */ a(
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
            /* @__PURE__ */ a(Ae, { sx: {
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
          /* @__PURE__ */ a(u, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${o.contrast.divider}`
          }, children: t && /* @__PURE__ */ f(u, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }, children: [
            /* @__PURE__ */ a(Ae, { sx: {
              fontWeight: 400,
              color: o.contrast.text.secondary,
              fontSize: "0.85rem"
            }, children: "Precio:" }),
            /* @__PURE__ */ a(P, { sx: {
              fontWeight: 400,
              color: o.contrast.text.primary,
              fontSize: "1.1rem"
            }, children: e.price })
          ] }) })
        ]
      }
    ) })
  ] });
}, Jp = ({
  items: e,
  showHome: t = !0
}) => {
  const r = Pr(), n = t ? [{ name: "Inicio", path: "/" }, ...e] : e, o = Pu(
    n.map((s) => ({
      name: s.name,
      url: `https://ai4u.com.co${s.path}`
    }))
  ), i = (s) => {
    r(s);
  };
  return /* @__PURE__ */ f(u, { children: [
    /* @__PURE__ */ a(Ki, { structuredData: o }),
    /* @__PURE__ */ a(
      u,
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
        children: n.map((s, l) => [
          l > 0 && /* @__PURE__ */ a(
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
            `separator-${l}`
          ),
          s.current ? /* @__PURE__ */ a(
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
          ) : /* @__PURE__ */ a(
            ni,
            {
              component: "button",
              onClick: () => i(s.path),
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
class Qp extends Ma {
  constructor(r) {
    super(r);
    Ue(this, "handleRetry", () => {
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
    this.setState({ errorInfo: n }), bd.captureError({
      message: r.message,
      stack: r.stack,
      componentStack: n.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(r, n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ a(qe, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ f(
      u,
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
            wa,
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
                /* @__PURE__ */ a(Ca, { children: /* @__PURE__ */ a(si, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ a(Ae, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ f(u, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ a(
              Je,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ a(Ya, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ a(
              Je,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ a(
              Je,
              {
                variant: "text",
                onClick: () => window.location.href = "/",
                sx: { minWidth: 120 },
                children: "Ir al Inicio"
              }
            )
          ] }),
          /* @__PURE__ */ a(Ae, { sx: { color: "text.secondary", fontSize: "0.875rem" }, children: "Si el problema persiste, por favor contacta nuestro soporte técnico." })
        ]
      }
    ) }) : this.props.children;
  }
}
const Zp = (e) => {
  const {
    pages: t,
    title: r,
    variant: n = "vertical",
    className: o
  } = e, i = ee(), s = "También podrías estar interesado en:", l = t.slice(0, 3);
  if (l.length === 0) return null;
  const c = () => n === "horizontal" ? /* @__PURE__ */ a(
    he,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: l.map((d, p) => /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ f(u, { children: [
          /* @__PURE__ */ a(
            Wt,
            {
              href: d.href,
              variant: "subtle",
              ariaLabel: d.context || d.label,
              children: /* @__PURE__ */ a(de, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: d.label })
            }
          ),
          d.context && /* @__PURE__ */ a(
            de,
            {
              sx: {
                color: i.contrast.text.secondary,
                fontSize: "0.75rem",
                mt: 0.5,
                display: "block"
              },
              children: d.context
            }
          )
        ] }),
        p < l.length - 1 && /* @__PURE__ */ a(Id, { variant: "separator", size: "small" })
      ] }, d.href))
    }
  ) : /* @__PURE__ */ a(he, { spacing: 3, children: l.map((d) => /* @__PURE__ */ f(u, { children: [
    /* @__PURE__ */ a(
      Wt,
      {
        href: d.href,
        variant: "subtle",
        ariaLabel: d.context || d.label,
        children: /* @__PURE__ */ a(de, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: d.label })
      }
    ),
    d.context && /* @__PURE__ */ a(
      de,
      {
        sx: {
          color: i.contrast.text.secondary,
          fontSize: "0.75rem",
          mt: 0.5,
          display: "block"
        },
        children: d.context
      }
    )
  ] }, d.href)) });
  return /* @__PURE__ */ f(
    u,
    {
      className: o,
      sx: {
        py: 4,
        borderTop: `1px solid ${i.contrast.divider}`,
        borderBottom: `1px solid ${i.contrast.divider}`,
        backgroundColor: i.contrast.surface
      },
      children: [
        /* @__PURE__ */ a(
          de,
          {
            sx: {
              color: i.contrast.text.secondary,
              fontWeight: 400,
              mb: 3,
              fontSize: "0.8rem",
              textTransform: "none",
              letterSpacing: "0.5px"
            },
            children: r || s
          }
        ),
        c()
      ]
    }
  );
}, ef = (e) => {
  const {
    serviceName: t,
    serviceSlug: r,
    description: n,
    caseStudy: o,
    variant: i = "minimal",
    className: s
  } = e, l = ee();
  return i === "minimal" ? /* @__PURE__ */ f(u, { className: s, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ a(
      Wt,
      {
        href: `/servicios#${r}`,
        variant: "inline",
        ariaLabel: `Conoce más sobre ${t}`,
        children: /* @__PURE__ */ a(de, { sx: { fontWeight: 400 }, children: t })
      }
    ),
    /* @__PURE__ */ a(
      fr,
      {
        type: "circle",
        size: "small",
        color: l.contrast.text.disabled,
        variant: "minimal"
      }
    )
  ] }) : /* @__PURE__ */ a(
    u,
    {
      className: s,
      sx: {
        p: 3,
        borderRadius: 2,
        backgroundColor: l.contrast.surface,
        border: `1px solid ${l.contrast.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: l.palette.accent,
          backgroundColor: l.palette.white
        }
      },
      children: /* @__PURE__ */ f(he, { spacing: 2, children: [
        /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ a(
            fr,
            {
              type: "square",
              size: "small",
              color: l.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ a(
            Wt,
            {
              href: `/servicios#${r}`,
              variant: "accent",
              ariaLabel: `Conoce el servicio ${t}`,
              children: /* @__PURE__ */ a(de, { sx: { fontWeight: 400, fontSize: "0.9rem" }, children: t })
            }
          )
        ] }),
        n && /* @__PURE__ */ a(
          de,
          {
            sx: {
              color: l.contrast.text.secondary,
              fontSize: "0.8rem",
              lineHeight: 1.5
            },
            children: n
          }
        ),
        o && /* @__PURE__ */ f(u, { sx: { pt: 1, borderTop: `1px solid ${l.contrast.divider}` }, children: [
          /* @__PURE__ */ a(
            de,
            {
              sx: {
                color: l.contrast.text.secondary,
                fontSize: "0.75rem",
                mb: 1
              },
              children: "Caso real:"
            }
          ),
          /* @__PURE__ */ a(
            Wt,
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
}, tf = ({
  selectedValue: e,
  onValueChange: t,
  options: r
}) => {
  const n = ee();
  return /* @__PURE__ */ f(u, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ a(u, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: n.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ a(he, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: r.map((o, i) => /* @__PURE__ */ a(
      wt,
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
      i
    )) })
  ] });
}, rf = ({
  totalCount: e,
  filteredCount: t,
  activeFilters: r
}) => {
  const n = ee(), o = r.length > 0, i = t !== e;
  return /* @__PURE__ */ a(u, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ f(he, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ a(
      fr,
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
      i ? `${t} de ${e}` : `${e}`,
      " servicios",
      o && /* @__PURE__ */ f("span", { style: { color: n.contrast.text.primary }, children: [
        " • ",
        r.join(", ")
      ] })
    ] })
  ] }) });
}, nf = ({
  title: e,
  subtitle: t,
  children: r,
  defaultExpanded: n = !1,
  variant: o = "minimal",
  showIcon: i = !0,
  sx: s = {}
}) => {
  const [l, c] = V(n), d = ee(), p = d.effectiveMode === "dark", g = () => {
    c(!l);
  }, h = (() => {
    switch (o) {
      case "card":
        return {
          container: {
            background: p ? d.palette.black : d.palette.white,
            border: `3px solid ${p ? d.palette.white : d.palette.black}`,
            color: p ? d.palette.white : d.palette.black,
            borderRadius: 0,
            p: 4,
            transition: "all 0.1s ease",
            "&:hover": {
              transform: "translate(-4px, -4px)",
              boxShadow: p ? "6px 6px 0px #FFFFFF" : "6px 6px 0px #171717"
            }
          }
        };
      case "bordered":
        return {
          container: {
            borderBottom: `3px solid ${p ? d.palette.white : d.palette.black}`,
            color: p ? d.palette.white : d.palette.black,
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
  return /* @__PURE__ */ f(u, { sx: { ...h.container, ...s }, children: [
    /* @__PURE__ */ f(
      u,
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
          /* @__PURE__ */ f(u, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ a(Re, { sx: {
              color: "inherit",
              fontWeight: 400,
              fontSize: "1.2rem",
              textTransform: "none",
              letterSpacing: "0em"
            }, children: e }),
            t && /* @__PURE__ */ a(Ae, { sx: {
              color: "inherit",
              opacity: 0.8,
              fontSize: "1rem",
              mt: 1
            }, children: t })
          ] }),
          i && /* @__PURE__ */ a(
            Fe,
            {
              size: "medium",
              sx: {
                color: "inherit",
                transform: l ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease",
                opacity: 0.5,
                "&:hover": {
                  opacity: 1,
                  background: "transparent"
                }
              },
              children: /* @__PURE__ */ a(qa, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a(ka, { in: l, timeout: 100, children: /* @__PURE__ */ a(u, { sx: {
      pt: 3,
      borderTop: l ? `1px solid ${p ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: r }) })
  ] });
}, of = ({
  summary: e,
  details: t,
  showDetails: r = !1,
  onToggle: n,
  variant: o = "inline",
  maxHeight: i = 200
}) => {
  const [s, l] = V(r), c = ee(), d = () => {
    const y = !s;
    l(y), n == null || n(y);
  }, g = (() => {
    switch (o) {
      case "separated":
        return {
          container: {
            borderTop: `1px solid ${c.contrast.divider}`,
            pt: 2,
            mt: 2
          }
        };
      case "card":
        return {
          container: {
            background: c.contrast.surface,
            border: `1px solid ${c.contrast.divider}`,
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
  return /* @__PURE__ */ f(u, { children: [
    /* @__PURE__ */ a(
      u,
      {
        sx: {
          mb: s ? 2 : 0,
          cursor: "pointer",
          "&:hover": {
            opacity: 0.8,
            transition: "opacity 0.2s ease"
          }
        },
        onClick: d,
        children: e
      }
    ),
    s && /* @__PURE__ */ a(u, { sx: g.container, children: /* @__PURE__ */ a(
      u,
      {
        sx: {
          maxHeight: i,
          overflow: "auto",
          transition: "all 0.3s ease",
          "&::-webkit-scrollbar": {
            width: "6px"
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            background: c.contrast.divider,
            borderRadius: "3px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: c.contrast.text.secondary
          }
        },
        children: t
      }
    ) })
  ] });
}, Du = {
  online: "Disponible",
  offline: "No disponible",
  starting: "Iniciando…",
  checking: "Verificando…",
  idle: "Inactivo"
};
function Pt(e, t) {
  const r = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16);
  return `rgba(${r},${n},${o},${t})`;
}
const af = ({
  name: e,
  description: t,
  icon: r,
  accentColor: n,
  status: o,
  openUrl: i,
  isCli: s = !1,
  ctaLabel: l = "Abrir"
}) => {
  const c = ee(), d = o === "online", p = o === "checking", g = c.contrast.surface, y = c.contrast.text.primary, h = c.contrast.text.secondary, v = c.contrast.text.disabled, x = c.contrast.border;
  return /* @__PURE__ */ f(
    u,
    {
      sx: {
        backgroundColor: g,
        border: `1px solid ${Pt(n, 0.2)}`,
        borderRadius: 0,
        // Brutalist DS
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s steps(4, end)",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px ${Pt(n, 0.6)}`,
          borderColor: Pt(n, 0.5)
        }
      },
      children: [
        /* @__PURE__ */ a(u, { sx: { height: 3, backgroundColor: n, flexShrink: 0 } }),
        /* @__PURE__ */ f(u, { sx: { flex: 1, display: "flex", flexDirection: "column", p: 2.5, gap: 1.5 }, children: [
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ a(
              u,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Pt(n, 0.1),
                  border: `1px solid ${Pt(n, 0.2)}`
                },
                children: /* @__PURE__ */ a(mr, { id: r, size: "md", color: n, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ f(u, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ a(
                u,
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
              /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }, children: [
                /* @__PURE__ */ a(mn, { status: o, size: 6 }),
                /* @__PURE__ */ a(
                  u,
                  {
                    component: "span",
                    sx: {
                      fontSize: 11,
                      color: b.telemetry[o]
                    },
                    children: Du[o]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ a(
            u,
            {
              component: "p",
              sx: {
                fontSize: 13,
                lineHeight: 1.6,
                color: h,
                m: 0,
                flex: 1
              },
              children: t
            }
          ),
          /* @__PURE__ */ a(u, { sx: { mt: 0.5 }, children: s ? /* @__PURE__ */ a(
            u,
            {
              component: "div",
              sx: { fontSize: 12, color: v, fontStyle: "italic" },
              children: "Herramienta de línea de comandos — se ejecuta desde el servidor"
            }
          ) : i ? /* @__PURE__ */ f(
            u,
            {
              component: "a",
              href: d ? i : void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (C) => {
                d || C.preventDefault();
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
                backgroundColor: d ? n : "transparent",
                color: d ? b.white : v,
                border: d ? "none" : `1px solid ${x}`,
                cursor: d ? "pointer" : p ? "default" : "not-allowed",
                opacity: p ? 0.6 : 1
              },
              children: [
                /* @__PURE__ */ a(
                  mr,
                  {
                    id: "external-link",
                    size: 14,
                    color: d ? b.white : v,
                    strokeWidth: 2.2
                  }
                ),
                d ? l : p ? "Verificando…" : "No disponible"
              ]
            }
          ) : null })
        ] })
      ]
    }
  );
}, sf = ({
  branding: e,
  label: t = "Acceso restringido",
  placeholder: r = "Contraseña",
  inputType: n = "password",
  submitLabel: o = "Entrar",
  loadingLabel: i = "Verificando…",
  accentColor: s = b.tamaprint.primary,
  footer: l,
  onSubmit: c
}) => {
  const d = Gt(null), [p, g] = V(!1), [y, h] = V(""), [v, x] = V(!1);
  async function C(I) {
    var k;
    I.preventDefault();
    const E = ((k = d.current) == null ? void 0 : k.value) ?? "";
    if (!E) return;
    g(!0), h("");
    const T = await c(E);
    T.ok || (h(T.error ?? "Error de autenticación"), x(!0), setTimeout(() => x(!1), 500), d.current && (d.current.value = "", d.current.focus())), g(!1);
  }
  const w = b.telemetry.offline;
  return /* @__PURE__ */ f(u, { component: "form", onSubmit: C, sx: { width: "100%", maxWidth: 360 }, children: [
    e && /* @__PURE__ */ a(u, { sx: { textAlign: "center", mb: 4 }, children: e }),
    /* @__PURE__ */ f(
      u,
      {
        sx: {
          backgroundColor: ct.dashboardDark.surface,
          border: `1px solid ${ct.dashboardDark.border}`,
          borderRadius: 0,
          p: "28px 28px 24px",
          animation: v ? "auth-shake 0.4s ease" : void 0,
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
            u,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9.5,
                fontWeight: 700,
                color: ct.dashboardDark.text.secondary,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                mb: 2
              },
              children: [
                "◈ ",
                t
              ]
            }
          ),
          /* @__PURE__ */ a(
            u,
            {
              component: "input",
              ref: d,
              type: n,
              placeholder: r,
              autoFocus: !0,
              disabled: p,
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
          y && /* @__PURE__ */ a(
            u,
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
          /* @__PURE__ */ a(
            u,
            {
              component: "button",
              type: "submit",
              disabled: p,
              sx: {
                width: "100%",
                p: "12px 0",
                borderRadius: 0,
                border: "none",
                backgroundColor: p ? `${s}66` : s,
                color: b.white,
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: p ? "default" : "pointer",
                transition: "background-color 0.15s"
              },
              children: p ? i : o
            }
          )
        ]
      }
    ),
    l && /* @__PURE__ */ a(u, { sx: { textAlign: "center", mt: 2.5 }, children: l })
  ] });
}, lf = ({
  items: e,
  activeItem: t,
  onItemClick: r,
  variant: n = "horizontal",
  className: o = ""
}) => {
  const i = ee();
  we();
  const s = (d) => {
    r && r(d), d.onClick && d.onClick();
  }, l = (d) => {
    const p = t === d.id, g = {
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
          ...p ? {
            background: i.palette.black,
            color: i.palette.white,
            boxShadow: tt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            "&:hover": {
              color: i.contrast.text.primary,
              background: Ce(i.palette.white, 0.1)
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
          ...p ? {
            background: i.palette.black,
            color: i.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: i.palette.black,
            boxShadow: tt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: "transparent",
            "&:hover": {
              color: i.contrast.text.primary,
              background: i.helpers.state.hover,
              borderLeftColor: i.palette.black
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
          ...p ? {
            background: i.palette.black,
            color: i.palette.white,
            boxShadow: tt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            "&:hover": {
              color: i.contrast.text.primary,
              background: i.helpers.state.hover
            }
          }
        };
    }
  }, c = () => {
    switch (n) {
      case "tabs":
        return {
          display: "flex",
          gap: 1,
          p: 1,
          borderRadius: 3,
          background: Ce(i.palette.white, 0.05),
          backdropFilter: "blur(20px)",
          border: `1px solid ${i.contrast.border}`
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
  return n === "tabs" ? /* @__PURE__ */ a(u, { sx: c(), className: o, children: e.map((d) => /* @__PURE__ */ a(
    Je,
    {
      onClick: () => s(d),
      sx: l(d),
      children: d.label
    },
    d.id
  )) }) : /* @__PURE__ */ a(u, { sx: c(), className: o, children: e.map((d) => /* @__PURE__ */ a(
    Je,
    {
      onClick: () => s(d),
      sx: l(d),
      children: d.label
    },
    d.id
  )) });
}, Fu = _e(/* @__PURE__ */ a("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), Lu = _e(/* @__PURE__ */ a("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), Wu = _e(/* @__PURE__ */ a("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Bu = _e(/* @__PURE__ */ a("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), ju = _e(/* @__PURE__ */ a("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), Vu = _e(/* @__PURE__ */ a("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X"), Uu = _e(/* @__PURE__ */ a("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp"), Hu = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  we();
  const t = ee(), r = [
    { icon: /* @__PURE__ */ a(Fu, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ a(Lu, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ a(Wu, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ a(Vu, {}), url: "https://x.com/_ai4u_" }
  ], n = [
    { name: "inicio", path: ze.HOME },
    { name: "servicios", path: ze.SERVICES },
    { name: "portafolio", path: ze.PORTFOLIO },
    { name: "porqueAi4u", path: ze.WHY_AI4U },
    { name: "designSystem", path: ze.DESIGN_SYSTEM }
  ];
  return /* @__PURE__ */ a(
    u,
    {
      sx: {
        bgcolor: t.contrast.background,
        color: t.contrast.text.primary,
        borderTop: 1,
        borderColor: t.contrast.divider,
        py: 8
      },
      children: /* @__PURE__ */ f(qe, { maxWidth: "lg", children: [
        /* @__PURE__ */ f($e, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ f($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ a(
              u,
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
            /* @__PURE__ */ a(P, { variant: "body2", sx: { color: "inherit", opacity: 0.8 }, children: "Inteligencia para tu negocio." })
          ] }),
          /* @__PURE__ */ f($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ a(P, { sx: { ...re.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ a(u, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ a(u, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: n.map((o) => /* @__PURE__ */ a(u, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ a(
              u,
              {
                component: ut,
                to: o.path,
                onClick: () => nn(),
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
            /* @__PURE__ */ a(P, { sx: { ...re.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ f(he, { spacing: 2.5, children: [
              /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ a(Bu, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ a(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ a(Uu, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ a(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ a(ju, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ a(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a(yr, { sx: { my: 6, borderColor: t.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ f(he, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ a(de, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${e} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ f(u, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
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
                    /* @__PURE__ */ a(u, { component: "span", sx: { fontWeight: 400 }, children: "mariano | 마리아노" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ a(he, { direction: "row", spacing: 2, children: r.map((o, i) => /* @__PURE__ */ a(
            Fe,
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
            i
          )) })
        ] })
      ] })
    }
  );
}, cf = ({
  customTitle: e = "Tu tiempo es oro",
  customSubtitle: t = "IA que potencia tu productividad.",
  primaryButtonText: r = "Recupera tu tiempo",
  secondaryButtonText: n = "Calcula tu ROI",
  sx: o
}) => {
  const i = we(), s = ee();
  sr(i.breakpoints.down("md"));
  const [l, c] = V(0), d = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], p = "IA con enfoque humano";
  return me(() => {
    const g = setInterval(() => {
      c((y) => y === 2 ? 0 : y + 1);
    }, 5e3);
    return () => clearInterval(g);
  }, []), /* @__PURE__ */ f(
    u,
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
        /* @__PURE__ */ a(
          u,
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
                backgroundColor: Ce(s.contrast.background, 0.6),
                zIndex: 1
              }
            },
            children: d.map((g, y) => /* @__PURE__ */ a(u, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ a(
              Ln,
              {
                src: g,
                alt: `Background ${y + 1}`,
                priority: y === 0,
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: y === l ? 0.5 : 0,
                  transition: "opacity 1.5s ease-in-out, transform 10s ease-out",
                  filter: "grayscale(100%) contrast(1.2)",
                  transform: y === l ? "scale(1.1)" : "scale(1)"
                }
              }
            ) }, y))
          }
        ),
        /* @__PURE__ */ a(u, { sx: {
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
        }, children: Array.from({ length: 40 }).map((g, y) => /* @__PURE__ */ a(u, { children: Math.random().toString(2).slice(2) }, y)) }),
        /* @__PURE__ */ f(u, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ a(Ye, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ f(Ye, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ a(
          qe,
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
                  /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ a(
                      u,
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
                    /* @__PURE__ */ a(
                      os,
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
                    /* @__PURE__ */ a(
                      wn,
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
                        /* @__PURE__ */ a(
                          Hn,
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
                        /* @__PURE__ */ a(u, { sx: {
                          pt: { xs: 1, md: 2 },
                          position: "relative"
                        }, children: /* @__PURE__ */ f(
                          Ae,
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
                              p.toLowerCase().replace(/\s+/g, "")
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
}, df = ({
  data: e,
  date: t,
  time: r,
  variant: n = "elevated",
  onRefresh: o = void 0
}) => {
  const i = ee(), s = () => {
    switch (n) {
      case "outlined":
        return {
          card: {
            background: "transparent",
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.surface,
            border: `1px solid ${i.contrast.divider}`
          }
        };
      case "elevated":
        return {
          card: {
            background: i.contrast.surface,
            border: "none",
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: `1px solid ${i.contrast.divider}`
          }
        };
      default:
        return {
          card: {
            background: i.contrast.surface,
            border: `1px solid ${i.contrast.divider}`,
            color: i.contrast.text.primary
          },
          surface: {
            background: i.contrast.background,
            border: `1px solid ${i.contrast.divider}`
          }
        };
    }
  }, l = (d) => {
    switch (d) {
      case "excellent":
        return i.palette.success;
      case "good":
        return i.palette.accent;
      case "fair":
        return "#D97706";
      case "poor":
        return "#DC2626";
      default:
        return i.palette.accent;
    }
  }, c = s();
  return /* @__PURE__ */ a(
    Fr,
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
        ...c.card
      },
      children: /* @__PURE__ */ f(Ht, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(u, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: c.surface.background,
              border: c.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ a(Ka, { sx: {
              color: i.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ f(u, { children: [
              /* @__PURE__ */ a(de, { sx: {
                color: i.helpers.text.secondary,
                mb: 0.5
              }, children: t }),
              /* @__PURE__ */ a(Yt, { sx: {
                color: i.helpers.text.primary,
                fontWeight: 400
              }, children: r })
            ] })
          ] }),
          o && /* @__PURE__ */ a(
            Fe,
            {
              size: "small",
              onClick: o,
              sx: {
                color: i.helpers.text.secondary,
                "&:hover": {
                  background: i.helpers.state.hover,
                  color: i.palette.accent
                }
              },
              children: /* @__PURE__ */ a(ai, {})
            }
          )
        ] }),
        e.quality && /* @__PURE__ */ a(u, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: c.surface.background,
          border: c.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ a(de, { sx: {
            color: i.helpers.text.secondary,
            textTransform: "none",
            letterSpacing: 0.5
          }, children: "Calidad del Sueño" }),
          /* @__PURE__ */ a(
            wt,
            {
              label: e.quality.toUpperCase(),
              size: "small",
              sx: {
                backgroundColor: l(e.quality) + "20",
                color: l(e.quality),
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
        /* @__PURE__ */ f(u, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: c.surface.background,
          border: c.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ f(u, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
          }, children: [
            /* @__PURE__ */ a(Re, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: "Duración del Sueño" }),
            /* @__PURE__ */ a(
              wt,
              {
                label: `${e.totalHours}H ${e.totalMinutes}M`,
                sx: {
                  backgroundColor: i.palette.accent,
                  color: i.palette.white,
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
          /* @__PURE__ */ f(u, { sx: {
            height: 40,
            borderRadius: 2,
            background: i.palette.accent,
            position: "relative",
            overflow: "hidden",
            mb: 2
          }, children: [
            /* @__PURE__ */ a(u, { sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2
            }, children: Array.from({ length: 20 }, (d, p) => /* @__PURE__ */ a(u, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, p)) }),
            /* @__PURE__ */ a(u, { sx: {
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              transform: "translateY(-50%)"
            } }),
            /* @__PURE__ */ a(de, { sx: {
              position: "absolute",
              top: 4,
              left: 8,
              fontWeight: 400,
              color: i.palette.white
            }, children: e.remStart }),
            /* @__PURE__ */ a(de, { sx: {
              position: "absolute",
              top: 4,
              right: 8,
              fontWeight: 400,
              color: i.palette.white
            }, children: e.remEnd }),
            /* @__PURE__ */ a(de, { sx: {
              position: "absolute",
              bottom: 4,
              left: 8,
              color: i.palette.white
            }, children: "REM" }),
            /* @__PURE__ */ a(de, { sx: {
              position: "absolute",
              bottom: 4,
              right: 8,
              color: i.palette.white
            }, children: "REM" })
          ] })
        ] }),
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: c.surface.background,
          border: c.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: i.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ f(Re, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            e.hasWifi && /* @__PURE__ */ a(u, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i.palette.accent + "20",
              color: i.palette.accent
            }, children: /* @__PURE__ */ a(Xa, { sx: { fontSize: 16 } }) }),
            e.hasBluetooth && /* @__PURE__ */ a(u, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i.palette.success + "20",
              color: i.palette.success
            }, children: /* @__PURE__ */ a(Ja, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, uf = ({
  data: e,
  variant: t = "elevated",
  showLocationIcon: r = !1,
  onRefresh: n = void 0
}) => {
  const o = ee(), i = () => {
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
  }, s = (c) => {
    const d = c.toLowerCase();
    return d.includes("clear") || d.includes("sunny") ? /* @__PURE__ */ a(ro, {}) : d.includes("cloud") || d.includes("overcast") ? /* @__PURE__ */ a(Za, {}) : d.includes("rain") || d.includes("precipitation") ? /* @__PURE__ */ a(es, {}) : /* @__PURE__ */ a(ro, {});
  }, l = i();
  return /* @__PURE__ */ a(
    Fr,
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
        ...l.card
      },
      children: /* @__PURE__ */ f(Ht, { sx: { p: 3 }, children: [
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            r && /* @__PURE__ */ a(Qa, { sx: {
              fontSize: 20,
              color: o.helpers.text.primary
            } }),
            /* @__PURE__ */ a(Re, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: e.location })
          ] }),
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: o.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            n && /* @__PURE__ */ a(
              Fe,
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
                children: /* @__PURE__ */ a(ai, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f(u, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...l.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ a(u, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: s(e.condition) }),
          /* @__PURE__ */ f(wn, { sx: {
            fontSize: "3.5rem",
            fontWeight: 400,
            color: o.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }, children: [
            e.temperature,
            "°"
          ] }),
          /* @__PURE__ */ a(Re, { sx: {
            color: o.helpers.text.primary,
            mb: 1,
            fontWeight: 400
          }, children: e.condition }),
          /* @__PURE__ */ f(Ae, { sx: {
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
        /* @__PURE__ */ f(u, { sx: {
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...l.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ f(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ f(Re, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ f(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ f(Re, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f(u, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ a(yr, { sx: {
            mb: 3,
            borderColor: o.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ a(Re, { sx: {
            fontWeight: 400,
            mb: 3,
            color: o.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: e.hourlyForecast.map((c, d) => /* @__PURE__ */ f(u, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderRadius: 2,
            background: l.surface.background,
            border: l.surface.border,
            backdropFilter: "blur(10px)",
            transition: "all 0.2s ease",
            "&:hover": {
              background: o.helpers.state.hover,
              transform: "translateX(4px)"
            }
          }, children: [
            /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              s(c.condition),
              /* @__PURE__ */ a(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: c.time })
            ] }),
            /* @__PURE__ */ a(Ae, { sx: {
              color: o.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: c.condition }),
            /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ f(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                c.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ f(Re, { sx: {
                fontWeight: 400,
                color: o.helpers.text.primary,
                minWidth: "50px",
                textAlign: "right"
              }, children: [
                c.temperature,
                "°"
              ] })
            ] })
          ] }, d)) })
        ] })
      ] })
    }
  );
}, pf = ({
  searchValue: e,
  onSearchChange: t,
  selectedTab: r,
  onTabChange: n,
  onClearFilters: o,
  filteredCount: i,
  categoryTabs: s
}) => {
  const l = ee();
  return /* @__PURE__ */ f(u, { sx: {
    mb: 4,
    p: 4,
    background: l.contrast.background,
    border: `4px solid ${l.contrast.text.primary}`,
    borderRadius: 0,
    transition: "all 0.2s ease",
    "&:hover": {
      boxShadow: `8px 8px 0px ${l.contrast.text.primary}`,
      transform: "translate(-4px, -4px)"
    }
  }, children: [
    /* @__PURE__ */ f(
      he,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center", mb: 3 },
        children: [
          /* @__PURE__ */ f(u, { sx: {
            fontSize: "1.25rem",
            fontWeight: 400,
            textTransform: "none",
            letterSpacing: "0.05em",
            color: l.contrast.text.primary
          }, children: [
            i,
            " Servicios"
          ] }),
          e && /* @__PURE__ */ a(
            Sn,
            {
              variant: "text",
              size: "small",
              onClick: o,
              sx: {
                color: l.contrast.text.primary,
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
    /* @__PURE__ */ a(u, { sx: { mb: 3 }, children: /* @__PURE__ */ a(
      oi,
      {
        fullWidth: !0,
        placeholder: "Buscar servicios...",
        value: e,
        onChange: t,
        sx: {
          "& .MuiOutlinedInput-root": {
            background: l.contrast.background,
            borderRadius: 0,
            border: `3px solid ${l.contrast.text.primary}`,
            transition: "all 0.1s ease",
            "&:hover": {
              borderColor: l.contrast.text.primary
            },
            "&.Mui-focused": {
              borderColor: l.contrast.text.primary,
              boxShadow: `4px 4px 0px ${l.contrast.text.primary}`
            }
          },
          "& .MuiOutlinedInput-input": {
            fontSize: "1rem",
            fontWeight: 400,
            padding: "12px 16px",
            color: l.contrast.text.primary,
            textTransform: "none",
            "&::placeholder": {
              color: l.contrast.text.primary,
              opacity: 0.5
            }
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none"
          }
        }
      }
    ) }),
    /* @__PURE__ */ a(yr, { sx: { mb: 3, borderColor: l.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ a(u, { children: /* @__PURE__ */ a(
      Ea,
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
            color: l.contrast.text.primary,
            background: "transparent",
            border: "2px solid transparent",
            "&:hover": {
              background: "rgba(0,0,0,0.05)",
              borderColor: l.contrast.text.primary
            },
            "&.Mui-selected": {
              background: l.contrast.text.primary,
              color: l.contrast.background,
              borderColor: l.contrast.text.primary
            }
          },
          "& .MuiTabs-indicator": {
            display: "none"
          }
        },
        children: s.map((c, d) => /* @__PURE__ */ a(
          Ta,
          {
            label: c.label
          },
          d
        ))
      }
    ) })
  ] });
}, ff = ({ stats: e, getCategories: t }) => {
  const r = we(), n = [
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
  return /* @__PURE__ */ a(u, { sx: { mb: 8 }, children: /* @__PURE__ */ a($e, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: n.map((o, i) => /* @__PURE__ */ a($e, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ f(u, { sx: {
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
    /* @__PURE__ */ a(Yt, { sx: {
      color: o.color,
      mb: 1,
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1
    }, children: o.value }),
    /* @__PURE__ */ a(Ae, { sx: {
      color: "text.primary",
      fontSize: "0.95rem",
      fontWeight: 400,
      mb: 0.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }, children: o.label }),
    /* @__PURE__ */ a(Ae, { sx: {
      color: "text.secondary",
      fontSize: "0.8rem",
      lineHeight: 1.4
    }, children: o.description })
  ] }) }, i)) }) });
}, Gu = Ie(Bt)(({ theme: e }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: e.spacing(2),
  padding: e.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), Yu = ({ code: e, language: t = "tsx", className: r = "" }) => {
  we();
  const n = ee();
  return /* @__PURE__ */ f(Gu, { className: r, children: [
    /* @__PURE__ */ f(u, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 2
    }, children: [
      /* @__PURE__ */ a(de, { sx: {
        color: n.helpers.text.mediumContrast,
        textTransform: "none",
        letterSpacing: "0.05em"
      }, children: t }),
      /* @__PURE__ */ a(
        Fe,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(e),
          sx: { color: n.helpers.text.mediumContrast },
          children: /* @__PURE__ */ a(ts, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ a(u, { component: "pre", sx: {
      fontSize: "0.875rem",
      color: n.helpers.text.highContrast,
      fontFamily: "monospace",
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ a(u, { component: "code", children: e }) })
  ] });
}, qu = ({ props: e }) => {
  const t = we();
  return !e || e.length === 0 ? null : /* @__PURE__ */ a(Ia, { component: Bt, sx: { borderRadius: 2 }, children: /* @__PURE__ */ f(Aa, { children: [
    /* @__PURE__ */ a($a, { children: /* @__PURE__ */ f(eo, { sx: { backgroundColor: t.palette.grey[50] }, children: [
      /* @__PURE__ */ a(He, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ a(He, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ a(He, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ a(He, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ a(He, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ a(Ra, { children: e.map((r, n) => /* @__PURE__ */ f(eo, { sx: {
      "&:hover": { backgroundColor: t.palette.action.hover }
    }, children: [
      /* @__PURE__ */ a(He, { children: /* @__PURE__ */ a(Ye, { children: r.name }) }),
      /* @__PURE__ */ a(He, { children: /* @__PURE__ */ a(Ye, { children: r.type }) }),
      /* @__PURE__ */ a(He, { children: /* @__PURE__ */ a(
        wt,
        {
          label: r.required ? "Sí" : "No",
          size: "small",
          color: r.required ? "error" : "success",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ a(He, { sx: {
        fontSize: "0.875rem",
        color: t.palette.text.secondary
      }, children: r.description }),
      /* @__PURE__ */ a(He, { children: r.defaultValue ? /* @__PURE__ */ a(Ye, { children: r.defaultValue }) : /* @__PURE__ */ a(u, { sx: { color: t.palette.text.disabled }, children: "-" }) })
    ] }, n)) })
  ] }) });
}, hf = ({
  title: e,
  description: t,
  children: r,
  codeExample: n,
  props: o,
  className: i = ""
}) => {
  const s = we();
  return /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: i, children: [
    /* @__PURE__ */ f(u, { sx: {
      borderBottom: `1px solid ${s.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ a(Yt, { sx: { mb: 1 }, children: e }),
      /* @__PURE__ */ a(Ae, { sx: { color: s.palette.text.secondary }, children: t })
    ] }),
    /* @__PURE__ */ f(Bt, { sx: {
      position: "relative",
      p: 4,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 4,
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ a(u, { sx: { mb: 2 }, children: /* @__PURE__ */ a(Re, { sx: { color: s.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ a(u, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: r })
    ] }),
    n && /* @__PURE__ */ f(u, { children: [
      /* @__PURE__ */ a(Re, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ a(Yu, { code: n })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ f(u, { children: [
      /* @__PURE__ */ a(Re, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ a(qu, { props: o })
    ] })
  ] });
}, Ku = Ie(bn)(({ theme: e }) => ({
  backgroundColor: e.palette.grey[100],
  borderRadius: e.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: e.shadows[3]
})), Jo = Ie(Je)(({ theme: e, isSelected: t }) => ({
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
})), Xu = Ie(Je)(({ theme: e, isSelected: t }) => ({
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
})), Ju = Ie(u)(({ theme: e }) => ({
  backgroundColor: e.palette.background.paper,
  borderRadius: e.spacing(2),
  padding: e.spacing(3),
  position: "relative",
  minHeight: 320
})), mf = ({
  rotationAngle: e = 35,
  brightness: t = 30,
  shadowDensity: r = 25
}) => {
  const n = we(), [o, i] = V("rotation"), [s, l] = V("cube"), [c, d] = V("spot"), p = [
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
  return /* @__PURE__ */ a(Ku, { children: /* @__PURE__ */ f(Ht, { sx: { p: 3 }, children: [
    /* @__PURE__ */ f(u, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ a(P, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ a(u, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ a(u, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ a(u, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.error.main,
          borderRadius: "50%"
        } })
      ] }),
      /* @__PURE__ */ a(P, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "2019" })
    ] }),
    /* @__PURE__ */ f($e, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ a($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ f(u, { children: [
          /* @__PURE__ */ a(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ a(u, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: p.map((h) => /* @__PURE__ */ a(
            Jo,
            {
              isSelected: s === h.id,
              onClick: () => l(h.id),
              children: h.icon
            },
            h.id
          )) })
        ] }),
        /* @__PURE__ */ f(u, { children: [
          /* @__PURE__ */ a(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: g.map((h) => /* @__PURE__ */ a(
            Xu,
            {
              isSelected: o === h.id,
              onClick: () => i(h.id),
              startIcon: /* @__PURE__ */ a("span", { children: h.icon }),
              children: h.name
            },
            h.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ a($e, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ f(Ju, { children: [
        /* @__PURE__ */ a(u, { sx: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          borderRadius: 2,
          overflow: "hidden"
        }, children: /* @__PURE__ */ a(u, { sx: {
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          height: "100%"
        }, children: Array.from({ length: 96 }, (h, v) => /* @__PURE__ */ a(u, { sx: {
          border: `1px solid ${n.palette.grey[300]}`
        } }, v)) }) }),
        /* @__PURE__ */ f(u, { sx: {
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 256
        }, children: [
          /* @__PURE__ */ a(u, { sx: {
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
          /* @__PURE__ */ f(u, { sx: {
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ a(u, { sx: {
              width: 128,
              height: 32,
              border: `2px solid ${n.palette.grey[400]}`,
              borderRadius: "16px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ a(u, { sx: {
              width: 8,
              height: 8,
              backgroundColor: n.palette.grey[600],
              borderRadius: "50%"
            } }) }),
            /* @__PURE__ */ f(u, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ a(P, { variant: "body2", sx: {
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
          /* @__PURE__ */ f(u, { sx: {
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.75rem"
          }, children: [
            /* @__PURE__ */ a(P, { variant: "caption", sx: { color: n.palette.error.main }, children: "X" }),
            /* @__PURE__ */ a(P, { variant: "caption", sx: { color: n.palette.success.main }, children: "Y" }),
            /* @__PURE__ */ a(P, { variant: "caption", sx: { color: n.palette.info.main }, children: "Z" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ f(u, { children: [
          /* @__PURE__ */ a(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ a($e, { container: !0, spacing: 1, children: y.map((h) => /* @__PURE__ */ a($e, { size: 6, children: /* @__PURE__ */ a(
            Jo,
            {
              isSelected: c === h.id,
              onClick: () => d(h.id),
              sx: { width: 48, height: 48 },
              children: h.icon
            }
          ) }, h.id)) })
        ] }),
        /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ f(u, { children: [
            /* @__PURE__ */ f(u, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ a(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ f(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                t,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ a(u, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ a(u, { sx: {
              height: "100%",
              width: `${t}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] }),
          /* @__PURE__ */ f(u, { children: [
            /* @__PURE__ */ f(u, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ a(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ f(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                r,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ a(u, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ a(u, { sx: {
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
    /* @__PURE__ */ f(u, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${n.palette.divider}`
    }, children: [
      /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ a(u, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${n.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ a(P, { variant: "caption", sx: {
            color: n.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ a(P, { variant: "caption", sx: {
              color: n.palette.text.secondary,
              fontSize: "0.75rem"
            }, children: "UI" }),
            /* @__PURE__ */ a(u, { sx: {
              width: 4,
              height: 4,
              backgroundColor: n.palette.text.primary,
              borderRadius: "50%"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ a(P, { variant: "caption", sx: {
        color: n.palette.text.secondary,
        fontSize: "0.75rem"
      }, children: "013" })
    ] })
  ] }) });
}, Qu = _e(/* @__PURE__ */ a("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), Qo = _e(/* @__PURE__ */ a("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode"), Zo = _e(/* @__PURE__ */ a("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode"), Zu = Ie(Je, {
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
})), ep = Ie(u)(({ theme: e }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [e.breakpoints.up("md")]: {
    display: "flex"
  }
})), tp = () => {
  const [e, t] = V(null), [r, n] = V(!1), o = ee(), i = Pr(), { mode: s, toggleColorMode: l } = Fn();
  me(() => {
    const y = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y);
  }, []);
  const c = [
    { name: "inicio", path: ze.HOME },
    { name: "servicios", path: ze.SERVICES },
    { name: "superAI", path: ze.SUPER_AI },
    { name: "porqueAi4u", path: ze.WHY_AI4U },
    { name: "portafolio", path: ze.PORTFOLIO }
  ], d = (y) => {
    t(y.currentTarget);
  }, p = () => {
    t(null);
  }, g = (y) => {
    p(), i(y), nn();
  };
  return /* @__PURE__ */ a(
    Oa,
    {
      position: "fixed",
      color: "transparent",
      elevation: 0,
      sx: {
        backgroundColor: r ? Ce(o.contrast.surface, 0.85) : "transparent",
        backdropFilter: r ? "blur(10px)" : "none",
        borderBottom: r ? `1px solid ${Ce(o.contrast.border, 0.1)}` : "none",
        transition: "all 0.3s ease-in-out",
        zIndex: (y) => y.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ a(qe, { maxWidth: "lg", children: /* @__PURE__ */ f(_a, { disableGutters: !0, children: [
        /* @__PURE__ */ a(
          u,
          {
            component: ut,
            to: ze.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ a(Ct, { variant: "desktop", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ f(u, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ a(
            Fe,
            {
              size: "large",
              "aria-label": "Menu de navegación",
              "aria-controls": "menu-appbar",
              "aria-haspopup": "true",
              onClick: d,
              sx: {
                color: o.contrast.text.primary,
                transition: "color 0.3s ease-in-out",
                border: "none",
                "&:hover": {
                  backgroundColor: "transparent",
                  opacity: 0.7
                }
              },
              children: e ? /* @__PURE__ */ a(Xi, {}) : /* @__PURE__ */ a(Qu, {})
            }
          ),
          /* @__PURE__ */ f(
            ri,
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
              onClose: p,
              sx: {
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: o.contrast.surface,
                  border: `1px solid ${o.contrast.border}`,
                  boxShadow: tt.lg
                }
              },
              children: [
                c.map((y) => /* @__PURE__ */ a(
                  rr,
                  {
                    onClick: () => g(y.path),
                    component: ut,
                    to: y.path,
                    sx: {
                      color: o.contrast.text.primary,
                      "&:hover": {
                        backgroundColor: o.helpers.state.hover,
                        color: o.palette.black
                      }
                    },
                    children: /* @__PURE__ */ a(P, { sx: { ...re.label.main }, children: y.name })
                  },
                  y.name
                )),
                /* @__PURE__ */ a(
                  rr,
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
                    children: /* @__PURE__ */ a(u, { sx: { width: "100%", maxWidth: (y) => y.spacing(25) }, children: /* @__PURE__ */ a(Uo, { light: o.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ f(
                  rr,
                  {
                    onClick: l,
                    sx: {
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                      color: o.contrast.text.primary,
                      "&:hover": { backgroundColor: o.helpers.state.hover }
                    },
                    children: [
                      s === "light" ? /* @__PURE__ */ a(Zo, { fontSize: "small" }) : /* @__PURE__ */ a(Qo, { fontSize: "small" }),
                      /* @__PURE__ */ a(P, { children: s === "light" ? "Modo oscuro" : "Modo claro" })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ a(
          u,
          {
            component: ut,
            to: ze.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ a(Ct, { variant: "mobile", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ f(ep, { children: [
          c.map((y) => /* @__PURE__ */ a(
            Zu,
            {
              colors: o,
              isScrolled: r,
              onClick: () => nn(),
              component: ut,
              to: y.path,
              sx: { ...re.label.secondary, letterSpacing: "0.1em" },
              children: y.name
            },
            y.name
          )),
          /* @__PURE__ */ a(
            u,
            {
              sx: {
                ml: { xs: 0.5, md: 1 },
                display: "flex",
                alignItems: "center",
                flexShrink: 0
              },
              children: /* @__PURE__ */ a(Uo, { light: o.mode === "dark" })
            }
          ),
          /* @__PURE__ */ a(
            Fe,
            {
              onClick: l,
              size: "small",
              sx: {
                ml: 1,
                color: o.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: s === "light" ? /* @__PURE__ */ a(Zo, { fontSize: "small" }) : /* @__PURE__ */ a(Qo, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, ei = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], rp = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], gf = ({
  badge: e = "ai4u // siempre activo",
  lines: t = rp,
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const n = ee(), [o, i] = V(/* @__PURE__ */ new Set()), [s, l] = V(0), c = Gt([]);
  me(() => {
    const y = setInterval(() => l((h) => (h + 1) % ei.length), 5e3);
    return () => clearInterval(y);
  }, []), me(() => {
    const y = [];
    return c.current.forEach((h, v) => {
      if (!h) return;
      const x = new IntersectionObserver(
        ([C]) => {
          C.isIntersecting && i((w) => new Set(w).add(v));
        },
        { threshold: 0.3 }
      );
      x.observe(h), y.push(x);
    }), () => y.forEach((h) => h.disconnect());
  }, [t.length]);
  const d = lt((y, h) => {
    c.current[h] = y;
  }, []), p = o.size > 0 ? Math.max(...o) : -1, g = o.size / t.length * 100;
  return /* @__PURE__ */ f(u, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ f(u, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      ei.map((y, h) => /* @__PURE__ */ a(u, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ a(
        Ln,
        {
          src: y,
          alt: "",
          priority: h === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: h === s ? 0.35 : 0,
            transition: "opacity 2s ease-in-out, transform 12s ease-out",
            filter: "grayscale(100%) contrast(1.1)",
            transform: h === s ? "scale(1.06)" : "scale(1)"
          }
        }
      ) }, h)),
      /* @__PURE__ */ a(u, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: Ce(n.contrast.background, 0.55)
      } })
    ] }),
    /* @__PURE__ */ f(u, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      px: { xs: 3, md: 8, lg: 12 },
      pt: { xs: 10, md: 12 },
      pb: 0
    }, children: [
      /* @__PURE__ */ f(u, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: { xs: 10, md: 16 } }, children: [
        /* @__PURE__ */ a(u, { sx: {
          border: `1px solid ${n.contrast.text.primary}`,
          color: n.contrast.text.primary,
          px: 1.5,
          py: 0.4,
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          opacity: 0.65
        }, children: e }),
        /* @__PURE__ */ a(u, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ a(Ye, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ a(u, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: t.map((y, h) => {
        const v = o.has(h), x = h === p, C = v ? x ? 1 : 0.55 : 0.12, w = x ? b.accentColors.orange : n.contrast.text.primary;
        return /* @__PURE__ */ a(
          u,
          {
            ref: (I) => d(I, h),
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
          h
        );
      }) }),
      /* @__PURE__ */ f(u, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ a(u, { sx: { borderTop: `1px solid ${Ce(n.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ a(u, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ a(
          Hn,
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
    /* @__PURE__ */ a(u, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ a(u, { sx: { height: "1px", bgcolor: Ce(n.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ a(u, { sx: {
      height: "100%",
      bgcolor: b.accentColors.orange,
      width: `${g}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, ti = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], np = ["agentes", "entrenamiento", "automatizaciones"], xf = ({
  badge: e = "ai4u.equipo // siempre activo",
  primaryButtonText: t = "hablar con el equipo"
}) => {
  const r = ee(), [n, o] = V(0);
  return me(() => {
    const i = setInterval(
      () => o((s) => (s + 1) % ti.length),
      5e3
    );
    return () => clearInterval(i);
  }, []), /* @__PURE__ */ f(u, { sx: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }, children: [
    /* @__PURE__ */ f(u, { sx: { position: "absolute", inset: 0 }, children: [
      ti.map((i, s) => /* @__PURE__ */ a(u, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ a(
        Ln,
        {
          src: i,
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
      /* @__PURE__ */ a(u, { sx: {
        position: "absolute",
        inset: 0,
        background: `linear-gradient(
            to bottom,
            ${Ce(r.contrast.background, 0.05)} 0%,
            ${Ce(r.contrast.background, 0.2)}  35%,
            ${Ce(r.contrast.background, 0.72)} 72%,
            ${Ce(r.contrast.background, 0.93)} 100%
          )`
      } })
    ] }),
    /* @__PURE__ */ a(Ye, { sx: {
      position: "absolute",
      top: { xs: 72, md: 24 },
      right: { xs: 24, md: 40 },
      fontSize: "0.65rem",
      opacity: 0.3,
      zIndex: 2,
      color: r.contrast.text.primary
    }, children: "6.2442° N, 75.5812° W" }),
    /* @__PURE__ */ f(u, { sx: {
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
      /* @__PURE__ */ a(Ye, { sx: {
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: r.contrast.text.primary,
        opacity: 0.5
      }, children: "scroll" }),
      /* @__PURE__ */ a(u, { sx: {
        width: "1px",
        height: "36px",
        background: `linear-gradient(to bottom, ${Ce(r.contrast.text.primary, 0.25)}, transparent)`
      } })
    ] }),
    /* @__PURE__ */ f(u, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 4,
      px: { xs: 3, md: 5 },
      pb: { xs: 10, md: 6 }
    }, children: [
      /* @__PURE__ */ f(u, { children: [
        /* @__PURE__ */ a(Ye, { sx: {
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: b.accentColors.orange,
          mb: 2,
          display: "block"
        }, children: e }),
        /* @__PURE__ */ f(
          u,
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
              /* @__PURE__ */ a("br", {}),
              "para lo que",
              /* @__PURE__ */ a("br", {}),
              "importa."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ f(u, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2.5,
        flexShrink: 0,
        pb: "4px"
      }, children: [
        /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: np.map((i) => /* @__PURE__ */ a(Ye, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: r.contrast.text.primary,
          opacity: 0.35,
          textTransform: "uppercase"
        }, children: i }, i)) }),
        /* @__PURE__ */ a(
          Hn,
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
    /* @__PURE__ */ a(u, { sx: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgcolor: Ce(r.contrast.text.primary, 0.1),
      zIndex: 3
    } })
  ] });
}, yf = ({
  label: e,
  body: t,
  pillars: r,
  defaultOpen: n = !0,
  accentColor: o = b.hotOrange
}) => {
  const [i, s] = V(n), l = ee();
  return /* @__PURE__ */ f(
    u,
    {
      sx: {
        borderRadius: 0,
        overflow: "hidden",
        border: `1px solid ${l.contrast.border}`,
        backgroundColor: l.contrast.surface
      },
      children: [
        /* @__PURE__ */ f(
          u,
          {
            component: "button",
            onClick: () => s((c) => !c),
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
              borderBottom: i ? `1px solid ${l.contrast.border}` : "none"
            },
            children: [
              /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
                /* @__PURE__ */ a(u, { sx: { width: 3, height: 16, backgroundColor: o } }),
                /* @__PURE__ */ a(
                  u,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 700,
                      color: l.contrast.text.secondary,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase"
                    },
                    children: e
                  }
                )
              ] }),
              /* @__PURE__ */ a(
                u,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 11,
                    color: l.contrast.text.disabled,
                    transform: i ? "rotate(180deg)" : "rotate(0)",
                    display: "inline-block",
                    transition: "transform 0.2s"
                  },
                  children: "∧"
                }
              )
            ]
          }
        ),
        i && /* @__PURE__ */ f(u, { sx: { p: 2.5 }, children: [
          /* @__PURE__ */ a(
            u,
            {
              component: "div",
              sx: {
                fontSize: 13.5,
                lineHeight: 1.75,
                color: l.contrast.text.primary,
                fontStyle: "italic",
                maxWidth: 720
              },
              children: t
            }
          ),
          r && r.length > 0 && /* @__PURE__ */ a(u, { sx: { display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }, children: r.map((c) => /* @__PURE__ */ f(
            u,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.875,
                px: 1.5,
                py: 0.625,
                backgroundColor: `${c.color}0d`,
                border: `1px solid ${c.color}30`
              },
              children: [
                /* @__PURE__ */ a(mr, { id: c.icon, size: 12, color: c.color, strokeWidth: 2 }),
                /* @__PURE__ */ a(
                  u,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: c.color
                    },
                    children: c.label
                  }
                )
              ]
            },
            c.label
          )) })
        ] })
      ]
    }
  );
}, bf = ({
  logo: e,
  title: t,
  subtitle: r,
  badges: n,
  actions: o
}) => {
  const i = ee();
  return /* @__PURE__ */ f(
    u,
    {
      sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: 2,
        px: 3.5,
        backgroundColor: i.contrast.surface,
        borderBottom: `1px solid ${i.contrast.border}`,
        flexShrink: 0
      },
      children: [
        /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          e && /* @__PURE__ */ a(u, { sx: { display: "inline-flex" }, children: e }),
          e && /* @__PURE__ */ a(u, { sx: { width: "1px", height: 28, backgroundColor: i.contrast.border } }),
          /* @__PURE__ */ f(u, { children: [
            /* @__PURE__ */ a(
              u,
              {
                component: "h1",
                sx: {
                  m: 0,
                  fontFamily: '"Red Hat Display", sans-serif',
                  fontWeight: 900,
                  fontSize: 16,
                  letterSpacing: "0.04em",
                  color: i.contrast.text.primary
                },
                children: t
              }
            ),
            r && /* @__PURE__ */ a(
              u,
              {
                sx: {
                  fontFamily: '"Necto Mono", monospace',
                  fontSize: 10,
                  color: i.contrast.text.disabled,
                  mt: 0.125,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase"
                },
                children: r
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ f(u, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
          n,
          o
        ] })
      ]
    }
  );
}, vf = ({
  branding: e,
  statusBadge: t,
  groups: r,
  stats: n,
  clock: o,
  signature: i,
  width: s = 252
}) => {
  const l = b.erieBlack, c = "rgba(255,255,255,0.06)", d = b.white, p = "rgba(255,255,255,0.45)";
  return /* @__PURE__ */ f(
    u,
    {
      component: "aside",
      sx: {
        width: s,
        flexShrink: 0,
        backgroundColor: l,
        borderRight: `1px solid ${c}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        color: d
      },
      children: [
        /* @__PURE__ */ f(u, { sx: { p: "22px 20px 18px", borderBottom: `1px solid ${c}` }, children: [
          e.logo && /* @__PURE__ */ a(u, { sx: { mb: 1.75 }, children: e.logo }),
          /* @__PURE__ */ a(
            u,
            {
              sx: {
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.2em",
                color: d,
                textTransform: "uppercase",
                lineHeight: 1
              },
              children: e.title
            }
          ),
          e.subtitle && /* @__PURE__ */ a(
            u,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9,
                color: p,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mt: 0.5
              },
              children: e.subtitle
            }
          )
        ] }),
        t && /* @__PURE__ */ a(u, { sx: { p: "10px 20px", borderBottom: `1px solid ${c}` }, children: /* @__PURE__ */ f(
          u,
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
              /* @__PURE__ */ a(mn, { status: t.status, size: 6 }),
              /* @__PURE__ */ a(
                u,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 9,
                    color: b.telemetry[t.status],
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase"
                  },
                  children: t.label
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ a(u, { component: "nav", sx: { flex: 1, py: 1.75 }, children: r.map((g) => /* @__PURE__ */ f(u, { sx: { mb: 2.25 }, children: [
          /* @__PURE__ */ f(
            u,
            {
              sx: {
                px: "20px",
                pb: 0.75,
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                fontWeight: 700,
                color: p,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              },
              children: [
                "◈ ",
                g.label
              ]
            }
          ),
          g.items.map((y) => /* @__PURE__ */ f(
            u,
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
                /* @__PURE__ */ a(
                  mr,
                  {
                    id: y.icon,
                    size: 14,
                    color: "rgba(255,255,255,0.4)",
                    strokeWidth: 1.6
                  }
                ),
                /* @__PURE__ */ f(u, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ a(
                    u,
                    {
                      sx: {
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: d,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                      },
                      children: y.name
                    }
                  ),
                  y.hint && /* @__PURE__ */ a(
                    u,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8.5,
                        color: b.moderateBlue,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        mt: "1px",
                        opacity: 0.8
                      },
                      children: y.hint
                    }
                  )
                ] }),
                y.status && /* @__PURE__ */ a(mn, { status: y.status, size: 6 })
              ]
            },
            y.id
          ))
        ] }, g.id)) }),
        n && n.length > 0 && /* @__PURE__ */ a(
          u,
          {
            sx: {
              borderTop: `1px solid ${c}`,
              p: "14px 20px",
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(n.length, 2)}, 1fr)`,
              gap: 1
            },
            children: n.map((g) => /* @__PURE__ */ f(
              u,
              {
                sx: {
                  textAlign: "center",
                  py: 1.25,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                  /* @__PURE__ */ a(
                    u,
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
                  /* @__PURE__ */ a(
                    u,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8,
                        color: p,
                        textTransform: "uppercase",
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
          u,
          {
            sx: {
              borderTop: `1px solid ${c}`,
              p: "12px 20px",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ a(
                u,
                {
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 19,
                    fontWeight: 700,
                    color: d,
                    letterSpacing: "0.05em",
                    lineHeight: 1
                  },
                  children: o.time
                }
              ),
              o.date && /* @__PURE__ */ a(
                u,
                {
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 8.5,
                    color: p,
                    mt: 0.5,
                    letterSpacing: "0.1em"
                  },
                  children: o.date
                }
              )
            ]
          }
        ),
        i && /* @__PURE__ */ f(
          u,
          {
            sx: {
              borderTop: `1px solid ${c}`,
              p: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 1.5
            },
            children: [
              i.logo,
              /* @__PURE__ */ f(u, { children: [
                /* @__PURE__ */ a(
                  u,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 8.5,
                      color: p,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase"
                    },
                    children: i.caption
                  }
                ),
                /* @__PURE__ */ a(
                  u,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 11,
                      fontWeight: 700,
                      color: i.accentColor ?? b.hotOrange,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase"
                    },
                    children: i.label
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
}, Sf = ({ children: e }) => /* @__PURE__ */ f(u, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ a(Ed, {}),
  /* @__PURE__ */ a(tp, {}),
  /* @__PURE__ */ a(
    u,
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
  /* @__PURE__ */ a(Hu, {})
] }), op = () => {
  const e = we(), t = ee();
  return /* @__PURE__ */ a(
    u,
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
      children: /* @__PURE__ */ f(u, { sx: { width: "100%", maxWidth: 600 }, children: [
        /* @__PURE__ */ a(
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
        /* @__PURE__ */ a(
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
        /* @__PURE__ */ a(
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
        /* @__PURE__ */ a(
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
}, wf = ({
  children: e,
  fallback: t = /* @__PURE__ */ a(op, {})
}) => /* @__PURE__ */ a(za, { fallback: t, children: e }), Cf = () => {
  const { pathname: e, hash: t } = _t();
  return me(() => {
    if (t) {
      const r = t.replace("#", ""), n = document.getElementById(r);
      if (n)
        n.scrollIntoView({ behavior: "smooth" });
      else {
        const o = setTimeout(() => {
          const i = document.getElementById(r);
          i && i.scrollIntoView({ behavior: "smooth" });
        }, 100);
        return () => clearTimeout(o);
      }
    } else
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }, [e, t]), null;
}, kf = ({ children: e }) => {
  const [t, r] = V(!0), n = we(), o = Oe(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let i = 0;
    const s = o.length, l = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, c = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const p = new Image();
      p.onload = l, p.onerror = c, p.src = d;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ a(
    u,
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
      children: /* @__PURE__ */ a(qe, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(Ct, {}) }),
        /* @__PURE__ */ a(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
  ) : /* @__PURE__ */ a("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, Ef = ({ children: e }) => {
  const [t, r] = V(!0), n = we(), o = Oe(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let i = 0;
    const s = o.length, l = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, c = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const p = new Image();
      p.onload = l, p.onerror = c, p.src = d;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ a(
    u,
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
      children: /* @__PURE__ */ a(qe, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(Ct, {}) }),
        /* @__PURE__ */ a(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
  ) : /* @__PURE__ */ a("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, Tf = ({ children: e }) => {
  const [t, r] = V(!0), n = we();
  return me(() => {
    const o = [
      "/assets/images/hero-image.png",
      "/assets/images/hero-image2.png",
      "/assets/images/hero-image3.png",
      "/assets/images/ai4u-logo.png",
      "/assets/images/ai4u-logo-dark.png"
    ];
    let i = 0;
    const s = o.length, l = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, c = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const p = new Image();
      p.onload = l, p.onerror = c, p.src = d;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, []), t ? /* @__PURE__ */ a(
    u,
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
      children: /* @__PURE__ */ a(qe, { maxWidth: "lg", children: /* @__PURE__ */ f(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(Ct, {}) }),
        /* @__PURE__ */ a(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
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
  ) : /* @__PURE__ */ a("div", { style: { opacity: t ? 0 : 1, transition: "opacity 0.5s ease-in-out" }, children: e });
}, If = ({ children: e }) => /* @__PURE__ */ a(be, { children: e }), Af = ({
  children: e,
  title: t,
  subtitle: r,
  className: n = "",
  variant: o = "default"
}) => {
  const i = we(), s = () => {
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
  }, l = () => {
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
          borderBottom: `1px solid ${i.palette.divider}`
        };
    }
  };
  return /* @__PURE__ */ f(u, { sx: s(), className: n, children: [
    (t || r) && /* @__PURE__ */ a(u, { component: "header", sx: l(), children: /* @__PURE__ */ a(qe, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ f(u, { sx: { textAlign: "center" }, children: [
      t && /* @__PURE__ */ a(wn, { sx: {
        mb: { xs: 4, md: 6 },
        color: o === "futuristic" ? "#FFFFFF" : "#171717"
      }, children: t }),
      r && /* @__PURE__ */ a(Ae, { sx: {
        fontSize: { xs: "1.125rem", md: "1.25rem" },
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        maxWidth: "md",
        mx: "auto",
        lineHeight: 1.6
      }, children: r })
    ] }) }) }),
    /* @__PURE__ */ a(u, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: e })
  ] });
}, $f = ({
  children: e,
  title: t,
  description: r,
  className: n = "",
  variant: o = "default"
}) => {
  const i = we();
  return /* @__PURE__ */ f(u, { sx: (() => {
    switch (o) {
      case "glassmorphism":
        return {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: i.spacing(4),
          padding: i.spacing(4)
        };
      case "futuristic":
        return {
          background: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          borderRadius: i.spacing(4),
          padding: i.spacing(4)
        };
      default:
        return {
          background: i.palette.background.paper,
          borderRadius: i.spacing(2),
          border: `1px solid ${i.palette.divider}`,
          padding: i.spacing(3)
        };
    }
  })(), className: n, children: [
    (t || r) && /* @__PURE__ */ f(u, { sx: { mb: 4 }, children: [
      t && /* @__PURE__ */ a(si, { sx: {
        mb: 2,
        // Estilo minimalista: usar color del tema en lugar de gradiente naranja
        color: o === "futuristic" ? "#FFFFFF" : i.palette.text.primary
      }, children: t }),
      r && /* @__PURE__ */ a(Ae, { sx: {
        fontSize: "1.125rem",
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        mb: 4
      }, children: r })
    ] }),
    e
  ] });
}, Rf = ({
  children: e,
  className: t = "",
  maxWidth: r = "xl",
  padding: n = "lg"
}) => /* @__PURE__ */ a(
  qe,
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
), Of = ({
  children: e,
  cols: t = 1,
  gap: r = "lg",
  className: n = ""
}) => /* @__PURE__ */ a(
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
    children: Na.Children.map(e, (i, s) => /* @__PURE__ */ a(
      $e,
      {
        size: {
          xs: 12,
          sm: t >= 2 ? 6 : 12,
          md: t >= 3 ? 4 : t >= 2 ? 6 : 12,
          lg: t >= 4 ? 3 : t >= 3 ? 4 : t >= 2 ? 6 : 12,
          xl: t >= 6 ? 2 : t >= 4 ? 3 : t >= 3 ? 4 : t >= 2 ? 6 : 12
        },
        children: i
      },
      s
    ))
  }
), _f = ({
  children: e,
  spacing: t = "md",
  className: r = ""
}) => /* @__PURE__ */ a(
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
var ip = /* @__PURE__ */ ((e) => (e.OPERATION = "operation", e.STRATEGY = "strategy", e.EDUCATION = "education", e.TRANSFORMATION = "transformation", e))(ip || {}), ap = /* @__PURE__ */ ((e) => (e.AUTOMATION = "automation", e.AI_ASSISTANT = "ai_assistant", e.ANALYTICS = "analytics", e.ECOMMERCE = "ecommerce", e.TRAINING = "training", e.CONSULTING = "consulting", e))(ap || {}), sp = /* @__PURE__ */ ((e) => (e.ACTIVE = "active", e.INACTIVE = "inactive", e.COMING_SOON = "coming_soon", e.DEPRECATED = "deprecated", e))(sp || {});
export {
  zf as AI4U_DESIGN_TOKENS,
  b as AI4U_PALETTE,
  sf as AuthCard,
  Pf as BORDER_TOKENS,
  Wr as BREAKPOINT_TOKENS,
  If as BasicLoadingWrapper,
  Ae as BodyText,
  zp as Branding,
  Jp as Breadcrumb,
  Wp as BudgetCard,
  Sn as Button,
  Df as COMPONENT_SPACING,
  Ff as COMPONENT_VARIANTS,
  ha as CONTRAST_PAIRS,
  Fr as Card,
  Pp as ChatButton,
  Ye as CodeText,
  Gi as ColorModeContext,
  Rf as Container,
  Wt as ContextualLink,
  mr as DashboardIcon,
  vf as DashboardSidebar,
  bf as DashboardTopBar,
  Hn as DiagnosticCTA,
  hf as Documentation,
  Qp as ErrorBoundary,
  nf as ExpandableSection,
  rf as FilterStats,
  Hu as Footer,
  fr as GeometricIcon,
  os as Giant,
  Mp as GiantNumber,
  Ed as GoogleTranslateProvider,
  Uo as GoogleTranslateWidget,
  Of as Grid,
  wn as H1,
  si as H2,
  Yt as H3,
  Re as H4,
  xp as H5,
  yp as H6,
  xf as HeroFullscreen,
  cf as HeroSection,
  Ep as ImagePreloader,
  _p as IntelligentImagePreloader,
  Sf as Layout,
  Ln as LazyImage,
  wf as LazyPage,
  Tp as LoadingScreen,
  Ef as LoadingWrapper,
  Ct as Logo,
  Bp as MetricCard,
  mf as ModelingInterface,
  af as ModuleCard,
  tp as Navbar,
  lf as Navigation,
  Id as NavigationDot,
  Rp as OptimizedImage,
  Op as OptimizedImageAdvanced,
  Af as PageLayout,
  Ap as PixelArtFilter,
  Ip as PixelArtImage,
  Lp as ProcessStep,
  of as ProgressiveContent,
  Zp as RelatedPages,
  Ki as SEOHead,
  tt as SHADOW_TOKENS,
  Lf as SPACING_TOKENS,
  ct as SURFACE_PRESETS,
  gf as ScrollRevealHero,
  Cf as ScrollToTop,
  $f as Section,
  Xp as ServiceCard,
  ap as ServiceCategory,
  ef as ServiceCrossLink,
  sp as ServiceStatus,
  ip as ServiceSuperCategory,
  Np as ServiceThumbnail,
  Dp as ServicesButton,
  pf as ServicesFilter,
  ff as ServicesStats,
  kf as SimpleAppWrapper,
  Tf as SimpleLoadingWrapper,
  df as SleepWidget,
  de as SmallText,
  _f as Stack,
  mn as StatusDot,
  tf as SuperCategoryFilter,
  Sp as SurfaceProvider,
  re as TEXT_VARIANTS,
  Wf as TRANSITION_TOKENS,
  Q as TYPOGRAPHY_TOKENS,
  Bf as TYPOGRAPHY_UTILITIES,
  vp as ThemeProvider,
  Fp as TransactionCard,
  bp as Typography,
  bp as TypographyWrapper,
  yf as VisionBanner,
  uf as WeatherWidget,
  jf as Z_INDEX_TOKENS,
  Yi as analytics,
  $p as buildSEOMetadata,
  qp as cleanMetaDescription,
  Vf as createAI4UTokens,
  Kp as generateKeywords,
  Pu as getBreadcrumbStructuredData,
  Yp as getCanonicalUrl,
  Hp as getFAQStructuredData,
  jp as getHomeStructuredData,
  Gp as getPageMetaTags,
  zu as getServiceStructuredData,
  Vp as getServicesStructuredData,
  Up as getUseCasesStructuredData,
  kp as initAnalytics,
  Fn as useColorMode,
  ee as useColors,
  ma as useComponentColors,
  wp as useComponentVariant,
  Uf as useContrastColors,
  Cp as useContrastPair,
  hd as useSurface
};
//# sourceMappingURL=index.js.map
