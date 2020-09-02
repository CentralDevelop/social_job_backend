const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    title:String,
    image:String ,// no sure
    salary:Number,
    rating:Number,
    description:String,
    company:String,
    url:String,
    skill:String,
    rate:Number,
    user: {
        // type:Schema.ObjectID,
        // ref:"User"
        type: String
    },
    location:{
        // country:String,
        // city:String
        type: String
    },


})

const model = mongoose.model("Post", mySchema)

module.exports = model