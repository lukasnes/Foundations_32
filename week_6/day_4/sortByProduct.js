const sortByProduct = arr => {
    //Create a way to store our new values, with the original values
    let numberObj = {} //O(1)

    for(let i = 0; i < arr.length; i++) { //O(n)
        let index = i + 1 //O(1)

        let newValue = arr[i] * index //O(1)
        numberObj[newValue] = arr[i] //O(1)
    }
    // console.log(numberObj)
    let sortedArr = [] //O(1)
    for(let key in numberObj){ //O(n)
        sortedArr.push(numberObj[key]) //O(1)
    }
    // console.log(sortedArr)
    return sortedArr //O(1)
}

//O(1 + n(1 + 1 + 1) + 1 + n(1) + 1)
//O(1 + 3n + 1 + n + 1)
//O(4n + 3)
//O(n)

console.log(sortByProduct([23,2,3,4,5]))