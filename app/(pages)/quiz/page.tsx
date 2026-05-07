import { CircleHelp, Flower2 } from 'lucide-react'
import { FlowerQuiz } from '../../components/quiz/FlowerQuiz'

export default function QuizPage() {
    return (
        <main className="min-h-screen bg-[#f7f3df] text-[#214432]">
            <section className="relative mx-auto max-w-6xl px-6 pb-16 pt-8">
                <div className="absolute left-[-70px] top-14 h-64 w-64 rounded-full bg-[#dff0c2] blur-3xl" />
                <div className="absolute right-[-80px] top-40 h-72 w-72 rounded-full bg-[#f6c6d8] blur-3xl" />

                <div className="relative z-10 mb-10 max-w-3xl">
                    <div className="my-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 font-bold text-[#3f7f55] shadow-sm">
                        <CircleHelp size={16} />
                        Flower Quiz
                    </div>

                    <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                        Can you name that bloom?
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f745b]">
                        Practice identifying flowers by sight. Each answer
                        reveals a small fact, so even a missed guess still grows
                        your garden knowledge.
                    </p>

                    <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-[#e9f5d8] px-4 py-3 text-sm font-bold text-[#315c3c]">
                        <Flower2 size={18} />
                        Image-based quiz mode
                    </div>
                </div>

                <FlowerQuiz />
            </section>
        </main>
    )
}
