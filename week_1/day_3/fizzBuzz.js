for(let i = 1; i <= 50; i++){
    // Create a conditional that checks if i is divisible by 3, 5, or both.
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    } else if(i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0){
        console.log("buzz")
    } else {
        console.log(i)
    }
}