import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className='logo'>
          Logo
        </div>
        <ul className='link-items'>
          <li><a href="#about">Home</a></li>
          <li><a href="#services">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#contact">Enrolment</a></li>
        </ul>
        <div className='buttons'>
          Buttons
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar