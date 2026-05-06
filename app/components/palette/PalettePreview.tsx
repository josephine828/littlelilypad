import { Palette } from 'lucide-react'
import { Card } from '../ui/Card'

export function PalettePreview() {
    return (
        <Card>
            <Palette className="mb-4 text-[#3f8f5c]" size={28} />

            <h3 className="font-heading text-2xl font-bold">Flower Palettes</h3>

            <p className="mt-2 leading-7 text-[#5a765e]">
                Build color palettes from petals, leaves, stems, and seasonal
                moods.
            </p>
        </Card>
    )
}
