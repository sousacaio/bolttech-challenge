const UserRepository = require("../../src/infraestructure/repositories/user.repository")
const LoginController = require("../../src/interfaces/controllers/login.controller")
const LoginValidator = require("../../src/validation/login")
describe('signup-validator', () => {
    class FakeDbProvider {
        async save({ account, password }) {
            return Promise.resolve({ account, password, _id: 'any_id' })
        }
        async findByAccount(account) {

            if (account == 'correct_account') {
                return Promise.resolve({
                    account,
                    password: 'correct_password',
                    id_: 'any_id'
                })
            }

            return Promise.resolve(null)
        }
    }
    const fakeDbProvider = new FakeDbProvider()
    const userRepository = new UserRepository(fakeDbProvider)
    const validator = new LoginValidator()
    const sut = new LoginController(validator, userRepository)

    it('Should 400 if there is no data', async () => {
        let req = { body: {} }
        let res = null
        const { statusCode } = await sut.handle(req, res)
        expect(statusCode).toBe(400)
    })

    it('Should 400 if there is no account', async () => {
        let req = {
            body: {
                account: 'no_exist_account',
                password: 'password'
            }
        }
        let res = null
        const { statusCode, body } = await sut.handle(req, res)
        expect(statusCode).toBe(400)
        expect(body.message).toEqual('Account does not exists')
    })

    it('Should 400 if wrong password is given', async () => {
        let req = {
            body: {
                account: 'correct_account',
                password: 'wrong_password'
            }
        }
        let res = null
        const { statusCode, body } = await sut.handle(req, res)
        expect(statusCode).toBe(400)
        expect(body.message).toEqual('Wrong credentials given')
    })

    it('Should 200 if login is ok', async () => {
        let req = {
            body: {
                account: 'correct_account',
                password: 'correct_password'
            }
        }
        let res = null
        const { statusCode, body } = await sut.handle(req, res)        
        expect(statusCode).toBe(200)
        expect(body).toEqual({
            account: 'correct_account',
            password: 'correct_password',
            id_: 'any_id'
        })
    })
})