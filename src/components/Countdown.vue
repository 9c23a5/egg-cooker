<template>
  <div>
    <h1>{{ timer.name }}</h1>
    <p>
      Time left:
      {{ Math.floor(timeLeft / 60) }}:{{ (timeLeft % 60).toString().padStart(2, '0') }}
    </p>

    <div v-if="isDev">
      <RouterLink :to="{ name: 'countdown_done' }">
        <BaseButton @click="stopTimer()">[DEV] Manual stop</BaseButton>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { timer_reference_map } from '../timer_references'

export default defineComponent({
  setup() {
    const isDev = import.meta.env.MODE === 'development'

    const route = useRoute()
    const router = useRouter()
    const timerName = route.params.name as keyof typeof timer_reference_map
    const timer = timer_reference_map[timerName]

    const timeLeft = ref(timer.seconds)
    let interval: number

    function stopTimer() {
      clearInterval(interval)
      router.push({ name: 'countdown_done' })
    }

    watch(() => timer, () => {
      timeLeft.value = timer.seconds
    })

    interval = window.setInterval(() => {
      timeLeft.value--
      if (timeLeft.value < 0) {
        stopTimer()
      }
    }, 1000)

    onBeforeUnmount(stopTimer)

    return {
      isDev,
      timer,
      timeLeft,
      stopTimer
    }
  }
})
</script>
