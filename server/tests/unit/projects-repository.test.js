const ProjectsRepository = require("../../src/infraestructure/repositories/projects.repository")

describe('Projects repository', () => {
    class FakeDbProvider {
        async findProjectsByUserId(id) {
            if (id === 'id_with_activities') {
                return Promise.resolve([{
                    name: 'Project name',
                    task: [
                        {
                            id: 'activitie_id',
                            name: 'activie 1',
                            status: false
                        }
                    ]
                }])
            }
            return Promise.resolve([])
        }
    }

    const fakeDbProvider = new FakeDbProvider()

    const sut = new ProjectsRepository(fakeDbProvider)

    it('Should projects data if user has projects', async () => {        
        const { statusCode,body } = await sut.findProjectsById('id_with_activities')
        expect(statusCode).toBe(200)        
        expect(body[0].name).toBe('Project name')
        expect(body[0].task.length).toBe(1)
    })

    it('Should projects data if user has projects', async () => {    
        const { statusCode,body } = await sut.findProjectsById('id_with_activities')
        expect(statusCode).toBe(200)        
        expect(body[0].name).toBe('Project name')
        expect(body[0].task.length).toBe(1)
    })
    
    it('Should return no projects message if user has no projects yet', async () => {        
        const { statusCode,body } = await sut.findProjectsById('any_id')
        expect(statusCode).toBe(200)
        expect(body.message).toBe('No projects yet')
    })
})