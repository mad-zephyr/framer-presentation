import axios from 'axios'
import configFile from '../config.json'

const http = axios.create({
  baseURL: configFile.API_ENDPOINT
})

http.interceptors.request.use(
  async function (config) {

    config.params = { ...config.params, key: configFile.API_KEY }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const httpService = {
  get: http.get, 
}
export default httpService
