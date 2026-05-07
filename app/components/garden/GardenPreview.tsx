import { Sprout } from 'lucide-react'
import { Card } from '../ui/Card'

export function GardenPreview() {
    return (
        <Card tabIcon={<Sprout size={18} />}>
            <h3 className="font-heading text-2xl font-bold">My Garden</h3>

            <p className="mt-2 leading-7 text-[#5a765e]">
                Favorite flowers and plant them into your own little collected
                garden.
            </p>
        </Card>
    )
}
