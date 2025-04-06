<template>
  <div>
    <p>
      Your egg is done!
    </p>

    <RouterLink :to="{ name: 'home' }">
      <button>Return to title screen</button>
    </RouterLink>
  </div>

</template>
