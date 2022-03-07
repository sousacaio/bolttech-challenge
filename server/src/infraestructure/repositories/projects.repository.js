const { ok } = require('../../interfaces/helpers/http-helpers')
module.exports = class ProjectsRepository {

    #dbProvider

    constructor(dbProvider) {
        this.#dbProvider = dbProvider
    }

    async findProjectsById(id) {
        const hasProjects = await this.#dbProvider.findProjectsByUserId(id)

        if (hasProjects?.length === 0) {
            return ok([])
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

    async updateProject(project_id, name) {
        const project = await this.#dbProvider.updateProject(project_id, name)
        return ok(project)
    }
    async createTask(project_id, name) {
        const project = await this.#dbProvider.createTask(project_id, name)
        return ok(project)
    }
    async updateTaskStatus(project_id, task_id) {
        const project = await this.#dbProvider.updateTaskStatus(project_id, task_id)
        return ok(project)
    }
    async editTask(project_id, title, task_id) {
        const project = await this.#dbProvider.editTask(project_id, title, task_id)
        return ok(project)
    }
    async deleteTask(project_id, task_id) {
        const project = await this.#dbProvider.deleteTask(project_id, task_id)
        return ok(project)
    }
}