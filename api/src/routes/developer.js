const { Router } = require('express')
const developerCtrl = require('../controllers/developerCtrl')

const users = Router()

users
    .get('/', developerCtrl.index)
    .post('/', developerCtrl.store)
    .put('/', developerCtrl.update)
    .delete('/', developerCtrl.destroy)

module.exports = users