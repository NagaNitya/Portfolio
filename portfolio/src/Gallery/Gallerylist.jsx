import {React, useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
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

    useEffect(() => {
        AOS.init({duration: 2000}); 
       }, []);

    return(
        <div className='main_body'>
            <div className='intro1'>
                <h2 data-aos="fade-up">Gallery</h2><br /><br />
                <p data-aos="fade-up" data-aos-delay="200">Snapshots of various events and achievements.</p>
            </div>
            <img src={border3} alt="border" className='border3'/>
            <div className='bodydiv'>
                <img src={rndpic} alt="IIIT rnd showcase venue" className='imgdiv' data-aos="fade-up"/>
                <img src={postpic} alt="IEEE nanotech poster" className='imgdiv' data-aos="fade-up"/>
                <img src={smtpic} alt="Smart Interviews phase 1 end" className='imgdiv' data-aos="fade-up"/>
                <img src={filpic} alt="Alphabetica event organisation=FILAMOGRAFO" className='imgdiv' data-aos="fade-up"/>
                <img src={virpic} alt="Virtusa Engineering Equity hackathon" className='imgdiv' data-aos="fade-up"/>
                <img src={sympic} alt="maths symposium certificate" className='imgdiv' data-aos="fade-up"/>
                <img src={vaipic} alt="Vaisheshika model future city" className='imgdiv' data-aos="fade-up"/>
                <img src={dtwpic} alt="Design Thinking Workshop" className='imgdiv' data-aos="fade-up"/>
            </div>

            
        </div>
    )    
}

export default Gallerylist