import Image from "next/image";
import TextAnim from "./TextAnim";

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/usefull-things-439-text" : "";

const Hero = () => {
    return (
        <section
            className="
                relative min-h-svh w-full overflow-hidden
                flex flex-col justify-between
                bg-[#0b0a09] text-[#e8e1d5]
                leading-[0.92]
                py-[3vh] px-[5vw]
            "
        >
            {/* atmospheric glow */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-screen h-[100vw]
                        rounded-full
                        bg-orange-700/10
                        blur-[90px]
                        md:w-[45vw] md:h-[45vw]
                    "
                />

                <div
                    className="
                        absolute inset-0 opacity-[0.06]
                        bg-[radial-gradient(circle_at_center,#d97706_1px,transparent_1px)]
                        bg-size-[14px_14px]
                        md:bg-size-[18px_18px]
                    "
                />
            </div>

            {/* TOP */}
            <div className="relative z-10">
                <div className="text-[10vw] md:text-[1vw]">
                    <TextAnim>
                        <h2>WE FORGE</h2>
                    </TextAnim>

                    <TextAnim>
                        <h2>DIGITAL</h2>
                    </TextAnim>

                    <TextAnim>
                        <h2>LEGENDS</h2>
                    </TextAnim>
                </div>
            </div>

            {/* DRAGON RELIC */}
            <div
                className="
                    relative z-10
                    h-[75vw] w-[72vw]
                    max-h-none max-w-none
                    mx-auto
                    my-[2vh]
                    md:h-[38vw] md:w-[28vw]
                    md:max-h-130 md:max-w-95
                "
            >
                <div
                    className="
                        absolute inset-[15%]
                        rounded-full
                        bg-orange-600/10
                        blur-[70px]
                        md:blur-[80px]
                    "
                />

                <Image
                    src={prefix + "/images/item.png"}
                    alt="Ancient dragon relic"
                    fill
                    priority
                    className="
                        object-contain
                        drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]
                    "
                />
            </div>

            {/* BOTTOM */}
            <div className="relative z-10 text-right">
                <div className="text-[10vw] md:text-[1vw]">
                    <TextAnim>
                        <h2>CARVED</h2>
                    </TextAnim>

                    <TextAnim>
                        <h2>FROM STONE</h2>
                    </TextAnim>

                    <TextAnim>
                        <h2>AND FIRE</h2>
                    </TextAnim>
                </div>
            </div>

            {/* metadata */}
            <div
                className="
                    absolute
                    bottom-[1.5vh]
                    left-[5vw]
                    text-[8px]
                    tracking-[0.3em]
                    text-stone-600
                    md:text-[10px]
                "
            >
                DRAGON / RELIC / 001
            </div>
        </section>
    );
};

export default Hero;
