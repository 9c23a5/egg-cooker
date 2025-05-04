<template>
  <TitleBar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Pet from './Pet.vue'
import TitleBar from './components/TitleBar.vue'

export default defineComponent({
  components: { TitleBar, Pet },
})
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: calc(400px - 16px);
  height: 100%;
  background-color: #ffcd32;
  user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

#app {
  padding-left: 8px;
  padding-right: 8px;
}

body,
button {
  font-family: 'Cute Mono', sans-serif;
  font-size: 22px;
  line-height: 30px;
}

button {
  font-size: 50%;
  line-height: 15px;
}

h1 {
  font-size: 200%;
  line-height: 40px;
  font-weight: normal;
  margin: 5px;
}

.title {
  text-align: center;
}

@font-face {
  font-family: 'Cute Mono';
  src: url('/fonts/retro-pixel-cute-mono.woff2') format('woff2'),
}
</style>
