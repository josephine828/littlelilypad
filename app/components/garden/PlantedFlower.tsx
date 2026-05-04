import { Flower2, Sparkle } from 'lucide-react'
import type { Flower } from '../../types'

type PlantedFlowerProps = {
    flower: Flower
    onRemove: () => void
}

export function PlantedFlower({ flower, onRemove }: PlantedFlowerProps) {
    const primaryColor = flower.colorPalette[0] ?? '#f6b6c8'
    const leafColor = flower.colorPalette[2] ?? '#9bbf74'

    return (
        <button
            onClick={onRemove}
            title={`Remove ${flower.commonName}`}
            className="group relative flex h-full min-h-32 flex-col items-center justify-end overflow-hidden rounded-[1.5rem] border border-green-200 bg-[#f4f8e8] p-3 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
        >
            <div className="absolute inset-x-3 bottom-2 h-6 rounded-full bg-[#d7bf8f]/40" />

            <div className="relative z-10 mb-5 flex flex-col items-center">
                <div
                    className="h-10 w-2 rounded-full"
                    style={{ backgroundColor: leafColor }}
                />

                <div className="relative -mt-12">
                    <div
                        className="absolute left-1/2 top-8 h-8 w-5 -translate-x-7 rotate-[-35deg] rounded-full"
                        style={{ backgroundColor: leafColor }}
                    />
                    <div
                        className="absolute left-1/2 top-9 h-8 w-5 translate-x-2 rotate-[35deg] rounded-full"
                        style={{ backgroundColor: leafColor }}
                    />

                    <div
                        className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white shadow-sm transition group-hover:rotate-12 group-hover:scale-110"
                        style={{ backgroundColor: primaryColor }}
                    >
                        <Flower2 size={28} className="text-white" />
                    </div>
                </div>
            </div>

            <div className="relative z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-[#315c3c] shadow-sm">
                {flower.commonName}
            </div>

            <Sparkle
                size={16}
                className="absolute right-4 top-4 text-[#d59c49] opacity-0 transition group-hover:opacity-100"
            />
        </button>
    )
}
