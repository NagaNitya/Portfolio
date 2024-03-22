import React from 'react'
import Stackoverflowicon from '../Assets/Stackoverflowicon.png'
import ENGRAFOlogo from '../Assets/ENGRAFOlogo.gif'
import IIITlogo from '../Assets/IIITlogo.png'
import HMSlogo from '../Assets/HMSlogo.jpeg'
import border1 from '../Assets/border1.png'
import graphlogo from '../Assets/graphlogo.png'
import './Projects.css'

const Projectlist = () => {
    return (
        <div className='main_body'>
            <div className='intro1'>
                <h2>My Projects</h2><br /><br />
                <p>A glance at all the projects I have completed, and am currently undertaking.</p>
            </div>
            <img src={border1} alt="border" className='border1'/>
            <div className='projects_div'>
                <div className='item'>
                    <img src={ENGRAFOlogo} alt="ENGRAFO Logo" />
                    <h3>ENGRAFO</h3>
                    <p>A secondhand book app prototype, made using python tkinter library, with MySQL for the backend. Implements features to buy, sell and rent secondhand books. This app aims to make secondhand books more accessible, and reduce the cost of education.</p>
                </div>
                <div className='item'>
                    <img src={HMSlogo} alt="HMS logo" />
                    <h3>Hospital Management System Website</h3>
                    <p>A hospital management system website. Made using HTML and CSS, with MySQL and PHP for the backend.Features an online system of login for patients and doctors, to view health-related information.</p>
                </div>
                <div className='item'>
                    <img src={Stackoverflowicon} alt="StackOverflow Icon" />
                    <h3>StackOverflow Clone</h3>
                    <p>A clone of the Stackoverflow website, which implements functions such as asking and answering questions, while also implementing extra features such as a Chatbot. Made using ReactJS and Node.JS, with MongoDB Atlas database services.</p>
                </div>
                <div className='item'>
                    <img src={IIITlogo} alt="IIIT Hyd logo" />
                    <h3>ML Project Series</h3>
                    <p>A series of mini projects, done as per an ongoing course on the Foundations of Modern Machine Learning, at IIIT Hyderabad.Implement various libraries in Python.</p>
                </div>
                <div className='item'>
                    <img src={graphlogo} alt="IIIT Hyd logo" />
                    <h3>Companies Data Visualisation</h3>
                    <p>A collection of charts based on the Companies dataset. Made using Plotly and Streamlit modules of Python. Find the deployment of this app <a href="https://companies-data-visualisations.streamlit.app/" target='_blank' rel="noreferrer">here</a>.</p>
                </div>
            </div>
            <p className='after'>Source code for all the projects may be found in my <a target="_blank" href="https://github.com/NagaNitya" rel="noreferrer">GitHub</a></p>
        </div>
    )
}

export default Projectlist