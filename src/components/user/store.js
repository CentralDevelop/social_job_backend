const Model = require('../../storage/models/user')

const addUser = (user) => {
    const myUser = new Model(user)
    return myUser.save()
}

const allUsers = async () => {
    return Model.find();    
}


module.exports = {
    add: addUser,
    listAllUsers: allUsers
}