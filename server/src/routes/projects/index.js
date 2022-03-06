const routes = require('express').Router()
const { makeProjectsController } = require('../../infraestructure/factories/projects-factory.factory')

routes.get('/:user_id', async (req, res) => {
    let { statusCode, body } = await makeProjectsController(req, res)
    return res.status(statusCode).json(body)
})

module.exports = routes