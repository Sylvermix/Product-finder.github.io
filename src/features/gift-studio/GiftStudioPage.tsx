import { useEffect } from 'react'
import { useGiftFinderState } from './useGiftFinderState'
import { PushCard } from './components/PushCard'
import { QuizShell } from './components/QuizShell'
import { ResultsScreen } from './components/ResultsScreen'

interface GiftStudioPageProps {
  onClose?: () => void
  autoStart?: boolean
}

export function GiftStudioPage({ onClose, autoStart }: GiftStudioPageProps) {
  const state = useGiftFinderState()

  useEffect(() => {
    if (autoStart) state.startQuiz()
  }, [autoStart])

  function handleClose() {
    state.reset()
    onClose?.()
  }

  return (
    <>
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
          onClose={handleClose}
          onUpdateAnswer={state.updateAnswer}
        />
      )}
      {state.screen === 'results' && (
        <ResultsScreen
          results={state.results}
          onClose={handleClose}
        />
      )}
    </>
  )
}
