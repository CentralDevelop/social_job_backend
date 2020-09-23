const { model } = require('../../storage/models/post')
const Model = require('../../storage/models/post')
const userModel = require('../../storage/models/user')
const { favoritePost } = require('./controller')

// const list = []

const get = async (fCountry, fCity, fSkill) => {
  let filter = {}

  if (fCountry !== null) {
    filter = {
      country: fCountry
    }
  } else if (fCity !== null) {
    filter = {
      city: fCity
    }
  } else if (fSkill !== null) {
    filter = {
      skill: fSkill
    }
  }

  const posts = await Model.find(filter)
  return posts
}

const add = (post) => {
  // list.push(post)
  // console.log(list)
  const newPost = new Model(post)
  newPost.save()
}

const update = async (id, post) => {
  let retrievedPost = await Model.findOne({
    _id: id
  })

  let entrie = Object.entries(retrievedPost)
  entrie = Object.entries(post)

  retrievedPost = Object.fromEntries(entrie)

  console.log(retrievedPost)
  const newdPost = await Model.findByIdAndUpdate(id, retrievedPost)
  return newdPost
}

const remove = (id) => {
  return Model.deleteOne({
    _id: id
  })
}

const addFavorite = async (id, idUser) => {
  const data = await userModel.findById(idUser)
  data.favorite.push(id)
  data.save()
  userModel.update()
  console.log('[Storage ready]')
  console.log('[*************************]')
  console.log(data)
  console.log('[*************************]')
}

module.exports = {
  add,
  get,
  update,
  remove,
  addFavorite
}
