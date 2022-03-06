const { ok } = require('../../interfaces/helpers/http-helpers')
module.exports = class ProjectsRepository {

    #dbProvider

    constructor(dbProvider) {
        this.#dbProvider = dbProvider
    }

    async findProjectsById(id) {
        const hasProjects = await this.#dbProvider.findProjectsByUserId(id)

        if (hasProjects?.length === 0) {
            return ok({ message: 'No projects yet' })
        }

        return ok(hasProjects)
    }
    async createProject(id, name) {
        const project = await this.#dbProvider.createProject(id, name)

        return ok(project)
    }

    async deleteProject(project_id) {        
        const project = await this.#dbProvider.deleteProject(project_id)

        return ok(project)
    }
}