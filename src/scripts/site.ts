import { bindLangToggle } from './lang'

type Theme = 'dark' | 'light'

function bindEmail() {
  const link = document.getElementById('emailLink')
  if (!link) return
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const email = `${link.dataset.user}@${link.dataset.domain}`
    navigator.clipboard
      .writeText(email)
      .then(() => {
        const label = link.textContent
        link.textContent = 'COPIED!'
        setTimeout(() => {
          link.textContent = label
        }, 2000)
      })
      .catch(() => {
        window.location.href = `mailto:${email}`
      })
  })
}

function bindTheme() {
  const toggle = document.getElementById('themeToggle')
  if (!toggle) return
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

  const setTheme = (theme: Theme) => {
    document.body.setAttribute('data-theme', theme)
    toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false')
    localStorage.setItem('theme', theme)
  }

  const stored = localStorage.getItem('theme')
  if (stored === 'dark' || stored === 'light') setTheme(stored)
  else if (prefersDark.matches) setTheme('dark')

  toggle.addEventListener('click', () => {
    setTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
  })
  prefersDark.addEventListener('change', (event) => setTheme(event.matches ? 'dark' : 'light'))
}

function measureTopbar() {
  const topbar = document.getElementById('topbar')
  if (!topbar) return
  document.documentElement.style.setProperty('--topbar-h', `${topbar.offsetHeight}px`)
}

export function initSite() {
  bindLangToggle()
  bindEmail()
  bindTheme()
  measureTopbar()
  window.addEventListener('resize', measureTopbar, { passive: true })
}
