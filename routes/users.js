const express = require('express')
const db = require('../database')
const bcrypt = require('bcryptjs')
const router = express.Router()

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
    res.redirect('/error?message=' + error.message)
  })
 
})

router.post('/', (req, res) => {
 
  const { firstname, lastname, email, password } = req.body

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
  .catch()

})


module.exports = router