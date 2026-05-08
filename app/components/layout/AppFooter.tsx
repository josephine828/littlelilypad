import Link from 'next/link'

const socialLinks = [
    {
        label: 'GitHub',
        href: 'https://github.com/josephine828',
        icon: GitHubIcon,
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/josephinenguyen_/?hl=en',
        icon: InstagramIcon,
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/josephine-nguyen-software-engineer/',
        icon: LinkedInIcon,
    },
    {
        label: 'Website',
        href: 'https://www.josephinenguyen.com/',
        icon: WebsiteIcon,
    },
    {
        label: 'Email',
        href: 'mailto:the.josephine.nguyen@gmail.com',
        icon: MailIcon,
    },
]

export function AppFooter() {
    return (
        <footer className="relative mx-auto mt-10 w-full max-w-6xl px-6 pb-10 pt-4">
            <div className="rounded-[2rem] border border-white/45 bg-white/35 px-5 py-5 shadow-[0_18px_60px_rgba(82,120,83,0.12)] backdrop-blur-2xl">
                <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="space-y-1 text-sm leading-6 text-[#4f745b]">
                        <p className="font-semibold text-[#2f6f46]">
                            © {new Date().getFullYear()} Josephine Nguyen
                        </p>
                        <p>All rights reserved.</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                className="group inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/55 px-4 py-2 text-sm font-semibold text-[#356348] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:text-[#2f6f46]"
                            >
                                <social.icon />
                                <span>{social.label}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}

function GitHubIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
        >
            <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.88 1.55 2.3 1.1 2.86.84.09-.66.35-1.1.64-1.35-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05a9.28 9.28 0 0 1 5 0c1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .26.18.58.69.48A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
    )
}

function InstagramIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
        >
            <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 1.75h8.5A5 5 0 0 1 21.25 8.75v6.5a5 5 0 0 1-5 5h-8.5a5 5 0 0 1-5-5v-6.5a5 5 0 0 1 5-5Zm9.44 1.56a1.06 1.06 0 1 0 0 2.12 1.06 1.06 0 0 0 0-2.12ZM12 6.5A5.5 5.5 0 1 0 12 17.5 5.5 5.5 0 0 0 12 6.5Zm0 1.75A3.75 3.75 0 1 1 12 16a3.75 3.75 0 0 1 0-7.5Z" />
        </svg>
    )
}

function WebsiteIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
        >
            <path d="M12 2.25a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 12 2.25Zm6.97 9h-2.39a15.1 15.1 0 0 0-1.12-4.1 8.25 8.25 0 0 1 3.51 4.1ZM12 4.05c.55.78 1.4 2.22 1.9 5.2h-3.8c.5-2.98 1.35-4.42 1.9-5.2ZM4.94 13a8.28 8.28 0 0 1 0-2h2.39c-.09.65-.14 1.31-.14 2 0 .69.05 1.35.14 2H4.94a8.28 8.28 0 0 1 0-2Zm1.97 3.8h2.13a15.1 15.1 0 0 0 1.12 4.1 8.25 8.25 0 0 1-3.25-4.1Zm2.13-9.6H6.91a8.25 8.25 0 0 1 3.25-4.1 15.1 15.1 0 0 0-1.12 4.1Zm3.96 13.15c-.55-.78-1.4-2.22-1.9-5.2h3.8c-.5 2.98-1.35 4.42-1.9 5.2Zm2.02-6.95h-4.04c-.1-.63-.16-1.31-.16-2s.06-1.37.16-2h4.04c.1.63.16 1.31.16 2s-.06 1.37-.16 2Zm.48 6.05a15.1 15.1 0 0 0 1.12-4.1h2.13a8.25 8.25 0 0 1-3.25 4.1Zm1.12-5.9c.09-.65.14-1.31.14-2 0-.69-.05-1.35-.14-2h2.39a8.28 8.28 0 0 1 0 4h-2.39Z" />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
        >
            <rect
                x="2.5"
                y="2.5"
                width="19"
                height="19"
                rx="4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
            />
            <circle cx="7.1" cy="8.1" r="1.35" />
            <path d="M5.85 10.55h2.5V18h-2.5v-7.45Zm4.25 0h2.4v1.02h.03c.34-.61 1.18-1.28 2.58-1.28 2.62 0 3.12 1.72 3.12 3.95V18h-2.5v-3.2c0-.76-.02-1.75-1.06-1.75-1.05 0-1.22.82-1.22 1.67V18h-2.35v-7.45Z" />
        </svg>
    )
}

function MailIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
        >
            <path d="M4 5.75A2.75 2.75 0 0 0 1.25 8.5v7A2.75 2.75 0 0 0 4 18.25h16A2.75 2.75 0 0 0 22.75 15.5v-7A2.75 2.75 0 0 0 20 5.75H4Zm16 1.5c.41 0 .79.14 1.1.38L12 13.48 2.9 7.63A1.74 1.74 0 0 1 4 7.25h16ZM3.75 15.5V8.72l7.69 4.94a1.25 1.25 0 0 0 1.36 0l7.5-4.82v6.66c0 .69-.56 1.25-1.25 1.25H4c-.14 0-.27-.02-.4-.05.1.02.14.05.15.05Z" />
        </svg>
    )
}
