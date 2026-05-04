import { flowers } from '../data/flowers'
import type { Flower } from '../types'

export function getFlowerOfTheDay(): Flower {
    const today = new Date()
    const daySeed =
        today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate()

    return flowers[daySeed % flowers.length]
}

export function getRandomFlower(): Flower {
    return flowers[Math.floor(Math.random() * flowers.length)]
}
