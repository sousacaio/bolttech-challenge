const { badRequest, ok } = require('../helpers/http-helpers')
module.exports = class CreateProjectController {

    #projectsRepository

    constructor(projectsRepository) {
        this.#projectsRepository = projectsRepository
    }

    async handle(req, res) {
        
        let { params: { user_id }, body: { name } } = req
        console.log(name)
        console.log(user_id)
        return await this.#projectsRepository.createProject(user_id, name)
    }
}