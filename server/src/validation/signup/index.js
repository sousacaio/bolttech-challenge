const { badRequest, ok } = require("../../interfaces/helpers/http-helpers")

module.exports = class SignUpValidator {
    handle(data) {
        let obligatoryFields = ['account', 'password']

        let errors = []

        if (!data) return badRequest({ message: 'There is no data!' })

        for (const field of obligatoryFields) {
            if (!data[field]) {
                errors.push(`The field ${field} is required`)
            }
        }

        if (errors.length > 0) return badRequest({ message: errors.join(',') })

        return ok()
    }
}