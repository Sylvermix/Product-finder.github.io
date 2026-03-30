import styles from './StepStyle.module.css'

interface StepStyleProps {
  style: string
  interests: string[]
  onStyleChange: (style: string) => void
  onInterestsChange: (interests: string[]) => void
}

const U = 'https://images.unsplash.com/photo-'
const P = '?w=300&h=500&fit=crop&auto=format&q=80'

const STYLE_OPTIONS = [
  { id: 'sporty', label: 'Sporty', image: `${U}1571019613454-1cb2f99b2d8b${P}` },
  { id: 'chic',   label: 'Chic',   image: `${U}1509631179647-0177331693ae${P}` },
  { id: 'casual', label: 'Casual', image: `${U}1490481651871-ab68de25d43d${P}` },
  { id: 'smart',  label: 'Smart',  image: `${U}1617137984095-74e4e5e3613f${P}` },
]

const INTEREST_OPTIONS = [
  'Sports', 'Fashion shows', 'Trends', 'Running', 'Golf', 'Tennis', 'Travel', 'Music',
]

export function StepStyle({ style, interests, onStyleChange, onInterestsChange }: StepStyleProps) {
  const toggleInterest = (tag: string) => {
    if (interests.includes(tag)) {
      onInterestsChange(interests.filter(i => i !== tag))
    } else {
      onInterestsChange([...interests, tag])
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.styleTrack}>
        {STYLE_OPTIONS.map(opt => (
          <button
            key={opt.id}
            className={`${styles.styleCard} ${style === opt.id ? styles.styleSelected : ''}`}
            onClick={() => onStyleChange(opt.id)}
          >
            <div className={styles.styleImgWrap}>
              <img src={opt.image} alt={opt.label} className={styles.styleImg} />
            </div>
            <span className={styles.styleLabel}>{opt.label}</span>
          </button>
        ))}
      </div>

      <div className={styles.interests}>
        <h3 className={styles.interestsTitle}>WHAT ARE HIS INTERESTS?</h3>
        <div className={styles.tags}>
          {INTEREST_OPTIONS.map(tag => (
            <button
              key={tag}
              className={`${styles.tag} ${interests.includes(tag) ? styles.tagActive : ''}`}
              onClick={() => toggleInterest(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
