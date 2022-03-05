const User = require("../models/user.model")

module.exports = class MongoDbUserService {
    async save({ account, password }) {
        return await User.create({ account, password })
    }
}