const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require('fs')


// ...

app.use('/blog', blog)

// app.use(express.static('public'))

//Middleware 1- logger for our application
app.use((req, res, next)=> {
  console.log(req.headers)
  req.subha="I am Subha";
  fs.appendFileSync("log.txt",`${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  // res.send("Hacked! By Middleware 1" )
  next()
})

//middleware 2
app.use((req, res, next)=> {
  console.log('m2')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World! '+req.subha)
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})