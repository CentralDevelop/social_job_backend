const storage = require('./store')
const bcrypt = require('bcrypt')
const auth = require('../../auth/index')
const store = require('../posts/store')

const addUser = async (fullname, email, username, password) => {
  if (!fullname || !email || !username || !password) {
    throw new Error('Missing data')
  }
  const emailExists = await storage.getOneByFilter({ email })

  if (emailExists.length >= 1) {
    throw new Error('Email used')
  } else {
    const hashedPassword = await new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, async (err, hashed) => {
        if (err) {
          reject(err)
        } else {
          resolve(hashed)
        }
      })
    })

    const favorites = []

    const user = {
      fullname,
      email,
      username,
      password: hashedPassword,
      favorites
    }

    return storage.add(user)
  }
}

const loginController = async (email, password) => {
  const user = await storage.getOneByFilter({ email })

  if (user.length < 1) {
    throw new Error('Login failed')
  }
  const isCorrect = bcrypt.compareSync(password, user[0].password)
  if (isCorrect === true) {
    const token = auth.createToken(user[0].email, user[0].username)
    return token
  }
}

const getOne = async (id) => {
  if (!id) {
    throw new Error('id needed')
  } else {
    console.log(id)
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
  if (id) {
    const filter = {
      _id: id
    }
    return await storage.deleteUser(filter)
  } else {
    throw new Error('Id needed')
  }
}

const getAllFavorites = async (id) => {
  if (!id) {
    throw new Error('id needed')
  } else {
    const data = await storage.getFavPost(id)
    return data
  }
}

module.exports = {
  add: addUser,
  getOne,
  getAll,
  updateUser,
  deleteUserController,
  loginController,
  getAllFavorites
}
