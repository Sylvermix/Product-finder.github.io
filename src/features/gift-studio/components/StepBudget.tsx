import { useRef, useCallback } from 'react'
import styles from './StepBudget.module.css'

interface StepBudgetProps {
  value: number
  onChange: (value: number) => void
}

const MIN = 50
const MAX = 300
const SCALE = 7        // px per euro
const TICK_STEP = 5    // euros between ticks
const LABEL_STEP = 10  // euros between labels

export function StepBudget({ value, onChange }: StepBudgetProps) {
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startValue = useRef(value)
  const trackRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number) => Math.max(MIN, Math.min(MAX, Math.round(v / TICK_STEP) * TICK_STEP))

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true
    startX.current = e.clientX
    startValue.current = value
    e.currentTarget.setPointerCapture(e.pointerId)
    if (trackRef.current) trackRef.current.style.transition = 'none'
  }, [value])

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return
    const delta = e.clientX - startX.current
    onChange(clamp(startValue.current - delta / SCALE))
  }, [onChange, clamp])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
    if (trackRef.current) trackRef.current.style.transition = ''
  }, [])

  const ticks = Array.from(
    { length: Math.floor((MAX - MIN) / TICK_STEP) + 1 },
    (_, i) => MIN + i * TICK_STEP,
  )

  // Offset so the current value sits at the center line
  const trackOffset = -(value - MIN) * SCALE

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>HOW MUCH DO YOU WANT TO SPEND?</h2>

      <div className={styles.valueDisplay}>
        <span className={styles.value}>{value} €</span>
      </div>

      <div
        className={styles.rulerContainer}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div className={styles.centerLine} />
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(${trackOffset}px)`, transition: 'transform 0.1s ease' }}
        >
          {ticks.map(tick => {
            const isMajor = tick % LABEL_STEP === 0
            return (
              <div
                key={tick}
                className={styles.tickUnit}
                style={{ width: `${TICK_STEP * SCALE}px` }}
              >
                <div className={`${styles.tick} ${isMajor ? styles.tickMajor : ''}`} />
                {isMajor && <span className={styles.tickLabel}>{tick}</span>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
