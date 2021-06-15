import React from "react";
import "./css/Hero.css";
import { Typography } from "@material-ui/core";

const Hero = () => {
	return (
		<section className="HeroSection">
			<Typography
				className="hero__content"
				variant="h1"
			>
				Hello. I'm Charlene Batiste and
				I'm a software engineer
			</Typography>
		</section>
	);
};

export default Hero;
