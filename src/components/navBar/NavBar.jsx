import React, {useState} from 'react'
import { FaAngleUp } from 'react-icons/fa';
import logo from '../../images/logo.svg'
import './navBar.css'

const NavBar = () => {
    const [list, setList] = useState(false)
    const listState = list ? 'list-icon-open' : 'list-icon-close'
    const listIconState = list ? 'nav-list-open' : 'nav-list-close'
    return (
        <header className='nav-cont'>
            <div className='logo-cont'>
                <img src={logo} alt="" className='nav-logo'/>
                <h1 className='nav-site-name'>Pyramids</h1>
            </div>
            <ul className={listIconState}>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <FaAngleUp className={listState} onClick={() => setList(!list)}/>
        </header>
    )
}

export default NavBar