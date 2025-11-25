import {React, useEffect, useRef, useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {

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

        const scrollToTop = (e) => {
            e.preventDefault();
            window.scrollTo({
            top: 0,
            behavior: "smooth", // smooth scroll
        });
  };

    return (
        <div>
            <div className='main_nav'>
                <a href="#top" onClick={scrollToTop} className='nav_link_head'><h2>Nitya Penumerthy</h2></a>           
                <a href="#education" className='nav_link'>Projects</a>
                <Link to={'/about'} className='nav_link'>About</Link>
                <Link to={'/gallery'} className='nav_link'>Gallery</Link>
            </div>
            <p>under renovation! please wait!</p>

        </div>
        
        
    )
}

export default Navbar