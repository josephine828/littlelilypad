'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, RotateCcw, Zap } from 'lucide-react'
import type { QuizQuestion } from '../../types'
import { buildFlowerQuiz } from '../../utils/quizUtils'
import { Button } from '../ui/Button'
import { QuizQuestionCard } from './QuizQuestionCard'
import { QuizResults } from './QuizResults'

type QuizMode = 'normal' | 'lightning'
type LightningFeedback = {
    correctAnswer: string
    isCorrect: boolean
    questionId: string
    selectedAnswer: string
} | null

export function FlowerQuiz() {
    const [questions, setQuestions] = useState<QuizQuestion[]>(() =>
        buildFlowerQuiz()
    )
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [showHint, setShowHint] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const [mode, setMode] = useState<QuizMode>('normal')
    const [lightningFeedback, setLightningFeedback] =
        useState<LightningFeedback>(null)
    const lockedQuestionIdRef = useRef<string | null>(null)
    const advanceTimeoutRef = useRef<number | null>(null)

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
        [clearAdvanceTimeout, currentQuestion, currentQuestionId, handleNext, isLightningRound]
    )

    const handleRestart = useCallback(() => {
        setQuestions(buildFlowerQuiz())
        setCurrentIndex(0)
        setAnswers({})
        setShowHint(false)
        setShowResults(false)
        setMode('normal')
        setLightningFeedback(null)
        lockedQuestionIdRef.current = null
        clearAdvanceTimeout()
    }, [clearAdvanceTimeout])

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
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.75rem] border border-green-200 bg-white/70 p-3 shadow-sm backdrop-blur">
                <div className="flex items-center gap-2 text-sm font-bold text-[#315c3c]">
                    <Zap size={16} />
                    Quiz mode
                </div>

                <div className="flex rounded-full bg-[#f7f3df] p-1">
                    <button
                        type="button"
                        onClick={() => {
                            clearAdvanceTimeout()
                            setMode('normal')
                            setShowHint(false)
                            setLightningFeedback(null)
                        }}
                        className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                            !isLightningRound
                                ? 'bg-white text-[#23452f] shadow-sm'
                                : 'text-[#5a765e] hover:text-[#315c3c]'
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
                        className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                            isLightningRound
                                ? 'bg-white text-[#23452f] shadow-sm'
                                : 'text-[#5a765e] hover:text-[#315c3c]'
                        }`}
                    >
                        Lightning
                    </button>
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
