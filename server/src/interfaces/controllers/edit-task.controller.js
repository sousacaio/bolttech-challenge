module.exports = class EditTaskController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {

        let { params: { project_id }, body: { title, task_id } } = req

        return await this.#projectsRepository.editTask(project_id, title, task_id)
    }
}