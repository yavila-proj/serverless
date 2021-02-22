const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyparser.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { userNewUrlParser: true, useUnifiedTopology: true })

app.get('*', (req, res) => {
    res.send('chanchito feliz')
})
module.exports = app
