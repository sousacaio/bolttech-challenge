const { badRequest, ok } = require('../helpers/http-helpers')
module.exports = class LoginController {

    #validator
    #userRepository

    constructor(validator, userRepository) {
        this.#validator = validator
        this.#userRepository = userRepository
    }

    async handle(req, res) {

        const validation = this.#validator.handle(req.body)

        if (validation.statusCode !== 200) {
            return badRequest({ message: validation.message })
        }

        return await this.#userRepository.login({
            account: req.body.account,
            password: req.body.password
        })
    }
}