export type FlowerDifficulty = 'Beginner' | 'Curious' | 'Botanist'

export type Flower = {
    id: string
    commonName: string
    scientificName: string
    otherNames: string[]
    symbolism: string[]
    origin: string
    bloomSeason: string
    colorPalette: string[]
    funFacts: string[]
    careDifficulty: FlowerDifficulty
    sketch: string
}
