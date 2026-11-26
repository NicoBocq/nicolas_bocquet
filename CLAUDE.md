# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal site at [1h12.com](https://1h12.com): side projects on the home page, one page per project, and a print-optimized resume. Astro with static output, TypeScript, plain CSS. Bilingual: English at `/`, French at `/fr/`.

## Commands

- `bun install`
- `bun run dev`: dev server on `http://localhost:4321`
- `bun run build`: static site in `dist/`
- `bun run check`: `astro check`, types in `.astro` and `.ts` files
- `bun run lint` / `bun run format`: Biome

Bun only. A husky pre-commit hook runs lint-staged with Biome.

TypeScript is pinned to version 6 because `astro check` does not support TypeScript 7 yet.

## Architecture

- `src/content/projects/*.json`: one file per project, validated by the schema in `src/content.config.ts`. The file name is the slug and the URL. `order` sets the position, newest first.
- `src/data/site.ts`: everything else (profile, resume, interface copy, page meta), typed by the `Site` interface.
- `src/i18n.ts`: `Localized` values are `{ en, fr }`. `t()` resolves one value, `resolve()` a whole object, `path(lang, route)` builds a URL.
- `src/views/`: `HomeView`, `ProjectView` and `ResumeView` hold the markup and take a `lang` prop.
- `src/pages/`: thin files only, one per route and per language (`pages/x.astro` and `pages/fr/x.astro`), each rendering a view. `sitemap.xml.ts` generates the sitemap.
- `src/layouts/Base.astro`: the single `<head>` (meta, Open Graph, canonical, hreflang), the language redirect and the theme init. `Site.astro` adds the topbar and the footer.
- `src/components/`: `Topbar`, `Footer`, `Shots` (capture gallery), `ProjectMeta`, `LiveLink`, `Mark`.
- `src/scripts/`: the only client-side JavaScript (theme toggle, email, scroll-spy menu, kinetic hero letters, daily quiz counter).
- `src/styles/`: `site.css` for the site, with light and dark palettes switched by `data-theme` on `<body>`; `resume.css` for the resume, screen and print; `fonts.css`.
- `public/`: served as-is. Holds the Open Graph images and the redirect pages for the former `.html` addresses.

## Conventions

- All copy is bilingual: every new string needs `en` and `fr`.
- French typography is automatic: write plain spaces, `t()` and `resolve()` insert non-breaking spaces before `? ! : ; »` and after `«`.
- Adding a project takes one JSON file in `src/content/projects/`, its captures in `src/assets/work/` and an Open Graph image in `public/img/work/`. Pages, menu, resume list and sitemap follow from it.
- Captures: `"format": "phone"` expects three 780×1688 screenshots shown side by side; `"format": "wide"` expects 1600×1000 ones shown two per row.
- The email address never appears in plain text in the generated HTML. It is assembled in the browser from `data-*` attributes, in the footer and on the resume. Keep it out of static markup and JSON-LD.
- The resume must print on two A4 pages. Check the PDF after changing its content or `resume.css`.
- A visitor on an English URL is sent to the French one when the browser is in French or a previous choice was stored. `?lang=fr` and `?lang=en` force a language, which keeps old links working.
- Brand rules: the accent `#e8402a` is only for hover and active states, and the mark always sits in its tile. The brand kit lives in the `1h12-brand` repository.

## Deployment

The site needs a build: `bun run build`, then serve `dist/`. Files under `/_astro/` are fingerprinted and can be cached as immutable; the repository no longer sets cache headers.

Production has been served by Cloudflare Pages (project `nicolas-bocquet`, `nicolas-bocquet.pages.dev`) from the `main` branch, with the custom domains `1h12.com` and `www.1h12.com` attached in the Pages project through proxied CNAME records in Cloudflare DNS. It is not GitHub Pages. A move to a self-hosted Coolify instance is planned, so confirm the current hosting before giving deployment instructions.
