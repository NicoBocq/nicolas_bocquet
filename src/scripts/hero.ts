const FALLBACK_WEIGHT = 400
const MAX_WEIGHT = 900
const MIN_WEIGHT = 200
const HEAVY_THRESHOLD = 600
const RADIUS = 340
const EASE = 0.2
const WAVE_STAGGER = 70
const WAVE_HOLD = 220
const REAL_MOVE_DISTANCE = 8

interface Letter {
  el: HTMLElement
  neutral: number
  current: number
  target: number
}

interface Point {
  x: number
  y: number
}

export function initHero() {
  const letters: Letter[] = [...document.querySelectorAll<HTMLElement>('.hero-name .kinetic-letter')].map((el) => {
    const neutral = Number(el.style.getPropertyValue('--w')) || FALLBACK_WEIGHT
    return { el, neutral, current: neutral, target: neutral }
  })
  if (!letters.length) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let running = false

  const tick = () => {
    let settled = true
    for (const letter of letters) {
      const next = letter.current + (letter.target - letter.current) * EASE
      letter.current = next
      letter.el.style.setProperty('--w', String(Math.round(next)))
      if (Math.abs(letter.target - next) > 0.5) settled = false
    }
    if (settled) {
      running = false
      return
    }
    requestAnimationFrame(tick)
  }

  const start = () => {
    if (running) return
    running = true
    requestAnimationFrame(tick)
  }

  let introActive = true
  let introTimers: number[] = []

  const cancelIntro = () => {
    introActive = false
    for (const id of introTimers) clearTimeout(id)
    introTimers = []
  }

  letters.forEach((letter, index) => {
    const peak = letter.neutral >= HEAVY_THRESHOLD ? MIN_WEIGHT : MAX_WEIGHT
    introTimers.push(
      window.setTimeout(() => {
        letter.target = peak
        start()
      }, index * WAVE_STAGGER),
    )
    introTimers.push(
      window.setTimeout(
        () => {
          letter.target = letter.neutral
          start()
          if (index === letters.length - 1) introActive = false
        },
        index * WAVE_STAGGER + WAVE_HOLD,
      ),
    )
  })

  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

  let centers: Point[] = []

  const measure = () => {
    centers = letters.map(({ el }) => {
      const rect = el.getBoundingClientRect()
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
    })
  }
  measure()

  let firstPointer: Point | null = null

  const onMove = (event: PointerEvent) => {
    if (introActive) {
      if (!firstPointer) {
        firstPointer = { x: event.clientX, y: event.clientY }
        return
      }
      if (Math.hypot(event.clientX - firstPointer.x, event.clientY - firstPointer.y) < REAL_MOVE_DISTANCE) return
      cancelIntro()
    }
    letters.forEach((letter, index) => {
      const center = centers[index]
      if (!center) return
      const proximity = Math.max(0, 1 - Math.hypot(event.clientX - center.x, event.clientY - center.y) / RADIUS)
      letter.target = MIN_WEIGHT + (MAX_WEIGHT - MIN_WEIGHT) * proximity
    })
    start()
  }

  const onLeave = () => {
    for (const letter of letters) letter.target = letter.neutral
    start()
  }

  window.addEventListener('pointermove', onMove, { passive: true })
  document.documentElement.addEventListener('pointerleave', onLeave)
  window.addEventListener('resize', measure)
  window.addEventListener('scroll', measure, { passive: true })
}
