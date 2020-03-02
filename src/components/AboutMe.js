import React from 'react'
import { Link } from 'gatsby'
import '../styles/about-me.css';
import spine from '../assets/spine.png'
import cv from '../assets/Emily-Connors-2020.pdf';

function AboutMe() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <img
                className="profile-photo"
                src={spine}
                alt="spine graphic"
                />
            </div>
            <div className="text-cont">
                <h2>About Me</h2>
                <p>"When she travels, the country is the tourist. She taught her dog to speak sign language. As the crow flies is how she tells it to. She can count to infinity. Her hips do lie."</p>
                <p>She is the most interesting woman in the world</p>
                <div className="links">
                    <div className="btn">
                        <Link to="/about">
                            Learn More
                        </Link>
                    </div>  
                    <div className="btn">
                        <a href={cv} target="_blank">Download CV</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
