const db = require('mongoose')

db.Promise = global.Promise

<<<<<<< HEAD
const connect = async (url) => {
  try {
    await db.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('[DB] Conecction success')
  } catch (error) {
    console.log(error)
  }
=======
const connect = async () => {
    try {
        await db.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('[DB] Conecction success')
    } catch (error) {
        console.log(error)
    }
>>>>>>> a75d62bdbee8f0f595f90a9aca6915ef8d51a49b
}
module.exports = connect