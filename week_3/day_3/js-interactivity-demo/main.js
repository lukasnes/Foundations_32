//We pull in all our relevant HTML elements
const themeButtons = document.querySelectorAll('.theme-buttons')
const minusButton = document.querySelector('#minus-btn')
const plusButton = document.querySelector('#plus-btn')
const resetButton = document.querySelector('#reset-btn')

let counter = document.querySelector('#counter')

// console.log(themeButtons)

//We create an event function that change the theme of the page based on the text content contained within the pressed button.
//This function reassigns the className attribute to whatever the text content of the button we pressed was.
const changeTheme = (evt) => {
    // console.log(evt.target)
    let classToChangeTo = evt.target.textContent
    console.log(classToChangeTo)
    let allButtons = document.querySelectorAll('button')
    //When accessing a singular element, use the simple querySelector, not querySelectorAll.
    let body = document.querySelector('body')
    let main = document.querySelector('main')

    body.className = classToChangeTo
    main.className = classToChangeTo
    for(let i = 0; i < allButtons.length; i++) {
        allButtons[i].className = classToChangeTo
    }
}
//A function to change the number on the screen.
//It takes the text content off the buttons in on the counter
//And changes the value based on the button pressed.
const changeCounter = (evt) => {
    let typeOfChange = evt.target.textContent
    let number = counter.textContent

    if(typeOfChange === '-'){
        number--
    } else if (typeOfChange === '+'){
        number++
    } else {
        number = 0
    }
    counter.textContent = number

}


//Our button eventlisteners
for(let i = 0; i < themeButtons.length; i++){
    // console.log(themeButtons[i])
    themeButtons[i].addEventListener('click', changeTheme)
}
minusButton.addEventListener('click', changeCounter)
plusButton.addEventListener('click', changeCounter)
resetButton.addEventListener('click', changeCounter)