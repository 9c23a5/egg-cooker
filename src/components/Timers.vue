<template>
  <div>
    <h1>Choose a timer</h1>
    <div v-for="timer in timers" :key="timer.name">
      <RouterLink :to="{ name: 'countdown', params: { name: timer.name } }">
        {{ timer.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { timer_references } from '../timer_references'

export default defineComponent({
  setup() {
    const timers = timer_references

    return { timers }
  }
})
</script>
