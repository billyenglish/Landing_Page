import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "./ContactMe";

const Main = () => {
    return (
        <main>
            <HeroSection />
            <About />
            <Projects />
            <Skills />
            <ContactMe />
        </main>
    )
}

export default Main;