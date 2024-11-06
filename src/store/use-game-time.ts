import { defineStore } from 'pinia'
import useTimer from '../composables/use-timer'
// import end.mp3
// const END_SOUND_EFFECT = '../assets/end.mp3'
import END_SOUND_EFFECT from '../assets/end.mp3'

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink']

export interface Player {
  color: string
  code: number
}

const timer = useTimer(30)

export const useGameStore = defineStore('game-time', {
  state: () => ({
    players: [] as Player[],
    seconds: 30,
    actualPlayerIndex: -1,
    isPlaying: false,
    timer: timer,
  }),
  getters: {
    playersCount(state) {
      return state.players.length
    },

    actualPlayer(state) {
      const actualPlayer = { ...state.players[state.actualPlayerIndex] }
      if (!actualPlayer)
        return {
          color: 'black',
          code: 0,
        }
      // alerting with color
      const { seconds, tenths } = state.timer.timer

      if (
        (seconds <= 10 && seconds > 5 && tenths % 9 === 0) ||
        (seconds <= 5 && seconds > 3 && tenths % 5 === 0) ||
        (seconds <= 3 && seconds > 0 && tenths % 2 === 0)
      ) {
        actualPlayer.color = 'white'
      }

      return actualPlayer
    },
  },
  actions: {
    // game actions
    startGame() {
      if (this.players.length === 0) return
      if (this.seconds <= 0) return
      // load audio

      const audio = new Audio(END_SOUND_EFFECT)

      timer.onEndTime(() => {
        audio.play()
      })
      audio.src = END_SOUND_EFFECT

      this.isPlaying = true
      this.actualPlayerIndex = 0
      this.timer.start()
    },
    nextPlayer() {
      this.actualPlayerIndex =
        (this.actualPlayerIndex + 1) % this.players.length

      this.timer.restart()
    },
    stopGame() {
      this.isPlaying = false
      this.actualPlayerIndex = -1
      this.timer.reset()
    },

    // player actions
    addPlayer() {
      if (this.players.length >= COLORS.length) return

      this.players.push({
        color: COLORS[this.players.length],
        code: this.players.length + 1,
      })
    },
    removeLastPlayer() {
      this.players.pop()
    },

    // time actions
    setSeconds(seconds: number) {
      this.seconds = seconds
      this.timer.setSeconds(seconds)
    },
  },
})
