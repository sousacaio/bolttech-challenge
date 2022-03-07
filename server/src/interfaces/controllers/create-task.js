module.exports = class CreateTaskController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        
        let { params: { project_id }, body: { name } } = req

        return await this.#projectsRepository.createTask(project_id, name)
    }
}