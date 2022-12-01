const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const list = document.querySelector('ul')

const createList = arr => {
    list.innerHTML = 'Names List:'
    arr.forEach((name,index) => {
        let listItem = document.createElement('li')
        let nameSpan = document.createElement('span')
        let deleteButton = document.createElement('button')

        listItem.appendChild(nameSpan)
        listItem.appendChild(deleteButton)

        nameSpan.textContent = name
        deleteButton.textContent = "delete"
        deleteButton.id = index

        deleteButton.addEventListener('click', deleteName)

        list.appendChild(listItem)
    })
}

const getNames = () => {
    axios.get('http://localhost:4000/api/name')
        .then(response => {
            createList(response.data)
        })
        .catch(err => console.log(err))
}

const submitName = evt => {
    evt.preventDefault()
    axios.post('http://localhost:4000/api/name', {name: nameInput.value})
        .then(response => {
            let { data } = response
            createList(data)
        })
        .catch(err => console.log(err))
}

const deleteName = evt => {
    // console.log(evt.target)
    axios.delete(`http://localhost:4000/api/name/${evt.target.id}`)
        .then(response => {
            let { data } = response
            createList(data)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', submitName)

getNames()