import React from "react";
import "./css/About.css";
import headshot from "./assets/headshot.JPG";
import {
	Paper,
	Typography,
	makeStyles,
	Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
	},
}));

const About = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				container
				className="AboutSection"
				spacing={3}
			>
				<Grid item xs={9}>
					<Paper
						className={classes.paper}
					>
						<Typography
							variant="h4"
							className="about__header"
						>
							About Me
						</Typography>
						<Typography
							variant="h5"
							className="about__header"
						>
							<div>
								I am a full-stack
								software engineer
								with a passion for
								creating
								responsive
								products and clean
								designs oriented
								around the user
								experience. I
								thrive in
								creative,
								team-centric
								environments where
								my previous work
								as a 911
								Communications
								Officer lends to a
								balanced approach
								to challenging
								situations. From
								my ability to
								determine problems
								to adjusting plans
								quickly I strive
								to develop elegant
								solutions out of
								stressful
								situations.
							</div>
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={3}>
					<div className="aboutImage">
						<img
							className="aboutImage__content"
							src={headshot}
							alt="headshot"
						/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
