<template>
  <button class="base-button" @mousedown="handleDown" @mouseup="handleUp" @mouseleave="handleUp" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { play } from '../audio_context.ts'
import { ref } from 'vue'

let isMouseDown = false

function isButtonDisabled(event: MouseEvent) {
  return (event.currentTarget as HTMLButtonElement)?.disabled
}

function handleDown(event: MouseEvent) {
  if (isButtonDisabled(event)) return

  isMouseDown = true
  play('mouse_down')
}

function handleUp(event: MouseEvent) {
  if (isButtonDisabled(event)) return
  if (!isMouseDown) return

  isMouseDown = false
  play('mouse_up')
}
</script>

<style scoped>
.base-button {
  -webkit-app-region: no-drag;
  cursor: pointer;
}

.base-button:disabled {
  cursor: default;

}
</style>
