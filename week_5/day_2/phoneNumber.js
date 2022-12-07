const createPhone = arr => {
    let phoneStr = '(xxx) xxx-xxxx'

    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            return 'You have to enter numbers'
        }
        phoneStr = phoneStr.replace('x',arr[i])
    }
    return phoneStr
}

console.log(createPhone([5,4,2,1,6,7,'c',4,6,7]))
console.log(createPhone([4,2,1,6,8,3,6,4,3,1]))

const templatePhone = arr => {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
console.log('=======================')
console.log(templatePhone([5,4,2,1,6,7,1,4,6,7]))
console.log(templatePhone([4,2,1,6,8,3,6,4,3,1]))