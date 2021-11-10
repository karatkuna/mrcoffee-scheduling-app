require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const ejs = require('ejs')
const session = require('express-session')
const flash = require('express-flash')
const homeRouter = require('./routes/home')
const usersRouter = require('./routes/users')
const schedulesRouter = require('./routes/schedules')
const errorRouter = require('./routes/error')
const logoutRouter = require('./routes/logout')

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

// session config
app.use(session({
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  },
  name: "mrcoffee_sid",
  saveUninitialized: false,
  resave: false,
  secret: process.env.SESSION_SECRET
}))

app.use(flash())
// ROUTES
 app.use('/users', usersRouter)
 app.use('/schedules', schedulesRouter)
 app.use('/logout', logoutRouter)
 app.use('/', homeRouter)
 app.use('*', errorRouter)





app.listen(PORT, () => {
  console.log(`LISTENING AT http://localhost:${PORT}`)
})
