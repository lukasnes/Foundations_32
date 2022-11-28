// const decoder = (str) => {
//     let num = +str[0]
//     let arr = str.slice(1).split('')

//     for(let i = 0; i < arr.length; i++){
//         let currentCharCode = arr[i].charCodeAt()
//         currentCharCode += num

//         if(currentCharCode > 122){
//             let overflow = currentCharCode - 123
//             currentCharCode = 97 + overflow
//         }

//         arr[i] = String.fromCharCode(currentCharCode)
//     }

//     return arr.join('')
// }



// console.log(decoder('2fcjjm'))
// console.log(decoder('5abcde'))
// console.log(decoder('3xyzabc'))

// a == 97
// z == 122

const decoder = (str) => {
    let alphabet = {
        a:1,
        b:2,
        c:3,
        d:4,
        e:5,
        f:6,
        g:7,
        h:8,
        i:9,
        j:10,
        k:11,
        l:12,
        m:13,
        n:14,
        o:15,
        p:16,
        q:17,
        r:18,
        s:19,
        t:20,
        u:21,
        v:22,
        w:23,
        x:24,
        y:25,
        z:26
    }
    let alphaValues = {
        1:"a",
        2:"b",
        3:"c",
        4:"d",
        5:"e",
        6:"f",
        7:"g",
        8:"h",
        9:"i",
        10:"j",
        11:"k",
        12:"l",
        13:"m",
        14:"n",
        15:"o",
        16:"p",
        17:"q",
        18:"r",
        19:"s",
        20:"t",
        21:"u",
        22:"v",
        23:"w",
        24:"x",
        25:"y",
        26:"z"
    }
    
    let num = +str[0]
    let arr = str.slice(1).split('')

    for(let i = 0; i < arr.length; i++){
        let currentLetter = arr[i]
        let alphaValue = alphabet[currentLetter]
        alphaValue += num
        console.log(alphaValue)
        if(alphaValue > 26){
            alphaValue -= 26
        }
        let newLetter = alphaValues[alphaValue]
        arr[i] = newLetter
        // for(let letter in alphabet){
        //     if(alphabet[letter] === alphaValue){
        //         arr[i] = letter
        //     }
        // }
    }

    return arr.join('')
}

console.log(decoder('2fcjjm'))
console.log(decoder('5abcde'))
console.log(decoder('3xyzabc'))