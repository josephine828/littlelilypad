export function hexToRgb(hex: string) {
    const cleanHex = hex.replace('#', '')

    const red = parseInt(cleanHex.substring(0, 2), 16)
    const green = parseInt(cleanHex.substring(2, 4), 16)
    const blue = parseInt(cleanHex.substring(4, 6), 16)

    return { red, green, blue }
}

export function getReadableTextColor(hex: string) {
    const { red, green, blue } = hexToRgb(hex)

    const brightness = (red * 299 + green * 587 + blue * 114) / 1000

    return brightness > 150 ? '#23452f' : '#ffffff'
}

export async function copyToClipboard(value: string) {
    await navigator.clipboard.writeText(value)
}

export function buildCssVariables(colors: string[]) {
    return colors
        .map((color, index) => `--flower-color-${index + 1}: ${color};`)
        .join('\n')
}
