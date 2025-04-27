<template>
  <div class="titlebar" data-tauri-drag-region>
    <div class="title">
      <BaseButton>Shop</BaseButton>
    </div>
    <div class="window-controls" @click="close">
      <BaseButton class="close-button"></BaseButton>
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: inherit;
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
}

.close-button {
  width: 48px;
  height: 48px;
  background-image: url('/images/title_bar/close.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
}

[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
</style>
