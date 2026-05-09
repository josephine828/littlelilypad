'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { galleryPosts, instagramProfileUrl } from './instagramFeedData'

export function InstagramFeedPreview() {
    const [visibleRows, setVisibleRows] = useState(2)
    const [columns, setColumns] = useState(2)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')

        const updateColumns = () => {
            setColumns(mediaQuery.matches ? 3 : 2)
        }

        updateColumns()

        mediaQuery.addEventListener('change', updateColumns)

        return () => {
            mediaQuery.removeEventListener('change', updateColumns)
        }
    }, [])

    const reversedPosts = [...galleryPosts].reverse()
    const visibleCount = visibleRows * columns
    const visiblePosts = reversedPosts.slice(0, visibleCount)
    const previewPosts = reversedPosts.slice(
        visibleCount,
        visibleCount + columns
    )

    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <h3 className="font-heading text-3xl font-bold tracking-tight text-[#22201c]">
                        Flower diary
                    </h3>
                </div>

                <Link
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-fit items-center gap-2 rounded-full border border-[#dfd8cc] bg-white/60 px-4 py-2 text-sm font-bold text-[#4d493f] transition hover:-translate-y-0.5 hover:bg-white"
                >
                    View profile
                    <ArrowUpRight
                        size={15}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                </Link>
            </div>

            <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                    {visiblePosts.map((post) => (
                        <Link
                            key={post.title}
                            href={post.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`View ${post.title} on Instagram`}
                            className="group relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#eee8dd]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                                style={{
                                    backgroundImage: `url(${post.image})`,
                                }}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100" />

                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
                                <p className="truncate text-sm font-bold text-white">
                                    {post.title}
                                </p>

                                <ArrowUpRight
                                    size={16}
                                    className="shrink-0 text-white"
                                />
                            </div>
                        </Link>
                    ))}
                </div>

                {previewPosts.length > 0 ? (
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className="grid grid-cols-2 gap-3 md:grid-cols-3"
                            style={{
                                WebkitMaskImage:
                                    'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 68%, rgba(0, 0, 0, 0.35) 86%, rgba(0, 0, 0, 0) 100%)',
                                maskImage:
                                    'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 68%, rgba(0, 0, 0, 0.35) 86%, rgba(0, 0, 0, 0) 100%)',
                            }}
                        >
                            {previewPosts.map((post) => (
                                <div
                                    key={`${post.title}-preview`}
                                    className="pointer-events-none relative aspect-square overflow-hidden rounded-[1.5rem] bg-[#eee8dd] opacity-[0.24] blur-[16px] saturate-[0.4]"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center scale-110"
                                        style={{
                                            backgroundImage: `url(${post.image})`,
                                        }}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-[#f7f2ea]/40 via-black/0 to-black/0" />
                                </div>
                            ))}
                        </div>

                        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center">
                            <button
                                type="button"
                                onClick={() =>
                                    setVisibleRows((current) => current + 2)
                                }
                                className="pointer-events-auto inline-flex items-center cursor-pointer gap-2 rounded-full border border-[#dfd8cc] bg-white/70 px-5 py-2.5 text-sm font-bold text-[#4d493f] shadow-lg shadow-black/8 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
                            >
                                See more
                                <ArrowUpRight size={15} />
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        </section>
    )
}
