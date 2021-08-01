import React from "react";
import "./css/Projects.css";

import HoverVideoPlayer from "react-hover-video-player";

import bookhubReel from "./assets/bookhub-reel.mov";
import bookhubThumbnail from "./assets/bookhub-thumbnail.png";

import floydReel from "./assets/floyd-reel.mov";
import floydThumbnail from "./assets/fgd-thumbnail.png";

import healthfulReel from "./assets/healthful-pantry-reel.mov";
import healthfulThumbnail from "./assets/hp-thumbnail.png";

import compendmReel from "./assets/compendm-reel.mov";
import compendmThumbnail from "./assets/compendm-thumbnail.png";

import { Grid, Card } from "@material-ui/core";

import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
	AOS.init();
	return (
		<section
			className="ProjectWrapper"
			id="projects"
		>
			<div
				className="projects__header"
				data-aos="zoom-in"
			>
				<h1 className="heading">
					⚛︎ Projects ⚛︎
				</h1>
				<hr className="hr__styles-pj" />
			</div>
			<div className="animation__container ">
				<Grid
					container
					className="project__container projects__content"
					xs={12}
				>
					<Grid
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-duration="300"
						item
						className="grid__item"
						xs={10}
						md={6}
						lg={5}
					>
						<Card className="media__wrapper hvr-glow">
							<HoverVideoPlayer
								videoSrc={
									bookhubReel
								}
								pausedOverlay={
									<img
										src={
											bookhubThumbnail
										}
										alt="Bookhub Homepage of an animated woman reading a book and a list of what the user can do with the bookhub app"
										style={{
											// Make the image expand to cover the video's dimensions
											width: "100%",
											height: "100%",
											objectFit:
												"cover",
										}}
									/>
								}
								loadingOverlay={
									<div className="loading-spinner-overlay" />
								}
							/>
						</Card>
					</Grid>
					<Grid
						className="project__text"
						data-aos="fade-left"
						data-aos-offset="300"
						data-aos-duration="300"
						item
						xs={11}
						md={6}
						lg={7}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								<u>Bookhub</u>
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
								It is fully
								responsive and
								built with an EJS
								frontend and SQL
								backend.
							</p>
							<div className="project-stack">
								<h3>
									Tech Stack
								</h3>
								<p>
									EJS, Bootstrap
									v5.0, NodeJS,
									Postgres,
									Axios,
									Express,
									Sequelize,
									Bcrypt,
									Passport,
									Sessions
								</p>
							</div>
							<div className="project-button__container">
								<div className="btn hvr-outline-out">
									<a
										href="https://github.com/charlenebatiste/BookHub"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
								<div className="btn hvr-outline-out">
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
				<hr className="hr__styles-pj" />
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-duration="300"
						item
						className="grid__item"
						xs={10}
						md={6}
						lg={5}
					>
						<Card className="media__wrapper hvr-glow">
							<HoverVideoPlayer
								videoSrc={
									compendmReel
								}
								pausedOverlay={
									<img
										src={
											compendmThumbnail
										}
										alt="CompenDM Homepage of a large photo of dnd dice and an animated list of what the user can do with the bookhub app"
										style={{
											width: "100%",
											height: "100%",
											objectFit:
												"cover",
										}}
									/>
								}
								loadingOverlay={
									<div className="loading-spinner-overlay" />
								}
							/>
						</Card>
					</Grid>
					<Grid
						className="project__text"
						data-aos="fade-left"
						data-aos-offset="300"
						data-aos-duration="300"
						item
						xs={11}
						md={6}
						lg={7}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								<u>CompenDM</u>
							</h1>
						</Grid>
						<div className="project__content">
							<p>
								<em>CompenDM</em>{" "}
								is a full-stack
								django application
								built for TTRPG
								players as an
								online location to
								store their
								campaign notes.
							</p>
							<div className="project-stack">
								<h3>
									Tech Stack
								</h3>
								<p>
									django,
									Bootstrap
									v5.0,
									Animate.css
								</p>
							</div>
							<div className="project-button__container">
								<div className="btn hvr-outline-out">
									<a
										href="https://github.com/charlenebatiste/compenDM"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
								<div className="btn hvr-outline-out">
									<a
										href="https://compendm.herokuapp.com/"
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
				<hr className="hr__styles-pj" />
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-duration="300"
						className="grid__item"
						item
						xs={10}
						md={6}
						lg={5}
					>
						<Card className="media__wrapper hvr-glow">
							<HoverVideoPlayer
								videoSrc={
									healthfulReel
								}
								pausedOverlay={
									<img
										src={
											healthfulThumbnail
										}
										alt="Healthful Pantry Landing Page with tag line, a get started button and a bowl of salad topped with slice avocado."
										style={{
											width: "100%",
											height: "100%",
											objectFit:
												"cover",
										}}
									/>
								}
								loadingOverlay={
									<div className="loading-spinner-overlay" />
								}
							/>
						</Card>
					</Grid>
					<Grid
						className="project__text"
						data-aos="fade-left"
						data-aos-offset="300"
						data-aos-duration="300"
						item
						xs={11}
						md={6}
						lg={7}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								<u>
									The Healthful
									Pantry
								</u>
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
								This app was built
								in a team of 4 and
								my role was as a
								Frontend
								Developer.
							</p>
							<div className="project-stack">
								<h3>
									Tech Stack
								</h3>
								<p>
									React,
									Material-UI,
									Bootstrap
									v5.0, Express,
									Axios, NodeJS,
									jwtDecode
								</p>
							</div>
							<div className="project-button__container">
								<div className="btn hvr-outline-out">
									<a
										href="https://github.com/charlenebatiste/the-healthful-pantry"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
								<div className="btn">
									App Under
									Reconstruction
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
				<hr className="hr__styles-pj" />
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid
						data-aos="fade-right"
						data-aos-offset="300"
						data-aos-duration="300"
						className="grid__item"
						item
						xs={10}
						md={6}
						lg={5}
					>
						<Card className="media__wrapper hvr-glow">
							<HoverVideoPlayer
								videoSrc={
									floydReel
								}
								pausedOverlay={
									<img
										src={
											floydThumbnail
										}
										alt="Floyd God Dog homepage. Happy orange dog looking at the camera inside it's run framed by pawprints"
										style={{
											width: "100%",
											height: "100%",
											objectFit:
												"cover",
										}}
									/>
								}
								loadingOverlay={
									<div className="loading-spinner-overlay" />
								}
							/>
						</Card>
					</Grid>
					<Grid
						className="project__text"
						data-aos="fade-left"
						data-aos-offset="300"
						data-aos-duration="300"
						item
						xs={11}
						md={6}
						lg={7}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								<u>
									Floyd's Good
									Dog
								</u>
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
								designed to inform
								and generate
								clients for a
								family-owned doggy
								daycare.
							</p>
							<div className="project-stack">
								<h3>
									Tech Stack
								</h3>
								<p>
									HTML5, SASS,
									Javascript
								</p>
							</div>
							<div className="project-button__container">
								<div className="btn hvr-outline-out">
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
			{/* </div> */}
		</section>
	);
};

export default Projects;
