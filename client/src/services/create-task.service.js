import axios from './axios'

export default class CreateTaskService {
    async handle(projectId, name) {
        return await axios.request({
            method: 'POST',
            url: `tasks/${projectId}`,
            data: { name }
        })
    }
}