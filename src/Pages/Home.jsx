import React from 'react';
import NavLink from '../Components/NavLink/NavLink';
import AboutMe from '../Components/AboutMe/AboutMe';
import Stack from '../Components/Stack/Stack';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import HeroSection from '../Components/HeroSection/HeroSection';
function Home() {
  return <div>
            <NavLink/>
            <HeroSection/>
            <AboutMe/> 
            <Stack/>
            <Projects/>
            <Contact/>
    </div>
};

export default Home;