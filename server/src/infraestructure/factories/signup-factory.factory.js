const SignupController = require('../../interfaces/controllers')
module.exports = makeSignupController = (req, res) => {
    const controller = new SignupController()
    return controller.handle(req, res)
}