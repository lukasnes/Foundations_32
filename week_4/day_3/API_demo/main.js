const form = document.querySelector('form')
const input = document.querySelector('#poke-input')
const pokeDiv = document.querySelector('#poke-div')


const getPokemon = evt => {
    evt.preventDefault()
    pokeDiv.innerHTML = ''
    let pokemon = input.value
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            console.log(response.data)
            let { name,sprites } = response.data
            console.log(sprites)
            let { front_default } = sprites
            console.log(front_default)

            const pokeName = document.createElement('h1')
            const pokeSprite = document.createElement('img')

            pokeName.textContent = name
            pokeSprite.src = front_default

            pokeDiv.appendChild(pokeName)
            pokeDiv.appendChild(pokeSprite)
        }) 
        .catch(err => console.log(err))
}



form.addEventListener('submit', getPokemon)