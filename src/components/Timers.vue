<template>
  <div>
    <h1 class="title">Time an egg</h1>
    <Pet />
    <h1>Choose your egg type!</h1>
    <ButtonGrid :items="timer_links" />
  </div>
</template>

<script setup lang="ts">
import { timer_references } from '../timer_references'

// countdown takes the egg timer name as a param
const timer_links = timer_references.map((timer_ref) => ({
  label: timer_ref.name,
  routeName: "countdown",
  params: { egg_name: timer_ref.name },
}));
console.log(timer_links)
</script>
