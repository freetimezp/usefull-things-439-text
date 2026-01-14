"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/all";
import { useLenis } from "lenis/react";

gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const TEXTS: string[] = [
    "Building the clarity through throughful user experience",
    "Crafting digital stories that resonate with users",
    "Designing interfaces that inspire and engage",
    "Creating seamless journeys through innovation",
];

const IMAGES: string[] = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.jpg"];

const scrambleChars = "£ ∅ √ ¥ ฿ △ ◩ c r e a t i v e Â Ç Ď D ʤ ʥ ʩ Ĥ d e s i g n ◸ ◹ ◬ ◺ ↉";

interface ParallaxImageProps {
    src: string;
    index: number;
    nextText: () => void;
    prevText: () => void;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, index, nextText, prevText }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [offset, setOffset] = useState<number>(0);

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
        const scrollY = rect.top / window.innerHeight;
        setOffset(-scrollY * 190);
    });

    return (
        <div ref={containerRef} className="w-full h-screen overflow-clip">
            <img
                src={src}
                alt=""
                className="size-full object-cover scale-150"
                style={{ transform: `translateY(${offset}px)` }}
            />
        </div>
    );
};

const ScrambleScroll: React.FC = () => {
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const currentIndex = useRef<number>(0);

    const scramble = (newIndex: number) => {
        if (!textRef.current) return;

        currentIndex.current = newIndex;

        gsap.to(textRef.current, {
            duration: 0.5,
            scrambleText: {
                text: TEXTS[newIndex],
                chars: scrambleChars,
                revealDelay: 0.1,
                speed: 0.1,
            },
        });
    };

    const nextText = () => scramble((currentIndex.current + 1) % TEXTS.length);

    const prevText = () => scramble((currentIndex.current - 1 + TEXTS.length) % TEXTS.length);

    return (
        <section className="w-full relative">
            <div className="h-screen w-full bg-red-300" />

            <div className="w-full relative">
                <div className="absolute size-full inset-0 z-10">
                    <div className="h-screen w-full sticky inset-0 flex items-center px-[4vw]">
                        <p ref={textRef} className="text-white text-[3vw] tracking-tight">
                            {TEXTS[0]}
                        </p>
                    </div>
                </div>

                {IMAGES.map((src, index) => (
                    <ParallaxImage key={index} src={src} index={index} nextText={nextText} prevText={prevText} />
                ))}
            </div>
        </section>
    );
};

export default ScrambleScroll;
