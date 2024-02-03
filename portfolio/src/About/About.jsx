import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foot from '../Foot/Foot'
import Aboutinfo from './Aboutinfo'
import './About.css'

const About = () => {
    return (
        <div className='back'>
            <Navbar/>
            <Aboutinfo/>
            <Foot/>
        </div>

    )
}

export default About