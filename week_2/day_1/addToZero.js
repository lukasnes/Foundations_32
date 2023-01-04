let numArr = [4,5,6,7,2,34,43,-4,-5,22,3,5,6]
let numArr2 = [3,7,2,6,8]
let numArr3 = [5,-5,2,-2,4,-4]

const addToZero = (arr) => {
    for(let i = 0; i < arr.length; i++) { //O(n)
        for(let j = i + 1; j < arr.length; j++){ //O(n)
            // console.log(`Outerloop index: ${i}, Innerloop index: ${j}`)
            if(arr[i] + arr[j] === 0){ //O(1)
                return true //O(1)
            }
        }
    }
    return false //O(1)
}

//O(n(n(1 + 1)) + 1)
//O(n(2n) + 1)
//O(2n^2 + 1)
//O(n^2)

// console.log(addToZero(numArr))
// console.log(addToZero(numArr2))
// console.log(addToZero(numArr3))

let firstArrayCheck = addToZero(numArr)
console.log(firstArrayCheck)