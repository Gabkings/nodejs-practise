const express = require('express')
const Joi = require("joi")
const router = express.Router()

const courses = []

course_id = courses.id 
course_name = courses.name

router.get('/',(req,res) => {
	if(courses.length < 1){
		return res.send("No courses available")
	}
	res.send(courses)
})
router.get('/:id',(req,res) => {
	const getOne = courses.find(c => c.id === parseInt(req.params.id))
	if(!getOne) return res.status(404).send('The course with the given id was not found')  
	res.send(getOne)
})

router.post('/',(req,res) => {
	//validate the required course
    const {error} = validate_course(req.body)
	//return the errors to client
	if(error) return res.status(400).send(validate.error.details[0].message)

	const course = {
		id: courses.length + 1,
		name: req.body.name
	}
	courses.push(course)
	res.status(200).send(course)
})

router.put('/:id', (req,res) => {
	//get the required course to update if
	const getOne = courses.find(c => c.id === parseInt(req.params.id))
	if(!getOne) return res.status(404).send('The course with the given id was not found')
	//validate the required course
    const {error} = validate_course(req.body)
	//return the errors to client
	if(error) return res.status(400).send(validate.error.details[0].message)
	//update the course

	getOne.name = req.body.name

	res.status(200).send(getOne)

})

router.delete('/:id', (req,res) => {
	//get the required course to update if
	const getOne = courses.find(c => c.id === parseInt(req.params.id))
	if(!getOne) return res.status(404).send('The course with the given id was not found')
	//update the course
	const index = courses.indexOf(getOne)
	courses.splice(index, 1)

	res.status(200).send(getOne)

})

function validate_course(course){
	//validate the required course
	const schema = {
		name : Joi.string().min(3).required()
	}
	return Joi.validate(course, schema)
}

module.exports = router;