const routes = require('express').Router()
const { makeProjectsController } = require('../../infraestructure/factories/projects-factory.factory')
const { makeCreateProjectsController } = require('../../infraestructure/factories/create-project.factory')

routes.get('/:user_id', async (req, res) => {
    let { statusCode, body } = await makeProjectsController(req, res)
    return res.status(statusCode).json(body)
})

routes.post('/:user_id', async (req, res) => {
    let { statusCode, body } = await makeCreateProjectsController(req, res)
    return res.status(statusCode).json(body)
})

module.exports = routes