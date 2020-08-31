const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mySchema = new Schema({
    _id:ObjectID,
   rate:Int32Array,
   post: {
       type: Schema.ObjectID,
       ref: "Post"
   },
   user: {
       type: Schema.ObjectID,
       ref: "User"
   },
})

const model = mongoose.model("Rating", mySchema)

module.exports = model