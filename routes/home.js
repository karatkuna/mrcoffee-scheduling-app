const express = require('express')
const db = require('../database')
const { weekday } = require('./middleware/app')

const router = express.Router()

router.get('/', (req, res) => {
  db.any("SELECT s.user_id,u.firstname,u.lastname, day, TO_CHAR(start_at, 'HH.MI am') start_at, TO_CHAR(end_at, 'HH.MI am') end_at FROM schedules s JOIN users u ON u.id=s.user_id ORDER BY day, user_id")
  
  .then(schedules => {
    console.log(schedules)
    res.render('pages/home', {
      weekday,
      schedules
    })
    
  })
  

  .catch(error => {
    console.log(error.message)
  })

})


module.exports = router