'use client'

import { useMemo, useState } from 'react'
import { Droplets, Palette, Shuffle } from 'lucide-react'
import { flowers } from '../../data/flowers'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'
import { FlowerPalettePicker } from './FlowerPalettePicker'
import { PaletteExportCard } from './PaletteExportCard'
import { PaletteSwatch } from './PaletteSwatch'

export function PaletteCreator() {
    const [selectedFlowerId, setSelectedFlowerId] = useState(
        flowers[0]?.id ?? ''
    )

    const selectedFlower = useMemo(() => {
        return (
            flowers.find((flower) => flower.id === selectedFlowerId) ??
            flowers[0]
        )
    }, [selectedFlowerId])

    function handleRandomize() {
        const randomFlower = flowers[Math.floor(Math.random() * flowers.length)]
        setSelectedFlowerId(randomFlower.id)
    }

    return (
        <div className="grid gap-10">
            <FlowerPalettePicker
                flowers={flowers}
                selectedFlowerId={selectedFlower.id}
                onSelectFlower={setSelectedFlowerId}
            />

            <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <SectionHeader
                        eyebrow="Generated palette"
                        title={`${selectedFlower.commonName} colors`}
                        description="Click any swatch to copy its hex code. These colors come from the starter data file for each flower."
                    />

                    <div className="mb-5 flex flex-wrap gap-3">
                        <Button onClick={handleRandomize}>
                            Random Flower
                            <Shuffle size={18} />
                        </Button>

                        <Button variant="secondary">
                            Mood: Soft Botanical
                            <Droplets size={18} />
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {selectedFlower.colorPalette.map((color, index) => (
                            <PaletteSwatch
                                key={color}
                                color={color}
                                label={`Color ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] bg-[#e9f5d8] p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f8f5c]">
                        <Palette size={24} />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                        Palette story
                    </p>

                    <h3 className="font-heading mt-2 text-4xl font-bold leading-none text-[#23452f]">
                        Inspired by {selectedFlower.commonName.toLowerCase()}.
                    </h3>

                    <p className="mt-4 leading-7 text-[#5a765e]">
                        This palette pulls from the flower&apos;s petals,
                        leaves, warmth, softness, and overall feeling. Later,
                        this can become a real palette generator using uploaded
                        flower photos or extracted image colors.
                    </p>

                    <div className="mt-5 rounded-2xl bg-white/70 p-4">
                        <p className="text-sm font-bold text-[#315c3c]">
                            Best used for
                        </p>
                        <p className="mt-1 text-sm leading-6 text-[#5a765e]">
                            Profile cards, garden backgrounds, badges, quiz
                            feedback, and seasonal UI themes.
                        </p>
                    </div>
                </div>
            </section>

            <PaletteExportCard colors={selectedFlower.colorPalette} />
        </div>
    )
}
