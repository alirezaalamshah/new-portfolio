---
name: ui-ux
description: Design system for Ali's trilingual (fa/en/de) developer portfolio — tokens, typography, RTL rules, components, a11y and performance budgets. Consult before writing or changing ANY page, component, or CSS in this project.
---

# Portfolio Design System

Every visual decision in this project follows this file. If a change conflicts with it, update this file first, then the code.

## Identity

Professional, calm, technical. The site must feel like it was designed by someone who sweats details — generous whitespace, strong typographic hierarchy, one accent color used sparingly. No stock-template look: no giant gradient blobs, no carousel, no parallax.

## Design tokens (source of truth: `src/styles/tokens.css`)

### Color — dark is the default theme, light via `[data-theme="light"]`

| Token | Dark | Light | Role |
|---|---|---|---|
| `--bg` | `#0B0E14` | `#FAFAF8` | page background |
| `--bg-raised` | `#131722` | `#FFFFFF` | cards, panels |
| `--text` | `#E6E9F0` | `#1A1D26` | body text |
| `--text-muted` | `#8B93A7` | `#5A6172` | secondary text |
| `--accent` | `#7C6CFF` | `#5B4BE0` | links, primary buttons, focus |
| `--accent-warm` | `#FFB454` | `#B26B00` | inline code, small highlights only |
| `--border` | `#232838` | `#E4E2DC` | hairlines, card borders |

Rules:
- Accent appears on at most ~5% of any viewport. Warm accent even less.
- All text/background pairs must pass WCAG AA (4.5:1 body, 3:1 large text).
- Never hard-code hex values in components — always `var(--token)`.

### Typography

- **One font for all three languages: Vazirmatn variable (self-hosted woff2)** — it covers Persian and Latin, keeping the payload to a single file. Fallback stack: `Vazirmatn, Segoe UI, Roboto, sans-serif`. Code: `ui-monospace, 'Cascadia Code', Consolas, monospace`.
- Type scale (rem): 0.875 / 1 / 1.25 / 1.563 / 1.953 / 2.441. Body 1rem/1.75 (Persian needs generous line-height); headings line-height 1.2, weight 700; body weight 400.
- Max line length: `65ch` for prose (`--measure`).

### Spacing & layout

- Spacing scale (rem): 0.25, 0.5, 1, 1.5, 2, 3, 4, 6 → `--space-1` … `--space-8`.
- Page container: `max-width: 72rem`, padding-inline `--space-3`.
- Section rhythm: `--space-7` between page sections, `--space-4` inside cards.
- Radius: `--radius: 12px` cards, `8px` buttons/inputs. Shadows: subtle only (`0 1px 3px rgb(0 0 0 / .25)` dark, `.08` light).

## RTL / multilingual rules (critical)

- Persian is the **default locale at `/`** with `dir="rtl"`; `/en/` and `/de/` are `dir="ltr"`. `<html lang dir>` are set per page from the locale — never hard-coded.
- **Only CSS logical properties**: `margin-inline-start`, `padding-inline`, `inset-inline-end`, `border-start-start-radius`, `text-align: start`. Never `left`/`right` in layout CSS. Arrows/chevrons that indicate direction must flip via `[dir="rtl"] { scale: -1 1 }` or use logical-aware icons.
- Numbers in Persian text render as Persian digits where they're prose (dates, counts) — use `Intl.NumberFormat(locale)` in helpers; keep Latin digits inside code blocks and version numbers.
- Every UI string comes from `src/i18n/` dictionaries — no literals in components. German strings run ~30% longer than English: buttons and nav must tolerate it (no fixed widths, `text-wrap: balance` on headings).

## Components

- **Buttons:** primary = accent bg + dark text-on-accent check; secondary = 1px `--border`, transparent bg. Min touch target 44×44px. `:focus-visible` ring: 2px accent, 2px offset.
- **Cards** (project, product, tutorial): `--bg-raised`, 1px border, radius 12, hover = border turns accent-ish + `translateY(-2px)`, transition 150ms ease. Whole card is one `<a>` — no nested links.
- **Nav:** sticky, backdrop-blur, current page marked with `aria-current="page"`. Contains language switcher (links to the *same page* in the other locale, with `hreflang`) and theme toggle.
- **Theme toggle:** persists to `localStorage`, respects `prefers-color-scheme` on first visit, applied by a tiny inline script in `<head>` to prevent flash.
- **Badges/tags:** pill, `--text-muted` on transparent with border; never accent-filled.

## Depth & developer motifs (the site's signature)

The site reads "built by a developer" through restrained 2.5D depth and terminal
details — never through WebGL/Three.js (violates the JS budget) or template-style
spinning scenes.

- **Card tilt:** all `.card[data-tilt]` elements tilt toward the pointer.
  Spec: max ±5° per axis, `perspective(800px)`, 150ms ease-out return, plus an
  accent-tinted radial glare (`color-mix(accent 10-12%, transparent)`) following
  the pointer. Enabled ONLY when `(hover: hover) and (pointer: fine)` AND
  `prefers-reduced-motion: no-preference`. Touch devices get the plain card.
  One shared inline script in `BaseLayout` (~0.5KB) drives it — never a library.
- **Isometric hero scene:** `src/components/HeroScene.astro` — a hand-drawn
  inline SVG (isometric terminal on a platform with orbiting glyph cubes).
  Rules: fills use design tokens only (`var(--…)`) so it re-themes itself;
  `aria-hidden="true"` (purely decorative); cube motion is a planet-style
  elliptical orbit built from two nested translate animations 90° out of
  phase (2:1 iso ellipse, ±28px/±14px, 6s revolution, cubes phased a third
  apart) — CSS transform only, no JS, wrapped in
  `prefers-reduced-motion: no-preference`; total SVG ≤10KB. Code text inside
  the scene stays English/LTR in all locales — it's code.
- **Terminal caret:** the home `<h1>` ends with a blinking block caret
  (`steps(2)` blink, ~1.1s), motion-guarded. Only on the hero h1 — one caret
  per site.
- **`//` heading prefix:** `.section-head h2` gets a mono, accent-colored `// `
  via `::before`. This is the section-title signature; don't add numbering or
  other prefixes on top of it.
- **Section iso badges:** `src/components/IsoBadge.astro` — one small isometric
  SVG per section, placed at the inline-end of each list page's `.page-head`:
  portfolio = stacked plates, products = package cube, tutorials = open book,
  about = ID card, contact = paper plane. Same rules as the hero scene (token
  fills, `aria-hidden`, ≤5px float, ≤3KB each). New sections get a new variant
  in the same family — never a raster image or an icon-font glyph.
- **Brand logo:** the raster logo lives in `src/assets/logo.png` and is ONLY
  ever shipped through `astro:assets` (`<Image>`/`getImage`) so visitors get a
  small optimized WebP/PNG — never reference the 220KB original from `public/`
  or link it directly. Header height 44px; social preview (og:image) is a
  640px PNG derived from it at build time.
- Budget guard: these motifs together must stay under ~1KB JS + ~10KB SVG
  (+ ≤3KB per section badge). If a new depth idea needs more, it doesn't ship.

## Motion

- Transitions ≤ 200ms, `ease-out`, only on `opacity`/`transform`/`border-color`.
- Everything wrapped in `@media (prefers-reduced-motion: no-preference)`.
- No scroll-hijacking, no autoplaying anything.

## Accessibility checklist (every page)

- One `<h1>`; heading levels never skip.
- Landmarks: `header / nav / main / footer`; skip-link as first focusable element.
- All images: meaningful `alt` in the page's language; decorative → `alt=""`.
- Keyboard: every interactive element reachable and visibly focused.

## Performance budget (every page)

- ≤ 50KB total JS shipped (target: near zero — theme toggle + menu only).
- One font file, `font-display: swap`, preloaded.
- Images: `astro:assets` (AVIF/WebP), explicit width/height, lazy below the fold.
- Lighthouse: Performance ≥ 95, SEO = 100, Accessibility ≥ 95 before any deploy.

## SEO conventions

- Per-page unique `<title>` (≤ 60 chars) and `meta description` (≤ 155 chars) from frontmatter/i18n — enforced by the `BaseLayout` props being required.
- `hreflang` alternates linking all three language versions of each page + `x-default` → Persian.
- JSON-LD: `Person` on home/about, `Article` on tutorials, `Product` (no offer/price while showcase-only) on product pages, `BreadcrumbList` on nested pages.
- Canonical URLs absolute, from `site` in `astro.config`.
