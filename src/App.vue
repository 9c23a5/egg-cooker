<template>
  <TitleBar />
  <Pet />
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
  width: 100%;
  height: 100%;
  background-color: #fff09f;
}
</style>
