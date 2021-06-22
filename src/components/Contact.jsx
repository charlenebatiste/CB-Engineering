import "./css/Contact.css";
import github from "./assets/github-logo.png";
import linkedin from "./assets/linkedin-logo.png";
import React from "react";

const Contact = () => {
	return (
		<section
			className="ContactSection"
			id="contact"
		>
			<div className="about__header">
				<h1 className="heading">
					☽ Contact Me ☾
				</h1>
			</div>
			<div className="icon__items">
				<a href="https://github.com/charlenebatiste">
					<img
						className="github__image"
						src={github}
					/>
				</a>
				<a href="https://www.linkedin.com/in/charlene-batiste/">
					<img
						className="linkedin__image"
						src={linkedin}
					/>
				</a>
			</div>
		</section>
	);
};

export default Contact;
