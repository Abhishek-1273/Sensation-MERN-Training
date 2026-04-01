import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo/logo.png'

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/service">Service</Link>
        <Link className="nav-link" to="/price">Pricing</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact Us</Link>
      </nav>

      <div className="auth">
        <Link to="/signUp">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>

    </header>
  )
}

export default Header;