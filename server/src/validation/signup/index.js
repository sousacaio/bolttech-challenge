module.exports = class SignUpValidator {
    handle(data) {
        let obligatoryFields = ['account', 'password']

        let errors = []

        if (!data) {
            return { statusCode: 400, message: 'There is no data!' }
        }

        for (const field of obligatoryFields) {
            if (!data[field]) {
                errors.push(`The field ${field} is required`)
            }
        }

        if (errors.length > 0) {
            return { statusCode: 400, message: errors.join(',') }
        }

        return { statusCode: 200 }
    }
}