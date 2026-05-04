import { flowers } from '../data/flowers'
import type { QuizQuestion } from '../types'

function shuffleArray<T>(items: T[]): T[] {
    return [...items].sort(() => Math.random() - 0.5)
}

export function buildFlowerQuiz(): QuizQuestion[] {
    return shuffleArray(flowers)
        .filter((flower) => flower.imageUrl)
        .map((flower) => {
            const incorrectOptions = shuffleArray(
                flowers
                    .filter((option) => option.id !== flower.id)
                    .map((option) => option.commonName)
            ).slice(0, 3)

            return {
                id: `quiz-${flower.id}`,
                flowerId: flower.id,
                prompt: 'Which flower is shown here?',
                imageUrl: flower.imageUrl ?? '',
                correctAnswer: flower.commonName,
                options: shuffleArray([flower.commonName, ...incorrectOptions]),
                hint: `Its symbolism includes ${flower.symbolism[0].toLowerCase()}.`,
                fact: flower.funFacts[0],
            }
        })
}
