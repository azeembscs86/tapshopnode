require('dotenv').config()
const express = require('express')
const app = express()

const port=4000


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
    res.send('Welcome to twitter page')
  })
  

  app.get('/login', (req, res) => {
    res.send('<h1>You are not logi please login first</h1>')
  })
  
app.listen(process.env.PORT, () => {
  console.log("Example code running on ",process.env.port)
})