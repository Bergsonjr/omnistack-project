const {Router} = require('express')
const routes = Router()

routes.use('/devs', require('./routes/developer'))
routes.use('/search', require('./routes/search'))

module.exports = routes
