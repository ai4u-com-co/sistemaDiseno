// AI4U Design System — Palette Tokens
// Fuente de verdad: Brand Book 2025 + Design System ZIP (mayo 2026)
// Autor: Mariano García Posada

// ── Colores base de marca ────────────────────────────────────────────────
export const AI4U_PALETTE = {
  mintCream:    '#EAF4EB',   // Fondo de página — cálido, natural
  erieBlack:    '#171717',   // Texto primario, superficies oscuras
  hotOrange:    '#FF6E00',   // Energía, CTAs, danger/error
  moderateBlue: '#3DAED1',   // Tecnología, info, success
  cadetGray:    '#94989B',   // Texto secundario, captions, bordes
  white:        '#FFFFFF',   // Superficies elevadas (cards)
  black:        '#171717',   // Alias → Erie Black (backward compat)

  // Escala de grises internos (uso en MUI internals)
  gray: {
    50:  '#F9F9F9',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#2A2A2A',
    900: '#171717',   // Erie Black
  },

  // Tints semánticos
  tints: {
    hotOrange5:    'rgba(255, 110, 0, 0.05)',
    hotOrange8:    'rgba(255, 110, 0, 0.08)',
    hotOrange30:   'rgba(255, 110, 0, 0.30)',
    moderateBlue4:  'rgba(61, 174, 209, 0.04)',
    moderateBlue8:  'rgba(61, 174, 209, 0.08)',
    moderateBlue15: 'rgba(61, 174, 209, 0.15)',
    erieBlack8:    'rgba(23, 23, 23, 0.08)',
    erieBlack10:   'rgba(23, 23, 23, 0.10)',
    erieBlack20:   'rgba(23, 23, 23, 0.20)',
    erieBlack30:   'rgba(23, 23, 23, 0.30)',
    mintCream60:   'rgba(234, 244, 235, 0.60)',
  },

  // Semántica (inversión crítica de marca)
  // orange = error/danger   ← NO usar rojo
  // blue   = success/info   ← NO usar verde
  semantic: {
    success: '#3DAED1',
    danger:  '#FF6E00',
    info:    '#3DAED1',
    warning: '#FF6E00',
  },

  // Telemetría (dashboards de monitoreo — NO marca)
  // Semántica universal de operación: verde=ok, rojo=falla, ámbar=transición.
  // Usar SOLO en superficies de dashboard/observabilidad, nunca en CTAs ni feedback de marca.
  telemetry: {
    online:   '#22C55E',   // verde — servicio operativo
    offline:  '#EF4444',   // rojo — servicio caído
    starting: '#F59E0B',   // ámbar — en arranque/transición
    checking: '#94A3B8',   // gris azulado — verificando
    idle:     '#A3A3A3',   // gris — inactivo/desconocido
  },

  // Backward compat — accentColors (legacy)
  accentColors: {
    orange:    '#FF6E00',
    mint:      '#EAF4EB',   // Mint Cream — NO es el VOLT verde
    blue:      '#3DAED1',
    cadetGray: '#94989B',
  },

  accent: '#FF6E00' as const,

  // Semantic aliases (legacy)
  success: '#3DAED1',
  error:   '#FF6E00',
  warning: '#FF6E00',
  info:    '#3DAED1',
} as const;

// ── Pares de contraste por modo ──────────────────────────────────────────
export const CONTRAST_PAIRS = {
  light: {
    background: AI4U_PALETTE.mintCream,   // #EAF4EB — cálido
    surface:    AI4U_PALETTE.white,       // #FFFFFF — cards elevadas
    text: {
      primary:   AI4U_PALETTE.erieBlack,  // #171717
      secondary: AI4U_PALETTE.cadetGray,  // #94989B
      disabled:  AI4U_PALETTE.gray[400],
    },
    border:  AI4U_PALETTE.tints.erieBlack10,
    divider: AI4U_PALETTE.tints.erieBlack10,
  },

  dark: {
    background: AI4U_PALETTE.erieBlack,  // #171717
    surface:    AI4U_PALETTE.gray[800],  // #2A2A2A — cards elevadas en dark
    text: {
      primary:   AI4U_PALETTE.white,
      secondary: AI4U_PALETTE.cadetGray,
      disabled:  AI4U_PALETTE.gray[600],
    },
    border:  'rgba(255, 255, 255, 0.12)',
    divider: 'rgba(255, 255, 255, 0.08)',
  },
} as const;

// ── Presets de superficie ────────────────────────────────────────────────
export const SURFACE_PRESETS = {
  // Superficies de marca
  mintCream: {
    background: AI4U_PALETTE.mintCream,
    surface:    AI4U_PALETTE.white,
    text: {
      primary:   AI4U_PALETTE.erieBlack,
      secondary: AI4U_PALETTE.cadetGray,
      disabled:  AI4U_PALETTE.gray[400],
    },
    border:  AI4U_PALETTE.tints.erieBlack10,
    divider: AI4U_PALETTE.tints.erieBlack10,
    effectiveMode: 'light' as const,
  },
  black: {
    background: AI4U_PALETTE.erieBlack,
    surface:    AI4U_PALETTE.gray[800],
    text: {
      primary:   AI4U_PALETTE.white,
      secondary: AI4U_PALETTE.cadetGray,
      disabled:  AI4U_PALETTE.gray[600],
    },
    border:  'rgba(255, 255, 255, 0.12)',
    divider: 'rgba(255, 255, 255, 0.08)',
    effectiveMode: 'dark' as const,
  },
  white: {
    background: AI4U_PALETTE.white,
    surface:    AI4U_PALETTE.white,
    text: {
      primary:   AI4U_PALETTE.erieBlack,
      secondary: AI4U_PALETTE.cadetGray,
      disabled:  AI4U_PALETTE.gray[400],
    },
    border:  AI4U_PALETTE.tints.erieBlack10,
    divider: AI4U_PALETTE.tints.erieBlack10,
    effectiveMode: 'light' as const,
  },
  orange: {
    background: AI4U_PALETTE.hotOrange,
    surface:    AI4U_PALETTE.hotOrange,
    text: {
      primary:   AI4U_PALETTE.white,
      secondary: 'rgba(255,255,255,0.75)',
      disabled:  'rgba(255,255,255,0.45)',
    },
    border:  'rgba(255,255,255,0.30)',
    divider: 'rgba(255,255,255,0.20)',
    effectiveMode: 'dark' as const,
  },
  // Alias legacy — 'volt' renombrado internamente a mintCream
  volt: {
    background: AI4U_PALETTE.mintCream,
    surface:    AI4U_PALETTE.white,
    text: {
      primary:   AI4U_PALETTE.erieBlack,
      secondary: AI4U_PALETTE.cadetGray,
      disabled:  AI4U_PALETTE.gray[400],
    },
    border:  AI4U_PALETTE.tints.erieBlack10,
    divider: AI4U_PALETTE.tints.erieBlack10,
    effectiveMode: 'light' as const,
  },
} as const;

export type SurfaceType = 'theme' | keyof typeof SURFACE_PRESETS;

// ── Variantes de componentes ─────────────────────────────────────────────
export const COMPONENT_VARIANTS = {
  button: {
    primary: {
      background: AI4U_PALETTE.erieBlack,
      text:       AI4U_PALETTE.white,
      hover:      AI4U_PALETTE.gray[800],
    },
    secondary: {
      background: 'transparent',
      text:       AI4U_PALETTE.erieBlack,
      border:     AI4U_PALETTE.erieBlack,
      hover:      AI4U_PALETTE.erieBlack,
      hoverText:  AI4U_PALETTE.white,
    },
    accent: {
      background: AI4U_PALETTE.hotOrange,
      text:       AI4U_PALETTE.white,
      hover:      '#E66400',
    },
    ghost: {
      background: 'transparent',
      text:       AI4U_PALETTE.erieBlack,
      hover:      AI4U_PALETTE.tints.erieBlack8,
    },
    outline: {
      background: 'transparent',
      text:       AI4U_PALETTE.erieBlack,
      border:     AI4U_PALETTE.tints.erieBlack20,
      hover:      AI4U_PALETTE.tints.erieBlack8,
    },
    minimal: {
      background: 'transparent',
      text:       AI4U_PALETTE.erieBlack,
      border:     'none',
      hover:      AI4U_PALETTE.tints.erieBlack8,
    },
  },

  card: {
    light: {
      background: AI4U_PALETTE.mintCream,
      text:       AI4U_PALETTE.erieBlack,
      border:     AI4U_PALETTE.tints.erieBlack10,
    },
    elevated: {
      background: AI4U_PALETTE.white,
      text:       AI4U_PALETTE.erieBlack,
      border:     AI4U_PALETTE.tints.erieBlack10,
    },
    dark: {
      background: AI4U_PALETTE.erieBlack,
      text:       AI4U_PALETTE.white,
      border:     'rgba(255,255,255,0.08)',
    },
    blue: {
      background: AI4U_PALETTE.tints.moderateBlue8,
      text:       AI4U_PALETTE.erieBlack,
      border:     AI4U_PALETTE.tints.moderateBlue15,
    },
  },
} as const;

export const useContrastColors = (mode: 'light' | 'dark') => CONTRAST_PAIRS[mode];
export const useComponentColors = (mode: 'light' | 'dark') => ({
  ...CONTRAST_PAIRS[mode],
  components: COMPONENT_VARIANTS,
});

export type PaletteColor = keyof typeof AI4U_PALETTE;
export type ContrastMode = keyof typeof CONTRAST_PAIRS;
