import Image from 'next/image'
import Link from 'next/link'
import { Search, Sprout, WandSparkles } from 'lucide-react'
import { GardenPreview } from './components/garden/GardenPreview'
import { PalettePreview } from './components/palette/PalettePreview'
import { QuizPreview } from './components/quiz/QuizPreview'
import { FlowerOfTheDay } from './components/randomizer/FlowerOfTheDay'
import { Button } from './components/ui/Button'
import { SectionHeader } from './components/ui/SectionHeader'
import { getFlowerOfTheDay } from './utils/flowerUtils'

export default function Home() {
    const flowerOfTheDay = getFlowerOfTheDay()
    return (
        <main className="min-h-screen overflow-hidden bg-[#f7f3df] text-[#214432]">
            <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                <Image
                    src="/littlelilypadlogo_horizontal.svg"
                    alt="LittleLilypad"
                    width={170}
                    height={42}
                    priority
                />

                <nav className="hidden items-center gap-2 rounded-full border border-green-200 bg-white/70 p-1 text-sm font-semibold shadow-sm backdrop-blur md:flex">
                    {['Flowers', 'Quiz', 'Palette', 'Garden'].map((item) => (
                        <a
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="rounded-full px-4 py-2 transition hover:bg-[#e4f3d3] hover:text-[#2f6f46]"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-10">
                <div className="absolute left-[-80px] top-20 h-64 w-64 rounded-full bg-[#dff0c2] blur-3xl" />
                <div className="absolute right-[-80px] top-40 h-72 w-72 rounded-full bg-[#f6c6d8] blur-3xl" />

                <div className="relative z-10 grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="max-w-3xl">
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-semibold text-[#3f7f55] shadow-sm">
                            <WandSparkles size={16} />
                            Explore the language of flowers
                        </div>

                        <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                            Discover the stories behind every bloom.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f745b]">
                            Learn about flower meanings, origins, colors, and
                            characteristics through interactive profiles,
                            quizzes, palettes, and building a personal
                            collection of your favorite flowers.
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link href="/flowers">
                                <Button>
                                    Explore the Index
                                    <Search size={18} />
                                </Button>
                            </Link>

                            <Button variant="secondary">
                                Plant My Garden
                                <Sprout size={18} />
                            </Button>
                        </div>
                    </div>
                    <div className="pointer-events-none relative hidden min-h-[360px] items-center justify-center md:flex">
                        <div className="absolute h-72 w-72 rounded-full bg-white/40 blur-2xl" />

                        <Image
                            src={flowerOfTheDay.sketch}
                            alt={flowerOfTheDay.commonName}
                            width={420}
                            height={420}
                            priority
                            className="relative max-h-[380px] w-auto object-contain opacity-25 mix-blend-multiply"
                        />
                    </div>
                </div>
            </section>

            <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24">
                <FlowerOfTheDay flower={flowerOfTheDay} />

                <section>
                    <SectionHeader
                        eyebrow="Explore"
                        title="Different ways to wander through flowers"
                        description="Move between learning, collecting, creating, and growing at your own pace."
                    />

                    <div className="grid gap-5 md:grid-cols-3">
                        <Link href="/quiz">
                            <QuizPreview />
                        </Link>
                        <Link href="/palette">
                            <PalettePreview />
                        </Link>
                        <Link href="/garden">
                            <GardenPreview />
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
