const posts = require('../components/posts/index')

const routes = (app) => {
  app.use('/post', posts)
}

module.exports = routes
