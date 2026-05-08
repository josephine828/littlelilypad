import { flowers } from '../data/flowers'
import type {
    QuizFocus,
    QuizQuestion,
    QuizQuestionKind,
} from '../types'

const QUESTION_KINDS: QuizQuestionKind[] = [
    'picture',
    'scientificName',
    'symbolism',
]

function createSeededRandom(seed: string) {
    let state = 0

    for (let index = 0; index < seed.length; index += 1) {
        state = (state * 31 + seed.charCodeAt(index)) >>> 0
    }

    return () => {
        state ^= state << 13
        state ^= state >>> 17
        state ^= state << 5

        return (state >>> 0) / 4294967296
    }
}

function shuffleArray<T>(items: T[], seed: string): T[] {
    const random = createSeededRandom(seed)
    const result = [...items]

    for (let index = result.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(random() * (index + 1))
        ;[result[index], result[swapIndex]] = [result[swapIndex], result[index]]
    }

    return result
}

function uniqueValues(values: string[]) {
    return [...new Set(values)]
}

function buildOptionPool(
    correctAnswer: string,
    allOptions: string[],
    seed: string
) {
    return shuffleArray(
        uniqueValues(allOptions.filter((option) => option !== correctAnswer)),
        seed
    ).slice(0, 3)
}

function buildQuestion(
    flower: (typeof flowers)[number],
    kind: QuizQuestionKind
): QuizQuestion {
    const imageUrl = flower.imageUrl ?? ''
    const commonNameOptions = flowers.map((option) => option.commonName)
    const scientificNameOptions = flowers.map((option) => option.scientificName)
    const symbolismOptions = uniqueValues(
        flowers.flatMap((option) => option.symbolism)
    )

    if (kind === 'scientificName') {
        const correctAnswer = flower.scientificName
        const incorrectOptions = buildOptionPool(
            correctAnswer,
            scientificNameOptions,
            `flower-quiz-scientific-options:${flower.id}:v2`
        )

        return {
            id: `quiz-${kind}-${flower.id}`,
            flowerId: flower.id,
            kind,
            prompt: "What is this flower's scientific name?",
            imageUrl,
            correctAnswer,
            options: shuffleArray(
                [correctAnswer, ...incorrectOptions],
                `flower-quiz-scientific-answer:${flower.id}:v2`
            ),
            hint: `Its common name is ${flower.commonName}.`,
            fact: `This bloom is often linked with ${flower.symbolism[0].toLowerCase()}.`,
        }
    }

    if (kind === 'symbolism') {
        const correctAnswer =
            shuffleArray(
                flower.symbolism,
                `flower-quiz-symbolism-choice:${flower.id}:v2`
            )[0] ?? flower.symbolism[0]
        const alternateMeaning = flower.symbolism.find(
            (symbol) => symbol !== correctAnswer
        )
        const incorrectOptions = buildOptionPool(
            correctAnswer,
            symbolismOptions,
            `flower-quiz-symbolism-options:${flower.id}:v2`
        )

        return {
            id: `quiz-${kind}-${flower.id}`,
            flowerId: flower.id,
            kind,
            prompt: 'Which symbolism best matches this flower?',
            imageUrl,
            correctAnswer,
            options: shuffleArray(
                [correctAnswer, ...incorrectOptions],
                `flower-quiz-symbolism-answer:${flower.id}:v2`
            ),
            hint: `Its scientific name is ${flower.scientificName}.`,
            fact: alternateMeaning
                ? `Another meaning associated with it is ${alternateMeaning.toLowerCase()}.`
                : `It is also associated with ${correctAnswer.toLowerCase()}.`,
        }
    }

    const correctAnswer = flower.commonName
    const incorrectOptions = buildOptionPool(
        correctAnswer,
        commonNameOptions,
        `flower-quiz-picture-options:${flower.id}:v2`
    )

    return {
        id: `quiz-${kind}-${flower.id}`,
        flowerId: flower.id,
        kind,
        prompt: 'Which flower is shown here?',
        imageUrl,
        correctAnswer,
        options: shuffleArray(
            [correctAnswer, ...incorrectOptions],
            `flower-quiz-picture-answer:${flower.id}:v2`
        ),
        hint: `Its scientific name is ${flower.scientificName}.`,
        fact: `Its symbolism includes ${flower.symbolism[0].toLowerCase()}.`,
    }
}

export function buildFlowerQuiz(focus: QuizFocus = 'mixed'): QuizQuestion[] {
    const flowersInPlay = shuffleArray(flowers, `flower-quiz-order:${focus}:v2`)
        .filter((flower) => flower.imageUrl)

    return flowersInPlay.map((flower) => {
        let kind: QuizQuestionKind

        if (focus === 'mixed') {
            kind = shuffleArray(
                QUESTION_KINDS,
                `flower-quiz-kind:${flower.id}:v2`
            )[0]
        } else {
            kind = focus
        }

        return buildQuestion(flower, kind)
    })
}
