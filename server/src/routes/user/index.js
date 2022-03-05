const routes = require('express').Router()
const { makeSignupController } = require('../../infraestructure/factories/signup-factory.factory')
const { makeLoginController } = require('../../infraestructure/factories/login-factory.factory')

routes.post('/signup', async (req, res) => {
    let { statusCode, body } = await makeSignupController(req, res)
    return res.status(statusCode).json(body)
})
routes.post('/signin', async (req, res) => {
    let { statusCode, body } = await makeLoginController(req, res)
    return res.status(statusCode).json(body)
})

module.exports = routes