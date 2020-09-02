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

const getAllUsers = () => {
  return Model.find({})
}

const updateUser = async (filter, update) => {
  return await Model.findOneAndUpdate(filter, update, {
    returnOriginal: false
  })
}

const deleteUser = async (id) => {
  try {
    const data = await Model.findByIdAndRemove(id)
    if (!data) {
      throw new Error('User not found')
    }
  } catch (error) {
    throw error
  }
}

module.exports = {
  add: addUser,
  getOneUser,
  getAllUsers,
  updateUser,
  deleteUser
}
