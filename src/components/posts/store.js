const Model = require('../../storage/models/post')
// const list = []

const get = async (fCountry, fCity, fSkill, fPosition, fSalary)=> {
        return new Promise((resolve, reject) => {
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
    
    
            Model.find(filter).
            populate({path: 'user', options: {
                select: {
                    fullname: 1,
                    email: 1,
                    username: 1
                }
            }}).
            exec((error, data) => {
                if(error){
                    reject(error)
                }

                resolve(data)
            })

        })  
}

const getFilter = async (id)=> {        
    return new Promise((resolve, reject) => {
        
        Model.findOne({ _id: id }).
        populate({path: 'user', options: {
            select: {
                fullname: 1,
                email: 1,
                username: 1
            }
        }}).
        exec((error, data) => {
            if(error){
                reject(error)
            }

            resolve(data)
        })

    })
    
}

const add =  (post) => {
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
