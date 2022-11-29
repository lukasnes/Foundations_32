const moviesContainer = document.querySelector('#movies-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4004/api/movies`
                    //.then((response) => {
                    //let movies = response.data
                    //return displayMovies(movies)
                    //})
const moviesCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err.response.data)

const getAllMovies = () => axios.get(baseURL).then(moviesCallback).catch(errCallback)
const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)
const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)
const updateMovie = (id, type) => axios.put(`${baseURL}/${id}`,
).then(moviesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let rating = document.querySelector('input[name="ratings"]:checked')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        rating: rating.value, 
        imageURL: imageURL.value
    }

    createMovie(bodyObj)

    title.value = ''
    rating.checked = false
    imageURL.value = ''
}

function createMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `<img alt='movie cover' src=${movie.imageURL} class="movie-cover"/>
    <p class="movie-title">${movie.title}</p>
    <div class="btns-container">
        <button onclick="updateMovie(${movie.id}, 'minus')">-</button>
        <p class="movie-rating">${movie.rating} stars</p>
        <button onclick="updateMovie(${movie.id}, 'plus')">+</button>
    </div>
    <button onclick="deleteMovie(${movie.id})">delete</button>
    `


    moviesContainer.appendChild(movieCard)
}

function displayMovies(arr) {
    moviesContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMovieCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMovies()