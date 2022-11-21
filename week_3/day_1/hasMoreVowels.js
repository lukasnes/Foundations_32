const hasMoreVowels = str => {
    //Create a variable for counting vowels
    let vowelCount = 0
    let vowels = ['a','e','i','o','u']
    str = str.toLowerCase()

    for(let i = 0; i < str.length; i++){
        // console.log(str[i])
        if(vowels.includes(str[i])){
            vowelCount++
        }
    }
    // console.log(vowelCount)
    // if(vowelCount > str.length / 2) {
    //     return true
    // } else {
    //     return false
    // }
    return vowelCount > str.length / 2
}

console.log(hasMoreVowels("Hello"))
console.log(hasMoreVowels("Anaaaa"))
console.log(hasMoreVowels("supercalifragilisticexpialidocious"))