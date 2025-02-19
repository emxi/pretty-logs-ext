function getNumSlash(str: string, index: number): number {
  let num = 0
  for (let i = index - 1; i >= 0; i--) {
    if (str[i] !== '\\') {
      return num
    }
    num++
  }
  return num
}

export default function findMatchingBracketInRange(
  str: string,
  startRange: number,
  endRange: number
): {
  start: number
  end: number
  content: string
} | null {
  const brackets: Record<string, string> = {
    '{': '}',
    '[': ']',
  }

  let openBracketIndex = -1
  for (let i = startRange; i < endRange; i++) {
    if (str.charAt(i) === '{' || str.charAt(i) === '[') {
      openBracketIndex = i
      break
    }
  }
  if (openBracketIndex === -1) {
    return null
  }

  const openBracket = str[openBracketIndex]
  const closeBracket = brackets[openBracket]
  if (!closeBracket) {
    return null
  }

  const stack: number[] = []
  const inStringStack: number[] = []
  let endIndex = -1
  for (let i = openBracketIndex; i < str.length; i++) {
    if (str[i] === '"') {
      const numSlash = getNumSlash(str, i)
      if (
        inStringStack.length === 0 ||
        inStringStack[inStringStack.length - 1] !== numSlash
      ) {
        inStringStack.push(numSlash)
      } else {
        inStringStack.pop()
      }
    }

    if (inStringStack.length !== 0) {
      continue
    }

    if (str[i] === openBracket) {
      stack.push(i)
    } else if (str[i] === closeBracket) {
      stack.pop()
      if (stack.length === 0) {
        endIndex = i
        return {
          start: openBracketIndex,
          end: endIndex,
          content: str.substring(openBracketIndex, endIndex + 1),
        }
      }
    }
  }

  return null
}
