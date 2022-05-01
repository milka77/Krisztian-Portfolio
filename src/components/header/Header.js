import React from 'react'
import './header.css';
import Sociallinks from './Sociallinks';
import ME from '../../assets/me.png';

const Header = () => {
  return (
    <header>
      <div className='overlay'></div>
      <div className='container header__container'>
        <Sociallinks />
        <div className='header__row'>Hello <span className='header__first-row-big'>I'm</span></div>
        <div className='header__row name'><span className='header__name-big'>Krisztian</span> Keseru</div>
        <div className='header__row'>Full-Stack <span className='header__title-big'>Developer</span></div>

        

        
      </div>
    </header>
  )
}

export default Header