<template>
  <div class="pet">
    <p>{{ route.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()

    return { route }
  }
})
</script>

<style scoped>
.pet {
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 0;
}
</style>