import React from "react";
import "./css/Nav.css";

import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
	return (
		<div className="NavSection">
			<div className="navWrapper">
				<div>
					<Link
						className="navLink hvr-grow"
						smooth
						to="#about"
					>
						About Me
					</Link>
				</div>
				<div>
					<Link
						className="navLink hvr-grow"
						smooth
						to="#skills"
					>
						Skills
					</Link>
				</div>
				<div>
					<Link
						className="navLink hvr-grow"
						id="logo"
						smooth
						to="#home"
					>
						cb
					</Link>
				</div>
				<div>
					<Link
						className="navLink hvr-grow"
						smooth
						to="#projects"
					>
						Projects
					</Link>
				</div>
				<div>
					<Link
						className="navLink hvr-grow"
						smooth
						to="#contact"
					>
						Contact Me
					</Link>{" "}
				</div>
			</div>
		</div>
	);
};

export default Nav;
