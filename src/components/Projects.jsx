import React from "react";
import "./css/Projects.css";
import bookhubReel from "./assets/bookhub-reel.mov";
import floydReel from "./assets/floyd-reel.mov";
import healthfulReel from "./assets/healthful-pantry-reel.mov";
import compendmReel from "./assets/compendm-reel.mov";
import {
	Grid,
	Card,
	CardMedia,
} from "@material-ui/core";

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Projects = () => {
    AOS.init();
	return (
		<section
			className="ProjectWrapper"
			id="projects"
		>
			<div className="projects__header" data-aos="zoom-in">
            <hr className="hr__styles-pj" />
				<h1 className="heading">
					Projects
				</h1>
                <hr className="hr__styles-pj" />
			</div>
			<div>
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="300"
						item
                        className="grid__item"
						xs={10}
						md={6}
						lg={5}
					>
						<Card className="media__wrapper hvr-glow">
							<CardMedia
								component="video"
								image={
									bookhubReel
								}
								// controls
								onMouseOver={(
									event
								) =>
									event.target.play()
								}
								onMouseOut={(
									event
								) =>
									event.target.pause()
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
						xs={12}
						md={6}
						lg={7}
					>
						<Grid item  xs={12}>
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
								with other users. It is fully responsive and built with an EJS frontend and SQL backend.
							</p>
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
				<Grid
					container
					className="project__container"
					xs={12}
				>
					<Grid data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-duration="300"
						item
                        className="grid__item"
						xs={10}
						md={6}
						lg={5}
					>
						<Card className="media__wrapper hvr-glow">
							<CardMedia
								component="video"
								image={
									compendmReel
								}
								// controls
								onMouseOver={(
									event
								) =>
									event.target.play()
								}
								onMouseOut={(
									event
								) =>
									event.target.pause()
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
						xs={12}
						md={6}
						lg={7}
					>
						<Grid item  xs={12}>
							<h1 className="project__title">
								<u>CompenDM</u>
							</h1>
						</Grid>
						<div className="project__content">
							<p>
								<em>CompenDM</em>{" "}
								is a full-stack
								django application built for TTRPG players as an online location to store their campaign notes.
							</p>
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
						<Card className="media__wrapper ">
                        <CardMedia
								component="video"
								image={
									healthfulReel
								}
								// controls
								onMouseOver={(
									event
								) =>
									event.target.play()
								}
								onMouseOut={(
									event
								) =>
									event.target.pause()
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
						xs={12}
						md={6}
						lg={7}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								<u>The Healthful
								Pantry</u>
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
								<div className="btn hvr-outline-out">
									<a
										href="https://github.com/charlenebatiste/the-healthful-pantry"
										className="btn__link"
									>
										View Repo
									</a>
								</div>
                                <div className="btn">
										App Under Reconstruction
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
							<CardMedia
								component="video"
								image={floydReel}
								onMouseOver={(
									event
								) =>
									event.target.play()
								}
								onMouseOut={(
									event
								) =>
									event.target.pause()
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
						xs={12}
						md={6}
						lg={7}
					>
						<Grid item xs={12}>
							<h1 className="project__title">
								<u>Floyd's Good Dog</u>
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
			{/* <div>
				<a href="#">See More</a>
			</div> */}
		</section>
	);
};

export default Projects;
