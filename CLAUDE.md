# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static personal portfolio site at [1h12.com](https://1h12.com). No build tools, no bundler, no npm — pure HTML/CSS/Vanilla JS deployed via GitHub Pages.

## Development

Open `index.html` directly in a browser. No build step or local server required.

**Deployment:** push to `main` branch — GitHub Pages serves it automatically (CNAME: `1h12.com`).

**Linting:** Biome is referenced in JS comments (`biome-ignore lint/...`) but no config file is in the repo. If Biome is installed globally: `biome check js/`.

## Architecture

All portfolio content lives in a single source of truth: `js/data.js` exports a global `PORTFOLIO_DATA` object (no ES module, just a global variable).

The rendering layer is `js/utils.js`, which exposes a global `DataLoader` object with methods for populating DOM elements from `PORTFOLIO_DATA`.

Script loading order in HTML is critical: `data.js` → `utils.js` → page-specific script (`main.js` or `resume.js`).

### Pages

- `index.html` + `js/main.js`: Main portfolio with accordion UI, dark mode toggle (persisted in `localStorage` via `data-theme` on `<body>`), email copy-to-clipboard (email assembled from `data-user`/`data-domain` attributes to avoid plain-text exposure in HTML).
- `resume.html` + `js/resume.js`: Print-optimized CV; uses same `DataLoader` and `PORTFOLIO_DATA`.

### Theming

CSS variables in `css/style.css` define light/dark palettes via `:root` and `[data-theme="dark"]`. The `data-theme` attribute is set on `<body>` by `main.js`.

## Content Updates

To update portfolio content (experience, projects, skills, bio, profile), edit **only `js/data.js`** — the rendering code reads everything from `PORTFOLIO_DATA`.
