import { list } from './data-challenge3/data.js'

const challTree = (str = '') => {
  const helper = str.split('-')
  const min = parseInt(helper[0])
  const max = parseInt(helper[1].split(' ')[0])
  const key = str.split(':')[0].split(' ')[1]
  const code = str.split(' ').at(-1)
  let count = 0
  for (const lett of code) {
    if (key === lett) count++
  }
  if (count >= min && count <= max) return { valid: true, code }

  return { valid: false, code }
}


const arrayList = list.split('|')
let invalidCodes = []

arrayList.forEach( str => {
  const {valid, code} = challTree(str)
  if(!valid) invalidCodes.push(code)
})
console.log(invalidCodes[41])
