const express = require('express')
const app = express()

//Set view engine 
app.set('view engine', 'ejs')

// Create home route
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(4000, ()=>console.log('App listening on 4000!'))
