require('dotenv').config()

const express = require('express')

const app = express()

app.listen(process.env.PORT, () => {
    console.log('Server running on', process.env.PORT)
})

module.exports = app