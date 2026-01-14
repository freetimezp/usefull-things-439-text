"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, LenisRef } from "lenis/react";

import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const LenisScroll: React.FC = () => {
    const lenisRef = useRef<LenisRef | null>(null);

    useEffect(() => {
        const update = (time: number) => {
            lenisRef.current?.lenis?.raf(time * 1000);
        };

        gsap.ticker.add(update);
        ScrollTrigger.refresh();

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis
            root
            ref={lenisRef}
            options={{
                autoRaf: false,
                duration: 1.2,
                touchMultiplier: 2,
                smoothWheel: true,
            }}
        />
    );
};

export default LenisScroll;
