
import Contact from "./Contact/Contact";

import Education from "./Education";
import HeroSection from "./HeroSection";
import About from "./Navbar/About";
import Navbar from "./Navbar/Navbar";
import Project from "./Project/Project";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeroSection></HeroSection>
            <About></About>
            <Skills></Skills>
            <Education></Education>
         <Project></Project>
         <Contact></Contact>
         
           
        </div>
    );
};

export default Home;