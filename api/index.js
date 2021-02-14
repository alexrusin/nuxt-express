const express = require('express')
const session = require('express-session')

// Create express instance
const app = express()
// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')

const sess = {
  secret: process.env.SECRET_KEY,
  cookie: {}
}

if (process.env === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(express.json())

// Import API Routes
app.use(users)
app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
