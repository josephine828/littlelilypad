import { Sprout } from 'lucide-react'
import { Card } from '../ui/Card'

export function GardenPreview() {
    return (
        <Card>
            <Sprout className="mb-4 text-[#3f8f5c]" size={28} />

            <h3 className="font-heading text-2xl font-bold">My Garden</h3>

            <p className="mt-2 leading-7 text-[#5a765e]">
                Favorite flowers and plant them into your own little collected
                garden.
            </p>

            <div className="mt-5 grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="aspect-square rounded-2xl border border-dashed border-green-200 bg-[#f4f8e8]"
                    />
                ))}
            </div>
        </Card>
    )
}
