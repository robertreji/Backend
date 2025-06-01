const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000  // Safely use PORT from .env, or fallback

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/u',(req,res)=>{
  res.send("seeing u page as requested ")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
