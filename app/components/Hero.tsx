import Image from "next/image";
import TextAnim from "./TextAnim";

const Hero = ({ prefix }: { prefix: string }) => {
    return (
        <section
            className="
                relative min-h-screen w-full overflow-hidden
                flex flex-col justify-between
                bg-[#0b0a09] text-[#e8e1d5]
                leading-[1.05]
                py-[2vh] px-[5vw]
            "
        >
            {/* atmospheric glow */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute left-1/2 top-1/2
                        -translate-x-1/2 -translate-y-1/2
                        w-[45vw] h-[45vw]
                        rounded-full
                        bg-orange-700/10
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute inset-0 opacity-[0.08]
                        bg-[radial-gradient(circle_at_center,#d97706_1px,transparent_1px)]
                        bg-size-[18px_18px]
                    "
                />
            </div>

            {/* TOP */}
            <div className="relative z-10">
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

            {/* DRAGON RELIC */}
            <div
                className="
                    relative z-10
                    h-[38vw] w-[28vw]
                    max-h-130 max-w-95
                    mx-auto
                "
            >
                {/* aura */}
                <div
                    className="
                        absolute inset-[15%]
                        rounded-full
                        bg-orange-600/10
                        blur-[80px]
                    "
                />

                <Image
                    src={prefix + "/images/item.png"}
                    alt="Ancient dragon relic"
                    fill
                    priority
                    className="
                        object-contain
                        drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]
                    "
                />
            </div>

            {/* BOTTOM */}
            <div className="relative z-10 text-right">
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

            {/* small coordinates */}
            <div className="absolute bottom-[2vh] left-[5vw] text-[10px] tracking-[0.3em] text-stone-500">
                DRAGON / RELIC / 001
            </div>
        </section>
    );
};

export default Hero;
