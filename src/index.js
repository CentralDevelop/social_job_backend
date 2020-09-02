require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./api/routes')
<<<<<<< HEAD
const db = require("./storage/index")

db("mongodb+srv://omargnzlz645:resina96@cluster0.biyni.mongodb.net/social_job?retryWrites=true&w=majority")
=======
const db = require('./storage/index')

//  Initializing DB conn
db();
>>>>>>> a75d62bdbee8f0f595f90a9aca6915ef8d51a49b

//  Server Config
app.set('port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  Routes
router(app)

//statics
app.use('/app', express.static('public'))

//  Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}, http://localhost:${app.get('port')}`)
})
