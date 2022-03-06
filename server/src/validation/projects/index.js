const { forbidden, ok } = require("../../interfaces/helpers/http-helpers")

module.exports = class ProjectsValidator {
    handle(params) {
        let obligatoryFields = ['user_id']

        let errors = []

        if (!params) return forbidden({ message: 'There is no data!' })

        for (const field of obligatoryFields) {
            if (!params[field]) {
                errors.push(`The field ${field} is required`)
            }
        }

        if (errors.length > 0) return forbidden({ message: errors.join(',') })

        return ok()
    }
}