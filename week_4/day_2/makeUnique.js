//Create a function that takes a string, and returns it with only unique characters




console.log(makeUnique('hello world'))
console.log(makeUnique("Devmountain is fun and awesome"))
console.log(makeUnique("I really love to code"))


const makeUniqueTwo = str => {
    let uniqueSet = new Set(str)
    let uniqueArr = [...uniqueSet]
    return uniqueArr.join('')
}


console.log(makeUniqueTwo('hello world'))
console.log(makeUniqueTwo("Devmountain is fun and awesome"))
console.log(makeUniqueTwo("I really love to code"))

const uniqueOneLiner = str => [...new Set(str)].join('')

console.log(uniqueOneLiner('hello world'))
console.log(uniqueOneLiner("Devmountain is fun and awesome"))
console.log(uniqueOneLiner("I really love to code"))