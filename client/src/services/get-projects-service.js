import axios from './axios'

export default class GetProjectsService {
    async handle(id) {
        return await axios.request({
            method: 'GET',
            url: `projects/${id}`,            
        })
    }
}