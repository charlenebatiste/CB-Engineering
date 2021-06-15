import React from "react";
import "./css/Skill.css";

const Skill = () => {
	return (
		<section className="skillWrapper">
			<h1>Skills</h1>
			<div>
				Programming Languages: HTML, CSS3,
				Javascript
			</div>
			<div>
				Libraries and Frameworks:
				Bootstrap, Node, Express, React,
				Sequelize, Mongoose
			</div>
			<div>
				Databases: Postgres, SQL, MongoDB
			</div>
			<div>
				{" "}
				Additional Skills: Git, Github,
				Slack, Responsive Design,
				Wireframes, Balsamiq, LucidChart,
				Object-Oriented Programming, AJAX,
				REST
			</div>
		</section>
	);
};

export default Skill;
