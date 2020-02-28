import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="top-nav" id="navbar">
                <div className="nav-content">
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="AboutMe"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About Me
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="Spaceship"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Project Magic Spaceship
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="Projects"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Work
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}