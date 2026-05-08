import { flowers } from '../data/flowers'
import type { QuizQuestion } from '../types'

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

export function buildFlowerQuiz(): QuizQuestion[] {
    return shuffleArray(flowers, 'flower-quiz-order:v1')
        .filter((flower) => flower.imageUrl)
        .map((flower) => {
            const incorrectOptions = shuffleArray(
                flowers
                    .filter((option) => option.id !== flower.id)
                    .map((option) => option.commonName),
                `flower-quiz-options:${flower.id}:v1`
            ).slice(0, 3)

            return {
                id: `quiz-${flower.id}`,
                flowerId: flower.id,
                prompt: 'Which flower is shown here?',
                imageUrl: flower.imageUrl ?? '',
                correctAnswer: flower.commonName,
                options: shuffleArray(
                    [flower.commonName, ...incorrectOptions],
                    `flower-quiz-answer:${flower.id}:v1`
                ),
                hint: `Its symbolism includes ${flower.symbolism[0].toLowerCase()}.`,
                fact: flower.funFacts[0],
            }
        })
}
