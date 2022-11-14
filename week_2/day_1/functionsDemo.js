let ironManName = 'tony stark'
let captainAmericaName = 'steve rogers'
                    //    01234567
// ironManName = ironManName.toUpperCase()

console.log(ironManName)
console.log("===========================")

for(let i = 0; i < ironManName.length; i++){
    console.log(ironManName[i])
}

console.log("===========================")

console.log(captainAmericaName[7])

console.log("===========================")

// captainAmericaName = captainAmericaName.replace('s', 'S')
captainAmericaName = captainAmericaName[0].toUpperCase() + captainAmericaName.slice(1)
                        // "S"                                      "teve rogers"

console.log(captainAmericaName)

console.log("===========================")

captainAmericaName = captainAmericaName.split(' ')
console.log(captainAmericaName)
//          ['Steve', 'rogers']

for(let i = 0; i < captainAmericaName.length; i++) {
    captainAmericaName[i] = captainAmericaName[i][0].toUpperCase() + captainAmericaName[i].slice(1)
    //'Steve' -- 'rogers'            //"S"        "R"                             'teve'      'ogers'
}
console.log(captainAmericaName)
            //['Steve','Rogers']
console.log("===========================")

captainAmericaName = captainAmericaName.join(' ')

console.log(captainAmericaName)

console.log("===========================")

const capitalize = str => {
    str = str.split(' ')
    // console.log(str)
    for(let i = 0; i < str.length; i++){
        console.log(`Before change: ${str[i]}`)

        str[i] = str[i][0].toUpperCase() + str[i].slice(1)

        console.log(`After change: ${str[i]}`)
        console.log("===========================")
    }

    str = str.join(' ')
    return str
}

console.log(capitalize('This is a test string for our capitalize function'))
console.log("===========================")
console.log(capitalize(captainAmericaName))
console.log("===========================")
console.log(capitalize(ironManName))

// function capitalize(str){

// }

// const capitalize = function(str){

// }

const addTen = num => {
    return num + 10
}

let numberOne = addTen(55)
console.log(numberOne)

const sayHello = name => {
    return `Hello, ${name}`
}

let helloString = sayHello(650)
console.log(helloString)

const squareNum = num => {
    console.log(num * num)
}

let squaredNum = squareNum(5)
//squaredNum doesn't have a value because the function doesn't return anything
console.log(squaredNum)

const multiply = (num1,num2) => {
    console.log(`Inside the function: ${num1 * num2}`)
    return num1 * num2
}

let multipliedNums = multiply(5,8)
console.log(`As the variable: ${multipliedNums}`)

let multipleMultiplies = multiply(multiply(8,8),multiply(6,3))
//                                   64               18
console.log(multipleMultiplies)

console.log('==========================')

const isNumEven = num => {
    // if(num % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return num % 2 === 0
}

console.log(isNumEven(43))
console.log(isNumEven(3332))
console.log(isNumEven(7))
console.log(2 % 2 === 0)

const numDivisibleByThree = num => num % 3 === 0

console.log("=================")
console.log(numDivisibleByThree(30))
console.log(numDivisibleByThree(40))
console.log(numDivisibleByThree(45))