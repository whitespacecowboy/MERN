let IntArray: number[] = []
let StringArray: string[] = []

// Statically typed function
// function fillArray(arr: number[], n: number, len: number): void {
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = n
// 	}
// }

// Generic statically typed function
// function fillArray<DataType> (arr: DataType[], n: DataType, len: number): void {
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = n
// 	}
// }

// Generic statically typed function using arrow notation
// const fillArray= <DataType> (arr: DataType[], n: DataType, len: number): void => {
// 	for (let i = 0; i < len; i++) {
// 		arr[i] = n
// 	}
// }

// const fillArray = <T> (x: T): T => {
// 	return x
// }

// const fillArray: void = (x: number) => {
// 	console.log('fill array')
// 	console.log(x)
// }

// console.log(fillArray(10))
// console.log(fillArray("string"))

// function testAny(value: any): any {
// 	value += 10
// 	return "Works"
// }

// console.log(testAny(10))


// fillArray(IntArray, 0, 10)
// fillArray<string>(StringArray, "Yellow", 10)

// console.log(IntArray, StringArray)
