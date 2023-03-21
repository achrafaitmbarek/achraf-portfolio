import React from 'react';
import NavLink from '../Components/NavLink/NavLink';
import AboutMe from '../Components/AboutMe/AboutMe';
import Stack from '../Components/Stack/Stack';
import Projects from '../Components/Projects/Projects';
import Contact from '../Components/Contact/Contact';
import HeroSection from '../Components/HeroSection/HeroSection';
import './Home.style.scss'
import Social from '../Components/Social/Social';
function Home() {
  return <div className='home-container'>
            <NavLink/> 
            <HeroSection/>
            <AboutMe/> 
            <Stack/>
            <Projects/>
            <Contact/> 
            <Social/>
         </div>
};

export default Home;