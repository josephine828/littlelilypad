import { RotateCcw, Sprout, Trophy } from 'lucide-react'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

type QuizResultsProps = {
    score: number
    totalQuestions: number
    onRestart: () => void
}

export function QuizResults({
    score,
    totalQuestions,
    onRestart,
}: QuizResultsProps) {
    const percentage = Math.round((score / totalQuestions) * 100)

    return (
        <Card className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#e4f3d3] text-[#3f8f5c]">
                {percentage >= 70 ? <Trophy size={32} /> : <Sprout size={32} />}
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                Quiz complete
            </p>

            <h2 className="font-heading mt-2 text-5xl font-bold text-[#23452f]">
                {score} / {totalQuestions}
            </h2>

            <p className="mx-auto mt-4 max-w-md leading-7 text-[#5a765e]">
                {percentage >= 70
                    ? 'Lovely work. Your garden knowledge is starting to bloom.'
                    : 'A gentle start. Every missed question is just another seed planted.'}
            </p>

            <div className="mt-8 flex justify-center">
                <Button onClick={onRestart}>
                    Try Again
                    <RotateCcw size={18} />
                </Button>
            </div>
        </Card>
    )
}
