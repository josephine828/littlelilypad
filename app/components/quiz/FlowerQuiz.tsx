'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import type { QuizFocus } from '../../types'
import { buildFlowerQuiz } from '../../utils/quizUtils'
import { Button } from '../ui/Button'
import { QuizQuestionCard } from './QuizQuestionCard'
import { QuizResults } from './QuizResults'

type QuizMode = 'normal' | 'lightning'
const QUIZ_FOCUS_OPTIONS: Array<{
    label: string
    value: QuizFocus
}> = [
    { label: 'Mixed', value: 'mixed' },
    { label: 'Pictures', value: 'picture' },
    { label: 'Scientific names', value: 'scientificName' },
    { label: 'Symbolism', value: 'symbolism' },
]
type LightningFeedback = {
    correctAnswer: string
    isCorrect: boolean
    questionId: string
    selectedAnswer: string
} | null

export function FlowerQuiz() {
    const [quizFocus, setQuizFocus] = useState<QuizFocus>('mixed')
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [showHint, setShowHint] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [mode, setMode] = useState<QuizMode>('normal')
    const [lightningFeedback, setLightningFeedback] =
        useState<LightningFeedback>(null)
    const lockedQuestionIdRef = useRef<string | null>(null)
    const advanceTimeoutRef = useRef<number | null>(null)
    const questions = useMemo(() => buildFlowerQuiz(quizFocus), [quizFocus])

    const currentQuestion = questions[currentIndex] ?? null
    const currentQuestionId = currentQuestion?.id ?? null
    const selectedAnswer = currentQuestion
        ? (answers[currentQuestion.id] ?? null)
        : null
    const isLastQuestion =
        questions.length > 0 && currentIndex === questions.length - 1
    const isFinished = showResults
    const isLightningRound = mode === 'lightning'

    const clearAdvanceTimeout = useCallback(() => {
        if (advanceTimeoutRef.current) {
            clearTimeout(advanceTimeoutRef.current)
            advanceTimeoutRef.current = null
        }
    }, [])

    const resetQuizState = useCallback(() => {
        setCurrentIndex(0)
        setAnswers({})
        setShowHint(false)
        setShowResults(false)
        setLightningFeedback(null)
        lockedQuestionIdRef.current = null
        clearAdvanceTimeout()
    }, [clearAdvanceTimeout])

    useEffect(() => {
        lockedQuestionIdRef.current = null
    }, [currentQuestionId])

    const handleNext = useCallback(() => {
        setShowHint(false)
        setLightningFeedback(null)
        clearAdvanceTimeout()

        if (isLastQuestion) {
            setShowResults(true)
            return
        }

        setCurrentIndex((index) => index + 1)
    }, [clearAdvanceTimeout, isLastQuestion])

    const handleSelectAnswer = useCallback(
        (answer: string) => {
            if (!currentQuestionId) {
                return
            }

            if (
                isLightningRound &&
                lockedQuestionIdRef.current === currentQuestionId
            ) {
                return
            }

            lockedQuestionIdRef.current = currentQuestionId

            setAnswers((currentAnswers) => ({
                ...currentAnswers,
                [currentQuestionId]: answer,
            }))

            setShowHint(false)

            if (isLightningRound) {
                const isCorrect = answer === currentQuestion.correctAnswer

                setLightningFeedback({
                    correctAnswer: currentQuestion.correctAnswer,
                    isCorrect,
                    questionId: currentQuestionId,
                    selectedAnswer: answer,
                })

                clearAdvanceTimeout()

                advanceTimeoutRef.current = window.setTimeout(() => {
                    advanceTimeoutRef.current = null
                    handleNext()
                }, 450)
            }
        },
        [
            clearAdvanceTimeout,
            currentQuestion,
            currentQuestionId,
            handleNext,
            isLightningRound,
        ]
    )

    const handleRestart = useCallback(() => {
        setMode('normal')
        resetQuizState()
    }, [resetQuizState])

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (!currentQuestion) {
                return
            }

            if (event.metaKey || event.ctrlKey || event.altKey) {
                return
            }

            const activeElement = document.activeElement
            if (
                activeElement instanceof HTMLInputElement ||
                activeElement instanceof HTMLTextAreaElement ||
                activeElement instanceof HTMLSelectElement
            ) {
                return
            }

            if (event.key === 'Enter') {
                if (selectedAnswer && !isLightningRound) {
                    event.preventDefault()
                    handleNext()
                }

                return
            }

            if (showResults || (!isLightningRound && selectedAnswer)) {
                return
            }

            const optionIndex = Number(event.key) - 1
            if (optionIndex < 0 || optionIndex > 3) {
                return
            }

            const option = currentQuestion.options[optionIndex]
            if (option) {
                handleSelectAnswer(option)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [
        currentQuestion,
        handleNext,
        handleSelectAnswer,
        isLightningRound,
        selectedAnswer,
        showResults,
    ])

    useEffect(() => {
        return clearAdvanceTimeout
    }, [clearAdvanceTimeout])

    const score = questions.reduce((total, question) => {
        return answers[question.id] === question.correctAnswer
            ? total + 1
            : total
    }, 0)

    if (questions.length === 0) {
        return (
            <div className="rounded-[2rem] bg-white/70 p-8 text-center font-bold text-[#3f7f55]">
                Growing your quiz...
            </div>
        )
    }

    if (isFinished) {
        return (
            <QuizResults
                score={score}
                totalQuestions={questions.length}
                onRestart={handleRestart}
            />
        )
    }

    return (
        <div className="grid gap-6">
            <div className="flex flex-col gap-4 rounded-[1.75rem] border border-green-200 bg-white/70 p-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-2 rounded-full bg-[#edf6e0] p-1 shadow-inner">
                        {QUIZ_FOCUS_OPTIONS.map((option) => {
                            const isActive = quizFocus === option.value

                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                        if (isActive) {
                                            return
                                        }

                                        resetQuizState()
                                        setQuizFocus(option.value)
                                    }}
                                    aria-pressed={isActive}
                                    className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86b56b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf6e0] ${
                                        isActive
                                            ? 'bg-white text-[#23452f] shadow-sm'
                                            : 'text-[#5a765e] hover:bg-white/70 hover:text-[#315c3c]'
                                    }`}
                                >
                                    {option.label}
                                </button>
                            )
                        })}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex rounded-full bg-[#f7f3df] p-1 shadow-inner">
                        <button
                            type="button"
                            onClick={() => {
                                clearAdvanceTimeout()
                                setMode('normal')
                                setShowHint(false)
                                setLightningFeedback(null)
                            }}
                            aria-pressed={!isLightningRound}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86b56b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f3df] ${
                                !isLightningRound
                                    ? 'bg-white text-[#23452f] shadow-sm'
                                    : 'text-[#5a765e] hover:bg-white/70 hover:text-[#315c3c]'
                            }`}
                        >
                            Normal
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                clearAdvanceTimeout()
                                setMode('lightning')
                                setShowHint(false)
                                setLightningFeedback(null)
                            }}
                            aria-pressed={isLightningRound}
                            className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86b56b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f3df] ${
                                isLightningRound
                                    ? 'bg-white text-[#23452f] shadow-sm'
                                    : 'text-[#5a765e] hover:bg-white/70 hover:text-[#315c3c]'
                            }`}
                        >
                            Lightning
                        </button>
                    </div>
                </div>
            </div>

            <QuizQuestionCard
                question={currentQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={questions.length}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                showHint={showHint}
                onToggleHint={() => setShowHint((value) => !value)}
                mode={mode}
                lightningFeedback={lightningFeedback}
            />

            <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <Button variant="secondary" onClick={handleRestart}>
                    Restart
                    <RotateCcw size={18} />
                </Button>

                {!isLightningRound && (
                    <Button onClick={handleNext} disabled={!selectedAnswer}>
                        {isLastQuestion ? 'See Results' : 'Next Question'}
                        <ArrowRight size={18} />
                    </Button>
                )}
            </div>
        </div>
    )
}
