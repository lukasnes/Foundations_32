const balance = str => {
    let parenCount = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === '(') {
            parenCount++
        } else if (str[i] === ')'){
            parenCount--
        }

        if(parenCount < 0) {
            return false
        }
    }

    return parenCount === 0
}

console.log(balance('(Hello I am an unbalanced string) () ('))
console.log(balance('This string is (balanced)'))

console.log(balance('This string ) is balanced, but syntactically ( wrong'))
