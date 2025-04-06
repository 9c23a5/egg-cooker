<template>
  <div>
    <h1>Choose a timer</h1>
    <div v-for="timer in timers" :key="timer.name">
      <RouterLink :to="{ name: 'countdown', params: { name: timer.name } }">
        <button>
          {{ timer.name }}
        </button>
      </RouterLink>
    </div>

    <RouterLink :to="{ name: 'home' }">
      <button>Return to title screen</button>
    </RouterLink>
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
