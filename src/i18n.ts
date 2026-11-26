export const LANGS = ['en', 'fr'] as const

export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = 'en'

export type Localized<T = string> = { en: T; fr: T }

type Resolved<T> =
  T extends Localized<infer Value> ? Value : T extends (infer Item)[] ? Resolved<Item>[] : T extends object ? { [Key in keyof T]: Resolved<T[Key]> } : T

const isLocalized = (value: unknown): value is Localized<unknown> => typeof value === 'object' && value !== null && 'en' in value && 'fr' in value

function frenchSpacing<T>(value: T): T {
  if (Array.isArray(value)) return value.map((item) => frenchSpacing(item)) as T
  if (typeof value !== 'string') return value
  return value.replace(/ ([?!:;»])/g, '\u00a0$1').replace(/« /g, '«\u00a0') as T
}

export function t<T>(value: Localized<T>, lang: Lang): T {
  return lang === 'fr' ? frenchSpacing(value.fr) : value.en
}

export function resolve<T>(data: T, lang: Lang): Resolved<T> {
  if (Array.isArray(data)) return data.map((item) => resolve(item, lang)) as Resolved<T>
  if (isLocalized(data)) return t(data, lang) as Resolved<T>
  if (typeof data === 'object' && data !== null) {
    return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, resolve(value, lang)])) as Resolved<T>
  }
  return data as Resolved<T>
}

export const otherLang = (lang: Lang): Lang => (lang === 'fr' ? 'en' : 'fr')

export function path(lang: Lang, route = ''): string {
  const prefix = lang === DEFAULT_LANG ? '' : `/${lang}`
  return route ? `${prefix}/${route}/` : `${prefix}/`
}

export function formatMonth(date: string, lang: Lang): string {
  return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric' }).format(new Date(`${date}-01T12:00:00`))
}
