import axios from 'axios'
import { Settings } from './settings'

axios.defaults.baseURL = Settings.backend_endpoint

export default axios