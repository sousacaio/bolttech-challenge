import axios from './axios'

export default class SignInService {
    async handle({ account, password }) {
        return await axios.request({
            method: 'POST',
            url: 'user/signin',
            data: {
                account,
                password
            },
        })
    }
}