import React from 'react'
import Navbar from '../Navbar/Navbar'
import Foot from '../Foot/Foot'
import Gallerylist from './Gallerylist'

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