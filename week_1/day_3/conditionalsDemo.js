// let string = "${}"
// let number = 234314
// let undefinedVariable = undefined
// let nullVariable = null
// console.log(string, number, undefinedVariable, nullVariable)

// // Template literal example

// let catName = "Tigger"
// let catAge = 1
// let catColor = "orange"

// console.log(`My cat's name is ${catName}, he is ${catAge} year old, and his fur is ${catColor}`)

let ironmanHealth = 300
let captainAmericaHealth = 1000

let ironmanAttack = 15
let captainAmericaAttack = 45

for(let i = 0; i < 3; i++){
    ironmanHealth -= captainAmericaAttack
    if(i === 0){
        console.log(`Captain America's first attack`)
    } else if (i === 1) {
        console.log(`Captain America's second attack`)
    } else {
        console.log(`Captain America's final attack`)
    }
    console.log(`Ironman's health is now ${ironmanHealth}`)
    console.log(`==================`)
}

while(captainAmericaHealth > 0){
    captainAmericaHealth -= ironmanAttack
    if (captainAmericaHealth > 0) {
        console.log("Ironman fires another missile at Cap")
        console.log(`Captain's health is now ${captainAmericaHealth}`)
        console.log("==========================")
    } else {
        captainAmericaHealth = 0
        console.log("Ironman fired his final missile, and ended Captain America")
    }
}

//====================================================

let hulkHealth = 50000

console.log(!(hulkHealth != 300))

let isHulkBeefy = true
let falseNum = 0
let falseStr = ""

if(!isHulkBeefy) {
    console.log("Hulk is beefy")
} else {
    console.log("Hulk is a twig")
}