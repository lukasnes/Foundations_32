const tshirtSorter = str => {
    //Separate out the letters
    let arr = str.split('')
    //Create a way to store each t-shirt size
    let small = ''
    let medium = ''
    let large = ''

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 's'){
            small += arr[i]
        } else if (arr[i] === 'm') {
            medium += arr[i]
        } else if (arr[i] === 'l') {
            large += arr[i]
        }
    }

    return small + medium + large
}

console.log(tshirtSorter('lsmmssmllslmslmslmslmslsmlsml'))
console.log(tshirtSorter('lms'))
console.log(tshirtSorter('lmlsmsmsmlllmssm'))

const objectSorter = str => {
    let sizes = {
        'x': 1,
        'b': 2,
        'a': 3,
        's': 4,
        'l': 5
    }

    let arr = str.split('')
    arr.sort((a,b) => sizes[a] - sizes[b])
    return arr.join('')
}
console.log('===========================')
// console.log(objectSorter('lsmmssmllslmslmslmslmslsmlsml'))
// console.log(objectSorter('lms'))
console.log(objectSorter('xxxasassssaaaabbbbbblllll'))

// console.log('mlsmlsmlsmls'.split('').sort().join(''))

// let arr = [5,3,4,10,20,12,11,2,1,7,8]

// console.log(arr.sort((a,b) => a - b))


const tshirtSorterCJ = str => {
    let arr = str.split('')
    let newSizes = []
    for (i=0; i<arr.length; i++) {
        if (arr[i] === 'm') {
            for(let i = 0; i < newSizes.length; i++){
                if(newSizes[i] === 'l'){
                    newSizes.splice(i-1,0,'m')
                    break
                } else if (i === newSizes.length - 1){
                    newSizes.push('m')
                    break
                }
            }
        } else if (arr[i] === 'l') {
            newSizes.push(arr[i])
        } else if (arr[i] === 's') {
            newSizes.unshift(arr[i])
        }
    }
    return newSizes.join('')
} 

console.log(tshirtSorterCJ('smlsmlsssml'))
