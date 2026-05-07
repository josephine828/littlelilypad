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
                <div className="relative isolate min-h-screen overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(223,240,194,0.55),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(246,198,216,0.30),transparent_22%),radial-gradient(circle_at_50%_88%,rgba(155,207,122,0.20),transparent_28%),linear-gradient(180deg,rgba(255,253,246,0.30),rgba(247,243,223,0.08))]" />
                        <div
                            className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#88bc68]/30 blur-[1px]"
                            style={{
                                clipPath:
                                    'path("M 112 16 C 78 16 50 33 38 59 C 26 85 31 116 51 137 C 71 158 103 168 135 163 C 167 158 194 136 203 108 C 212 80 202 50 180 31 C 162 15 140 16 112 16 Z M 114 42 C 134 42 151 51 161 66 C 171 81 172 100 165 116 C 158 132 144 145 126 149 C 110 153 94 150 80 143 C 92 132 100 118 102 101 C 104 83 100 68 90 54 C 96 46 104 42 114 42 Z")',
                                transform: 'rotate(-22deg)',
                            }}
                        />
                        <div
                            className="absolute right-[-5rem] top-28 h-72 w-72 rounded-full bg-[#b7dc90]/28 blur-[1px]"
                            style={{
                                clipPath:
                                    'path("M 124 12 C 87 12 57 30 42 58 C 27 86 29 121 47 145 C 65 169 96 182 131 179 C 166 176 197 157 209 129 C 221 101 216 68 196 43 C 180 23 155 12 124 12 Z M 126 38 C 146 38 162 46 172 61 C 182 76 184 95 178 113 C 172 131 159 145 140 151 C 123 156 106 155 90 148 C 103 137 111 122 114 103 C 117 85 114 69 104 55 C 110 44 118 38 126 38 Z")',
                                transform: 'rotate(14deg)',
                            }}
                        />
                        <div
                            className="absolute left-[26%] top-[60%] h-40 w-40 rounded-full bg-[#81b965]/24 blur-[1px]"
                            style={{
                                clipPath:
                                    'path("M 63 8 C 43 8 26 17 17 33 C 8 49 10 70 21 83 C 32 96 50 103 69 100 C 88 97 104 84 110 67 C 116 50 111 31 98 18 C 88 10 77 8 63 8 Z M 64 28 C 76 28 86 33 92 42 C 97 51 98 62 94 72 C 90 81 82 88 71 91 C 62 93 52 92 43 88 C 51 81 55 72 57 60 C 58 48 56 37 49 29 C 54 28 59 28 64 28 Z")',
                                transform: 'rotate(-28deg)',
                            }}
                        />
                        <div
                            className="absolute left-[10%] bottom-[12%] h-48 w-48 rounded-full bg-[#8fc472]/26 blur-[1px]"
                            style={{
                                clipPath:
                                    'path("M 88 10 C 61 10 39 23 28 44 C 17 65 18 91 31 110 C 44 129 67 139 93 137 C 119 135 142 120 151 98 C 160 76 156 50 141 32 C 128 17 111 10 88 10 Z M 89 32 C 103 32 116 38 123 49 C 130 60 131 74 126 86 C 121 98 112 108 99 111 C 88 114 77 113 67 109 C 76 100 81 89 83 76 C 85 63 83 51 76 41 C 80 34 84 32 89 32 Z")',
                                transform: 'rotate(10deg)',
                            }}
                        />
                        <div className="absolute left-[18%] top-[22%] h-3.5 w-3.5 rounded-full bg-[#5f8b60]/35 shadow-[0_0_0_12px_rgba(155,207,122,0.12)]" />
                        <div className="absolute right-[21%] bottom-[18%] h-3 w-3 rounded-full bg-[#7da56a]/35 shadow-[0_0_0_10px_rgba(183,220,144,0.12)]" />
                        <div className="absolute left-[48%] top-[14%] h-2.5 w-2.5 rounded-full bg-[#a86d87]/28 shadow-[0_0_0_8px_rgba(246,198,216,0.12)]" />
                    </div>
                    <AppHeader />
                    {children}
                </div>
            </body>
        </html>
    )
}
