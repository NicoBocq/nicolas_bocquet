function centerActive(nav: HTMLElement, link: HTMLElement) {
  const overflow = nav.scrollWidth - nav.clientWidth
  if (overflow <= 0) return
  const target = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2
  nav.scrollTo({
    left: Math.max(0, Math.min(target, overflow)),
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
  })
}

export function trackEntries() {
  const nav = document.getElementById('siteNav')
  if (!nav || !('IntersectionObserver' in window)) return

  const links = [...nav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')]
  const entries = [...document.querySelectorAll<HTMLElement>('.entry')]
  const visible = new Set<string>()

  const setActive = (id: string | null) => {
    for (const link of links) {
      const isActive = link.getAttribute('href') === `#${id}`
      link.classList.toggle('is-active', isActive)
      if (isActive) {
        link.setAttribute('aria-current', 'true')
        centerActive(nav, link)
      } else link.removeAttribute('aria-current')
    }
  }

  const observer = new IntersectionObserver(
    (changes) => {
      for (const change of changes) {
        if (change.isIntersecting) visible.add(change.target.id)
        else visible.delete(change.target.id)
      }
      const current = entries.find((entry) => visible.has(entry.id))
      setActive(current ? current.id : null)
    },
    { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
  )

  for (const entry of entries) observer.observe(entry)
}
