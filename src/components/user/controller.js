const storage = require('./store')

const addUser = (fullname, email, username, password) => {
    if(!fullname || !email || !username || !password){
        return Promise.reject('Missing data')
    }
    const user = {
        fullname,
        email,
        username,
        password
    }
    return storage.add(user)
}




module.exports = {
    add: addUser
}