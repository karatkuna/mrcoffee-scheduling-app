const dotenv = require('dotenv').config()
const express = require('express')
const session = require('express-session')
const morgan = require('morgan')
const ejs = require('ejs')

const homeRouter = require('./routes/home')
const loginRouter = require('./routes/login')
const logoutRouter = require('./routes/logout')
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

app.use(session({
  name: 'mrcoffee_sid',
  secret:'e0d0252d471159c014e1469653fc379c302338494cfdfa82c662d12c07742bff6b412a56847319a898fd62e9f31f75e24a72d794c74e19b250cafef34a29aa83',
  resave: false,
  saveUninitailized: false,
  cookie: {
    maxAge: 1000 * 60  * 60 * 24
  }
}))

// ROUTES
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)
// app.use('/users', usersRouter)
app.use('/schedules', schedulesRouter)
app.use('/', homeRouter)
// app.use('*', errorRouter)

app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`)
})