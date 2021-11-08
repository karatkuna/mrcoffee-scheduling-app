const dotenv = require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')

const homeRouter = require('./routes/home')
const usersRouter = require('./routes/users')
const schedulesRouter = require('./routes/schedules')
const errorRouter = require('./routes/error')

const PORT = process.env.PORT || 3000

const app = express()

// BODY PARSER
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// MIDDLEWARE: LOGGER
app.use(morgan('dev'))

// USING TEMPLATE ENGINE
app.set('view engine', 'ejs')

// SET STATIC FOLDER
app.use(express.static('public'))

// ROUTES
// app.use('/users', usersRouter)
app.use('/schedules', schedulesRouter)
app.use('/', homeRouter)
// app.use('*', errorRouter)

app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`)
})