export type FlowerDifficulty = 'Beginner' | 'Curious' | 'Botanist'
export type QuizFocus = 'mixed' | 'picture' | 'scientificName' | 'symbolism'
export type QuizQuestionKind = 'picture' | 'scientificName' | 'symbolism'

export type FlowerColorMeaning = {
    label: string
    meaning: string
}

export type FlowerColorPalette = {
    name?: string
    colors: string[]
    notes?: string
}

export type Flower = {
    id: string
    commonName: string
    scientificName: string
    otherNames: string[]
    symbolism: string[]
    origin: string
    bloomSeason: string
    colorPalette: string[]
    colorMeanings?: FlowerColorMeaning[]
    alternateColorPalettes?: FlowerColorPalette[]
    funFacts: string[]
    careDifficulty: FlowerDifficulty
    sketch: string
    imageUrl?: string
}

export type CardVariant =
    | 'notebook'
    | 'taped'
    | 'pressed'
    | 'specimen'
    | 'bookmark'
    | 'watercolor'

export type QuizQuestion = {
    id: string
    flowerId: string
    kind: QuizQuestionKind
    prompt: string
    imageUrl: string
    correctAnswer: string
    options: string[]
    hint: string
    fact: string
}
