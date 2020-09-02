const Model = require('../../storage/models/post')
// const list = []

const get = () => {
  return Model.find()
}

const add = (post) => {
  // list.push(post)
  // console.log(list)
  const newPost = new Model(post)
  newPost.save()
}

module.exports = {
  add,
  get
}
