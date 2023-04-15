import React from "react";
import "./Hero.style.scss";
import config from "./../../config";
function HeroSection() {
    return <>
    {config.map(obj=>obj.name==='hereSec'?
    <section className="hero-section">
    <h1 className="hero-title">{obj.title}</h1>
    <h2 className="hero-sub">{obj.subtitle}</h2>
    <h3 className="hero-work">{obj.work}</h3>
    <p className="hero-description">{obj.description}</p>
    <a
      href={obj.github}
      target="_blank"
      rel="noreferrer"
      className="check-github-btn"
    >
      View Github !
    </a>
  </section>
  :''
    )
    }
    </>
      

}
export default HeroSection;
