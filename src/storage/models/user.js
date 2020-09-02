const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  fullname: String,
  email: {
    type: String, 
    match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  username: String,
  password: String
})

const userModel = mongoose.model('User', mySchema)

module.exports = userModel
