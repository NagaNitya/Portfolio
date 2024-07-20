import React from 'react'
import githublogo from '../Assets/githublogo.png'
import linkedinlogo from '../Assets/linkedinlogo.png'
import emaillogo from '../Assets/emaillogo.png'
import './Foot.css'

const Foot = () => {

    return (
        <div className='footer_div'>
            <div className='foot_dets'>
                <div className='contact'>
                    <h3>Contact me on:</h3>
                    <a target="_blank" href="https://github.com/NagaNitya" rel="noreferrer">
                        <img src={githublogo} alt="github logo" />
                    </a>&nbsp;&nbsp;
                    <a target="_blank" href="https://www.linkedin.com/in/nitya-penumerthy-1256b7274/" rel="noreferrer">
                        <img src={linkedinlogo} alt="linkedin logo" />
                    </a>&nbsp;&nbsp;
                    <a href="mailto:naganitya@outlook.com">
                        <img src={emaillogo} alt="email" />
                    </a>
                </div>
            </div>
            
            <div className='credit'>
                <a href="https://commons.wikimedia.org/wiki/File:IIIT_logo.png">Quark8</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>, via Wikimedia Commons <br />
                <a target="_blank" href="https://icons8.com/icon/39858/mysql-logo" rel="noreferrer">mysql</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/25423/c" rel="noreferrer">C</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/23028/html-5" rel="noreferrer">html logo</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/38272/css3" rel="noreferrer">CSS Logo</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/2572/java" rel="noreferrer">java logo</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/12592/python" rel="noreferrer">Python</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/122637/react" rel="noreferrer">React</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/124385/email-open" rel="noreferrer">Email Open</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/8808/linkedin" rel="noreferrer">linkedin logo</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/12599/github" rel="noreferrer">GitHub</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/121371/cat" rel="noreferrer">Cat</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/3723/location" rel="noreferrer">Location</a>&nbsp;
                <a target="_blank" href="https://icons8.com/icon/61864/artificial-intelligence" rel="noreferrer">Ai</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/83159/download" rel="noreferrer">Download</a>,&nbsp;
                <a target="_blank" href="https://icons8.com/icon/91234/home" rel="noreferrer">Home</a>&nbsp;
                icons by <a target="_blank" href="https://icons8.com" rel="noreferrer">Icons8</a><br />
            </div>
        </div>
    )
}
export default Foot