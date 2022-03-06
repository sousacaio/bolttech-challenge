module.exports = class DeleteProjectController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        let { params: { project_id } } = req        
        return await this.#projectsRepository.deleteProject(project_id)
    }
}