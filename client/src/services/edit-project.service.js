import axios from './axios'

export default class EditProjectService {
    async handle(name, project_id) {
        return await axios.request({
            method: 'PATCH',
            url: `projects/${project_id}`,
            data: { name }
        })
    }
}