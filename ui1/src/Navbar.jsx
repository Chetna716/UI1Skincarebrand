import React, { useState } from 'react'
import './Navbar.css'

function Navbar({ logoRef, navLinksRef, navButtonsRef }) {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)

    return(
        <>
          <nav className="navbar">
            <button
              ref={logoRef}
              className='logo logo-button'
              onClick={toggleMenu}
              aria-label="Open navigation"
              aria-expanded={menuOpen}
            >
              <img src="./logo.png" alt="Bare Bloom" /> BARE BLOOM
            </button>
            <ul className='nav-links'>
                <li ref={el => navLinksRef.current[0] = el}><a href="#skincare">Skincare</a></li>
                <li ref={el => navLinksRef.current[1] = el}><a href="#body">Body</a></li>
                <li ref={el => navLinksRef.current[2] = el}><a href="#bestsellers">Bestsellers</a></li>
                <li ref={el => navLinksRef.current[3] = el}><a href="#aboutus">About Us</a></li>
            </ul>
            <div className='nav-buttons'>
                <button ref={el => navButtonsRef.current[0] = el} className='login-btn'> Log In</button>
                <button ref={el => navButtonsRef.current[1] = el} className='cart-btn'> Cart</button>
            </div>
          </nav>

          {/* Mobile menu */}
          <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
            <ul className='mobile-menu-links'>
              <li><a href="#skincare" onClick={() => setMenuOpen(false)}>Skincare</a></li>
              <li><a href="#body" onClick={() => setMenuOpen(false)}>Body</a></li>
              <li><a href="#bestsellers" onClick={() => setMenuOpen(false)}>Bestsellers</a></li>
              <li><a href="#aboutus" onClick={() => setMenuOpen(false)}>About Us</a></li>
            </ul>
          </div>
        </>
    )
}

export default Navbar