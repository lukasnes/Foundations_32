const luckyNums = num => {
    if(num <= 10 && num >= 1){
        // let luckyNumberArr = []

        // while(luckyNumberArr.length < num) {
        //     let randInt = Math.floor(Math.random() * 10) + 1
        //     if(!luckyNumberArr.includes(randInt)) {
        //         luckyNumberArr.push(randInt)
        //     }
        // }

        let luckyNumberSet = new Set()

        while(luckyNumberSet.size < num){
            let randInt = Math.floor(Math.random() * 10) + 1
            luckyNumberSet.add(randInt)
        }

        return [...luckyNumberSet]
    } else {
        return "Not a valid number"
    }
}

console.log(luckyNums(6))
console.log(luckyNums(9))
console.log(luckyNums(5))
console.log(luckyNums(3))
console.log(luckyNums(15))
console.log(luckyNums(-3))