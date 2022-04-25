import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { BsTwitter } from 'react-icons/bs'

const Sociallinks = () => {
  return (
    <div>
      <div className='social-links__wrap'>
        <ul className='social-links'>
          <li><a href='https://github.com/milka77' target='noreferrer noopener'><BsGithub /></a></li>
          <li><a href='https://www.linkedin.com/in/krisztian-keseru-a09804ba/' target='noreferrer noopener'><BsLinkedin /></a></li>
          <li><a href='https://twitter.com/evo3gt' target='noreferrer noopener'><BsTwitter /></a></li>
          <li><a href='mailto:krisztian.keseru@gmail.com'><HiOutlineMail /></a></li>
        </ul>
      </div>

      <div className="social-email__wrap">
        <div className='social-email'>
          <a href="mailto:krisztian.keseru@gmail.com">krisztian.keseru@gmail.com</a>
        </div>
      </div>

    </div>
  )
}

export default Sociallinks