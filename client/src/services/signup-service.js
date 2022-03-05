import axios from './axios'

export default class SignUpService {
    async handle({ account, password }) {
        return await axios.request({
            method: 'POST',
            url: 'user/signup',
            data: {
                account,
                password
            },
        })
    }
}