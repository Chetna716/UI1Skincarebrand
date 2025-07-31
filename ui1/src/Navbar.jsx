import React from 'react'
import './Navbar.css'

function Navbar() {
    return(
        <nav className="navbar">
            <div className='logo'> <img src="./logo.png" /> BARE BLOOM</div>
            <ul className='nav-links'>
                <li><a href="#">Skincare</a></li>
                <li><a href="#">Body</a></li>
                <li><a href="#">Bestsellers</a></li>
                <li><a href="#">About Us</a></li>
            </ul>
            <div className='nav-buttons'>
                <button className='login-btn'> Log In</button>
                <button className='cart-btn'> Cart</button>
            </div>
         </nav>
    )
}

export default Navbar