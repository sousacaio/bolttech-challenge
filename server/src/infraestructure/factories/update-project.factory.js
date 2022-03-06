const UpdateProjectController = require("../../interfaces/controllers/update-project")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeUpdateProjectsController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new UpdateProjectController(projectRepository)
    return controller.handle(req, res)
}