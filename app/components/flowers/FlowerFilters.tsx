'use client'

import { Search, SlidersHorizontal } from 'lucide-react'
import type { FlowerDifficulty } from '../../types'

type FlowerFiltersProps = {
    search: string
    difficulty: 'All' | FlowerDifficulty
    season: string
    seasons: string[]
    onSearchChange: (value: string) => void
    onDifficultyChange: (value: 'All' | FlowerDifficulty) => void
    onSeasonChange: (value: string) => void
}

export function FlowerFilters({
    search,
    difficulty,
    season,
    seasons,
    onSearchChange,
    onDifficultyChange,
    onSeasonChange,
}: FlowerFiltersProps) {
    return (
        <div className="rounded-[2rem] border border-green-100 bg-white/75 p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-bold text-[#315c3c]">
                <SlidersHorizontal size={18} />
                Refine the garden
            </div>

            <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr]">
                <label className="relative block">
                    <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6a9b6f]"
                    />
                    <input
                        value={search}
                        onChange={(event) => onSearchChange(event.target.value)}
                        placeholder="Search by name, symbolism, origin..."
                        className="w-full rounded-full border border-green-100 bg-[#f7f3df] py-3 pl-11 pr-4 text-sm font-semibold outline-none transition focus:border-[#8fbd72]"
                    />
                </label>

                <select
                    value={difficulty}
                    onChange={(event) =>
                        onDifficultyChange(
                            event.target.value as 'All' | FlowerDifficulty
                        )
                    }
                    className="rounded-full border border-green-100 bg-[#f7f3df] px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#8fbd72]"
                >
                    <option value="All">All levels</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Curious">Curious</option>
                    <option value="Botanist">Botanist</option>
                </select>

                <select
                    value={season}
                    onChange={(event) => onSeasonChange(event.target.value)}
                    className="rounded-full border border-green-100 bg-[#f7f3df] px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#8fbd72]"
                >
                    <option value="All">All seasons</option>
                    {seasons.map((seasonName) => (
                        <option key={seasonName} value={seasonName}>
                            {seasonName}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
