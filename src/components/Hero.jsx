import React from "react";
import "./css/Hero.css";
import 'animate.css'


const Hero = () => {

	return (
		<section
			className="HeroSection"
			id="home"
		>
			<div className="hero__wrapper ">
				<div className="hero__content">
					<h1 className="hero__heading animate__animated animate__fadeIn animate__delay-1s">
						Charlene Batiste, Software
						Engineer
					</h1>
					<h2 className="hero__subheading animate__animated animate__fadeIn animate__delay-2s">
						UX Inspired | Responsive Designs
					</h2>
				</div>
			</div>
		</section>
	);
};

export default Hero;
