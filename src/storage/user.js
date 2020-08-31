const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    _id:ObjectID,
    fullname:String,
    email:String,
    username:String,
    password:String,
})

const model = mongoose.model("User", mySchema)

module.exports = model