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

const U = 'https://images.unsplash.com/photo-'
const P = '?w=400&h=520&fit=crop&auto=format&q=80'

const STEP_1_OPTIONS = [
  { id: 'woman',  label: 'Woman',  image: `${U}1531746020798-e6953c6e8e04${P}` },  // woman in white top
  { id: 'man',    label: 'Man',    image: `${U}1519085360753-af0119f7cbe7${P}` },  // man in jacket
  { id: 'kids',   label: 'Kids',   image: `${U}1503454537195-1dcabb73ffb9${P}` },  // child casual
  { id: 'couple', label: 'Couple', image: `${U}1522673607200-164d1b6ce486${P}` },  // couple fashion
]

const STEP_2_OPTIONS = [
  { id: 'sweatshirts', label: 'Sweatshirts',       image: `${U}1556821840-3a63f15732ce${P}` },  // green hoodie
  { id: 'polos',       label: 'Polos and t-shirts', image: `${U}1581655353564-df123a1eb820${P}` },  // polo shirt
  { id: 'jackets',     label: 'Jackets',            image: `${U}1551028719-00167b16eac5${P}` },  // jacket
  { id: 'pants',       label: 'Pants',              image: `${U}1624378439575-d8705ad7ae80${P}` },  // tailored pants
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
            title="WHO ARE YOU SHOPPING FOR?"
            options={STEP_1_OPTIONS}
            selected={answers.recipient}
            onSelect={v => onUpdateAnswer('recipient', v)}
          />
        )
      case 2:
        return (
          <QuizImageGrid
            title="WHAT PRODUCT ARE YOU LOOKING FOR?"
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
        <div className={styles.headerSide} />
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

      <div
        key={step}
        className={`${styles.content} ${direction === 'forward' ? styles.enterRight : styles.enterLeft}`}
      >
        {renderStep()}
      </div>

      <footer className={styles.footer}>
        {!isLastStep && (
          <button className={styles.skipBtn} onClick={onSkip}>
            Skip the quiz
          </button>
        )}
        <div className={styles.footerNav}>
          {step > 1 && (
            <button className={styles.backSquare} onClick={onBack} aria-label="Previous">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>
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
