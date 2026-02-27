import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Skill from '../src/components/Skill';
import Project from '../src/components/Project';
import Blog from '../src/components/Blog';
import Contact from '../src/components/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Skill />
            <Project />
            <Blog />
            <Contact />
        </>
    );
}
