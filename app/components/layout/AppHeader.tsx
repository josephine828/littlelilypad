'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CircleQuestionMark, Flower2, Palette, Sprout } from 'lucide-react'

const navItems = [
    {
        label: 'Flowers',
        href: '/flowers',
        icon: Flower2,
    },
    {
        label: 'Quiz',
        href: '/quiz',
        icon: CircleQuestionMark,
    },
    {
        label: 'Palette',
        href: '/palette',
        icon: Palette,
    },
    {
        label: 'Garden',
        href: '/garden',
        icon: Sprout,
    },
]

export function AppHeader() {
    const pathname = usePathname()

    return (
        <header className="sticky top-4 z-40 mx-auto w-full max-w-6xl px-4 sm:px-6">
            <div className="flex items-center gap-4 rounded-[2rem] border border-white/45 bg-white/35 px-4 py-3 shadow-[0_18px_60px_rgba(82,120,83,0.14)] backdrop-blur-2xl sm:px-5">
                <Link
                    href="/"
                    className="group relative isolate inline-flex items-center px-2 py-1 transition duration-300 hover:-translate-y-0.5"
                    aria-label="LittleLilypad home"
                >
                    <span className="pointer-events-none absolute -inset-6">
                        <span className="absolute inset-0 rounded-full bg-white/65 blur-2xl" />
                        <span className="absolute left-4 top-1 h-10 w-24 rounded-full bg-[#dff0c2]/70 blur-2xl" />
                        <span className="absolute right-3 top-3 h-8 w-16 rounded-full bg-[#f6c6d8]/50 blur-xl" />
                    </span>

                    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                        <span className="absolute left-[-40%] top-0 h-full w-1/3 rotate-12 bg-white/40 blur-md transition-transform duration-1000 group-hover:translate-x-[320%]" />
                    </span>

                    <Image
                        src="/littlelilypadlogo_horizontal.svg"
                        alt="LittleLilypad"
                        width={185}
                        height={46}
                        priority
                        className="relative z-10 drop-shadow-[0_2px_10px_rgba(255,255,255,0.9)]"
                    />
                </Link>

                <nav className="relative ml-auto hidden items-center gap-1 rounded-full border border-white/45 bg-white/35 p-1.5 backdrop-blur-xl md:flex">
                    <div className="absolute inset-0 rounded-full bg-white/15" />

                    {navItems.map((item) => {
                        const active = pathname === item.href

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`group relative overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-[2px] hover:text-[#2f6f46] ${
                                    active ? 'text-[#2f6f46]' : 'text-[#356348]'
                                }`}
                                aria-current={active ? 'page' : undefined}
                            >
                                <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#f6a9c4] opacity-0 transition-all duration-500 group-hover:-translate-y-8 group-hover:translate-x-5 group-hover:opacity-80" />

                                <div
                                    className={`absolute inset-0 rounded-full bg-gradient-to-b from-[#ecf8dd]/80 to-[#dff0c2]/80 transition-opacity duration-300 group-hover:opacity-100 ${
                                        active ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />

                                <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

                                <span className="relative z-10 flex items-center gap-2">
                                    <item.icon
                                        size={16}
                                        className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
                                    />
                                    {item.label}
                                </span>

                                <span className="absolute bottom-1 left-1/2 h-3 w-0 -translate-x-1/2 overflow-hidden transition-all duration-500 group-hover:w-20">
                                    <svg
                                        viewBox="0 0 120 12"
                                        className="h-full w-full"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M0 6 C 10 1, 20 11, 30 6 S 50 1, 60 6 S 80 11, 90 6 S 110 1, 120 6"
                                            fill="none"
                                            stroke="url(#waveGradient)"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                        />

                                        <defs>
                                            <linearGradient
                                                id="waveGradient"
                                                x1="0%"
                                                y1="0%"
                                                x2="100%"
                                                y2="0%"
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="#dff0c2"
                                                />
                                                <stop
                                                    offset="50%"
                                                    stopColor="#f6c6d8"
                                                />
                                                <stop
                                                    offset="100%"
                                                    stopColor="#f7df94"
                                                />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}
