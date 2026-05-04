'use client'

import { Flower2 } from 'lucide-react'
import type { Flower } from '../../types'

type FlowerPalettePickerProps = {
    flowers: Flower[]
    selectedFlowerId: string
    onSelectFlower: (flowerId: string) => void
}

export function FlowerPalettePicker({
    flowers,
    selectedFlowerId,
    onSelectFlower,
}: FlowerPalettePickerProps) {
    return (
        <div className="rounded-[2rem] border border-green-100 bg-white/75 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-bold text-[#315c3c]">
                <Flower2 size={18} />
                Choose a flower
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {flowers.map((flower) => {
                    const isSelected = flower.id === selectedFlowerId

                    return (
                        <button
                            key={flower.id}
                            onClick={() => onSelectFlower(flower.id)}
                            className={`rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 ${
                                isSelected
                                    ? 'border-[#82b366] bg-[#e4f3d3]'
                                    : 'border-green-100 bg-[#f7f3df] hover:bg-white'
                            }`}
                        >
                            <p className="font-heading text-xl font-bold text-[#23452f]">
                                {flower.commonName}
                            </p>

                            <p className="mt-1 text-xs italic text-[#6a806d]">
                                {flower.scientificName}
                            </p>

                            <div className="mt-4 flex gap-1.5">
                                {flower.colorPalette.map((color) => (
                                    <span
                                        key={color}
                                        className="h-5 flex-1 rounded-full border border-white"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
