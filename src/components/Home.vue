<template>
  <div>
    <h1 class="title">Welcome to kitchen helper app</h1>
    <Pet />
    <h1>Choose your next cooking adventure!</h1>
    <ButtonGrid :items="menus" />
  </div>
</template>

<script setup lang="ts">
const isDev = import.meta.env.MODE === 'development'

const menus = [
  { label: 'Time an egg', routeName: 'timers' },
  { label: 'Cook rice', routeName: null },
  { label: 'Common ratios', routeName: null },
]

if (isDev) {
  menus.push({ label: 'wip_view', routeName: 'wip_view' })
} else {
  menus.push({ label: 'Explore more', routeName: null })
}
</script>

<style scoped>
.title {
  text-align: center;
}
</style>
