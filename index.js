const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('My First Node Server')
});


const mongo_str = "mongodb+srv://oygnijoes0209:aRVA2MLwvsfX0fIh@backenddb.3tbgnox.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
mongoose.connect(mongo_str)
.then(() => {
  console.log("Conneted to Database!")
  app.listen(3000, () => {
    console.log("Sever is running on port 3000")
  })
})
.catch(() => {
  console.log("Connection Faild!")
})