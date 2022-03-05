const { badRequest } = require('../helpers/http-helpers')
module.exports = class SignUpController {

    #validator
    constructor(validator) {
        this.#validator = validator
    }

    handle(req, res) {

        const validation = this.#validator.handle(req.body)

        if (validation.statusCode !== 200) {
            return badRequest({ message: validation.message })
        }
    }
}