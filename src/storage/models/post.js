const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  title: String,
  image: String, // no sure
  salary: Number,
  rating: Number,
  description: String,
  company: String,
  url: String,
  skills: [{
    type: String
  }],
  rate: Number,
  user: {
    type: Schema.ObjectID,
    ref: 'User'
  },
  location: {
    country: String,
    city: String
  }

})

const postsModel = mongoose.model('Post', mySchema)

module.exports = postsModel
