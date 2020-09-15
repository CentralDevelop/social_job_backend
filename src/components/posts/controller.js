const store = require('./store')

const getAllPost = async (country, city, skill) => {
    
    let result = await store.get(country, city, skill)   
    return result
    
}


const addPost = (position, salary, rating, description, company, url, skill, user, country, city , image) => {
    return new Promise((resolve, reject) => {
        if (!position || !salary || !rating || !description || !company || !url || !skill || !user || !country || !city) {
            console.log("[CONTROLLER] invalid data form")
            reject('Missing data')
          }

          let fileUrl = ""
          if (image){
              fileUrl = `http://localhost:4000/app/files/${image.filename}`
          }

        const post = {
            position,
            image: fileUrl,
            salary,
            rating,
            description,
            company,
            url,
            skill,
            user,
            country,
            city
          }
          store.add(post)

          finalResponse = {
              post,
              "System message": "Post successfully created"
          }

          resolve(finalResponse)
    })
}


const updatePost = (id, position, salary, rating, description, company, url, skill, user, country, city, image) => {
    return new Promise((resolve, reject) => {

        if(!id || !position || !salary || !rating || !description || !company || !url || !skill || !user || !country || !city ){
            reject("Missing data")
        }

        let fileUrl = ""
          if (image){
              fileUrl = `http://localhost:4000/app/files/${image.filename}`
          }

        const post = {
            position,
            image: fileUrl,
            salary,
            rating,
            description,
            company,
            url,
            skill,
            user,
            country,
            city
          }
          
        const result = store.update(id, post)
        
        let finalResponse = {
            post,
            "System Message" : "Post succesfully updated"
        }
        resolve(finalResponse)
    })
}


const deletePost = (id) => {
    return new Promise ((resolve, reject) => {
        if(!id) {
            reject("Missing data")
        }

        store.remove(id)
            .then(() => {
                resolve("Post deleted")
            })
            .catch(error => {
                reject(error)
            })
    })
}

module.exports = {
    addPost,
    getAllPost,
    updatePost,
    deletePost
}
