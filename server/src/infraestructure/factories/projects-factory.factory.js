const ProjectsController = require("../../interfaces/controllers/projects.controller")
const ProjectsValidator = require("../../validation/projects")
const ProjectsRepository = require("../repositories/projects.repository")
const MongoDbProjectsService = require("../services/projects.service")

exports.makeProjectsController = (req, res) => {
    const dbProvider = new MongoDbProjectsService()
    const projectRepository = new ProjectsRepository(dbProvider)
    const validator = new ProjectsValidator()
    const controller = new ProjectsController(validator,projectRepository)
    return controller.handle(req, res)
}