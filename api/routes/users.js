const { Router } = require('express')

const router = Router()

// Mock Users
const users = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

router.post('/login', function (req, res, next) {
  req.session.user = {
    id: 1,
    name: req.body.username
  }
  res.json({
    id: 1,
    name: req.body.username
  })
})

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users)
})

router.get('/users/me', function (req, res, next) {
  setTimeout(() => {
    res.json({
      id: req.session.user ? req.session.user.id : -1,
      name: req.session.user ? req.session.user.name : 'Guest'
    })
  }, 50)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
