import { words } from './data-challenges/data-chall-01.js'
const countWords = (string = []) => {
  const words = string.toLowerCase().split(' ').map(word => word)
  const uniqueWords = [...new Set(words)]
  let result = ''
  let count = 0
  for (const uWord of uniqueWords) {
    count = 0
    for (const i in words) {
      if(uWord === words[i]) {
        count++;
      }
      // return `${uWord}${count}`
    }
    result += `${uWord}${count}`
  }
  return result
}

console.log(countWords(words))