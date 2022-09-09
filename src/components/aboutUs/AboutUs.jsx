import React from 'react'
import { aboutUs } from '../data'
import { FaCheckCircle } from 'react-icons/fa';
import shape3 from '../../images/shape3.svg'
import image2 from '../../images/image2.png'

import './aboutUs.css'
const AboutUs = () => {
    const listItems = aboutUs.list.map((items) => {
        
        return(
            <ul className='aboutus-list' key={items.key}>
                <FaCheckCircle className='aboutus-icon'/>
                <li>{items.listContent}</li>
            </ul>
        )
    })
    return (
        <div className='aboutus-cont'>
            <div className='aboutus-cont'>
                <div className='aboutus-l-s'>
                    <img src={shape3} alt="" className='shape-three'/>
                    <img src={image2} alt="" className='aboutus-image'/>
                </div>
                <div className='aboutus-r-s'>
                    <h1 className='main-title mediem'>{aboutUs.title}</h1>
                    <p className='.main-paragraph gray'>{aboutUs.content}</p>
                    <div className='aboutus-list-cont'>
                        {listItems}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs