import React from "react";
import {
	makeStyles,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	Paper,
	Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	cardroot: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(1),
	},
}));

const Projects = () => {
	const classes = useStyles();

	function FormRow() {
		return (
			<React.Fragment>
				<Grid item xs={4}>
					<Paper
						className={classes.paper}
					>
						<Card
							className={
								classes.cardroot
							}
						>
							<CardActionArea>
								<CardMedia
									className={
										classes.media
									}
									image=""
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										Bookhub
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
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
								</CardContent>
							</CardActionArea>
							<CardActions>
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
							</CardActions>
						</Card>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper
						className={classes.paper}
					>
						<Card
							className={
								classes.cardroot
							}
						>
							<CardActionArea>
								<CardMedia
									className={
										classes.media
									}
									image=""
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										The
										Healthful
										Pantry
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
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
								</CardContent>
							</CardActionArea>
							<CardActions>
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
							</CardActions>
						</Card>
					</Paper>
				</Grid>
				<Grid item xs={4}>
					<Paper
						className={classes.paper}
					>
						<Card
							className={
								classes.cardroot
							}
						>
							<CardActionArea>
								<CardMedia
									className={
										classes.media
									}
									image=""
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="h2"
									>
										Floyd's
										Good Dog
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
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
								</CardContent>
							</CardActionArea>
							<CardActions>
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
							</CardActions>
						</Card>
					</Paper>
				</Grid>
			</React.Fragment>
		);
	}

	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid
					container
					item
					xs={12}
					spacing={3}
				>
					<FormRow />
				</Grid>
			</Grid>
		</div>
	);
};

export default Projects;
