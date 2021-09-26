import api from './api'

export default {
  getEvents() {
    return api.get('/events')
  },
  getEvent(id) {
    return api.get(`/events/${id}`)
  },
}
