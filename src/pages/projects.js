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

class Projects extends React.Component {
    render() {
        const { data } = this.props

        return (
            <div className="page-content" id="about-page">
                <section class="hero">
                    <div class="top-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Me</Link></li>
                        </ul>
                    </div>
                    <div class="logo">
                        <h1>Projects</h1>
                    </div>
                </section>
                <div className="inner">
                    
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

export default Projects