const express = require('express')
const app = express()
const path = require('path')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
    accessToken: 'f1ab85f478df41e2b615c0cc6d33a832',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

rollbar.log('hello rollbar')

app.use(express.json())

const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/students', (req, res) => {
    res.status(200).send(students)
    rollbar.info('student List was requested and sent')
})

app.post('/api/students', (req, res) => {
   let {name} = req.body

   const index = students.findIndex(student => {
       return student === name
   })

   try {
       if (index === -1 && name !== '') {
           students.push(name)
           res.status(200).send(students)
           rollbar.critical('NEW STUDENT')
       } else if (name === ''){
           res.status(400).send('You must enter a name.')
           rollbar.error('attempted empty student name')
       } else {
           res.status(400).send('That student already exists.')
           rollbar.warning('attempted duplicate student')
       }
   } catch (err) {
       console.log(err)
       rollbar.error(err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
