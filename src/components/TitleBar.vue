<template>
  <div class="titlebar" data-tauri-drag-region>
    <div class="left-controls">
      <div v-if="allowBack">
        <BaseButton id="back-button" class="window-button" @click="goBack"></BaseButton>
      </div>
    </div>
    <div class="title">
      <BaseButton>Shop</BaseButton>
    </div>
    <div class="right-controls">
      <BaseButton id="minimize-button" class="window-button" @click="minimize"></BaseButton>
      <BaseButton id="close-button" class="window-button" @click="close"></BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCurrentWindow } from '@tauri-apps/api/window'
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const win = getCurrentWindow()

const noBackRoutes = ['home', 'countdown_done'] as const

const allowBack = computed(() => {
  if (typeof route.name !== 'string') return true
  return !noBackRoutes.includes(route.name as typeof noBackRoutes[number])
})

function goBack() {
  allowBack && router.back()
}

function close() {
  win.close()
}

function minimize() {
  win.minimize()
}
</script>

<style scoped>
.titlebar {
  display: flex;
  position: relative;
  height: 48px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  user-select: none;
}

.title {
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 1;
}

.left-controls,
.right-controls {
  display: flex;
  align-items: center;
  height: 100%;
  gap: 4px;
}

.left-controls {
  padding-left: 4px;
}

.right-controls {
  padding-right: 4px;
}

.window-button {
  width: 34px;
  height: 34px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: transparent;
  border: 0;
  padding: 0;
}

#back-button {
  background-image: url('/images/title_bar/back.png');
}

#close-button {
  background-image: url('/images/title_bar/close.png');
}

#minimize-button {
  background-image: url('/images/title_bar/minimize.png');
}

[data-tauri-drag-region] {
  -webkit-app-region: drag;
}
</style>
