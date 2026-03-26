import styles from './QuizImageGrid.module.css'

interface Option {
  id: string
  label: string
  image: string
}

interface QuizImageGridProps {
  title: string
  options: Option[]
  selected: string
  onSelect: (id: string) => void
}

export function QuizImageGrid({ title, options, selected, onSelect }: QuizImageGridProps) {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>{title}</h2>
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
