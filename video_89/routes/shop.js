const express = require('express')
const router = express.Router()



// define the home page route
router.get('/', (req, res) => {
  res.send('shop home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About ship')
})
router.get('/blogpost/:slug', (req, res) => {
  res.send(`Fetch the blogpost for ${req.params.slug} `)
})

module.exports = router