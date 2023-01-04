let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

const checkList =  (list, gift) => {
    let possiblePresents = [] //O(1)
    list.forEach(listObj => { //O(n)
        let { name: presentName, size: wishSize, clatters: wishClatters, weight: wishWeight } = listObj //O(1)
        gift.forEach(giftObj => { //O(n)
            let { size: giftSize, clatters: giftClatters, weight: giftWeight } = giftObj //O(1)

            if(giftSize === wishSize && giftClatters === wishClatters && giftWeight === wishWeight){ //O(1)
                possiblePresents.push(presentName) //O(1)
            }
        })
    })
    return possiblePresents //O(1)
}

//O(1 + n(1 + n(1 + 1 + 1)))
//O(1 + n(1 + 3n))
//O(1 + n(n))
//O(1 + n^2)
//O(n^2)

console.log(checkList(wishlist,presents))