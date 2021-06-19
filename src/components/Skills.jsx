import "./css/Skill.css";

import React from "react";
import {
	makeStyles,
	Grid,
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
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
				<Grid
					container
					className={classes.root}
					spacing={4}
				>
					<Grid
						className="paper__content"
						item
						xs={10}
						sm={8}
						md={4}
					>
						<h2 className="paper__heading">
							Front End
						</h2>
						<div>
							<ul className="paper__list">
								<li>HTML</li>
								<li>CSS</li>
								<li>
									Javascript
								</li>
								<li>
									Responsive
									Design
								</li>
								<li>Bootstrap</li>
								<li>
									Materialize
								</li>
								<li>React</li>
							</ul>
						</div>
					</Grid>
					<Grid
						className="paper__content"
						item
						xs={10}
						sm={8}
						md={4}
					>
						<h2 className="paper__heading">
							Back-End
						</h2>
						<ul className="paper__list">
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
					</Grid>
					<Grid
						className="paper__content"
						item
						xs={10}
						sm={8}
						md={4}
					>
						<h2 className="paper__heading">
							Additional
						</h2>
						<ul className="paper__list">
							<li>Git</li>
							<li>Github</li>
							<li>Slack</li>

							<li>
								Object-Oriented
								Programming
							</li>
							<li>Wireframes</li>
							<li>Balsamiq</li>
							<li>LucidChart</li>
						</ul>
					</Grid>
				</Grid>
			</div>
		</section>
	);
}
