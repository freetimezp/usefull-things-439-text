import React from "react";

const Hero = () => {
    return (
        <section
            className="relative bg-black h-screen w-full flex flex-col justify-between 
            text-[6vw] text-white leading-[1.2] px-[5vw]"
        >
            <div>
                <h2>We are</h2>
                <h2>Building the Future</h2>
                <h2>Of the Web</h2>
            </div>

            <div className="text-right">
                <h2>That</h2>
                <h2>Changes the Way</h2>
                <h2>You think</h2>
            </div>
        </section>
    );
};

export default Hero;
