'use client'

import { useEffect, useState } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(initialValue)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const storedValue = window.localStorage.getItem(key)

        if (storedValue) {
            setValue(JSON.parse(storedValue))
        }

        setIsLoaded(true)
    }, [key])

    useEffect(() => {
        if (isLoaded) {
            window.localStorage.setItem(key, JSON.stringify(value))
        }
    }, [key, value, isLoaded])

    return [value, setValue, isLoaded] as const
}
