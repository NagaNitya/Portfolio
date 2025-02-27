import {React, useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import './Home.css'
import rndpic from '../Assets/rndpic.jpg'
const Intro = () => {

    useEffect(() => {
        AOS.init({duration: 2000}); 
    }, []);

    return (
        <div>
            <div className='intro_div'>
                <h2 data-aos="fade-up">Hello everyone, and welcome to my personal portfolio!</h2><br /><br />
                <p data-aos="fade-up" data-aos-delay="200">My name is Nitya Penumerthy, I am currently pursuing my Bachelor of Technology, majoring in Computer Science. I enjoy coding and creating things with code, which has led to my creating this portfolio to showcase all the projects I have done, and am currently working on.</p>
            </div>
           
            <p className='more_info_p'data-aos="fade-up" data-aos-delay="100">Click on the links to see my projects, my skills and my credentials in other websites</p>
        </div>
        
    )
}

export default Intro