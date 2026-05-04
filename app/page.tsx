import Image from 'next/image'
import {
    BookOpen,
    Flower2,
    Leaf,
    MousePointer,
    Search,
    Sprout,
    WandSparkles,
} from 'lucide-react'

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
                    {['Explore', 'Learn', 'My Garden'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="rounded-full px-4 py-2 transition hover:bg-[#e4f3d3] hover:text-[#2f6f46]"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </header>

            <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-[1.05fr_0.95fr] md:pt-16">
                <div className="absolute left-[-80px] top-20 h-64 w-64 rounded-full bg-[#dff0c2] blur-3xl" />
                <div className="absolute bottom-10 right-[-80px] h-72 w-72 rounded-full bg-[#f6c6d8] blur-3xl" />

                <div className="relative z-10">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-bold text-[#3f7f55] shadow-sm">
                        <WandSparkles size={16} />A cozy field guide for curious
                        learners
                    </div>

                    <h1 className="font-heading max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight text-[#23452f] md:text-7xl">
                        Learn plants like a little adventure.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-[#4f745b]">
                        LittleLilypad turns flowers, leaves, plant care, and
                        nature facts into playful mini-lessons, collectible
                        discoveries, and gentle garden-themed learning moments.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#3f8f5c] px-6 py-3 text-base font-bold text-white shadow-lg shadow-green-900/10 transition hover:-translate-y-0.5 hover:bg-[#32784c]">
                            Start Exploring
                            <MousePointer
                                size={18}
                                className="transition group-hover:rotate-12"
                            />
                        </button>

                        <button className="inline-flex items-center justify-center gap-2 rounded-full border border-green-200 bg-white/75 px-6 py-3 text-base font-bold text-[#2f6f46] shadow-sm transition hover:-translate-y-0.5 hover:bg-white">
                            Browse the Garden
                            <Search size={18} />
                        </button>
                    </div>
                </div>

                <div className="relative z-10 mx-auto w-full max-w-md">
                    <div className="rounded-[2rem] border border-white/80 bg-white/70 p-5 shadow-2xl shadow-green-900/10 backdrop-blur">
                        <div className="rounded-[1.5rem] bg-[#e9f5d8] p-5">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                                        Today&apos;s Discovery
                                    </p>
                                    <h2 className="font-heading text-3xl font-bold">
                                        Moonflower
                                    </h2>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#3f8f5c] shadow-sm">
                                    <Flower2 size={25} />
                                </div>
                            </div>

                            <div className="grid gap-3">
                                <div className="rounded-2xl bg-white/80 p-4">
                                    <p className="text-sm font-bold text-[#315c3c]">
                                        Opens at night
                                    </p>
                                    <p className="mt-1 text-sm text-[#5d7b62]">
                                        Some flowers bloom after sunset to
                                        welcome nighttime pollinators.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div className="rounded-2xl bg-white/70 p-4">
                                        <Leaf
                                            className="mb-2 text-[#3f8f5c]"
                                            size={20}
                                        />
                                        <p className="text-sm font-bold">
                                            Plant Parts
                                        </p>
                                    </div>

                                    <div className="rounded-2xl bg-white/70 p-4">
                                        <Sprout
                                            className="mb-2 text-[#3f8f5c]"
                                            size={20}
                                        />
                                        <p className="text-sm font-bold">
                                            Care Level
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative mx-auto grid max-w-6xl gap-5 px-6 pb-24 md:grid-cols-3">
                {[
                    {
                        title: 'Field Notes',
                        text: 'Collect bite-sized facts as you discover new flowers and plants.',
                        icon: BookOpen,
                    },
                    {
                        title: 'Plant Profiles',
                        text: 'Explore each plant’s personality, habitat, needs, and surprises.',
                        icon: Flower2,
                    },
                    {
                        title: 'Garden Quests',
                        text: 'Follow gentle challenges that make learning feel like wandering.',
                        icon: Sprout,
                    },
                ].map((card) => {
                    const Icon = card.icon

                    return (
                        <div
                            key={card.title}
                            className="group rounded-[1.75rem] border border-green-100 bg-white/75 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
                        >
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e4f3d3] text-[#3f8f5c] transition group-hover:rotate-6">
                                <Icon size={24} />
                            </div>

                            <h3 className="font-heading text-2xl font-bold text-[#23452f]">
                                {card.title}
                            </h3>

                            <p className="mt-2 leading-7 text-[#5a765e]">
                                {card.text}
                            </p>
                        </div>
                    )
                })}
            </section>
        </main>
    )
}
