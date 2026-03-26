# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, http://localhost:5173)
npm run build      # Type-check + production build
npm run preview    # Preview production build
npm run lint       # ESLint
```

## Architecture

**Stack:** Vite + React 19 + TypeScript + CSS Modules. No CSS framework.

**Path aliases** (configured in both `vite.config.ts` and `tsconfig.app.json`):
- `@/*` → `src/*`
- `@ds/*` → `src/design-system/*`
- `@components/*` → `src/components/*`

### Design System

All tokens originate from the [DS-AI Figma file](https://www.figma.com/design/CVNmGt7NvV58jNCoqcvins/DS-AI).

| File | Purpose |
|------|---------|
| `src/design-system/tokens.css` | CSS custom properties for all tokens (colors, typography, spacing, shadows, border widths) |
| `src/design-system/typography.css` | Utility classes `.text-display`, `.text-h1` … `.text-overline` |
| `src/design-system/tokens.ts` | JS constants mirroring the CSS tokens — use for logic/tests, not component styles |

**Token naming convention in CSS:**
- Colors: `--color-fg-{name}`, `--color-accent-{name}`, `--color-tint-{name}`, `--color-border-{name}`
- Spacing: `--spacing-{n}` where n is Tailwind-scale (0, 0-5, 1, 1-5, 2, 3, 4, 5, 6, 8, 9, 10, 12, 14, 16)
- Typography: `--font-size-{name}`, `--font-weight-{name}`, `--line-height-{name}`
- Shadows: `--shadow-{sm|default|md|lg|xl}`
- Border widths: `--border-width-{none|thin|default|medium|thick}`
- Border radius: `--radius-{sm|md|lg|xl|2xl|full}`

Components always reference CSS vars, never raw hex values.

### Components

Each component lives in `src/components/{ComponentName}/` with:
- `ComponentName.tsx` — React component
- `ComponentName.module.css` — scoped styles using CSS custom properties
- `index.ts` — re-export

Components are barrel-exported from `src/components/index.ts`.

**Button** (`src/components/Button/`) — Figma node `11:892`
- Props: `variant: 'primary' | 'secondary'`, `fullWidth?: boolean`, all native `<button>` attrs
- States: default, hover (CSS `:hover`), disabled (HTML `disabled` attr)

### Preview page

`src/pages/DesignSystemPage.tsx` renders all tokens and components as a live style guide. It is the app's current root view via `App.tsx`. Access at `http://localhost:5173` during dev.

### Figma Code Connect

The design system components are not yet published to a Figma team library (required for Code Connect API). To connect them when ready:
1. Publish components in Figma to a team library
2. Run `npx figma connect publish` — the `figma.connect()` calls go alongside component files (e.g., `Button.figma.tsx`)
3. Code Connect requires an Figma Organization or Enterprise plan
