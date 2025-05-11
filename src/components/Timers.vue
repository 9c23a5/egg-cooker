<template>
  <div>
    <div class="title_box">
      <h1 class="title">Time an egg</h1>
    </div>
    <Pet />

    <div class="interaction_box">
      <!-- <p>Choose your egg type!</p> -->
      <ButtonGrid :items="timer_links" />
    </div>
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
</script>
