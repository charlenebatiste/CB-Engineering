import React from "react";

import {
	Typography,
	Link,
} from "@material-ui/core";

const Nav = () => {
	return (
		<Typography className="navWrapper">
			<Link href="#" variant="body1">
				Link
			</Link>{" "}
			<Link href="#" variant="body1">
				Another Link
			</Link>{" "}
			<Link href="#" variant="body1">
				A Third Link
			</Link>{" "}
		</Typography>
	);
};

export default Nav;
