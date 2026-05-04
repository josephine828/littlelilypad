'use client'

import { Check, Clipboard, Code2 } from 'lucide-react'
import { useState } from 'react'
import { buildCssVariables, copyToClipboard } from '../../utils/colorUtils'

type PaletteExportCardProps = {
    colors: string[]
}

export function PaletteExportCard({ colors }: PaletteExportCardProps) {
    const [copied, setCopied] = useState(false)

    const cssVariables = buildCssVariables(colors)

    async function handleCopy() {
        await copyToClipboard(cssVariables)
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1200)
    }

    return (
        <div className="rounded-[2rem] border border-green-100 bg-white/75 p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2 font-bold text-[#315c3c]">
                <Code2 size={18} />
                CSS palette
            </div>

            <pre className="overflow-x-auto rounded-2xl bg-[#23452f] p-4 text-sm leading-7 text-[#f7f3df]">
                {cssVariables}
            </pre>

            <button
                onClick={handleCopy}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#3f8f5c] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#32784c]"
            >
                {copied ? <Check size={17} /> : <Clipboard size={17} />}
                {copied ? 'Copied' : 'Copy CSS'}
            </button>
        </div>
    )
}
