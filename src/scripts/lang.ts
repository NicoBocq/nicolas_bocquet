export function bindLangToggle() {
  const toggle = document.getElementById('langToggle')
  toggle?.addEventListener('click', () => {
    const target = toggle.dataset.langTarget
    if (target) localStorage.setItem('lang', target)
  })
}
