const { get } = require('./server')

const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCity: getCity
}

function getCity (db = connection) {
  var randomId = getRandomInt(8)
  return db('cities')
  .where('id', randomId)
  .first()
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


