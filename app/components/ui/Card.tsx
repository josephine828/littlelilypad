import type { ReactNode } from 'react'

type CardProps = {
    children: ReactNode
    className?: string
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div
            className={`rounded-[1.75rem] border border-green-100 bg-white/75 p-6 shadow-sm shadow-green-900/5 ${className}`}
        >
            {children}
        </div>
    )
}
