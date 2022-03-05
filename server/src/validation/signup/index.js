module.exports = class SignUpValidator {
    handle(data) {
        if (!data) {
            return { statusCode: 400 }
        }
        if (!data.account) {
            return { statusCode: 400 }
        }
        if (!data.email) {
            return { statusCode: 400 }
        }
    }
}