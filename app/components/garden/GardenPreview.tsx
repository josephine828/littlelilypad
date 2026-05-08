import { Flower2, Sprout } from 'lucide-react'
import { Card } from '../ui/Card'

export function GardenPreview() {
    return (
        <Card variant="taped" className="h-full min-h-[260px]">
            <div className="relative grid h-full gap-5">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#dff0c2] text-[#315c3c] shadow-sm">
                        <Sprout size={22} />
                    </div>
                </div>

                <div>
                    <h3 className="font-heading text-2xl font-bold text-[#23452f]">
                        My Garden
                    </h3>

                    <p className="mt-2 leading-7 text-[#5a765e]">
                        Favorite flowers and plant them into your own little
                        special garden.
                    </p>
                </div>

                <div className="mt-auto rounded-[1.6rem] border border-[#d7e8c1] bg-[#edf7de]/60 p-4">
                    <div className="relative h-20 overflow-hidden rounded-[1.2rem] bg-gradient-to-b from-[#f8fffb] to-[#dff0c2]/70">
                        <div className="absolute bottom-0 left-0 h-6 w-full rounded-t-[100%] bg-[#8fbf9b]/45" />

                        <Sprout
                            size={30}
                            className="absolute bottom-4 left-8 text-[#3f7f55]"
                        />
                        <Flower2
                            size={28}
                            className="absolute bottom-5 left-1/2 text-[#a55c77]"
                        />
                        <Sprout
                            size={24}
                            className="absolute bottom-4 right-8 text-[#3f7f55]"
                        />
                    </div>
                </div>
            </div>
        </Card>
    )
}
