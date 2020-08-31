const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    _id:ObjectID,
   country:String,
   city:String
})

const model = mongoose.model("Location", mySchema)

module.exports = model