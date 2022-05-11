import React from 'react'
import './footer.css'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <div>
          <ul>
            <li>Quick Links</li>
            <li><a href='#'><small>Home</small></a></li>
            <li><a href='#about'><small>About</small></a></li>
            <li><a href='#services'><small>Skills</small></a></li>
            <li><a href='#portfolio'><small>Portfolio</small></a></li>
            
            
          </ul>
        </div>

        <div className='footer__social'>
          <h4>Social Links</h4>
          <ul className='footer__social-links'>
            <li><a href='https://github.com/milka77' target='noreferrer noopener'><BsGithub /></a></li>
            <li><a href='https://www.linkedin.com/in/krisztian-keseru-a09804ba/' target='noreferrer noopener'><BsLinkedin /></a></li>
            <li><a href='https://twitter.com/evo3gt' target='noreferrer noopener'><BsTwitter /></a></li>
            <li><a href='mailto:krisztian.keseru@gmail.com'><HiOutlineMail /></a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Krisztian Keseru</li>
            <li><small>Full-Stack Developer</small></li>
            <li><small><FaWhatsapp className='icon' /> +447453306232</small></li>
            <li><small><AiOutlineMail className='icon' /> <a href='mailto:krisztian.keseru@gmail.com'>krisztian.keseru@gmail.com</a></small></li>
            <li><small><GoLocation className='icon' /> <a href='https://www.google.com/maps/@53.7698856,-2.7742158,14z' target='_blank' rel="noreferrer">Preston, Uk</a></small></li>
          </ul>
        </div>

      </div>
      <div className="copyright">
        <small><a href="http://github.com/milka77">Designed and Created by Krisztian Keseru &copy; 2022</a></small>
      </div>
      
    </footer>
  )
}

export default Footer