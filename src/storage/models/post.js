const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  title: String,
<<<<<<< HEAD
  file: String, // no sure
  salary: Number,
  rating: Number,
=======
  image: String, // no sure
  salary: Int32Array,
  rating: Int32Array,
>>>>>>> a75d62bdbee8f0f595f90a9aca6915ef8d51a49b
  description: String,
  company: String,
  url: String,
  skills: [{
    type: String
  }],
<<<<<<< HEAD
  rate: Number,
  user: {
    // type: Schema.ObjectID,
    // ref: 'User'
    type: String
=======
  rate: Int32Array,
  user: {
    type: Schema.ObjectID,
    ref: 'User'
>>>>>>> a75d62bdbee8f0f595f90a9aca6915ef8d51a49b
  },
  location: {
    country: String,
    city: String
  }

})

const postsModel = mongoose.model('Post', mySchema)

module.exports = postsModel
