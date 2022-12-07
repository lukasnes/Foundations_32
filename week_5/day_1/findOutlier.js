let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let arr2 = [ 160, 3, 1719, 19, 11, 13, -21]

const findOutlier = arr => {
    let evensArr = []
    let oddsArr = []

    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 === 0){
    //         evensArr.push(arr[i])
    //     } else {
    //         oddsArr.push(arr[i])
    //     }
    //     // arr[i] % 2 === 0 ? evensArr.push(arr[i]) : oddsArr.push(arr[i])
    // }
    arr.forEach(number => {
        if(number % 2 === 0){
            evensArr.push(number)
        } else {
            oddsArr.push(number)
        }
    })
    if(evensArr.length > oddsArr.length) {
        return oddsArr[0]
    } else {
        return evensArr[0]
    }
}

console.log(findOutlier(arr1))
console.log(findOutlier(arr2))

const filterOutlier = arr => {
    let evens = arr.filter(number => number % 2 === 0)
    let odds = arr.filter(number => number % 2 != 0)

    if(evens.length > odds.length) {
        return odds[0]
    } else {
        return evens[0]
    }
}