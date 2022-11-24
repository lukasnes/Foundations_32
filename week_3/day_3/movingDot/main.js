//Assigning the circle div to an HTML element
let circle = document.querySelector('#circle')

//Getting a random number within the range of our section dimensions
const getRandomCoordinate = () => {
    let randomCoordinate = Math.floor(Math.random() * 65)
    return randomCoordinate
}
//Our event function for when the circle gets moused over
const moveCircle = evt => {
    console.log(evt)
    //Assigning the top, and left offset by using the random coordinate function and dropping it into a string that contains our dimensional measurements -- view height, and view width.
    circle.style.top = `${getRandomCoordinate()}vh`
    circle.style.left = `${getRandomCoordinate()}vw`
}

//Adding an eventlistener to the circle element, and firing the move circle function on mouseover.
circle.addEventListener('mouseover', moveCircle)