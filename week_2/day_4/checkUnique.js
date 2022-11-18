//This function is setup to take either type of iterable -- arrays, or strings.
const uniq = iterable => {
    //First we find out which kind of iterable we received from the input.
    let iterType = typeof iterable

    //Then we spill the contents of our iterable into an array.
    //The spread operator will either recreate a copy of the input array, or automatically perform string.split('') on a string, and create an array out of it.
    let arr = [...iterable]
    //We also create an empty object that we will use to check if an item is repeated or not.
    let checkObj = {}

    //Next we run a for loop on our array copy
    for(let i = 0; i < arr.length; i++){
        //In which we check if the current item the loop is looking at already exists as a key on our object --
        //If it already exists, the loop continues
        if(!checkObj[arr[i]]) {
            //If it doesn't exist yet, we create it and set it equal to 1.
            //This makes it so that next time we see this character, word, or number, we will not create another key for it.
            checkObj[arr[i]] = 1
            continue
        } 
    }
    // console.log(checkObj)

    //Now we create a new empty array
    let newIterable = []
    //So that we can loop over the keys in our object
    for(let key in checkObj){
        //And push them all into that empty array
        newIterable.push(key)
    }

    //Finally, we check if the item we received was an array or a string
    if(iterType === 'object'){
        //If it was an array, we return it as an array
        return newIterable
    } else if (iterType === 'string') {
        //If it was a string, we return it as a string
        return newIterable.join('')
    }
}

console.log(uniq(["Lukas","Cameron","Kira","Kate","Steven","Steven"]))
console.log(uniq("The big black bug bit the big black bear and the big black bear bled blood."))