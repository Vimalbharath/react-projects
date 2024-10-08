import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
      <Link to='/'>
      <img className='logo' src={logo} alt='nav-bar-logo'/>
      </Link>
      <ul className='nav-links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      </div>

        
    </nav>
  )
}


