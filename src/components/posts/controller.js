const store = require("./store")


const getPost = () => {
    return new Promise ((resolve, reject) => {
        resolve(store.get())
    })
}



const addPost = (title, salary, rating, description, company, url, skill, rate, user, location, image) => {
    return new Promise((resolve, reject) => {
        if (!title || !salary || !rating || !description || !company || !url || !skill || !rate || !user || !location) {
            console.log("[CONTROLLER] invalid data form")
            reject('Missing data')
          }

          let fileUrl = ""
          if (image){
              fileUrl = `http://localhost:4000/app/files/${image.filename}`
          }

        const post = {
            title,
            image: fileUrl,
            salary,
            rating,
            description,
            company,
            url,
            skill,
            rate,
            user,
            location
          }
          store.add(post)

          finalResponse = {
              post,
              "System message": "Post successfully created"
          }

          resolve(finalResponse)
    })
}

module.exports = {
    addPost,
    getPost,
}
