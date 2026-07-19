import type React from "react";

export default function Button(): React.JSX.Element {
	let incss = {
		color: "white",
		borderRadius: "20px"
	}
	return (
		<button style={incss}>Click me</button>
	)
}
