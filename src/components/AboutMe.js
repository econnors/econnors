import React from 'react'
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
                <p>Proin sed venenatis arcu, non scelerisque ex. Proin tincidunt lectus et diam cursus pulvinar. Nunc eros augue, tristique at maximus sed, scelerisque ut eros. Vivamus vel orci nisi. Maecenas vel est a orci dignissim aliquam ac nec est. In hac habitasse platea dictumst. Morbi felis ante, eleifend in diam vel, commodo dignissim nulla. Proin non turpis aliquam, suscipit ligula efficitur, eleifend justo. Cras orci erat, bibendum sit amet lectus in, lobortis maximus nunc.</p>
                <div className="links">
                    <div className="btn">
                        <a href={cv} target="_blank">Learn More</a>
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
