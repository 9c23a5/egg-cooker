<template>
  <div class="titlebar" data-tauri-drag-region>
    <span class="title">Egg Cooker</span>
    <div class="window-controls" @click="close">
      <div class="close-button"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const win = getCurrentWindow()

function close() {
  win.close()
}
</script>

<style scoped>
.titlebar {
  height: 48px;
  /* increased from 32px */
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e1e1e;
  color: white;
  user-select: none;
}

.title {
  padding-left: 12px;
  font-size: 16px;
  line-height: 1;
}

.window-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  -webkit-app-region: no-drag;
}

.close-button {
  width: 48px;
  height: 48px;
  background-image: url('/close.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  -webkit-app-region: no-drag;
}

[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
</style>
