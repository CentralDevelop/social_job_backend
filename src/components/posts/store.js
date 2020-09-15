const Model = require('../../storage/models/post')
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

module.exports = {
  add,
  get,
  update,
  remove
}
