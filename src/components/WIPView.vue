<template>
  <p>Work in progress!</p>
  <RouterLink :to="{ name: 'home' }">
    <button>Go back</button>
  </RouterLink>
  <BaseButton>test</BaseButton>
</template>

<script setup lang="ts">
import BaseButton from './BaseButton.vue';
</script>
