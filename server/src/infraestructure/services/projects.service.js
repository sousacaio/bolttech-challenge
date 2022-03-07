const { default: mongoose } = require("mongoose")
const { findOne } = require("../models/projects.model")
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

    async createTask(project_id, name) {
        return await Projects.findOneAndUpdate({ _id: project_id }, {
            $push: {
                tasks: {
                    title: name,
                    status: false
                }
            }
        }, { returnOriginal: false })
    }

    async createTask(project_id, name) {
        return await Projects.findOneAndUpdate({ _id: project_id }, {
            $push: {
                tasks: {
                    title: name,
                    status: false
                }
            }
        }, { returnOriginal: false })
    }

    async updateTaskStatus(project_id, task_id) {
        return await Projects.findOneAndUpdate({ _id: project_id, "tasks._id": task_id }, {
            $set: {
                "tasks.$.status": true,
                "tasks.$.terminationDate": new Date(),
            }
        }, { returnOriginal: false })
    }

    async editTask(project_id, title, task_id) {
        return await Projects.findOneAndUpdate({ _id: project_id, "tasks._id": task_id }, {
            $set: {
                "tasks.$.title": title,
            }
        }, { returnOriginal: false })
    }
    async deleteTask(project_id, task_id) {
        
        await Projects.updateOne({ _id: project_id }, {
            $pull: {
                tasks: {
                    _id: task_id
                }
            }
        })

        return await Projects.findById({ _id: project_id })
    }
}