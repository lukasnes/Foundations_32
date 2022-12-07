const profileForm = document.querySelector('#profile-form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const phoneInput = document.querySelector('#phone-number')
const emailInput = document.querySelector('#email')
const addressInput = document.querySelector('#address')
const cityInput = document.querySelector('#city')
const stateInput = document.querySelector('#state')
const zipCodeInput = document.querySelector('#zip-code')

// const inputs = [firstNameInput, lastNameInput, phoneInput, emailInput, addressInput, cityInput, stateInput, zipCodeInput]

// inputs.forEach(input => {
//     input.addEventListener('change', (e) => {
//         input.value = e.target.value
//         console.log(input.value)
//     })
// })

function getProfileInfo() {
    axios.get('http://localhost:9876/user') 
        .then(res => {
            const user = res.data[0]

            const {
                first_name: firstName, 
                last_name: lastName, 
                phone_number: phoneNumber, 
                email, 
                address, 
                city, 
                state, 
                zip_code: zipCode
            } = user

            firstNameInput.value = firstName
            lastNameInput.value = lastName
            phoneInput.value = phoneNumber
            emailInput.value = email
            addressInput.value = address
            cityInput.value = city
            stateInput.value = state
            zipCodeInput.value = zipCode
        })
}

function updateInfo() {
    let body = {
        firstName: firstNameInput.value, 
        lastName: lastNameInput.value, 
        phoneNumber: phoneInput.value, 
        email: emailInput.value, 
        address: addressInput.value,
        city: cityInput.value, 
        state: stateInput.value, 
        zipCode: zipCodeInput.value
    }

    axios.put('http://localhost:9876/user', body)
        .then(res => console.log(1, res))
        .catch(err => console.log(err))
}

profileForm.addEventListener('submit', (e) => {
    e.preventDefault()
    updateInfo()
})


getProfileInfo()