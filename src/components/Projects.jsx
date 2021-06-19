import React from "react";
import "./css/Projects.css";
import {
	Grid,
	CardMedia,
} from "@material-ui/core";

const Projects = () => {
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
					<Grid item xs={12}>
						<h1 className="project-title">
							Bookhub
						</h1>
					</Grid>
					<Grid item xs={12}>
						<div>
							<p>
								A full-stack
								application where
								book lovers can
								search books to
								add to their
								Bookshelf, create
								posts and interact
								with other users.
							</p>
							<div>
								<button>
									See Repo
								</button>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid container xs={12}>
					<Grid item xs={12}>
						<h1 className="project-title">
							The Healthful Pantry
						</h1>
					</Grid>
					<Grid item>
						<div>
							<p>
								The Healthful
								Pantry is a
								fullstack MERN app
								that strives to
								provide users with
								food allergies,
								intolerances and
								restrivcive diets
								a single place to
								find recipes that
								fit their
								nutritional needs.
							</p>
							<div>
								<button>
									See Repo
								</button>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid container xs={12}>
					<Grid item xs={12}>
						<h1 className="project-title">
							Floyd's Good Dog
						</h1>
					</Grid>
					<Grid item>
						<div>
							<p>
								A website built
								for a small
								business in
								Grovetown, GA.
								Floyd's Good Dog
								is a fully
								responsive website
								deisign to inform
								and generate
								clients for a
								family-owned doggy
								daycare
							</p>
							<div>
								<button>
									See Repo
								</button>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
		</section>
	);
};

export default Projects;
