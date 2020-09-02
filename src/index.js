require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./api/routes')
const db = require("./storage/index")

db("mongodb+srv://omargnzlz645:resina96@cluster0.biyni.mongodb.net/social_job?retryWrites=true&w=majority")

//  Server Config
app.set('port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//  Routes
router(app)

//  Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}, http://localhost:${app.get('port')}`)
})
