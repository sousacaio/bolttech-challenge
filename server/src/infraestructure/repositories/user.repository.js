const { badRequest, ok } = require('../../interfaces/helpers/http-helpers')
module.exports = class UserRepository {

    #dbProvider

    constructor(dbProvider) {
        this.#dbProvider = dbProvider
    }

    async save({ account, password }) {
        return await this.#dbProvider.save({ account, password })
    }

    async login({ account, password }) {
        const hasAccount = await this.#dbProvider.findByAccount(account)

        if (!hasAccount) {
            return badRequest({ message: 'Account does not exists' })
        }

        if (hasAccount.password !== password) {
            return badRequest({ message: 'Wrong credentials given' })
        }

        return ok(hasAccount)
    }

    async findProjectsById(id) {
        const hasProjects = await this.#dbProvider.findProjectsById(id)
        
        if (!hasProjects) {
            return ok({ message: 'No projects yet' })
        }

        return ok(hasProjects)
    }
}