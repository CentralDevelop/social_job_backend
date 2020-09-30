const { model } = require('../../storage/models/user')
const Model = require('../../storage/models/user')
const postModel = require('../../storage/models/post')
const { post } = require('./network')
const postsModel = require('../../storage/models/post')
const { resolve } = require('path')
const { rejects } = require('assert')
const { promises } = require('fs')

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
  return new Promise((resolve, reject) =>{
    Model.
  findById(id).
  populate({
    path: 'favorite',
    populate: { path: 'favorite' }
  }).
    exec((error, data) => {
      if (error){
        reject(error)
      }
      resolve(data)
    })

  })
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
