<script setup lang="ts">
import PlayIcon from './icons/PlayIcon.vue'
const emits = defineEmits(['play'])

const handlePlay = () => {
  emits('play')
}
</script>
<template>
  <div class="playBtn" @click="handlePlay">
    <PlayIcon style="width: 48px" />
  </div>
</template>
<style scoped>
.playBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  min-height: 100px;
  cursor: pointer;
  background-color: #09e122;
  border-radius: 50%;
}
</style>
