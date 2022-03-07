const { badRequest, ok } = require('../helpers/http-helpers')
module.exports = class UpdateTaskStatusController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        
        let { params: { project_id }, body: { task_id } } = req

        return await this.#projectsRepository.updateTaskStatus(project_id, task_id)
    }
}