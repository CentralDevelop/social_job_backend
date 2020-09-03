const model = require('../../storage/models/post')
//const list = []


const get = async ()=> {
    
    const posts = await model.find()
    return posts
}


const add = (post) => {
    // list.push(post)
    // console.log(list)
    const newPost = new model(post)
    newPost.save()
}

const update = async (id, post) => {
    let retrievedPost = await model.findOne({
        _id: id
    })

    let entrie = Object.entries(retrievedPost)
    entrie = Object.entries(post)

    
    retrievedPost = Object.fromEntries(entrie)

    console.log(retrievedPost)
    const newdPost = await model.findByIdAndUpdate(id, retrievedPost)
    return newdPost
}

const remove = (id) => {
    return model.deleteOne({
        _id: id
    })
}



module.exports = {
    add,
    get,
    update,
    remove,
}