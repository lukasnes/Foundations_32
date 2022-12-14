document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const movie = document.createElement('li')

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);

  //or
  //document.querySelector("ul").appendChild(movie)

  inputField.value = ''
}

function deleteMovie(event) {
    //intermediate
    // message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    //core lab 
    message.textContent = `Movie deleted!`

    //revealMessage is part of the intermediate instructions
    revealMessage()

    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
        //interemdiate version
        //message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = 'Movie added back!'
        //interemdiate version
        //message.textContent = `${event.target.textContent} added back!`
    }

    //revealMessage will be part of the intermediate instructions
    revealMessage()
}


//revealMessage will be part of the intermediate instructions
function revealMessage() {
    // message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}
