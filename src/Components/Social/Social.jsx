import React from 'react'
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import './Social.style.scss'
import config from './../../config.js'

function Social() {
  return <>

    {config.map(obj => 
        obj.name === 'socialSec' ?
        <div className='social-container'>
          <div className="left-box">
            <ul>
              <li><a href={obj.linkedin}
                target='_blank'
                rel='noreferrer' ><FiLinkedin /></a></li>
              <li><a href={obj.github}
                target='_blank'
                rel='noreferrer' ><SiGithub /></a></li>
              <li><a href={obj.twitter}
                target='_blank'
                rel='noreferrer'><FiTwitter /></a></li>
              <li><a href={obj.instagram}
                target='_blank'
                rel='noreferrer'><FiInstagram /></a>
              </li>
            </ul>
            <div className="vertical-border"></div>
          </div>
          <div className="right-box">
            <ul>
              <li><a href={`mailto:${obj.email}`}>{obj.email}</a></li>
            </ul>
            <div className="vertical-border"></div>
          </div>
        </div>
        : ''
    )}
    </>

}

export default Social;