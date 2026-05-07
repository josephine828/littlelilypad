'use client'

type DoodleItem = {
    className: string
    rotate?: string
    opacity?: number
    variant:
        | 'pad'
        | 'smallPad'
        | 'ripple'
        | 'waves'
        | 'sparkles'
        | 'bubbles'
        | 'flower'
}

const doodles: DoodleItem[] = [
    {
        variant: 'pad',
        className: 'absolute -left-16 top-[34%] h-48 w-48',
        rotate: '-14deg',
        opacity: 0.45,
    },
    {
        variant: 'pad',
        className: 'absolute right-[8%] top-[22%] h-40 w-40',
        rotate: '12deg',
        opacity: 0.42,
    },
    {
        variant: 'pad',
        className: 'absolute left-[70%] bottom-[-2rem] h-52 w-52',
        rotate: '-24deg',
        opacity: 0.38,
    },
    {
        variant: 'smallPad',
        className: 'absolute left-[38%] top-[14%] h-24 w-24',
        rotate: '28deg',
        opacity: 0.45,
    },
    {
        variant: 'smallPad',
        className: 'absolute left-[12%] bottom-[18%] h-20 w-20',
        rotate: '-32deg',
        opacity: 0.35,
    },
    {
        variant: 'waves',
        className: 'absolute left-[9%] top-[18%] h-12 w-28',
        opacity: 0.45,
    },
    {
        variant: 'waves',
        className: 'absolute right-[16%] top-[16%] h-12 w-28',
        opacity: 0.38,
    },
    {
        variant: 'waves',
        className: 'absolute left-[46%] bottom-[18%] h-12 w-28',
        opacity: 0.32,
    },
    {
        variant: 'ripple',
        className: 'absolute left-[66%] top-[58%] h-20 w-20',
        opacity: 0.4,
    },
    {
        variant: 'bubbles',
        className: 'absolute right-[14%] bottom-[30%] h-24 w-24',
        opacity: 0.42,
    },
    {
        variant: 'sparkles',
        className: 'absolute left-[30%] top-[48%] h-20 w-20',
        opacity: 0.38,
    },
    {
        variant: 'flower',
        className: 'absolute left-[18%] top-[58%] h-14 w-14',
        rotate: '18deg',
        opacity: 0.42,
    },
    {
        variant: 'flower',
        className: 'absolute right-[32%] top-[38%] h-12 w-12',
        rotate: '-16deg',
        opacity: 0.34,
    },
]

function LilyPadLineArt({
    className,
    rotate = '0deg',
    opacity = 1,
}: {
    className: string
    rotate?: string
    opacity?: number
}) {
    return (
        <svg
            viewBox="0 0 180 180"
            className={className}
            style={{ transform: `rotate(${rotate})`, opacity }}
            aria-hidden="true"
        >
            <path
                d="
                    M150 45
                    C126 24 93 12 58 24
                    C24 36 8 68 17 103
                    C28 147 69 171 112 161
                    C150 152 171 122 166 84
                "
                fill="none"
                stroke="#7fac5f"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M92 88 L150 45"
                fill="none"
                stroke="#7fac5f"
                strokeWidth="3.5"
                strokeLinecap="round"
            />

            <path
                d="M92 88 L166 84"
                fill="none"
                stroke="#7fac5f"
                strokeWidth="3.5"
                strokeLinecap="round"
            />
            <path
                d="
                    M92 88
                    Q74 62 50 42

                    M92 88
                    Q64 80 34 88

                    M92 88
                    Q72 108 56 142

                    M92 88
                    Q96 122 102 152

                    M92 88
                    Q124 108 148 132
                "
                fill="none"
                stroke="#a9cf88"
                strokeWidth="1.8"
                strokeLinecap="round"
                opacity="0.72"
            />

            <circle cx="92" cy="88" r="3.5" fill="#7fac5f" opacity="0.45" />
        </svg>
    )
}

function Waves({
    className,
    opacity = 1,
}: {
    className: string
    opacity?: number
}) {
    return (
        <svg
            viewBox="0 0 120 48"
            className={className}
            style={{ opacity }}
            aria-hidden="true"
        >
            <path d="M8 14C18 6 28 22 38 14S58 6 68 14 88 22 98 14 112 10 116 14" />
            <path d="M4 30C14 22 24 38 34 30S54 22 64 30 84 38 94 30 108 26 114 30" />
            <style jsx>{`
                path {
                    fill: none;
                    stroke: #83c9d5;
                    stroke-width: 3;
                    stroke-linecap: round;
                }
            `}</style>
        </svg>
    )
}

function Ripple({
    className,
    opacity = 1,
}: {
    className: string
    opacity?: number
}) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            style={{ opacity }}
            aria-hidden="true"
        >
            <ellipse cx="50" cy="50" rx="18" ry="9" />
            <ellipse cx="50" cy="50" rx="32" ry="16" />
            <ellipse cx="50" cy="50" rx="45" ry="22" />
            <style jsx>{`
                ellipse {
                    fill: none;
                    stroke: #93b86d;
                    stroke-width: 3;
                    stroke-linecap: round;
                }
            `}</style>
        </svg>
    )
}

function Sparkles({
    className,
    opacity = 1,
}: {
    className: string
    opacity?: number
}) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            style={{ opacity }}
            aria-hidden="true"
        >
            <path d="M24 18L26 26L34 28L26 30L24 38L22 30L14 28L22 26Z" />
            <path d="M70 20L72 26L78 28L72 30L70 36L68 30L62 28L68 26Z" />
            <path d="M46 56L49 66L59 69L49 72L46 82L43 72L33 69L43 66Z" />

            <style jsx>{`
                path {
                    fill: none;
                    stroke: #95bc73;
                    stroke-width: 2.2;
                    stroke-linejoin: round;
                    stroke-linecap: round;
                }
            `}</style>
        </svg>
    )
}

function Bubbles({
    className,
    opacity = 1,
}: {
    className: string
    opacity?: number
}) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={className}
            style={{ opacity }}
            aria-hidden="true"
        >
            <circle cx="22" cy="26" r="8" />
            <circle cx="48" cy="20" r="5" />
            <circle cx="68" cy="38" r="9" />
            <circle cx="38" cy="58" r="6" />
            <circle cx="72" cy="70" r="5" />
            <style jsx>{`
                circle {
                    fill: none;
                    stroke: #8fb06a;
                    stroke-width: 3;
                }
            `}</style>
        </svg>
    )
}

function TinyFlower({
    className,
    rotate = '0deg',
    opacity = 1,
}: {
    className: string
    rotate?: string
    opacity?: number
}) {
    return (
        <svg
            viewBox="0 0 80 80"
            className={className}
            style={{ transform: `rotate(${rotate})`, opacity }}
            aria-hidden="true"
        >
            <path d="M40 38C34 27 35 16 40 8C45 16 46 27 40 38Z" />
            <path d="M40 42C34 53 35 64 40 72C45 64 46 53 40 42Z" />
            <path d="M38 40C27 34 16 35 8 40C16 45 27 46 38 40Z" />
            <path d="M42 40C53 34 64 35 72 40C64 45 53 46 42 40Z" />
            <circle cx="40" cy="40" r="4" />
            <style jsx>{`
                path {
                    fill: none;
                    stroke: #ef9db5;
                    stroke-width: 3;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                circle {
                    fill: #ef9db5;
                    opacity: 0.55;
                }
            `}</style>
        </svg>
    )
}

export function LilyPadBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(223,240,194,0.38),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(246,198,216,0.20),transparent_24%),radial-gradient(circle_at_48%_88%,rgba(155,207,122,0.16),transparent_28%),linear-gradient(180deg,rgba(255,253,246,0.7),rgba(247,243,223,0.22))]" />

            {doodles.map((item, index) => {
                if (item.variant === 'pad') {
                    return (
                        <LilyPadLineArt
                            key={index}
                            className={item.className}
                            rotate={item.rotate}
                            opacity={item.opacity}
                        />
                    )
                }

                if (item.variant === 'smallPad') {
                    return (
                        <LilyPadLineArt
                            key={index}
                            className={item.className}
                            rotate={item.rotate}
                            opacity={item.opacity}
                        />
                    )
                }

                if (item.variant === 'waves') {
                    return (
                        <Waves
                            key={index}
                            className={item.className}
                            opacity={item.opacity}
                        />
                    )
                }

                if (item.variant === 'ripple') {
                    return (
                        <Ripple
                            key={index}
                            className={item.className}
                            opacity={item.opacity}
                        />
                    )
                }

                if (item.variant === 'sparkles') {
                    return (
                        <Sparkles
                            key={index}
                            className={item.className}
                            opacity={item.opacity}
                        />
                    )
                }

                if (item.variant === 'bubbles') {
                    return (
                        <Bubbles
                            key={index}
                            className={item.className}
                            opacity={item.opacity}
                        />
                    )
                }

                return (
                    <TinyFlower
                        key={index}
                        className={item.className}
                        rotate={item.rotate}
                        opacity={item.opacity}
                    />
                )
            })}
        </div>
    )
}
