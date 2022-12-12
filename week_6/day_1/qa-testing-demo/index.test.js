 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }


describe('Tests for testData Object', () => {
  test('First name Patten', () => {
    expect(testData.firstName).toEqual('Patten')
  })

  test('Title should be number', () => {
    expect(typeof testData.title).toBe('integer')
  })
})

describe('Tests for convert length function', () => {
  let twoHours = convertLength(125)

  test('Function returns an array', () => {
    expect(typeof convertLength(140)).toBe('object')
  })

  test('Returns the proper time array', () => {
    expect(convertLength(125)).toEqual(twoHours)
  })

  test('To be test', () => {
    expect(convertLength(125)).toBe(twoHours)
  })
}) 

describe('Tests for sum function', () => {
  const myObj = {faveNum: 25}
  const myObjTwo = {faveNum: 25}

  test('To Be', () => {
    expect(myObj).toBe(myObjTwo)
  })

  test('To Equal', () => {
    expect(myObj).toEqual(myObjTwo)
  })
})

let myArray = ["Hello World"] // 0x001
let myArrayTwo = ["Hello World"] // 0x002

let myArrayReference = myArray // 0x001

myArrayReference.push('Pizza') // 0x001

let myString = 'hello'
let myStringTwo = 'hello'

myString.toUpperCase()

console.log(myString)
console.log(myString.toUpperCase())

console.log(myArrayReference)
console.log(myArray)

describe('To be or not to be', () => {
  test('To be', () => {
    expect(myArray).toBe(myArrayTwo) //Is 0x001 === 0x002
  })

  test('To Equal', () => {
    expect(myArray).toEqual(myArrayTwo)
  })

  test('To be again', () => {
    expect(myArray).toBe(myArrayReference) //Is 0x001 === 0x001
  })

  test('To be immutable', () => {
    expect(myNum).toBe(myNumTwo)
  })
})