const routes = require('express').Router()
const userRoutes = require('./user/index')
const projectRoutes = require('./projects/index')
const tasksRoutes = require('./tasks/index')

routes.use('/user', userRoutes)
routes.use('/projects', projectRoutes)
routes.use('/tasks', tasksRoutes)

module.exports = routes