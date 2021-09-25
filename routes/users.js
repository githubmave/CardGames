const express = require('express')
const {getCity} = require('../db')
const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  res.redirect('home')
})

router.get('/home', (req, res) => {
  res.render('home')
})

router.get('/home/random', (req, res) => {
  db.getCity()
  .then(City => {
    // res.send(City)
    res.render('City', City)
  })
})

module.exports = router
