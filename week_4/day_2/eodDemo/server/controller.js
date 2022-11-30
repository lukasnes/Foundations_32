let namesList = []

module.exports = {
    addNameToList: (req,res) => {
        console.log(req.body)
        let {name} = req.body
        namesList.push(name)
        res.status(200).send(namesList)
    }
}