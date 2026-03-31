import { useState } from 'react'
import { Button } from '@components/Button'
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

      {activeTab === 'more' && (
        <div className={styles.carouselFooter}>
          <Button
            variant="primary"
            style={{ width: '310px', height: '48px', fontSize: '13px', letterSpacing: '0.06em', borderRadius: '0' }}
          >
            SELECT YOUR SIZE &nbsp;›
          </Button>
        </div>
      )}
    </div>
  )
}
