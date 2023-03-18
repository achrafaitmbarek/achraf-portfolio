import React from 'react';
import './Hero.style.scss'
import hero from './hero.data' ;
function HeroSection() {
  return (
    hero.map((item) => {
        return <section className='hero-section'>
                <h1 className='hero-title'>{item.title}</h1>
                <h2 className="hero-sub">{item.subtitle}</h2>
                <p className="hero-description">{item.description}</p>
        </section>
               
    })
  )
}

export default HeroSection