'use client'

import { useMemo, useState } from 'react'
import {
    BookOpen,
    Droplets,
    MapPin,
    Palette,
    Shuffle,
    Sparkles,
} from 'lucide-react'
import { flowers } from '../../data/flowers'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'
import { FlowerPalettePicker } from './FlowerPalettePicker'
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
                        eyebrow="Flower colors"
                        title={`${selectedFlower.commonName} palette`}
                        description={`A palette based on the colors associated with ${selectedFlower.commonName.toLowerCase()}. Click any swatch to copy its hex code.`}
                    />

                    <div className="mb-5 flex flex-wrap gap-3">
                        <Button onClick={handleRandomize}>
                            Try Another Flower
                            <Shuffle size={18} />
                        </Button>

                        <Button variant="secondary">
                            Soft Natural Palette
                            <Droplets size={18} />
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {selectedFlower.colorPalette.map((color, index) => (
                            <PaletteSwatch
                                key={color}
                                color={color}
                                label={`${selectedFlower.commonName} ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="rounded-[2rem] bg-[#e9f5d8] p-6">
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="font-heading text-4xl font-bold leading-none text-[#23452f]">
                            {selectedFlower.commonName}
                        </h3>
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f8f5c]">
                            <Palette size={24} />
                        </div>
                    </div>

                    <div className="mt-5 grid gap-3">
                        {selectedFlower.symbolism && (
                            <div className="rounded-2xl bg-white/70 p-4">
                                <div className="mb-1 flex items-center gap-2 text-sm font-bold text-[#315c3c]">
                                    <Sparkles size={16} />
                                    Symbolism
                                </div>
                                <div className="space-y-3 text-sm leading-6 text-[#5a765e]">
                                    {selectedFlower.symbolism.map((item) => (
                                        <p key={item}>{item}</p>
                                    ))}
                                </div>
                            </div>
                        )}

                        {selectedFlower.origin && (
                            <div className="rounded-2xl bg-white/70 p-4">
                                <div className="mb-1 flex items-center gap-2 text-sm font-bold text-[#315c3c]">
                                    <MapPin size={16} />
                                    Origin
                                </div>
                                <p className="text-sm leading-6 text-[#5a765e]">
                                    {selectedFlower.origin}
                                </p>
                            </div>
                        )}

                        {selectedFlower.funFacts && (
                            <div className="rounded-2xl bg-white/70 p-4">
                                <div className="mb-1 flex items-center gap-2 text-sm font-bold text-[#315c3c]">
                                    <BookOpen size={16} />
                                    Did you know?
                                </div>
                                <div className="space-y-3 text-sm leading-6 text-[#5a765e]">
                                    {selectedFlower.funFacts.map((fact) => (
                                        <p key={fact}>{fact}</p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
