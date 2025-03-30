<template>
  <div>
    <h1>Choose a timer</h1>
    <div v-for="timer in timers" :key="timer.name">
      <button @click="selectTimer(timer)">
        {{ timer.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { timer_references } from '../timer_references'


export default defineComponent({
  emits: ['select'],
  setup() {
    const router = useRouter()
    const timers = timer_references

    function selectTimer(timer: typeof timer_references[number]) {
      router.push({ name: 'countdown', state: { timer } })
    }

    return { timers, selectTimer }
  }
})
</script>
