import {React, useEffect} from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import Stackoverflowicon from '../Assets/Stackoverflowicon.png'
import ENGRAFOlogo from '../Assets/ENGRAFOlogo.gif'
import IIITlogo from '../Assets/IIITlogo.png'
import HMSlogo from '../Assets/HMSlogo.jpeg'
import border1 from '../Assets/border1.png'
import graphlogo from '../Assets/graphlogo.png'
import citylogo from '../Assets/citylogo.png'
import sunlogo from '../Assets/sunlogo.png'
import codelogo from '../Assets/codelogo.png'
import './Projects.css'

const Projectlist = () => {

    useEffect(() => {
        AOS.init({duration: 2000}); 
    }, []);

    return (
        <div className='main_body'>
            <div className='intro1'>
                <h2  data-aos="fade-up">My Projects</h2><br /><br />
                <p data-aos="fade-up" data-aos-delay="200">A glance at all the projects I have completed, and am currently undertaking.</p>
            </div>
            <img src={border1} alt="border" className='border1'/>
            <div className='projects_div' data-aos="fade-up">
                <div className='item'>
                    <img src={ENGRAFOlogo} alt="ENGRAFO Logo" />
                    <h3>ENGRAFO</h3>
                    <p>A secondhand book app prototype, made using python tkinter library, with MySQL for the backend. Implements features to buy, sell and rent secondhand books. This app aims to make secondhand books more accessible, and reduce the cost of education.</p>
                </div>
                <div className='item'>
                    <img src={HMSlogo} alt="HMS logo" style={{borderRadius: "50px"}}/>
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
                    <p>A series of mini projects, done as per a course on the Foundations of Modern Machine Learning, at IIIT Hyderabad. Implements various libraries in Python.</p>
                </div>
                <div className='item'>
                    <img src={graphlogo} alt="graph" />
                    <h3>Companies Data Visualisation</h3>
                    <p>A collection of charts based on the Companies dataset. Made using Plotly and Streamlit modules of Python. Find the deployment of this app <a href="https://companies-data-visualisations.streamlit.app/" target='_blank' rel="noreferrer">here</a>.</p>
                </div>
                <div className='item'>
                    <img src={citylogo} alt="cityscape" />
                    <h3>ARSUGD</h3>
                    <p>Accomodation Recommendation System using Geolocation Data, uses unsupervised machine learning techniques to classify areas as good, average or bad for rent. Find the deployment of this app <a href="https://accomodationbasedongeolocation.streamlit.app/" target='_blank' rel="noreferrer">here</a>.</p>
                </div>
                <div className='item'>
                    <img src={sunlogo} alt="sun" />
                    <h3>Weather Forecasting App</h3>
                    <p>Weather forecasting web application using React.js and Vite, connects to the OpenWeatherMap API to provide real-time weather updates. Find the deployment of this app <a href="https://weatherforecastingapp2024.netlify.app/" target='_blank' rel="noreferrer">here</a>.</p>
                </div>
                <div className='item'>
                    <img src={codelogo} alt="coding" />
                    <h3>Learning AI/ML</h3>
                    <p>I'm compiling a series of notebooks to document everything I'm learning about AI, ML, DL, and related topics.</p>
                </div>
            </div>
            <p className='after'>Source code for all the projects may be found on my <a target="_blank" href="https://github.com/NagaNitya" rel="noreferrer">GitHub</a></p>
        </div>
    )
}

export default Projectlist