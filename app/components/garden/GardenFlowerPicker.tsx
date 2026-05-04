'use client'

import { Check, Flower2, Plus } from 'lucide-react'
import type { Flower } from '../../types'

type GardenFlowerPickerProps = {
    flowers: Flower[]
    plantedFlowerIds: string[]
    maxPlots: number
    onPlantFlower: (flowerId: string) => void
}

export function GardenFlowerPicker({
    flowers,
    plantedFlowerIds,
    maxPlots,
    onPlantFlower,
}: GardenFlowerPickerProps) {
    const isFull = plantedFlowerIds.length >= maxPlots

    return (
        <div className="rounded-[2rem] border border-green-100 bg-white/75 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-bold text-[#315c3c]">
                <Flower2 size={18} />
                Pick flowers to plant
            </div>

            <div className="grid gap-3">
                {flowers.map((flower) => {
                    const isPlanted = plantedFlowerIds.includes(flower.id)

                    return (
                        <button
                            key={flower.id}
                            onClick={() => onPlantFlower(flower.id)}
                            disabled={isPlanted || isFull}
                            className={`flex items-center justify-between gap-4 rounded-2xl border p-4 text-left transition ${
                                isPlanted
                                    ? 'border-[#82b366] bg-[#e4f3d3]'
                                    : 'border-green-100 bg-[#f7f3df] hover:-translate-y-0.5 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50'
                            }`}
                        >
                            <div>
                                <p className="font-heading text-xl font-bold text-[#23452f]">
                                    {flower.commonName}
                                </p>
                                <p className="text-xs italic text-[#6a806d]">
                                    {flower.scientificName}
                                </p>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="hidden gap-1 sm:flex">
                                    {flower.colorPalette
                                        .slice(0, 3)
                                        .map((color) => (
                                            <span
                                                key={color}
                                                className="h-5 w-5 rounded-full border border-white"
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                            />
                                        ))}
                                </div>

                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#3f8f5c] shadow-sm">
                                    {isPlanted ? (
                                        <Check size={18} />
                                    ) : (
                                        <Plus size={18} />
                                    )}
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>

            {isFull && (
                <p className="mt-4 rounded-2xl bg-[#f8dde8] p-3 text-sm font-bold text-[#7f3151]">
                    Your starter garden is full. Remove a flower to plant
                    another.
                </p>
            )}
        </div>
    )
}
