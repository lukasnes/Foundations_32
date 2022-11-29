const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())


const { getAllMovies,createMovie,updateMovie,deleteMovie } = require('./controller')

app.get('/api/movies', getAllMovies)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)
app.delete('/api/movies/:id', deleteMovie)


app.listen(4004, console.log("Server running on 4004"))