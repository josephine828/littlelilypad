import type { ReactNode } from 'react'

export function Badge({ children }: { children: ReactNode }) {
    return (
        <span className="inline-flex rounded-full bg-[#e4f3d3] px-3 py-1 text-xs font-bold text-[#3f7f55]">
            {children}
        </span>
    )
}
