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

const update = async (id, title, salary, rating, description, company, url, skill, rate, user, country, city) => {
    let retrievedPost = await model.findOne({
        _id: id
    })

    console.log(retrievedPost)

    retrievedPost = {
        title: title,
        salary: salary,
        rating: rating,
        description: description,
        company: company,
        url: url,
        skill: skill,
        rate: rate,
        user: user,
        country: country,
        city: city
    }

    let updatedPost = await retrievedPost.save()
    return updatedPost
}

module.exports = {
    add,
    get,
    update
}