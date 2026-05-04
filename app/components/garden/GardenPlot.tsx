import { Sprout } from 'lucide-react'
import type { Flower } from '../../types'
import { PlantedFlower } from './PlantedFlower'

type GardenPlotProps = {
    plantedFlowers: Flower[]
    maxPlots: number
    onRemoveFlower: (flowerId: string) => void
}

export function GardenPlot({
    plantedFlowers,
    maxPlots,
    onRemoveFlower,
}: GardenPlotProps) {
    const emptyPlots = maxPlots - plantedFlowers.length

    return (
        <div className="rounded-[2.5rem] border border-green-100 bg-white/70 p-5 shadow-sm">
            <div className="rounded-[2rem] bg-[#dcefc5] p-5">
                <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                            My Garden
                        </p>
                        <h2 className="font-heading text-4xl font-bold text-[#23452f]">
                            {plantedFlowers.length} / {maxPlots} planted
                        </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f8f5c] shadow-sm">
                        <Sprout size={25} />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {plantedFlowers.map((flower) => (
                        <PlantedFlower
                            key={flower.id}
                            flower={flower}
                            onRemove={() => onRemoveFlower(flower.id)}
                        />
                    ))}

                    {Array.from({ length: emptyPlots }).map((_, index) => (
                        <div
                            key={index}
                            className="flex min-h-32 items-center justify-center rounded-[1.5rem] border-2 border-dashed border-green-300/70 bg-[#f4f8e8]/70"
                        >
                            <Sprout size={22} className="text-[#8fbd72]" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
