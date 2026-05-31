var Ei = Object.defineProperty;
var Ti = (e, t, r) => t in e ? Ei(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ve = (e, t, r) => Ti(e, typeof t != "symbol" ? t + "" : t, r);
import { A as b, S as at, a as Ii, u as $i } from "./palette-Cg2N1Fyc.js";
import { C as sp, b as cp } from "./palette-Cg2N1Fyc.js";
import { TEXT_VARIANTS as re, TYPOGRAPHY_TOKENS as J, SHADOW_TOKENS as Rt, BREAKPOINT_TOKENS as Er } from "./tokens/index.js";
import { AI4U_DESIGN_TOKENS as dp, BORDER_TOKENS as up, COMPONENT_SPACING as pp, SPACING_TOKENS as fp, TRANSITION_TOKENS as hp, TYPOGRAPHY_UTILITIES as mp, Z_INDEX_TOKENS as gp, createAI4UTokens as xp } from "./tokens/index.js";
import { jsxs as p, jsx as i, Fragment as be } from "react/jsx-runtime";
import { styled as Te, Button as Xe, Box as l, Typography as P, useTheme as Se, Container as Ye, Stack as he, Skeleton as ne, useMediaQuery as Xt, Menu as Io, MenuItem as Yt, Link as $o, keyframes as Ai, Fab as _i, Dialog as Oi, DialogTitle as Ri, IconButton as Fe, alpha as we, DialogContent as zi, Paper as Mt, CircularProgress as Mi, TextField as Ao, Card as Jr, CardContent as Nt, Avatar as An, Chip as yt, Divider as ar, Alert as Pi, AlertTitle as Di, Collapse as Fi, Grid as $e, Tabs as Ni, Tab as Wi, TableContainer as Li, Table as Bi, TableHead as ji, TableRow as _n, TableCell as He, TableBody as Vi, AppBar as Hi, Toolbar as Ui } from "@mui/material";
import * as B from "react";
import Gi, { useState as V, useRef as Wt, useEffect as me, createContext as Zr, useCallback as it, useMemo as _e, useContext as sr, Component as Yi, Suspense as qi } from "react";
import { Global as Ki, ThemeContext as _o } from "@emotion/react";
import Xi from "@emotion/styled";
import { useNavigate as en, Link as $t, useLocation as Qi } from "react-router-dom";
import { Receipt as Ji, MoreVert as On, AttachMoney as Zi, Favorite as ea, TrendingUp as ta, School as ra, FitnessCenter as na, ShoppingCart as oa, AccountBalance as ia, Add as aa, RefreshOutlined as sa, ExpandMore as ca, Bed as la, Refresh as Oo, Wifi as da, Bluetooth as ua, LocationOn as pa, WbSunny as Rn, Cloud as fa, Opacity as ha, ContentCopy as ma } from "@mui/icons-material";
const ga = Te(Xe, {
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
}), xa = Te(l)(({ theme: e }) => ({
  position: "absolute",
  top: 2,
  right: 6,
  ...re.label.secondary,
  fontSize: "0.65rem",
  pointerEvents: "none"
})), tn = ({
  children: e,
  variant: t = "primary",
  size: r = "medium",
  label: n,
  className: o,
  sx: a,
  ...s
}) => /* @__PURE__ */ p(
  ga,
  {
    customVariant: t,
    size: r,
    className: o,
    sx: a,
    ...s,
    children: [
      n && /* @__PURE__ */ i(xa, { children: n }),
      e
    ]
  }
), ya = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h1",
    sx: {
      ...re.display.giant,
      ...e.sx
    },
    ...e
  }
), rn = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h1",
    sx: {
      ...re.display.large,
      ...e.sx
    },
    ...e
  }
), Ro = (e) => /* @__PURE__ */ i(
  P,
  {
    variant: "h2",
    sx: {
      ...re.display.medium,
      ...e.sx
    },
    ...e
  }
), Lt = (e) => /* @__PURE__ */ i(
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
), Hd = (e) => /* @__PURE__ */ i(
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
), Ud = (e) => /* @__PURE__ */ i(
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
), Ge = (e) => {
  const t = Se();
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
}, Gd = ({ variant: e = "body1", ...t }) => /* @__PURE__ */ i(P, { variant: e, ...t }), ba = (e, t, r, n) => {
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
  const d = {
    v1: "Logo V1",
    v2: "Logo V2",
    v3: "Logo V3"
  }[e] || "Logo V2";
  return d === "Logo V2" && s === "Crema" ? "/assets/images/Logo V2 - Crema .png" : `/assets/images/${d} - ${s}.png`;
}, bt = ({
  variant: e,
  version: t = "v2",
  colorVariant: r = "auto",
  size: n,
  light: o = !1,
  onClick: a,
  sx: s,
  ...c
}) => {
  const u = Se().palette.mode === "dark", m = ba(t, r, u, o), x = () => {
    a ? a() : window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  let y = 40;
  const f = n || (e === "mobile" ? "small" : "medium");
  return t === "isotipo" ? f === "small" ? y = 24 : f === "large" ? y = 48 : y = 32 : f === "small" ? y = 30 : f === "large" ? y = 60 : y = 40, /* @__PURE__ */ i(
    l,
    {
      component: "img",
      src: m,
      alt: `AI4U ${t}`,
      onClick: x,
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
}, Sa = (e, t = {}) => {
  const [r, n] = V(!1), [o, a] = V(!1), [s, c] = V(!1), [d, u] = V(""), m = Wt(null), { threshold: x = 0.1, rootMargin: y = "50px", priority: f = !1 } = t;
  return me(() => {
    if (u(e), f) {
      a(!0);
      return;
    }
    const S = new IntersectionObserver(
      ([g]) => {
        g.isIntersecting && (a(!0), S.disconnect());
      },
      {
        threshold: x,
        rootMargin: y
      }
    );
    return m.current && S.observe(m.current), () => {
      S.disconnect();
    };
  }, [x, y, f, e]), me(() => {
    if (!o) return;
    const S = new Image();
    S.onload = () => {
      n(!0), c(!1);
    }, S.onerror = () => {
      c(!0), n(!1);
    }, S.src = d;
  }, [d, o]), {
    imgRef: m,
    isLoaded: r,
    isInView: o,
    error: s,
    imageSrc: d
  };
}, Lr = (e = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior: e
  });
};
function ct(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Qe = "$$material";
function va(e) {
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
var wa = {
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
function Ca(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ka = /[A-Z]|^ms/g, Ea = /_EMO_([^_]+?)_([^]*?)_EMO_/g, zo = function(t) {
  return t.charCodeAt(1) === 45;
}, zn = function(t) {
  return t != null && typeof t != "boolean";
}, Tr = /* @__PURE__ */ Ca(function(e) {
  return zo(e) ? e : e.replace(ka, "-$&").toLowerCase();
}), Mn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ea, function(n, o, a) {
          return Je = {
            name: o,
            styles: a,
            next: Je
          }, o;
        });
  }
  return wa[t] !== 1 && !zo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Qt(e, t, r) {
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
        return Je = {
          name: o.name,
          styles: o.styles,
          next: Je
        }, o.name;
      var a = r;
      if (a.styles !== void 0) {
        var s = a.next;
        if (s !== void 0)
          for (; s !== void 0; )
            Je = {
              name: s.name,
              styles: s.styles,
              next: Je
            }, s = s.next;
        var c = a.styles + ";";
        return c;
      }
      return Ta(e, t, r);
    }
  }
  var d = r;
  return d;
}
function Ta(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Qt(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var s = r[a];
      if (typeof s != "object") {
        var c = s;
        zn(c) && (n += Tr(a) + ":" + Mn(a, c) + ";");
      } else if (Array.isArray(s) && typeof s[0] == "string" && t == null)
        for (var d = 0; d < s.length; d++)
          zn(s[d]) && (n += Tr(a) + ":" + Mn(a, s[d]) + ";");
      else {
        var u = Qt(e, t, s);
        switch (a) {
          case "animation":
          case "animationName": {
            n += Tr(a) + ":" + u + ";";
            break;
          }
          default:
            n += a + "{" + u + "}";
        }
      }
    }
  return n;
}
var Pn = /label:\s*([^\s;{]+)\s*(;|$)/g, Je;
function Ia(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Je = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    n = !1, o += Qt(r, t, a);
  else {
    var s = a;
    o += s[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Qt(r, t, e[c]), n) {
      var d = a;
      o += d[c];
    }
  Pn.lastIndex = 0;
  for (var u = "", m; (m = Pn.exec(o)) !== null; )
    u += "-" + m[1];
  var x = va(o) + u;
  return {
    name: x,
    styles: o,
    next: Je
  };
}
function $a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Br = { exports: {} }, Ht = { exports: {} }, oe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dn;
function Aa() {
  if (Dn) return oe;
  Dn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var $ = k.$$typeof;
      switch ($) {
        case t:
          switch (k = k.type, k) {
            case d:
            case u:
            case n:
            case a:
            case o:
            case x:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case c:
                case m:
                case S:
                case f:
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
  return oe.AsyncMode = d, oe.ConcurrentMode = u, oe.ContextConsumer = c, oe.ContextProvider = s, oe.Element = t, oe.ForwardRef = m, oe.Fragment = n, oe.Lazy = S, oe.Memo = f, oe.Portal = r, oe.Profiler = a, oe.StrictMode = o, oe.Suspense = x, oe.isAsyncMode = function(k) {
    return _(k) || A(k) === d;
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
    return A(k) === f;
  }, oe.isPortal = function(k) {
    return A(k) === r;
  }, oe.isProfiler = function(k) {
    return A(k) === a;
  }, oe.isStrictMode = function(k) {
    return A(k) === o;
  }, oe.isSuspense = function(k) {
    return A(k) === x;
  }, oe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === n || k === u || k === a || k === o || k === x || k === y || typeof k == "object" && k !== null && (k.$$typeof === S || k.$$typeof === f || k.$$typeof === s || k.$$typeof === c || k.$$typeof === m || k.$$typeof === C || k.$$typeof === w || k.$$typeof === R || k.$$typeof === g);
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
var Fn;
function _a() {
  return Fn || (Fn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, x = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, f = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, R = e ? Symbol.for("react.scope") : 60119;
    function A(O) {
      return typeof O == "string" || typeof O == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      O === n || O === u || O === a || O === o || O === x || O === y || typeof O == "object" && O !== null && (O.$$typeof === S || O.$$typeof === f || O.$$typeof === s || O.$$typeof === c || O.$$typeof === m || O.$$typeof === C || O.$$typeof === w || O.$$typeof === R || O.$$typeof === g);
    }
    function _(O) {
      if (typeof O == "object" && O !== null) {
        var Re = O.$$typeof;
        switch (Re) {
          case t:
            var rt = O.type;
            switch (rt) {
              case d:
              case u:
              case n:
              case a:
              case o:
              case x:
                return rt;
              default:
                var kt = rt && rt.$$typeof;
                switch (kt) {
                  case c:
                  case m:
                  case S:
                  case f:
                  case s:
                    return kt;
                  default:
                    return Re;
                }
            }
          case r:
            return Re;
        }
      }
    }
    var k = d, $ = u, Y = c, D = s, F = t, K = m, W = n, h = S, z = f, I = r, L = a, G = o, pe = x, Ce = !1;
    function Be(O) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), E(O) || _(O) === d;
    }
    function E(O) {
      return _(O) === u;
    }
    function M(O) {
      return _(O) === c;
    }
    function N(O) {
      return _(O) === s;
    }
    function j(O) {
      return typeof O == "object" && O !== null && O.$$typeof === t;
    }
    function H(O) {
      return _(O) === m;
    }
    function X(O) {
      return _(O) === n;
    }
    function q(O) {
      return _(O) === S;
    }
    function U(O) {
      return _(O) === f;
    }
    function Q(O) {
      return _(O) === r;
    }
    function te(O) {
      return _(O) === a;
    }
    function Z(O) {
      return _(O) === o;
    }
    function ke(O) {
      return _(O) === x;
    }
    ie.AsyncMode = k, ie.ConcurrentMode = $, ie.ContextConsumer = Y, ie.ContextProvider = D, ie.Element = F, ie.ForwardRef = K, ie.Fragment = W, ie.Lazy = h, ie.Memo = z, ie.Portal = I, ie.Profiler = L, ie.StrictMode = G, ie.Suspense = pe, ie.isAsyncMode = Be, ie.isConcurrentMode = E, ie.isContextConsumer = M, ie.isContextProvider = N, ie.isElement = j, ie.isForwardRef = H, ie.isFragment = X, ie.isLazy = q, ie.isMemo = U, ie.isPortal = Q, ie.isProfiler = te, ie.isStrictMode = Z, ie.isSuspense = ke, ie.isValidElementType = A, ie.typeOf = _;
  }()), ie;
}
var Nn;
function Mo() {
  return Nn || (Nn = 1, process.env.NODE_ENV === "production" ? Ht.exports = Aa() : Ht.exports = _a()), Ht.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ir, Wn;
function Oa() {
  if (Wn) return Ir;
  Wn = 1;
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
      var d = Object.getOwnPropertyNames(s).map(function(m) {
        return s[m];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        u[m] = m;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Ir = o() ? Object.assign : function(a, s) {
    for (var c, d = n(a), u, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var x in c)
        t.call(c, x) && (d[x] = c[x]);
      if (e) {
        u = e(c);
        for (var y = 0; y < u.length; y++)
          r.call(c, u[y]) && (d[u[y]] = c[u[y]]);
      }
    }
    return d;
  }, Ir;
}
var $r, Ln;
function nn() {
  if (Ln) return $r;
  Ln = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $r = e, $r;
}
var Ar, Bn;
function Po() {
  return Bn || (Bn = 1, Ar = Function.call.bind(Object.prototype.hasOwnProperty)), Ar;
}
var _r, jn;
function Ra() {
  if (jn) return _r;
  jn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = nn(), r = {}, n = Po();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, c, d, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in a)
        if (n(a, m)) {
          var x;
          try {
            if (typeof a[m] != "function") {
              var y = Error(
                (d || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            x = a[m](s, m, d, c, null, t);
          } catch (S) {
            x = S;
          }
          if (x && !(x instanceof Error) && e(
            (d || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof x + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), x instanceof Error && !(x.message in r)) {
            r[x.message] = !0;
            var f = u ? u() : "";
            e(
              "Failed " + c + " type: " + x.message + (f ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, _r = o, _r;
}
var Or, Vn;
function za() {
  if (Vn) return Or;
  Vn = 1;
  var e = Mo(), t = Oa(), r = nn(), n = Po(), o = Ra(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(c) {
    var d = "Warning: " + c;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Or = function(c, d) {
    var u = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function x(E) {
      var M = E && (u && E[u] || E[m]);
      if (typeof M == "function")
        return M;
    }
    var y = "<<anonymous>>", f = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: R(),
      arrayOf: A,
      element: _(),
      elementType: k(),
      instanceOf: $,
      node: K(),
      objectOf: D,
      oneOf: Y,
      oneOfType: F,
      shape: h,
      exact: z
    };
    function S(E, M) {
      return E === M ? E !== 0 || 1 / E === 1 / M : E !== E && M !== M;
    }
    function g(E, M) {
      this.message = E, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function C(E) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, N = 0;
      function j(X, q, U, Q, te, Z, ke) {
        if (Q = Q || y, Z = Z || U, ke !== r) {
          if (d) {
            var O = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw O.name = "Invariant Violation", O;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Re = Q + ":" + U;
            !M[Re] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + Q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[Re] = !0, N++);
          }
        }
        return q[U] == null ? X ? q[U] === null ? new g("The " + te + " `" + Z + "` is marked as required " + ("in `" + Q + "`, but its value is `null`.")) : new g("The " + te + " `" + Z + "` is marked as required in " + ("`" + Q + "`, but its value is `undefined`.")) : null : E(q, U, Q, te, Z);
      }
      var H = j.bind(null, !1);
      return H.isRequired = j.bind(null, !0), H;
    }
    function w(E) {
      function M(N, j, H, X, q, U) {
        var Q = N[j], te = G(Q);
        if (te !== E) {
          var Z = pe(Q);
          return new g(
            "Invalid " + X + " `" + q + "` of type " + ("`" + Z + "` supplied to `" + H + "`, expected ") + ("`" + E + "`."),
            { expectedType: E }
          );
        }
        return null;
      }
      return C(M);
    }
    function R() {
      return C(s);
    }
    function A(E) {
      function M(N, j, H, X, q) {
        if (typeof E != "function")
          return new g("Property `" + q + "` of component `" + H + "` has invalid PropType notation inside arrayOf.");
        var U = N[j];
        if (!Array.isArray(U)) {
          var Q = G(U);
          return new g("Invalid " + X + " `" + q + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected an array."));
        }
        for (var te = 0; te < U.length; te++) {
          var Z = E(U, te, H, X, q + "[" + te + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return C(M);
    }
    function _() {
      function E(M, N, j, H, X) {
        var q = M[N];
        if (!c(q)) {
          var U = G(q);
          return new g("Invalid " + H + " `" + X + "` of type " + ("`" + U + "` supplied to `" + j + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(E);
    }
    function k() {
      function E(M, N, j, H, X) {
        var q = M[N];
        if (!e.isValidElementType(q)) {
          var U = G(q);
          return new g("Invalid " + H + " `" + X + "` of type " + ("`" + U + "` supplied to `" + j + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(E);
    }
    function $(E) {
      function M(N, j, H, X, q) {
        if (!(N[j] instanceof E)) {
          var U = E.name || y, Q = Be(N[j]);
          return new g("Invalid " + X + " `" + q + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return C(M);
    }
    function Y(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function M(N, j, H, X, q) {
        for (var U = N[j], Q = 0; Q < E.length; Q++)
          if (S(U, E[Q]))
            return null;
        var te = JSON.stringify(E, function(ke, O) {
          var Re = pe(O);
          return Re === "symbol" ? String(O) : O;
        });
        return new g("Invalid " + X + " `" + q + "` of value `" + String(U) + "` " + ("supplied to `" + H + "`, expected one of " + te + "."));
      }
      return C(M);
    }
    function D(E) {
      function M(N, j, H, X, q) {
        if (typeof E != "function")
          return new g("Property `" + q + "` of component `" + H + "` has invalid PropType notation inside objectOf.");
        var U = N[j], Q = G(U);
        if (Q !== "object")
          return new g("Invalid " + X + " `" + q + "` of type " + ("`" + Q + "` supplied to `" + H + "`, expected an object."));
        for (var te in U)
          if (n(U, te)) {
            var Z = E(U, te, H, X, q + "." + te, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return C(M);
    }
    function F(E) {
      if (!Array.isArray(E))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var M = 0; M < E.length; M++) {
        var N = E[M];
        if (typeof N != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ce(N) + " at index " + M + "."
          ), s;
      }
      function j(H, X, q, U, Q) {
        for (var te = [], Z = 0; Z < E.length; Z++) {
          var ke = E[Z], O = ke(H, X, q, U, Q, r);
          if (O == null)
            return null;
          O.data && n(O.data, "expectedType") && te.push(O.data.expectedType);
        }
        var Re = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new g("Invalid " + U + " `" + Q + "` supplied to " + ("`" + q + "`" + Re + "."));
      }
      return C(j);
    }
    function K() {
      function E(M, N, j, H, X) {
        return I(M[N]) ? null : new g("Invalid " + H + " `" + X + "` supplied to " + ("`" + j + "`, expected a ReactNode."));
      }
      return C(E);
    }
    function W(E, M, N, j, H) {
      return new g(
        (E || "React class") + ": " + M + " type `" + N + "." + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + H + "`."
      );
    }
    function h(E) {
      function M(N, j, H, X, q) {
        var U = N[j], Q = G(U);
        if (Q !== "object")
          return new g("Invalid " + X + " `" + q + "` of type `" + Q + "` " + ("supplied to `" + H + "`, expected `object`."));
        for (var te in E) {
          var Z = E[te];
          if (typeof Z != "function")
            return W(H, X, q, te, pe(Z));
          var ke = Z(U, te, H, X, q + "." + te, r);
          if (ke)
            return ke;
        }
        return null;
      }
      return C(M);
    }
    function z(E) {
      function M(N, j, H, X, q) {
        var U = N[j], Q = G(U);
        if (Q !== "object")
          return new g("Invalid " + X + " `" + q + "` of type `" + Q + "` " + ("supplied to `" + H + "`, expected `object`."));
        var te = t({}, N[j], E);
        for (var Z in te) {
          var ke = E[Z];
          if (n(E, Z) && typeof ke != "function")
            return W(H, X, q, Z, pe(ke));
          if (!ke)
            return new g(
              "Invalid " + X + " `" + q + "` key `" + Z + "` supplied to `" + H + "`.\nBad object: " + JSON.stringify(N[j], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(E), null, "  ")
            );
          var O = ke(U, Z, H, X, q + "." + Z, r);
          if (O)
            return O;
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
          var M = x(E);
          if (M) {
            var N = M.call(E), j;
            if (M !== E.entries) {
              for (; !(j = N.next()).done; )
                if (!I(j.value))
                  return !1;
            } else
              for (; !(j = N.next()).done; ) {
                var H = j.value;
                if (H && !I(H[1]))
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
    function G(E) {
      var M = typeof E;
      return Array.isArray(E) ? "array" : E instanceof RegExp ? "object" : L(M, E) ? "symbol" : M;
    }
    function pe(E) {
      if (typeof E > "u" || E === null)
        return "" + E;
      var M = G(E);
      if (M === "object") {
        if (E instanceof Date)
          return "date";
        if (E instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function Ce(E) {
      var M = pe(E);
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
    return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
  }, Or;
}
var Rr, Hn;
function Ma() {
  if (Hn) return Rr;
  Hn = 1;
  var e = nn();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Rr = function() {
    function n(s, c, d, u, m, x) {
      if (x !== e) {
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
  }, Rr;
}
if (process.env.NODE_ENV !== "production") {
  var Pa = Mo(), Da = !0;
  Br.exports = za()(Pa.isElement, Da);
} else
  Br.exports = Ma()();
var Fa = Br.exports;
const T = /* @__PURE__ */ $a(Fa);
function Na(e) {
  return e == null || Object.keys(e).length === 0;
}
function on(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e;
  return /* @__PURE__ */ i(Ki, {
    styles: typeof t == "function" ? (o) => t(Na(o) ? r : o) : t
  });
}
process.env.NODE_ENV !== "production" && (on.propTypes = {
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
function Wa(e, t) {
  const r = Xi(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((a) => a === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function La(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Un = [];
function Ze(e) {
  return Un[0] = e, Ia(Un);
}
var jr = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gn;
function Ba() {
  if (Gn) return ce;
  Gn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), f = Symbol.for("react.client.reference");
  function S(g) {
    if (typeof g == "object" && g !== null) {
      var C = g.$$typeof;
      switch (C) {
        case e:
          switch (g = g.type, g) {
            case r:
            case o:
            case n:
            case d:
            case u:
            case y:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case c:
                case x:
                case m:
                  return g;
                case a:
                  return g;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return ce.ContextConsumer = a, ce.ContextProvider = s, ce.Element = e, ce.ForwardRef = c, ce.Fragment = r, ce.Lazy = x, ce.Memo = m, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = d, ce.SuspenseList = u, ce.isContextConsumer = function(g) {
    return S(g) === a;
  }, ce.isContextProvider = function(g) {
    return S(g) === s;
  }, ce.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, ce.isForwardRef = function(g) {
    return S(g) === c;
  }, ce.isFragment = function(g) {
    return S(g) === r;
  }, ce.isLazy = function(g) {
    return S(g) === x;
  }, ce.isMemo = function(g) {
    return S(g) === m;
  }, ce.isPortal = function(g) {
    return S(g) === t;
  }, ce.isProfiler = function(g) {
    return S(g) === o;
  }, ce.isStrictMode = function(g) {
    return S(g) === n;
  }, ce.isSuspense = function(g) {
    return S(g) === d;
  }, ce.isSuspenseList = function(g) {
    return S(g) === u;
  }, ce.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === o || g === n || g === d || g === u || typeof g == "object" && g !== null && (g.$$typeof === x || g.$$typeof === m || g.$$typeof === s || g.$$typeof === a || g.$$typeof === c || g.$$typeof === f || g.getModuleId !== void 0);
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
var Yn;
function ja() {
  return Yn || (Yn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(g) {
      if (typeof g == "object" && g !== null) {
        var C = g.$$typeof;
        switch (C) {
          case t:
            switch (g = g.type, g) {
              case n:
              case a:
              case o:
              case u:
              case m:
              case f:
                return g;
              default:
                switch (g = g && g.$$typeof, g) {
                  case c:
                  case d:
                  case y:
                  case x:
                    return g;
                  case s:
                    return g;
                  default:
                    return C;
                }
            }
          case r:
            return C;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), s = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), f = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
    le.ContextConsumer = s, le.ContextProvider = c, le.Element = t, le.ForwardRef = d, le.Fragment = n, le.Lazy = y, le.Memo = x, le.Portal = r, le.Profiler = a, le.StrictMode = o, le.Suspense = u, le.SuspenseList = m, le.isContextConsumer = function(g) {
      return e(g) === s;
    }, le.isContextProvider = function(g) {
      return e(g) === c;
    }, le.isElement = function(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }, le.isForwardRef = function(g) {
      return e(g) === d;
    }, le.isFragment = function(g) {
      return e(g) === n;
    }, le.isLazy = function(g) {
      return e(g) === y;
    }, le.isMemo = function(g) {
      return e(g) === x;
    }, le.isPortal = function(g) {
      return e(g) === r;
    }, le.isProfiler = function(g) {
      return e(g) === a;
    }, le.isStrictMode = function(g) {
      return e(g) === o;
    }, le.isSuspense = function(g) {
      return e(g) === u;
    }, le.isSuspenseList = function(g) {
      return e(g) === m;
    }, le.isValidElementType = function(g) {
      return typeof g == "string" || typeof g == "function" || g === n || g === a || g === o || g === u || g === m || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === x || g.$$typeof === c || g.$$typeof === s || g.$$typeof === d || g.$$typeof === S || g.getModuleId !== void 0);
    }, le.typeOf = e;
  }()), le;
}
process.env.NODE_ENV === "production" ? jr.exports = Ba() : jr.exports = ja();
var Jt = jr.exports;
function Ke(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function Do(e) {
  if (/* @__PURE__ */ B.isValidElement(e) || Jt.isValidElementType(e) || !Ke(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = Do(e[r]);
  }), t;
}
function De(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ke(e) && Ke(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ B.isValidElement(t[o]) || Jt.isValidElementType(t[o]) ? n[o] = t[o] : Ke(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ke(e[o]) ? n[o] = De(e[o], t[o], r) : r.clone ? n[o] = Ke(t[o]) ? Do(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
const Va = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Fo(e) {
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
  } = e, a = Va(t), s = Object.keys(a);
  function c(f) {
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r})`;
  }
  function d(f) {
    return `@media (max-width:${(typeof t[f] == "number" ? t[f] : f) - n / 100}${r})`;
  }
  function u(f, S) {
    const g = s.indexOf(S);
    return `@media (min-width:${typeof t[f] == "number" ? t[f] : f}${r}) and (max-width:${(g !== -1 && typeof t[s[g]] == "number" ? t[s[g]] : S) - n / 100}${r})`;
  }
  function m(f) {
    return s.indexOf(f) + 1 < s.length ? u(f, s[s.indexOf(f) + 1]) : c(f);
  }
  function x(f) {
    const S = s.indexOf(f);
    return S === 0 ? c(s[1]) : S === s.length - 1 ? d(s[S]) : u(f, s[s.indexOf(f) + 1]).replace("@media", "@media not all and");
  }
  const y = [];
  for (let f = 0; f < s.length; f += 1)
    y.push(c(s[f]));
  return {
    keys: s,
    values: a,
    up: c,
    down: d,
    between: u,
    only: m,
    not: x,
    unit: r,
    internal_mediaKeys: y,
    ...o
  };
}
const qn = /min-width:\s*([0-9.]+)/;
function Kn(e, t) {
  if (!e.containerQueries || !Ha(t))
    return t;
  const r = [];
  for (const o in t)
    o.startsWith("@container") && r.push(o);
  r.sort((o, a) => {
    var s, c;
    return +(((s = o.match(qn)) == null ? void 0 : s[1]) || 0) - +(((c = a.match(qn)) == null ? void 0 : c[1]) || 0);
  });
  const n = t;
  for (let o = 0; o < r.length; o += 1) {
    const a = r[o], s = n[a];
    delete n[a], n[a] = s;
  }
  return n;
}
function Ha(e) {
  for (const t in e)
    if (t.startsWith("@container"))
      return !0;
  return !1;
}
function No(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Ua(e, t) {
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
function Ga(e) {
  const t = (a, s) => a.replace("@media", s ? `@container ${s}` : "@container");
  function r(a, s) {
    a.up = (...c) => t(e.breakpoints.up(...c), s), a.down = (...c) => t(e.breakpoints.down(...c), s), a.between = (...c) => t(e.breakpoints.between(...c), s), a.only = (...c) => t(e.breakpoints.only(...c), s), a.not = (...c) => {
      const d = t(e.breakpoints.not(...c), s);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (a) => (r(n, a), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const Ya = {
  borderRadius: 4
}, tt = process.env.NODE_ENV !== "production" ? T.oneOfType([T.number, T.string, T.object, T.array]) : {};
function Wo(e) {
  if (e == null)
    return !0;
  for (const t in e)
    return !1;
  return !0;
}
function gt(e, t) {
  const r = Array.isArray(t), n = Array.isArray(e);
  return Ja(t) ? t : Za(e) ? St(t) : r && n ? Xa(e, t) : r !== n ? St(t) : es(e, t);
}
function qa(e) {
  let t = 0;
  const r = e.length, n = new Array(r);
  for (t = 0; t < r; t += 1)
    n[t] = St(e[t]);
  return n;
}
function Ka(e) {
  const t = {};
  for (const r in e)
    t[r] = St(e[r]);
  return t;
}
function Xa(e, t) {
  const r = e.length;
  for (let n = 0; n < t.length; n += 1)
    e[r + n] = St(t[n]);
  return e;
}
function Qa(e) {
  return typeof e == "object" && e !== null && !(e instanceof RegExp) && !(e instanceof Date);
}
function Ja(e) {
  return typeof e != "object" || e === null;
}
function Za(e) {
  return typeof e != "object" || e === null || e instanceof RegExp || e instanceof Date;
}
function St(e) {
  return Qa(e) ? Array.isArray(e) ? qa(e) : Ka(e) : e;
}
function es(e, t) {
  for (const r in t)
    r in e ? e[r] = gt(e[r], t[r]) : e[r] = St(t[r]);
  return e;
}
const ts = {}, cr = {
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
}, Zt = Fo({
  values: cr
}), rs = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : cr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ct(e, t, r) {
  const n = {};
  return lr(n, e.theme, t, (o, a, s) => {
    const c = r(a, s);
    o ? n[o] = c : gt(n, c);
  });
}
function lr(e, t, r, n) {
  if (t ?? (t = ts), Array.isArray(r)) {
    const o = t.breakpoints ?? Zt;
    for (let a = 0; a < r.length; a += 1)
      zr(e, o.up(o.keys[a]), r[a], void 0, n);
    return e;
  }
  if (typeof r == "object") {
    const o = t.breakpoints ?? Zt, a = o.values ?? cr;
    for (const s in r)
      if (No(o.keys, s)) {
        const c = Ua(t.containerQueries ? t : rs, s);
        c && zr(e, c, r[s], s, n);
      } else if (s in a) {
        const c = o.up(s);
        zr(e, c, r[s], s, n);
      } else {
        const c = s;
        e[c] = r[c];
      }
    return e;
  }
  return n(void 0, r), e;
}
function zr(e, t, r, n, o) {
  e[t] ?? (e[t] = {}), o(t, r, n);
}
function ns(e = Zt) {
  const {
    internal_mediaKeys: t
  } = e, r = {};
  for (let n = 0; n < t.length; n += 1)
    r[t[n]] = {};
  return r;
}
function Xn(e, t) {
  const r = e.internal_mediaKeys;
  for (let n = 0; n < r.length; n += 1) {
    const o = r[n];
    Wo(t[o]) && delete t[o];
  }
  return t;
}
function os(e, t) {
  if (Array.isArray(t))
    return !0;
  if (typeof t == "object" && t !== null) {
    for (let n = 0; n < e.keys.length; n += 1)
      if (e.keys[n] in t)
        return !0;
    const r = Object.keys(t);
    for (let n = 0; n < r.length; n += 1)
      if (No(e.keys, r[n]))
        return !0;
  }
  return !1;
}
function vt(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : ct(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Lo(e, t, r, n) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || r : typeof r == "string" ? o = dr(e, r, !0, n) || r : o = r, t && (o = t(o, r, e)), o;
}
function dr(e, t, r = !0, n = void 0) {
  if (!e || !t)
    return null;
  const o = t.split(".");
  if (e.vars && r) {
    const a = Qn(e.vars, o, n);
    if (a != null)
      return a;
  }
  return Qn(e, o, n);
}
function Qn(e, t, r = void 0) {
  let n, o = e, a = 0;
  for (; a < t.length; ) {
    if (o == null)
      return o;
    n = o, o = o[t[a]], a += 1;
  }
  if (r && o === void 0) {
    const s = t[t.length - 1], c = `${r}${s === "default" ? "" : vt(s)}`;
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
    const c = s[t], d = s.theme, u = dr(d, n) || {};
    return Ct(s, c, (x) => {
      const y = Lo(u, o, x, t);
      return r === !1 ? y : {
        [r]: y
      };
    });
  };
  return a.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: tt
  } : {}, a.filterProps = [t], a;
}
const is = {
  internal_cache: {}
}, er = {
  m: "margin",
  p: "padding"
}, Jn = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Pt = {};
for (const e in er)
  Pt[e] = [er[e]];
for (const e in er)
  for (const t in Jn) {
    const r = er[e], n = Jn[t], o = Array.isArray(n) ? n.map((a) => r + a) : [r + n];
    Pt[e + t] = o;
  }
for (const e in Zn)
  Pt[e] = Pt[Zn[e]];
const ur = /* @__PURE__ */ new Set(["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"]), pr = /* @__PURE__ */ new Set(["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"]), as = /* @__PURE__ */ new Set([...ur, ...pr]);
function Bt(e, t, r, n) {
  const o = dr(e, t, !0) ?? r;
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
function an(e) {
  return Bt(e, "spacing", 8, "spacing");
}
function jt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
const eo = [""];
function Bo(e, t) {
  var a;
  const r = e.theme ?? is, n = ((a = r == null ? void 0 : r.internal_cache) == null ? void 0 : a.unarySpacing) ?? an(r), o = {};
  for (const s in e) {
    if (!t.has(s))
      continue;
    const c = Pt[s] ?? (eo[0] = s, eo), d = e[s];
    lr(o, e.theme, d, (u, m) => {
      const x = u ? o[u] : o;
      for (let y = 0; y < c.length; y += 1)
        x[c[y]] = jt(n, m);
    });
  }
  return o;
}
function ge(e) {
  return Bo(e, ur);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? Array.from(ur).reduce((e, t) => (e[t] = tt, e), {}) : {};
ge.filterProps = ur;
function xe(e) {
  return Bo(e, pr);
}
xe.propTypes = process.env.NODE_ENV !== "production" ? Array.from(pr).reduce((e, t) => (e[t] = tt, e), {}) : {};
xe.filterProps = pr;
process.env.NODE_ENV !== "production" && Array.from(as).reduce((e, t) => (e[t] = tt, e), {});
function jo(e = 8, t = an({
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
function fr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((a) => {
    n[a] = o;
  }), n), {}), r = (n) => {
    const o = {};
    for (const a in n)
      t[a] && gt(o, t[a](n));
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
const ss = Ne("border", Pe), cs = Ne("borderTop", Pe), ls = Ne("borderRight", Pe), ds = Ne("borderBottom", Pe), us = Ne("borderLeft", Pe), ps = Ne("borderColor"), fs = Ne("borderTopColor"), hs = Ne("borderRightColor"), ms = Ne("borderBottomColor"), gs = Ne("borderLeftColor"), xs = Ne("outline", Pe), ys = Ne("outlineColor"), hr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Bt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: jt(t, n)
    });
    return Ct(e, e.borderRadius, r);
  }
  return null;
};
hr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: tt
} : {};
hr.filterProps = ["borderRadius"];
fr(ss, cs, ls, ds, us, ps, fs, hs, ms, gs, hr, xs, ys);
const mr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Bt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: jt(t, n)
    });
    return Ct(e, e.gap, r);
  }
  return null;
};
mr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: tt
} : {};
mr.filterProps = ["gap"];
const gr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Bt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: jt(t, n)
    });
    return Ct(e, e.columnGap, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: tt
} : {};
gr.filterProps = ["columnGap"];
const xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Bt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: jt(t, n)
    });
    return Ct(e, e.rowGap, r);
  }
  return null;
};
xr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: tt
} : {};
xr.filterProps = ["rowGap"];
const bs = ve({
  prop: "gridColumn"
}), Ss = ve({
  prop: "gridRow"
}), vs = ve({
  prop: "gridAutoFlow"
}), ws = ve({
  prop: "gridAutoColumns"
}), Cs = ve({
  prop: "gridAutoRows"
}), ks = ve({
  prop: "gridTemplateColumns"
}), Es = ve({
  prop: "gridTemplateRows"
}), Ts = ve({
  prop: "gridTemplateAreas"
}), Is = ve({
  prop: "gridArea"
});
fr(mr, gr, xr, bs, Ss, vs, ws, Cs, ks, Es, Ts, Is);
function xt(e, t) {
  return t === "grey" ? t : e;
}
const $s = ve({
  prop: "color",
  themeKey: "palette",
  transform: xt
}), As = ve({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: xt
}), _s = ve({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: xt
});
fr($s, As, _s);
function ze(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Os = ve({
  prop: "width",
  transform: ze
}), sn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, a, s, c, d;
      const n = ((s = (a = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : a.values) == null ? void 0 : s[r]) || cr[r];
      return n ? ((d = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ze(r)
      };
    };
    return Ct(e, e.maxWidth, t);
  }
  return null;
};
sn.filterProps = ["maxWidth"];
const Rs = ve({
  prop: "minWidth",
  transform: ze
}), zs = ve({
  prop: "height",
  transform: ze
}), Ms = ve({
  prop: "maxHeight",
  transform: ze
}), Ps = ve({
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
const Ds = ve({
  prop: "boxSizing"
});
fr(Os, sn, Rs, zs, Ms, Ps, Ds);
const yr = {
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
    style: hr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: xt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: xt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: xt
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
    style: mr
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: gr
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
    style: sn
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
}, Fs = {};
function Ns() {
  function e(t) {
    if (!t.sx)
      return null;
    const {
      sx: r,
      theme: n = Fs,
      nested: o
    } = t, a = n.unstable_sxConfig ?? yr, s = {
      sx: null,
      theme: n,
      nested: !0
    };
    function c(d) {
      let u = d;
      if (typeof d == "function")
        u = d(n);
      else if (typeof d != "object")
        return d;
      if (!u)
        return null;
      const m = n.breakpoints ?? Zt, x = ns(m);
      for (const y in u) {
        const f = Ws(u[y], n);
        if (f != null) {
          if (typeof f != "object") {
            to(x, y, f, n, a);
            continue;
          }
          if (a[y]) {
            to(x, y, f, n, a);
            continue;
          }
          os(m, f) ? lr(x, t.theme, f, (S, g) => {
            x[S][y] = g;
          }) : (s.sx = f, x[y] = e(s));
        }
      }
      return !o && n.modularCssLayers ? {
        "@layer sx": Kn(n, Xn(m, x))
      } : Kn(n, Xn(m, x));
    }
    return Array.isArray(r) ? r.map(c) : c(r);
  }
  return e.filterProps = ["sx"], e;
}
const wt = Ns();
function to(e, t, r, n, o) {
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
    gt(e, c({
      [t]: r,
      theme: n
    }));
    return;
  }
  const {
    cssProperty: d = t,
    transform: u
  } = a, m = dr(n, s);
  lr(e, n, r, (x, y) => {
    const f = Lo(m, u, y, t);
    d === !1 ? gt(x ? e[x] : e, f) : x ? e[x][d] = f : e[d] = f;
  });
}
function Ws(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ls(e, t) {
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
function cn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: a = {},
    ...s
  } = e, c = Fo(r), d = jo(o);
  let u = De({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...Ya,
      ...a
    }
  }, s);
  return u = Ga(u), u.applyStyles = Ls, u = t.reduce((m, x) => De(m, x), u), u.unstable_sxConfig = {
    ...yr,
    ...s == null ? void 0 : s.unstable_sxConfig
  }, u.unstable_sx = function(x) {
    return wt({
      sx: x,
      theme: this
    });
  }, u.internal_cache = {}, u;
}
function Bs(e) {
  return Object.keys(e).length === 0;
}
function ln(e = null) {
  const t = B.useContext(_o);
  return !t || Bs(t) ? e : t;
}
const js = cn();
function Vo(e = js) {
  return ln(e);
}
function Mr(e) {
  const t = Ze(e);
  return e !== t && t.styles ? (t.styles.match(/^@layer\s+[^{]*$/) || (t.styles = `@layer global{${t.styles}}`), t) : e;
}
function dn({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const n = Vo(r), o = t && n[t] || n;
  let a = typeof e == "function" ? e(o) : e;
  return o.modularCssLayers && (Array.isArray(a) ? a = a.map((s) => Mr(typeof s == "function" ? s(o) : s)) : a = Mr(a)), /* @__PURE__ */ i(on, {
    styles: a
  });
}
process.env.NODE_ENV !== "production" && (dn.propTypes = {
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
const ro = (e) => e, Vs = () => {
  let e = ro;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = ro;
    }
  };
}, Hs = Vs();
function Ho(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Ho(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Uo() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Ho(e)) && (n && (n += " "), n += t);
  return n;
}
const Us = {
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
function un(e, t, r = "Mui") {
  const n = Us[t];
  return n ? `${r}-${n}` : `${Hs.generate(e)}-${t}`;
}
function Gs(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = un(e, o, r);
  }), n;
}
function Go(e, t = "") {
  return e.displayName || e.name || t;
}
function no(e, t, r) {
  const n = Go(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ys(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Go(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Jt.ForwardRef:
          return no(e, e.render, "ForwardRef");
        case Jt.Memo:
          return no(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Yo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ze(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ze(o.style));
  }), n;
}
const qs = cn();
function Pr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function st(e, t) {
  return t && e && typeof e == "object" && e.styles && !e.styles.startsWith("@layer") && (e.styles = `@layer ${t}{${String(e.styles)}}`), e;
}
function Ks(e) {
  return e ? (t, r) => r[e] : null;
}
function Xs(e, t, r) {
  e.theme = Wo(e.theme) ? r : e.theme[t] || e.theme;
}
function qt(e, t, r) {
  const n = typeof t == "function" ? t(e) : t;
  if (Array.isArray(n))
    return n.flatMap((o) => qt(e, o, r));
  if (Array.isArray(n == null ? void 0 : n.variants)) {
    let o;
    if (n.isProcessed)
      o = r ? st(n.style, r) : n.style;
    else {
      const {
        variants: a,
        ...s
      } = n;
      o = r ? st(Ze(s), r) : s;
    }
    return qo(e, n.variants, [o], r);
  }
  return n != null && n.isProcessed ? r ? st(Ze(n.style), r) : n.style : r ? st(Ze(n), r) : n;
}
function qo(e, t, r = [], n = void 0) {
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
      for (const d in c.props)
        if (e[d] !== c.props[d] && ((a = e.ownerState) == null ? void 0 : a[d]) !== c.props[d])
          continue e;
    typeof c.style == "function" ? (o ?? (o = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(n ? st(Ze(c.style(o)), n) : c.style(o))) : r.push(n ? st(Ze(c.style), n) : c.style);
  }
  return r;
}
function Qs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = qs,
    rootShouldForwardProp: n = Pr,
    slotShouldForwardProp: o = Pr
  } = e;
  function a(c) {
    Xs(c, t, r);
  }
  return (c, d = {}) => {
    La(c, ($) => $.filter((Y) => Y !== wt));
    const {
      name: u,
      slot: m,
      skipVariantsResolver: x,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: f = Ks(Ko(m)),
      ...S
    } = d, g = u && u.startsWith("Mui") || m ? "components" : "custom", C = x !== void 0 ? x : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), w = y || !1;
    let R = Pr;
    m === "Root" || m === "root" ? R = n : m ? R = o : ec(c) && (R = void 0);
    const A = Wa(c, {
      shouldForwardProp: R,
      label: Zs(u, m),
      ...S
    }), _ = ($) => {
      if ($.__emotion_real === $)
        return $;
      if (typeof $ == "function")
        return function(D) {
          return qt(D, $, D.theme.modularCssLayers ? g : void 0);
        };
      if (Ke($)) {
        const Y = Yo($);
        return function(F) {
          return Y.variants ? qt(F, Y, F.theme.modularCssLayers ? g : void 0) : F.theme.modularCssLayers ? st(Y.style, g) : Y.style;
        };
      }
      return $;
    }, k = (...$) => {
      const Y = [], D = $.map(_), F = [];
      if (Y.push(a), u && f && F.push(function(z) {
        var pe, Ce;
        const L = (Ce = (pe = z.theme.components) == null ? void 0 : pe[u]) == null ? void 0 : Ce.styleOverrides;
        if (!L)
          return null;
        const G = {};
        for (const Be in L)
          G[Be] = qt(z, L[Be], z.theme.modularCssLayers ? "theme" : void 0);
        return f(z, G);
      }), u && !C && F.push(function(z) {
        var G, pe;
        const I = z.theme, L = (pe = (G = I == null ? void 0 : I.components) == null ? void 0 : G[u]) == null ? void 0 : pe.variants;
        return L ? qo(z, L, [], z.theme.modularCssLayers ? "theme" : void 0) : null;
      }), w || F.push(wt), Array.isArray(D[0])) {
        const h = D.shift(), z = new Array(Y.length).fill(""), I = new Array(F.length).fill("");
        let L;
        L = [...z, ...h, ...I], L.raw = [...z, ...h.raw, ...I], Y.unshift(L);
      }
      const K = [...Y, ...D, ...F], W = A(...K);
      return c.muiName && (W.muiName = c.muiName), process.env.NODE_ENV !== "production" && (W.displayName = Js(u, m, c)), W;
    };
    return A.withConfig && (k.withConfig = A.withConfig), k;
  };
}
function Js(e, t, r) {
  return e ? `${e}${vt(t || "")}` : `Styled(${Ys(r)})`;
}
function Zs(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Ko(t || "Root")}`), r;
}
function ec(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Ko(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Vr(e, t, r = !1) {
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
          for (const d in s)
            if (Object.prototype.hasOwnProperty.call(s, d)) {
              const u = d;
              n[a][u] = Vr(s[u], c[u], r);
            }
        }
      } else a === "className" && r && t.className !== void 0 ? n.className = Uo(e == null ? void 0 : e.className, t == null ? void 0 : t.className) : a === "style" && r && t.style ? n.style = {
        ...e == null ? void 0 : e.style,
        ...t == null ? void 0 : t.style
      } : n[a] === void 0 && (n[a] = e[a]);
    }
  return n;
}
const Xo = typeof window < "u" ? B.useLayoutEffect : B.useEffect;
function tc(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function pn(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), tc(e, t, r);
}
function rc(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function et(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return et(rc(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : ct(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : ct(10, o));
  } else
    n = n.split(",");
  return n = n.map((a) => parseFloat(a)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const nc = (e) => {
  const t = et(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, At = (e, t) => {
  try {
    return nc(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function br(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, a) => a < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function Qo(e) {
  e = et(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, a = n * Math.min(o, 1 - o), s = (u, m = (u + r / 30) % 12) => o - a * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const d = [Math.round(s(0) * 255), Math.round(s(8) * 255), Math.round(s(4) * 255)];
  return e.type === "hsla" && (c += "a", d.push(t[3])), br({
    type: c,
    values: d
  });
}
function Hr(e) {
  e = et(e);
  let t = e.type === "hsl" || e.type === "hsla" ? et(Qo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function oo(e, t) {
  const r = Hr(e), n = Hr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Jo(e, t) {
  return e = et(e), t = pn(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, br(e);
}
function ot(e, t, r) {
  try {
    return Jo(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function Sr(e, t) {
  if (e = et(e), t = pn(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return br(e);
}
function ae(e, t, r) {
  try {
    return Sr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function vr(e, t) {
  if (e = et(e), t = pn(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return br(e);
}
function se(e, t, r) {
  try {
    return vr(e, t);
  } catch {
    return r && process.env.NODE_ENV !== "production" && console.warn(r), e;
  }
}
function oc(e, t = 0.15) {
  return Hr(e) > 0.5 ? Sr(e, t) : vr(e, t);
}
function Ut(e, t, r) {
  try {
    return oc(e, t);
  } catch {
    return e;
  }
}
const ic = "exact-prop: ​";
function Zo(e) {
  return process.env.NODE_ENV === "production" ? e : {
    ...e,
    [ic]: (t) => {
      const r = Object.keys(t).filter((n) => !e.hasOwnProperty(n));
      return r.length > 0 ? new Error(`The following props are not supported: ${r.map((n) => `\`${n}\``).join(", ")}. Please remove them.`) : null;
    }
  };
}
const fn = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (fn.displayName = "ThemeContext");
function hn() {
  const e = B.useContext(fn);
  return process.env.NODE_ENV !== "production" && B.useDebugValue(e), e;
}
const ac = typeof Symbol == "function" && Symbol.for, sc = ac ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function cc(e, t) {
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
function tr(e) {
  const {
    children: t,
    theme: r
  } = e, n = hn();
  process.env.NODE_ENV !== "production" && n === null && typeof r == "function" && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const o = B.useMemo(() => {
    const a = n === null ? {
      ...r
    } : cc(n, r);
    return a != null && (a[sc] = n !== null), a;
  }, [r, n]);
  return /* @__PURE__ */ i(fn.Provider, {
    value: o,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (tr.propTypes = {
  /**
   * Your component tree.
   */
  children: T.node,
  /**
   * A theme object. You can provide a function to extend the outer theme.
   */
  theme: T.oneOfType([T.object, T.func]).isRequired
});
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (tr.propTypes = Zo(tr.propTypes));
const lc = /* @__PURE__ */ B.createContext();
function ei({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ i(lc.Provider, {
    value: e ?? !0,
    ...t
  });
}
process.env.NODE_ENV !== "production" && (ei.propTypes = {
  children: T.node,
  value: T.bool
});
const ti = /* @__PURE__ */ B.createContext(void 0);
function ri({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ i(ti.Provider, {
    value: e,
    children: t
  });
}
process.env.NODE_ENV !== "production" && (ri.propTypes = {
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
function dc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Vr(o.defaultProps, n, t.components.mergeClassNameAndStyle) : !o.styleOverrides && !o.variants ? Vr(o, n, t.components.mergeClassNameAndStyle) : n;
}
function uc({
  props: e,
  name: t
}) {
  const r = B.useContext(ti);
  return dc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
let io = 0;
function pc(e) {
  const [t, r] = B.useState(e), n = e || t;
  return B.useEffect(() => {
    t == null && (io += 1, r(`mui-${io}`));
  }, [t]), n;
}
const fc = {
  ...B
}, ao = fc.useId;
function hc(e) {
  return ao !== void 0 ? ao() : pc(e);
}
function mc(e) {
  const t = ln(), r = hc() || "", {
    modularCssLayers: n
  } = e;
  let o = "mui.global, mui.components, mui.theme, mui.custom, mui.sx";
  return !n || t !== null ? o = "" : typeof n == "string" ? o = n.replace(/mui(?!\.)/g, o) : o = `@layer ${o};`, Xo(() => {
    var c, d;
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
      (d = a.querySelector(`style[data-mui-layer-order="${r}"]`)) == null || d.remove();
  }, [o, r]), o ? /* @__PURE__ */ i(dn, {
    styles: o
  }) : null;
}
const so = {};
function co(e, t, r, n = !1) {
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
function Dt(e) {
  const {
    children: t,
    theme: r,
    themeId: n
  } = e, o = ln(so), a = hn() || so;
  process.env.NODE_ENV !== "production" && (o === null && typeof r == "function" || n && o && !o[n] && typeof r == "function") && console.error(["MUI: You are providing a theme function prop to the ThemeProvider component:", "<ThemeProvider theme={outerTheme => outerTheme} />", "", "However, no outer theme is present.", "Make sure a theme is already injected higher in the React tree or provide a theme object."].join(`
`));
  const s = co(n, o, r), c = co(n, a, r, !0), d = (n ? s[n] : s).direction === "rtl", u = mc(s);
  return /* @__PURE__ */ i(tr, {
    theme: c,
    children: /* @__PURE__ */ i(_o.Provider, {
      value: s,
      children: /* @__PURE__ */ i(ei, {
        value: d,
        children: /* @__PURE__ */ p(ri, {
          value: n ? s[n].components : s.components,
          children: [u, t]
        })
      })
    })
  });
}
process.env.NODE_ENV !== "production" && (Dt.propTypes = {
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
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && (Dt.propTypes = Zo(Dt.propTypes));
const lo = {
  theme: void 0
};
function gc(e) {
  let t, r;
  return function(o) {
    let a = t;
    return (a === void 0 || o.theme !== r) && (lo.theme = o.theme, a = Yo(e(lo)), t = a, r = o.theme), a;
  };
}
const mn = "mode", gn = "color-scheme", xc = "data-color-scheme";
function yc(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: n = "dark",
    modeStorageKey: o = mn,
    colorSchemeStorageKey: a = gn,
    attribute: s = xc,
    colorSchemeNode: c = "document.documentElement",
    nonce: d
  } = e || {};
  let u = "", m = s;
  if (s === "class" && (m = ".%s"), s === "data" && (m = "[data-%s]"), m.startsWith(".")) {
    const y = m.substring(1);
    u += `${c}.classList.remove('${y}'.replace('%s', light), '${y}'.replace('%s', dark));
      ${c}.classList.add('${y}'.replace('%s', colorScheme));`;
  }
  const x = m.match(/\[([^[\]]+)\]/);
  if (x) {
    const [y, f] = x[1].split("=");
    f || (u += `${c}.removeAttribute('${y}'.replace('%s', light));
      ${c}.removeAttribute('${y}'.replace('%s', dark));`), u += `
      ${c}.setAttribute('${y}'.replace('%s', colorScheme), ${f ? `${f}.replace('%s', colorScheme)` : '""'});`;
  } else m !== ".%s" && (u += `${c}.setAttribute('${m}', colorScheme);`);
  return /* @__PURE__ */ i("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? d : "",
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
function bc() {
}
const Sc = ({
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
function Dr() {
}
function uo(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ni(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function vc(e) {
  return ni(e, (t) => {
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
    modeStorageKey: a = mn,
    colorSchemeStorageKey: s = gn,
    storageWindow: c = typeof window > "u" ? void 0 : window,
    storageManager: d = Sc,
    noSsr: u = !1
  } = e, m = o.join(","), x = o.length > 1, y = B.useMemo(() => d == null ? void 0 : d({
    key: a,
    storageWindow: c
  }), [d, a, c]), f = B.useMemo(() => d == null ? void 0 : d({
    key: `${s}-light`,
    storageWindow: c
  }), [d, s, c]), S = B.useMemo(() => d == null ? void 0 : d({
    key: `${s}-dark`,
    storageWindow: c
  }), [d, s, c]), [g, C] = B.useState(() => {
    const D = (y == null ? void 0 : y.get(t)) || t, F = (f == null ? void 0 : f.get(r)) || r, K = (S == null ? void 0 : S.get(n)) || n;
    return {
      mode: D,
      systemMode: uo(D),
      lightColorScheme: F,
      darkColorScheme: K
    };
  }), [w, R] = B.useState(u || !x);
  B.useEffect(() => {
    R(!0);
  }, []);
  const A = vc(g), _ = B.useCallback((D) => {
    C((F) => {
      if (D === F.mode)
        return F;
      const K = D ?? t;
      return y == null || y.set(K), {
        ...F,
        mode: K,
        systemMode: uo(K)
      };
    });
  }, [y, t]), k = B.useCallback((D) => {
    D ? typeof D == "string" ? D && !m.includes(D) ? console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`) : C((F) => {
      const K = {
        ...F
      };
      return ni(F, (W) => {
        W === "light" && (f == null || f.set(D), K.lightColorScheme = D), W === "dark" && (S == null || S.set(D), K.darkColorScheme = D);
      }), K;
    }) : C((F) => {
      const K = {
        ...F
      }, W = D.light === null ? r : D.light, h = D.dark === null ? n : D.dark;
      return W && (m.includes(W) ? (K.lightColorScheme = W, f == null || f.set(W)) : console.error(`\`${W}\` does not exist in \`theme.colorSchemes\`.`)), h && (m.includes(h) ? (K.darkColorScheme = h, S == null || S.set(h)) : console.error(`\`${h}\` does not exist in \`theme.colorSchemes\`.`)), K;
    }) : C((F) => (f == null || f.set(r), S == null || S.set(n), {
      ...F,
      lightColorScheme: r,
      darkColorScheme: n
    }));
  }, [m, f, S, r, n]), $ = B.useCallback((D) => {
    g.mode === "system" && C((F) => {
      const K = D != null && D.matches ? "dark" : "light";
      return F.systemMode === K ? F : {
        ...F,
        systemMode: K
      };
    });
  }, [g.mode]), Y = B.useRef($);
  return Y.current = $, B.useEffect(() => {
    if (typeof window.matchMedia != "function" || !x)
      return;
    const D = (...K) => Y.current(...K), F = window.matchMedia("(prefers-color-scheme: dark)");
    return F.addListener(D), D(F), () => {
      F.removeListener(D);
    };
  }, [x]), B.useEffect(() => {
    if (x) {
      const D = (y == null ? void 0 : y.subscribe((W) => {
        (!W || ["light", "dark", "system"].includes(W)) && _(W || t);
      })) || Dr, F = (f == null ? void 0 : f.subscribe((W) => {
        (!W || m.match(W)) && k({
          light: W
        });
      })) || Dr, K = (S == null ? void 0 : S.subscribe((W) => {
        (!W || m.match(W)) && k({
          dark: W
        });
      })) || Dr;
      return () => {
        D(), F(), K();
      };
    }
  }, [k, _, m, t, c, x, y, f, S]), {
    ...g,
    mode: w ? g.mode : void 0,
    systemMode: w ? g.systemMode : void 0,
    colorScheme: w ? A : void 0,
    setMode: _,
    setColorScheme: k
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
    modeStorageKey: n = mn,
    colorSchemeStorageKey: o = gn,
    disableTransitionOnChange: a = !1,
    defaultColorScheme: s,
    resolveTheme: c
  } = e, d = {
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
  const m = () => B.useContext(u) || d, x = {}, y = {};
  function f(w) {
    var En, Tn, In, $n;
    const {
      children: R,
      theme: A,
      modeStorageKey: _ = n,
      colorSchemeStorageKey: k = o,
      disableTransitionOnChange: $ = a,
      storageManager: Y,
      storageWindow: D = typeof window > "u" ? void 0 : window,
      documentNode: F = typeof document > "u" ? void 0 : document,
      colorSchemeNode: K = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: W = !1,
      disableStyleSheetGeneration: h = !1,
      defaultMode: z = "system",
      forceThemeRerender: I = !1,
      noSsr: L
    } = w, G = B.useRef(!1), pe = hn(), Ce = B.useContext(u), Be = !!Ce && !W, E = B.useMemo(() => A || (typeof r == "function" ? r() : r), [A]), M = E[t], N = M || E, {
      colorSchemes: j = x,
      components: H = y,
      cssVarPrefix: X
    } = N, q = Object.keys(j).filter((Ee) => !!j[Ee]).join(","), U = B.useMemo(() => q.split(","), [q]), Q = typeof s == "string" ? s : s.light, te = typeof s == "string" ? s : s.dark, Z = j[Q] && j[te] ? z : ((Tn = (En = j[N.defaultColorScheme]) == null ? void 0 : En.palette) == null ? void 0 : Tn.mode) || ((In = N.palette) == null ? void 0 : In.mode), {
      mode: ke,
      setMode: O,
      systemMode: Re,
      lightColorScheme: rt,
      darkColorScheme: kt,
      colorScheme: wi,
      setColorScheme: wn
    } = wc({
      supportedColorSchemes: U,
      defaultLightColorScheme: Q,
      defaultDarkColorScheme: te,
      modeStorageKey: _,
      colorSchemeStorageKey: k,
      defaultMode: Z,
      storageManager: Y,
      storageWindow: D,
      noSsr: L
    });
    let kr = ke, We = wi;
    Be && (kr = Ce.mode, We = Ce.colorScheme), process.env.NODE_ENV !== "production" && I && !N.vars && console.warn(["MUI: The `forceThemeRerender` prop should only be used with CSS theme variables.", "Note that it will slow down the app when changing between modes, so only do this when you cannot find a better solution."].join(`
`));
    let Vt = We || N.defaultColorScheme;
    N.vars && !I && (Vt = N.defaultColorScheme);
    const lt = B.useMemo(() => {
      var nt;
      const Ee = ((nt = N.generateThemeVars) == null ? void 0 : nt.call(N)) || N.vars, ye = {
        ...N,
        components: H,
        colorSchemes: j,
        cssVarPrefix: X,
        vars: Ee
      };
      if (typeof ye.generateSpacing == "function" && (ye.spacing = ye.generateSpacing()), Vt) {
        const je = j[Vt];
        je && typeof je == "object" && Object.keys(je).forEach((Le) => {
          je[Le] && typeof je[Le] == "object" ? ye[Le] = {
            ...ye[Le],
            ...je[Le]
          } : ye[Le] = je[Le];
        });
      }
      return c ? c(ye) : ye;
    }, [N, Vt, H, j, X]), Et = N.colorSchemeSelector;
    Xo(() => {
      if (We && K && Et && Et !== "media") {
        const Ee = Et;
        let ye = Et;
        if (Ee === "class" && (ye = ".%s"), Ee === "data" && (ye = "[data-%s]"), Ee != null && Ee.startsWith("data-") && !Ee.includes("%s") && (ye = `[${Ee}="%s"]`), ye.startsWith("."))
          K.classList.remove(...U.map((nt) => ye.substring(1).replace("%s", nt))), K.classList.add(ye.substring(1).replace("%s", We));
        else {
          const nt = ye.replace("%s", We).match(/\[([^\]]+)\]/);
          if (nt) {
            const [je, Le] = nt[1].split("=");
            Le || U.forEach((ki) => {
              K.removeAttribute(je.replace(We, ki));
            }), K.setAttribute(je, Le ? Le.replace(/"|'/g, "") : "");
          } else
            K.setAttribute(ye, We);
        }
      }
    }, [We, Et, K, U]), B.useEffect(() => {
      let Ee;
      if ($ && G.current && F) {
        const ye = F.createElement("style");
        ye.appendChild(F.createTextNode(Cc)), F.head.appendChild(ye), window.getComputedStyle(F.body), Ee = setTimeout(() => {
          F.head.removeChild(ye);
        }, 1);
      }
      return () => {
        clearTimeout(Ee);
      };
    }, [We, $, F]), B.useEffect(() => (G.current = !0, () => {
      G.current = !1;
    }), []);
    const Ci = B.useMemo(() => ({
      allColorSchemes: U,
      colorScheme: We,
      darkColorScheme: kt,
      lightColorScheme: rt,
      mode: kr,
      setColorScheme: wn,
      setMode: process.env.NODE_ENV === "production" ? O : (Ee) => {
        lt.colorSchemeSelector === "media" && console.error(["MUI: The `setMode` function has no effect if `colorSchemeSelector` is `media` (`media` is the default value).", "To toggle the mode manually, please configure `colorSchemeSelector` to use a class or data attribute.", "To learn more, visit https://mui.com/material-ui/customization/css-theme-variables/configuration/#toggling-dark-mode-manually"].join(`
`)), O(Ee);
      },
      systemMode: Re
    }), [U, We, kt, rt, kr, wn, O, Re, lt.colorSchemeSelector]);
    let Cn = !0;
    (h || N.cssVariables === !1 || Be && (pe == null ? void 0 : pe.cssVarPrefix) === X) && (Cn = !1);
    const kn = /* @__PURE__ */ p(B.Fragment, {
      children: [/* @__PURE__ */ i(Dt, {
        themeId: M ? t : void 0,
        theme: lt,
        children: R
      }), Cn && /* @__PURE__ */ i(on, {
        styles: (($n = lt.generateStyleSheets) == null ? void 0 : $n.call(lt)) || []
      })]
    });
    return Be ? kn : /* @__PURE__ */ i(u.Provider, {
      value: Ci,
      children: kn
    });
  }
  process.env.NODE_ENV !== "production" && (f.propTypes = {
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
  const S = typeof s == "string" ? s : s.light, g = typeof s == "string" ? s : s.dark;
  return {
    CssVarsProvider: f,
    useColorScheme: m,
    getInitColorSchemeScript: (w) => yc({
      colorSchemeStorageKey: o,
      defaultLightColorScheme: S,
      defaultDarkColorScheme: g,
      modeStorageKey: n,
      ...w
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
const po = (e, t, r, n = []) => {
  let o = e;
  t.forEach((a, s) => {
    s === t.length - 1 ? Array.isArray(o) ? o[Number(a)] = r : o && typeof o == "object" && (o[a] = r) : o && typeof o == "object" && (o[a] || (o[a] = n.includes(a) ? [] : {}), o = o[a]);
  });
}, Tc = (e, t, r) => {
  function n(o, a = [], s = []) {
    Object.entries(o).forEach(([c, d]) => {
      (!r || r && !r([...a, c])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...a, c], Array.isArray(d) ? [...s, c] : s) : t([...a, c], d, s));
    });
  }
  n(e);
}, Ic = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Fr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, a = {}, s = {};
  return Tc(
    e,
    (c, d, u) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(c, d))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, x = Ic(c, d);
        Object.assign(o, {
          [m]: x
        }), po(a, c, `var(${m})`, u), po(s, c, `var(${m}, ${x})`, u);
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
function $c(e, t = {}) {
  const {
    getSelector: r = w,
    disableCssColorScheme: n,
    colorSchemeSelector: o,
    enableContrastVars: a
  } = t, {
    colorSchemes: s = {},
    components: c,
    defaultColorScheme: d = "light",
    ...u
  } = e, {
    vars: m,
    css: x,
    varsWithDefaults: y
  } = Fr(u, t);
  let f = y;
  const S = {}, {
    [d]: g,
    ...C
  } = s;
  if (Object.entries(C || {}).forEach(([_, k]) => {
    const {
      vars: $,
      css: Y,
      varsWithDefaults: D
    } = Fr(k, t);
    f = De(f, D), S[_] = {
      css: Y,
      vars: $
    };
  }), g) {
    const {
      css: _,
      vars: k,
      varsWithDefaults: $
    } = Fr(g, t);
    f = De(f, $), S[d] = {
      css: _,
      vars: k
    };
  }
  function w(_, k) {
    var Y, D;
    let $ = o;
    if (o === "class" && ($ = ".%s"), o === "data" && ($ = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && ($ = `[${o}="%s"]`), _) {
      if ($ === "media")
        return e.defaultColorScheme === _ ? ":root" : {
          [`@media (prefers-color-scheme: ${((D = (Y = s[_]) == null ? void 0 : Y.palette) == null ? void 0 : D.mode) || _})`]: {
            ":root": k
          }
        };
      if ($)
        return e.defaultColorScheme === _ ? `:root, ${$.replace("%s", String(_))}` : $.replace("%s", String(_));
    }
    return ":root";
  }
  return {
    vars: f,
    generateThemeVars: () => {
      let _ = {
        ...m
      };
      return Object.entries(S).forEach(([, {
        vars: k
      }]) => {
        _ = De(_, k);
      }), _;
    },
    generateStyleSheets: () => {
      var F, K;
      const _ = [], k = e.defaultColorScheme || "light";
      function $(W, h) {
        Object.keys(h).length && _.push(typeof W == "string" ? {
          [W]: {
            ...h
          }
        } : W);
      }
      $(r(void 0, {
        ...x
      }), x);
      const {
        [k]: Y,
        ...D
      } = S;
      if (Y) {
        const {
          css: W
        } = Y, h = (K = (F = s[k]) == null ? void 0 : F.palette) == null ? void 0 : K.mode, z = !n && h ? {
          colorScheme: h,
          ...W
        } : {
          ...W
        };
        $(r(k, {
          ...z
        }), z);
      }
      return Object.entries(D).forEach(([W, {
        css: h
      }]) => {
        var L, G;
        const z = (G = (L = s[W]) == null ? void 0 : L.palette) == null ? void 0 : G.mode, I = !n && z ? {
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
function Ac(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function _c(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const a = e[o];
    let s = "", c = !0;
    for (let d = 0; d < a.length; d += 1) {
      const u = a[d];
      u && (s += (c === !0 ? "" : " ") + t(u), c = !1, r && r[u] && (s += " " + r[u]));
    }
    n[o] = s;
  }
  return n;
}
const Ft = {
  black: "#000",
  white: "#fff"
}, Oc = {
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
}, dt = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, ut = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Tt = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, pt = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, ft = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, ht = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
};
function oi() {
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
      paper: Ft.white,
      default: Ft.white
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
const ii = oi();
function ai() {
  return {
    text: {
      primary: Ft.white,
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
      active: Ft.white,
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
const Ur = ai();
function fo(e, t, r, n) {
  const o = n.light || n, a = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = vr(e.main, o) : t === "dark" && (e.dark = Sr(e.main, a)));
}
function ho(e, t, r, n, o) {
  const a = o.light || o, s = o.dark || o * 1.5;
  t[r] || (t.hasOwnProperty(n) ? t[r] = t[n] : r === "light" ? t.light = `color-mix(in ${e}, ${t.main}, #fff ${(a * 100).toFixed(0)}%)` : r === "dark" && (t.dark = `color-mix(in ${e}, ${t.main}, #000 ${(s * 100).toFixed(0)}%)`));
}
function Rc(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[700],
    light: pt[400],
    dark: pt[800]
  };
}
function zc(e = "light") {
  return e === "dark" ? {
    main: dt[200],
    light: dt[50],
    dark: dt[400]
  } : {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  };
}
function Mc(e = "light") {
  return e === "dark" ? {
    main: ut[500],
    light: ut[300],
    dark: ut[700]
  } : {
    main: ut[700],
    light: ut[400],
    dark: ut[800]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: ft[400],
    light: ft[300],
    dark: ft[700]
  } : {
    main: ft[700],
    light: ft[500],
    dark: ft[900]
  };
}
function Dc(e = "light") {
  return e === "dark" ? {
    main: ht[400],
    light: ht[300],
    dark: ht[700]
  } : {
    main: ht[800],
    light: ht[500],
    dark: ht[900]
  };
}
function Fc(e = "light") {
  return e === "dark" ? {
    main: Tt[400],
    light: Tt[300],
    dark: Tt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Tt[500],
    dark: Tt[900]
  };
}
function Nc(e) {
  return `oklch(from ${e} var(--__l) 0 h / var(--__a))`;
}
function xn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    colorSpace: o,
    ...a
  } = e, s = e.primary || Rc(t), c = e.secondary || zc(t), d = e.error || Mc(t), u = e.info || Pc(t), m = e.success || Dc(t), x = e.warning || Fc(t);
  function y(C) {
    if (o)
      return Nc(C);
    const w = oo(C, Ur.text.primary) >= r ? Ur.text.primary : ii.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const R = oo(C, w);
      R < 3 && console.error([`MUI: The contrast ratio of ${R}:1 for ${w} on ${C}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return w;
  }
  const f = ({
    color: C,
    name: w,
    mainShade: R = 500,
    lightShade: A = 300,
    darkShade: _ = 700
  }) => {
    if (C = {
      ...C
    }, !C.main && C[R] && (C.main = C[R]), !C.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${w ? ` (${w})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${R}\` property.` : ct(11, w ? ` (${w})` : "", R));
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
} });` : ct(12, w ? ` (${w})` : "", JSON.stringify(C.main)));
    return o ? (ho(o, C, "light", A, n), ho(o, C, "dark", _, n)) : (fo(C, "light", A, n), fo(C, "dark", _, n)), C.contrastText || (C.contrastText = y(C.main)), C;
  };
  let S;
  return t === "light" ? S = oi() : t === "dark" && (S = ai()), process.env.NODE_ENV !== "production" && (S || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), De({
    // A collection of common colors.
    common: {
      ...Ft
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: f({
      color: s,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: f({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: f({
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: f({
      color: x,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: f({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: f({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: Oc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: f,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...S
  }, a);
}
function Wc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, a] = n;
    typeof a == "object" && (t[o] = `${a.fontStyle ? `${a.fontStyle} ` : ""}${a.fontVariant ? `${a.fontVariant} ` : ""}${a.fontWeight ? `${a.fontWeight} ` : ""}${a.fontStretch ? `${a.fontStretch} ` : ""}${a.fontSize || ""}${a.lineHeight ? `/${a.lineHeight} ` : ""}${a.fontFamily || ""}`);
  }), t;
}
function Lc(e, t) {
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
const mo = {
  textTransform: "uppercase"
}, go = '"Roboto", "Helvetica", "Arial", sans-serif';
function si(e, t) {
  const {
    fontFamily: r = go,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: u,
    pxToRem: m,
    ...x
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, f = m || ((C) => `${C / d * y}rem`), S = (C, w, R, A, _) => ({
    fontFamily: r,
    fontWeight: C,
    fontSize: f(w),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: R,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === go ? {
      letterSpacing: `${Bc(A / w)}em`
    } : {},
    ..._,
    ...u
  }), g = {
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
    button: S(s, 14, 1.75, 0.4, mo),
    caption: S(a, 12, 1.66, 0.4),
    overline: S(a, 12, 2.66, 1, mo),
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
    htmlFontSize: d,
    pxToRem: f,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: c,
    ...g
  }, x, {
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
function xo(e) {
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
        easing: c = t.easeInOut,
        delay: d = 0,
        ...u
      } = a;
      if (process.env.NODE_ENV !== "production") {
        const m = (y) => typeof y == "string", x = (y) => !Number.isNaN(parseFloat(y));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !x(s) && !m(s) && console.error(`MUI: Argument "duration" must be a number or a string but found ${s}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !x(d) && !m(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof a != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(u).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(u).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof s == "string" ? s : xo(s)} ${c} ${typeof d == "string" ? d : xo(d)}`).join(",");
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
function Qc(e) {
  return Ke(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ci(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let a = 0; a < o.length; a++) {
      const [s, c] = o[a];
      !Qc(c) || s.startsWith("unstable_") || s.startsWith("internal_") ? delete n[s] : Ke(c) && (n[s] = {
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
function yo(e) {
  return typeof e == "number" ? `${(e * 100).toFixed(0)}%` : `calc((${e}) * 100%)`;
}
const Jc = (e) => {
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
      return n.colorSpace ? `oklch(from ${t} l c h / ${typeof r == "string" ? `calc(${r})` : r})` : n.vars ? `rgba(${t.replace(/var\(--([^,\s)]+)(?:,[^)]+)?\)+/g, "var(--$1Channel)")} / ${typeof r == "string" ? `calc(${r})` : r})` : Jo(t, Jc(r));
    },
    lighten(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #fff ${yo(r)})` : vr(t, r);
    },
    darken(t, r) {
      const n = this || e;
      return n.colorSpace ? `color-mix(in ${n.colorSpace}, ${t}, #000 ${yo(r)})` : Sr(t, r);
    }
  });
}
function Gr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: a = {},
    transitions: s = {},
    typography: c = {},
    shape: d,
    colorSpace: u,
    ...m
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature." : ct(22));
  const x = xn({
    ...a,
    colorSpace: u
  }), y = cn(e);
  let f = De(y, {
    mixins: Lc(y.breakpoints, n),
    palette: x,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Uc.slice(),
    typography: si(x, c),
    transitions: Kc(s),
    zIndex: {
      ...Xc
    }
  });
  if (f = De(f, m), f = t.reduce((S, g) => De(S, g), f), process.env.NODE_ENV !== "production") {
    const S = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], g = (C, w) => {
      let R;
      for (R in C) {
        const A = C[R];
        if (S.includes(R) && Object.keys(A).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const _ = un("", R);
            console.error([`MUI: The \`${w}\` component increases the CSS specificity of the \`${R}\` internal state.`, "You can not override it like this: ", JSON.stringify(C, null, 2), "", `Instead, you need to use the '&.${_}' syntax:`, JSON.stringify({
              root: {
                [`&.${_}`]: A
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          C[R] = {};
        }
      }
    };
    Object.keys(f.components).forEach((C) => {
      const w = f.components[C].styleOverrides;
      w && C.startsWith("Mui") && g(w, C);
    });
  }
  return f.unstable_sxConfig = {
    ...yr,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, f.unstable_sx = function(g) {
    return wt({
      sx: g,
      theme: this
    });
  }, f.toRuntimeSource = ci, Zc(f), f;
}
function el(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const tl = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = el(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function li(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function di(e) {
  return e === "dark" ? tl : [];
}
function rl(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    colorSpace: o,
    ...a
  } = e, s = xn({
    ...t,
    colorSpace: o
  });
  return {
    palette: s,
    opacity: {
      ...li(s.mode),
      ...r
    },
    overlays: n || di(s.mode),
    ...a
  };
}
function nl(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|modularCssLayers|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const ol = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], il = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let a = o;
  if (o === "class" && (a = ".%s"), o === "data" && (a = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (a = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const s = {};
      return ol(e.cssVarPrefix).forEach((c) => {
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
function al(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function v(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function _t(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : Qo(e);
}
function qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = At(_t(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function sl(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ue = (e) => {
  try {
    return e();
  } catch {
  }
}, cl = (e = "mui") => Ec(e);
function Nr(e, t, r, n, o) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const a = o === "dark" ? "dark" : "light";
  if (!n) {
    t[o] = rl({
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
  } = Gr({
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
      ...li(a),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || di(a)
  }, c;
}
function ll(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: a = "mui",
    nativeColor: s = !1,
    shouldSkipGeneratingVar: c = nl,
    colorSchemeSelector: d = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...m
  } = e, x = Object.keys(r)[0], y = n || (r.light && x !== "light" ? "light" : x), f = cl(a), {
    [y]: S,
    light: g,
    dark: C,
    ...w
  } = r, R = {
    ...w
  };
  let A = S;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (A = !0), !A)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${y}\` option is either missing or invalid.` : ct(21, y));
  let _;
  s && (_ = "oklch");
  const k = Nr(_, R, A, m, y);
  g && !R.light && Nr(_, R, g, void 0, "light"), C && !R.dark && Nr(_, R, C, void 0, "dark");
  let $ = {
    defaultColorScheme: y,
    ...k,
    cssVarPrefix: a,
    colorSchemeSelector: d,
    rootSelector: u,
    getCssVar: f,
    colorSchemes: R,
    font: {
      ...Wc(k.typography),
      ...k.font
    },
    spacing: sl(m.spacing)
  };
  Object.keys($.colorSchemes).forEach((W) => {
    const h = $.colorSchemes[W].palette, z = (L) => {
      const G = L.split("-"), pe = G[1], Ce = G[2];
      return f(L, h[pe][Ce]);
    };
    h.mode === "light" && (v(h.common, "background", "#fff"), v(h.common, "onBackground", "#000")), h.mode === "dark" && (v(h.common, "background", "#000"), v(h.common, "onBackground", "#fff"));
    function I(L, G, pe) {
      if (_) {
        let Ce;
        return L === ot && (Ce = `transparent ${((1 - pe) * 100).toFixed(0)}%`), L === ae && (Ce = `#000 ${(pe * 100).toFixed(0)}%`), L === se && (Ce = `#fff ${(pe * 100).toFixed(0)}%`), `color-mix(in ${_}, ${G}, ${Ce})`;
      }
      return L(G, pe);
    }
    if (al(h, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), h.mode === "light") {
      v(h.Alert, "errorColor", I(ae, s ? f("palette-error-light") : h.error.light, 0.6)), v(h.Alert, "infoColor", I(ae, s ? f("palette-info-light") : h.info.light, 0.6)), v(h.Alert, "successColor", I(ae, s ? f("palette-success-light") : h.success.light, 0.6)), v(h.Alert, "warningColor", I(ae, s ? f("palette-warning-light") : h.warning.light, 0.6)), v(h.Alert, "errorFilledBg", z("palette-error-main")), v(h.Alert, "infoFilledBg", z("palette-info-main")), v(h.Alert, "successFilledBg", z("palette-success-main")), v(h.Alert, "warningFilledBg", z("palette-warning-main")), v(h.Alert, "errorFilledColor", Ue(() => h.getContrastText(h.error.main))), v(h.Alert, "infoFilledColor", Ue(() => h.getContrastText(h.info.main))), v(h.Alert, "successFilledColor", Ue(() => h.getContrastText(h.success.main))), v(h.Alert, "warningFilledColor", Ue(() => h.getContrastText(h.warning.main))), v(h.Alert, "errorStandardBg", I(se, s ? f("palette-error-light") : h.error.light, 0.9)), v(h.Alert, "infoStandardBg", I(se, s ? f("palette-info-light") : h.info.light, 0.9)), v(h.Alert, "successStandardBg", I(se, s ? f("palette-success-light") : h.success.light, 0.9)), v(h.Alert, "warningStandardBg", I(se, s ? f("palette-warning-light") : h.warning.light, 0.9)), v(h.Alert, "errorIconColor", z("palette-error-main")), v(h.Alert, "infoIconColor", z("palette-info-main")), v(h.Alert, "successIconColor", z("palette-success-main")), v(h.Alert, "warningIconColor", z("palette-warning-main")), v(h.AppBar, "defaultBg", z("palette-grey-100")), v(h.Avatar, "defaultBg", z("palette-grey-400")), v(h.Button, "inheritContainedBg", z("palette-grey-300")), v(h.Button, "inheritContainedHoverBg", z("palette-grey-A100")), v(h.Chip, "defaultBorder", z("palette-grey-400")), v(h.Chip, "defaultAvatarColor", z("palette-grey-700")), v(h.Chip, "defaultIconColor", z("palette-grey-700")), v(h.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), v(h.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), v(h.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), v(h.LinearProgress, "primaryBg", I(se, s ? f("palette-primary-main") : h.primary.main, 0.62)), v(h.LinearProgress, "secondaryBg", I(se, s ? f("palette-secondary-main") : h.secondary.main, 0.62)), v(h.LinearProgress, "errorBg", I(se, s ? f("palette-error-main") : h.error.main, 0.62)), v(h.LinearProgress, "infoBg", I(se, s ? f("palette-info-main") : h.info.main, 0.62)), v(h.LinearProgress, "successBg", I(se, s ? f("palette-success-main") : h.success.main, 0.62)), v(h.LinearProgress, "warningBg", I(se, s ? f("palette-warning-light") : h.warning.main, 0.62)), v(h.Skeleton, "bg", _ ? I(ot, s ? f("palette-text-primary") : h.text.primary, 0.11) : `rgba(${z("palette-text-primaryChannel")} / 0.11)`), v(h.Slider, "primaryTrack", I(se, s ? f("palette-primary-main") : h.primary.main, 0.62)), v(h.Slider, "secondaryTrack", I(se, s ? f("palette-secondary-main") : h.secondary.main, 0.62)), v(h.Slider, "errorTrack", I(se, s ? f("palette-error-main") : h.error.main, 0.62)), v(h.Slider, "infoTrack", I(se, s ? f("palette-info-main") : h.info.main, 0.62)), v(h.Slider, "successTrack", I(se, s ? f("palette-success-main") : h.success.main, 0.62)), v(h.Slider, "warningTrack", I(se, s ? f("palette-warning-main") : h.warning.main, 0.62));
      const L = _ ? I(ae, s ? f("palette-background-default") : h.background.default, 0.6825) : Ut(h.background.default, 0.8);
      v(h.SnackbarContent, "bg", L), v(h.SnackbarContent, "color", Ue(() => _ ? Ur.text.primary : h.getContrastText(L))), v(h.SpeedDialAction, "fabHoverBg", Ut(h.background.paper, 0.15)), v(h.StepConnector, "border", z("palette-grey-400")), v(h.StepContent, "border", z("palette-grey-400")), v(h.Switch, "defaultColor", z("palette-common-white")), v(h.Switch, "defaultDisabledColor", z("palette-grey-100")), v(h.Switch, "primaryDisabledColor", I(se, s ? f("palette-primary-main") : h.primary.main, 0.62)), v(h.Switch, "secondaryDisabledColor", I(se, s ? f("palette-secondary-main") : h.secondary.main, 0.62)), v(h.Switch, "errorDisabledColor", I(se, s ? f("palette-error-main") : h.error.main, 0.62)), v(h.Switch, "infoDisabledColor", I(se, s ? f("palette-info-main") : h.info.main, 0.62)), v(h.Switch, "successDisabledColor", I(se, s ? f("palette-success-main") : h.success.main, 0.62)), v(h.Switch, "warningDisabledColor", I(se, s ? f("palette-warning-main") : h.warning.main, 0.62)), v(h.TableCell, "border", I(se, ot(s ? f("palette-divider") : h.divider, 1), 0.88)), v(h.Tooltip, "bg", I(ot, s ? f("palette-grey-700") : h.grey[700], 0.92));
    }
    if (h.mode === "dark") {
      v(h.Alert, "errorColor", I(se, s ? f("palette-error-light") : h.error.light, 0.6)), v(h.Alert, "infoColor", I(se, s ? f("palette-info-light") : h.info.light, 0.6)), v(h.Alert, "successColor", I(se, s ? f("palette-success-light") : h.success.light, 0.6)), v(h.Alert, "warningColor", I(se, s ? f("palette-warning-light") : h.warning.light, 0.6)), v(h.Alert, "errorFilledBg", z("palette-error-dark")), v(h.Alert, "infoFilledBg", z("palette-info-dark")), v(h.Alert, "successFilledBg", z("palette-success-dark")), v(h.Alert, "warningFilledBg", z("palette-warning-dark")), v(h.Alert, "errorFilledColor", Ue(() => h.getContrastText(h.error.dark))), v(h.Alert, "infoFilledColor", Ue(() => h.getContrastText(h.info.dark))), v(h.Alert, "successFilledColor", Ue(() => h.getContrastText(h.success.dark))), v(h.Alert, "warningFilledColor", Ue(() => h.getContrastText(h.warning.dark))), v(h.Alert, "errorStandardBg", I(ae, s ? f("palette-error-light") : h.error.light, 0.9)), v(h.Alert, "infoStandardBg", I(ae, s ? f("palette-info-light") : h.info.light, 0.9)), v(h.Alert, "successStandardBg", I(ae, s ? f("palette-success-light") : h.success.light, 0.9)), v(h.Alert, "warningStandardBg", I(ae, s ? f("palette-warning-light") : h.warning.light, 0.9)), v(h.Alert, "errorIconColor", z("palette-error-main")), v(h.Alert, "infoIconColor", z("palette-info-main")), v(h.Alert, "successIconColor", z("palette-success-main")), v(h.Alert, "warningIconColor", z("palette-warning-main")), v(h.AppBar, "defaultBg", z("palette-grey-900")), v(h.AppBar, "darkBg", z("palette-background-paper")), v(h.AppBar, "darkColor", z("palette-text-primary")), v(h.Avatar, "defaultBg", z("palette-grey-600")), v(h.Button, "inheritContainedBg", z("palette-grey-800")), v(h.Button, "inheritContainedHoverBg", z("palette-grey-700")), v(h.Chip, "defaultBorder", z("palette-grey-700")), v(h.Chip, "defaultAvatarColor", z("palette-grey-300")), v(h.Chip, "defaultIconColor", z("palette-grey-300")), v(h.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), v(h.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), v(h.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), v(h.LinearProgress, "primaryBg", I(ae, s ? f("palette-primary-main") : h.primary.main, 0.5)), v(h.LinearProgress, "secondaryBg", I(ae, s ? f("palette-secondary-main") : h.secondary.main, 0.5)), v(h.LinearProgress, "errorBg", I(ae, s ? f("palette-error-main") : h.error.main, 0.5)), v(h.LinearProgress, "infoBg", I(ae, s ? f("palette-info-main") : h.info.main, 0.5)), v(h.LinearProgress, "successBg", I(ae, s ? f("palette-success-main") : h.success.main, 0.5)), v(h.LinearProgress, "warningBg", I(ae, s ? f("palette-warning-main") : h.warning.main, 0.5)), v(h.Skeleton, "bg", _ ? I(ot, s ? f("palette-text-primary") : h.text.primary, 0.13) : `rgba(${z("palette-text-primaryChannel")} / 0.13)`), v(h.Slider, "primaryTrack", I(ae, s ? f("palette-primary-main") : h.primary.main, 0.5)), v(h.Slider, "secondaryTrack", I(ae, s ? f("palette-secondary-main") : h.secondary.main, 0.5)), v(h.Slider, "errorTrack", I(ae, s ? f("palette-error-main") : h.error.main, 0.5)), v(h.Slider, "infoTrack", I(ae, s ? f("palette-info-main") : h.info.main, 0.5)), v(h.Slider, "successTrack", I(ae, s ? f("palette-success-main") : h.success.main, 0.5)), v(h.Slider, "warningTrack", I(ae, s ? f("palette-warning-light") : h.warning.main, 0.5));
      const L = _ ? I(se, s ? f("palette-background-default") : h.background.default, 0.985) : Ut(h.background.default, 0.98);
      v(h.SnackbarContent, "bg", L), v(h.SnackbarContent, "color", Ue(() => _ ? ii.text.primary : h.getContrastText(L))), v(h.SpeedDialAction, "fabHoverBg", Ut(h.background.paper, 0.15)), v(h.StepConnector, "border", z("palette-grey-600")), v(h.StepContent, "border", z("palette-grey-600")), v(h.Switch, "defaultColor", z("palette-grey-300")), v(h.Switch, "defaultDisabledColor", z("palette-grey-600")), v(h.Switch, "primaryDisabledColor", I(ae, s ? f("palette-primary-main") : h.primary.main, 0.55)), v(h.Switch, "secondaryDisabledColor", I(ae, s ? f("palette-secondary-main") : h.secondary.main, 0.55)), v(h.Switch, "errorDisabledColor", I(ae, s ? f("palette-error-main") : h.error.main, 0.55)), v(h.Switch, "infoDisabledColor", I(ae, s ? f("palette-info-main") : h.info.main, 0.55)), v(h.Switch, "successDisabledColor", I(ae, s ? f("palette-success-main") : h.success.main, 0.55)), v(h.Switch, "warningDisabledColor", I(ae, s ? f("palette-warning-light") : h.warning.main, 0.55)), v(h.TableCell, "border", I(ae, ot(s ? f("palette-divider") : h.divider, 1), 0.68)), v(h.Tooltip, "bg", I(ot, s ? f("palette-grey-700") : h.grey[700], 0.92));
    }
    s || (qe(h.background, "default"), qe(h.background, "paper"), qe(h.common, "background"), qe(h.common, "onBackground"), qe(h, "divider")), Object.keys(h).forEach((L) => {
      const G = h[L];
      L !== "tonalOffset" && !s && G && typeof G == "object" && (G.main && v(h[L], "mainChannel", At(_t(G.main))), G.light && v(h[L], "lightChannel", At(_t(G.light))), G.dark && v(h[L], "darkChannel", At(_t(G.dark))), G.contrastText && v(h[L], "contrastTextChannel", At(_t(G.contrastText))), L === "text" && (qe(h[L], "primary"), qe(h[L], "secondary")), L === "action" && (G.active && qe(h[L], "active"), G.selected && qe(h[L], "selected")));
    });
  }), $ = t.reduce((W, h) => De(W, h), $);
  const Y = {
    prefix: a,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: c,
    getSelector: il($),
    enableContrastVars: s
  }, {
    vars: D,
    generateThemeVars: F,
    generateStyleSheets: K
  } = $c($, Y);
  return $.vars = D, Object.entries($.colorSchemes[$.defaultColorScheme]).forEach(([W, h]) => {
    $[W] = h;
  }), $.generateThemeVars = F, $.generateStyleSheets = K, $.generateSpacing = function() {
    return jo(m.spacing, an(this));
  }, $.getColorSchemeSelector = Ac(d), $.spacing = $.generateSpacing(), $.shouldSkipGeneratingVar = c, $.unstable_sxConfig = {
    ...yr,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, $.unstable_sx = function(h) {
    return wt({
      sx: h,
      theme: this
    });
  }, $.internal_cache = {}, $.toRuntimeSource = ci, $;
}
function bo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: xn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function wr(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: a = r == null ? void 0 : r.mode,
    ...s
  } = e, c = a || "light", d = o == null ? void 0 : o[c], u = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Gr(e, ...t);
    let m = r;
    "palette" in e || u[c] && (u[c] !== !0 ? m = u[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const x = Gr({
      ...e,
      palette: m
    }, ...t);
    return x.defaultColorScheme = c, x.colorSchemes = u, x.palette.mode === "light" && (x.colorSchemes.light = {
      ...u.light !== !0 && u.light,
      palette: x.palette
    }, bo(x, "dark", u.dark)), x.palette.mode === "dark" && (x.colorSchemes.dark = {
      ...u.dark !== !0 && u.dark,
      palette: x.palette
    }, bo(x, "light", u.light)), x;
  }
  return !r && !("light" in u) && c === "light" && (u.light = !0), ll({
    ...s,
    colorSchemes: u,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const yn = wr();
function dl() {
  const e = Vo(yn);
  return process.env.NODE_ENV !== "production" && B.useDebugValue(e), e[Qe] || e;
}
function ul(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const pl = (e) => ul(e) && e !== "classes", fl = Qs({
  themeId: Qe,
  defaultTheme: yn,
  rootShouldForwardProp: pl
});
function hl({
  theme: e,
  ...t
}) {
  const r = Qe in e ? e[Qe] : void 0;
  return /* @__PURE__ */ i(Dt, {
    ...t,
    themeId: r ? Qe : void 0,
    theme: r || e
  });
}
const Gt = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
};
process.env.NODE_ENV !== "production" && (T.string, T.string, T.string, T.string, T.string, T.oneOf(["dark", "light", "system"]), T.string, T.string);
const {
  CssVarsProvider: ml
} = kc({
  themeId: Qe,
  // @ts-ignore ignore module augmentation tests
  theme: () => wr({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Gt.colorSchemeStorageKey,
  modeStorageKey: Gt.modeStorageKey,
  defaultColorScheme: {
    light: Gt.defaultLightColorScheme,
    dark: Gt.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: si(e.palette, e.typography)
    };
    return t.unstable_sx = function(n) {
      return wt({
        sx: n,
        theme: this
      });
    }, t;
  }
}), gl = ml;
function ui({
  theme: e,
  ...t
}) {
  const r = B.useMemo(() => {
    if (typeof e == "function")
      return e;
    const n = Qe in e ? e[Qe] : e;
    return "colorSchemes" in n ? null : "vars" in n ? e : {
      ...e,
      vars: null
    };
  }, [e]);
  return r ? /* @__PURE__ */ i(hl, {
    theme: r,
    ...t
  }) : /* @__PURE__ */ i(gl, {
    theme: e,
    ...t
  });
}
function pi(e) {
  return /* @__PURE__ */ i(dn, {
    ...e,
    defaultTheme: yn,
    themeId: Qe
  });
}
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: T.oneOfType([T.array, T.func, T.number, T.object, T.string, T.bool])
});
function fi(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ i(pi, {
        styles: typeof e == "function" ? (n) => e({
          theme: n,
          ...r
        }) : e
      })
    );
  };
}
process.env.NODE_ENV !== "production" && (T.node, T.object.isRequired);
function hi(e) {
  return uc(e);
}
const Yr = typeof fi({}) == "function", xl = (e, t) => ({
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
}), yl = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), mi = (e, t = !1) => {
  var a, s;
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([c, d]) => {
    var m, x;
    const u = e.getColorSchemeSelector(c);
    u.startsWith("@") ? r[u] = {
      ":root": {
        colorScheme: (m = d.palette) == null ? void 0 : m.mode
      }
    } : r[u.replace(/\s*&/, "")] = {
      colorScheme: (x = d.palette) == null ? void 0 : x.mode
    };
  });
  let n = {
    html: xl(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...yl(e),
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
}, Kt = "mui-ecs", bl = (e) => {
  const t = mi(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${Kt})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([n, o]) => {
    var s, c;
    const a = e.getColorSchemeSelector(n);
    a.startsWith("@") ? r[a] = {
      [`:root:not(:has(.${Kt}))`]: {
        colorScheme: (s = o.palette) == null ? void 0 : s.mode
      }
    } : r[a.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Kt}))`]: {
        colorScheme: (c = o.palette) == null ? void 0 : c.mode
      }
    };
  }), t;
}, Sl = fi(Yr ? ({
  theme: e,
  enableColorScheme: t
}) => mi(e, t) : ({
  theme: e
}) => bl(e));
function gi(e) {
  const t = hi({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: n = !1
  } = t;
  return /* @__PURE__ */ p(B.Fragment, {
    children: [Yr && /* @__PURE__ */ i(Sl, {
      enableColorScheme: n
    }), !Yr && !n && /* @__PURE__ */ i("span", {
      className: Kt,
      style: {
        display: "none"
      }
    }), r]
  });
}
process.env.NODE_ENV !== "production" && (gi.propTypes = {
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
const vl = J.fontFamily.code, wl = {
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
}, Cl = (e) => {
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
            fontFamily: vl,
            backgroundColor: t ? b.tints.erieBlack8 : "rgba(255,255,255,0.10)",
            padding: "2px 6px",
            borderRadius: 4
          }
        }
      }
    }
  };
}, kl = (e) => {
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
}, El = () => [
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
], Tl = (e) => wr({
  palette: kl(e),
  typography: wl,
  components: Cl(e),
  shape: {
    borderRadius: 0
    // Brutalist zero radius — aligned with components
  },
  shadows: El()
}), xi = Zr({
  mode: "light",
  toggleColorMode: () => {
  }
}), bn = () => sr(xi), Yd = ({ children: e }) => {
  const [t, r] = V(() => {
    if (typeof window > "u") return "light";
    const s = localStorage.getItem("ai4u-theme-mode");
    return s === "dark" || s === "light" ? s : "light";
  }), n = it(() => {
    r((s) => {
      const c = s === "light" ? "dark" : "light";
      return typeof window < "u" && (localStorage.setItem("ai4u-theme-mode", c), document.documentElement.setAttribute("data-theme", c)), c;
    });
  }, []);
  me(() => {
    document.documentElement.setAttribute("data-theme", t);
  }, [t]);
  const o = _e(() => ({ mode: t, toggleColorMode: n }), [t, n]), a = _e(() => Tl(t), [t]);
  return /* @__PURE__ */ i(xi.Provider, { value: o, children: /* @__PURE__ */ p(ui, { theme: a, children: [
    /* @__PURE__ */ i(gi, {}),
    e
  ] }) });
}, qr = Zr({
  surface: "theme"
}), qd = ({ children: e, surface: t }) => {
  const r = sr(qr), { mode: n } = bn(), o = t || r.surface, a = _e(() => o === "theme" ? n : at[o].effectiveMode, [o, n]), s = _e(() => {
    const c = a === "light";
    return wr({
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
  return /* @__PURE__ */ i(qr.Provider, { value: { surface: o }, children: /* @__PURE__ */ i(ui, { theme: s, children: e }) });
}, Il = () => sr(qr), ee = () => {
  const e = dl(), { mode: t } = bn(), { surface: r } = Il(), n = _e(() => r === "theme" ? Ii[t] : at[r], [t, r]), o = _e(() => r === "theme" ? t : at[r].effectiveMode, [t, r]), a = $i(o);
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
}, Kd = (e, t) => {
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
}, Xd = () => {
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
}, $l = () => {
  const [e, t] = V(!1), [r, n] = V(!1);
  return me(() => {
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
class Al {
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
const ue = new Al(), mt = {
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
class _l {
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
      action: mt.SERVICE_INTEREST,
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
      action: mt.CONSULTATION_REQUEST,
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
      action: mt.DIAGNOSTIC_START,
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
      action: mt.PHILOSOPHY_ENGAGEMENT,
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
      action: mt.PERFORMANCE_ISSUE,
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
      action: mt.ERROR_BOUNDARY_HIT,
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
const yi = new _l();
function Qd(e) {
  typeof window > "u" || !e || (window.__AI4U_GA_ID__ = e);
}
class Ol {
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
    ue.error("🚨 Error captured:", r), yi.trackErrorBoundary(r, r.componentStack), this.sendToRemoteService(r);
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
const Rl = new Ol(), zl = (e, t = {}) => {
  const {
    priority: r = !1,
    size: n = "original",
    format: o = "webp",
    fallback: a,
    preload: s = !1
  } = t, [c, d] = V({
    src: "",
    isLoaded: !1,
    error: !1,
    format: "original",
    size: "original"
  }), [u, m] = V(null);
  me(() => {
    (async () => {
      try {
        const g = await fetch("/assets/images/optimized/image-mapping.json");
        if (g.ok) {
          const C = await g.json();
          m(C);
        }
      } catch {
      }
    })();
  }, []);
  const x = _e(() => {
    var R, A;
    if (!u || !u[e])
      return {
        src: `/assets/images/${e}.jpg`,
        format: "original",
        size: "original"
      };
    const S = u[e];
    let g = "", C = "original", w = "original";
    return o === "webp" && ((R = S.formats) != null && R.webp) ? (g = `/assets/images/optimized/${S.formats.webp.file}`, C = "webp") : (g = `/assets/images/${S.original}`, C = "original"), n !== "original" && ((A = S.sizes) != null && A[n]) && (g = `/assets/images/optimized/${S.sizes[n].file}`, w = n), {
      src: g,
      format: C,
      size: w
    };
  }, [e, u, o, n]);
  me(() => {
    if (!x.src) return;
    d((g) => ({
      ...g,
      src: x.src,
      format: x.format,
      size: x.size,
      isLoaded: !1,
      error: !1
    }));
    const S = new Image();
    return S.onload = () => {
      d((g) => ({
        ...g,
        isLoaded: !0,
        error: !1
      }));
    }, S.onerror = () => {
      x.format === "webp" && !c.error ? d((g) => {
        var C;
        return {
          ...g,
          src: `/assets/images/${((C = u == null ? void 0 : u[e]) == null ? void 0 : C.original) || `${e}.jpg`}`,
          format: "original",
          error: !0
        };
      }) : d(a ? (g) => ({
        ...g,
        src: a,
        format: "fallback",
        error: !0
      }) : (g) => ({
        ...g,
        error: !0
      }));
    }, (r || s) && (S.loading = "eager"), S.src = x.src, () => {
      S.onload = null, S.onerror = null;
    };
  }, [x.src, x.format, a, r, s, c.error, u, e]);
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
}, Wr = (e) => {
  const [t, r] = V(/* @__PURE__ */ new Set()), [n, o] = V(0);
  return me(() => {
    o(e.length);
    const a = (c) => new Promise((d) => {
      const u = new Image();
      u.onload = () => {
        r((m) => new Set(Array.from(m).concat(c))), d();
      }, u.onerror = () => {
        r((m) => new Set(Array.from(m).concat(c))), d();
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
}, Ml = Te(l, {
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
})), rr = (e) => {
  const {
    type: t,
    size: r = "medium",
    color: n,
    variant: o = "filled",
    onClick: a,
    sx: s
  } = e, c = ee(), d = n || c.contrast.text.primary, u = () => {
    const x = {
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
          ...x,
          backgroundColor: "transparent",
          border: `2px solid ${d}`,
          color: d
        };
      case "minimal":
        return {
          ...x,
          backgroundColor: "transparent",
          color: d
        };
      default:
        return {
          ...x,
          backgroundColor: d,
          color: d === c.palette.white ? c.palette.black : c.palette.white,
          border: "none"
        };
    }
  }, m = () => {
    const x = {
      style: {
        fontSize: "inherit"
      }
    };
    switch (t) {
      case "arrow-up":
        return /* @__PURE__ */ i("span", { ...x, children: "↑" });
      case "arrow-down":
        return /* @__PURE__ */ i("span", { ...x, children: "↓" });
      case "arrow-right":
        return /* @__PURE__ */ i("span", { ...x, children: "→" });
      case "arrow-left":
        return /* @__PURE__ */ i("span", { ...x, children: "←" });
      case "plus":
        return /* @__PURE__ */ i("span", { ...x, children: "+" });
      case "minus":
        return /* @__PURE__ */ i("span", { ...x, children: "−" });
      case "circle":
        return /* @__PURE__ */ i("span", { ...x, children: "●" });
      case "square":
        return /* @__PURE__ */ i("span", { ...x, children: "■" });
      case "triangle":
        return /* @__PURE__ */ i("span", { ...x, children: "▲" });
      case "cross":
        return /* @__PURE__ */ i("span", { ...x, children: "✕" });
      case "line":
        return /* @__PURE__ */ i("span", { ...x, children: "—" });
      case "dot":
        return /* @__PURE__ */ i("span", { ...x, children: "•" });
      case "search":
        return /* @__PURE__ */ i("span", { ...x, children: "[?]" });
      case "clear":
        return /* @__PURE__ */ i("span", { ...x, children: "✕" });
      case "check":
        return /* @__PURE__ */ i("span", { ...x, children: "✓" });
      default:
        return /* @__PURE__ */ i("span", { ...x, children: "○" });
    }
  };
  return /* @__PURE__ */ i(
    Ml,
    {
      iconSize: r,
      isClickable: !!a,
      onClick: a,
      sx: { ...u(), ...s },
      children: m()
    }
  );
}, Pl = Zr(void 0), bi = () => {
  const e = sr(Pl);
  if (e === void 0)
    throw new Error("useLoading must be used within a LoadingProvider");
  return e;
}, Jd = ({ images: e, onAllLoaded: t }) => {
  const { setCriticalImagesLoaded: r } = bi();
  return me(() => {
    let n = 0;
    const o = e.length, a = () => {
      n++, n === o && (r(!0), t == null || t());
    }, s = () => {
      n++, n === o && (r(!0), t == null || t());
    };
    e.forEach((c) => {
      const d = new Image();
      d.onload = a, d.onerror = s, d.src = c;
    }), o === 0 && (r(!0), t == null || t());
  }, [e, r, t]), null;
}, Zd = () => {
  const e = Se();
  return /* @__PURE__ */ i(
    l,
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
      children: /* @__PURE__ */ i(Ye, { maxWidth: "lg", children: /* @__PURE__ */ p(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(l, { sx: { mb: 4 }, children: /* @__PURE__ */ i(bt, {}) }),
        /* @__PURE__ */ i(l, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ p(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ p(he, { direction: "row", spacing: 2, children: [
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
}, Sn = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: a,
  skeletonWidth: s,
  priority: c = !1
}) => {
  const d = Se(), { isPWA: u } = $l(), { imgRef: m, isLoaded: x, isInView: y, error: f } = Sa(e, { priority: c }), S = {
    bgcolor: d.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ p(
    l,
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
        !x && /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: a || n,
            sx: S
          }
        ),
        y && /* @__PURE__ */ i(
          l,
          {
            component: "img",
            src: e,
            alt: t,
            loading: c ? "eager" : "lazy",
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: x ? 1 : 0,
              transition: "opacity 0.3s ease-in-out",
              display: x ? "block" : "none",
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
        f && /* @__PURE__ */ i(
          l,
          {
            sx: {
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: d.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
              color: d.palette.text.secondary,
              fontSize: "0.875rem"
            },
            children: "Error al cargar imagen"
          }
        )
      ]
    }
  );
}, eu = ({
  src: e,
  pixelArtSrc: t,
  alt: r,
  width: n = "100%",
  height: o = "auto",
  transitionDuration: a = 0.3,
  sx: s,
  ...c
}) => {
  const [d, u] = V(!1);
  return /* @__PURE__ */ i(
    l,
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
          opacity: d ? 0 : 1,
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
          opacity: d ? 1 : 0,
          zIndex: 2
        },
        ...s
      },
      ...c,
      children: /* @__PURE__ */ i(
        l,
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
}, tu = ({
  src: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  transitionDuration: o = 0.3,
  pixelSize: a = 8,
  sx: s,
  ...c
}) => {
  const [d, u] = V(!1);
  return /* @__PURE__ */ p(
    l,
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
          l,
          {
            component: "img",
            src: e,
            alt: t,
            sx: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: `all ${o}s ease-in-out`,
              filter: d ? "contrast(1.4) brightness(1.2) saturate(1.5) blur(0.3px)" : "none",
              imageRendering: d ? "pixelated" : "auto",
              transform: d ? "scale(1.05)" : "scale(1)",
              "&::before": d ? {
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
        d && /* @__PURE__ */ i(
          l,
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
        d && /* @__PURE__ */ i(
          l,
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
        d && /* @__PURE__ */ i(
          l,
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
}, Dl = "es,en,zh-CN,hi,ar,pt,ru,ja,de,fr", Fl = `
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
`, Nl = () => (me(() => {
  if (document.getElementById("google-translate-script")) return;
  window.googleTranslateElementInit = () => {
    var t;
    try {
      (t = window.google) != null && t.translate && document.getElementById("google_translate_element") && (new window.google.translate.TranslateElement(
        {
          pageLanguage: "es",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: !1,
          includedLanguages: Dl,
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
}, []), /* @__PURE__ */ p(be, { children: [
  /* @__PURE__ */ i(
    l,
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
  /* @__PURE__ */ i("style", { children: Fl })
] })), Kr = [
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
], nr = "es";
function Wl() {
  const e = document.cookie.match(/googtrans=([^;]+)/);
  if (e && e[1]) {
    const o = e[1].trim();
    if (o) {
      const a = o.split("/").filter(Boolean), s = a[a.length - 1];
      if (s && s !== nr) {
        const c = Kr.find((d) => d.code === s || d.code.startsWith(s));
        if (c) return c.short;
      }
    }
  }
  const r = (document.documentElement.lang || nr).split("-")[0].toLowerCase(), n = Kr.find((o) => o.code.toLowerCase().startsWith(r));
  return (n == null ? void 0 : n.short) ?? "ES";
}
const So = ({ light: e = !1 }) => {
  const t = ee(), r = Se(), n = Xt(r.breakpoints.down("sm")), o = Xt(r.breakpoints.between("sm", "md")), [a, s] = V(Wl), [c, d] = V(null), [u, m] = V(() => !!document.getElementById("google-translate-script")), x = Wt(null), y = !!c;
  me(() => {
    if (document.getElementById("google-translate-script")) {
      m(!0);
      return;
    }
    const w = setInterval(() => {
      document.getElementById("google-translate-script") && (m(!0), clearInterval(w));
    }, 200), R = setTimeout(() => {
      clearInterval(w), m(!0);
    }, 5e3);
    return () => {
      clearInterval(w), clearTimeout(R);
    };
  }, []);
  const f = (w) => {
    d(w.currentTarget);
  }, S = () => {
    d(null);
  }, g = (w, R) => {
    if (S(), w === nr) {
      document.cookie = "googtrans=; path=/; max-age=0", document.cookie = "googtrans=; path=/; domain=" + window.location.hostname + "; max-age=0", window.location.reload();
      return;
    }
    const A = `/${nr}/${w}`;
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
  return /* @__PURE__ */ p(
    l,
    {
      sx: {
        position: "relative",
        display: "inline-flex",
        alignItems: "center"
      },
      children: [
        /* @__PURE__ */ i(
          l,
          {
            ref: x,
            component: "button",
            onClick: f,
            "aria-label": `Cambiar idioma (actual: ${a})`,
            "aria-controls": y ? "language-menu" : void 0,
            "aria-haspopup": "true",
            "aria-expanded": y ? "true" : void 0,
            disabled: !u,
            sx: (w) => {
              const R = C(w);
              return {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: R.width,
                height: R.height,
                minWidth: R.width,
                padding: 0,
                color: e ? "#FFFFFF" : t.contrast.text.primary,
                border: "none",
                borderRadius: w.spacing(0.75),
                transition: "all 0.3s ease-in-out",
                backgroundColor: e ? "transparent" : t.contrast.surface,
                fontFamily: w.typography.fontFamily,
                fontSize: R.fontSize,
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
          Io,
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
                  boxShadow: Rt.md
                })
              }
            },
            children: Kr.map((w) => /* @__PURE__ */ i(
              Yt,
              {
                onClick: () => g(w.code, w.short),
                selected: a === w.short,
                sx: (R) => ({
                  fontFamily: R.typography.fontFamily,
                  fontSize: R.typography.body2.fontSize,
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
                children: /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
                  /* @__PURE__ */ i(
                    l,
                    {
                      component: "span",
                      sx: (R) => ({
                        fontWeight: 400,
                        minWidth: R.spacing(3),
                        color: a === w.short ? t.palette.black : t.contrast.text.secondary
                      }),
                      children: w.short
                    }
                  ),
                  /* @__PURE__ */ i(l, { component: "span", children: w.label })
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
let Xr = null;
try {
  Xr = require("react-helmet-async").Helmet;
} catch {
}
const Si = (e) => {
  if (typeof window > "u" || !Xr) return null;
  const t = Xr, {
    title: r = "AI4U - Inteligencia Artificial para tu Negocio",
    description: n = "Soluciones de Inteligencia Artificial personalizadas para tu negocio. Automatización inteligente, GPT personalizado, SuperAI empresarial.",
    keywords: o = "inteligencia artificial, IA, automatización, GPT personalizado, SuperAI, AI empresarial, Colombia",
    canonical: a,
    ogImage: s = "/assets/images/ai4u-logo.png",
    ogType: c = "website",
    structuredData: d,
    noIndex: u = !1,
    noFollow: m = !1
  } = e, x = r.includes("AI4U") ? r : `${r} | AI4U`, y = a ?? window.location.href;
  return /* @__PURE__ */ p(t, { children: [
    /* @__PURE__ */ i("title", { children: x }),
    /* @__PURE__ */ i("meta", { name: "description", content: n }),
    /* @__PURE__ */ i("meta", { name: "keywords", content: o }),
    /* @__PURE__ */ i("meta", { name: "robots", content: u || m ? `${u ? "noindex" : "index"},${m ? "nofollow" : "follow"}` : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" }),
    y && /* @__PURE__ */ i("link", { rel: "canonical", href: y }),
    /* @__PURE__ */ i("meta", { property: "og:title", content: x }),
    /* @__PURE__ */ i("meta", { property: "og:description", content: n }),
    /* @__PURE__ */ i("meta", { property: "og:type", content: c }),
    y && /* @__PURE__ */ i("meta", { property: "og:url", content: y }),
    /* @__PURE__ */ i("meta", { property: "og:image", content: s }),
    /* @__PURE__ */ i("meta", { property: "og:site_name", content: "AI4U" }),
    /* @__PURE__ */ i("meta", { property: "og:locale", content: "es_CO" }),
    /* @__PURE__ */ i("meta", { property: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ i("meta", { property: "twitter:title", content: x }),
    /* @__PURE__ */ i("meta", { property: "twitter:description", content: n }),
    /* @__PURE__ */ i("meta", { property: "twitter:image", content: s }),
    /* @__PURE__ */ i("meta", { property: "twitter:site", content: "@ai4u_co" }),
    d && /* @__PURE__ */ i("script", { type: "application/ld+json", children: JSON.stringify(d) })
  ] });
}, ru = (e = {}) => {
  const {
    title: t = "AI4U - Inteligencia Artificial para tu Negocio",
    description: r = "Soluciones de Inteligencia Artificial personalizadas para tu negocio.",
    keywords: n,
    canonical: o,
    ogImage: a = "/assets/images/ai4u-logo.png",
    ogType: s = "website",
    noIndex: c = !1,
    noFollow: d = !1
  } = e, u = t.includes("AI4U") ? t : `${t} | AI4U`;
  return {
    title: u,
    description: r,
    ...n && { keywords: n },
    robots: {
      index: !c,
      follow: !d,
      googleBot: { index: !c, follow: !d }
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
}, nu = ({
  src: e,
  alt: t,
  width: r,
  height: n,
  sx: o,
  priority: a = !1,
  fallback: s
}) => {
  const [c, d] = V(!1), [u, m] = V(!1), [x, y] = V(e), f = ee(), S = () => {
    const R = document.createElement("canvas");
    return R.width = 1, R.height = 1, R.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }, g = (R) => R.includes("/assets/images/") ? R.replace(/\.(jpg|jpeg|png)$/i, ".webp") : R;
  me(() => {
    S() && e.includes("/assets/images/") ? y(g(e)) : y(e);
  }, [e]);
  const C = () => {
    d(!0), m(!1);
  }, w = () => {
    x !== e && !u ? (y(e), m(!0)) : s && (y(s), m(!0));
  };
  return /* @__PURE__ */ p(l, { sx: { position: "relative", width: r, height: n }, children: [
    !c && /* @__PURE__ */ i(
      ne,
      {
        variant: "rectangular",
        width: r,
        height: n,
        sx: {
          borderRadius: 1,
          bgcolor: f.contrast.surface,
          ...o
        }
      }
    ),
    /* @__PURE__ */ i(
      "img",
      {
        src: x,
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
}, ou = ({
  imageName: e,
  alt: t,
  width: r = "100%",
  height: n = "auto",
  sx: o = {},
  skeletonHeight: a,
  skeletonWidth: s,
  priority: c = !1,
  size: d = "original",
  format: u = "webp",
  fallback: m,
  preload: x = !1,
  showOptimizationInfo: y = !1,
  className: f
}) => {
  const S = Se(), {
    src: g,
    isLoaded: C,
    error: w,
    isLoading: R
  } = zl(e, {
    priority: c,
    size: d,
    format: u,
    fallback: m,
    preload: x
  }), A = {
    bgcolor: S.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
    borderRadius: 1
  };
  return /* @__PURE__ */ p(
    l,
    {
      className: f,
      sx: {
        position: "relative",
        width: r,
        height: n,
        overflow: "hidden",
        ...o
      },
      children: [
        R && /* @__PURE__ */ i(
          ne,
          {
            variant: "rectangular",
            width: s || r,
            height: a || n,
            sx: A
          }
        ),
        !w && /* @__PURE__ */ i(
          l,
          {
            component: "img",
            src: g,
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
        w && /* @__PURE__ */ p(
          l,
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
              /* @__PURE__ */ i(l, { component: "span", sx: { fontSize: "2rem" }, children: "IMG" }),
              /* @__PURE__ */ i(l, { component: "span", children: "Error al cargar imagen" }),
              y && /* @__PURE__ */ i(l, { component: "span", sx: { fontSize: "0.75rem", opacity: 0.7 }, children: e })
            ]
          }
        ),
        y && !1
      ]
    }
  );
}, iu = ({
  criticalImages: e,
  importantImages: t,
  backgroundImages: r,
  onCriticalLoaded: n,
  onImportantLoaded: o,
  onAllLoaded: a,
  showProgress: s = !1
}) => {
  const { setCriticalImagesLoaded: c } = bi(), [d, u] = V("critical"), m = Wr(e), x = Wr(t), y = Wr(r);
  me(() => {
    m.isComplete && (c(!0), n == null || n(), u("important"));
  }, [m.isComplete, c, n]), me(() => {
    d === "important" && x.isComplete && (o == null || o(), u("background"));
  }, [d, x.isComplete, o]), me(() => {
    d === "background" && y.isComplete && (a == null || a(), u("complete"));
  }, [d, y.isComplete, a]);
  const f = e.length + t.length + r.length, S = m.loadedImages.length + x.loadedImages.length + y.loadedImages.length, g = f > 0 ? S / f * 100 : 0;
  return s ? /* @__PURE__ */ p("div", { style: {
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
      width: `${g}%`,
      height: "100%",
      backgroundColor: "#4CAF50",
      transition: "width 0.3s ease"
    } }) }) }),
    /* @__PURE__ */ p("div", { style: { fontSize: "1rem", marginBottom: "0.5rem" }, children: [
      "Fase: ",
      d === "critical" ? "Críticas" : d === "important" ? "Importantes" : d === "background" ? "Fondo" : "Completado"
    ] }),
    /* @__PURE__ */ p("div", { style: { fontSize: "0.875rem", opacity: 0.8 }, children: [
      S,
      " / ",
      f,
      " imágenes cargadas"
    ] }),
    /* @__PURE__ */ p("div", { style: { fontSize: "0.75rem", opacity: 0.6, marginTop: "1rem" }, children: [
      /* @__PURE__ */ p("div", { children: [
        "Críticas: ",
        m.loadedImages.length,
        "/",
        e.length
      ] }),
      /* @__PURE__ */ p("div", { children: [
        "Importantes: ",
        x.loadedImages.length,
        "/",
        t.length
      ] }),
      /* @__PURE__ */ p("div", { children: [
        "Fondo: ",
        y.loadedImages.length,
        "/",
        r.length
      ] })
    ] })
  ] }) : null;
}, zt = ({
  href: e,
  variant: t = "subtle",
  children: r,
  className: n,
  ariaLabel: o,
  LinkComponent: a,
  onClick: s
}) => {
  const c = ee();
  return /* @__PURE__ */ i(
    $o,
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
}, Ll = (e) => {
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
    l,
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
}, au = ({
  serviceId: e,
  serviceColor: t,
  size: r = "medium",
  className: n,
  customThumbnail: o
}) => {
  const a = ee(), c = {
    small: { width: 80, height: 80 },
    medium: { width: 120, height: 120 },
    large: { width: 160, height: 160 },
    "full-width": { width: "100%", height: "auto", aspectRatio: "1/1" }
  }[r], d = t || a.palette.accent, m = ((x) => {
    const y = x.split("").reduce((S, g) => S + g.charCodeAt(0), 0), f = [
      // Patrón de círculos
      `<circle cx="30%" cy="30%" r="8" fill="${d}40"/>
       <circle cx="70%" cy="70%" r="12" fill="${d}60"/>
       <circle cx="20%" cy="80%" r="6" fill="${d}80"/>`,
      // Patrón de cuadrados
      `<rect x="20%" y="20%" width="25%" height="25%" fill="${d}40" rx="2"/>
       <rect x="60%" y="60%" width="30%" height="30%" fill="${d}60" rx="2"/>
       <rect x="10%" y="70%" width="20%" height="20%" fill="${d}80" rx="2"/>`,
      // Patrón de triángulos
      `<polygon points="30,20 50,40 10,40" fill="${d}40"/>
       <polygon points="70,60 90,80 50,80" fill="${d}60"/>
       <polygon points="20,70 30,90 10,90" fill="${d}80"/>`,
      // Patrón de líneas
      `<line x1="20%" y1="30%" x2="80%" y2="30%" stroke="${d}60" stroke-width="3"/>
       <line x1="30%" y1="60%" x2="90%" y2="60%" stroke="${d}40" stroke-width="2"/>
       <line x1="10%" y1="80%" x2="70%" y2="80%" stroke="${d}80" stroke-width="4"/>`
    ];
    return f[y % f.length];
  })(e);
  return o ? /* @__PURE__ */ p(
    l,
    {
      className: n,
      sx: {
        width: c.width,
        height: c.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        border: `1px solid ${d}20`,
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${d}30`,
            borderColor: `${d}40`
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
          l,
          {
            sx: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${d}10 0%, transparent 100%)`,
              pointerEvents: "none"
            }
          }
        )
      ]
    }
  ) : /* @__PURE__ */ p(
    l,
    {
      className: n,
      sx: {
        width: c.width,
        height: c.height,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
        background: `linear-gradient(135deg, ${d}10 0%, ${d}05 100%)`,
        border: `1px solid ${d}20`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s ease",
        ...r !== "full-width" && {
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: `0 8px 25px ${d}30`,
            borderColor: `${d}40`
          }
        }
      },
      children: [
        /* @__PURE__ */ p(
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
              /* @__PURE__ */ i("defs", { children: /* @__PURE__ */ p("linearGradient", { id: `gradient-${e}`, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
                /* @__PURE__ */ i("stop", { offset: "0%", stopColor: `${d}20` }),
                /* @__PURE__ */ i("stop", { offset: "100%", stopColor: `${d}10` })
              ] }) }),
              /* @__PURE__ */ i("rect", { width: "100%", height: "100%", fill: `url(#gradient-${e})` }),
              /* @__PURE__ */ i("g", { dangerouslySetInnerHTML: { __html: m } }),
              /* @__PURE__ */ i(
                "rect",
                {
                  width: "100%",
                  height: "100%",
                  fill: "none",
                  stroke: `${d}30`,
                  strokeWidth: "0.5",
                  strokeDasharray: "2,2"
                }
              )
            ]
          }
        ),
        r === "large" && /* @__PURE__ */ i(
          l,
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
              l,
              {
                sx: {
                  fontSize: "0.6rem",
                  fontWeight: 400,
                  color: d,
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
}, su = ({
  children: e,
  numberVariant: t = "primary",
  sx: r,
  ...n
}) => /* @__PURE__ */ i(
  l,
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
), Bl = Ai`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`, Qr = ({
  status: e,
  size: t = 8,
  pulse: r,
  label: n,
  className: o
}) => {
  const a = b.telemetry[e], c = /* @__PURE__ */ i(
    l,
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
        animation: r ?? (e === "online" || e === "starting") ? `${Bl} 2s ease-out infinite` : "none"
      }
    }
  );
  return n ? /* @__PURE__ */ p(
    l,
    {
      sx: {
        display: "inline-flex",
        alignItems: "center",
        gap: 0.75
      },
      children: [
        c,
        /* @__PURE__ */ i(
          l,
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
  ) : c;
}, jl = {
  "file-scan": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("circle", { cx: "11", cy: "15", r: "2" }),
    /* @__PURE__ */ i("path", { d: "m13.5 17.5 1.5 1.5" })
  ] }),
  package: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "m7.5 4.27 9 5.15" }),
    /* @__PURE__ */ i("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
    /* @__PURE__ */ i("path", { d: "m3.3 7 8.7 5 8.7-5" }),
    /* @__PURE__ */ i("path", { d: "M12 22V12" })
  ] }),
  grid: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ i("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  tag: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" }),
    /* @__PURE__ */ i("circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor" })
  ] }),
  "clipboard-list": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1" }),
    /* @__PURE__ */ i("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
    /* @__PURE__ */ i("path", { d: "M12 11h4" }),
    /* @__PURE__ */ i("path", { d: "M12 16h4" }),
    /* @__PURE__ */ i("path", { d: "M8 11h.01" }),
    /* @__PURE__ */ i("path", { d: "M8 16h.01" })
  ] }),
  landmark: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("line", { x1: "3", y1: "22", x2: "21", y2: "22" }),
    /* @__PURE__ */ i("line", { x1: "6", y1: "18", x2: "6", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "18", x2: "10", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "14", y1: "18", x2: "14", y2: "11" }),
    /* @__PURE__ */ i("line", { x1: "18", y1: "18", x2: "18", y2: "11" }),
    /* @__PURE__ */ i("polygon", { points: "12 2 20 7 4 7" })
  ] }),
  "refresh-cw": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }),
    /* @__PURE__ */ i("path", { d: "M21 3v5h-5" }),
    /* @__PURE__ */ i("path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }),
    /* @__PURE__ */ i("path", { d: "M8 16H3v5" })
  ] }),
  diamond: /* @__PURE__ */ i("path", { d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z" }),
  "trending-up": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }),
    /* @__PURE__ */ i("polyline", { points: "16 7 22 7 22 13" })
  ] }),
  users: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
    /* @__PURE__ */ i("circle", { cx: "9", cy: "7", r: "4" }),
    /* @__PURE__ */ i("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
    /* @__PURE__ */ i("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  ] }),
  "rotate-cw": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M21 2v6h-6" }),
    /* @__PURE__ */ i("path", { d: "M21 13a9 9 0 1 1-3-7.7L21 8" })
  ] }),
  power: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M12 2v6" }),
    /* @__PURE__ */ i("path", { d: "M18.4 5.6a9 9 0 1 1-12.77.04" })
  ] }),
  terminal: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("polyline", { points: "4 17 10 11 4 5" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "19", x2: "20", y2: "19" })
  ] }),
  "external-link": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
    /* @__PURE__ */ i("polyline", { points: "15 3 21 3 21 9" }),
    /* @__PURE__ */ i("line", { x1: "10", y1: "14", x2: "21", y2: "3" })
  ] }),
  "file-plus": /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ i("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ i("line", { x1: "12", y1: "18", x2: "12", y2: "12" }),
    /* @__PURE__ */ i("line", { x1: "9", y1: "15", x2: "15", y2: "15" })
  ] }),
  calendar: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2", ry: "2" }),
    /* @__PURE__ */ i("line", { x1: "16", y1: "2", x2: "16", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "8", y1: "2", x2: "8", y2: "6" }),
    /* @__PURE__ */ i("line", { x1: "3", y1: "10", x2: "21", y2: "10" })
  ] }),
  logout: /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
    /* @__PURE__ */ i("polyline", { points: "16 17 21 12 16 7" }),
    /* @__PURE__ */ i("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
  ] })
}, Vl = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32
}, or = ({
  id: e,
  size: t = "sm",
  color: r = "currentColor",
  strokeWidth: n = 1.6
}) => {
  const o = typeof t == "number" ? t : Vl[t];
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
      children: jl[e] ?? null
    }
  );
}, cu = ({
  logo: e,
  title: t,
  subtitle: r,
  align: n = "left",
  variant: o = "dark",
  titleColor: a,
  subtitleColor: s
}) => /* @__PURE__ */ p(l, { sx: { textAlign: n, display: "flex", flexDirection: "column", alignItems: n === "center" ? "center" : "flex-start", gap: 0 }, children: [
  e && /* @__PURE__ */ i(l, { sx: { mb: 1.75, display: "inline-flex" }, children: e }),
  /* @__PURE__ */ i(
    l,
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
    l,
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
] }), Hl = gc;
function Ul(e) {
  return un("MuiSvgIcon", e);
}
Gs("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Gl = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${vt(t)}`, `fontSize${vt(r)}`]
  };
  return _c(o, Ul, n);
}, Yl = fl("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${vt(r.color)}`], t[`fontSize${vt(r.fontSize)}`]];
  }
})(Hl(({
  theme: e
}) => {
  var t, r, n, o, a, s, c, d, u, m, x, y, f, S;
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
        props: (g) => !g.hasSvgAsChild,
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
          fontSize: ((d = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : d.call(c, 24)) || "1.5rem"
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
      ...Object.entries((e.vars ?? e).palette).filter(([, g]) => g && g.main).map(([g]) => {
        var C, w;
        return {
          props: {
            color: g
          },
          style: {
            color: (w = (C = (e.vars ?? e).palette) == null ? void 0 : C[g]) == null ? void 0 : w.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : y.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (S = (f = (e.vars ?? e).palette) == null ? void 0 : f.action) == null ? void 0 : S.disabled
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
})), ir = /* @__PURE__ */ B.forwardRef(function(t, r) {
  const n = hi({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: a,
    color: s = "inherit",
    component: c = "svg",
    fontSize: d = "medium",
    htmlColor: u,
    inheritViewBox: m = !1,
    titleAccess: x,
    viewBox: y = "0 0 24 24",
    ...f
  } = n, S = /* @__PURE__ */ B.isValidElement(o) && o.type === "svg", g = {
    ...n,
    color: s,
    component: c,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: y,
    hasSvgAsChild: S
  }, C = {};
  m || (C.viewBox = y);
  const w = Gl(g);
  return /* @__PURE__ */ p(Yl, {
    as: c,
    className: Uo(w.root, a),
    focusable: "false",
    color: u,
    "aria-hidden": x ? void 0 : !0,
    role: x ? "img" : void 0,
    ref: r,
    ...C,
    ...f,
    ...S && o.props,
    ownerState: g,
    children: [S ? o.props.children : o, x ? /* @__PURE__ */ i("title", {
      children: x
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (ir.propTypes = {
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
ir.muiName = "SvgIcon";
function Oe(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ i(ir, {
      "data-testid": process.env.NODE_ENV !== "production" ? `${t}Icon` : void 0,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = ir.muiName, /* @__PURE__ */ B.memo(/* @__PURE__ */ B.forwardRef(r));
}
const vi = Oe(/* @__PURE__ */ i("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close"), ql = Oe(/* @__PURE__ */ i("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), "Send"), Ot = {
  // URL del webhook de Make.com
  webhookUrl: "",
  // Token de autenticación (si es necesario)
  apiToken: ""
};
ue.log("VITE_MAKE_WEBHOOK_URL:", void 0);
ue.log("MAKE_API_CONFIG.webhookUrl:", Ot.webhookUrl);
const Kl = async (e, t) => {
  const r = t || `session_${Date.now()}`;
  ue.log("Enviando request a Make.com:", {
    message: e,
    sessionId: r,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    url: Ot.webhookUrl
  });
  try {
    const n = await fetch(Ot.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...Ot.apiToken && {
          Authorization: `Bearer ${Ot.apiToken}`
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
        } catch (d) {
          ue.error("Error final parseando JSON:", d), o = { message: a };
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
}, Xl = () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`, vo = (e) => {
  const t = e.toLowerCase();
  return t.includes("hola") || t.includes("buenos días") || t.includes("buenas") ? "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?" : t.includes("servicios") || t.includes("qué hacen") || t.includes("qué ofrecen") ? "En AI4U ofrecemos servicios de inteligencia artificial personalizada, automatización de procesos, análisis de datos y consultoría en IA. ¿Te gustaría conocer más sobre alguno de nuestros servicios?" : t.includes("precio") || t.includes("costo") || t.includes("tarifa") ? "Nuestros precios varían según el proyecto y las necesidades específicas. Te recomiendo solicitar un diagnóstico gratuito para que podamos evaluar tu caso y darte una propuesta personalizada." : t.includes("contacto") || t.includes("teléfono") || t.includes("email") ? "Puedes contactarnos a través de nuestro formulario de diagnóstico gratuito o escribirnos directamente. Nuestro equipo te responderá en menos de 24 horas." : t.includes("diagnóstico") || t.includes("gratuito") ? "¡Excelente! Nuestro diagnóstico gratuito te ayudará a identificar oportunidades de mejora en tu empresa usando IA. Solo toma 30 minutos y no hay compromiso. ¿Te gustaría agendar una cita?" : "Gracias por tu mensaje. Nuestro equipo de AI4U se pondrá en contacto contigo pronto para ayudarte con tu consulta. Mientras tanto, puedes explorar nuestros servicios o solicitar un diagnóstico gratuito.";
}, lu = () => {
  const e = Se(), t = Xt(e.breakpoints.down("sm")), [r, n] = V(!1), [o] = V(() => Xl()), [a, s] = V([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de AI4U. ¿En qué puedo ayudarte hoy?",
      isUser: !1,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    }
  ]), [c, d] = V(""), [u, m] = V(!1), [x, y] = V(""), f = Wt(null), S = it(() => n(!0), []), g = it(() => n(!1), []), C = it(() => {
    var A;
    (A = f.current) == null || A.scrollIntoView({ behavior: "smooth" });
  }, []);
  me(() => {
    C();
  }, [a, C]);
  const w = it(async () => {
    var k;
    const A = c.trim();
    if (!A || u || A === x) return;
    if (A.length > 500) {
      const $ = {
        id: Date.now().toString(),
        text: "El mensaje es demasiado largo. Por favor, mantén tu mensaje bajo 500 caracteres.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((Y) => [...Y, $]);
      return;
    }
    const _ = {
      id: Date.now().toString(),
      text: c.trim(),
      isUser: !0,
      timestamp: /* @__PURE__ */ new Date(),
      sessionId: o
    };
    s(($) => [...$, _]), y(A), d(""), m(!0);
    try {
      const $ = await Kl(A, o);
      let Y;
      $.success && ((k = $.data) != null && k.message) ? Y = $.data.message : $.success && $.data && typeof $.data == "string" ? Y = $.data : ($.error, Y = vo(A));
      const D = {
        id: (Date.now() + 1).toString(),
        text: Y,
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((F) => [...F, D]);
    } catch ($) {
      console.error("Error sending message:", $);
      const D = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, estoy teniendo problemas técnicos. Por favor, intenta de nuevo en unos momentos.",
        isUser: !1,
        timestamp: /* @__PURE__ */ new Date(),
        sessionId: o
      };
      s((F) => [...F, D]);
    } finally {
      m(!1);
    }
  }, [c, u, o, x]), R = it((A) => {
    A.key === "Enter" && !A.shiftKey && !u && (A.preventDefault(), w());
  }, [w, u]);
  return /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i(
      _i,
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
          l,
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
    /* @__PURE__ */ p(
      Oi,
      {
        open: r,
        onClose: g,
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
          /* @__PURE__ */ p(
            Ri,
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
                /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                  /* @__PURE__ */ i(
                    l,
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
                  /* @__PURE__ */ p(l, { children: [
                    /* @__PURE__ */ i(P, { variant: "h6", sx: { fontWeight: 400 }, children: "Asistente AI4U" }),
                    /* @__PURE__ */ i(P, { variant: "caption", color: "text.secondary", children: "En línea" })
                  ] })
                ] }),
                /* @__PURE__ */ i(Fe, { onClick: g, size: "small", children: /* @__PURE__ */ i(vi, {}) })
              ]
            }
          ),
          /* @__PURE__ */ p(
            zi,
            {
              sx: {
                p: 0,
                display: "flex",
                flexDirection: "column",
                height: "100%"
              },
              children: [
                /* @__PURE__ */ p(
                  l,
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
                        l,
                        {
                          sx: {
                            display: "flex",
                            justifyContent: A.isUser ? "flex-end" : "flex-start"
                          },
                          children: /* @__PURE__ */ p(
                            Mt,
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
                      u && /* @__PURE__ */ i(l, { sx: { display: "flex", justifyContent: "flex-start" }, children: /* @__PURE__ */ i(
                        Mt,
                        {
                          sx: {
                            p: 2,
                            backgroundColor: we(e.palette.background.paper, 0.8),
                            borderRadius: 2,
                            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                          },
                          children: /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                            /* @__PURE__ */ i(Mi, { size: 16 }),
                            /* @__PURE__ */ i(P, { variant: "body2", color: "text.secondary", children: "Escribiendo..." })
                          ] })
                        }
                      ) }),
                      /* @__PURE__ */ i("div", { ref: f })
                    ]
                  }
                ),
                /* @__PURE__ */ p(
                  l,
                  {
                    sx: {
                      p: 2,
                      borderTop: `1px solid ${we(e.palette.divider, 0.1)}`
                    },
                    children: [
                      c.length > 400 && /* @__PURE__ */ p(
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
                      /* @__PURE__ */ p(
                        l,
                        {
                          sx: {
                            display: "flex",
                            gap: 1,
                            alignItems: "flex-end"
                          },
                          children: [
                            /* @__PURE__ */ i(
                              Ao,
                              {
                                fullWidth: !0,
                                multiline: !0,
                                maxRows: 4,
                                placeholder: u ? "Esperando respuesta..." : "Escribe tu mensaje...",
                                value: c,
                                onChange: (A) => d(A.target.value),
                                onKeyPress: R,
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
                              Fe,
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
                                children: /* @__PURE__ */ i(ql, {})
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
}, Ql = Oe(/* @__PURE__ */ i("path", {
  d: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
}), "Work"), du = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n = "Nuestros Servicios",
  className: o,
  sx: a
}) => {
  const s = en();
  return /* @__PURE__ */ i(
    tn,
    {
      variant: e,
      size: t,
      onClick: () => {
        s("/servicios"), window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
      startIcon: r ? /* @__PURE__ */ i(Ql, {}) : void 0,
      className: o,
      sx: a,
      children: n
    }
  );
}, Jl = Te(Jr, {
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
}), Zl = Te(l)(({ theme: e }) => ({
  position: "absolute",
  top: 4,
  left: 8,
  ...re.label.secondary,
  fontSize: "0.65rem",
  zIndex: 1,
  pointerEvents: "none"
})), Cr = ({
  children: e,
  variant: t = "default",
  elevation: r = 0,
  showContent: n = !0,
  label: o,
  sx: a,
  ...s
}) => {
  const c = ee();
  return /* @__PURE__ */ p(
    Jl,
    {
      cardVariant: t,
      elevation: r,
      forceMode: c.effectiveMode,
      sx: a,
      ...s,
      children: [
        o && /* @__PURE__ */ p(Zl, { children: [
          '"',
          o,
          '"'
        ] }),
        n && /* @__PURE__ */ i(Nt, { sx: {
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
}, uu = ({
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
  }, c = (m) => ({
    Shopping: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(oa, {})
    },
    Fitness: {
      bg: a.palette.success + "20",
      text: a.palette.success,
      icon: /* @__PURE__ */ i(na, {})
    },
    Education: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(ra, {})
    },
    Investments: {
      bg: a.palette.success + "20",
      text: a.palette.success,
      icon: /* @__PURE__ */ i(ta, {})
    },
    Health: {
      bg: a.palette.accent + "20",
      text: a.palette.accent,
      icon: /* @__PURE__ */ i(ea, {})
    }
  })[m] || {
    bg: a.helpers.background.secondary,
    text: a.helpers.text.secondary,
    icon: /* @__PURE__ */ i(Zi, {})
  }, d = (m) => {
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
    Cr,
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
      children: /* @__PURE__ */ p(Nt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ p(l, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(An, { sx: {
              width: 48,
              height: 48,
              background: u.surface.background,
              border: u.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ i(Ji, { sx: {
              color: a.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ p(l, { children: [
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
            Fe,
            {
              size: "small",
              sx: {
                color: a.helpers.text.secondary,
                "&:hover": {
                  background: a.helpers.state.hover
                }
              },
              children: /* @__PURE__ */ i(On, {})
            }
          )
        ] }),
        /* @__PURE__ */ i(l, { sx: { mb: 3 }, children: r.map((m) => {
          const x = c(m.category);
          return /* @__PURE__ */ p(
            l,
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
                /* @__PURE__ */ i(An, { sx: {
                  width: 48,
                  height: 48,
                  background: x.bg,
                  color: x.text,
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
                }, children: m.icon || x.icon }),
                /* @__PURE__ */ p(l, { sx: { flex: 1 }, children: [
                  /* @__PURE__ */ p(l, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 1
                  }, children: [
                    /* @__PURE__ */ i(Ae, { sx: {
                      fontWeight: 400,
                      color: a.helpers.text.primary
                    }, children: m.merchant }),
                    /* @__PURE__ */ p(Lt, { sx: {
                      fontWeight: 400,
                      color: a.helpers.text.primary
                    }, children: [
                      "$",
                      m.amount.toFixed(2)
                    ] })
                  ] }),
                  /* @__PURE__ */ p(l, { sx: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }, children: [
                    /* @__PURE__ */ i(
                      yt,
                      {
                        label: m.category,
                        size: "small",
                        sx: {
                          backgroundColor: x.bg,
                          color: x.text,
                          fontSize: "0.75rem",
                          height: 24,
                          fontWeight: 400,
                          "& .MuiChip-label": {
                            px: 1.5
                          }
                        }
                      }
                    ),
                    /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
                      /* @__PURE__ */ i(de, { sx: {
                        color: a.helpers.text.secondary
                      }, children: m.time }),
                      m.status && /* @__PURE__ */ i(l, { sx: {
                        width: 8,
                        height: 8,
                        backgroundColor: d(m.status),
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
        n && /* @__PURE__ */ p(be, { children: [
          /* @__PURE__ */ i(ar, { sx: {
            mb: 3,
            borderColor: a.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ p(l, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(
              Fe,
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
                children: /* @__PURE__ */ i(On, {})
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
}, ed = Te(P)(({ stepSize: e, theme: t }) => ({
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
})), pu = ({
  number: e,
  title: t,
  description: r,
  color: n = "primary.main",
  size: o = "medium",
  sx: a,
  ...s
}) => {
  const c = ee(), d = () => {
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
  }, { numberSize: u, titleSize: m, descriptionSize: x } = d();
  return /* @__PURE__ */ p(
    l,
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
          l,
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
              ed,
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
        /* @__PURE__ */ p(l, { sx: { flex: 1, pt: o === "large" ? 1.5 : o === "medium" ? 1 : 0.5 }, children: [
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
                fontSize: x,
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
}, td = Te(l)(({ theme: e }) => {
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
}), fu = ({
  title: e,
  subtitle: t = "",
  categories: r,
  totalAmount: n = 0,
  onAddCategory: o = () => {
  },
  variant: a = "industrial"
}) => {
  const s = ee(), c = s.effectiveMode === "light";
  return /* @__PURE__ */ p(
    Cr,
    {
      variant: a,
      label: "FINANCE_CORE_V1",
      sx: {
        maxWidth: 450,
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ i(l, { sx: { mb: 4 }, children: /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2, mb: 1 }, children: [
          /* @__PURE__ */ i(l, { sx: {
            width: 48,
            height: 48,
            border: `2px solid ${c ? "#000" : "#fff"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: c ? "#000" : "#fff",
            color: c ? "#fff" : "#000"
          }, children: /* @__PURE__ */ i(ia, {}) }),
          /* @__PURE__ */ p(l, { children: [
            /* @__PURE__ */ i(P, { sx: { ...re.display.medium, fontSize: "1.5rem", mb: 0 }, children: e }),
            t && /* @__PURE__ */ p(P, { sx: { ...re.label.secondary }, children: [
              "// ",
              t
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ p(l, { sx: {
          p: 3,
          border: `4px solid ${c ? "#000" : "#fff"}`,
          mb: 4,
          position: "relative"
        }, children: [
          /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 1 }, children: '"TOTAL_BUDGET"' }),
          /* @__PURE__ */ p(l, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-end" }, children: [
            /* @__PURE__ */ p(Lt, { sx: { fontSize: "3rem", fontWeight: 900, mb: 0 }, children: [
              "$",
              n == null ? void 0 : n.toLocaleString()
            ] }),
            /* @__PURE__ */ i(
              Fe,
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
                children: /* @__PURE__ */ i(aa, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 2 }, children: '"DISTRIBUTION_LOG"' }),
        /* @__PURE__ */ i(l, { sx: { mb: 4 }, children: r.map((d, u) => /* @__PURE__ */ p(td, { children: [
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(P, { sx: { ...re.label.secondary, opacity: 0.5 }, children: String(u + 1).padStart(2, "0") }),
            /* @__PURE__ */ i(P, { sx: { fontWeight: 700, textTransform: "uppercase" }, children: d.name })
          ] }),
          /* @__PURE__ */ p(P, { sx: { fontWeight: 900, fontFamily: "monospace" }, children: [
            "$",
            d.amount.toLocaleString()
          ] })
        ] }, u)) }),
        /* @__PURE__ */ p(l, { sx: {
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
}, rd = Te(P, {
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
})), nd = Te(l)(({ theme: e }) => ({
  ...re.label.secondary,
  fontSize: "0.65rem",
  position: "absolute",
  top: 10,
  left: 10,
  opacity: 0.5
})), hu = (e) => {
  const {
    title: t,
    value: r,
    subtitle: n,
    iconType: o = "dot",
    trend: a = "neutral",
    size: s = "normal",
    onClick: c,
    label: d = "METRIC_SYSTEM"
  } = e, u = ee();
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
  return /* @__PURE__ */ p(
    Jr,
    {
      onClick: c,
      sx: {
        cursor: c ? "pointer" : "default",
        minHeight: (x) => s === "compact" ? x.spacing(20) : s === "large" ? x.spacing(40) : x.spacing(25),
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
        /* @__PURE__ */ p(nd, { children: [
          '"',
          d,
          '"'
        ] }),
        /* @__PURE__ */ i(
          l,
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
        /* @__PURE__ */ i(l, { sx: { mt: 2, mb: 1, width: "100%", position: "relative", zIndex: 1 }, children: /* @__PURE__ */ i(rd, { metricSize: s, children: typeof r == "number" ? r.toLocaleString() : r }) }),
        /* @__PURE__ */ p(l, { sx: {
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
          a !== "neutral" && /* @__PURE__ */ i(l, { sx: { color: m(), display: "flex" }, children: /* @__PURE__ */ i(
            rr,
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
          l,
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
}, od = Oe(/* @__PURE__ */ i("path", {
  d: "M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zM9 14H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm-8 4H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
}), "CalendarMonth"), Me = {
  HOME: "/",
  SERVICES: "/servicios",
  WHY_AI4U: "/por-que-ai4u",
  PORTFOLIO: "/portafolio",
  SUPER_AI: "/super-ai",
  DESIGN_SYSTEM: "/design-system"
}, id = {
  CONTACT: {
    CALENDLY: "calendly.com/mgarciap333/ai4u"
  }
};
b.accent, b.gray[600], b.success, b.warning, b.error, b.info;
Er.sm, Er.md, Er.lg;
const ad = `https://${id.CONTACT.CALENDLY}`, vn = ({
  variant: e = "primary",
  size: t = "medium",
  showIcon: r = !1,
  text: n,
  className: o,
  sx: a
}) => /* @__PURE__ */ i(
  tn,
  {
    variant: e,
    size: t,
    onClick: () => {
      yi.trackConsultationRequest("calendly", "diagnostic"), window.open(ad, "_blank", "noopener,noreferrer");
    },
    startIcon: r ? /* @__PURE__ */ i(od, {}) : void 0,
    className: o,
    sx: a,
    children: n || "Diagnóstico gratis"
  }
), mu = () => ({
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
}), gu = () => ({
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
}), sd = (e) => ({
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
}), xu = () => ({
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
}), yu = (e) => ({
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
}), cd = (e) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: e.map((t, r) => ({
    "@type": "ListItem",
    position: r + 1,
    name: t.name,
    item: t.url
  }))
}), bu = (e) => {
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
}, Su = (e = "") => `https://www.ai4u.com.co${e}`, vu = (e, t = 160) => e.length <= t ? e : e.substring(0, t - 3) + "...", wu = (e, t = []) => [...e, ...t].join(", "), Cu = ({
  service: e,
  showPrice: t = !0,
  compact: r = !1,
  onClick: n
}) => {
  const o = ee(), a = sd(e), c = ((d) => {
    const u = {
      "eje:operation": "Operación",
      "eje:strategy": "Estrategia",
      "eje:education": "Educación",
      "eje:transformation": "Transformación"
    };
    return d.filter((m) => m.startsWith("eje:")).map((m) => u[m] || m.replace("eje:", ""));
  })(e.tags);
  return /* @__PURE__ */ p(be, { children: [
    /* @__PURE__ */ i(
      Si,
      {
        structuredData: a,
        noIndex: !0
      }
    ),
    /* @__PURE__ */ i(l, { sx: {
      height: "100%",
      position: "relative",
      transition: "all 0.2s ease",
      "&:hover": {
        "& .service-card-content": {
          borderColor: e.color || o.contrast.text.primary
        }
      }
    }, children: /* @__PURE__ */ p(
      l,
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
          /* @__PURE__ */ i(l, { sx: {
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 0.5
          }, children: c.map((d, u) => /* @__PURE__ */ i(
            yt,
            {
              label: d,
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
          /* @__PURE__ */ p(l, { sx: {
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
          /* @__PURE__ */ i(l, { sx: {
            mt: "auto",
            pt: 2,
            borderTop: `1px solid ${o.contrast.divider}`
          }, children: t && /* @__PURE__ */ p(l, { sx: {
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
}, ku = ({
  items: e,
  showHome: t = !0
}) => {
  const r = en(), n = t ? [{ name: "Inicio", path: "/" }, ...e] : e, o = cd(
    n.map((s) => ({
      name: s.name,
      url: `https://ai4u.com.co${s.path}`
    }))
  ), a = (s) => {
    r(s);
  };
  return /* @__PURE__ */ p(l, { children: [
    /* @__PURE__ */ i(Si, { structuredData: o }),
    /* @__PURE__ */ i(
      l,
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
            $o,
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
class Eu extends Yi {
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
    this.setState({ errorInfo: n }), Rl.captureError({
      message: r.message,
      stack: r.stack,
      componentStack: n.componentStack ?? void 0,
      errorBoundary: !0,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), this.props.onError && this.props.onError(r, n);
  }
  render() {
    return this.state.hasError ? this.props.fallback ? this.props.fallback : /* @__PURE__ */ i(Ye, { maxWidth: "md", sx: { py: 8 }, children: /* @__PURE__ */ p(
      l,
      {
        sx: {
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3
        },
        children: [
          /* @__PURE__ */ p(
            Pi,
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
                /* @__PURE__ */ i(Di, { children: /* @__PURE__ */ i(Ro, { component: "span", children: "Oops! Algo salió mal" }) }),
                /* @__PURE__ */ i(Ie, { sx: { mt: 1, mb: 2 }, children: "Ha ocurrido un error inesperado. Nuestro equipo ha sido notificado y estamos trabajando para solucionarlo." }),
                !1
              ]
            }
          ),
          /* @__PURE__ */ p(l, { sx: { display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ i(
              Xe,
              {
                variant: "contained",
                startIcon: /* @__PURE__ */ i(sa, {}),
                onClick: this.handleRetry,
                sx: { minWidth: 120 },
                children: "Reintentar"
              }
            ),
            /* @__PURE__ */ i(
              Xe,
              {
                variant: "outlined",
                onClick: () => window.location.reload(),
                sx: { minWidth: 120 },
                children: "Recargar Página"
              }
            ),
            /* @__PURE__ */ i(
              Xe,
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
const Tu = (e) => {
  const {
    pages: t,
    title: r,
    variant: n = "vertical",
    className: o
  } = e, a = ee(), s = "También podrías estar interesado en:", c = t.slice(0, 3);
  if (c.length === 0) return null;
  const d = () => n === "horizontal" ? /* @__PURE__ */ i(
    he,
    {
      direction: "row",
      spacing: 3,
      sx: { gap: 2, alignItems: "center", flexWrap: "wrap" },
      children: c.map((u, m) => /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
        /* @__PURE__ */ p(l, { children: [
          /* @__PURE__ */ i(
            zt,
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
        m < c.length - 1 && /* @__PURE__ */ i(Ll, { variant: "separator", size: "small" })
      ] }, u.href))
    }
  ) : /* @__PURE__ */ i(he, { spacing: 3, children: c.map((u) => /* @__PURE__ */ p(l, { children: [
    /* @__PURE__ */ i(
      zt,
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
  return /* @__PURE__ */ p(
    l,
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
        d()
      ]
    }
  );
}, Iu = (e) => {
  const {
    serviceName: t,
    serviceSlug: r,
    description: n,
    caseStudy: o,
    variant: a = "minimal",
    className: s
  } = e, c = ee();
  return a === "minimal" ? /* @__PURE__ */ p(l, { className: s, sx: { display: "inline-flex", alignItems: "center", gap: 1 }, children: [
    /* @__PURE__ */ i(
      zt,
      {
        href: `/servicios#${r}`,
        variant: "inline",
        ariaLabel: `Conoce más sobre ${t}`,
        children: /* @__PURE__ */ i(de, { sx: { fontWeight: 400 }, children: t })
      }
    ),
    /* @__PURE__ */ i(
      rr,
      {
        type: "circle",
        size: "small",
        color: c.contrast.text.disabled,
        variant: "minimal"
      }
    )
  ] }) : /* @__PURE__ */ i(
    l,
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
      children: /* @__PURE__ */ p(he, { spacing: 2, children: [
        /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          /* @__PURE__ */ i(
            rr,
            {
              type: "square",
              size: "small",
              color: c.palette.accent,
              variant: "filled"
            }
          ),
          /* @__PURE__ */ i(
            zt,
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
        o && /* @__PURE__ */ p(l, { sx: { pt: 1, borderTop: `1px solid ${c.contrast.divider}` }, children: [
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
            zt,
            {
              href: `/casos-de-uso#${o.slug}`,
              variant: "subtle",
              ariaLabel: `Ver caso de uso en ${o.sector} con ${o.client}`,
              children: /* @__PURE__ */ p(de, { sx: { fontWeight: 400, fontSize: "0.8rem" }, children: [
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
}, $u = ({
  selectedValue: e,
  onValueChange: t,
  options: r
}) => {
  const n = ee();
  return /* @__PURE__ */ p(l, { sx: { mb: 4 }, children: [
    /* @__PURE__ */ i(l, { sx: {
      mb: 2,
      fontSize: "1rem",
      fontWeight: 400,
      textTransform: "none",
      letterSpacing: "0.1em",
      color: n.contrast.text.primary
    }, children: "// Tipo de servicio" }),
    /* @__PURE__ */ i(he, { direction: "row", spacing: 2, useFlexGap: !0, sx: { flexWrap: "wrap" }, children: r.map((o, a) => /* @__PURE__ */ i(
      yt,
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
}, Au = ({
  totalCount: e,
  filteredCount: t,
  activeFilters: r
}) => {
  const n = ee(), o = r.length > 0, a = t !== e;
  return /* @__PURE__ */ i(l, { sx: {
    py: 1,
    mb: 2
  }, children: /* @__PURE__ */ p(he, { direction: "row", spacing: 1, sx: { alignItems: "center" }, children: [
    /* @__PURE__ */ i(
      rr,
      {
        type: "dot",
        size: "small",
        color: n.contrast.text.secondary,
        variant: "minimal"
      }
    ),
    /* @__PURE__ */ p(P, { variant: "body2", sx: {
      color: n.contrast.text.secondary,
      fontSize: "0.875rem"
    }, children: [
      a ? `${t} de ${e}` : `${e}`,
      " servicios",
      o && /* @__PURE__ */ p("span", { style: { color: n.contrast.text.primary }, children: [
        " • ",
        r.join(", ")
      ] })
    ] })
  ] }) });
}, _u = ({
  title: e,
  subtitle: t,
  children: r,
  defaultExpanded: n = !1,
  variant: o = "minimal",
  showIcon: a = !0,
  sx: s = {}
}) => {
  const [c, d] = V(n), u = ee(), m = u.effectiveMode === "dark", x = () => {
    d(!c);
  }, f = (() => {
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
  return /* @__PURE__ */ p(l, { sx: { ...f.container, ...s }, children: [
    /* @__PURE__ */ p(
      l,
      {
        sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
          userSelect: "none",
          py: 2
        },
        onClick: x,
        children: [
          /* @__PURE__ */ p(l, { sx: { flex: 1 }, children: [
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
            Fe,
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
              children: /* @__PURE__ */ i(ca, {})
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ i(Fi, { in: c, timeout: 100, children: /* @__PURE__ */ i(l, { sx: {
      pt: 3,
      borderTop: c ? `1px solid ${m ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.1)"}` : "none"
    }, children: r }) })
  ] });
}, Ou = ({
  summary: e,
  details: t,
  showDetails: r = !1,
  onToggle: n,
  variant: o = "inline",
  maxHeight: a = 200
}) => {
  const [s, c] = V(r), d = ee(), u = () => {
    const y = !s;
    c(y), n == null || n(y);
  }, x = (() => {
    switch (o) {
      case "separated":
        return {
          container: {
            borderTop: `1px solid ${d.contrast.divider}`,
            pt: 2,
            mt: 2
          }
        };
      case "card":
        return {
          container: {
            background: d.contrast.surface,
            border: `1px solid ${d.contrast.divider}`,
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
  return /* @__PURE__ */ p(l, { children: [
    /* @__PURE__ */ i(
      l,
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
    s && /* @__PURE__ */ i(l, { sx: x.container, children: /* @__PURE__ */ i(
      l,
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
            background: d.contrast.divider,
            borderRadius: "3px"
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: d.contrast.text.secondary
          }
        },
        children: t
      }
    ) })
  ] });
}, ld = {
  online: "Disponible",
  offline: "No disponible",
  starting: "Iniciando…",
  checking: "Verificando…",
  idle: "Inactivo"
};
function It(e, t) {
  const r = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16);
  return `rgba(${r},${n},${o},${t})`;
}
const Ru = ({
  name: e,
  description: t,
  icon: r,
  accentColor: n,
  status: o,
  openUrl: a,
  isCli: s = !1,
  ctaLabel: c = "Abrir"
}) => {
  const d = ee(), u = o === "online", m = o === "checking", x = d.contrast.surface, y = d.contrast.text.primary, f = d.contrast.text.secondary, S = d.contrast.text.disabled, g = d.contrast.border;
  return /* @__PURE__ */ p(
    l,
    {
      sx: {
        backgroundColor: x,
        border: `1px solid ${It(n, 0.2)}`,
        borderRadius: 0,
        // Brutalist DS
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.2s steps(4, end)",
        "&:hover": {
          transform: "translate(-2px, -2px)",
          boxShadow: `4px 4px 0px ${It(n, 0.6)}`,
          borderColor: It(n, 0.5)
        }
      },
      children: [
        /* @__PURE__ */ i(l, { sx: { height: 3, backgroundColor: n, flexShrink: 0 } }),
        /* @__PURE__ */ p(l, { sx: { flex: 1, display: "flex", flexDirection: "column", p: 2.5, gap: 1.5 }, children: [
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1.5 }, children: [
            /* @__PURE__ */ i(
              l,
              {
                sx: {
                  width: 44,
                  height: 44,
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: It(n, 0.1),
                  border: `1px solid ${It(n, 0.2)}`
                },
                children: /* @__PURE__ */ i(or, { id: r, size: "md", color: n, strokeWidth: 1.5 })
              }
            ),
            /* @__PURE__ */ p(l, { sx: { flex: 1, minWidth: 0 }, children: [
              /* @__PURE__ */ i(
                l,
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
              /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 0.5, mt: 0.5 }, children: [
                /* @__PURE__ */ i(Qr, { status: o, size: 6 }),
                /* @__PURE__ */ i(
                  l,
                  {
                    component: "span",
                    sx: {
                      fontSize: 11,
                      color: b.telemetry[o]
                    },
                    children: ld[o]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ i(
            l,
            {
              component: "p",
              sx: {
                fontSize: 13,
                lineHeight: 1.6,
                color: f,
                m: 0,
                flex: 1
              },
              children: t
            }
          ),
          /* @__PURE__ */ i(l, { sx: { mt: 0.5 }, children: s ? /* @__PURE__ */ i(
            l,
            {
              component: "div",
              sx: { fontSize: 12, color: S, fontStyle: "italic" },
              children: "Herramienta de línea de comandos — se ejecuta desde el servidor"
            }
          ) : a ? /* @__PURE__ */ p(
            l,
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
                border: u ? "none" : `1px solid ${g}`,
                cursor: u ? "pointer" : m ? "default" : "not-allowed",
                opacity: m ? 0.6 : 1
              },
              children: [
                /* @__PURE__ */ i(
                  or,
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
}, zu = ({
  branding: e,
  label: t = "Acceso restringido",
  placeholder: r = "Contraseña",
  inputType: n = "password",
  submitLabel: o = "Entrar",
  loadingLabel: a = "Verificando…",
  accentColor: s = b.tamaprint.primary,
  footer: c,
  onSubmit: d
}) => {
  const u = Wt(null), [m, x] = V(!1), [y, f] = V(""), [S, g] = V(!1);
  async function C(R) {
    var k;
    R.preventDefault();
    const A = ((k = u.current) == null ? void 0 : k.value) ?? "";
    if (!A) return;
    x(!0), f("");
    const _ = await d(A);
    _.ok || (f(_.error ?? "Error de autenticación"), g(!0), setTimeout(() => g(!1), 500), u.current && (u.current.value = "", u.current.focus())), x(!1);
  }
  const w = b.telemetry.offline;
  return /* @__PURE__ */ p(l, { component: "form", onSubmit: C, sx: { width: "100%", maxWidth: 360 }, children: [
    e && /* @__PURE__ */ i(l, { sx: { textAlign: "center", mb: 4 }, children: e }),
    /* @__PURE__ */ p(
      l,
      {
        sx: {
          backgroundColor: at.dashboardDark.surface,
          border: `1px solid ${at.dashboardDark.border}`,
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
          /* @__PURE__ */ p(
            l,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9.5,
                fontWeight: 700,
                color: at.dashboardDark.text.secondary,
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
            l,
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
                color: at.dashboardDark.text.primary,
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
            l,
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
            l,
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
    c && /* @__PURE__ */ i(l, { sx: { textAlign: "center", mt: 2.5 }, children: c })
  ] });
}, Mu = ({
  items: e,
  activeItem: t,
  onItemClick: r,
  variant: n = "horizontal",
  className: o = ""
}) => {
  const a = ee();
  Se();
  const s = (u) => {
    r && r(u), u.onClick && u.onClick();
  }, c = (u) => {
    const m = t === u.id, x = {
      fontWeight: 400,
      textTransform: "none",
      transition: "all 0.3s ease"
    };
    switch (n) {
      case "tabs":
        return {
          ...x,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...m ? {
            background: a.palette.black,
            color: a.palette.white,
            boxShadow: Rt.ai4u.button
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
          ...x,
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
            boxShadow: Rt.ai4u.button
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
          ...x,
          py: 1,
          px: 2,
          borderRadius: 2,
          fontSize: "0.875rem",
          whiteSpace: "nowrap",
          ...m ? {
            background: a.palette.black,
            color: a.palette.white,
            boxShadow: Rt.ai4u.button
          } : {
            color: a.contrast.text.secondary,
            "&:hover": {
              color: a.contrast.text.primary,
              background: a.helpers.state.hover
            }
          }
        };
    }
  }, d = () => {
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
  return n === "tabs" ? /* @__PURE__ */ i(l, { sx: d(), className: o, children: e.map((u) => /* @__PURE__ */ i(
    Xe,
    {
      onClick: () => s(u),
      sx: c(u),
      children: u.label
    },
    u.id
  )) }) : /* @__PURE__ */ i(l, { sx: d(), className: o, children: e.map((u) => /* @__PURE__ */ i(
    Xe,
    {
      onClick: () => s(u),
      sx: c(u),
      children: u.label
    },
    u.id
  )) });
}, dd = Oe(/* @__PURE__ */ i("path", {
  d: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
}), "Instagram"), ud = Oe(/* @__PURE__ */ i("path", {
  d: "M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
}), "Facebook"), pd = Oe(/* @__PURE__ */ i("path", {
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), "LinkedIn"), fd = Oe(/* @__PURE__ */ i("path", {
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4-8 5-8-5V6l8 5 8-5z"
}), "Email"), hd = Oe(/* @__PURE__ */ i("path", {
  d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"
}), "LocationOn"), md = Oe(/* @__PURE__ */ i("path", {
  d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
}), "X"), gd = Oe(/* @__PURE__ */ i("path", {
  d: "M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"
}), "WhatsApp"), xd = () => {
  const e = (/* @__PURE__ */ new Date()).getFullYear();
  Se();
  const t = ee(), r = [
    { icon: /* @__PURE__ */ i(dd, {}), url: "https://www.instagram.com/ai.4.u_/" },
    { icon: /* @__PURE__ */ i(ud, {}), url: "https://www.facebook.com/artificial.intelligence.4.you/" },
    { icon: /* @__PURE__ */ i(pd, {}), url: "https://www.linkedin.com/company/ai4u-com-co" },
    { icon: /* @__PURE__ */ i(md, {}), url: "https://x.com/_ai4u_" }
  ], n = [
    { name: "inicio", path: Me.HOME },
    { name: "servicios", path: Me.SERVICES },
    { name: "portafolio", path: Me.PORTFOLIO },
    { name: "porqueAi4u", path: Me.WHY_AI4U },
    { name: "designSystem", path: Me.DESIGN_SYSTEM }
  ];
  return /* @__PURE__ */ i(
    l,
    {
      sx: {
        bgcolor: t.contrast.background,
        color: t.contrast.text.primary,
        borderTop: 1,
        borderColor: t.contrast.divider,
        py: 8
      },
      children: /* @__PURE__ */ p(Ye, { maxWidth: "lg", children: [
        /* @__PURE__ */ p($e, { container: !0, spacing: 8, children: [
          /* @__PURE__ */ p($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(
              l,
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
          /* @__PURE__ */ p($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 3 }, children: "enlacesRapidos" }),
            /* @__PURE__ */ i(l, { component: "nav", "aria-label": "Enlaces rápidos", children: /* @__PURE__ */ i(l, { component: "ul", sx: { p: 0, m: 0, listStyle: "none" }, children: n.map((o) => /* @__PURE__ */ i(l, { component: "li", sx: { mb: 2 }, children: /* @__PURE__ */ i(
              l,
              {
                component: $t,
                to: o.path,
                onClick: () => Lr(),
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
          /* @__PURE__ */ p($e, { size: { xs: 12, md: 4 }, children: [
            /* @__PURE__ */ i(P, { sx: { ...re.label.main, mb: 3 }, children: "contactoDirecto" }),
            /* @__PURE__ */ p(he, { spacing: 2.5, children: [
              /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(fd, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "hola@ai4u.com.co" })
              ] }),
              /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(gd, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "+57 321 817 5744" })
              ] }),
              /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
                /* @__PURE__ */ i(hd, { sx: { color: "inherit", fontSize: "1.2rem", opacity: 0.8 } }),
                /* @__PURE__ */ i(P, { variant: "body2", sx: { color: "inherit", opacity: 0.7 }, children: "Medellín, Colombia" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ i(ar, { sx: { my: 6, borderColor: t.contrast.divider, opacity: 0.1 } }),
        /* @__PURE__ */ p(l, { sx: {
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "center", md: "center" },
          gap: 4
        }, children: [
          /* @__PURE__ */ p(he, { spacing: 1, sx: { alignItems: { xs: "center", md: "flex-start" } }, children: [
            /* @__PURE__ */ i(de, { sx: { color: "inherit", opacity: 0.6 }, children: `© ${e} AI4U. todosLosDerechosReservados.` }),
            /* @__PURE__ */ p(l, { sx: { display: "flex", gap: 2, alignItems: "center" }, children: [
              /* @__PURE__ */ p(
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
              /* @__PURE__ */ p(
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
                    /* @__PURE__ */ i(l, { component: "span", sx: { fontWeight: 400 }, children: "mariano | 마리아노" })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ i(he, { direction: "row", spacing: 2, children: r.map((o, a) => /* @__PURE__ */ i(
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
            a
          )) })
        ] })
      ] })
    }
  );
}, Pu = ({
  customTitle: e = "Tu tiempo es oro",
  customSubtitle: t = "IA que potencia tu productividad.",
  primaryButtonText: r = "Recupera tu tiempo",
  secondaryButtonText: n = "Calcula tu ROI",
  sx: o
}) => {
  const a = Se(), s = ee();
  Xt(a.breakpoints.down("md"));
  const [c, d] = V(0), u = [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png"
  ], m = "IA con enfoque humano";
  return me(() => {
    const x = setInterval(() => {
      d((y) => y === 2 ? 0 : y + 1);
    }, 5e3);
    return () => clearInterval(x);
  }, []), /* @__PURE__ */ p(
    l,
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
          l,
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
            children: u.map((x, y) => /* @__PURE__ */ i(l, { sx: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }, children: /* @__PURE__ */ i(
              Sn,
              {
                src: x,
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
        /* @__PURE__ */ i(l, { sx: {
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
        }, children: Array.from({ length: 40 }).map((x, y) => /* @__PURE__ */ i(l, { children: Math.random().toString(2).slice(2) }, y)) }),
        /* @__PURE__ */ p(l, { sx: { position: "absolute", bottom: 20, right: 40, textAlign: "right", opacity: 0.3, zIndex: 6 }, children: [
          /* @__PURE__ */ i(Ge, { sx: { fontSize: "0.6rem" }, children: "COORD: 6.2442° N, 75.5812° W" }),
          /* @__PURE__ */ p(Ge, { sx: { fontSize: "0.6rem" }, children: [
            "SYS_LOAD: ",
            (Math.random() * 100).toFixed(2),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ i(
          Ye,
          {
            maxWidth: "xl",
            sx: {
              position: "relative",
              zIndex: 5,
              px: { xs: 2, sm: 3, md: 10, lg: 15 },
              display: "flex",
              justifyContent: "flex-start"
            },
            children: /* @__PURE__ */ p(
              he,
              {
                direction: "column",
                spacing: { xs: 2, sm: 3, md: 4 },
                sx: { width: "100%", maxWidth: "900px", textAlign: "left", alignItems: "flex-start" },
                children: [
                  /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column", alignItems: "flex-start" }, children: [
                    /* @__PURE__ */ i(
                      l,
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
                      ya,
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
                      rn,
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
                  /* @__PURE__ */ p(
                    he,
                    {
                      direction: { xs: "column", md: "row" },
                      spacing: { xs: 3, md: 4 },
                      sx: { alignItems: "flex-start" },
                      children: [
                        /* @__PURE__ */ i(
                          vn,
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
                        /* @__PURE__ */ i(l, { sx: {
                          pt: { xs: 1, md: 2 },
                          position: "relative"
                        }, children: /* @__PURE__ */ p(
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
}, Du = ({
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
  }, d = s();
  return /* @__PURE__ */ i(
    Cr,
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
        ...d.card
      },
      children: /* @__PURE__ */ p(Nt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ p(l, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(l, { sx: {
              width: 48,
              height: 48,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: d.surface.background,
              border: d.surface.border,
              backdropFilter: "blur(10px)"
            }, children: /* @__PURE__ */ i(la, { sx: {
              color: a.helpers.text.primary,
              fontSize: 24
            } }) }),
            /* @__PURE__ */ p(l, { children: [
              /* @__PURE__ */ i(de, { sx: {
                color: a.helpers.text.secondary,
                mb: 0.5
              }, children: t }),
              /* @__PURE__ */ i(Lt, { sx: {
                color: a.helpers.text.primary,
                fontWeight: 400
              }, children: r })
            ] })
          ] }),
          o && /* @__PURE__ */ i(
            Fe,
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
              children: /* @__PURE__ */ i(Oo, {})
            }
          )
        ] }),
        e.quality && /* @__PURE__ */ i(l, { sx: {
          mb: 3,
          p: 2,
          borderRadius: 2,
          background: d.surface.background,
          border: d.surface.border,
          backdropFilter: "blur(10px)"
        }, children: /* @__PURE__ */ p(l, { sx: {
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
            yt,
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
        /* @__PURE__ */ p(l, { sx: {
          mb: 3,
          p: 3,
          borderRadius: 3,
          background: d.surface.background,
          border: d.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ p(l, { sx: {
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
              yt,
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
          /* @__PURE__ */ p(l, { sx: {
            height: 40,
            borderRadius: 2,
            background: a.palette.accent,
            position: "relative",
            overflow: "hidden",
            mb: 2
          }, children: [
            /* @__PURE__ */ i(l, { sx: {
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: 2
            }, children: Array.from({ length: 20 }, (u, m) => /* @__PURE__ */ i(l, { sx: {
              width: 2,
              height: 8,
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            } }, m)) }),
            /* @__PURE__ */ i(l, { sx: {
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
        /* @__PURE__ */ p(l, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderRadius: 2,
          background: d.surface.background,
          border: d.surface.border,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: a.helpers.text.secondary,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Temperatura:" }),
            /* @__PURE__ */ p(Ae, { sx: {
              color: a.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.temperature,
              "°C"
            ] })
          ] }),
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
            e.hasWifi && /* @__PURE__ */ i(l, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: a.palette.accent + "20",
              color: a.palette.accent
            }, children: /* @__PURE__ */ i(da, { sx: { fontSize: 16 } }) }),
            e.hasBluetooth && /* @__PURE__ */ i(l, { sx: {
              width: 32,
              height: 32,
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: a.palette.success + "20",
              color: a.palette.success
            }, children: /* @__PURE__ */ i(ua, { sx: { fontSize: 16 } }) })
          ] })
        ] })
      ] })
    }
  );
}, Fu = ({
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
  }, s = (d) => {
    const u = d.toLowerCase();
    return u.includes("clear") || u.includes("sunny") ? /* @__PURE__ */ i(Rn, {}) : u.includes("cloud") || u.includes("overcast") ? /* @__PURE__ */ i(fa, {}) : u.includes("rain") || u.includes("precipitation") ? /* @__PURE__ */ i(ha, {}) : /* @__PURE__ */ i(Rn, {});
  }, c = a();
  return /* @__PURE__ */ i(
    Cr,
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
      children: /* @__PURE__ */ p(Nt, { sx: { p: 3 }, children: [
        /* @__PURE__ */ p(l, { sx: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3
        }, children: [
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            r && /* @__PURE__ */ i(pa, { sx: {
              fontSize: 20,
              color: o.helpers.text.primary
            } }),
            /* @__PURE__ */ i(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: e.location })
          ] }),
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary
            }, children: "Actualizado ahora" }),
            n && /* @__PURE__ */ i(
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
                children: /* @__PURE__ */ i(Oo, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ p(l, { sx: {
          textAlign: "center",
          mb: 4,
          p: 3,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ i(l, { sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2
          }, children: s(e.condition) }),
          /* @__PURE__ */ p(rn, { sx: {
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
          /* @__PURE__ */ p(Ie, { sx: {
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
        /* @__PURE__ */ p(l, { sx: {
          display: "flex",
          justifyContent: "space-between",
          mb: 4,
          p: 2.5,
          borderRadius: 3,
          ...c.surface,
          backdropFilter: "blur(10px)"
        }, children: [
          /* @__PURE__ */ p(l, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Viento" }),
            /* @__PURE__ */ p(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.wind,
              " km/h"
            ] })
          ] }),
          /* @__PURE__ */ p(l, { sx: { textAlign: "center" }, children: [
            /* @__PURE__ */ i(de, { sx: {
              color: o.helpers.text.secondary,
              mb: 0.5,
              textTransform: "none",
              letterSpacing: 0.5
            }, children: "Lluvia" }),
            /* @__PURE__ */ p(Ae, { sx: {
              color: o.helpers.text.primary,
              fontWeight: 400
            }, children: [
              e.precipitation,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ p(l, { sx: { pt: 2 }, children: [
          /* @__PURE__ */ i(ar, { sx: {
            mb: 3,
            borderColor: o.helpers.border.secondary + "40"
          } }),
          /* @__PURE__ */ i(Ae, { sx: {
            fontWeight: 400,
            mb: 3,
            color: o.helpers.text.primary
          }, children: "Pronóstico por Hora" }),
          /* @__PURE__ */ i(l, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: e.hourlyForecast.map((d, u) => /* @__PURE__ */ p(l, { sx: {
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
            /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              s(d.condition),
              /* @__PURE__ */ i(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "60px",
                fontWeight: 400
              }, children: d.time })
            ] }),
            /* @__PURE__ */ i(Ie, { sx: {
              color: o.helpers.text.secondary,
              flex: 1,
              textAlign: "center",
              fontWeight: 400
            }, children: d.condition }),
            /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
              /* @__PURE__ */ p(de, { sx: {
                color: o.helpers.text.secondary,
                minWidth: "40px",
                textAlign: "center"
              }, children: [
                d.precipitation,
                "%"
              ] }),
              /* @__PURE__ */ p(Ae, { sx: {
                fontWeight: 400,
                color: o.helpers.text.primary,
                minWidth: "50px",
                textAlign: "right"
              }, children: [
                d.temperature,
                "°"
              ] })
            ] })
          ] }, u)) })
        ] })
      ] })
    }
  );
}, Nu = ({
  searchValue: e,
  onSearchChange: t,
  selectedTab: r,
  onTabChange: n,
  onClearFilters: o,
  filteredCount: a,
  categoryTabs: s
}) => {
  const c = ee();
  return /* @__PURE__ */ p(l, { sx: {
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
    /* @__PURE__ */ p(
      he,
      {
        direction: "row",
        sx: { justifyContent: "space-between", alignItems: "center", mb: 3 },
        children: [
          /* @__PURE__ */ p(l, { sx: {
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
            tn,
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
    /* @__PURE__ */ i(l, { sx: { mb: 3 }, children: /* @__PURE__ */ i(
      Ao,
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
    /* @__PURE__ */ i(ar, { sx: { mb: 3, borderColor: c.contrast.text.primary, borderWidth: "2px" } }),
    /* @__PURE__ */ i(l, { children: /* @__PURE__ */ i(
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
        children: s.map((d, u) => /* @__PURE__ */ i(
          Wi,
          {
            label: d.label
          },
          u
        ))
      }
    ) })
  ] });
}, Wu = ({ stats: e, getCategories: t }) => {
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
  return /* @__PURE__ */ i(l, { sx: { mb: 8 }, children: /* @__PURE__ */ i($e, { container: !0, spacing: 3, sx: { justifyContent: "center" }, children: n.map((o, a) => /* @__PURE__ */ i($e, { size: { xs: 12, sm: 4 }, children: /* @__PURE__ */ p(l, { sx: {
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
    /* @__PURE__ */ i(Lt, { sx: {
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
}, yd = Te(Mt)(({ theme: e }) => ({
  backgroundColor: "#1a1a1a",
  color: "#f5f5f5",
  borderRadius: e.spacing(2),
  padding: e.spacing(2),
  overflow: "auto",
  "&:hover": {
    backgroundColor: "#3a3a3a",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)"
  }
})), bd = ({ code: e, language: t = "tsx", className: r = "" }) => {
  Se();
  const n = ee();
  return /* @__PURE__ */ p(yd, { className: r, children: [
    /* @__PURE__ */ p(l, { sx: {
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
        Fe,
        {
          size: "small",
          onClick: () => navigator.clipboard.writeText(e),
          sx: { color: n.helpers.text.mediumContrast },
          children: /* @__PURE__ */ i(ma, { fontSize: "small" })
        }
      )
    ] }),
    /* @__PURE__ */ i(l, { component: "pre", sx: {
      fontSize: "0.875rem",
      color: n.helpers.text.highContrast,
      fontFamily: "monospace",
      margin: 0,
      whiteSpace: "pre-wrap"
    }, children: /* @__PURE__ */ i(l, { component: "code", children: e }) })
  ] });
}, Sd = ({ props: e }) => {
  const t = Se();
  return !e || e.length === 0 ? null : /* @__PURE__ */ i(Li, { component: Mt, sx: { borderRadius: 2 }, children: /* @__PURE__ */ p(Bi, { children: [
    /* @__PURE__ */ i(ji, { children: /* @__PURE__ */ p(_n, { sx: { backgroundColor: t.palette.grey[50] }, children: [
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Propiedad" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Tipo" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Requerido" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Descripción" }),
      /* @__PURE__ */ i(He, { sx: { fontWeight: 400 }, children: "Default" })
    ] }) }),
    /* @__PURE__ */ i(Vi, { children: e.map((r, n) => /* @__PURE__ */ p(_n, { sx: {
      "&:hover": { backgroundColor: t.palette.action.hover }
    }, children: [
      /* @__PURE__ */ i(He, { children: /* @__PURE__ */ i(Ge, { children: r.name }) }),
      /* @__PURE__ */ i(He, { children: /* @__PURE__ */ i(Ge, { children: r.type }) }),
      /* @__PURE__ */ i(He, { children: /* @__PURE__ */ i(
        yt,
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
      /* @__PURE__ */ i(He, { children: r.defaultValue ? /* @__PURE__ */ i(Ge, { children: r.defaultValue }) : /* @__PURE__ */ i(l, { sx: { color: t.palette.text.disabled }, children: "-" }) })
    ] }, n)) })
  ] }) });
}, Lu = ({
  title: e,
  description: t,
  children: r,
  codeExample: n,
  props: o,
  className: a = ""
}) => {
  const s = Se();
  return /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column", gap: 4 }, className: a, children: [
    /* @__PURE__ */ p(l, { sx: {
      borderBottom: `1px solid ${s.palette.divider}`,
      pb: 3
    }, children: [
      /* @__PURE__ */ i(Lt, { sx: { mb: 1 }, children: e }),
      /* @__PURE__ */ i(Ie, { sx: { color: s.palette.text.secondary }, children: t })
    ] }),
    /* @__PURE__ */ p(Mt, { sx: {
      position: "relative",
      p: 4,
      background: "rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: 4,
      overflow: "hidden"
    }, children: [
      /* @__PURE__ */ i(l, { sx: { mb: 2 }, children: /* @__PURE__ */ i(Ae, { sx: { color: s.palette.text.primary }, children: "Preview" }) }),
      /* @__PURE__ */ i(l, { sx: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 200,
        position: "relative",
        zIndex: 1
      }, children: r })
    ] }),
    n && /* @__PURE__ */ p(l, { children: [
      /* @__PURE__ */ i(Ae, { sx: { mb: 2 }, children: "Código de Ejemplo" }),
      /* @__PURE__ */ i(bd, { code: n })
    ] }),
    o && o.length > 0 && /* @__PURE__ */ p(l, { children: [
      /* @__PURE__ */ i(Ae, { sx: { mb: 2 }, children: "Propiedades" }),
      /* @__PURE__ */ i(Sd, { props: o })
    ] })
  ] });
}, vd = Te(Jr)(({ theme: e }) => ({
  backgroundColor: e.palette.grey[100],
  borderRadius: e.spacing(2),
  maxWidth: 1024,
  margin: "0 auto",
  boxShadow: e.shadows[3]
})), wo = Te(Xe)(({ theme: e, isSelected: t }) => ({
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
})), wd = Te(Xe)(({ theme: e, isSelected: t }) => ({
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
})), Cd = Te(l)(({ theme: e }) => ({
  backgroundColor: e.palette.background.paper,
  borderRadius: e.spacing(2),
  padding: e.spacing(3),
  position: "relative",
  minHeight: 320
})), Bu = ({
  rotationAngle: e = 35,
  brightness: t = 30,
  shadowDensity: r = 25
}) => {
  const n = Se(), [o, a] = V("rotation"), [s, c] = V("cube"), [d, u] = V("spot"), m = [
    { id: "cube", name: "Cube", icon: "□", isSelected: !0 },
    { id: "sphere", name: "Sphere", icon: "○" },
    { id: "cone", name: "Cone", icon: "△" },
    { id: "cylinder", name: "Cylinder", icon: "●" },
    { id: "more", name: "More", icon: "⋯" }
  ], x = [
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
  return /* @__PURE__ */ i(vd, { children: /* @__PURE__ */ p(Nt, { sx: { p: 3 }, children: [
    /* @__PURE__ */ p(l, { sx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      mb: 3
    }, children: [
      /* @__PURE__ */ i(P, { variant: "body2", sx: {
        color: n.palette.text.secondary
      }, children: "Sat—19 January" }),
      /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ i(l, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ i(l, { sx: {
          width: 12,
          height: 12,
          backgroundColor: n.palette.grey[400],
          borderRadius: "50%"
        } }),
        /* @__PURE__ */ i(l, { sx: {
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
    /* @__PURE__ */ p($e, { container: !0, spacing: 3, children: [
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ p(l, { children: [
          /* @__PURE__ */ i(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Forms" }),
          /* @__PURE__ */ i(l, { sx: { display: "flex", gap: 1, flexWrap: "wrap" }, children: m.map((f) => /* @__PURE__ */ i(
            wo,
            {
              isSelected: s === f.id,
              onClick: () => c(f.id),
              children: f.icon
            },
            f.id
          )) })
        ] }),
        /* @__PURE__ */ p(l, { children: [
          /* @__PURE__ */ i(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Tools" }),
          /* @__PURE__ */ i(l, { sx: { display: "flex", flexDirection: "column", gap: 1 }, children: x.map((f) => /* @__PURE__ */ i(
            wd,
            {
              isSelected: o === f.id,
              onClick: () => a(f.id),
              startIcon: /* @__PURE__ */ i("span", { children: f.icon }),
              children: f.name
            },
            f.id
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 6 }, children: /* @__PURE__ */ p(Cd, { children: [
        /* @__PURE__ */ i(l, { sx: {
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%)",
          borderRadius: 2,
          overflow: "hidden"
        }, children: /* @__PURE__ */ i(l, { sx: {
          position: "absolute",
          inset: 0,
          opacity: 0.2,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "repeat(8, 1fr)",
          height: "100%"
        }, children: Array.from({ length: 96 }, (f, S) => /* @__PURE__ */ i(l, { sx: {
          border: `1px solid ${n.palette.grey[300]}`
        } }, S)) }) }),
        /* @__PURE__ */ p(l, { sx: {
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 256
        }, children: [
          /* @__PURE__ */ i(l, { sx: {
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
          /* @__PURE__ */ p(l, { sx: {
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }, children: [
            /* @__PURE__ */ i(l, { sx: {
              width: 128,
              height: 32,
              border: `2px solid ${n.palette.grey[400]}`,
              borderRadius: "16px",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }, children: /* @__PURE__ */ i(l, { sx: {
              width: 8,
              height: 8,
              backgroundColor: n.palette.grey[600],
              borderRadius: "50%"
            } }) }),
            /* @__PURE__ */ p(l, { sx: { mt: 1, textAlign: "center" }, children: [
              /* @__PURE__ */ i(P, { variant: "body2", sx: {
                color: n.palette.text.secondary
              }, children: "Rotation" }),
              /* @__PURE__ */ p(P, { variant: "h4", sx: {
                fontWeight: 400,
                color: n.palette.text.primary
              }, children: [
                e,
                "°"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ p(l, { sx: {
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
      /* @__PURE__ */ i($e, { size: { xs: 12, md: 3 }, children: /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column", gap: 3 }, children: [
        /* @__PURE__ */ p(l, { children: [
          /* @__PURE__ */ i(P, { variant: "subtitle2", sx: {
            fontWeight: 400,
            color: n.palette.text.primary,
            mb: 1.5
          }, children: "Lightning" }),
          /* @__PURE__ */ i($e, { container: !0, spacing: 1, children: y.map((f) => /* @__PURE__ */ i($e, { size: 6, children: /* @__PURE__ */ i(
            wo,
            {
              isSelected: d === f.id,
              onClick: () => u(f.id),
              sx: { width: 48, height: 48 },
              children: f.icon
            }
          ) }, f.id)) })
        ] }),
        /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column", gap: 2 }, children: [
          /* @__PURE__ */ p(l, { children: [
            /* @__PURE__ */ p(l, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ i(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Brightness" }),
              /* @__PURE__ */ p(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                t,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ i(l, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ i(l, { sx: {
              height: "100%",
              width: `${t}%`,
              backgroundColor: n.palette.text.primary,
              borderRadius: 1,
              transition: "width 0.3s ease"
            } }) })
          ] }),
          /* @__PURE__ */ p(l, { children: [
            /* @__PURE__ */ p(l, { sx: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1
            }, children: [
              /* @__PURE__ */ i(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: "Shadow Density" }),
              /* @__PURE__ */ p(P, { variant: "caption", sx: {
                color: n.palette.text.secondary
              }, children: [
                r,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ i(l, { sx: {
              width: "100%",
              height: 8,
              backgroundColor: n.palette.grey[300],
              borderRadius: 1,
              position: "relative",
              overflow: "hidden"
            }, children: /* @__PURE__ */ i(l, { sx: {
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
    /* @__PURE__ */ p(l, { sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      mt: 3,
      pt: 2,
      borderTop: `1px solid ${n.palette.divider}`
    }, children: [
      /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
        /* @__PURE__ */ i(l, { sx: {
          width: 16,
          height: 16,
          border: `1px solid ${n.palette.grey[400]}`,
          borderRadius: 1
        } }),
        /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column" }, children: [
          /* @__PURE__ */ i(P, { variant: "caption", sx: {
            color: n.palette.text.secondary,
            fontSize: "0.75rem"
          }, children: "END IS UI" }),
          /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 0.5 }, children: [
            /* @__PURE__ */ i(P, { variant: "caption", sx: {
              color: n.palette.text.secondary,
              fontSize: "0.75rem"
            }, children: "UI" }),
            /* @__PURE__ */ i(l, { sx: {
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
}, kd = Oe(/* @__PURE__ */ i("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu"), Co = Oe(/* @__PURE__ */ i("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode"), ko = Oe(/* @__PURE__ */ i("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode"), Ed = Te(Xe, {
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
})), Td = Te(l)(({ theme: e }) => ({
  flexGrow: 1,
  justifyContent: "flex-end",
  alignItems: "center",
  display: "none",
  [e.breakpoints.up("md")]: {
    display: "flex"
  }
})), Id = () => {
  const [e, t] = V(null), [r, n] = V(!1), o = ee(), a = en(), { mode: s, toggleColorMode: c } = bn();
  me(() => {
    const y = () => {
      n(window.scrollY > 20);
    };
    return window.addEventListener("scroll", y), () => window.removeEventListener("scroll", y);
  }, []);
  const d = [
    { name: "inicio", path: Me.HOME },
    { name: "servicios", path: Me.SERVICES },
    { name: "superAI", path: Me.SUPER_AI },
    { name: "porqueAi4u", path: Me.WHY_AI4U },
    { name: "portafolio", path: Me.PORTFOLIO }
  ], u = (y) => {
    t(y.currentTarget);
  }, m = () => {
    t(null);
  }, x = (y) => {
    m(), a(y), Lr();
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
        zIndex: (y) => y.zIndex.drawer + 1
      },
      children: /* @__PURE__ */ i(Ye, { maxWidth: "lg", children: /* @__PURE__ */ p(Ui, { disableGutters: !0, children: [
        /* @__PURE__ */ i(
          l,
          {
            component: $t,
            to: Me.HOME,
            "aria-label": "Ir a página principal - AI4U Logo",
            sx: {
              mr: 3,
              display: { xs: "none", md: "flex" },
              textDecoration: "none",
              alignItems: "center"
            },
            children: /* @__PURE__ */ i(bt, { variant: "desktop", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ p(l, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } }, children: [
          /* @__PURE__ */ i(
            Fe,
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
              children: e ? /* @__PURE__ */ i(vi, {}) : /* @__PURE__ */ i(kd, {})
            }
          ),
          /* @__PURE__ */ p(
            Io,
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
                  boxShadow: Rt.lg
                }
              },
              children: [
                d.map((y) => /* @__PURE__ */ i(
                  Yt,
                  {
                    onClick: () => x(y.path),
                    component: $t,
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
                  Yt,
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
                    children: /* @__PURE__ */ i(l, { sx: { width: "100%", maxWidth: (y) => y.spacing(25) }, children: /* @__PURE__ */ i(So, { light: o.mode === "dark" }) })
                  }
                ),
                /* @__PURE__ */ p(
                  Yt,
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
                      s === "light" ? /* @__PURE__ */ i(ko, { fontSize: "small" }) : /* @__PURE__ */ i(Co, { fontSize: "small" }),
                      /* @__PURE__ */ i(P, { children: s === "light" ? "Modo oscuro" : "Modo claro" })
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ i(
          l,
          {
            component: $t,
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
            children: /* @__PURE__ */ i(bt, { variant: "mobile", light: o.mode === "dark" })
          }
        ),
        /* @__PURE__ */ p(Td, { children: [
          d.map((y) => /* @__PURE__ */ i(
            Ed,
            {
              colors: o,
              isScrolled: r,
              onClick: () => Lr(),
              component: $t,
              to: y.path,
              sx: { ...re.label.secondary, letterSpacing: "0.1em" },
              children: y.name
            },
            y.name
          )),
          /* @__PURE__ */ i(
            l,
            {
              sx: {
                ml: { xs: 0.5, md: 1 },
                display: "flex",
                alignItems: "center",
                flexShrink: 0
              },
              children: /* @__PURE__ */ i(So, { light: o.mode === "dark" })
            }
          ),
          /* @__PURE__ */ i(
            Fe,
            {
              onClick: c,
              size: "small",
              sx: {
                ml: 1,
                color: o.contrast.text.primary,
                border: "none",
                "&:hover": { backgroundColor: "transparent", opacity: 0.7 }
              },
              children: s === "light" ? /* @__PURE__ */ i(ko, { fontSize: "small" }) : /* @__PURE__ */ i(Co, { fontSize: "small" })
            }
          )
        ] })
      ] }) })
    }
  );
}, Eo = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], $d = [
  "agentes.",
  "orquestación",
  "de agentes.",
  "empleados ia.",
  "automatizaciones.",
  "conexión con",
  "tus sistemas."
], ju = ({
  badge: e = "ai4u // siempre activo",
  lines: t = $d,
  primaryButtonText: r = "hablar con el equipo"
}) => {
  const n = ee(), [o, a] = V(/* @__PURE__ */ new Set()), [s, c] = V(0), d = Wt([]);
  me(() => {
    const y = setInterval(() => c((f) => (f + 1) % Eo.length), 5e3);
    return () => clearInterval(y);
  }, []), me(() => {
    const y = [];
    return d.current.forEach((f, S) => {
      if (!f) return;
      const g = new IntersectionObserver(
        ([C]) => {
          C.isIntersecting && a((w) => new Set(w).add(S));
        },
        { threshold: 0.3 }
      );
      g.observe(f), y.push(g);
    }), () => y.forEach((f) => f.disconnect());
  }, [t.length]);
  const u = it((y, f) => {
    d.current[f] = y;
  }, []), m = o.size > 0 ? Math.max(...o) : -1, x = o.size / t.length * 100;
  return /* @__PURE__ */ p(l, { sx: { position: "relative", overflow: "hidden" }, children: [
    /* @__PURE__ */ p(l, { sx: { position: "absolute", inset: 0, height: "100%", zIndex: 0 }, children: [
      Eo.map((y, f) => /* @__PURE__ */ i(l, { sx: { position: "absolute", inset: 0, height: "100%" }, children: /* @__PURE__ */ i(
        Sn,
        {
          src: y,
          alt: "",
          priority: f === 0,
          sx: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: f === s ? 0.35 : 0,
            transition: "opacity 2s ease-in-out, transform 12s ease-out",
            filter: "grayscale(100%) contrast(1.1)",
            transform: f === s ? "scale(1.06)" : "scale(1)"
          }
        }
      ) }, f)),
      /* @__PURE__ */ i(l, { sx: {
        position: "absolute",
        inset: 0,
        height: "100%",
        backgroundColor: we(n.contrast.background, 0.55)
      } })
    ] }),
    /* @__PURE__ */ p(l, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      flexDirection: "column",
      px: { xs: 3, md: 8, lg: 12 },
      pt: { xs: 10, md: 12 },
      pb: 0
    }, children: [
      /* @__PURE__ */ p(l, { sx: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: { xs: 10, md: 16 } }, children: [
        /* @__PURE__ */ i(l, { sx: {
          border: `1px solid ${n.contrast.text.primary}`,
          color: n.contrast.text.primary,
          px: 1.5,
          py: 0.4,
          fontFamily: "monospace",
          fontSize: "0.72rem",
          letterSpacing: "0.08em",
          opacity: 0.65
        }, children: e }),
        /* @__PURE__ */ i(l, { sx: { textAlign: "right", opacity: 0.35 }, children: /* @__PURE__ */ i(Ge, { sx: { fontSize: "0.65rem", display: "block" }, children: "6.2442° N, 75.5812° W" }) })
      ] }),
      /* @__PURE__ */ i(l, { sx: {
        fontFamily: "monospace",
        fontSize: "0.65rem",
        letterSpacing: "0.1em",
        opacity: 0.4,
        mb: { xs: 3, md: 4 }
      }, children: "// lo que hacemos" }),
      /* @__PURE__ */ i(l, { sx: { display: "flex", flexDirection: "column", gap: { xs: 0, md: 0 } }, children: t.map((y, f) => {
        const S = o.has(f), g = f === m, C = S ? g ? 1 : 0.55 : 0.12, w = g ? b.accentColors.orange : n.contrast.text.primary;
        return /* @__PURE__ */ i(
          l,
          {
            ref: (R) => u(R, f),
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
          f
        );
      }) }),
      /* @__PURE__ */ p(l, { sx: { mt: { xs: 10, md: 14 } }, children: [
        /* @__PURE__ */ i(l, { sx: { borderTop: `1px solid ${we(n.contrast.text.primary, 0.2)}`, mb: { xs: 4, md: 5 } } }),
        /* @__PURE__ */ i(l, { sx: { display: "flex", justifyContent: "flex-end", pb: { xs: 6, md: 8 } }, children: /* @__PURE__ */ i(
          vn,
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
    /* @__PURE__ */ i(l, { sx: { position: "sticky", bottom: 0, zIndex: 6 }, children: /* @__PURE__ */ i(l, { sx: { height: "1px", bgcolor: we(n.contrast.text.primary, 0.1) }, children: /* @__PURE__ */ i(l, { sx: {
      height: "100%",
      bgcolor: b.accentColors.orange,
      width: `${x}%`,
      transition: "width 0.4s ease"
    } }) }) })
  ] });
}, To = [
  "/assets/images/hero-image.png",
  "/assets/images/hero-image2.png",
  "/assets/images/hero-image3.png"
], Ad = ["agentes", "entrenamiento", "automatizaciones"], Vu = ({
  badge: e = "ai4u.equipo // siempre activo",
  primaryButtonText: t = "hablar con el equipo"
}) => {
  const r = ee(), [n, o] = V(0);
  return me(() => {
    const a = setInterval(
      () => o((s) => (s + 1) % To.length),
      5e3
    );
    return () => clearInterval(a);
  }, []), /* @__PURE__ */ p(l, { sx: {
    position: "relative",
    height: "100vh",
    minHeight: "600px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  }, children: [
    /* @__PURE__ */ p(l, { sx: { position: "absolute", inset: 0 }, children: [
      To.map((a, s) => /* @__PURE__ */ i(l, { sx: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ i(
        Sn,
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
      /* @__PURE__ */ i(l, { sx: {
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
    /* @__PURE__ */ i(Ge, { sx: {
      position: "absolute",
      top: { xs: 72, md: 24 },
      right: { xs: 24, md: 40 },
      fontSize: "0.65rem",
      opacity: 0.3,
      zIndex: 2,
      color: r.contrast.text.primary
    }, children: "6.2442° N, 75.5812° W" }),
    /* @__PURE__ */ p(l, { sx: {
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
      /* @__PURE__ */ i(Ge, { sx: {
        fontSize: "0.6rem",
        letterSpacing: "0.2em",
        color: r.contrast.text.primary,
        opacity: 0.5
      }, children: "scroll" }),
      /* @__PURE__ */ i(l, { sx: {
        width: "1px",
        height: "36px",
        background: `linear-gradient(to bottom, ${we(r.contrast.text.primary, 0.25)}, transparent)`
      } })
    ] }),
    /* @__PURE__ */ p(l, { sx: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 4,
      px: { xs: 3, md: 5 },
      pb: { xs: 10, md: 6 }
    }, children: [
      /* @__PURE__ */ p(l, { children: [
        /* @__PURE__ */ i(Ge, { sx: {
          fontSize: "0.72rem",
          letterSpacing: "0.15em",
          color: b.accentColors.orange,
          mb: 2,
          display: "block"
        }, children: e }),
        /* @__PURE__ */ p(
          l,
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
      /* @__PURE__ */ p(l, { sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 2.5,
        flexShrink: 0,
        pb: "4px"
      }, children: [
        /* @__PURE__ */ i(l, { sx: { display: "flex", flexDirection: "column", gap: 0.75, alignItems: "flex-end" }, children: Ad.map((a) => /* @__PURE__ */ i(Ge, { sx: {
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: r.contrast.text.primary,
          opacity: 0.35,
          textTransform: "uppercase"
        }, children: a }, a)) }),
        /* @__PURE__ */ i(
          vn,
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
    /* @__PURE__ */ i(l, { sx: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "1px",
      bgcolor: we(r.contrast.text.primary, 0.1),
      zIndex: 3
    } })
  ] });
}, Hu = ({
  label: e,
  body: t,
  pillars: r,
  defaultOpen: n = !0,
  accentColor: o = b.hotOrange
}) => {
  const [a, s] = V(n), c = ee();
  return /* @__PURE__ */ p(
    l,
    {
      sx: {
        borderRadius: 0,
        overflow: "hidden",
        border: `1px solid ${c.contrast.border}`,
        backgroundColor: c.contrast.surface
      },
      children: [
        /* @__PURE__ */ p(
          l,
          {
            component: "button",
            onClick: () => s((d) => !d),
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
              /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
                /* @__PURE__ */ i(l, { sx: { width: 3, height: 16, backgroundColor: o } }),
                /* @__PURE__ */ i(
                  l,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 700,
                      color: c.contrast.text.secondary,
                      letterSpacing: "0.25em",
                      textTransform: "uppercase"
                    },
                    children: e
                  }
                )
              ] }),
              /* @__PURE__ */ i(
                l,
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
        a && /* @__PURE__ */ p(l, { sx: { p: 2.5 }, children: [
          /* @__PURE__ */ i(
            l,
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
          r && r.length > 0 && /* @__PURE__ */ i(l, { sx: { display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }, children: r.map((d) => /* @__PURE__ */ p(
            l,
            {
              sx: {
                display: "flex",
                alignItems: "center",
                gap: 0.875,
                px: 1.5,
                py: 0.625,
                backgroundColor: `${d.color}0d`,
                border: `1px solid ${d.color}30`
              },
              children: [
                /* @__PURE__ */ i(or, { id: d.icon, size: 12, color: d.color, strokeWidth: 2 }),
                /* @__PURE__ */ i(
                  l,
                  {
                    component: "span",
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: d.color
                    },
                    children: d.label
                  }
                )
              ]
            },
            d.label
          )) })
        ] })
      ]
    }
  );
}, Uu = ({
  logo: e,
  title: t,
  subtitle: r,
  badges: n,
  actions: o
}) => {
  const a = ee();
  return /* @__PURE__ */ p(
    l,
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
        /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 2 }, children: [
          e && /* @__PURE__ */ i(l, { sx: { display: "inline-flex" }, children: e }),
          e && /* @__PURE__ */ i(l, { sx: { width: "1px", height: 28, backgroundColor: a.contrast.border } }),
          /* @__PURE__ */ p(l, { children: [
            /* @__PURE__ */ i(
              l,
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
              l,
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
        /* @__PURE__ */ p(l, { sx: { display: "flex", alignItems: "center", gap: 1.25 }, children: [
          n,
          o
        ] })
      ]
    }
  );
}, Gu = ({
  branding: e,
  statusBadge: t,
  groups: r,
  stats: n,
  clock: o,
  signature: a,
  width: s = 252
}) => {
  const c = b.erieBlack, d = "rgba(255,255,255,0.06)", u = b.white, m = "rgba(255,255,255,0.45)";
  return /* @__PURE__ */ p(
    l,
    {
      component: "aside",
      sx: {
        width: s,
        flexShrink: 0,
        backgroundColor: c,
        borderRight: `1px solid ${d}`,
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        position: "sticky",
        top: 0,
        overflowY: "auto",
        color: u
      },
      children: [
        /* @__PURE__ */ p(l, { sx: { p: "22px 20px 18px", borderBottom: `1px solid ${d}` }, children: [
          e.logo && /* @__PURE__ */ i(l, { sx: { mb: 1.75 }, children: e.logo }),
          /* @__PURE__ */ i(
            l,
            {
              sx: {
                fontWeight: 900,
                fontSize: 12,
                letterSpacing: "0.2em",
                color: u,
                textTransform: "uppercase",
                lineHeight: 1
              },
              children: e.title
            }
          ),
          e.subtitle && /* @__PURE__ */ i(
            l,
            {
              sx: {
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9,
                color: m,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                mt: 0.5
              },
              children: e.subtitle
            }
          )
        ] }),
        t && /* @__PURE__ */ i(l, { sx: { p: "10px 20px", borderBottom: `1px solid ${d}` }, children: /* @__PURE__ */ p(
          l,
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
              /* @__PURE__ */ i(Qr, { status: t.status, size: 6 }),
              /* @__PURE__ */ i(
                l,
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
        /* @__PURE__ */ i(l, { component: "nav", sx: { flex: 1, py: 1.75 }, children: r.map((x) => /* @__PURE__ */ p(l, { sx: { mb: 2.25 }, children: [
          /* @__PURE__ */ p(
            l,
            {
              sx: {
                px: "20px",
                pb: 0.75,
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                fontWeight: 700,
                color: m,
                letterSpacing: "0.28em",
                textTransform: "uppercase"
              },
              children: [
                "◈ ",
                x.label
              ]
            }
          ),
          x.items.map((y) => /* @__PURE__ */ p(
            l,
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
                  or,
                  {
                    id: y.icon,
                    size: 14,
                    color: "rgba(255,255,255,0.4)",
                    strokeWidth: 1.6
                  }
                ),
                /* @__PURE__ */ p(l, { sx: { flex: 1, minWidth: 0 }, children: [
                  /* @__PURE__ */ i(
                    l,
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
                    l,
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
                y.status && /* @__PURE__ */ i(Qr, { status: y.status, size: 6 })
              ]
            },
            y.id
          ))
        ] }, x.id)) }),
        n && n.length > 0 && /* @__PURE__ */ i(
          l,
          {
            sx: {
              borderTop: `1px solid ${d}`,
              p: "14px 20px",
              display: "grid",
              gridTemplateColumns: `repeat(${Math.min(n.length, 2)}, 1fr)`,
              gap: 1
            },
            children: n.map((x) => /* @__PURE__ */ p(
              l,
              {
                sx: {
                  textAlign: "center",
                  py: 1.25,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)"
                },
                children: [
                  /* @__PURE__ */ i(
                    l,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 22,
                        fontWeight: 700,
                        color: x.color ?? b.moderateBlue,
                        lineHeight: 1
                      },
                      children: x.value
                    }
                  ),
                  /* @__PURE__ */ i(
                    l,
                    {
                      sx: {
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8,
                        color: m,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        mt: 0.375
                      },
                      children: x.label
                    }
                  )
                ]
              },
              x.label
            ))
          }
        ),
        o && /* @__PURE__ */ p(
          l,
          {
            sx: {
              borderTop: `1px solid ${d}`,
              p: "12px 20px",
              textAlign: "center"
            },
            children: [
              /* @__PURE__ */ i(
                l,
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
                l,
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
        a && /* @__PURE__ */ p(
          l,
          {
            sx: {
              borderTop: `1px solid ${d}`,
              p: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 1.5
            },
            children: [
              a.logo,
              /* @__PURE__ */ p(l, { children: [
                /* @__PURE__ */ i(
                  l,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 8.5,
                      color: m,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase"
                    },
                    children: a.caption
                  }
                ),
                /* @__PURE__ */ i(
                  l,
                  {
                    sx: {
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 11,
                      fontWeight: 700,
                      color: a.accentColor ?? b.hotOrange,
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
}, Yu = ({ children: e }) => /* @__PURE__ */ p(l, { sx: { display: "flex", flexDirection: "column", minHeight: "100vh" }, children: [
  /* @__PURE__ */ i(Nl, {}),
  /* @__PURE__ */ i(Id, {}),
  /* @__PURE__ */ i(
    l,
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
  /* @__PURE__ */ i(xd, {})
] }), _d = () => {
  const e = Se(), t = ee();
  return /* @__PURE__ */ i(
    l,
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
      children: /* @__PURE__ */ p(l, { sx: { width: "100%", maxWidth: 600 }, children: [
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
}, qu = ({
  children: e,
  fallback: t = /* @__PURE__ */ i(_d, {})
}) => /* @__PURE__ */ i(qi, { fallback: t, children: e }), Ku = () => {
  const { pathname: e, hash: t } = Qi();
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
}, Xu = ({ children: e }) => {
  const [t, r] = V(!0), n = Se(), o = _e(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let a = 0;
    const s = o.length, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, d = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((u) => {
      const m = new Image();
      m.onload = c, m.onerror = d, m.src = u;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ i(
    l,
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
      children: /* @__PURE__ */ i(Ye, { maxWidth: "lg", children: /* @__PURE__ */ p(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(l, { sx: { mb: 4 }, children: /* @__PURE__ */ i(bt, {}) }),
        /* @__PURE__ */ i(l, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ p(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ p(he, { direction: "row", spacing: 2, children: [
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
}, Qu = ({ children: e }) => {
  const [t, r] = V(!0), n = Se(), o = _e(() => [
    "/assets/images/hero-image.png",
    "/assets/images/hero-image2.png",
    "/assets/images/hero-image3.png",
    "/assets/images/ai4u-logo.png",
    "/assets/images/ai4u-logo-dark.png"
  ], []);
  return me(() => {
    let a = 0;
    const s = o.length, c = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    }, d = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((u) => {
      const m = new Image();
      m.onload = c, m.onerror = d, m.src = u;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, [o]), t ? /* @__PURE__ */ i(
    l,
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
      children: /* @__PURE__ */ i(Ye, { maxWidth: "lg", children: /* @__PURE__ */ p(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(l, { sx: { mb: 4 }, children: /* @__PURE__ */ i(bt, {}) }),
        /* @__PURE__ */ i(l, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ p(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ p(he, { direction: "row", spacing: 2, children: [
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
}, Ju = ({ children: e }) => {
  const [t, r] = V(!0), n = Se();
  return me(() => {
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
    }, d = () => {
      a++, a === s && setTimeout(() => {
        r(!1);
      }, 500);
    };
    o.forEach((u) => {
      const m = new Image();
      m.onload = c, m.onerror = d, m.src = u;
    }), s === 0 && setTimeout(() => {
      r(!1);
    }, 500);
  }, []), t ? /* @__PURE__ */ i(
    l,
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
      children: /* @__PURE__ */ i(Ye, { maxWidth: "lg", children: /* @__PURE__ */ p(he, { spacing: 4, sx: { alignItems: "center" }, children: [
        /* @__PURE__ */ i(l, { sx: { mb: 4 }, children: /* @__PURE__ */ i(bt, {}) }),
        /* @__PURE__ */ i(l, { sx: { width: "100%", maxWidth: 600 }, children: /* @__PURE__ */ i(
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
        /* @__PURE__ */ p(he, { spacing: 2, sx: { width: "100%", maxWidth: 500 }, children: [
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
        /* @__PURE__ */ p(he, { direction: "row", spacing: 2, children: [
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
}, Zu = ({ children: e }) => /* @__PURE__ */ i(be, { children: e }), ep = ({
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
  return /* @__PURE__ */ p(l, { sx: s(), className: n, children: [
    (t || r) && /* @__PURE__ */ i(l, { component: "header", sx: c(), children: /* @__PURE__ */ i(Ye, { maxWidth: "xl", sx: { py: { xs: 8, md: 12 } }, children: /* @__PURE__ */ p(l, { sx: { textAlign: "center" }, children: [
      t && /* @__PURE__ */ i(rn, { sx: {
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
    /* @__PURE__ */ i(l, { component: "main", sx: { display: "flex", flexDirection: "column" }, children: e })
  ] });
}, tp = ({
  children: e,
  title: t,
  description: r,
  className: n = "",
  variant: o = "default"
}) => {
  const a = Se();
  return /* @__PURE__ */ p(l, { sx: (() => {
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
    (t || r) && /* @__PURE__ */ p(l, { sx: { mb: 4 }, children: [
      t && /* @__PURE__ */ i(Ro, { sx: {
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
}, rp = ({
  children: e,
  className: t = "",
  maxWidth: r = "xl",
  padding: n = "lg"
}) => /* @__PURE__ */ i(
  Ye,
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
), np = ({
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
), op = ({
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
var Od = /* @__PURE__ */ ((e) => (e.OPERATION = "operation", e.STRATEGY = "strategy", e.EDUCATION = "education", e.TRANSFORMATION = "transformation", e))(Od || {}), Rd = /* @__PURE__ */ ((e) => (e.AUTOMATION = "automation", e.AI_ASSISTANT = "ai_assistant", e.ANALYTICS = "analytics", e.ECOMMERCE = "ecommerce", e.TRAINING = "training", e.CONSULTING = "consulting", e))(Rd || {}), zd = /* @__PURE__ */ ((e) => (e.ACTIVE = "active", e.INACTIVE = "inactive", e.COMING_SOON = "coming_soon", e.DEPRECATED = "deprecated", e))(zd || {});
export {
  dp as AI4U_DESIGN_TOKENS,
  b as AI4U_PALETTE,
  zu as AuthCard,
  up as BORDER_TOKENS,
  Er as BREAKPOINT_TOKENS,
  Zu as BasicLoadingWrapper,
  Ie as BodyText,
  cu as Branding,
  ku as Breadcrumb,
  fu as BudgetCard,
  tn as Button,
  pp as COMPONENT_SPACING,
  sp as COMPONENT_VARIANTS,
  Ii as CONTRAST_PAIRS,
  Cr as Card,
  lu as ChatButton,
  Ge as CodeText,
  xi as ColorModeContext,
  rp as Container,
  zt as ContextualLink,
  or as DashboardIcon,
  Gu as DashboardSidebar,
  Uu as DashboardTopBar,
  vn as DiagnosticCTA,
  Lu as Documentation,
  Eu as ErrorBoundary,
  _u as ExpandableSection,
  Au as FilterStats,
  xd as Footer,
  rr as GeometricIcon,
  ya as Giant,
  su as GiantNumber,
  Nl as GoogleTranslateProvider,
  So as GoogleTranslateWidget,
  np as Grid,
  rn as H1,
  Ro as H2,
  Lt as H3,
  Ae as H4,
  Hd as H5,
  Ud as H6,
  Vu as HeroFullscreen,
  Pu as HeroSection,
  Jd as ImagePreloader,
  iu as IntelligentImagePreloader,
  Yu as Layout,
  Sn as LazyImage,
  qu as LazyPage,
  Zd as LoadingScreen,
  Qu as LoadingWrapper,
  bt as Logo,
  hu as MetricCard,
  Bu as ModelingInterface,
  Ru as ModuleCard,
  Id as Navbar,
  Mu as Navigation,
  Ll as NavigationDot,
  nu as OptimizedImage,
  ou as OptimizedImageAdvanced,
  ep as PageLayout,
  tu as PixelArtFilter,
  eu as PixelArtImage,
  pu as ProcessStep,
  Ou as ProgressiveContent,
  Tu as RelatedPages,
  Si as SEOHead,
  Rt as SHADOW_TOKENS,
  fp as SPACING_TOKENS,
  at as SURFACE_PRESETS,
  ju as ScrollRevealHero,
  Ku as ScrollToTop,
  tp as Section,
  Cu as ServiceCard,
  Rd as ServiceCategory,
  Iu as ServiceCrossLink,
  zd as ServiceStatus,
  Od as ServiceSuperCategory,
  au as ServiceThumbnail,
  du as ServicesButton,
  Nu as ServicesFilter,
  Wu as ServicesStats,
  Xu as SimpleAppWrapper,
  Ju as SimpleLoadingWrapper,
  Du as SleepWidget,
  de as SmallText,
  op as Stack,
  Qr as StatusDot,
  $u as SuperCategoryFilter,
  qd as SurfaceProvider,
  re as TEXT_VARIANTS,
  hp as TRANSITION_TOKENS,
  J as TYPOGRAPHY_TOKENS,
  mp as TYPOGRAPHY_UTILITIES,
  Yd as ThemeProvider,
  uu as TransactionCard,
  Gd as Typography,
  Gd as TypographyWrapper,
  Hu as VisionBanner,
  Fu as WeatherWidget,
  gp as Z_INDEX_TOKENS,
  yi as analytics,
  ru as buildSEOMetadata,
  vu as cleanMetaDescription,
  xp as createAI4UTokens,
  wu as generateKeywords,
  cd as getBreadcrumbStructuredData,
  Su as getCanonicalUrl,
  yu as getFAQStructuredData,
  mu as getHomeStructuredData,
  bu as getPageMetaTags,
  sd as getServiceStructuredData,
  gu as getServicesStructuredData,
  xu as getUseCasesStructuredData,
  Qd as initAnalytics,
  bn as useColorMode,
  ee as useColors,
  $i as useComponentColors,
  Kd as useComponentVariant,
  cp as useContrastColors,
  Xd as useContrastPair,
  Il as useSurface
};
//# sourceMappingURL=index.js.map
