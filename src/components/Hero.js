import React from 'react'
import '../styles/hero.css';
import succulent from '../assets/succulent.png'
import NavBar from '../components/NavBar'

function Hero() {
    return (
        <div className="hero">
            <NavBar />
            <div className="logo">
                <h1>e.conn</h1>
            </div>
            <div className="title">
                <ul>
                    <li>front end web developer</li>
                    <li>accessibility explorer</li>
                </ul>
            </div>
            <img className="succulent-photo" src={succulent} />
        </div>
    )
}

export default Hero