import styles from './StepOccasion.module.css'

interface StepOccasionProps {
  selected: string
  onSelect: (value: string) => void
}

const OPTIONS = ['Birthday', 'Anniversary', "Valentine's day", 'Graduation', 'Other']

export function StepOccasion({ selected, onSelect }: StepOccasionProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>FOR WHAT OCCASION ARE YOU SHOPPING FOR?</h2>
      <ul className={styles.list}>
        {OPTIONS.map(opt => (
          <li key={opt}>
            <button
              className={`${styles.item} ${selected === opt ? styles.selected : ''}`}
              onClick={() => onSelect(opt)}
            >
              <span className={styles.radio}>
                {selected === opt && <span className={styles.radioDot} />}
              </span>
              <span className={styles.label}>{opt}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
