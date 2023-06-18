import axios from 'axios'

const api = axios.create({
  baseURL: `https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation`,
})

api.interceptors.request.use(
  async (config) => {
    const token = 'HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF'
    config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
