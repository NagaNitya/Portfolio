import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'

const Allroutes = () => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
        </Routes>
      </Router>
    )
}
export default Allroutes