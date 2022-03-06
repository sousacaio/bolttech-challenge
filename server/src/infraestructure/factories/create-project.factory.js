const CreateProjectController = require("../../interfaces/controllers/create-project")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeCreateProjectsController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new CreateProjectController(projectRepository)
    return controller.handle(req, res)
}