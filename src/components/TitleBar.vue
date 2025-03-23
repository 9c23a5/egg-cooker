<template>
    <div class="titlebar" data-tauri-drag-region>
      <span class="title">Egg Cooker</span>
      <div class="window-controls">
        <button @click="close">×</button>
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
    height: 32px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    background: #1e1e1e;
    color: white;
    user-select: none;
  }
  
  .titlebar button {
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    padding: 0 8px;
    cursor: pointer;
  }
  
  [data-tauri-drag-region] {
    -webkit-app-region: drag;
  }
  
  button {
    -webkit-app-region: no-drag;
  }
  </style>
  