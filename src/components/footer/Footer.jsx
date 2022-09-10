import React from 'react'
import logo from '../../images/white logo.svg'
import { footer } from '../data'
import './footer.css'
const Footer = () => {
    return (
        <div className='footer-cont'>
            <div className="footer-l-s">
                <div>
                    <div className='footer-company-cont'>
                        <img src={logo} alt="" className=''/>
                        <h1 className=''>Pyramids</h1>
                    </div>
                    <p>{footer.paragraph}</p>
                </div>
                <div>
                </div>
            </div>
            <div className="footer-r-s">
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Footer