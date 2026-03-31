import { useState, useRef, useCallback } from 'react'
import type { Product } from '../types'
import styles from './WheelCarousel.module.css'

interface WheelCarouselProps {
  products: Product[]
}

function itemStyle(offset: number): React.CSSProperties {
  const abs = Math.abs(offset)
  if (abs > 2) return { display: 'none' }

  const xPercent = offset * 56        // % shift per slot
  const scale = abs === 0 ? 1 : abs === 1 ? 0.74 : 0.54
  const opacity = abs === 0 ? 1 : abs === 1 ? 0.65 : 0.28
  const rotateY = offset * -13        // degrees
  const zIndex = 3 - abs

  return {
    transform: `translateX(calc(-50% + ${xPercent}%)) scale(${scale}) rotateY(${rotateY}deg)`,
    opacity,
    zIndex,
    transition: 'transform 0.38s cubic-bezier(0.34, 1.2, 0.64, 1), opacity 0.38s ease',
  }
}

export function WheelCarousel({ products }: WheelCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [liked, setLiked] = useState<Set<string>>(new Set())
  const isDragging = useRef(false)
  const startX = useRef(0)

  const active = products[activeIndex]

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true
    startX.current = e.clientX
    e.currentTarget.setPointerCapture(e.pointerId)
  }, [])

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return
    isDragging.current = false
    const delta = e.clientX - startX.current
    if (delta < -50) setActiveIndex(i => Math.min(i + 1, products.length - 1))
    else if (delta > 50) setActiveIndex(i => Math.max(i - 1, 0))
  }, [products.length])

  const toggleLike = useCallback((id: string) => {
    setLiked(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  if (!active) return null

  return (
    <div className={styles.root}>
      {/* 3-D carousel track */}
      <div
        className={styles.carousel}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {products.map((product, i) => {
          const offset = i - activeIndex
          if (Math.abs(offset) > 2) return null
          return (
            <div key={product.id} className={styles.item} style={itemStyle(offset)}>
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

      {/* Dot indicators */}
      <div className={styles.dots}>
        {Array.from({ length: Math.min(products.length, 5) }, (_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === activeIndex % 5 ? styles.dotActive : ''}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Product ${i + 1}`}
          />
        ))}
      </div>

      {/* Product info */}
      <div className={styles.info}>
        <div className={styles.infoLeft}>
          <h3 className={styles.name}>{active.name}</h3>
          <div className={styles.colorRow}>
            {active.colors.slice(0, 4).map(c => (
              <span key={c} className={styles.swatch} style={{ background: c }} />
            ))}
            {active.colors.length > 4 && (
              <span className={styles.moreColors}>+{active.colors.length - 4}</span>
            )}
          </div>
        </div>
        <div className={styles.priceCol}>
          <span className={styles.price}>{active.price},00 €</span>
          <button
            className={`${styles.heart} ${liked.has(active.id) ? styles.heartLiked : ''}`}
            onClick={() => toggleLike(active.id)}
            aria-label="Add to wishlist"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={liked.has(active.id) ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
