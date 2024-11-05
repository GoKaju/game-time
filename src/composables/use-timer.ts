import { ref } from 'vue'

export interface Time {
  seconds: number
  tenths: number // 9-0
}

export interface Alert {
  code: string
  secondsFromStart: number
  secondsFromEnd: number
  alertInterval: number // milliseconds
  callback: () => void
}

export default function useTimer(seconds: number = 60, tenths: number = 0) {
  let initialSeconds = seconds
  const timer = ref<Time>({ seconds: initialSeconds, tenths })
  let interval: ReturnType<typeof setInterval> | null = null
  //   const alerts = ref<Alert[]>([])
  const endHandler = ref<() => void>()

  const setSeconds = (seconds: number) => {
    initialSeconds = seconds
    timer.value.seconds = seconds
  }

  //   const setAlert = (alert: Alert) => {
  //     alerts.value.push(alert)
  //   }

  const start = () => {
    interval = setInterval(() => {
      calculateTime()
    }, 100)
    console.log('timer started', interval)
  }

  const calculateTime = () => {
    if (timer.value.tenths === 0) {
      timer.value.tenths = 10
      timer.value.seconds--
    }

    timer.value.tenths -= 1

    if (timer.value.seconds <= 0 && timer.value.tenths <= 0) {
      stop()
      if (endHandler.value) endHandler.value()
    }

    // checkAlerts()
  }

  const stop = () => {
    console.log('timer to stop', interval)
    if (interval) {
      // list intervals

      clearInterval(interval)
      interval = null
      console.log('timer stopped', interval)
    }
  }

  //   const checkAlerts = () => {}

  const onEndTime = (callback: () => void) => {
    endHandler.value = callback
  }

  const reset = () => {
    stop()
    timer.value.seconds = initialSeconds
    timer.value.tenths = 0
  }

  const restart = () => {
    reset()
    start()
  }

  return { timer, onEndTime, setSeconds, start, stop, reset, restart }
}
