<template>
  <div>
    <h2>{{ timer.name }}</h2>
    <p>
      Time left:
      {{ Math.floor(timeLeft / 60) }}:{{ (timeLeft % 60).toString().padStart(2, '0') }}
    </p>
    <button @click="stop()">Manual stop</button>
    <button @click="reset()">Back</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, onBeforeUnmount, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { TimerReference } from '../timer_references'

export default defineComponent({
  setup() {
    const router = useRouter()
    const timer = ref(history.state.timer as TimerReference)
    const timeLeft = ref(timer.value.seconds)
    let interval: number


    function stopTimer() {
      clearInterval(interval)
    }

    function stop() {
      stopTimer()
      router.push({ name: 'countdown_done' })
    }

    function reset() {
      stopTimer()
      router.push({ name: 'home' })
    }


    watch(() => timer, () => {
      timeLeft.value = timer.value.seconds
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
      stop,
      reset
    }
  }
})
</script>