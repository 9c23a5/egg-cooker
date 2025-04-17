<template>
  <button class="base-button" @mousedown="handleDown" @mouseup="handleUp" @mouseleave="handleUp" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { play } from '../audioContext.ts'

let isMouseDown = false

function handleDown() {
  isMouseDown = true
  play('down')
}

function handleUp() {
  if (!isMouseDown) return
  isMouseDown = false
  play('up')
}
</script>

<style scoped>
.base-button {
  cursor: pointer;
  color: red;
}
</style>
