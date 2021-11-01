const express = require('express')
const morgan = require('morgan')

const loginRouter = require('./routes/home')
const signupRouter = require('./routes/signup')
const homeRouter = require('./routes/home')
const usersRouter = require('./routes/users')
const scheduleRouter = require('./routes/schedules')
const errorRouter = require('./routes/error')


const app = express()
const PORT = process.env.PORT || 3000

//MIDDLWARE: Logger
app.use(morgan('dev'))

//BODY PARSER
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//SET STATIC FOLDER
app.use(express.static('public'))

//USING TEMPLATE ENGINE
app.set('view engine', 'ejs')

// ROUTES
// app.use('/schedules', schedulesRouter)
// app.use('/users', usersRouter)
//app.use('/home',homeRouter)
//app.use('/signup', signupRouter)
// app.use('/', loginRouter)
// app.use('*', errorRouter)


app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))