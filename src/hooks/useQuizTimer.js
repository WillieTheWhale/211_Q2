import { useState, useEffect, useCallback, useRef } from 'react'

export default function useQuizTimer(initialSeconds, onTimeUp) {
  const [remaining, setRemaining] = useState(initialSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)
  const onTimeUpRef = useRef(onTimeUp)
  onTimeUpRef.current = onTimeUp

  useEffect(() => {
    if (!isRunning || remaining <= 0) {
      if (remaining <= 0 && isRunning) {
        setIsRunning(false)
        onTimeUpRef.current?.()
      }
      return
    }

    intervalRef.current = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current)
          setIsRunning(false)
          onTimeUpRef.current?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(intervalRef.current)
  }, [isRunning, remaining])

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])
  const reset = useCallback((seconds) => {
    setIsRunning(false)
    setRemaining(seconds ?? initialSeconds)
  }, [initialSeconds])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const isWarning = remaining <= 120 && remaining > 30
  const isCritical = remaining <= 30

  return { remaining, formatted, isRunning, isWarning, isCritical, start, pause, reset }
}
