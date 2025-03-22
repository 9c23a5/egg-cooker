<template>
  <div>
    <h1>Choose a timer</h1>
    <div v-for="timer in timers" :key="timer.name">
      <button @click="$emit('select', timer)">
        <img :src="timer.image" :alt="timer.name" width="50" />
        {{ timer.name }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { timer_references } from '../timer_references'

export default defineComponent({
  props: {
    timers: {
      type: Array as PropType<typeof timer_references>,
      required: true
    }
  }
})
</script>
