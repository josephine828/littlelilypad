'use client'

import { Check, Lightbulb, X } from 'lucide-react'
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
    mode: 'normal' | 'lightning'
    lightningFeedback: {
        correctAnswer: string
        isCorrect: boolean
        questionId: string
        selectedAnswer: string
    } | null
}

export function QuizQuestionCard({
    question,
    questionNumber,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    showHint,
    onToggleHint,
    mode,
    lightningFeedback,
}: QuizQuestionCardProps) {
    const hasAnswered = selectedAnswer !== null
    const isLightningRound = mode === 'lightning'
    const showLightningFeedback =
        isLightningRound &&
        lightningFeedback?.questionId === question.id &&
        hasAnswered

    return (
        <Card className="overflow-hidden p-0">
            <div className="grid gap-0 lg:grid-cols-[1fr_0.95fr]">
                <div className="relative overflow-hidden p-6">
                    <div className="relative mx-auto h-[480px] w-full max-w-[520px] rotate-[-2deg] rounded-[1.75rem] bg-[#fffdf6] p-3 shadow-[0_18px_40px_rgba(49,92,60,0.18)] ring-1 ring-black/5">
                        <div className="absolute -top-3 left-1/2 z-10 h-7 w-28 -translate-x-1/2 rotate-[2deg] rounded-sm bg-[#f7e7a6]/80 shadow-sm backdrop-blur-sm" />

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={question.imageUrl}
                            alt={question.prompt}
                            className="h-full w-full rounded-[1.25rem] object-cover"
                        />
                    </div>

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
                                    className={`flex cursor-pointer items-center justify-between rounded-2xl border px-4 py-4 text-left text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86b56b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf6] disabled:cursor-not-allowed ${answeredStyle}`}
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

                    {!isLightningRound && (
                        <>
                            <button
                                onClick={onToggleHint}
                                className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#f7f3df] px-4 py-2 text-sm font-bold text-[#3f7f55] transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#86b56b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fffdf6]"
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
                                        {selectedAnswer ===
                                        question.correctAnswer
                                            ? 'Correct.'
                                            : `Not quite. It was ${question.correctAnswer}.`}
                                    </p>
                                    <p className="mt-1 text-sm leading-6 text-[#5a765e]">
                                        {question.fact}
                                    </p>
                                </div>
                            )}
                        </>
                    )}

                    {showLightningFeedback && (
                        <div className="mt-5 rounded-2xl bg-[#f7f3df] p-4">
                            <p className="text-sm font-bold text-[#315c3c]">
                                {lightningFeedback.isCorrect
                                    ? 'Correct.'
                                    : `Not quite. It was ${lightningFeedback.correctAnswer}.`}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-[#5a765e]">
                                {lightningFeedback.isCorrect
                                    ? 'Great job! Moving on.'
                                    : `You picked ${lightningFeedback.selectedAnswer}.`}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Card>
    )
}
