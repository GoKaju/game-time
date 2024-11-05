<script setup lang="ts">
defineProps<{
  time: {
    seconds: number
    tenths: number
  }
}>()
</script>

<template>
  <div class="container">
    <span class="seconds">{{ time.seconds }}.</span>
    <span class="milliseconds">{{ time.tenths }}</span>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

span.seconds {
  font-size: 12rem;
}

span.milliseconds {
  font-size: 6rem;
}
</style>
