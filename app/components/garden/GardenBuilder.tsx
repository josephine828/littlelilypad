'use client'

import { useState } from 'react'
import { RotateCcw, Sparkles } from 'lucide-react'
import { flowers } from '../../data/flowers'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { Button } from '../ui/Button'
import { GardenPlot } from './GardenPlot'

const MAX_PLOTS = 8
const EMPTY_GARDEN = Array.from(
    { length: MAX_PLOTS },
    () => null as string | null
)

function normalizeGarden(value: unknown) {
    if (!Array.isArray(value)) {
        return [...EMPTY_GARDEN]
    }

    const nextGarden = [...EMPTY_GARDEN]
    const seenFlowerIds = new Set<string>()
    const flowerIds = value
        .filter((flowerId): flowerId is string => typeof flowerId === 'string')
        .filter((flowerId) => {
            if (seenFlowerIds.has(flowerId)) {
                return false
            }

            seenFlowerIds.add(flowerId)
            return true
        })

    flowerIds.slice(0, MAX_PLOTS).forEach((flowerId, index) => {
        nextGarden[index] = flowerId
    })

    return nextGarden
}

export function GardenBuilder() {
    const [plantedFlowerIds, setPlantedFlowerIds, isLoaded] = useLocalStorage<
        Array<string | null>
    >('littlelilypad-planted-flowers', [...EMPTY_GARDEN])
    const [selectedPlotIndex, setSelectedPlotIndex] = useState<number | null>(
        null
    )

    const normalizedPlantedFlowerIds = normalizeGarden(plantedFlowerIds)
    const plantedFlowers = normalizedPlantedFlowerIds.map((flowerId) =>
        flowerId
            ? (flowers.find((flower) => flower.id === flowerId) ?? null)
            : null
    )

    function handleSelectPlot(plotIndex: number) {
        setSelectedPlotIndex((current) =>
            current === plotIndex ? null : plotIndex
        )
    }

    function handlePlantFlower(flowerId: string) {
        if (selectedPlotIndex === null) return

        setPlantedFlowerIds((currentGarden) => {
            const nextGarden = normalizeGarden(currentGarden)
            const existingPlotIndex = nextGarden.findIndex(
                (currentFlowerId, plotIndex) =>
                    currentFlowerId === flowerId &&
                    plotIndex !== selectedPlotIndex
            )

            if (existingPlotIndex !== -1) {
                nextGarden[existingPlotIndex] = null
            }

            nextGarden[selectedPlotIndex] = flowerId
            return nextGarden
        })

        setSelectedPlotIndex(null)
    }

    function handlePlantSurpriseGarden() {
        const shuffledFlowers = [...flowers].sort(() => Math.random() - 0.5)
        const nextGarden = [...EMPTY_GARDEN]

        shuffledFlowers.slice(0, MAX_PLOTS).forEach((flower, index) => {
            nextGarden[index] = flower.id
        })

        setPlantedFlowerIds(nextGarden)
        setSelectedPlotIndex(null)
    }

    function handleClearGarden() {
        setPlantedFlowerIds([...EMPTY_GARDEN])
        setSelectedPlotIndex(null)
    }

    function handleClearPlot() {
        if (selectedPlotIndex === null) return

        setPlantedFlowerIds((currentGarden) => {
            const nextGarden = normalizeGarden(currentGarden)
            nextGarden[selectedPlotIndex] = null
            return nextGarden
        })

        setSelectedPlotIndex(null)
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
                    flowers={flowers}
                    plantedFlowers={plantedFlowers}
                    selectedPlotIndex={selectedPlotIndex}
                    onSelectPlot={handleSelectPlot}
                    onPlantFlower={handlePlantFlower}
                    onClearPlot={handleClearPlot}
                />

                <div className="rounded-[2rem] bg-[#e9f5d8] p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                        Garden corner
                    </p>

                    <h3 className="font-heading mt-2 text-4xl font-bold leading-none text-[#23452f]">
                        Plant flowers wherever you'd like.
                    </h3>

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
        </div>
    )
}
