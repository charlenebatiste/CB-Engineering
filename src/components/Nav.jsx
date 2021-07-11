import React from "react";
import "./css/Nav.css";

import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
	return (
		<div className="NavSection">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light navWrapper">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navbar-links" id="navbarTogglerDemo01">
                            <div>
                                <Link
                                    className="navLink hvr-grow nav-item"
                                    smooth
                                    to="#about"
                                >
                                    About Me
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="navLink hvr-grow nav-item"
                                    smooth
                                    to="#skills"
                                >
                                    Skills
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="navLink hvr-grow nav-item"
                                    id="logo"
                                    smooth
                                    to="#home"
                                >
                                    cb
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="navLink hvr-grow nav-item"
                                    smooth
                                    to="#projects"
                                >
                                    Projects
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className="navLink hvr-grow nav-item"
                                    smooth
                                    to="#contact"
                                >
                                    Contact Me
                                </Link>
                            </div>
                    </div>
                </div>
            </nav>
		</div>
	);
};

export default Nav;
