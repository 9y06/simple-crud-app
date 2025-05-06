const express = require('express')
const app = express()

app.listen(3000, () => {
  console.log("Sever is running on port 3000")
})

app.get('/', (req, res) => {
  res.send('My First Node Server')
});

