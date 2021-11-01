// Loading and initialising the library- option would go in the empty bracket if we had any
const pgp = require('pg-promise')()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT
const database = process.env.DB.DATABASE


//connection string
const cn = 'postgres://${user}:${password}@${host}:${port}/${database}'


const db = pgp(cn)

module.exports = db