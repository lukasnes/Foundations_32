const hourWord = str => {
    // console.log(parseInt(str))
    let hourWordArr = [
        "twelve",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven"
    ]
    let hourValue = parseInt(str)
    if(hourValue >= 12){
        hourValue -= 12
    }
    return hourWordArr[hourValue]
}

const minuteWord = str => {
    // console.log(parseInt(str))
    let belowTwenties = [
        "o'clock",
        "'oh one",
        "'oh two",
        "'oh three",
        "'oh four",
        "'oh five",
        "'oh six",
        "'oh seven",
        "'oh eight",
        "'oh nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ]
    let ones = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ]
    let tens = [
        "twenty",
        "thirty",
        "fourty",
        "fifty"
    ]

    let minuteValue = parseInt(str)
    let minuteWordStr;

    if(minuteValue < 20){
        minuteWordStr = belowTwenties[minuteValue]
    } else {
        let minuteValueSplit = str.split('')
        let tensValue = parseInt(minuteValueSplit[0])
        tensValue -= 2
        let onesValue = parseInt(minuteValueSplit[1])
        minuteWordStr = tens[tensValue] + " " + ones[onesValue]
    }

    return minuteWordStr
}

const timeWords = str => {
    if(str === "00:00") {
        return "midnight"
    } else if (str === "12:00") {
        return "noon"
    }
    
    let timeArr = str.split(":")
    let hours = timeArr[0]
    let minutes = timeArr[1]

    let hourStr = hourWord(hours)
    let minuteStr = minuteWord(minutes)

    if(parseInt(hours) < 12){
        return hourStr + " " + minuteStr + " am"
    } else {
        return `${hourStr} ${minuteStr} pm`
    }
}

console.log(timeWords("00:00"))
console.log(timeWords("12:00"))
console.log(timeWords("06:46"))
console.log(timeWords("14:57"))
console.log(timeWords("20:13"))
console.log(timeWords("15:00"))
console.log(timeWords("07:06"))