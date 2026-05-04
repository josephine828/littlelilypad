import { Sparkles } from 'lucide-react'
import { getFlowerOfTheDay } from '../../utils/flowerUtils'
import { FlowerCard } from '../flowers/FlowerCard'
import { SectionHeader } from '../ui/SectionHeader'

export function FlowerOfTheDay() {
    const flower = getFlowerOfTheDay()

    return (
        <section>
            <SectionHeader
                eyebrow="Daily discovery"
                title="Flower of the Day"
                description="A rotating plant pick to make every visit feel like a tiny field trip."
            />

            <div className="grid gap-5 md:grid-cols-[1fr_1.4fr]">
                <div className="rounded-[1.75rem] bg-[#e9f5d8] p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f8f5c]">
                        <Sparkles size={24} />
                    </div>

                    <h3 className="font-heading text-3xl font-bold">
                        Today is for {flower.commonName}s.
                    </h3>

                    <p className="mt-3 leading-7 text-[#5a765e]">
                        Learn its names, symbolism, colors, origin, and little
                        details that make it memorable.
                    </p>
                </div>

                <FlowerCard flower={flower} />
            </div>
        </section>
    )
}
