import React from 'react';
import './Hero.style.scss'
import hero from './hero.data' ;
function HeroSection() {
  return (
    hero.map((item) => {
        return <section className='hero-section'>
                <h1 className='hero-title'>{item.title}</h1>
                <h2 className="hero-sub">{item.subtitle}</h2>
                <h3 className='hero-work'>{item.work}</h3>
                <p className="hero-description">{item.description}</p>
                <a href={item.github}className='check-github-btn'>View Github !</a>
        </section>
               
    })
  )
}

export default HeroSection