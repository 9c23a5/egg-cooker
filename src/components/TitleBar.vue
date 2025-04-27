<template>
  <div class="titlebar" data-tauri-drag-region>
    <div class="title">
      <BaseButton>Shop</BaseButton>
    </div>
    <div class="window-controls">
      <BaseButton id="minimize-button" class="window-button" @click="minimize"></BaseButton>
      <BaseButton id="close-button" class="window-button" @click="close"></BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'

const win = getCurrentWindow()

function close() {
  win.close()
}

function minimize() {
  win.minimize()
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
  gap: 2px;
  padding: 6px;
}

.window-button {
  width: 36px;
  height: 36px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;
  background-color: transparent;
  border: 0;
}

#close-button {
  background-image: url('/images/title_bar/close.png');
}

#minimize-button {
  /* background-image: url('/images/title_bar/minimize.png'); */
  background-color: red;
}

[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
</style>
