import React from 'react'
import './footer.css'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'

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

        <div>
          <ul>
            <li>Krisztian Keseru</li>
            <li><small>Full-Stack Developer</small></li>
            <li><small><FaWhatsapp className='footer__icon' /> +447453306232</small></li>
            <li><small><AiOutlineMail className='footer__icon' /> <a href='mailto:krisztian.keseru@gmail.com'>krisztian.keseru@gmail.com</a></small></li>
            <li><small><GoLocation className='footer__icon' /> <a href='https://www.google.com/maps/@53.7698856,-2.7742158,14z' target='_blank' rel="noreferrer">Preston, Uk</a></small></li>
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