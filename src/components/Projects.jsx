import React from "react";
import "./css/Projects.css";
import bookhubReel from "./assets/bookhub-reel.mov";
import floydReel from "./assets/floyd-reel.mov";
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
								component="video"
								image={
									bookhubReel
								}
								controls
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
								<div className="btn">
									<a
										href="https://github.com/charlenebatiste/BookHub"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
								<div className="btn">
									<a
										href="https://a-book-hub.herokuapp.com/"
										className="btn__link"
									>
										Visit Live
										App
									</a>
								</div>
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
								alt="healthful pantry image"
								height="250"
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
								<div className="btn">
									<a
										href="https://github.com/charlenebatiste/the-healthful-pantry"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
								<div className="btn">
									<a
										href="#"
										className="btn__link"
									>
										Visit Live
										App
									</a>
								</div>
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
								component="video"
								image={floydReel}
								controls
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
								<div className="btn">
									<a
										href="https://github.com/charlenebatiste/floyds_good_dog"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
			{/* <div>
				<a href="#">See More</a>
			</div> */}
		</section>
	);
};

export default Projects;
