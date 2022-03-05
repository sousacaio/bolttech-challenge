const routes = require('express').Router()
const { makeSignupController } = require('../../infraestructure/factories/signup-factory.factory')

routes.post('/signup', async (req, res) => {
    let { statusCode, body } = await makeSignupController(req, res)
    return res.status(statusCode).json(body)
})

module.exports = routes