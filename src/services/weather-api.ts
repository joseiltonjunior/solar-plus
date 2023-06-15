import axios from 'axios'

export const weatherAPI = axios.create({
  baseURL: 'http:api.openweathermap.org/data/2.5',
  timeout: 20000,
})
