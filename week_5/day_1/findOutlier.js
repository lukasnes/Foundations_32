let arr1 = [2, 4, 0, 100, 4, 11, 2602, 36]
let arr2 = [ 160, 3, 1719, 19, 11, 13, -21]

const findOutlier = arr => {
    let evensArr = [] //O(1)
    let oddsArr = [] //O(1)

    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] % 2 === 0){
    //         evensArr.push(arr[i])
    //     } else {
    //         oddsArr.push(arr[i])
    //     }
    //     // arr[i] % 2 === 0 ? evensArr.push(arr[i]) : oddsArr.push(arr[i])
    // }
    arr.forEach(number => { //O(n)
        if(number % 2 === 0){ //O(1)
            evensArr.push(number) //O(1)
        } else {
            oddsArr.push(number) //O(1)
        }
    })
    if(evensArr.length > oddsArr.length) { //O(1)
        return oddsArr[0] //O(1)
    } else {
        return evensArr[0] //O(1)
    }
}

//O(1 + 1 + n(1 + 1 + 1) + 1 + 1 + 1)
//O(5 + 3n)
//O(n)
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