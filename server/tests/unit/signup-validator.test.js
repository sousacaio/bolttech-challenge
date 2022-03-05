const SignUpValidator = require("../../src/validation/signup")

describe('signup-validator', () => {

    const sut = new SignUpValidator()

    it('should return 400 if there is no data', () => {
        const result = sut.handle()
        expect(result.statusCode).toBe(400)
    })
})