const Express = require("express")
const Joi = require('joi')

const genre = require('./routes/genre')
const home = require('./routes/home')
const app = Express()
app.use(Express.json())


app.use('/api/genres', genre)
app.use('/', home)


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`listening to port ${port}`))