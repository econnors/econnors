import React from 'react'
import { Link } from 'gatsby'
import '../styles/projects.css';
import oakland from '../assets/oakland.jpg'
import alabama from '../assets/alabama.jpg'
import skicity from '../assets/skicity.jpg'

function Hero() {
    return (
        <div className="work" id="work">
            <h3>My Work</h3>
            <p>Some examples of my work and experience</p>
            <div className="tiles">
                <div className="project">
                    <img className="project1" src={oakland} />
                </div>
                <div className="project">
                    <img className="project3" src={alabama} />
                </div>
                <div className="project">
                    <img className="project2" src={skicity} />
                </div>
            </div>
            <div className="btn">
                <Link to="/projects">See More</Link>
            </div>
        </div>
    )
}

export default Hero