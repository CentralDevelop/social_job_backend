const { model } = require('../../storage/models/user')
const Model = require('../../storage/models/user')
const postModel = require('../../storage/models/post')
const { post } = require('./network')
const postsModel = require('../../storage/models/post')
const { resolve } = require('path')
const { rejects } = require('assert')

const addUser = async (user) => {
  const myUser = new Model(user)
  try {
    return await myUser.save()
  } catch (error) {
    throw new Error(error)
  }
}

const getOneByFilter = async (filter) => {
  const data = await Model.find(filter)
  return data
}

const getOneUser = async (id) => {
  const data = await Model.findById(id).exec()

  if (data) {
    return data
  } else {
    throw new Error('User not found')
  }
}

const getAllUsers = () => {
  return Model.find({})
}

const updateUser = async (filter, update) => {
  return await Model.findOneAndUpdate(filter, update, {
    returnOriginal: false
  })
}

const deleteUser = async (id) => {
  const data = await Model.findByIdAndRemove(id)
  if (!data) {
    throw new Error('User not found')
  }
}

const getFavPost = async (id) => {
  const data = await Model.findById(id)
  const posts = await data.favorite
  console.log(posts)

/*
Model.findOne({ _id: id })
    .populate({ 
      path: "favorite", // 1st level subdoc (get comments)
      populate: { // 2nd level subdoc (get users in comments)
        path: "user",
        select: 'avatar name _id'// space separated (selected fields only)
      }
    })
    .exec((err, res) => { 
        // etc
     });
*/


  //Model.find({}, function(err, usuarios){
    //postsModel.populate(usuarios, {path: "favorite"}, function(err, usuarios){
      //res.status(200).send(usuarios)
    //})
  //})
/*
  return new Promise((resolve, rejects) => {
    Model.find({_id: id}).
    populate({path: 'favorite', options: {
      select: {
        position: 1,
        image: 1,
        salary: 1,
        rating: 1,
        description: 1,
        company: 1,
        url: 1,
        skill: 1,
        user: 1,
        country: 1,
        city: 1
      }
    }}).
    exec((error, data) =>{
      if(error){
        rejects(error)
      }
      resolve(data)
    })
  })
*/
  //const final = await posts.find(elemento => elemento.id)
  //const final = await posts.forEach(element => console.log(element))
  //const final = posts.filter(posts => posts.id.length > 1)
  //console.log(posts)

  
    //for(let value of posts){
      //console.log(value)
      //const pintarPost = await postsModel.find(value)
      //continue
    //}

  //return pintarPost
  
}

module.exports = {
  add: addUser,
  getOneUser,
  getAllUsers,
  updateUser,
  deleteUser,
  getOneByFilter,
  getFavPost
}
