import { Palette, Pipette } from 'lucide-react'
import { Card } from '../ui/Card'

const colors = ['#f6c6d8', '#dff0c2', '#f7df94', '#cdeedb', '#8fbf9b']

export function PalettePreview() {
    return (
        <Card variant="watercolor" className="h-full min-h-[260px]">
            <div className="relative grid h-full gap-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cdeedb] text-[#407765] shadow-sm">
                        <Palette size={22} />
                    </div>
                </div>

                <div>
                    <h3 className="font-heading text-2xl font-bold text-[#23452f]">
                        Flower Palettes
                    </h3>

                    <p className="mt-2 leading-7 text-[#5a765e]">
                        Build color palettes from petals, leaves, stems, and
                        seasonal moods.
                    </p>
                </div>

                <div className="mt-auto rounded-[1.6rem] border border-white/70 bg-white/50 p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-2 text-sm font-bold text-[#315c3c]">
                        <Pipette size={16} />
                        Petal mix
                    </div>

                    <div className="flex h-12 overflow-hidden rounded-full border border-white shadow-sm">
                        {colors.map((color) => (
                            <div
                                key={color}
                                className="flex-1 transition-transform duration-300 hover:scale-110"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}
