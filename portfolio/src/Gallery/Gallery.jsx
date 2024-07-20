import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foot from '../Foot/Foot'
import Gallerylist from './Gallerylist'
import './Gallery.css'

const Gallery = () => {
    return (
        <div className='back'>
            <Navbar/>
            <Gallerylist/>
            <Foot/>
        </div>

    )
}

export default Gallery