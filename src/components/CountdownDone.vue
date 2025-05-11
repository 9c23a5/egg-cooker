<template>
  <div>
    <div class="title_box">
      <h1 class="title">Your {{ eggName }} Egg<br />is done!</h1>
    </div>
    <Pet />
    <div class="interaction_box">
      <RouterLink :to="{ name: 'home' }">
        <BaseButton>Return to<br />Title Screen</BaseButton>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { play_loop, stop_loop } from '../audio_context.ts'

const route = useRoute()
const eggName = route.params.egg_name as string

play_loop('egg_done')

onBeforeUnmount(() => {
  stop_loop('egg_done')
})

</script>

<style scoped>
button {
  width: 223px;
  height: 77px;
  font-size: 28px;
  line-height: 28px;
}

.interaction_box {
  justify-content: center;
}
</style>
