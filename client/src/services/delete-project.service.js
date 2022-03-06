import axios from './axios'

export default class DeleteProjectService {
    async handle(project_id) {
        return await axios.request({
            method: 'DELETE',
            url: `projects/${project_id}`,            
        })
    }
}