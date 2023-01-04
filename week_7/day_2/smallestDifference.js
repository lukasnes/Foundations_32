let arr1 = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]

const smallestDiff = (arrOne,arrTwo) => {
    let smallest;

    for(let i = 0; i < arrOne.length; i++){
        for(let j = 0; j < arrTwo.length; j++){
            let difference = Math.abs(arrOne[i] - arrTwo[j])
            // if(arrOne[i] > arrTwo[j]){
            //     difference = arrOne[i] - arrTwo[j]
            // } else {
            //     difference = arrTwo[j] - arrOne[i]
            // }

            if(smallest === undefined || difference < smallest) {
                smallest = difference
            }
        }
    }

    return smallest
}

console.log(smallestDiff(arr1,arr2))