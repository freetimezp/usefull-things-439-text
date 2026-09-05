import Hero from "./components/Hero";
import About from "./components/About";
import ScrambleScroll from "./components/ScrambleScroll";

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "usefull-things-439-text" : "";

export default function Home() {
    return (
        <div className="">
            <Hero prefix={prefix} />
            <About prefix={prefix} />

            <ScrambleScroll />
        </div>
    );
}
