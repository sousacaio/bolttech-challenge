const SignupController = require('../../interfaces/controllers/signup.controller')
const SignUpValidator = require('../../validation/signup')
const UserRepository = require('../repositories/user.repository')
const MongoDbUserService = require('../services/user.service')


exports.makeSignupController = (req, res) => {
    const dbProvider = new MongoDbUserService()
    const userRepository = new UserRepository(dbProvider)
    const validator = new SignUpValidator()
    const controller = new SignupController(validator, userRepository)
    return controller.handle(req, res)
}