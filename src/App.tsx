import { useState, useRef } from 'react'
import { HomePage } from './pages/HomePage'
import { GiftStudioPage } from './features/gift-studio/GiftStudioPage'
import styles from './App.module.css'

export default function App() {
  const [giftOpen, setGiftOpen] = useState(false)
  const hpRef = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.root}>
      {/* Scrollable homepage */}
      <div className={styles.hp} ref={hpRef}>
        <HomePage onOpenGiftStudio={() => setGiftOpen(true)} scrollerRef={hpRef} />
      </div>

      {/* Gift studio slide-up panel */}
      <div className={`${styles.panel} ${giftOpen ? styles.panelOpen : ''}`}>
        <div className={styles.phone}>
          <GiftStudioPage onClose={() => setGiftOpen(false)} autoStart />
        </div>
      </div>
    </div>
  )
}
