import React from 'react'
import './Navbar.css'

function Navbar({ logoRef, navLinksRef, navButtonsRef }) {
    return(
        <nav className="navbar">
            <div ref={logoRef} className='logo'> <img src="./logo.png" /> BARE BLOOM</div>
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
    )
}

export default Navbar