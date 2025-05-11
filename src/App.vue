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
