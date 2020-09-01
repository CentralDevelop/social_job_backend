const Model = require('../../storage/models/user')

const addUser = (user) => {
  const myUser = new Model(user)
  return myUser.save()
}

const getOneUser = async (id) => {
  const data = await Model.findById(id).exec()

  if (data) {
    return data
  } else {
    throw new Error('User not found')
  }
}

module.exports = {
  add: addUser,
  getOneUser
}
