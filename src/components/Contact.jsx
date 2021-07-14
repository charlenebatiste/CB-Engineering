import "./css/Contact.css";
import github from "./assets/github-logo.png";
import linkedin from "./assets/linkedin-logo.png";
import cvIcon from "./assets/resumeicon.png"

import React from "react";

const Contact = () => {
	return (
		<section
			className="ContactSection"
			id="contact"
		>
			<div className="contact__header" data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
				<h1 className="heading">
					☽ Contact Me ☾
				</h1>
                <p>Click the links to get in touch and let's build something together.</p>
			</div>
			<div className="icon__items">
				<a href="https://github.com/charlenebatiste">
					<img
						className="github__image hvr-float-shadow"
						src={github}
					/>
				</a>
				<a href="https://www.linkedin.com/in/charlene-batiste/">
					<img
						className="linkedin__image hvr-float-shadow"
						src={linkedin}
					/>
				</a>
				<a href="https://docs.google.com/document/d/1ei1KeqwVvXPRMUjc0oh-kIPvla05KGIGtUR0ZE8r2N4/edit?usp=sharing">
					<img
						className="cv__image hvr-float-shadow"
						src={cvIcon}
					/>
				</a>
			</div>
		</section>
	);
};

export default Contact;
