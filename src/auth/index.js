require('dotenv').config()
const jwt = require('jsonwebtoken')

const createToken = (id, email, username) => {
  const token = jwt.sign({
    id,
    email,
    username
  }, process.env.TOKEN_PHRS_KEY || 'secret', { expiresIn: '1h' })

  return token
}

module.exports = {
  createToken
}
