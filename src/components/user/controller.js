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

module.exports = {
  add: addUser,
  getOne,
  getAll
}
