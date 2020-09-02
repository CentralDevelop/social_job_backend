const user = require('../components/user/network')

const routes = (app) => {
  app.use('/user', user)
}

module.exports = routes
