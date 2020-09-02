const store = require("./store")


const getPost = () => {
    return new Promise ((resolve, reject) => {
        resolve(store.get())
    })
}



const addPost = (title, salary, rating, description, company, url, skill, rate, user, location, file) => {
    return new Promise((resolve, reject) => {
        if (!title || !salary || !rating || !description || !company || !url || !skill || !rate || !user || !location) {
            console.log("[CONTROLLER] invalid data form")
            reject('Missing data')
          }

          let fileUrl = ""
          if (file){
              fileUrl = `http://localhost:4000/public/files/${file.filename}`
          }

        const post = {
            title,
            file: fileUrl,
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
