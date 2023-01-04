const stoneGame = stones => {
    return (stones % 7 < 2) ? false : true
}

console.log(stoneGame(1))
console.log(stoneGame(2))
console.log(stoneGame(3))
console.log(stoneGame(4))
console.log(stoneGame(5))
console.log(stoneGame(6))
console.log(stoneGame(7))
console.log(stoneGame(8))
console.log(stoneGame(9))
console.log(stoneGame(10))

console.log("==========================================")

const takeAway = stones => {
    if(stones < 2) {
        return false
    }
    return (takeAway(stones - 2) === false || takeAway(stones - 3) === false || takeAway(stones - 5) === false)
}

console.log(takeAway(1))
console.log(takeAway(2))
console.log(takeAway(3))
console.log(takeAway(4))
console.log(takeAway(5))
console.log(takeAway(6))
console.log(takeAway(7))
console.log(takeAway(8))
console.log(takeAway(9))
console.log(takeAway(10))