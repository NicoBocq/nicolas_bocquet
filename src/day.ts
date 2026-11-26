const DAY_IN_MS = 86_400_000

export function dayNumber(launched: string, now = new Date()): number {
  const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Paris' }).format(now)
  return Math.round((Date.parse(today) - Date.parse(launched)) / DAY_IN_MS) + 1
}
