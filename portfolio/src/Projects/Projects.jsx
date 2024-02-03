import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foot from '../Foot/Foot'
import Projectlist from './Projectlist'
import './Projects.css'

const Projects = () => {
    return (
        <div className='back'>
            <Navbar/>
            <Projectlist/>
            <Foot/>
        </div>

    )
}

export default Projects