require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./api/routes')
const db = require("./storage/index")



db("")

//  Server Config
app.set('port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  Routes
router(app)

//statics
app.use('/app', express.static('src/public'))

//  Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}, http://localhost:${app.get('port')}`)
})
