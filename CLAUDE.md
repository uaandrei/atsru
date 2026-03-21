# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun run dev       # Start Vite dev server (localhost:5173)
bun run build     # TypeScript check + Vite production build
bun run lint      # ESLint on all TypeScript files
bun run preview   # Preview production build locally
```

Always use **bun** (not npm/npx) for package management and running scripts.

## Architecture

React 19 + TypeScript + Vite 8 portfolio site with a wedding RSVP page. Deployed to Firebase Hosting via GitHub Actions on push to `main`.

### Routing (React Router v7)

- `/` — Portfolio homepage, wrapped in `LanguageProvider` for bilingual support (EN/RO)
- `/wedding` — Wedding RSVP page (standalone, no language provider)

### Key directories

- `src/pages/` — Route-level page components (`HomePage`, `Wedding`)
- `src/components/sections/` — Homepage content sections (Hero, Stats, Services, Projects, Contact)
- `src/components/layout/` — Header, Footer
- `src/components/common/` — Reusable components (Container, SymbolIcon, LanguageToggle, SectionHeading)
- `src/i18n/` — Custom i18n system using React Context
- `src/theme/siteTheme.ts` — Centralized theme config (colors, font classes, component class strings)

### i18n system

Custom lightweight implementation (no library). `LanguageProvider` wraps the homepage and provides `useLanguage()` hook returning `{ locale, setLocale, t }`. Translations live in `src/i18n/translations.ts` with full type safety via `src/i18n/types.ts`. Language preference persists in localStorage; auto-detects browser locale on first visit.

Section components receive translation data as props (e.g., `<HeroSection hero={t.hero} />`).

### Styling

- Tailwind CSS v4 with Vite plugin — classes applied inline, no separate config file
- Global `text-transform: lowercase` in `index.css`
- Homepage theme: Quicksand/Gaegu fonts, dark teal palette (`siteTheme.ts`)
- Wedding page theme: Work Sans/Playfair Display fonts, brown/gold palette, dark mode support
- Icons: Material Symbols Outlined via `<SymbolIcon>` component

### Build pipeline

React Compiler (babel-plugin-react-compiler) is enabled via Vite's Babel plugin for automatic memoization. TypeScript strict mode is on with `noUnusedLocals` and `noUnusedParameters`.
