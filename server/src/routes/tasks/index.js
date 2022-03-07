const routes = require('express').Router()
const { makeCreateTaskController } = require('../../infraestructure/factories/create-task.factory')
const { makeEditTaskStatusController } = require('../../infraestructure/factories/edit-task-status.factory')
const { makeEditTaskController } = require('../../infraestructure/factories/edit-task.factory')
const { makeDeleteTaskController } = require('../../infraestructure/factories/delete-task.status.factory')

routes.post('/:project_id', async (req, res) => {
    let { statusCode, body } = await makeCreateTaskController(req, res)
    return res.status(statusCode).json(body)
})

routes.patch('/:project_id/status', async (req, res) => {
    let { statusCode, body } = await makeEditTaskStatusController(req, res)
    return res.status(statusCode).json(body)
})

routes.patch('/:project_id', async (req, res) => {
    let { statusCode, body } = await makeEditTaskController(req, res)
    return res.status(statusCode).json(body)
})

routes.delete('/:project_id', async (req, res) => {
    let { statusCode, body } = await makeDeleteTaskController(req, res)
    return res.status(statusCode).json(body)
})

module.exports = routes