"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type Props = {
    children: React.ReactNode;
    useScrollTrigger?: boolean;
};

const ELECTRIC = "#2b6bbb";

const TextAnim = ({ children, useScrollTrigger = false }: Props) => {
    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (!textRef.current) return;

        const ctx = gsap.context(() => {
            const split = new SplitText(textRef.current, {
                type: "chars",
                charsClass: "char",
            });

            const play = () => {
                split.chars.forEach((char, i) => {
                    const tl = gsap.timeline({
                        delay: i * 0.04 + gsap.utils.random(0, 0.15),
                    });

                    tl.fromTo(
                        char,
                        {
                            opacity: 0,
                            y: 0,
                            color: "#ffffff",
                        },
                        {
                            opacity: gsap.utils.random(0.6, 1),
                            color: ELECTRIC,
                            duration: gsap.utils.random(0.05, 0.12),
                            ease: "none",
                        }
                    )
                        .to(char, {
                            opacity: gsap.utils.random(0.2, 0.6),
                            y: gsap.utils.random(-2, 2),
                            duration: gsap.utils.random(0.04, 0.08),
                            ease: "none",
                        })
                        .to(char, {
                            opacity: 1,
                            y: 0,
                            color: "#ffffff",
                            duration: gsap.utils.random(0.08, 0.18),
                            ease: "power2.out",
                        });

                    // Random extra flicker pulses
                    const pulses = gsap.utils.random(1, 3, 1);
                    for (let p = 0; p < pulses; p++) {
                        tl.to(char, {
                            opacity: gsap.utils.random(0.3, 1),
                            color: gsap.utils.random(0, 1) > 0.6 ? ELECTRIC : "#ffffff",
                            duration: gsap.utils.random(0.04, 0.09),
                            delay: gsap.utils.random(0.02, 0.06),
                            ease: "none",
                        });
                    }
                });
            };

            if (useScrollTrigger) {
                ScrollTrigger.create({
                    trigger: textRef.current,
                    start: "top 80%",
                    once: true,
                    onEnter: play,
                });
            } else {
                play();
            }
        }, textRef);

        return () => ctx.revert();
    }, [useScrollTrigger]);

    return (
        <span
            ref={textRef}
            style={{
                display: "inline-block",
                willChange: "opacity, transform, color",
            }}
        >
            {children}
        </span>
    );
};

export default TextAnim;
