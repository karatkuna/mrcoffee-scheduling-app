const express = require('express')
const db = require('../database')
const bcrypt = require('bcryptjs')
const router = express.Router()
const { redirectToHome } = require('./middleware/redirect')
const {
  rearrangeArraySchedule,
  getWorkingDays,
  weekday, 
  validateInput} = require('./middleware/app')

  const isValid = (value, regex) => {
    return regex.test(value)
  }
  
  const cleanEmail = (email) => {
  return email ? email.toLowerCase().trim() : ""
}




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
    res.render('pages/error',{
      message:error.message
    })
  })
 
})
//create parameterized routes(get individual users)
router.get('/:id', (req, res) =>{

    db.any('SELECT * FROM users;')
    .then((users)=>{  
    if(isNaN(req.params.id))
    {
        res.send("  Enter Valid Data  ")
    }
    else {
             res.render('pages/users', {
            id:req.params.id,
            users
               })
      }
    })
  
      .catch((error) => {
        console.log(error)
        res.render('pages/error',{
          message:error.message
        })
      
      })

    })  
//get userid/schedules
router.get('/:id/schedules', (req, res) => {
  const userId = Number.parseInt(req.params.id)

  const getUsers = db.any('SELECT * FROM users')
  const getSchedules = db.any(`SELECT user_id, username, day, TO_CHAR(start_at, 'HH.MIAM') start_at, TO_CHAR(end_at, 'HH.MIAM') end_at FROM schedules s JOIN users u ON u.id=s.user_id ORDER BY user_id, day`);

  Promise.all([getUsers,getSchedules]).then(data => {
                const users = data[0]
                const schedules = data[1]
                const newArraySchedule = rearrangeArraySchedule(schedules)
                const days = getWorkingDays(schedules)

    res.render('pages/schedules', {
      users,
      schedules,
      newArraySchedule,
      days,
      weekday,
      showById: true,
      userId
    })
  })
})
//display register form
router.get('register', (req, res) => {
  res.render('pages/register', {
    errors: req.flash("error")
  })
})
// @path    '/users/register'
// @desc    register a new user
// @access  public


router.post('/users', (req, res) => {
 
  const { firstname, lastname, email, password } = req.body
 // const cleanedEmail = cleanEmail(email)
 
 const validResult = validateInput(req.body)
   // 1. validate! - yup and joi are decent validation packages

   if (!validResult ) {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
 
    db.one('INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id', [firstname, lastname, email, hash], user => user.id)

    .then(userId => {
      
      res.redirect('/users/login') 

    })

    .catch((error) => {
      console.log(error)
      res.redirect("/error?message=" + error.message)
    })
  }else{
    res.send('Invalid Data')
  }

})


  
 





module.exports = router