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

class Index extends React.Component {
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
                    <p>I am currently working as a <b>Lead CMS Web Developer</b> at <Link to="https://www.simpleview.com/">Simpleview</Link>, a company that builds marketing websites for DMOs (Destination Marketing Organizations). There, I have worked on over 150 destination websites from hotels sites such as <Link to="https://www.napariverinn.com/">Napa River Inn</Link> to large sites for countries, such as <Link to="https://www.visitnorway.com/">Visit Norway</Link>. Please see my projects page to see just a few of the builds I have been most proud to work on.</p>
                    <p>Outside of work I enjoy relaxing and spening time with my above average dog, Don Rico Suave. He is a mixed bread rescue, and professional begger, who found my family on a Dominican Republic holiday vacation. He now enjoys two homes, enless treats, sleeping under the covers, and working as my service dog.</p>
                    <p>I am also pasionate about helping people with disabilies like me. In highschool I was diagnosed with Spinal Muscular Atrophy (SMA), a debilitating nerve disease and my muscles started to slowly get weaker. As an athlete it was difficult to come to terms with this new reality. Now, I use a wheelchair to get around -- I can still walk some but it's a struggle. Out of this challenge <Link to="www.magicspaceship.org">Project Magic Spaceship</Link> tookoff. With the help of friends and family I set off to do something too difficult for me to do alone because of my handicap, and this is something I want to help others like me to be able to do.</p>
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

export default Index