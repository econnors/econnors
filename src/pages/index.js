import React from 'react'
import { Link, graphql } from 'gatsby'
import { Element } from "react-scroll";

import AboutMe from '../components/AboutMe';
import Hero from '../components/Hero';
import SpaceshipCallout from '../components/SpaceshipCallout';
import Projects from '../components/Projects';
import WebFont from 'webfontloader';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab,far)
import '../styles/shared.css';

WebFont.load({
  google: {
    families: ["Josefin+Sans:100,400,600","Roboto:100,400,700&display=swap"]
  }
});

class Index extends React.Component {
    render() {
        const { data } = this.props

        return (
            <div className="page-content">
                <Hero />
                <Element name="AboutMe"><AboutMe/></Element>
                <SpaceshipCallout id="Spaceship"/>
                <Projects id="Projects"/>
                <div className="footer-section" id="Contact">
                    <h3>Contact Me</h3>
                    <form  method="POST">
                        <input type="email" name="mail" placeholder="E-mail" required />>
                        <input type="submit" value="Submit" />
                        <textarea name="message" placeholder="Message..." required></textarea>
                    </form>
                    <div className="social-icons">
                        <a href="" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['far', 'envelope']} />
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'github']} />
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <FontAwesomeIcon icon={['fab', 'instagram']} />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
