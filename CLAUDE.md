# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal site at [1h12.com](https://1h12.com): side projects on the home page, one page per project, and a print-optimized resume. Astro with static output, TypeScript, Tailwind CSS v4. Bilingual: English at `/`, French at `/fr/`.

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
- `src/components/`: `Topbar`, `Footer`, `Shots` (capture gallery), `ProjectMeta`, `LiveLink`, `Mark`, `TextLink` (the one underlined link), `Label`, and `ResumeSection` / `ResumeEntry` for the resume.
- `src/scripts/`: the only client-side JavaScript (theme toggle, email, scroll-spy menu, kinetic hero letters, daily quiz counter).
- `src/styles/`: `global.css` is the Tailwind entry, imported once by `Base.astro`: design tokens in `@theme`, the dark palette, base rules and a few named utilities. `resume.css` only holds the print page geometry. `fonts.css` declares the two font faces. See Styling below.
- `public/`: served as-is. Holds the Open Graph images and the redirect pages for the former `.html` addresses.

## Styling

Tailwind CSS v4 through `@tailwindcss/vite`. Styles are utility classes in the markup; `src/styles/global.css` is the single source of design tokens.

- **Closed scales.** The `--color-*`, `--font-*`, `--text-*`, `--tracking-*`, `--leading-*` and `--breakpoint-*` namespaces are reset with `initial`, so only the tokens listed in `@theme` exist. There is no default Tailwind palette and no `text-2xl`: a class outside the scale generates nothing.
- **Colours**: `background`, `foreground`, `border`, `muted`, `accent`. The dark values are set under `[data-theme="dark"]`, which the theme script puts on `<body>`. The resume body carries the `light` class, which keeps it on the light palette whatever the stored theme.
- **Fonts**: `font-sans` is Inter (the default), `font-mono` is Space Grotesk.
- **Type scale**, fixed steps: `text-2xs` 0.72rem, `text-xs` 0.8rem, `text-sm` 0.875rem, `text-doc` 0.95rem and `text-doc-lg` 1.0625rem (resume body copy and headings), `text-base` 1rem, `text-lg` 1.1rem, `text-xl` 1.25rem, `text-4xl` 2.5rem. `xs`, `lg` and `4xl` are remapped from the Tailwind defaults to the values the design uses. Fixed steps set the size only, so text keeps the inherited 1.5 line height.
- **Type scale**, fluid roles, each a `clamp()` that carries its own line height and letter spacing: `text-hero` and `text-hero-wide` (home name), `text-display-lg` (project title), `text-display` (home entry title), `text-display-sm` (next project), `text-tagline`, `text-colophon`, `text-lede` (project pitch), `text-question`, `text-pitch`.
- **Tracking**: `tracking-tight` -0.025em, `tracking-wide` 0.04em, `tracking-wider` 0.08em.
- **Breakpoints**, in px to match the earlier media queries: `sm` 700, `md` 769, `lg` 900, `xl` 1000. Most responsive rules are written desktop first with `max-*:` variants.
- **Spacing**: the default Tailwind scale. Values with no scale are named once in `global.css` instead of being written as arbitrary values: text measures (`max-w-tagline`, `max-w-lede`, `max-w-story`…), `max-w-site`, `max-w-a4`, grid templates (`grid-cols-intro`, `grid-cols-feature`, `grid-cols-skills`, `grid-cols-resume-foot`), `auto-cols-phone` / `auto-cols-wide`, `transition-border`, `scrollbar-none`.
- **Variants**: `dark:` follows `data-theme`, `mouse:` applies only with a hover-capable fine pointer, `is-active:` matches the class the scroll-spy script toggles.
- **Transitions** default to 300ms `ease`. Elements with a border use `transition-border`, so the border fades with the theme without slowing the text colour inherited from `<body>`.
- **Links**: every underlined link is `TextLink`, built with cva, with `variant` `solid` (always underlined, accent on hover), `reveal` (topbar menu) or `hairline` (footer).
- **Script hooks**: the classes `entry`, `hero-name`, `kinetic-letter` and `is-active` are read or toggled by `src/scripts/`. Keep them when editing the markup.
- **Class detection**: Tailwind only scans `src/components`, `src/layouts`, `src/views` and `src/pages` (`source(none)` plus `@source`). A class written anywhere else is not generated.
- **Resume print**: `resume.css` sets `@page` with zero margin, a 13.5px root font size and the per-page padding cloned on `<body>`. Everything else is `print:` utilities. Sizes in rem therefore shrink in print.

## Conventions

- All copy is bilingual: every new string needs `en` and `fr`.
- French typography is automatic: write plain spaces, `t()` and `resolve()` insert non-breaking spaces before `? ! : ; »` and after `«`.
- Adding a project takes one JSON file in `src/content/projects/`, its captures in `src/assets/work/` and an Open Graph image in `public/img/work/`. Pages, menu, resume list and sitemap follow from it.
- Captures: `"format": "phone"` expects three 780×1688 screenshots shown side by side; `"format": "wide"` expects 1600×1000 ones shown two per row.
- The email address never appears in plain text in the generated HTML. It is assembled in the browser from `data-*` attributes, in the footer and on the resume. Keep it out of static markup and JSON-LD.
- The resume must print on two A4 pages. Check the PDF after changing its content, its classes, `resume.css` or a type token it uses.
- A visitor on an English URL is sent to the French one when the browser is in French or a previous choice was stored. `?lang=fr` and `?lang=en` force a language, which keeps old links working.
- Brand rules: the accent `#e8402a` is only for hover and active states, and the mark always sits in its tile. The brand kit lives in the `1h12-brand` repository.

## Deployment

The site needs a build: `bun run build`, then serve `dist/`. Files under `/_astro/` are fingerprinted and can be cached as immutable; the repository no longer sets cache headers.

Production has been served by Cloudflare Pages (project `nicolas-bocquet`, `nicolas-bocquet.pages.dev`) from the `main` branch, with the custom domains `1h12.com` and `www.1h12.com` attached in the Pages project through proxied CNAME records in Cloudflare DNS. It is not GitHub Pages. A move to a self-hosted Coolify instance is planned, so confirm the current hosting before giving deployment instructions.
