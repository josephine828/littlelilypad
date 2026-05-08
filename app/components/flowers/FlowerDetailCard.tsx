import Image from 'next/image'
import { BookOpen, Heart, Leaf, MapPin, Palette, Flower2 } from 'lucide-react'
import type { Flower, CardVariant } from '../../types'
import { Badge } from '../ui/Badge'
import { Card } from '../ui/Card'

type FlowerDetailCardProps = {
    flower: Flower
    variant?: CardVariant
}

export function FlowerDetailCard({
    flower,
    variant = 'notebook',
}: FlowerDetailCardProps) {
    return (
        <Card
            variant={variant}
            tabIcon={<Flower2 size={18} />}
            className="group relative overflow-hidden transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
        >
            <div className="absolute right-5 top-5 opacity-40 transition group-hover:rotate-6 group-hover:scale-110">
                <Image
                    src={flower.sketch}
                    alt={flower.commonName}
                    width={240}
                    height={240}
                    priority
                    className="relative max-h-[380px] w-auto object-contain opacity-25 mix-blend-multiply"
                />{' '}
            </div>

            <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                        <h3 className="font-heading text-3xl font-bold text-[#23452f]">
                            {flower.commonName}
                        </h3>
                        <p className="mt-1 text-sm italic text-[#6a806d]">
                            {flower.scientificName}
                        </p>
                    </div>

                    {/* <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f8dde8] text-[#b54a73] transition hover:scale-105">
                        <Heart size={20} />
                    </button> */}
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                    {flower.symbolism.map((symbol) => (
                        <Badge key={symbol}>{symbol}</Badge>
                    ))}
                </div>

                <div className="mb-5 grid gap-3 text-sm text-[#5a765e]">
                    <div className="flex gap-2">
                        <MapPin
                            size={17}
                            className="mt-0.5 shrink-0 text-[#3f8f5c]"
                        />
                        <span>
                            <strong className="text-[#315c3c]">Origin:</strong>{' '}
                            {flower.origin}
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <Leaf
                            size={17}
                            className="mt-0.5 shrink-0 text-[#3f8f5c]"
                        />
                        <span>
                            <strong className="text-[#315c3c]">
                                Bloom season:
                            </strong>{' '}
                            {flower.bloomSeason}
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <BookOpen
                            size={17}
                            className="mt-0.5 shrink-0 text-[#3f8f5c]"
                        />
                        <span>
                            <strong className="text-[#315c3c]">
                                Also called:
                            </strong>{' '}
                            {flower.otherNames.join(', ')}
                        </span>
                    </div>
                </div>

                <div className="mb-5">
                    <div className="mb-2 flex items-center gap-2 text-sm font-bold text-[#315c3c]">
                        <Palette size={16} />
                        Palette
                    </div>

                    <div className="flex gap-2">
                        {flower.colorPalette.map((color) => (
                            <div
                                key={color}
                                className="h-8 flex-1 rounded-full border border-white shadow-sm"
                                style={{ backgroundColor: color }}
                            />
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl bg-[#f7f3df] p-4">
                    <p className="mb-2 text-sm font-bold text-[#315c3c]">
                        Fun facts
                    </p>
                    <ul className="space-y-2 text-sm leading-6 text-[#5a765e]">
                        {flower.funFacts.map((fact) => (
                            <li key={fact}>• {fact}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    )
}
