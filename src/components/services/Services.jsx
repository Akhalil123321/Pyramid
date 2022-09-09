import React from 'react'
import {survices} from '../data'
import './services.css'
const Services = () => {
    const tableList = survices.content.map(items => {
        return(
            <div className='services-card' key={items.key}>
                <img src={items.icon} alt="icon" className='aboutus-table-icon'/>
                <h4 className='aboutus-head'>{items.head}</h4>
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
        </div>
    )
}

export default Services