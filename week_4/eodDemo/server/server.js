const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {getNameList,addNameToList,editName,deleteName} = require('./controller')

app.get('/api/name', getNameList)
app.post('/api/name', addNameToList)
app.put('/api/name', editName)
app.delete('/api/name/:index', deleteName)


app.listen(4000, console.log("Server running on 4000"))