<template>
  <div>
    <p>
      Your egg is done!
    </p>

    <RouterLink :to="{ name: 'home' }">
      <BaseButton>Return to title screen</BaseButton>
    </RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount } from 'vue'
import { play_loop, stop_loop } from '../audio_context.ts'

export default defineComponent({
  setup() {
    play_loop('egg_done')

    onBeforeUnmount(() => {
      stop_loop('egg_done')
    })

    return {}
  }
})

</script>
