import Image from "next/image";
import TextAnim from "./TextAnim";

const About = ({ prefix }: { prefix: string }) => {
    return (
        <section className="relative w-full overflow-hidden bg-[#0b0a09] px-[5vw] py-[15vh]">
            {/* background atmosphere */}
            <div
                className="
                    pointer-events-none absolute
                    left-1/2 top-[35%]
                    -translate-x-1/2
                    w-[50vw] h-[50vw]
                    rounded-full
                    bg-orange-900/10
                    blur-[140px]
                "
            />

            {/* INTRO */}
            <TextAnim useScrollTrigger>
                <h2
                    className="
                        relative z-10
                        text-center
                        text-[7vw]
                        leading-[0.95]
                        tracking-[-0.04em]
                        text-[#e8e1d5]
                    "
                >
                    WE DO NOT
                    <br />
                    BUILD WEBSITES.
                    <br />
                    WE FORGE
                    <br />
                    WORLDS.
                </h2>
            </TextAnim>

            {/* RELICS */}
            <div className="relative z-10 mt-[20vh] flex items-center justify-between gap-[6vw]">
                {/* LEFT STATUE */}
                <div className="relative h-[38vw] w-[28vw]">
                    <Image
                        src={prefix + "/images/1.png"}
                        alt="Stone dragon relic"
                        fill
                        className="
                            object-contain
                            drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]
                        "
                    />

                    <div className="absolute bottom-0 left-0 text-[10px] tracking-[0.3em] text-stone-600">
                        RELIC / 001
                    </div>
                </div>

                {/* TEXT */}
                <TextAnim useScrollTrigger>
                    <p
                        className="
                            max-w-[32vw]
                            text-center
                            text-[1.25vw]
                            leading-normal
                            text-stone-400
                        "
                    >
                        Stone remembers everything.
                        <br />
                        Metal remembers the fire.
                        <br />
                        A dragon remembers the story.
                        <br />
                        <br />
                        We combine design, motion and technology to create
                        digital experiences that feel carved rather than
                        assembled.
                    </p>
                </TextAnim>

                {/* RIGHT STATUE */}
                <div className="relative h-[38vw] w-[28vw]">
                    <Image
                        src={prefix + "/images/2.png"}
                        alt="Metal dragon relic"
                        fill
                        className="
                            object-contain
                            drop-shadow-[0_30px_50px_rgba(0,0,0,0.9)]
                        "
                    />

                    <div className="absolute bottom-0 right-0 text-[10px] tracking-[0.3em] text-stone-600">
                        RELIC / 002
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
