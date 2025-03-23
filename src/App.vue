<template>
  <TitleBar />
  <div>
    <Timers v-if="view === VIEWS.LIST" :timers="timers" @select="startTimer" />

    <Countdown v-else-if="view === VIEWS.COUNTDOWN && activeTimer" :timer="activeTimer" @reset="reset" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { timer_references } from './timer_references'
import Timers from './components/Timers.vue'
import Countdown from './components/Countdown.vue'
import TitleBar from './components/TitleBar.vue'

export default defineComponent({
  components: { Timers, Countdown, TitleBar },
  setup() {
    const VIEWS = {
      LIST: 'list',
      COUNTDOWN: 'countdown'
    } as const

    type ViewState = typeof VIEWS[keyof typeof VIEWS]

    const view = ref<ViewState>(VIEWS.LIST)
    const activeTimer = ref<typeof timer_references[number] | null>(null)

    function startTimer(timer: typeof timer_references[number]) {
      activeTimer.value = timer
      view.value = VIEWS.COUNTDOWN
    }

    function reset() {
      activeTimer.value = null
      view.value = VIEWS.LIST
    }

    return {
      view,
      VIEWS,
      timers: timer_references,
      activeTimer,
      startTimer,
      reset
    }
  }
})
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
