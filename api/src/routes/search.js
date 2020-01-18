const { Router } = require('express')
const searchCtrl = require('../controllers/searchCtrl')

const search = Router()

search
    .get('/', searchCtrl.index)

module.exports = search