import axios from './axios'

export default class EditTaskService {
    async handle(project_id, title, task_id) {
        return await axios.request({
            method: 'PATCH',
            url: `tasks/${project_id}`,
            data: { title, task_id }
        })
    }
}