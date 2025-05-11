<template>
  <div>
    <div class="title_box">
      <h1 class="title">Welcome to Kitchen Buddy!</h1>
    </div>
    <Pet />
    <div class="interaction_box">
      <ButtonGrid :items="menus" />
    </div>
  </div>
</template>

<script setup lang="ts">

const menus = [
  { label: 'Egg Timer', routeName: 'timers' },
  { label: 'Cook Rice', routeName: null },
  { label: 'Ratios', routeName: null },
  { label: 'Explore', routeName: null }
]

</script>
