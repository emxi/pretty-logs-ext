function unescape(s: string): string {
  return s.replace(/\\\\/g, '\\').replace(/\\"/g, '"').replace(/\\'/g, "'")
}

function isAllowUnescape(s: string): boolean {
  let hasEscapeChar = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '"') {
      if (i === 0) {
        return false
      }
      if (s[i - 1] !== '\\') {
        return false
      }
      hasEscapeChar = true
    }
  }
  return hasEscapeChar
}

function format(s: string, tabSize: number): string {
  return JSON.stringify(JSON.parse(s), null, tabSize)
}

function unescapeRecursive(s: string): string {
  let escapedText = s
  while (isAllowUnescape(escapedText)) {
    escapedText = unescape(escapedText)
  }
  return escapedText
}

function unescapeIfCould(s: string): string {
  return isAllowUnescape(s) ? unescape(s) : s
}

export const StringUtils = {
  unescape,
  isAllowUnescape,
  format,
  unescapeRecursive,
  unescapeIfCould,
}
