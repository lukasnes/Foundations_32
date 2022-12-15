const sortByProduct = arr => {
    //Create a way to store our new values, with the original values
    let numberObj = {}

    for(let i = 0; i < arr.length; i++) {
        let index = i + 1

        let newValue = arr[i] * index
        numberObj[newValue] = arr[i]
    }
    // console.log(numberObj)
    let sortedArr = []
    for(let key in numberObj){
        sortedArr.push(numberObj[key])
    }
    // console.log(sortedArr)
    return sortedArr
}

console.log(sortByProduct([23,2,3,4,5]))