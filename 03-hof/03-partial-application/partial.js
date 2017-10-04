function sumAndMult(arr){
	const sum = arr.reduce((acc, ele) => acc + ele, 0)
	return (factor) => {
		const mult = sum * factor
		return (div) => {
			return mult/div
		}
	}
}
const sumArr = sumAndMult([1,2,3,4,5,6])(2)(2)