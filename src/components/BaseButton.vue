<template>
  <button class="base-button" @mousedown="handleDown" @mouseup="handleUp" @mouseleave="handleUp" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { play } from '../audio_context.ts'

let isMouseDown = false

function handleDown() {
  isMouseDown = true
  play('mouse_down')
}

function handleUp() {
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
</style>
