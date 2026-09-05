import Image from "next/image";
import TextAnim from "./TextAnim";

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/usefull-things-439-text" : "";

const About = () => {
    return (
        <section
            className="
                relative w-full overflow-hidden
                bg-[#0b0a09]
                px-[5vw]
                py-[15vh]
                md:py-[14vh]
            "
        >
            {/* =========================================
                ATMOSPHERE
            ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-[30%]
                    -translate-x-1/2

                    w-screen
                    h-[100vw]

                    rounded-full
                    bg-orange-900/10
                    blur-[100px]

                    md:w-[60vw]
                    md:h-[60vw]
                    md:blur-[140px]

                    xl:w-[45vw]
                    xl:h-[45vw]
                "
            />

            {/* =========================================
                CONTENT CONTAINER
            ========================================= */}

            <div
                className="
                    relative
                    z-10
                    mx-auto
                    w-full
                    max-w-400
                "
            >
                {/* =========================================
                    INTRO
                ========================================= */}

                <div className="mx-auto max-w-275">
                    <TextAnim useScrollTrigger>
                        <h2
                            className="
                                text-center
                                text-[12vw]
                                leading-[0.9]
                                tracking-[-0.045em]
                                text-[#e8e1d5]

                                md:text-[7vw]
                                lg:text-[6vw]
                                xl:text-[5vw]
                            "
                        >
                            WE DO NOT
                            <br />
                            BUILD
                            <br />
                            WEBSITES.
                            <br />
                            WE FORGE
                            <br />
                            WORLDS.
                        </h2>
                    </TextAnim>
                </div>

                {/* =========================================
                    RELICS AREA
                ========================================= */}

                <div
                    className="
                        mt-[15vh]

                        flex
                        flex-col
                        items-center

                        md:mt-[18vh]

                        lg:grid
                        lg:grid-cols-[1fr_minmax(280px,420px)_1fr]
                        lg:items-center
                        lg:gap-[4vw]

                        xl:grid-cols-[1fr_minmax(320px,460px)_1fr]
                    "
                >
                    {/* =====================================
                        LEFT RELIC
                    ===================================== */}

                    <div
                        className="
                            relative

                            h-[90vw]
                            w-[75vw]

                            md:h-[65vw]
                            md:w-[55vw]

                            lg:h-[42vw]
                            lg:w-full

                            xl:h-140
                        "
                    >
                        <Image
                            src={prefix + "/images/1.png"}
                            alt="Stone dragon relic"
                            fill
                            sizes="
                                (max-width: 768px) 75vw,
                                (max-width: 1024px) 55vw,
                                40vw
                            "
                            className="
                                object-contain

                                drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]

                                lg:scale-[1.08]
                                xl:scale-[1.12]
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-[2%]
                                left-0

                                text-[8px]
                                tracking-[0.35em]
                                text-stone-600

                                lg:text-[9px]
                            "
                        >
                            RELIC / 001
                        </div>
                    </div>

                    {/* =====================================
                        CENTER TEXT
                    ===================================== */}

                    <div
                        className="
                            relative

                            mt-[8vh]
                            mb-[8vh]

                            w-full

                            lg:mt-0
                            lg:mb-0
                            lg:w-auto
                        "
                    >
                        <TextAnim useScrollTrigger>
                            <p
                                className="
                                    mx-auto
                                    max-w-[90vw]

                                    text-center

                                    text-[5vw]
                                    leading-[1.45]

                                    text-stone-400

                                    md:max-w-[60vw]
                                    md:text-[2.2vw]

                                    lg:max-w-90
                                    lg:text-[1.15vw]
                                    lg:leading-[1.6]

                                    xl:max-w-97.5
                                    xl:text-[17px]
                                "
                            >
                                Stone remembers everything.
                                <br />
                                Metal remembers the fire.
                                <br />
                                A dragon remembers the story.
                                <br />
                                <br />
                                We combine design, motion and technology to
                                create digital experiences that feel carved
                                rather than assembled.
                            </p>
                        </TextAnim>

                        {/* center marker */}

                        <div
                            className="
                                mt-[4vh]

                                text-center
                                text-[8px]
                                tracking-[0.35em]
                                text-stone-700

                                lg:mt-[5vh]
                            "
                        >
                            THE FORGE / 002
                        </div>
                    </div>

                    {/* =====================================
                        RIGHT RELIC
                    ===================================== */}

                    <div
                        className="
                            relative

                            h-[90vw]
                            w-[75vw]

                            md:h-[65vw]
                            md:w-[55vw]

                            lg:h-[42vw]
                            lg:w-full

                            xl:h-140
                        "
                    >
                        <Image
                            src={prefix + "/images/2.png"}
                            alt="Metal dragon relic"
                            fill
                            sizes="
                                (max-width: 768px) 75vw,
                                (max-width: 1024px) 55vw,
                                40vw
                            "
                            className="
                                object-contain

                                drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]

                                lg:scale-[1.08]
                                xl:scale-[1.12]
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-[2%]
                                right-0

                                text-[8px]
                                tracking-[0.35em]
                                text-stone-600

                                lg:text-[9px]
                            "
                        >
                            RELIC / 003
                        </div>
                    </div>
                </div>

                {/* =========================================
                    BOTTOM STATEMENT
                ========================================= */}

                <div
                    className="
                        mt-[15vh]

                        border-t
                        border-stone-800/40

                        pt-[3vh]

                        flex
                        items-center
                        justify-between

                        text-[8px]
                        tracking-[0.3em]
                        text-stone-600

                        md:mt-[18vh]
                        md:text-[9px]
                    "
                >
                    <span>ANCIENT MATERIALS</span>

                    <span>DESIGN / MOTION / CODE</span>

                    <span>004</span>
                </div>
            </div>
        </section>
    );
};

export default About;
