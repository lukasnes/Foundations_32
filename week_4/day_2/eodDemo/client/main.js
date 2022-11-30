const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')


const submitName = evt => {
    evt.preventDefault()
    axios.post('http://localhost:4000/api/name', {name: nameInput.value})
        .then(response => {
            let { data } = response
            data.forEach((name,index) => {
                let listItem = document.createElement('li')
                let nameSpan = document.createElement('span')
                let deleteButton = document.createElement('button')

                listItem.appendChild(nameSpan)
                listItem.appendChild(deleteButton)

                nameSpan.textContent = name
                deleteButton.textContent = "delete"
                deleteButton.id = index

                document.querySelector('ul').appendChild(listItem)
            })
        })
        .catch(err => console.log(err))
}


form.addEventListener('submit', submitName)