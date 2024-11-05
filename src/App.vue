<script setup lang="ts">
import PlayButton from './components/PlayButton.vue'
import PlayModal from './components/PlayModal.vue'
import TimerIcon from './components/icons/TimerIcon.vue'
import PlayerIcon from './components/icons/PlayerIcon.vue'
import CircleCaretLeftIcon from './components/icons/CircleCaretLeftIcon.vue'
import CircleCaretRightIcon from './components/icons/CircleCaretRightIcon.vue'
import { useGameStore } from './store/use-game-time'

const game = useGameStore()

const setSeconds = () => {
  const seconds = window.prompt('Enter the number of seconds')
  if (!seconds && isNaN(Number(seconds))) return
  game.setSeconds(Number(seconds))
}

const startGame = () => {
  game.startGame()
}

const stopGame = () => {
  console.log('stop game')
  game.stopGame()
}
</script>

<template>
  <PlayModal
    :show-modal="game.isPlaying"
    :color="game.actualPlayer.color"
    :player="game.actualPlayer.code"
    :time="game.timer?.timer"
    @close-modal="stopGame"
    @next-player="game.nextPlayer"
  />
  <div class="app-container">
    <div class="card">
      <span class="title no-selected">Game Time</span>
      <div class="config-container">
        <div class="players no-selected">
          <CircleCaretLeftIcon
            style="width: 32px"
            @click="game.removeLastPlayer"
          />
          {{ game.playersCount }} <PlayerIcon style="width: 32px" />

          <CircleCaretRightIcon style="width: 32px" @click="game.addPlayer" />
          {{ game.actualPlayer?.code }}
        </div>
        <div class="seconds no-selected" @click="setSeconds">
          <TimerIcon style="width: 32px" />{{ game.seconds }}
        </div>
      </div>
      <PlayButton @click="startGame" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  background-color: #f0f0f0;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.title {
  font-size: 5rem;
  font-weight: bold;
  position: absolute;
  top: -40px;
}
.config-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  font-size: 3rem;
  width: 100%;
  height: 100%;
}
</style>
