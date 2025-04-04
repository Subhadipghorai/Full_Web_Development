import express from 'express'
const app = express()
import cors from 'cors'
import bodyParser from 'body-parser'
const port = 3000

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/', (req, res) => {
  console.log(req.body) // your data is logged here
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})