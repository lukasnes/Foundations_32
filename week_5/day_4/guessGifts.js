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
    let possiblePresents = []
    list.forEach(listObj => {
        let { name: presentName, size: wishSize, clatters: wishClatters, weight: wishWeight } = listObj
        gift.forEach(giftObj => {
            let { size: giftSize, clatters: giftClatters, weight: giftWeight } = giftObj

            if(giftSize === wishSize && giftClatters === wishClatters && giftWeight === wishWeight){
                possiblePresents.push(presentName)
            }
        })
    })
    return possiblePresents
}

console.log(checkList(wishlist,presents))