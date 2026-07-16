# Portfolio — Alireza Alamshah (alirezaalamshah.ir)

Trilingual static portfolio built with Astro. Persian (default, RTL) at `/`, English at `/en/`, German at `/de/`. Deployed to GitHub Pages via `.github/workflows/deploy.yml`; custom domain in `public/CNAME`.

## Commands

- `npm run dev` — dev server at http://localhost:4321
- `npm run build` — static build to `dist/` (postbuild runs Pagefind indexing automatically)
- `npm run preview` — serve the built site. Caveat: `astro preview` does NOT serve the post-build `dist/pagefind/` folder, so search 404s there; to test search locally use `python -m http.server 8788` from `dist/`. On GitHub Pages it works normally.

## Architecture

- **Design system**: `.claude/skills/ui-ux/SKILL.md` is the source of truth for all UI decisions (tokens in `src/styles/tokens.css`). Consult it before any visual change. Logical CSS properties only — never `left`/`right`.
- **i18n**: all UI strings live in `src/i18n/ui.ts` (never hard-code strings in components); helpers in `src/i18n/index.ts`. `localizePath()` always emits trailing slashes (GitHub Pages serves directory URLs).
- **Pages**: shared implementations live in `src/views/*.astro`; files under `src/pages/` (root=fa, `en/`, `de/`) are 3-line wrappers passing `lang`. Add a new page by creating one view + three wrappers.
- **Content**: Markdown collections in `src/content/{projects,products,tutorials}/<lang>/<slug>.md` — the slug must be identical across all three languages so hreflang alternates line up. Schemas in `src/content.config.ts`. Projects support optional `demo`/`source` (URLs) and `pdf` (site-relative path; put files in `public/files/`). Astro lowercases entry slugs from filenames.
- **Tutorials extras**: tag pages at `/tutorials/tag/<slug>/` (per-language, built from tags in frontmatter; they pass `noAlternates` to BaseLayout since tags differ per language), related-posts by shared tags on each tutorial, lazy-loaded Pagefind search on the list page (only tutorial pages carry `data-pagefind-body`), copy buttons on code blocks, RSS at `/rss.xml`, `/en/rss.xml`, `/de/rss.xml`.
- **Analytics**: GoatCounter, off by default — set `goatcounter` in `src/data/site.ts` to enable.
- **SEO**: `BaseLayout.astro` handles title/description/canonical/hreflang/OG/JSON-LD; pass `path` as the locale-agnostic route.
- **Shop is showcase-only**: product pages have no checkout; buy CTA links to contact. Planned upgrade: Zarinpal links.
- Contact email/socials: `src/data/site.ts` (socials still TODO placeholders).

## Constraints

- Keep shipped JS near zero (currently: inline theme + menu scripts only). No client frameworks, no trackers, single Vazirmatn variable font for all languages.
- `code`/`pre` must stay LTR (already in global.css) — Persian pages break otherwise.
