import { CircleHelp } from 'lucide-react'
import { Card } from '../ui/Card'

export function QuizPreview() {
    return (
        <Card>
            <CircleHelp className="mb-4 text-[#3f8f5c]" size={28} />

            <h3 className="font-heading text-2xl font-bold">
                Guess the Flower
            </h3>

            <p className="mt-2 leading-7 text-[#5a765e]">
                Practice identifying flowers from sketches, photos, clues, and
                more.
            </p>
        </Card>
    )
}
