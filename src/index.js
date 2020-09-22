require('dotenv').config()
const express = require('express')
const app = express()
const router = require('./api/routes')
const db = require('./storage/index')
const swaggerUI = require('swagger-ui-express')
const swaggerDoc = require('../swagger.json')
const cors = require('cors')
const helmet = require('helmet')
const corsOptions = {
  origin: 'https://localhost:5500',
}


db('')

//  Server Config
app.set('port', process.env.PORT || 4000)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(helmet())


//  Routes
router(app)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))

//  Not found route
app.use((req, res, next) => {
  res.status(404);

  if (req.accepts('json')) {
    res.send({error: '404 Not found'})
  }else {
    res.type('txt').send('404 Not found')
  }
  
})

// statics
app.use('/app', express.static('src/public'))

//  Starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}, http://localhost:${app.get('port')}`)
})
