import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://1h12.com',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
})
