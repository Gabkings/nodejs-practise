const express = require("express")
const config = require("config")
const Joi = require("joi")
const auth = require('./auth')
const course = require('./courses')
const home = require('./home')
const logger = require('./logger')
const app = express()

app.use(express.json())
app.use(logger)
app.use(auth)
app.set('view engine','pug')
app.set('views','./views')

console.log(app.get("env"))
console.log("routerlication name: "+ config.name)
console.log("Mail server: "+config.mail.host)
console.log("Mail password: "+config.mail.password)
app.use('/',home)
app.use('/api/courses',course)

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening to port ${port}`))