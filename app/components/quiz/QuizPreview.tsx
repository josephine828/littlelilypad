import { CircleHelp, Flower } from 'lucide-react'
import { Card } from '../ui/Card'

export function QuizPreview() {
    return (
        <Card variant="specimen" className="h-full min-h-[260px]">
            <div className="relative grid h-full gap-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff0c2] text-[#315c3c] shadow-sm">
                        <CircleHelp size={22} />
                    </div>
                </div>

                <div>
                    <h3 className="font-heading text-2xl font-bold text-[#23452f]">
                        Guess the Flower
                    </h3>

                    <p className="mt-2 leading-7 text-[#5a765e]">
                        Identify flowers from photos, scientific names, and
                        symbolism clues.
                    </p>
                </div>

                <div className="mt-auto rounded-[1.5rem] border border-[#d7e8c1] bg-white/55 p-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f6c6d8]/45 text-[#a55c77]">
                            <Flower size={24} />
                        </div>

                        <div>
                            <p className="text-sm font-bold text-[#315c3c]">
                                What flower symbolizes love?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}
