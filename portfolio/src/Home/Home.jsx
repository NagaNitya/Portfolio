import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from './Intro'
import Footer from '../Foot/Foot'

const Home = () => {
    return (
        <div className='main_back'>
            <Navbar/>
            <Intro/> 
            <Footer/>
        </div>


    )
}
export default Home