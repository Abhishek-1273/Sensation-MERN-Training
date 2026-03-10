import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <header>
        <div className='logo'><img src="src\assets\logo\logo.png" alt="logo" /></div>
        <nav>
            <div><Link className='link' to="/">Home</Link></div>
            <div><Link className='link' to="/product">Product</Link></div>
            <div><Link className='link' to="/about">About</Link></div>
            <div><Link className='link' to="/contact">Contact</Link></div>
        </nav>

        <div className='auth'>
            <div><Link className='link' to="/auth">Sign Up</Link></div>
            <div><Link className='link' to="/">Log In</Link></div>
        </div>
    </header>
    </>
  )
}

export default Header;
