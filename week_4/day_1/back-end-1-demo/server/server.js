const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

let inventory = ['hammer','mop','toothbrush','plates','cups','pillows','shampoo','lightbulbs','forks','spoons']

app.get('/api/inventory', (req,res) => {
    console.log(req)
    console.log(req.body)
    console.log(req.query)
    if(req.query.item) {
        let { item } = req.query
        let filteredInventory = inventory.filter(supply => {
            return supply.includes(item.toLowerCase())
        })
        res.status(200).send(filteredInventory)
    } else {
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req,res) => {
    console.log(req.params)
    let { index } = req.params
    res.status(200).send(inventory[+index])
})


app.listen(5050, console.log('Server running on 5050'))