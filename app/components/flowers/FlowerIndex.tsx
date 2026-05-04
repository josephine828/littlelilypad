'use client'

import { useMemo, useState } from 'react'
import type { FlowerDifficulty } from '../../types'
import { flowers } from '../../data/flowers'
import { FlowerDetailCard } from './FlowerDetailCard'
import { FlowerFilters } from './FlowerFilters'

export function FlowerIndex() {
    const [search, setSearch] = useState('')
    const [difficulty, setDifficulty] = useState<'All' | FlowerDifficulty>(
        'All'
    )
    const [season, setSeason] = useState('All')

    const seasons = useMemo(() => {
        return Array.from(new Set(flowers.map((flower) => flower.bloomSeason)))
    }, [])

    const filteredFlowers = useMemo(() => {
        const normalizedSearch = search.toLowerCase().trim()

        return flowers.filter((flower) => {
            const searchableText = [
                flower.commonName,
                flower.scientificName,
                flower.otherNames.join(' '),
                flower.symbolism.join(' '),
                flower.origin,
                flower.bloomSeason,
                flower.funFacts.join(' '),
            ]
                .join(' ')
                .toLowerCase()

            const matchesSearch =
                normalizedSearch.length === 0 ||
                searchableText.includes(normalizedSearch)

            const matchesDifficulty =
                difficulty === 'All' || flower.careDifficulty === difficulty

            const matchesSeason =
                season === 'All' || flower.bloomSeason === season

            return matchesSearch && matchesDifficulty && matchesSeason
        })
    }, [search, difficulty, season])

    return (
        <div className="grid gap-8">
            <FlowerFilters
                search={search}
                difficulty={difficulty}
                season={season}
                seasons={seasons}
                onSearchChange={setSearch}
                onDifficultyChange={setDifficulty}
                onSeasonChange={setSeason}
            />

            <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-bold text-[#5a765e]">
                    Showing {filteredFlowers.length} of {flowers.length} flowers
                </p>

                {(search || difficulty !== 'All' || season !== 'All') && (
                    <button
                        onClick={() => {
                            setSearch('')
                            setDifficulty('All')
                            setSeason('All')
                        }}
                        className="rounded-full bg-white px-4 py-2 text-sm font-bold text-[#3f7f55] shadow-sm transition hover:-translate-y-0.5"
                    >
                        Clear filters
                    </button>
                )}
            </div>

            {filteredFlowers.length > 0 ? (
                <div className="grid gap-5 lg:grid-cols-2">
                    {filteredFlowers.map((flower) => (
                        <FlowerDetailCard key={flower.id} flower={flower} />
                    ))}
                </div>
            ) : (
                <div className="rounded-[2rem] border border-dashed border-green-200 bg-white/60 p-10 text-center">
                    <h2 className="font-heading text-3xl font-bold text-[#23452f]">
                        Nothing blooming here yet.
                    </h2>
                    <p className="mt-2 text-[#5a765e]">
                        Try a different name, season, symbol, or difficulty
                        level.
                    </p>
                </div>
            )}
        </div>
    )
}
