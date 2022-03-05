const UserRepository = require("../../src/infraestructure/repositories/user.repository")
const SignUpController = require("../../src/interfaces/controllers/signup.controller")
const SignUpValidator = require("../../src/validation/signup")
describe('signup-validator', () => {
    class FakeDbProvider {
        async save({ account, password }) {
            return Promise.resolve({ account, password, _id: 'any_id' })
        }
    }
    const fakeDbProvider = new FakeDbProvider()
    const userRepository = new UserRepository(fakeDbProvider)
    const validator = new SignUpValidator()
    const sut = new SignUpController(validator, userRepository)

    it('Should return 400 if no valid data is provided', async () => {
        let req = { body: {} }
        let res = null
        const { statusCode } = await sut.handle(req, res)
        expect(statusCode).toBe(400)
    })

    it('If valid data is provided, should signup user', async () => {
        let req = {
            body: {
                account: 'test',
                password: 'test@test.com'
            }
        }
        let res = null
        const { statusCode, body } = await sut.handle(req, res)
        expect(statusCode).toBe(200)
        expect(body.account).toBe(req.body.account)
        expect(body.password).toBe(req.body.password)
        expect(body._id).toBe('any_id')
    })
})