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

const EMBER = "#d97706";
const METAL = "#e8e1d5";

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
                        delay: i * 0.025 + gsap.utils.random(0, 0.12),
                    });

                    tl.fromTo(
                        char,
                        {
                            opacity: 0,
                            y: 18,
                            rotateX: -70,
                            color: "#3d3934",
                            filter: "blur(6px)",
                        },
                        {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            color: EMBER,
                            filter: "blur(0px)",
                            duration: gsap.utils.random(0.16, 0.32),
                            ease: "power2.out",
                        },
                    )

                        // forged-metal flash
                        .to(char, {
                            color: "#f3c27a",
                            duration: 0.12,
                            ease: "none",
                        })

                        .to(char, {
                            color: METAL,
                            duration: gsap.utils.random(0.24, 0.44),
                            ease: "power3.out",
                        });

                    // occasional ember flicker
                    if (Math.random() > 0.55) {
                        tl.to(char, {
                            color: EMBER,
                            opacity: gsap.utils.random(0.55, 0.9),
                            duration: 0.1,
                        }).to(char, {
                            color: METAL,
                            opacity: 1,
                            duration: 0.16,
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
                perspective: "600px",
                willChange: "opacity, transform, color",
            }}
        >
            {children}
        </span>
    );
};

export default TextAnim;
