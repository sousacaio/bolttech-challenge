module.exports = class SignUpValidator {
    handle(data) {
        if (!data) {
            return { statusCode: 400 }
        }
    }
}