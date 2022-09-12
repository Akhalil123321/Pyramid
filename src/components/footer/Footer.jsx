import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
import { BsArrowRight } from "react-icons/bs";
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiYoutube } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
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
                    <h2 className='footer-main-head'>{footer.title2[0].title}</h2>
                    <div className='arrow-cont'>
                        <BsArrowRight className='footer-arrow'/>
                    </div>
                    <p>{footer.title2[0].list1}</p>
                    <p>{footer.title2[0].list2}</p>
                    <p>{footer.title2[0].list3}</p>
                    <p>{footer.title2[0].list4}</p>
                </div>
            </div>
            <div className="footer-r-s">
                <div>
                    <h2 className='footer-main-head'>{footer.title3[0].title}</h2>
                    <img src={footer.title3[0].icon1} alt="" />
                    <p>{footer.title3[0].list1}</p>
                    <img src={footer.title3[0].icon2} alt="" />
                    <p>{footer.title3[0].list2}</p>
                    <img src={footer.title3[0].icon3} alt="" />
                    <p>{footer.title3[0].list3}</p>
                </div>
                <div>
                    <h2 className='footer-main-head'>{footer.title4[0].title}</h2>
                    <div className="mail-box">
                        <input type="email" placeholder='Enter Your Email'/>
                        <FaTelegramPlane className='te-icon' />
                    </div>
                    <div className='footer-r-s-icons-cont'>
                        <FiFacebook/>
                        <FiTwitter/>
                        <FaInstagram/>
                        <FiYoutube/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer