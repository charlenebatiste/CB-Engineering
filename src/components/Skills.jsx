import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCodeBranch, faArchive } from '@fortawesome/free-solid-svg-icons'

import "./css/Skill.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

import React from "react";
import {
	makeStyles,
	Grid,
    Card,
    CardContent
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
        justifyContent: 'space-around',
	},
    cardroot: {
        height: "100%",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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
			<div>
				<div className="skills__header">
					<h1 className="heading" data-aos="flip-right">
						✧ Technical Skills ✧
					</h1>
                    <hr className="hr__styles" />
				</div>
                
				<div className={classes.root}>
					<Grid
						container
						className={classes.root}
						spacing={4}
					>
						<Grid
							
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="100" 
							item
							xs={10}
							sm={10}
							md={4}
						>
                            <Card className={classes.cardroot} variant="outlined" id="cardRoot">
                                <CardContent>
                                <div className="iconContainer">
                                <FontAwesomeIcon icon={faCode} size = '2x'/>
                                </div>
                                <h2 className="paper__heading" gutterBottom>
								Front-End
							</h2>
                            <hr className="hr__styles" />
                            <div className="paper__text">
								HTML ✧ CSS ✧
								Javascript ✧
								Responsive Design
								✧ Bootstrap ✧
								Materialize ✧
								React ✧ Django  
							</div>
                                </CardContent>
                            </Card>
						</Grid>
						<Grid
							className="paper__content"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="100"
							item
							xs={10}
							sm={10}
							md={4}
						>
                            <Card className={classes.cardroot} variant="outlined" id="cardRoot">
                                <CardContent>
                                <div className="iconContainer">
                                <FontAwesomeIcon icon={faArchive} size = '2x'/>
                                </div>
                                <h2 className="paper__heading" gutterBottom>
								Back-End
							</h2>
                            <hr className="hr__styles" />
                            <div className="paper__text">
                            NodeJS ✧ Express ✧
								SQL ✧ MongoDB ✧ Django ✧ 
								AJAX ✧ RESTful
								Programming
							</div>
                                </CardContent>
                            </Card>
						</Grid>
						<Grid
							className="paper__content"
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="100"
							item
							xs={10}
							sm={10}
							md={4}
						>
                            <Card className={classes.cardroot} variant="outlined" id="cardRoot">
                                <CardContent>
                                <div className="iconContainer">
                                <FontAwesomeIcon icon={faCodeBranch} size = '2x'/>
                                </div>
                                <h2 className="paper__heading" gutterBottom>
								Additional
							</h2>
                            <hr className="hr__styles" />
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
                                </CardContent>
                            </Card>
						</Grid>
					</Grid>
				</div>
			</div>
		</section>
	);
}
