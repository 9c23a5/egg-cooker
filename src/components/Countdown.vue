<template>
    <div>
      <h2>{{ timer.name }}</h2>
      <img :src="timer.image" :alt="timer.name" width="100" />
      <p>
        Time left:
        {{ Math.floor(timeLeft / 60) }}:
        {{ (timeLeft % 60).toString().padStart(2, '0') }}
      </p>
      <button @click="$emit('reset')">Back</button>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType, watch, onBeforeUnmount, ref } from 'vue'
  
  export default defineComponent({
    props: {
      timer: {
        type: Object as PropType<{ name: string, seconds: number, image: string }>,
        required: true
      }
    },
    emits: ['reset'],
    setup(props) {
      const timeLeft = ref(props.timer.seconds)
      let interval: number
  
      function stop() {
        clearInterval(interval)
      }
  
      watch(() => props.timer, () => {
        timeLeft.value = props.timer.seconds
      })
  
      interval = window.setInterval(() => {
        timeLeft.value--
        if (timeLeft.value <= 0) {
          stop()
          alert("Time's up!")
        }
      }, 1000)
  
      onBeforeUnmount(stop)
  
      return {
        timeLeft
      }
    }
  })
  </script>