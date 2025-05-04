<template>
  <p>Work in progress!</p>

  <ButtonGrid :items="menus" />

</template>

<script setup lang="ts">
import ButtonGrid from './ButtonGrid.vue';

const menus = [
  { label: 'Time an egg', routeName: 'timers' },
  { label: 'Cook rice', routeName: null },
  { label: 'Common ratios', routeName: null },
  { label: 'Explore more', routeName: null }
]
</script>
