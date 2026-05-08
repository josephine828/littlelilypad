'use client'

import { useMemo, useState } from 'react'
import { BookOpen, MapPin, Palette, Shuffle, Sparkles } from 'lucide-react'
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

            <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <SectionHeader
                        eyebrow="Flower colors"
                        title={`${selectedFlower.commonName} palette`}
                        description={`Click any swatch to copy its hex code.`}
                    />

                    <div className="mb-5 flex flex-wrap gap-3">
                        <Button onClick={handleRandomize}>
                            Try Another Flower
                            <Shuffle size={18} />
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
                <div className="relative overflow-hidden rounded-[2rem] border border-green-100 bg-[#e9f5d8] p-6 shadow-sm">
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/40" />
                    <div className="absolute -bottom-16 left-6 h-40 w-40 rounded-full bg-[#d6edbd]/70" />

                    <div className="relative z-10">
                        <div className="flex items-start justify-between gap-5">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#6a9b6f]">
                                    Flower profile
                                </p>

                                <h3 className="font-heading mt-2 text-4xl font-bold leading-none text-[#23452f]">
                                    {selectedFlower.commonName}
                                </h3>
                            </div>

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#3f8f5c] shadow-sm">
                                <Palette size={24} />
                            </div>
                        </div>

                        <div className="mt-5 rounded-3xl bg-white/55 p-3 shadow-inner">
                            <div className="flex overflow-hidden rounded-2xl">
                                {selectedFlower.colorPalette
                                    .slice(0, 5)
                                    .map((color) => (
                                        <span
                                            key={color}
                                            className="h-12 flex-1"
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                            </div>
                        </div>
                        <div className="mt-6 grid gap-3">
                            <div className="grid gap-3 md:grid-cols-2">
                                {selectedFlower.symbolism && (
                                    <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm">
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#e9f5d8] text-[#3f8f5c]">
                                                <Sparkles size={17} />
                                            </span>

                                            <p className="text-sm font-bold text-[#315c3c]">
                                                Symbolism
                                            </p>
                                        </div>

                                        <div className="space-y-2 text-sm leading-6 text-[#5a765e]">
                                            {selectedFlower.symbolism.map(
                                                (item) => (
                                                    <p key={item}>{item}</p>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                                {selectedFlower.origin && (
                                    <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm">
                                        <div className="mb-3 flex items-center gap-3">
                                            <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#e9f5d8] text-[#3f8f5c]">
                                                <MapPin size={17} />
                                            </span>

                                            <p className="text-sm font-bold text-[#315c3c]">
                                                Origin
                                            </p>
                                        </div>

                                        <p className="text-sm leading-6 text-[#5a765e]">
                                            {selectedFlower.origin}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {selectedFlower.funFacts && (
                                <div className="rounded-3xl border border-white/70 bg-white/75 p-4 shadow-sm">
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#e9f5d8] text-[#3f8f5c]">
                                            <BookOpen size={17} />
                                        </span>

                                        <p className="text-sm font-bold text-[#315c3c]">
                                            Did you know?
                                        </p>
                                    </div>

                                    <div className="space-y-2 text-sm leading-6 text-[#5a765e]">
                                        {selectedFlower.funFacts.map((fact) => (
                                            <p key={fact}>{fact}</p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
