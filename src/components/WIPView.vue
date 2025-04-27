<template>
  <p>Work in progress!</p>
  <RouterLink :to="{ name: 'home' }">
    <BaseButton>Go back</BaseButton>
  </RouterLink>

  <ButtonGrid :items="menus" />

</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
import ButtonGrid from './ButtonGrid.vue';

const menus = [
  { label: 'Time an egg', routeName: 'timers' },
  { label: 'Cook rice', routeName: 'rice_cooker' },
  { label: 'Common ratios', routeName: 'ratios' },
  { label: 'Explore more', routeName: null }
]
</script>
