<template>
  <div class="button-grid">
    <div v-for="item in items" :key="item.label" class="button-wrapper">
      <RouterLink v-if="item.routeName" :to="{ name: item.routeName, params: item.params }">
        <BaseButton>{{ item.label }}</BaseButton>
      </RouterLink>
      <BaseButton v-else>{{ item.label }}</BaseButton>
    </div>
  </div>
</template>


<script setup lang="ts">
import BaseButton from './BaseButton.vue'
import { RouterLink } from 'vue-router'
import type { RouteParamsRawGeneric } from 'vue-router'

defineProps<{
  items: {
    label: string
    routeName: string | null,
    params: RouteParamsRawGeneric | undefined
  }[]
}>()
</script>


<style scoped>
.button-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 1rem;
  row-gap: 2rem;
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
}

.button-wrapper {
  flex: 0 0 calc(50% - 0.5rem);
  display: flex;
  justify-content: center;
}
</style>
