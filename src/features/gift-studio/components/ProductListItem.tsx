import { useState } from 'react'
import { Button } from '@components/Button'
import type { Product } from '../types'
import styles from './ProductListItem.module.css'

interface ProductListItemProps {
  product: Product
  index: number
}

export function ProductListItem({ product, index }: ProductListItemProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article
      className={styles.root}
      style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}
    >
      <div className={styles.imageArea}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.mainImg}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{product.name}</span>
          <span className={styles.price}>{product.price},00 €</span>
        </div>

        <div className={styles.colorRow}>
          {product.colors.slice(0, 4).map(c => (
            <span key={c} className={styles.swatch} style={{ background: c }} />
          ))}
          {product.colors.length > 4 && (
            <span className={styles.moreColors}>+{product.colors.length - 4}</span>
          )}
        </div>

        <button className={styles.descLink}>Full Description &nbsp;›</button>

        <div className={styles.actions}>
          <button
            className={`${styles.heart} ${liked ? styles.heartLiked : ''}`}
            onClick={() => setLiked(l => !l)}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
          <Button
            variant="primary"
            fullWidth
            style={{ height: '48px', fontSize: '12px', letterSpacing: '0.08em', borderRadius: '0' }}
          >
            ADD TO YOUR BAG
          </Button>
        </div>
      </div>
    </article>
  )
}
