type SectionHeaderProps = {
    eyebrow: string
    title: string
    description?: string
}

export function SectionHeader({
    eyebrow,
    title,
    description,
}: SectionHeaderProps) {
    return (
        <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#6a9b6f]">
                {eyebrow}
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold text-[#23452f]">
                {title}
            </h2>
            {description && (
                <p className="mt-2 max-w-xl leading-7 text-[#5a765e]">
                    {description}
                </p>
            )}
        </div>
    )
}
