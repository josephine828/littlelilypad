import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Flower2 } from 'lucide-react'
import { FlowerIndex } from '../../components/flowers/FlowerIndex'

export default function FlowerIndexPage() {
    return (
        <main className="min-h-screen bg-[#f7f3df] text-[#214432]">
            <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/littlelilypadlogo_horizontal.svg"
                        alt="LittleLilypad"
                        width={170}
                        height={42}
                        priority
                    />
                </Link>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/75 px-4 py-2 text-sm font-bold text-[#2f6f46] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                    <ArrowLeft size={16} />
                    Home
                </Link>
            </header>

            <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
                <div className="absolute left-[-70px] top-14 h-64 w-64 rounded-full bg-[#dff0c2] blur-3xl" />
                <div className="absolute right-[-80px] top-40 h-72 w-72 rounded-full bg-[#f6c6d8] blur-3xl" />

                <div className="relative z-10 mb-10 max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-sm font-bold text-[#3f7f55] shadow-sm">
                        <BookOpen size={16} />
                        Flower Index
                    </div>

                    <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                        A growing library of blooms.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f745b]">
                        Learn about flowers through their meanings, colors,
                        history, and natural beauty.
                    </p>
                </div>

                <FlowerIndex />
            </section>
        </main>
    )
}
