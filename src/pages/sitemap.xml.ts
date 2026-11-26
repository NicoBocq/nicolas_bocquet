import type { APIRoute } from 'astro'
import { DEFAULT_LANG, LANGS, type Lang, path } from '../i18n'
import { getProjects } from '../projects'

export const GET: APIRoute = async ({ site }) => {
  const projects = await getProjects()
  const routes = [{ route: '', priority: '1.0' }, { route: 'resume', priority: '0.8' }, ...projects.map((project) => ({ route: project.id, priority: '0.7' }))]
  const url = (lang: Lang, route: string) => new URL(path(lang, route), site).href

  const entries = routes.flatMap(({ route, priority }) =>
    LANGS.map((lang) =>
      [
        '  <url>',
        `    <loc>${url(lang, route)}</loc>`,
        ...LANGS.map((alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate}" href="${url(alternate, route)}"/>`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(DEFAULT_LANG, route)}"/>`,
        '    <changefreq>monthly</changefreq>',
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n'),
    ),
  )

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n')

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
