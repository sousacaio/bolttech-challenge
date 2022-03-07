const CreateTaskController = require("../../interfaces/controllers/create-task")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeCreateTaskController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new CreateTaskController(projectRepository)
    return controller.handle(req, res)
}