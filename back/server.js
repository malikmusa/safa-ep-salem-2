const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const FormRoute = require('./routes/FormRoute')

//database
mongoose.connect('mongodb+srv://zohaibBiJn:zohaibBiJn1997@cluster0.ebz6l.mongodb.net/try2?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log("Database connection established!")
})


//app
const app = express()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//cors
const cors = require('cors')
app.use(cors())

//server run
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.use('/api/form', FormRoute);