const isPal = (pal) =>{
    let j = pal.length - 1
    for(let i = 0; i <= j; i++){
        if(pal[j] === pal[i]){
            j--
        } else {
            return false
        }
    }
    return true
}
 
 console.log(isPal('racecar'))
 console.log(isPal('notpalindrome'))

const isPalindrome = str => {
    // let splitString = str.split('')
    // let reverseString = splitString.reverse()
    // let joinedString = reverseString.join('')
    // return joinedString === str
    return str === str.split('').reverse().join('')
}

const oneLinePalindrome = str => str === str.split('').reverse().join('')

console.log(isPalindrome('notpalindrome'))
console.log(isPalindrome('racecar'))