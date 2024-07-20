import React from 'react'
import border3 from '../Assets/border3.png'
import rndpic from '../Assets/rndpic.jpg'
import postpic from '../Assets/postpic.jpg'
import vaipic from '../Assets/vaipic.jpg'
import filpic from '../Assets/filpic.jpg'
import dtwpic from '../Assets/dtwpic.jpg'
import smtpic from '../Assets/smtpic.jpg'
import virpic from '../Assets/virpic.jpeg'
import sympic from '../Assets/sympic.jpeg'

const Gallerylist = () => {
    return(
        <div className='main_body'>
            <div className='intro1'>
                <h2>Gallery</h2><br /><br />
                <p>Snapshots of various events and achievements.</p>
            </div>
            <img src={border3} alt="border" className='border3'/>
            <div className='bodydiv'>
                <img src={rndpic} alt="IIIT rnd showcase venue" className='imgdiv'/>
                <img src={postpic} alt="IEEE nanotech poster" className='imgdiv'/>
                <img src={smtpic} alt="Smart Interviews phase 1 end" className='imgdiv'/>
                <img src={filpic} alt="Alphabetica event organisation=FILAMOGRAFO" className='imgdiv'/>
                <img src={virpic} alt="Virtusa Engineering Equity hackathon" className='imgdiv'/>
                <img src={sympic} alt="maths symposium certificate" className='imgdiv'/>
                <img src={vaipic} alt="Vaisheshika model future city" className='imgdiv'/>
                <img src={dtwpic} alt="Design Thinking Workshop" className='imgdiv'/>
            </div>

            
        </div>
    )    
}

export default Gallerylist