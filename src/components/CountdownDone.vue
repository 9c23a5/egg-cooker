<template>
  <div>
    <p>
      Your egg is done!
    </p>

    <RouterLink :to="{ name: 'home' }">
      <BaseButton>Return to title screen</BaseButton>
    </RouterLink>
  </div>

</template>
