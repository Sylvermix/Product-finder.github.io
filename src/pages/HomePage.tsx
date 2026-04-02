import { PushCard } from '@/features/gift-studio/components/PushCard'
import { PushStack } from './PushStack'
import { SnowflakeCanvas } from './SnowflakeCanvas'
import styles from './HomePage.module.css'

// Figma campaign images (valid 7 days from generation)
const imgHero       = 'https://www.figma.com/api/mcp/asset/b0633178-6b33-4a6e-b77a-d5c27e2b23dc'
const imgEdit1      = 'https://www.figma.com/api/mcp/asset/0fbf161e-3492-462f-bd0c-2cc1f5d02cf3'
const imgEdit2      = 'https://www.figma.com/api/mcp/asset/a75db12e-1e17-442d-b513-ffb4fd1d8cc8'
const imgEdit3      = 'https://www.figma.com/api/mcp/asset/4487032b-5b0d-40ab-9601-39ddb35c4c8b'
const imgSale       = 'https://www.figma.com/api/mcp/asset/432f8454-46e2-4dc3-a75e-e19867db6700'
const imgPush1      = 'https://www.figma.com/api/mcp/asset/768f612c-b6bd-4f5a-bcd2-b6d1f41698b5'
const imgPush2      = 'https://www.figma.com/api/mcp/asset/c50300ef-d772-4e1d-8bab-17f2c8ae376a'
const imgPush3      = 'https://www.figma.com/api/mcp/asset/e2a8e953-5fa3-4b2d-a4dd-b88ca0df2339'
const imgBrandPhoto = 'https://www.figma.com/api/mcp/asset/573e7dd6-3e79-401c-8970-5020bebd92e8'
const imgCrocodile  = 'https://www.figma.com/api/mcp/asset/66a5223a-87ed-4f24-8558-decd27f4c48e'
const imgLogo       = 'https://www.figma.com/api/mcp/asset/6aaf526b-b254-4271-a6f5-40e41e2a4993'

interface HomePageProps {
  onOpenGiftStudio: () => void
  scrollerRef: React.RefObject<HTMLDivElement | null>
}

export function HomePage({ onOpenGiftStudio, scrollerRef }: HomePageProps) {
  return (
    <div className={styles.page}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <img src={imgCrocodile} alt="Lacoste" />
        </div>
        <div className={styles.navIcons}>
          {/* Store */}
          <button className={styles.navIcon} aria-label="Store">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" stroke="none"/>
            </svg>
          </button>
          {/* Wishlist */}
          <button className={styles.navIcon} aria-label="Wishlist">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Account */}
          <button className={styles.navIcon} aria-label="Account">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Basket */}
          <button className={styles.navIcon} aria-label="Basket">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Menu */}
          <button className={styles.navIcon} aria-label="Menu">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"/>
              <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round"/>
              <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <img src={imgHero} alt="Winter in Lacoste" className={styles.heroImg} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Winter in Lacoste</h1>
          <button className={styles.btnSecondary}>Shop now</button>
        </div>
      </section>

      {/* Seasonal wardrobe */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Lacoste seasonal wardrobe</h2>
        <div className={styles.hScroll}>
          {([
            { src: imgEdit1, title: 'Knitwear' },
            { src: imgEdit2, title: 'Outerwear' },
            { src: imgEdit3, title: 'Casual' },
          ]).map(({ src, title }) => (
            <div key={title} className={styles.editTile}>
              <img src={src} alt={title} />
              <p className={styles.editTileTitle}>{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop sale story */}
      <section className={styles.story}>
        <img src={imgSale} alt="Shop sale" className={styles.storyImg} />
        <div className={styles.storyText}>
          <h2 className={styles.storyTitle}>Shop sale</h2>
          <p className={styles.storyBody}>Lacoste favorites up to 50%</p>
          <button className={styles.btnPrimary}>Shop sale</button>
        </div>
      </section>

      {/* Gift Studio */}
      <section className={styles.giftSection}>
        <SnowflakeCanvas />
        <PushCard onStart={onOpenGiftStudio} />
      </section>

      {/* Push campaigns — scroll-driven stack */}
      <PushStack
        scrollerRef={scrollerRef}
        items={[
          { img: imgSale,  title: 'Rolex Paris Masters' },
          { img: imgPush3, title: 'New season arrivals' },
          { img: imgPush2, title: 'Iconic woven shirts' },
          { img: imgPush1, title: 'Leather goods' },
        ]}
      />

      {/* Brand section */}
      <section className={styles.brand}>
        <div className={styles.brandHeader}>
          <h2 className={styles.brandTitle}>We are Lacoste</h2>
          <img src={imgLogo} alt="Lacoste" width="50" height="30" style={{ objectFit: 'contain' }} />
        </div>
        <img src={imgBrandPhoto} alt="" className={styles.brandImg} />
        <div className={styles.brandText}>
          <p className={styles.brandOverline}>the start of a new chapter</p>
          <h3 className={styles.brandHeading}>Everything you need to know about the new Lacoste flagship</h3>
          <p className={styles.brandBody}>Lacoste chooses the iconic Fifth Avenue for its flagship in New York. Discover a bold store that offers an immersive experience playing off the brand's codes.</p>
          <button className={styles.btnPrimary}>Discover</button>
        </div>
      </section>
    </div>
  )
}
