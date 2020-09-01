const db = require('mongoose')

db.Promise = global.Promise

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
}
module.exports = connect