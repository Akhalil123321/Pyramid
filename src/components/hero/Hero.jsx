import React from 'react'
import human from '../../images/human performance.png'
import './hero.css'

const Hero = () => {
    return (
        <main className='hero-cont'>
            <img src={human} alt="" className='hero-image'/>
            <div></div>
            <div></div>
        </main>
    )
}

export default Hero