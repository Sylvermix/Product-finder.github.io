import styles from './QuizImageGrid.module.css'

interface Option {
  id: string
  label: string
  image: string
}

interface QuizImageGridProps {
  options: Option[]
  selected: string
  onSelect: (id: string) => void
}

export function QuizImageGrid({ options, selected, onSelect }: QuizImageGridProps) {
  return (
    <div className={styles.root}>
      <div className={styles.grid}>
        {options.map(opt => (
          <button
            key={opt.id}
            className={`${styles.cell} ${selected === opt.id ? styles.selected : ''}`}
            onClick={() => onSelect(opt.id)}
          >
            <div className={styles.imgWrap}>
              <img src={opt.image} alt={opt.label} className={styles.img} />
            </div>
            <span className={styles.label}>{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
