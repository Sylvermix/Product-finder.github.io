import { Button } from '@components/Button'
import { allProducts } from '../data/products'
import styles from './PushCard.module.css'

interface PushCardProps {
  onStart: () => void
}

export function PushCard({ onStart }: PushCardProps) {
  const gridProducts = allProducts.slice(3, 12)

  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {gridProducts.map((product, i) => (
          <div
            key={product.id}
            className={styles.cell}
            style={{ '--i': i } as React.CSSProperties}
          >
            <img
              src={product.images[0]}
              alt={product.name}
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
        <Button variant="primary" fullWidth onClick={onStart} style={{ flex: '1', height: 'auto', fontSize: '13px', letterSpacing: '0.1em', borderRadius: '0' }}>
          FIND THE PERFECT GIFT &nbsp;→
        </Button>
      </div>
    </div>
  )
}
