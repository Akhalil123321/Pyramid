import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import line from '../../images/line.svg'
import { portflio } from '../data'

import './portfolio.css'
const Portfolio = () => {
    const portfolioList = portflio.content.map(items => {
        return(
            <div className='portfolio-card' key={items.key}>
                <div>
                    <img src={items.image} alt=""/>
                    <div>
                        <FaFacebookF/>
                        <FaTwitter/>
                        <FaLinkedinIn/>
                        <FaInstagram/>
                    </div>
                </div>
                <h3>{items.name}</h3>
                <p className='gray'>{items.job}</p>
            </div>
        )
    })
    return (
        <div className='portfolio-cont'>
            <h1 className='main-title mediem'>{portflio.title}</h1>
            <img src={line} alt="" className='zigzag-line'/>
            <div className='characters-cont'>{portfolioList}</div>
        </div>
    )
}

export default Portfolio