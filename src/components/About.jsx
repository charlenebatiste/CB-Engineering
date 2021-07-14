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
		borderRadius: "5%",
        alignSelf: "center"
	},
    root: {
        width: "85%",
        margin: "auto",
        boxShadow: "0 0 8px 8px #e9e9e9 inset;"
    }
});

const About = () => {
    AOS.init();
	const classes = useStyles();
	return (
		<div className="AboutSection" id="about">
			<Grid
				container
				className={classes.root}
                id = "about__content"
				spacing="2"
			>
				<Grid 
					item
					className="grid__item img__container"
					xs={10}
					sm={6}
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
					className="grid__item paragraph_wrapper"
					xs={10}
					sm={10}
					md={10}
					lg={8}
				>
                    <div className="about__header" >
            <hr className="hr__styles" />
				<h1 className="heading">
					☽ About Me ☾
				</h1>
                <hr className="hr__styles" />
			</div>
					<div className="paragraph">
						<p className="card__text">
                        My name is
							Charlene Batiste and I
							am a Software Engineer
							with a passion for
							creating responsive
							products and clean
							designs oriented
							around the user
							experience. Whether that's through writing, building a piece of art by hand or creating tales through collaborative story-telling in a table-top role playing game I am driven by a need to create and once introduced to the world of web-development discovered a way to create applications that could help people. I thrive in creative,
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
				</Grid>
			</Grid>
		</div>
	);
};

export default About;
