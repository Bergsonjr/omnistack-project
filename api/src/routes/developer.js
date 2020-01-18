const { Router } = require('express')
const developerCtrl = require('../controllers/developerCtrl')

const users = Router()

users
    .get('/', developerCtrl.index)
    .post('/', developerCtrl.store)

module.exports = users