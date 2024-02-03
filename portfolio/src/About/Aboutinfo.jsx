import React from 'react'
import clogo from '../Assets/clogo.png'
import csslogo from '../Assets/csslogo.png'
import htmllogo from '../Assets/htmllogo.png'
import javalogo from '../Assets/javalogo.png'
import mysqllogo from '../Assets/mysqllogo.png'
import pythonlogo from '../Assets/pythonlogo.png'
import reactlogo from '../Assets/reactlogo.png'
import border2 from '../Assets/border2.png'
import caticon from '../Assets/caticon.png'
import './About.css'

const Aboutinfo =() => {
    return (
        <div className='main_body'>
            <div className='intro2'>
                <h2>About Me</h2><br /><br />
                <p>A complete introduction to me, my skills, strengths and areas of interest.</p>
            </div>
            <img src={border2} alt="border" className='border2'/>
            <div className='about_me_div'>
                <h3>Introduction</h3>
                <p>My name is Nitya Penumerthy. I am currently pursuing a Bachelor of Technology, majoring in Computer Science with a specialisation in AI and ML, at Geethanjali College of Engineering and Technology. The reason for my choosing this stream, is because of my interest in emerging areas of technology, especially the field of Artificial Intelligence.</p>
                <p>I have a genuine enthusiasm for coding and the process of creating with code. Continually pushing myself beyond my comfort zone, I actively seek to learn new problem-solving techniques, programming languages, and various other skills. I thrive on practical learning experiences and, as a result, engage in projects within my areas of interest to deepen my understanding of applicable skills. Regularly participating in hackathons, events, and internships is part of my approach to acquiring new skills and enhancing existing ones.</p>
            </div>
            <div className='my_skills_div'>
                <h3>My Skills</h3><br />
                <div className='skills'>
                    <div className='skill'>
                        <img src={clogo} alt="C" /><br />
                        <p>C language</p>
                    </div>
                    <div className='skill'>
                        <img src={csslogo} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className='skill'>
                        <img src={htmllogo} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className='skill'>
                        <img src={javalogo} alt="Java" />
                        <p>Java</p>
                    </div>
                    <div className='skill'>
                        <img src={mysqllogo} alt="MySQL" />
                        <p>MySQL</p>
                    </div>
                    <div className='skill'>
                        <img src={pythonlogo} alt="Python" />
                        <p>Python</p>
                    </div>
                    <div className='skill'>
                        <img src={reactlogo} alt="React" className='skill' />
                        <p>ReactJS</p>
                    </div>
                </div><br /><br />
                <p>Check out my coding credentials in <a target="_blank" href="https://leetcode.com/NagaNitya/" rel="noreferrer">LeetCode</a> and <a target="_blank" href="https://www.hackerrank.com/profile/NagaNitya" rel="noreferrer">HackerRank</a></p>
            </div>
            <div className='lang_div'>
                <h3>Languages Known</h3>
                <p>English, French, Telugu</p>
            </div>
            <div className='hobbies'>
                <h3>My Hobbies</h3>
                <p>I am an avid reader, and enjoy books of the fantasy, mystery and horror genres. My favourite book series is <i>LOTR</i>. I have recently ventured into the classics as well, and find <i>Dracula</i> to be a wonderful read.</p>
                <p>I also enjoy drawing and painting, especially in watercolours. Check out my <a target="_blank" href="https://www.deviantart.com/nityasri" rel="noreferrer">Deviantart</a></p><br />
                <img src={caticon} alt="cat" />
            </div>
        </div>
    )
}

export default Aboutinfo