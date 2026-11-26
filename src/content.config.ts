import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const localized = z.object({ en: z.string(), fr: z.string() })

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.json' }),
  schema: ({ image }) =>
    z.object({
      order: z.number().int(),
      title: z.string(),
      link: z.url().optional(),
      host: z.string(),
      stack: z.array(z.string()),
      year: z.string(),
      date: z.string().regex(/^\d{4}-\d{2}$/),
      status: z.enum(['live', 'soon']),
      launched: z.iso.date().optional(),
      pitch: localized,
      question: localized,
      models: z.string(),
      story: z.object({ idea: localized, iterations: localized, bench: localized }),
      format: z.enum(['phone', 'wide']),
      ogImage: z.string(),
      shots: z.array(z.object({ src: image(), alt: localized })).min(1),
    }),
})

export const collections = { projects }
