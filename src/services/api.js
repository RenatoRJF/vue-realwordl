import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/RenatoRJF/tv-maze-mocked-db',
  headers: {
    accept: 'application/json',
    contentType: 'application/json',
  },
})

export default apiClient
