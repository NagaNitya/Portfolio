import {React, useEffect, useRef, useState} from 'react'
import './Home.css'
import displaypic from '../Assets/displaypic.jpg'
import AOS from "aos";
import "aos/dist/aos.css";


const Intro = () => {

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPx = window.scrollY;              // scroll position in px
            const viewportHeight = window.innerHeight;    // viewport height in px
            const vhValue = (scrollPx / viewportHeight) * 100; // convert to vh
            setScrollPosition(vhValue);
        };
        window.addEventListener("scroll", handleScroll);

        // Cleanup when component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []); 

    useEffect(() => {
        AOS.init({duration: 1500, once: false});
        
    }, []);

    return (
        <div className="intro_div" id="top">
            <div className='scroll_box_1'>
                <img src={displaypic} alt="display pic" className='displaypic'/>
                <p>Hello! I'm Nitya Penumerthy, a passionate software developer and tech enthusiast. Welcome to my portfolio where I showcase my projects, skills, and experiences in the world of technology.</p>
            </div> 

           
                <div className='scroll_box_2 ${scrollVh >= 100 ? "show" : "hide"}' data-aos="fade-up">
                    <p>I’m Nitya Penumerthy, a recent Computer Science graduate specializing in Artificial Intelligence and Machine Learning from Geethanjali College of Engineering and Technology. Passionate about coding and creative problem‑solving, I constantly explore new technologies, programming languages, and practical projects to sharpen my skills. Hackathons, events, and internships have been central to my journey, helping me grow through hands‑on experiences. My focus on emerging technologies reflects my drive to contribute meaningfully to the transformative field of AI.</p>
                    <p>Dive in to explore more about my journey and what I have to offer!</p>
                </div>
        </div>    
    )
}

export default Intro