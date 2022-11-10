//Create a way to find the lowest, and highest values inside an array (also known as a list)
// let arr = [6,"hello",undefined]
//         // 0,   1,      2

// console.log(arr[1])
// console.log("Length of my array:",arr.length)

// for(let i = 0; i < arr.length; i++){
//     console.log(`The value at position ${i} is`, arr[i])
// }

let numArr = [2,567,23,46,-59,-5]
let lowest = numArr[0]
let highest = numArr[0]

for(let i = 0; i < numArr.length; i++){
    console.log(`The value at position ${i} is`, numArr[i])
    if(numArr[i] > highest){
        console.log(`The current value, ${numArr[i]}, is bigger than ${highest}`)
        highest = numArr[i]
    }

    if(numArr[i] < lowest){
        console.log(`The current value, ${numArr[i]}, is smaller than ${lowest}`)
        lowest = numArr[i]
    }
    console.log("====================")
}

console.log(`The lowest value in my array is ${lowest}, and the highest value is ${highest}`)

numArr.sort((a, b) => a - b)
console.log(numArr)
console.log(numArr[0],numArr[numArr.length - 1])


// let randomStuff = ["puppies","roof",null,627,undefined,"taxes"]
// let randomThing = randomStuff.slice(2,3)
// console.log(randomThing)

// for(let i = 0; i < randomStuff.length; i++){
//     console.log(randomStuff[i])
// }

// let poppedStuff = randomStuff.pop()
// console.log(poppedStuff)