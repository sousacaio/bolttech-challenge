const DeleteTaskController = require("../../interfaces/controllers/delete-task.controller")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeDeleteTaskController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new DeleteTaskController(projectRepository)
    return controller.handle(req, res)
}