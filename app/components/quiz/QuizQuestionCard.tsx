'use client'

import { Check, CircleHelp, Lightbulb, X } from 'lucide-react'
import type { QuizQuestion } from '../../types'
import { Card } from '../ui/Card'

type QuizQuestionCardProps = {
    question: QuizQuestion
    questionNumber: number
    totalQuestions: number
    selectedAnswer: string | null
    onSelectAnswer: (answer: string) => void
    showHint: boolean
    onToggleHint: () => void
}

export function QuizQuestionCard({
    question,
    questionNumber,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    showHint,
    onToggleHint,
}: QuizQuestionCardProps) {
    const hasAnswered = selectedAnswer !== null

    return (
        <Card className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.95fr]">
                <div className="relative min-h-[320px] overflow-hidden bg-[#e9f5d8]">
                    <img
                        src={question.imageUrl}
                        alt="Flower quiz question"
                        className="h-full min-h-[320px] w-full object-cover"
                    />

                    <div className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-sm font-bold text-[#315c3c] shadow-sm backdrop-blur">
                        Question {questionNumber} of {totalQuestions}
                    </div>
                </div>

                <div className="p-6 md:p-8">
                    <h2 className="font-heading text-4xl font-bold leading-none text-[#23452f]">
                        {question.prompt}
                    </h2>

                    <div className="mt-6 grid gap-3">
                        {question.options.map((option, index) => {
                            const isSelected = selectedAnswer === option
                            const isCorrect = question.correctAnswer === option

                            const answeredStyle =
                                hasAnswered && isCorrect
                                    ? 'border-[#82b366] bg-[#e4f3d3] text-[#23452f]'
                                    : hasAnswered && isSelected && !isCorrect
                                      ? 'border-[#d88aa8] bg-[#f8dde8] text-[#7f3151]'
                                      : 'border-green-100 bg-white hover:bg-[#f7f3df]'

                            return (
                                <button
                                    key={option}
                                    onClick={() => onSelectAnswer(option)}
                                    disabled={hasAnswered}
                                    className={`flex items-center justify-between rounded-2xl border px-4 py-4 text-left text-sm font-bold transition ${answeredStyle}`}
                                >
                                    <span className="flex min-w-0 items-center gap-3">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/80 text-xs font-black text-[#315c3c] shadow-sm">
                                            {index + 1}
                                        </span>
                                        <span className="truncate">
                                            {option}
                                        </span>
                                    </span>

                                    {hasAnswered && isCorrect && (
                                        <Check size={18} />
                                    )}
                                    {hasAnswered &&
                                        isSelected &&
                                        !isCorrect && <X size={18} />}
                                </button>
                            )
                        })}
                    </div>

                    <button
                        onClick={onToggleHint}
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f7f3df] px-4 py-2 text-sm font-bold text-[#3f7f55] transition hover:-translate-y-0.5"
                    >
                        <Lightbulb size={16} />
                        {showHint ? 'Hide hint' : 'Need a hint?'}
                    </button>

                    {showHint && (
                        <p className="mt-3 rounded-2xl bg-[#f7f3df] p-4 text-sm leading-6 text-[#5a765e]">
                            {question.hint}
                        </p>
                    )}

                    {hasAnswered && (
                        <div className="mt-5 rounded-2xl bg-[#f7f3df] p-4">
                            <p className="text-sm font-bold text-[#315c3c]">
                                {selectedAnswer === question.correctAnswer
                                    ? 'Correct.'
                                    : `Not quite. It was ${question.correctAnswer}.`}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-[#5a765e]">
                                {question.fact}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}
