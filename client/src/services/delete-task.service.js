import axios from './axios'

export default class DeleteTaskService {
    async handle(project_id, task_id) {
        return await axios.request({
            method: 'DELETE',
            url: `tasks/${project_id}`,
            data: { task_id }
        })
    }
}