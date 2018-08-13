const router = require('express').Router()

//auth login
router.get('/login', (req, res) => {
  res.render('login', {user:req.user})
})

router.get('/logout', (req, res) => {
  res.send('Logging out.')
})

router.get('/google', (req, res) => {
  res.send('Logging in with Google.')
})


module.exports = router
