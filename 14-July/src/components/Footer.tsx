import type React from "react";

export default function Footer(): React.JSX.Element {
	return (
		<footer>
		<p>&copy; {new Date().getFullYear()}</p>
		</footer>
	)
}
