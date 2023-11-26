
const RESOLVE_SYMBOLS = {
  "#": (num) => num + 1,
  "@": (num) => num - 1,
  "*": (num) => num * num,
  "&": (num) => num,
}

const INITIAL_VALUE = 0

const resolveSymbols = (symbols = '') => {
  let output = ''
  let currentValue = INITIAL_VALUE
  for (const symbol of symbols) {
    if(symbol === '&') output += RESOLVE_SYMBOLS[symbol](currentValue)
    currentValue = RESOLVE_SYMBOLS[symbol](currentValue)
  }
  return output
}


const input = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'

console.log(resolveSymbols(input))

