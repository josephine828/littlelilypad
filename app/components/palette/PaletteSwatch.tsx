'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'
import { copyToClipboard, getReadableTextColor } from '../../utils/colorUtils'

type PaletteSwatchProps = {
    color: string
    label: string
}

export function PaletteSwatch({ color, label }: PaletteSwatchProps) {
    const [copied, setCopied] = useState(false)

    async function handleCopy() {
        await copyToClipboard(color)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1200)
    }

    return (
        <button
            onClick={handleCopy}
            className="group relative flex min-h-36 flex-col justify-between overflow-hidden rounded-[1.5rem] p-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-green-900/10"
            style={{
                backgroundColor: color,
                color: getReadableTextColor(color),
            }}
        >
            <span className="text-sm font-bold">{label}</span>

            <span className="flex items-center justify-between gap-3 text-sm font-bold">
                {color.toUpperCase()}
                {copied ? <Check size={17} /> : <Copy size={17} />}
            </span>
        </button>
    )
}
