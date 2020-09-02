const posts = require('../components/posts/network')
const user = require('../components/user/network')

const routes = (app) => {
  app.use('/user', user)
  app.use('/post', posts)
}

module.exports = routes
