import Image from "next/image";

import TextAnim from "./TextAnim";

const About = () => {
    return (
        <section className="w-full py-[10vh] px-[5vw] bg-black">
            <TextAnim useScrollTrigger={true}>
                <h2 className="text-white text-[6vw] text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </h2>
            </TextAnim>

            <div className="flex items-center justify-between px-[5vw] mt-[15vh] gap-[5vw]">
                <div className="h-[30vw] w-[25vw] bg-white relative">
                    <Image src="/images/1.jpg" alt="about" fill className="object-cover w-full h-full" />
                </div>

                <TextAnim useScrollTrigger={true}>
                    <p className="text-white text-[1.3vw] w-[60%] mx-auto text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit vel veritatis beatae quidem
                        nostrum nesciunt id consequuntur deserunt.
                    </p>
                </TextAnim>

                <div className="h-[30vw] w-[25vw] bg-white relative">
                    <Image src="/images/2.jpg" alt="about" fill className="object-cover w-full h-full" />
                </div>
            </div>
        </section>
    );
};

export default About;
