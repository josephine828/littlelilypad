import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode
    variant?: 'primary' | 'secondary'
}

export function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: ButtonProps) {
    const styles =
        variant === 'primary'
            ? 'bg-[#3f8f5c] text-white hover:bg-[#32784c]'
            : 'border border-green-200 bg-white/80 text-[#2f6f46] hover:bg-white'

    return (
        <button
            className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 ${styles} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
