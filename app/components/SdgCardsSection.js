"use client";

import Image from "next/image";
import { AnimationOnScroll } from "react-animation-on-scroll";

function MainSdgCard() {
    return (
        <div className="container bg-sky-900 px-8 py-8 rounded-3xl flex flex-col">
            <div className="flex justify-between mb-8">
                <div className="text-6xl font-bebas">
                17
                </div>
                <Image
                    src="/sdg-17-logo.svg"
                    alt="SDG 17 Logo"
                    width={128}
                    height={128}
                />
            </div>
            <div className="text-5xl md:text-8xl text-right font-bebas md:w-3/5 self-end leading-none">
                Partnerships for the Goals
            </div>
        </div>
    );
}

function GlassCard(aProps) {
    const { count, label, bgImage } = aProps;
    return (
        <div className="grid">
            <div className="border-2 border-white/30 rounded-3xl p-5 backdrop-blur font-zen-dots grid-area-1 hover:backdrop-blur-none flex flex-col justify-end transition-all drop-shadow-xl hover:drop-shadow-md backdrop-brightness-75 cursor-pointer">
                <div className="text-7xl">{count}</div>
                <div className="text-2xl md:text-4xl uppercase">{label}</div>
            </div>
            <div
                className="rounded-3xl bg-sky-900 grid-area-1 bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}>
            </div>
        </div>
    );
}

function SecondarySdgCard() {
    return (
        <div className="container flex flex-col md:flex-row w-full gap-4">
            <GlassCard
                count="230"
                label="events"
                bgImage="/events.jpg" />
            <div className="container flex flex-col gap-4">
                <GlassCard
                    count="2183"
                    label="actions"
                    bgImage="/actions.jpg" />
                <GlassCard
                    count="74"
                    label="publications"
                    bgImage="/publications.jpg" />
                <GlassCard
                    count="19"
                    label="targets"
                    bgImage="/targets2.jpg" />
            </div>
        </div>
    );
}

export default function SdgCardsSection() {
    return (
        <AnimationOnScroll
            animateIn="animate__zoomIn"
            className="container w-full my-4 flex flex-col gap-6">
            <MainSdgCard />
            <SecondarySdgCard />
        </AnimationOnScroll>
    );
}