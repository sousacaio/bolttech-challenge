module.exports = class SignUpController {

    #validator
    constructor(validator) {
        this.#validator = validator
    }

    handle(req, res) {

        const validation = this.#validator.handle(req.body)

        if (validation.statusCode !== 200) {
            return { statusCode: 400, message: validation.message }
        }
    }
}