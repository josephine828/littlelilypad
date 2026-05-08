'use client'

import { useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, LayoutGrid, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import type { FlowerDifficulty } from '../../types'
import { flowers } from '../../data/flowers'
import { FlowerDetailCard } from './FlowerDetailCard'
import { FlowerFilters } from './FlowerFilters'

const cardVariants = [
    'notebook',
    'taped',
    'pressed',
    'specimen',
    'bookmark',
    'watercolor',
] as const

type ViewMode = 'gallery' | 'carousel'

export function FlowerIndex() {
    const [search, setSearch] = useState('')
    const [difficulty, setDifficulty] = useState<'All' | FlowerDifficulty>(
        'All'
    )
    const [season, setSeason] = useState('All')
    const [viewMode, setViewMode] = useState<ViewMode>('carousel')

    const sortedFlowers = useMemo(() => {
        return [...flowers].sort((a, b) =>
            a.commonName.localeCompare(b.commonName)
        )
    }, [])

    const [selectedFlowerId, setSelectedFlowerId] = useState(
        sortedFlowers[0]?.id ?? ''
    )

    const seasons = useMemo(() => {
        return Array.from(
            new Set(sortedFlowers.map((flower) => flower.bloomSeason))
        )
    }, [sortedFlowers])

    const filteredFlowers = useMemo(() => {
        const normalizedSearch = search.toLowerCase().trim()

        return sortedFlowers.filter((flower) => {
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
    }, [search, difficulty, season, sortedFlowers])

    const activeFlower =
        filteredFlowers.find((flower) => flower.id === selectedFlowerId) ??
        filteredFlowers[0] ??
        null

    const activeIndex = activeFlower
        ? filteredFlowers.findIndex((flower) => flower.id === activeFlower.id)
        : -1

    const handlePrevious = () => {
        if (filteredFlowers.length === 0 || activeIndex === -1) {
            return
        }

        const previousIndex =
            (activeIndex - 1 + filteredFlowers.length) % filteredFlowers.length
        setSelectedFlowerId(filteredFlowers[previousIndex].id)
    }

    const handleNext = () => {
        if (filteredFlowers.length === 0 || activeIndex === -1) {
            return
        }

        const nextIndex = (activeIndex + 1) % filteredFlowers.length
        setSelectedFlowerId(filteredFlowers[nextIndex].id)
    }

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
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 p-4 shadow-[0_18px_50px_rgba(64,98,72,0.08)] backdrop-blur-xl">
                <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[#dff0c2]/60 blur-3xl" />
                <div className="pointer-events-none absolute -right-8 bottom-0 h-28 w-28 rounded-full bg-[#f6c6d8]/35 blur-3xl" />

                <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                        <p className="mt-2 font-heading text-2xl font-bold text-[#23452f]">
                            {filteredFlowers.length} blooms found
                        </p>

                        <p className="mt-1 text-sm text-[#6a806d]">
                            Browse, compare, or step through each flower
                            profile.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <div className="inline-flex rounded-full border border-[#d7e8c1] bg-[#f8fbef]/80 p-1 shadow-inner">
                            <ViewModeButton
                                active={viewMode === 'carousel'}
                                icon={<Sparkles size={16} />}
                                onClick={() => setViewMode('carousel')}
                            >
                                Focus
                            </ViewModeButton>
                            <ViewModeButton
                                active={viewMode === 'gallery'}
                                icon={<LayoutGrid size={16} />}
                                onClick={() => setViewMode('gallery')}
                            >
                                Gallery
                            </ViewModeButton>
                        </div>

                        {(search ||
                            difficulty !== 'All' ||
                            season !== 'All') && (
                            <button
                                onClick={() => {
                                    setSearch('')
                                    setDifficulty('All')
                                    setSeason('All')
                                }}
                                className="rounded-full border border-[#d7e8c1] bg-white/80 px-4 py-2 text-sm font-bold text-[#3f7f55] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f7fbef]"
                            >
                                Clear filters
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {filteredFlowers.length === 0 ? (
                <div className="rounded-[2rem] border border-dashed border-green-200 bg-white/60 p-10 text-center">
                    <h2 className="font-heading text-3xl font-bold text-[#23452f]">
                        Nothing blooming here yet.
                    </h2>
                    <p className="mt-2 text-[#5a765e]">
                        Try a different name, season, symbol, or difficulty
                        level.
                    </p>
                </div>
            ) : (
                <>
                    {viewMode === 'gallery' && (
                        <div className="grid gap-5 lg:grid-cols-2">
                            {filteredFlowers.map((flower, index) => (
                                <FlowerDetailCard
                                    key={flower.id}
                                    flower={flower}
                                    variant={
                                        cardVariants[
                                            index % cardVariants.length
                                        ]
                                    }
                                />
                            ))}
                        </div>
                    )}
                    {viewMode === 'carousel' && activeFlower && (
                        <div className="grid gap-5 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start">
                            <aside className="sticky top-28 overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_18px_50px_rgba(64,98,72,0.08)] backdrop-blur-xl">
                                <div className="relative p-5">
                                    <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#dff0c2]/70 blur-2xl" />
                                    <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-[#f6c6d8]/35 blur-2xl" />

                                    <div className="relative">
                                        <div className="mb-4 flex items-center justify-between gap-3">
                                            <div className="flex items-center gap-2 font-bold text-[#315c3c]">
                                                <Sparkles size={18} />
                                                Focus
                                            </div>

                                            <span className="rounded-full bg-[#edf7de] px-3 py-1 text-xs font-black text-[#3f7f55]">
                                                {activeIndex + 1}/
                                                {filteredFlowers.length}
                                            </span>
                                        </div>

                                        <div className="mb-5">
                                            <div className="mb-2 h-2 overflow-hidden rounded-full bg-[#edf7de]">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-[#8fbf9b] to-[#3f8f5c] transition-all duration-500"
                                                    style={{
                                                        width: `${((activeIndex + 1) / filteredFlowers.length) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-2">
                                            <button
                                                onClick={handlePrevious}
                                                className="flex items-center justify-center gap-2 rounded-full border border-[#d7e8c1] bg-white/80 px-4 py-3 text-sm font-bold text-[#2f6f46] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#f7fbef]"
                                            >
                                                <ChevronLeft size={16} />
                                                Prev
                                            </button>

                                            <button
                                                onClick={handleNext}
                                                className="flex items-center justify-center gap-2 rounded-full bg-[#3f8f5c] px-4 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(63,143,92,0.25)] transition hover:-translate-y-0.5 hover:bg-[#32784c]"
                                            >
                                                Next
                                                <ChevronRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-[#d7e8c1]/70">
                                    <div className="max-h-[420px] overflow-y-auto p-3">
                                        <div className="grid gap-2">
                                            {filteredFlowers.map((flower) => {
                                                const selected =
                                                    flower.id ===
                                                    activeFlower.id

                                                return (
                                                    <button
                                                        key={flower.id}
                                                        onClick={() =>
                                                            setSelectedFlowerId(
                                                                flower.id
                                                            )
                                                        }
                                                        className={`group/jump rounded-[1.25rem] border p-3 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                                                            selected
                                                                ? 'border-[#9ccf7f] bg-[#f7fbef] shadow-[0_10px_24px_rgba(64,98,72,0.10)]'
                                                                : 'border-transparent bg-white/55 hover:border-[#d7e8c1] hover:bg-white'
                                                        }`}
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div className="min-w-0">
                                                                <p className="truncate font-heading text-lg font-bold text-[#23452f]">
                                                                    {
                                                                        flower.commonName
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                )
                                            })}
                                        </div>

                                        {filteredFlowers.length === 0 && (
                                            <div className="rounded-[1.5rem] border border-dashed border-[#d7e8c1] bg-white/55 p-5 text-center">
                                                <p className="font-bold text-[#315c3c]">
                                                    No blooms found.
                                                </p>
                                                <p className="mt-1 text-sm text-[#6a806d]">
                                                    Try another flower name,
                                                    season, or symbol.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </aside>

                            <div className="min-w-0 xl:pl-2">
                                <div className="mx-auto w-full max-w-5xl">
                                    <FlowerDetailCard
                                        flower={activeFlower}
                                        variant={
                                            cardVariants[
                                                activeIndex %
                                                    cardVariants.length
                                            ]
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    )
}
function ViewModeButton({
    active,
    icon,
    children,
    onClick,
}: {
    active: boolean
    icon: ReactNode
    children: ReactNode
    onClick: () => void
}) {
    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                active
                    ? 'bg-[#3f8f5c] text-white shadow-[0_8px_18px_rgba(63,143,92,0.22)]'
                    : 'text-[#3f7f55] hover:bg-white/80 hover:cursor-pointer hover:text-[#2f6f46] hover:shadow-[0_8px_18px_rgba(63,143,92,0.22)]'
            }`}
        >
            {icon}
            <span className="hidden sm:inline">{children}</span>
        </button>
    )
}
