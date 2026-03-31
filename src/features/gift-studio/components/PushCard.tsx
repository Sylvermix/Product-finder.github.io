import { Button } from '@components/Button'
import styles from './PushCard.module.css'

const GRID_IMAGES = Array.from({ length: 13 }, (_, i) => `/assets/landing/image-${i}.png`)

interface PushCardProps {
  onStart: () => void
}

export function PushCard({ onStart }: PushCardProps) {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {GRID_IMAGES.slice(0, 12).map((src, i) => (
          <div
            key={i}
            className={styles.cell}
            style={{ '--i': i } as React.CSSProperties}
          >
            <img
              src={src}
              alt=""
              className={styles.img}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <h1 className={styles.title}>LACOSTE GIFT STUDIO</h1>
        <p className={styles.subtitle}>
          Find the perfect gifts for your beloved ones in a few simple steps
        </p>
        <Button variant="primary" fullWidth onClick={onStart} style={{ height: '48px', fontSize: '13px', letterSpacing: '0.1em', borderRadius: '0' }}>
          FIND THE PERFECT GIFT &nbsp;→
        </Button>
      </div>
    </div>
  )
}
