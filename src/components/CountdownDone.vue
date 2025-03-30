<template>
  <div>
    <p>
      Your egg is done!
    </p>

    <button @click="backToHome()">Return to title screen</button>
  </div>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()

    function backToHome() {
      router.push({ name: 'home' })
    }

    return {
      backToHome
    }
  }
})
</script>