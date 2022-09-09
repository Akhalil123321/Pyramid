import React from 'react'
import human from '../../images/human performance.png'
import { heroContetnt } from '../data'
import './hero.css'

const Hero = () => {
    return (
        <main className='hero-cont'>
            <div className='hero-l-s'>
                <h1 className='main-title'>{heroContetnt.title}</h1>
                <p className='main-paragraph gray'>{heroContetnt.contetnt}</p>
                <div className="hero-button-cont">
                    <button>Get Quote</button>
                    <button>Learn More</button>
                </div>
            </div>
            <div className='hero-r-s'>
                <img src={human} alt="" className='hero-image'/>
            </div>
        </main>
    )
}

export default Hero