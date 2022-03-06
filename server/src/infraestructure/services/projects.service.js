const Projects = require("../models/projects.model")

module.exports = class MongoDbProjectsService {
    async findProjectsByUserId(user_id) {
        return await Projects.find({ createdBy: user_id })
    }
}