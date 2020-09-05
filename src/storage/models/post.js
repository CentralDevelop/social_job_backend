const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
  title: String,
  image: String, 
  salary: Number,
  rating: {
    type:[String],
    default: undefined
  },
  description: String,
  company: String,
  url: String,
  skill: {
    type: [String],
    default: undefined,
  },
  user: {
    type: Schema.ObjectID,
    ref: 'User'
  },
  country:String,
  city:String ,
})

const postsModel = mongoose.model('Post', mySchema)

module.exports = postsModel
