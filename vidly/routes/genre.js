const express = require('express')

const router = express.Router()


const movies = []
//function to validate user inputs
function validate_input(movie){
	//validate the required course
	const schema = {
		name : Joi.string().min(3).required()
	}
	return Joi.validate(movie, schema)
}



router.post('/', (req,res) => {
	const {error} = validate_input(req.body)
	//return the errors to client
	if(error) return res.status(400).send(validate.error.details[0].message)
	const movie = {
		id: movies.length + 1,
		name: req.body.name
	}
	movies.push(movie)
	res.send(movie)
})

router.get('/', (req,res) => {
	if(movies.length < 1) return res.send("No available movies for now")
	res.send(movies)
})

router.get('/:id', (req,res) => {
	const getOne = movies.find(m => m.id === parseInt(req.params.id))
	if(!getOne) return res.status(404).send(`the movie searching for is not available`)
	res.send(getOne)
})

router.put('/:id', (req,res) => {
	//get the required course to update if
	const getOne = movies.find(c => c.id === parseInt(req.params.id))
	if(!getOne) return res.status(404).send('The course with the given id was not found')
	//validate the required course
    const {error} = validate_input(req.body)
	//return the errors to client
	if(error) return res.status(400).send(validate.error.details[0].message)
	//update the course

	getOne.name = req.body.name

	res.status(200).send(getOne)

})


module.exports = router;