const SignUpValidator = require("../../src/validation/signup")

describe('signup-validator', () => {

    const sut = new SignUpValidator()

    it('should return 400 if there is no data', () => {
        const result = sut.handle()
        expect(result.statusCode).toBe(400)
    })

    it('should return 400 if there is no account', () => {
        let mockedUser = {
            account: null,
            email: 'test@test.com.br'
        }
        const result = sut.handle(mockedUser)
        expect(result.statusCode).toBe(400)
    })
    it('should return 400 if there is no email', () => {
        let mockedUser = {
            account: 'test',
            email: null
        }
        const result = sut.handle(mockedUser)
        expect(result.statusCode).toBe(400)
    })
})