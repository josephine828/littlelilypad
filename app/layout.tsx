import type { Metadata } from 'next'
import './globals.css'
import { AppFooter } from './components/layout/AppFooter'
import { AppHeader } from './components/layout/AppHeader'
import { LilyPadBackground } from './components/layout/LilyPadBackground'

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
                <div className="relative isolate flex min-h-screen flex-col">
                    <LilyPadBackground />
                    <AppHeader />
                    <div className="flex-1">{children}</div>
                    <AppFooter />
                </div>
            </body>
        </html>
    )
}
