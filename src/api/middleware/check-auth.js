require('dotenv').config()
const jwt = require('jsonwebtoken')
const response = require('../../network/response')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)
        const decoded = jwt.verify(token, process.env.TOKEN_PHRS_KEY)
        req.userData = decoded
        next()
    } catch (error) {
        response.error(req, res, 'Auth failed', 401, error)
    }
}