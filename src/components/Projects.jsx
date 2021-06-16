import React from "react";
import {
	makeStyles,
	Button,
	Grid,
	Paper,
	Typography,
	ButtonBase,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: "auto",
		maxWidth: 500,
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: "auto",
		display: "block",
		maxWidth: "100%",
		maxHeight: "100%",
	},
}));

export default function ComplexGrid() {
	const classes = useStyles();

	return (
		<section
			className="ProjectWrapper"
			id="projects"
		>
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<ButtonBase
								className={
									classes.image
								}
							>
								<img
									className={
										classes.img
									}
									alt="complex"
									src="/static/images/grid/complex.jpg"
								/>
							</ButtonBase>
						</Grid>
						<Grid item sm container>
							<Grid
								item
								xs
								container
								direction="column"
								spacing={2}
							>
								<Grid item xs>
									<Typography
										gutterBottom
										variant="subtitle1"
									>
										Bookhub
									</Typography>
									<Typography
										variant="body2"
										gutterBottom
									>
										A
										full-stack
										application
										where book
										lovers can
										search
										books to
										add to
										their
										Bookshelf,
										create
										posts and
										interact
										with other
										users.
									</Typography>
								</Grid>
								<Grid item>
									<Button
										size="small"
										color="primary"
									>
										See Repo
									</Button>
									<Button
										size="small"
										color="primary"
									>
										Visit Live
										Site
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<ButtonBase
								className={
									classes.image
								}
							>
								<img
									className={
										classes.img
									}
									alt="complex"
									src="/static/images/grid/complex.jpg"
								/>
							</ButtonBase>
						</Grid>
						<Grid item sm container>
							<Grid
								item
								xs
								container
								direction="column"
								spacing={2}
							>
								<Grid item xs>
									<Typography
										gutterBottom
										variant="subtitle1"
									>
										The
										Healthful
										Pantry
									</Typography>
									<Typography
										variant="body2"
										gutterBottom
									>
										The
										Healthful
										Pantry is
										a
										fullstack
										MERN app
										that
										strives to
										provide
										users with
										food
										allergies,
										intolerances
										and
										restrivcive
										diets a
										single
										place to
										find
										recipes
										that fit
										their
										nutritional
										needs.
									</Typography>
								</Grid>
								<Grid item>
									<Button
										size="small"
										color="primary"
									>
										See Repo
									</Button>
									<Button
										size="small"
										color="primary"
									>
										Visit Live
										Site
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<ButtonBase
								className={
									classes.image
								}
							>
								<img
									className={
										classes.img
									}
									alt="complex"
									src="/static/images/grid/complex.jpg"
								/>
							</ButtonBase>
						</Grid>
						<Grid item sm container>
							<Grid
								item
								xs
								container
								direction="column"
								spacing={2}
							>
								<Grid item xs>
									<Typography
										gutterBottom
										variant="subtitle1"
									>
										Floyd's
										God Dog
									</Typography>
									<Typography
										variant="body2"
										gutterBottom
									>
										A website
										built for
										a small
										business
										in
										Grovetown,
										GA.
										Floyd's
										Good Dog
										is a fully
										responsive
										website
										deisign to
										inform and
										generate
										clients
										for a
										family-owned
										doggy
										daycare
									</Typography>
								</Grid>
								<Grid item>
									<Button
										size="small"
										color="primary"
									>
										See Repo
									</Button>
									<Button
										size="small"
										color="primary"
									>
										Visit Live
										Site
									</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</section>
	);
}
