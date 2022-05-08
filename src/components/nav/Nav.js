import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { FaInfo } from 'react-icons/fa'
import { RiPagesLine } from 'react-icons/ri'
import { AiOutlineMessage } from 'react-icons/ai'


import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav className='nav'>
      
        <ul className='nav-list'>
          <li><a href='#'><AiOutlineHome  className='nav-list__item'/></a></li>
          <li><a href='#about'><AiOutlineUser  className='nav-list__item'/></a></li>
          <li><a href='#portfolio' ><BiBook  className='nav-list__item'/></a></li>
          <li><a href='#contact' ><AiOutlineMessage  className='nav-list__item'/></a></li>
         
          {/* <li><RiServiceLine /></li> */}

        </ul>
      
    </nav>
  )
}

export default Nav