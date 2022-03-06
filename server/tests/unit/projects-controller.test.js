const ProjectsRepository = require("../../src/infraestructure/repositories/projects.repository")
const ProjectsController = require("../../src/interfaces/controllers/projects.controller")
const ProjectsValidator = require("../../src/validation/projects")


describe('Projects controller', () => {
    class FakeDbProvider {
        async findProjectsByUserId(id) {
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
    const projectsRepository = new ProjectsRepository(fakeDbProvider)
    const validator = new ProjectsValidator()
    const sut = new ProjectsController(validator, projectsRepository)

    it('Should 400 if there is no user', async () => {
        let req = { params: {} }
        let res = null
        const { statusCode } = await sut.handle(req, res)
        expect(statusCode).toBe(400)
    })

    it('Should 200 if there is no data for valid user', async () => {
        let req = {
            params: {
                user_id: 'any_id'
            }
        }
        let res = null
        const { statusCode, body } = await sut.handle(req, res)
        expect(statusCode).toBe(200)
        expect(body.message).toBe('No projects yet')
    })


    it('Should 200 if fetch goes well', async () => {
        let req = {
            params: {
                user_id: 'id_with_activities'
            }
        }
        let res = null
        const { statusCode, body } = await sut.handle(req, res)
        expect(statusCode).toBe(200)        
        expect(body.length).toBe(1)        
        expect(body[0].activities.length).toBe(1)        
    })
})