# AI4U Design System — Developer Guide

Librería de componentes/tokens consumida por todo el ecosistema superAI vía `github:donchelo/sistemaDiseno`. Vite (library mode) + MUI + Emotion.

> Componentes, tokens y uso: ver `README.md` y Storybook.

## Scripts
- `npm run storybook` — catálogo visual en `:6006`
- `npm run build` — build de la librería (genera `dist/` + copia `base.css`)
- `npm run typecheck` — `tsc --noEmit`

## Importante al editar
- Tras cambios, **siempre** `npm run build` — los consumidores leen `dist/`, no `src/`.
- Componentes router-coupled (Navbar, Footer, Breadcrumb…) usan `react-router-dom` (peer opcional). Los consumidores Next.js deben pasar su propio `LinkComponent` o usar solo tokens.
- Mantener `react-router-dom` y `react-helmet-async` en `external` de `vite.config.ts`.

## Responsive — mobile first, sin excepciones

`BREAKPOINT_TOKENS` (en `tokens/theme.ts`) es la **fuente única de verdad de breakpoints
del ecosistema**: `xs 0 · sm 640 · md 768 · lg 1024 · xl 1280 · 2xl 1536`.

Están alineados con los defaults de Tailwind porque 14 de las ~18 apps del ecosistema son
Tailwind; el design system se adapta a ellas, no al revés.

**Al escribir un componente nuevo:**
- Diseñar primero la versión angosta (375px) y ensanchar. Nunca al revés.
- Nada de anchos fijos en px sobre contenedores. Usar `%`, `minmax()`, `clamp()`, `flex`/`grid`.
- Toda tabla necesita un plan para móvil: tarjetas apiladas, o scroll **dentro de su propio
  contenedor** (`overflow-x: auto`) — nunca desplazando la página.
- Imágenes y media: `max-width: 100%`.
- Áreas táctiles de al menos 44×44px.
- Si el componente decide layout en JS, usar `useBreakpointUp` / `useIsMobile`
  (`hooks/useBreakpoint.ts`), no `window.innerWidth` suelto ni números mágicos.

**Consumo desde una app:**
- Tailwind v4 → `@import "@ai4u/design-system/styles/tailwind-theme.css";` después de
  `@import "tailwindcss";`. Los valores coinciden con los defaults, así que no cambia nada
  visualmente: lo que aporta es dejar de depender de un default implícito.
- MUI → `createTheme({ breakpoints: MUI_BREAKPOINTS })`. Es **opt-in** y sí mueve los puntos
  de quiebre (MUI trae 600/900/1200 por defecto): revisar visualmente antes de producción.

**La regla que se verifica automáticamente:** ninguna pantalla puede producir scroll
horizontal a 375px. El agente `responsive-verifier` lo comprueba en la URL real.

## Texto: nada en mayúscula sostenida

Regla de todo el ecosistema desde octubre de 2026, por una recomendación de accesibilidad: el texto en mayúscula sostenida
es más lento de leer (dislexia, baja visión) y algunos lectores de pantalla lo deletrean.

- **Prohibido** en componentes, tokens y CSS: `text-transform: uppercase`, `textTransform: 'uppercase'`, `small-caps` y
  `.toUpperCase()` sobre una cadena entera. Tampoco se escribe el texto en mayúsculas en el código.
- Se escribe con capitalización normal: primera letra de la frase, nombres propios y siglas sueltas (API, NIT, QR).
- La jerarquía se hace con tamaño, peso y la fuente mono de las etiquetas, no con mayúsculas. El espaciado entre letras
  de las etiquetas mono va bajo (≈ .02em): el ancho espaciado solo tenía sentido para mayúsculas.
- Los títulos llevan `line-height` ≥ 1: las minúsculas tienen colas (p, g, y) y con 0,8–0,9 las líneas se pisan.
- `npm run check:caps` lo vigila y corre en CI. Si una app consumidora necesita otra cosa, que lo decida en su capa, no aquí.

## Versionado — obligatorio antes de cada commit

El historial vive en el **changelog-service central**.

```
MCP tool: add_changelog_entry({
  clientId: "ai4u",
  appId: "design-system",
  appName: "AI4U Design System",   // solo la primera vez
  bump: "patch",                    // patch | minor | major
  date: "YYYY-MM-DD",
  changes: ["feat: ...", "fix: ..."]
})
```

**Bump:** `patch` (fix/chore) · `minor` (componente/feature nuevo) · `major` (breaking change en API de componentes/tokens).
