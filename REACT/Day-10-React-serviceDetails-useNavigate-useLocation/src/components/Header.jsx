import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo/logo.png'

function Header() {
  return (
   <header className="header">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/service" className="nav-link">Service</NavLink>
        <NavLink to="/price" className="nav-link">Pricing</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
      </nav>

      <div className="auth">
        <NavLink to="/signUp" >Sign Up</NavLink>
        <NavLink to="/login" >Log In</NavLink>
      </div>
    </header>
  )
}

export default Header;