require('dotenv').config()
const jwt = require('jsonwebtoken')
const response = require('../../network/response')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.TOKEN_PHRS_KEY || 'secret')
    req.userData = decoded
    console.log('UserData: ', req.userData)
    next()
  } catch (error) {
    response.error(req, res, 'Auth failed', 401, error)
  }
}
