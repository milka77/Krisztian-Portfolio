import React from 'react'
import './header.css';
import Sociallinks from './Sociallinks';
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header>
      <div className='overlay'></div>
      <div className='cotnainer header__container'>
        <Sociallinks />
        <h4>Hello I'm</h4>
        <h1>Krisztian Keseru</h1>
        <h4 className='subheader'>Full Stack Developer</h4>

        

        
      </div>
    </header>
  )
}

export default Header