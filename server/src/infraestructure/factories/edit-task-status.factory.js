const CreateTaskController = require("../../interfaces/controllers/create-task")
const UpdateTaskStatusController = require("../../interfaces/controllers/status-task")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeEditTaskStatusController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new UpdateTaskStatusController(projectRepository)
    return controller.handle(req, res)
}