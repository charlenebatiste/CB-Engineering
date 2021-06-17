import "./css/About.css";
import headshot from "./assets/headshot.JPG";
import React from "react";

import {
	Grid,
	Typography,
	CardMedia,
} from "@material-ui/core/";

export default function About() {
	return (
		<div
			className="AboutSection"
			id="cardWrapper"
		>
			<div className="about__header">
				<Typography
					component="h4"
					variant="h4"
				>
					About Me
				</Typography>
			</div>
			<Grid container>
				<Grid item xs={12} sm={6} md={4}>
					<CardMedia
						component="img"
						image={headshot}
					/>
					{/* <img src={headshot} /> */}
				</Grid>
				<Grid item xs={12} sm={6}>
					<Typography
						className="card__text"
						component="p"
					>
						I am a full-stack software
						engineer with a passion
						for creating responsive
						products and clean designs
						oriented around the user
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
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
}
