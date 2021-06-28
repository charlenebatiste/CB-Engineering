import "./css/Skill.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import React from "react";
import {
	makeStyles,
	Grid,
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
        justifyContent: 'space-around'
	},
}));

export default function Skills() {
    AOS.init();
	const classes = useStyles();

	return (
		<section
			className="SkillsSection"
			id="skills"
		>
			<div className="skills__content" >
				<div className="skills__header">
					<h1 className="heading" data-aos="flip-right">
						✧ Technical Skills ✧
					</h1>
				</div>
				<div className={classes.root}>
					<Grid
						container
						className={classes.root}
						spacing={4}
					>
						<Grid
							className="paper__content"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="150"
                            data-aos-offset="0" 
							item
							xs={10}
							sm={10}
							md={4}
						>
							<h2 className="paper__heading">
								Front End
							</h2>
							<div className="paper__text">
								HTML ✧ CSS ✧
								Javascript ✧
								Responsive Design
								✧ Bootstrap ✧
								Materialize ✧
								React
							</div>
						</Grid>
						<Grid
							className="paper__content"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="150"
                            data-aos-offset="0"
							item
							xs={10}
							sm={10}
							md={4}
						>
							<h2 className="paper__heading">
								Back-End
							</h2>
							<div className="paper__text">
								NodeJS ✧ Express ✧
								SQL ✧ MongoDB ✧
								AJAX ✧ RESTful
								Programming
							</div>
						</Grid>
						<Grid
							className="paper__content"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="150"
                            data-aos-offset="0"
							item
							xs={10}
							sm={10}
							md={4}
						>
							<h2 className="paper__heading">
								Additional
							</h2>
							<div className="paper__text">
								Git ✧ Github ✧
								Slack ✧
								Object-Oriented
								Programming ✧
								Wireframes ✧
								Balsamiq ✧
								LucidChart ✧
								Heroku
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		</section>
	);
}
