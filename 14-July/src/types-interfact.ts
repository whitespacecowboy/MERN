interface Obj {
	x: number;
	y?: number;
}

type numero = number
// interface numero number; // wrong

let uno: numero = 1;

let obj: Obj = {
	y: 24,
	x: 42
}

console.log(typeof obj)

let optional: Obj = { x: 424 }

console.log(optional)
console.log(obj)
console.log(uno)
