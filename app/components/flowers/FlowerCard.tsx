import { Flower2, Leaf } from 'lucide-react'
import type { Flower } from '../../types'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

export function FlowerCard({ flower }: { flower: Flower }) {
    return (
        <Card
            className="transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
            tabIcon={<Flower2 size={18} />}
        >
            <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                    <h3 className="font-heading text-2xl font-bold">
                        {flower.commonName}
                    </h3>
                    <p className="text-sm italic text-[#6a806d]">
                        {flower.scientificName}
                    </p>
                </div>
            </div>

            <div className="mb-4 flex flex-wrap gap-2">
                {flower.symbolism.map((symbol) => (
                    <Badge key={symbol}>{symbol}</Badge>
                ))}
            </div>

            <p className="mb-4 text-sm leading-6 text-[#5a765e]">
                {flower.funFacts[0]}
            </p>

            <div className="flex items-center gap-2 text-sm font-bold text-[#3f7f55]">
                <Leaf size={16} />
                {flower.bloomSeason}
            </div>
        </Card>
    )
}
