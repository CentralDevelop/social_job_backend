const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    _id:ObjectID,
   skill:String,
})

const model = mongoose.model("Skills", mySchema)

module.exports = model