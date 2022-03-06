const { default: mongoose } = require("mongoose")
const Projects = require("../models/projects.model")

module.exports = class MongoDbProjectsService {
    async findProjectsByUserId(user_id) {
        return await Projects.find({ createdBy: user_id })
    }
    async createProject(user_id, name) {
        return await Projects.create({
            createdBy: mongoose.Types.ObjectId(user_id),
            name
        })
    }
    async deleteProject(project_id) {
        const deletion = await Projects.deleteOne({ _id: project_id })
        return deletion
    }

    async updateProject(project_id, name) {
        return await Projects.findOneAndUpdate({ _id: project_id }, { name }, { returnOriginal: false })
    }
}