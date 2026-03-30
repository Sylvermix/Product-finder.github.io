import { useState } from 'react'
import type { Product } from '../types'
import { ProductListItem } from './ProductListItem'
import { WheelCarousel } from './WheelCarousel'
import styles from './ResultsScreen.module.css'

interface ResultsScreenProps {
  results: { selected: Product[]; more: Product[] }
  onClose: () => void
}

export function ResultsScreen({ results, onClose }: ResultsScreenProps) {
  const [activeTab, setActiveTab] = useState<'selected' | 'more'>('selected')

  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <span className={styles.headerTitle}>GIFT STUDIO</span>
        <div className={styles.headerSide}>
          <button className={styles.iconBtn} onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>WE FOUND PERFECT GIFTS FOR YOU!</h1>
      </div>

      <div className={styles.tabBar}>
        <button
          className={`${styles.tab} ${activeTab === 'selected' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('selected')}
        >
          SELECTED GIFTS ({results.selected.length})
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'more' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('more')}
        >
          MORE GIFTS ({results.more.length})
        </button>
      </div>

      <div className={styles.content}>
        <div className={styles.badges}>
          <span className={styles.badge}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14M5 8a2 2 0 1 0 0-4h-1M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8M14 8V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v4" />
            </svg>
            Delivered in 3 days
          </span>
          <span className={styles.badge}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="1 4 1 10 7 10" />
              <path d="M3.51 15a9 9 0 1 0 .49-4.9" />
            </svg>
            30 Days to return
          </span>
        </div>
        {activeTab === 'selected' ? (
          <div key="selected">
            {results.selected.map((product, i) => (
              <ProductListItem key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div key="more">
            <WheelCarousel products={results.more} />
          </div>
        )}
      </div>
    </div>
  )
}
