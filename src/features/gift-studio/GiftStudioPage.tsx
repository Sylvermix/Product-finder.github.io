import { useGiftFinderState } from './useGiftFinderState'
import { PushCard } from './components/PushCard'
import { QuizShell } from './components/QuizShell'
import { ResultsScreen } from './components/ResultsScreen'
import styles from './GiftStudioPage.module.css'

export function GiftStudioPage() {
  const state = useGiftFinderState()

  return (
    <div className={styles.root}>
      <div className={styles.phone}>
        {state.screen === 'push' && (
          <PushCard onStart={state.startQuiz} />
        )}
        {state.screen === 'quiz' && (
          <QuizShell
            step={state.step}
            totalSteps={state.totalSteps}
            direction={state.direction}
            answers={state.answers}
            onNext={state.nextStep}
            onBack={state.prevStep}
            onSkip={state.skip}
            onClose={state.reset}
            onUpdateAnswer={state.updateAnswer}
          />
        )}
        {state.screen === 'results' && (
          <ResultsScreen
            results={state.results}
            onClose={state.reset}
          />
        )}
      </div>
    </div>
  )
}
