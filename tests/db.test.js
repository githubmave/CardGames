const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getUsers gets all users', () => {
  // One for each letter of the alphabet!
  const expected = 3
  return db.getUsers(testDb)
    .then(users => {
      const actual = users.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})


test('getUser gets a single user', () => {
  const expected = 'test user 1'
  return db.getUser(99901, testDb)
    .then(user => {
      const actual = user.name
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('get which card trumps which', () =>{
  const expected = true
  return db.isCardOneTopCard(28,22)
  .then(card => {
    const actual = card
    expect(actual).toBe(expected)
  })
  .catch(err=> expect(err).toBeNull())
})

test('get Card gets a single card', () =>{
  const expected = 'test card 1'
  return db.getUser(99901, testDb)
  .then(user => {
    const actual = user.name
    expect(actual).toBe(expected)
  })
  .catch(err => expect(err).toBeNull())
})
