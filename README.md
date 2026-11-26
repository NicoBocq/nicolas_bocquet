# Nicolas Bocquet - 1h12.com

Personal site: side projects and resume. [https://1h12.com](https://1h12.com)

## Stack

- **Astro** with static output, **TypeScript**
- Projects as a typed content collection, the rest of the copy as typed site data
- English at `/`, French at `/fr/`
- **Bun**, **Biome**, husky and lint-staged

## Commands

```bash
bun install
bun run dev
bun run build
bun run check
bun run lint
```

`bun run build` writes the static site to `dist/`.

## Structure

- `src/content/projects/`: one JSON file per project, validated by `src/content.config.ts`
- `src/data/site.ts`: profile, resume and interface copy, in both languages
- `src/views/`: home, project and resume pages, shared by both languages
- `src/pages/`: one thin file per route and per language
- `src/components/`, `src/layouts/`: shared markup and page shell
- `src/styles/`: site and resume stylesheets
- `public/`: files served as-is, including redirects from the former `.html` addresses

## License

MIT © Nicolas Bocquet
