import "./css/About.css";
import headshot from "./assets/headshot.JPG";
import React from "react";

import {
	makeStyles,
	Card,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	cover: {
		width: "50vw",
	},
}));

export default function About() {
	const classes = useStyles();

	return (
		<div className="AboutSection">
			<Card className={classes.root}>
				<div className={classes.details}>
					<CardContent
						className={
							classes.content
						}
						id="cardWrapper"
					>
						<Typography
							component="h4"
							variant="h4"
						>
							About Me
						</Typography>
						<Typography className="card__text">
							I am a full-stack
							software engineer with
							a passion for creating
							responsive products
							and clean designs
							oriented around the
							user experience. I
							thrive in creative,
							team-centric
							environments where my
							previous work as a 911
							Communications Officer
							lends to a balanced
							approach to
							challenging
							situations. From my
							ability to determine
							problems to adjusting
							plans quickly I strive
							to develop elegant
							solutions out of
							stressful situations.
						</Typography>
					</CardContent>
				</div>
				<CardMedia
					className={classes.cover}
					image={headshot}
					title="Live from space album cover"
				/>
			</Card>
		</div>
	);
}
