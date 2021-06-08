import {
	makeStyles,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core/";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

const Project = (props) => {
	const classes = useStyles();
	return (
		<section className="projectWrapper">
			<h1>My Projects</h1>
			<div className="projectExamples">
				{/* will need to be display: flex */}
				<Card className={classes.root}>
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
								A full-stack
								application where
								book lovers can
								search books to
								add to their
								Bookshelf, create
								posts and interact
								with other users.
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
							Visit Live Site
						</Button>
					</CardActions>
				</Card>
				<Card className={classes.root}>
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
								The Healthful
								Pantry
							</Typography>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
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
							Visit Live Site
						</Button>
					</CardActions>
				</Card>
			</div>
		</section>
	);
};

export default Project;
