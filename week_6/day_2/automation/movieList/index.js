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
  //this will remove all the whitespace from user's input to use as an id, which could then be used as a selector
  const movieId = inputField.value.replace(/\s+/g, '');
  deleteBtn.setAttribute('id', movieId);
  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);

  inputField.value = ''
}

function deleteMovie(event) {
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    revealMessage()

    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }

    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}