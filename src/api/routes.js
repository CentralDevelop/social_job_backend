const posts = require('../components/posts/network')

const routes = (app) => {
  app.use('/post', posts)
}

module.exports = routes
