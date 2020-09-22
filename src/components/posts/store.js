const Model = require('../../storage/models/post')
// const list = []

const get = async (fCountry, fCity, fSkill, fPosition, fSalary)=> {
        
        
        filter = {}

        if(fCountry !== null){
            filter = {
                country: fCountry
            }
        }else if(fCity !== null){
            filter = {
                city: fCity
            }
        }else if (fSkill !== null){
            filter = {
                skill : fSkill
            }
        }else if (fPosition !== null){
            filter = {
                position: fPosition
            }
        }else if (fSalary !== null){
            filter = {
                salary: fSalary
            }
        }
 
 
    const posts = await Model.find(filter)
    return posts
}

const getFilter = async (id)=> {        
    const posts = await Model.findOne({ _id: id })
    return posts
}

const add = (post) => {
  // list.push(post)
  // console.log(list)
  const newPost = new Model(post)
  return newPost.save()
}

const update = async (id, post) => {
    let retrievedPost = await Model.findOne({
        _id: id
    })

    let entrie = Object.entries(retrievedPost)
    entrie = Object.entries(post)

    
    retrievedPost = Object.fromEntries(entrie)

    console.log(retrievedPost)
    const newdPost = await Model.findByIdAndUpdate(id, retrievedPost)
    return newdPost
}

const remove = (id) => {
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add,
    get,
    getFilter,
    update,
    remove,
}
