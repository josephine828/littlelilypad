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

    useEffect(() => {
        setQuestions(buildFlowerQuiz())
    }, [])

    function handleRestart() {
        setQuestions(buildFlowerQuiz())
        setCurrentIndex(0)
        setAnswers({})
        setShowHint(false)
    }

    if (questions.length === 0) {
        return (
            <div className="rounded-[2rem] bg-white/70 p-8 text-center font-bold text-[#3f7f55]">
                Growing your quiz...
            </div>
        )
    }

    const currentQuestion = questions[currentIndex]
    const selectedAnswer = answers[currentQuestion.id] ?? null

    const score = questions.reduce((total, question) => {
        return answers[question.id] === question.correctAnswer
            ? total + 1
            : total
    }, 0)

    const isLastQuestion = currentIndex === questions.length - 1
    const isFinished =
        Object.keys(answers).length === questions.length && isLastQuestion

    function handleSelectAnswer(answer: string) {
        setAnswers((currentAnswers) => ({
            ...currentAnswers,
            [currentQuestion.id]: answer,
        }))
    }

    function handleNext() {
        setShowHint(false)

        if (!isLastQuestion) {
            setCurrentIndex((index) => index + 1)
        }
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
                question={currentQuestion}
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

                <Button
                    onClick={handleNext}
                    disabled={!selectedAnswer || isLastQuestion}
                >
                    Next Question
                    <ArrowRight size={18} />
                </Button>
            </div>
        </div>
    )
}
