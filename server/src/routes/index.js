const routes = require('express').Router()
const userRoutes = require('./user/index')
const projecRoutes = require('./projects/index')

routes.use('/user', userRoutes)
routes.use('/projects', projecRoutes)

module.exports = routes