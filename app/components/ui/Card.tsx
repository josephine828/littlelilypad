import type { ReactNode } from 'react'
import { CardVariant } from '@/app/types'

type CardProps = {
    children: ReactNode
    className?: string
    tabIcon?: ReactNode
    variant?: CardVariant
}
const base =
    'group relative overflow-hidden rounded-[2.2rem] border bg-[#fffdf6] p-6 shadow-[0_18px_45px_rgba(64,98,72,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(64,98,72,0.14)]'

export function Card({
    children,
    className = '',
    variant = 'notebook',
    tabIcon,
}: CardProps) {
    return (
        <div className={`${base} ${getVariantShell(variant)} ${className}`}>
            {variant === 'notebook' && <NotebookDecor />}
            {variant === 'taped' && <TapedDecor />}
            {variant === 'pressed' && <PressedDecor />}
            {variant === 'specimen' && <SpecimenDecor />}
            {variant === 'bookmark' && <BookmarkDecor />}
            {variant === 'watercolor' && <WatercolorDecor />}

            {tabIcon && variant === 'notebook' && (
                <div
                    className="absolute right-4 top-0 z-20 h-14 w-12 border border-t-0 border-[#f6c6d8] bg-[#f6c6d8]/60 text-[#a55c77] shadow-[0_6px_14px_rgba(64,98,72,0.10)]"
                    style={{
                        clipPath:
                            'polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)',
                    }}
                >
                    <div className="flex h-full items-start justify-center pt-3">
                        {tabIcon}
                    </div>
                </div>
            )}

            <div
                className={`relative z-10 ${
                    variant === 'notebook' ? 'pl-6' : ''
                }`}
            >
                {children}
            </div>
        </div>
    )
}

function getVariantShell(variant: CardVariant) {
    switch (variant) {
        case 'taped':
            return 'overflow-visible border-[#d9cda8] bg-[#fffaf0]'
        case 'pressed':
            return 'border-[#dfd1b5] bg-[#fffaf2]'
        case 'specimen':
            return 'rounded-[1.45rem] border-[#9fbf9b]/70 bg-[#fffdf5]'
        case 'bookmark':
            return 'border-[#e6c6d2] bg-[#fff8fb]'
        case 'watercolor':
            return 'border-[#bcded1] bg-[#f8fffb]'
        case 'notebook':
        default:
            return 'border-[#d7e8c1] bg-[#fffdf6]'
    }
}

function PaperLines() {
    return (
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
    )
}

function NotebookDecor() {
    return (
        <>
            <PaperLines />

            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#dff0c2]/70 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-[#f6c6d8]/40 blur-2xl" />

            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-[linear-gradient(to_right,rgba(215,232,193,0.35),transparent)]" />

            <div
                className="pointer-events-none absolute bottom-6 left-4 top-6 w-3"
                style={{
                    backgroundImage: `
                        radial-gradient(
                            circle,
                            #fffdf6 0 4px,
                            #b7caa7 4px 6px,
                            transparent 6px
                        )
                    `,
                    backgroundSize: '12px 28px',
                    backgroundRepeat: 'repeat-y',
                }}
            />

            <div className="pointer-events-none absolute inset-2 rounded-[1.7rem] border border-[#edf5e4]" />
        </>
    )
}

function TapedDecor() {
    return (
        <>
            <PaperLines />

            <div className="pointer-events-none absolute -top-3 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rotate-[-2deg] rounded-md border border-white/40 bg-[#f7df94]/60 shadow-sm backdrop-blur-sm" />

            <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-[#eadfbd]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-28 w-28 rounded-tl-full bg-[#dff0c2]/35" />
        </>
    )
}

function PressedDecor() {
    return (
        <>
            <PaperLines />

            <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[#dff0c2]/60 blur-xl" />

            <div className="pointer-events-none absolute right-5 top-5 h-8 w-8 rounded-full border border-[#f6a9c4]/70 bg-[#f6c6d8]/35" />
            <div className="pointer-events-none absolute right-9 top-2 h-8 w-8 rotate-45 rounded-full border border-[#f6a9c4]/50 bg-[#f6c6d8]/25" />
            <div className="pointer-events-none absolute right-2 top-10 h-7 w-7 -rotate-12 rounded-full border border-[#f6a9c4]/50 bg-[#f6c6d8]/20" />

            <div className="pointer-events-none absolute bottom-5 left-5 h-12 w-6 -rotate-12 rounded-full bg-[#dff0c2]/70" />
            <div className="pointer-events-none absolute bottom-10 left-9 h-10 w-5 rotate-12 rounded-full bg-[#cde8b2]/60" />

            <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-[#eee2c9]" />
        </>
    )
}

function SpecimenDecor() {
    return (
        <>
            <div className="pointer-events-none absolute left-4 top-4 h-5 w-5 border-l border-t border-[#7fa474]/70" />
            <div className="pointer-events-none absolute right-4 top-4 h-5 w-5 border-r border-t border-[#7fa474]/70" />
            <div className="pointer-events-none absolute bottom-4 left-4 h-5 w-5 border-b border-l border-[#7fa474]/70" />
            <div className="pointer-events-none absolute bottom-4 right-4 h-5 w-5 border-b border-r border-[#7fa474]/70" />

            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7fa474]/50 to-transparent" />
            <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[#7fa474]/35 to-transparent" />
        </>
    )
}

function BookmarkDecor() {
    return (
        <>
            <PaperLines />

            <div className="pointer-events-none absolute right-8 top-0 h-16 w-8 bg-[#f6c6d8]/80 shadow-sm" />
            <div className="pointer-events-none absolute right-8 top-16 h-0 w-0 border-l-[16px] border-r-[16px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#f6c6d8]/80" />

            <div className="pointer-events-none absolute -left-8 bottom-0 h-32 w-32 rounded-full bg-[#f7df94]/35 blur-2xl" />
            <div className="pointer-events-none absolute inset-3 rounded-[1.6rem] border border-[#f2dce5]" />
        </>
    )
}

function WatercolorDecor() {
    return (
        <>
            <div className="pointer-events-none absolute -left-8 top-8 h-32 w-32 rounded-full border border-[#a7d8c0]/25 bg-[#cdeedb]/25 blur-sm" />
            <div className="pointer-events-none absolute right-8 bottom-4 h-20 w-24 rounded-full border border-[#a7d8c0]/20 bg-[#cdeedb]/20 blur-[2px]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(205,238,219,0.25),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(246,198,216,0.16),transparent_28%)]" />

            <div className="pointer-events-none absolute inset-3 rounded-[1.7rem] border border-[#dcefe8]/80" />
        </>
    )
}
