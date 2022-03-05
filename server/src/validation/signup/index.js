module.exports = class SignUpValidator {
    handle(data) {
        if (!data) {
            return { statusCode: 400, message: 'There is no data!' }
        }
        if (!data.account) {
            return { statusCode: 400, message: 'The account is required!' }
        }
        if (!data.password) {
            return { statusCode: 400, message: 'The password is required!' }
        }
        return { statusCode: 200 }
    }
}