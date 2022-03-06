const { badRequest, ok } = require('../helpers/http-helpers')
module.exports = class CreateProjectController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        let { params: { user_id }, body: { name } } = req
        return await this.#projectsRepository.createProject(user_id, name)
    }
}