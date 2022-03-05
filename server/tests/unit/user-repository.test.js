const UserRepository = require("../../src/infraestructure/repositories/user.repository")

describe('User repository', () => {
    class FakeDbProvider {
        async save({ account, password }) {
            return Promise.resolve({ account, password, _id: 'any_id' })
        }
    }

    const fakeDbProvider = new FakeDbProvider()

    const sut = new UserRepository(fakeDbProvider)
    
    it('Should return created user', async () => {
        let expected = { account: 'test', password: 'password' }
        const { account, password, _id } = await sut.save(expected)
        expect(account).toBe(expected.account)
        expect(password).toBe(expected.password)
        expect(_id).toBe('any_id')
    })
})