const e = {
  mintCream: "#EAF4EB",
  // Fondo de página — cálido, natural
  erieBlack: "#171717",
  // Texto primario, superficies oscuras
  hotOrange: "#FF6E00",
  // Energía, CTAs, danger/error
  moderateBlue: "#3DAED1",
  // Tecnología, info, success
  cadetGray: "#94989B",
  // Texto secundario, captions, bordes
  white: "#FFFFFF",
  // Superficies elevadas (cards)
  black: "#171717",
  // Alias → Erie Black (backward compat)
  // Escala de grises internos (uso en MUI internals)
  gray: {
    50: "#F9F9F9",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#2A2A2A",
    900: "#171717"
    // Erie Black
  },
  // Tints semánticos
  tints: {
    hotOrange5: "rgba(255, 110, 0, 0.05)",
    hotOrange8: "rgba(255, 110, 0, 0.08)",
    hotOrange30: "rgba(255, 110, 0, 0.30)",
    moderateBlue4: "rgba(61, 174, 209, 0.04)",
    moderateBlue8: "rgba(61, 174, 209, 0.08)",
    moderateBlue15: "rgba(61, 174, 209, 0.15)",
    erieBlack8: "rgba(23, 23, 23, 0.08)",
    erieBlack10: "rgba(23, 23, 23, 0.10)",
    erieBlack20: "rgba(23, 23, 23, 0.20)",
    erieBlack30: "rgba(23, 23, 23, 0.30)",
    mintCream60: "rgba(234, 244, 235, 0.60)"
  },
  // Semántica (inversión crítica de marca)
  // orange = error/danger   ← NO usar rojo
  // blue   = success/info   ← NO usar verde
  semantic: {
    success: "#3DAED1",
    danger: "#FF6E00",
    info: "#3DAED1",
    warning: "#FF6E00"
  },
  // Telemetría (dashboards de monitoreo — NO marca)
  // Semántica universal de operación: verde=ok, rojo=falla, ámbar=transición.
  // Usar SOLO en superficies de dashboard/observabilidad, nunca en CTAs ni feedback de marca.
  telemetry: {
    online: "#22C55E",
    // verde — servicio operativo
    offline: "#EF4444",
    // rojo — servicio caído
    starting: "#F59E0B",
    // ámbar — en arranque/transición
    checking: "#94A3B8",
    // gris azulado — verificando
    idle: "#A3A3A3"
    // gris — inactivo/desconocido
  },
  // Backward compat — accentColors (legacy)
  accentColors: {
    orange: "#FF6E00",
    mint: "#EAF4EB",
    // Mint Cream — NO es el VOLT verde
    blue: "#3DAED1",
    cadetGray: "#94989B"
  },
  accent: "#FF6E00",
  // Semantic aliases (legacy)
  success: "#3DAED1",
  error: "#FF6E00",
  warning: "#FF6E00",
  info: "#3DAED1"
}, t = {
  light: {
    background: e.mintCream,
    // #EAF4EB — cálido
    surface: e.white,
    // #FFFFFF — cards elevadas
    text: {
      primary: e.erieBlack,
      // #171717
      secondary: e.cadetGray,
      // #94989B
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10
  },
  dark: {
    background: e.erieBlack,
    // #171717
    surface: e.gray[800],
    // #2A2A2A — cards elevadas en dark
    text: {
      primary: e.white,
      secondary: e.cadetGray,
      disabled: e.gray[600]
    },
    border: "rgba(255, 255, 255, 0.12)",
    divider: "rgba(255, 255, 255, 0.08)"
  }
}, b = {
  // Superficies de marca
  mintCream: {
    background: e.mintCream,
    surface: e.white,
    text: {
      primary: e.erieBlack,
      secondary: e.cadetGray,
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10,
    effectiveMode: "light"
  },
  black: {
    background: e.erieBlack,
    surface: e.gray[800],
    text: {
      primary: e.white,
      secondary: e.cadetGray,
      disabled: e.gray[600]
    },
    border: "rgba(255, 255, 255, 0.12)",
    divider: "rgba(255, 255, 255, 0.08)",
    effectiveMode: "dark"
  },
  white: {
    background: e.white,
    surface: e.white,
    text: {
      primary: e.erieBlack,
      secondary: e.cadetGray,
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10,
    effectiveMode: "light"
  },
  orange: {
    background: e.hotOrange,
    surface: e.hotOrange,
    text: {
      primary: e.white,
      secondary: "rgba(255,255,255,0.75)",
      disabled: "rgba(255,255,255,0.45)"
    },
    border: "rgba(255,255,255,0.30)",
    divider: "rgba(255,255,255,0.20)",
    effectiveMode: "dark"
  },
  // Alias legacy — 'volt' renombrado internamente a mintCream
  volt: {
    background: e.mintCream,
    surface: e.white,
    text: {
      primary: e.erieBlack,
      secondary: e.cadetGray,
      disabled: e.gray[400]
    },
    border: e.tints.erieBlack10,
    divider: e.tints.erieBlack10,
    effectiveMode: "light"
  }
}, i = {
  button: {
    primary: {
      background: e.erieBlack,
      text: e.white,
      hover: e.gray[800]
    },
    secondary: {
      background: "transparent",
      text: e.erieBlack,
      border: e.erieBlack,
      hover: e.erieBlack,
      hoverText: e.white
    },
    accent: {
      background: e.hotOrange,
      text: e.white,
      hover: "#E66400"
    },
    ghost: {
      background: "transparent",
      text: e.erieBlack,
      hover: e.tints.erieBlack8
    },
    outline: {
      background: "transparent",
      text: e.erieBlack,
      border: e.tints.erieBlack20,
      hover: e.tints.erieBlack8
    },
    minimal: {
      background: "transparent",
      text: e.erieBlack,
      border: "none",
      hover: e.tints.erieBlack8
    }
  },
  card: {
    light: {
      background: e.mintCream,
      text: e.erieBlack,
      border: e.tints.erieBlack10
    },
    elevated: {
      background: e.white,
      text: e.erieBlack,
      border: e.tints.erieBlack10
    },
    dark: {
      background: e.erieBlack,
      text: e.white,
      border: "rgba(255,255,255,0.08)"
    },
    blue: {
      background: e.tints.moderateBlue8,
      text: e.erieBlack,
      border: e.tints.moderateBlue15
    }
  }
}, p = (r) => t[r], x = (r) => ({
  ...t[r],
  components: i
}), a = {
  // Familias de fuentes
  fontFamily: {
    primary: '"Red Hat Display", sans-serif',
    code: '"Necto Mono", monospace'
  },
  // Pesos de fuente - Bold & Minimal
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 700,
    bold: 900
    // Extra bold for impact
  },
  // Tamaños de fuente - Dramatic Scale
  fontSize: {
    xs: "0.75rem",
    // 12px
    sm: "0.875rem",
    // 14px
    base: "1rem",
    // 16px
    lg: "1.25rem",
    // 20px
    xl: "1.5rem",
    // 24px
    "2xl": "2.25rem",
    // 36px
    "3xl": "3.5rem",
    // 56px
    "4xl": "5rem",
    // 80px
    "5xl": "7rem",
    // 112px
    "6xl": "9rem",
    // 144px
    "7xl": "11rem"
    // 176px
  },
  // Alturas de línea - Functional
  lineHeight: {
    tight: 0.9,
    snug: 1.1,
    normal: 1.5,
    relaxed: 1.8
  },
  // Espaciado de letras - Aggressive
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.05em",
    wider: "0.1em",
    widest: "0.2em"
  }
}, n = {
  // Títulos "DECONSTRUCTED"
  display: {
    giant: {
      fontSize: { xs: "3rem", md: "7rem", lg: "10rem" },
      fontWeight: 900,
      lineHeight: 0.85,
      letterSpacing: "-0.05em"
    },
    large: {
      fontSize: { xs: "2.5rem", md: "5rem", lg: "7rem" },
      fontWeight: 700,
      lineHeight: 0.9,
      letterSpacing: "-0.04em"
    },
    medium: {
      fontSize: { xs: "2rem", md: "3.5rem", lg: "5rem" },
      fontWeight: 700,
      lineHeight: 0.95,
      letterSpacing: "-0.03em"
    },
    small: {
      fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3.5rem" },
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "-0.02em"
    },
    number: {
      fontSize: { xs: "5rem", md: "12rem", lg: "18rem" },
      fontWeight: 900,
      lineHeight: 0.8,
      letterSpacing: "-0.06em",
      fontFamily: a.fontFamily.code
      // Monospace for numbers
    }
  },
  // Etiquetas industriales (Abloh Signature)
  label: {
    main: {
      fontFamily: a.fontFamily.code,
      fontSize: "0.875rem",
      fontWeight: 400,
      letterSpacing: "0.1em",
      opacity: 0.8
    },
    secondary: {
      fontFamily: a.fontFamily.code,
      fontSize: "0.75rem",
      fontWeight: 400,
      letterSpacing: "0.05em",
      textTransform: "lowercase",
      opacity: 0.6
    }
  },
  // Texto de cuerpo
  body: {
    large: {
      fontSize: { xs: "1.125rem", md: "1.25rem" },
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "-0.01em"
    },
    regular: {
      fontSize: { xs: "1rem", md: "1.125rem" },
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "-0.01em"
    },
    small: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5
    }
  },
  // Texto de interfaz
  ui: {
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: 1,
      letterSpacing: "0.15em"
    },
    caption: {
      fontSize: a.fontSize.xs,
      fontWeight: 400,
      lineHeight: 1.2
    },
    code: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.4,
      fontFamily: a.fontFamily.code
    }
  }
}, h = {
  // Clases de texto para uso directo
  text: {
    display: "font-black leading-none tracking-tighter",
    heading: "font-bold leading-tight",
    body: "font-normal leading-relaxed",
    label: "font-mono text-sm leading-normal tracking-widest"
  }
}, o = {
  // Espaciado base (8px)
  base: 8,
  // Escala de espaciado (más generosa)
  spacing: {
    0: 0,
    1: 8,
    // 0.5rem
    2: 16,
    // 1rem
    3: 24,
    // 1.5rem
    4: 32,
    // 2rem
    5: 40,
    // 2.5rem
    6: 48,
    // 3rem
    8: 64,
    // 4rem
    10: 80,
    // 5rem
    12: 96,
    // 6rem
    16: 128,
    // 8rem
    20: 160,
    // 10rem
    24: 192,
    // 12rem
    32: 256,
    // 16rem
    40: 320,
    // 20rem
    48: 384,
    // 24rem
    56: 448,
    // 28rem
    64: 512
    // 32rem
  },
  // Radios de borde (más sutiles)
  borderRadius: {
    none: 0,
    sm: 4,
    default: 8,
    md: 12,
    lg: 16,
    xl: 24,
    "2xl": 32,
    full: 9999
  },
  // Anchos de borde (más finos)
  borderWidth: {
    0: 0,
    default: 1,
    2: 2,
    thick: 4,
    heavy: 6
  },
  // Tamaños de elementos (más espaciados)
  sizes: {
    // Iconos
    iconXs: 16,
    iconSm: 20,
    iconMd: 24,
    iconLg: 32,
    iconXl: 40,
    // Botones (más altos)
    buttonSm: 40,
    buttonMd: 48,
    buttonLg: 56,
    // Inputs (más altos)
    inputSm: 40,
    inputMd: 48,
    inputLg: 56,
    // Cards (más espaciadas)
    cardSm: 240,
    cardMd: 320,
    cardLg: 400
  }
}, u = {
  // Espaciado interno de componentes (más generoso) - UNIDADES MUI (x8px)
  padding: {
    button: {
      sm: "1.25 2.5",
      // Aproximado para usar con theme.spacing
      md: "1.5 3",
      lg: "2 4"
    },
    card: {
      sm: 6,
      md: 8,
      lg: 12
    },
    input: {
      sm: "1.25 2",
      md: "1.5 2.5",
      lg: "2 3"
    }
  },
  // Márgenes (más generosos) - UNIDADES MUI (x8px)
  margin: {
    section: 12,
    // 96px
    subsection: 8,
    // 64px
    element: 4
    // 32px
  },
  // Espaciado de layout - valores RESPONSIVOS para usar directamente en sx
  layout: {
    container: {
      xs: 2,
      // 16px en móvil
      sm: 3,
      // 24px en tablet
      md: 4,
      // 32px en desktop pequeño
      lg: 6
      // 48px en desktop grande
    },
    section: {
      xs: 6,
      // 48px en móvil
      sm: 8,
      // 64px en tablet
      md: 10,
      // 80px en desktop
      lg: 12
      // 96px en desktop grande
    }
  }
}, d = {
  none: "0 0 #0000",
  sm: "0 1px 2px rgba(23, 23, 23, 0.05)",
  default: "0 4px 12px rgba(23, 23, 23, 0.08)",
  md: "0 4px 12px rgba(23, 23, 23, 0.08)",
  lg: "0 8px 24px rgba(23, 23, 23, 0.10)",
  drawer: "-4px 0 24px rgba(0, 0, 0, 0.12)",
  dark: {
    sm: "0 1px 2px rgba(0, 0, 0, 0.20)",
    default: "0 4px 12px rgba(0, 0, 0, 0.30)",
    md: "0 4px 12px rgba(0, 0, 0, 0.30)"
  },
  ai4u: {
    card: "0 4px 12px rgba(23, 23, 23, 0.08)",
    button: "0 1px 2px rgba(23, 23, 23, 0.05)",
    glow: "none"
    // Sin glow — Brand Book §sombras
  }
}, l = {
  width: {
    none: "0",
    thin: "1px",
    medium: "2px",
    thick: "4px"
  },
  radius: {
    none: "0px",
    sm: "0.5rem",
    // 8px  — error panels, inline boxes
    md: "1rem",
    // 16px — cards, inputs (the workhorse)
    lg: "1rem",
    full: "9999px"
    // buttons, badges, chips, search
  }
}, c = {
  dropdown: 1e3,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  toast: 1080
}, g = {
  duration: {
    fast: "100ms",
    normal: "200ms",
    slow: "400ms"
  },
  easing: {
    linear: "linear",
    step: "steps(4, end)",
    // Industrial step feel
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
}, s = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
}, m = {
  palette: e,
  contrast: t,
  typography: a,
  textVariants: n,
  spacing: o,
  shadows: d,
  borders: l,
  zIndex: c,
  transitions: g,
  breakpoints: s
}, f = (r) => ({
  ...m,
  colors: {
    mode: r,
    primary: {
      main: e.black,
      contrastText: e.white
    },
    background: {
      default: t[r].background,
      paper: t[r].surface
    },
    text: {
      primary: t[r].text.primary,
      secondary: t[r].text.secondary,
      disabled: t[r].text.disabled
    },
    divider: t[r].divider,
    border: t[r].border
  },
  // Helpers para acceso rápido
  helpers: {
    border: {
      primary: t[r].border,
      secondary: t[r].divider
    },
    background: {
      primary: t[r].background,
      secondary: r === "light" ? e.gray[50] : e.gray[900]
    },
    text: {
      primary: t[r].text.primary,
      secondary: t[r].text.secondary
    }
  }
});
export {
  m as AI4U_DESIGN_TOKENS,
  e as AI4U_PALETTE,
  l as BORDER_TOKENS,
  s as BREAKPOINT_TOKENS,
  u as COMPONENT_SPACING,
  i as COMPONENT_VARIANTS,
  t as CONTRAST_PAIRS,
  d as SHADOW_TOKENS,
  o as SPACING_TOKENS,
  b as SURFACE_PRESETS,
  n as TEXT_VARIANTS,
  g as TRANSITION_TOKENS,
  a as TYPOGRAPHY_TOKENS,
  h as TYPOGRAPHY_UTILITIES,
  c as Z_INDEX_TOKENS,
  f as createAI4UTokens,
  x as useComponentColors,
  p as useContrastColors
};
//# sourceMappingURL=index.js.map
