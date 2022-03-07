import axios from './axios'

export default class StatusTaskService {
    async handle(projectId, task_id) {
        return await axios.request({
            method: 'PATCH',
            url: `tasks/${projectId}/status`,
            data: { task_id }
        })
    }
}