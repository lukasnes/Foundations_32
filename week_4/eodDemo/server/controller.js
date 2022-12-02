let namesList = ["Lukas","Cameron"]

module.exports = {
    getNameList: (req,res) => {
        res.status(200).send(namesList)
    },
    addNameToList: (req,res) => {
        console.log(req.body)
        let {name} = req.body
        namesList.push(name)
        res.status(200).send(namesList)
    },
    deleteName: (req,res) => {
        let { index } = req.params
        namesList.splice(index,1)
        res.status(200).send(namesList)
    },
    editName: (req,res) => {
        console.log(req.body)
        let {index, name} = req.body
        namesList.splice(index,1,name)
        res.status(200).send(namesList)
    }
}