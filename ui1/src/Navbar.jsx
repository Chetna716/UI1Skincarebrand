import React, { forwardRef } from 'react'
import './Navbar.css'

const Navbar = forwardRef(({ logoRef, navLinksRef, navButtonsRef }, ref) => {
    return (
        <nav className="navbar">
            <div className='logo' ref={logoRef}>
                <img src="./logo.png" alt="logo" /> BARE BLOOM
            </div>
            <ul className='nav-links'>
                {['Skincare', 'Body', 'Bestsellers', 'About Us'].map((text, i) => (
                    <li key={i} ref={el => navLinksRef.current[i] = el}>
                        <a href="#">{text}</a>
                    </li>
                ))}
            </ul>
            <div className='nav-buttons'>
                <button ref={el => navButtonsRef.current[0] = el} className='login-btn'> Log In</button>
                <button ref={el => navButtonsRef.current[1] = el} className='cart-btn'> Cart</button>
            </div>
        </nav>
    )
})

export default Navbar
