import React from 'react';
import './About.style.scss';
import pic from './../../Assets/Me.png'

function AboutMe() {
  return <section className='about-section'>
    <h1 className="numbered-heading">About Me</h1>
    <div className="inner">
      <div className="styledText">
        <div>
        <p>Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
        <p>Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.</p>
        </div>
        <ul className="styled-skills">
          <li>JavaScript</li>
          <li>ReactJs</li>
          <li>TypeScript</li>
          <li>Wordpress</li>
          <li>Tailwind Css</li>
          <li>Git Version Control</li>
        </ul>
      </div>
      <div className="styledPic">
        <div className="wrapper">
          <img src={pic} alt="" />
        </div>
      </div>
    </div>
  </section>

};

export default AboutMe;