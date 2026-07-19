import type React from "react";

export default function DisplayFood(): React.JSX.Element {
	const list = ["Apple", "Organge", "Banana"]
	return (
		<ol>
			{list.map(i => <li>{i}</li>)}
		</ol>
	)
}
