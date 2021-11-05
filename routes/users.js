const express = require('express')
const db = require('../database')
const bcrypt = require('bcryptjs')
const router = express.Router()
const {validateInput} = require('./middleware/app')



//Create the first routes to return all the informatin(GET USERS)
router.get('/',(req, res) => {
  db.any('SELECT * FROM users;')

  .then((users) => {
    console.log(users)
    
    res.render('pages/users', {
      name:users.firstname + users.lastname,
      users
    })

  })
  .catch((error) => {
    console.log(error)
    res.render('pages/error', {
      message: error.message
    })
  })
 
})
//register a new user
router.post('/', (req, res) => {
 
  const { firstname, lastname, email, password } = req.body

  const validResult = validateInput(req.body)
  
  //1. Validate- yup and -Joi- are decent validation packages
  
  //2. check if email exists


  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(password, salt)
  const cleanedEmail = email.toLowerCase().trim()

  db.none('INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4);', [firstname, lastname, cleanedEmail, hash])
  .then(() =>{

     res.send({
          firstname,
          lastname,
          email: cleanedEmail,
          password: hash 
      })
  })
  .catch((err) => {
    console.log(err)
    res.send(err.message)
  })

})


module.exports = router