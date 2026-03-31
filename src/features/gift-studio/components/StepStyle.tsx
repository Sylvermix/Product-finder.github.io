import styles from './StepStyle.module.css'

interface StepStyleProps {
  style: string
  interests: string[]
  onStyleChange: (style: string) => void
  onInterestsChange: (interests: string[]) => void
}

const STYLE_OPTIONS = [
  { id: 'sporty', label: 'Sporty', image: '/assets/looks/look1.png' },
  { id: 'chic',   label: 'Chic',   image: '/assets/looks/look2.png' },
  { id: 'casual', label: 'Casual', image: '/assets/looks/look3.png' },
  { id: 'trendy', label: 'Trendy', image: '/assets/looks/look4.png' },
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
            className={`${styles.styleCard} ${style && style !== opt.id ? styles.styleUnselected : ''}`}
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
        <h3 className={styles.interestsTitle}>What are his interests?</h3>
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
