const unique = str => {
    for(let i = 0; i < str.length; i++) { //O(n)
        for(let j = i + 1; j < str.length; j++) { //O(n)
            // console.log(`Our letter at i is ${str[i]}`)
            // console.log(`Our letter at j is ${str[j]}`)
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

// O(n^2)

console.log(unique("Hello"))
console.log(unique("Bob"))

const uniqueSet = str => {
    let strSet = new Set(str) //O(n)
    
    // if(strSet.size === str.length) {
    //     return true
    // } else {
    //     return false
    // }
    return strSet.size === str.length //O(1)
}
//O(n + 1)
//O(n)
console.log(uniqueSet("Hello"))

const oneLineUnique = str => new Set(str).size === str.length //O(n)

console.log(oneLineUnique("Hello"))
