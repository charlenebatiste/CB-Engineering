import React from "react";
import "./css/Projects.css";
import placeholder from "./assets/img.png";
import {
	Grid,
	Card,
	CardMedia,
	makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	// media: {
	// 	height: 140,
	// },
});

const Projects = () => {
	const classes = useStyles();

	return (
		<section
			className="ProjectWrapper"
			id="projects"
		>
			<div className="projects__header">
				<h1 className="heading">
					Projects
				</h1>
			</div>
			<div>
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
					>
						<Card
							className={
								classes.root
							}
						>
							<CardMedia
								component="img"
								alt="Bookhub Image"
								height="250"
								image={
									placeholder
								}
							/>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={8}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								Bookhub
							</h1>
						</Grid>
						<div className="project__content">
							<p>
								<em>Bookhub</em>{" "}
								is a full-stack
								application where
								book lovers can
								search books to
								add to their
								Bookshelf, create
								posts and interact
								with other users.
							</p>
							<div className="project-button__container">
								<a
									href="https://github.com/charlenebatiste/BookHub"
									className="btn"
								>
									View Repo
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
					>
						<Card
							className={
								classes.root
							}
						>
							<CardMedia
								component="img"
								alt="Bookhub Image"
								height="250"
								image={
									placeholder
								}
							/>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={8}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								The Healthful
								Pantry
							</h1>
						</Grid>
						<div className="project__content">
							<p>
								<em>
									The Healthful
									Pantry
								</em>{" "}
								is a fullstack
								MERN app that
								strives to provide
								users with food
								allergies,
								intolerances and
								restrictive diets
								a single place to
								find recipes that
								fit their
								nutritional needs.
							</p>
							<div className="project-button__container">
								<a
									href="https://github.com/charlenebatiste/the-healthful-pantry"
									className="btn"
								>
									View Repo
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid
						item
						xs={12}
						md={6}
						lg={4}
					>
						<Card
							className={
								classes.root
							}
						>
							<CardMedia
								component="img"
								alt="Bookhub Image"
								height="250"
								image={
									placeholder
								}
							/>
						</Card>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						lg={8}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								Floyd's Good Dog
							</h1>
						</Grid>
						<div className="project__content">
							<p>
								<em>
									Floyd's Good
									Dog
								</em>{" "}
								was a website
								built for a
								family-owned and
								operated business
								in Grovetown, GA.
								Floyd's Good Dog
								is a fully
								responsive website
								deisign to inform
								and generate
								clients for a
								family-owned doggy
								daycare
							</p>
							<div className="project-button__container">
								<a
									href="https://github.com/charlenebatiste/floyds_good_dog"
									className="btn"
								>
									View Repo
								</a>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
		</section>
	);
};

export default Projects;
