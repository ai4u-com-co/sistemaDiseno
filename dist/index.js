var Ei = Object.defineProperty;
var Ti = (e, t, r) => t in e ? Ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ge = (e, t, r) => Ti(e, typeof t != "symbol" ? t + "" : t, r);
import { AI4U_PALETTE as v, TEXT_VARIANTS as re, TYPOGRAPHY_TOKENS as Q, SHADOW_TOKENS as at, SURFACE_PRESETS as ht, CONTRAST_PAIRS as Ii, useComponentColors as Ri, BREAKPOINT_TOKENS as Hr } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as $h, BORDER_TOKENS as Ah, COMPONENT_SPACING as _h, COMPONENT_VARIANTS as Oh, SPACING_TOKENS as Mh, TRANSITION_TOKENS as Ph, TYPOGRAPHY_UTILITIES as zh, Z_INDEX_TOKENS as Dh, createAI4UTokens as Fh, useContrastColors as Nh } from "./tokens/index.js";
import { jsxs as m, jsx as i, Fragment as be } from "react/jsx-runtime";
import { styled as Ie, Button as et, Box as u, Typography as F, useTheme as Se, Container as Xe, Stack as he, Skeleton as ne, useMediaQuery as cr, Menu as ca, MenuItem as or, Link as da, keyframes as $i, Fab as Ai, Dialog as _i, DialogTitle as Oi, IconButton as Ne, alpha as we, DialogContent as Mi, Paper as Vt, CircularProgress as Pi, TextField as ua, Card as wn, CardContent as Yt, Avatar as so, Chip as It, Divider as Sr, Alert as zi, AlertTitle as Di, Collapse as Fi, Grid as $e, Tabs as Ni, Tab as Li, TableContainer as Wi, Table as Bi, TableHead as ji, TableRow as lo, TableCell as Ye, TableBody as Vi, AppBar as Hi, Toolbar as Ui } from "@mui/material";
import * as w from "react";
import Gi, { useState as H, useRef as qt, useEffect as me, createContext as Cn, useCallback as ft, useMemo as _e, useContext as wr, Component as Yi, Suspense as qi } from "react";
import { Global as Ki, ThemeContext as pa } from "@emotion/react";
import Xi from "@emotion/styled";
import { Receipt as Ji, MoreVert as co, AttachMoney as Qi, Favorite as Zi, TrendingUp as es, School as ts, FitnessCenter as rs, ShoppingCart as ns, AccountBalance as os, Add as as, RefreshOutlined as is, ExpandMore as ss, Bed as ls, Refresh as fa, Wifi as cs, Bluetooth as ds, LocationOn as us, WbSunny as uo, Cloud as ps, Opacity as fs, ContentCopy as hs } from "@mui/icons-material";
const ms = Ie(et, {
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
        backgroundColor: r ? v.black : v.white,
        color: r ? v.white : v.black,
        "&:hover": {
          backgroundColor: r ? v.gray[800] : v.gray[200],
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px 0px ${r ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)"}`
        }
      };
    case "industrial":
      return {
        ...n,
        backgroundColor: v.accentColors.mint,
        // Safety Green
        color: v.black,
        border: `2px solid ${v.black}`,
        "&:hover": {
          backgroundColor: v.accentColors.orange,
          // Warning Orange
          transform: "translate(-4px, -4px)",
          boxShadow: `8px 8px 0px 0px ${v.black}`
        }
      };
    case "outline":
      return {
        ...n,
        backgroundColor: "transparent",
        color: r ? v.black : v.white,
        border: `2px solid ${r ? v.black : v.white}`,
        "&:hover": {
          backgroundColor: r ? v.black : v.white,
          color: r ? v.white : v.black
        }
      };
    case "minimal":
      return {
        ...n,
        backgroundColor: r ? v.gray[100] : v.gray[900],
        color: r ? v.black : v.white,
        "&:hover": {
          backgroundColor: r ? v.gray[200] : v.gray[800]
        }
      };
    default:
      return n;
  }
}), gs = Ie(u)(({ theme: e }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...re.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), kn = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  label: n,
  className: o,
  sx: a,
  ...s
}) => /* @__PURE__ */ m(
  ms,
  {
    customVariant: t,
    size: r,
    className: o,
    sx: a,
    ...s,
    children: [
      n && /* @__PURE__ */ i(gs, { children: n }),
      e
    ]
  }
), ys = (e) => /* @__PURE__ */ i(
  F,
  {
    variant: "h1",
    sx: {
      ...re.display.giant,
      ...e.sx
    },
    ...e
  }
), En = (e) => /* @__PURE__ */ i(
  F,
  {
    variant: "h1",
    sx: {
      ...re.display.large,
      ...e.sx
    },
    ...e
  }
), ha = (e) => /* @__PURE__ */ i(
  F,
  {
    variant: "h2",
    sx: {
      ...re.display.medium,
      ...e.sx
    },
    ...e
  }
), Kt = (e) => /* @__PURE__ */ i(
  F,
  {
    variant: "h3",
    sx: {
      ...re.display.small,
      ...e.sx
    },
    ...e
  }
), Ae = (e) => /* @__PURE__ */ i(
  F,
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
), ff = (e) => /* @__PURE__ */ i(
  F,
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
), hf = (e) => /* @__PURE__ */ i(
  F,
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
), Re = (e) => /* @__PURE__ */ i(
  F,
  {
    variant: "body1",
    sx: {
      ...re.body.regular,
      ...e.sx
    },
    ...e
  }
), de = (e) => /* @__PURE__ */ i(
  F,
  {
    variant: "body2",
    sx: {
      ...re.body.small,
      ...e.sx
    },
    ...e
  }
), Ke = (e) => {
  const t = Se();
  return /* @__PURE__ */ i(
    F,
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
}, mf = ({ variant: e = "body1", ...t }) => /* @__PURE__ */ i(F, { variant: e, ...t }), xs = "/assets/images/logo-v2-negro.png", bs = "/assets/images/logo-v2-crema.png", Rt = ({
  variant: e = "desktop",
  light: t = !1,
  onClick: r,
  sx: n,
  ...o
}) => /* @__PURE__ */ i(
  u,
  {
    component: "img",
    src: t ? bs : xs,
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
), vs = (e, t = {}) => {
  const [r, n] = H(!1), [o, a] = H(!1), [s, l] = H(!1), [c, d] = H(""), p = qt(null), { threshold: f = 0.1, rootMargin: x = "50px", priority: h = !1 } = t;
  return me(() => {
    if (d(e), h) {
      a(!0);
      return;
    }
    const b = new IntersectionObserver(
      ([y]) => {
        y.isIntersecting && (a(!0), b.disconnect());
      },
      {
        threshold: f,
        rootMargin: x
      }
    );
    return p.current && b.observe(p.current), () => {
      b.disconnect();
    };
  }, [f, x, h, e]), me(() => {
    if (!o) return;
    const b = new Image();
    b.onload = () => {
      n(!0), l(!1);
    }, b.onerror = () => {
      l(!0), n(!1);
    }, b.src = c;
  }, [c, o]), {
    imgRef: p,
    isLoaded: r,
    isInView: o,
    error: s,
    imageSrc: c
  };
}, cn = (e = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: e
  });
};
function yt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const tt = "$$material";
function Ss(e) {
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
var ws = {
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
function Cs(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ks = /[A-Z]|^ms/g, Es = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ma = function(t) {
  return t.charCodeAt(1) === 45;
}, po = function(t) {
  return t != null && typeof t != "boolean";
}, Ur = /* @__PURE__ */ Cs(function(e) {
  return ma(e) ? e : e.replace(ks, "-$&").toLowerCase();
}), fo = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Es, function(n, o, a) {
          return ot = {
            name: o,
            styles: a,
            next: ot
          }, o;
        });
  }
  return ws[t] !== 1 && !ma(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function dr(e, t, r) {
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
        return ot = {
          name: o.name,
          styles: o.styles,
          next: ot
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            ot = {
              name: s.name,
              styles: s.styles,
              next: ot
            }, s = s.next;
        var l = a.styles + ";";
        return l;
      }
      return Ts(e, t, r);
    }
  }
  var c = r;
  return c;
}
function Ts(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += dr(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var l = s;
        po(l) && (n += Ur(a) + ":" + fo(a, l) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var c = 0; c < s.length; c++)
          po(s[c]) && (n += Ur(a) + ":" + fo(a, s[c]) + ";");
      else {
        var d = dr(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Ur(a) + ":" + d + ";";
            break;
          }
          default:
            n += a + "{" + d + "}";
        }
      }
    }
  return n;
}
var ho = /label:\s*([^\s;{]+)\s*(;|$)/g, ot;
function Is(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  ot = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += dr(r, t, a);
  else {
    var s = a;
    o += s[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += dr(r, t, e[l]), n) {
      var c = a;
      o += c[l];
    }
  ho.lastIndex = 0;
  for (var d = "", p; (p = ho.exec(o)) !== null; )
    d += "-" + p[1];
  var f = Ss(o) + d;
  return {
    name: f,
    styles: o,
    next: ot
  };
}
function Rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var dn = { exports: {} }, er = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mo;
function $s() {
  if (mo) return oe;
  mo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
  function T(E) {
    if (typeof E == "object" && E !== null) {
      var R = E.$$typeof;
      switch (R) {
        case t:
          switch (E = E.type, E) {
            case c:
            case d:
            case n:
            case a:
            case o:
            case f:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case l:
                case p:
                case b:
                case h:
                case s:
                  return E;
                default:
                  return R;
              }
          }
        case r:
          return R;
      }
    }
  }
  function _(E) {
    return T(E) === d;
  }
  return oe.AsyncMode = c, oe.ConcurrentMode = d, oe.ContextConsumer = l, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = p, oe.Fragment = n, oe.Lazy = b, oe.Memo = h, oe.Portal = r, oe.Profiler = a, oe.StrictMode = o, oe.Suspense = f, oe.isAsyncMode = function(E) {
    return _(E) || T(E) === c;
  }, oe.isConcurrentMode = _, oe.isContextConsumer = function(E) {
    return T(E) === l;
  }, oe.isContextProvider = function(E) {
    return T(E) === s;
  }, oe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, oe.isForwardRef = function(E) {
    return T(E) === p;
  }, oe.isFragment = function(E) {
    return T(E) === n;
  }, oe.isLazy = function(E) {
    return T(E) === b;
  }, oe.isMemo = function(E) {
    return T(E) === h;
  }, oe.isPortal = function(E) {
    return T(E) === r;
  }, oe.isProfiler = function(E) {
    return T(E) === a;
  }, oe.isStrictMode = function(E) {
    return T(E) === o;
  }, oe.isSuspense = function(E) {
    return T(E) === f;
  }, oe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === n || E === d || E === a || E === o || E === f || E === x || typeof E == "object" && E !== null && (E.$$typeof === b || E.$$typeof === h || E.$$typeof === s || E.$$typeof === l || E.$$typeof === p || E.$$typeof === S || E.$$typeof === C || E.$$typeof === I || E.$$typeof === y);
  }, oe.typeOf = T, oe;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function As() {
  return go || (go = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, p = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, x = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, I = e ? Symbol.for("react.scope") : 60119;
    function T(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === d || M === a || M === o || M === f || M === x || typeof M == "object" && M !== null && (M.$$typeof === b || M.$$typeof === h || M.$$typeof === s || M.$$typeof === l || M.$$typeof === p || M.$$typeof === S || M.$$typeof === C || M.$$typeof === I || M.$$typeof === y);
    }
    function _(M) {
      if (typeof M == "object" && M !== null) {
        var Me = M.$$typeof;
        switch (Me) {
          case t:
            var dt = M.type;
            switch (dt) {
              case c:
              case d:
              case n:
              case a:
              case o:
              case f:
                return dt;
              default:
                var Pt = dt && dt.$$typeof;
                switch (Pt) {
                  case l:
                  case p:
                  case b:
                  case h:
                  case s:
                    return Pt;
                  default:
                    return Me;
                }
            }
          case r:
            return Me;
        }
      }
    }
    var E = c, R = d, j = l, D = s, N = t, U = p, W = n, g = b, P = h, O = r, L = a, q = o, pe = f, Ce = !1;
    function He(M) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), $(M) || _(M) === c;
    }
    function $(M) {
      return _(M) === d;
    }
    function z(M) {
      return _(M) === l;
    }
    function B(M) {
      return _(M) === s;
    }
    function V(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function G(M) {
      return _(M) === p;
    }
    function X(M) {
      return _(M) === n;
    }
    function K(M) {
      return _(M) === b;
    }
    function Y(M) {
      return _(M) === h;
    }
    function J(M) {
      return _(M) === r;
    }
    function te(M) {
      return _(M) === a;
    }
    function Z(M) {
      return _(M) === o;
    }
    function Ee(M) {
      return _(M) === f;
    }
    ae.AsyncMode = E, ae.ConcurrentMode = R, ae.ContextConsumer = j, ae.ContextProvider = D, ae.Element = N, ae.ForwardRef = U, ae.Fragment = W, ae.Lazy = g, ae.Memo = P, ae.Portal = O, ae.Profiler = L, ae.StrictMode = q, ae.Suspense = pe, ae.isAsyncMode = He, ae.isConcurrentMode = $, ae.isContextConsumer = z, ae.isContextProvider = B, ae.isElement = V, ae.isForwardRef = G, ae.isFragment = X, ae.isLazy = K, ae.isMemo = Y, ae.isPortal = J, ae.isProfiler = te, ae.isStrictMode = Z, ae.isSuspense = Ee, ae.isValidElementType = T, ae.typeOf = _;
  }()), ae;
}
var yo;
function ga() {
  return yo || (yo = 1, process.env.NODE_ENV === "production" ? er.exports = $s() : er.exports = As()), er.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Gr, xo;
function _s() {
  if (xo) return Gr;
  xo = 1;
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
  return Gr = o() ? Object.assign : function(a, s) {
    for (var l, c = n(a), d, p = 1; p < arguments.length; p++) {
      l = Object(arguments[p]);
      for (var f in l)
        t.call(l, f) && (c[f] = l[f]);
      if (e) {
        d = e(l);
        for (var x = 0; x < d.length; x++)
          r.call(l, d[x]) && (c[d[x]] = l[d[x]]);
      }
    }
    return c;
  }, Gr;
}
var Yr, bo;
function Tn() {
  if (bo) return Yr;
  bo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Yr = e, Yr;
}
var qr, vo;
function ya() {
  return vo || (vo = 1, qr = Function.call.bind(Object.prototype.hasOwnProperty)), qr;
}
var Kr, So;
function Os() {
  if (So) return Kr;
  So = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Tn(), r = {}, n = ya();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, l, c, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in a)
        if (n(a, p)) {
          var f;
          try {
            if (typeof a[p] != "function") {
              var x = Error(
                (c || "React class") + ": " + l + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw x.name = "Invariant Violation", x;
            }
            f = a[p](s, p, c, l, null, t);
          } catch (b) {
            f = b;
          }
          if (f && !(f instanceof Error) && e(
            (c || "React class") + ": type specification of " + l + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof f + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), f instanceof Error && !(f.message in r)) {
            r[f.message] = !0;
            var h = d ? d() : "";
            e(
              "Failed " + l + " type: " + f.message + (h ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Kr = o, Kr;
}
var Xr, wo;
function Ms() {
  if (wo) return Xr;
  wo = 1;
  var e = ga(), t = _s(), r = Tn(), n = ya(), o = Os(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
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
  return Xr = function(l, c) {
    var d = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function f($) {
      var z = $ && (d && $[d] || $[p]);
      if (typeof z == "function")
        return z;
    }
    var x = "<<anonymous>>", h = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: I(),
      arrayOf: T,
      element: _(),
      elementType: E(),
      instanceOf: R,
      node: U(),
      objectOf: D,
      oneOf: j,
      oneOfType: N,
      shape: g,
      exact: P
    };
    function b($, z) {
      return $ === z ? $ !== 0 || 1 / $ === 1 / z : $ !== $ && z !== z;
    }
    function y($, z) {
      this.message = $, this.data = z && typeof z == "object" ? z : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function S($) {
      if (process.env.NODE_ENV !== "production")
        var z = {}, B = 0;
      function V(X, K, Y, J, te, Z, Ee) {
        if (J = J || x, Z = Z || Y, Ee !== r) {
          if (c) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Me = J + ":" + Y;
            !z[Me] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), z[Me] = !0, B++);
          }
        }
        return K[Y] == null ? X ? K[Y] === null ? new y("The " + te + " `" + Z + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new y("The " + te + " `" + Z + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : $(K, Y, J, te, Z);
      }
      var G = V.bind(null, !1);
      return G.isRequired = V.bind(null, !0), G;
    }
    function C($) {
      function z(B, V, G, X, K, Y) {
        var J = B[V], te = q(J);
        if (te !== $) {
          var Z = pe(J);
          return new y(
            "Invalid " + X + " `" + K + "` of type " + ("`" + Z + "` supplied to `" + G + "`, expected ") + ("`" + $ + "`."),
            { expectedType: $ }
          );
        }
        return null;
      }
      return S(z);
    }
    function I() {
      return S(s);
    }
    function T($) {
      function z(B, V, G, X, K) {
        if (typeof $ != "function")
          return new y("Property `" + K + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var Y = B[V];
        if (!Array.isArray(Y)) {
          var J = q(Y);
          return new y("Invalid " + X + " `" + K + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected an array."));
        }
        for (var te = 0; te < Y.length; te++) {
          var Z = $(Y, te, G, X, K + "[" + te + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return S(z);
    }
    function _() {
      function $(z, B, V, G, X) {
        var K = z[B];
        if (!l(K)) {
          var Y = q(K);
          return new y("Invalid " + G + " `" + X + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S($);
    }
    function E() {
      function $(z, B, V, G, X) {
        var K = z[B];
        if (!e.isValidElementType(K)) {
          var Y = q(K);
          return new y("Invalid " + G + " `" + X + "` of type " + ("`" + Y + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S($);
    }
    function R($) {
      function z(B, V, G, X, K) {
        if (!(B[V] instanceof $)) {
          var Y = $.name || x, J = He(B[V]);
          return new y("Invalid " + X + " `" + K + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected ") + ("instance of `" + Y + "`."));
        }
        return null;
      }
      return S(z);
    }
    function j($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function z(B, V, G, X, K) {
        for (var Y = B[V], J = 0; J < $.length; J++)
          if (b(Y, $[J]))
            return null;
        var te = JSON.stringify($, function(Ee, M) {
          var Me = pe(M);
          return Me === "symbol" ? String(M) : M;
        });
        return new y("Invalid " + X + " `" + K + "` of value `" + String(Y) + "` " + ("supplied to `" + G + "`, expected one of " + te + "."));
      }
      return S(z);
    }
    function D($) {
      function z(B, V, G, X, K) {
        if (typeof $ != "function")
          return new y("Property `" + K + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var Y = B[V], J = q(Y);
        if (J !== "object")
          return new y("Invalid " + X + " `" + K + "` of type " + ("`" + J + "` supplied to `" + G + "`, expected an object."));
        for (var te in Y)
          if (n(Y, te)) {
            var Z = $(Y, te, G, X, K + "." + te, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return S(z);
    }
    function N($) {
      if (!Array.isArray($))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var z = 0; z < $.length; z++) {
        var B = $[z];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ce(B) + " at index " + z + "."
          ), s;
      }
      function V(G, X, K, Y, J) {
        for (var te = [], Z = 0; Z < $.length; Z++) {
          var Ee = $[Z], M = Ee(G, X, K, Y, J, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && te.push(M.data.expectedType);
        }
        var Me = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new y("Invalid " + Y + " `" + J + "` supplied to " + ("`" + K + "`" + Me + "."));
      }
      return S(V);
    }
    function U() {
      function $(z, B, V, G, X) {
        return O(z[B]) ? null : new y("Invalid " + G + " `" + X + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return S($);
    }
    function W($, z, B, V, G) {
      return new y(
        ($ || "React class") + ": " + z + " type `" + B + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function g($) {
      function z(B, V, G, X, K) {
        var Y = B[V], J = q(Y);
        if (J !== "object")
          return new y("Invalid " + X + " `" + K + "` of type `" + J + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var te in $) {
          var Z = $[te];
          if (typeof Z != "function")
            return W(G, X, K, te, pe(Z));
          var Ee = Z(Y, te, G, X, K + "." + te, r);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return S(z);
    }
    function P($) {
      function z(B, V, G, X, K) {
        var Y = B[V], J = q(Y);
        if (J !== "object")
          return new y("Invalid " + X + " `" + K + "` of type `" + J + "` " + ("supplied to `" + G + "`, expected `object`."));
        var te = t({}, B[V], $);
        for (var Z in te) {
          var Ee = $[Z];
          if (n($, Z) && typeof Ee != "function")
            return W(G, X, K, Z, pe(Ee));
          if (!Ee)
            return new y(
              "Invalid " + X + " `" + K + "` key `" + Z + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(B[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys($), null, "  ")
            );
          var M = Ee(Y, Z, G, X, K + "." + Z, r);
          if (M)
            return M;
        }
        return null;
      }
      return S(z);
    }
    function O($) {
      switch (typeof $) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !$;
        case "object":
          if (Array.isArray($))
            return $.every(O);
          if ($ === null || l($))
            return !0;
          var z = f($);
          if (z) {
            var B = z.call($), V;
            if (z !== $.entries) {
              for (; !(V = B.next()).done; )
                if (!O(V.value))
                  return !1;
            } else
              for (; !(V = B.next()).done; ) {
                var G = V.value;
                if (G && !O(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function L($, z) {
      return $ === "symbol" ? !0 : z ? z["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && z instanceof Symbol : !1;
    }
    function q($) {
      var z = typeof $;
      return Array.isArray($) ? "array" : $ instanceof RegExp ? "object" : L(z, $) ? "symbol" : z;
    }
    function pe($) {
      if (typeof $ > "u" || $ === null)
        return "" + $;
      var z = q($);
      if (z === "object") {
        if ($ instanceof Date)
          return "date";
        if ($ instanceof RegExp)
          return "regexp";
      }
      return z;
    }
    function Ce($) {
      var z = pe($);
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
    function He($) {
      return !$.constructor || !$.constructor.name ? x : $.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Xr;
}
var Jr, Co;
function Ps() {
  if (Co) return Jr;
  Co = 1;
  var e = Tn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Jr = function() {
    function n(s, l, c, d, p, f) {
      if (f !== e) {
        var x = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw x.name = "Invariant Violation", x;
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
  }, Jr;
}
if (process.env.NODE_ENV !== "production") {
  var zs = ga(), Ds = !0;
  dn.exports = Ms()(zs.isElement, Ds);
} else
  dn.exports = Ps()();
var Fs = dn.exports;
const A = /* @__PURE__ */ Rs(Fs);
function Ns(e) {
  return e == null || Object.keys(e).length === 0;
}
function In(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ i(Ki, {
    styles: typeof t == "function" ? (o) => t(Ns(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (In.propTypes = {
  defaultTheme: A.object,
  styles: A.oneOfType([A.array, A.string, A.object, A.func])
});
/**
 * @mui/styled-engine v9.0.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ls(e, t) {
  const r = Xi(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Ws(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const ko = [];
function it(e) {
  return ko[0] = e, Is(ko);
}
var un = { exports: {} }, le = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eo;
function Bs() {
  if (Eo) return le;
  Eo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), x = Symbol.for("react.view_transition"), h = Symbol.for("react.client.reference");
  function b(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case e:
          switch (y = y.type, y) {
            case r:
            case o:
            case n:
            case c:
            case d:
            case x:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case l:
                case f:
                case p:
                  return y;
                case a:
                  return y;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return le.ContextConsumer = a, le.ContextProvider = s, le.Element = e, le.ForwardRef = l, le.Fragment = r, le.Lazy = f, le.Memo = p, le.Portal = t, le.Profiler = o, le.StrictMode = n, le.Suspense = c, le.SuspenseList = d, le.isContextConsumer = function(y) {
    return b(y) === a;
  }, le.isContextProvider = function(y) {
    return b(y) === s;
  }, le.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, le.isForwardRef = function(y) {
    return b(y) === l;
  }, le.isFragment = function(y) {
    return b(y) === r;
  }, le.isLazy = function(y) {
    return b(y) === f;
  }, le.isMemo = function(y) {
    return b(y) === p;
  }, le.isPortal = function(y) {
    return b(y) === t;
  }, le.isProfiler = function(y) {
    return b(y) === o;
  }, le.isStrictMode = function(y) {
    return b(y) === n;
  }, le.isSuspense = function(y) {
    return b(y) === c;
  }, le.isSuspenseList = function(y) {
    return b(y) === d;
  }, le.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === o || y === n || y === c || y === d || typeof y == "object" && y !== null && (y.$$typeof === f || y.$$typeof === p || y.$$typeof === s || y.$$typeof === a || y.$$typeof === l || y.$$typeof === h || y.getModuleId !== void 0);
  }, le.typeOf = b, le;
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
var To;
function js() {
  return To || (To = 1, process.env.NODE_ENV !== "production" && function() {
    function e(y) {
      if (typeof y == "object" && y !== null) {
        var S = y.$$typeof;
        switch (S) {
          case t:
            switch (y = y.type, y) {
              case n:
              case a:
              case o:
              case d:
              case p:
              case h:
                return y;
              default:
                switch (y = y && y.$$typeof, y) {
                  case l:
                  case c:
                  case x:
                  case f:
                    return y;
                  case s:
                    return y;
                  default:
                    return S;
                }
            }
          case r:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), h = Symbol.for("react.view_transition"), b = Symbol.for("react.client.reference");
    ce.ContextConsumer = s, ce.ContextProvider = l, ce.Element = t, ce.ForwardRef = c, ce.Fragment = n, ce.Lazy = x, ce.Memo = f, ce.Portal = r, ce.Profiler = a, ce.StrictMode = o, ce.Suspense = d, ce.SuspenseList = p, ce.isContextConsumer = function(y) {
      return e(y) === s;
    }, ce.isContextProvider = function(y) {
      return e(y) === l;
    }, ce.isElement = function(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }, ce.isForwardRef = function(y) {
      return e(y) === c;
    }, ce.isFragment = function(y) {
      return e(y) === n;
    }, ce.isLazy = function(y) {
      return e(y) === x;
    }, ce.isMemo = function(y) {
      return e(y) === f;
    }, ce.isPortal = function(y) {
      return e(y) === r;
    }, ce.isProfiler = function(y) {
      return e(y) === a;
    }, ce.isStrictMode = function(y) {
      return e(y) === o;
    }, ce.isSuspense = function(y) {
      return e(y) === d;
    }, ce.isSuspenseList = function(y) {
      return e(y) === p;
    }, ce.isValidElementType = function(y) {
      return typeof y == "string" || typeof y == "function" || y === n || y === a || y === o || y === d || y === p || typeof y == "object" && y !== null && (y.$$typeof === x || y.$$typeof === f || y.$$typeof === l || y.$$typeof === s || y.$$typeof === c || y.$$typeof === b || y.getModuleId !== void 0);
    }, ce.typeOf = e;
  }()), ce;
}
process.env.NODE_ENV === "production" ? un.exports = Bs() : un.exports = js();
var ur = un.exports;
function Ze(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function xa(e) {
  if (/* @__PURE__ */ w.isValidElement(e) || ur.isValidElementType(e) || !Ze(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = xa(e[r]);
  }), t;
}
function Fe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ze(e) && Ze(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ w.isValidElement(t[o]) || ur.isValidElementType(t[o]) ? n[o] = t[o] : Ze(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ze(e[o]) ? n[o] = Fe(e[o], t[o], r) : r.clone ? n[o] = Ze(t[o]) ? xa(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Vs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ba(e) {
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
  } = e, a = Vs(t), s = Object.keys(a);
  function l(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function c(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, b) {
    const y = s.indexOf(b);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : b) - n / 100}${r})`;
  }
  function p(h) {
    return s.indexOf(h) + 1 < s.length ? d(h, s[s.indexOf(h) + 1]) : l(h);
  }
  function f(h) {
    const b = s.indexOf(h);
    return b === 0 ? l(s[1]) : b === s.length - 1 ? c(s[b]) : d(h, s[s.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  const x = [];
  for (let h = 0; h < s.length; h += 1)
    x.push(l(s[h]));
  return {
    keys: s,
    values: a,
    up: l,
    down: c,
    between: d,
    only: p,
    not: f,
    unit: r,
    internal_mediaKeys: x,
    ...o
  };
}
const Io = /min-width:\s*([0-9.]+)/;
function Ro(e, t) {
  if (!e.containerQueries || !Hs(t))
    return t;
  const r = [];
  for (const o in t)
    o.startsWith("@container") && r.push(o);
  r.sort((o, a) => {
    var s, l;
    return +(((s = o.match(Io)) == null ? void 0 : s[1]) || 0) - +(((l = a.match(Io)) == null ? void 0 : l[1]) || 0);
  });
  const n = t;
  for (let o = 0; o < r.length; o += 1) {
    const a = r[o], s = n[a];
    delete n[a], n[a] = s;
  }
  return n;
}
function Hs(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function va(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Us(e, t) {
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
function Gs(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function r(a, s) {
    a.up = (...l) => t(e.breakpoints.up(...l), s), a.down = (...l) => t(e.breakpoints.down(...l), s), a.between = (...l) => t(e.breakpoints.between(...l), s), a.only = (...l) => t(e.breakpoints.only(...l), s), a.not = (...l) => {
      const c = t(e.breakpoints.not(...l), s);
      return c.includes("not all and") ? c.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : c;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Ys = {
  borderRadius: 4
}, ct = process.env.NODE_ENV !== "production" ? A.oneOfType([A.number, A.string, A.object, A.array]) : {};
function Sa(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Et(e, t) {
  const r = Array.isArray(t), n = Array.isArray(e);
  return Qs(t) ? t : Zs(e) ? $t(t) : r && n ? Xs(e, t) : r !== n ? $t(t) : el(e, t);
}
function qs(e) {
  let t = 0;
  const r = e.length, n = new Array(r);
  for (t = 0; t < r; t += 1)
    n[t] = $t(e[t]);
  return n;
}
function Ks(e) {
  const t = {};
  for (const r in e)
    t[r] = $t(e[r]);
  return t;
}
function Xs(e, t) {
  const r = e.length;
  for (let n = 0; n < t.length; n += 1)
    e[r + n] = $t(t[n]);
  return e;
}
function Js(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Qs(e) {
  return typeof e != "object" || e === null;
}
function Zs(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function $t(e) {
  return Js(e) ? Array.isArray(e) ? qs(e) : Ks(e) : e;
}
function el(e, t) {
  for (const r in t)
    r in e ? e[r] = Et(e[r], t[r]) : e[r] = $t(t[r]);
  return e;
}
const tl = {}, Cr = {
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
}, pr = ba({
  values: Cr
}), rl = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : Cr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ot(e, t, r) {
  const n = {};
  return kr(n, e.theme, t, (o, a, s) => {
    const l = r(a, s);
    o ? n[o] = l : Et(n, l);
  });
}
function kr(e, t, r, n) {
  if (t ?? (t = tl), Array.isArray(r)) {
    const o = t.breakpoints ?? pr;
    for (let a = 0; a < r.length; a += 1)
      Qr(e, o.up(o.keys[a]), r[a], void 0, n);
    return e;
  }
  if (typeof r == "object") {
    const o = t.breakpoints ?? pr, a = o.values ?? Cr;
    for (const s in r)
      if (va(o.keys, s)) {
        const l = Us(t.containerQueries ? t : rl, s);
        l && Qr(e, l, r[s], s, n);
      } else if (s in a) {
        const l = o.up(s);
        Qr(e, l, r[s], s, n);
      } else {
        const l = s;
        e[l] = r[l];
      }
    return e;
  }
  return n(void 0, r), e;
}
function Qr(e, t, r, n, o) {
  e[t] ?? (e[t] = {}), o(t, r, n);
}
function nl(e = pr) {
  const {
    internal_mediaKeys: t
  } = e, r = {};
  for (let n = 0; n < t.length; n += 1)
    r[t[n]] = {};
  return r;
}
function $o(e, t) {
  const r = e.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n];
    Sa(t[o]) && delete t[o];
  }
  return t;
}
function ol(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e.keys.length; n += 1)
      if (e.keys[n] in t)
        return !0;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1)
      if (va(e.keys, r[n]))
        return !0;
  }
  return !1;
}
function At(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : yt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function wa(e, t, r, n) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || r : typeof r == "string" ? o = Er(e, r, !0, n) || r : o = r, t && (o = t(o, r, e)), o;
}
function Er(e, t, r = !0, n = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && r) {
    const a = Ao(e.vars, o, n);
    if (a != null)
      return a;
  }
  return Ao(e, o, n);
}
function Ao(e, t, r = void 0) {
  let n, o = e, a = 0;
  for (; a < t.length; ) {
    if (o == null)
      return o;
    n = o, o = o[t[a]], a += 1;
  }
  if (r && o === void 0) {
    const s = t[t.length - 1], l = `${r}${s === "default" ? "" : At(s)}`;
    return n == null ? void 0 : n[l];
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
    const l = s[t], c = s.theme, d = Er(c, n) || {};
    return Ot(s, l, (f) => {
      const x = wa(d, o, f, t);
      return r === !1 ? x : {
        [r]: x
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ct
  } : {}, a.filterProps = [t], a;
}
const al = {
  internal_cache: {}
}, fr = {
  m: "margin",
  p: "padding"
}, _o = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Oo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ht = {};
for (const e in fr)
  Ht[e] = [fr[e]];
for (const e in fr)
  for (const t in _o) {
    const r = fr[e], n = _o[t], o = Array.isArray(n) ? n.map((a) => r + a) : [r + n];
    Ht[e + t] = o;
  }
for (const e in Oo)
  Ht[e] = Ht[Oo[e]];
const Tr = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Ir = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), il = /* @__PURE__ */ new Set([...Tr, ...Ir]);
function Xt(e, t, r, n) {
  const o = Er(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), typeof o == "string" ? o.startsWith("var(") && a === 0 ? 0 : o.startsWith("var(") && a === 1 ? o : `calc(${a} * ${o})` : o * a) : Array.isArray(o) ? (a) => {
    if (typeof a == "string")
      return a;
    const s = Math.abs(a);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const l = o[s];
    return a >= 0 ? l : typeof l == "number" ? -l : typeof l == "string" && l.startsWith("var(") ? `calc(-1 * ${l})` : `-${l}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Rn(e) {
  return Xt(e, "spacing", 8, "spacing");
}
function Jt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Mo = [""];
function Ca(e, t) {
  var a;
  const r = e.theme ?? al, n = ((a = r == null ? void 0 : r.internal_cache) == null ? void 0 : a.unarySpacing) ?? Rn(r), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const l = Ht[s] ?? (Mo[0] = s, Mo), c = e[s];
    kr(o, e.theme, c, (d, p) => {
      const f = d ? o[d] : o;
      for (let x = 0; x < l.length; x += 1)
        f[l[x]] = Jt(n, p);
    });
  }
  return o;
}
function ge(e) {
  return Ca(e, Tr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? Array.from(Tr).reduce((e, t) => (e[t] = ct, e), {}) : {};
ge.filterProps = Tr;
function ye(e) {
  return Ca(e, Ir);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? Array.from(Ir).reduce((e, t) => (e[t] = ct, e), {}) : {};
ye.filterProps = Ir;
process.env.NODE_ENV !== "production" && Array.from(il).reduce((e, t) => (e[t] = ct, e), {});
function ka(e = 8, t = Rn({
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
function Rr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => {
    const o = {};
    for (const a in n)
      t[a] && Et(o, t[a](n));
    return o;
  };
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function De(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Le(e, t) {
  return ve({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const sl = Le("border", De), ll = Le("borderTop", De), cl = Le("borderRight", De), dl = Le("borderBottom", De), ul = Le("borderLeft", De), pl = Le("borderColor"), fl = Le("borderTopColor"), hl = Le("borderRightColor"), ml = Le("borderBottomColor"), gl = Le("borderLeftColor"), yl = Le("outline", De), xl = Le("outlineColor"), $r = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Jt(t, n)
    });
    return Ot(e, e.borderRadius, r);
  }
  return null;
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ct
} : {};
$r.filterProps = ["borderRadius"];
Rr(sl, ll, cl, dl, ul, pl, fl, hl, ml, gl, $r, yl, xl);
const Ar = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Jt(t, n)
    });
    return Ot(e, e.gap, r);
  }
  return null;
};
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ct
} : {};
Ar.filterProps = ["gap"];
const _r = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Jt(t, n)
    });
    return Ot(e, e.columnGap, r);
  }
  return null;
};
_r.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ct
} : {};
_r.filterProps = ["columnGap"];
const Or = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Jt(t, n)
    });
    return Ot(e, e.rowGap, r);
  }
  return null;
};
Or.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ct
} : {};
Or.filterProps = ["rowGap"];
const bl = ve({
  prop: "gridColumn"
}), vl = ve({
  prop: "gridRow"
}), Sl = ve({
  prop: "gridAutoFlow"
}), wl = ve({
  prop: "gridAutoColumns"
}), Cl = ve({
  prop: "gridAutoRows"
}), kl = ve({
  prop: "gridTemplateColumns"
}), El = ve({
  prop: "gridTemplateRows"
}), Tl = ve({
  prop: "gridTemplateAreas"
}), Il = ve({
  prop: "gridArea"
});
Rr(Ar, _r, Or, bl, vl, Sl, wl, Cl, kl, El, Tl, Il);
function Tt(e, t) {
  return t === "grey" ? t : e;
}
const Rl = ve({
  prop: "color",
  themeKey: "palette",
  transform: Tt
}), $l = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Tt
}), Al = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Tt
});
Rr(Rl, $l, Al);
function Pe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _l = ve({
  prop: "width",
  transform: Pe
}), $n = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, s, l, c;
      const n = ((s = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[r]) || Cr[r];
      return n ? ((c = (l = e.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Pe(r)
      };
    };
    return Ot(e, e.maxWidth, t);
  }
  return null;
};
$n.filterProps = ["maxWidth"];
const Ol = ve({
  prop: "minWidth",
  transform: Pe
}), Ml = ve({
  prop: "height",
  transform: Pe
}), Pl = ve({
  prop: "maxHeight",
  transform: Pe
}), zl = ve({
  prop: "minHeight",
  transform: Pe
});
ve({
  prop: "size",
  cssProperty: "width",
  transform: Pe
});
ve({
  prop: "size",
  cssProperty: "height",
  transform: Pe
});
const Dl = ve({
  prop: "boxSizing"
});
Rr(_l, $n, Ol, Ml, Pl, zl, Dl);
const Mr = {
  // borders
  border: {
    themeKey: "borders",
    transform: De
  },
  borderTop: {
    themeKey: "borders",
    transform: De
  },
  borderRight: {
    themeKey: "borders",
    transform: De
  },
  borderBottom: {
    themeKey: "borders",
    transform: De
  },
  borderLeft: {
    themeKey: "borders",
    transform: De
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
    transform: De
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: $r
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Tt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Tt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Tt
  },
  // spacing
  p: {
    style: ye
  },
  pt: {
    style: ye
  },
  pr: {
    style: ye
  },
  pb: {
    style: ye
  },
  pl: {
    style: ye
  },
  px: {
    style: ye
  },
  py: {
    style: ye
  },
  padding: {
    style: ye
  },
  paddingTop: {
    style: ye
  },
  paddingRight: {
    style: ye
  },
  paddingBottom: {
    style: ye
  },
  paddingLeft: {
    style: ye
  },
  paddingX: {
    style: ye
  },
  paddingY: {
    style: ye
  },
  paddingInline: {
    style: ye
  },
  paddingInlineStart: {
    style: ye
  },
  paddingInlineEnd: {
    style: ye
  },
  paddingBlock: {
    style: ye
  },
  paddingBlockStart: {
    style: ye
  },
  paddingBlockEnd: {
    style: ye
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
    style: Ar
  },
  rowGap: {
    style: Or
  },
  columnGap: {
    style: _r
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
    transform: Pe
  },
  maxWidth: {
    style: $n
  },
  minWidth: {
    transform: Pe
  },
  height: {
    transform: Pe
  },
  maxHeight: {
    transform: Pe
  },
  minHeight: {
    transform: Pe
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
}, Fl = {};
function Nl() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: r,
      theme: n = Fl,
      nested: o
    } = t, a = n.unstable_sxConfig ?? Mr, s = {
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
      const p = n.breakpoints ?? pr, f = nl(p);
      for (const x in d) {
        const h = Ll(d[x], n);
        if (h != null) {
          if (typeof h != "object") {
            Po(f, x, h, n, a);
            continue;
          }
          if (a[x]) {
            Po(f, x, h, n, a);
            continue;
          }
          ol(p, h) ? kr(f, t.theme, h, (b, y) => {
            f[b][x] = y;
          }) : (s.sx = h, f[x] = e(s));
        }
      }
      return !o && n.modularCssLayers ? {
        "@layer sx": Ro(n, $o(p, f))
      } : Ro(n, $o(p, f));
    }
    return Array.isArray(r) ? r.map(l) : l(r);
  }
  return e.filterProps = ["sx"], e;
}
const _t = Nl();
function Po(e, t, r, n, o) {
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
    style: l
  } = a;
  if (l) {
    Et(e, l({
      [t]: r,
      theme: n
    }));
    return;
  }
  const {
    cssProperty: c = t,
    transform: d
  } = a, p = Er(n, s);
  kr(e, n, r, (f, x) => {
    const h = wa(p, d, x, t);
    c === !1 ? Et(f ? e[f] : e, h) : f ? e[f][c] = h : e[c] = h;
  });
}
function Ll(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Wl(e, t) {
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
function An(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, l = ba(r), c = ka(o);
  let d = Fe({
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
      ...Ys,
      ...a
    }
  }, s);
  return d = Gs(d), d.applyStyles = Wl, d = t.reduce((p, f) => Fe(p, f), d), d.unstable_sxConfig = {
    ...Mr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(f) {
    return _t({
      sx: f,
      theme: this
    });
  }, d.internal_cache = {}, d;
}
function Bl(e) {
  return Object.keys(e).length === 0;
}
function _n(e = null) {
  const t = w.useContext(pa);
  return !t || Bl(t) ? e : t;
}
const jl = An();
function Ea(e = jl) {
  return _n(e);
}
function Zr(e) {
  const t = it(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function On({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Ea(r), o = t && n[t] || n;
  let a = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => Zr(typeof s == "function" ? s(o) : s)) : a = Zr(a)), /* @__PURE__ */ i(In, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (On.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: A.object,
  /**
   * @ignore
   */
  styles: A.oneOfType([A.array, A.func, A.number, A.object, A.string, A.bool]),
  /**
   * @ignore
   */
  themeId: A.string
});
const zo = (e) => e, Vl = () => {
  let e = zo;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = zo;
    }
  };
}, Hl = Vl();
function Ta(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ta(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ia() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ta(e)) && (n && (n += " "), n += t);
  return n;
}
const Ul = {
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
function Mn(e, t, r = "Mui") {
  const n = Ul[t];
  return n ? `${r}-${n}` : `${Hl.generate(e)}-${t}`;
}
function Gl(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Mn(e, o, r);
  }), n;
}
function Ra(e, t = "") {
  return e.displayName || e.name || t;
}
function Do(e, t, r) {
  const n = Ra(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Yl(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ra(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ur.ForwardRef:
          return Do(e, e.render, "ForwardRef");
        case ur.Memo:
          return Do(e, e.type, "memo");
        default:
          return;
      }
  }
}
function $a(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: it(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = it(o.style));
  }), n;
}
const ql = An();
function en(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function mt(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Kl(e) {
  return e ? (t, r) => r[e] : null;
}
function Xl(e, t, r) {
  e.theme = Sa(e.theme) ? r : e.theme[t] || e.theme;
}
function ar(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => ar(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? mt(n.style, r) : n.style;
    else {
      const {
        variants: a,
        ...s
      } = n;
      o = r ? mt(it(s), r) : s;
    }
    return Aa(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? mt(it(n.style), r) : n.style : r ? mt(it(n), r) : n;
}
function Aa(e, t, r = [], n = void 0) {
  var a;
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
        if (e[c] !== l.props[c] && ((a = e.ownerState) == null ? void 0 : a[c]) !== l.props[c])
          continue e;
    typeof l.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? mt(it(l.style(o)), n) : l.style(o))) : r.push(n ? mt(it(l.style), n) : l.style);
  }
  return r;
}
function Jl(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ql,
    rootShouldForwardProp: n = en,
    slotShouldForwardProp: o = en
  } = e;
  function a(l) {
    Xl(l, t, r);
  }
  return (l, c = {}) => {
    Ws(l, (R) => R.filter((j) => j !== _t));
    const {
      name: d,
      slot: p,
      skipVariantsResolver: f,
      skipSx: x,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: h = Kl(_a(p)),
      ...b
    } = c, y = d && d.startsWith("Mui") || p ? "components" : "custom", S = f !== void 0 ? f : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      p && p !== "Root" && p !== "root" || !1
    ), C = x || !1;
    let I = en;
    p === "Root" || p === "root" ? I = n : p ? I = o : ec(l) && (I = void 0);
    const T = Ls(l, {
      shouldForwardProp: I,
      label: Zl(d, p),
      ...b
    }), _ = (R) => {
      if (R.__emotion_real === R)
        return R;
      if (typeof R == "function")
        return function(D) {
          return ar(D, R, D.theme.modularCssLayers ? y : void 0);
        };
      if (Ze(R)) {
        const j = $a(R);
        return function(N) {
          return j.variants ? ar(N, j, N.theme.modularCssLayers ? y : void 0) : N.theme.modularCssLayers ? mt(j.style, y) : j.style;
        };
      }
      return R;
    }, E = (...R) => {
      const j = [], D = R.map(_), N = [];
      if (j.push(a), d && h && N.push(function(P) {
        var pe, Ce;
        const L = (Ce = (pe = P.theme.components) == null ? void 0 : pe[d]) == null ? void 0 : Ce.styleOverrides;
        if (!L)
          return null;
        const q = {};
        for (const He in L)
          q[He] = ar(P, L[He], P.theme.modularCssLayers ? "theme" : void 0);
        return h(P, q);
      }), d && !S && N.push(function(P) {
        var q, pe;
        const O = P.theme, L = (pe = (q = O == null ? void 0 : O.components) == null ? void 0 : q[d]) == null ? void 0 : pe.variants;
        return L ? Aa(P, L, [], P.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || N.push(_t), Array.isArray(D[0])) {
        const g = D.shift(), P = new Array(j.length).fill(""), O = new Array(N.length).fill("");
        let L;
        L = [...P, ...g, ...O], L.raw = [...P, ...g.raw, ...O], j.unshift(L);
      }
      const U = [...j, ...D, ...N], W = T(...U);
      return l.muiName && (W.muiName = l.muiName), process.env.NODE_ENV !== "production" && (W.displayName = Ql(d, p, l)), W;
    };
    return T.withConfig && (E.withConfig = T.withConfig), E;
  };
}
function Ql(e, t, r) {
  return e ? `${e}${At(t || "")}` : `Styled(${Yl(r)})`;
}
function Zl(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${_a(t || "Root")}`), r;
}
function ec(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function _a(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function pn(e, t, r = !1) {
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
        const s = e[a], l = t[a];
        if (!l)
          n[a] = s || {};
        else if (!s)
          n[a] = l;
        else {
          n[a] = {
            ...l
          };
          for (const c in s)
            if (Object.prototype.hasOwnProperty.call(s, c)) {
              const d = c;
              n[a][d] = pn(s[d], l[d], r);
            }
        }
      } else a === "className" && r && t.className !== void 0 ? n.className = Ia(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : a === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[a] === void 0 && (n[a] = e[a]);
    }
  return n;
}
const Oa = typeof window < "u" ? w.useLayoutEffect : w.useEffect;
function tc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Pn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), tc(e, t, r);
}
function rc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function st(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return st(rc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : yt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : yt(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const nc = (e) => {
  const t = st(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Lt = (e, t) => {
  try {
    return nc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Pr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Ma(e) {
  e = st(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (d, p = (d + r / 30) % 12) => o - a * Math.max(Math.min(p - 3, 9 - p, 1), -1);
  let l = "rgb";
  const c = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (l += "a", c.push(t[3])), Pr({
    type: l,
    values: c
  });
}
function fn(e) {
  e = st(e);
  let t = e.type === "hsl" || e.type === "hsla" ? st(Ma(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Fo(e, t) {
  const r = fn(e), n = fn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Pa(e, t) {
  return e = st(e), t = Pn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Pr(e);
}
function pt(e, t, r) {
  try {
    return Pa(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function zr(e, t) {
  if (e = st(e), t = Pn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Pr(e);
}
function ie(e, t, r) {
  try {
    return zr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Dr(e, t) {
  if (e = st(e), t = Pn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Pr(e);
}
function se(e, t, r) {
  try {
    return Dr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function oc(e, t = 0.15) {
  return fn(e) > 0.5 ? zr(e, t) : Dr(e, t);
}
function tr(e, t, r) {
  try {
    return oc(e, t);
  } catch {
    return e;
  }
}
const ac = "exact-prop: ​";
function za(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [ac]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const zn = /* @__PURE__ */ w.createContext(null);
process.env.NODE_ENV !== "production" && (zn.displayName = "ThemeContext");
function Dn() {
  const e = w.useContext(zn);
  return process.env.NODE_ENV !== "production" && w.useDebugValue(e), e;
}
const ic = typeof Symbol == "function" && Symbol.for, sc = ic ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function lc(e, t) {
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
function hr(e) {
  const {
    children: t,
    theme: r
  } = e, n = Dn();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = w.useMemo(() => {
    const a = n === null ? {
      ...r
    } : lc(n, r);
    return a != null && (a[sc] = n !== null), a;
  }, [r, n]);
  return /* @__PURE__ */ i(zn.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (hr.propTypes = {
  /**
   * Your component tree.
   */
  children: A.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: A.oneOfType([A.object, A.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (hr.propTypes = za(hr.propTypes));
const cc = /* @__PURE__ */ w.createContext();
function Da({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ i(cc.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Da.propTypes = {
  children: A.node,
  value: A.bool
});
const Fa = /* @__PURE__ */ w.createContext(void 0);
function Na({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ i(Fa.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Na.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: A.node,
  /**
   * @ignore
   */
  value: A.object
});
function dc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? pn(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? pn(o, n, t.components.mergeClassNameAndStyle) : n;
}
function uc({
  props: e,
  name: t
}) {
  const r = w.useContext(Fa);
  return dc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let No = 0;
function pc(e) {
  const [t, r] = w.useState(e), n = e || t;
  return w.useEffect(() => {
    t == null && (No += 1, r(`mui-${No}`));
  }, [t]), n;
}
const fc = {
  ...w
}, Lo = fc.useId;
function hc(e) {
  return Lo !== void 0 ? Lo() : pc(e);
}
function mc(e) {
  const t = _n(), r = hc() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Oa(() => {
    var l, c;
    const a = document.querySelector("head");
    if (!a)
      return;
    const s = a.firstChild;
    if (o) {
      if (s && ((l = s.hasAttribute) != null && l.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === r)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", r), d.textContent = o, a.prepend(d);
    } else
      (c = a.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || c.remove();
  }, [o, r]), o ? /* @__PURE__ */ i(On, {
    styles: o
  }) : null;
}
const Wo = {};
function Bo(e, t, r, n = !1) {
  return w.useMemo(() => {
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
function Ut(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = _n(Wo), a = Dn() || Wo;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = Bo(n, o, r), l = Bo(n, a, r, !0), c = (n ? s[n] : s).direction === "rtl", d = mc(s);
  return /* @__PURE__ */ i(hr, {
    theme: l,
    children: /* @__PURE__ */ i(pa.Provider, {
      value: s,
      children: /* @__PURE__ */ i(Da, {
        value: c,
        children: /* @__PURE__ */ m(Na, {
          value: n ? s[n].components : s.components,
          children: [d, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Ut.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Your component tree.
   */
  children: A.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: A.oneOfType([A.func, A.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: A.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ut.propTypes = za(Ut.propTypes));
const jo = {
  theme: void 0
};
function gc(e) {
  let t, r;
  return function(o) {
    let a = t;
    return (a === void 0 || o.theme !== r) && (jo.theme = o.theme, a = $a(e(jo)), t = a, r = o.theme), a;
  };
}
const Fn = "mode", Nn = "color-scheme", yc = "data-color-scheme";
function xc(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Fn,
    colorSchemeStorageKey: a = Nn,
    attribute: s = yc,
    colorSchemeNode: l = "document.documentElement",
    nonce: c
  } = e || {};
  let d = "", p = s;
  if (s === "class" && (p = ".%s"), s === "data" && (p = "[data-%s]"), p.startsWith(".")) {
    const x = p.substring(1);
    d += `${l}.classList.remove('${x}'.replace('%s', light), '${x}'.replace('%s', dark));
      ${l}.classList.add('${x}'.replace('%s', colorScheme));`;
  }
  const f = p.match(/\[([^[\]]+)\]/);
  if (f) {
    const [x, h] = f[1].split("=");
    h || (d += `${l}.removeAttribute('${x}'.replace('%s', light));
      ${l}.removeAttribute('${x}'.replace('%s', dark));`), d += `
      ${l}.setAttribute('${x}'.replace('%s', colorScheme), ${h ? `${h}.replace('%s', colorScheme)` : '""'});`;
  } else p !== ".%s" && (d += `${l}.setAttribute('${p}', colorScheme);`);
  return /* @__PURE__ */ i("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? c : "",
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
    ${d}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function bc() {
}
const vc = ({
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
      return bc;
    const n = (o) => {
      const a = o.newValue;
      o.key === e && r(a);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function tn() {
}
function Vo(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function La(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Sc(e) {
  return La(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function wc(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: a = Fn,
    colorSchemeStorageKey: s = Nn,
    storageWindow: l = typeof window > "u" ? void 0 : window,
    storageManager: c = vc,
    noSsr: d = !1
  } = e, p = o.join(","), f = o.length > 1, x = w.useMemo(() => c == null ? void 0 : c({
    key: a,
    storageWindow: l
  }), [c, a, l]), h = w.useMemo(() => c == null ? void 0 : c({
    key: `${s}-light`,
    storageWindow: l
  }), [c, s, l]), b = w.useMemo(() => c == null ? void 0 : c({
    key: `${s}-dark`,
    storageWindow: l
  }), [c, s, l]), [y, S] = w.useState(() => {
    const D = (x == null ? void 0 : x.get(t)) || t, N = (h == null ? void 0 : h.get(r)) || r, U = (b == null ? void 0 : b.get(n)) || n;
    return {
      mode: D,
      systemMode: Vo(D),
      lightColorScheme: N,
      darkColorScheme: U
    };
  }), [C, I] = w.useState(d || !f);
  w.useEffect(() => {
    I(!0);
  }, []);
  const T = Sc(y), _ = w.useCallback((D) => {
    S((N) => {
      if (D === N.mode)
        return N;
      const U = D ?? t;
      return x == null || x.set(U), {
        ...N,
        mode: U,
        systemMode: Vo(U)
      };
    });
  }, [x, t]), E = w.useCallback((D) => {
    D ? typeof D == "string" ? D && !p.includes(D) ? console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`) : S((N) => {
      const U = {
        ...N
      };
      return La(N, (W) => {
        W === "light" && (h == null || h.set(D), U.lightColorScheme = D), W === "dark" && (b == null || b.set(D), U.darkColorScheme = D);
      }), U;
    }) : S((N) => {
      const U = {
        ...N
      }, W = D.light === null ? r : D.light, g = D.dark === null ? n : D.dark;
      return W && (p.includes(W) ? (U.lightColorScheme = W, h == null || h.set(W)) : console.error(`\`${W}\` does not exist in \`theme.colorSchemes\`.`)), g && (p.includes(g) ? (U.darkColorScheme = g, b == null || b.set(g)) : console.error(`\`${g}\` does not exist in \`theme.colorSchemes\`.`)), U;
    }) : S((N) => (h == null || h.set(r), b == null || b.set(n), {
      ...N,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [p, h, b, r, n]), R = w.useCallback((D) => {
    y.mode === "system" && S((N) => {
      const U = D != null && D.matches ? "dark" : "light";
      return N.systemMode === U ? N : {
        ...N,
        systemMode: U
      };
    });
  }, [y.mode]), j = w.useRef(R);
  return j.current = R, w.useEffect(() => {
    if (typeof window.matchMedia != "function" || !f)
      return;
    const D = (...U) => j.current(...U), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(D), D(N), () => {
      N.removeListener(D);
    };
  }, [f]), w.useEffect(() => {
    if (f) {
      const D = (x == null ? void 0 : x.subscribe((W) => {
        (!W || ["light", "dark", "system"].includes(W)) && _(W || t);
      })) || tn, N = (h == null ? void 0 : h.subscribe((W) => {
        (!W || p.match(W)) && E({
          light: W
        });
      })) || tn, U = (b == null ? void 0 : b.subscribe((W) => {
        (!W || p.match(W)) && E({
          dark: W
        });
      })) || tn;
      return () => {
        D(), N(), U();
      };
    }
  }, [E, _, p, t, l, f, x, h, b]), {
    ...y,
    mode: C ? y.mode : void 0,
    systemMode: C ? y.systemMode : void 0,
    colorScheme: C ? T : void 0,
    setMode: _,
    setColorScheme: E
  };
}
const Cc = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function kc(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Fn,
    colorSchemeStorageKey: o = Nn,
    disableTransitionOnChange: a = !1,
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
  }, d = /* @__PURE__ */ w.createContext(void 0);
  process.env.NODE_ENV !== "production" && (d.displayName = "ColorSchemeContext");
  const p = () => w.useContext(d) || c, f = {}, x = {};
  function h(C) {
    var no, oo, ao, io;
    const {
      children: I,
      theme: T,
      modeStorageKey: _ = n,
      colorSchemeStorageKey: E = o,
      disableTransitionOnChange: R = a,
      storageManager: j,
      storageWindow: D = typeof window > "u" ? void 0 : window,
      documentNode: N = typeof document > "u" ? void 0 : document,
      colorSchemeNode: U = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: W = !1,
      disableStyleSheetGeneration: g = !1,
      defaultMode: P = "system",
      forceThemeRerender: O = !1,
      noSsr: L
    } = C, q = w.useRef(!1), pe = Dn(), Ce = w.useContext(d), He = !!Ce && !W, $ = w.useMemo(() => T || (typeof r == "function" ? r() : r), [T]), z = $[t], B = z || $, {
      colorSchemes: V = f,
      components: G = x,
      cssVarPrefix: X
    } = B, K = Object.keys(V).filter((Te) => !!V[Te]).join(","), Y = w.useMemo(() => K.split(","), [K]), J = typeof s == "string" ? s : s.light, te = typeof s == "string" ? s : s.dark, Z = V[J] && V[te] ? P : ((oo = (no = V[B.defaultColorScheme]) == null ? void 0 : no.palette) == null ? void 0 : oo.mode) || ((ao = B.palette) == null ? void 0 : ao.mode), {
      mode: Ee,
      setMode: M,
      systemMode: Me,
      lightColorScheme: dt,
      darkColorScheme: Pt,
      colorScheme: wi,
      setColorScheme: eo
    } = wc({
      supportedColorSchemes: Y,
      defaultLightColorScheme: J,
      defaultDarkColorScheme: te,
      modeStorageKey: _,
      colorSchemeStorageKey: E,
      defaultMode: Z,
      storageManager: j,
      storageWindow: D,
      noSsr: L
    });
    let Vr = Ee, We = wi;
    He && (Vr = Ce.mode, We = Ce.colorScheme), process.env.NODE_ENV !== "production" && O && !B.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Zt = We || B.defaultColorScheme;
    B.vars && !O && (Zt = B.defaultColorScheme);
    const xt = w.useMemo(() => {
      var ut;
      const Te = ((ut = B.generateThemeVars) == null ? void 0 : ut.call(B)) || B.vars, xe = {
        ...B,
        components: G,
        colorSchemes: V,
        cssVarPrefix: X,
        vars: Te
      };
      if (typeof xe.generateSpacing == "function" && (xe.spacing = xe.generateSpacing()), Zt) {
        const Ue = V[Zt];
        Ue && typeof Ue == "object" && Object.keys(Ue).forEach((Be) => {
          Ue[Be] && typeof Ue[Be] == "object" ? xe[Be] = {
            ...xe[Be],
            ...Ue[Be]
          } : xe[Be] = Ue[Be];
        });
      }
      return l ? l(xe) : xe;
    }, [B, Zt, G, V, X]), zt = B.colorSchemeSelector;
    Oa(() => {
      if (We && U && zt && zt !== "media") {
        const Te = zt;
        let xe = zt;
        if (Te === "class" && (xe = ".%s"), Te === "data" && (xe = "[data-%s]"), Te != null && Te.startsWith("data-") && !Te.includes("%s") && (xe = `[${Te}="%s"]`), xe.startsWith("."))
          U.classList.remove(...Y.map((ut) => xe.substring(1).replace("%s", ut))), U.classList.add(xe.substring(1).replace("%s", We));
        else {
          const ut = xe.replace("%s", We).match(/\[([^\]]+)\]/);
          if (ut) {
            const [Ue, Be] = ut[1].split("=");
            Be || Y.forEach((ki) => {
              U.removeAttribute(Ue.replace(We, ki));
            }), U.setAttribute(Ue, Be ? Be.replace(/"|'/g, "") : "");
          } else
            U.setAttribute(xe, We);
        }
      }
    }, [We, zt, U, Y]), w.useEffect(() => {
      let Te;
      if (R && q.current && N) {
        const xe = N.createElement("style");
        xe.appendChild(N.createTextNode(Cc)), N.head.appendChild(xe), window.getComputedStyle(N.body), Te = setTimeout(() => {
          N.head.removeChild(xe);
        }, 1);
      }
      return () => {
        clearTimeout(Te);
      };
    }, [We, R, N]), w.useEffect(() => (q.current = !0, () => {
      q.current = !1;
    }), []);
    const Ci = w.useMemo(() => ({
      allColorSchemes: Y,
      colorScheme: We,
      darkColorScheme: Pt,
      lightColorScheme: dt,
      mode: Vr,
      setColorScheme: eo,
      setMode: process.env.NODE_ENV === "production" ? M : (Te) => {
        xt.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), M(Te);
      },
      systemMode: Me
    }), [Y, We, Pt, dt, Vr, eo, M, Me, xt.colorSchemeSelector]);
    let to = !0;
    (g || B.cssVariables === !1 || He && (pe == null ? void 0 : pe.cssVarPrefix) === X) && (to = !1);
    const ro = /* @__PURE__ */ m(w.Fragment, {
      children: [/* @__PURE__ */ i(Ut, {
        themeId: z ? t : void 0,
        theme: xt,
        children: I
      }), to && /* @__PURE__ */ i(In, {
        styles: ((io = xt.generateStyleSheets) == null ? void 0 : io.call(xt)) || []
      })]
    });
    return He ? ro : /* @__PURE__ */ i(d.Provider, {
      value: Ci,
      children: ro
    });
  }
  process.env.NODE_ENV !== "production" && (h.propTypes = {
    /**
     * The component tree.
     */
    children: A.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: A.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: A.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: A.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: A.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: A.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: A.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: A.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: A.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: A.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: A.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: A.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: A.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: A.object
  });
  const b = typeof s == "string" ? s : s.light, y = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: h,
    useColorScheme: p,
    getInitColorSchemeScript: (C) => xc({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: b,
      defaultDarkColorScheme: y,
      modeStorageKey: n,
      ...C
    })
  };
}
function Ec(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Ho = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, Tc = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([l, c]) => {
      (!r || r && !r([...a, l])) && c != null && (typeof c == "object" && Object.keys(c).length > 0 ? n(c, [...a, l], Array.isArray(c) ? [...s, l] : s) : t([...a, l], c, s));
    });
  }
  n(e);
}, Ic = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function rn(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return Tc(
    e,
    (l, c, d) => {
      if ((typeof c == "string" || typeof c == "number") && (!n || !n(l, c))) {
        const p = `--${r ? `${r}-` : ""}${l.join("-")}`, f = Ic(l, c);
        Object.assign(o, {
          [p]: f
        }), Ho(a, l, `var(${p})`, d), Ho(s, l, `var(${p}, ${f})`, d);
      }
    },
    (l) => l[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: a,
    varsWithDefaults: s
  };
}
function Rc(e, t = {}) {
  const {
    getSelector: r = C,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: l,
    defaultColorScheme: c = "light",
    ...d
  } = e, {
    vars: p,
    css: f,
    varsWithDefaults: x
  } = rn(d, t);
  let h = x;
  const b = {}, {
    [c]: y,
    ...S
  } = s;
  if (Object.entries(S || {}).forEach(([_, E]) => {
    const {
      vars: R,
      css: j,
      varsWithDefaults: D
    } = rn(E, t);
    h = Fe(h, D), b[_] = {
      css: j,
      vars: R
    };
  }), y) {
    const {
      css: _,
      vars: E,
      varsWithDefaults: R
    } = rn(y, t);
    h = Fe(h, R), b[c] = {
      css: _,
      vars: E
    };
  }
  function C(_, E) {
    var j, D;
    let R = o;
    if (o === "class" && (R = ".%s"), o === "data" && (R = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (R = `[${o}="%s"]`), _) {
      if (R === "media")
        return e.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((D = (j = s[_]) == null ? void 0 : j.palette) == null ? void 0 : D.mode) || _})`]: {
            ":root": E
          }
        };
      if (R)
        return e.defaultColorScheme === _ ? `:root, ${R.replace("%s", String(_))}` : R.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let _ = {
        ...p
      };
      return Object.entries(b).forEach(([, {
        vars: E
      }]) => {
        _ = Fe(_, E);
      }), _;
    },
    generateStyleSheets: () => {
      var N, U;
      const _ = [], E = e.defaultColorScheme || "light";
      function R(W, g) {
        Object.keys(g).length && _.push(typeof W == "string" ? {
          [W]: {
            ...g
          }
        } : W);
      }
      R(r(void 0, {
        ...f
      }), f);
      const {
        [E]: j,
        ...D
      } = b;
      if (j) {
        const {
          css: W
        } = j, g = (U = (N = s[E]) == null ? void 0 : N.palette) == null ? void 0 : U.mode, P = !n && g ? {
          colorScheme: g,
          ...W
        } : {
          ...W
        };
        R(r(E, {
          ...P
        }), P);
      }
      return Object.entries(D).forEach(([W, {
        css: g
      }]) => {
        var L, q;
        const P = (q = (L = s[W]) == null ? void 0 : L.palette) == null ? void 0 : q.mode, O = !n && P ? {
          colorScheme: P,
          ...g
        } : {
          ...g
        };
        R(r(W, {
          ...O
        }), O);
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
function $c(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function Ac(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const a = e[o];
    let s = "", l = !0;
    for (let c = 0; c < a.length; c += 1) {
      const d = a[c];
      d && (s += (l === !0 ? "" : " ") + t(d), l = !1, r && r[d] && (s += " " + r[d]));
    }
    n[o] = s;
  }
  return n;
}
const Gt = {
  black: "#000",
  white: "#fff"
}, _c = {
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
}, bt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, vt = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Dt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, St = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, wt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ct = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function Wa() {
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
      paper: Gt.white,
      default: Gt.white
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
const Ba = Wa();
function ja() {
  return {
    text: {
      primary: Gt.white,
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
      active: Gt.white,
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
const hn = ja();
function Uo(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Dr(e.main, o) : t === "dark" && (e.dark = zr(e.main, a)));
}
function Go(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Oc(e = "light") {
  return e === "dark" ? {
    main: St[200],
    light: St[50],
    dark: St[400]
  } : {
    main: St[700],
    light: St[400],
    dark: St[800]
  };
}
function Mc(e = "light") {
  return e === "dark" ? {
    main: bt[200],
    light: bt[50],
    dark: bt[400]
  } : {
    main: bt[500],
    light: bt[300],
    dark: bt[700]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: vt[500],
    light: vt[300],
    dark: vt[700]
  } : {
    main: vt[700],
    light: vt[400],
    dark: vt[800]
  };
}
function zc(e = "light") {
  return e === "dark" ? {
    main: wt[400],
    light: wt[300],
    dark: wt[700]
  } : {
    main: wt[700],
    light: wt[500],
    dark: wt[900]
  };
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: Ct[400],
    light: Ct[300],
    dark: Ct[700]
  } : {
    main: Ct[800],
    light: Ct[500],
    dark: Ct[900]
  };
}
function Fc(e = "light") {
  return e === "dark" ? {
    main: Dt[400],
    light: Dt[300],
    dark: Dt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Dt[500],
    dark: Dt[900]
  };
}
function Nc(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function Ln(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Oc(t), l = e.secondary || Mc(t), c = e.error || Pc(t), d = e.info || zc(t), p = e.success || Dc(t), f = e.warning || Fc(t);
  function x(S) {
    if (o)
      return Nc(S);
    const C = Fo(S, hn.text.primary) >= r ? hn.text.primary : Ba.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const I = Fo(S, C);
      I < 3 && console.error([`MUI: The contrast ratio of ${I}:1 for ${C} on ${S}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const h = ({
    color: S,
    name: C,
    mainShade: I = 500,
    lightShade: T = 300,
    darkShade: _ = 700
  }) => {
    if (S = {
      ...S
    }, !S.main && S[I] && (S.main = S[I]), !S.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${I}\` property.` : yt(11, C ? ` (${C})` : "", I));
    if (typeof S.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(S.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : yt(12, C ? ` (${C})` : "", JSON.stringify(S.main)));
    return o ? (Go(o, S, "light", T, n), Go(o, S, "dark", _, n)) : (Uo(S, "light", T, n), Uo(S, "dark", _, n)), S.contrastText || (S.contrastText = x(S.main)), S;
  };
  let b;
  return t === "light" ? b = Wa() : t === "dark" && (b = ja()), process.env.NODE_ENV !== "production" && (b || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Fe({
    // A collection of common colors.
    common: {
      ...Gt
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
      color: f,
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
    grey: _c,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: x,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...b
  }, a);
}
function Lc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Wc(e, t) {
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
function Bc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Yo = {
  textTransform: "uppercase"
}, qo = '"Roboto", "Helvetica", "Arial", sans-serif';
function Va(e, t) {
  const {
    fontFamily: r = qo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: l = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: c = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: p,
    ...f
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof c != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const x = n / 14, h = p || ((S) => `${S / c * x}rem`), b = (S, C, I, T, _) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: h(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: I,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === qo ? {
      letterSpacing: `${Bc(T / C)}em`
    } : {},
    ..._,
    ...d
  }), y = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(a, 48, 1.167, 0),
    h4: b(a, 34, 1.235, 0.25),
    h5: b(a, 24, 1.334, 0),
    h6: b(s, 20, 1.6, 0.15),
    subtitle1: b(a, 16, 1.75, 0.15),
    subtitle2: b(s, 14, 1.57, 0.1),
    body1: b(a, 16, 1.5, 0.15),
    body2: b(a, 14, 1.43, 0.15),
    button: b(s, 14, 1.75, 0.4, Yo),
    caption: b(a, 12, 1.66, 0.4),
    overline: b(a, 12, 2.66, 1, Yo),
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
    htmlFontSize: c,
    pxToRem: h,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: l,
    ...y
  }, f, {
    clone: !1
    // No need to clone deep
  });
}
const jc = 0.2, Vc = 0.14, Hc = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${jc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Vc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Hc})`].join(",");
}
const Uc = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Gc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Yc = {
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
function Ko(e) {
  return `${Math.round(e)}ms`;
}
function qc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Kc(e) {
  const t = {
    ...Gc,
    ...e.easing
  }, r = {
    ...Yc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: qc,
    create: (o = ["all"], a = {}) => {
      const {
        duration: s = r.standard,
        easing: l = t.easeInOut,
        delay: c = 0,
        ...d
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const p = (x) => typeof x == "string", f = (x) => !Number.isNaN(parseFloat(x));
        !p(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !f(s) && !p(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), p(l) || console.error('MUI: Argument "easing" must be a string.'), !f(c) && !p(c) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((p) => `${p} ${typeof s == "string" ? s : Ko(s)} ${l} ${typeof c == "string" ? c : Ko(c)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Xc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Jc(e) {
  return Ze(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ha(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, l] = o[a];
      !Jc(l) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete n[s] : Ze(l) && (n[s] = {
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
function Xo(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Qc = (e) => {
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
function Zc(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Pa(t, Qc(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Xo(r)})` : Dr(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Xo(r)})` : zr(t, r);
    }
  });
}
function mn(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: s = {},
    typography: l = {},
    shape: c,
    colorSpace: d,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : yt(22));
  const f = Ln({
    ...a,
    colorSpace: d
  }), x = An(e);
  let h = Fe(x, {
    mixins: Wc(x.breakpoints, n),
    palette: f,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Uc.slice(),
    typography: Va(f, l),
    transitions: Kc(s),
    zIndex: {
      ...Xc
    }
  });
  if (h = Fe(h, p), h = t.reduce((b, y) => Fe(b, y), h), process.env.NODE_ENV !== "production") {
    const b = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (S, C) => {
      let I;
      for (I in S) {
        const T = S[I];
        if (b.includes(I) && Object.keys(T).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = Mn("", I);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${I}\` internal state.`, "You can not override it like this: ", JSON.stringify(S, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: T
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          S[I] = {};
        }
      }
    };
    Object.keys(h.components).forEach((S) => {
      const C = h.components[S].styleOverrides;
      C && S.startsWith("Mui") && y(C, S);
    });
  }
  return h.unstable_sxConfig = {
    ...Mr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return _t({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = Ha, Zc(h), h;
}
function ed(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const td = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = ed(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Ua(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ga(e) {
  return e === "dark" ? td : [];
}
function rd(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = Ln({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Ua(s.mode),
      ...r
    },
    overlays: n || Ga(s.mode),
    ...a
  };
}
function nd(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const od = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], ad = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return od(e.cssVarPrefix).forEach((l) => {
        s[l] = r[l], delete r[l];
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
function id(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function k(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Wt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Ma(e);
}
function Qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Lt(Wt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function sd(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const qe = (e) => {
  try {
    return e();
  } catch {
  }
}, ld = (e = "mui") => Ec(e);
function nn(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = rd({
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
    ...l
  } = mn({
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
      ...Ua(a),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Ga(a)
  }, l;
}
function cd(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: l = nd,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...p
  } = e, f = Object.keys(r)[0], x = n || (r.light && f !== "light" ? "light" : f), h = ld(a), {
    [x]: b,
    light: y,
    dark: S,
    ...C
  } = r, I = {
    ...C
  };
  let T = b;
  if ((x === "dark" && !("dark" in r) || x === "light" && !("light" in r)) && (T = !0), !T)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${x}\` option is either missing or invalid.` : yt(21, x));
  let _;
  s && (_ = "oklch");
  const E = nn(_, I, T, p, x);
  y && !I.light && nn(_, I, y, void 0, "light"), S && !I.dark && nn(_, I, S, void 0, "dark");
  let R = {
    defaultColorScheme: x,
    ...E,
    cssVarPrefix: a,
    colorSchemeSelector: c,
    rootSelector: d,
    getCssVar: h,
    colorSchemes: I,
    font: {
      ...Lc(E.typography),
      ...E.font
    },
    spacing: sd(p.spacing)
  };
  Object.keys(R.colorSchemes).forEach((W) => {
    const g = R.colorSchemes[W].palette, P = (L) => {
      const q = L.split("-"), pe = q[1], Ce = q[2];
      return h(L, g[pe][Ce]);
    };
    g.mode === "light" && (k(g.common, "background", "#fff"), k(g.common, "onBackground", "#000")), g.mode === "dark" && (k(g.common, "background", "#000"), k(g.common, "onBackground", "#fff"));
    function O(L, q, pe) {
      if (_) {
        let Ce;
        return L === pt && (Ce = `transparent ${((1 - pe) * 100).toFixed(0)}%`), L === ie && (Ce = `#000 ${(pe * 100).toFixed(0)}%`), L === se && (Ce = `#fff ${(pe * 100).toFixed(0)}%`), `color-mix(in ${_}, ${q}, ${Ce})`;
      }
      return L(q, pe);
    }
    if (id(g, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), g.mode === "light") {
      k(g.Alert, "errorColor", O(ie, s ? h("palette-error-light") : g.error.light, 0.6)), k(g.Alert, "infoColor", O(ie, s ? h("palette-info-light") : g.info.light, 0.6)), k(g.Alert, "successColor", O(ie, s ? h("palette-success-light") : g.success.light, 0.6)), k(g.Alert, "warningColor", O(ie, s ? h("palette-warning-light") : g.warning.light, 0.6)), k(g.Alert, "errorFilledBg", P("palette-error-main")), k(g.Alert, "infoFilledBg", P("palette-info-main")), k(g.Alert, "successFilledBg", P("palette-success-main")), k(g.Alert, "warningFilledBg", P("palette-warning-main")), k(g.Alert, "errorFilledColor", qe(() => g.getContrastText(g.error.main))), k(g.Alert, "infoFilledColor", qe(() => g.getContrastText(g.info.main))), k(g.Alert, "successFilledColor", qe(() => g.getContrastText(g.success.main))), k(g.Alert, "warningFilledColor", qe(() => g.getContrastText(g.warning.main))), k(g.Alert, "errorStandardBg", O(se, s ? h("palette-error-light") : g.error.light, 0.9)), k(g.Alert, "infoStandardBg", O(se, s ? h("palette-info-light") : g.info.light, 0.9)), k(g.Alert, "successStandardBg", O(se, s ? h("palette-success-light") : g.success.light, 0.9)), k(g.Alert, "warningStandardBg", O(se, s ? h("palette-warning-light") : g.warning.light, 0.9)), k(g.Alert, "errorIconColor", P("palette-error-main")), k(g.Alert, "infoIconColor", P("palette-info-main")), k(g.Alert, "successIconColor", P("palette-success-main")), k(g.Alert, "warningIconColor", P("palette-warning-main")), k(g.AppBar, "defaultBg", P("palette-grey-100")), k(g.Avatar, "defaultBg", P("palette-grey-400")), k(g.Button, "inheritContainedBg", P("palette-grey-300")), k(g.Button, "inheritContainedHoverBg", P("palette-grey-A100")), k(g.Chip, "defaultBorder", P("palette-grey-400")), k(g.Chip, "defaultAvatarColor", P("palette-grey-700")), k(g.Chip, "defaultIconColor", P("palette-grey-700")), k(g.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), k(g.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), k(g.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), k(g.LinearProgress, "primaryBg", O(se, s ? h("palette-primary-main") : g.primary.main, 0.62)), k(g.LinearProgress, "secondaryBg", O(se, s ? h("palette-secondary-main") : g.secondary.main, 0.62)), k(g.LinearProgress, "errorBg", O(se, s ? h("palette-error-main") : g.error.main, 0.62)), k(g.LinearProgress, "infoBg", O(se, s ? h("palette-info-main") : g.info.main, 0.62)), k(g.LinearProgress, "successBg", O(se, s ? h("palette-success-main") : g.success.main, 0.62)), k(g.LinearProgress, "warningBg", O(se, s ? h("palette-warning-light") : g.warning.main, 0.62)), k(g.Skeleton, "bg", _ ? O(pt, s ? h("palette-text-primary") : g.text.primary, 0.11) : `rgba(${P("palette-text-primaryChannel")} / 0.11)`), k(g.Slider, "primaryTrack", O(se, s ? h("palette-primary-main") : g.primary.main, 0.62)), k(g.Slider, "secondaryTrack", O(se, s ? h("palette-secondary-main") : g.secondary.main, 0.62)), k(g.Slider, "errorTrack", O(se, s ? h("palette-error-main") : g.error.main, 0.62)), k(g.Slider, "infoTrack", O(se, s ? h("palette-info-main") : g.info.main, 0.62)), k(g.Slider, "successTrack", O(se, s ? h("palette-success-main") : g.success.main, 0.62)), k(g.Slider, "warningTrack", O(se, s ? h("palette-warning-main") : g.warning.main, 0.62));
      const L = _ ? O(ie, s ? h("palette-background-default") : g.background.default, 0.6825) : tr(g.background.default, 0.8);
      k(g.SnackbarContent, "bg", L), k(g.SnackbarContent, "color", qe(() => _ ? hn.text.primary : g.getContrastText(L))), k(g.SpeedDialAction, "fabHoverBg", tr(g.background.paper, 0.15)), k(g.StepConnector, "border", P("palette-grey-400")), k(g.StepContent, "border", P("palette-grey-400")), k(g.Switch, "defaultColor", P("palette-common-white")), k(g.Switch, "defaultDisabledColor", P("palette-grey-100")), k(g.Switch, "primaryDisabledColor", O(se, s ? h("palette-primary-main") : g.primary.main, 0.62)), k(g.Switch, "secondaryDisabledColor", O(se, s ? h("palette-secondary-main") : g.secondary.main, 0.62)), k(g.Switch, "errorDisabledColor", O(se, s ? h("palette-error-main") : g.error.main, 0.62)), k(g.Switch, "infoDisabledColor", O(se, s ? h("palette-info-main") : g.info.main, 0.62)), k(g.Switch, "successDisabledColor", O(se, s ? h("palette-success-main") : g.success.main, 0.62)), k(g.Switch, "warningDisabledColor", O(se, s ? h("palette-warning-main") : g.warning.main, 0.62)), k(g.TableCell, "border", O(se, pt(s ? h("palette-divider") : g.divider, 1), 0.88)), k(g.Tooltip, "bg", O(pt, s ? h("palette-grey-700") : g.grey[700], 0.92));
    }
    if (g.mode === "dark") {
      k(g.Alert, "errorColor", O(se, s ? h("palette-error-light") : g.error.light, 0.6)), k(g.Alert, "infoColor", O(se, s ? h("palette-info-light") : g.info.light, 0.6)), k(g.Alert, "successColor", O(se, s ? h("palette-success-light") : g.success.light, 0.6)), k(g.Alert, "warningColor", O(se, s ? h("palette-warning-light") : g.warning.light, 0.6)), k(g.Alert, "errorFilledBg", P("palette-error-dark")), k(g.Alert, "infoFilledBg", P("palette-info-dark")), k(g.Alert, "successFilledBg", P("palette-success-dark")), k(g.Alert, "warningFilledBg", P("palette-warning-dark")), k(g.Alert, "errorFilledColor", qe(() => g.getContrastText(g.error.dark))), k(g.Alert, "infoFilledColor", qe(() => g.getContrastText(g.info.dark))), k(g.Alert, "successFilledColor", qe(() => g.getContrastText(g.success.dark))), k(g.Alert, "warningFilledColor", qe(() => g.getContrastText(g.warning.dark))), k(g.Alert, "errorStandardBg", O(ie, s ? h("palette-error-light") : g.error.light, 0.9)), k(g.Alert, "infoStandardBg", O(ie, s ? h("palette-info-light") : g.info.light, 0.9)), k(g.Alert, "successStandardBg", O(ie, s ? h("palette-success-light") : g.success.light, 0.9)), k(g.Alert, "warningStandardBg", O(ie, s ? h("palette-warning-light") : g.warning.light, 0.9)), k(g.Alert, "errorIconColor", P("palette-error-main")), k(g.Alert, "infoIconColor", P("palette-info-main")), k(g.Alert, "successIconColor", P("palette-success-main")), k(g.Alert, "warningIconColor", P("palette-warning-main")), k(g.AppBar, "defaultBg", P("palette-grey-900")), k(g.AppBar, "darkBg", P("palette-background-paper")), k(g.AppBar, "darkColor", P("palette-text-primary")), k(g.Avatar, "defaultBg", P("palette-grey-600")), k(g.Button, "inheritContainedBg", P("palette-grey-800")), k(g.Button, "inheritContainedHoverBg", P("palette-grey-700")), k(g.Chip, "defaultBorder", P("palette-grey-700")), k(g.Chip, "defaultAvatarColor", P("palette-grey-300")), k(g.Chip, "defaultIconColor", P("palette-grey-300")), k(g.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), k(g.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), k(g.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), k(g.LinearProgress, "primaryBg", O(ie, s ? h("palette-primary-main") : g.primary.main, 0.5)), k(g.LinearProgress, "secondaryBg", O(ie, s ? h("palette-secondary-main") : g.secondary.main, 0.5)), k(g.LinearProgress, "errorBg", O(ie, s ? h("palette-error-main") : g.error.main, 0.5)), k(g.LinearProgress, "infoBg", O(ie, s ? h("palette-info-main") : g.info.main, 0.5)), k(g.LinearProgress, "successBg", O(ie, s ? h("palette-success-main") : g.success.main, 0.5)), k(g.LinearProgress, "warningBg", O(ie, s ? h("palette-warning-main") : g.warning.main, 0.5)), k(g.Skeleton, "bg", _ ? O(pt, s ? h("palette-text-primary") : g.text.primary, 0.13) : `rgba(${P("palette-text-primaryChannel")} / 0.13)`), k(g.Slider, "primaryTrack", O(ie, s ? h("palette-primary-main") : g.primary.main, 0.5)), k(g.Slider, "secondaryTrack", O(ie, s ? h("palette-secondary-main") : g.secondary.main, 0.5)), k(g.Slider, "errorTrack", O(ie, s ? h("palette-error-main") : g.error.main, 0.5)), k(g.Slider, "infoTrack", O(ie, s ? h("palette-info-main") : g.info.main, 0.5)), k(g.Slider, "successTrack", O(ie, s ? h("palette-success-main") : g.success.main, 0.5)), k(g.Slider, "warningTrack", O(ie, s ? h("palette-warning-light") : g.warning.main, 0.5));
      const L = _ ? O(se, s ? h("palette-background-default") : g.background.default, 0.985) : tr(g.background.default, 0.98);
      k(g.SnackbarContent, "bg", L), k(g.SnackbarContent, "color", qe(() => _ ? Ba.text.primary : g.getContrastText(L))), k(g.SpeedDialAction, "fabHoverBg", tr(g.background.paper, 0.15)), k(g.StepConnector, "border", P("palette-grey-600")), k(g.StepContent, "border", P("palette-grey-600")), k(g.Switch, "defaultColor", P("palette-grey-300")), k(g.Switch, "defaultDisabledColor", P("palette-grey-600")), k(g.Switch, "primaryDisabledColor", O(ie, s ? h("palette-primary-main") : g.primary.main, 0.55)), k(g.Switch, "secondaryDisabledColor", O(ie, s ? h("palette-secondary-main") : g.secondary.main, 0.55)), k(g.Switch, "errorDisabledColor", O(ie, s ? h("palette-error-main") : g.error.main, 0.55)), k(g.Switch, "infoDisabledColor", O(ie, s ? h("palette-info-main") : g.info.main, 0.55)), k(g.Switch, "successDisabledColor", O(ie, s ? h("palette-success-main") : g.success.main, 0.55)), k(g.Switch, "warningDisabledColor", O(ie, s ? h("palette-warning-light") : g.warning.main, 0.55)), k(g.TableCell, "border", O(ie, pt(s ? h("palette-divider") : g.divider, 1), 0.68)), k(g.Tooltip, "bg", O(pt, s ? h("palette-grey-700") : g.grey[700], 0.92));
    }
    s || (Qe(g.background, "default"), Qe(g.background, "paper"), Qe(g.common, "background"), Qe(g.common, "onBackground"), Qe(g, "divider")), Object.keys(g).forEach((L) => {
      const q = g[L];
      L !== "tonalOffset" && !s && q && typeof q == "object" && (q.main && k(g[L], "mainChannel", Lt(Wt(q.main))), q.light && k(g[L], "lightChannel", Lt(Wt(q.light))), q.dark && k(g[L], "darkChannel", Lt(Wt(q.dark))), q.contrastText && k(g[L], "contrastTextChannel", Lt(Wt(q.contrastText))), L === "text" && (Qe(g[L], "primary"), Qe(g[L], "secondary")), L === "action" && (q.active && Qe(g[L], "active"), q.selected && Qe(g[L], "selected")));
    });
  }), R = t.reduce((W, g) => Fe(W, g), R);
  const j = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: l,
    getSelector: ad(R),
    enableContrastVars: s
  }, {
    vars: D,
    generateThemeVars: N,
    generateStyleSheets: U
  } = Rc(R, j);
  return R.vars = D, Object.entries(R.colorSchemes[R.defaultColorScheme]).forEach(([W, g]) => {
    R[W] = g;
  }), R.generateThemeVars = N, R.generateStyleSheets = U, R.generateSpacing = function() {
    return ka(p.spacing, Rn(this));
  }, R.getColorSchemeSelector = $c(c), R.spacing = R.generateSpacing(), R.shouldSkipGeneratingVar = l, R.unstable_sxConfig = {
    ...Mr,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, R.unstable_sx = function(g) {
    return _t({
      sx: g,
      theme: this
    });
  }, R.internal_cache = {}, R.toRuntimeSource = Ha, R;
}
function Jo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: Ln({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Fr(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...s
  } = e, l = a || "light", c = o == null ? void 0 : o[l], d = {
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
      return mn(e, ...t);
    let p = r;
    "palette" in e || d[l] && (d[l] !== !0 ? p = d[l].palette : l === "dark" && (p = {
      mode: "dark"
    }));
    const f = mn({
      ...e,
      palette: p
    }, ...t);
    return f.defaultColorScheme = l, f.colorSchemes = d, f.palette.mode === "light" && (f.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: f.palette
    }, Jo(f, "dark", d.dark)), f.palette.mode === "dark" && (f.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: f.palette
    }, Jo(f, "light", d.light)), f;
  }
  return !r && !("light" in d) && l === "light" && (d.light = !0), cd({
    ...s,
    colorSchemes: d,
    defaultColorScheme: l,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Wn = Fr();
function dd() {
  const e = Ea(Wn);
  return process.env.NODE_ENV !== "production" && w.useDebugValue(e), e[tt] || e;
}
function ud(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const pd = (e) => ud(e) && e !== "classes", fd = Jl({
  themeId: tt,
  defaultTheme: Wn,
  rootShouldForwardProp: pd
});
function hd({
  theme: e,
  ...t
}) {
  const r = tt in e ? e[tt] : void 0;
  return /* @__PURE__ */ i(Ut, {
    ...t,
    themeId: r ? tt : void 0,
    theme: r || e
  });
}
const rr = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (A.string, A.string, A.string, A.string, A.string, A.oneOf(["dark", "light", "system"]), A.string, A.string);
const {
  CssVarsProvider: md
} = kc({
  themeId: tt,
  // @ts-ignore ignore module augmentation tests
  theme: () => Fr({
    cssVariables: !0
  }),
  colorSchemeStorageKey: rr.colorSchemeStorageKey,
  modeStorageKey: rr.modeStorageKey,
  defaultColorScheme: {
    light: rr.defaultLightColorScheme,
    dark: rr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: Va(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return _t({
        sx: n,
        theme: this
      });
    }, t;
  }
}), gd = md;
function Ya({
  theme: e,
  ...t
}) {
  const r = w.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = tt in e ? e[tt] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ i(hd, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ i(gd, {
    theme: e,
    ...t
  });
}
function qa(e) {
  return /* @__PURE__ */ i(On, {
    ...e,
    defaultTheme: Wn,
    themeId: tt
  });
}
process.env.NODE_ENV !== "production" && (qa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: A.oneOfType([A.array, A.func, A.number, A.object, A.string, A.bool])
});
function Ka(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ i(qa, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (A.node, A.object.isRequired);
function Xa(e) {
  return uc(e);
}
const gn = typeof Ka({}) == "function", yd = (e, t) => ({
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
}), xd = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Ja = (e, t = !1) => {
  var a, s;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    var p, f;
    const d = e.getColorSchemeSelector(l);
    d.startsWith("@") ? r[d] = {
      ":root": {
        colorScheme: (p = c.palette) == null ? void 0 : p.mode
      }
    } : r[d.replace(/\s*&/, "")] = {
      colorScheme: (f = c.palette) == null ? void 0 : f.mode
    };
  });
  let n = {
    html: yd(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...xd(e),
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
}, ir = "mui-ecs", bd = (e) => {
  const t = Ja(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${ir})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var s, l;
    const a = e.getColorSchemeSelector(n);
    a.startsWith("@") ? r[a] = {
      [`:root:not(:has(.${ir}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : r[a.replace(/\s*&/, "")] = {
      [`&:not(:has(.${ir}))`]: {
        colorScheme: (l = o.palette) == null ? void 0 : l.mode
      }
    };
  }), t;
}, vd = Ka(gn ? ({
  theme: e,
  enableColorScheme: t
}) => Ja(e, t) : ({
  theme: e
}) => bd(e));
function Qa(e) {
  const t = Xa({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ m(w.Fragment, {
    children: [gn && /* @__PURE__ */ i(vd, {
      enableColorScheme: n
    }), !gn && !n && /* @__PURE__ */ i("span", {
      className: ir,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (Qa.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: A.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: A.bool
});
const Sd = Q.fontFamily.code, wd = {
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
}, Cd = (e) => {
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
          color: t ? v.black : v.white,
          "&:hover": {
            backgroundColor: t ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.04)",
            borderColor: t ? v.black : v.white,
            borderWidth: "1px"
          }
        },
        text: {
          color: t ? v.black : v.white,
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
            backgroundColor: t ? v.erieBlack : v.white,
            color: t ? v.white : v.erieBlack,
            "&:hover": {
              backgroundColor: t ? "#2A2A2A" : v.gray[200],
              boxShadow: at.sm
            }
          }
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            borderColor: t ? v.erieBlack : v.white,
            color: t ? v.erieBlack : v.white,
            "&:hover": {
              backgroundColor: t ? v.erieBlack : v.white,
              color: t ? v.white : v.erieBlack
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
          backgroundColor: t ? v.white : v.gray[800],
          border: `1px solid ${t ? v.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          boxShadow: at.sm,
          "&:hover": {
            boxShadow: at.md
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 200ms",
          color: t ? v.erieBlack : v.white,
          "&:hover": {
            backgroundColor: t ? v.tints.erieBlack8 : "rgba(255,255,255,0.08)"
          }
        }
      }
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: t ? v.tints.erieBlack10 : "rgba(255,255,255,0.08)",
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
          backgroundColor: t ? v.tints.mintCream60 : "rgba(23,23,23,0.85)",
          backdropFilter: "blur(8px)",
          boxShadow: "none",
          borderBottom: `1px solid ${t ? v.tints.erieBlack10 : "rgba(255,255,255,0.08)"}`,
          color: t ? v.erieBlack : v.white
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "9999px",
          // pill — Brand Book §badges
          backgroundColor: t ? v.tints.erieBlack8 : "rgba(255,255,255,0.08)",
          border: "none",
          color: t ? v.erieBlack : v.white,
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
          color: t ? v.erieBlack : v.white,
          "& code": {
            fontFamily: Sd,
            backgroundColor: t ? v.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, kd = (e) => {
  const t = e === "light";
  return {
    mode: e,
    primary: {
      main: t ? v.erieBlack : v.white,
      light: v.gray[700],
      dark: v.gray[900],
      contrastText: t ? v.white : v.erieBlack
    },
    secondary: {
      main: v.cadetGray,
      light: v.gray[400],
      dark: v.gray[700],
      contrastText: t ? v.erieBlack : v.white
    },
    background: {
      // bg-1: Mint Cream como fondo de página (claro) / Erie Black (oscuro)
      default: t ? v.mintCream : v.erieBlack,
      // bg-2: White como superficie elevada (cards, dialogs)
      paper: t ? v.white : v.gray[800]
    },
    text: {
      primary: t ? v.erieBlack : v.white,
      secondary: t ? v.cadetGray : v.cadetGray,
      disabled: v.gray[400]
    },
    action: {
      active: t ? v.erieBlack : v.white,
      hover: t ? v.tints.erieBlack8 : "rgba(255,255,255,0.08)",
      selected: t ? v.tints.erieBlack10 : "rgba(255,255,255,0.12)",
      disabled: v.cadetGray,
      disabledBackground: t ? "rgba(23,23,23,0.06)" : "rgba(255,255,255,0.06)"
    },
    // Inversión semántica crítica: orange = error, blue = success
    error: { main: v.hotOrange, light: v.tints.hotOrange30, contrastText: v.white },
    success: { main: v.moderateBlue, light: v.tints.moderateBlue15, contrastText: v.white },
    warning: { main: v.hotOrange, contrastText: v.white },
    info: { main: v.moderateBlue, contrastText: v.white },
    divider: t ? v.tints.erieBlack10 : "rgba(255,255,255,0.08)"
  };
}, Ed = () => [
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
], Td = (e) => Fr({
  palette: kd(e),
  typography: wd,
  components: Cd(e),
  shape: {
    borderRadius: 16
    // 1rem — Brand Book §radii
  },
  shadows: Ed()
}), Za = Cn({
  mode: "light",
  toggleColorMode: () => {
  }
}), Bn = () => wr(Za), gf = ({ children: e }) => {
  const [t, r] = H(() => {
    if (typeof window > "u") return "light";
    const s = localStorage.getItem("ai4u-theme-mode");
    return s === "dark" || s === "light" ? s : "light";
  }), n = ft(() => {
    r((s) => {
      const l = s === "light" ? "dark" : "light";
      return typeof window < "u" && (localStorage.setItem("ai4u-theme-mode", l), document.documentElement.setAttribute("data-theme", l)), l;
    });
  }, []);
  me(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, [t]);
  const o = _e(() => ({ mode: t, toggleColorMode: n }), [t, n]), a = _e(() => Td(t), [t]);
  return /* @__PURE__ */ i(Za.Provider, { value: o, children: /* @__PURE__ */ m(Ya, { theme: a, children: [
    /* @__PURE__ */ i(Qa, {}),
    e
  ] }) });
}, yn = Cn({
  surface: "theme"
}), yf = ({ children: e, surface: t }) => {
  const r = wr(yn), { mode: n } = Bn(), o = t || r.surface, a = _e(() => o === "theme" ? n : ht[o].effectiveMode, [o, n]), s = _e(() => {
    const l = a === "light";
    return Fr({
      palette: {
        mode: a,
        primary: {
          main: l ? v.black : v.white,
          contrastText: l ? v.white : v.black
        },
        background: {
          default: l ? v.accentColors.mint : v.black,
          paper: l ? v.accentColors.mint : v.gray[900]
        },
        text: {
          primary: l ? v.black : v.white,
          secondary: l ? v.gray[600] : v.gray[300]
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
              color: l ? v.black : v.white
            }
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                backgroundColor: l ? v.black : v.white,
                color: l ? v.white : v.black
              }
            }
          ]
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: l ? v.black : v.white
            }
          }
        }
      }
    });
  }, [a]);
  return /* @__PURE__ */ i(yn.Provider, { value: { surface: o }, children: /* @__PURE__ */ i(Ya, { theme: s, children: e }) });
}, Id = () => wr(yn), ee = () => {
  const e = dd(), { mode: t } = Bn(), { surface: r } = Id(), n = _e(() => r === "theme" ? Ii[t] : ht[r], [t, r]), o = _e(() => r === "theme" ? t : ht[r].effectiveMode, [t, r]), a = Ri(o);
  return _e(() => ({
    // Modo actual (global)
    mode: t,
    // Modo efectivo para la superficie actual
    effectiveMode: o,
    // Superficie actual
    surface: r,
    // Colores base - use static reference
    palette: v,
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
        accent: o === "light" ? v.black : v.white,
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
        accent: o === "light" ? v.gray[400] : v.gray[600]
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
}, xf = (e, t) => {
  const { components: r } = ee();
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
}, bf = () => {
  const { mode: e, contrast: t } = ee();
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
}, Rd = () => {
  const [e, t] = H(!1), [r, n] = H(!1);
  return me(() => {
    const o = () => {
      const s = window.matchMedia("(display-mode: standalone)").matches, l = window.navigator.standalone;
      n(s || l), t(s || l);
    };
    o();
    const a = window.matchMedia("(display-mode: standalone)");
    return a.addListener(o), () => {
      a.removeListener(o);
    };
  }, []), { isPWA: e, isStandalone: r };
};
class $d {
  constructor() {
    Ge(this, "isDev", !1);
    Ge(this, "log", (...t) => {
      this.isDev && console.log(...t);
    });
    Ge(this, "error", (...t) => {
      this.isDev && console.error(...t);
    });
    Ge(this, "warn", (...t) => {
      this.isDev && console.warn(...t);
    });
    Ge(this, "info", (...t) => {
      this.isDev && console.info(...t);
    });
    Ge(this, "debug", (...t) => {
      this.isDev && console.debug(...t);
    });
  }
}
const ue = new $d(), kt = {
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
class Ad {
  constructor() {
    Ge(this, "isGALoaded", !1);
    this.checkGAAvailability();
  }
  checkGAAvailability() {
    typeof window < "u" && window.gtag ? (this.isGALoaded = !0, ue.log("📊 Google Analytics disponible")) : ue.warn("⚠️ Google Analytics no disponible");
  }
  // Tracking de eventos específicos AI4U
  trackServiceInterest(t, r = "unknown") {
    this.trackEvent({
      action: kt.SERVICE_INTEREST,
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
      action: kt.CONSULTATION_REQUEST,
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
      action: kt.DIAGNOSTIC_START,
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
      action: kt.PHILOSOPHY_ENGAGEMENT,
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
      action: kt.PERFORMANCE_ISSUE,
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
      action: kt.ERROR_BOUNDARY_HIT,
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
    var n;
    if (this.isGALoaded)
      try {
        (n = window.gtag) == null || n.call(window, "config", "G-44D5SE9KCR", {
          page_title: `${t} | AI4U`,
          page_location: window.location.href,
          ...r
        }), ue.log(`📊 Page view tracked: ${t}`);
      } catch (o) {
        ue.error("Error tracking page view:", o);
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
const ei = new Ad();
class _d {
  constructor() {
    Ge(this, "sessionId");
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
    ue.error("🚨 Error captured:", r), ei.trackErrorBoundary(r, r.componentStack), this.sendToRemoteService(r);
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
const Od = new _d(), Md = (e, t = {}) => {
  const {
    priority: r = !1,
    size: n = "original",
    format: o = "webp",
    fallback: a,
    preload: s = !1
  } = t, [l, c] = H({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [d, p] = H(null);
  me(() => {
    (async () => {
      try {
        const y = await fetch("/assets/images/optimized/image-mapping.json");
        if (y.ok) {
          const S = await y.json();
          p(S);
        }
      } catch {
      }
    })();
  }, []);
  const f = _e(() => {
    var I, T;
    if (!d || !d[e])
      return {
        src: `/assets/images/${e}.jpg`,
        format: "original",
        size: "original"
      };
    const b = d[e];
    let y = "", S = "original", C = "original";
    return o === "webp" && ((I = b.formats) != null && I.webp) ? (y = `/assets/images/optimized/${b.formats.webp.file}`, S = "webp") : (y = `/assets/images/${b.original}`, S = "original"), n !== "original" && ((T = b.sizes) != null && T[n]) && (y = `/assets/images/optimized/${b.sizes[n].file}`, C = n), {
      src: y,
      format: S,
      size: C
    };
  }, [e, d, o, n]);
  me(() => {
    if (!f.src) return;
    c((y) => ({
      ...y,
      src: f.src,
      format: f.format,
      size: f.size,
      isLoaded: !1,
      error: !1
    }));
    const b = new Image();
    return b.onload = () => {
      c((y) => ({
        ...y,
        isLoaded: !0,
        error: !1
      }));
    }, b.onerror = () => {
      f.format === "webp" && !l.error ? c((y) => {
        var S;
        return {
          ...y,
          src: `/assets/images/${((S = d == null ? void 0 : d[e]) == null ? void 0 : S.original) || `${e}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : c(a ? (y) => ({
        ...y,
        src: a,
        format: "fallback",
        error: !0
      }) : (y) => ({
        ...y,
        error: !0
      }));
    }, (r || s) && (b.loading = "eager"), b.src = f.src, () => {
      b.onload = null, b.onerror = null;
    };
  }, [f.src, f.format, a, r, s, l.error, d, e]);
  const x = _e(() => {
    if (typeof window > "u") return !1;
    const b = document.createElement("canvas");
    return b.width = 1, b.height = 1, b.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);
  return {
    src: _e(() => {
      var b;
      return l.format === "webp" && !x ? `/assets/images/${((b = d == null ? void 0 : d[e]) == null ? void 0 : b.original) || `${e}.jpg`}` : l.src;
    }, [l.src, l.format, x, d, e]),
    isLoaded: l.isLoaded,
    error: l.error,
    format: l.format,
    size: l.size,
    supportsWebP: x,
    isLoading: !l.isLoaded && !l.error
  };
}, on = (e) => {
  const [t, r] = H(/* @__PURE__ */ new Set()), [n, o] = H(0);
  return me(() => {
    o(e.length);
    const a = (l) => new Promise((c) => {
      const d = new Image();
      d.onload = () => {
        r((p) => new Set(Array.from(p).concat(l))), c();
      }, d.onerror = () => {
        r((p) => new Set(Array.from(p).concat(l))), c();
      }, d.src = `/assets/images/${l}.jpg`;
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
}, Pd = Ie(u, {
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
})), mr = (e) => {
  const {
    type: t,
    size: r = "medium",
    color: n,
    variant: o = "filled",
    onClick: a,
    sx: s
  } = e, l = ee(), c = n || l.contrast.text.primary, d = () => {
    const f = {
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
          ...f,
          backgroundColor: "transparent",
          border: `2px solid ${c}`,
          color: c
        };
      case "minimal":
        return {
          ...f,
          backgroundColor: "transparent",
          color: c
        };
      default:
        return {
          ...f,
          backgroundColor: c,
          color: c === l.palette.white ? l.palette.black : l.palette.white,
          border: "none"
        };
    }
  }, p = () => {
    const f = {
      style: {
        fontSize: "inherit"
      }
    };
    switch (t) {
      case "arrow-up":
        return /* @__PURE__ */ i("span", { ...f, children: "↑" });
      case "arrow-down":
        return /* @__PURE__ */ i("span", { ...f, children: "↓" });
      case "arrow-right":
        return /* @__PURE__ */ i("span", { ...f, children: "→" });
      case "arrow-left":
        return /* @__PURE__ */ i("span", { ...f, children: "←" });
      case "plus":
        return /* @__PURE__ */ i("span", { ...f, children: "+" });
      case "minus":
        return /* @__PURE__ */ i("span", { ...f, children: "−" });
      case "circle":
        return /* @__PURE__ */ i("span", { ...f, children: "●" });
      case "square":
        return /* @__PURE__ */ i("span", { ...f, children: "■" });
      case "triangle":
        return /* @__PURE__ */ i("span", { ...f, children: "▲" });
      case "cross":
        return /* @__PURE__ */ i("span", { ...f, children: "✕" });
      case "line":
        return /* @__PURE__ */ i("span", { ...f, children: "—" });
      case "dot":
        return /* @__PURE__ */ i("span", { ...f, children: "•" });
      case "search":
        return /* @__PURE__ */ i("span", { ...f, children: "[?]" });
      case "clear":
        return /* @__PURE__ */ i("span", { ...f, children: "✕" });
      case "check":
        return /* @__PURE__ */ i("span", { ...f, children: "✓" });
      default:
        return /* @__PURE__ */ i("span", { ...f, children: "○" });
    }
  };
  return /* @__PURE__ */ i(
    Pd,
    {
      iconSize: r,
      isClickable: !!a,
      onClick: a,
      sx: { ...d(), ...s },
      children: p()
    }
  );
}, zd = Cn(void 0), ti = () => {
  const e = wr(zd);
  if (e === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return e;
}, vf = ({ images: e, onAllLoaded: t }) => {
  const { setCriticalImagesLoaded: r } = ti();
  return me(() => {
    let n = 0;
    const o = e.length, a = () => {
      n++, n === o && (r(!0), t == null || t());
    }, s = () => {
      n++, n === o && (r(!0), t == null || t());
    };
    e.forEach((l) => {
      const c = new Image();
      c.onload = a, c.onerror = s, c.src = l;
    }), o === 0 && (r(!0), t == null || t());
  }, [e, r, t]), null;
}, Sf = () => {
  const e = Se();
  return /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ i(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(u, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Rt, {}) }),
        /* @__PURE__ */ i(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, jn = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: a,
  skeletonWidth: s,
  priority: l = !1
}) => {
  const c = Se(), { isPWA: d } = Rd(), { imgRef: p, isLoaded: f, isInView: x, error: h } = vs(e, { priority: l }), b = {
    bgcolor: c.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ m(
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
        !f && /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: a || n,
            sx: b
          }
        ),
        x && /* @__PURE__ */ i(
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
              opacity: f ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: f ? "block" : "none",
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
        h && /* @__PURE__ */ i(
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
}, wf = ({
  src: e,
  pixelArtSrc: t,
  alt: r,
  width: n = "100%",
  height: o = "auto",
  transitionDuration: a = 0.3,
  sx: s,
  ...l
}) => {
  const [c, d] = H(!1);
  return /* @__PURE__ */ i(
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
          transition: `opacity ${a}s ease-in-out`,
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
          transition: `opacity ${a}s ease-in-out`,
          opacity: c ? 1 : 0,
          zIndex: 2
        },
        ...s
      },
      ...l,
      children: /* @__PURE__ */ i(
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
}, Cf = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  transitionDuration: o = 0.3,
  pixelSize: a = 8,
  sx: s,
  ...l
}) => {
  const [c, d] = H(!1);
  return /* @__PURE__ */ m(
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
        /* @__PURE__ */ i(
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
                backgroundSize: `${a}px ${a}px`,
                pointerEvents: "none",
                zIndex: 2
              } : {}
            }
          }
        ),
        c && /* @__PURE__ */ i(
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
              backgroundSize: `${a}px ${a}px`,
              pointerEvents: "none",
              zIndex: 3,
              transition: `opacity ${o}s ease-in-out`
            }
          }
        ),
        c && /* @__PURE__ */ i(
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
        c && /* @__PURE__ */ i(
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
}, Dd = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", Fd = `
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
`, Nd = () => (me(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var t;
    try {
      (t = window.google) != null && t.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: Dd,
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
}, []), /* @__PURE__ */ m(be, { children: [
  /* @__PURE__ */ i(
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
  /* @__PURE__ */ i("style", { children: Fd })
] })), xn = [
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
], gr = "es";
function Ld() {
  const e = document.cookie.match(/googtrans=([^;]+)/);
  if (e && e[1]) {
    const o = e[1].trim();
    if (o) {
      const a = o.split("/").filter(Boolean), s = a[a.length - 1];
      if (s && s !== gr) {
        const l = xn.find((c) => c.code === s || c.code.startsWith(s));
        if (l) return l.short;
      }
    }
  }
  const r = (document.documentElement.lang || gr).split("-")[0].toLowerCase(), n = xn.find((o) => o.code.toLowerCase().startsWith(r));
  return (n == null ? void 0 : n.short) ?? "ES";
}
const Qo = ({ light: e = !1 }) => {
  const t = ee(), r = Se(), n = cr(r.breakpoints.down("sm")), o = cr(r.breakpoints.between("sm", "md")), [a, s] = H(Ld), [l, c] = H(null), [d, p] = H(() => !!document.getElementById("google-translate-script")), f = qt(null), x = !!l;
  me(() => {
    if (document.getElementById("google-translate-script")) {
      p(!0);
      return;
    }
    const C = setInterval(() => {
      document.getElementById("google-translate-script") && (p(!0), clearInterval(C));
    }, 200), I = setTimeout(() => {
      clearInterval(C), p(!0);
    }, 5e3);
    return () => {
      clearInterval(C), clearTimeout(I);
    };
  }, []);
  const h = (C) => {
    c(C.currentTarget);
  }, b = () => {
    c(null);
  }, y = (C, I) => {
    if (b(), C === gr) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const T = `/${gr}/${C}`;
    document.cookie = `googtrans=${T}; path=/`, window.location.reload();
  }, S = (C) => n ? {
    width: C.spacing(4),
    height: C.spacing(3.5),
    fontSize: C.typography.caption.fontSize
  } : o ? {
    width: C.spacing(4.5),
    height: C.spacing(3.75),
    fontSize: C.typography.body2.fontSize
  } : {
    width: C.spacing(5),
    height: C.spacing(4),
    fontSize: C.typography.body2.fontSize
  };
  return /* @__PURE__ */ m(
    u,
    {
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ i(
          u,
          {
            ref: f,
            component: "button",
            onClick: h,
            "aria-label": `Cambiar idioma (actual: ${a})`,
            "aria-controls": x ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": x ? "true" : void 0,
            disabled: !d,
            sx: (C) => {
              const I = S(C);
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
                borderRadius: C.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: e ? "transparent" : t.contrast.surface,
                fontFamily: C.typography.fontFamily,
                fontSize: I.fontSize,
                fontWeight: 400,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: e ? "rgba(255, 255, 255, 0.1)" : t.helpers.state.hover,
                  transform: "scale(1.05)"
                },
                "&:focus": {
                  outline: `${C.spacing(0.25)} solid ${t.palette.black}`,
                  outlineOffset: C.spacing(0.25)
                },
                "&:active": {
                  transform: "scale(0.95)"
                }
              };
            },
            children: d ? a : "…"
          }
        ),
        /* @__PURE__ */ i(
          ca,
          {
            id: "language-menu",
            anchorEl: l,
            open: x,
            onClose: b,
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
                sx: (C) => ({
                  mt: 0.5,
                  minWidth: C.spacing(20),
                  maxWidth: C.spacing(25),
                  backgroundColor: t.contrast.surface,
                  border: `1px solid ${t.contrast.border}`,
                  borderRadius: C.spacing(1),
                  boxShadow: at.md
                })
              }
            },
            children: xn.map((C) => /* @__PURE__ */ i(
              or,
              {
                onClick: () => y(C.code, C.short),
                selected: a === C.short,
                sx: (I) => ({
                  fontFamily: I.typography.fontFamily,
                  fontSize: I.typography.body2.fontSize,
                  fontWeight: a === C.short ? 600 : 400,
                  color: a === C.short ? t.palette.black : t.contrast.text.primary,
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
                children: /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                  /* @__PURE__ */ i(
                    u,
                    {
                      component: "span",
                      sx: (I) => ({
                        fontWeight: 400,
                        minWidth: I.spacing(3),
                        color: a === C.short ? t.palette.black : t.contrast.text.secondary
                      }),
                      children: C.short
                    }
                  ),
                  /* @__PURE__ */ i(u, { component: "span", children: C.label })
                ] })
              },
              C.code
            ))
          }
        )
      ]
    }
  );
};
let bn = null;
try {
  bn = require("react-helmet-async").Helmet;
} catch {
}
const ri = (e) => {
  if (typeof window > "u" || !bn) return null;
  const t = bn, {
    title: r = "AI4U - Inteligencia Artificial para tu Negocio",
    description: n = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
    keywords: o = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
    canonical: a,
    ogImage: s = "/assets/images/ai4u-logo.png",
    ogType: l = "website",
    structuredData: c,
    noIndex: d = !1,
    noFollow: p = !1
  } = e, f = r.includes("AI4U") ? r : `${r} | AI4U`, x = a ?? window.location.href;
  return /* @__PURE__ */ m(t, { children: [
    /* @__PURE__ */ i("title", { children: f }),
    /* @__PURE__ */ i("meta", { name: "description", content: n }),
    /* @__PURE__ */ i("meta", { name: "keywords", content: o }),
    /* @__PURE__ */ i("meta", { name: "robots", content: d || p ? `${d ? "noindex" : "index"},${p ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    x && /* @__PURE__ */ i("link", { rel: "canonical", href: x }),
    /* @__PURE__ */ i("meta", { property: "og:title", content: f }),
    /* @__PURE__ */ i("meta", { property: "og:description", content: n }),
    /* @__PURE__ */ i("meta", { property: "og:type", content: l }),
    x && /* @__PURE__ */ i("meta", { property: "og:url", content: x }),
    /* @__PURE__ */ i("meta", { property: "og:image", content: s }),
    /* @__PURE__ */ i("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ i("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ i("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ i("meta", { property: "twitter:title", content: f }),
    /* @__PURE__ */ i("meta", { property: "twitter:description", content: n }),
    /* @__PURE__ */ i("meta", { property: "twitter:image", content: s }),
    /* @__PURE__ */ i("meta", { property: "twitter:site", content: "@ai4u_co" }),
    c && /* @__PURE__ */ i("script", { type: "application/ld+json", children: JSON.stringify(c) })
  ] });
}, kf = (e = {}) => {
  const {
    title: t = "AI4U - Inteligencia Artificial para tu Negocio",
    description: r = "Soluciones de Inteligencia Artificial personalizadas para tu negocio.",
    keywords: n,
    canonical: o,
    ogImage: a = "/assets/images/ai4u-logo.png",
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
      images: [{ url: a }],
      siteName: "AI4U",
      locale: "es_CO"
    },
    twitter: {
      card: "summary_large_image",
      title: d,
      description: r,
      images: [a],
      site: "@ai4u_co"
    }
  };
}, Ef = ({
  src: e,
  alt: t,
  width: r,
  height: n,
  sx: o,
  priority: a = !1,
  fallback: s
}) => {
  const [l, c] = H(!1), [d, p] = H(!1), [f, x] = H(e), h = ee(), b = () => {
    const I = document.createElement("canvas");
    return I.width = 1, I.height = 1, I.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, y = (I) => I.includes("/assets/images/") ? I.replace(/\.(jpg|jpeg|png)$/i, ".webp") : I;
  me(() => {
    b() && e.includes("/assets/images/") ? x(y(e)) : x(e);
  }, [e]);
  const S = () => {
    c(!0), p(!1);
  }, C = () => {
    f !== e && !d ? (x(e), p(!0)) : s && (x(s), p(!0));
  };
  return /* @__PURE__ */ m(u, { sx: { position: "relative", width: r, height: n }, children: [
    !l && /* @__PURE__ */ i(
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
    /* @__PURE__ */ i(
      "img",
      {
        src: f,
        alt: t,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: l ? 1 : 0,
          transition: "opacity 0.3s ease-in-out",
          ...o
        },
        onLoad: S,
        onError: C,
        loading: a ? "eager" : "lazy"
      }
    )
  ] });
}, Tf = ({
  imageName: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: a,
  skeletonWidth: s,
  priority: l = !1,
  size: c = "original",
  format: d = "webp",
  fallback: p,
  preload: f = !1,
  showOptimizationInfo: x = !1,
  className: h
}) => {
  const b = Se(), {
    src: y,
    isLoaded: S,
    error: C,
    isLoading: I
  } = Md(e, {
    priority: l,
    size: c,
    format: d,
    fallback: p,
    preload: f
  }), T = {
    bgcolor: b.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ m(
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
        I && /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: a || n,
            sx: T
          }
        ),
        !C && /* @__PURE__ */ i(
          u,
          {
            component: "img",
            src: y,
            alt: t,
            loading: l ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: S ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: S ? "block" : "none",
              // Optimizaciones específicas para PWA
              imageRendering: "auto",
              touchAction: "manipulation"
            }
          }
        ),
        C && /* @__PURE__ */ m(
          u,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: b.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: b.palette.text.secondary,
              fontSize: "0.875rem",
              flexDirection: "column",
              gap: 1
            },
            children: [
              /* @__PURE__ */ i(u, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ i(u, { component: "span", children: "Error al cargar imagen" }),
              x && /* @__PURE__ */ i(u, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: e })
            ]
          }
        ),
        x && !1
      ]
    }
  );
}, If = ({
  criticalImages: e,
  importantImages: t,
  backgroundImages: r,
  onCriticalLoaded: n,
  onImportantLoaded: o,
  onAllLoaded: a,
  showProgress: s = !1
}) => {
  const { setCriticalImagesLoaded: l } = ti(), [c, d] = H("critical"), p = on(e), f = on(t), x = on(r);
  me(() => {
    p.isComplete && (l(!0), n == null || n(), d("important"));
  }, [p.isComplete, l, n]), me(() => {
    c === "important" && f.isComplete && (o == null || o(), d("background"));
  }, [c, f.isComplete, o]), me(() => {
    c === "background" && x.isComplete && (a == null || a(), d("complete"));
  }, [c, x.isComplete, a]);
  const h = e.length + t.length + r.length, b = p.loadedImages.length + f.loadedImages.length + x.loadedImages.length, y = h > 0 ? b / h * 100 : 0;
  return s ? /* @__PURE__ */ m("div", { style: {
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
      width: `${y}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ m("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      c === "critical" ? "Críticas" : c === "important" ? "Importantes" : c === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ m("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      b,
      " / ",
      h,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ m("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ m("div", { children: [
        "Críticas: ",
        p.loadedImages.length,
        "/",
        e.length
      ] }),
      /* @__PURE__ */ m("div", { children: [
        "Importantes: ",
        f.loadedImages.length,
        "/",
        t.length
      ] }),
      /* @__PURE__ */ m("div", { children: [
        "Fondo: ",
        x.loadedImages.length,
        "/",
        r.length
      ] })
    ] })
  ] }) : null;
}, jt = ({
  href: e,
  variant: t = "subtle",
  children: r,
  className: n,
  ariaLabel: o,
  LinkComponent: a,
  onClick: s
}) => {
  const l = ee();
  return /* @__PURE__ */ i(
    da,
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
}, Wd = (e) => {
  const {
    variant: t = "separator",
    size: r = "small",
    className: n
  } = e, o = ee(), a = () => {
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
    u,
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
}, Rf = ({
  serviceId: e,
  serviceColor: t,
  size: r = "medium",
  className: n,
  customThumbnail: o
}) => {
  const a = ee(), l = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[r], c = t || a.palette.accent, p = ((f) => {
    const x = f.split("").reduce((b, y) => b + y.charCodeAt(0), 0), h = [
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
    return h[x % h.length];
  })(e);
  return o ? /* @__PURE__ */ m(
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
  ) : /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(
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
              /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ m("linearGradient", { id: `gradient-${e}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ i("stop", { offset: "0%", stopColor: `${c}20` }),
                /* @__PURE__ */ i("stop", { offset: "100%", stopColor: `${c}10` })
              ] }) }),
              /* @__PURE__ */ i("rect", { width: "100%", height: "100%", fill: `url(#gradient-${e})` }),
              /* @__PURE__ */ i("g", { dangerouslySetInnerHTML: { __html: p } }),
              /* @__PURE__ */ i(
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
        r === "large" && /* @__PURE__ */ i(
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
            children: /* @__PURE__ */ i(
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
}, $f = ({
  children: e,
  numberVariant: t = "primary",
  sx: r,
  ...n
}) => /* @__PURE__ */ i(
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
), Bd = $i`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`, vn = ({
  status: e,
  size: t = 8,
  pulse: r,
  label: n,
  className: o
}) => {
  const a = v.telemetry[e], l = /* @__PURE__ */ i(
    u,
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
        animation: r ?? (e === "online" || e === "starting") ? `${Bd} 2s ease-out infinite` : "none"
      }
    }
  );
  return n ? /* @__PURE__ */ m(
    u,
    {
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75
      },
      children: [
        l,
        /* @__PURE__ */ i(
          u,
          {
            component: "span",
            sx: {
              fontFamily: '"Necto Mono", monospace',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: a
            },
            children: n
          }
        )
      ]
    }
  ) : l;
}, jd = {
  "file-scan": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("circle", { cx: "11", cy: "15", r: "2" }),
    /* @__PURE__ */ i("path", { d: "m13.5 17.5 1.5 1.5" })
  ] }),
  package: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "m7.5 4.27 9 5.15" }),
    /* @__PURE__ */ i("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
    /* @__PURE__ */ i("path", { d: "m3.3 7 8.7 5 8.7-5" }),
    /* @__PURE__ */ i("path", { d: "M12 22V12" })
  ] }),
  grid: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  tag: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
    /* @__PURE__ */ i("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
  ] }),
  "clipboard-list": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
    /* @__PURE__ */ i("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ i("path", { d: "M12 11h4" }),
    /* @__PURE__ */ i("path", { d: "M12 16h4" }),
    /* @__PURE__ */ i("path", { d: "M8 11h.01" }),
    /* @__PURE__ */ i("path", { d: "M8 16h.01" })
  ] }),
  landmark: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("line", { x1: "3", y1: "22", x2: "21", y2: "22" }),
    /* @__PURE__ */ i("line", { x1: "6", y1: "18", x2: "6", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "18", x2: "10", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "14", y1: "18", x2: "14", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "18", y1: "18", x2: "18", y2: "11" }),
    /* @__PURE__ */ i("polygon", { points: "12 2 20 7 4 7" })
  ] }),
  "refresh-cw": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ i("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ i("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ i("path", { d: "M8 16H3v5" })
  ] }),
  diamond: /* @__PURE__ */ i("path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }),
  "trending-up": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    /* @__PURE__ */ i("polyline", { points: "16 7 22 7 22 13" })
  ] }),
  users: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ i("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ i("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ i("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  "rotate-cw": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M21 2v6h-6" }),
    /* @__PURE__ */ i("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" })
  ] }),
  power: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M12 2v6" }),
    /* @__PURE__ */ i("path", { d: "M18.4 5.6a9 9 0 1 1-12.77.04" })
  ] }),
  terminal: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  "external-link": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ i("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  "file-plus": /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
    /* @__PURE__ */ i("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
  ] }),
  calendar: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  logout: /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ i("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ i("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] })
}, Vd = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}, yr = ({
  id: e,
  size: t = "sm",
  color: r = "currentColor",
  strokeWidth: n = 1.6
}) => {
  const o = typeof t == "number" ? t : Vd[t];
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
      children: jd[e] ?? null
    }
  );
}, Af = ({
  logo: e,
  title: t,
  subtitle: r,
  align: n = "left",
  variant: o = "dark",
  titleColor: a,
  subtitleColor: s
}) => /* @__PURE__ */ m(u, { sx: { textAlign: n, display: "flex", flexDirection: "column", alignItems: n === "center" ? "center" : "flex-start", gap: 0 }, children: [
  e && /* @__PURE__ */ i(u, { sx: { mb: 1.75, display: "inline-flex" }, children: e }),
  /* @__PURE__ */ i(
    u,
    {
      sx: {
        fontFamily: '"Red Hat Display", sans-serif',
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: "0.22em",
        color: a ?? (o === "dark" ? "#F1F5F9" : "#0F172A"),
        textTransform: "uppercase",
        lineHeight: 1
      },
      children: t
    }
  ),
  r && /* @__PURE__ */ i(
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
] }), Hd = gc;
function Ud(e) {
  return Mn("MuiSvgIcon", e);
}
Gl("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Gd = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${At(t)}`, `fontSize${At(r)}`]
  };
  return Ac(o, Ud, n);
}, Yd = fd("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${At(r.color)}`], t[`fontSize${At(r.fontSize)}`]];
  }
})(Hd(({
  theme: e
}) => {
  var t, r, n, o, a, s, l, c, d, p, f, x, h, b;
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
        props: (y) => !y.hasSvgAsChild,
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
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var S, C;
        return {
          props: {
            color: y
          },
          style: {
            color: (C = (S = (e.vars ?? e).palette) == null ? void 0 : S[y]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (x = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : x.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (h = (e.vars ?? e).palette) == null ? void 0 : h.action) == null ? void 0 : b.disabled
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
})), xr = /* @__PURE__ */ w.forwardRef(function(t, r) {
  const n = Xa({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: s = "inherit",
    component: l = "svg",
    fontSize: c = "medium",
    htmlColor: d,
    inheritViewBox: p = !1,
    titleAccess: f,
    viewBox: x = "0 0 24 24",
    ...h
  } = n, b = /* @__PURE__ */ w.isValidElement(o) && o.type === "svg", y = {
    ...n,
    color: s,
    component: l,
    fontSize: c,
    instanceFontSize: t.fontSize,
    inheritViewBox: p,
    viewBox: x,
    hasSvgAsChild: b
  }, S = {};
  p || (S.viewBox = x);
  const C = Gd(y);
  return /* @__PURE__ */ m(Yd, {
    as: l,
    className: Ia(C.root, a),
    focusable: "false",
    color: d,
    "aria-hidden": f ? void 0 : !0,
    role: f ? "img" : void 0,
    ref: r,
    ...S,
    ...h,
    ...b && o.props,
    ownerState: y,
    children: [b ? o.props.children : o, f ? /* @__PURE__ */ i("title", {
      children: f
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (xr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: A.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: A.object,
  /**
   * @ignore
   */
  className: A.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: A.oneOfType([A.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), A.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: A.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: A.oneOfType([A.oneOf(["inherit", "large", "medium", "small"]), A.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: A.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: A.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: A.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: A.oneOfType([A.arrayOf(A.oneOfType([A.func, A.object, A.bool])), A.func, A.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: A.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: A.string
});
xr.muiName = "SvgIcon";
function Oe(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ i(xr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = xr.muiName, /* @__PURE__ */ w.memo(/* @__PURE__ */ w.forwardRef(r));
}
const ni = Oe(/* @__PURE__ */ i("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), qd = Oe(/* @__PURE__ */ i("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), Bt = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
ue.log("VITE_MAKE_WEBHOOK_URL:", void 0);
ue.log("MAKE_API_CONFIG.webhookUrl:", Bt.webhookUrl);
const Kd = async (e, t) => {
  const r = t || `session_${Date.now()}`;
  ue.log("Enviando request a Make.com:", {
    message: e,
    sessionId: r,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: Bt.webhookUrl
  });
  try {
    const n = await fetch(Bt.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...Bt.apiToken && {
          Authorization: `Bearer ${Bt.apiToken}`
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
        const l = a.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        try {
          o = JSON.parse(l), ue.log("Respuesta limpiada y parseada:", o);
        } catch (c) {
          ue.error("Error final parseando JSON:", c), o = { message: a };
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
}, Xd = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, Zo = (e) => {
  const t = e.toLowerCase();
  return t.includes("hola") || t.includes("buenos días") || t.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : t.includes("servicios") || t.includes("qué hacen") || t.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : t.includes("precio") || t.includes("costo") || t.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : t.includes("contacto") || t.includes("teléfono") || t.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : t.includes("diagnóstico") || t.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, _f = () => {
  const e = Se(), t = cr(e.breakpoints.down("sm")), [r, n] = H(!1), [o] = H(() => Xd()), [a, s] = H([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    }
  ]), [l, c] = H(""), [d, p] = H(!1), [f, x] = H(""), h = qt(null), b = ft(() => n(!0), []), y = ft(() => n(!1), []), S = ft(() => {
    var T;
    (T = h.current) == null || T.scrollIntoView({ behavior: "smooth" });
  }, []);
  me(() => {
    S();
  }, [a, S]);
  const C = ft(async () => {
    var E;
    const T = l.trim();
    if (!T || d || T === f) return;
    if (T.length > 500) {
      const R = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((j) => [...j, R]);
      return;
    }
    const _ = {
      id: Date.now().toString(),
      text: l.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    };
    s((R) => [...R, _]), x(T), c(""), p(!0);
    try {
      const R = await Kd(T, o);
      let j;
      R.success && ((E = R.data) != null && E.message) ? j = R.data.message : R.success && R.data && typeof R.data == "string" ? j = R.data : (R.error, j = Zo(T));
      const D = {
        id: (Date.now() + 1).toString(),
        text: j,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((N) => [...N, D]);
    } catch (R) {
      console.error("Error sending message:", R);
      const D = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((N) => [...N, D]);
    } finally {
      p(!1);
    }
  }, [l, d, o, f]), I = ft((T) => {
    T.key === "Enter" && !T.shiftKey && !d && (T.preventDefault(), C());
  }, [C, d]);
  return /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i(
      Ai,
      {
        color: "primary",
        "aria-label": "chat",
        onClick: b,
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
    /* @__PURE__ */ m(
      _i,
      {
        open: r,
        onClose: y,
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
          /* @__PURE__ */ m(
            Oi,
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
                /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                  /* @__PURE__ */ i(
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
                  /* @__PURE__ */ m(u, { children: [
                    /* @__PURE__ */ i(F, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ i(F, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ i(Ne, { onClick: y, size: "small", children: /* @__PURE__ */ i(ni, {}) })
              ]
            }
          ),
          /* @__PURE__ */ m(
            Mi,
            {
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [
                /* @__PURE__ */ m(
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
                      a.map((T) => /* @__PURE__ */ i(
                        u,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: T.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ m(
                            Vt,
                            {
                              sx: {
                                p: 2,
                                maxWidth: "80%",
                                backgroundColor: T.isUser ? e.palette.primary.main : we(e.palette.background.paper, 0.8),
                                color: T.isUser ? e.palette.primary.contrastText : e.palette.text.primary,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              },
                              children: [
                                /* @__PURE__ */ i(F, { variant: "body2", children: T.text }),
                                /* @__PURE__ */ i(
                                  F,
                                  {
                                    variant: "caption",
                                    sx: {
                                      opacity: 0.7,
                                      display: "block",
                                      mt: 0.5
                                    },
                                    children: T.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        },
                        T.id
                      )),
                      d && /* @__PURE__ */ i(u, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ i(
                        Vt,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: we(e.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ i(Pi, { size: 16 }),
                            /* @__PURE__ */ i(F, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ i("div", { ref: h })
                    ]
                  }
                ),
                /* @__PURE__ */ m(
                  u,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${we(e.palette.divider, 0.1)}`
                    },
                    children: [
                      l.length > 400 && /* @__PURE__ */ m(
                        F,
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
                      /* @__PURE__ */ m(
                        u,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ i(
                              ua,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: d ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: l,
                                onChange: (T) => c(T.target.value),
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
                            /* @__PURE__ */ i(
                              Ne,
                              {
                                onClick: C,
                                disabled: !l.trim() || d,
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
                                children: /* @__PURE__ */ i(qd, {})
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
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ke(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function rt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function Sn({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function Vn(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let n = e.indexOf("?");
    n >= 0 && (t.search = e.substring(n), e = e.substring(0, n)), e && (t.pathname = e);
  }
  return t;
}
function oi(e, t, r = "/") {
  return Jd(e, t, r, !1);
}
function Jd(e, t, r, n, o) {
  let a = typeof t == "string" ? Vn(t) : t, s = lt(a.pathname || "/", r);
  if (s == null)
    return null;
  let l = Qd(e), c = null, d = du(s);
  for (let p = 0; c == null && p < l.length; ++p)
    c = lu(
      l[p],
      d,
      n
    );
  return c;
}
function Qd(e) {
  let t = ai(e);
  return Zd(t), t;
}
function ai(e, t = [], r = [], n = "", o = !1) {
  let a = (s, l, c = o, d) => {
    let p = {
      relativePath: d === void 0 ? s.path || "" : d,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: l,
      route: s
    };
    if (p.relativePath.startsWith("/")) {
      if (!p.relativePath.startsWith(n) && c)
        return;
      ke(
        p.relativePath.startsWith(n),
        `Absolute route path "${p.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ), p.relativePath = p.relativePath.slice(n.length);
    }
    let f = je([n, p.relativePath]), x = r.concat(p);
    s.children && s.children.length > 0 && (ke(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      s.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${f}".`
    ), ai(
      s.children,
      t,
      x,
      f,
      c
    )), !(s.path == null && !s.index) && t.push({
      path: f,
      score: iu(f, s.index),
      routesMeta: x
    });
  };
  return e.forEach((s, l) => {
    var c;
    if (s.path === "" || !((c = s.path) != null && c.includes("?")))
      a(s, l);
    else
      for (let d of ii(s.path))
        a(s, l, !0, d);
  }), t;
}
function ii(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...n] = t, o = r.endsWith("?"), a = r.replace(/\?$/, "");
  if (n.length === 0)
    return o ? [a, ""] : [a];
  let s = ii(n.join("/")), l = [];
  return l.push(
    ...s.map(
      (c) => c === "" ? a : [a, c].join("/")
    )
  ), o && l.push(...s), l.map(
    (c) => e.startsWith("/") && c === "" ? "/" : c
  );
}
function Zd(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : su(
      t.routesMeta.map((n) => n.childrenIndex),
      r.routesMeta.map((n) => n.childrenIndex)
    )
  );
}
var eu = /^:[\w-]+$/, tu = 3, ru = 2, nu = 1, ou = 10, au = -2, ea = (e) => e === "*";
function iu(e, t) {
  let r = e.split("/"), n = r.length;
  return r.some(ea) && (n += au), t && (n += ru), r.filter((o) => !ea(o)).reduce(
    (o, a) => o + (eu.test(a) ? tu : a === "" ? nu : ou),
    n
  );
}
function su(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, o) => n === t[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function lu(e, t, r = !1) {
  let { routesMeta: n } = e, o = {}, a = "/", s = [];
  for (let l = 0; l < n.length; ++l) {
    let c = n[l], d = l === n.length - 1, p = a === "/" ? t : t.slice(a.length) || "/", f = br(
      { path: c.relativePath, caseSensitive: c.caseSensitive, end: d },
      p
    ), x = c.route;
    if (!f && d && r && !n[n.length - 1].route.index && (f = br(
      {
        path: c.relativePath,
        caseSensitive: c.caseSensitive,
        end: !1
      },
      p
    )), !f)
      return null;
    Object.assign(o, f.params), s.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: je([a, f.pathname]),
      pathnameBase: hu(
        je([a, f.pathnameBase])
      ),
      route: x
    }), f.pathnameBase !== "/" && (a = je([a, f.pathnameBase]));
  }
  return s;
}
function br(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, n] = cu(
    e.path,
    e.caseSensitive,
    e.end
  ), o = t.match(r);
  if (!o) return null;
  let a = o[0], s = a.replace(/(.)\/+$/, "$1"), l = o.slice(1);
  return {
    params: n.reduce(
      (d, { paramName: p, isOptional: f }, x) => {
        if (p === "*") {
          let b = l[x] || "";
          s = a.slice(0, a.length - b.length).replace(/(.)\/+$/, "$1");
        }
        const h = l[x];
        return f && !h ? d[p] = void 0 : d[p] = (h || "").replace(/%2F/g, "/"), d;
      },
      {}
    ),
    pathname: a,
    pathnameBase: s,
    pattern: e
  };
}
function cu(e, t = !1, r = !0) {
  rt(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (s, l, c, d, p) => {
      if (n.push({ paramName: l, isOptional: c != null }), c) {
        let f = p.charAt(d + s.length);
        return f && f !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
      }
      return "/([^\\/]+)";
    }
  ).replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return e.endsWith("*") ? (n.push({ paramName: "*" }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, t ? void 0 : "i"), n];
}
function du(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return rt(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function lt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, n = e.charAt(r);
  return n && n !== "/" ? null : e.slice(r) || "/";
}
var uu = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function pu(e, t = "/") {
  let {
    pathname: r,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? Vn(e) : e, a;
  return r ? (r = li(r), r.startsWith("/") ? a = ta(r.substring(1), "/") : a = ta(r, t)) : a = t, {
    pathname: a,
    search: mu(n),
    hash: gu(o)
  };
}
function ta(e, t) {
  let r = vr(t).split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? r.length > 1 && r.pop() : o !== "." && r.push(o);
  }), r.length > 1 ? r.join("/") : "/";
}
function an(e, t, r, n) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    n
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fu(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function si(e) {
  let t = fu(e);
  return t.map(
    (r, n) => n === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function Hn(e, t, r, n = !1) {
  let o;
  typeof e == "string" ? o = Vn(e) : (o = { ...e }, ke(
    !o.pathname || !o.pathname.includes("?"),
    an("?", "pathname", "search", o)
  ), ke(
    !o.pathname || !o.pathname.includes("#"),
    an("#", "pathname", "hash", o)
  ), ke(
    !o.search || !o.search.includes("#"),
    an("#", "search", "hash", o)
  ));
  let a = e === "" || o.pathname === "", s = a ? "/" : o.pathname, l;
  if (s == null)
    l = r;
  else {
    let f = t.length - 1;
    if (!n && s.startsWith("..")) {
      let x = s.split("/");
      for (; x[0] === ".."; )
        x.shift(), f -= 1;
      o.pathname = x.join("/");
    }
    l = f >= 0 ? t[f] : "/";
  }
  let c = pu(o, l), d = s && s !== "/" && s.endsWith("/"), p = (a || s === ".") && r.endsWith("/");
  return !c.pathname.endsWith("/") && (d || p) && (c.pathname += "/"), c;
}
var li = (e) => e.replace(/\/\/+/g, "/"), je = (e) => li(e.join("/")), vr = (e) => e.replace(/\/+$/, ""), hu = (e) => vr(e).replace(/^\/*/, "/"), mu = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, gu = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, yu = class {
  constructor(e, t, r, n = !1) {
    this.status = e, this.statusText = t || "", this.internal = n, r instanceof Error ? (this.data = r.toString(), this.error = r) : this.data = r;
  }
};
function xu(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
function bu(e) {
  let t = e.map((r) => r.route.path).filter(Boolean);
  return je(t) || "/";
}
var ci = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function di(e, t) {
  let r = e;
  if (typeof r != "string" || !uu.test(r))
    return {
      absoluteURL: void 0,
      isExternal: !1,
      to: r
    };
  let n = r, o = !1;
  if (ci)
    try {
      let a = new URL(window.location.href), s = r.startsWith("//") ? new URL(a.protocol + r) : new URL(r), l = lt(s.pathname, t);
      s.origin === a.origin && l != null ? r = l + s.search + s.hash : o = !0;
    } catch {
      rt(
        !1,
        `<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
      );
    }
  return {
    absoluteURL: n,
    isExternal: o,
    to: r
  };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var ui = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  ui
);
var vu = [
  "GET",
  ...ui
];
new Set(vu);
var Mt = w.createContext(null);
Mt.displayName = "DataRouter";
var Nr = w.createContext(null);
Nr.displayName = "DataRouterState";
var pi = w.createContext(!1);
function Su() {
  return w.useContext(pi);
}
var fi = w.createContext({
  isTransitioning: !1
});
fi.displayName = "ViewTransition";
var wu = w.createContext(
  /* @__PURE__ */ new Map()
);
wu.displayName = "Fetchers";
var Cu = w.createContext(null);
Cu.displayName = "Await";
var Ve = w.createContext(
  null
);
Ve.displayName = "Navigation";
var Un = w.createContext(
  null
);
Un.displayName = "Location";
var nt = w.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
nt.displayName = "Route";
var Gn = w.createContext(null);
Gn.displayName = "RouteError";
var hi = "REACT_ROUTER_ERROR", ku = "REDIRECT", Eu = "ROUTE_ERROR_RESPONSE";
function Tu(e) {
  if (e.startsWith(`${hi}:${ku}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string" && typeof t.location == "string" && typeof t.reloadDocument == "boolean" && typeof t.replace == "boolean")
        return t;
    } catch {
    }
}
function Iu(e) {
  if (e.startsWith(
    `${hi}:${Eu}:{`
  ))
    try {
      let t = JSON.parse(e.slice(40));
      if (typeof t == "object" && t && typeof t.status == "number" && typeof t.statusText == "string")
        return new yu(
          t.status,
          t.statusText,
          t.data
        );
    } catch {
    }
}
function Ru(e, { relative: t } = {}) {
  ke(
    Lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: n } = w.useContext(Ve), { hash: o, pathname: a, search: s } = Qt(e, { relative: t }), l = a;
  return r !== "/" && (l = a === "/" ? r : je([r, a])), n.createHref({ pathname: l, search: s, hash: o });
}
function Lr() {
  return w.useContext(Un) != null;
}
function Je() {
  return ke(
    Lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), w.useContext(Un).location;
}
var mi = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gi(e) {
  w.useContext(Ve).static || w.useLayoutEffect(e);
}
function Wr() {
  let { isDataRoute: e } = w.useContext(nt);
  return e ? Bu() : $u();
}
function $u() {
  ke(
    Lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = w.useContext(Mt), { basename: t, navigator: r } = w.useContext(Ve), { matches: n } = w.useContext(nt), { pathname: o } = Je(), a = JSON.stringify(si(n)), s = w.useRef(!1);
  return gi(() => {
    s.current = !0;
  }), w.useCallback(
    (c, d = {}) => {
      if (rt(s.current, mi), !s.current) return;
      if (typeof c == "number") {
        r.go(c);
        return;
      }
      let p = Hn(
        c,
        JSON.parse(a),
        o,
        d.relative === "path"
      );
      e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : je([t, p.pathname])), (d.replace ? r.replace : r.push)(
        p,
        d.state,
        d
      );
    },
    [
      t,
      r,
      a,
      o,
      e
    ]
  );
}
w.createContext(null);
function Qt(e, { relative: t } = {}) {
  let { matches: r } = w.useContext(nt), { pathname: n } = Je(), o = JSON.stringify(si(r));
  return w.useMemo(
    () => Hn(
      e,
      JSON.parse(o),
      n,
      t === "path"
    ),
    [e, o, n, t]
  );
}
function Au(e, t, r) {
  ke(
    Lr(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: n } = w.useContext(Ve), { matches: o } = w.useContext(nt), a = o[o.length - 1], s = a ? a.params : {}, l = a ? a.pathname : "/", c = a ? a.pathnameBase : "/", d = a && a.route;
  {
    let S = d && d.path || "";
    xi(
      l,
      !d || S.endsWith("*") || S.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${l}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S === "/" ? "*" : `${S}/*`}">.`
    );
  }
  let p = Je(), f;
  f = p;
  let x = f.pathname || "/", h = x;
  if (c !== "/") {
    let S = c.replace(/^\//, "").split("/");
    h = "/" + x.replace(/^\//, "").split("/").slice(S.length).join("/");
  }
  let b = r && r.state.matches.length ? (
    // If we're in a data router, use the matches we've already identified but ensure
    // we have the latest route instances from the manifest in case elements have changed
    r.state.matches.map(
      (S) => Object.assign(S, {
        route: r.manifest[S.route.id] || S.route
      })
    )
  ) : oi(e, { pathname: h });
  return rt(
    d || b != null,
    `No routes matched location "${f.pathname}${f.search}${f.hash}" `
  ), rt(
    b == null || b[b.length - 1].route.element !== void 0 || b[b.length - 1].route.Component !== void 0 || b[b.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  ), zu(
    b && b.map(
      (S) => Object.assign({}, S, {
        params: Object.assign({}, s, S.params),
        pathname: je([
          c,
          // Re-encode pathnames that were decoded inside matchRoutes.
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          n.encodeLocation ? n.encodeLocation(
            S.pathname.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : S.pathname
        ]),
        pathnameBase: S.pathnameBase === "/" ? c : je([
          c,
          // Re-encode pathnames that were decoded inside matchRoutes
          // Pre-encode `%`, `?` and `#` ahead of `encodeLocation` because it uses
          // `new URL()` internally and we need to prevent it from treating
          // them as separators
          n.encodeLocation ? n.encodeLocation(
            S.pathnameBase.replace(/%/g, "%25").replace(/\?/g, "%3F").replace(/#/g, "%23")
          ).pathname : S.pathnameBase
        ])
      })
    ),
    o,
    r
  );
}
function _u() {
  let e = Wu(), t = xu(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, n = "rgba(200,200,200, 0.5)", o = { padding: "0.5rem", backgroundColor: n }, a = { padding: "2px 4px", backgroundColor: n }, s = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), s = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ w.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ w.createElement("code", { style: a }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ w.createElement("code", { style: a }, "errorElement"), " prop on your route.")), /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ w.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ w.createElement("pre", { style: o }, r) : null, s);
}
var Ou = /* @__PURE__ */ w.createElement(_u, null), yi = class extends w.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    this.props.onError ? this.props.onError(e, t) : console.error(
      "React Router caught the following error during render",
      e
    );
  }
  render() {
    let e = this.state.error;
    if (this.context && typeof e == "object" && e && "digest" in e && typeof e.digest == "string") {
      const r = Iu(e.digest);
      r && (e = r);
    }
    let t = e !== void 0 ? /* @__PURE__ */ w.createElement(nt.Provider, { value: this.props.routeContext }, /* @__PURE__ */ w.createElement(
      Gn.Provider,
      {
        value: e,
        children: this.props.component
      }
    )) : this.props.children;
    return this.context ? /* @__PURE__ */ w.createElement(Mu, { error: e }, t) : t;
  }
};
yi.contextType = pi;
var sn = /* @__PURE__ */ new WeakMap();
function Mu({
  children: e,
  error: t
}) {
  let { basename: r } = w.useContext(Ve);
  if (typeof t == "object" && t && "digest" in t && typeof t.digest == "string") {
    let n = Tu(t.digest);
    if (n) {
      let o = sn.get(t);
      if (o) throw o;
      let a = di(n.location, r);
      if (ci && !sn.get(t))
        if (a.isExternal || n.reloadDocument)
          window.location.href = a.absoluteURL || a.to;
        else {
          const s = Promise.resolve().then(
            () => window.__reactRouterDataRouter.navigate(a.to, {
              replace: n.replace
            })
          );
          throw sn.set(t, s), s;
        }
      return /* @__PURE__ */ w.createElement(
        "meta",
        {
          httpEquiv: "refresh",
          content: `0;url=${a.absoluteURL || a.to}`
        }
      );
    }
  }
  return e;
}
function Pu({ routeContext: e, match: t, children: r }) {
  let n = w.useContext(Mt);
  return n && n.static && n.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (n.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ w.createElement(nt.Provider, { value: e }, r);
}
function zu(e, t = [], r) {
  let n = r == null ? void 0 : r.state;
  if (e == null) {
    if (!n)
      return null;
    if (n.errors)
      e = n.matches;
    else if (t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else
      return null;
  }
  let o = e, a = n == null ? void 0 : n.errors;
  if (a != null) {
    let p = o.findIndex(
      (f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0
    );
    ke(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        a
      ).join(",")}`
    ), o = o.slice(
      0,
      Math.min(o.length, p + 1)
    );
  }
  let s = !1, l = -1;
  if (r && n) {
    s = n.renderFallback;
    for (let p = 0; p < o.length; p++) {
      let f = o[p];
      if ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (l = p), f.route.id) {
        let { loaderData: x, errors: h } = n, b = f.route.loader && !x.hasOwnProperty(f.route.id) && (!h || h[f.route.id] === void 0);
        if (f.route.lazy || b) {
          r.isStatic && (s = !0), l >= 0 ? o = o.slice(0, l + 1) : o = [o[0]];
          break;
        }
      }
    }
  }
  let c = r == null ? void 0 : r.onError, d = n && c ? (p, f) => {
    var x, h;
    c(p, {
      location: n.location,
      params: ((h = (x = n.matches) == null ? void 0 : x[0]) == null ? void 0 : h.params) ?? {},
      pattern: bu(n.matches),
      errorInfo: f
    });
  } : void 0;
  return o.reduceRight(
    (p, f, x) => {
      let h, b = !1, y = null, S = null;
      n && (h = a && f.route.id ? a[f.route.id] : void 0, y = f.route.errorElement || Ou, s && (l < 0 && x === 0 ? (xi(
        "route-fallback",
        !1,
        "No `HydrateFallback` element provided to render during initial hydration"
      ), b = !0, S = null) : l === x && (b = !0, S = f.route.hydrateFallbackElement || null)));
      let C = t.concat(o.slice(0, x + 1)), I = () => {
        let T;
        return h ? T = y : b ? T = S : f.route.Component ? T = /* @__PURE__ */ w.createElement(f.route.Component, null) : f.route.element ? T = f.route.element : T = p, /* @__PURE__ */ w.createElement(
          Pu,
          {
            match: f,
            routeContext: {
              outlet: p,
              matches: C,
              isDataRoute: n != null
            },
            children: T
          }
        );
      };
      return n && (f.route.ErrorBoundary || f.route.errorElement || x === 0) ? /* @__PURE__ */ w.createElement(
        yi,
        {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: h,
          children: I(),
          routeContext: { outlet: null, matches: C, isDataRoute: !0 },
          onError: d
        }
      ) : I();
    },
    null
  );
}
function Yn(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Du(e) {
  let t = w.useContext(Mt);
  return ke(t, Yn(e)), t;
}
function Fu(e) {
  let t = w.useContext(Nr);
  return ke(t, Yn(e)), t;
}
function Nu(e) {
  let t = w.useContext(nt);
  return ke(t, Yn(e)), t;
}
function qn(e) {
  let t = Nu(e), r = t.matches[t.matches.length - 1];
  return ke(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function Lu() {
  return qn(
    "useRouteId"
    /* UseRouteId */
  );
}
function Wu() {
  var n;
  let e = w.useContext(Gn), t = Fu(
    "useRouteError"
    /* UseRouteError */
  ), r = qn(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : (n = t.errors) == null ? void 0 : n[r];
}
function Bu() {
  let { router: e } = Du(
    "useNavigate"
    /* UseNavigateStable */
  ), t = qn(
    "useNavigate"
    /* UseNavigateStable */
  ), r = w.useRef(!1);
  return gi(() => {
    r.current = !0;
  }), w.useCallback(
    async (o, a = {}) => {
      rt(r.current, mi), r.current && (typeof o == "number" ? await e.navigate(o) : await e.navigate(o, { fromRouteId: t, ...a }));
    },
    [e, t]
  );
}
var ra = {};
function xi(e, t, r) {
  !t && !ra[e] && (ra[e] = !0, rt(!1, r));
}
w.memo(ju);
function ju({
  routes: e,
  manifest: t,
  future: r,
  state: n,
  isStatic: o,
  onError: a
}) {
  return Au(e, void 0, {
    manifest: t,
    state: n,
    isStatic: o,
    onError: a
  });
}
var sr = "get", lr = "application/x-www-form-urlencoded";
function Br(e) {
  return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function Vu(e) {
  return Br(e) && e.tagName.toLowerCase() === "button";
}
function Hu(e) {
  return Br(e) && e.tagName.toLowerCase() === "form";
}
function Uu(e) {
  return Br(e) && e.tagName.toLowerCase() === "input";
}
function Gu(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Yu(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Gu(e);
}
var nr = null;
function qu() {
  if (nr === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), nr = !1;
    } catch {
      nr = !0;
    }
  return nr;
}
var Ku = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ln(e) {
  return e != null && !Ku.has(e) ? (rt(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${lr}"`
  ), null) : e;
}
function Xu(e, t) {
  let r, n, o, a, s;
  if (Hu(e)) {
    let l = e.getAttribute("action");
    n = l ? lt(l, t) : null, r = e.getAttribute("method") || sr, o = ln(e.getAttribute("enctype")) || lr, a = new FormData(e);
  } else if (Vu(e) || Uu(e) && (e.type === "submit" || e.type === "image")) {
    let l = e.form;
    if (l == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let c = e.getAttribute("formaction") || l.getAttribute("action");
    if (n = c ? lt(c, t) : null, r = e.getAttribute("formmethod") || l.getAttribute("method") || sr, o = ln(e.getAttribute("formenctype")) || ln(l.getAttribute("enctype")) || lr, a = new FormData(l, e), !qu()) {
      let { name: d, type: p, value: f } = e;
      if (p === "image") {
        let x = d ? `${d}.` : "";
        a.append(`${x}x`, "0"), a.append(`${x}y`, "0");
      } else d && a.append(d, f);
    }
  } else {
    if (Br(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = sr, n = null, o = lr, s = e;
  }
  return a && o === "text/plain" && (s = a, a = void 0), { action: n, method: r.toLowerCase(), encType: o, formData: a, body: s };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Kn(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function bi(e, t, r, n) {
  let o = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r ? o.pathname.endsWith("/") ? o.pathname = `${o.pathname}_.${n}` : o.pathname = `${o.pathname}.${n}` : o.pathname === "/" ? o.pathname = `_root.${n}` : t && lt(o.pathname, t) === "/" ? o.pathname = `${vr(t)}/_root.${n}` : o.pathname = `${vr(o.pathname)}.${n}`, o;
}
async function Ju(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Qu(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Zu(e, t, r) {
  let n = await Promise.all(
    e.map(async (o) => {
      let a = t.routes[o.route.id];
      if (a) {
        let s = await Ju(a, r);
        return s.links ? s.links() : [];
      }
      return [];
    })
  );
  return np(
    n.flat(1).filter(Qu).filter((o) => o.rel === "stylesheet" || o.rel === "preload").map(
      (o) => o.rel === "stylesheet" ? { ...o, rel: "prefetch", as: "style" } : { ...o, rel: "prefetch" }
    )
  );
}
function na(e, t, r, n, o, a) {
  let s = (c, d) => r[d] ? c.route.id !== r[d].route.id : !0, l = (c, d) => {
    var p;
    return (
      // param change, /users/123 -> /users/456
      r[d].pathname !== c.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((p = r[d].route.path) == null ? void 0 : p.endsWith("*")) && r[d].params["*"] !== c.params["*"]
    );
  };
  return a === "assets" ? t.filter(
    (c, d) => s(c, d) || l(c, d)
  ) : a === "data" ? t.filter((c, d) => {
    var f;
    let p = n.routes[c.route.id];
    if (!p || !p.hasLoader)
      return !1;
    if (s(c, d) || l(c, d))
      return !0;
    if (c.route.shouldRevalidate) {
      let x = c.route.shouldRevalidate({
        currentUrl: new URL(
          o.pathname + o.search + o.hash,
          window.origin
        ),
        currentParams: ((f = r[0]) == null ? void 0 : f.params) || {},
        nextUrl: new URL(e, window.origin),
        nextParams: c.params,
        defaultShouldRevalidate: !0
      });
      if (typeof x == "boolean")
        return x;
    }
    return !0;
  }) : [];
}
function ep(e, t, { includeHydrateFallback: r } = {}) {
  return tp(
    e.map((n) => {
      let o = t.routes[n.route.id];
      if (!o) return [];
      let a = [o.module];
      return o.clientActionModule && (a = a.concat(o.clientActionModule)), o.clientLoaderModule && (a = a.concat(o.clientLoaderModule)), r && o.hydrateFallbackModule && (a = a.concat(o.hydrateFallbackModule)), o.imports && (a = a.concat(o.imports)), a;
    }).flat(1)
  );
}
function tp(e) {
  return [...new Set(e)];
}
function rp(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let n of r)
    t[n] = e[n];
  return t;
}
function np(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((n, o) => {
    let a = JSON.stringify(rp(o));
    return r.has(a) || (r.add(a), n.push({ key: a, link: o })), n;
  }, []);
}
function Xn() {
  let e = w.useContext(Mt);
  return Kn(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function op() {
  let e = w.useContext(Nr);
  return Kn(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Jn = w.createContext(void 0);
Jn.displayName = "FrameworkContext";
function Qn() {
  let e = w.useContext(Jn);
  return Kn(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function ap(e, t) {
  let r = w.useContext(Jn), [n, o] = w.useState(!1), [a, s] = w.useState(!1), { onFocus: l, onBlur: c, onMouseEnter: d, onMouseLeave: p, onTouchStart: f } = t, x = w.useRef(null);
  w.useEffect(() => {
    if (e === "render" && s(!0), e === "viewport") {
      let y = (C) => {
        C.forEach((I) => {
          s(I.isIntersecting);
        });
      }, S = new IntersectionObserver(y, { threshold: 0.5 });
      return x.current && S.observe(x.current), () => {
        S.disconnect();
      };
    }
  }, [e]), w.useEffect(() => {
    if (n) {
      let y = setTimeout(() => {
        s(!0);
      }, 100);
      return () => {
        clearTimeout(y);
      };
    }
  }, [n]);
  let h = () => {
    o(!0);
  }, b = () => {
    o(!1), s(!1);
  };
  return r ? e !== "intent" ? [a, x, {}] : [
    a,
    x,
    {
      onFocus: Ft(l, h),
      onBlur: Ft(c, b),
      onMouseEnter: Ft(d, h),
      onMouseLeave: Ft(p, b),
      onTouchStart: Ft(f, h)
    }
  ] : [!1, x, {}];
}
function Ft(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function ip({ page: e, ...t }) {
  let r = Su(), { router: n } = Xn(), o = w.useMemo(
    () => oi(n.routes, e, n.basename),
    [n.routes, e, n.basename]
  );
  return o ? r ? /* @__PURE__ */ w.createElement(lp, { page: e, matches: o, ...t }) : /* @__PURE__ */ w.createElement(cp, { page: e, matches: o, ...t }) : null;
}
function sp(e) {
  let { manifest: t, routeModules: r } = Qn(), [n, o] = w.useState([]);
  return w.useEffect(() => {
    let a = !1;
    return Zu(e, t, r).then(
      (s) => {
        a || o(s);
      }
    ), () => {
      a = !0;
    };
  }, [e, t, r]), n;
}
function lp({
  page: e,
  matches: t,
  ...r
}) {
  let n = Je(), { future: o } = Qn(), { basename: a } = Xn(), s = w.useMemo(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let l = bi(
      e,
      a,
      o.unstable_trailingSlashAwareDataRequests,
      "rsc"
    ), c = !1, d = [];
    for (let p of t)
      typeof p.route.shouldRevalidate == "function" ? c = !0 : d.push(p.route.id);
    return c && d.length > 0 && l.searchParams.set("_routes", d.join(",")), [l.pathname + l.search];
  }, [
    a,
    o.unstable_trailingSlashAwareDataRequests,
    e,
    n,
    t
  ]);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, s.map((l) => /* @__PURE__ */ w.createElement("link", { key: l, rel: "prefetch", as: "fetch", href: l, ...r })));
}
function cp({
  page: e,
  matches: t,
  ...r
}) {
  let n = Je(), { future: o, manifest: a, routeModules: s } = Qn(), { basename: l } = Xn(), { loaderData: c, matches: d } = op(), p = w.useMemo(
    () => na(
      e,
      t,
      d,
      a,
      n,
      "data"
    ),
    [e, t, d, a, n]
  ), f = w.useMemo(
    () => na(
      e,
      t,
      d,
      a,
      n,
      "assets"
    ),
    [e, t, d, a, n]
  ), x = w.useMemo(() => {
    if (e === n.pathname + n.search + n.hash)
      return [];
    let y = /* @__PURE__ */ new Set(), S = !1;
    if (t.forEach((I) => {
      var _;
      let T = a.routes[I.route.id];
      !T || !T.hasLoader || (!p.some((E) => E.route.id === I.route.id) && I.route.id in c && ((_ = s[I.route.id]) != null && _.shouldRevalidate) || T.hasClientLoader ? S = !0 : y.add(I.route.id));
    }), y.size === 0)
      return [];
    let C = bi(
      e,
      l,
      o.unstable_trailingSlashAwareDataRequests,
      "data"
    );
    return S && y.size > 0 && C.searchParams.set(
      "_routes",
      t.filter((I) => y.has(I.route.id)).map((I) => I.route.id).join(",")
    ), [C.pathname + C.search];
  }, [
    l,
    o.unstable_trailingSlashAwareDataRequests,
    c,
    n,
    a,
    p,
    t,
    e,
    s
  ]), h = w.useMemo(
    () => ep(f, a),
    [f, a]
  ), b = sp(f);
  return /* @__PURE__ */ w.createElement(w.Fragment, null, x.map((y) => /* @__PURE__ */ w.createElement("link", { key: y, rel: "prefetch", as: "fetch", href: y, ...r })), h.map((y) => /* @__PURE__ */ w.createElement("link", { key: y, rel: "modulepreload", href: y, ...r })), b.map(({ key: y, link: S }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ w.createElement(
      "link",
      {
        key: y,
        nonce: r.nonce,
        ...S,
        crossOrigin: S.crossOrigin ?? r.crossOrigin
      }
    )
  )));
}
function dp(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var up = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  up && (window.__reactRouterVersion = // @ts-expect-error
  "7.15.1");
} catch {
}
var vi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, gt = w.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: n = "none",
    relative: o,
    reloadDocument: a,
    replace: s,
    mask: l,
    state: c,
    target: d,
    to: p,
    preventScrollReset: f,
    viewTransition: x,
    defaultShouldRevalidate: h,
    ...b
  }, y) {
    let { basename: S, navigator: C, useTransitions: I } = w.useContext(Ve), T = typeof p == "string" && vi.test(p), _ = di(p, S);
    p = _.to;
    let E = Ru(p, { relative: o }), R = Je(), j = null;
    if (l) {
      let L = Hn(
        l,
        [],
        R.mask ? R.mask.pathname : "/",
        !0
      );
      S !== "/" && (L.pathname = L.pathname === "/" ? S : je([S, L.pathname])), j = C.createHref(L);
    }
    let [D, N, U] = ap(
      n,
      b
    ), W = mp(p, {
      replace: s,
      mask: l,
      state: c,
      target: d,
      preventScrollReset: f,
      relative: o,
      viewTransition: x,
      defaultShouldRevalidate: h,
      useTransitions: I
    });
    function g(L) {
      t && t(L), L.defaultPrevented || W(L);
    }
    let P = !(_.isExternal || a), O = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ w.createElement(
        "a",
        {
          ...b,
          ...U,
          href: (P ? j : void 0) || _.absoluteURL || E,
          onClick: P ? g : t,
          ref: dp(y, N),
          target: d,
          "data-discover": !T && r === "render" ? "true" : void 0
        }
      )
    );
    return D && !T ? /* @__PURE__ */ w.createElement(w.Fragment, null, O, /* @__PURE__ */ w.createElement(ip, { page: E })) : O;
  }
);
gt.displayName = "Link";
var pp = w.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: n = "",
    end: o = !1,
    style: a,
    to: s,
    viewTransition: l,
    children: c,
    ...d
  }, p) {
    let f = Qt(s, { relative: d.relative }), x = Je(), h = w.useContext(Nr), { navigator: b, basename: y } = w.useContext(Ve), S = h != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    vp(f) && l === !0, C = b.encodeLocation ? b.encodeLocation(f).pathname : f.pathname, I = x.pathname, T = h && h.navigation && h.navigation.location ? h.navigation.location.pathname : null;
    r || (I = I.toLowerCase(), T = T ? T.toLowerCase() : null, C = C.toLowerCase()), T && y && (T = lt(T, y) || T);
    const _ = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
    let E = I === C || !o && I.startsWith(C) && I.charAt(_) === "/", R = T != null && (T === C || !o && T.startsWith(C) && T.charAt(C.length) === "/"), j = {
      isActive: E,
      isPending: R,
      isTransitioning: S
    }, D = E ? t : void 0, N;
    typeof n == "function" ? N = n(j) : N = [
      n,
      E ? "active" : null,
      R ? "pending" : null,
      S ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let U = typeof a == "function" ? a(j) : a;
    return /* @__PURE__ */ w.createElement(
      gt,
      {
        ...d,
        "aria-current": D,
        className: N,
        ref: p,
        style: U,
        to: s,
        viewTransition: l
      },
      typeof c == "function" ? c(j) : c
    );
  }
);
pp.displayName = "NavLink";
var fp = w.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: n,
    replace: o,
    state: a,
    method: s = sr,
    action: l,
    onSubmit: c,
    relative: d,
    preventScrollReset: p,
    viewTransition: f,
    defaultShouldRevalidate: x,
    ...h
  }, b) => {
    let { useTransitions: y } = w.useContext(Ve), S = xp(), C = bp(l, { relative: d }), I = s.toLowerCase() === "get" ? "get" : "post", T = typeof l == "string" && vi.test(l), _ = (E) => {
      if (c && c(E), E.defaultPrevented) return;
      E.preventDefault();
      let R = E.nativeEvent.submitter, j = (R == null ? void 0 : R.getAttribute("formmethod")) || s, D = () => S(R || E.currentTarget, {
        fetcherKey: t,
        method: j,
        navigate: r,
        replace: o,
        state: a,
        relative: d,
        preventScrollReset: p,
        viewTransition: f,
        defaultShouldRevalidate: x
      });
      y && r !== !1 ? w.startTransition(() => D()) : D();
    };
    return /* @__PURE__ */ w.createElement(
      "form",
      {
        ref: b,
        method: I,
        action: C,
        onSubmit: n ? c : _,
        ...h,
        "data-discover": !T && e === "render" ? "true" : void 0
      }
    );
  }
);
fp.displayName = "Form";
function hp(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Si(e) {
  let t = w.useContext(Mt);
  return ke(t, hp(e)), t;
}
function mp(e, {
  target: t,
  replace: r,
  mask: n,
  state: o,
  preventScrollReset: a,
  relative: s,
  viewTransition: l,
  defaultShouldRevalidate: c,
  useTransitions: d
} = {}) {
  let p = Wr(), f = Je(), x = Qt(e, { relative: s });
  return w.useCallback(
    (h) => {
      if (Yu(h, t)) {
        h.preventDefault();
        let b = r !== void 0 ? r : Sn(f) === Sn(x), y = () => p(e, {
          replace: b,
          mask: n,
          state: o,
          preventScrollReset: a,
          relative: s,
          viewTransition: l,
          defaultShouldRevalidate: c
        });
        d ? w.startTransition(() => y()) : y();
      }
    },
    [
      f,
      p,
      x,
      r,
      n,
      o,
      t,
      e,
      a,
      s,
      l,
      c,
      d
    ]
  );
}
var gp = 0, yp = () => `__${String(++gp)}__`;
function xp() {
  let { router: e } = Si(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = w.useContext(Ve), r = Lu(), n = e.fetch, o = e.navigate;
  return w.useCallback(
    async (a, s = {}) => {
      let { action: l, method: c, encType: d, formData: p, body: f } = Xu(
        a,
        t
      );
      if (s.navigate === !1) {
        let x = s.fetcherKey || yp();
        await n(x, r, s.action || l, {
          defaultShouldRevalidate: s.defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: f,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          flushSync: s.flushSync
        });
      } else
        await o(s.action || l, {
          defaultShouldRevalidate: s.defaultShouldRevalidate,
          preventScrollReset: s.preventScrollReset,
          formData: p,
          body: f,
          formMethod: s.method || c,
          formEncType: s.encType || d,
          replace: s.replace,
          state: s.state,
          fromRouteId: r,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [n, o, t, r]
  );
}
function bp(e, { relative: t } = {}) {
  let { basename: r } = w.useContext(Ve), n = w.useContext(nt);
  ke(n, "useFormAction must be used inside a RouteContext");
  let [o] = n.matches.slice(-1), a = { ...Qt(e || ".", { relative: t }) }, s = Je();
  if (e == null) {
    a.search = s.search;
    let l = new URLSearchParams(a.search), c = l.getAll("index");
    if (c.some((p) => p === "")) {
      l.delete("index"), c.filter((f) => f).forEach((f) => l.append("index", f));
      let p = l.toString();
      a.search = p ? `?${p}` : "";
    }
  }
  return (!e || e === ".") && o.route.index && (a.search = a.search ? a.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (a.pathname = a.pathname === "/" ? r : je([r, a.pathname])), Sn(a);
}
function vp(e, { relative: t } = {}) {
  let r = w.useContext(fi);
  ke(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: n } = Si(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), o = Qt(e, { relative: t });
  if (!r.isTransitioning)
    return !1;
  let a = lt(r.currentLocation.pathname, n) || r.currentLocation.pathname, s = lt(r.nextLocation.pathname, n) || r.nextLocation.pathname;
  return br(o.pathname, s) != null || br(o.pathname, a) != null;
}
const Sp = Oe(/* @__PURE__ */ i("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work"), Of = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n = "Nuestros Servicios",
  className: o,
  sx: a
}) => {
  const s = Wr();
  return /* @__PURE__ */ i(
    kn,
    {
      variant: e,
      size: t,
      onClick: () => {
        s("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: r ? /* @__PURE__ */ i(Sp, {}) : void 0,
      className: o,
      sx: a,
      children: n
    }
  );
}, wp = Ie(wn, {
  shouldForwardProp: (e) => e !== "cardVariant" && e !== "forceMode"
})(({ theme: e, cardVariant: t, forceMode: r }) => {
  const n = r ? r === "light" : e.palette.mode === "light", o = {
    borderRadius: 0,
    // Brutalist zero radius
    transition: "all 0.2s steps(4, end)",
    position: "relative",
    overflow: "hidden",
    backgroundColor: n ? v.white : v.black,
    color: n ? v.black : v.white,
    border: `1px solid ${n ? v.black : v.white}`,
    boxShadow: "none"
  };
  switch (t) {
    case "elevated":
      return {
        ...o,
        border: `2px solid ${n ? v.black : v.white}`,
        "&:hover": {
          transform: "translate(-4px, -4px)",
          boxShadow: n ? `8px 8px 0px ${v.black}` : `8px 8px 0px ${v.white}`
        }
      };
    case "outlined":
      return {
        ...o,
        backgroundColor: "transparent",
        border: `1px solid ${n ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)"}`,
        "&:hover": {
          borderColor: n ? v.black : v.white,
          bgcolor: n ? "rgba(0,0,0,0.02)" : "rgba(255,255,255,0.02)"
        }
      };
    case "industrial":
      return {
        ...o,
        border: `4px solid ${n ? v.black : v.white}`,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "40px",
          borderBottom: `1px solid ${n ? v.black : v.white}`,
          zIndex: 0
        }
      };
    default:
      return o;
  }
}), Cp = Ie(u)(({ theme: e }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...re.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), jr = ({
  children: e,
  variant: t = "default",
  elevation: r = 0,
  showContent: n = !0,
  label: o,
  sx: a,
  ...s
}) => {
  const l = ee();
  return /* @__PURE__ */ m(
    wp,
    {
      cardVariant: t,
      elevation: r,
      forceMode: l.effectiveMode,
      sx: a,
      ...s,
      children: [
        o && /* @__PURE__ */ m(Cp, { children: [
          '"',
          o,
          '"'
        ] }),
        n && /* @__PURE__ */ i(Yt, { sx: {
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
}, Mf = ({
  title: e,
  subtitle: t = "",
  transactions: r,
  onShowMore: n = () => {
  },
  variant: o = "elevated"
}) => {
  const a = ee(), s = () => {
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
  }, l = (p) => ({
    Shopping: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(ns, {})
    },
    Fitness: {
      bg: a.palette.success + "20",
      text: a.palette.success,
      icon: /* @__PURE__ */ i(rs, {})
    },
    Education: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(ts, {})
    },
    Investments: {
      bg: a.palette.success + "20",
      text: a.palette.success,
      icon: /* @__PURE__ */ i(es, {})
    },
    Health: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(Zi, {})
    }
  })[p] || {
    bg: a.helpers.background.secondary,
    text: a.helpers.text.secondary,
    icon: /* @__PURE__ */ i(Qi, {})
  }, c = (p) => {
    switch (p) {
      case "completed":
        return a.palette.success;
      case "pending":
        return a.palette.accent;
      case "failed":
        return "#DC2626";
      default:
        return a.palette.success;
    }
  }, d = s();
  return /* @__PURE__ */ i(
    jr,
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
      children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(so, { sx: {
              width: 48,
              height: 48,
              background: d.surface.background,
              border: d.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ i(Ji, { sx: {
              color: a.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ m(u, { children: [
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
            Ne,
            {
              size: "small",
              sx: {
                color: a.helpers.text.secondary,
                "&:hover": {
                  background: a.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ i(co, {})
            }
          )
        ] }),
        /* @__PURE__ */ i(u, { sx: { mb: 3 }, children: r.map((p) => {
          const f = l(p.category);
          return /* @__PURE__ */ m(
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
                  background: a.helpers.state.hover,
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ i(so, { sx: {
                  width: 48,
                  height: 48,
                  background: f.bg,
                  color: f.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: p.icon || f.icon }),
                /* @__PURE__ */ m(u, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ m(u, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ i(Ae, { sx: {
                      fontWeight: 400,
                      color: a.helpers.text.primary
                    }, children: p.merchant }),
                    /* @__PURE__ */ m(Kt, { sx: {
                      fontWeight: 400,
                      color: a.helpers.text.primary
                    }, children: [
                      "$",
                      p.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ m(u, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ i(
                      It,
                      {
                        label: p.category,
                        size: "small",
                        sx: {
                          backgroundColor: f.bg,
                          color: f.text,
                          fontSize: "0.75rem",
                          height: 24,
                          fontWeight: 400,
                          "& .MuiChip-label": {
                            px: 1.5
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ i(de, { sx: {
                        color: a.helpers.text.secondary
                      }, children: p.time }),
                      p.status && /* @__PURE__ */ i(u, { sx: {
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
        n && /* @__PURE__ */ m(be, { children: [
          /* @__PURE__ */ i(Sr, { sx: {
            mb: 3,
            borderColor: a.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(
              Ne,
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
                children: /* @__PURE__ */ i(co, {})
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
}, kp = Ie(F)(({ stepSize: e, theme: t }) => ({
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
})), Pf = ({
  number: e,
  title: t,
  description: r,
  color: n = "primary.main",
  size: o = "medium",
  sx: a,
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
  }, { numberSize: d, titleSize: p, descriptionSize: f } = c();
  return /* @__PURE__ */ m(
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
        ...a
      },
      ...s,
      children: [
        /* @__PURE__ */ i(
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
            children: /* @__PURE__ */ i(
              kp,
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
        /* @__PURE__ */ m(u, { sx: { flex: 1, pt: o === "large" ? 1.5 : o === "medium" ? 1 : 0.5 }, children: [
          /* @__PURE__ */ i(
            Re,
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
          /* @__PURE__ */ i(
            Re,
            {
              sx: {
                fontSize: f,
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
}, Ep = Ie(u)(({ theme: e }) => {
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
}), zf = ({
  title: e,
  subtitle: t = "",
  categories: r,
  totalAmount: n = 0,
  onAddCategory: o = () => {
  },
  variant: a = "industrial"
}) => {
  const s = ee(), l = s.effectiveMode === "light";
  return /* @__PURE__ */ m(
    jr,
    {
      variant: a,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ i(u, { sx: { mb: 4 }, children: /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ i(u, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${l ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: l ? "#000" : "#fff",
            color: l ? "#fff" : "#000"
          }, children: /* @__PURE__ */ i(os, {}) }),
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ i(F, { sx: { ...re.display.medium, fontSize: "1.5rem", mb: 0 }, children: e }),
            t && /* @__PURE__ */ m(F, { sx: { ...re.label.secondary }, children: [
              "// ",
              t
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ m(u, { sx: {
          p: 3,
          border: `4px solid ${l ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ i(F, { sx: { ...re.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ m(Kt, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              n == null ? void 0 : n.toLocaleString()
            ] }),
            /* @__PURE__ */ i(
              Ne,
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
                children: /* @__PURE__ */ i(as, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(F, { sx: { ...re.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ i(u, { sx: { mb: 4 }, children: r.map((c, d) => /* @__PURE__ */ m(Ep, { children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(F, { sx: { ...re.label.secondary, opacity: 0.5 }, children: String(d + 1).padStart(2, "0") }),
            /* @__PURE__ */ i(F, { sx: { fontWeight: 700, textTransform: "uppercase" }, children: c.name })
          ] }),
          /* @__PURE__ */ m(F, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            c.amount.toLocaleString()
          ] })
        ] }, d)) }),
        /* @__PURE__ */ m(u, { sx: {
          pt: 2,
          borderTop: `1px dashed ${l ? "#000" : "#fff"}`,
          opacity: 0.5,
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ i(F, { sx: { ...re.label.secondary }, children: "SYSTEM_VERSION_2.0.4" }),
          /* @__PURE__ */ i(F, { sx: { ...re.label.secondary }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ]
    }
  );
}, Tp = Ie(F, {
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
})), Ip = Ie(u)(({ theme: e }) => ({
  ...re.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), Df = (e) => {
  const {
    title: t,
    value: r,
    subtitle: n,
    iconType: o = "dot",
    trend: a = "neutral",
    size: s = "normal",
    onClick: l,
    label: c = "METRIC_SYSTEM"
  } = e, d = ee();
  d.effectiveMode;
  const p = () => {
    switch (a) {
      case "up":
        return d.palette.accentColors.mint;
      case "down":
        return d.palette.accentColors.orange;
      default:
        return "inherit";
    }
  };
  return /* @__PURE__ */ m(
    wn,
    {
      onClick: l,
      sx: {
        cursor: l ? "pointer" : "default",
        minHeight: (f) => s === "compact" ? f.spacing(20) : s === "large" ? f.spacing(40) : f.spacing(25),
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
        /* @__PURE__ */ m(Ip, { children: [
          '"',
          c,
          '"'
        ] }),
        /* @__PURE__ */ i(
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
        /* @__PURE__ */ i(u, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ i(Tp, { metricSize: s, children: typeof r == "number" ? r.toLocaleString() : r }) }),
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 1,
          width: "100%",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ i(
            F,
            {
              sx: {
                ...re.label.main,
                color: "inherit"
              },
              children: t
            }
          ),
          a !== "neutral" && /* @__PURE__ */ i(u, { sx: { color: p(), display: "flex" }, children: /* @__PURE__ */ i(
            mr,
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
          F,
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
          u,
          {
            sx: {
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              height: 4,
              bgcolor: a !== "neutral" ? p() : "transparent",
              opacity: 0.8
            }
          }
        )
      ]
    }
  );
}, Rp = Oe(/* @__PURE__ */ i("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), ze = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, $p = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
v.accent, v.gray[600], v.success, v.warning, v.error, v.info;
Hr.sm, Hr.md, Hr.lg;
const Ap = `https://${$p.CONTACT.CALENDLY}`, Zn = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n,
  className: o,
  sx: a
}) => /* @__PURE__ */ i(
  kn,
  {
    variant: e,
    size: t,
    onClick: () => {
      ei.trackConsultationRequest("calendly", "diagnostic"), window.open(Ap, "_blank", "noopener,noreferrer");
    },
    startIcon: r ? /* @__PURE__ */ i(Rp, {}) : void 0,
    className: o,
    sx: a,
    children: n || "Diagnóstico gratis"
  }
), Ff = () => ({
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
}), Nf = () => ({
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
}), _p = (e) => ({
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
}), Lf = () => ({
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
}), Wf = (e) => ({
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
}), Op = (e) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: e.map((t, r) => ({
    "@type": "ListItem",
    position: r + 1,
    name: t.name,
    item: t.url
  }))
}), Bf = (e) => {
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
}, jf = (e = "") => `https://www.ai4u.com.co${e}`, Vf = (e, t = 160) => e.length <= t ? e : e.substring(0, t - 3) + "...", Hf = (e, t = []) => [...e, ...t].join(", "), Uf = ({
  service: e,
  showPrice: t = !0,
  compact: r = !1,
  onClick: n
}) => {
  const o = ee(), a = _p(e), l = ((c) => {
    const d = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return c.filter((p) => p.startsWith("eje:")).map((p) => d[p] || p.replace("eje:", ""));
  })(e.tags);
  return /* @__PURE__ */ m(be, { children: [
    /* @__PURE__ */ i(
      ri,
      {
        structuredData: a,
        noIndex: !0
      }
    ),
    /* @__PURE__ */ i(u, { sx: {
      height: "100%",
      position: "relative",
      transition: "all 0.2s ease",
      "&:hover": {
        "& .service-card-content": {
          borderColor: e.color || o.contrast.text.primary
        }
      }
    }, children: /* @__PURE__ */ m(
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
          background: v.white,
          // Siempre blanco para máximo contraste "sticker"
          border: `3px solid ${v.black}`,
          // Siempre borde negro
          borderRadius: 0,
          transition: "all 0.1s ease",
          overflow: "hidden",
          boxShadow: `4px 4px 0px ${e.color || v.black}`,
          cursor: n ? "pointer" : "default",
          "&:hover": {
            transform: n ? "translate(-2px, -2px)" : "none",
            boxShadow: n ? `8px 8px 0px ${e.color || v.black}` : `4px 4px 0px ${e.color || v.black}`
          }
        },
        children: [
          /* @__PURE__ */ i(u, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: l.map((c, d) => /* @__PURE__ */ i(
            It,
            {
              label: c,
              size: "small",
              sx: {
                background: v.black,
                color: v.white,
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
          /* @__PURE__ */ m(u, { sx: {
            mb: 2,
            flexGrow: 1,
            display: "flex",
            flexDirection: "column"
          }, children: [
            /* @__PURE__ */ i(
              F,
              {
                sx: {
                  color: v.black,
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
                    color: e.color || v.black,
                    mr: 1.5,
                    fontSize: "1.2rem"
                  }
                },
                children: e.title
              }
            ),
            /* @__PURE__ */ i(Re, { sx: {
              lineHeight: 1.4,
              color: v.black,
              // Forzar negro para el cuerpo
              fontSize: "1rem",
              textAlign: "left",
              mb: 0,
              fontWeight: 400,
              opacity: 0.9,
              pl: 4
            }, children: e.description })
          ] }),
          /* @__PURE__ */ i(u, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${o.contrast.divider}`
          }, children: t && /* @__PURE__ */ m(u, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }, children: [
            /* @__PURE__ */ i(Re, { sx: {
              fontWeight: 400,
              color: o.contrast.text.secondary,
              fontSize: "0.85rem"
            }, children: "Precio:" }),
            /* @__PURE__ */ i(F, { sx: {
              fontWeight: 400,
              color: o.contrast.text.primary,
              fontSize: "1.1rem"
            }, children: e.price })
          ] }) })
        ]
      }
    ) })
  ] });
}, Gf = ({
  items: e,
  showHome: t = !0
}) => {
  const r = Wr(), n = t ? [{ name: "Inicio", path: "/" }, ...e] : e, o = Op(
    n.map((s) => ({
      name: s.name,
      url: `https://ai4u.com.co${s.path}`
    }))
  ), a = (s) => {
    r(s);
  };
  return /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ i(ri, { structuredData: o }),
    /* @__PURE__ */ i(
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
          l > 0 && /* @__PURE__ */ i(
            F,
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
          s.current ? /* @__PURE__ */ i(
            F,
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
            da,
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
class Yf extends Yi {
  constructor(r) {
    super(r);
    Ge(this, "handleRetry", () => {
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
    this.setState({ errorInfo: n }), Od.captureError({
      message: r.message,
      stack: r.stack,
      componentStack: n.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(r, n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ i(Xe, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ m(
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
          /* @__PURE__ */ m(
            zi,
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
                /* @__PURE__ */ i(Di, { children: /* @__PURE__ */ i(ha, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ i(Re, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ m(u, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ i(
              et,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ i(is, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ i(
              et,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ i(
              et,
              {
                variant: "text",
                onClick: () => window.location.href = "/",
                sx: { minWidth: 120 },
                children: "Ir al Inicio"
              }
            )
          ] }),
          /* @__PURE__ */ i(Re, { sx: { color: "text.secondary", fontSize: "0.875rem" }, children: "Si el problema persiste, por favor contacta nuestro soporte técnico." })
        ]
      }
    ) }) : this.props.children;
  }
}
const qf = (e) => {
  const {
    pages: t,
    title: r,
    variant: n = "vertical",
    className: o
  } = e, a = ee(), s = "También podrías estar interesado en:", l = t.slice(0, 3);
  if (l.length === 0) return null;
  const c = () => n === "horizontal" ? /* @__PURE__ */ i(
    he,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: l.map((d, p) => /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ i(
            jt,
            {
              href: d.href,
              variant: "subtle",
              ariaLabel: d.context || d.label,
              children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: d.label })
            }
          ),
          d.context && /* @__PURE__ */ i(
            de,
            {
              sx: {
                color: a.contrast.text.secondary,
                fontSize: "0.75rem",
                mt: 0.5,
                display: "block"
              },
              children: d.context
            }
          )
        ] }),
        p < l.length - 1 && /* @__PURE__ */ i(Wd, { variant: "separator", size: "small" })
      ] }, d.href))
    }
  ) : /* @__PURE__ */ i(he, { spacing: 3, children: l.map((d) => /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ i(
      jt,
      {
        href: d.href,
        variant: "subtle",
        ariaLabel: d.context || d.label,
        children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400, fontSize: "0.875rem" }, children: d.label })
      }
    ),
    d.context && /* @__PURE__ */ i(
      de,
      {
        sx: {
          color: a.contrast.text.secondary,
          fontSize: "0.75rem",
          mt: 0.5,
          display: "block"
        },
        children: d.context
      }
    )
  ] }, d.href)) });
  return /* @__PURE__ */ m(
    u,
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
        c()
      ]
    }
  );
}, Kf = (e) => {
  const {
    serviceName: t,
    serviceSlug: r,
    description: n,
    caseStudy: o,
    variant: a = "minimal",
    className: s
  } = e, l = ee();
  return a === "minimal" ? /* @__PURE__ */ m(u, { className: s, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ i(
      jt,
      {
        href: `/servicios#${r}`,
        variant: "inline",
        ariaLabel: `Conoce más sobre ${t}`,
        children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400 }, children: t })
      }
    ),
    /* @__PURE__ */ i(
      mr,
      {
        type: "circle",
        size: "small",
        color: l.contrast.text.disabled,
        variant: "minimal"
      }
    )
  ] }) : /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ m(he, { spacing: 2, children: [
        /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ i(
            mr,
            {
              type: "square",
              size: "small",
              color: l.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ i(
            jt,
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
              color: l.contrast.text.secondary,
              fontSize: "0.8rem",
              lineHeight: 1.5
            },
            children: n
          }
        ),
        o && /* @__PURE__ */ m(u, { sx: { pt: 1, borderTop: `1px solid ${l.contrast.divider}` }, children: [
          /* @__PURE__ */ i(
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
          /* @__PURE__ */ i(
            jt,
            {
              href: `/casos-de-uso#${o.slug}`,
              variant: "subtle",
              ariaLabel: `Ver caso de uso en ${o.sector} con ${o.client}`,
              children: /* @__PURE__ */ m(de, { sx: { fontWeight: 400, fontSize: "0.8rem" }, children: [
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
}, Xf = ({
  selectedValue: e,
  onValueChange: t,
  options: r
}) => {
  const n = ee();
  return /* @__PURE__ */ m(u, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ i(u, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: n.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ i(he, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: r.map((o, a) => /* @__PURE__ */ i(
      It,
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
}, Jf = ({
  totalCount: e,
  filteredCount: t,
  activeFilters: r
}) => {
  const n = ee(), o = r.length > 0, a = t !== e;
  return /* @__PURE__ */ i(u, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ m(he, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ i(
      mr,
      {
        type: "dot",
        size: "small",
        color: n.contrast.text.secondary,
        variant: "minimal"
      }
    ),
    /* @__PURE__ */ m(F, { variant: "body2", sx: {
      color: n.contrast.text.secondary,
      fontSize: "0.875rem"
    }, children: [
      a ? `${t} de ${e}` : `${e}`,
      " servicios",
      o && /* @__PURE__ */ m("span", { style: { color: n.contrast.text.primary }, children: [
        " • ",
        r.join(", ")
      ] })
    ] })
  ] }) });
}, Qf = ({
  title: e,
  subtitle: t,
  children: r,
  defaultExpanded: n = !1,
  variant: o = "minimal",
  showIcon: a = !0,
  sx: s = {}
}) => {
  const [l, c] = H(n), d = ee(), p = d.effectiveMode === "dark", f = () => {
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
  return /* @__PURE__ */ m(u, { sx: { ...h.container, ...s }, children: [
    /* @__PURE__ */ m(
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
        onClick: f,
        children: [
          /* @__PURE__ */ m(u, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ i(Ae, { sx: {
              color: "inherit",
              fontWeight: 400,
              fontSize: "1.2rem",
              textTransform: "none",
              letterSpacing: "0em"
            }, children: e }),
            t && /* @__PURE__ */ i(Re, { sx: {
              color: "inherit",
              opacity: 0.8,
              fontSize: "1rem",
              mt: 1
            }, children: t })
          ] }),
          a && /* @__PURE__ */ i(
            Ne,
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
              children: /* @__PURE__ */ i(ss, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i(Fi, { in: l, timeout: 100, children: /* @__PURE__ */ i(u, { sx: {
      pt: 3,
      borderTop: l ? `1px solid ${p ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: r }) })
  ] });
}, Zf = ({
  summary: e,
  details: t,
  showDetails: r = !1,
  onToggle: n,
  variant: o = "inline",
  maxHeight: a = 200
}) => {
  const [s, l] = H(r), c = ee(), d = () => {
    const x = !s;
    l(x), n == null || n(x);
  }, f = (() => {
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
  return /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ i(
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
    s && /* @__PURE__ */ i(u, { sx: f.container, children: /* @__PURE__ */ i(
      u,
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
}, Mp = {
  online: "Disponible",
  offline: "No disponible",
  starting: "Iniciando…",
  checking: "Verificando…",
  idle: "Inactivo"
};
function Nt(e, t) {
  const r = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16);
  return `rgba(${r},${n},${o},${t})`;
}
const eh = ({
  name: e,
  description: t,
  icon: r,
  accentColor: n,
  status: o,
  openUrl: a,
  isCli: s = !1,
  ctaLabel: l = "Abrir"
}) => {
  const c = ee(), d = o === "online", p = o === "checking", f = c.contrast.surface, x = c.contrast.text.primary, h = c.contrast.text.secondary, b = c.contrast.text.disabled, y = c.contrast.border;
  return /* @__PURE__ */ m(
    u,
    {
      sx: {
        backgroundColor: f,
        border: `1px solid ${Nt(n, 0.2)}`,
        borderRadius: 0,
        // Brutalist DS
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s steps(4, end)",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px ${Nt(n, 0.6)}`,
          borderColor: Nt(n, 0.5)
        }
      },
      children: [
        /* @__PURE__ */ i(u, { sx: { height: 3, backgroundColor: n, flexShrink: 0 } }),
        /* @__PURE__ */ m(u, { sx: { flex: 1, display: "flex", flexDirection: "column", p: 2.5, gap: 1.5 }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ i(
              u,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: Nt(n, 0.1),
                  border: `1px solid ${Nt(n, 0.2)}`
                },
                children: /* @__PURE__ */ i(yr, { id: r, size: "md", color: n, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ m(u, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ i(
                u,
                {
                  component: "div",
                  sx: {
                    fontFamily: '"Red Hat Display", sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: x,
                    lineHeight: 1.2
                  },
                  children: e
                }
              ),
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }, children: [
                /* @__PURE__ */ i(vn, { status: o, size: 6 }),
                /* @__PURE__ */ i(
                  u,
                  {
                    component: "span",
                    sx: {
                      fontSize: 11,
                      color: v.telemetry[o]
                    },
                    children: Mp[o]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i(
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
          /* @__PURE__ */ i(u, { sx: { mt: 0.5 }, children: s ? /* @__PURE__ */ i(
            u,
            {
              component: "div",
              sx: { fontSize: 12, color: b, fontStyle: "italic" },
              children: "Herramienta de línea de comandos — se ejecuta desde el servidor"
            }
          ) : a ? /* @__PURE__ */ m(
            u,
            {
              component: "a",
              href: d ? a : void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (S) => {
                d || S.preventDefault();
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
                color: d ? v.white : b,
                border: d ? "none" : `1px solid ${y}`,
                cursor: d ? "pointer" : p ? "default" : "not-allowed",
                opacity: p ? 0.6 : 1
              },
              children: [
                /* @__PURE__ */ i(
                  yr,
                  {
                    id: "external-link",
                    size: 14,
                    color: d ? v.white : b,
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
}, th = ({
  branding: e,
  label: t = "Acceso restringido",
  placeholder: r = "Contraseña",
  inputType: n = "password",
  submitLabel: o = "Entrar",
  loadingLabel: a = "Verificando…",
  accentColor: s = v.tamaprint.primary,
  footer: l,
  onSubmit: c
}) => {
  const d = qt(null), [p, f] = H(!1), [x, h] = H(""), [b, y] = H(!1);
  async function S(I) {
    var E;
    I.preventDefault();
    const T = ((E = d.current) == null ? void 0 : E.value) ?? "";
    if (!T) return;
    f(!0), h("");
    const _ = await c(T);
    _.ok || (h(_.error ?? "Error de autenticación"), y(!0), setTimeout(() => y(!1), 500), d.current && (d.current.value = "", d.current.focus())), f(!1);
  }
  const C = v.telemetry.offline;
  return /* @__PURE__ */ m(u, { component: "form", onSubmit: S, sx: { width: "100%", maxWidth: 360 }, children: [
    e && /* @__PURE__ */ i(u, { sx: { textAlign: "center", mb: 4 }, children: e }),
    /* @__PURE__ */ m(
      u,
      {
        sx: {
          backgroundColor: ht.dashboardDark.surface,
          border: `1px solid ${ht.dashboardDark.border}`,
          borderRadius: 0,
          p: "28px 28px 24px",
          animation: b ? "auth-shake 0.4s ease" : void 0,
          "@keyframes auth-shake": {
            "0%,100%": { transform: "translateX(0)" },
            "20%": { transform: "translateX(-8px)" },
            "40%": { transform: "translateX(8px)" },
            "60%": { transform: "translateX(-5px)" },
            "80%": { transform: "translateX(5px)" }
          }
        },
        children: [
          /* @__PURE__ */ m(
            u,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9.5,
                fontWeight: 700,
                color: ht.dashboardDark.text.secondary,
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
          /* @__PURE__ */ i(
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
                border: `1px solid ${x ? C : "rgba(255,255,255,0.1)"}`,
                borderRadius: 0,
                p: "12px 14px",
                color: ht.dashboardDark.text.primary,
                fontSize: 14,
                outline: "none",
                fontFamily: "inherit",
                mb: x ? 1 : 2,
                transition: "border-color 0.15s",
                "&:focus": {
                  borderColor: x ? C : s
                }
              }
            }
          ),
          x && /* @__PURE__ */ i(
            u,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 10,
                color: C,
                letterSpacing: "0.08em",
                mb: 1.75
              },
              children: x
            }
          ),
          /* @__PURE__ */ i(
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
                color: v.white,
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: p ? "default" : "pointer",
                transition: "background-color 0.15s"
              },
              children: p ? a : o
            }
          )
        ]
      }
    ),
    l && /* @__PURE__ */ i(u, { sx: { textAlign: "center", mt: 2.5 }, children: l })
  ] });
}, rh = ({
  items: e,
  activeItem: t,
  onItemClick: r,
  variant: n = "horizontal",
  className: o = ""
}) => {
  const a = ee();
  Se();
  const s = (d) => {
    r && r(d), d.onClick && d.onClick();
  }, l = (d) => {
    const p = t === d.id, f = {
      fontWeight: 400,
      textTransform: "none",
      transition: "all 0.3s ease"
    };
    switch (n) {
      case "tabs":
        return {
          ...f,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...p ? {
            background: a.palette.black,
            color: a.palette.white,
            boxShadow: at.ai4u.button
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
          ...f,
          width: "100%",
          justifyContent: "flex-start",
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: "0.875rem",
          ...p ? {
            background: a.palette.black,
            color: a.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: a.palette.black,
            boxShadow: at.ai4u.button
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
          ...f,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...p ? {
            background: a.palette.black,
            color: a.palette.white,
            boxShadow: at.ai4u.button
          } : {
            color: a.contrast.text.secondary,
            "&:hover": {
              color: a.contrast.text.primary,
              background: a.helpers.state.hover
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
  return n === "tabs" ? /* @__PURE__ */ i(u, { sx: c(), className: o, children: e.map((d) => /* @__PURE__ */ i(
    et,
    {
      onClick: () => s(d),
      sx: l(d),
      children: d.label
    },
    d.id
  )) }) : /* @__PURE__ */ i(u, { sx: c(), className: o, children: e.map((d) => /* @__PURE__ */ i(
    et,
    {
      onClick: () => s(d),
      sx: l(d),
      children: d.label
    },
    d.id
  )) });
}, Pp = Oe(/* @__PURE__ */ i("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), zp = Oe(/* @__PURE__ */ i("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), Dp = Oe(/* @__PURE__ */ i("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Fp = Oe(/* @__PURE__ */ i("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), Np = Oe(/* @__PURE__ */ i("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), Lp = Oe(/* @__PURE__ */ i("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X"), Wp = Oe(/* @__PURE__ */ i("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp"), Bp = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  Se();
  const t = ee(), r = [
    { icon: /* @__PURE__ */ i(Pp, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ i(zp, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ i(Dp, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ i(Lp, {}), url: "https://x.com/_ai4u_" }
  ], n = [
    { name: "inicio", path: ze.HOME },
    { name: "servicios", path: ze.SERVICES },
    { name: "portafolio", path: ze.PORTFOLIO },
    { name: "porqueAi4u", path: ze.WHY_AI4U },
    { name: "designSystem", path: ze.DESIGN_SYSTEM }
  ];
  return /* @__PURE__ */ i(
    u,
    {
      sx: {
        bgcolor: t.contrast.background,
        color: t.contrast.text.primary,
        borderTop: 1,
        borderColor: t.contrast.divider,
        py: 8
      },
      children: /* @__PURE__ */ m(Xe, { maxWidth: "lg", children: [
        /* @__PURE__ */ m($e, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ m($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(
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
            /* @__PURE__ */ i(F, { variant: "body2", sx: { color: "inherit", opacity: 0.8 }, children: "Inteligencia para tu negocio." })
          ] }),
          /* @__PURE__ */ m($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(F, { sx: { ...re.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ i(u, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ i(u, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: n.map((o) => /* @__PURE__ */ i(u, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ i(
              u,
              {
                component: gt,
                to: o.path,
                onClick: () => cn(),
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
          /* @__PURE__ */ m($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(F, { sx: { ...re.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ m(he, { spacing: 2.5, children: [
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(Fp, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(F, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(Wp, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(F, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(Np, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(F, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i(Sr, { sx: { my: 6, borderColor: t.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ m(he, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ i(de, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${e} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ m(u, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
              /* @__PURE__ */ m(
                F,
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
              /* @__PURE__ */ m(
                F,
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
                    /* @__PURE__ */ i(u, { component: "span", sx: { fontWeight: 400 }, children: "mariano | 마리아노" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i(he, { direction: "row", spacing: 2, children: r.map((o, a) => /* @__PURE__ */ i(
            Ne,
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
}, nh = ({
  customTitle: e = "Tu tiempo es oro",
  customSubtitle: t = "IA que potencia tu productividad.",
  primaryButtonText: r = "Recupera tu tiempo",
  secondaryButtonText: n = "Calcula tu ROI",
  sx: o
}) => {
  const a = Se(), s = ee();
  cr(a.breakpoints.down("md"));
  const [l, c] = H(0), d = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], p = "IA con enfoque humano";
  return me(() => {
    const f = setInterval(() => {
      c((x) => x === 2 ? 0 : x + 1);
    }, 5e3);
    return () => clearInterval(f);
  }, []), /* @__PURE__ */ m(
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
        /* @__PURE__ */ i(
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
                backgroundColor: we(s.contrast.background, 0.6),
                zIndex: 1
              }
            },
            children: d.map((f, x) => /* @__PURE__ */ i(u, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ i(
              jn,
              {
                src: f,
                alt: `Background ${x + 1}`,
                priority: x === 0,
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: x === l ? 0.5 : 0,
                  transition: "opacity 1.5s ease-in-out, transform 10s ease-out",
                  filter: "grayscale(100%) contrast(1.2)",
                  transform: x === l ? "scale(1.1)" : "scale(1)"
                }
              }
            ) }, x))
          }
        ),
        /* @__PURE__ */ i(u, { sx: {
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
        }, children: Array.from({ length: 40 }).map((f, x) => /* @__PURE__ */ i(u, { children: Math.random().toString(2).slice(2) }, x)) }),
        /* @__PURE__ */ m(u, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ i(Ke, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ m(Ke, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i(
          Xe,
          {
            maxWidth: "xl",
            sx: {
              position: "relative",
              zIndex: 5,
              px: { xs: 2, sm: 3, md: 10, lg: 15 },
              display: "flex",
              justifyContent: "flex-start"
            },
            children: /* @__PURE__ */ m(
              he,
              {
                direction: "column",
                spacing: { xs: 2, sm: 3, md: 4 },
                sx: { width: "100%", maxWidth: "900px", textAlign: "left", alignItems: "flex-start" },
                children: [
                  /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ i(
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
                    /* @__PURE__ */ i(
                      ys,
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
                      En,
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
                  /* @__PURE__ */ m(
                    he,
                    {
                      direction: { xs: "column", md: "row" },
                      spacing: { xs: 3, md: 4 },
                      sx: { alignItems: "flex-start" },
                      children: [
                        /* @__PURE__ */ i(
                          Zn,
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
                        /* @__PURE__ */ i(u, { sx: {
                          pt: { xs: 1, md: 2 },
                          position: "relative"
                        }, children: /* @__PURE__ */ m(
                          Re,
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
}, oh = ({
  data: e,
  date: t,
  time: r,
  variant: n = "elevated",
  onRefresh: o = void 0
}) => {
  const a = ee(), s = () => {
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
  }, l = (d) => {
    switch (d) {
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
  }, c = s();
  return /* @__PURE__ */ i(
    jr,
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
      children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(u, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: c.surface.background,
              border: c.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ i(ls, { sx: {
              color: a.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ m(u, { children: [
              /* @__PURE__ */ i(de, { sx: {
                color: a.helpers.text.secondary,
                mb: 0.5
              }, children: t }),
              /* @__PURE__ */ i(Kt, { sx: {
                color: a.helpers.text.primary,
                fontWeight: 400
              }, children: r })
            ] })
          ] }),
          o && /* @__PURE__ */ i(
            Ne,
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
              children: /* @__PURE__ */ i(fa, {})
            }
          )
        ] }),
        e.quality && /* @__PURE__ */ i(u, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: c.surface.background,
          border: c.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ m(u, { sx: {
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
            It,
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
        /* @__PURE__ */ m(u, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: c.surface.background,
          border: c.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ m(u, { sx: {
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
              It,
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
          /* @__PURE__ */ m(u, { sx: {
            height: 40,
            borderRadius: 2,
            background: a.palette.accent,
            position: "relative",
            overflow: "hidden",
            mb: 2
          }, children: [
            /* @__PURE__ */ i(u, { sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2
            }, children: Array.from({ length: 20 }, (d, p) => /* @__PURE__ */ i(u, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, p)) }),
            /* @__PURE__ */ i(u, { sx: {
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
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: c.surface.background,
          border: c.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: a.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ m(Ae, { sx: {
              color: a.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            e.hasWifi && /* @__PURE__ */ i(u, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: a.palette.accent + "20",
              color: a.palette.accent
            }, children: /* @__PURE__ */ i(cs, { sx: { fontSize: 16 } }) }),
            e.hasBluetooth && /* @__PURE__ */ i(u, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: a.palette.success + "20",
              color: a.palette.success
            }, children: /* @__PURE__ */ i(ds, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, ah = ({
  data: e,
  variant: t = "elevated",
  showLocationIcon: r = !1,
  onRefresh: n = void 0
}) => {
  const o = ee(), a = () => {
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
    return d.includes("clear") || d.includes("sunny") ? /* @__PURE__ */ i(uo, {}) : d.includes("cloud") || d.includes("overcast") ? /* @__PURE__ */ i(ps, {}) : d.includes("rain") || d.includes("precipitation") ? /* @__PURE__ */ i(fs, {}) : /* @__PURE__ */ i(uo, {});
  }, l = a();
  return /* @__PURE__ */ i(
    jr,
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
      children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            r && /* @__PURE__ */ i(us, { sx: {
              fontSize: 20,
              color: o.helpers.text.primary
            } }),
            /* @__PURE__ */ i(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: e.location })
          ] }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            n && /* @__PURE__ */ i(
              Ne,
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
                children: /* @__PURE__ */ i(fa, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ m(u, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...l.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ i(u, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: s(e.condition) }),
          /* @__PURE__ */ m(En, { sx: {
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
          /* @__PURE__ */ m(Re, { sx: {
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
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...l.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ m(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ m(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m(u, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ i(Sr, { sx: {
            mb: 3,
            borderColor: o.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ i(Ae, { sx: {
            fontWeight: 400,
            mb: 3,
            color: o.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ i(u, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: e.hourlyForecast.map((c, d) => /* @__PURE__ */ m(u, { sx: {
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
            /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              s(c.condition),
              /* @__PURE__ */ i(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: c.time })
            ] }),
            /* @__PURE__ */ i(Re, { sx: {
              color: o.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: c.condition }),
            /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ m(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                c.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ m(Ae, { sx: {
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
}, ih = ({
  searchValue: e,
  onSearchChange: t,
  selectedTab: r,
  onTabChange: n,
  onClearFilters: o,
  filteredCount: a,
  categoryTabs: s
}) => {
  const l = ee();
  return /* @__PURE__ */ m(u, { sx: {
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
    /* @__PURE__ */ m(
      he,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center", mb: 3 },
        children: [
          /* @__PURE__ */ m(u, { sx: {
            fontSize: "1.25rem",
            fontWeight: 400,
            textTransform: "none",
            letterSpacing: "0.05em",
            color: l.contrast.text.primary
          }, children: [
            a,
            " Servicios"
          ] }),
          e && /* @__PURE__ */ i(
            kn,
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
    /* @__PURE__ */ i(u, { sx: { mb: 3 }, children: /* @__PURE__ */ i(
      ua,
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
    /* @__PURE__ */ i(Sr, { sx: { mb: 3, borderColor: l.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ i(u, { children: /* @__PURE__ */ i(
      Ni,
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
        children: s.map((c, d) => /* @__PURE__ */ i(
          Li,
          {
            label: c.label
          },
          d
        ))
      }
    ) })
  ] });
}, sh = ({ stats: e, getCategories: t }) => {
  const r = Se(), n = [
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
  return /* @__PURE__ */ i(u, { sx: { mb: 8 }, children: /* @__PURE__ */ i($e, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: n.map((o, a) => /* @__PURE__ */ i($e, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ m(u, { sx: {
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
    /* @__PURE__ */ i(Kt, { sx: {
      color: o.color,
      mb: 1,
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1
    }, children: o.value }),
    /* @__PURE__ */ i(Re, { sx: {
      color: "text.primary",
      fontSize: "0.95rem",
      fontWeight: 400,
      mb: 0.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }, children: o.label }),
    /* @__PURE__ */ i(Re, { sx: {
      color: "text.secondary",
      fontSize: "0.8rem",
      lineHeight: 1.4
    }, children: o.description })
  ] }) }, a)) }) });
}, jp = Ie(Vt)(({ theme: e }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: e.spacing(2),
  padding: e.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), Vp = ({ code: e, language: t = "tsx", className: r = "" }) => {
  Se();
  const n = ee();
  return /* @__PURE__ */ m(jp, { className: r, children: [
    /* @__PURE__ */ m(u, { sx: {
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
        Ne,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(e),
          sx: { color: n.helpers.text.mediumContrast },
          children: /* @__PURE__ */ i(hs, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ i(u, { component: "pre", sx: {
      fontSize: "0.875rem",
      color: n.helpers.text.highContrast,
      fontFamily: "monospace",
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ i(u, { component: "code", children: e }) })
  ] });
}, Hp = ({ props: e }) => {
  const t = Se();
  return !e || e.length === 0 ? null : /* @__PURE__ */ i(Wi, { component: Vt, sx: { borderRadius: 2 }, children: /* @__PURE__ */ m(Bi, { children: [
    /* @__PURE__ */ i(ji, { children: /* @__PURE__ */ m(lo, { sx: { backgroundColor: t.palette.grey[50] }, children: [
      /* @__PURE__ */ i(Ye, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ i(Ye, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ i(Ye, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ i(Ye, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ i(Ye, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ i(Vi, { children: e.map((r, n) => /* @__PURE__ */ m(lo, { sx: {
      "&:hover": { backgroundColor: t.palette.action.hover }
    }, children: [
      /* @__PURE__ */ i(Ye, { children: /* @__PURE__ */ i(Ke, { children: r.name }) }),
      /* @__PURE__ */ i(Ye, { children: /* @__PURE__ */ i(Ke, { children: r.type }) }),
      /* @__PURE__ */ i(Ye, { children: /* @__PURE__ */ i(
        It,
        {
          label: r.required ? "Sí" : "No",
          size: "small",
          color: r.required ? "error" : "success",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ i(Ye, { sx: {
        fontSize: "0.875rem",
        color: t.palette.text.secondary
      }, children: r.description }),
      /* @__PURE__ */ i(Ye, { children: r.defaultValue ? /* @__PURE__ */ i(Ke, { children: r.defaultValue }) : /* @__PURE__ */ i(u, { sx: { color: t.palette.text.disabled }, children: "-" }) })
    ] }, n)) })
  ] }) });
}, lh = ({
  title: e,
  description: t,
  children: r,
  codeExample: n,
  props: o,
  className: a = ""
}) => {
  const s = Se();
  return /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: a, children: [
    /* @__PURE__ */ m(u, { sx: {
      borderBottom: `1px solid ${s.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ i(Kt, { sx: { mb: 1 }, children: e }),
      /* @__PURE__ */ i(Re, { sx: { color: s.palette.text.secondary }, children: t })
    ] }),
    /* @__PURE__ */ m(Vt, { sx: {
      position: "relative",
      p: 4,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 4,
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ i(u, { sx: { mb: 2 }, children: /* @__PURE__ */ i(Ae, { sx: { color: s.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ i(u, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: r })
    ] }),
    n && /* @__PURE__ */ m(u, { children: [
      /* @__PURE__ */ i(Ae, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ i(Vp, { code: n })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ m(u, { children: [
      /* @__PURE__ */ i(Ae, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ i(Hp, { props: o })
    ] })
  ] });
}, Up = Ie(wn)(({ theme: e }) => ({
  backgroundColor: e.palette.grey[100],
  borderRadius: e.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: e.shadows[3]
})), oa = Ie(et)(({ theme: e, isSelected: t }) => ({
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
})), Gp = Ie(et)(({ theme: e, isSelected: t }) => ({
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
})), Yp = Ie(u)(({ theme: e }) => ({
  backgroundColor: e.palette.background.paper,
  borderRadius: e.spacing(2),
  padding: e.spacing(3),
  position: "relative",
  minHeight: 320
})), ch = ({
  rotationAngle: e = 35,
  brightness: t = 30,
  shadowDensity: r = 25
}) => {
  const n = Se(), [o, a] = H("rotation"), [s, l] = H("cube"), [c, d] = H("spot"), p = [
    { id: "cube", name: "Cube", icon: "□", isSelected: !0 },
    { id: "sphere", name: "Sphere", icon: "○" },
    { id: "cone", name: "Cone", icon: "△" },
    { id: "cylinder", name: "Cylinder", icon: "●" },
    { id: "more", name: "More", icon: "⋯" }
  ], f = [
    { id: "render", name: "Render", icon: "◉" },
    { id: "rotation", name: "Rotation", icon: "⟲", isSelected: !0 },
    { id: "texture", name: "Texture", icon: "◐" },
    { id: "polygons", name: "Polygons", icon: "◢" },
    { id: "points", name: "Points", icon: "●" },
    { id: "intrude", name: "Intrude", icon: "↓" }
  ], x = [
    { id: "spot", name: "Spot", icon: "⊙", isSelected: !0 },
    { id: "area", name: "Area", icon: "◼" },
    { id: "target", name: "Target", icon: "◎" },
    { id: "sun", name: "Sun", icon: "◉" }
  ];
  return /* @__PURE__ */ i(Up, { children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
    /* @__PURE__ */ m(u, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ i(F, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ i(u, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ i(u, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ i(u, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.error.main,
          borderRadius: "50%"
        } })
      ] }),
      /* @__PURE__ */ i(F, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "2019" })
    ] }),
    /* @__PURE__ */ m($e, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ i(F, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ i(u, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: p.map((h) => /* @__PURE__ */ i(
            oa,
            {
              isSelected: s === h.id,
              onClick: () => l(h.id),
              children: h.icon
            },
            h.id
          )) })
        ] }),
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ i(F, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ i(u, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: f.map((h) => /* @__PURE__ */ i(
            Gp,
            {
              isSelected: o === h.id,
              onClick: () => a(h.id),
              startIcon: /* @__PURE__ */ i("span", { children: h.icon }),
              children: h.name
            },
            h.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ m(Yp, { children: [
        /* @__PURE__ */ i(u, { sx: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          borderRadius: 2,
          overflow: "hidden"
        }, children: /* @__PURE__ */ i(u, { sx: {
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          height: "100%"
        }, children: Array.from({ length: 96 }, (h, b) => /* @__PURE__ */ i(u, { sx: {
          border: `1px solid ${n.palette.grey[300]}`
        } }, b)) }) }),
        /* @__PURE__ */ m(u, { sx: {
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 256
        }, children: [
          /* @__PURE__ */ i(u, { sx: {
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
          /* @__PURE__ */ m(u, { sx: {
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ i(u, { sx: {
              width: 128,
              height: 32,
              border: `2px solid ${n.palette.grey[400]}`,
              borderRadius: "16px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ i(u, { sx: {
              width: 8,
              height: 8,
              backgroundColor: n.palette.grey[600],
              borderRadius: "50%"
            } }) }),
            /* @__PURE__ */ m(u, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ i(F, { variant: "body2", sx: {
                color: n.palette.text.secondary
              }, children: "Rotation" }),
              /* @__PURE__ */ m(F, { variant: "h4", sx: {
                fontWeight: 400,
                color: n.palette.text.primary
              }, children: [
                e,
                "°"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ m(u, { sx: {
            position: "absolute",
            top: 16,
            left: 16,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontSize: "0.75rem"
          }, children: [
            /* @__PURE__ */ i(F, { variant: "caption", sx: { color: n.palette.error.main }, children: "X" }),
            /* @__PURE__ */ i(F, { variant: "caption", sx: { color: n.palette.success.main }, children: "Y" }),
            /* @__PURE__ */ i(F, { variant: "caption", sx: { color: n.palette.info.main }, children: "Z" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ i(F, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ i($e, { container: !0, spacing: 1, children: x.map((h) => /* @__PURE__ */ i($e, { size: 6, children: /* @__PURE__ */ i(
            oa,
            {
              isSelected: c === h.id,
              onClick: () => d(h.id),
              sx: { width: 48, height: 48 },
              children: h.icon
            }
          ) }, h.id)) })
        ] }),
        /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ m(u, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ i(F, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ m(F, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                t,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ i(u, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ i(u, { sx: {
              height: "100%",
              width: `${t}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] }),
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ m(u, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ i(F, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ m(F, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                r,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ i(u, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ i(u, { sx: {
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
    /* @__PURE__ */ m(u, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${n.palette.divider}`
    }, children: [
      /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ i(u, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${n.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ i(F, { variant: "caption", sx: {
            color: n.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ i(F, { variant: "caption", sx: {
              color: n.palette.text.secondary,
              fontSize: "0.75rem"
            }, children: "UI" }),
            /* @__PURE__ */ i(u, { sx: {
              width: 4,
              height: 4,
              backgroundColor: n.palette.text.primary,
              borderRadius: "50%"
            } })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ i(F, { variant: "caption", sx: {
        color: n.palette.text.secondary,
        fontSize: "0.75rem"
      }, children: "013" })
    ] })
  ] }) });
}, qp = Oe(/* @__PURE__ */ i("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), aa = Oe(/* @__PURE__ */ i("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode"), ia = Oe(/* @__PURE__ */ i("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode"), Kp = Ie(et, {
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
})), Xp = Ie(u)(({ theme: e }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [e.breakpoints.up("md")]: {
    display: "flex"
  }
})), Jp = () => {
  const [e, t] = H(null), [r, n] = H(!1), o = ee(), a = Wr(), { mode: s, toggleColorMode: l } = Bn();
  me(() => {
    const x = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", x), () => window.removeEventListener("scroll", x);
  }, []);
  const c = [
    { name: "inicio", path: ze.HOME },
    { name: "servicios", path: ze.SERVICES },
    { name: "superAI", path: ze.SUPER_AI },
    { name: "porqueAi4u", path: ze.WHY_AI4U },
    { name: "portafolio", path: ze.PORTFOLIO }
  ], d = (x) => {
    t(x.currentTarget);
  }, p = () => {
    t(null);
  }, f = (x) => {
    p(), a(x), cn();
  };
  return /* @__PURE__ */ i(
    Hi,
    {
      position: "fixed",
      color: "transparent",
      elevation: 0,
      sx: {
        backgroundColor: r ? we(o.contrast.surface, 0.85) : "transparent",
        backdropFilter: r ? "blur(10px)" : "none",
        borderBottom: r ? `1px solid ${we(o.contrast.border, 0.1)}` : "none",
        transition: "all 0.3s ease-in-out",
        zIndex: (x) => x.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ i(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(Ui, { disableGutters: !0, children: [
        /* @__PURE__ */ i(
          u,
          {
            component: gt,
            to: ze.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ i(Rt, { variant: "desktop", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ m(u, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ i(
            Ne,
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
              children: e ? /* @__PURE__ */ i(ni, {}) : /* @__PURE__ */ i(qp, {})
            }
          ),
          /* @__PURE__ */ m(
            ca,
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
                  boxShadow: at.lg
                }
              },
              children: [
                c.map((x) => /* @__PURE__ */ i(
                  or,
                  {
                    onClick: () => f(x.path),
                    component: gt,
                    to: x.path,
                    sx: {
                      color: o.contrast.text.primary,
                      "&:hover": {
                        backgroundColor: o.helpers.state.hover,
                        color: o.palette.black
                      }
                    },
                    children: /* @__PURE__ */ i(F, { sx: { ...re.label.main }, children: x.name })
                  },
                  x.name
                )),
                /* @__PURE__ */ i(
                  or,
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
                    children: /* @__PURE__ */ i(u, { sx: { width: "100%", maxWidth: (x) => x.spacing(25) }, children: /* @__PURE__ */ i(Qo, { light: o.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ m(
                  or,
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
                      s === "light" ? /* @__PURE__ */ i(ia, { fontSize: "small" }) : /* @__PURE__ */ i(aa, { fontSize: "small" }),
                      /* @__PURE__ */ i(F, { children: s === "light" ? "Modo oscuro" : "Modo claro" })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i(
          u,
          {
            component: gt,
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
            children: /* @__PURE__ */ i(Rt, { variant: "mobile", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ m(Xp, { children: [
          c.map((x) => /* @__PURE__ */ i(
            Kp,
            {
              colors: o,
              isScrolled: r,
              onClick: () => cn(),
              component: gt,
              to: x.path,
              sx: { ...re.label.secondary, letterSpacing: "0.1em" },
              children: x.name
            },
            x.name
          )),
          /* @__PURE__ */ i(
            u,
            {
              sx: {
                ml: { xs: 0.5, md: 1 },
                display: "flex",
                alignItems: "center",
                flexShrink: 0
              },
              children: /* @__PURE__ */ i(Qo, { light: o.mode === "dark" })
            }
          ),
          /* @__PURE__ */ i(
            Ne,
            {
              onClick: l,
              size: "small",
              sx: {
                ml: 1,
                color: o.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: s === "light" ? /* @__PURE__ */ i(ia, { fontSize: "small" }) : /* @__PURE__ */ i(aa, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, sa = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], Qp = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], dh = ({
  badge: e = "ai4u // siempre activo",
  lines: t = Qp,
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const n = ee(), [o, a] = H(/* @__PURE__ */ new Set()), [s, l] = H(0), c = qt([]);
  me(() => {
    const x = setInterval(() => l((h) => (h + 1) % sa.length), 5e3);
    return () => clearInterval(x);
  }, []), me(() => {
    const x = [];
    return c.current.forEach((h, b) => {
      if (!h) return;
      const y = new IntersectionObserver(
        ([S]) => {
          S.isIntersecting && a((C) => new Set(C).add(b));
        },
        { threshold: 0.3 }
      );
      y.observe(h), x.push(y);
    }), () => x.forEach((h) => h.disconnect());
  }, [t.length]);
  const d = ft((x, h) => {
    c.current[h] = x;
  }, []), p = o.size > 0 ? Math.max(...o) : -1, f = o.size / t.length * 100;
  return /* @__PURE__ */ m(u, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ m(u, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      sa.map((x, h) => /* @__PURE__ */ i(u, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ i(
        jn,
        {
          src: x,
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
      /* @__PURE__ */ i(u, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: we(n.contrast.background, 0.55)
      } })
    ] }),
    /* @__PURE__ */ m(u, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      px: { xs: 3, md: 8, lg: 12 },
      pt: { xs: 10, md: 12 },
      pb: 0
    }, children: [
      /* @__PURE__ */ m(u, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: { xs: 10, md: 16 } }, children: [
        /* @__PURE__ */ i(u, { sx: {
          border: `1px solid ${n.contrast.text.primary}`,
          color: n.contrast.text.primary,
          px: 1.5,
          py: 0.4,
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          opacity: 0.65
        }, children: e }),
        /* @__PURE__ */ i(u, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ i(Ke, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ i(u, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ i(u, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: t.map((x, h) => {
        const b = o.has(h), y = h === p, S = b ? y ? 1 : 0.55 : 0.12, C = y ? v.accentColors.orange : n.contrast.text.primary;
        return /* @__PURE__ */ i(
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
              color: C,
              opacity: S,
              transition: "opacity 0.5s ease, color 0.5s ease"
            },
            children: x
          },
          h
        );
      }) }),
      /* @__PURE__ */ m(u, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ i(u, { sx: { borderTop: `1px solid ${we(n.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ i(u, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ i(
          Zn,
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
                bgcolor: v.accentColors.orange,
                borderColor: v.accentColors.orange,
                color: "#fff"
              }
            }
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ i(u, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ i(u, { sx: { height: "1px", bgcolor: we(n.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ i(u, { sx: {
      height: "100%",
      bgcolor: v.accentColors.orange,
      width: `${f}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, la = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], Zp = ["agentes", "entrenamiento", "automatizaciones"], uh = ({
  badge: e = "ai4u.equipo // siempre activo",
  primaryButtonText: t = "hablar con el equipo"
}) => {
  const r = ee(), [n, o] = H(0);
  return me(() => {
    const a = setInterval(
      () => o((s) => (s + 1) % la.length),
      5e3
    );
    return () => clearInterval(a);
  }, []), /* @__PURE__ */ m(u, { sx: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }, children: [
    /* @__PURE__ */ m(u, { sx: { position: "absolute", inset: 0 }, children: [
      la.map((a, s) => /* @__PURE__ */ i(u, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ i(
        jn,
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
      /* @__PURE__ */ i(u, { sx: {
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
    /* @__PURE__ */ i(Ke, { sx: {
      position: "absolute",
      top: { xs: 72, md: 24 },
      right: { xs: 24, md: 40 },
      fontSize: "0.65rem",
      opacity: 0.3,
      zIndex: 2,
      color: r.contrast.text.primary
    }, children: "6.2442° N, 75.5812° W" }),
    /* @__PURE__ */ m(u, { sx: {
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
      /* @__PURE__ */ i(Ke, { sx: {
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: r.contrast.text.primary,
        opacity: 0.5
      }, children: "scroll" }),
      /* @__PURE__ */ i(u, { sx: {
        width: "1px",
        height: "36px",
        background: `linear-gradient(to bottom, ${we(r.contrast.text.primary, 0.25)}, transparent)`
      } })
    ] }),
    /* @__PURE__ */ m(u, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 4,
      px: { xs: 3, md: 5 },
      pb: { xs: 10, md: 6 }
    }, children: [
      /* @__PURE__ */ m(u, { children: [
        /* @__PURE__ */ i(Ke, { sx: {
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: v.accentColors.orange,
          mb: 2,
          display: "block"
        }, children: e }),
        /* @__PURE__ */ m(
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
              /* @__PURE__ */ i("br", {}),
              "para lo que",
              /* @__PURE__ */ i("br", {}),
              "importa."
            ]
          }
        )
      ] }),
      /* @__PURE__ */ m(u, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2.5,
        flexShrink: 0,
        pb: "4px"
      }, children: [
        /* @__PURE__ */ i(u, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: Zp.map((a) => /* @__PURE__ */ i(Ke, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: r.contrast.text.primary,
          opacity: 0.35,
          textTransform: "uppercase"
        }, children: a }, a)) }),
        /* @__PURE__ */ i(
          Zn,
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
                bgcolor: v.accentColors.orange,
                color: "#fff"
              }
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ i(u, { sx: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgcolor: we(r.contrast.text.primary, 0.1),
      zIndex: 3
    } })
  ] });
}, ph = ({
  label: e,
  body: t,
  pillars: r,
  defaultOpen: n = !0,
  accentColor: o = v.hotOrange
}) => {
  const [a, s] = H(n), l = ee();
  return /* @__PURE__ */ m(
    u,
    {
      sx: {
        borderRadius: 0,
        overflow: "hidden",
        border: `1px solid ${l.contrast.border}`,
        backgroundColor: l.contrast.surface
      },
      children: [
        /* @__PURE__ */ m(
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
              borderBottom: a ? `1px solid ${l.contrast.border}` : "none"
            },
            children: [
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
                /* @__PURE__ */ i(u, { sx: { width: 3, height: 16, backgroundColor: o } }),
                /* @__PURE__ */ i(
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
              /* @__PURE__ */ i(
                u,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 11,
                    color: l.contrast.text.disabled,
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
        a && /* @__PURE__ */ m(u, { sx: { p: 2.5 }, children: [
          /* @__PURE__ */ i(
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
          r && r.length > 0 && /* @__PURE__ */ i(u, { sx: { display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }, children: r.map((c) => /* @__PURE__ */ m(
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
                /* @__PURE__ */ i(yr, { id: c.icon, size: 12, color: c.color, strokeWidth: 2 }),
                /* @__PURE__ */ i(
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
}, fh = ({
  logo: e,
  title: t,
  subtitle: r,
  badges: n,
  actions: o
}) => {
  const a = ee();
  return /* @__PURE__ */ m(
    u,
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
        /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          e && /* @__PURE__ */ i(u, { sx: { display: "inline-flex" }, children: e }),
          e && /* @__PURE__ */ i(u, { sx: { width: "1px", height: 28, backgroundColor: a.contrast.border } }),
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ i(
              u,
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
              u,
              {
                sx: {
                  fontFamily: '"Necto Mono", monospace',
                  fontSize: 10,
                  color: a.contrast.text.disabled,
                  mt: 0.125,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase"
                },
                children: r
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
          n,
          o
        ] })
      ]
    }
  );
}, hh = ({
  branding: e,
  statusBadge: t,
  groups: r,
  stats: n,
  clock: o,
  signature: a,
  width: s = 252
}) => {
  const l = v.erieBlack, c = "rgba(255,255,255,0.06)", d = v.white, p = "rgba(255,255,255,0.45)";
  return /* @__PURE__ */ m(
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
        /* @__PURE__ */ m(u, { sx: { p: "22px 20px 18px", borderBottom: `1px solid ${c}` }, children: [
          e.logo && /* @__PURE__ */ i(u, { sx: { mb: 1.75 }, children: e.logo }),
          /* @__PURE__ */ i(
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
          e.subtitle && /* @__PURE__ */ i(
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
        t && /* @__PURE__ */ i(u, { sx: { p: "10px 20px", borderBottom: `1px solid ${c}` }, children: /* @__PURE__ */ m(
          u,
          {
            sx: {
              display: "inline-flex",
              alignItems: "center",
              gap: 0.875,
              px: 1.375,
              py: 0.625,
              backgroundColor: `${v.telemetry[t.status]}1a`,
              border: `1px solid ${v.telemetry[t.status]}33`
            },
            children: [
              /* @__PURE__ */ i(vn, { status: t.status, size: 6 }),
              /* @__PURE__ */ i(
                u,
                {
                  component: "span",
                  sx: {
                    fontFamily: '"Necto Mono", monospace',
                    fontSize: 9,
                    color: v.telemetry[t.status],
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
        /* @__PURE__ */ i(u, { component: "nav", sx: { flex: 1, py: 1.75 }, children: r.map((f) => /* @__PURE__ */ m(u, { sx: { mb: 2.25 }, children: [
          /* @__PURE__ */ m(
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
                f.label
              ]
            }
          ),
          f.items.map((x) => /* @__PURE__ */ m(
            u,
            {
              component: "a",
              href: x.href,
              target: x.external ? "_blank" : void 0,
              rel: x.external ? "noopener noreferrer" : void 0,
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
                  borderLeftColor: v.hotOrange
                }
              },
              children: [
                /* @__PURE__ */ i(
                  yr,
                  {
                    id: x.icon,
                    size: 14,
                    color: "rgba(255,255,255,0.4)",
                    strokeWidth: 1.6
                  }
                ),
                /* @__PURE__ */ m(u, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ i(
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
                      children: x.name
                    }
                  ),
                  x.hint && /* @__PURE__ */ i(
                    u,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8.5,
                        color: v.moderateBlue,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        mt: "1px",
                        opacity: 0.8
                      },
                      children: x.hint
                    }
                  )
                ] }),
                x.status && /* @__PURE__ */ i(vn, { status: x.status, size: 6 })
              ]
            },
            x.id
          ))
        ] }, f.id)) }),
        n && n.length > 0 && /* @__PURE__ */ i(
          u,
          {
            sx: {
              borderTop: `1px solid ${c}`,
              p: "14px 20px",
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(n.length, 2)}, 1fr)`,
              gap: 1
            },
            children: n.map((f) => /* @__PURE__ */ m(
              u,
              {
                sx: {
                  textAlign: "center",
                  py: 1.25,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                  /* @__PURE__ */ i(
                    u,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 22,
                        fontWeight: 700,
                        color: f.color ?? v.moderateBlue,
                        lineHeight: 1
                      },
                      children: f.value
                    }
                  ),
                  /* @__PURE__ */ i(
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
                      children: f.label
                    }
                  )
                ]
              },
              f.label
            ))
          }
        ),
        o && /* @__PURE__ */ m(
          u,
          {
            sx: {
              borderTop: `1px solid ${c}`,
              p: "12px 20px",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ i(
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
              o.date && /* @__PURE__ */ i(
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
        a && /* @__PURE__ */ m(
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
              a.logo,
              /* @__PURE__ */ m(u, { children: [
                /* @__PURE__ */ i(
                  u,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 8.5,
                      color: p,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase"
                    },
                    children: a.caption
                  }
                ),
                /* @__PURE__ */ i(
                  u,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 11,
                      fontWeight: 700,
                      color: a.accentColor ?? v.hotOrange,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase"
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
}, mh = ({ children: e }) => /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ i(Nd, {}),
  /* @__PURE__ */ i(Jp, {}),
  /* @__PURE__ */ i(
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
  /* @__PURE__ */ i(Bp, {})
] }), ef = () => {
  const e = Se(), t = ee();
  return /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ m(u, { sx: { width: "100%", maxWidth: 600 }, children: [
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
}, gh = ({
  children: e,
  fallback: t = /* @__PURE__ */ i(ef, {})
}) => /* @__PURE__ */ i(qi, { fallback: t, children: e }), yh = () => {
  const { pathname: e, hash: t } = Je();
  return me(() => {
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
}, xh = ({ children: e }) => {
  const [t, r] = H(!0), n = Se(), o = _e(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let a = 0;
    const s = o.length, l = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const p = new Image();
      p.onload = l, p.onerror = c, p.src = d;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ i(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(u, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Rt, {}) }),
        /* @__PURE__ */ i(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, bh = ({ children: e }) => {
  const [t, r] = H(!0), n = Se(), o = _e(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let a = 0;
    const s = o.length, l = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const p = new Image();
      p.onload = l, p.onerror = c, p.src = d;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ i(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(u, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Rt, {}) }),
        /* @__PURE__ */ i(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, vh = ({ children: e }) => {
  const [t, r] = H(!0), n = Se();
  return me(() => {
    const o = [
      "/assets/images/hero-image.png",
      "/assets/images/hero-image2.png",
      "/assets/images/hero-image3.png",
      "/assets/images/ai4u-logo.png",
      "/assets/images/ai4u-logo-dark.png"
    ];
    let a = 0;
    const s = o.length, l = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const p = new Image();
      p.onload = l, p.onerror = c, p.src = d;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, []), t ? /* @__PURE__ */ i(
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
      children: /* @__PURE__ */ i(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(u, { sx: { mb: 4 }, children: /* @__PURE__ */ i(Rt, {}) }),
        /* @__PURE__ */ i(u, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, Sh = ({ children: e }) => /* @__PURE__ */ i(be, { children: e }), wh = ({
  children: e,
  title: t,
  subtitle: r,
  className: n = "",
  variant: o = "default"
}) => {
  const a = Se(), s = () => {
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
          borderBottom: `1px solid ${a.palette.divider}`
        };
    }
  };
  return /* @__PURE__ */ m(u, { sx: s(), className: n, children: [
    (t || r) && /* @__PURE__ */ i(u, { component: "header", sx: l(), children: /* @__PURE__ */ i(Xe, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
      t && /* @__PURE__ */ i(En, { sx: {
        mb: { xs: 4, md: 6 },
        color: o === "futuristic" ? "#FFFFFF" : "#171717"
      }, children: t }),
      r && /* @__PURE__ */ i(Re, { sx: {
        fontSize: { xs: "1.125rem", md: "1.25rem" },
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        maxWidth: "md",
        mx: "auto",
        lineHeight: 1.6
      }, children: r })
    ] }) }) }),
    /* @__PURE__ */ i(u, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: e })
  ] });
}, Ch = ({
  children: e,
  title: t,
  description: r,
  className: n = "",
  variant: o = "default"
}) => {
  const a = Se();
  return /* @__PURE__ */ m(u, { sx: (() => {
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
    (t || r) && /* @__PURE__ */ m(u, { sx: { mb: 4 }, children: [
      t && /* @__PURE__ */ i(ha, { sx: {
        mb: 2,
        // Estilo minimalista: usar color del tema en lugar de gradiente naranja
        color: o === "futuristic" ? "#FFFFFF" : a.palette.text.primary
      }, children: t }),
      r && /* @__PURE__ */ i(Re, { sx: {
        fontSize: "1.125rem",
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        mb: 4
      }, children: r })
    ] }),
    e
  ] });
}, kh = ({
  children: e,
  className: t = "",
  maxWidth: r = "xl",
  padding: n = "lg"
}) => /* @__PURE__ */ i(
  Xe,
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
), Eh = ({
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
    children: Gi.Children.map(e, (a, s) => /* @__PURE__ */ i(
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
), Th = ({
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
var tf = /* @__PURE__ */ ((e) => (e.OPERATION = "operation", e.STRATEGY = "strategy", e.EDUCATION = "education", e.TRANSFORMATION = "transformation", e))(tf || {}), rf = /* @__PURE__ */ ((e) => (e.AUTOMATION = "automation", e.AI_ASSISTANT = "ai_assistant", e.ANALYTICS = "analytics", e.ECOMMERCE = "ecommerce", e.TRAINING = "training", e.CONSULTING = "consulting", e))(rf || {}), nf = /* @__PURE__ */ ((e) => (e.ACTIVE = "active", e.INACTIVE = "inactive", e.COMING_SOON = "coming_soon", e.DEPRECATED = "deprecated", e))(nf || {});
export {
  $h as AI4U_DESIGN_TOKENS,
  v as AI4U_PALETTE,
  th as AuthCard,
  Ah as BORDER_TOKENS,
  Hr as BREAKPOINT_TOKENS,
  Sh as BasicLoadingWrapper,
  Re as BodyText,
  Af as Branding,
  Gf as Breadcrumb,
  zf as BudgetCard,
  kn as Button,
  _h as COMPONENT_SPACING,
  Oh as COMPONENT_VARIANTS,
  Ii as CONTRAST_PAIRS,
  jr as Card,
  _f as ChatButton,
  Ke as CodeText,
  Za as ColorModeContext,
  kh as Container,
  jt as ContextualLink,
  yr as DashboardIcon,
  hh as DashboardSidebar,
  fh as DashboardTopBar,
  Zn as DiagnosticCTA,
  lh as Documentation,
  Yf as ErrorBoundary,
  Qf as ExpandableSection,
  Jf as FilterStats,
  Bp as Footer,
  mr as GeometricIcon,
  ys as Giant,
  $f as GiantNumber,
  Nd as GoogleTranslateProvider,
  Qo as GoogleTranslateWidget,
  Eh as Grid,
  En as H1,
  ha as H2,
  Kt as H3,
  Ae as H4,
  ff as H5,
  hf as H6,
  uh as HeroFullscreen,
  nh as HeroSection,
  vf as ImagePreloader,
  If as IntelligentImagePreloader,
  mh as Layout,
  jn as LazyImage,
  gh as LazyPage,
  Sf as LoadingScreen,
  bh as LoadingWrapper,
  Rt as Logo,
  Df as MetricCard,
  ch as ModelingInterface,
  eh as ModuleCard,
  Jp as Navbar,
  rh as Navigation,
  Wd as NavigationDot,
  Ef as OptimizedImage,
  Tf as OptimizedImageAdvanced,
  wh as PageLayout,
  Cf as PixelArtFilter,
  wf as PixelArtImage,
  Pf as ProcessStep,
  Zf as ProgressiveContent,
  qf as RelatedPages,
  ri as SEOHead,
  at as SHADOW_TOKENS,
  Mh as SPACING_TOKENS,
  ht as SURFACE_PRESETS,
  dh as ScrollRevealHero,
  yh as ScrollToTop,
  Ch as Section,
  Uf as ServiceCard,
  rf as ServiceCategory,
  Kf as ServiceCrossLink,
  nf as ServiceStatus,
  tf as ServiceSuperCategory,
  Rf as ServiceThumbnail,
  Of as ServicesButton,
  ih as ServicesFilter,
  sh as ServicesStats,
  xh as SimpleAppWrapper,
  vh as SimpleLoadingWrapper,
  oh as SleepWidget,
  de as SmallText,
  Th as Stack,
  vn as StatusDot,
  Xf as SuperCategoryFilter,
  yf as SurfaceProvider,
  re as TEXT_VARIANTS,
  Ph as TRANSITION_TOKENS,
  Q as TYPOGRAPHY_TOKENS,
  zh as TYPOGRAPHY_UTILITIES,
  gf as ThemeProvider,
  Mf as TransactionCard,
  mf as Typography,
  mf as TypographyWrapper,
  ph as VisionBanner,
  ah as WeatherWidget,
  Dh as Z_INDEX_TOKENS,
  kf as buildSEOMetadata,
  Vf as cleanMetaDescription,
  Fh as createAI4UTokens,
  Hf as generateKeywords,
  Op as getBreadcrumbStructuredData,
  jf as getCanonicalUrl,
  Wf as getFAQStructuredData,
  Ff as getHomeStructuredData,
  Bf as getPageMetaTags,
  _p as getServiceStructuredData,
  Nf as getServicesStructuredData,
  Lf as getUseCasesStructuredData,
  Bn as useColorMode,
  ee as useColors,
  Ri as useComponentColors,
  xf as useComponentVariant,
  Nh as useContrastColors,
  bf as useContrastPair,
  Id as useSurface
};
//# sourceMappingURL=index.js.map
