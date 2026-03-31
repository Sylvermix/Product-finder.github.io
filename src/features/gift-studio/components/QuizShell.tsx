import { Button } from '@components/Button'
import type { QuizAnswers } from '../types'
import type { TransitionDirection } from '../useGiftFinderState'
import { QuizImageGrid } from './QuizImageGrid'
import { StepStyle } from './StepStyle'
import { StepOccasion } from './StepOccasion'
import { StepBudget } from './StepBudget'
import styles from './QuizShell.module.css'

interface QuizShellProps {
  step: number
  totalSteps: number
  direction: TransitionDirection
  answers: QuizAnswers
  onNext: (answers?: QuizAnswers) => void
  onBack: () => void
  onSkip: () => void
  onClose: () => void
  onUpdateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void
}

const STEP_TITLES = [
  'Who are you shopping for?',
  'What product are you looking for?',
  'How would you define his style?',
  "What's the occasion?",
  'How much do you want to spend?',
]

const STEP_1_OPTIONS = [
  { id: 'woman',  label: 'Woman',  image: '/assets/gender/Women.png' },
  { id: 'man',    label: 'Man',    image: '/assets/gender/Man.png' },
  { id: 'kids',   label: 'Kids',   image: '/assets/gender/Kids.png' },
  { id: 'couple', label: 'Couple', image: '/assets/gender/Couple.png' },
]

const STEP_2_OPTIONS = [
  { id: 'sweatshirts',  label: 'Sweatshirts',        image: '/assets/product/Sweatshirts.png' },
  { id: 'polos',        label: 'Polos and t-shirts', image: '/assets/product/Polos.png' },
  { id: 'jackets',      label: 'Jackets',            image: '/assets/product/Jackets.png' },
  { id: 'pants',        label: 'Pants',              image: '/assets/product/Pants.png' },
  { id: 'accessories',  label: 'Accessories',        image: '/assets/product/Accessories.png' },
  { id: 'bags',         label: 'Bags',               image: '/assets/product/Bags.png' },
  { id: 'caps',         label: 'Caps',               image: '/assets/product/Caps.png' },
  { id: 'sneakers',     label: 'Sneakers',           image: '/assets/product/Sneakers.png' },
]

export function QuizShell({
  step, totalSteps, direction, answers, onNext, onBack, onSkip, onClose, onUpdateAnswer,
}: QuizShellProps) {
  const progress = (step / totalSteps) * 100
  const isLastStep = step === totalSteps

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <QuizImageGrid
            options={STEP_1_OPTIONS}
            selected={answers.recipient}
            onSelect={v => onUpdateAnswer('recipient', v)}
          />
        )
      case 2:
        return (
          <QuizImageGrid
            options={STEP_2_OPTIONS}
            selected={answers.productType}
            onSelect={v => onUpdateAnswer('productType', v)}
          />
        )
      case 3:
        return (
          <StepStyle
            style={answers.style}
            interests={answers.interests}
            onStyleChange={v => onUpdateAnswer('style', v)}
            onInterestsChange={v => onUpdateAnswer('interests', v)}
          />
        )
      case 4:
        return (
          <StepOccasion
            selected={answers.occasion}
            onSelect={v => onUpdateAnswer('occasion', v)}
          />
        )
      case 5:
        return (
          <StepBudget
            value={answers.budget}
            onChange={v => onUpdateAnswer('budget', v)}
          />
        )
      default:
        return null
    }
  }

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

      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <div className={styles.stepTitle}>{STEP_TITLES[step - 1]}</div>

      <div
        key={step}
        className={`${styles.content} ${direction === 'forward' ? styles.enterRight : styles.enterLeft}`}
      >
        {renderStep()}
      </div>

      <footer className={`${styles.footer} ${isLastStep ? styles.footerLast : ''}`}>
        {!isLastStep && (
          <button className={styles.skipBtn} onClick={onSkip}>
            Skip the quiz
          </button>
        )}
        <div className={styles.footerNav}>
          {step > 1 && (
            <Button
              variant="secondary"
              onClick={onBack}
              aria-label="Previous"
              style={{ height: '48px', width: '48px', minWidth: 0, fontSize: '16px', borderRadius: '0', padding: '0' }}
            >
              ←
            </Button>
          )}
          <Button
            variant="primary"
            onClick={() => onNext(answers)}
            style={{ height: '48px', fontSize: '12px', letterSpacing: '0.08em', borderRadius: '0', minWidth: '0', whiteSpace: 'nowrap' }}
          >
            {isLastStep ? 'DISCOVER SELECTION →' : 'NEXT →'}
          </Button>
        </div>
      </footer>
    </div>
  )
}
