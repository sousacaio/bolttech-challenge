const LoginValidator = require("../../src/validation/login")


describe('login-validator', () => {

    const sut = new LoginValidator()

    it('should return 400 if there is no data', () => {
        const result = sut.handle()
        expect(result.statusCode).toBe(400)
    })

    it('should return 400 if there is no account', () => {
        let mockedUser = {
            account: null,
            password: 'test@test.com'
        }
        const result = sut.handle(mockedUser)
        expect(result.statusCode).toBe(400)
    })
    
    it('should return 400 if there is no password', () => {
        let mockedUser = {
            account: 'test',
            password: null
        }
        const result = sut.handle(mockedUser)
        expect(result.statusCode).toBe(400)
    })
    it('should return 200 if everything is correct', () => {
        let mockedUser = {
            account: 'test',
            password: 'test@test.com'
        }
        const result = sut.handle(mockedUser)
        expect(result.statusCode).toBe(200)
    })
})