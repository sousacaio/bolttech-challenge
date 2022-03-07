const EditTaskController = require("../../interfaces/controllers/edit-task.controller")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeEditTaskController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new EditTaskController(projectRepository)
    return controller.handle(req, res)
}