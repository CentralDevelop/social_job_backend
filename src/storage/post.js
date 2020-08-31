const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    _id:ObjectID,
    title:String,
    image:String ,// no sure
    salary:Int32Array,
    rating:Int32Array,
    description:String,
    company:String,
    url:String,
    user: {
        type:Schema.ObjectID,
        ref:"User"
    },
    location:{
        type:Schema.objectID,
        ref:"Location"
    },
    skill: {
        type:Schema.objectID,
        ref:"Skill"
    }

})

const model = mongoose.model("Post", mySchema)

module.exports = model