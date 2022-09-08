import React from 'react'
import logo from '../../images/logo.svg'
import './navBar.css'

const NavBar = () => {
    return (
        <header className='nav-cont'>
            <div className='logo-cont'>
                <img src={logo} alt="" className='nav-logo'/>
                <h1 className='nav-site-name'>Pyramids</h1>
            </div>
            <ul className='nav-list'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </header>
    )
}

export default NavBar