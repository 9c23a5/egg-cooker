<template>
  <div>
    <h1 class="title">Welcome to Kitchen Buddy!</h1>
    <Pet />
    <ButtonGrid :items="menus" />
  </div>
</template>

<script setup lang="ts">
const isDev = import.meta.env.MODE === 'development'

const menus = [
  { label: 'Egg Timer', routeName: 'timers' },
  { label: 'Cook Rice', routeName: null },
  { label: 'Ratios', routeName: null },
]

if (isDev) {
  menus.push({ label: 'wip_view', routeName: 'wip_view' })
} else {
  menus.push({ label: 'Explore', routeName: null })
}
</script>
