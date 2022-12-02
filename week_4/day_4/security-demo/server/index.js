const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

const {
    getMessages,
    createMessage
} = require('./controllers/messageController')

app.post(`/api/messages`, createMessage)

app.listen(4004, () => console.log(`running on 4004`))