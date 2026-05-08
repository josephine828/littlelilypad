'use client'

import Image from 'next/image'
import { Check, Flower2 } from 'lucide-react'
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
        <div className="rounded-[2rem] border border-green-100 bg-white/80 p-5 shadow-sm backdrop-blur">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#5f8264]">
                <Flower2 size={16} />
                Choose a flower
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {flowers.map((flower) => {
                    const isSelected = flower.id === selectedFlowerId

                    return (
                        <button
                            key={flower.id}
                            type="button"
                            onClick={() => onSelectFlower(flower.id)}
                            className={`flex items-center gap-4 rounded-3xl border p-3 text-left transition hover:-translate-y-0.5 ${
                                isSelected
                                    ? 'border-[#82b366] bg-[#eef8e4] shadow-[0_10px_30px_rgba(82,122,62,0.08)]'
                                    : 'border-green-100 bg-white/90 hover:border-[#c8dfbf] hover:bg-white'
                            }`}
                        >
                            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white bg-[#f6f3e8]">
                                <Image
                                    src={flower.sketch}
                                    alt={`${flower.commonName} sketch`}
                                    fill
                                    sizes="56px"
                                    className="object-cover"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <div className="min-w-0">
                                        <p className="font-heading truncate text-lg font-bold text-[#23452f]">
                                            {flower.commonName}
                                        </p>

                                        <p className="truncate text-xs italic text-[#6a806d]">
                                            {flower.scientificName}
                                        </p>
                                    </div>

                                    {isSelected && (
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#82b366] text-white">
                                            <Check size={15} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
