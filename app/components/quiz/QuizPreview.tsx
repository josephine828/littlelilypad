import { CircleHelp } from 'lucide-react'
import { Card } from '../ui/Card'

export function QuizPreview() {
    return (
        <Card tabIcon={<CircleHelp size={18} />}>
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
