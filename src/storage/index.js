const db = require('mongoose')

db.Promise = global.Promise

const connect = async (url) => {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    console.log('[DB] Conecction success')
  } catch (error) {
    console.log(error)
  }
}
module.exports = connect