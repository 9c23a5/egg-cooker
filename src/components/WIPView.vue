<template>
  <p>Work in progress!</p>
  <button onmouseup="reportButton(e)">test</button>
</template>

<script setup lang="ts">
var reportButton = function (e) {
  // Handle different event models
  var e = e || window.event;
  var btnCode;

  if ('object' === typeof e) {
    btnCode = e.button;

    switch (btnCode) {
      case 3:
        console.log('Browser Back button clicked.');
        break;

      case 4:
        console.log('Browser Forward button clicked.');
        break;

      default:
        console.log('Unexpected code: ' + btnCode);
    }
  }
}

</script>
