// sum.test.js
import { expect, it, describe, vi } from 'vitest'

import useTimer from './use-timer'

describe('useTimer', () => {
  it('should start the timer', async () => {
    vi.useFakeTimers()
    const { start, timer } = useTimer(10)
    start()
    vi.advanceTimersByTime(1000)
    expect(timer.value.seconds).toBe(9)
    vi.advanceTimersByTime(1000)
    expect(timer.value.seconds).toBe(8)
    vi.useRealTimers()
  })

  it('should stop the timer', async () => {
    vi.useFakeTimers()
    const { start, stop, timer } = useTimer(10)
    start()
    vi.advanceTimersByTime(1000)
    stop()
    vi.advanceTimersByTime(1000)
    expect(timer.value.seconds).toBe(9)
    vi.useRealTimers()
  })

  it('should reset the timer', async () => {
    vi.useFakeTimers()
    const { start, reset, timer } = useTimer(10)
    start()
    vi.advanceTimersByTime(1000)
    reset()
    expect(timer.value.seconds).toBe(10)
    vi.useRealTimers()
  })

  it('should handle time end', async () => {
    vi.useFakeTimers()
    const { start, onEndTime } = useTimer(1)
    const callback = vi.fn()
    onEndTime(callback)
    start()
    vi.advanceTimersByTime(500)
    expect(callback).not.toHaveBeenCalled()
    vi.advanceTimersByTime(500)
    expect(callback).toHaveBeenCalled()
    vi.useRealTimers()
  })
})
