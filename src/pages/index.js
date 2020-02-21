import React from 'react'
import { Link, graphql } from 'gatsby'

import AboutMe from '../components/AboutMe'
import Hero from '../components/Hero'
import SpaceshipCallout from '../components/SpaceshipCallout'
import Projects from '../components/Projects'

import '../styles/shared.css';

class Index extends React.Component {
    render() {
        const { data } = this.props

        return (
            <div className="page-content">
                <Hero />
                <AboutMe id="AboutMe"/>
                <SpaceshipCallout id="Spaceship"/>
                <Projects id="Projects"/>
                <div className="footer-section" id="Contact">
                    <h3>Contact Me</h3>
                    <div className="social-icons">
                        <a href="" target="_blank" className="social-icon">
                            <i className="far fa-envelope"></i>
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" target="_blank" className="social-icon">
                            <i className="fab fa-instagram"></i>
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
