<template>
  <div>
    <h1 class="title">Choose your next cooking adventure!</h1>
    <div v-for="[label, routeName] in menus" :key="label">
      <template v-if="routeName">
        <RouterLink :to="{ name: routeName }">
          <BaseButton>{{ label }}</BaseButton>
        </RouterLink>
      </template>
      <template v-else>
        <BaseButton>{{ label }}</BaseButton>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const menus: [string, string | null][] = [
      ["Time an egg", "timers"],
      ["Cook rice", "rice_cooker"],
      ["Common ratios", "ratios"],
      ["Explore more", null]
    ]

    return { menus }
  }
})
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
