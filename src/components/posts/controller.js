const store = require("./store")


const addPost = (title, image, salary, rating, description, company, url, skill, rate, user, location) => {
    return new Promise((resolve, reject) => {
        if (!title || !image || !salary || !rating || !description || !company || !url || !skill || !rate || !user || !location) {
            console.log("[CONTROLLER] invalid data form")
            reject('Missing data')
          }
        const post = {
            title,
            image,
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
}
