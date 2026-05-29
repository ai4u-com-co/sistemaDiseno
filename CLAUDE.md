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
