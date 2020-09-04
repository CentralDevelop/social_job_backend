const posts = require('../components/posts/network')
const user = require('../components/user/network')

const routes = (app) => {
  app.use('/api/user', user)
  app.use('/api/post', posts)
}

module.exports = routes
