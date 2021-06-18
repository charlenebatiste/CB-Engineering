import "./css/About.css";
import headshot from "./assets/headshot.JPG";
import React from "react";

import {
	makeStyles,
	Grid,
	CardMedia,
} from "@material-ui/core/";
const useStyles = makeStyles({
	media: {
		// height: "80%",
		// objectFit: "scale-down",
		borderRadius: "10%",
	},
});

const About = () => {
	const classes = useStyles();
	return (
		<div className="AboutSection" id="about">
			<div className="about__header">
				<h1 className="heading">
					About Me
				</h1>
			</div>
			<Grid
				container
				className="about__content"
				spacing="2"
			>
				<Grid
					item
					className="grid__item"
					xs={10}
					sm={5}
					md={4}
					lg={3}
				>
					<CardMedia
						className={classes.media}
						component="img"
						image={headshot}
					/>
				</Grid>
				<Grid
					item
					className="grid__item"
					xs={12}
					sm={7}
					md={8}
					lg={9}
				>
					<p className="card__text">
						Hi. My name is Charlene
						Batiste and I am a
						Software Engineer with a
						passion for creating
						responsive products and
						clean designs oriented
						around the user
						experience. I thrive in
						creative, team-centric
						environments where my
						previous work as a 911
						Communications Officer
						lends to a balanced
						approach to challenging
						situations. From my
						ability to determine
						problems to adjusting
						plans quickly I strive to
						develop elegant solutions
						out of stressful
						situations.
					</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
