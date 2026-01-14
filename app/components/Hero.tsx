import Image from "next/image";
import TextAnim from "./TextAnim";

const Hero = () => {
    return (
        <section
            className="relative bg-black h-screen w-full flex flex-col justify-between 
            text-[6vw] text-white leading-[1.2] py-[2vh] px-[5vw]"
        >
            <div>
                <TextAnim>
                    <h2>We are</h2>
                </TextAnim>

                <TextAnim>
                    <h2>Building the Future</h2>
                </TextAnim>

                <TextAnim>
                    <h2>Of the Web</h2>
                </TextAnim>
            </div>

            <div className="h-[25vw] w-[20vw] mx-auto bg-black relative">
                <Image src="/images/item.png" alt="about" fill className="object-cover w-full h-full" />
            </div>

            <div className="text-right">
                <TextAnim>
                    <h2>That</h2>
                </TextAnim>

                <TextAnim>
                    <h2>Changes the Way</h2>
                </TextAnim>

                <TextAnim>
                    <h2>You think</h2>
                </TextAnim>
            </div>
        </section>
    );
};

export default Hero;
