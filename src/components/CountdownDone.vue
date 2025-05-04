<template>
  <div>
    <h1 class="title">{{ eggName }}</h1>
    <Pet />
    <h1>Your egg is done!</h1>

    <RouterLink :to="{ name: 'home' }">
      <BaseButton>Return to title screen</BaseButton>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { play_loop, stop_loop } from '../audio_context.ts'

const route = useRoute()
const eggName = route.params.name as string

play_loop('egg_done')

onBeforeUnmount(() => {
  stop_loop('egg_done')
})

</script>
