require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const routes = require('./src/routes.js')

const app = express()

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://bergsonjr:8hPExSelG9gy1EY1@wog-cluster-afjg5.mongodb.net/omnistack?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.json())
app.use(routes)

app.listen(process.env.PORT, () => {
    console.log('Server running on', process.env.PORT)
})

module.exports = app