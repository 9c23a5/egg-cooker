<template>
  <p>Work in progress!</p>
  <RouterLink :to="{ name: 'home' }">
    <button>Go back</button>
  </RouterLink>
  <button @mousedown="playDown" @mouseup="playUp" @mouseleave="playUp">test</button>
  <audio controls>
    <source src="/sounds/mouse_down.ogg" type="audio/ogg">
  </audio>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audioContext = new AudioContext()
let downBuffer: AudioBuffer | null = null
let upBuffer: AudioBuffer | null = null

// Loads and decodes a single audio file into a buffer
async function loadSound(url: string): Promise<AudioBuffer> {
  const res = await fetch(url)
  const arrayBuffer = await res.arrayBuffer()
  return audioContext.decodeAudioData(arrayBuffer)
}

// Play a buffer using AudioContext
function play(buffer: AudioBuffer | null) {
  if (!buffer) return
  const source = audioContext.createBufferSource()
  source.buffer = buffer
  source.connect(audioContext.destination)
  source.start()
}

const isMouseDown = ref(false)

const playDown = () => {
  isMouseDown.value = true
  play(downBuffer)
}

const playUp = () => {
  if (!isMouseDown.value) return
  isMouseDown.value = false
  play(upBuffer)
}

onMounted(async () => {
  // Preload both sound files
  downBuffer = await loadSound('/sounds/mouse_down.ogg')
  upBuffer = await loadSound('/sounds/mouse_up.ogg')
})
</script>
