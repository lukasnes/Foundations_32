console.log('connected')
//These are all the interactable elements in our DOM. Here we have assigned a variable to every button, as well as our forms, and form inputs.
const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')
//This baseURL is the url we will use to make requests to our localhost server.
const baseURL = 'http://localhost:4000'


//!!! THIS FUNCTION IS IMPORTANT !!!
//This is the function that creates the cards we see when we press our buttons, or create a new character.
function createCharacterCard(char) {
  //This variable contains the div element that makes up each character card.
  let charCard = document.createElement('div')
  //Here we assign the value of everything within the HTML of our character card div to equal a string of multiple HTML elements.
  //We use the character object passed into the function to access the properties of the object, and use their values to display their details on our page.
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  //Once we've created the character card, we append it to our character section.
  charContainer.appendChild(charCard)
}


//This function helps us reset our character section, by removing its inner HTML
function clearCharacters() {
  charContainer.innerHTML = ``
}


//This function makes a request to the /characters endpoint to get the entire array of character objects stored in server.js line 43
const getAllChars = (evt) => {
  //We immediately run the clear characters function in order to make sure that nothing is already displayed on the page.
  clearCharacters()
  //Then we run an axios GET request to http://localhost:4000/characters If your server is running (node server.js), then it will receive this request line 43
  axios.get(baseURL + '/characters')
  //The response.data we receive here is an array of objects -- the character objects stored on our server.
    .then(response => {
      // We destructure the data off of the response object
      let { data } = response
      console.log(data) //Array of character objects
      // We run a for each loop over our array, looking at each character object
      data.forEach(charObj => {
        //And we create a character card for each character's information inside the character object, and append it to the emptied out section element.
        createCharacterCard(charObj)
      })
    }) // Our .catch will alert us if there are any problems with our request.
    .catch(err => console.log(err))
}


//This function makes a request to the /character/:name endpoint to get one object of a specific character in the character array.
const getChar = (evt) => {
  //First we clear the character display
  clearCharacters()
  console.log(evt.target) //Logs the button we clicked to fire this event
  let character = evt.target.id //The id of the character button we clicked is the character's name. We assign it to a variable.
  console.log(character) //Logs the name of the character we clicked.
  //This GET request places the name of the character as the parameter on our URL. It will be received in server.js on line 48
  axios.get(baseURL + `/character/${character}`) 
    //Our response.data here should be receiving a single character object.
    .then(response => {
      //Destructure data off the response
      let { data } = response
      console.log(data) // Logs the character object
      createCharacterCard(data) //Create a single character card for the object, and append it to the character display.
    }) // .catch to ensure the request goes through properly.
    .catch(err => console.log(err))
}


//This function makes a request to the /character endpoint to get an array of objects containing any characters stored that are above the input age.
const getCharAge = (evt) => {
  //evt.preventDefault() prevents our page from refreshing
  evt.preventDefault()
  //Clear our character display
  clearCharacters()
  console.log(ageInput.value) //This logs the value input by the user in the input field.
  let charAge = ageInput.value //We store that value
  //And send it on the url as a query. We assign the query with a key-value pair of age=charAge and send it to server.js on line 54
  axios.get(baseURL + `/character?age=${charAge}`) 
    //Our response.data here should an array of objects containing all the characters above the given age.
    .then(response => {
      let { data } = response //We destructure data off the response.
      data.forEach(charObj => { //Create a for each loop on the data array, looping over each character object
        createCharacterCard(charObj) //And pass our character object into the create character card function
      })
    }) // Our .catch is our friend. We like errors, they help us fix our code.
    .catch(err => console.log(err))
  //We also empty the input field at the end after everything has completed.
  ageInput.value = ''
}


//Our last function creates a new character object, adds it to our character array, and returns the entire character array including the new character.
//It does this by making a POST request to the /character endpoint. We can reuse this endpoint, because we are creating it with a different method.
const createChar = (evt) => {
  // evt.preventDefault() is necessary on a submit event because it keeps the browser from refreshing the page, and deleting your information before it can be processed.
  evt.preventDefault()
  clearCharacters() //Clear our character display

  let firstName = newFirstInput.value //We take the first name out the value of the input field.
  let lastName = newLastInput.value //We do the same for the last name.
  let gender = newGenderDropDown.value //The gender
  let age = newAgeInput.value //The age
  let likes = newLikesText.value.split(',') //And for the likes, we create an array, by running .split(',') in order to split the input in the textarea at the commas

  //We create a character object.
  //This object can be created in 2 ways. Either, you can write the formal notation firstName: firstName
  //Or, since the variables we are inserting are named after the keys we want to create, we can just directly insert the variable.
  //This will create a key:value pair that will consist of the actual value = to the value of the variable, and the key being the variable name. Or -- variableName:variableValue
  //An example of this abbreviated form are the 3 values we pass in -- gender, age, and likes.
  let charObject = {
    firstName: firstName,
    lastName: lastName,
    gender,
    age,
    likes 
  }
  console.log(charObject) //Yields and object with the keys -- firstName, lastName, gender, age, and likes -- and the values of the input variables.

  //We use a POST request because we are creating new information in the server.
  //POST requests can handle 2 arguments. The url for the request, and a body object. In this case, our charObject variable.
  //This sends our character object to the server on line 66
  axios.post(baseURL + '/character', charObject) 
    //Our response.data should yield a new array of character objects with our new object included.
    .then(response => {
      let { data } = response //We destructure our array off the response object.
      data.forEach(charObj => { // Loop over every character in it
        createCharacterCard(charObj) //And display the characters on the page
      })
    }) // .catch saves lives, folks.
    .catch(err => console.log(err))
  //We also finish the function by emptying our inputs.
   newAgeInput.value = ''
   newFirstInput.value = ''
   newLastInput.value = ''
   newLikesText.value = '' 
}
//All off this happens in the blink of an eye! Can you believe it?
//====================================================================
//These are our eventlisteners. They simply take an event, and one of the functions we wrote.
//Buttons listen to clicks
getAllBtn.addEventListener('click', getAllChars)
for(let i = 0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click', getChar)
}
//Forms listen to submits
//Their buttons are for user experience, you can submit a form by pressing enter on your keyboard, unless you have other parameters set.
ageForm.addEventListener('submit', getCharAge)
createForm.addEventListener('submit', createChar)