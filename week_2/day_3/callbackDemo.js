const greetingMachine = (greeting, name) => {
    if(typeof greeting === "function" && typeof name === 'string') {
        return greeting(name)
    } else {
        return `You must give proper arguments.`
    }
}

const hello = (name) => {
    return `Hello, ${name}`
}

const sup = (name) => {
    return `'Sup, ${name}?`
}

const yo = (name) => {
    return `Yo, ${name}!`
}


let helloString = greetingMachine(hello, "Jordan")

console.log(helloString)
console.log(greetingMachine(yo, "DaMarques"))
console.log(greetingMachine(sup, "Justin"))
console.log(yo,sup,hello)

const addTen = num => {
    if(+num){
        return num + 10
    } else {
        return `${num} is not a number`
    }
}

console.log(greetingMachine(addTen, 25))
console.log(typeof helloString)

console.log("==============================================")

let numArr = [4,3,1,1,2,44,4,5,6,7,7,89]

const forLoopFunction = (num,index,array) => {
    
}
let newNumArr = []

numArr.forEach((num,index,array) => {
    console.log(`Inside the following array: ${array}\nThe element in position ${index} is ${num}`)
    console.log("=======================")
    return newNumArr.push(num * index)
})

console.log(newNumArr)

console.log("==========================")

let mappedNums = numArr.map((num,index) => {
    console.log(`The element in position ${index} is ${num}`)
    console.log("======================================")
    return num / index
})

console.log(mappedNums)
// let infiniteNum = Infinity
// console.log(infiniteNum / 0)

let strArr = ["Lukas","Cameron","Jordan","Cody","Erik"]

let mappedString = strArr.map((string, index) => {
    console.log(`The element in position ${index} is ${string}`)
    console.log("======================================")
    return string + " is awesome!"
})

console.log(mappedString)
console.log("=============================")

let filteredArr = strArr.filter((element) => {
    return element.length <= 5
})
console.log(filteredArr)
console.log("==============================")

let groceries = [
    {
        food: "Tomato",
        price: 4
    },
    {
        food: "Cereal",
        price: 10
    },
    {
        food: "Lunch meat",
        price: 20
    },
    {
        food: "Bread",
        price: 3
    }
]

let reducedPrices = groceries.reduce((accumulator,currentValue) => {
    // console.log(`The current accumulated value is ${accumulator}\nThe current actual value is ${currentValue}`)
    console.log("The accumulator:",accumulator)
    console.log("The current value:",currentValue)
    let { price } = currentValue
    return accumulator + price
},0)

console.log(`The price for my groceries was $${reducedPrices}`)

let reduceFunction = (accumulator,currentValue) => {
    console.log("The accumulator:",accumulator)
    console.log("The current value:",currentValue)
    let { price } = currentValue
    return accumulator + price
}

let reducedPricesVersionTwo = groceries.reduce(reduceFunction, 0)

console.log(`The price for my groceries with fancier logic was $${reducedPricesVersionTwo}`)