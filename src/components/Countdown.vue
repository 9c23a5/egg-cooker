<template>
  <div>
    <h1>{{ timer.name }}</h1>
    <p>
      Time left:
      {{ Math.floor(timeLeft / 60) }}:{{ (timeLeft % 60).toString().padStart(2, '0') }}
    </p>
    <RouterLink :to="{ name: 'countdown_done' }">
      <BaseButton @click="stopTimer()">[DEV] Manual stop</BaseButton>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { timer_reference_map } from '../timer_references'

export default defineComponent({
  setup() {
    const route = useRoute()
    const timerName = route.params.name as keyof typeof timer_reference_map
    const timer = timer_reference_map[timerName]

    const timeLeft = ref(timer.seconds)
    let interval: number

    function stopTimer() {
      clearInterval(interval)
    }

    watch(() => timer, () => {
      timeLeft.value = timer.seconds
    })

    interval = window.setInterval(() => {
      timeLeft.value--
      if (timeLeft.value <= 0) {
        stop()
      }
    }, 1000)

    onBeforeUnmount(stopTimer)

    return {
      timer,
      timeLeft,
      stopTimer
    }
  }
})
</script>
