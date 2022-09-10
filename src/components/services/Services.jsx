import React from 'react'
import shape1 from '../../images/shape1-2.svg'
import shape2 from '../../images/shape2.svg'
import {survices} from '../data'
import './services.css'
const Services = () => {
    const tableList = survices.content.map(items => {
        return(
            <div className='services-card' key={items.key}>
                <img src={items.icon} alt="icon" className='services-table-icon'/>
                <h4 className='services-head'>{items.head}</h4>
                <p className='servises-paragraph gray'>{items.paragraph}</p>
            </div>
        )
    })
    return (
        <div className='sevices-cont'>
            <h1 className='main-title mediem center'>{survices.title}</h1>
            <div className='services-table'>
                {tableList}
            </div>
            <div className='side-shapes'>
                    <img src={shape1} alt=''/>
                    <img src={shape2} alt=''/>
                    <img src={shape1} alt=''/>
                    <img src={shape2} alt=''/>
                
            </div>
        </div>
    )
}

export default Services