<template>
  <div class="pet">
    <img :src="petImage" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { petByRoute, DEFAULT_PET } from './pet_config'

export default defineComponent({
  setup() {
    const route = useRoute()
    const petImage = computed(() => {
      if (typeof route.name !== 'string') return DEFAULT_PET

      return petByRoute[route.name] ?? DEFAULT_PET
    })

    return { route, petImage }
  }
})
</script>

<style scoped>
.pet {
  text-align: center;
}
</style>
