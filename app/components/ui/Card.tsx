import type { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    className?: string
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div
            className={`
                group
                relative
                overflow-hidden
                rounded-[2.2rem]
                border
                border-[#d7e8c1]
                bg-[#fffdf6]
                p-6
                shadow-[0_18px_45px_rgba(64,98,72,0.10)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_24px_60px_rgba(64,98,72,0.14)]
                ${className}
            `}
        >
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: `
                            linear-gradient(
                                to bottom,
                                rgba(76, 120, 85, 0.12) 1px,
                                transparent 1px
                            )
                        `,
                        backgroundSize: '100% 28px',
                    }}
                />
            </div>

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#dff0c2]/70 blur-2xl transition-transform duration-500 group-hover:scale-110" />

            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#f6c6d8]/40 blur-2xl" />

            <div className="pointer-events-none absolute left-4 top-10 flex flex-col gap-5">
                {Array.from({ length: 6 }).map((_, i) => (
                    <span
                        key={i}
                        className="h-3 w-3 rounded-full border-2 border-[#b7caa7] bg-[#fffdf6]"
                    />
                ))}
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-[linear-gradient(to_right,rgba(215,232,193,0.35),transparent)]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(223,240,194,0.22),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(246,198,216,0.16),transparent_30%)]" />

            <div className="pointer-events-none absolute inset-2 rounded-[1.7rem] border border-[#edf5e4]" />

            <div className="pointer-events-none absolute right-10 top-0 h-6 w-16 rounded-b-2xl bg-[#f6c6d8]/80 shadow-sm" />

            <div className="relative z-10 pl-6">{children}</div>
        </div>
    )
}
