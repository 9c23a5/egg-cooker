<template>
  <div>
    <div class="title_box">
      <h1 class="title">Your {{ timer.name }} Egg<br />is ready in</h1>
    </div>
    <Pet />
    <div class="interaction_box">
      <p class="timer">
        {{ Math.floor(timeLeft / 60) }}:{{ (timeLeft % 60).toString().padStart(2, '0') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, onBeforeUnmount, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useRouter } from 'vue-router'
import { timer_reference_map } from '../timer_references'
import { play_loop, stop_loop } from '../audio_context.ts'

const route = useRoute()
const router = useRouter()

const timerName = route.params.egg_name as keyof typeof timer_reference_map
const timer = timer_reference_map[timerName]

const timer_complete_route = {
  name: 'countdown_done',
  params: { egg_name: timer.name }
}

const timeLeft = ref(timer.seconds)
let interval: number

function stopTimer() {
  clearInterval(interval)
  stop_loop('egg_cooking')
}

watch(() => timer, () => {
  timeLeft.value = timer.seconds
})

play_loop('egg_cooking')
interval = window.setInterval(() => {
  timeLeft.value--
  if (timeLeft.value < 0) {
    stopTimer()
    router.push(timer_complete_route)
  }
}, 1000)

onBeforeUnmount(stopTimer)
</script>

<style scoped>
.timer {
  font-size: 111px;
  text-shadow: 4px 4px 1px black;

}

.interaction_box {
  justify-content: center;
}
</style>
