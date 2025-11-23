import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from './Intro'
import Footer from '../Foot/Foot'
import './Home.css'

const Home = () => {
    return (
        <div className='main_back'>
            
            <Intro/> 
            <Navbar/>
            <Footer/>
        </div>
    )
}
export default Home