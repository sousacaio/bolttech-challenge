module.exports = class UpdateProjectController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        let { params: { project_id }, body: { name } } = req
        return await this.#projectsRepository.updateProject(project_id, name)
    }
}