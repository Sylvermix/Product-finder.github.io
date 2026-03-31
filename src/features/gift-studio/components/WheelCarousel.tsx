import { useState, useRef } from 'react'
import type { Product } from '../types'
import styles from './WheelCarousel.module.css'

interface WheelCarouselProps {
  products: Product[]
}

const ANGLE_STEP    = 1.05   // radians between adjacent items
const DRAG_RATIO    = 0.004  // radians per pixel dragged
const FRICTION      = 0.87   // velocity decay per frame (inertia)

/** Position each item on the arc using sin/cos — true wheel geometry */
function computeStyle(angle: number): React.CSSProperties | null {
  if (Math.abs(angle) > ANGLE_STEP * 1.4) return null
  const cos  = Math.cos(angle)
  const sin  = Math.sin(angle)
  const norm = Math.max(0, cos)
  const yPx  = cos * 100 - 50
  return {
    transform: `translateX(calc(-50% + ${sin * 72}%)) translateY(${yPx}px) scale(${0.35 + 0.83 * Math.pow(norm, 3)})`,
    opacity:   0.3 + 0.7 * norm,
    zIndex:    Math.round(norm * 10),
  }
}

export function WheelCarousel({ products }: WheelCarouselProps) {
  const [rotation, setRotation] = useState(0)   // continuous wheel angle (radians)
  const [snapping, setSnapping] = useState(false)

  const isDragging = useRef(false)
  const startX     = useRef(0)
  const startRot   = useRef(0)
  const velRef     = useRef(0)
  const lastX      = useRef(0)
  const rafRef     = useRef<number | null>(null)

  const minRot = -(products.length - 1) * ANGLE_STEP

  function clamp(r: number) { return Math.max(minRot, Math.min(0, r)) }
  function snapTarget(r: number) {
    const i = Math.max(0, Math.min(products.length - 1, Math.round(-r / ANGLE_STEP)))
    return -i * ANGLE_STEP
  }

  const activeIndex = Math.max(0, Math.min(products.length - 1, Math.round(-rotation / ANGLE_STEP)))
  const active = products[activeIndex]

  function stop() {
    if (rafRef.current !== null) { cancelAnimationFrame(rafRef.current); rafRef.current = null }
  }

  function handlePointerDown(e: React.PointerEvent) {
    stop()
    setSnapping(false)
    isDragging.current = true
    startX.current  = e.clientX
    lastX.current   = e.clientX
    startRot.current = rotation
    velRef.current  = 0
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!isDragging.current) return
    velRef.current = e.clientX - lastX.current
    lastX.current  = e.clientX
    setRotation(clamp(startRot.current + (e.clientX - startX.current) * DRAG_RATIO))
  }

  function handlePointerUp() {
    if (!isDragging.current) return
    isDragging.current = false

    let vel = velRef.current * DRAG_RATIO   // initial angular velocity

    const spin = () => {
      vel *= FRICTION
      if (Math.abs(vel) < 0.003) {
        setSnapping(true)
        setRotation(r => snapTarget(r))
        rafRef.current = null
        return
      }
      setRotation(r => {
        const next = r + vel
        if (next > 0 || next < minRot) { vel = 0; return clamp(next) }
        return next
      })
      rafRef.current = requestAnimationFrame(spin)
    }
    rafRef.current = requestAnimationFrame(spin)
  }

  if (!active) return null

  return (
    <div className={styles.root}>
      <div
        className={styles.carousel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {products.map((product, i) => {
          const angle = i * ANGLE_STEP + rotation
          const s = computeStyle(angle)
          if (!s) return null
          return (
            <div
              key={product.id}
              className={styles.item}
              style={{
                ...s,
                transition: snapping
                  ? 'transform 0.4s cubic-bezier(0.34,1.1,0.64,1), opacity 0.4s ease'
                  : 'none',
              }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className={styles.itemImg}
                draggable={false}
              />
            </div>
          )
        })}
      </div>

      {/* Thumbnail strip */}
      <div className={styles.thumbStrip}>
        {active.images.slice(0, 7).map((img, i) => (
          <div key={i} className={`${styles.thumb} ${i === 0 ? styles.thumbActive : ''}`}>
            <img src={img} alt="" className={styles.thumbImg} draggable={false} />
          </div>
        ))}
      </div>

      {/* Product info */}
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <h3 className={styles.name}>{active.name}</h3>
        </div>
        <div className={styles.priceCol}>
          <span className={styles.price}>{active.price},00 €</span>
        </div>
      </div>
    </div>
  )
}
