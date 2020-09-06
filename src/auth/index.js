require('dotenv').config()
const jwt = require('jsonwebtoken')


const createToken = (email, username) => {
    const token = jwt.sign({
        email,
        username
    }, process.env.TOKEN_PHRS_KEY || "secret")

    return token
}

module.exports = {
    createToken
}