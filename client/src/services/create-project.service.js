import axios from './axios'

export default class CreateProjectsService {
    async handle(userId, name) {
        return await axios.request({
            method: 'POST',
            url: `projects/${userId}`,
            data: { name }
        })
    }
}