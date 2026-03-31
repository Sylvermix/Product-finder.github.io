import { useState, useCallback } from 'react'
import type { QuizAnswers, Product } from './types'
import { allProducts, extraProducts } from './data/products'

export type AppScreen = 'push' | 'quiz' | 'results'
export type TransitionDirection = 'forward' | 'back'

const TOTAL_STEPS = 5

function computeResults(_answers: QuizAnswers): { selected: Product[]; more: Product[] } {
  return { selected: allProducts.slice(0, 4), more: extraProducts }
}

function getInitialState() {
  const hash = new URLSearchParams(window.location.hash.slice(1))
  const s = hash.get('screen') as AppScreen | null
  const st = parseInt(hash.get('step') ?? '1', 10)
  return { screen: s ?? 'push', step: isNaN(st) ? 1 : st }
}

export function useGiftFinderState() {
  const init = getInitialState()
  const [screen, setScreen] = useState<AppScreen>(init.screen)
  const [step, setStep] = useState(init.step)
  const [direction, setDirection] = useState<TransitionDirection>('forward')
  const demoAnswers: QuizAnswers = { recipient: 'man', productType: 'sweatshirts', occasion: 'Birthday', style: 'chic', interests: ['Sports', 'Golf'], budget: 150 }
  const [answers, setAnswers] = useState<QuizAnswers>(init.screen === 'results' ? demoAnswers : {
    recipient: '',
    productType: '',
    occasion: '',
    style: '',
    interests: [],
    budget: 120,
  })
  const [results, setResults] = useState<{ selected: Product[]; more: Product[] }>(
    init.screen === 'results' ? computeResults(demoAnswers) : { selected: [], more: [] }
  )

  const startQuiz = useCallback(() => {
    setDirection('forward')
    setScreen('quiz')
    setStep(1)
  }, [])

  const updateAnswer = useCallback(<K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => {
    setAnswers(prev => ({ ...prev, [key]: value }))
  }, [])

  const nextStep = useCallback((latestAnswers?: QuizAnswers) => {
    setDirection('forward')
    const toUse = latestAnswers ?? answers
    if (step < TOTAL_STEPS) {
      setStep(s => s + 1)
    } else {
      setResults(computeResults(toUse))
      setScreen('results')
    }
  }, [step, answers])

  const prevStep = useCallback(() => {
    setDirection('back')
    if (step > 1) setStep(s => s - 1)
    else setScreen('push')
  }, [step])

  const skip = useCallback(() => {
    setResults(computeResults(answers))
    setScreen('results')
  }, [answers])

  const reset = useCallback(() => {
    setScreen('push')
    setStep(1)
    setAnswers({ recipient: '', productType: '', occasion: '', style: '', interests: [], budget: 120 })
    setResults({ selected: [], more: [] })
  }, [])

  return {
    screen, step, totalSteps: TOTAL_STEPS, direction, answers, results,
    startQuiz, updateAnswer, nextStep, prevStep, skip, reset,
  }
}
