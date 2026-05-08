'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import type { QuizQuestion } from '../../types'
import { buildFlowerQuiz } from '../../utils/quizUtils'
import { Button } from '../ui/Button'
import { QuizQuestionCard } from './QuizQuestionCard'
import { QuizResults } from './QuizResults'

export function FlowerQuiz() {
    const [questions, setQuestions] = useState<QuizQuestion[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [showHint, setShowHint] = useState(false)
    const [showResults, setShowResults] = useState(false)

    useEffect(() => {
        setQuestions(buildFlowerQuiz())
    }, [])

    const currentQuestion = questions[currentIndex] ?? null
    const selectedAnswer = currentQuestion
        ? (answers[currentQuestion.id] ?? null)
        : null
    const isLastQuestion =
        questions.length > 0 && currentIndex === questions.length - 1
    const isFinished = showResults

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
                if (selectedAnswer) {
                    event.preventDefault()
                    handleNext()
                }

                return
            }

            if (showResults || selectedAnswer) {
                return
            }

            const optionIndex = Number(event.key) - 1
            if (optionIndex < 0 || optionIndex > 3) {
                return
            }

            const option = currentQuestion.options[optionIndex]
            if (option) {
                setAnswers((currentAnswers) => ({
                    ...currentAnswers,
                    [currentQuestion.id]: option,
                }))
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentQuestion, selectedAnswer, showResults])

    function handleRestart() {
        setQuestions(buildFlowerQuiz())
        setCurrentIndex(0)
        setAnswers({})
        setShowHint(false)
        setShowResults(false)
    }

    if (questions.length === 0) {
        return (
            <div className="rounded-[2rem] bg-white/70 p-8 text-center font-bold text-[#3f7f55]">
                Growing your quiz...
            </div>
        )
    }

    const activeQuestion = questions[currentIndex]

    const score = questions.reduce((total, question) => {
        return answers[question.id] === question.correctAnswer
            ? total + 1
            : total
    }, 0)

    function handleSelectAnswer(answer: string) {
        setAnswers((currentAnswers) => ({
            ...currentAnswers,
            [activeQuestion.id]: answer,
        }))
    }

    function handleNext() {
        setShowHint(false)

        if (isLastQuestion) {
            setShowResults(true)
            return
        }

        setCurrentIndex((index) => index + 1)
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
            <QuizQuestionCard
                question={activeQuestion}
                questionNumber={currentIndex + 1}
                totalQuestions={questions.length}
                selectedAnswer={selectedAnswer}
                onSelectAnswer={handleSelectAnswer}
                showHint={showHint}
                onToggleHint={() => setShowHint((value) => !value)}
            />

            <div className="flex flex-col justify-between gap-3 sm:flex-row">
                <Button variant="secondary" onClick={handleRestart}>
                    Restart
                    <RotateCcw size={18} />
                </Button>

                <Button onClick={handleNext} disabled={!selectedAnswer}>
                    {isLastQuestion ? 'See Results' : 'Next Question'}
                    <ArrowRight size={18} />
                </Button>
            </div>
        </div>
    )
}
