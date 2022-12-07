const form = document.querySelector('form')
const datePicker = document.querySelector('#date')
const timePicker = document.querySelector('#time')
const servicePicker = document.querySelector('#service')
let apptList = document.querySelector('#appt-list')

let date = new Date()
datePicker.min = date.toLocaleDateString('en-ca')
datePicker.max = new Date(date.getTime() + (90 * 24 * 60 * 60 * 1000)).toLocaleDateString('en-US')

function resetFormValues() {
    timePicker.value = '07:00:00'
    datePicker.value =  date.toLocaleDateString('en-ca')
    servicePicker.value = 'maintenance'
}

const possibleTimes = [
    {
        display: '7:00 AM', 
        server: '07:00:00'
    }, 
    {
        display: '7:30 AM', 
        server: '07:30:00'
    }, 
    {
        display: '8:00 AM', 
        server: '08:00:00'
    }, 
    {
        display: '8:30 AM', 
        server: '08:30:00'
    }, 
    {
        display: '9:00 AM', 
        server: '09:00:00'
    }, 
    {
        display: '9:30 AM', 
        server: '09:30:00'
    }, 
    {
        display: '10:00 AM', 
        server: '10:00:00'
    }, 
    {
        display: '10:30 AM', 
        server: '10:30:00'
    }, 
    {
        display: '11:00 AM', 
        server: '11:00:00'
    }, 
    {
        display: '11:30 AM', 
        server: '11:30:00'
    }, 
    {
        display: '12:00 PM', 
        server: '12:00:00'
    }, 
    {
        display: '12:30 PM', 
        server: '12:30:00'
    }, 
    {
        display: '1:00 PM', 
        server: '13:00:00'
    }, 
    {
        display: '1:30 PM', 
        server: '13:30:00'
    }, 
    {
        display: '2:00 PM', 
        server: '14:00:00'
    }, 
    {
        display: '2:30 PM', 
        server: '14:30:00'
    }, 
    {
        display: '3:00 PM', 
        server: '15:00:00'
    }
]

for (let i = 0; i < possibleTimes.length; i++) {
    let obj = possibleTimes[i]
    const newOption = document.createElement('option')
    newOption.setAttribute('value', obj.server)
    newOption.textContent = obj.display
    timePicker.appendChild(newOption)
}

function createDisplayDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const reqDate = new Date(date)
    const reqDateDisplay = reqDate.toLocaleDateString('en-US', options)
    const reqTime = reqDate.toLocaleTimeString('en-US')
    const timeDisplay = reqTime.slice(0, -6)
    const timeOfDay = reqTime.slice(-2)
    return `${reqDateDisplay} ${timeDisplay} ${timeOfDay}`
}

function getClientAppointments() {
    axios.get('http://localhost:9876/appt')
        .then(res => {
            res.data.forEach(appt => {
                const dateDisplayText = createDisplayDate(appt.date)

                const apptElem = 
                `<div class="appt-card">
                    <h2>${dateDisplayText}</h2>
                    <h3>${appt['service_type']}</h3>
                    <p>Approved: ${appt.approved ? 'yes' : 'no'} | Completed: ${appt.completed ? 'yes' : 'no'}</p>
                    <p>${appt.notes}</p>
                </div>`

                apptList.innerHTML += apptElem                
            })
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let dateTime = `${datePicker.value} ${timePicker.value}:00`
    let dateTimeObj = new Date(dateTime)

    axios.post('http://localhost:9876/appt', {date: dateTimeObj, service: servicePicker.value})
        .then(() => {
            resetFormValues()
            location.reload()
        })
        .catch(err => console.log('front end error', err))
})

resetFormValues()
getClientAppointments()