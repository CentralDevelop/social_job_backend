require('dotenv').config()
const db = require('mongoose')

db.Promise = global.Promise

const connect = async () => {
  try {
    await db.connect('mongodb+srv://development_User:WI5D0OZlNUhU3xgd@platzijobs.kqet6.mongodb.net/platzi_jobs_db?retryWrites=true&w=majority', {
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
