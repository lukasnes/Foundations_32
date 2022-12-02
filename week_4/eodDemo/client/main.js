const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const list = document.querySelector('ul')

const createList = arr => {
    list.innerHTML = 'Names List:'
    arr.forEach((name,index) => {
        let listItem = document.createElement('li')
        let nameSpan = document.createElement('span')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        let editForm = document.createElement('form')
        let editInput = document.createElement('input')

        editForm.appendChild(editInput)
        editForm.style.display = 'none'

        listItem.appendChild(editForm)
        listItem.appendChild(nameSpan)
        listItem.appendChild(editButton)
        listItem.appendChild(deleteButton)

        nameSpan.textContent = name
        deleteButton.textContent = "delete"
        deleteButton.id = index

        deleteButton.addEventListener('click', deleteName)

        editButton.textContent = "edit"
        editForm.id = index

        editButton.addEventListener('click', createEditForm)

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

const createEditForm = evt => {
    let listElement = evt.target.parentNode
    let editForm = listElement.children[0]
    let spanElement = listElement.children[1]

    editForm.style.display = 'inline'
    spanElement.style.display = 'none'

    editForm.addEventListener('submit', editName)
}

const editName = evt => {
    evt.preventDefault()
    console.log(evt.target)
    let index = evt.target.id
    let inputField = evt.target.children[0]

    let editObj = {
        index,
        name: inputField.value
    }

    axios.put('http://localhost:4000/api/name', editObj)
        .then(response => {
            let { data } = response
            createList(data)
        })
        .catch(err => console.log(err))
}

form.addEventListener('submit', submitName)

getNames()