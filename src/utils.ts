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

function replaceAll(source: string, search: string, replace: string | number): string {
  if (source.indexOf('~') < 0) {
    return source.replace(new RegExp(search, 'g'), String(replace))
  }
  const searchLength = search.length
  const res = []
  while (true) {
    const index = source.indexOf(search)
    if (index > -1) {
      if (index > 0 && source.charAt(index - 1) === '~') {
        res.push(
          source
            .substring(0, index + searchLength)
            // .replace(new RegExp(`~(${search})`, 'g'), '<' + search + '>')
            // .split(`~${search}`).join(search)
        )
      } else {
        res.push(source.substring(0, index))
        res.push(replace)
      }
      source = source.substring(index + searchLength)
    } else {
      res.push(source)
      break
    }
  }
  return res.join('')
}

// Decompose time into time units
export function resolveCountdown(
  countdown: number,
  format = 'HH:mm:ss'
): ResolvedCountdown {
  const res: ResolvedCountdown = {}
  if (format.indexOf('~') > -1) {
    format = format.replace(/~[DHmsS]/g, '')
  }
  // Not beginning with ~
  const thisUnits = units.filter(unit => format.indexOf(unit.symbol) > -1)
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
    rs = replaceAll(rs, key, time[key] as string)
  })
  return rs
}
