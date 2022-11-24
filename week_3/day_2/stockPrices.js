const highestPrice = stocks => {
    //Create placeholders to check against
    let lowestPrice = stocks[0]
    let biggestDifference = 0

    // for(let i = 0; i < stocks.length; i++){
    //     let currentValue = stocks[i]
    //     if(lowestPrice > currentValue){
    //         lowestPrice = currentValue
    //     }

    //     let currentDiff = currentValue - lowestPrice
    //     if(currentDiff > biggestDifference){
    //         biggestDifference = currentDiff
    //     }
    // }
    stocks.forEach((stockPrice) => {
        if(lowestPrice > stockPrice){
            lowestPrice = stockPrice
        }
        let currentDiff = stockPrice - lowestPrice
        if(currentDiff > biggestDifference){
            biggestDifference = currentDiff
        }
    })


    return biggestDifference
}

console.log(highestPrice([15, 10, 20, 22, 1, 9]))
console.log(highestPrice([2, 3, 10, 6, 4, 8, 1]))
console.log(highestPrice([7, 9, 5, 6, 3, 2]))
console.log(highestPrice([5, 4 , 3, 2, 1]))
