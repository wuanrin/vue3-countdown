/**
 * Utils
 */

interface Unit {
  symbol: string
  value: number
}

type ResolvedCountdown = Record<string, string | number>

const units: Array<Unit> = [
  { symbol: 'D', value: 24 * 60 * 60 * 1000 },
  { symbol: 'H', value: 60 * 60 * 1000 },
  { symbol: 'm', value: 60 * 1000 },
  { symbol: 's', value: 1000 },
  { symbol: 'S', value: 100 }
]

function replaceAll(source: string, search: string, replace: string): string {
  return source.split(search).join(replace)
}

// Decompose time into time units
export function resolveCountdown(
  countdown: number,
  format = 'HH:mm:ss'
): ResolvedCountdown {
  const res: ResolvedCountdown = {}
  // Not beginning with ~
  const thisUnits = units.filter(unit => {
    const index = format.indexOf(unit.symbol)
    const escapeIndex = format.indexOf('~' + unit.symbol)
    return index > -1 && (escapeIndex < 0 || escapeIndex > -1 && escapeIndex !== index - 1)
  })
  for (let i = 0, l = thisUnits.length; i < l; i++) {
    const { symbol, value } = thisUnits[i]

    // Use ceil method when only unit
    const unitValue = (
      l === 1
        ? Math.ceil(countdown / value)
        : Math.floor(countdown / value)
    )
    res[symbol] = unitValue
    res[symbol + symbol] = unitValue < 10 ? `0${unitValue}` : unitValue

    countdown %= value
  }
  return res
}

// Format countdown
export function formatCountdown (
  countdown: number | ResolvedCountdown,
  format = 'HH:mm:ss'
): string {
  // Check whether resolved
  const time = (
    typeof countdown === 'number'
      ? resolveCountdown(countdown, format)
      : countdown
  )

  // Sort the keys from long to short to replace long placeholders first
  // to prevent long placeholders from being replaced by short ones
  const keys = Object.keys(time).sort((a, b) => b.length - a.length)
  let rs = format
  keys.forEach(key => {
    const index = rs.indexOf(key)
    const escapeIndex = rs.indexOf('~' + key)
    if (index > -1 && (escapeIndex < 0 || escapeIndex > -1 && escapeIndex !== index - 1)) {
      rs = replaceAll(rs, key, time[key] as string)
    }
  })

  // Escape
  rs = rs.replace(/~([DHmsS])/g, '$1')
  return rs
}
