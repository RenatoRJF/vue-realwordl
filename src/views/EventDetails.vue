<template>
  <div class="event-details" v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventSerivce.js'

export default {
  name: 'EventDetails',
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    EventService.getEvent(this.id)
      .then(({ data }) => {
        this.event = data
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>
