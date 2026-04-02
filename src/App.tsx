import { useState, useRef } from 'react'
import { HomePage } from './pages/HomePage'
import { GiftStudioPage } from './features/gift-studio/GiftStudioPage'
import styles from './App.module.css'

export default function App() {
  const [giftOpen, setGiftOpen] = useState(false)
  const [giftKey, setGiftKey] = useState(0)
  const hpRef = useRef<HTMLDivElement>(null)

  function openGiftStudio() {
    setGiftKey(k => k + 1)
    setGiftOpen(true)
  }

  return (
    <div className={styles.root}>
      {/* Scrollable homepage */}
      <div className={styles.hp} ref={hpRef}>
        <HomePage onOpenGiftStudio={openGiftStudio} scrollerRef={hpRef} />
      </div>

      {/* Gift studio slide-up panel */}
      <div className={`${styles.panel} ${giftOpen ? styles.panelOpen : ''}`}>
        <div className={styles.phone}>
          <GiftStudioPage key={giftKey} onClose={() => setGiftOpen(false)} autoStart />
        </div>
      </div>
    </div>
  )
}
