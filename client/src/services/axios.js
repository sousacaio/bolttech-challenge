import axios from 'axios'
import { Settings } from './settings'

axios.defaults.baseURL = Settings.backend_endpoint

axios.interceptors.response.use(
    (response) => { return response },
    async (error) => {
        if (error?.response?.status === 400) {
            alert(error.response.data.message)            
        }        
    }
);

export default axios