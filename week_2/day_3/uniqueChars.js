const unique = str => {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            // console.log(`Our letter at i is ${str[i]}`)
            // console.log(`Our letter at j is ${str[j]}`)
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

console.log(unique("Hello"))
console.log(unique("Bob"))

const uniqueSet = str => {
    let strSet = new Set(str)
    
    // if(strSet.size === str.length) {
    //     return true
    // } else {
    //     return false
    // }
    return strSet.size === str.length
}

console.log(uniqueSet("Hello"))

const oneLineUnique = str => new Set(str).size === str.length

console.log(oneLineUnique("Hello"))
