<script setup lang="ts">
import Time from './TimeViewer.vue'

withDefaults(
  defineProps<{
    showModal: boolean
    color: string
    player: number
    time: {
      seconds: number
      tenths: number
    }
  }>(),
  {
    showModal: false,
    color: 'white',
    player: 0,
    time: () => ({
      seconds: 0,
      tenths: 0,
    }),
  },
)

const emit = defineEmits(['closeModal', 'nextPlayer'])
</script>

<template>
  <div class="modal no-selected" v-if="showModal">
    <div
      class="modal-content"
      :style="{
        backgroundColor: color,
      }"
    >
      <span class="close-btn" @dblclick.prevent="emit('closeModal')">X</span>
      <div class="content" @click="emit('nextPlayer')">
        <span class="player-title"> Jugador # {{ player }}</span>
        <Time :time="time" class="time" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}
.modal-content {
  width: 95%;
  height: 95%;
  border-radius: 30px;
  position: relative;
}
.content {
  cursor: pointer;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 5px #000000;
  color: white;
}

.player-title {
  font-size: 3rem;
  position: absolute;
  top: -10px;
  display: flex;
  justify-content: center;
  width: 100%;
  color: white;
  text-shadow: 0 0 5px #000000;
  z-index: 0;
}
.close-btn {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 35px;
  height: 35px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  z-index: 2;
}
</style>
