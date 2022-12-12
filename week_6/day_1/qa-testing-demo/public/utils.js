function formatTitle(str) {
    let split = str.split(' ')
    let titleArr = split.map(word => {
        let firstLetter = word.charAt(0).toUpperCase()
        let remaining = word.slice(1, word.length)
        word = firstLetter + remaining
        return word
    })
    let title = titleArr.join(' ')
    return title
}

function shortenBio(bio) {
    let index = bio.indexOf('\n')
    let shortBio = bio.slice(0, index)
    return `About the Speaker: ${shortBio}..`
}

let months = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}

function formatDate(datetime) {
    let year = +datetime.slice(0, 4)
    let monthNumber = +datetime.slice(5, 7)
    let day = +datetime.slice(8, 10)
    let month = months[monthNumber]
    let dateString = `${month} ${day}, ${year}`
    return dateString
}

function formatTime(datetime) {
    let hour = +datetime.slice(-8, -6)
    let minute = +datetime.slice(-5, -3)
    let timeOfDay = 'AM'
    if (hour > 12) {
        hour -= 12
        timeOfDay = 'PM'
    }
    if (minute === 0) {
        minute = '00'
    }
    return `${hour}:${minute} ${timeOfDay}`
}

function convertLength(length) {
    if (length < 60) {
        return [0, length]
    } else {
        let hours = Math.floor(length / 60)
        let minutes = length % 60
        return [hours, minutes]
    }
}

function formatLength(arr) {
    if (arr[0] === 0) {
        return `Length: ${arr[1]} minutes`
    } else {
        return `Length: ${arr[0]} hour${arr[0] === 1 ? '' : 's'} and ${arr[1]} minutes`
    }
}

function formatLocation(floor, room) {
    return `Floor: ${floor} | Room: ${room}`
}


module.exports = {
    formatTitle, 
    shortenBio, 
    formatDate, 
    formatTime, 
    convertLength, 
    formatLength, 
    formatLocation
}