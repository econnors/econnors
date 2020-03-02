import React from 'react'
import { Link, graphql } from 'gatsby'
import Hero from '../components/Hero';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab,far)
import '../styles/shared.css';
import '../styles/about-page.css';

class About extends React.Component {
    render() {
        const { data } = this.props

        return (
            <div className="page-content" id="about-page">
                <section class="hero">
                    <div class="top-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Projects</Link></li>
                        </ul>
                    </div>
                    <div class="logo">
                        <h1>The Real Story</h1>
                    </div>
                </section>
                <div className="inner">
                    <p>Hi, my name is Emily and I am website developer from Evergreen, Colorado.</p>
                    <p>I am currently working as <b>Lead CMS Web Developer</b> at <a href="https://www.simpleview.com/" target="_blank">Simpleview</a>, a company that builds marketing websites for DMOs (Destination Marketing Organizations). At Simpleview, I have worked on over 150 destination websites for clients ranging from small hotels (<a to="https://www.napariverinn.com/" target="_blank">Napa River Inn</a>) to entire countries,  (<a href="https://www.visitnorway.com/" target="_blank">Visit Norway</a>). Please see my projects page for examples of my builds.</p>
                    <p>Outside of work, I enjoy spening time with my above-average dog, Rico, a mixed bread rescue from the Dominican Republic, a former professional begger who now earns his treats as my service dog.</p>
                    <p>I'm also passionate about helping people with disabilities. After a very active and athletic childhood, I was diagnosed with Spinal Muscular Atrophy (SMA), a debilitating nerve disease, when I was in high school and since then I have struggled with the increasing muscle weakness that SMA entails. Now, I use a wheelchair to get around -- I can still walk some but it's a struggle. However, this challenge has helped steer me to my career as a developer and has spawned ideas like <a href="https://magicspaceship.org/" target="_blank">Project Magic Spaceship</a> a coordinated effort with friends and family that let me accomplish something my disability would never have allowed me to do on my own. I sincerely hope to share that experience with others like me.</p>
                </div>
                <div className="footer-section" id="Contact">
                    <h3>Contact Me</h3>
                    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <input type="hidden" name="form-name" value="contact" />
                        <p hidden>
                        <label>
                            Don’t fill this out: <input name="bot-field"/>
                        </label>
                        </p>
                        <input type="email" name="email" placeholder="E-mail" required />
                        <input type="submit" value="Submit" />
                        <textarea name="message" placeholder="Message..." required></textarea>
                    </form>
                    <div className="social-icons">
                        <a href="mailto:ejconnors90@gmail.com?Subject=Hello%20Emily" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['far', 'envelope']} />
                        </a>
                        <a href="https://www.linkedin.com/in/emilyjconnors/" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                        <a href="https://github.com/emilyjconnors" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href="https://www.facebook.com/e.conn90" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                        <a href="https://www.instagram.com/e.conn90/" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About