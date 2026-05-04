'use client'

import { RotateCcw, Sparkles } from 'lucide-react'
import { flowers } from '../../data/flowers'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Button } from '../ui/Button'
import { SectionHeader } from '../ui/SectionHeader'
import { GardenFlowerPicker } from './GardenFlowerPicker'
import { GardenPlot } from './GardenPlot'

const MAX_PLOTS = 8

export function GardenBuilder() {
    const [plantedFlowerIds, setPlantedFlowerIds, isLoaded] = useLocalStorage<
        string[]
    >('littlelilypad-planted-flowers', [])

    const plantedFlowers = flowers.filter((flower) =>
        plantedFlowerIds.includes(flower.id)
    )

    function handlePlantFlower(flowerId: string) {
        if (plantedFlowerIds.includes(flowerId)) return
        if (plantedFlowerIds.length >= MAX_PLOTS) return

        setPlantedFlowerIds([...plantedFlowerIds, flowerId])
    }

    function handleRemoveFlower(flowerId: string) {
        setPlantedFlowerIds(
            plantedFlowerIds.filter(
                (currentFlowerId) => currentFlowerId !== flowerId
            )
        )
    }

    function handlePlantSurpriseGarden() {
        const shuffledFlowers = [...flowers].sort(() => Math.random() - 0.5)
        setPlantedFlowerIds(
            shuffledFlowers.slice(0, MAX_PLOTS).map((f) => f.id)
        )
    }

    function handleClearGarden() {
        setPlantedFlowerIds([])
    }

    if (!isLoaded) {
        return (
            <div className="rounded-[2rem] bg-white/70 p-8 text-center font-bold text-[#3f7f55]">
                Opening the garden gate...
            </div>
        )
    }

    return (
        <div className="grid gap-10">
            <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <GardenPlot
                    plantedFlowers={plantedFlowers}
                    maxPlots={MAX_PLOTS}
                    onRemoveFlower={handleRemoveFlower}
                />

                <div className="rounded-[2rem] bg-[#e9f5d8] p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f8f5c]">
                        <Sparkles size={24} />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                        Garden mood
                    </p>

                    <h3 className="font-heading mt-2 text-4xl font-bold leading-none text-[#23452f]">
                        Build a tiny place for your favorite blooms.
                    </h3>

                    <p className="mt-4 leading-7 text-[#5a765e]">
                        Plant flowers into your garden, remove them by clicking
                        a planted bloom, or let LittleLilypad choose a surprise
                        garden for you.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                        <Button onClick={handlePlantSurpriseGarden}>
                            Plant Surprise Garden
                            <Sparkles size={18} />
                        </Button>

                        <Button variant="secondary" onClick={handleClearGarden}>
                            Clear Garden
                            <RotateCcw size={18} />
                        </Button>
                    </div>
                </div>
            </section>

            <section>
                <SectionHeader
                    eyebrow="Flower shelf"
                    title="Choose what to plant"
                    description="This currently saves to localStorage, so your garden will stay planted on this browser."
                />

                <GardenFlowerPicker
                    flowers={flowers}
                    plantedFlowerIds={plantedFlowerIds}
                    maxPlots={MAX_PLOTS}
                    onPlantFlower={handlePlantFlower}
                />
            </section>
        </div>
    )
}
