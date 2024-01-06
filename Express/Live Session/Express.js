const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('First Express response')
})

app.listen(3000)