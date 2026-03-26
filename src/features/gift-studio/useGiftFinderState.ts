import { useState, useCallback } from 'react'
import type { QuizAnswers, Product } from './types'
import { allProducts } from './data/products'

export type AppScreen = 'push' | 'quiz' | 'results'
export type TransitionDirection = 'forward' | 'back'

const TOTAL_STEPS = 5

function computeResults(answers: QuizAnswers): { selected: Product[]; more: Product[] } {
  const sorted = [...allProducts].sort((a, b) => b.matchScore - a.matchScore)
  const ceiling = answers.budget * 1.2
  const within = sorted.filter(p => p.price <= ceiling)
  const over = sorted.filter(p => p.price > ceiling)
  const all = [...within, ...over]
  return { selected: all.slice(0, 8), more: all.slice(8) }
}

export function useGiftFinderState() {
  const [screen, setScreen] = useState<AppScreen>('push')
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState<TransitionDirection>('forward')
  const [answers, setAnswers] = useState<QuizAnswers>({
    recipient: '',
    productType: '',
    occasion: '',
    style: '',
    interests: [],
    budget: 120,
  })
  const [results, setResults] = useState<{ selected: Product[]; more: Product[] }>({
    selected: [],
    more: [],
  })

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
