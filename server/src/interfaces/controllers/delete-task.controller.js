module.exports = class DeleteTaskController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        let { params: { project_id }, body: { task_id } } = req            
        return await this.#projectsRepository.deleteTask(project_id, task_id)
    }
}