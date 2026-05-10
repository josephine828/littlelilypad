import Image from 'next/image'
import { BookOpen, Flower2, Leaf, MapPin, Palette } from 'lucide-react'
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
                    width={320}
                    height={320}
                    priority
                    className="relative max-h-[460px] w-auto object-contain opacity-25 mix-blend-multiply"
                />
            </div>

            <div className="relative">
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                        <h3 className="font-heading text-4xl font-bold text-[#23452f]">
                            {flower.commonName}
                        </h3>
                        <p className="mt-1 text-sm italic text-[#6a806d]">
                            {flower.scientificName}
                        </p>
                    </div>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                    {flower.symbolism.map((symbol) => (
                        <Badge key={symbol}>{symbol}</Badge>
                    ))}
                </div>

                <div className="mb-6 grid gap-3 text-sm text-[#5a765e]">
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

                <div className="mb-6">
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
                {flower.colorMeanings?.length ? (
                    <div className="mb-6 rounded-[1.5rem] border border-white/70 bg-white/50 p-4 shadow-inner">
                        <p className="mb-3 text-sm font-bold text-[#315c3c]">
                            Color meanings
                        </p>
                        <div className="space-y-3 text-sm leading-6 text-[#5a765e]">
                            {flower.colorMeanings.map((item) => (
                                <div
                                    key={item.label}
                                    className="flex items-start gap-3"
                                >
                                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9ccf7f]" />
                                    <div className="min-w-0">
                                        <p className="font-medium text-[#23452f]">
                                            {item.label}
                                        </p>
                                        <p>{item.meaning}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
                <div className="rounded-[1.5rem] border border-white/70 bg-white/50 p-5 shadow-inner">
                    <p className="mb-2 text-sm font-bold text-[#315c3c]">
                        Fun facts
                    </p>
                    <ul className="space-y-2 text-sm leading-6 text-[#5a765e]">
                        {flower.funFacts.map((fact) => (
                            <li key={fact} className="flex gap-2">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#9ccf7f]" />
                                <span>{fact}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Card>
    )
}
