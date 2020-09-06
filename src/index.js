require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const router = require('./api/routes')
const db = require('./storage/index')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('../swagger.json')
db("")

//  Server Config
app.set('port', process.env.PORT || 4000)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//  Routes
router(app)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

// statics
app.use('/app', express.static('src/public'))

//  Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}, http://localhost:${app.get('port')}`)
})
