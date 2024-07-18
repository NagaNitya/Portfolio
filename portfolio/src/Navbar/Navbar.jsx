import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='main_nav'>
            <Link to={'/home'} className='nav_link_head'><h2>Nitya Penumerthy</h2>
            </Link>           
            <Link to={'/projects'} className='nav_link'>Projects</Link>
            <Link to={'/about'} className='nav_link'>About</Link>
            {/* <Link to={'/gallery'} className='nav_link'>Gallery</Link> */}
        </div>
        
    )
}

export default Navbar