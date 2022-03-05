const SignUpController = require("../../src/interfaces/controllers/signup.controller")
const SignUpValidator = require("../../src/validation/signup")
describe('signup-validator', () => {

    const validator = new SignUpValidator()
    const sut = new SignUpController(validator)

    it('Should return 400 if no valid data is provided', () => {
        let req = { body: {} }
        let res = null
        const { statusCode } = sut.handle(req, res)
        expect(statusCode).toBe(400)
    })
})