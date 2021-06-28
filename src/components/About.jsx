import "./css/About.css";
import headshot from "./assets/headshot.JPG";
import React from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


import {
	makeStyles,
	Grid,
	CardMedia,
} from "@material-ui/core/";
const useStyles = makeStyles({
	media: {
		borderRadius: "10%",
	},
});

const About = () => {
    AOS.init();
	const classes = useStyles();
	return (
		<div className="AboutSection" id="about">
			<div className="about__header" data-aos="zoom-in">
            <hr className="hr__styles" />
				<h1 className="heading">
					☽ About Me ☾
				</h1>
                <hr className="hr__styles" />
			</div>
            
			<Grid
				container
				className="about__content"
				spacing="2"
			>
				<Grid data-aos="fade-right"
					item
					className="grid__item img__container"
					xs={10}
					sm={8}
					md={4}
					lg={3}
				>
					<CardMedia
						className={classes.media}
						component="img"
						image={headshot}
					/>
				</Grid>
				<Grid
					item
					className="grid__item"
					xs={10}
					sm={10}
					md={7}
					lg={8}
				>
					<div className="paragraph para__1" data-aos="zoom-in">
						<p className="card__text">
							Hi. My name is
							Charlene Batiste and I
							am a Software Engineer
							with a passion for
							creating responsive
							products and clean
							designs oriented
							around the user
							experience.
						</p>
					</div>
					<div className="paragraph para__2" data-aos="zoom-in">
						<p className="card__text">
							I thrive in creative,
							team-centric
							environments where my
							previous work as a 911
							Communications Officer
							lends to a balanced
							approach to
							challenging
							situations.
						</p>
					</div>
					<div className="paragraph para__3" data-aos="zoom-in">
						<p className="card__text">
							Additional Info
						</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
