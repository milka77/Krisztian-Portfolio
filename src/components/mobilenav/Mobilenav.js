import React from 'react'
import './Mobilenav.css'
import { AiOutlineClose } from 'react-icons/ai'

const Mobilenav = ({ onAdd }) => {
  let homeUrl = '#'

  return (
    <nav id='mobile-nav'>
      <AiOutlineClose className='close-button' onClick={onAdd}/>
      <ul>
        <li><a href={ homeUrl } >Home</a></li>
        <li><a href='#about' >About</a></li>
        <li><a href='#portfolio' >Portfolio</a></li>
        <li><a href='#contact' >Contact</a></li>
      </ul>
    </nav>
  )
}

export default Mobilenav