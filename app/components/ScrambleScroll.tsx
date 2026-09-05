"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/all";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const TEXTS = [
    "THE DRAGON AWAKENS",
    "THE STONE REMEMBERS",
    "THE FORGE BURNS",
    "THE BEAST ASCENDS",
];

const IMAGES = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
];

const scrambleChars = "ᚦ ᚱ ᚲ ᛉ ᛟ ᛏ ᚠ ᚢ ᚨ ᚷ ᚺ ᛃ ᛇ ᛒ ᛖ ᛗ ᛞ ◇ ◆ △ ◬ ◈";

interface ParallaxImageProps {
    src: string;
    index: number;
    nextText: () => void;
    prevText: () => void;
}

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "usefull-things-439-text" : "";

const ParallaxImage: React.FC<ParallaxImageProps> = ({
    src,
    index,
    nextText,
    prevText,
}) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 50%",

                onEnter: index === 0 ? undefined : nextText,

                onLeaveBack: prevText,
            });
        });

        return () => ctx.revert();
    }, [index, nextText, prevText]);

    useLenis(() => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();

        const progress = rect.top / window.innerHeight;

        const multiplier = window.innerWidth < 768 ? 90 : 190;

        setOffset(-progress * multiplier);
    });

    return (
        <div
            ref={containerRef}
            className="
                relative
                h-screen
                w-full
                overflow-hidden
                bg-[#11100e]
            "
        >
            <img
                src={prefix + src}
                alt=""
                className="
                     absolute inset-0
                    size-full
                    object-cover
                    scale-[1.2]
                    brightness-[0.65]
                    contrast-[1.1]
                    saturate-[0.65]
                    md:scale-[1.45]
                    md:contrast-[1.15]
                "
                style={{
                    transform: `translateY(${offset}px) scale(1.1)`,
                }}
            />

            {/* dark vignette */}
            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,.8)_100%)]
                "
            />

            {/* ember atmosphere */}
            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    bg-[radial-gradient(circle_at_70%_60%,rgba(180,60,10,.15),transparent_30%)]
                "
            />

            {/* chapter number */}
            <div className="absolute bottom-[5vh] left-[4vw] text-[10px] tracking-[0.35em] text-stone-400">
                0{index + 1} / DRAGON CHRONICLES
            </div>
        </div>
    );
};

const ScrambleScroll: React.FC = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const currentIndex = useRef(0);

    const scramble = (newIndex: number) => {
        if (!textRef.current) return;

        currentIndex.current = newIndex;

        gsap.killTweensOf(textRef.current);

        gsap.to(textRef.current, {
            duration: 1.8,

            scrambleText: {
                text: TEXTS[newIndex],
                chars: scrambleChars,
                revealDelay: 0.65,
                speed: 0.35,
            },

            ease: "power2.out",
        });
    };

    const nextText = () => {
        scramble((currentIndex.current + 1) % TEXTS.length);
    };

    const prevText = () => {
        scramble((currentIndex.current - 1 + TEXTS.length) % TEXTS.length);
    };

    return (
        <section className="relative w-full bg-[#0b0a09]">
            {/* INTRO GAP */}
            <div className="h-40 w-full bg-[#0b0a09]" />

            <div className="relative w-full">
                {/* STICKY TITLE */}
                <div className="pointer-events-none absolute inset-0 z-20">
                    <div
                        className="
                            sticky top-0
                            flex h-screen items-center
                            px-[5vw]
                            md:px-[4vw]
                        "
                    >
                        <div>
                            <div
                                className="
                                    mb-4
                                    text-[8px]
                                    tracking-[0.4em]
                                    text-orange-700
                                    md:text-[10px]
                                "
                            >
                                CHRONICLE
                            </div>

                            <p
                                ref={textRef}
                                className="
                                    max-w-[90vw]
                                    text-[11vw]
                                    leading-[0.9]
                                    tracking-[-0.045em]
                                    text-[#e8e1d5]
                                    md:max-w-[80vw]
                                    md:text-[6vw]
                                "
                            >
                                {TEXTS[0]}
                            </p>
                        </div>
                    </div>
                </div>

                {/* IMAGES */}
                {IMAGES.map((src, index) => (
                    <ParallaxImage
                        key={src}
                        src={src}
                        index={index}
                        nextText={nextText}
                        prevText={prevText}
                    />
                ))}
            </div>
        </section>
    );
};

export default ScrambleScroll;
