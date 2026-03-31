import { useState } from 'react'
import type { Product } from '../types'
import styles from './ProductListItem.module.css'

interface ProductListItemProps {
  product: Product
  index: number
}

export function ProductListItem({ product, index }: ProductListItemProps) {
  const [liked, setLiked] = useState(false)
  const [activeImg, setActiveImg] = useState(0)

  return (
    <article
      className={styles.root}
      style={{ '--delay': `${index * 55}ms` } as React.CSSProperties}
    >
      {/* Swipeable main image */}
      <div className={styles.imageStrip}>
        {product.images.map((src, i) => (
          <div key={i} className={styles.imageSlide}>
            <img src={src} alt={product.name} className={styles.mainImg} />
          </div>
        ))}
      </div>

      {/* Details */}
      <div className={styles.body}>
        {/* Color / variant thumbnails */}
        <div className={styles.thumbRow}>
          {product.images.map((src, i) => (
            <button
              key={i}
              className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
              onClick={() => setActiveImg(i)}
            >
              <img src={src} alt="" className={styles.thumbImg} />
            </button>
          ))}
        </div>

        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>{product.price},00 €</p>

        {/* Split CTA */}
        <div className={styles.cta}>
          <button className={styles.addToBag}>ADD TO YOUR BAG</button>
          <button
            className={`${styles.heart} ${liked ? styles.heartLiked : ''}`}
            onClick={() => setLiked(l => !l)}
            aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}
