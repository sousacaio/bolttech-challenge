const UserRepository = require("../../src/infraestructure/repositories/user.repository")

describe('User repository', () => {
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

        async findProjectsById(id) {
            if (id === 'id_with_activities') {
                return Promise.resolve([{
                    name: 'Project name',
                    activities: [
                        {
                            id: 'activitie_id',
                            name: 'activie 1',
                            status: false
                        }
                    ]
                }])
            }
            return Promise.resolve(null)
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

    it('Should return 400 if account does not exists', async () => {
        let expected = { account: 'test', password: 'password' }
        const { statusCode } = await sut.login(expected)
        expect(statusCode).toBe(400)
    })

    it('Should return 400 if password does not match', async () => {
        let expected = { account: 'correct_account', password: 'wrong_password' }
        const { statusCode } = await sut.login(expected)
        expect(statusCode).toBe(400)
    })

    it('Should return 200 if login works', async () => {
        let expected = { account: 'correct_account', password: 'correct_password' }
        const { statusCode } = await sut.login(expected)
        expect(statusCode).toBe(200)
    })

    it('Should return no projects message if user has no projects yet', async () => {        
        const { statusCode,body } = await sut.findProjectsById('any_id')
        expect(statusCode).toBe(200)
        expect(body.message).toBe('No projects yet')
    })
    it('Should projects data if user has projects', async () => {        
        const { statusCode,body } = await sut.findProjectsById('id_with_activities')
        expect(statusCode).toBe(200)        
        expect(body[0].name).toBe('Project name')
        expect(body[0].activities.length).toBe(1)
    })
})