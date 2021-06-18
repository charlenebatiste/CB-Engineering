import "./css/Skill.css";

import React from "react";
import {
	makeStyles,
	Paper,
	Grid,
} from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
	},
}));

export default function Skills() {
	const classes = useStyles();

	return (
		<section
			className="SkillsSection"
			id="skills"
		>
			<div className="skills__header">
				<h1 className="heading">
					Technical Skills
				</h1>
			</div>
			<div className={classes.root}>
				<Grid container spacing={3}>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Front End
							<div>
								<ul>
									<li>HTML</li>
									<li>CSS</li>
									<li>
										Javascript
									</li>
									<li>
										Responsive
										Design
									</li>
									<li>
										Bootstrap
									</li>
									<li>
										Materialize
									</li>
									<li>React</li>
								</ul>
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Back-End
							<ul>
								<li>NodeJS</li>
								<li>Express</li>
								<li>SQL</li>
								<li>MongoDB</li>
								<li>AJAX</li>
								<li>
									RESTful
									Programming
								</li>
							</ul>
						</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper
							className={
								classes.paper
							}
						>
							Additional
							<ul>
								<li>Git</li>
								<li>Github</li>
								<li>Slack</li>

								<li>
									Object-Oriented
									Programming
								</li>
								<li>
									Wireframes
								</li>
								<li>Balsamiq</li>
								<li>
									LucidChart
								</li>
							</ul>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</section>
	);
}
