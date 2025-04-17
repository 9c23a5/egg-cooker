<template>
  <div>
    <h1>Choose a timer</h1>
    <div v-for="timer in timers" :key="timer.name">
      <RouterLink :to="{ name: 'countdown', params: { name: timer.name } }">
        <BaseButton>
          {{ timer.name }}
        </BaseButton>
      </RouterLink>
    </div>

    <RouterLink :to="{ name: 'home' }">
      <BaseButton>Return to title screen</BaseButton>
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
