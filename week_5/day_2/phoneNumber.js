const createPhone = (arr) => {
    let phoneStr = '(xxx) xxx-xxxx' //O(1)

    for(let i = 0; i < arr.length; i++){ //O(1)
        if(isNaN(arr[i])){ //O(1)
            return 'You have to enter numbers' //O(1)
        }
        phoneStr = phoneStr.replace('x',arr[i]) //O(1)
    }
    return phoneStr //O(1)
}
//O(1)

console.log(createPhone([5,4,2,1,6,7,'c',4,6,7]))
console.log(createPhone([4,2,1,6,8,3,6,4,3,1]))

const templatePhone = arr => {
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`
}
console.log('=======================')
console.log(templatePhone([5,4,2,1,6,7,1,4,6,7]))
console.log(templatePhone([4,2,1,6,8,3,6,4,3,1]))

const replaceX = str => {
    return str = str.replace("x","Potato")
}

console.log(replaceX("lfkasfghjalskgjaskgj;asklgja;slgjalsgja;lsjgal;sjgl;asjgl;ajsgl;asl;ga;jlx"))
console.log(replaceX("x"))