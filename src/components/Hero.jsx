import React from "react";
import "./css/Hero.css";

const Hero = () => {
	return (
		<section
			className="HeroSection"
			id="home"
		>
			<div className="hero__wrapper">
				<div className="hero__content">
					<h1 className="hero__heading">
						Charlene Batiste, Software
						Engineer
					</h1>
					<h2 className="hero__subheading">
						Let's build something
						together.
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
