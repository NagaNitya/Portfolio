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
import yogapic from '../Assets/yogapic.jpg'

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
                <div className='itemdiv' data-aos="fade-up">
                    <img src={rndpic} alt="IIIT rnd showcase venue" className='imgdiv'/>
                    <div className='imgdesc'><p>Attended the Research and Development Showcase 2024 edition at the International Institute of Information Technology, Hyderabad</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={postpic} alt="IEEE nanotech poster" className='imgdiv'/>
                    <div className='imgdesc'><p>Poster for the National Symposium on the Advancements in Nanotechnology</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={smtpic} alt="Smart Interviews phase 1 end" className='imgdiv'/>
                    <div className='imgdesc'><p>Part of Smart Interviews 2023 and among the top 10 in my batch!</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={filpic} alt="Alphabetica event organisation=FILAMOGRAFO" className='imgdiv'/>
                    <div className='imgdesc'><p>Organised an event for Alphamatica 2023 and won the award for best event</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={virpic} alt="Virtusa Engineering Equity hackathon" className='imgdiv'/>
                    <div className='imgdesc'><p>Participated in the Virtusa Engineering Equity Hackathon</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={sympic} alt="maths symposium certificate" className='imgdiv'/>
                    <div className='imgdesc'><p>Presented a poster on Deep Learning at the ‘First National Student Symposium on the Approaches of Mathematical Sciences to the Emerging Technologies’ and secured second position</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={vaipic} alt="Vaisheshika model future city" className='imgdiv'/>
                    <div className='imgdesc'><p>Made a demo model of a 'Future City' for Vaisheshika 2k22 and won first prize</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={yogapic} alt="Yoga day 2025 certificate of participation" className='imgdiv'/>
                    <div className='imgdesc'><p>Participated in international Yoga Day 2025</p></div>
                </div>
                <div className='itemdiv' data-aos="fade-up">
                    <img src={dtwpic} alt="Design Thinking Workshop" className='imgdiv'/>
                    <div className='imgdesc'><p>Member of the Design Thinking Club 2022</p></div>
                </div>
            </div>            
        </div>
    )    
}

export default Gallerylist