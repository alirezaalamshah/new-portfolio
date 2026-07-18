<div align="center">

<img src="https://alirezaalamshah.ir/og-image.jpg" alt="Alireza Alamshah — Python Developer &amp; Web Designer" width="640" />

# Alireza Alamshah — Portfolio

Python developer & web designer. This repository is the source of my personal site — a trilingual, zero-tracker, hand-built portfolio, not a template.

**[alirezaalamshah.ir →](https://alirezaalamshah.ir)**

[![Deploy](https://github.com/alirezaalamshah/new-portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/alirezaalamshah/new-portfolio/actions/workflows/deploy.yml)
![Astro](https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)
![Languages](https://img.shields.io/badge/i18n-fa%20%7C%20en%20%7C%20de-2C6E8E)
![JS shipped](https://img.shields.io/badge/JS%20shipped-%E2%89%A41KB-3A7D44)

</div>

---

## What this is

A static, three-language portfolio (**Persian** default/RTL, **English**, **German**) built to showcase both the projects and the engineering discipline behind them: near-zero JavaScript, a hand-drawn design system, and SEO/accessibility treated as first-class requirements rather than an afterthought.

It ships:

- **14** portfolio projects, **3** software products, **7** free programming tutorials — all mirrored across three languages with matching slugs so hreflang alternates line up correctly.
- A **custom isometric hero scene** and card-tilt micro-interactions, built as hand-authored inline SVG + ~1KB of vanilla JS — no animation library, no WebGL.
- **Full-text search** over the tutorials (Pagefind, lazy-loaded only where needed).
- **Cookie-free analytics** (GoatCounter), RSS feeds, tag pages, and JSON-LD structured data throughout.

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Astro 5](https://astro.build) | Ships HTML by default; JS only where explicitly opted in |
| Language | TypeScript (`strict`) | Content schemas and helpers are fully typed |
| Content | Astro Content Collections | Type-checked Markdown for projects, products, tutorials |
| Styling | Plain CSS, logical properties, design tokens | No RTL/LTR duplication, no utility-class framework |
| Search | [Pagefind](https://pagefind.app) | Static, no server, indexed at build time |
| Fonts | Vazirmatn (variable, self-hosted) | One font file covers Persian + Latin |
| Analytics | [GoatCounter](https://goatcounter.com) | Cookie-free, ~3.5KB, opt-in |
| Hosting | GitHub Pages + GitHub Actions | Custom domain, automatic deploy on push to `main` |

## Engineering constraints (enforced, not aspirational)

- **≤ 50KB JS per page** — in practice, theme toggle + menu + card-tilt only.
- **Lighthouse Performance ≥ 95, SEO = 100, Accessibility ≥ 95** before anything ships.
- **CSS logical properties only** (`margin-inline-start`, not `margin-left`) — the same stylesheet serves RTL Persian and LTR English/German without a mirrored build.
- **One design system file** ([`.claude/skills/ui-ux/SKILL.md`](.claude/skills/ui-ux/SKILL.md)) is the single source of truth for color, type, spacing, and motion — every visual decision traces back to it.
- **Content parity across languages** — a project/tutorial/product isn't done until it exists in `fa/`, `en/`, and `de/` with an identical slug.

## Project structure

```
src/
├── content/{projects,products,tutorials}/{fa,en,de}/<slug>.md   # localized content, schema-checked
├── views/*.astro                                                # shared page implementations
├── pages/{, en/, de/}                                           # thin per-locale wrappers over views
├── components/                                                  # cards, nav, hero scene, theme toggle…
├── i18n/                                                        # every UI string, all three languages
├── styles/tokens.css                                            # design tokens (color, type, spacing)
└── data/{site,resume}.ts                                        # contact info, résumé content
```

Adding a page means writing **one** view plus three 3-line wrappers (`/`, `/en/`, `/de/`) — routing, hreflang, and canonical URLs are handled by `BaseLayout`.

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static build to dist/, Pagefind indexes it automatically
npm run preview   # serve the build (note: search needs `python -m http.server` from dist/ locally — works normally on GitHub Pages)
```

## Deployment

Every push to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): Astro builds the site, Pagefind indexes it, and GitHub Pages serves it under the custom domain in [`public/CNAME`](public/CNAME) — no manual deploy step.

## About me

I'm a Python developer and web designer based in Tehran, currently working as a full-stack developer and application support engineer. Before that, I managed a production line building 500 modems a day and wrote the Python tooling that automated it, ran IT departments for several companies, and taught Python to 30+ students. The **[portfolio section](https://alirezaalamshah.ir/portfolio/)** and **[résumé](https://alirezaalamshah.ir/about/)** on the live site have the full detail.

- 🌐 [alirezaalamshah.ir](https://alirezaalamshah.ir)
- 💼 [LinkedIn](https://www.linkedin.com/in/ali-alamshah/)
- 📮 [Telegram](https://t.me/alirezaalamsha)
- ✉️ [info@alirezaalamshah.ir](mailto:info@alirezaalamshah.ir)

---

<div align="center">
<sub>Built with care — lightweight, fast, and tracker-free.</sub>
</div>
