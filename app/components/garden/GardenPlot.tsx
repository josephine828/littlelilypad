import Image from 'next/image'
import { Check, Sprout, X } from 'lucide-react'
import type { Flower } from '../../types'

type GardenPlotProps = {
    flowers: Flower[]
    plantedFlowers: Array<Flower | null>
    selectedPlotIndex: number | null
    onSelectPlot: (plotIndex: number) => void
    onPlantFlower: (flowerId: string) => void
    onClearPlot: () => void
}

export function GardenPlot({
    flowers,
    plantedFlowers,
    selectedPlotIndex,
    onSelectPlot,
    onPlantFlower,
    onClearPlot,
}: GardenPlotProps) {
    return (
        <div className="rounded-[2.5rem] border border-green-100 bg-white/70 p-5 shadow-sm">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {plantedFlowers.map((flower, index) => {
                    const isActive = selectedPlotIndex === index
                    const isEmpty = flower === null

                    return (
                        <div key={index} className="relative overflow-visible">
                            <button
                                type="button"
                                onClick={() => onSelectPlot(index)}
                                className={`group relative flex min-h-32 w-full flex-col items-center justify-end overflow-visible rounded-[1.5rem] border-2 p-3 transition ${
                                    isActive
                                        ? 'border-[#fff7e6] bg-[#d9b68c] shadow-lg shadow-black/10'
                                        : 'border-[#8b5e3c]/25 bg-[#c99a6b]/55 hover:-translate-y-0.5 hover:border-[#fff7e6]/80 hover:bg-[#d9b68c]/70'
                                }`}
                                aria-label={`Plot ${index + 1}`}
                            >
                                <div className="absolute right-3 top-3 rounded-full bg-black/10 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#fff7e6]">
                                    {index + 1}
                                </div>

                                {isEmpty ? (
                                    <div className="flex flex-1 items-center justify-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-dashed border-[#fff7e6]/55 bg-[#b9875d]/35">
                                            <Sprout size={24} className="text-[#f4f8e8]" />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="relative flex flex-1 items-center justify-center pb-2">
                                        <div className="relative h-20 w-20 transition group-hover:scale-110">
                                            <Image
                                                src={flower.sketch}
                                                alt={flower.commonName}
                                                fill
                                                sizes="80px"
                                                className="object-contain drop-shadow-sm"
                                            />
                                        </div>
                                    </div>
                                )}
                            </button>

                            {isActive && (
                                <div className="absolute bottom-[calc(100%+0.75rem)] left-1/2 z-20 w-[min(16rem,76vw)] -translate-x-1/2 rounded-[1.5rem] border border-green-100 bg-white/95 p-3 shadow-xl shadow-black/10 backdrop-blur">
                                    <div className="grid grid-cols-4 gap-2">
                                        {flowers.map((choice) => {
                                            const isSelected = flower?.id === choice.id
                                            const isPlantedElsewhere = plantedFlowers.some(
                                                (currentFlower, plotIndex) =>
                                                    currentFlower?.id === choice.id &&
                                                    plotIndex !== index
                                            )

                                            return (
                                                <button
                                                    key={choice.id}
                                                    type="button"
                                                    title={choice.commonName}
                                                    aria-label={choice.commonName}
                                                    onClick={(event) => {
                                                        event.stopPropagation()
                                                        onPlantFlower(choice.id)
                                                    }}
                                                    disabled={isPlantedElsewhere}
                                                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition ${
                                                        isSelected
                                                            ? 'border-[#82b366] bg-[#e4f3d3] shadow-sm'
                                                            : isPlantedElsewhere
                                                                ? 'cursor-not-allowed border-green-100 bg-[#f7f3df] opacity-40'
                                                                : 'border-green-100 bg-[#f7f3df] hover:-translate-y-0.5 hover:bg-white'
                                                    }`}
                                                >
                                                    <div className="relative h-10 w-10">
                                                        <Image
                                                            src={choice.sketch}
                                                            alt={choice.commonName}
                                                            fill
                                                            sizes="40px"
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    {isSelected && (
                                                        <Check
                                                            size={14}
                                                            className="absolute right-0 top-0 rounded-full bg-white text-[#315c3c] shadow"
                                                        />
                                                    )}
                                                </button>
                                            )
                                        })}
                                    </div>

                                    <div className="mt-3 flex items-center gap-2">
                                        <button
                                            type="button"
                                            onClick={(event) => {
                                                event.stopPropagation()
                                                onClearPlot()
                                            }}
                                            disabled={flower === null}
                                            className="inline-flex h-9 flex-1 items-center justify-center rounded-full border border-green-200 bg-white/90 text-[#315c3c] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
                                            aria-label={`Clear plot ${index + 1}`}
                                            title="Clear plot"
                                        >
                                            <X size={14} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
