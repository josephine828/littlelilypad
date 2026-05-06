import type { Metadata } from 'next'
import './globals.css'
import { AppHeader } from './components/layout/AppHeader'

export const metadata: Metadata = {
    title: 'LittleLilypad',
    description:
        'A cute, playful web app for learning about flowers and plants.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>
                <AppHeader />
                {children}
            </body>
        </html>
    )
}
