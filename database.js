// Loading and initialising the library- option would go in the empty bracket if we had any
const pgp = require('pg-promise')()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const database = process.env.DB.DATABASE


//connection string
const cn = 'postgres://postgres:123456@localhost:5432/project4_clientserver'


const db = pgp(connection)

module.exports = db