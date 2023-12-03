import { inputList } from './data-challenges/data-chall-05.js'

const ArrayToObject = (arr) => {
  const object = {
    id: arr[0],
    username: arr[1],
    email: arr[2],
    age: arr[3] === '' ? null : parseInt(arr[3]),
    location: arr[4],
  }
  return object
}

const isAlphaNumeric = (str = '') => {
  const regularExpresion = /^[0-9a-zA-Z]+$/

  return regularExpresion.test(str)
}

const validInput = (input = '') => {
  const arr = input.split(',')
  const { id, username, email, age, location } = ArrayToObject(arr)
  if(id === '' || username === '' || email === '') return {valid: false, username}
  
  const validEmail = email.includes('@') && email.includes('.')
  const valid =
    isAlphaNumeric(id) &&
    isAlphaNumeric(username) &&
    validEmail &&
    age &&
    location

  return { valid, username }
}

const list = inputList.split('|')
let firstCharOfInvalidInputs = ''

list.forEach(input => {
  const {valid, username} = validInput(input)
  if(!valid) {
    console.log({valid, username})
    firstCharOfInvalidInputs += username[0]
  }
})

console.log({firstCharOfInvalidInputs})

