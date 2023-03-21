import React from 'react'
import {FiLinkedin, FiTwitter,FiInstagram} from 'react-icons/fi'
import {SiGithub} from 'react-icons/si'
import './Social.style.scss'

function Social() {
  return <div className='social-container'>
    <div className="left-box">
                <ul>
                  <li><a href="https://github.com/achrafaitmbarek/"
                                target='_blank' rel='noreferrer' ><FiLinkedin/></a></li>
                  <li><a href="https://www.linkedin.com/in/achraf-ait-m-barek-/"
                                target='_blank' rel='noreferrer' ><SiGithub/></a></li>
                  <li><a href="https://twitter.com/ait_ashraf"
                                target='_blank' rel='noreferrer'><FiTwitter/></a></li>
                                <li>
                                  <a href="instagrma.com" rel='noreferrer'><FiInstagram/></a>
                                </li>
                </ul>
                <div className="vertical-border"></div>
              </div>
              <div className="right-box">
                <ul>
                  <li><a href="mailto:aitmbarekachraf@gmail.com">aitmbarekachraf@gmail.com</a></li>
                </ul>
                <div className="vertical-border"></div>
              </div>
  </div>
}

export default Social;