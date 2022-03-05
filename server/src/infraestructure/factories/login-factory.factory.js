const MongoDbUserService = require('../services/user.service')
const LoginController = require("../../interfaces/controllers/login.controller")
const LoginValidator = require("../../validation/login")
const UserRepository = require('../repositories/user.repository')

exports.makeLoginController = (req, res) => {
    const dbProvider = new MongoDbUserService()
    const userRepository = new UserRepository(dbProvider)
    const validator = new LoginValidator()
    const controller = new LoginController(validator, userRepository)
    return controller.handle(req, res)
}