import React from 'react';
import { FaMagento } from 'react-icons/fa';
import './NavLink.style.scss';

function NavLink() {
  return <div className='Nav-container'>
    <FaMagento className='logo'/>
    <div className="link">
        <ul>
            <li><a href="#AboutMe">About Me</a></li>
            <li><a href="#Stack">Stack</a></li>
            <li><a href="#Workd">Work</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>
  </div>
  
}

export default NavLink;