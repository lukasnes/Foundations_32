const nextSquare = num => Number.isInteger(Math.sqrt(num)) ? Math.pow((Math.sqrt(num) + 1), 2) : -1

console.log(2 === 2 ? "2 equals 2" : "2 does not equal 2")

console.log(nextSquare(25))
console.log(nextSquare(324))
console.log(nextSquare(17))

const newSquare = num => {
    if(Number.isInteger(Math.sqrt(num))) {
        return Math.pow((Math.sqrt(num) + 1),2)
    } else {
        return -1
    }
}

const helloWorld = () => "Hello world"

console.log(helloWorld())