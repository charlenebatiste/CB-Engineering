import React from "react";

import {
	Typography,
	Link,
} from "@material-ui/core";

const Nav = () => {
	return (
		<Typography className="navWrapper">
			<Link href="/" variant="body1">
				Home
			</Link>{" "}
			<Link href="/about" variant="body1">
				About Me
			</Link>{" "}
			<Link href="/skills" variant="body1">
				Skills
			</Link>{" "}
			<Link
				href="/projects"
				variant="body1"
			>
				Projects
			</Link>{" "}
			<Link
				href="/projects"
				variant="body1"
			>
				Contact Me
			</Link>{" "}
		</Typography>
	);
};

export default Nav;
