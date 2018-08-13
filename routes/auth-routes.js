const router = require('express').Router()
const passport = require('passport')
//auth login
router.get('/login', (req, res) => {
  res.render('login', {
    user: req.user
  })
})

router.get('/logout', (req, res) => {
  res.send('Logging out.')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))


module.exports = router
