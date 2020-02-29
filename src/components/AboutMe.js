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
                <p>Growing up in Boston (until age 7) and Colorado, I was a really active kid, running and playing soccer, skiing and snowboarding. But when I started high school, I started getting slower and weaker, and in my senior year I was diagnosed with Spinal Muscular Atrophy (SMA), a debilitating nerve disease. Now, I use a wheelchair to get around - I can still walk, but it's a struggle.</p>
                <p>Bummer, but there is some good news.</p>
                <p>First, my disease has helped me find my best career path. I've always liked math, science, and technology, and I'm good at problem-solving. As my SMA has progressed, I've gradually shifted away from the hospitality industry (which requires a lot of running around) to web development - and I love it. Second, my prognosis may actually be changing. I've been taking a new drug that seems to have arrested my decline, and I've essentially stabilized since I started the treatments roughly two years ago. So I'm not skiing or boarding, at least not yet, but I can dream again.</p>
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
