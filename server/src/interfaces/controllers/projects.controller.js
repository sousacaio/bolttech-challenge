const { badRequest, ok } = require('../helpers/http-helpers')
module.exports = class ProjectsController {

    #validator
    #projectsRepository

    constructor(validator, projectsRepository) {
        this.#validator = validator
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {

        const validation = this.#validator.handle(req.params)

        if (validation.statusCode !== 200) {
            return badRequest({ message: validation.message })
        }
        return await this.#projectsRepository.findProjectsById(req.params.user_id)
    }
}