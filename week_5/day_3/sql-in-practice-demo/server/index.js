require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {seed} = require('./seed.js')
const {getUserInfo, updateUserInfo, getUserAppt, requestAppointment} = require('./controller.js')

app.use(express.json())
app.use(cors())

// DEV
app.post('/seed', seed)

// USER
app.get('/user', getUserInfo)
// app.put('/user', updateUserInfo)

// APPOINTMENTS
app.get('/appt', getUserAppt)
app.post('/appt', requestAppointment)

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))