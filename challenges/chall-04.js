import { list } from "./data-challenges/data-chall-04.js"

const isRepeat = (str, checksum) => {
  let contador
  let wordsAndQuantity = {}

  for (const char of checksum) {
    contador = 1
    for (const i in str) {
      if(char === str[i]){
        wordsAndQuantity[char] = contador++
      }
    }
  }

  for(const char of checksum) {
    if(wordsAndQuantity[char] >= 2) return true
  }

  return false
}

export const challFour = (file = '') => {
  const [str, checksum] = file.split('-')
  if(isRepeat(str, checksum)) return {valid: false, checksum}
  let orden = {}

  for (const letter of checksum) {
    for (const i in str) {
      if(letter === str[i]) {
        orden[letter] = parseInt(i)
      }
    }  
  }

  for (let i = 0; i < checksum.length - 1; i++) {
    for(let j = 1; j < checksum.length; j++) {
      if(orden[checksum[i]] < orden[checksum[j]]) {
        return {valid: true, checksum}
      }
    }
  }

  return {valid: false, checksum}
}


let validFiles = []

let lista = list.split('|')

lista.forEach(file => {
  const {valid, checksum} = challFour(file)
  if(valid) validFiles.push(checksum)
})

console.log(validFiles[32])

