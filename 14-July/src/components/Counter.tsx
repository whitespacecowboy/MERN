import { useState,useRef } from "react";

let a = 0;
export default function App() {
	const ref = useRef(0);
	const [state, setState] = useState<number>(0)

	const firstClick = () => {
		a += 2;
		ref.current += 2;
		console.log('a', a);
		console.log('ref', ref);
	}

	const secondClick = () => {
		setState(x => ++x);
	}

	return (
		<div className="App">
			<h1>{a}</h1>
			<h2>{ref.current}</h2>
			<h3>{state}</h3>
			<button onClick={firstClick}>First Click</button>
			<button onClick={secondClick}>Second Click</button>
		</div>
	);
}
