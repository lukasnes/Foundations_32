const database = require('./db.json')
let newID = 11

module.exports = {
    getAllMovies: (req,res) => {
        res.status(200).send(database)
    },
    createMovie: (req,res) => {
        // console.log(req.params)
        // console.log(req.query)
        // console.log(req.body)
        let { title, rating, imageURL } = req.body
        let newMovie = {
            id: newID,
            title,
            rating,
            imageURL
        }
        database.push(newMovie)

        res.status(200).send(database)

        newID++
    },
    updateMovie: (req,res) => {
        console.log(req.params)
        console.log(req.query)
        console.log(req.body)
        let { id } = req.params
        let { type } = req.body

        let index = database.findIndex(movieObj => movieObj.id === +id)
        let movieToUpdate = database[index]
        if(type === 'minus' &&  movieToUpdate.rating > 1){
            movieToUpdate.rating--
        } else if (type === 'plus' && movieToUpdate.rating < 5){
            movieToUpdate.rating++
        }
        res.status(200).send(database)
    },
    deleteMovie: (req,res) => {
        console.log(req.params)
        let { id } = req.params
        let index = database.findIndex(movieObj => movieObj.id === +id)
        database.splice(index,1)
        res.status(200).send(database)
    }
}