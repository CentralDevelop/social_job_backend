const model = require('../../storage/models/post')
//const list = []


const get = () => {
    return model.find()
}


const add = (post) => {
    // list.push(post)
    // console.log(list)
    const newPost = new model(post)
    newPost.save()
}

module.exports = {
    add,
    get
}