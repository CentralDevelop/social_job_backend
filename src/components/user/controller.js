const storage = require('./store')

const addUser = (fullname, email, username, password) => {
  if (!fullname || !email || !username || !password) {
    throw new Error('Missing data')
  }
  const user = {
    fullname,
    email,
    username,
    password
  }
  return storage.add(user)
}

const getOne = async (id) => {
  if (!id) {
    throw new Error('id needed')
  } else {
    const data = await storage.getOneUser(id)
    return data
  }
}

const getAll = () => {
  return storage.getAllUsers()
}

const updateUser = async (userUpdate) => {
  if (userUpdate) {
    const filter = {
      _id: userUpdate._id
    }
    const userUpdated = await storage.updateUser(filter, userUpdate)
    if (userUpdated) {
      return userUpdated
    } else {
      throw new Error('User not found')
    }
  } else {
    throw new Error('Fatal error')
  }
}

const deleteUserController = async (id) => {
  if(id) {
    let filter = {
      _id: id
    }
    return await storage.deleteUser(filter)

  } else {
    throw new Error('Id needed')
  }
} 
module.exports = {
  add: addUser,
  getOne,
  getAll,
  updateUser,
  deleteUserController
}
