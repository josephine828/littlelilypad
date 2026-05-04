import Image from 'next/image'
import { BookOpen, Search, Sprout, WandSparkles } from 'lucide-react'
import { flowers } from './data/flowers'
import { FlowerCard } from './components/flowers/FlowerCard'
import { GardenPreview } from './components/garden/GardenPreview'
import { PalettePreview } from './components/palette/PalettePreview'
import { QuizPreview } from './components/quiz/QuizPreview'
import { FlowerOfTheDay } from './components/randomizer/FlowerOfTheDay'
import { Button } from './components/ui/Button'
import { SectionHeader } from './components/ui/SectionHeader'
import Link from 'next/link'

export default function Home() {
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
                    {['Index', 'Quiz', 'Palette', 'Garden'].map((item) => (
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

                <div className="relative z-10 max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-bold text-[#3f7f55] shadow-sm">
                        <WandSparkles size={16} />A tiny botanical world for
                        curious learners
                    </div>

                    <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                        Meet flowers like they have stories to tell.
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f745b]">
                        Explore flower profiles, collect favorites, test your
                        plant knowledge, create soft color palettes, and slowly
                        grow your own digital garden.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/index">
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
            </section>

            <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24">
                <FlowerOfTheDay />

                <section>
                    <SectionHeader
                        eyebrow="Feature paths"
                        title="Choose your way into the garden"
                        description="LittleLilypad can grow into several connected learning modes without becoming messy or monolithic."
                    />

                    <div className="grid gap-5 md:grid-cols-3">
                        <Link href="/quiz">
                            <QuizPreview />
                        </Link>
                        <Link href="/palette">
                            <PalettePreview />
                        </Link>
                        <GardenPreview />
                    </div>
                </section>

                <section>
                    <SectionHeader
                        eyebrow="Flower index"
                        title="Start with a small collection"
                        description="These starter cards are powered by your data file, so expanding the index later will be straightforward."
                    />

                    <div className="grid gap-5 md:grid-cols-3">
                        {flowers.map((flower) => (
                            <FlowerCard key={flower.id} flower={flower} />
                        ))}
                    </div>
                </section>

                <section className="rounded-[2rem] bg-[#e9f5d8] p-8">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#3f8f5c]">
                        <BookOpen size={24} />
                    </div>

                    <h2 className="font-heading text-3xl font-bold">
                        Built to expand slowly.
                    </h2>

                    <p className="mt-3 max-w-2xl leading-7 text-[#5a765e]">
                        Next, you can turn each preview into a full route: a
                        searchable flower index, a flower detail page, a
                        randomized daily flower, a quiz flow, a palette
                        generator, and a saved garden.
                    </p>
                </section>
            </div>
        </main>
    )
}
