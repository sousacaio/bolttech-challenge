const CreateProjectController = require("../../interfaces/controllers/create-project")
const DeleteProjectController = require("../../interfaces/controllers/delete-project")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeDeleteProjectsController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)    
    const controller = new DeleteProjectController(projectRepository)
    return controller.handle(req, res)
}