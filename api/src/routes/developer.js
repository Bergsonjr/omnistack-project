const { Router } = require('express')
const developerCtrl = require('../controllers/developerCtrl')

const users = Router()

users
    .get('/', developerCtrl.index)
    .post('/', developerCtrl.store)
    .delete('/:_id', developerCtrl.destroy)

module.exports = users