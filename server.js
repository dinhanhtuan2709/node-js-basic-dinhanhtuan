const express = require('express')
const app = express()
const port = 2709

app.get('/', (req, res) => {
  res.send('Xin chao cac ban. Minh la DINH ANH TUAN. ')
})

app.get('/about', (req, res) => {
    res.send('Rat vui khi duoc lam quen. ')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost: ${port}`)
})