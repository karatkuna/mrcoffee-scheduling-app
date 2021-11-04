// Loading and initialising the library- option would go in the empty bracket if we had any
const pgp = require('pg-promise')()


const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env



// const user = process.env.DB_USER
// const password = process.env.DB_PASSWORD
// const host = process.env.DB_HOST
// const port = process.env.DB_PORT
// const database = process.env.DB_DATABASE

//connection string

const cn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`



// const cn = 'postgres://postgres:karat1234@localhost:5432/project4_clientserver'




const db = pgp(cn)

module.exports = db