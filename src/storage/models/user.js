const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  fullname: String,
  email: String,
  username: String,
  password: String
})

const userModel = mongoose.model('User', mySchema)

module.exports = userModel
