var da = Object.defineProperty;
var ua = (e, t, r) => t in e ? da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Te = (e, t, r) => ua(e, typeof t != "symbol" ? t + "" : t, r);
import { AI4U_PALETTE as v, TEXT_VARIANTS as te, TYPOGRAPHY_TOKENS as J, SHADOW_TOKENS as rt, SURFACE_PRESETS as sn, CONTRAST_PAIRS as pa, useComponentColors as fa, BREAKPOINT_TOKENS as Wr } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as mf, BORDER_TOKENS as gf, COMPONENT_SPACING as yf, COMPONENT_VARIANTS as bf, SPACING_TOKENS as xf, TRANSITION_TOKENS as vf, TYPOGRAPHY_UTILITIES as Sf, Z_INDEX_TOKENS as wf, createAI4UTokens as Cf, useContrastColors as kf } from "./tokens/index.js";
import { jsxs as m, jsx as a, Fragment as ve } from "react/jsx-runtime";
import { styled as Ae, Button as Ze, Box as u, Typography as z, useTheme as we, Container as Xe, Stack as he, Skeleton as ne, useMediaQuery as lr, Menu as si, MenuItem as nr, Link as ci, keyframes as ha, Fab as ma, Dialog as ga, DialogTitle as ya, IconButton as We, alpha as Ce, DialogContent as ba, Paper as Vt, CircularProgress as xa, TextField as li, Card as Cn, CardContent as Yt, Avatar as to, Chip as It, Divider as br, Alert as va, AlertTitle as Sa, Collapse as wa, Grid as Oe, Tabs as Ca, Tab as ka, TableContainer as Ta, Table as Ea, TableHead as Ia, TableRow as ro, TableCell as Ye, TableBody as Aa, AppBar as $a, Toolbar as Oa } from "@mui/material";
import * as j from "react";
import be, { useState as G, useRef as xr, useEffect as me, createContext as kn, useCallback as dt, useMemo as Re, useContext as vr, Component as qt, Suspense as _a } from "react";
import { Global as Ra, ThemeContext as di } from "@emotion/react";
import Ma from "@emotion/styled";
import { Link as wt, useNavigate as Tn, useLocation as Pa } from "react-router-dom";
import { Receipt as za, MoreVert as no, AttachMoney as Da, Favorite as Fa, TrendingUp as Na, School as La, FitnessCenter as Wa, ShoppingCart as ja, AccountBalance as Ba, Add as Va, RefreshOutlined as Ha, ExpandMore as Ua, Bed as Ga, Refresh as ui, Wifi as Ya, Bluetooth as qa, LocationOn as Ka, WbSunny as oo, Cloud as Xa, Opacity as Qa, ContentCopy as Ja } from "@mui/icons-material";
const Za = Ae(Ze, {
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
}), es = Ae(u)(({ theme: e }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...te.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), En = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  label: n,
  className: o,
  sx: i,
  ...s
}) => /* @__PURE__ */ m(
  Za,
  {
    customVariant: t,
    size: r,
    className: o,
    sx: i,
    ...s,
    children: [
      n && /* @__PURE__ */ a(es, { children: n }),
      e
    ]
  }
), ts = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h1",
    sx: {
      ...te.display.giant,
      ...e.sx
    },
    ...e
  }
), In = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h1",
    sx: {
      ...te.display.large,
      ...e.sx
    },
    ...e
  }
), pi = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h2",
    sx: {
      ...te.display.medium,
      ...e.sx
    },
    ...e
  }
), Kt = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h3",
    sx: {
      ...te.display.small,
      ...e.sx
    },
    ...e
  }
), _e = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h4",
    sx: {
      fontSize: te.display.small.fontSize,
      fontWeight: 400,
      lineHeight: 1.2,
      textTransform: "none",
      ...e.sx
    },
    ...e
  }
), op = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h5",
    sx: {
      fontSize: te.body.large.fontSize,
      fontWeight: 400,
      lineHeight: 1.3,
      ...e.sx
    },
    ...e
  }
), ip = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "h6",
    sx: {
      fontSize: te.body.regular.fontSize,
      fontWeight: 400,
      lineHeight: 1.4,
      ...e.sx
    },
    ...e
  }
), $e = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "body1",
    sx: {
      ...te.body.regular,
      ...e.sx
    },
    ...e
  }
), de = (e) => /* @__PURE__ */ a(
  z,
  {
    variant: "body2",
    sx: {
      ...te.body.small,
      ...e.sx
    },
    ...e
  }
), Ke = (e) => {
  const t = we();
  return /* @__PURE__ */ a(
    z,
    {
      component: "code",
      fontFamily: te.ui.code.fontFamily,
      sx: {
        display: "inline-block",
        backgroundColor: t.palette.mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.04)",
        color: t.palette.mode === "dark" ? "primary.light" : "text.primary",
        borderRadius: 1,
        px: 0.5,
        ...te.ui.code,
        ...e.sx
      },
      ...e
    }
  );
}, ap = ({ variant: e = "body1", ...t }) => /* @__PURE__ */ a(z, { variant: e, ...t }), rs = "/assets/images/logo-v2-negro.png", ns = "/assets/images/logo-v2-crema.png", At = ({
  variant: e = "desktop",
  light: t = !1,
  onClick: r,
  sx: n,
  ...o
}) => /* @__PURE__ */ a(
  u,
  {
    component: "img",
    src: t ? ns : rs,
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
), os = (e, t = {}) => {
  const [r, n] = G(!1), [o, i] = G(!1), [s, c] = G(!1), [l, d] = G(""), f = xr(null), { threshold: g = 0.1, rootMargin: b = "50px", priority: p = !1 } = t;
  return me(() => {
    if (d(e), p) {
      i(!0);
      return;
    }
    const x = new IntersectionObserver(
      ([y]) => {
        y.isIntersecting && (i(!0), x.disconnect());
      },
      {
        threshold: g,
        rootMargin: b
      }
    );
    return f.current && x.observe(f.current), () => {
      x.disconnect();
    };
  }, [g, b, p, e]), me(() => {
    if (!o) return;
    const x = new Image();
    x.onload = () => {
      n(!0), c(!1);
    }, x.onerror = () => {
      c(!0), n(!1);
    }, x.src = l;
  }, [l, o]), {
    imgRef: f,
    isLoaded: r,
    isInView: o,
    error: s,
    imageSrc: l
  };
}, cn = (e = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: e
  });
};
function ft(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const et = "$$material";
function is(e) {
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
var as = {
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
function ss(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var cs = /[A-Z]|^ms/g, ls = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fi = function(t) {
  return t.charCodeAt(1) === 45;
}, io = function(t) {
  return t != null && typeof t != "boolean";
}, jr = /* @__PURE__ */ ss(function(e) {
  return fi(e) ? e : e.replace(cs, "-$&").toLowerCase();
}), ao = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(ls, function(n, o, i) {
          return tt = {
            name: o,
            styles: i,
            next: tt
          }, o;
        });
  }
  return as[t] !== 1 && !fi(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
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
        return tt = {
          name: o.name,
          styles: o.styles,
          next: tt
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var s = i.next;
        if (s !== void 0)
          for (; s !== void 0; )
            tt = {
              name: s.name,
              styles: s.styles,
              next: tt
            }, s = s.next;
        var c = i.styles + ";";
        return c;
      }
      return ds(e, t, r);
    }
  }
  var l = r;
  return l;
}
function ds(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += dr(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var s = r[i];
      if (typeof s != "object") {
        var c = s;
        io(c) && (n += jr(i) + ":" + ao(i, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var l = 0; l < s.length; l++)
          io(s[l]) && (n += jr(i) + ":" + ao(i, s[l]) + ";");
      else {
        var d = dr(e, t, s);
        switch (i) {
          case "animation":
          case "animationName": {
            n += jr(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var so = /label:\s*([^\s;{]+)\s*(;|$)/g, tt;
function us(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  tt = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += dr(r, t, i);
  else {
    var s = i;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += dr(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  so.lastIndex = 0;
  for (var d = "", f; (f = so.exec(o)) !== null; )
    d += "-" + f[1];
  var g = is(o) + d;
  return {
    name: g,
    styles: o,
    next: tt
  };
}
function Sr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ln = { exports: {} }, Zt = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var co;
function ps() {
  if (co) return oe;
  co = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function $(k) {
    if (typeof k == "object" && k !== null) {
      var A = k.$$typeof;
      switch (A) {
        case t:
          switch (k = k.type, k) {
            case l:
            case d:
            case n:
            case i:
            case o:
            case g:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case c:
                case f:
                case x:
                case p:
                case s:
                  return k;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function R(k) {
    return $(k) === d;
  }
  return oe.AsyncMode = l, oe.ConcurrentMode = d, oe.ContextConsumer = c, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = f, oe.Fragment = n, oe.Lazy = x, oe.Memo = p, oe.Portal = r, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = g, oe.isAsyncMode = function(k) {
    return R(k) || $(k) === l;
  }, oe.isConcurrentMode = R, oe.isContextConsumer = function(k) {
    return $(k) === c;
  }, oe.isContextProvider = function(k) {
    return $(k) === s;
  }, oe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === t;
  }, oe.isForwardRef = function(k) {
    return $(k) === f;
  }, oe.isFragment = function(k) {
    return $(k) === n;
  }, oe.isLazy = function(k) {
    return $(k) === x;
  }, oe.isMemo = function(k) {
    return $(k) === p;
  }, oe.isPortal = function(k) {
    return $(k) === r;
  }, oe.isProfiler = function(k) {
    return $(k) === i;
  }, oe.isStrictMode = function(k) {
    return $(k) === o;
  }, oe.isSuspense = function(k) {
    return $(k) === g;
  }, oe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === n || k === d || k === i || k === o || k === g || k === b || typeof k == "object" && k !== null && (k.$$typeof === x || k.$$typeof === p || k.$$typeof === s || k.$$typeof === c || k.$$typeof === f || k.$$typeof === w || k.$$typeof === C || k.$$typeof === _ || k.$$typeof === y);
  }, oe.typeOf = $, oe;
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
var lo;
function fs() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, f = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, b = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, w = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function $(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === d || O === i || O === o || O === g || O === b || typeof O == "object" && O !== null && (O.$$typeof === x || O.$$typeof === p || O.$$typeof === s || O.$$typeof === c || O.$$typeof === f || O.$$typeof === w || O.$$typeof === C || O.$$typeof === _ || O.$$typeof === y);
    }
    function R(O) {
      if (typeof O == "object" && O !== null) {
        var Pe = O.$$typeof;
        switch (Pe) {
          case t:
            var at = O.type;
            switch (at) {
              case l:
              case d:
              case n:
              case i:
              case o:
              case g:
                return at;
              default:
                var Mt = at && at.$$typeof;
                switch (Mt) {
                  case c:
                  case f:
                  case x:
                  case p:
                  case s:
                    return Mt;
                  default:
                    return Pe;
                }
            }
          case r:
            return Pe;
        }
      }
    }
    var k = l, A = d, Y = c, D = s, F = t, K = f, L = n, h = x, M = p, I = r, W = i, U = o, pe = g, ke = !1;
    function Ue(O) {
      return ke || (ke = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(O) || R(O) === l;
    }
    function T(O) {
      return R(O) === d;
    }
    function P(O) {
      return R(O) === c;
    }
    function N(O) {
      return R(O) === s;
    }
    function B(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function V(O) {
      return R(O) === f;
    }
    function X(O) {
      return R(O) === n;
    }
    function q(O) {
      return R(O) === x;
    }
    function H(O) {
      return R(O) === p;
    }
    function Q(O) {
      return R(O) === r;
    }
    function ee(O) {
      return R(O) === i;
    }
    function Z(O) {
      return R(O) === o;
    }
    function Ee(O) {
      return R(O) === g;
    }
    ie.AsyncMode = k, ie.ConcurrentMode = A, ie.ContextConsumer = Y, ie.ContextProvider = D, ie.Element = F, ie.ForwardRef = K, ie.Fragment = L, ie.Lazy = h, ie.Memo = M, ie.Portal = I, ie.Profiler = W, ie.StrictMode = U, ie.Suspense = pe, ie.isAsyncMode = Ue, ie.isConcurrentMode = T, ie.isContextConsumer = P, ie.isContextProvider = N, ie.isElement = B, ie.isForwardRef = V, ie.isFragment = X, ie.isLazy = q, ie.isMemo = H, ie.isPortal = Q, ie.isProfiler = ee, ie.isStrictMode = Z, ie.isSuspense = Ee, ie.isValidElementType = $, ie.typeOf = R;
  }()), ie;
}
var uo;
function hi() {
  return uo || (uo = 1, process.env.NODE_ENV === "production" ? Zt.exports = ps() : Zt.exports = fs()), Zt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Br, po;
function hs() {
  if (po) return Br;
  po = 1;
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
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var l = Object.getOwnPropertyNames(s).map(function(f) {
        return s[f];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        d[f] = f;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Br = o() ? Object.assign : function(i, s) {
    for (var c, l = n(i), d, f = 1; f < arguments.length; f++) {
      c = Object(arguments[f]);
      for (var g in c)
        t.call(c, g) && (l[g] = c[g]);
      if (e) {
        d = e(c);
        for (var b = 0; b < d.length; b++)
          r.call(c, d[b]) && (l[d[b]] = c[d[b]]);
      }
    }
    return l;
  }, Br;
}
var Vr, fo;
function An() {
  if (fo) return Vr;
  fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vr = e, Vr;
}
var Hr, ho;
function mi() {
  return ho || (ho = 1, Hr = Function.call.bind(Object.prototype.hasOwnProperty)), Hr;
}
var Ur, mo;
function ms() {
  if (mo) return Ur;
  mo = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = An(), r = {}, n = mi();
    e = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(i, s, c, l, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in i)
        if (n(i, f)) {
          var g;
          try {
            if (typeof i[f] != "function") {
              var b = Error(
                (l || "React class") + ": " + c + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw b.name = "Invariant Violation", b;
            }
            g = i[f](s, f, l, c, null, t);
          } catch (x) {
            g = x;
          }
          if (g && !(g instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var p = d ? d() : "";
            e(
              "Failed " + c + " type: " + g.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ur = o, Ur;
}
var Gr, go;
function gs() {
  if (go) return Gr;
  go = 1;
  var e = hi(), t = hs(), r = An(), n = mi(), o = ms(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
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
  return Gr = function(c, l) {
    var d = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function g(T) {
      var P = T && (d && T[d] || T[f]);
      if (typeof P == "function")
        return P;
    }
    var b = "<<anonymous>>", p = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: _(),
      arrayOf: $,
      element: R(),
      elementType: k(),
      instanceOf: A,
      node: K(),
      objectOf: D,
      oneOf: Y,
      oneOfType: F,
      shape: h,
      exact: M
    };
    function x(T, P) {
      return T === P ? T !== 0 || 1 / T === 1 / P : T !== T && P !== P;
    }
    function y(T, P) {
      this.message = T, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function w(T) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, N = 0;
      function B(X, q, H, Q, ee, Z, Ee) {
        if (Q = Q || b, Z = Z || H, Ee !== r) {
          if (l) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Pe = Q + ":" + H;
            !P[Pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[Pe] = !0, N++);
          }
        }
        return q[H] == null ? X ? q[H] === null ? new y("The " + ee + " `" + Z + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new y("The " + ee + " `" + Z + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : T(q, H, Q, ee, Z);
      }
      var V = B.bind(null, !1);
      return V.isRequired = B.bind(null, !0), V;
    }
    function C(T) {
      function P(N, B, V, X, q, H) {
        var Q = N[B], ee = U(Q);
        if (ee !== T) {
          var Z = pe(Q);
          return new y(
            "Invalid " + X + " `" + q + "` of type " + ("`" + Z + "` supplied to `" + V + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return w(P);
    }
    function _() {
      return w(s);
    }
    function $(T) {
      function P(N, B, V, X, q) {
        if (typeof T != "function")
          return new y("Property `" + q + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var H = N[B];
        if (!Array.isArray(H)) {
          var Q = U(H);
          return new y("Invalid " + X + " `" + q + "` of type " + ("`" + Q + "` supplied to `" + V + "`, expected an array."));
        }
        for (var ee = 0; ee < H.length; ee++) {
          var Z = T(H, ee, V, X, q + "[" + ee + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return w(P);
    }
    function R() {
      function T(P, N, B, V, X) {
        var q = P[N];
        if (!c(q)) {
          var H = U(q);
          return new y("Invalid " + V + " `" + X + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(T);
    }
    function k() {
      function T(P, N, B, V, X) {
        var q = P[N];
        if (!e.isValidElementType(q)) {
          var H = U(q);
          return new y("Invalid " + V + " `" + X + "` of type " + ("`" + H + "` supplied to `" + B + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(T);
    }
    function A(T) {
      function P(N, B, V, X, q) {
        if (!(N[B] instanceof T)) {
          var H = T.name || b, Q = Ue(N[B]);
          return new y("Invalid " + X + " `" + q + "` of type " + ("`" + Q + "` supplied to `" + V + "`, expected ") + ("instance of `" + H + "`."));
        }
        return null;
      }
      return w(P);
    }
    function Y(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function P(N, B, V, X, q) {
        for (var H = N[B], Q = 0; Q < T.length; Q++)
          if (x(H, T[Q]))
            return null;
        var ee = JSON.stringify(T, function(Ee, O) {
          var Pe = pe(O);
          return Pe === "symbol" ? String(O) : O;
        });
        return new y("Invalid " + X + " `" + q + "` of value `" + String(H) + "` " + ("supplied to `" + V + "`, expected one of " + ee + "."));
      }
      return w(P);
    }
    function D(T) {
      function P(N, B, V, X, q) {
        if (typeof T != "function")
          return new y("Property `" + q + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var H = N[B], Q = U(H);
        if (Q !== "object")
          return new y("Invalid " + X + " `" + q + "` of type " + ("`" + Q + "` supplied to `" + V + "`, expected an object."));
        for (var ee in H)
          if (n(H, ee)) {
            var Z = T(H, ee, V, X, q + "." + ee, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return w(P);
    }
    function F(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var P = 0; P < T.length; P++) {
        var N = T[P];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ke(N) + " at index " + P + "."
          ), s;
      }
      function B(V, X, q, H, Q) {
        for (var ee = [], Z = 0; Z < T.length; Z++) {
          var Ee = T[Z], O = Ee(V, X, q, H, Q, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && ee.push(O.data.expectedType);
        }
        var Pe = ee.length > 0 ? ", expected one of type [" + ee.join(", ") + "]" : "";
        return new y("Invalid " + H + " `" + Q + "` supplied to " + ("`" + q + "`" + Pe + "."));
      }
      return w(B);
    }
    function K() {
      function T(P, N, B, V, X) {
        return I(P[N]) ? null : new y("Invalid " + V + " `" + X + "` supplied to " + ("`" + B + "`, expected a ReactNode."));
      }
      return w(T);
    }
    function L(T, P, N, B, V) {
      return new y(
        (T || "React class") + ": " + P + " type `" + N + "." + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function h(T) {
      function P(N, B, V, X, q) {
        var H = N[B], Q = U(H);
        if (Q !== "object")
          return new y("Invalid " + X + " `" + q + "` of type `" + Q + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var ee in T) {
          var Z = T[ee];
          if (typeof Z != "function")
            return L(V, X, q, ee, pe(Z));
          var Ee = Z(H, ee, V, X, q + "." + ee, r);
          if (Ee)
            return Ee;
        }
        return null;
      }
      return w(P);
    }
    function M(T) {
      function P(N, B, V, X, q) {
        var H = N[B], Q = U(H);
        if (Q !== "object")
          return new y("Invalid " + X + " `" + q + "` of type `" + Q + "` " + ("supplied to `" + V + "`, expected `object`."));
        var ee = t({}, N[B], T);
        for (var Z in ee) {
          var Ee = T[Z];
          if (n(T, Z) && typeof Ee != "function")
            return L(V, X, q, Z, pe(Ee));
          if (!Ee)
            return new y(
              "Invalid " + X + " `" + q + "` key `" + Z + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(N[B], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var O = Ee(H, Z, V, X, q + "." + Z, r);
          if (O)
            return O;
        }
        return null;
      }
      return w(P);
    }
    function I(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(I);
          if (T === null || c(T))
            return !0;
          var P = g(T);
          if (P) {
            var N = P.call(T), B;
            if (P !== T.entries) {
              for (; !(B = N.next()).done; )
                if (!I(B.value))
                  return !1;
            } else
              for (; !(B = N.next()).done; ) {
                var V = B.value;
                if (V && !I(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function W(T, P) {
      return T === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function U(T) {
      var P = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : W(P, T) ? "symbol" : P;
    }
    function pe(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var P = U(T);
      if (P === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ke(T) {
      var P = pe(T);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Ue(T) {
      return !T.constructor || !T.constructor.name ? b : T.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Gr;
}
var Yr, yo;
function ys() {
  if (yo) return Yr;
  yo = 1;
  var e = An();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Yr = function() {
    function n(s, c, l, d, f, g) {
      if (g !== e) {
        var b = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw b.name = "Invariant Violation", b;
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
  var bs = hi(), xs = !0;
  ln.exports = gs()(bs.isElement, xs);
} else
  ln.exports = ys()();
var vs = ln.exports;
const E = /* @__PURE__ */ Sr(vs);
function Ss(e) {
  return e == null || Object.keys(e).length === 0;
}
function $n(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ a(Ra, {
    styles: typeof t == "function" ? (o) => t(Ss(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && ($n.propTypes = {
  defaultTheme: E.object,
  styles: E.oneOfType([E.array, E.string, E.object, E.func])
});
/**
 * @mui/styled-engine v9.0.0
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function ws(e, t) {
  const r = Ma(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Cs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const bo = [];
function nt(e) {
  return bo[0] = e, us(bo);
}
var dn = { exports: {} }, ce = {};
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
function ks() {
  if (xo) return ce;
  xo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), b = Symbol.for("react.view_transition"), p = Symbol.for("react.client.reference");
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var w = y.$$typeof;
      switch (w) {
        case e:
          switch (y = y.type, y) {
            case r:
            case o:
            case n:
            case l:
            case d:
            case b:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case s:
                case c:
                case g:
                case f:
                  return y;
                case i:
                  return y;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return ce.ContextConsumer = i, ce.ContextProvider = s, ce.Element = e, ce.ForwardRef = c, ce.Fragment = r, ce.Lazy = g, ce.Memo = f, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = l, ce.SuspenseList = d, ce.isContextConsumer = function(y) {
    return x(y) === i;
  }, ce.isContextProvider = function(y) {
    return x(y) === s;
  }, ce.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === e;
  }, ce.isForwardRef = function(y) {
    return x(y) === c;
  }, ce.isFragment = function(y) {
    return x(y) === r;
  }, ce.isLazy = function(y) {
    return x(y) === g;
  }, ce.isMemo = function(y) {
    return x(y) === f;
  }, ce.isPortal = function(y) {
    return x(y) === t;
  }, ce.isProfiler = function(y) {
    return x(y) === o;
  }, ce.isStrictMode = function(y) {
    return x(y) === n;
  }, ce.isSuspense = function(y) {
    return x(y) === l;
  }, ce.isSuspenseList = function(y) {
    return x(y) === d;
  }, ce.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === o || y === n || y === l || y === d || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === f || y.$$typeof === s || y.$$typeof === i || y.$$typeof === c || y.$$typeof === p || y.getModuleId !== void 0);
  }, ce.typeOf = x, ce;
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
var vo;
function Ts() {
  return vo || (vo = 1, process.env.NODE_ENV !== "production" && function() {
    function e(y) {
      if (typeof y == "object" && y !== null) {
        var w = y.$$typeof;
        switch (w) {
          case t:
            switch (y = y.type, y) {
              case n:
              case i:
              case o:
              case d:
              case f:
              case p:
                return y;
              default:
                switch (y = y && y.$$typeof, y) {
                  case c:
                  case l:
                  case b:
                  case g:
                    return y;
                  case s:
                    return y;
                  default:
                    return w;
                }
            }
          case r:
            return w;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), p = Symbol.for("react.view_transition"), x = Symbol.for("react.client.reference");
    le.ContextConsumer = s, le.ContextProvider = c, le.Element = t, le.ForwardRef = l, le.Fragment = n, le.Lazy = b, le.Memo = g, le.Portal = r, le.Profiler = i, le.StrictMode = o, le.Suspense = d, le.SuspenseList = f, le.isContextConsumer = function(y) {
      return e(y) === s;
    }, le.isContextProvider = function(y) {
      return e(y) === c;
    }, le.isElement = function(y) {
      return typeof y == "object" && y !== null && y.$$typeof === t;
    }, le.isForwardRef = function(y) {
      return e(y) === l;
    }, le.isFragment = function(y) {
      return e(y) === n;
    }, le.isLazy = function(y) {
      return e(y) === b;
    }, le.isMemo = function(y) {
      return e(y) === g;
    }, le.isPortal = function(y) {
      return e(y) === r;
    }, le.isProfiler = function(y) {
      return e(y) === i;
    }, le.isStrictMode = function(y) {
      return e(y) === o;
    }, le.isSuspense = function(y) {
      return e(y) === d;
    }, le.isSuspenseList = function(y) {
      return e(y) === f;
    }, le.isValidElementType = function(y) {
      return typeof y == "string" || typeof y == "function" || y === n || y === i || y === o || y === d || y === f || typeof y == "object" && y !== null && (y.$$typeof === b || y.$$typeof === g || y.$$typeof === c || y.$$typeof === s || y.$$typeof === l || y.$$typeof === x || y.getModuleId !== void 0);
    }, le.typeOf = e;
  }()), le;
}
process.env.NODE_ENV === "production" ? dn.exports = ks() : dn.exports = Ts();
var ur = dn.exports;
function Je(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function gi(e) {
  if (/* @__PURE__ */ j.isValidElement(e) || ur.isValidElementType(e) || !Je(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = gi(e[r]);
  }), t;
}
function Le(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Je(e) && Je(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ j.isValidElement(t[o]) || ur.isValidElementType(t[o]) ? n[o] = t[o] : Je(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Je(e[o]) ? n[o] = Le(e[o], t[o], r) : r.clone ? n[o] = Je(t[o]) ? gi(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Es = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function yi(e) {
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
  } = e, i = Es(t), s = Object.keys(i);
  function c(p) {
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r})`;
  }
  function l(p) {
    return `@media (max-width:${(typeof t[p] == "number" ? t[p] : p) - n / 100}${r})`;
  }
  function d(p, x) {
    const y = s.indexOf(x);
    return `@media (min-width:${typeof t[p] == "number" ? t[p] : p}${r}) and (max-width:${(y !== -1 && typeof t[s[y]] == "number" ? t[s[y]] : x) - n / 100}${r})`;
  }
  function f(p) {
    return s.indexOf(p) + 1 < s.length ? d(p, s[s.indexOf(p) + 1]) : c(p);
  }
  function g(p) {
    const x = s.indexOf(p);
    return x === 0 ? c(s[1]) : x === s.length - 1 ? l(s[x]) : d(p, s[s.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  const b = [];
  for (let p = 0; p < s.length; p += 1)
    b.push(c(s[p]));
  return {
    keys: s,
    values: i,
    up: c,
    down: l,
    between: d,
    only: f,
    not: g,
    unit: r,
    internal_mediaKeys: b,
    ...o
  };
}
const So = /min-width:\s*([0-9.]+)/;
function wo(e, t) {
  if (!e.containerQueries || !Is(t))
    return t;
  const r = [];
  for (const o in t)
    o.startsWith("@container") && r.push(o);
  r.sort((o, i) => {
    var s, c;
    return +(((s = o.match(So)) == null ? void 0 : s[1]) || 0) - +(((c = i.match(So)) == null ? void 0 : c[1]) || 0);
  });
  const n = t;
  for (let o = 0; o < r.length; o += 1) {
    const i = r[o], s = n[i];
    delete n[i], n[i] = s;
  }
  return n;
}
function Is(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function bi(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function As(e, t) {
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
function $s(e) {
  const t = (i, s) => i.replace("@media", s ? `@container ${s}` : "@container");
  function r(i, s) {
    i.up = (...c) => t(e.breakpoints.up(...c), s), i.down = (...c) => t(e.breakpoints.down(...c), s), i.between = (...c) => t(e.breakpoints.between(...c), s), i.only = (...c) => t(e.breakpoints.only(...c), s), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), s);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Os = {
  borderRadius: 4
}, it = process.env.NODE_ENV !== "production" ? E.oneOfType([E.number, E.string, E.object, E.array]) : {};
function xi(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function Ct(e, t) {
  const r = Array.isArray(t), n = Array.isArray(e);
  return zs(t) ? t : Ds(e) ? $t(t) : r && n ? Ms(e, t) : r !== n ? $t(t) : Fs(e, t);
}
function _s(e) {
  let t = 0;
  const r = e.length, n = new Array(r);
  for (t = 0; t < r; t += 1)
    n[t] = $t(e[t]);
  return n;
}
function Rs(e) {
  const t = {};
  for (const r in e)
    t[r] = $t(e[r]);
  return t;
}
function Ms(e, t) {
  const r = e.length;
  for (let n = 0; n < t.length; n += 1)
    e[r + n] = $t(t[n]);
  return e;
}
function Ps(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function zs(e) {
  return typeof e != "object" || e === null;
}
function Ds(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function $t(e) {
  return Ps(e) ? Array.isArray(e) ? _s(e) : Rs(e) : e;
}
function Fs(e, t) {
  for (const r in t)
    r in e ? e[r] = Ct(e[r], t[r]) : e[r] = $t(t[r]);
  return e;
}
const Ns = {}, wr = {
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
}, pr = yi({
  values: wr
}), Ls = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : wr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Rt(e, t, r) {
  const n = {};
  return Cr(n, e.theme, t, (o, i, s) => {
    const c = r(i, s);
    o ? n[o] = c : Ct(n, c);
  });
}
function Cr(e, t, r, n) {
  if (t ?? (t = Ns), Array.isArray(r)) {
    const o = t.breakpoints ?? pr;
    for (let i = 0; i < r.length; i += 1)
      qr(e, o.up(o.keys[i]), r[i], void 0, n);
    return e;
  }
  if (typeof r == "object") {
    const o = t.breakpoints ?? pr, i = o.values ?? wr;
    for (const s in r)
      if (bi(o.keys, s)) {
        const c = As(t.containerQueries ? t : Ls, s);
        c && qr(e, c, r[s], s, n);
      } else if (s in i) {
        const c = o.up(s);
        qr(e, c, r[s], s, n);
      } else {
        const c = s;
        e[c] = r[c];
      }
    return e;
  }
  return n(void 0, r), e;
}
function qr(e, t, r, n, o) {
  e[t] ?? (e[t] = {}), o(t, r, n);
}
function Ws(e = pr) {
  const {
    internal_mediaKeys: t
  } = e, r = {};
  for (let n = 0; n < t.length; n += 1)
    r[t[n]] = {};
  return r;
}
function Co(e, t) {
  const r = e.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n];
    xi(t[o]) && delete t[o];
  }
  return t;
}
function js(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e.keys.length; n += 1)
      if (e.keys[n] in t)
        return !0;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1)
      if (bi(e.keys, r[n]))
        return !0;
  }
  return !1;
}
function Ot(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ft(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function vi(e, t, r, n) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || r : typeof r == "string" ? o = kr(e, r, !0, n) || r : o = r, t && (o = t(o, r, e)), o;
}
function kr(e, t, r = !0, n = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && r) {
    const i = ko(e.vars, o, n);
    if (i != null)
      return i;
  }
  return ko(e, o, n);
}
function ko(e, t, r = void 0) {
  let n, o = e, i = 0;
  for (; i < t.length; ) {
    if (o == null)
      return o;
    n = o, o = o[t[i]], i += 1;
  }
  if (r && o === void 0) {
    const s = t[t.length - 1], c = `${r}${s === "default" ? "" : Ot(s)}`;
    return n == null ? void 0 : n[c];
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
    const c = s[t], l = s.theme, d = kr(l, n) || {};
    return Rt(s, c, (g) => {
      const b = vi(d, o, g, t);
      return r === !1 ? b : {
        [r]: b
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: it
  } : {}, i.filterProps = [t], i;
}
const Bs = {
  internal_cache: {}
}, fr = {
  m: "margin",
  p: "padding"
}, To = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Eo = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Ht = {};
for (const e in fr)
  Ht[e] = [fr[e]];
for (const e in fr)
  for (const t in To) {
    const r = fr[e], n = To[t], o = Array.isArray(n) ? n.map((i) => r + i) : [r + n];
    Ht[e + t] = o;
  }
for (const e in Eo)
  Ht[e] = Ht[Eo[e]];
const Tr = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), Er = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), Vs = /* @__PURE__ */ new Set([...Tr, ...Er]);
function Xt(e, t, r, n) {
  const o = kr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? o.startsWith("var(") && i === 0 ? 0 : o.startsWith("var(") && i === 1 ? o : `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const s = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(s) ? s > o.length - 1 && console.error([`MUI: The value provided (${s}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${s} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[s];
    return i >= 0 ? c : typeof c == "number" ? -c : typeof c == "string" && c.startsWith("var(") ? `calc(-1 * ${c})` : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function On(e) {
  return Xt(e, "spacing", 8, "spacing");
}
function Qt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const Io = [""];
function Si(e, t) {
  var i;
  const r = e.theme ?? Bs, n = ((i = r == null ? void 0 : r.internal_cache) == null ? void 0 : i.unarySpacing) ?? On(r), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const c = Ht[s] ?? (Io[0] = s, Io), l = e[s];
    Cr(o, e.theme, l, (d, f) => {
      const g = d ? o[d] : o;
      for (let b = 0; b < c.length; b += 1)
        g[c[b]] = Qt(n, f);
    });
  }
  return o;
}
function ge(e) {
  return Si(e, Tr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? Array.from(Tr).reduce((e, t) => (e[t] = it, e), {}) : {};
ge.filterProps = Tr;
function ye(e) {
  return Si(e, Er);
}
ye.propTypes = process.env.NODE_ENV !== "production" ? Array.from(Er).reduce((e, t) => (e[t] = it, e), {}) : {};
ye.filterProps = Er;
process.env.NODE_ENV !== "production" && Array.from(Vs).reduce((e, t) => (e[t] = it, e), {});
function wi(e = 8, t = On({
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
function Ir(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => {
    const o = {};
    for (const i in n)
      t[i] && Ct(o, t[i](n));
    return o;
  };
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ne(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function je(e, t) {
  return Se({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Hs = je("border", Ne), Us = je("borderTop", Ne), Gs = je("borderRight", Ne), Ys = je("borderBottom", Ne), qs = je("borderLeft", Ne), Ks = je("borderColor"), Xs = je("borderTopColor"), Qs = je("borderRightColor"), Js = je("borderBottomColor"), Zs = je("borderLeftColor"), ec = je("outline", Ne), tc = je("outlineColor"), Ar = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Xt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Qt(t, n)
    });
    return Rt(e, e.borderRadius, r);
  }
  return null;
};
Ar.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: it
} : {};
Ar.filterProps = ["borderRadius"];
Ir(Hs, Us, Gs, Ys, qs, Ks, Xs, Qs, Js, Zs, Ar, ec, tc);
const $r = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Xt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Qt(t, n)
    });
    return Rt(e, e.gap, r);
  }
  return null;
};
$r.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: it
} : {};
$r.filterProps = ["gap"];
const Or = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Xt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Qt(t, n)
    });
    return Rt(e, e.columnGap, r);
  }
  return null;
};
Or.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: it
} : {};
Or.filterProps = ["columnGap"];
const _r = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Xt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Qt(t, n)
    });
    return Rt(e, e.rowGap, r);
  }
  return null;
};
_r.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: it
} : {};
_r.filterProps = ["rowGap"];
const rc = Se({
  prop: "gridColumn"
}), nc = Se({
  prop: "gridRow"
}), oc = Se({
  prop: "gridAutoFlow"
}), ic = Se({
  prop: "gridAutoColumns"
}), ac = Se({
  prop: "gridAutoRows"
}), sc = Se({
  prop: "gridTemplateColumns"
}), cc = Se({
  prop: "gridTemplateRows"
}), lc = Se({
  prop: "gridTemplateAreas"
}), dc = Se({
  prop: "gridArea"
});
Ir($r, Or, _r, rc, nc, oc, ic, ac, sc, cc, lc, dc);
function kt(e, t) {
  return t === "grey" ? t : e;
}
const uc = Se({
  prop: "color",
  themeKey: "palette",
  transform: kt
}), pc = Se({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: kt
}), fc = Se({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: kt
});
Ir(uc, pc, fc);
function ze(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const hc = Se({
  prop: "width",
  transform: ze
}), _n = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, s, c, l;
      const n = ((s = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : s[r]) || wr[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ze(r)
      };
    };
    return Rt(e, e.maxWidth, t);
  }
  return null;
};
_n.filterProps = ["maxWidth"];
const mc = Se({
  prop: "minWidth",
  transform: ze
}), gc = Se({
  prop: "height",
  transform: ze
}), yc = Se({
  prop: "maxHeight",
  transform: ze
}), bc = Se({
  prop: "minHeight",
  transform: ze
});
Se({
  prop: "size",
  cssProperty: "width",
  transform: ze
});
Se({
  prop: "size",
  cssProperty: "height",
  transform: ze
});
const xc = Se({
  prop: "boxSizing"
});
Ir(hc, _n, mc, gc, yc, bc, xc);
const Rr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ne
  },
  borderTop: {
    themeKey: "borders",
    transform: Ne
  },
  borderRight: {
    themeKey: "borders",
    transform: Ne
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ne
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ne
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
    transform: Ne
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ar
  },
  // palette
  color: {
    themeKey: "palette",
    transform: kt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: kt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: kt
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
    style: $r
  },
  rowGap: {
    style: _r
  },
  columnGap: {
    style: Or
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
    style: _n
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
}, vc = {};
function Sc() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: r,
      theme: n = vc,
      nested: o
    } = t, i = n.unstable_sxConfig ?? Rr, s = {
      sx: null,
      theme: n,
      nested: !0
    };
    function c(l) {
      let d = l;
      if (typeof l == "function")
        d = l(n);
      else if (typeof l != "object")
        return l;
      if (!d)
        return null;
      const f = n.breakpoints ?? pr, g = Ws(f);
      for (const b in d) {
        const p = wc(d[b], n);
        if (p != null) {
          if (typeof p != "object") {
            Ao(g, b, p, n, i);
            continue;
          }
          if (i[b]) {
            Ao(g, b, p, n, i);
            continue;
          }
          js(f, p) ? Cr(g, t.theme, p, (x, y) => {
            g[x][b] = y;
          }) : (s.sx = p, g[b] = e(s));
        }
      }
      return !o && n.modularCssLayers ? {
        "@layer sx": wo(n, Co(f, g))
      } : wo(n, Co(f, g));
    }
    return Array.isArray(r) ? r.map(c) : c(r);
  }
  return e.filterProps = ["sx"], e;
}
const _t = Sc();
function Ao(e, t, r, n, o) {
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
    style: c
  } = i;
  if (c) {
    Ct(e, c({
      [t]: r,
      theme: n
    }));
    return;
  }
  const {
    cssProperty: l = t,
    transform: d
  } = i, f = kr(n, s);
  Cr(e, n, r, (g, b) => {
    const p = vi(f, d, b, t);
    l === !1 ? Ct(g ? e[g] : e, p) : g ? e[g][l] = p : e[l] = p;
  });
}
function wc(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Cc(e, t) {
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
function Rn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...s
  } = e, c = yi(r), l = wi(o);
  let d = Le({
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
      ...Os,
      ...i
    }
  }, s);
  return d = $s(d), d.applyStyles = Cc, d = t.reduce((f, g) => Le(f, g), d), d.unstable_sxConfig = {
    ...Rr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, d.unstable_sx = function(g) {
    return _t({
      sx: g,
      theme: this
    });
  }, d.internal_cache = {}, d;
}
function kc(e) {
  return Object.keys(e).length === 0;
}
function Mn(e = null) {
  const t = j.useContext(di);
  return !t || kc(t) ? e : t;
}
const Tc = Rn();
function Ci(e = Tc) {
  return Mn(e);
}
function Kr(e) {
  const t = nt(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function Pn({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Ci(r), o = t && n[t] || n;
  let i = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(i) ? i = i.map((s) => Kr(typeof s == "function" ? s(o) : s)) : i = Kr(i)), /* @__PURE__ */ a($n, {
    styles: i
  });
}
process.env.NODE_ENV !== "production" && (Pn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: E.object,
  /**
   * @ignore
   */
  styles: E.oneOfType([E.array, E.func, E.number, E.object, E.string, E.bool]),
  /**
   * @ignore
   */
  themeId: E.string
});
const $o = (e) => e, Ec = () => {
  let e = $o;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $o;
    }
  };
}, Ic = Ec();
function ki(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = ki(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Ti() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = ki(e)) && (n && (n += " "), n += t);
  return n;
}
const Ac = {
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
function zn(e, t, r = "Mui") {
  const n = Ac[t];
  return n ? `${r}-${n}` : `${Ic.generate(e)}-${t}`;
}
function $c(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = zn(e, o, r);
  }), n;
}
function Ei(e, t = "") {
  return e.displayName || e.name || t;
}
function Oo(e, t, r) {
  const n = Ei(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Oc(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ei(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ur.ForwardRef:
          return Oo(e, e.render, "ForwardRef");
        case ur.Memo:
          return Oo(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ii(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: nt(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = nt(o.style));
  }), n;
}
const _c = Rn();
function Xr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ut(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Rc(e) {
  return e ? (t, r) => r[e] : null;
}
function Mc(e, t, r) {
  e.theme = xi(e.theme) ? r : e.theme[t] || e.theme;
}
function or(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => or(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? ut(n.style, r) : n.style;
    else {
      const {
        variants: i,
        ...s
      } = n;
      o = r ? ut(nt(s), r) : s;
    }
    return Ai(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? ut(nt(n.style), r) : n.style : r ? ut(nt(n), r) : n;
}
function Ai(e, t, r = [], n = void 0) {
  var i;
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
        if (e[l] !== c.props[l] && ((i = e.ownerState) == null ? void 0 : i[l]) !== c.props[l])
          continue e;
    typeof c.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? ut(nt(c.style(o)), n) : c.style(o))) : r.push(n ? ut(nt(c.style), n) : c.style);
  }
  return r;
}
function Pc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = _c,
    rootShouldForwardProp: n = Xr,
    slotShouldForwardProp: o = Xr
  } = e;
  function i(c) {
    Mc(c, t, r);
  }
  return (c, l = {}) => {
    Cs(c, (A) => A.filter((Y) => Y !== _t));
    const {
      name: d,
      slot: f,
      skipVariantsResolver: g,
      skipSx: b,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Rc($i(f)),
      ...x
    } = l, y = d && d.startsWith("Mui") || f ? "components" : "custom", w = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      f && f !== "Root" && f !== "root" || !1
    ), C = b || !1;
    let _ = Xr;
    f === "Root" || f === "root" ? _ = n : f ? _ = o : Fc(c) && (_ = void 0);
    const $ = ws(c, {
      shouldForwardProp: _,
      label: Dc(d, f),
      ...x
    }), R = (A) => {
      if (A.__emotion_real === A)
        return A;
      if (typeof A == "function")
        return function(D) {
          return or(D, A, D.theme.modularCssLayers ? y : void 0);
        };
      if (Je(A)) {
        const Y = Ii(A);
        return function(F) {
          return Y.variants ? or(F, Y, F.theme.modularCssLayers ? y : void 0) : F.theme.modularCssLayers ? ut(Y.style, y) : Y.style;
        };
      }
      return A;
    }, k = (...A) => {
      const Y = [], D = A.map(R), F = [];
      if (Y.push(i), d && p && F.push(function(M) {
        var pe, ke;
        const W = (ke = (pe = M.theme.components) == null ? void 0 : pe[d]) == null ? void 0 : ke.styleOverrides;
        if (!W)
          return null;
        const U = {};
        for (const Ue in W)
          U[Ue] = or(M, W[Ue], M.theme.modularCssLayers ? "theme" : void 0);
        return p(M, U);
      }), d && !w && F.push(function(M) {
        var U, pe;
        const I = M.theme, W = (pe = (U = I == null ? void 0 : I.components) == null ? void 0 : U[d]) == null ? void 0 : pe.variants;
        return W ? Ai(M, W, [], M.theme.modularCssLayers ? "theme" : void 0) : null;
      }), C || F.push(_t), Array.isArray(D[0])) {
        const h = D.shift(), M = new Array(Y.length).fill(""), I = new Array(F.length).fill("");
        let W;
        W = [...M, ...h, ...I], W.raw = [...M, ...h.raw, ...I], Y.unshift(W);
      }
      const K = [...Y, ...D, ...F], L = $(...K);
      return c.muiName && (L.muiName = c.muiName), process.env.NODE_ENV !== "production" && (L.displayName = zc(d, f, c)), L;
    };
    return $.withConfig && (k.withConfig = $.withConfig), k;
  };
}
function zc(e, t, r) {
  return e ? `${e}${Ot(t || "")}` : `Styled(${Oc(r)})`;
}
function Dc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${$i(t || "Root")}`), r;
}
function Fc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function $i(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function un(e, t, r = !1) {
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
        const s = e[i], c = t[i];
        if (!c)
          n[i] = s || {};
        else if (!s)
          n[i] = c;
        else {
          n[i] = {
            ...c
          };
          for (const l in s)
            if (Object.prototype.hasOwnProperty.call(s, l)) {
              const d = l;
              n[i][d] = un(s[d], c[d], r);
            }
        }
      } else i === "className" && r && t.className !== void 0 ? n.className = Ti(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : i === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[i] === void 0 && (n[i] = e[i]);
    }
  return n;
}
const Oi = typeof window < "u" ? j.useLayoutEffect : j.useEffect;
function Nc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Dn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Nc(e, t, r);
}
function Lc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function ot(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return ot(Lc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ft(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ft(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const Wc = (e) => {
  const t = ot(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Lt = (e, t) => {
  try {
    return Wc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function Mr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function _i(e) {
  e = ot(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), s = (d, f = (d + r / 30) % 12) => o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
  let c = "rgb";
  const l = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), Mr({
    type: c,
    values: l
  });
}
function pn(e) {
  e = ot(e);
  let t = e.type === "hsl" || e.type === "hsla" ? ot(_i(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function _o(e, t) {
  const r = pn(e), n = pn(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Ri(e, t) {
  return e = ot(e), t = Dn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, Mr(e);
}
function ct(e, t, r) {
  try {
    return Ri(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Pr(e, t) {
  if (e = ot(e), t = Dn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return Mr(e);
}
function ae(e, t, r) {
  try {
    return Pr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function zr(e, t) {
  if (e = ot(e), t = Dn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return Mr(e);
}
function se(e, t, r) {
  try {
    return zr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function jc(e, t = 0.15) {
  return pn(e) > 0.5 ? Pr(e, t) : zr(e, t);
}
function er(e, t, r) {
  try {
    return jc(e, t);
  } catch {
    return e;
  }
}
const Bc = "exact-prop: ​";
function Mi(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [Bc]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const Fn = /* @__PURE__ */ j.createContext(null);
process.env.NODE_ENV !== "production" && (Fn.displayName = "ThemeContext");
function Nn() {
  const e = j.useContext(Fn);
  return process.env.NODE_ENV !== "production" && j.useDebugValue(e), e;
}
const Vc = typeof Symbol == "function" && Symbol.for, Hc = Vc ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Uc(e, t) {
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
  } = e, n = Nn();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = j.useMemo(() => {
    const i = n === null ? {
      ...r
    } : Uc(n, r);
    return i != null && (i[Hc] = n !== null), i;
  }, [r, n]);
  return /* @__PURE__ */ a(Fn.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (hr.propTypes = {
  /**
   * Your component tree.
   */
  children: E.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: E.oneOfType([E.object, E.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (hr.propTypes = Mi(hr.propTypes));
const Gc = /* @__PURE__ */ j.createContext();
function Pi({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ a(Gc.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (Pi.propTypes = {
  children: E.node,
  value: E.bool
});
const zi = /* @__PURE__ */ j.createContext(void 0);
function Di({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ a(zi.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (Di.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: E.node,
  /**
   * @ignore
   */
  value: E.object
});
function Yc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? un(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? un(o, n, t.components.mergeClassNameAndStyle) : n;
}
function qc({
  props: e,
  name: t
}) {
  const r = j.useContext(zi);
  return Yc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let Ro = 0;
function Kc(e) {
  const [t, r] = j.useState(e), n = e || t;
  return j.useEffect(() => {
    t == null && (Ro += 1, r(`mui-${Ro}`));
  }, [t]), n;
}
const Xc = {
  ...j
}, Mo = Xc.useId;
function Qc(e) {
  return Mo !== void 0 ? Mo() : Kc(e);
}
function Jc(e) {
  const t = Mn(), r = Qc() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Oi(() => {
    var c, l;
    const i = document.querySelector("head");
    if (!i)
      return;
    const s = i.firstChild;
    if (o) {
      if (s && ((c = s.hasAttribute) != null && c.call(s, "data-mui-layer-order")) && s.getAttribute("data-mui-layer-order") === r)
        return;
      const d = document.createElement("style");
      d.setAttribute("data-mui-layer-order", r), d.textContent = o, i.prepend(d);
    } else
      (l = i.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || l.remove();
  }, [o, r]), o ? /* @__PURE__ */ a(Pn, {
    styles: o
  }) : null;
}
const Po = {};
function zo(e, t, r, n = !1) {
  return j.useMemo(() => {
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
function Ut(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = Mn(Po), i = Nn() || Po;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = zo(n, o, r), c = zo(n, i, r, !0), l = (n ? s[n] : s).direction === "rtl", d = Jc(s);
  return /* @__PURE__ */ a(hr, {
    theme: c,
    children: /* @__PURE__ */ a(di.Provider, {
      value: s,
      children: /* @__PURE__ */ a(Pi, {
        value: l,
        children: /* @__PURE__ */ m(Di, {
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
  children: E.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: E.oneOfType([E.func, E.object]).isRequired,
  /**
   * The design system's unique id for getting the corresponded theme when there are multiple design systems.
   */
  themeId: E.string
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Ut.propTypes = Mi(Ut.propTypes));
const Do = {
  theme: void 0
};
function Zc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Do.theme = o.theme, i = Ii(e(Do)), t = i, r = o.theme), i;
  };
}
const Ln = "mode", Wn = "color-scheme", el = "data-color-scheme";
function tl(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = Ln,
    colorSchemeStorageKey: i = Wn,
    attribute: s = el,
    colorSchemeNode: c = "document.documentElement",
    nonce: l
  } = e || {};
  let d = "", f = s;
  if (s === "class" && (f = ".%s"), s === "data" && (f = "[data-%s]"), f.startsWith(".")) {
    const b = f.substring(1);
    d += `${c}.classList.remove('${b}'.replace('%s', light), '${b}'.replace('%s', dark));
      ${c}.classList.add('${b}'.replace('%s', colorScheme));`;
  }
  const g = f.match(/\[([^[\]]+)\]/);
  if (g) {
    const [b, p] = g[1].split("=");
    p || (d += `${c}.removeAttribute('${b}'.replace('%s', light));
      ${c}.removeAttribute('${b}'.replace('%s', dark));`), d += `
      ${c}.setAttribute('${b}'.replace('%s', colorScheme), ${p ? `${p}.replace('%s', colorScheme)` : '""'});`;
  } else f !== ".%s" && (d += `${c}.setAttribute('${f}', colorScheme);`);
  return /* @__PURE__ */ a("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? l : "",
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
function rl() {
}
const nl = ({
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
      return rl;
    const n = (o) => {
      const i = o.newValue;
      o.key === e && r(i);
    };
    return t.addEventListener("storage", n), () => {
      t.removeEventListener("storage", n);
    };
  }
});
function Qr() {
}
function Fo(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Fi(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function ol(e) {
  return Fi(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function il(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: n,
    supportedColorSchemes: o = [],
    modeStorageKey: i = Ln,
    colorSchemeStorageKey: s = Wn,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: l = nl,
    noSsr: d = !1
  } = e, f = o.join(","), g = o.length > 1, b = j.useMemo(() => l == null ? void 0 : l({
    key: i,
    storageWindow: c
  }), [l, i, c]), p = j.useMemo(() => l == null ? void 0 : l({
    key: `${s}-light`,
    storageWindow: c
  }), [l, s, c]), x = j.useMemo(() => l == null ? void 0 : l({
    key: `${s}-dark`,
    storageWindow: c
  }), [l, s, c]), [y, w] = j.useState(() => {
    const D = (b == null ? void 0 : b.get(t)) || t, F = (p == null ? void 0 : p.get(r)) || r, K = (x == null ? void 0 : x.get(n)) || n;
    return {
      mode: D,
      systemMode: Fo(D),
      lightColorScheme: F,
      darkColorScheme: K
    };
  }), [C, _] = j.useState(d || !g);
  j.useEffect(() => {
    _(!0);
  }, []);
  const $ = ol(y), R = j.useCallback((D) => {
    w((F) => {
      if (D === F.mode)
        return F;
      const K = D ?? t;
      return b == null || b.set(K), {
        ...F,
        mode: K,
        systemMode: Fo(K)
      };
    });
  }, [b, t]), k = j.useCallback((D) => {
    D ? typeof D == "string" ? D && !f.includes(D) ? console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`) : w((F) => {
      const K = {
        ...F
      };
      return Fi(F, (L) => {
        L === "light" && (p == null || p.set(D), K.lightColorScheme = D), L === "dark" && (x == null || x.set(D), K.darkColorScheme = D);
      }), K;
    }) : w((F) => {
      const K = {
        ...F
      }, L = D.light === null ? r : D.light, h = D.dark === null ? n : D.dark;
      return L && (f.includes(L) ? (K.lightColorScheme = L, p == null || p.set(L)) : console.error(`\`${L}\` does not exist in \`theme.colorSchemes\`.`)), h && (f.includes(h) ? (K.darkColorScheme = h, x == null || x.set(h)) : console.error(`\`${h}\` does not exist in \`theme.colorSchemes\`.`)), K;
    }) : w((F) => (p == null || p.set(r), x == null || x.set(n), {
      ...F,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [f, p, x, r, n]), A = j.useCallback((D) => {
    y.mode === "system" && w((F) => {
      const K = D != null && D.matches ? "dark" : "light";
      return F.systemMode === K ? F : {
        ...F,
        systemMode: K
      };
    });
  }, [y.mode]), Y = j.useRef(A);
  return Y.current = A, j.useEffect(() => {
    if (typeof window.matchMedia != "function" || !g)
      return;
    const D = (...K) => Y.current(...K), F = window.matchMedia("(prefers-color-scheme: dark)");
    return F.addListener(D), D(F), () => {
      F.removeListener(D);
    };
  }, [g]), j.useEffect(() => {
    if (g) {
      const D = (b == null ? void 0 : b.subscribe((L) => {
        (!L || ["light", "dark", "system"].includes(L)) && R(L || t);
      })) || Qr, F = (p == null ? void 0 : p.subscribe((L) => {
        (!L || f.match(L)) && k({
          light: L
        });
      })) || Qr, K = (x == null ? void 0 : x.subscribe((L) => {
        (!L || f.match(L)) && k({
          dark: L
        });
      })) || Qr;
      return () => {
        D(), F(), K();
      };
    }
  }, [k, R, f, t, c, g, b, p, x]), {
    ...y,
    mode: C ? y.mode : void 0,
    systemMode: C ? y.systemMode : void 0,
    colorScheme: C ? $ : void 0,
    setMode: R,
    setColorScheme: k
  };
}
const al = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function sl(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: n = Ln,
    colorSchemeStorageKey: o = Wn,
    disableTransitionOnChange: i = !1,
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
  }, d = /* @__PURE__ */ j.createContext(void 0);
  process.env.NODE_ENV !== "production" && (d.displayName = "ColorSchemeContext");
  const f = () => j.useContext(d) || l, g = {}, b = {};
  function p(C) {
    var Qn, Jn, Zn, eo;
    const {
      children: _,
      theme: $,
      modeStorageKey: R = n,
      colorSchemeStorageKey: k = o,
      disableTransitionOnChange: A = i,
      storageManager: Y,
      storageWindow: D = typeof window > "u" ? void 0 : window,
      documentNode: F = typeof document > "u" ? void 0 : document,
      colorSchemeNode: K = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: L = !1,
      disableStyleSheetGeneration: h = !1,
      defaultMode: M = "system",
      forceThemeRerender: I = !1,
      noSsr: W
    } = C, U = j.useRef(!1), pe = Nn(), ke = j.useContext(d), Ue = !!ke && !L, T = j.useMemo(() => $ || (typeof r == "function" ? r() : r), [$]), P = T[t], N = P || T, {
      colorSchemes: B = g,
      components: V = b,
      cssVarPrefix: X
    } = N, q = Object.keys(B).filter((Ie) => !!B[Ie]).join(","), H = j.useMemo(() => q.split(","), [q]), Q = typeof s == "string" ? s : s.light, ee = typeof s == "string" ? s : s.dark, Z = B[Q] && B[ee] ? M : ((Jn = (Qn = B[N.defaultColorScheme]) == null ? void 0 : Qn.palette) == null ? void 0 : Jn.mode) || ((Zn = N.palette) == null ? void 0 : Zn.mode), {
      mode: Ee,
      setMode: O,
      systemMode: Pe,
      lightColorScheme: at,
      darkColorScheme: Mt,
      colorScheme: sa,
      setColorScheme: qn
    } = il({
      supportedColorSchemes: H,
      defaultLightColorScheme: Q,
      defaultDarkColorScheme: ee,
      modeStorageKey: R,
      colorSchemeStorageKey: k,
      defaultMode: Z,
      storageManager: Y,
      storageWindow: D,
      noSsr: W
    });
    let Lr = Ee, Be = sa;
    Ue && (Lr = ke.mode, Be = ke.colorScheme), process.env.NODE_ENV !== "production" && I && !N.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Jt = Be || N.defaultColorScheme;
    N.vars && !I && (Jt = N.defaultColorScheme);
    const ht = j.useMemo(() => {
      var st;
      const Ie = ((st = N.generateThemeVars) == null ? void 0 : st.call(N)) || N.vars, xe = {
        ...N,
        components: V,
        colorSchemes: B,
        cssVarPrefix: X,
        vars: Ie
      };
      if (typeof xe.generateSpacing == "function" && (xe.spacing = xe.generateSpacing()), Jt) {
        const Ge = B[Jt];
        Ge && typeof Ge == "object" && Object.keys(Ge).forEach((Ve) => {
          Ge[Ve] && typeof Ge[Ve] == "object" ? xe[Ve] = {
            ...xe[Ve],
            ...Ge[Ve]
          } : xe[Ve] = Ge[Ve];
        });
      }
      return c ? c(xe) : xe;
    }, [N, Jt, V, B, X]), Pt = N.colorSchemeSelector;
    Oi(() => {
      if (Be && K && Pt && Pt !== "media") {
        const Ie = Pt;
        let xe = Pt;
        if (Ie === "class" && (xe = ".%s"), Ie === "data" && (xe = "[data-%s]"), Ie != null && Ie.startsWith("data-") && !Ie.includes("%s") && (xe = `[${Ie}="%s"]`), xe.startsWith("."))
          K.classList.remove(...H.map((st) => xe.substring(1).replace("%s", st))), K.classList.add(xe.substring(1).replace("%s", Be));
        else {
          const st = xe.replace("%s", Be).match(/\[([^\]]+)\]/);
          if (st) {
            const [Ge, Ve] = st[1].split("=");
            Ve || H.forEach((la) => {
              K.removeAttribute(Ge.replace(Be, la));
            }), K.setAttribute(Ge, Ve ? Ve.replace(/"|'/g, "") : "");
          } else
            K.setAttribute(xe, Be);
        }
      }
    }, [Be, Pt, K, H]), j.useEffect(() => {
      let Ie;
      if (A && U.current && F) {
        const xe = F.createElement("style");
        xe.appendChild(F.createTextNode(al)), F.head.appendChild(xe), window.getComputedStyle(F.body), Ie = setTimeout(() => {
          F.head.removeChild(xe);
        }, 1);
      }
      return () => {
        clearTimeout(Ie);
      };
    }, [Be, A, F]), j.useEffect(() => (U.current = !0, () => {
      U.current = !1;
    }), []);
    const ca = j.useMemo(() => ({
      allColorSchemes: H,
      colorScheme: Be,
      darkColorScheme: Mt,
      lightColorScheme: at,
      mode: Lr,
      setColorScheme: qn,
      setMode: process.env.NODE_ENV === "production" ? O : (Ie) => {
        ht.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), O(Ie);
      },
      systemMode: Pe
    }), [H, Be, Mt, at, Lr, qn, O, Pe, ht.colorSchemeSelector]);
    let Kn = !0;
    (h || N.cssVariables === !1 || Ue && (pe == null ? void 0 : pe.cssVarPrefix) === X) && (Kn = !1);
    const Xn = /* @__PURE__ */ m(j.Fragment, {
      children: [/* @__PURE__ */ a(Ut, {
        themeId: P ? t : void 0,
        theme: ht,
        children: _
      }), Kn && /* @__PURE__ */ a($n, {
        styles: ((eo = ht.generateStyleSheets) == null ? void 0 : eo.call(ht)) || []
      })]
    });
    return Ue ? Xn : /* @__PURE__ */ a(d.Provider, {
      value: ca,
      children: Xn
    });
  }
  process.env.NODE_ENV !== "production" && (p.propTypes = {
    /**
     * The component tree.
     */
    children: E.node,
    /**
     * The node used to attach the color-scheme attribute
     */
    colorSchemeNode: E.any,
    /**
     * localStorage key used to store `colorScheme`
     */
    colorSchemeStorageKey: E.string,
    /**
     * The default mode when the storage is empty,
     * require the theme to have `colorSchemes` with light and dark.
     */
    defaultMode: E.string,
    /**
     * If `true`, the provider creates its own context and generate stylesheet as if it is a root `CssVarsProvider`.
     */
    disableNestedContext: E.bool,
    /**
     * If `true`, the style sheet won't be generated.
     *
     * This is useful for controlling nested CssVarsProvider behavior.
     */
    disableStyleSheetGeneration: E.bool,
    /**
     * Disable CSS transitions when switching between modes or color schemes.
     */
    disableTransitionOnChange: E.bool,
    /**
     * The document to attach the attribute to.
     */
    documentNode: E.any,
    /**
     * If `true`, theme values are recalculated when the mode changes.
     */
    forceThemeRerender: E.bool,
    /**
     * The key in the local storage used to store current color scheme.
     */
    modeStorageKey: E.string,
    /**
     * If `true`, the mode will be the same value as the storage without an extra rerendering after the hydration.
     * You should use this option in conjunction with `InitColorSchemeScript` component.
     */
    noSsr: E.bool,
    /**
     * The storage manager to be used for storing the mode and color scheme
     * @default using `window.localStorage`
     */
    storageManager: E.func,
    /**
     * The window that attaches the 'storage' event listener.
     * @default window
     */
    storageWindow: E.any,
    /**
     * The calculated theme object that will be passed through context.
     */
    theme: E.object
  });
  const x = typeof s == "string" ? s : s.light, y = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: p,
    useColorScheme: f,
    getInitColorSchemeScript: (C) => tl({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: y,
      modeStorageKey: n,
      ...C
    })
  };
}
function cl(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const No = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, ll = (e, t, r) => {
  function n(o, i = [], s = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...s, c] : s) : t([...i, c], l, s));
    });
  }
  n(e);
}, dl = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Jr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, s = {};
  return ll(
    e,
    (c, l, d) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const f = `--${r ? `${r}-` : ""}${c.join("-")}`, g = dl(c, l);
        Object.assign(o, {
          [f]: g
        }), No(i, c, `var(${f})`, d), No(s, c, `var(${f}, ${g})`, d);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: s
  };
}
function ul(e, t = {}) {
  const {
    getSelector: r = C,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: i
  } = t, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: l = "light",
    ...d
  } = e, {
    vars: f,
    css: g,
    varsWithDefaults: b
  } = Jr(d, t);
  let p = b;
  const x = {}, {
    [l]: y,
    ...w
  } = s;
  if (Object.entries(w || {}).forEach(([R, k]) => {
    const {
      vars: A,
      css: Y,
      varsWithDefaults: D
    } = Jr(k, t);
    p = Le(p, D), x[R] = {
      css: Y,
      vars: A
    };
  }), y) {
    const {
      css: R,
      vars: k,
      varsWithDefaults: A
    } = Jr(y, t);
    p = Le(p, A), x[l] = {
      css: R,
      vars: k
    };
  }
  function C(R, k) {
    var Y, D;
    let A = o;
    if (o === "class" && (A = ".%s"), o === "data" && (A = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (A = `[${o}="%s"]`), R) {
      if (A === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((D = (Y = s[R]) == null ? void 0 : Y.palette) == null ? void 0 : D.mode) || R})`]: {
            ":root": k
          }
        };
      if (A)
        return e.defaultColorScheme === R ? `:root, ${A.replace("%s", String(R))}` : A.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: p,
    generateThemeVars: () => {
      let R = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: k
      }]) => {
        R = Le(R, k);
      }), R;
    },
    generateStyleSheets: () => {
      var F, K;
      const R = [], k = e.defaultColorScheme || "light";
      function A(L, h) {
        Object.keys(h).length && R.push(typeof L == "string" ? {
          [L]: {
            ...h
          }
        } : L);
      }
      A(r(void 0, {
        ...g
      }), g);
      const {
        [k]: Y,
        ...D
      } = x;
      if (Y) {
        const {
          css: L
        } = Y, h = (K = (F = s[k]) == null ? void 0 : F.palette) == null ? void 0 : K.mode, M = !n && h ? {
          colorScheme: h,
          ...L
        } : {
          ...L
        };
        A(r(k, {
          ...M
        }), M);
      }
      return Object.entries(D).forEach(([L, {
        css: h
      }]) => {
        var W, U;
        const M = (U = (W = s[L]) == null ? void 0 : W.palette) == null ? void 0 : U.mode, I = !n && M ? {
          colorScheme: M,
          ...h
        } : {
          ...h
        };
        A(r(L, {
          ...I
        }), I);
      }), i && R.push({
        ":root": {
          // use double underscore to indicate that these are private variables
          "--__l-threshold": "0.7",
          "--__l": "clamp(0, (l / var(--__l-threshold) - 1) * -infinity, 1)",
          "--__a": "clamp(0.87, (l / var(--__l-threshold) - 1) * -infinity, 1)"
          // 0.87 is the default alpha value for black text.
        }
      }), R;
    }
  };
}
function pl(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function fl(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let s = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const d = i[l];
      d && (s += (c === !0 ? "" : " ") + t(d), c = !1, r && r[d] && (s += " " + r[d]));
    }
    n[o] = s;
  }
  return n;
}
const Gt = {
  black: "#000",
  white: "#fff"
}, hl = {
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
}, mt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, gt = {
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
}, yt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, bt = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, xt = {
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
const Li = Ni();
function Wi() {
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
const fn = Wi();
function Lo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = zr(e.main, o) : t === "dark" && (e.dark = Pr(e.main, i)));
}
function Wo(e, t, r, n, o) {
  const i = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(i * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function ml(e = "light") {
  return e === "dark" ? {
    main: yt[200],
    light: yt[50],
    dark: yt[400]
  } : {
    main: yt[700],
    light: yt[400],
    dark: yt[800]
  };
}
function gl(e = "light") {
  return e === "dark" ? {
    main: mt[200],
    light: mt[50],
    dark: mt[400]
  } : {
    main: mt[500],
    light: mt[300],
    dark: mt[700]
  };
}
function yl(e = "light") {
  return e === "dark" ? {
    main: gt[500],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[700],
    light: gt[400],
    dark: gt[800]
  };
}
function bl(e = "light") {
  return e === "dark" ? {
    main: bt[400],
    light: bt[300],
    dark: bt[700]
  } : {
    main: bt[700],
    light: bt[500],
    dark: bt[900]
  };
}
function xl(e = "light") {
  return e === "dark" ? {
    main: xt[400],
    light: xt[300],
    dark: xt[700]
  } : {
    main: xt[800],
    light: xt[500],
    dark: xt[900]
  };
}
function vl(e = "light") {
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
function Sl(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function jn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...i
  } = e, s = e.primary || ml(t), c = e.secondary || gl(t), l = e.error || yl(t), d = e.info || bl(t), f = e.success || xl(t), g = e.warning || vl(t);
  function b(w) {
    if (o)
      return Sl(w);
    const C = _o(w, fn.text.primary) >= r ? fn.text.primary : Li.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const _ = _o(w, C);
      _ < 3 && console.error([`MUI: The contrast ratio of ${_}:1 for ${C} on ${w}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const p = ({
    color: w,
    name: C,
    mainShade: _ = 500,
    lightShade: $ = 300,
    darkShade: R = 700
  }) => {
    if (w = {
      ...w
    }, !w.main && w[_] && (w.main = w[_]), !w.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${_}\` property.` : ft(11, C ? ` (${C})` : "", _));
    if (typeof w.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(w.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : ft(12, C ? ` (${C})` : "", JSON.stringify(w.main)));
    return o ? (Wo(o, w, "light", $, n), Wo(o, w, "dark", R, n)) : (Lo(w, "light", $, n), Lo(w, "dark", R, n)), w.contrastText || (w.contrastText = b(w.main)), w;
  };
  let x;
  return t === "light" ? x = Ni() : t === "dark" && (x = Wi()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Le({
    // A collection of common colors.
    common: {
      ...Gt
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
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: hl,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: b,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, i);
}
function wl(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Cl(e, t) {
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
function kl(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jo = {
  textTransform: "uppercase"
}, Bo = '"Roboto", "Helvetica", "Arial", sans-serif';
function ji(e, t) {
  const {
    fontFamily: r = Bo,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: f,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = n / 14, p = f || ((w) => `${w / l * b}rem`), x = (w, C, _, $, R) => ({
    fontFamily: r,
    fontWeight: w,
    fontSize: p(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Bo ? {
      letterSpacing: `${kl($ / C)}em`
    } : {},
    ...R,
    ...d
  }), y = {
    h1: x(o, 96, 1.167, -1.5),
    h2: x(o, 60, 1.2, -0.5),
    h3: x(i, 48, 1.167, 0),
    h4: x(i, 34, 1.235, 0.25),
    h5: x(i, 24, 1.334, 0),
    h6: x(s, 20, 1.6, 0.15),
    subtitle1: x(i, 16, 1.75, 0.15),
    subtitle2: x(s, 14, 1.57, 0.1),
    body1: x(i, 16, 1.5, 0.15),
    body2: x(i, 14, 1.43, 0.15),
    button: x(s, 14, 1.75, 0.4, jo),
    caption: x(i, 12, 1.66, 0.4),
    overline: x(i, 12, 2.66, 1, jo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Le({
    htmlFontSize: l,
    pxToRem: p,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...y
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const Tl = 0.2, El = 0.14, Il = 0.12;
function fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Tl})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${El})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Il})`].join(",");
}
const Al = ["none", fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], $l = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Ol = {
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
function Vo(e) {
  return `${Math.round(e)}ms`;
}
function _l(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Rl(e) {
  const t = {
    ...$l,
    ...e.easing
  }, r = {
    ...Ol,
    ...e.duration
  };
  return {
    getAutoHeightDuration: _l,
    create: (o = ["all"], i = {}) => {
      const {
        duration: s = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const f = (b) => typeof b == "string", g = (b) => !Number.isNaN(parseFloat(b));
        !f(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(s) && !f(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), f(c) || console.error('MUI: Argument "easing" must be a string.'), !g(l) && !f(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((f) => `${f} ${typeof s == "string" ? s : Vo(s)} ${c} ${typeof l == "string" ? l : Vo(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Ml = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Pl(e) {
  return Je(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Bi(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [s, c] = o[i];
      !Pl(c) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete n[s] : Je(c) && (n[s] = {
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
function Ho(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const zl = (e) => {
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
function Dl(e) {
  Object.assign(e, {
    alpha(t, r) {
      const n = this || e;
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Ri(t, zl(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${Ho(r)})` : zr(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${Ho(r)})` : Pr(t, r);
    }
  });
}
function hn(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: s = {},
    typography: c = {},
    shape: l,
    colorSpace: d,
    ...f
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ft(22));
  const g = jn({
    ...i,
    colorSpace: d
  }), b = Rn(e);
  let p = Le(b, {
    mixins: Cl(b.breakpoints, n),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Al.slice(),
    typography: ji(g, c),
    transitions: Rl(s),
    zIndex: {
      ...Ml
    }
  });
  if (p = Le(p, f), p = t.reduce((x, y) => Le(x, y), p), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (w, C) => {
      let _;
      for (_ in w) {
        const $ = w[_];
        if (x.includes(_) && Object.keys($).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = zn("", _);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${_}\` internal state.`, "You can not override it like this: ", JSON.stringify(w, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: $
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          w[_] = {};
        }
      }
    };
    Object.keys(p.components).forEach((w) => {
      const C = p.components[w].styleOverrides;
      C && w.startsWith("Mui") && y(C, w);
    });
  }
  return p.unstable_sxConfig = {
    ...Rr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, p.unstable_sx = function(y) {
    return _t({
      sx: y,
      theme: this
    });
  }, p.toRuntimeSource = Bi, Dl(p), p;
}
function Fl(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Nl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = Fl(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Vi(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Hi(e) {
  return e === "dark" ? Nl : [];
}
function Ll(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...i
  } = e, s = jn({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...Vi(s.mode),
      ...r
    },
    overlays: n || Hi(s.mode),
    ...i
  };
}
function Wl(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const jl = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Bl = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return jl(e.cssVarPrefix).forEach((c) => {
        s[c] = r[c], delete r[c];
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
function Vl(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function S(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Wt(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : _i(e);
}
function Qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Lt(Wt(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Hl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const qe = (e) => {
  try {
    return e();
  } catch {
  }
}, Ul = (e = "mui") => cl(e);
function Zr(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const i = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = Ll({
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
    ...c
  } = hn({
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
      ...Vi(i),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Hi(i)
  }, c;
}
function Gl(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = Wl,
    colorSchemeSelector: l = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, g = Object.keys(r)[0], b = n || (r.light && g !== "light" ? "light" : g), p = Ul(i), {
    [b]: x,
    light: y,
    dark: w,
    ...C
  } = r, _ = {
    ...C
  };
  let $ = x;
  if ((b === "dark" && !("dark" in r) || b === "light" && !("light" in r)) && ($ = !0), !$)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${b}\` option is either missing or invalid.` : ft(21, b));
  let R;
  s && (R = "oklch");
  const k = Zr(R, _, $, f, b);
  y && !_.light && Zr(R, _, y, void 0, "light"), w && !_.dark && Zr(R, _, w, void 0, "dark");
  let A = {
    defaultColorScheme: b,
    ...k,
    cssVarPrefix: i,
    colorSchemeSelector: l,
    rootSelector: d,
    getCssVar: p,
    colorSchemes: _,
    font: {
      ...wl(k.typography),
      ...k.font
    },
    spacing: Hl(f.spacing)
  };
  Object.keys(A.colorSchemes).forEach((L) => {
    const h = A.colorSchemes[L].palette, M = (W) => {
      const U = W.split("-"), pe = U[1], ke = U[2];
      return p(W, h[pe][ke]);
    };
    h.mode === "light" && (S(h.common, "background", "#fff"), S(h.common, "onBackground", "#000")), h.mode === "dark" && (S(h.common, "background", "#000"), S(h.common, "onBackground", "#fff"));
    function I(W, U, pe) {
      if (R) {
        let ke;
        return W === ct && (ke = `transparent ${((1 - pe) * 100).toFixed(0)}%`), W === ae && (ke = `#000 ${(pe * 100).toFixed(0)}%`), W === se && (ke = `#fff ${(pe * 100).toFixed(0)}%`), `color-mix(in ${R}, ${U}, ${ke})`;
      }
      return W(U, pe);
    }
    if (Vl(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      S(h.Alert, "errorColor", I(ae, s ? p("palette-error-light") : h.error.light, 0.6)), S(h.Alert, "infoColor", I(ae, s ? p("palette-info-light") : h.info.light, 0.6)), S(h.Alert, "successColor", I(ae, s ? p("palette-success-light") : h.success.light, 0.6)), S(h.Alert, "warningColor", I(ae, s ? p("palette-warning-light") : h.warning.light, 0.6)), S(h.Alert, "errorFilledBg", M("palette-error-main")), S(h.Alert, "infoFilledBg", M("palette-info-main")), S(h.Alert, "successFilledBg", M("palette-success-main")), S(h.Alert, "warningFilledBg", M("palette-warning-main")), S(h.Alert, "errorFilledColor", qe(() => h.getContrastText(h.error.main))), S(h.Alert, "infoFilledColor", qe(() => h.getContrastText(h.info.main))), S(h.Alert, "successFilledColor", qe(() => h.getContrastText(h.success.main))), S(h.Alert, "warningFilledColor", qe(() => h.getContrastText(h.warning.main))), S(h.Alert, "errorStandardBg", I(se, s ? p("palette-error-light") : h.error.light, 0.9)), S(h.Alert, "infoStandardBg", I(se, s ? p("palette-info-light") : h.info.light, 0.9)), S(h.Alert, "successStandardBg", I(se, s ? p("palette-success-light") : h.success.light, 0.9)), S(h.Alert, "warningStandardBg", I(se, s ? p("palette-warning-light") : h.warning.light, 0.9)), S(h.Alert, "errorIconColor", M("palette-error-main")), S(h.Alert, "infoIconColor", M("palette-info-main")), S(h.Alert, "successIconColor", M("palette-success-main")), S(h.Alert, "warningIconColor", M("palette-warning-main")), S(h.AppBar, "defaultBg", M("palette-grey-100")), S(h.Avatar, "defaultBg", M("palette-grey-400")), S(h.Button, "inheritContainedBg", M("palette-grey-300")), S(h.Button, "inheritContainedHoverBg", M("palette-grey-A100")), S(h.Chip, "defaultBorder", M("palette-grey-400")), S(h.Chip, "defaultAvatarColor", M("palette-grey-700")), S(h.Chip, "defaultIconColor", M("palette-grey-700")), S(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), S(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), S(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), S(h.LinearProgress, "primaryBg", I(se, s ? p("palette-primary-main") : h.primary.main, 0.62)), S(h.LinearProgress, "secondaryBg", I(se, s ? p("palette-secondary-main") : h.secondary.main, 0.62)), S(h.LinearProgress, "errorBg", I(se, s ? p("palette-error-main") : h.error.main, 0.62)), S(h.LinearProgress, "infoBg", I(se, s ? p("palette-info-main") : h.info.main, 0.62)), S(h.LinearProgress, "successBg", I(se, s ? p("palette-success-main") : h.success.main, 0.62)), S(h.LinearProgress, "warningBg", I(se, s ? p("palette-warning-light") : h.warning.main, 0.62)), S(h.Skeleton, "bg", R ? I(ct, s ? p("palette-text-primary") : h.text.primary, 0.11) : `rgba(${M("palette-text-primaryChannel")} / 0.11)`), S(h.Slider, "primaryTrack", I(se, s ? p("palette-primary-main") : h.primary.main, 0.62)), S(h.Slider, "secondaryTrack", I(se, s ? p("palette-secondary-main") : h.secondary.main, 0.62)), S(h.Slider, "errorTrack", I(se, s ? p("palette-error-main") : h.error.main, 0.62)), S(h.Slider, "infoTrack", I(se, s ? p("palette-info-main") : h.info.main, 0.62)), S(h.Slider, "successTrack", I(se, s ? p("palette-success-main") : h.success.main, 0.62)), S(h.Slider, "warningTrack", I(se, s ? p("palette-warning-main") : h.warning.main, 0.62));
      const W = R ? I(ae, s ? p("palette-background-default") : h.background.default, 0.6825) : er(h.background.default, 0.8);
      S(h.SnackbarContent, "bg", W), S(h.SnackbarContent, "color", qe(() => R ? fn.text.primary : h.getContrastText(W))), S(h.SpeedDialAction, "fabHoverBg", er(h.background.paper, 0.15)), S(h.StepConnector, "border", M("palette-grey-400")), S(h.StepContent, "border", M("palette-grey-400")), S(h.Switch, "defaultColor", M("palette-common-white")), S(h.Switch, "defaultDisabledColor", M("palette-grey-100")), S(h.Switch, "primaryDisabledColor", I(se, s ? p("palette-primary-main") : h.primary.main, 0.62)), S(h.Switch, "secondaryDisabledColor", I(se, s ? p("palette-secondary-main") : h.secondary.main, 0.62)), S(h.Switch, "errorDisabledColor", I(se, s ? p("palette-error-main") : h.error.main, 0.62)), S(h.Switch, "infoDisabledColor", I(se, s ? p("palette-info-main") : h.info.main, 0.62)), S(h.Switch, "successDisabledColor", I(se, s ? p("palette-success-main") : h.success.main, 0.62)), S(h.Switch, "warningDisabledColor", I(se, s ? p("palette-warning-main") : h.warning.main, 0.62)), S(h.TableCell, "border", I(se, ct(s ? p("palette-divider") : h.divider, 1), 0.88)), S(h.Tooltip, "bg", I(ct, s ? p("palette-grey-700") : h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      S(h.Alert, "errorColor", I(se, s ? p("palette-error-light") : h.error.light, 0.6)), S(h.Alert, "infoColor", I(se, s ? p("palette-info-light") : h.info.light, 0.6)), S(h.Alert, "successColor", I(se, s ? p("palette-success-light") : h.success.light, 0.6)), S(h.Alert, "warningColor", I(se, s ? p("palette-warning-light") : h.warning.light, 0.6)), S(h.Alert, "errorFilledBg", M("palette-error-dark")), S(h.Alert, "infoFilledBg", M("palette-info-dark")), S(h.Alert, "successFilledBg", M("palette-success-dark")), S(h.Alert, "warningFilledBg", M("palette-warning-dark")), S(h.Alert, "errorFilledColor", qe(() => h.getContrastText(h.error.dark))), S(h.Alert, "infoFilledColor", qe(() => h.getContrastText(h.info.dark))), S(h.Alert, "successFilledColor", qe(() => h.getContrastText(h.success.dark))), S(h.Alert, "warningFilledColor", qe(() => h.getContrastText(h.warning.dark))), S(h.Alert, "errorStandardBg", I(ae, s ? p("palette-error-light") : h.error.light, 0.9)), S(h.Alert, "infoStandardBg", I(ae, s ? p("palette-info-light") : h.info.light, 0.9)), S(h.Alert, "successStandardBg", I(ae, s ? p("palette-success-light") : h.success.light, 0.9)), S(h.Alert, "warningStandardBg", I(ae, s ? p("palette-warning-light") : h.warning.light, 0.9)), S(h.Alert, "errorIconColor", M("palette-error-main")), S(h.Alert, "infoIconColor", M("palette-info-main")), S(h.Alert, "successIconColor", M("palette-success-main")), S(h.Alert, "warningIconColor", M("palette-warning-main")), S(h.AppBar, "defaultBg", M("palette-grey-900")), S(h.AppBar, "darkBg", M("palette-background-paper")), S(h.AppBar, "darkColor", M("palette-text-primary")), S(h.Avatar, "defaultBg", M("palette-grey-600")), S(h.Button, "inheritContainedBg", M("palette-grey-800")), S(h.Button, "inheritContainedHoverBg", M("palette-grey-700")), S(h.Chip, "defaultBorder", M("palette-grey-700")), S(h.Chip, "defaultAvatarColor", M("palette-grey-300")), S(h.Chip, "defaultIconColor", M("palette-grey-300")), S(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), S(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), S(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), S(h.LinearProgress, "primaryBg", I(ae, s ? p("palette-primary-main") : h.primary.main, 0.5)), S(h.LinearProgress, "secondaryBg", I(ae, s ? p("palette-secondary-main") : h.secondary.main, 0.5)), S(h.LinearProgress, "errorBg", I(ae, s ? p("palette-error-main") : h.error.main, 0.5)), S(h.LinearProgress, "infoBg", I(ae, s ? p("palette-info-main") : h.info.main, 0.5)), S(h.LinearProgress, "successBg", I(ae, s ? p("palette-success-main") : h.success.main, 0.5)), S(h.LinearProgress, "warningBg", I(ae, s ? p("palette-warning-main") : h.warning.main, 0.5)), S(h.Skeleton, "bg", R ? I(ct, s ? p("palette-text-primary") : h.text.primary, 0.13) : `rgba(${M("palette-text-primaryChannel")} / 0.13)`), S(h.Slider, "primaryTrack", I(ae, s ? p("palette-primary-main") : h.primary.main, 0.5)), S(h.Slider, "secondaryTrack", I(ae, s ? p("palette-secondary-main") : h.secondary.main, 0.5)), S(h.Slider, "errorTrack", I(ae, s ? p("palette-error-main") : h.error.main, 0.5)), S(h.Slider, "infoTrack", I(ae, s ? p("palette-info-main") : h.info.main, 0.5)), S(h.Slider, "successTrack", I(ae, s ? p("palette-success-main") : h.success.main, 0.5)), S(h.Slider, "warningTrack", I(ae, s ? p("palette-warning-light") : h.warning.main, 0.5));
      const W = R ? I(se, s ? p("palette-background-default") : h.background.default, 0.985) : er(h.background.default, 0.98);
      S(h.SnackbarContent, "bg", W), S(h.SnackbarContent, "color", qe(() => R ? Li.text.primary : h.getContrastText(W))), S(h.SpeedDialAction, "fabHoverBg", er(h.background.paper, 0.15)), S(h.StepConnector, "border", M("palette-grey-600")), S(h.StepContent, "border", M("palette-grey-600")), S(h.Switch, "defaultColor", M("palette-grey-300")), S(h.Switch, "defaultDisabledColor", M("palette-grey-600")), S(h.Switch, "primaryDisabledColor", I(ae, s ? p("palette-primary-main") : h.primary.main, 0.55)), S(h.Switch, "secondaryDisabledColor", I(ae, s ? p("palette-secondary-main") : h.secondary.main, 0.55)), S(h.Switch, "errorDisabledColor", I(ae, s ? p("palette-error-main") : h.error.main, 0.55)), S(h.Switch, "infoDisabledColor", I(ae, s ? p("palette-info-main") : h.info.main, 0.55)), S(h.Switch, "successDisabledColor", I(ae, s ? p("palette-success-main") : h.success.main, 0.55)), S(h.Switch, "warningDisabledColor", I(ae, s ? p("palette-warning-light") : h.warning.main, 0.55)), S(h.TableCell, "border", I(ae, ct(s ? p("palette-divider") : h.divider, 1), 0.68)), S(h.Tooltip, "bg", I(ct, s ? p("palette-grey-700") : h.grey[700], 0.92));
    }
    s || (Qe(h.background, "default"), Qe(h.background, "paper"), Qe(h.common, "background"), Qe(h.common, "onBackground"), Qe(h, "divider")), Object.keys(h).forEach((W) => {
      const U = h[W];
      W !== "tonalOffset" && !s && U && typeof U == "object" && (U.main && S(h[W], "mainChannel", Lt(Wt(U.main))), U.light && S(h[W], "lightChannel", Lt(Wt(U.light))), U.dark && S(h[W], "darkChannel", Lt(Wt(U.dark))), U.contrastText && S(h[W], "contrastTextChannel", Lt(Wt(U.contrastText))), W === "text" && (Qe(h[W], "primary"), Qe(h[W], "secondary")), W === "action" && (U.active && Qe(h[W], "active"), U.selected && Qe(h[W], "selected")));
    });
  }), A = t.reduce((L, h) => Le(L, h), A);
  const Y = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: Bl(A),
    enableContrastVars: s
  }, {
    vars: D,
    generateThemeVars: F,
    generateStyleSheets: K
  } = ul(A, Y);
  return A.vars = D, Object.entries(A.colorSchemes[A.defaultColorScheme]).forEach(([L, h]) => {
    A[L] = h;
  }), A.generateThemeVars = F, A.generateStyleSheets = K, A.generateSpacing = function() {
    return wi(f.spacing, On(this));
  }, A.getColorSchemeSelector = pl(l), A.spacing = A.generateSpacing(), A.shouldSkipGeneratingVar = c, A.unstable_sxConfig = {
    ...Rr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, A.unstable_sx = function(h) {
    return _t({
      sx: h,
      theme: this
    });
  }, A.internal_cache = {}, A.toRuntimeSource = Bi, A;
}
function Uo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: jn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Dr(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...s
  } = e, c = i || "light", l = o == null ? void 0 : o[c], d = {
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
      return hn(e, ...t);
    let f = r;
    "palette" in e || d[c] && (d[c] !== !0 ? f = d[c].palette : c === "dark" && (f = {
      mode: "dark"
    }));
    const g = hn({
      ...e,
      palette: f
    }, ...t);
    return g.defaultColorScheme = c, g.colorSchemes = d, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: g.palette
    }, Uo(g, "dark", d.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: g.palette
    }, Uo(g, "light", d.light)), g;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), Gl({
    ...s,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Bn = Dr();
function Yl() {
  const e = Ci(Bn);
  return process.env.NODE_ENV !== "production" && j.useDebugValue(e), e[et] || e;
}
function ql(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Kl = (e) => ql(e) && e !== "classes", Xl = Pc({
  themeId: et,
  defaultTheme: Bn,
  rootShouldForwardProp: Kl
});
function Ql({
  theme: e,
  ...t
}) {
  const r = et in e ? e[et] : void 0;
  return /* @__PURE__ */ a(Ut, {
    ...t,
    themeId: r ? et : void 0,
    theme: r || e
  });
}
const tr = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (E.string, E.string, E.string, E.string, E.string, E.oneOf(["dark", "light", "system"]), E.string, E.string);
const {
  CssVarsProvider: Jl
} = sl({
  themeId: et,
  // @ts-ignore ignore module augmentation tests
  theme: () => Dr({
    cssVariables: !0
  }),
  colorSchemeStorageKey: tr.colorSchemeStorageKey,
  modeStorageKey: tr.modeStorageKey,
  defaultColorScheme: {
    light: tr.defaultLightColorScheme,
    dark: tr.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: ji(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return _t({
        sx: n,
        theme: this
      });
    }, t;
  }
}), Zl = Jl;
function Ui({
  theme: e,
  ...t
}) {
  const r = j.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = et in e ? e[et] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ a(Ql, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ a(Zl, {
    theme: e,
    ...t
  });
}
function Gi(e) {
  return /* @__PURE__ */ a(Pn, {
    ...e,
    defaultTheme: Bn,
    themeId: et
  });
}
process.env.NODE_ENV !== "production" && (Gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: E.oneOfType([E.array, E.func, E.number, E.object, E.string, E.bool])
});
function Yi(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ a(Gi, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (E.node, E.object.isRequired);
function qi(e) {
  return qc(e);
}
const mn = typeof Yi({}) == "function", ed = (e, t) => ({
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
}), td = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Ki = (e, t = !1) => {
  var i, s;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([c, l]) => {
    var f, g;
    const d = e.getColorSchemeSelector(c);
    d.startsWith("@") ? r[d] = {
      ":root": {
        colorScheme: (f = l.palette) == null ? void 0 : f.mode
      }
    } : r[d.replace(/\s*&/, "")] = {
      colorScheme: (g = l.palette) == null ? void 0 : g.mode
    };
  });
  let n = {
    html: ed(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...td(e),
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
}, ir = "mui-ecs", rd = (e) => {
  const t = Ki(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${ir})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var s, c;
    const i = e.getColorSchemeSelector(n);
    i.startsWith("@") ? r[i] = {
      [`:root:not(:has(.${ir}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : r[i.replace(/\s*&/, "")] = {
      [`&:not(:has(.${ir}))`]: {
        colorScheme: (c = o.palette) == null ? void 0 : c.mode
      }
    };
  }), t;
}, nd = Yi(mn ? ({
  theme: e,
  enableColorScheme: t
}) => Ki(e, t) : ({
  theme: e
}) => rd(e));
function Xi(e) {
  const t = qi({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ m(j.Fragment, {
    children: [mn && /* @__PURE__ */ a(nd, {
      enableColorScheme: n
    }), !mn && !n && /* @__PURE__ */ a("span", {
      className: ir,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (Xi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: E.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: E.bool
});
const od = J.fontFamily.code, id = {
  fontFamily: J.fontFamily.primary,
  h1: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.medium,
    fontSize: J.fontSize["2xl"]
  },
  h2: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.medium,
    fontSize: J.fontSize.xl
  },
  h3: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.medium,
    fontSize: J.fontSize.lg
  },
  h4: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.medium,
    fontSize: J.fontSize.base
  },
  h5: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    fontSize: J.fontSize.sm
  },
  h6: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    fontSize: J.fontSize.xs
  },
  body1: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    fontSize: J.fontSize.sm
  },
  body2: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    fontSize: J.fontSize.xs
  },
  button: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    textTransform: "none"
  },
  caption: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    fontSize: J.fontSize.xs
  },
  overline: {
    fontFamily: J.fontFamily.primary,
    fontWeight: J.fontWeight.regular,
    fontSize: J.fontSize.xs,
    textTransform: "none",
    letterSpacing: "0.08em"
  }
}, ad = (e) => {
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
              boxShadow: rt.sm
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
          boxShadow: rt.sm,
          "&:hover": {
            boxShadow: rt.md
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
            fontFamily: od,
            backgroundColor: t ? v.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, sd = (e) => {
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
}, cd = () => [
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
], ld = (e) => Dr({
  palette: sd(e),
  typography: id,
  components: ad(e),
  shape: {
    borderRadius: 16
    // 1rem — Brand Book §radii
  },
  shadows: cd()
}), Qi = kn({
  mode: "light",
  toggleColorMode: () => {
  }
}), Vn = () => vr(Qi), sp = ({ children: e }) => {
  const [t, r] = G(() => {
    const s = localStorage.getItem("ai4u-theme-mode");
    return s === "dark" || s === "light" ? s : "light";
  }), n = dt(() => {
    r((s) => {
      const c = s === "light" ? "dark" : "light";
      return localStorage.setItem("ai4u-theme-mode", c), document.documentElement.setAttribute("data-theme", c), c;
    });
  }, []);
  me(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, []);
  const o = Re(() => ({ mode: t, toggleColorMode: n }), [t, n]), i = Re(() => ld(t), [t]);
  return /* @__PURE__ */ a(Qi.Provider, { value: o, children: /* @__PURE__ */ m(Ui, { theme: i, children: [
    /* @__PURE__ */ a(Xi, {}),
    e
  ] }) });
}, gn = kn({
  surface: "theme"
}), cp = ({ children: e, surface: t }) => {
  const r = vr(gn), { mode: n } = Vn(), o = t || r.surface, i = Re(() => o === "theme" ? n : sn[o].effectiveMode, [o, n]), s = Re(() => {
    const c = i === "light";
    return Dr({
      palette: {
        mode: i,
        primary: {
          main: c ? v.black : v.white,
          contrastText: c ? v.white : v.black
        },
        background: {
          default: c ? v.accentColors.mint : v.black,
          paper: c ? v.accentColors.mint : v.gray[900]
        },
        text: {
          primary: c ? v.black : v.white,
          secondary: c ? v.gray[600] : v.gray[300]
        }
      },
      // Heredar tipografía y otros ajustes si es necesario, 
      // pero lo más importante es la paleta para el contraste.
      typography: {
        fontFamily: J.fontFamily.primary
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
              color: c ? v.black : v.white
            }
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                backgroundColor: c ? v.black : v.white,
                color: c ? v.white : v.black
              }
            }
          ]
        },
        MuiTypography: {
          styleOverrides: {
            root: {
              color: c ? v.black : v.white
            }
          }
        }
      }
    });
  }, [i]);
  return /* @__PURE__ */ a(gn.Provider, { value: { surface: o }, children: /* @__PURE__ */ a(Ui, { theme: s, children: e }) });
}, dd = () => vr(gn), re = () => {
  const e = Yl(), { mode: t } = Vn(), { surface: r } = dd(), n = Re(() => r === "theme" ? pa[t] : sn[r], [t, r]), o = Re(() => r === "theme" ? t : sn[r].effectiveMode, [t, r]), i = fa(o);
  return Re(() => ({
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
  }), [t, o, r, n, i.components, e]);
}, lp = (e, t) => {
  const { components: r } = re();
  return Re(() => {
    switch (e) {
      case "button":
        return r.button[t];
      case "card":
        return r.card[t];
      default:
        return null;
    }
  }, [r, e, t]);
}, dp = () => {
  const { mode: e, contrast: t } = re();
  return Re(() => ({
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
}, ud = () => {
  const [e, t] = G(!1), [r, n] = G(!1);
  return me(() => {
    const o = () => {
      const s = window.matchMedia("(display-mode: standalone)").matches, c = window.navigator.standalone;
      n(s || c), t(s || c);
    };
    o();
    const i = window.matchMedia("(display-mode: standalone)");
    return i.addListener(o), () => {
      i.removeListener(o);
    };
  }, []), { isPWA: e, isStandalone: r };
};
class pd {
  constructor() {
    Te(this, "isDev", !1);
    Te(this, "log", (...t) => {
      this.isDev && console.log(...t);
    });
    Te(this, "error", (...t) => {
      this.isDev && console.error(...t);
    });
    Te(this, "warn", (...t) => {
      this.isDev && console.warn(...t);
    });
    Te(this, "info", (...t) => {
      this.isDev && console.info(...t);
    });
    Te(this, "debug", (...t) => {
      this.isDev && console.debug(...t);
    });
  }
}
const ue = new pd(), vt = {
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
class fd {
  constructor() {
    Te(this, "isGALoaded", !1);
    this.checkGAAvailability();
  }
  checkGAAvailability() {
    typeof window < "u" && window.gtag ? (this.isGALoaded = !0, ue.log("📊 Google Analytics disponible")) : ue.warn("⚠️ Google Analytics no disponible");
  }
  // Tracking de eventos específicos AI4U
  trackServiceInterest(t, r = "unknown") {
    this.trackEvent({
      action: vt.SERVICE_INTEREST,
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
      action: vt.CONSULTATION_REQUEST,
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
      action: vt.DIAGNOSTIC_START,
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
      action: vt.PHILOSOPHY_ENGAGEMENT,
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
      action: vt.PERFORMANCE_ISSUE,
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
      action: vt.ERROR_BOUNDARY_HIT,
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
const Hn = new fd();
class hd {
  constructor() {
    Te(this, "sessionId");
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
    ue.error("🚨 Error captured:", r), Hn.trackErrorBoundary(r, r.componentStack), this.sendToRemoteService(r);
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
const md = new hd(), gd = (e, t = {}) => {
  const {
    priority: r = !1,
    size: n = "original",
    format: o = "webp",
    fallback: i,
    preload: s = !1
  } = t, [c, l] = G({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [d, f] = G(null);
  me(() => {
    (async () => {
      try {
        const y = await fetch("/assets/images/optimized/image-mapping.json");
        if (y.ok) {
          const w = await y.json();
          f(w);
        }
      } catch {
      }
    })();
  }, []);
  const g = Re(() => {
    var _, $;
    if (!d || !d[e])
      return {
        src: `/assets/images/${e}.jpg`,
        format: "original",
        size: "original"
      };
    const x = d[e];
    let y = "", w = "original", C = "original";
    return o === "webp" && ((_ = x.formats) != null && _.webp) ? (y = `/assets/images/optimized/${x.formats.webp.file}`, w = "webp") : (y = `/assets/images/${x.original}`, w = "original"), n !== "original" && (($ = x.sizes) != null && $[n]) && (y = `/assets/images/optimized/${x.sizes[n].file}`, C = n), {
      src: y,
      format: w,
      size: C
    };
  }, [e, d, o, n]);
  me(() => {
    if (!g.src) return;
    l((y) => ({
      ...y,
      src: g.src,
      format: g.format,
      size: g.size,
      isLoaded: !1,
      error: !1
    }));
    const x = new Image();
    return x.onload = () => {
      l((y) => ({
        ...y,
        isLoaded: !0,
        error: !1
      }));
    }, x.onerror = () => {
      g.format === "webp" && !c.error ? l((y) => {
        var w;
        return {
          ...y,
          src: `/assets/images/${((w = d == null ? void 0 : d[e]) == null ? void 0 : w.original) || `${e}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : l(i ? (y) => ({
        ...y,
        src: i,
        format: "fallback",
        error: !0
      }) : (y) => ({
        ...y,
        error: !0
      }));
    }, (r || s) && (x.loading = "eager"), x.src = g.src, () => {
      x.onload = null, x.onerror = null;
    };
  }, [g.src, g.format, i, r, s, c.error, d, e]);
  const b = Re(() => {
    if (typeof window > "u") return !1;
    const x = document.createElement("canvas");
    return x.width = 1, x.height = 1, x.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, []);
  return {
    src: Re(() => {
      var x;
      return c.format === "webp" && !b ? `/assets/images/${((x = d == null ? void 0 : d[e]) == null ? void 0 : x.original) || `${e}.jpg`}` : c.src;
    }, [c.src, c.format, b, d, e]),
    isLoaded: c.isLoaded,
    error: c.error,
    format: c.format,
    size: c.size,
    supportsWebP: b,
    isLoading: !c.isLoaded && !c.error
  };
}, en = (e) => {
  const [t, r] = G(/* @__PURE__ */ new Set()), [n, o] = G(0);
  return me(() => {
    o(e.length);
    const i = (c) => new Promise((l) => {
      const d = new Image();
      d.onload = () => {
        r((f) => new Set(Array.from(f).concat(c))), l();
      }, d.onerror = () => {
        r((f) => new Set(Array.from(f).concat(c))), l();
      }, d.src = `/assets/images/${c}.jpg`;
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
}, yd = Ae(u, {
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
    onClick: i,
    sx: s
  } = e, c = re(), l = n || c.contrast.text.primary, d = () => {
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
  }, f = () => {
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
    yd,
    {
      iconSize: r,
      isClickable: !!i,
      onClick: i,
      sx: { ...d(), ...s },
      children: f()
    }
  );
}, bd = kn(void 0), Ji = () => {
  const e = vr(bd);
  if (e === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return e;
}, up = ({ images: e, onAllLoaded: t }) => {
  const { setCriticalImagesLoaded: r } = Ji();
  return me(() => {
    let n = 0;
    const o = e.length, i = () => {
      n++, n === o && (r(!0), t == null || t());
    }, s = () => {
      n++, n === o && (r(!0), t == null || t());
    };
    e.forEach((c) => {
      const l = new Image();
      l.onload = i, l.onerror = s, l.src = c;
    }), o === 0 && (r(!0), t == null || t());
  }, [e, r, t]), null;
}, pp = () => {
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
      children: /* @__PURE__ */ a(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(At, {}) }),
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, Un = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: i,
  skeletonWidth: s,
  priority: c = !1
}) => {
  const l = we(), { isPWA: d } = ud(), { imgRef: f, isLoaded: g, isInView: b, error: p } = os(e, { priority: c }), x = {
    bgcolor: l.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ m(
    u,
    {
      ref: f,
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
            sx: x
          }
        ),
        b && /* @__PURE__ */ a(
          u,
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
              ...d && {
                imageRendering: "auto",
                touchAction: "manipulation"
              }
            },
            onLoad: () => {
            }
          }
        ),
        p && /* @__PURE__ */ a(
          u,
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
}, fp = ({
  src: e,
  pixelArtSrc: t,
  alt: r,
  width: n = "100%",
  height: o = "auto",
  transitionDuration: i = 0.3,
  sx: s,
  ...c
}) => {
  const [l, d] = G(!1);
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
          transition: `opacity ${i}s ease-in-out`,
          opacity: l ? 1 : 0,
          zIndex: 2
        },
        ...s
      },
      ...c,
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
}, hp = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  transitionDuration: o = 0.3,
  pixelSize: i = 8,
  sx: s,
  ...c
}) => {
  const [l, d] = G(!1);
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
      ...c,
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
                backgroundSize: `${i}px ${i}px`,
                pointerEvents: "none",
                zIndex: 2
              } : {}
            }
          }
        ),
        l && /* @__PURE__ */ a(
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
        l && /* @__PURE__ */ a(
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
        l && /* @__PURE__ */ a(
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
}, xd = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", vd = `
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
`, Sd = () => (me(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var t;
    try {
      (t = window.google) != null && t.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: xd,
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
}, []), /* @__PURE__ */ m(ve, { children: [
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
  /* @__PURE__ */ a("style", { children: vd })
] })), yn = [
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
function wd() {
  const e = document.cookie.match(/googtrans=([^;]+)/);
  if (e && e[1]) {
    const o = e[1].trim();
    if (o) {
      const i = o.split("/").filter(Boolean), s = i[i.length - 1];
      if (s && s !== gr) {
        const c = yn.find((l) => l.code === s || l.code.startsWith(s));
        if (c) return c.short;
      }
    }
  }
  const r = (document.documentElement.lang || gr).split("-")[0].toLowerCase(), n = yn.find((o) => o.code.toLowerCase().startsWith(r));
  return (n == null ? void 0 : n.short) ?? "ES";
}
const Go = ({ light: e = !1 }) => {
  const t = re(), r = we(), n = lr(r.breakpoints.down("sm")), o = lr(r.breakpoints.between("sm", "md")), [i, s] = G(wd), [c, l] = G(null), [d, f] = G(() => !!document.getElementById("google-translate-script")), g = xr(null), b = !!c;
  me(() => {
    if (document.getElementById("google-translate-script")) {
      f(!0);
      return;
    }
    const C = setInterval(() => {
      document.getElementById("google-translate-script") && (f(!0), clearInterval(C));
    }, 200), _ = setTimeout(() => {
      clearInterval(C), f(!0);
    }, 5e3);
    return () => {
      clearInterval(C), clearTimeout(_);
    };
  }, []);
  const p = (C) => {
    l(C.currentTarget);
  }, x = () => {
    l(null);
  }, y = (C, _) => {
    if (x(), C === gr) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const $ = `/${gr}/${C}`;
    document.cookie = `googtrans=${$}; path=/`, window.location.reload();
  }, w = (C) => n ? {
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
        /* @__PURE__ */ a(
          u,
          {
            ref: g,
            component: "button",
            onClick: p,
            "aria-label": `Cambiar idioma (actual: ${i})`,
            "aria-controls": b ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": b ? "true" : void 0,
            disabled: !d,
            sx: (C) => {
              const _ = w(C);
              return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: _.width,
                height: _.height,
                minWidth: _.width,
                padding: 0,
                color: e ? "#FFFFFF" : t.contrast.text.primary,
                border: "none",
                borderRadius: C.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: e ? "transparent" : t.contrast.surface,
                fontFamily: C.typography.fontFamily,
                fontSize: _.fontSize,
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
            children: d ? i : "…"
          }
        ),
        /* @__PURE__ */ a(
          si,
          {
            id: "language-menu",
            anchorEl: c,
            open: b,
            onClose: x,
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
                  boxShadow: rt.md
                })
              }
            },
            children: yn.map((C) => /* @__PURE__ */ a(
              nr,
              {
                onClick: () => y(C.code, C.short),
                selected: i === C.short,
                sx: (_) => ({
                  fontFamily: _.typography.fontFamily,
                  fontSize: _.typography.body2.fontSize,
                  fontWeight: i === C.short ? 600 : 400,
                  color: i === C.short ? t.palette.black : t.contrast.text.primary,
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
                  /* @__PURE__ */ a(
                    u,
                    {
                      component: "span",
                      sx: (_) => ({
                        fontWeight: 400,
                        minWidth: _.spacing(3),
                        color: i === C.short ? t.palette.black : t.contrast.text.secondary
                      }),
                      children: C.short
                    }
                  ),
                  /* @__PURE__ */ a(u, { component: "span", children: C.label })
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
var Cd = typeof Element < "u", kd = typeof Map == "function", Td = typeof Set == "function", Ed = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ar(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (!ar(e[n], t[n])) return !1;
      return !0;
    }
    var i;
    if (kd && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!ar(n.value[1], t.get(n.value[0]))) return !1;
      return !0;
    }
    if (Td && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0])) return !1;
      return !0;
    }
    if (Ed && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length) return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n])) return !1;
    if (Cd && e instanceof Element) return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !ar(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Id = function(t, r) {
  try {
    return ar(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const Ad = /* @__PURE__ */ Sr(Id);
var $d = function(e, t, r, n, o, i, s, c) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error("invariant requires an error message argument");
  if (!e) {
    var l;
    if (t === void 0)
      l = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var d = [r, n, o, i, s, c], f = 0;
      l = new Error(
        t.replace(/%s/g, function() {
          return d[f++];
        })
      ), l.name = "Invariant Violation";
    }
    throw l.framesToPop = 1, l;
  }
}, Od = $d;
const Yo = /* @__PURE__ */ Sr(Od);
var _d = function(t, r, n, o) {
  var i = n ? n.call(o, t, r) : void 0;
  if (i !== void 0)
    return !!i;
  if (t === r)
    return !0;
  if (typeof t != "object" || !t || typeof r != "object" || !r)
    return !1;
  var s = Object.keys(t), c = Object.keys(r);
  if (s.length !== c.length)
    return !1;
  for (var l = Object.prototype.hasOwnProperty.bind(r), d = 0; d < s.length; d++) {
    var f = s[d];
    if (!l(f))
      return !1;
    var g = t[f], b = r[f];
    if (i = n ? n.call(o, g, b, f) : void 0, i === !1 || i === void 0 && g !== b)
      return !1;
  }
  return !0;
};
const Rd = /* @__PURE__ */ Sr(_d);
var Zi = /* @__PURE__ */ ((e) => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(Zi || {}), tn = {
  link: { rel: ["amphtml", "canonical", "alternate"] },
  script: { type: ["application/ld+json"] },
  meta: {
    charset: "",
    name: ["generator", "robots", "description"],
    property: [
      "og:type",
      "og:title",
      "og:url",
      "og:image",
      "og:image:alt",
      "og:description",
      "twitter:url",
      "twitter:title",
      "twitter:description",
      "twitter:image",
      "twitter:image:alt",
      "twitter:card",
      "twitter:site"
    ]
  }
}, qo = Object.values(Zi), Fr = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
}, ea = Object.entries(Fr).reduce(
  (e, [t, r]) => (e[r] = t, e),
  {}
), He = "data-rh", Tt = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate",
  PRIORITIZE_SEO_TAGS: "prioritizeSeoTags"
}, Et = (e, t) => {
  for (let r = e.length - 1; r >= 0; r -= 1) {
    const n = e[r];
    if (Object.prototype.hasOwnProperty.call(n, t))
      return n[t];
  }
  return null;
}, Md = (e) => {
  let t = Et(
    e,
    "title"
    /* TITLE */
  );
  const r = Et(e, Tt.TITLE_TEMPLATE);
  if (Array.isArray(t) && (t = t.join("")), r && t)
    return r.replace(/%s/g, () => t);
  const n = Et(e, Tt.DEFAULT_TITLE);
  return t || n || void 0;
}, Pd = (e) => Et(e, Tt.ON_CHANGE_CLIENT_STATE) || (() => {
}), rn = (e, t) => t.filter((r) => typeof r[e] < "u").map((r) => r[e]).reduce((r, n) => ({ ...r, ...n }), {}), zd = (e, t) => t.filter((r) => typeof r.base < "u").map((r) => r.base).reverse().reduce((r, n) => {
  if (!r.length) {
    const o = Object.keys(n);
    for (let i = 0; i < o.length; i += 1) {
      const c = o[i].toLowerCase();
      if (e.indexOf(c) !== -1 && n[c])
        return r.concat(n);
    }
  }
  return r;
}, []), Dd = (e) => console && typeof console.warn == "function" && console.warn(e), Dt = (e, t, r) => {
  const n = {};
  return r.filter((o) => Array.isArray(o[e]) ? !0 : (typeof o[e] < "u" && Dd(
    `Helmet: ${e} should be of type "Array". Instead found type "${typeof o[e]}"`
  ), !1)).map((o) => o[e]).reverse().reduce((o, i) => {
    const s = {};
    i.filter((l) => {
      let d;
      const f = Object.keys(l);
      for (let b = 0; b < f.length; b += 1) {
        const p = f[b], x = p.toLowerCase();
        t.indexOf(x) !== -1 && !(d === "rel" && l[d].toLowerCase() === "canonical") && !(x === "rel" && l[x].toLowerCase() === "stylesheet") && (d = x), t.indexOf(p) !== -1 && (p === "innerHTML" || p === "cssText" || p === "itemprop") && (d = p);
      }
      if (!d || !l[d])
        return !1;
      const g = l[d].toLowerCase();
      return n[d] || (n[d] = {}), s[d] || (s[d] = {}), n[d][g] ? !1 : (s[d][g] = !0, !0);
    }).reverse().forEach((l) => o.push(l));
    const c = Object.keys(s);
    for (let l = 0; l < c.length; l += 1) {
      const d = c[l], f = {
        ...n[d],
        ...s[d]
      };
      n[d] = f;
    }
    return o;
  }, []).reverse();
}, Fd = (e, t) => {
  if (Array.isArray(e) && e.length) {
    for (let r = 0; r < e.length; r += 1)
      if (e[r][t])
        return !0;
  }
  return !1;
}, Nd = (e) => ({
  baseTag: zd([
    "href"
    /* HREF */
  ], e),
  bodyAttributes: rn("bodyAttributes", e),
  defer: Et(e, Tt.DEFER),
  encode: Et(e, Tt.ENCODE_SPECIAL_CHARACTERS),
  htmlAttributes: rn("htmlAttributes", e),
  linkTags: Dt(
    "link",
    [
      "rel",
      "href"
      /* HREF */
    ],
    e
  ),
  metaTags: Dt(
    "meta",
    [
      "name",
      "charset",
      "http-equiv",
      "property",
      "itemprop"
      /* ITEM_PROP */
    ],
    e
  ),
  noscriptTags: Dt("noscript", [
    "innerHTML"
    /* INNER_HTML */
  ], e),
  onChangeClientState: Pd(e),
  scriptTags: Dt(
    "script",
    [
      "src",
      "innerHTML"
      /* INNER_HTML */
    ],
    e
  ),
  styleTags: Dt("style", [
    "cssText"
    /* CSS_TEXT */
  ], e),
  title: Md(e),
  titleAttributes: rn("titleAttributes", e),
  prioritizeSeoTags: Fd(e, Tt.PRIORITIZE_SEO_TAGS)
}), ta = (e) => Array.isArray(e) ? e.join("") : e, Ld = (e, t) => {
  const r = Object.keys(e);
  for (let n = 0; n < r.length; n += 1)
    if (t[r[n]] && t[r[n]].includes(e[r[n]]))
      return !0;
  return !1;
}, nn = (e, t) => Array.isArray(e) ? e.reduce(
  (r, n) => (Ld(n, t) ? r.priority.push(n) : r.default.push(n), r),
  { priority: [], default: [] }
) : { default: e, priority: [] }, Ko = (e, t) => ({
  ...e,
  [t]: void 0
}), Wd = [
  "noscript",
  "script",
  "style"
  /* STYLE */
], bn = (e, t = !0) => t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;"), ra = (e) => Object.keys(e).reduce((t, r) => {
  const n = typeof e[r] < "u" ? `${r}="${e[r]}"` : `${r}`;
  return t ? `${t} ${n}` : n;
}, ""), jd = (e, t, r, n) => {
  const o = ra(r), i = ta(t);
  return o ? `<${e} ${He}="true" ${o}>${bn(
    i,
    n
  )}</${e}>` : `<${e} ${He}="true">${bn(
    i,
    n
  )}</${e}>`;
}, Bd = (e, t, r = !0) => t.reduce((n, o) => {
  const i = o, s = Object.keys(i).filter(
    (d) => !(d === "innerHTML" || d === "cssText")
  ).reduce((d, f) => {
    const g = typeof i[f] > "u" ? f : `${f}="${bn(i[f], r)}"`;
    return d ? `${d} ${g}` : g;
  }, ""), c = i.innerHTML || i.cssText || "", l = Wd.indexOf(e) === -1;
  return `${n}<${e} ${He}="true" ${s}${l ? "/>" : `>${c}</${e}>`}`;
}, ""), na = (e, t = {}) => Object.keys(e).reduce((r, n) => {
  const o = Fr[n];
  return r[o || n] = e[n], r;
}, t), Vd = (e, t, r) => {
  const n = {
    key: t,
    [He]: !0
  }, o = na(r, n);
  return [be.createElement("title", o, t)];
}, sr = (e, t) => t.map((r, n) => {
  const o = {
    key: n,
    [He]: !0
  };
  return Object.keys(r).forEach((i) => {
    const c = Fr[i] || i;
    if (c === "innerHTML" || c === "cssText") {
      const l = r.innerHTML || r.cssText;
      o.dangerouslySetInnerHTML = { __html: l };
    } else
      o[c] = r[i];
  }), be.createElement(e, o);
}), De = (e, t, r = !0) => {
  switch (e) {
    case "title":
      return {
        toComponent: () => Vd(e, t.title, t.titleAttributes),
        toString: () => jd(e, t.title, t.titleAttributes, r)
      };
    case "bodyAttributes":
    case "htmlAttributes":
      return {
        toComponent: () => na(t),
        toString: () => ra(t)
      };
    default:
      return {
        toComponent: () => sr(e, t),
        toString: () => Bd(e, t, r)
      };
  }
}, Hd = ({ metaTags: e, linkTags: t, scriptTags: r, encode: n }) => {
  const o = nn(e, tn.meta), i = nn(t, tn.link), s = nn(r, tn.script);
  return {
    priorityMethods: {
      toComponent: () => [
        ...sr("meta", o.priority),
        ...sr("link", i.priority),
        ...sr("script", s.priority)
      ],
      toString: () => (
        // generate all the tags as strings and concatenate them
        `${De("meta", o.priority, n)} ${De(
          "link",
          i.priority,
          n
        )} ${De("script", s.priority, n)}`
      )
    },
    metaTags: o.default,
    linkTags: i.default,
    scriptTags: s.default
  };
}, Ud = (e) => {
  const {
    baseTag: t,
    bodyAttributes: r,
    encode: n = !0,
    htmlAttributes: o,
    noscriptTags: i,
    styleTags: s,
    title: c = "",
    titleAttributes: l,
    prioritizeSeoTags: d
  } = e;
  let { linkTags: f, metaTags: g, scriptTags: b } = e, p = {
    toComponent: () => [],
    toString: () => ""
  };
  return d && ({ priorityMethods: p, linkTags: f, metaTags: g, scriptTags: b } = Hd(e)), {
    priority: p,
    base: De("base", t, n),
    bodyAttributes: De("bodyAttributes", r, n),
    htmlAttributes: De("htmlAttributes", o, n),
    link: De("link", f, n),
    meta: De("meta", g, n),
    noscript: De("noscript", i, n),
    script: De("script", b, n),
    style: De("style", s, n),
    title: De("title", { title: c, titleAttributes: l }, n)
  };
}, xn = Ud, rr = [], Gn = !!(typeof window < "u" && window.document && window.document.createElement), vn = class {
  constructor(e, t) {
    Te(this, "instances", []);
    Te(this, "canUseDOM", Gn);
    Te(this, "context");
    Te(this, "value", {
      setHelmet: (e) => {
        this.context.helmet = e;
      },
      helmetInstances: {
        get: () => this.canUseDOM ? rr : this.instances,
        add: (e) => {
          (this.canUseDOM ? rr : this.instances).push(e);
        },
        remove: (e) => {
          const t = (this.canUseDOM ? rr : this.instances).indexOf(e);
          (this.canUseDOM ? rr : this.instances).splice(t, 1);
        }
      }
    });
    this.context = e, this.canUseDOM = t || !1, t || (e.helmet = xn({
      baseTag: [],
      bodyAttributes: {},
      htmlAttributes: {},
      linkTags: [],
      metaTags: [],
      noscriptTags: [],
      scriptTags: [],
      styleTags: [],
      title: "",
      titleAttributes: {}
    }));
  }
}, Gd = parseInt(be.version.split(".")[0], 10), Sn = Gd >= 19, Yd = {}, oa = be.createContext(Yd), pt, qd = (pt = class extends qt {
  constructor(r) {
    super(r);
    Te(this, "helmetData");
    Sn ? this.helmetData = null : this.helmetData = new vn(this.props.context || {}, pt.canUseDOM);
  }
  render() {
    return Sn ? /* @__PURE__ */ be.createElement(be.Fragment, null, this.props.children) : /* @__PURE__ */ be.createElement(oa.Provider, { value: this.helmetData.value }, this.props.children);
  }
}, Te(pt, "canUseDOM", Gn), pt), St = (e, t) => {
  const r = document.head || document.querySelector(
    "head"
    /* HEAD */
  ), n = r.querySelectorAll(`${e}[${He}]`), o = [].slice.call(n), i = [];
  let s;
  return t && t.length && t.forEach((c) => {
    const l = document.createElement(e);
    for (const d in c)
      if (Object.prototype.hasOwnProperty.call(c, d))
        if (d === "innerHTML")
          l.innerHTML = c.innerHTML;
        else if (d === "cssText") {
          const f = c.cssText;
          l.appendChild(document.createTextNode(f));
        } else {
          const f = d, g = typeof c[f] > "u" ? "" : c[f];
          l.setAttribute(d, g);
        }
    l.setAttribute(He, "true"), o.some((d, f) => (s = f, l.isEqualNode(d))) ? o.splice(s, 1) : i.push(l);
  }), o.forEach((c) => {
    var l;
    return (l = c.parentNode) == null ? void 0 : l.removeChild(c);
  }), i.forEach((c) => r.appendChild(c)), {
    oldTags: o,
    newTags: i
  };
}, wn = (e, t) => {
  const r = document.getElementsByTagName(e)[0];
  if (!r)
    return;
  const n = r.getAttribute(He), o = n ? n.split(",") : [], i = [...o], s = Object.keys(t);
  for (const c of s) {
    const l = t[c] || "";
    r.getAttribute(c) !== l && r.setAttribute(c, l), o.indexOf(c) === -1 && o.push(c);
    const d = i.indexOf(c);
    d !== -1 && i.splice(d, 1);
  }
  for (let c = i.length - 1; c >= 0; c -= 1)
    r.removeAttribute(i[c]);
  o.length === i.length ? r.removeAttribute(He) : r.getAttribute(He) !== s.join(",") && r.setAttribute(He, s.join(","));
}, Kd = (e, t) => {
  typeof e < "u" && document.title !== e && (document.title = ta(e)), wn("title", t);
}, Xo = (e, t) => {
  const {
    baseTag: r,
    bodyAttributes: n,
    htmlAttributes: o,
    linkTags: i,
    metaTags: s,
    noscriptTags: c,
    onChangeClientState: l,
    scriptTags: d,
    styleTags: f,
    title: g,
    titleAttributes: b
  } = e;
  wn("body", n), wn("html", o), Kd(g, b);
  const p = {
    baseTag: St("base", r),
    linkTags: St("link", i),
    metaTags: St("meta", s),
    noscriptTags: St("noscript", c),
    scriptTags: St("script", d),
    styleTags: St("style", f)
  }, x = {}, y = {};
  Object.keys(p).forEach((w) => {
    const { newTags: C, oldTags: _ } = p[w];
    C.length && (x[w] = C), _.length && (y[w] = p[w].oldTags);
  }), t && t(), l(e, x, y);
}, Ft = null, Xd = (e) => {
  Ft && cancelAnimationFrame(Ft), e.defer ? Ft = requestAnimationFrame(() => {
    Xo(e, () => {
      Ft = null;
    });
  }) : (Xo(e), Ft = null);
}, Qd = Xd, Qo = class extends qt {
  constructor() {
    super(...arguments);
    Te(this, "rendered", !1);
  }
  shouldComponentUpdate(t) {
    return !Rd(t, this.props);
  }
  componentDidUpdate() {
    this.emitChange();
  }
  componentWillUnmount() {
    const { helmetInstances: t } = this.props.context;
    t.remove(this), this.emitChange();
  }
  emitChange() {
    const { helmetInstances: t, setHelmet: r } = this.props.context;
    let n = null;
    const o = Nd(
      t.get().map((i) => {
        const { context: s, ...c } = i.props;
        return c;
      })
    );
    qd.canUseDOM ? Qd(o) : xn && (n = xn(o)), r(n);
  }
  // componentWillMount will be deprecated
  // for SSR, initialize on first render
  // constructor is also unsafe in StrictMode
  init() {
    if (this.rendered)
      return;
    this.rendered = !0;
    const { helmetInstances: t } = this.props.context;
    t.add(this), this.emitChange();
  }
  render() {
    return this.init(), null;
  }
}, cr = [], Jo = (e) => {
  const t = {};
  for (const r of Object.keys(e))
    t[ea[r] || r] = e[r];
  return t;
}, lt = (e) => {
  const t = {};
  for (const r of Object.keys(e)) {
    const n = Fr[r];
    t[n || r] = e[r];
  }
  return t;
}, Zo = (e, t) => {
  if (!Gn)
    return;
  const r = document.getElementsByTagName(e)[0];
  if (!r)
    return;
  const n = "data-rh-managed", o = r.getAttribute(n), i = o ? o.split(",") : [], s = Object.keys(t);
  for (const c of i)
    s.includes(c) || r.removeAttribute(c);
  for (const c of s) {
    const l = t[c];
    l == null || l === !1 ? r.removeAttribute(c) : l === !0 ? r.setAttribute(c, "") : r.setAttribute(c, String(l));
  }
  s.length > 0 ? r.setAttribute(n, s.join(",")) : r.removeAttribute(n);
}, on = () => {
  const e = {}, t = {};
  for (const r of cr) {
    const { htmlAttributes: n, bodyAttributes: o } = r.props;
    n && Object.assign(e, Jo(n)), o && Object.assign(t, Jo(o));
  }
  Zo("html", e), Zo("body", t);
}, Jd = class extends qt {
  componentDidMount() {
    cr.push(this), on();
  }
  componentDidUpdate() {
    on();
  }
  componentWillUnmount() {
    const e = cr.indexOf(this);
    e !== -1 && cr.splice(e, 1), on();
  }
  resolveTitle() {
    const { title: e, titleTemplate: t, defaultTitle: r } = this.props;
    return e && t ? t.replace(/%s/g, () => Array.isArray(e) ? e.join("") : e) : e || r || void 0;
  }
  renderTitle() {
    const e = this.resolveTitle();
    if (e === void 0)
      return null;
    const t = this.props.titleAttributes || {};
    return be.createElement("title", lt(t), e);
  }
  renderBase() {
    const { base: e } = this.props;
    return e ? be.createElement("base", lt(e)) : null;
  }
  renderMeta() {
    const { meta: e } = this.props;
    return !e || !Array.isArray(e) ? null : e.map(
      (t, r) => be.createElement("meta", {
        key: r,
        ...lt(t)
      })
    );
  }
  renderLink() {
    const { link: e } = this.props;
    return !e || !Array.isArray(e) ? null : e.map(
      (t, r) => be.createElement("link", {
        key: r,
        ...lt(t)
      })
    );
  }
  renderScript() {
    const { script: e } = this.props;
    return !e || !Array.isArray(e) ? null : e.map((t, r) => {
      const { innerHTML: n, ...o } = t, i = lt(o);
      return n && (i.dangerouslySetInnerHTML = { __html: n }), be.createElement("script", { key: r, ...i });
    });
  }
  renderStyle() {
    const { style: e } = this.props;
    return !e || !Array.isArray(e) ? null : e.map((t, r) => {
      const { cssText: n, ...o } = t, i = lt(o);
      return n && (i.dangerouslySetInnerHTML = { __html: n }), be.createElement("style", { key: r, ...i });
    });
  }
  renderNoscript() {
    const { noscript: e } = this.props;
    return !e || !Array.isArray(e) ? null : e.map((t, r) => {
      const { innerHTML: n, ...o } = t, i = lt(o);
      return n && (i.dangerouslySetInnerHTML = { __html: n }), be.createElement("noscript", { key: r, ...i });
    });
  }
  render() {
    return be.createElement(
      be.Fragment,
      null,
      this.renderTitle(),
      this.renderBase(),
      this.renderMeta(),
      this.renderLink(),
      this.renderScript(),
      this.renderStyle(),
      this.renderNoscript()
    );
  }
}, an, Zd = (an = class extends qt {
  shouldComponentUpdate(e) {
    return !Ad(Ko(this.props, "helmetData"), Ko(e, "helmetData"));
  }
  mapNestedChildrenToProps(e, t) {
    if (!t)
      return null;
    switch (e.type) {
      case "script":
      case "noscript":
        return {
          innerHTML: t
        };
      case "style":
        return {
          cssText: t
        };
      default:
        throw new Error(
          `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
        );
    }
  }
  flattenArrayTypeChildren(e, t, r, n) {
    return {
      ...t,
      [e.type]: [
        ...t[e.type] || [],
        {
          ...r,
          ...this.mapNestedChildrenToProps(e, n)
        }
      ]
    };
  }
  mapObjectTypeChildren(e, t, r, n) {
    switch (e.type) {
      case "title":
        return {
          ...t,
          [e.type]: n,
          titleAttributes: { ...r }
        };
      case "body":
        return {
          ...t,
          bodyAttributes: { ...r }
        };
      case "html":
        return {
          ...t,
          htmlAttributes: { ...r }
        };
      default:
        return {
          ...t,
          [e.type]: { ...r }
        };
    }
  }
  mapArrayTypeChildrenToProps(e, t) {
    let r = { ...t };
    return Object.keys(e).forEach((n) => {
      r = {
        ...r,
        [n]: e[n]
      };
    }), r;
  }
  warnOnInvalidChildren(e, t) {
    return Yo(
      qo.some((r) => e.type === r),
      typeof e.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : `Only elements types ${qo.join(
        ", "
      )} are allowed. Helmet does not support rendering <${e.type}> elements. Refer to our API for more information.`
    ), Yo(
      !t || typeof t == "string" || Array.isArray(t) && !t.some((r) => typeof r != "string"),
      `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
    ), !0;
  }
  mapChildrenToProps(e, t) {
    let r = {};
    return be.Children.forEach(e, (n) => {
      if (!n || !n.props)
        return;
      const { children: o, ...i } = n.props, s = Object.keys(i).reduce((l, d) => (l[ea[d] || d] = i[d], l), {});
      let { type: c } = n;
      switch (typeof c == "symbol" ? c = c.toString() : this.warnOnInvalidChildren(n, o), c) {
        case "Symbol(react.fragment)":
          t = this.mapChildrenToProps(o, t);
          break;
        case "link":
        case "meta":
        case "noscript":
        case "script":
        case "style":
          r = this.flattenArrayTypeChildren(
            n,
            r,
            s,
            o
          );
          break;
        default:
          t = this.mapObjectTypeChildren(n, t, s, o);
          break;
      }
    }), this.mapArrayTypeChildrenToProps(r, t);
  }
  render() {
    const { children: e, ...t } = this.props;
    let r = { ...t }, { helmetData: n } = t;
    if (e && (r = this.mapChildrenToProps(e, r)), n && !(n instanceof vn)) {
      const o = n;
      n = new vn(o.context, !0), delete r.helmetData;
    }
    return Sn ? /* @__PURE__ */ be.createElement(Jd, { ...r }) : n ? /* @__PURE__ */ be.createElement(Qo, { ...r, context: n.value }) : /* @__PURE__ */ be.createElement(oa.Consumer, null, (o) => /* @__PURE__ */ be.createElement(Qo, { ...r, context: o }));
  }
}, Te(an, "defaultProps", {
  defer: !0,
  encodeSpecialCharacters: !0,
  prioritizeSeoTags: !1
}), an);
const ia = ({
  title: e = "AI4U - Inteligencia Artificial para tu Negocio",
  description: t = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
  keywords: r = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
  canonical: n,
  ogImage: o = "/assets/images/ai4u-logo.png",
  ogType: i = "website",
  structuredData: s,
  noIndex: c = !1,
  noFollow: l = !1
}) => {
  const d = e.includes("AI4U") ? e : `${e} | AI4U`, f = n || window.location.href;
  return /* @__PURE__ */ m(Zd, { children: [
    /* @__PURE__ */ a("title", { children: d }),
    /* @__PURE__ */ a("meta", { name: "description", content: t }),
    /* @__PURE__ */ a("meta", { name: "keywords", content: r }),
    /* @__PURE__ */ a("meta", { name: "robots", content: c || l ? `${c ? "noindex" : "index"},${l ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    /* @__PURE__ */ a("link", { rel: "canonical", href: f }),
    /* @__PURE__ */ a("meta", { property: "og:title", content: d }),
    /* @__PURE__ */ a("meta", { property: "og:description", content: t }),
    /* @__PURE__ */ a("meta", { property: "og:type", content: i }),
    /* @__PURE__ */ a("meta", { property: "og:url", content: f }),
    /* @__PURE__ */ a("meta", { property: "og:image", content: o }),
    /* @__PURE__ */ a("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ a("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ a("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ a("meta", { property: "twitter:title", content: d }),
    /* @__PURE__ */ a("meta", { property: "twitter:description", content: t }),
    /* @__PURE__ */ a("meta", { property: "twitter:image", content: o }),
    /* @__PURE__ */ a("meta", { property: "twitter:site", content: "@ai4u_co" }),
    /* @__PURE__ */ a("meta", { property: "twitter:creator", content: "@ai4u_co" }),
    s && /* @__PURE__ */ a("script", { type: "application/ld+json", children: JSON.stringify(s) })
  ] });
}, mp = ({
  src: e,
  alt: t,
  width: r,
  height: n,
  sx: o,
  priority: i = !1,
  fallback: s
}) => {
  const [c, l] = G(!1), [d, f] = G(!1), [g, b] = G(e), p = re(), x = () => {
    const _ = document.createElement("canvas");
    return _.width = 1, _.height = 1, _.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, y = (_) => _.includes("/assets/images/") ? _.replace(/\.(jpg|jpeg|png)$/i, ".webp") : _;
  me(() => {
    x() && e.includes("/assets/images/") ? b(y(e)) : b(e);
  }, [e]);
  const w = () => {
    l(!0), f(!1);
  }, C = () => {
    g !== e && !d ? (b(e), f(!0)) : s && (b(s), f(!0));
  };
  return /* @__PURE__ */ m(u, { sx: { position: "relative", width: r, height: n }, children: [
    !c && /* @__PURE__ */ a(
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
    /* @__PURE__ */ a(
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
        onLoad: w,
        onError: C,
        loading: i ? "eager" : "lazy"
      }
    )
  ] });
}, gp = ({
  imageName: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: i,
  skeletonWidth: s,
  priority: c = !1,
  size: l = "original",
  format: d = "webp",
  fallback: f,
  preload: g = !1,
  showOptimizationInfo: b = !1,
  className: p
}) => {
  const x = we(), {
    src: y,
    isLoaded: w,
    error: C,
    isLoading: _
  } = gd(e, {
    priority: c,
    size: l,
    format: d,
    fallback: f,
    preload: g
  }), $ = {
    bgcolor: x.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ m(
    u,
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
        _ && /* @__PURE__ */ a(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: i || n,
            sx: $
          }
        ),
        !C && /* @__PURE__ */ a(
          u,
          {
            component: "img",
            src: y,
            alt: t,
            loading: c ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: w ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: w ? "block" : "none",
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
              bgcolor: x.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: x.palette.text.secondary,
              fontSize: "0.875rem",
              flexDirection: "column",
              gap: 1
            },
            children: [
              /* @__PURE__ */ a(u, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ a(u, { component: "span", children: "Error al cargar imagen" }),
              b && /* @__PURE__ */ a(u, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: e })
            ]
          }
        ),
        b && !1
      ]
    }
  );
}, yp = ({
  criticalImages: e,
  importantImages: t,
  backgroundImages: r,
  onCriticalLoaded: n,
  onImportantLoaded: o,
  onAllLoaded: i,
  showProgress: s = !1
}) => {
  const { setCriticalImagesLoaded: c } = Ji(), [l, d] = G("critical"), f = en(e), g = en(t), b = en(r);
  me(() => {
    f.isComplete && (c(!0), n == null || n(), d("important"));
  }, [f.isComplete, c, n]), me(() => {
    l === "important" && g.isComplete && (o == null || o(), d("background"));
  }, [l, g.isComplete, o]), me(() => {
    l === "background" && b.isComplete && (i == null || i(), d("complete"));
  }, [l, b.isComplete, i]);
  const p = e.length + t.length + r.length, x = f.loadedImages.length + g.loadedImages.length + b.loadedImages.length, y = p > 0 ? x / p * 100 : 0;
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
    /* @__PURE__ */ a("div", { style: { fontSize: "1.5rem", marginBottom: "2rem" }, children: "Cargando imágenes..." }),
    /* @__PURE__ */ a("div", { style: { width: "300px", marginBottom: "1rem" }, children: /* @__PURE__ */ a("div", { style: {
      width: "100%",
      height: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "10px",
      overflow: "hidden"
    }, children: /* @__PURE__ */ a("div", { style: {
      width: `${y}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ m("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      l === "critical" ? "Críticas" : l === "important" ? "Importantes" : l === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ m("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      x,
      " / ",
      p,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ m("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ m("div", { children: [
        "Críticas: ",
        f.loadedImages.length,
        "/",
        e.length
      ] }),
      /* @__PURE__ */ m("div", { children: [
        "Importantes: ",
        g.loadedImages.length,
        "/",
        t.length
      ] }),
      /* @__PURE__ */ m("div", { children: [
        "Fondo: ",
        b.loadedImages.length,
        "/",
        r.length
      ] })
    ] })
  ] }) : null;
}, Bt = (e) => {
  const {
    to: t,
    variant: r = "subtle",
    trackingLabel: n,
    children: o,
    className: i,
    ariaLabel: s
  } = e, c = re();
  return /* @__PURE__ */ a(
    ci,
    {
      component: wt,
      to: t,
      onClick: () => {
        n && Hn.trackEvent({
          action: "internal_link_click",
          category: "navigation",
          label: n,
          custom_parameters: {
            from_page: window.location.pathname,
            to_page: t,
            link_variant: r
          }
        });
      },
      className: i,
      "aria-label": s,
      sx: (() => {
        switch (r) {
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
      children: o
    }
  );
}, eu = (e) => {
  const {
    variant: t = "separator",
    size: r = "small",
    className: n
  } = e, o = re(), i = () => {
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
}, bp = ({
  serviceId: e,
  serviceColor: t,
  size: r = "medium",
  className: n,
  customThumbnail: o
}) => {
  const i = re(), c = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[r], l = t || i.palette.accent, f = ((g) => {
    const b = g.split("").reduce((x, y) => x + y.charCodeAt(0), 0), p = [
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
    return p[b % p.length];
  })(e);
  return o ? /* @__PURE__ */ m(
    u,
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
              background: `linear-gradient(135deg, ${l}10 0%, transparent 100%)`,
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
              /* @__PURE__ */ a("defs", { children: /* @__PURE__ */ m("linearGradient", { id: `gradient-${e}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ a("stop", { offset: "0%", stopColor: `${l}20` }),
                /* @__PURE__ */ a("stop", { offset: "100%", stopColor: `${l}10` })
              ] }) }),
              /* @__PURE__ */ a("rect", { width: "100%", height: "100%", fill: `url(#gradient-${e})` }),
              /* @__PURE__ */ a("g", { dangerouslySetInnerHTML: { __html: f } }),
              /* @__PURE__ */ a(
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
}, xp = ({
  children: e,
  numberVariant: t = "primary",
  sx: r,
  ...n
}) => /* @__PURE__ */ a(
  u,
  {
    ...n,
    sx: {
      ...te.display.number,
      display: "inline-block",
      ...t === "outline" && {
        color: "transparent",
        WebkitTextStroke: (o) => `2px ${o.palette.mode === "light" ? "#000" : "#fff"}`
      },
      ...r
    },
    children: e
  }
), tu = ha`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`, ru = ({
  status: e,
  size: t = 8,
  pulse: r,
  label: n,
  className: o
}) => {
  const i = v.telemetry[e], c = /* @__PURE__ */ a(
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
        animation: r ?? (e === "online" || e === "starting") ? `${tu} 2s ease-out infinite` : "none"
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
        c,
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
  ) : c;
}, nu = {
  "file-scan": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ a("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ a("circle", { cx: "11", cy: "15", r: "2" }),
    /* @__PURE__ */ a("path", { d: "m13.5 17.5 1.5 1.5" })
  ] }),
  package: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "m7.5 4.27 9 5.15" }),
    /* @__PURE__ */ a("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
    /* @__PURE__ */ a("path", { d: "m3.3 7 8.7 5 8.7-5" }),
    /* @__PURE__ */ a("path", { d: "M12 22V12" })
  ] }),
  grid: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ a("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ a("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ a("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  tag: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
    /* @__PURE__ */ a("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
  ] }),
  "clipboard-list": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
    /* @__PURE__ */ a("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ a("path", { d: "M12 11h4" }),
    /* @__PURE__ */ a("path", { d: "M12 16h4" }),
    /* @__PURE__ */ a("path", { d: "M8 11h.01" }),
    /* @__PURE__ */ a("path", { d: "M8 16h.01" })
  ] }),
  landmark: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("line", { x1: "3", y1: "22", x2: "21", y2: "22" }),
    /* @__PURE__ */ a("line", { x1: "6", y1: "18", x2: "6", y2: "11" }),
    /* @__PURE__ */ a("line", { x1: "10", y1: "18", x2: "10", y2: "11" }),
    /* @__PURE__ */ a("line", { x1: "14", y1: "18", x2: "14", y2: "11" }),
    /* @__PURE__ */ a("line", { x1: "18", y1: "18", x2: "18", y2: "11" }),
    /* @__PURE__ */ a("polygon", { points: "12 2 20 7 4 7" })
  ] }),
  "refresh-cw": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ a("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ a("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ a("path", { d: "M8 16H3v5" })
  ] }),
  diamond: /* @__PURE__ */ a("path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }),
  "trending-up": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    /* @__PURE__ */ a("polyline", { points: "16 7 22 7 22 13" })
  ] }),
  users: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ a("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ a("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ a("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  "rotate-cw": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M21 2v6h-6" }),
    /* @__PURE__ */ a("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" })
  ] }),
  power: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M12 2v6" }),
    /* @__PURE__ */ a("path", { d: "M18.4 5.6a9 9 0 1 1-12.77.04" })
  ] }),
  terminal: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  "external-link": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ a("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ a("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  "file-plus": /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ a("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ a("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
    /* @__PURE__ */ a("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
  ] }),
  calendar: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ a("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ a("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ a("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  logout: /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ a("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ a("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] })
}, ou = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}, ei = ({
  id: e,
  size: t = "sm",
  color: r = "currentColor",
  strokeWidth: n = 1.6
}) => {
  const o = typeof t == "number" ? t : ou[t];
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
      children: nu[e] ?? null
    }
  );
}, iu = Zc;
function au(e) {
  return zn("MuiSvgIcon", e);
}
$c("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const su = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${Ot(t)}`, `fontSize${Ot(r)}`]
  };
  return fl(o, au, n);
}, cu = Xl("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Ot(r.color)}`], t[`fontSize${Ot(r.fontSize)}`]];
  }
})(iu(({
  theme: e
}) => {
  var t, r, n, o, i, s, c, l, d, f, g, b, p, x;
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
          fontSize: ((s = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : s.call(i, 20)) || "1.25rem"
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
          fontSize: ((f = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : f.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, y]) => y && y.main).map(([y]) => {
        var w, C;
        return {
          props: {
            color: y
          },
          style: {
            color: (C = (w = (e.vars ?? e).palette) == null ? void 0 : w[y]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (b = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : b.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (x = (p = (e.vars ?? e).palette) == null ? void 0 : p.action) == null ? void 0 : x.disabled
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
})), yr = /* @__PURE__ */ j.forwardRef(function(t, r) {
  const n = qi({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: s = "inherit",
    component: c = "svg",
    fontSize: l = "medium",
    htmlColor: d,
    inheritViewBox: f = !1,
    titleAccess: g,
    viewBox: b = "0 0 24 24",
    ...p
  } = n, x = /* @__PURE__ */ j.isValidElement(o) && o.type === "svg", y = {
    ...n,
    color: s,
    component: c,
    fontSize: l,
    instanceFontSize: t.fontSize,
    inheritViewBox: f,
    viewBox: b,
    hasSvgAsChild: x
  }, w = {};
  f || (w.viewBox = b);
  const C = su(y);
  return /* @__PURE__ */ m(cu, {
    as: c,
    className: Ti(C.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: r,
    ...w,
    ...p,
    ...x && o.props,
    ownerState: y,
    children: [x ? o.props.children : o, g ? /* @__PURE__ */ a("title", {
      children: g
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (yr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: E.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: E.object,
  /**
   * @ignore
   */
  className: E.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: E.oneOfType([E.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), E.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: E.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: E.oneOfType([E.oneOf(["inherit", "large", "medium", "small"]), E.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: E.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: E.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: E.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: E.oneOfType([E.arrayOf(E.oneOfType([E.func, E.object, E.bool])), E.func, E.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: E.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: E.string
});
yr.muiName = "SvgIcon";
function Me(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ a(yr, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = yr.muiName, /* @__PURE__ */ j.memo(/* @__PURE__ */ j.forwardRef(r));
}
const aa = Me(/* @__PURE__ */ a("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), lu = Me(/* @__PURE__ */ a("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), jt = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
ue.log("VITE_MAKE_WEBHOOK_URL:", void 0);
ue.log("MAKE_API_CONFIG.webhookUrl:", jt.webhookUrl);
const du = async (e, t) => {
  const r = t || `session_${Date.now()}`;
  ue.log("Enviando request a Make.com:", {
    message: e,
    sessionId: r,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: jt.webhookUrl
  });
  try {
    const n = await fetch(jt.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...jt.apiToken && {
          Authorization: `Bearer ${jt.apiToken}`
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
        const c = i.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");
        try {
          o = JSON.parse(c), ue.log("Respuesta limpiada y parseada:", o);
        } catch (l) {
          ue.error("Error final parseando JSON:", l), o = { message: i };
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
}, uu = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, ti = (e) => {
  const t = e.toLowerCase();
  return t.includes("hola") || t.includes("buenos días") || t.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : t.includes("servicios") || t.includes("qué hacen") || t.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : t.includes("precio") || t.includes("costo") || t.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : t.includes("contacto") || t.includes("teléfono") || t.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : t.includes("diagnóstico") || t.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, vp = () => {
  const e = we(), t = lr(e.breakpoints.down("sm")), [r, n] = G(!1), [o] = G(() => uu()), [i, s] = G([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    }
  ]), [c, l] = G(""), [d, f] = G(!1), [g, b] = G(""), p = xr(null), x = dt(() => n(!0), []), y = dt(() => n(!1), []), w = dt(() => {
    var $;
    ($ = p.current) == null || $.scrollIntoView({ behavior: "smooth" });
  }, []);
  me(() => {
    w();
  }, [i, w]);
  const C = dt(async () => {
    var k;
    const $ = c.trim();
    if (!$ || d || $ === g) return;
    if ($.length > 500) {
      const A = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((Y) => [...Y, A]);
      return;
    }
    const R = {
      id: Date.now().toString(),
      text: c.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    };
    s((A) => [...A, R]), b($), l(""), f(!0);
    try {
      const A = await du($, o);
      let Y;
      A.success && ((k = A.data) != null && k.message) ? Y = A.data.message : A.success && A.data && typeof A.data == "string" ? Y = A.data : (A.error, Y = ti($));
      const D = {
        id: (Date.now() + 1).toString(),
        text: Y,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((F) => [...F, D]);
    } catch (A) {
      console.error("Error sending message:", A);
      const D = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((F) => [...F, D]);
    } finally {
      f(!1);
    }
  }, [c, d, o, g]), _ = dt(($) => {
    $.key === "Enter" && !$.shiftKey && !d && ($.preventDefault(), C());
  }, [C, d]);
  return /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a(
      ma,
      {
        color: "primary",
        "aria-label": "chat",
        onClick: x,
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
    /* @__PURE__ */ m(
      ga,
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
            ya,
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
                /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
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
                  /* @__PURE__ */ m(u, { children: [
                    /* @__PURE__ */ a(z, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ a(z, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ a(We, { onClick: y, size: "small", children: /* @__PURE__ */ a(aa, {}) })
              ]
            }
          ),
          /* @__PURE__ */ m(
            ba,
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
                      i.map(($) => /* @__PURE__ */ a(
                        u,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: $.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ m(
                            Vt,
                            {
                              sx: {
                                p: 2,
                                maxWidth: "80%",
                                backgroundColor: $.isUser ? e.palette.primary.main : Ce(e.palette.background.paper, 0.8),
                                color: $.isUser ? e.palette.primary.contrastText : e.palette.text.primary,
                                borderRadius: 2,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                              },
                              children: [
                                /* @__PURE__ */ a(z, { variant: "body2", children: $.text }),
                                /* @__PURE__ */ a(
                                  z,
                                  {
                                    variant: "caption",
                                    sx: {
                                      opacity: 0.7,
                                      display: "block",
                                      mt: 0.5
                                    },
                                    children: $.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        },
                        $.id
                      )),
                      d && /* @__PURE__ */ a(u, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ a(
                        Vt,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: Ce(e.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ a(xa, { size: 16 }),
                            /* @__PURE__ */ a(z, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ a("div", { ref: p })
                    ]
                  }
                ),
                /* @__PURE__ */ m(
                  u,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${Ce(e.palette.divider, 0.1)}`
                    },
                    children: [
                      c.length > 400 && /* @__PURE__ */ m(
                        z,
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
                      /* @__PURE__ */ m(
                        u,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ a(
                              li,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: d ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: c,
                                onChange: ($) => l($.target.value),
                                onKeyPress: _,
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
                              We,
                              {
                                onClick: C,
                                disabled: !c.trim() || d,
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
                                children: /* @__PURE__ */ a(lu, {})
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
}, pu = Me(/* @__PURE__ */ a("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work"), Sp = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n = "Nuestros Servicios",
  className: o,
  sx: i
}) => {
  const s = Tn();
  return /* @__PURE__ */ a(
    En,
    {
      variant: e,
      size: t,
      onClick: () => {
        s("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: r ? /* @__PURE__ */ a(pu, {}) : void 0,
      className: o,
      sx: i,
      children: n
    }
  );
}, fu = Ae(Cn, {
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
}), hu = Ae(u)(({ theme: e }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...te.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), Nr = ({
  children: e,
  variant: t = "default",
  elevation: r = 0,
  showContent: n = !0,
  label: o,
  sx: i,
  ...s
}) => {
  const c = re();
  return /* @__PURE__ */ m(
    fu,
    {
      cardVariant: t,
      elevation: r,
      forceMode: c.effectiveMode,
      sx: i,
      ...s,
      children: [
        o && /* @__PURE__ */ m(hu, { children: [
          '"',
          o,
          '"'
        ] }),
        n && /* @__PURE__ */ a(Yt, { sx: {
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
}, wp = ({
  title: e,
  subtitle: t = "",
  transactions: r,
  onShowMore: n = () => {
  },
  variant: o = "elevated"
}) => {
  const i = re(), s = () => {
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
  }, c = (f) => ({
    Shopping: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ a(ja, {})
    },
    Fitness: {
      bg: i.palette.success + "20",
      text: i.palette.success,
      icon: /* @__PURE__ */ a(Wa, {})
    },
    Education: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ a(La, {})
    },
    Investments: {
      bg: i.palette.success + "20",
      text: i.palette.success,
      icon: /* @__PURE__ */ a(Na, {})
    },
    Health: {
      bg: i.palette.accent + "20",
      text: i.palette.accent,
      icon: /* @__PURE__ */ a(Fa, {})
    }
  })[f] || {
    bg: i.helpers.background.secondary,
    text: i.helpers.text.secondary,
    icon: /* @__PURE__ */ a(Da, {})
  }, l = (f) => {
    switch (f) {
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
    Nr,
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
            /* @__PURE__ */ a(to, { sx: {
              width: 48,
              height: 48,
              background: d.surface.background,
              border: d.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ a(za, { sx: {
              color: i.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ m(u, { children: [
              /* @__PURE__ */ a(_e, { sx: {
                color: i.helpers.text.primary,
                mb: 0.5
              }, children: e }),
              t && /* @__PURE__ */ a(de, { sx: {
                color: i.helpers.text.secondary
              }, children: t })
            ] })
          ] }),
          /* @__PURE__ */ a(
            We,
            {
              size: "small",
              sx: {
                color: i.helpers.text.secondary,
                "&:hover": {
                  background: i.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ a(no, {})
            }
          )
        ] }),
        /* @__PURE__ */ a(u, { sx: { mb: 3 }, children: r.map((f) => {
          const g = c(f.category);
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
                  background: i.helpers.state.hover,
                  transform: "translateX(4px)"
                }
              },
              children: [
                /* @__PURE__ */ a(to, { sx: {
                  width: 48,
                  height: 48,
                  background: g.bg,
                  color: g.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: f.icon || g.icon }),
                /* @__PURE__ */ m(u, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ m(u, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ a(_e, { sx: {
                      fontWeight: 400,
                      color: i.helpers.text.primary
                    }, children: f.merchant }),
                    /* @__PURE__ */ m(Kt, { sx: {
                      fontWeight: 400,
                      color: i.helpers.text.primary
                    }, children: [
                      "$",
                      f.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ m(u, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ a(
                      It,
                      {
                        label: f.category,
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
                    /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ a(de, { sx: {
                        color: i.helpers.text.secondary
                      }, children: f.time }),
                      f.status && /* @__PURE__ */ a(u, { sx: {
                        width: 8,
                        height: 8,
                        backgroundColor: l(f.status),
                        borderRadius: "50%"
                      } })
                    ] })
                  ] })
                ] })
              ]
            },
            f.id
          );
        }) }),
        n && /* @__PURE__ */ m(ve, { children: [
          /* @__PURE__ */ a(br, { sx: {
            mb: 3,
            borderColor: i.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ a(
              We,
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
                children: /* @__PURE__ */ a(no, {})
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
}, mu = Ae(z)(({ stepSize: e, theme: t }) => ({
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
})), Cp = ({
  number: e,
  title: t,
  description: r,
  color: n = "primary.main",
  size: o = "medium",
  sx: i,
  ...s
}) => {
  const c = re(), l = () => {
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
  }, { numberSize: d, titleSize: f, descriptionSize: g } = l();
  return /* @__PURE__ */ m(
    u,
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
              background: c.contrast.background,
              border: `2px solid ${c.contrast.text.secondary}`
            },
            children: /* @__PURE__ */ a(
              mu,
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
        /* @__PURE__ */ m(u, { sx: { flex: 1, pt: o === "large" ? 1.5 : o === "medium" ? 1 : 0.5 }, children: [
          /* @__PURE__ */ a(
            $e,
            {
              sx: {
                fontWeight: 400,
                fontSize: f,
                mb: 1,
                color: c.contrast.text.primary,
                lineHeight: 1.3,
                letterSpacing: "-0.01em"
              },
              children: t
            }
          ),
          /* @__PURE__ */ a(
            $e,
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
}, gu = Ae(u)(({ theme: e }) => {
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
}), kp = ({
  title: e,
  subtitle: t = "",
  categories: r,
  totalAmount: n = 0,
  onAddCategory: o = () => {
  },
  variant: i = "industrial"
}) => {
  const s = re(), c = s.effectiveMode === "light";
  return /* @__PURE__ */ m(
    Nr,
    {
      variant: i,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ a(u, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${c ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: c ? "#000" : "#fff",
            color: c ? "#fff" : "#000"
          }, children: /* @__PURE__ */ a(Ba, {}) }),
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ a(z, { sx: { ...te.display.medium, fontSize: "1.5rem", mb: 0 }, children: e }),
            t && /* @__PURE__ */ m(z, { sx: { ...te.label.secondary }, children: [
              "// ",
              t
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ m(u, { sx: {
          p: 3,
          border: `4px solid ${c ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ a(z, { sx: { ...te.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ m(Kt, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              n == null ? void 0 : n.toLocaleString()
            ] }),
            /* @__PURE__ */ a(
              We,
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
                children: /* @__PURE__ */ a(Va, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ a(z, { sx: { ...te.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: r.map((l, d) => /* @__PURE__ */ m(gu, { children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(z, { sx: { ...te.label.secondary, opacity: 0.5 }, children: String(d + 1).padStart(2, "0") }),
            /* @__PURE__ */ a(z, { sx: { fontWeight: 700, textTransform: "uppercase" }, children: l.name })
          ] }),
          /* @__PURE__ */ m(z, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            l.amount.toLocaleString()
          ] })
        ] }, d)) }),
        /* @__PURE__ */ m(u, { sx: {
          pt: 2,
          borderTop: `1px dashed ${c ? "#000" : "#fff"}`,
          opacity: 0.5,
          display: "flex",
          justifyContent: "space-between"
        }, children: [
          /* @__PURE__ */ a(z, { sx: { ...te.label.secondary }, children: "SYSTEM_VERSION_2.0.4" }),
          /* @__PURE__ */ a(z, { sx: { ...te.label.secondary }, children: (/* @__PURE__ */ new Date()).toLocaleDateString() })
        ] })
      ]
    }
  );
}, yu = Ae(z, {
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
})), bu = Ae(u)(({ theme: e }) => ({
  ...te.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), Tp = (e) => {
  const {
    title: t,
    value: r,
    subtitle: n,
    iconType: o = "dot",
    trend: i = "neutral",
    size: s = "normal",
    onClick: c,
    label: l = "METRIC_SYSTEM"
  } = e, d = re();
  d.effectiveMode;
  const f = () => {
    switch (i) {
      case "up":
        return d.palette.accentColors.mint;
      case "down":
        return d.palette.accentColors.orange;
      default:
        return "inherit";
    }
  };
  return /* @__PURE__ */ m(
    Cn,
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
        bgcolor: d.helpers.background.primary,
        color: d.helpers.text.primary,
        borderRadius: 0,
        border: `2px solid ${d.helpers.text.primary}`,
        // Radical Industrial Border
        transition: "all 0.15s steps(4, end)",
        "&:hover": {
          transform: c ? "translate(-4px, -4px)" : "none",
          boxShadow: c ? `8px 8px 0px 0px ${d.helpers.text.primary}` : "none",
          "& .metric-bg": { opacity: 0.1 }
        }
      },
      children: [
        /* @__PURE__ */ m(bu, { children: [
          '"',
          l,
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
        /* @__PURE__ */ a(u, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ a(yu, { metricSize: s, children: typeof r == "number" ? r.toLocaleString() : r }) }),
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mb: 1,
          width: "100%",
          position: "relative",
          zIndex: 1
        }, children: [
          /* @__PURE__ */ a(
            z,
            {
              sx: {
                ...te.label.main,
                color: "inherit"
              },
              children: t
            }
          ),
          i !== "neutral" && /* @__PURE__ */ a(u, { sx: { color: f(), display: "flex" }, children: /* @__PURE__ */ a(
            mr,
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
          z,
          {
            sx: {
              ...te.body.small,
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
              bgcolor: i !== "neutral" ? f() : "transparent",
              opacity: 0.8
            }
          }
        )
      ]
    }
  );
}, xu = Me(/* @__PURE__ */ a("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), Fe = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, vu = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
v.accent, v.gray[600], v.success, v.warning, v.error, v.info;
Wr.sm, Wr.md, Wr.lg;
const Su = `https://${vu.CONTACT.CALENDLY}`, Yn = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n,
  className: o,
  sx: i
}) => /* @__PURE__ */ a(
  En,
  {
    variant: e,
    size: t,
    onClick: () => {
      Hn.trackConsultationRequest("calendly", "diagnostic"), window.open(Su, "_blank", "noopener,noreferrer");
    },
    startIcon: r ? /* @__PURE__ */ a(xu, {}) : void 0,
    className: o,
    sx: i,
    children: n || "Diagnóstico gratis"
  }
), Ep = () => ({
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
}), Ip = () => ({
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
}), wu = (e) => ({
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
}), Ap = () => ({
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
}), $p = (e) => ({
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
}), Cu = (e) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: e.map((t, r) => ({
    "@type": "ListItem",
    position: r + 1,
    name: t.name,
    item: t.url
  }))
}), Op = (e) => {
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
}, _p = (e = "") => `https://www.ai4u.com.co${e}`, Rp = (e, t = 160) => e.length <= t ? e : e.substring(0, t - 3) + "...", Mp = (e, t = []) => [...e, ...t].join(", "), Pp = ({
  service: e,
  showPrice: t = !0,
  compact: r = !1,
  onClick: n
}) => {
  const o = re(), i = wu(e), c = ((l) => {
    const d = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return l.filter((f) => f.startsWith("eje:")).map((f) => d[f] || f.replace("eje:", ""));
  })(e.tags);
  return /* @__PURE__ */ m(ve, { children: [
    /* @__PURE__ */ a(
      ia,
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
          /* @__PURE__ */ a(u, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: c.map((l, d) => /* @__PURE__ */ a(
            It,
            {
              label: l,
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
            /* @__PURE__ */ a(
              z,
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
            /* @__PURE__ */ a($e, { sx: {
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
          /* @__PURE__ */ a(u, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${o.contrast.divider}`
          }, children: t && /* @__PURE__ */ m(u, { sx: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1
          }, children: [
            /* @__PURE__ */ a($e, { sx: {
              fontWeight: 400,
              color: o.contrast.text.secondary,
              fontSize: "0.85rem"
            }, children: "Precio:" }),
            /* @__PURE__ */ a(z, { sx: {
              fontWeight: 400,
              color: o.contrast.text.primary,
              fontSize: "1.1rem"
            }, children: e.price })
          ] }) })
        ]
      }
    ) })
  ] });
}, zp = ({
  items: e,
  showHome: t = !0
}) => {
  const r = Tn(), n = t ? [{ name: "Inicio", path: "/" }, ...e] : e, o = Cu(
    n.map((s) => ({
      name: s.name,
      url: `https://ai4u.com.co${s.path}`
    }))
  ), i = (s) => {
    r(s);
  };
  return /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ a(ia, { structuredData: o }),
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
        children: n.map((s, c) => [
          c > 0 && /* @__PURE__ */ a(
            z,
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
          s.current ? /* @__PURE__ */ a(
            z,
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
            ci,
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
class Dp extends qt {
  constructor(r) {
    super(r);
    Te(this, "handleRetry", () => {
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
    this.setState({ errorInfo: n }), md.captureError({
      message: r.message,
      stack: r.stack,
      componentStack: n.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(r, n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ a(Xe, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ m(
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
            va,
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
                /* @__PURE__ */ a(Sa, { children: /* @__PURE__ */ a(pi, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ a($e, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ m(u, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ a(
              Ze,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ a(Ha, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ a(
              Ze,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ a(
              Ze,
              {
                variant: "text",
                onClick: () => window.location.href = "/",
                sx: { minWidth: 120 },
                children: "Ir al Inicio"
              }
            )
          ] }),
          /* @__PURE__ */ a($e, { sx: { color: "text.secondary", fontSize: "0.875rem" }, children: "Si el problema persiste, por favor contacta nuestro soporte técnico." })
        ]
      }
    ) }) : this.props.children;
  }
}
const Fp = (e) => {
  const {
    pages: t,
    title: r,
    variant: n = "vertical",
    className: o
  } = e, i = re(), s = "También podrías estar interesado en:", c = t.slice(0, 3);
  if (c.length === 0) return null;
  const l = () => n === "horizontal" ? /* @__PURE__ */ a(
    he,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: c.map((d, f) => /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ a(
            Bt,
            {
              to: d.to,
              variant: "subtle",
              trackingLabel: d.trackingLabel || `related_${d.to.replace("/", "")}`,
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
        f < c.length - 1 && /* @__PURE__ */ a(eu, { variant: "separator", size: "small" })
      ] }, d.to))
    }
  ) : /* @__PURE__ */ a(he, { spacing: 3, children: c.map((d) => /* @__PURE__ */ m(u, { children: [
    /* @__PURE__ */ a(
      Bt,
      {
        to: d.to,
        variant: "subtle",
        trackingLabel: d.trackingLabel || `related_${d.to.replace("/", "")}`,
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
  ] }, d.to)) });
  return /* @__PURE__ */ m(
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
        l()
      ]
    }
  );
}, Np = (e) => {
  const {
    serviceName: t,
    serviceSlug: r,
    description: n,
    caseStudy: o,
    variant: i = "minimal",
    className: s
  } = e, c = re();
  return i === "minimal" ? /* @__PURE__ */ m(u, { className: s, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ a(
      Bt,
      {
        to: `/servicios#${r}`,
        variant: "inline",
        trackingLabel: `service_cross_link_${r}`,
        ariaLabel: `Conoce más sobre ${t}`,
        children: /* @__PURE__ */ a(de, { sx: { fontWeight: 400 }, children: t })
      }
    ),
    /* @__PURE__ */ a(
      mr,
      {
        type: "circle",
        size: "small",
        color: c.contrast.text.disabled,
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
        backgroundColor: c.contrast.surface,
        border: `1px solid ${c.contrast.divider}`,
        transition: "all 0.3s ease",
        "&:hover": {
          borderColor: c.palette.accent,
          backgroundColor: c.palette.white
        }
      },
      children: /* @__PURE__ */ m(he, { spacing: 2, children: [
        /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ a(
            mr,
            {
              type: "square",
              size: "small",
              color: c.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ a(
            Bt,
            {
              to: `/servicios#${r}`,
              variant: "accent",
              trackingLabel: `service_detailed_${r}`,
              ariaLabel: `Conoce el servicio ${t}`,
              children: /* @__PURE__ */ a(de, { sx: { fontWeight: 400, fontSize: "0.9rem" }, children: t })
            }
          )
        ] }),
        n && /* @__PURE__ */ a(
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
        o && /* @__PURE__ */ m(u, { sx: { pt: 1, borderTop: `1px solid ${c.contrast.divider}` }, children: [
          /* @__PURE__ */ a(
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
          /* @__PURE__ */ a(
            Bt,
            {
              to: `/casos-de-uso#${o.slug}`,
              variant: "subtle",
              trackingLabel: `case_from_service_${r}_to_${o.slug}`,
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
}, Lp = ({
  selectedValue: e,
  onValueChange: t,
  options: r
}) => {
  const n = re();
  return /* @__PURE__ */ m(u, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ a(u, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: n.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ a(he, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: r.map((o, i) => /* @__PURE__ */ a(
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
      i
    )) })
  ] });
}, Wp = ({
  totalCount: e,
  filteredCount: t,
  activeFilters: r
}) => {
  const n = re(), o = r.length > 0, i = t !== e;
  return /* @__PURE__ */ a(u, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ m(he, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ a(
      mr,
      {
        type: "dot",
        size: "small",
        color: n.contrast.text.secondary,
        variant: "minimal"
      }
    ),
    /* @__PURE__ */ m(z, { variant: "body2", sx: {
      color: n.contrast.text.secondary,
      fontSize: "0.875rem"
    }, children: [
      i ? `${t} de ${e}` : `${e}`,
      " servicios",
      o && /* @__PURE__ */ m("span", { style: { color: n.contrast.text.primary }, children: [
        " • ",
        r.join(", ")
      ] })
    ] })
  ] }) });
}, jp = ({
  title: e,
  subtitle: t,
  children: r,
  defaultExpanded: n = !1,
  variant: o = "minimal",
  showIcon: i = !0,
  sx: s = {}
}) => {
  const [c, l] = G(n), d = re(), f = d.effectiveMode === "dark", g = () => {
    l(!c);
  }, p = (() => {
    switch (o) {
      case "card":
        return {
          container: {
            background: f ? d.palette.black : d.palette.white,
            border: `3px solid ${f ? d.palette.white : d.palette.black}`,
            color: f ? d.palette.white : d.palette.black,
            borderRadius: 0,
            p: 4,
            transition: "all 0.1s ease",
            "&:hover": {
              transform: "translate(-4px, -4px)",
              boxShadow: f ? "6px 6px 0px #FFFFFF" : "6px 6px 0px #171717"
            }
          }
        };
      case "bordered":
        return {
          container: {
            borderBottom: `3px solid ${f ? d.palette.white : d.palette.black}`,
            color: f ? d.palette.white : d.palette.black,
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
  return /* @__PURE__ */ m(u, { sx: { ...p.container, ...s }, children: [
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
        onClick: g,
        children: [
          /* @__PURE__ */ m(u, { sx: { flex: 1 }, children: [
            /* @__PURE__ */ a(_e, { sx: {
              color: "inherit",
              fontWeight: 400,
              fontSize: "1.2rem",
              textTransform: "none",
              letterSpacing: "0em"
            }, children: e }),
            t && /* @__PURE__ */ a($e, { sx: {
              color: "inherit",
              opacity: 0.8,
              fontSize: "1rem",
              mt: 1
            }, children: t })
          ] }),
          i && /* @__PURE__ */ a(
            We,
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
              children: /* @__PURE__ */ a(Ua, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ a(wa, { in: c, timeout: 100, children: /* @__PURE__ */ a(u, { sx: {
      pt: 3,
      borderTop: c ? `1px solid ${f ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: r }) })
  ] });
}, Bp = ({
  summary: e,
  details: t,
  showDetails: r = !1,
  onToggle: n,
  variant: o = "inline",
  maxHeight: i = 200
}) => {
  const [s, c] = G(r), l = re(), d = () => {
    const b = !s;
    c(b), n == null || n(b);
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
  return /* @__PURE__ */ m(u, { children: [
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
}, ku = {
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
const Vp = ({
  name: e,
  description: t,
  icon: r,
  accentColor: n,
  status: o,
  openUrl: i,
  isCli: s = !1,
  ctaLabel: c = "Abrir"
}) => {
  const l = re(), d = o === "online", f = o === "checking", g = l.contrast.surface, b = l.contrast.text.primary, p = l.contrast.text.secondary, x = l.contrast.text.disabled, y = l.contrast.border;
  return /* @__PURE__ */ m(
    u,
    {
      sx: {
        backgroundColor: g,
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
        /* @__PURE__ */ a(u, { sx: { height: 3, backgroundColor: n, flexShrink: 0 } }),
        /* @__PURE__ */ m(u, { sx: { flex: 1, display: "flex", flexDirection: "column", p: 2.5, gap: 1.5 }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
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
                  backgroundColor: Nt(n, 0.1),
                  border: `1px solid ${Nt(n, 0.2)}`
                },
                children: /* @__PURE__ */ a(ei, { id: r, size: "md", color: n, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ m(u, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ a(
                u,
                {
                  component: "div",
                  sx: {
                    fontFamily: '"Red Hat Display", sans-serif',
                    fontWeight: 800,
                    fontSize: 15,
                    color: b,
                    lineHeight: 1.2
                  },
                  children: e
                }
              ),
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }, children: [
                /* @__PURE__ */ a(ru, { status: o, size: 6 }),
                /* @__PURE__ */ a(
                  u,
                  {
                    component: "span",
                    sx: {
                      fontSize: 11,
                      color: v.telemetry[o]
                    },
                    children: ku[o]
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
                color: p,
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
              sx: { fontSize: 12, color: x, fontStyle: "italic" },
              children: "Herramienta de línea de comandos — se ejecuta desde el servidor"
            }
          ) : i ? /* @__PURE__ */ m(
            u,
            {
              component: "a",
              href: d ? i : void 0,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: (w) => {
                d || w.preventDefault();
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
                color: d ? v.white : x,
                border: d ? "none" : `1px solid ${y}`,
                cursor: d ? "pointer" : f ? "default" : "not-allowed",
                opacity: f ? 0.6 : 1
              },
              children: [
                /* @__PURE__ */ a(
                  ei,
                  {
                    id: "external-link",
                    size: 14,
                    color: d ? v.white : x,
                    strokeWidth: 2.2
                  }
                ),
                d ? c : f ? "Verificando…" : "No disponible"
              ]
            }
          ) : null })
        ] })
      ]
    }
  );
}, Hp = ({
  items: e,
  activeItem: t,
  onItemClick: r,
  variant: n = "horizontal",
  className: o = ""
}) => {
  const i = re();
  we();
  const [s, c] = G(null), l = (g) => {
    r && r(g), g.onClick && g.onClick();
  }, d = (g) => {
    const b = t === g.id, p = {
      fontWeight: 400,
      textTransform: "none",
      transition: "all 0.3s ease"
    };
    switch (n) {
      case "tabs":
        return {
          ...p,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...b ? {
            background: i.palette.black,
            color: i.palette.white,
            boxShadow: rt.ai4u.button
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
          ...p,
          width: "100%",
          justifyContent: "flex-start",
          py: 1.5,
          px: 2,
          borderRadius: 1,
          fontSize: "0.875rem",
          ...b ? {
            background: i.palette.black,
            color: i.palette.white,
            borderLeftWidth: 2,
            borderLeftStyle: "solid",
            borderLeftColor: i.palette.black,
            boxShadow: rt.ai4u.button
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
          ...p,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...b ? {
            background: i.palette.black,
            color: i.palette.white,
            boxShadow: rt.ai4u.button
          } : {
            color: i.contrast.text.secondary,
            "&:hover": {
              color: i.contrast.text.primary,
              background: i.helpers.state.hover
            }
          }
        };
    }
  }, f = () => {
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
  return n === "tabs" ? /* @__PURE__ */ a(u, { sx: f(), className: o, children: e.map((g) => /* @__PURE__ */ a(
    Ze,
    {
      onClick: () => l(g),
      sx: d(g),
      onMouseEnter: () => c(g.id),
      onMouseLeave: () => c(null),
      children: g.label
    },
    g.id
  )) }) : /* @__PURE__ */ a(u, { sx: f(), className: o, children: e.map((g) => /* @__PURE__ */ a(
    Ze,
    {
      onClick: () => l(g),
      sx: d(g),
      onMouseEnter: () => c(g.id),
      onMouseLeave: () => c(null),
      children: g.label
    },
    g.id
  )) });
}, Tu = Me(/* @__PURE__ */ a("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), Eu = Me(/* @__PURE__ */ a("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), Iu = Me(/* @__PURE__ */ a("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), Au = Me(/* @__PURE__ */ a("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), $u = Me(/* @__PURE__ */ a("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), Ou = Me(/* @__PURE__ */ a("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X"), _u = Me(/* @__PURE__ */ a("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp"), Ru = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  we();
  const t = re(), r = [
    { icon: /* @__PURE__ */ a(Tu, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ a(Eu, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ a(Iu, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ a(Ou, {}), url: "https://x.com/_ai4u_" }
  ], n = [
    { name: "inicio", path: Fe.HOME },
    { name: "servicios", path: Fe.SERVICES },
    { name: "portafolio", path: Fe.PORTFOLIO },
    { name: "porqueAi4u", path: Fe.WHY_AI4U },
    { name: "designSystem", path: Fe.DESIGN_SYSTEM }
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
      children: /* @__PURE__ */ m(Xe, { maxWidth: "lg", children: [
        /* @__PURE__ */ m(Oe, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ m(Oe, { size: { xs: 12, md: 4 }, children: [
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
            /* @__PURE__ */ a(z, { variant: "body2", sx: { color: "inherit", opacity: 0.8 }, children: "Inteligencia para tu negocio." })
          ] }),
          /* @__PURE__ */ m(Oe, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ a(z, { sx: { ...te.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ a(u, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ a(u, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: n.map((o) => /* @__PURE__ */ a(u, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ a(
              u,
              {
                component: wt,
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
          /* @__PURE__ */ m(Oe, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ a(z, { sx: { ...te.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ m(he, { spacing: 2.5, children: [
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ a(Au, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ a(z, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ a(_u, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ a(z, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ a($u, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ a(z, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ a(br, { sx: { my: 6, borderColor: t.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ m(he, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ a(de, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${e} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ m(u, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
              /* @__PURE__ */ m(
                z,
                {
                  sx: {
                    ...te.ui.code,
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
                z,
                {
                  sx: {
                    ...te.ui.code,
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
            We,
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
}, Up = ({
  customTitle: e = "Tu tiempo es oro",
  customSubtitle: t = "IA que potencia tu productividad.",
  primaryButtonText: r = "Recupera tu tiempo",
  secondaryButtonText: n = "Calcula tu ROI",
  sx: o
}) => {
  const i = we(), s = re();
  lr(i.breakpoints.down("md"));
  const [c, l] = G(0), d = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], f = "IA con enfoque humano";
  return me(() => {
    const g = setInterval(() => {
      l((b) => b === 2 ? 0 : b + 1);
    }, 5e3);
    return () => clearInterval(g);
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
            children: d.map((g, b) => /* @__PURE__ */ a(u, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ a(
              Un,
              {
                src: g,
                alt: `Background ${b + 1}`,
                priority: b === 0,
                sx: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: b === c ? 0.5 : 0,
                  transition: "opacity 1.5s ease-in-out, transform 10s ease-out",
                  filter: "grayscale(100%) contrast(1.2)",
                  transform: b === c ? "scale(1.1)" : "scale(1)"
                }
              }
            ) }, b))
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
        }, children: Array.from({ length: 40 }).map((g, b) => /* @__PURE__ */ a(u, { children: Math.random().toString(2).slice(2) }, b)) }),
        /* @__PURE__ */ m(u, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ a(Ke, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ m(Ke, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ a(
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
                    /* @__PURE__ */ a(
                      u,
                      {
                        sx: {
                          border: `1px solid ${s.contrast.text.primary}`,
                          color: s.contrast.text.primary,
                          px: 2,
                          py: 0.5,
                          mb: 4,
                          ...te.ui.code,
                          fontSize: "0.9rem",
                          letterSpacing: "0.1em"
                        },
                        children: "strategySystemV2.0"
                      }
                    ),
                    /* @__PURE__ */ a(
                      ts,
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
                      In,
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
                        /* @__PURE__ */ a(
                          Yn,
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
                        }, children: /* @__PURE__ */ m(
                          $e,
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
                              f.toLowerCase().replace(/\s+/g, "")
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
}, Gp = ({
  data: e,
  date: t,
  time: r,
  variant: n = "elevated",
  onRefresh: o = void 0
}) => {
  const i = re(), s = () => {
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
  }, c = (d) => {
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
  }, l = s();
  return /* @__PURE__ */ a(
    Nr,
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
      children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(u, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: l.surface.background,
              border: l.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ a(Ga, { sx: {
              color: i.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ m(u, { children: [
              /* @__PURE__ */ a(de, { sx: {
                color: i.helpers.text.secondary,
                mb: 0.5
              }, children: t }),
              /* @__PURE__ */ a(Kt, { sx: {
                color: i.helpers.text.primary,
                fontWeight: 400
              }, children: r })
            ] })
          ] }),
          o && /* @__PURE__ */ a(
            We,
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
              children: /* @__PURE__ */ a(ui, {})
            }
          )
        ] }),
        e.quality && /* @__PURE__ */ a(u, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ m(u, { sx: {
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
            It,
            {
              label: e.quality.toUpperCase(),
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
        /* @__PURE__ */ m(u, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ m(u, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2
          }, children: [
            /* @__PURE__ */ a(_e, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: "Duración del Sueño" }),
            /* @__PURE__ */ a(
              It,
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
          /* @__PURE__ */ m(u, { sx: {
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
            }, children: Array.from({ length: 20 }, (d, f) => /* @__PURE__ */ a(u, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, f)) }),
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
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: l.surface.background,
          border: l.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: i.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ m(_e, { sx: {
              color: i.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            e.hasWifi && /* @__PURE__ */ a(u, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i.palette.accent + "20",
              color: i.palette.accent
            }, children: /* @__PURE__ */ a(Ya, { sx: { fontSize: 16 } }) }),
            e.hasBluetooth && /* @__PURE__ */ a(u, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: i.palette.success + "20",
              color: i.palette.success
            }, children: /* @__PURE__ */ a(qa, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, Yp = ({
  data: e,
  variant: t = "elevated",
  showLocationIcon: r = !1,
  onRefresh: n = void 0
}) => {
  const o = re(), i = () => {
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
    const d = l.toLowerCase();
    return d.includes("clear") || d.includes("sunny") ? /* @__PURE__ */ a(oo, {}) : d.includes("cloud") || d.includes("overcast") ? /* @__PURE__ */ a(Xa, {}) : d.includes("rain") || d.includes("precipitation") ? /* @__PURE__ */ a(Qa, {}) : /* @__PURE__ */ a(oo, {});
  }, c = i();
  return /* @__PURE__ */ a(
    Nr,
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
      children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ m(u, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            r && /* @__PURE__ */ a(Ka, { sx: {
              fontSize: 20,
              color: o.helpers.text.primary
            } }),
            /* @__PURE__ */ a(_e, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: e.location })
          ] }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: o.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            n && /* @__PURE__ */ a(
              We,
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
                children: /* @__PURE__ */ a(ui, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ m(u, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ a(u, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: s(e.condition) }),
          /* @__PURE__ */ m(In, { sx: {
            fontSize: "3.5rem",
            fontWeight: 400,
            color: o.helpers.text.primary,
            mb: 1,
            lineHeight: 1
          }, children: [
            e.temperature,
            "°"
          ] }),
          /* @__PURE__ */ a(_e, { sx: {
            color: o.helpers.text.primary,
            mb: 1,
            fontWeight: 400
          }, children: e.condition }),
          /* @__PURE__ */ m($e, { sx: {
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
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ m(_e, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ a(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ m(_e, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ m(u, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ a(br, { sx: {
            mb: 3,
            borderColor: o.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ a(_e, { sx: {
            fontWeight: 400,
            mb: 3,
            color: o.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: e.hourlyForecast.map((l, d) => /* @__PURE__ */ m(u, { sx: {
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
            /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              s(l.condition),
              /* @__PURE__ */ a(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: l.time })
            ] }),
            /* @__PURE__ */ a($e, { sx: {
              color: o.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: l.condition }),
            /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ m(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                l.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ m(_e, { sx: {
                fontWeight: 400,
                color: o.helpers.text.primary,
                minWidth: "50px",
                textAlign: "right"
              }, children: [
                l.temperature,
                "°"
              ] })
            ] })
          ] }, d)) })
        ] })
      ] })
    }
  );
}, qp = ({
  searchValue: e,
  onSearchChange: t,
  selectedTab: r,
  onTabChange: n,
  onClearFilters: o,
  filteredCount: i,
  categoryTabs: s
}) => {
  const c = re();
  return /* @__PURE__ */ m(u, { sx: {
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
            color: c.contrast.text.primary
          }, children: [
            i,
            " Servicios"
          ] }),
          e && /* @__PURE__ */ a(
            En,
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
    /* @__PURE__ */ a(u, { sx: { mb: 3 }, children: /* @__PURE__ */ a(
      li,
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
    /* @__PURE__ */ a(br, { sx: { mb: 3, borderColor: c.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ a(u, { children: /* @__PURE__ */ a(
      Ca,
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
        children: s.map((l, d) => /* @__PURE__ */ a(
          ka,
          {
            label: l.label
          },
          d
        ))
      }
    ) })
  ] });
}, Kp = ({ stats: e, getCategories: t }) => {
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
  return /* @__PURE__ */ a(u, { sx: { mb: 8 }, children: /* @__PURE__ */ a(Oe, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: n.map((o, i) => /* @__PURE__ */ a(Oe, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ m(u, { sx: {
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
    /* @__PURE__ */ a(Kt, { sx: {
      color: o.color,
      mb: 1,
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1
    }, children: o.value }),
    /* @__PURE__ */ a($e, { sx: {
      color: "text.primary",
      fontSize: "0.95rem",
      fontWeight: 400,
      mb: 0.5,
      textTransform: "none",
      letterSpacing: "0.05em"
    }, children: o.label }),
    /* @__PURE__ */ a($e, { sx: {
      color: "text.secondary",
      fontSize: "0.8rem",
      lineHeight: 1.4
    }, children: o.description })
  ] }) }, i)) }) });
}, Mu = Ae(Vt)(({ theme: e }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: e.spacing(2),
  padding: e.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), Pu = ({ code: e, language: t = "tsx", className: r = "" }) => {
  we();
  const n = re();
  return /* @__PURE__ */ m(Mu, { className: r, children: [
    /* @__PURE__ */ m(u, { sx: {
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
        We,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(e),
          sx: { color: n.helpers.text.mediumContrast },
          children: /* @__PURE__ */ a(Ja, { fontSize: "small" })
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
}, zu = ({ props: e }) => {
  const t = we();
  return !e || e.length === 0 ? null : /* @__PURE__ */ a(Ta, { component: Vt, sx: { borderRadius: 2 }, children: /* @__PURE__ */ m(Ea, { children: [
    /* @__PURE__ */ a(Ia, { children: /* @__PURE__ */ m(ro, { sx: { backgroundColor: t.palette.grey[50] }, children: [
      /* @__PURE__ */ a(Ye, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ a(Ye, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ a(Ye, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ a(Ye, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ a(Ye, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ a(Aa, { children: e.map((r, n) => /* @__PURE__ */ m(ro, { sx: {
      "&:hover": { backgroundColor: t.palette.action.hover }
    }, children: [
      /* @__PURE__ */ a(Ye, { children: /* @__PURE__ */ a(Ke, { children: r.name }) }),
      /* @__PURE__ */ a(Ye, { children: /* @__PURE__ */ a(Ke, { children: r.type }) }),
      /* @__PURE__ */ a(Ye, { children: /* @__PURE__ */ a(
        It,
        {
          label: r.required ? "Sí" : "No",
          size: "small",
          color: r.required ? "error" : "success",
          variant: "outlined"
        }
      ) }),
      /* @__PURE__ */ a(Ye, { sx: {
        fontSize: "0.875rem",
        color: t.palette.text.secondary
      }, children: r.description }),
      /* @__PURE__ */ a(Ye, { children: r.defaultValue ? /* @__PURE__ */ a(Ke, { children: r.defaultValue }) : /* @__PURE__ */ a(u, { sx: { color: t.palette.text.disabled }, children: "-" }) })
    ] }, n)) })
  ] }) });
}, Xp = ({
  title: e,
  description: t,
  children: r,
  codeExample: n,
  props: o,
  className: i = ""
}) => {
  const s = we();
  return /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: i, children: [
    /* @__PURE__ */ m(u, { sx: {
      borderBottom: `1px solid ${s.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ a(Kt, { sx: { mb: 1 }, children: e }),
      /* @__PURE__ */ a($e, { sx: { color: s.palette.text.secondary }, children: t })
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
      /* @__PURE__ */ a(u, { sx: { mb: 2 }, children: /* @__PURE__ */ a(_e, { sx: { color: s.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ a(u, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: r })
    ] }),
    n && /* @__PURE__ */ m(u, { children: [
      /* @__PURE__ */ a(_e, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ a(Pu, { code: n })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ m(u, { children: [
      /* @__PURE__ */ a(_e, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ a(zu, { props: o })
    ] })
  ] });
}, Du = Ae(Cn)(({ theme: e }) => ({
  backgroundColor: e.palette.grey[100],
  borderRadius: e.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: e.shadows[3]
})), ri = Ae(Ze)(({ theme: e, isSelected: t }) => ({
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
})), Fu = Ae(Ze)(({ theme: e, isSelected: t }) => ({
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
})), Nu = Ae(u)(({ theme: e }) => ({
  backgroundColor: e.palette.background.paper,
  borderRadius: e.spacing(2),
  padding: e.spacing(3),
  position: "relative",
  minHeight: 320
})), Qp = ({
  rotationAngle: e = 35,
  brightness: t = 30,
  shadowDensity: r = 25
}) => {
  const n = we(), [o, i] = G("rotation"), [s, c] = G("cube"), [l, d] = G("spot"), f = [
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
  ], b = [
    { id: "spot", name: "Spot", icon: "⊙", isSelected: !0 },
    { id: "area", name: "Area", icon: "◼" },
    { id: "target", name: "Target", icon: "◎" },
    { id: "sun", name: "Sun", icon: "◉" }
  ];
  return /* @__PURE__ */ a(Du, { children: /* @__PURE__ */ m(Yt, { sx: { p: 3 }, children: [
    /* @__PURE__ */ m(u, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ a(z, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
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
      /* @__PURE__ */ a(z, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "2019" })
    ] }),
    /* @__PURE__ */ m(Oe, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ a(Oe, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ a(z, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ a(u, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: f.map((p) => /* @__PURE__ */ a(
            ri,
            {
              isSelected: s === p.id,
              onClick: () => c(p.id),
              children: p.icon
            },
            p.id
          )) })
        ] }),
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ a(z, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: g.map((p) => /* @__PURE__ */ a(
            Fu,
            {
              isSelected: o === p.id,
              onClick: () => i(p.id),
              startIcon: /* @__PURE__ */ a("span", { children: p.icon }),
              children: p.name
            },
            p.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Oe, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ m(Nu, { children: [
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
        }, children: Array.from({ length: 96 }, (p, x) => /* @__PURE__ */ a(u, { sx: {
          border: `1px solid ${n.palette.grey[300]}`
        } }, x)) }) }),
        /* @__PURE__ */ m(u, { sx: {
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
          /* @__PURE__ */ m(u, { sx: {
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
            /* @__PURE__ */ m(u, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ a(z, { variant: "body2", sx: {
                color: n.palette.text.secondary
              }, children: "Rotation" }),
              /* @__PURE__ */ m(z, { variant: "h4", sx: {
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
            /* @__PURE__ */ a(z, { variant: "caption", sx: { color: n.palette.error.main }, children: "X" }),
            /* @__PURE__ */ a(z, { variant: "caption", sx: { color: n.palette.success.main }, children: "Y" }),
            /* @__PURE__ */ a(z, { variant: "caption", sx: { color: n.palette.info.main }, children: "Z" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ a(Oe, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ m(u, { children: [
          /* @__PURE__ */ a(z, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ a(Oe, { container: !0, spacing: 1, children: b.map((p) => /* @__PURE__ */ a(Oe, { size: 6, children: /* @__PURE__ */ a(
            ri,
            {
              isSelected: l === p.id,
              onClick: () => d(p.id),
              sx: { width: 48, height: 48 },
              children: p.icon
            }
          ) }, p.id)) })
        ] }),
        /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ m(u, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ a(z, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ m(z, { variant: "caption", sx: {
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
          /* @__PURE__ */ m(u, { children: [
            /* @__PURE__ */ m(u, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ a(z, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ m(z, { variant: "caption", sx: {
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
    /* @__PURE__ */ m(u, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${n.palette.divider}`
    }, children: [
      /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ a(u, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${n.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ a(z, { variant: "caption", sx: {
            color: n.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ m(u, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ a(z, { variant: "caption", sx: {
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
      /* @__PURE__ */ a(z, { variant: "caption", sx: {
        color: n.palette.text.secondary,
        fontSize: "0.75rem"
      }, children: "013" })
    ] })
  ] }) });
}, Lu = Me(/* @__PURE__ */ a("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), ni = Me(/* @__PURE__ */ a("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode"), oi = Me(/* @__PURE__ */ a("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode"), Wu = Ae(Ze, {
  shouldForwardProp: (e) => e !== "colors" && e !== "isScrolled"
})(({ theme: e, colors: t, isScrolled: r }) => ({
  marginX: e.spacing(0.5),
  color: t.contrast.text.primary,
  fontWeight: 400,
  textTransform: "none",
  fontSize: te.ui.caption.fontSize,
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
})), ju = Ae(u)(({ theme: e }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [e.breakpoints.up("md")]: {
    display: "flex"
  }
})), Bu = () => {
  const [e, t] = G(null), [r, n] = G(!1), o = re(), i = Tn(), { mode: s, toggleColorMode: c } = Vn();
  me(() => {
    const b = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", b), () => window.removeEventListener("scroll", b);
  }, []);
  const l = [
    { name: "inicio", path: Fe.HOME },
    { name: "servicios", path: Fe.SERVICES },
    { name: "superAI", path: Fe.SUPER_AI },
    { name: "porqueAi4u", path: Fe.WHY_AI4U },
    { name: "portafolio", path: Fe.PORTFOLIO }
  ], d = (b) => {
    t(b.currentTarget);
  }, f = () => {
    t(null);
  }, g = (b) => {
    f(), i(b), cn();
  };
  return /* @__PURE__ */ a(
    $a,
    {
      position: "fixed",
      color: "transparent",
      elevation: 0,
      sx: {
        backgroundColor: r ? Ce(o.contrast.surface, 0.85) : "transparent",
        backdropFilter: r ? "blur(10px)" : "none",
        borderBottom: r ? `1px solid ${Ce(o.contrast.border, 0.1)}` : "none",
        transition: "all 0.3s ease-in-out",
        zIndex: (b) => b.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ a(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(Oa, { disableGutters: !0, children: [
        /* @__PURE__ */ a(
          u,
          {
            component: wt,
            to: Fe.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ a(At, { variant: "desktop", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ m(u, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ a(
            We,
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
              children: e ? /* @__PURE__ */ a(aa, {}) : /* @__PURE__ */ a(Lu, {})
            }
          ),
          /* @__PURE__ */ m(
            si,
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
              onClose: f,
              sx: {
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: o.contrast.surface,
                  border: `1px solid ${o.contrast.border}`,
                  boxShadow: rt.lg
                }
              },
              children: [
                l.map((b) => /* @__PURE__ */ a(
                  nr,
                  {
                    onClick: () => g(b.path),
                    component: wt,
                    to: b.path,
                    sx: {
                      color: o.contrast.text.primary,
                      "&:hover": {
                        backgroundColor: o.helpers.state.hover,
                        color: o.palette.black
                      }
                    },
                    children: /* @__PURE__ */ a(z, { sx: { ...te.label.main }, children: b.name })
                  },
                  b.name
                )),
                /* @__PURE__ */ a(
                  nr,
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
                    children: /* @__PURE__ */ a(u, { sx: { width: "100%", maxWidth: (b) => b.spacing(25) }, children: /* @__PURE__ */ a(Go, { light: o.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ m(
                  nr,
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
                      s === "light" ? /* @__PURE__ */ a(oi, { fontSize: "small" }) : /* @__PURE__ */ a(ni, { fontSize: "small" }),
                      /* @__PURE__ */ a(z, { children: s === "light" ? "Modo oscuro" : "Modo claro" })
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
            component: wt,
            to: Fe.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              textDecoration: "none",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ a(At, { variant: "mobile", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ m(ju, { children: [
          l.map((b) => /* @__PURE__ */ a(
            Wu,
            {
              colors: o,
              isScrolled: r,
              onClick: () => cn(),
              component: wt,
              to: b.path,
              sx: { ...te.label.secondary, letterSpacing: "0.1em" },
              children: b.name
            },
            b.name
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
              children: /* @__PURE__ */ a(Go, { light: o.mode === "dark" })
            }
          ),
          /* @__PURE__ */ a(
            We,
            {
              onClick: c,
              size: "small",
              sx: {
                ml: 1,
                color: o.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: s === "light" ? /* @__PURE__ */ a(oi, { fontSize: "small" }) : /* @__PURE__ */ a(ni, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, ii = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], Vu = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], Jp = ({
  badge: e = "ai4u // siempre activo",
  lines: t = Vu,
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const n = re(), [o, i] = G(/* @__PURE__ */ new Set()), [s, c] = G(0), l = xr([]);
  me(() => {
    const b = setInterval(() => c((p) => (p + 1) % ii.length), 5e3);
    return () => clearInterval(b);
  }, []), me(() => {
    const b = [];
    return l.current.forEach((p, x) => {
      if (!p) return;
      const y = new IntersectionObserver(
        ([w]) => {
          w.isIntersecting && i((C) => new Set(C).add(x));
        },
        { threshold: 0.3 }
      );
      y.observe(p), b.push(y);
    }), () => b.forEach((p) => p.disconnect());
  }, [t.length]);
  const d = dt((b, p) => {
    l.current[p] = b;
  }, []), f = o.size > 0 ? Math.max(...o) : -1, g = o.size / t.length * 100;
  return /* @__PURE__ */ m(u, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ m(u, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      ii.map((b, p) => /* @__PURE__ */ a(u, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ a(
        Un,
        {
          src: b,
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
      /* @__PURE__ */ a(u, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: Ce(n.contrast.background, 0.55)
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
        /* @__PURE__ */ a(u, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ a(Ke, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ a(u, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: t.map((b, p) => {
        const x = o.has(p), y = p === f, w = x ? y ? 1 : 0.55 : 0.12, C = y ? v.accentColors.orange : n.contrast.text.primary;
        return /* @__PURE__ */ a(
          u,
          {
            ref: (_) => d(_, p),
            component: "h1",
            sx: {
              m: 0,
              fontSize: "clamp(3.5rem, 13vw, 16rem)",
              lineHeight: 0.88,
              letterSpacing: "-0.05em",
              fontWeight: 300,
              fontFamily: '"Red Hat Display", sans-serif',
              color: C,
              opacity: w,
              transition: "opacity 0.5s ease, color 0.5s ease"
            },
            children: b
          },
          p
        );
      }) }),
      /* @__PURE__ */ m(u, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ a(u, { sx: { borderTop: `1px solid ${Ce(n.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ a(u, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ a(
          Yn,
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
    /* @__PURE__ */ a(u, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ a(u, { sx: { height: "1px", bgcolor: Ce(n.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ a(u, { sx: {
      height: "100%",
      bgcolor: v.accentColors.orange,
      width: `${g}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, ai = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], Hu = ["agentes", "entrenamiento", "automatizaciones"], Zp = ({
  badge: e = "ai4u.equipo // siempre activo",
  primaryButtonText: t = "hablar con el equipo"
}) => {
  const r = re(), [n, o] = G(0);
  return me(() => {
    const i = setInterval(
      () => o((s) => (s + 1) % ai.length),
      5e3
    );
    return () => clearInterval(i);
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
      ai.map((i, s) => /* @__PURE__ */ a(u, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ a(
        Un,
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
    /* @__PURE__ */ a(Ke, { sx: {
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
      /* @__PURE__ */ a(Ke, { sx: {
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
        /* @__PURE__ */ a(Ke, { sx: {
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
              /* @__PURE__ */ a("br", {}),
              "para lo que",
              /* @__PURE__ */ a("br", {}),
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
        /* @__PURE__ */ a(u, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: Hu.map((i) => /* @__PURE__ */ a(Ke, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: r.contrast.text.primary,
          opacity: 0.35,
          textTransform: "uppercase"
        }, children: i }, i)) }),
        /* @__PURE__ */ a(
          Yn,
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
}, ef = ({ children: e }) => /* @__PURE__ */ m(u, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ a(Sd, {}),
  /* @__PURE__ */ a(Bu, {}),
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
  /* @__PURE__ */ a(Ru, {})
] }), Uu = () => {
  const e = we(), t = re();
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
      children: /* @__PURE__ */ m(u, { sx: { width: "100%", maxWidth: 600 }, children: [
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
}, tf = ({
  children: e,
  fallback: t = /* @__PURE__ */ a(Uu, {})
}) => /* @__PURE__ */ a(_a, { fallback: t, children: e }), rf = () => {
  const { pathname: e, hash: t } = Pa();
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
}, nf = ({ children: e }) => {
  const [t, r] = G(!0), n = we(), o = Re(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let i = 0;
    const s = o.length, c = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const f = new Image();
      f.onload = c, f.onerror = l, f.src = d;
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
      children: /* @__PURE__ */ a(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(At, {}) }),
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, of = ({ children: e }) => {
  const [t, r] = G(!0), n = we(), o = Re(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let i = 0;
    const s = o.length, c = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const f = new Image();
      f.onload = c, f.onerror = l, f.src = d;
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
      children: /* @__PURE__ */ a(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(At, {}) }),
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, af = ({ children: e }) => {
  const [t, r] = G(!0), n = we();
  return me(() => {
    const o = [
      "/assets/images/hero-image.png",
      "/assets/images/hero-image2.png",
      "/assets/images/hero-image3.png",
      "/assets/images/ai4u-logo.png",
      "/assets/images/ai4u-logo-dark.png"
    ];
    let i = 0;
    const s = o.length, c = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, l = () => {
      i++, i === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((d) => {
      const f = new Image();
      f.onload = c, f.onerror = l, f.src = d;
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
      children: /* @__PURE__ */ a(Xe, { maxWidth: "lg", children: /* @__PURE__ */ m(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ a(u, { sx: { mb: 4 }, children: /* @__PURE__ */ a(At, {}) }),
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
        /* @__PURE__ */ m(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ m(he, { direction: "row", spacing: 2, children: [
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
}, sf = ({ children: e }) => /* @__PURE__ */ a(ve, { children: e }), cf = ({
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
          borderBottom: `1px solid ${i.palette.divider}`
        };
    }
  };
  return /* @__PURE__ */ m(u, { sx: s(), className: n, children: [
    (t || r) && /* @__PURE__ */ a(u, { component: "header", sx: c(), children: /* @__PURE__ */ a(Xe, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ m(u, { sx: { textAlign: "center" }, children: [
      t && /* @__PURE__ */ a(In, { sx: {
        mb: { xs: 4, md: 6 },
        color: o === "futuristic" ? "#FFFFFF" : "#171717"
      }, children: t }),
      r && /* @__PURE__ */ a($e, { sx: {
        fontSize: { xs: "1.125rem", md: "1.25rem" },
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        maxWidth: "md",
        mx: "auto",
        lineHeight: 1.6
      }, children: r })
    ] }) }) }),
    /* @__PURE__ */ a(u, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: e })
  ] });
}, lf = ({
  children: e,
  title: t,
  description: r,
  className: n = "",
  variant: o = "default"
}) => {
  const i = we();
  return /* @__PURE__ */ m(u, { sx: (() => {
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
    (t || r) && /* @__PURE__ */ m(u, { sx: { mb: 4 }, children: [
      t && /* @__PURE__ */ a(pi, { sx: {
        mb: 2,
        // Estilo minimalista: usar color del tema en lugar de gradiente naranja
        color: o === "futuristic" ? "#FFFFFF" : i.palette.text.primary
      }, children: t }),
      r && /* @__PURE__ */ a($e, { sx: {
        fontSize: "1.125rem",
        color: o === "futuristic" ? "rgba(255, 255, 255, 0.8)" : "text.secondary",
        mb: 4
      }, children: r })
    ] }),
    e
  ] });
}, df = ({
  children: e,
  className: t = "",
  maxWidth: r = "xl",
  padding: n = "lg"
}) => /* @__PURE__ */ a(
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
), uf = ({
  children: e,
  cols: t = 1,
  gap: r = "lg",
  className: n = ""
}) => /* @__PURE__ */ a(
  Oe,
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
    children: be.Children.map(e, (i, s) => /* @__PURE__ */ a(
      Oe,
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
), pf = ({
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
var Gu = /* @__PURE__ */ ((e) => (e.OPERATION = "operation", e.STRATEGY = "strategy", e.EDUCATION = "education", e.TRANSFORMATION = "transformation", e))(Gu || {}), Yu = /* @__PURE__ */ ((e) => (e.AUTOMATION = "automation", e.AI_ASSISTANT = "ai_assistant", e.ANALYTICS = "analytics", e.ECOMMERCE = "ecommerce", e.TRAINING = "training", e.CONSULTING = "consulting", e))(Yu || {}), qu = /* @__PURE__ */ ((e) => (e.ACTIVE = "active", e.INACTIVE = "inactive", e.COMING_SOON = "coming_soon", e.DEPRECATED = "deprecated", e))(qu || {});
export {
  mf as AI4U_DESIGN_TOKENS,
  v as AI4U_PALETTE,
  gf as BORDER_TOKENS,
  Wr as BREAKPOINT_TOKENS,
  sf as BasicLoadingWrapper,
  $e as BodyText,
  zp as Breadcrumb,
  kp as BudgetCard,
  En as Button,
  yf as COMPONENT_SPACING,
  bf as COMPONENT_VARIANTS,
  pa as CONTRAST_PAIRS,
  Nr as Card,
  vp as ChatButton,
  Ke as CodeText,
  Qi as ColorModeContext,
  df as Container,
  Bt as ContextualLink,
  ei as DashboardIcon,
  Yn as DiagnosticCTA,
  Xp as Documentation,
  Dp as ErrorBoundary,
  jp as ExpandableSection,
  Wp as FilterStats,
  Ru as Footer,
  mr as GeometricIcon,
  ts as Giant,
  xp as GiantNumber,
  Sd as GoogleTranslateProvider,
  Go as GoogleTranslateWidget,
  uf as Grid,
  In as H1,
  pi as H2,
  Kt as H3,
  _e as H4,
  op as H5,
  ip as H6,
  Zp as HeroFullscreen,
  Up as HeroSection,
  up as ImagePreloader,
  yp as IntelligentImagePreloader,
  ef as Layout,
  Un as LazyImage,
  tf as LazyPage,
  pp as LoadingScreen,
  of as LoadingWrapper,
  At as Logo,
  Tp as MetricCard,
  Qp as ModelingInterface,
  Vp as ModuleCard,
  Bu as Navbar,
  Hp as Navigation,
  eu as NavigationDot,
  mp as OptimizedImage,
  gp as OptimizedImageAdvanced,
  cf as PageLayout,
  hp as PixelArtFilter,
  fp as PixelArtImage,
  Cp as ProcessStep,
  Bp as ProgressiveContent,
  Fp as RelatedPages,
  ia as SEOHead,
  rt as SHADOW_TOKENS,
  xf as SPACING_TOKENS,
  sn as SURFACE_PRESETS,
  Jp as ScrollRevealHero,
  rf as ScrollToTop,
  lf as Section,
  Pp as ServiceCard,
  Yu as ServiceCategory,
  Np as ServiceCrossLink,
  qu as ServiceStatus,
  Gu as ServiceSuperCategory,
  bp as ServiceThumbnail,
  Sp as ServicesButton,
  qp as ServicesFilter,
  Kp as ServicesStats,
  nf as SimpleAppWrapper,
  af as SimpleLoadingWrapper,
  Gp as SleepWidget,
  de as SmallText,
  pf as Stack,
  ru as StatusDot,
  Lp as SuperCategoryFilter,
  cp as SurfaceProvider,
  te as TEXT_VARIANTS,
  vf as TRANSITION_TOKENS,
  J as TYPOGRAPHY_TOKENS,
  Sf as TYPOGRAPHY_UTILITIES,
  sp as ThemeProvider,
  wp as TransactionCard,
  ap as Typography,
  ap as TypographyWrapper,
  Yp as WeatherWidget,
  wf as Z_INDEX_TOKENS,
  Rp as cleanMetaDescription,
  Cf as createAI4UTokens,
  Mp as generateKeywords,
  Cu as getBreadcrumbStructuredData,
  _p as getCanonicalUrl,
  $p as getFAQStructuredData,
  Ep as getHomeStructuredData,
  Op as getPageMetaTags,
  wu as getServiceStructuredData,
  Ip as getServicesStructuredData,
  Ap as getUseCasesStructuredData,
  Vn as useColorMode,
  re as useColors,
  fa as useComponentColors,
  lp as useComponentVariant,
  kf as useContrastColors,
  dp as useContrastPair,
  dd as useSurface
};
//# sourceMappingURL=index.js.map
