module.exports = class UserRepository {

    #dbProvider

    constructor(dbProvider) {
        this.#dbProvider = dbProvider
    }
    
    async save({ account, password }) {
        return await this.#dbProvider.save({ account, password })
    }
}