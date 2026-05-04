import { Palette } from 'lucide-react'
import { flowers } from '../../data/flowers'
import { Card } from '../ui/Card'

export function PalettePreview() {
    const flower = flowers[1]

    return (
        <Card>
            <Palette className="mb-4 text-[#3f8f5c]" size={28} />

            <h3 className="font-heading text-2xl font-bold">Flower Palettes</h3>

            <p className="mt-2 leading-7 text-[#5a765e]">
                Build color palettes from petals, leaves, stems, and seasonal
                moods.
            </p>

            <div className="mt-5 flex gap-2">
                {flower.colorPalette.map((color) => (
                    <div
                        key={color}
                        className="h-10 flex-1 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>
        </Card>
    )
}
